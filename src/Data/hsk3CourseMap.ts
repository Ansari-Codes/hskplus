export const HSK3_TEXTBOOK_TITLE = 'HSK Standard Course 3'

export interface Hsk3LessonAlignment {
  lesson: number
  textbookPage: number
  title: string
  english: string
  topics: string[]
}

export const HSK3_COURSE_MAP: Hsk3LessonAlignment[] = [
  { lesson: 1, textbookPage: 1, title: '周末你有什么打算', english: 'What are your plans for the weekend?', topics: ['Weekend plans', '打算 for plans'] },
  { lesson: 2, textbookPage: 11, title: '他什么时候回来', english: 'When will he come back?', topics: ['Asking when', '回来 and return direction'] },
  { lesson: 3, textbookPage: 20, title: '桌子上放着很多饮料', english: 'There are many drinks on the table', topics: ['着 for a continuing state', 'Location and placement'] },
  { lesson: 4, textbookPage: 29, title: '她总是笑着跟客人说话', english: 'She always talks to guests with a smile', topics: ['Verb + 着', '跟 for interaction'] },
  { lesson: 5, textbookPage: 37, title: '我最近越来越胖了', english: 'I have been getting fatter recently', topics: ['越来越 for gradual change'] },
  { lesson: 6, textbookPage: 46, title: '怎么突然找不到了', english: 'How come it suddenly cannot be found?', topics: ['Result complements', '找不到'] },
  { lesson: 7, textbookPage: 55, title: '我跟她都认识五年了', english: 'She and I have known each other for five years', topics: ['Duration of an ongoing state', '都'] },
  { lesson: 8, textbookPage: 64, title: '你去哪儿我就去哪儿', english: 'I will go wherever you go', topics: ['Correlative expressions', '就'] },
  { lesson: 9, textbookPage: 72, title: '她的汉语说得跟中国人一样好', english: 'She speaks Chinese as well as a Chinese person', topics: ['得 complements', '跟……一样'] },
  { lesson: 10, textbookPage: 81, title: '数学比历史难多了', english: 'Math is much harder than history', topics: ['比 comparisons', '多了 for degree'] },
  { lesson: 11, textbookPage: 90, title: '别忘了把空调关了', english: 'Do not forget to turn off the air conditioner', topics: ['把 construction', '别 for a negative command'] },
  { lesson: 12, textbookPage: 98, title: '把重要的东西放在我这儿吧', english: 'Put the important things here with me', topics: ['把 with a location complement', '吧 for suggestions'] },
  { lesson: 13, textbookPage: 107, title: '我是走回来的', english: 'I came back on foot', topics: ['是……的 for manner of a completed action'] },
  { lesson: 14, textbookPage: 116, title: '你把水果拿过来', english: 'Bring the fruit over here', topics: ['把 construction', '过来 direction complement'] },
  { lesson: 15, textbookPage: 125, title: '其他都没什么问题', english: 'Everything else is fine', topics: ['其他', '都 and 没什么'] },
  { lesson: 16, textbookPage: 135, title: '我现在累得下了班就想睡觉', english: 'I am so tired that I want to sleep as soon as I finish work', topics: ['得 for degree or result', '就 for a resulting action'] },
  { lesson: 17, textbookPage: 143, title: '谁都有办法看好你的“病”', english: 'Everyone has a way to treat your “illness”', topics: ['谁都 for an inclusive statement', '看好 as a result complement'] },
  { lesson: 18, textbookPage: 151, title: '我相信他们会同意的', english: 'I believe they will agree', topics: ['会 for likelihood', '的 at the end of a statement'] },
  { lesson: 19, textbookPage: 159, title: '你没看出来吗', english: 'Couldn’t you tell?', topics: ['看出来 result complement', '吗 questions'] },
  { lesson: 20, textbookPage: 168, title: '我被他影响了', english: 'I was influenced by him', topics: ['被 passive construction'] },
]

export function getHsk3LessonAlignment(lesson: number): Hsk3LessonAlignment | undefined {
  return HSK3_COURSE_MAP.find(entry => entry.lesson === lesson)
}
