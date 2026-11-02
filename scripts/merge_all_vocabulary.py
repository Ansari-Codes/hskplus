import json

with open('scripts/hsk1_extracted.json', 'r', encoding='utf-8') as f:
    hsk1_raw = json.load(f)

with open('scripts/hsk2_extracted.json', 'r', encoding='utf-8') as f:
    hsk2_raw = json.load(f)

with open('scripts/hsk3_extracted.json', 'r', encoding='utf-8') as f:
    hsk3_entries = json.load(f)

# Re-read existing HSK 1 and 2 entries from vocabularyData or regenerate
with open('src/Data/vocabularyData.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract the existing VOCABULARY_DATA list
start_idx = content.find('export const VOCABULARY_DATA: VocabularyEntry[] = ') + len('export const VOCABULARY_DATA: VocabularyEntry[] = ')
end_idx = content.rfind(';\n\nexport function getVocabularyByLevel')
existing_json_str = content[start_idx:end_idx].strip()
existing_entries = json.loads(existing_json_str)

# Filter out any old HSK 3 if present, then add new 300 entries
hsk1_2_entries = [e for e in existing_entries if e.get('level') in [1, 2]]
all_600 = hsk1_2_entries + hsk3_entries

print(f'Total combined vocabulary: {len(all_600)} (HSK1: {len([e for e in all_600 if e["level"]==1])}, HSK2: {len([e for e in all_600 if e["level"]==2])}, HSK3: {len([e for e in all_600 if e["level"]==3])})')

ts_file = '''// HSK Plus Official Complete Vocabulary Database
// Extracted and verified from HSK-1-Vocabulary.pdf, HSK-2-Vocabulary.pdf, and HSK-3-Vocabulary.pdf

export interface ExampleSentence {
  chinese: string
  pinyin: string
  translation: string
}

export type HskLevel = 1 | 2 | 3

export interface VocabularyEntry {
  id: number
  character: string
  pinyin: string
  meaning: string
  category: string
  level: HskLevel
  strokes: number
  examples: ExampleSentence[]
}

export const VOCABULARY_DATA: VocabularyEntry[] = ''' + json.dumps(all_600, ensure_ascii=False, indent=2) + ''';

export function getVocabularyByLevel(level: HskLevel): VocabularyEntry[] {
  return VOCABULARY_DATA.filter(entry => entry.level === level)
}

export function getVocabularyByCharacter(character: string, level?: HskLevel): VocabularyEntry | undefined {
  if (level) {
    return VOCABULARY_DATA.find(entry => entry.character === character && entry.level === level)
  }
  return VOCABULARY_DATA.find(entry => entry.character === character)
}

export function searchVocabulary(query: string, level?: HskLevel): VocabularyEntry[] {
  const q = query.trim().toLowerCase()
  let pool = VOCABULARY_DATA
  if (level) {
    pool = pool.filter(e => e.level === level)
  }
  if (!q) return pool

  return pool.filter(e => 
    e.character.includes(q) ||
    e.pinyin.toLowerCase().includes(q) ||
    e.meaning.toLowerCase().includes(q) ||
    (e.category && e.category.toLowerCase().includes(q))
  )
}
'''

with open('src/Data/vocabularyData.ts', 'w', encoding='utf-8') as f:
    f.write(ts_file)

print('Updated src/Data/vocabularyData.ts with all 600 words!')
