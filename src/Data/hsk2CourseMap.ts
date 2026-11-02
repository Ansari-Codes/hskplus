export interface Hsk2LessonAlignment {
  lesson: number
  textbookPage: number
  topics: string[]
}

export const HSK2_TEXTBOOK_TITLE = 'HSK Standard Course 2'

export const HSK2_LESSON_ALIGNMENT: Hsk2LessonAlignment[] = [
  { lesson: 1, textbookPage: 1, topics: ['The auxiliary verb 要', 'The degree adverb 最', 'Approximate numbers'] },
  { lesson: 2, textbookPage: 9, topics: ['A-not-A questions', 'The pronoun 每', 'The interrogative pronoun 多'] },
  { lesson: 3, textbookPage: 17, topics: ['The 的 phrase', 'The numeral classifier 一下', 'The modal adverb 真'] },
  { lesson: 4, textbookPage: 25, topics: ['是……的 to emphasize the agent of an action', 'Time expressions with 是……的', 'The adverb 已经'] },
  { lesson: 5, textbookPage: 33, topics: ['The adverb 就', 'The modal adverb 还 (1)', 'The degree adverb 有点儿'] },
  { lesson: 6, textbookPage: 41, topics: ['The interrogative pronoun 怎么', 'Reduplicated measure words', '因为……所以……'] },
  { lesson: 7, textbookPage: 49, topics: ['The modal adverb 还 (2)', 'The adverb 就', 'Distance with 离', 'The modal particle 呢'] },
  { lesson: 8, textbookPage: 57, topics: ['Questions ending with ……好吗', 'The adverb 再', 'Pivotal sentences', 'Verb reduplication'] },
  { lesson: 9, textbookPage: 65, topics: ['Result complements', 'The preposition 从', '第 to indicate order'] },
  { lesson: 10, textbookPage: 73, topics: ['Negative commands with 别……了', 'The preposition 对'] },
  { lesson: 11, textbookPage: 81, topics: ['Verb phrases as attributive modifiers', 'Comparisons with 比 (1)', 'The auxiliary verb 能'] },
  { lesson: 12, textbookPage: 89, topics: ['Complements of degree', 'Comparisons with 比 (2)'] },
  { lesson: 13, textbookPage: 97, topics: ['The structural particle 着', 'Rhetorical questions with 不……吗', 'The preposition 往'] },
  { lesson: 14, textbookPage: 105, topics: ['The structural particle 过', '虽然……但是……', 'Frequency with 次'] },
  { lesson: 15, textbookPage: 113, topics: ['The state of an action with 要……了', 'The structure 都……了'] },
]

export function getHsk2LessonAlignment(lesson: number): Hsk2LessonAlignment | undefined {
  return HSK2_LESSON_ALIGNMENT.find((entry) => entry.lesson === lesson)
}
