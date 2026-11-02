import type { SentencePatternEntry } from './sentencePatternsData'
import { getHsk3LessonAlignment } from './hsk3CourseMap'

const textbookTitle = 'HSK Standard Course 3'

const chapterExamples = [
  ['周末你有什么打算？', 'Zhōumò nǐ yǒu shénme dǎsuàn?', 'What are your plans for the weekend?'],
  ['他什么时候回来？', 'Tā shénme shíhou huílai?', 'When will he come back?'],
  ['桌子上放着很多饮料。', 'Zhuōzi shàng fàngzhe hěn duō yǐnliào.', 'There are many drinks on the table.'],
  ['她总是笑着跟客人说话。', 'Tā zǒngshì xiàozhe gēn kèrén shuōhuà.', 'She always talks to guests with a smile.'],
  ['我最近越来越胖了。', 'Wǒ zuìjìn yuèláiyuè pàng le.', 'I have been getting fatter recently.'],
  ['怎么突然找不到了？', 'Zěnme tūrán zhǎo bú dào le?', 'How come it suddenly cannot be found?'],
  ['我跟她都认识五年了。', 'Wǒ gēn tā dōu rènshi wǔ nián le.', 'She and I have known each other for five years.'],
  ['你去哪儿我就去哪儿。', 'Nǐ qù nǎr wǒ jiù qù nǎr.', 'I will go wherever you go.'],
  ['她的汉语说得跟中国人一样好。', 'Tā de Hànyǔ shuō de gēn Zhōngguórén yíyàng hǎo.', 'She speaks Chinese as well as a Chinese person.'],
  ['数学比历史难多了。', 'Shùxué bǐ lìshǐ nán duō le.', 'Math is much harder than history.'],
  ['别忘了把空调关了。', 'Bié wàng le bǎ kōngtiáo guān le.', 'Do not forget to turn off the air conditioner.'],
  ['把重要的东西放在我这儿吧。', 'Bǎ zhòngyào de dōngxi fàng zài wǒ zhèr ba.', 'Put the important things here with me.'],
  ['我是走回来的。', 'Wǒ shì zǒu huílai de.', 'I came back on foot.'],
  ['你把水果拿过来。', 'Nǐ bǎ shuǐguǒ ná guòlai.', 'Bring the fruit over here.'],
  ['其他都没什么问题。', 'Qítā dōu méi shénme wèntí.', 'Everything else is fine.'],
  ['我现在累得下了班就想睡觉。', 'Wǒ xiànzài lèi de xià le bān jiù xiǎng shuìjiào.', 'I am so tired that I want to sleep as soon as I finish work.'],
  ['谁都有办法看好你的“病”。', 'Shéi dōu yǒu bànfǎ kànhǎo nǐ de “bìng”.', 'Everyone has a way to treat your “illness”.'],
  ['我相信他们会同意的。', 'Wǒ xiāngxìn tāmen huì tóngyì de.', 'I believe they will agree.'],
  ['你没看出来吗？', 'Nǐ méi kàn chūlái ma?', 'Couldn’t you tell?'],
  ['我被他影响了。', 'Wǒ bèi tā yǐngxiǎng le.', 'I was influenced by him.'],
] as const

const grammarNotes = [
  ['用“打算”谈计划', 'Subject + 打算 + Verb', '打算 introduces a plan or intention. The example is the chapter heading; the structure is a short study note aligned to its topic.'],
  ['用“什么时候”询问时间', 'Subject + 什么时候 + Verb', '什么时候 asks when an action will happen. 回来 means to return toward the speaker or reference point.'],
  ['用“着”描述持续状态', 'Location + Verb + 着 + Object', '着 can mark a state that continues after an action. This chapter heading describes drinks remaining on a table.'],
  ['“Verb + 着”连接动作或状态', 'Verb 1 + 着 + Verb 2', '着 can describe the manner or accompanying state in which another action takes place.'],
  ['用“越来越”表示变化', '越来越 + Adjective', '越来越 describes a change that becomes progressively stronger over time.'],
  ['结果补语“到”', 'Verb + 不到', 'A negative result complement can express being unable to achieve or perceive a result, as in 找不到.'],
  ['持续时长与“了”', 'Verb + Duration + 了', 'A duration phrase with sentence-final 了 can describe how long a state or activity has continued.'],
  ['“……就……”表示对应关系', 'Question phrase + Subject + 就 + matching phrase', '就 links a condition or choice to a corresponding result, following the paired structure in the chapter heading.'],
  ['程度补语与“一样”比较', 'Verb + 得 + Complement + 跟……一样', '得 introduces a description of how an action is performed; 跟……一样 expresses similarity.'],
  ['用“比”进行比较', 'A + 比 + B + Adjective + 多了', '比 introduces the comparison standard. 多了 emphasizes a substantial difference.'],
  ['把字句与否定祈使', '别 + Verb; 把 + Object + Verb + Result', '别 gives a negative command. 把 places the affected object before the action and its result.'],
  ['把字句与处所补语', '把 + Object + Verb + 在 + Location', 'The 把 construction foregrounds an object that is moved or placed at a location.'],
  ['“是……的”说明方式', 'Subject + 是 + Manner + Verb + 的', '是……的 can highlight details such as manner about a completed event.'],
  ['趋向补语“过来”', 'Verb + 过来', '过来 indicates movement toward the speaker or a reference point.'],
  ['“其他”与“都”', '其他 + 都 + Predicate', '其他 means other or remaining; 都 scopes over the group being described.'],
  ['用“得”表达程度或结果', 'Adjective / Verb + 得 + Result', '得 introduces a complement describing a degree or its consequence.'],
  ['“谁都”表示全称', '谁 + 都 + Predicate', '谁都 means everyone or anyone in an inclusive statement; the chapter heading also uses 看好 as a result complement.'],
  ['“会”表示可能性', 'Subject + 会 + Verb + 的', '会 can express a likely future event. Sentence-final 的 can add emphasis or assurance.'],
  ['结果补语“出来”', 'Verb + 出来', '出来 can mark a result of perceiving or bringing something to light, as in 看出来.'],
  ['“被”字句', 'Subject + 被 + Agent + Verb', '被 marks a passive construction in which the subject is affected by an action.'],
] as const

export const HSK3_TEXTBOOK_PATTERNS: SentencePatternEntry[] = grammarNotes.map(
  ([title, formula, explanation], index) => {
    const lesson = index + 1
    const alignment = getHsk3LessonAlignment(lesson)
    const [chinese, pinyin, english] = chapterExamples[index]

    return {
      id: `hsk3-p${lesson}`,
      level: 3,
      patternNumber: lesson,
      title,
      formula,
      explanation: `${explanation} Curriculum topic: ${alignment?.topics.join('; ')}.`,
      examples: [{ chinese, pinyin, english }],
      textbookLessons: [lesson],
      textbookPages: alignment ? [alignment.textbookPage] : [],
      textbookTitle,
    }
  },
)
