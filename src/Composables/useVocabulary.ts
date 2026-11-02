import { VOCABULARY_DATA, getVocabularyByLevel, getVocabularyByCharacter, searchVocabulary } from '../Data/vocabularyData'
import type { HskLevel, VocabularyEntry } from '../Pages/Vocabulary/types'

export function useVocabulary() {
  function getByLevel(level: HskLevel): VocabularyEntry[] {
    return getVocabularyByLevel(level)
  }

  function getByCharacter(character: string, level?: HskLevel): VocabularyEntry | undefined {
    return getVocabularyByCharacter(character, level)
  }

  function search(query: string, level?: HskLevel): VocabularyEntry[] {
    return searchVocabulary(query, level)
  }

  return {
    allEntries: VOCABULARY_DATA,
    getByLevel,
    getByCharacter,
    search,
  }
}
