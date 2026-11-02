export type HskLevel = 1 | 2 | 3

export interface VocabularyExample {
  chinese: string
  pinyin: string
  translation: string
}

export interface VocabularyEntry {
  id?: number
  character: string
  pinyin: string
  meaning: string
  category?: string
  level: HskLevel
  strokes?: number
  examples: VocabularyExample[]
}

export interface PracticePoint {
  x: number
  y: number
}

export interface PracticeStroke {
  points: PracticePoint[]
}
