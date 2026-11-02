import json

# Load HSK 1 and HSK 2 from the generator logic or existing files
with open('scripts/generate_full_vocab_ts.py', 'r', encoding='utf-8') as f:
    gen_code = f.read()

with open('scripts/hsk3_extracted.json', 'r', encoding='utf-8') as f:
    hsk3_entries = json.load(f)

# Run generator to get entries
exec_globals = {}
lines = gen_code.splitlines()
sub_lines = []
for l in lines:
    if l.startswith("ts_content = '''"):
        break
    sub_lines.append(l)

exec('\n'.join(sub_lines), exec_globals)
hsk1_2_entries = exec_globals['entries']

all_600 = hsk1_2_entries + hsk3_entries
print(f'Total merged vocabulary: {len(all_600)}')

ts_content = '''// HSK Plus Official Complete Vocabulary Database
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
    f.write(ts_content)

print('Generated src/Data/vocabularyData.ts with all 600 words!')
