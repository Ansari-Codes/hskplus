export interface Hsk1LessonAlignment {
  lesson: number
  textbookPage: number
  topics: string[]
}

export const HSK1_TEXTBOOK_TITLE = 'HSK Standard Course 1'

export const HSK1_LESSON_ALIGNMENT: Hsk1LessonAlignment[] = [
  { lesson: 1, textbookPage: 2, topics: ['Greetings', 'Pinyin initials and finals', 'Four tones and syllables', 'Basic strokes and single-component characters'] },
  { lesson: 2, textbookPage: 8, topics: ['Thanks and farewells', 'Pinyin initials and finals', 'Neutral tone and tone-marking rules', 'Character strokes and recognition'] },
  { lesson: 3, textbookPage: 14, topics: ['Asking for names with 什么', 'The 是 sentence', 'Yes/no questions with 吗', 'Pronunciation and Pinyin rules'] },
  { lesson: 4, textbookPage: 22, topics: ['Question words 谁 and 哪', 'The structural particle 的', 'The question particle 呢', 'Chinese character structure'] },
  { lesson: 5, textbookPage: 30, topics: ['Asking age with 几 and 多大', 'Numbers below 100', '了 to indicate change', 'Retroflex finals and character structure'] },
  { lesson: 6, textbookPage: 40, topics: ['The modal verb 会', 'Adjectival predicates', 'Asking how with 怎么', 'Tone patterns in disyllabic words'] },
  { lesson: 7, textbookPage: 48, topics: ['Dates: month, day, and weekday', 'Nominal predicates', 'Serial verbs: 去 + place + activity', 'Tone patterns in disyllabic words'] },
  { lesson: 8, textbookPage: 56, topics: ['The modal verb 想', 'Asking quantities with 多少', 'Measure words 个 and 口', 'Expressing amounts of money'] },
  { lesson: 9, textbookPage: 64, topics: ['在 as a verb and as a preposition', 'Asking where with 哪儿', 'The question particle 呢', 'Character components and radicals'] },
  { lesson: 10, textbookPage: 72, topics: ['有 to indicate existence', 'The conjunction 和', 'The modal verb 能', 'Requests and imperatives with 请'] },
  { lesson: 11, textbookPage: 82, topics: ['Expressions of time', 'Time words used before the verb', 'The noun 前', 'Neutral-tone pronunciation'] },
  { lesson: 12, textbookPage: 90, topics: ['Asking about something with 怎么样', 'Subject-predicate phrases as predicates', 'The adverb 太', 'The modal verb 会'] },
  { lesson: 13, textbookPage: 98, topics: ['The interjection 喂', 'Ongoing actions with 在……呢', 'Saying telephone numbers', 'The modal particle 呢'] },
  { lesson: 14, textbookPage: 104, topics: ['了 for occurrence or completion', 'The noun 后', 'The modal particle 啊', 'The adverb 都'] },
  { lesson: 15, textbookPage: 112, topics: ['是……的 to emphasize time, place, or manner', 'Dates: year, month, day, and weekday', 'Trisyllabic tone patterns', 'Character and radical review'] },
]

export function getHsk1LessonAlignment(lesson: number): Hsk1LessonAlignment | undefined {
  return HSK1_LESSON_ALIGNMENT.find((entry) => entry.lesson === lesson)
}
