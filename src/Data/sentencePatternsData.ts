// HSK Plus Sentence Patterns Database
// 15 Patterns for HSK 1, 15 Patterns for HSK 2, and 20 Patterns for HSK 3

export interface PatternExample {
  chinese: string
  pinyin: string
  english: string
}

export interface SentencePatternEntry {
  id: string
  level: 1 | 2 | 3
  patternNumber: number
  title: string
  formula: string
  explanation: string
  examples: PatternExample[]
  textbookLessons?: number[]
  textbookPages?: number[]
}

export const SENTENCE_PATTERNS_DATA: SentencePatternEntry[] = [
  {
    "id": "hsk1-p1",
    "level": 1,
    "patternNumber": 1,
    "title": "“是”字句 (The 是 Sentence)",
    "formula": "Subject + 是 + Noun/Noun Phrase",
    "explanation": "Used to express identity, equivalence, or category membership, equivalent to English am/is/are.",
    "examples": [
      {
        "chinese": "我是学生。",
        "pinyin": "Wǒ shì xuésheng.",
        "english": "I am a student."
      },
      {
        "chinese": "他是我的汉语老师。",
        "pinyin": "Tā shì wǒ de hànyǔ lǎoshī.",
        "english": "He is my Chinese teacher."
      },
      {
        "chinese": "今天不是星期天。",
        "pinyin": "Jīntiān bú shì xīngqītiān.",
        "english": "Today is not Sunday."
      }
    ]
  },
  {
    "id": "hsk1-p2",
    "level": 1,
    "patternNumber": 2,
    "title": "“有”字句 (Possession & Existence)",
    "formula": "Subject / Location + 有 + Object",
    "explanation": "Expresses possession ('to have') or physical presence/existence ('there is/are'). Negation always uses '没有', never '不有'.",
    "examples": [
      {
        "chinese": "我有一只可爱的猫。",
        "pinyin": "Wǒ yǒu yì zhī kě'ài de māo.",
        "english": "I have a cute cat."
      },
      {
        "chinese": "桌子上有一本书。",
        "pinyin": "Zhuōzi shang yǒu yì běn shū.",
        "english": "There is a book on the table."
      },
      {
        "chinese": "我没有中国朋友。",
        "pinyin": "Wǒ méiyǒu zhōngguó péngyou.",
        "english": "I don't have Chinese friends."
      }
    ]
  },
  {
    "id": "hsk1-p3",
    "level": 1,
    "patternNumber": 3,
    "title": "“吗” 疑问句 (Yes/No Question with 吗)",
    "formula": "Declarative Sentence + 吗？",
    "explanation": "Turns any affirmative statement into a yes-or-no question without changing the word order.",
    "examples": [
      {
        "chinese": "你是中国人吗？",
        "pinyin": "Nǐ shì zhōngguó rén ma?",
        "english": "Are you Chinese?"
      },
      {
        "chinese": "你想喝茶吗？",
        "pinyin": "Nǐ xiǎng hē chá ma?",
        "english": "Would you like to drink tea?"
      },
      {
        "chinese": "你高兴吗？",
        "pinyin": "Nǐ gāoxìng ma?",
        "english": "Are you happy?"
      }
    ]
  },
  {
    "id": "hsk1-p4",
    "level": 1,
    "patternNumber": 4,
    "title": "“呢” 疑问句 (Bounce-back & Elliptical Questions)",
    "formula": "Noun / Pronoun + 呢？",
    "explanation": "Used for 'How about...?' or 'What about...?' to reflect a question back, or to ask where someone/something is.",
    "examples": [
      {
        "chinese": "我是老师，你呢？",
        "pinyin": "Wǒ shì lǎoshī, nǐ ne?",
        "english": "I am a teacher, what about you?"
      },
      {
        "chinese": "我的书呢？",
        "pinyin": "Wǒ de shū ne?",
        "english": "Where is my book?"
      },
      {
        "chinese": "他在看书呢。",
        "pinyin": "Tā zài kàn shū ne.",
        "english": "He is currently reading a book."
      }
    ]
  },
  {
    "id": "hsk1-p5",
    "level": 1,
    "patternNumber": 5,
    "title": "“什么” 疑问句 (Asking 'What')",
    "formula": "Subject + Verb + 什么 (+ Noun)？",
    "explanation": "In Chinese, the question word '什么' stays in place of the object, without fronting.",
    "examples": [
      {
        "chinese": "你在吃什么？",
        "pinyin": "Nǐ zài chī shénme?",
        "english": "What are you eating?"
      },
      {
        "chinese": "这是什么东西？",
        "pinyin": "Zhè shì shénme dōngxi?",
        "english": "What is this thing?"
      },
      {
        "chinese": "你想买什么水果？",
        "pinyin": "Nǐ xiǎng mǎi shénme shuǐguǒ?",
        "english": "What fruit do you want to buy?"
      }
    ]
  },
  {
    "id": "hsk1-p6",
    "level": 1,
    "patternNumber": 6,
    "title": "“谁” 疑问句 (Asking 'Who')",
    "formula": "谁 + Verb / Subject + 是 + 谁？",
    "explanation": "'谁' (shéi) asks about the person or identity.",
    "examples": [
      {
        "chinese": "他是谁？",
        "pinyin": "Tā shì shéi?",
        "english": "Who is he?"
      },
      {
        "chinese": "谁想去北京？",
        "pinyin": "Shéi xiǎng qù běijīng?",
        "english": "Who wants to go to Beijing?"
      },
      {
        "chinese": "谁是你的汉语老师？",
        "pinyin": "Shéi shì nǐ de hànyǔ lǎoshī?",
        "english": "Who is your Chinese teacher?"
      }
    ]
  },
  {
    "id": "hsk1-p7",
    "level": 1,
    "patternNumber": 7,
    "title": "“哪儿” 疑问句 (Asking 'Where')",
    "formula": "Subject + 在 + 哪儿？ / Subject + 去 + 哪儿？",
    "explanation": "'哪儿' (nǎr) asks for location or destination.",
    "examples": [
      {
        "chinese": "你在哪儿工作？",
        "pinyin": "Nǐ zài nǎr gōngzuò?",
        "english": "Where do you work?"
      },
      {
        "chinese": "洗手间在哪儿？",
        "pinyin": "Xǐshǒujiān zài nǎr?",
        "english": "Where is the restroom?"
      },
      {
        "chinese": "你明天去哪儿？",
        "pinyin": "Nǐ míngtiān qù nǎr?",
        "english": "Where are you going tomorrow?"
      }
    ]
  },
  {
    "id": "hsk1-p8",
    "level": 1,
    "patternNumber": 8,
    "title": "“几” 与 “多少” (Asking Quantity)",
    "formula": "几 + Measure Word (usually < 10) | 多少 + Noun (> 10 or price)",
    "explanation": "Use '几' when expecting a small number under 10; use '多少' for larger numbers or money.",
    "examples": [
      {
        "chinese": "现在几点了？",
        "pinyin": "Xiànzài jǐ diǎn le?",
        "english": "What time is it now?"
      },
      {
        "chinese": "这个杯子多少钱？",
        "pinyin": "Zhège bēizi duōshao qián?",
        "english": "How much is this cup?"
      },
      {
        "chinese": "你们学校有多少学生？",
        "pinyin": "Nǐmen xuéxiào yǒu duōshao xuésheng?",
        "english": "How many students are in your school?"
      }
    ]
  },
  {
    "id": "hsk1-p9",
    "level": 1,
    "patternNumber": 9,
    "title": "“怎么” 与 “怎么样” (How & How about)",
    "formula": "怎么 + Verb？ / Subject + 怎么样？",
    "explanation": "'怎么' asks about method or manner ('how to do'); '怎么样' asks about opinion, condition, or state ('how is it').",
    "examples": [
      {
        "chinese": "这个汉字怎么读？",
        "pinyin": "Zhège hànzì zěnme dú?",
        "english": "How do you pronounce this character?"
      },
      {
        "chinese": "今天天气怎么样？",
        "pinyin": "Jīntiān tiānqì zěnmeyàng?",
        "english": "How is the weather today?"
      },
      {
        "chinese": "你觉得这家饭馆怎么样？",
        "pinyin": "Nǐ juéde zhè jiā fànguǎn zěnmeyàng?",
        "english": "How do you find this restaurant?"
      }
    ]
  },
  {
    "id": "hsk1-p10",
    "level": 1,
    "patternNumber": 10,
    "title": "介词 “在” 结构 (Location with 在)",
    "formula": "Subject + 在 + Location + Verb",
    "explanation": "In Chinese, the location precedes the verb action: you establish the place before doing the deed.",
    "examples": [
      {
        "chinese": "我在学校学习汉语。",
        "pinyin": "Wǒ zài xuéxiào xuéxí hànyǔ.",
        "english": "I study Chinese at school."
      },
      {
        "chinese": "他在医院工作。",
        "pinyin": "Tā zài yīyuàn gōngzuò.",
        "english": "He works in the hospital."
      },
      {
        "chinese": "我们在中国认识的。",
        "pinyin": "Wǒmen zài zhōngguó rènshi de.",
        "english": "We met in China."
      }
    ]
  },
  {
    "id": "hsk1-p11",
    "level": 1,
    "patternNumber": 11,
    "title": "能愿动词 “想” (Desire to do)",
    "formula": "Subject + 想 + Verb",
    "explanation": "Expresses an intention, desire, or subjective wish to perform an action.",
    "examples": [
      {
        "chinese": "我想喝一杯热茶。",
        "pinyin": "Wǒ xiǎng hē yì bēi rè chá.",
        "english": "I would like to drink a cup of hot tea."
      },
      {
        "chinese": "我想去北京旅游。",
        "pinyin": "Wǒ xiǎng qù běijīng lǚyóu.",
        "english": "I want to travel to Beijing."
      },
      {
        "chinese": "我不想去商店。",
        "pinyin": "Wǒ bù xiǎng qù shāngdiàn.",
        "english": "I don't want to go to the shop."
      }
    ]
  },
  {
    "id": "hsk1-p12",
    "level": 1,
    "patternNumber": 12,
    "title": "能愿动词 “会” (Learned Ability)",
    "formula": "Subject + 会 + Verb",
    "explanation": "Indicates an acquired ability learned through practice or study (e.g. speaking a language, driving, cooking).",
    "examples": [
      {
        "chinese": "我会说汉语。",
        "pinyin": "Wǒ huì shuō hànyǔ.",
        "english": "I can speak Chinese."
      },
      {
        "chinese": "他会开车。",
        "pinyin": "Tā huì kāi chē.",
        "english": "He can drive a car."
      },
      {
        "chinese": "你会做中国菜吗？",
        "pinyin": "Nǐ huì zuò zhōngguó cài ma?",
        "english": "Can you cook Chinese food?"
      }
    ]
  },
  {
    "id": "hsk1-p13",
    "level": 1,
    "patternNumber": 13,
    "title": "能愿动词 “能” (Possibility & Permission)",
    "formula": "Subject + 能 + Verb",
    "explanation": "Expresses objective possibility, physical capability, or requesting permission.",
    "examples": [
      {
        "chinese": "我能坐在这儿吗？",
        "pinyin": "Wǒ néng zuò zài zhèr ma?",
        "english": "Can I sit here?"
      },
      {
        "chinese": "明天你能来我家吗？",
        "pinyin": "Míngtiān nǐ néng lái wǒ jiā ma?",
        "english": "Can you come to my home tomorrow?"
      },
      {
        "chinese": "医生说他能出院了。",
        "pinyin": "Yīshēng shuō tā néng chūyuàn le.",
        "english": "The doctor said he can be discharged."
      }
    ]
  },
  {
    "id": "hsk1-p14",
    "level": 1,
    "patternNumber": 14,
    "title": "动态助词 “了” (Completed Action)",
    "formula": "Subject + Verb + 了 + (Object)",
    "explanation": "Placed immediately after a verb to signify that an action has been realized or completed.",
    "examples": [
      {
        "chinese": "我买了一本新书。",
        "pinyin": "Wǒ mǎi le yì běn xīn shū.",
        "english": "I bought a new book."
      },
      {
        "chinese": "他吃了三个苹果。",
        "pinyin": "Tā chī le sān ge píngguǒ.",
        "english": "He ate three apples."
      },
      {
        "chinese": "下雨了，快回家吧。",
        "pinyin": "Xiàyǔ le, kuài huí jiā ba.",
        "english": "It started raining, let's hurry home."
      }
    ]
  },
  {
    "id": "hsk1-p15",
    "level": 1,
    "patternNumber": 15,
    "title": "“是……的” 结构 (The Emphatic Cleft)",
    "formula": "Subject + 是 + [Time/Location/Manner] + Verb + 的",
    "explanation": "Employs 是 and 的 to emphasize the specific circumstance of an event that has already occurred.",
    "examples": [
      {
        "chinese": "我是坐飞机来的。",
        "pinyin": "Wǒ shì zuò fēijī lái de.",
        "english": "I came by plane (manner emphasized)."
      },
      {
        "chinese": "他是昨天回来的。",
        "pinyin": "Tā shì zuótiān huílái de.",
        "english": "He returned yesterday (time emphasized)."
      },
      {
        "chinese": "这本书是在北京买的。",
        "pinyin": "Zhè běn shū shì zài běijīng mǎi de.",
        "english": "This book was bought in Beijing (place emphasized)."
      }
    ]
  },
  {
    "id": "hsk2-p1",
    "level": 2,
    "patternNumber": 1,
    "title": "“比” 字句 (Comparative Sentence)",
    "formula": "A + 比 + B + Adjective",
    "explanation": "Compares two entities where A has more of the specified attribute than B.",
    "examples": [
      {
        "chinese": "今天比昨天冷。",
        "pinyin": "Jīntiān bǐ zuótiān lěng.",
        "english": "Today is colder than yesterday."
      },
      {
        "chinese": "哥哥比我高五厘米。",
        "pinyin": "Gēge bǐ wǒ gāo wǔ límǐ.",
        "english": "My older brother is 5 cm taller than me."
      },
      {
        "chinese": "西瓜比苹果贵一点儿。",
        "pinyin": "Xīguā bǐ píngguǒ guì yìdiǎnr.",
        "english": "Watermelon is a little more expensive than apples."
      }
    ]
  },
  {
    "id": "hsk2-p2",
    "level": 2,
    "patternNumber": 2,
    "title": "状态补语 “得” (Degree Complement)",
    "formula": "Verb + 得 + Adjective / Complement Phrase",
    "explanation": "Follows a verb to assess, describe, or evaluate the manner, outcome, or degree of the action.",
    "examples": [
      {
        "chinese": "他跑得很快。",
        "pinyin": "Tā pǎo de hěn kuài.",
        "english": "He runs very fast."
      },
      {
        "chinese": "她说汉语说得真流利。",
        "pinyin": "Tā shuō hànyǔ shuō de zhēn liúlì.",
        "english": "She speaks Chinese really fluently."
      },
      {
        "chinese": "你起得很早啊！",
        "pinyin": "Nǐ qǐ de hěn zǎo a!",
        "english": "You got up really early!"
      }
    ]
  },
  {
    "id": "hsk2-p3",
    "level": 2,
    "patternNumber": 3,
    "title": "“正在……呢” (Continuous Aspect)",
    "formula": "Subject + 正在 / 在 + Verb + (呢)",
    "explanation": "Denotes an action actively in progress at the moment of speaking.",
    "examples": [
      {
        "chinese": "我正在听音乐呢。",
        "pinyin": "Wǒ zhèngzài tīng yīnyuè ne.",
        "english": "I am currently listening to music."
      },
      {
        "chinese": "爸爸正在看报纸。",
        "pinyin": "Bàba zhèngzài kàn bàozhǐ.",
        "english": "Father is reading the newspaper right now."
      },
      {
        "chinese": "外面正在下大雪呢。",
        "pinyin": "Wàimiàn zhèngzài xià dà xuě ne.",
        "english": "It is snowing heavily outside right now."
      }
    ]
  },
  {
    "id": "hsk2-p4",
    "level": 2,
    "patternNumber": 4,
    "title": "“已经……了” (Already Completed)",
    "formula": "Subject + 已经 + Verb / Adjective + 了",
    "explanation": "Indicates that an action or milestone has already taken place prior to now.",
    "examples": [
      {
        "chinese": "他已经到机场了。",
        "pinyin": "Tā yǐjīng dào jīchǎng le.",
        "english": "He has already arrived at the airport."
      },
      {
        "chinese": "我已经吃过早饭了。",
        "pinyin": "Wǒ yǐjīng chī guo zǎofàn le.",
        "english": "I have already eaten breakfast."
      },
      {
        "chinese": "时间已经不早了。",
        "pinyin": "Shíjiān yǐjīng bù zǎo le.",
        "english": "It is already getting late."
      }
    ]
  },
  {
    "id": "hsk2-p5",
    "level": 2,
    "patternNumber": 5,
    "title": "“因为……所以……” (Cause & Effect)",
    "formula": "因为 + Reason, 所以 + Result",
    "explanation": "Standard causal connection in Chinese: because reason, therefore result.",
    "examples": [
      {
        "chinese": "因为下雨了，所以我们没去踢足球。",
        "pinyin": "Yīnwèi xiàyǔ le, suǒyǐ wǒmen méi qù tī zúqiú.",
        "english": "Because it rained, we didn't go play soccer."
      },
      {
        "chinese": "因为他很努力，所以考试考得很好。",
        "pinyin": "Yīnwèi tā hěn nǔlì, suǒyǐ kǎoshì kǎo de hěn hǎo.",
        "english": "Because he is diligent, he scored well on the exam."
      },
      {
        "chinese": "因为身体不舒服，所以我请假了。",
        "pinyin": "Yīnwèi shēntǐ bù shūfu, suǒyǐ wǒ qǐngjià le.",
        "english": "Because I felt unwell, I took leave."
      }
    ]
  },
  {
    "id": "hsk2-p6",
    "level": 2,
    "patternNumber": 6,
    "title": "“虽然……但是……” (Concessive Relation)",
    "formula": "虽然 + Clause 1, 但是 + Clause 2",
    "explanation": "Correlative conjunctions meaning 'although... but...'.",
    "examples": [
      {
        "chinese": "虽然汉语很难，但是很有趣。",
        "pinyin": "Suīrán hànyǔ hěn nán, dànshì hěn yǒuqù.",
        "english": "Although Chinese is difficult, it is very interesting."
      },
      {
        "chinese": "虽然今天很冷，但是阳光明媚。",
        "pinyin": "Suīrán jīntiān hěn lěng, dànshì yángguāng míngmèi.",
        "english": "Although cold today, the sunshine is bright."
      },
      {
        "chinese": "虽然他生病了，但是还坚持上班。",
        "pinyin": "Suīrán tā shēngbìng le, dànshì hái jiānchí shàngbān.",
        "english": "Although he was sick, he still insisted on working."
      }
    ]
  },
  {
    "id": "hsk2-p7",
    "level": 2,
    "patternNumber": 7,
    "title": "“快要……了” (Imminent Future Action)",
    "formula": "Subject + 快要 / 就要 / 要 + Verb + 了",
    "explanation": "Expresses that an event will happen in the immediate future ('about to / on the verge of').",
    "examples": [
      {
        "chinese": "火车快要开了，大家快上车。",
        "pinyin": "Huǒchē kuàiyào kāi le, dàjiā kuài shàng chē.",
        "english": "The train is about to depart, everyone board quickly."
      },
      {
        "chinese": "新年就要到了！",
        "pinyin": "Xīnnián jiù yào dào le!",
        "english": "New Year is about to arrive!"
      },
      {
        "chinese": "天要黑了，我们回家吧。",
        "pinyin": "Tiān yào hēi le, wǒmen huí jiā ba.",
        "english": "It is getting dark, let's go home."
      }
    ]
  },
  {
    "id": "hsk2-p8",
    "level": 2,
    "patternNumber": 8,
    "title": "动态助词 “过” (Experiential Aspect)",
    "formula": "Subject + Verb + 过 + Object",
    "explanation": "Indicates that the subject has had the prior experience of performing this action at least once in the past.",
    "examples": [
      {
        "chinese": "我去过一次北京。",
        "pinyin": "Wǒ qù guo yí cì běijīng.",
        "english": "I have been to Beijing once."
      },
      {
        "chinese": "你看过这个电影吗？",
        "pinyin": "Nǐ kàn guo zhège diànyǐng ma?",
        "english": "Have you seen this movie before?"
      },
      {
        "chinese": "我没吃过羊肉。",
        "pinyin": "Wǒ méi chī guo yángròu.",
        "english": "I have never eaten mutton."
      }
    ]
  },
  {
    "id": "hsk2-p9",
    "level": 2,
    "patternNumber": 9,
    "title": "否定祈使句 “别……” (Don't / Prohibition)",
    "formula": "别 + Verb (+ 了)",
    "explanation": "Direct and polite prohibitive imperative meaning 'do not' or 'stop doing'.",
    "examples": [
      {
        "chinese": "别说话，请听老师讲课。",
        "pinyin": "Bié shuōhuà, qǐng tīng lǎoshī jiǎngkè.",
        "english": "Don't speak, please listen to the teacher."
      },
      {
        "chinese": "别看手机了，快睡觉吧。",
        "pinyin": "Bié kàn shǒujī le, kuài shuìjiào ba.",
        "english": "Stop looking at your phone, go to sleep."
      },
      {
        "chinese": "别着急，我们还有时间。",
        "pinyin": "Bié zháojí, wǒmen hái yǒu shíjiān.",
        "english": "Don't worry, we still have time."
      }
    ]
  },
  {
    "id": "hsk2-p10",
    "level": 2,
    "patternNumber": 10,
    "title": "持续态助词 “着” (Continuous State)",
    "formula": "Subject + Verb + 着 + (Object)",
    "explanation": "Signifies that a physical state resulting from an action continues persistently (e.g. wearing, holding, open).",
    "examples": [
      {
        "chinese": "门开着呢，请进。",
        "pinyin": "Mén kāi zhe ne, qǐng jìn.",
        "english": "The door is open, please enter."
      },
      {
        "chinese": "她穿着一件漂亮的红衣服。",
        "pinyin": "Tā chuān zhe yí jiàn piàoliang de hóng yīfu.",
        "english": "She is wearing a beautiful red dress."
      },
      {
        "chinese": "老师笑着对我们说话。",
        "pinyin": "Lǎoshī xiào zhe duì wǒmen shuōhuà.",
        "english": "The teacher spoke to us with a smile."
      }
    ]
  },
  {
    "id": "hsk2-p11",
    "level": 2,
    "patternNumber": 11,
    "title": "介词 “离” 句式 (Spatial Distance)",
    "formula": "Place A + 离 + Place B + 很近 / 很远 / (Number) 米",
    "explanation": "Measures physical or temporal distance from one reference point to another.",
    "examples": [
      {
        "chinese": "我家离学校很近。",
        "pinyin": "Wǒ jiā lí xuéxiào hěn jìn.",
        "english": "My home is very close to school."
      },
      {
        "chinese": "机场离市中心有点儿远。",
        "pinyin": "Jīchǎng lí shì zhōngxīn yǒudiǎnr yuǎn.",
        "english": "The airport is somewhat far from downtown."
      },
      {
        "chinese": "这里离地铁站只有两百米。",
        "pinyin": "Zhèlǐ lí dìtiězhàn zhǐ yǒu liǎng bǎi mǐ.",
        "english": "It is only 200 meters from here to the subway."
      }
    ]
  },
  {
    "id": "hsk2-p12",
    "level": 2,
    "patternNumber": 12,
    "title": "介词 “往” 句式 (Directional Movement)",
    "formula": "往 + Direction / Target + 走 / 拐",
    "explanation": "Points toward a specific spatial orientation or direction.",
    "examples": [
      {
        "chinese": "往前走一百米就是火车站。",
        "pinyin": "Wǎng qián zǒu yìbǎi mǐ jiù shì huǒchēzhàn.",
        "english": "Walk forward 100 meters to reach the train station."
      },
      {
        "chinese": "到路口往右拐。",
        "pinyin": "Dào lùkǒu wǎng yòu guǎi.",
        "english": "Turn right at the intersection."
      },
      {
        "chinese": "请往里面坐。",
        "pinyin": "Qǐng wǎng lǐmiàn zuò.",
        "english": "Please sit further inside."
      }
    ]
  },
  {
    "id": "hsk2-p13",
    "level": 2,
    "patternNumber": 13,
    "title": "使动句 “让” (Causative Structure)",
    "formula": "A + 让 + B + Verb / Adjective",
    "explanation": "Expresses allowing, letting, or causing someone to do something.",
    "examples": [
      {
        "chinese": "老师让我回答这个问题。",
        "pinyin": "Lǎoshī ràng wǒ huídá zhège wèntí.",
        "english": "The teacher had me answer this question."
      },
      {
        "chinese": "这部电影让人非常感动。",
        "pinyin": "Zhè bù diànyǐng ràng rén fēicháng gǎndòng.",
        "english": "This movie made people deeply touched."
      },
      {
        "chinese": "让我再想一想。",
        "pinyin": "Ràng wǒ zài xiǎng yì xiǎng.",
        "english": "Let me think about it once more."
      }
    ]
  },
  {
    "id": "hsk2-p14",
    "level": 2,
    "patternNumber": 14,
    "title": "“从……到……” (From... To...)",
    "formula": "从 + Point A + 到 + Point B",
    "explanation": "Connects boundaries of space or spans of time.",
    "examples": [
      {
        "chinese": "从北京到上海坐高铁只要四个半小时。",
        "pinyin": "Cóng běijīng dào shànghǎi zuò gāotiě zhǐ yào sì ge bàn xiǎoshí.",
        "english": "From Beijing to Shanghai by high-speed rail takes only 4.5 hours."
      },
      {
        "chinese": "我们从早上八点学习到下午五点。",
        "pinyin": "Wǒmen cóng zǎoshang bā diǎn xuéxí dào xiàwǔ wǔ diǎn.",
        "english": "We study from 8 AM to 5 PM."
      },
      {
        "chinese": "从一数到十。",
        "pinyin": "Cóng yī shǔ dào shí.",
        "english": "Count from one to ten."
      }
    ]
  },
  {
    "id": "hsk2-p15",
    "level": 2,
    "patternNumber": 15,
    "title": "动词重叠与 “一下” (Softening Actions)",
    "formula": "Verb + 一下 / Verb + Verb",
    "explanation": "Reduplication or appending '一下' softens tone, meaning 'do a brief action' or 'give it a try'.",
    "examples": [
      {
        "chinese": "请你帮我看一下这个句子。",
        "pinyin": "Qǐng nǐ bāng wǒ kàn yíxià zhège jùzi.",
        "english": "Please take a look at this sentence for me."
      },
      {
        "chinese": "我想试一下这件新衣服。",
        "pinyin": "Wǒ xiǎng shì yíxià zhè jiàn xīn yīfu.",
        "english": "I want to try on these new clothes."
      },
      {
        "chinese": "大家休息一下吧。",
        "pinyin": "Dàjiā xiūxi yíxià ba.",
        "english": "Let's all take a brief rest."
      }
    ]
  },
  {
    "id": "hsk3-p1",
    "level": 3,
    "patternNumber": 1,
    "title": "“把” 字句 (Disposal Construction)",
    "formula": "Subject + 把 + Object + Verb + Complement / 了",
    "explanation": "Used when an action affects, disposes of, or changes the state or location of a specific object.",
    "examples": [
      {
        "chinese": "请把空调关了。",
        "pinyin": "Qǐng bǎ kōngtiáo guān le.",
        "english": "Please turn off the air conditioner."
      },
      {
        "chinese": "他把作业做完了。",
        "pinyin": "Tā bǎ zuòyè zuò wán le.",
        "english": "He finished his homework."
      },
      {
        "chinese": "我把书放在桌子上了。",
        "pinyin": "Wǒ bǎ shū fàng zài zhuōzi shang le.",
        "english": "I placed the book on the table."
      }
    ]
  },
  {
    "id": "hsk3-p2",
    "level": 3,
    "patternNumber": 2,
    "title": "“被” 字句 (Passive Construction)",
    "formula": "Object + 被 (+ Agent) + Verb + other element",
    "explanation": "Indicates that the subject receives or suffers the action performed by the agent.",
    "examples": [
      {
        "chinese": "西瓜被弟弟吃完了。",
        "pinyin": "Xīguā bèi dìdi chī wán le.",
        "english": "The watermelon was eaten up by younger brother."
      },
      {
        "chinese": "我的雨伞被他借走了。",
        "pinyin": "Wǒ de yǔsǎn bèi tā jiè zǒu le.",
        "english": "My umbrella was borrowed by him."
      },
      {
        "chinese": "他被老师表扬了。",
        "pinyin": "Tā bèi lǎoshī biǎoyáng le.",
        "english": "He was praised by the teacher."
      }
    ]
  },
  {
    "id": "hsk3-p3",
    "level": 3,
    "patternNumber": 3,
    "title": "“越来越……” (Gradual Progression)",
    "formula": "Subject + 越来越 + Adjective / Mental Verb",
    "explanation": "Expresses that a quality or emotion intensifies steadily over time (more and more).",
    "examples": [
      {
        "chinese": "他的汉语说得越来越流利了。",
        "pinyin": "Tā de hànyǔ shuō de yuè lái yuè liúlì le.",
        "english": "His Chinese is becoming more and more fluent."
      },
      {
        "chinese": "天气越来越冷了。",
        "pinyin": "Tiānqì yuè lái yuè lěng le.",
        "english": "The weather is getting colder and colder."
      },
      {
        "chinese": "我越来越喜欢中国茶了。",
        "pinyin": "Wǒ yuè lái yuè xǐhuan zhōngguó chá le.",
        "english": "I like Chinese tea more and more."
      }
    ]
  },
  {
    "id": "hsk3-p4",
    "level": 3,
    "patternNumber": 4,
    "title": "“越……越……” (Proportional Correlation)",
    "formula": "越 + Clause / Adj 1 + 越 + Clause / Adj 2",
    "explanation": "Correlates two conditions: the more A happens, the more B results (the more... the more...).",
    "examples": [
      {
        "chinese": "雨越下越大。",
        "pinyin": "Yǔ yuè xià yuè dà.",
        "english": "The rain is pouring harder and harder."
      },
      {
        "chinese": "这本书越看越有意思。",
        "pinyin": "Zhè běn shū yuè kàn yuè yǒu yìsi.",
        "english": "The more I read this book, the more interesting it gets."
      },
      {
        "chinese": "你越紧张，就越容易出错。",
        "pinyin": "Nǐ yuè jǐnzhāng, jiù yuè róngyì chūcuò.",
        "english": "The more nervous you are, the easier it is to make mistakes."
      }
    ]
  },
  {
    "id": "hsk3-p5",
    "level": 3,
    "patternNumber": 5,
    "title": "“又……又……” (Dual Qualities)",
    "formula": "又 + Adjective 1 + 又 + Adjective 2",
    "explanation": "Describes two concurrent positive or two concurrent negative qualities (both... and...).",
    "examples": [
      {
        "chinese": "这里的西瓜又大又甜。",
        "pinyin": "Zhèlǐ de xīguā yòu dà yòu tián.",
        "english": "The watermelons here are both big and sweet."
      },
      {
        "chinese": "她又聪明又努力。",
        "pinyin": "Tā yòu cōngming yòu nǔlì.",
        "english": "She is both smart and diligent."
      },
      {
        "chinese": "这件衣服又便宜又好看。",
        "pinyin": "Zhè jiàn yīfu yòu piányi yòu hǎokàn.",
        "english": "These clothes are both inexpensive and good-looking."
      }
    ]
  },
  {
    "id": "hsk3-p6",
    "level": 3,
    "patternNumber": 6,
    "title": "可能补语 (Potential Complements)",
    "formula": "Verb + 得 / 不 + Resultative / Directional Complement",
    "explanation": "Expresses the objective ability or impossibility to achieve a result (看得懂 = can understand, 看不懂 = cannot understand).",
    "examples": [
      {
        "chinese": "老师讲的话你听得懂吗？",
        "pinyin": "Lǎoshī jiǎng de huà nǐ tīng de dǒng ma?",
        "english": "Can you understand what the teacher explained?"
      },
      {
        "chinese": "我的眼镜突然找不到了。",
        "pinyin": "Wǒ de yǎnjìng tūrán zhǎo bu dào le.",
        "english": "My glasses suddenly cannot be found."
      },
      {
        "chinese": "这么多作业，我今天做不完。",
        "pinyin": "Zhème duō zuòyè, wǒ jīntiān zuò bu wán.",
        "english": "With this much homework, I cannot finish today."
      }
    ]
  },
  {
    "id": "hsk3-p7",
    "level": 3,
    "patternNumber": 7,
    "title": "“跟……一样 / 不一样” (Comparative Equality)",
    "formula": "A + 跟 + B + 一样 (+ Adjective)",
    "explanation": "Asserts that entity A has the exact same quality or attribute as entity B.",
    "examples": [
      {
        "chinese": "我跟他一样高。",
        "pinyin": "Wǒ gēn tā yíyàng gāo.",
        "english": "I am as tall as him."
      },
      {
        "chinese": "这个手机跟那个手机不一样。",
        "pinyin": "Zhège shǒujī gēn nàge shǒujī bù yíyàng.",
        "english": "This phone is not the same as that one."
      },
      {
        "chinese": "这道题的想法跟我完全一样。",
        "pinyin": "Zhè dào tí de xiǎngfǎ gēn wǒ wánquán yíyàng.",
        "english": "The approach to this question is completely the same as mine."
      }
    ]
  },
  {
    "id": "hsk3-p8",
    "level": 3,
    "patternNumber": 8,
    "title": "“除了……以外，都 / 还……” (Inclusion & Exclusion)",
    "formula": "除了 + A + 以外，都 + Verb (Exclusion) | 还 + Verb (Inclusion)",
    "explanation": "With '都', it means 'except for A'; with '还', it means 'in addition to A'.",
    "examples": [
      {
        "chinese": "除了李明以外，大家都按时到了。",
        "pinyin": "Chúle Lǐ Míng yǐwài, dàjiā dōu ànshí dào le.",
        "english": "Except for Li Ming, everyone arrived on time."
      },
      {
        "chinese": "除了英语以外，他还会说汉语和法语。",
        "pinyin": "Chúle yīngyǔ yǐwài, tā hái huì shuō hànyǔ hé fǎyǔ.",
        "english": "In addition to English, he can also speak Chinese and French."
      },
      {
        "chinese": "除了周末以外，图书馆每天都开门。",
        "pinyin": "Chúle zhōumò yǐwài, túshūguǎn měitiān dōu kāi mén.",
        "english": "Except on weekends, the library is open every day."
      }
    ]
  },
  {
    "id": "hsk3-p9",
    "level": 3,
    "patternNumber": 9,
    "title": "疑问代词表示任指 (Emphatic Universal)",
    "formula": "疑问词 (谁 / 什么 / 哪儿) + 都 / 也 + Verb",
    "explanation": "Question words used emphatically to mean 'anyone / everyone', 'anything / everything', or 'anywhere / everywhere'.",
    "examples": [
      {
        "chinese": "这件事大家都知道，谁都明白。",
        "pinyin": "Zhè jiàn shì dàjiā dōu zhīdào, shéi dōu míngbai.",
        "english": "Everyone knows about this matter, anyone understands."
      },
      {
        "chinese": "他生病了，今天什么也不想吃。",
        "pinyin": "Tā shēngbìng le, jīntiān shénme yě bù xiǎng chī.",
        "english": "He is sick and doesn't feel like eating anything today."
      },
      {
        "chinese": "周末我哪儿都不想去，只想在家休息。",
        "pinyin": "Zhōumò wǒ nǎr dōu bù xiǎng qù, zhǐ xiǎng zài jiā xiūxi.",
        "english": "On weekends I don't want to go anywhere, just want to rest at home."
      }
    ]
  },
  {
    "id": "hsk3-p10",
    "level": 3,
    "patternNumber": 10,
    "title": "“一边……一边……” (Simultaneous Actions)",
    "formula": "Subject + 一边 + Action 1 + 一边 + Action 2",
    "explanation": "Expresses two actions carried out simultaneously at the same time.",
    "examples": [
      {
        "chinese": "我们一边喝咖啡一边聊天。",
        "pinyin": "Wǒmen yìbiān hē kāfēi yìbiān liáotiān.",
        "english": "We chat while drinking coffee."
      },
      {
        "chinese": "他喜欢一边听音乐一边做作业。",
        "pinyin": "Tā xǐhuan yìbiān tīng yīnyuè yìbiān zuò zuòyè.",
        "english": "He likes doing homework while listening to music."
      },
      {
        "chinese": "别一边走路一边看手机。",
        "pinyin": "Bié yìbiān zǒulù yìbiān kàn shǒujī.",
        "english": "Don't look at your phone while walking."
      }
    ]
  },
  {
    "id": "hsk3-p11",
    "level": 3,
    "patternNumber": 11,
    "title": "“连……都 / 也……” (Emphatic Extreme)",
    "formula": "Subject + 连 + Object / Point + 都 / 也 + Verb",
    "explanation": "Highlights an extreme or unexpected case (equivalent to English 'even').",
    "examples": [
      {
        "chinese": "这个问题太简单了，连小孩子都知道。",
        "pinyin": "Zhège wèntí tài jiǎndān le, lián xiǎoháizi dōu zhīdào.",
        "english": "This question is so simple, even a small child knows it."
      },
      {
        "chinese": "他太忙了，连早饭都没吃就去上班了。",
        "pinyin": "Tā tài máng le, lián zǎofàn dōu méi chī jiù qù shàngbān le.",
        "english": "He was so busy he went to work without even eating breakfast."
      },
      {
        "chinese": "我太累了，连一句话都不想说。",
        "pinyin": "Wǒ tài lèi le, lián yí jù huà dōu bù xiǎng shuō.",
        "english": "I'm so exhausted I don't even want to say a single word."
      }
    ]
  },
  {
    "id": "hsk3-p12",
    "level": 3,
    "patternNumber": 12,
    "title": "“一……就……” (Immediate Sequence)",
    "formula": "Subject + 一 + Action 1 + 就 + Action 2",
    "explanation": "Indicates that Action 2 occurs immediately as soon as Action 1 takes place (as soon as... then...).",
    "examples": [
      {
        "chinese": "他一下课就回家了。",
        "pinyin": "Tā yí xiàkè jiù huí jiā le.",
        "english": "As soon as class ended, he went home."
      },
      {
        "chinese": "我一到北京就给你打电话。",
        "pinyin": "Wǒ yí dào běijīng jiù gěi nǐ dǎ diànhuà.",
        "english": "As soon as I arrive in Beijing, I will call you."
      },
      {
        "chinese": "大家一听到这个好消息就高兴地跳了起来。",
        "pinyin": "Dàjiā yì tīngdào zhège hǎo xiāoxi jiù gāoxìng de tiào le qǐlái.",
        "english": "As soon as everyone heard the good news, they jumped with joy."
      }
    ]
  },
  {
    "id": "hsk3-p13",
    "level": 3,
    "patternNumber": 13,
    "title": "“先……然后……” (Sequential Chronology)",
    "formula": "先 + Step 1 + 然后 + Step 2",
    "explanation": "Establishes a structured step-by-step order of operations (first... then...).",
    "examples": [
      {
        "chinese": "我们先复习生词，然后做练习题。",
        "pinyin": "Wǒmen xiān fùxí shēngcí, ránhòu zuò liànxítí.",
        "english": "We first review the vocabulary, and then do exercise questions."
      },
      {
        "chinese": "请先洗手，然后吃饭。",
        "pinyin": "Qǐng xiān xǐshǒu, ránhòu chīfàn.",
        "english": "Please wash your hands first, and then eat."
      },
      {
        "chinese": "你先去办公室找经理，然后再来找我。",
        "pinyin": "Nǐ xiān qù bàngōngshì zhǎo jīnglǐ, ránhòu zài lái zhǎo wǒ.",
        "english": "First go to the office to see the manager, then come see me."
      }
    ]
  },
  {
    "id": "hsk3-p14",
    "level": 3,
    "patternNumber": 14,
    "title": "“对……感兴趣” (Expressing Interest)",
    "formula": "Subject + 对 + Topic + 感兴趣 / 有兴趣",
    "explanation": "Standard fixed prepositional construction to express intellectual or recreational interest in something.",
    "examples": [
      {
        "chinese": "我对中国书法非常感兴趣。",
        "pinyin": "Wǒ duì zhōngguó shūfǎ fēicháng gǎn xìngqù.",
        "english": "I am extremely interested in Chinese calligraphy."
      },
      {
        "chinese": "你对哪门课程最感兴趣？",
        "pinyin": "Nǐ duì nǎ mén kèchéng zuì gǎn xìngqù?",
        "english": "Which course are you most interested in?"
      },
      {
        "chinese": "小孩子对什么都感兴趣。",
        "pinyin": "Xiǎoháizi duì shénme dōu gǎn xìngqù.",
        "english": "Children are interested in everything."
      }
    ]
  },
  {
    "id": "hsk3-p15",
    "level": 3,
    "patternNumber": 15,
    "title": "“为……着想” (Showing Consideration)",
    "formula": "为 + Someone / Goal + 着想",
    "explanation": "Expresses considering someone else's interests or planning ahead for a goal.",
    "examples": [
      {
        "chinese": "我们要多为别人的健康着想。",
        "pinyin": "Wǒmen yào duō wèi biérén de jiànkāng zhuóxiǎng.",
        "english": "We should consider other people's health more."
      },
      {
        "chinese": "父母总是为孩子的将来着想。",
        "pinyin": "Fùmǔ zǒngshì wèi háizi de jiānglái zhuóxiǎng.",
        "english": "Parents always plan with consideration for their children's future."
      },
      {
        "chinese": "这是为了你的安全着想。",
        "pinyin": "Zhè shì wèile nǐ de ānquán zhuóxiǎng.",
        "english": "This is in consideration of your safety."
      }
    ]
  },
  {
    "id": "hsk3-p16",
    "level": 3,
    "patternNumber": 16,
    "title": "“动词 1 + 着 + 动词 2” (Concomitant Manner)",
    "formula": "Verb 1 + 着 + Verb 2",
    "explanation": "Verb 1 indicates the physical manner or sustained posture in which Verb 2 is performed.",
    "examples": [
      {
        "chinese": "她总是笑着跟客人说话。",
        "pinyin": "Tā zǒngshì xiào zhe gēn kèrén shuōhuà.",
        "english": "She always smiles while talking to guests."
      },
      {
        "chinese": "他们站着等了半个小时。",
        "pinyin": "Tāmen zhàn zhe děng le bàn ge xiǎoshí.",
        "english": "They waited on their feet for half an hour."
      },
      {
        "chinese": "老师手里拿着一本书走进教室。",
        "pinyin": "Lǎoshī shǒulǐ ná zhe yì běn shū zǒu jìn jiàoshì.",
        "english": "Holding a book in hand, the teacher walked into the classroom."
      }
    ]
  },
  {
    "id": "hsk3-p17",
    "level": 3,
    "patternNumber": 17,
    "title": "复合趋向补语 (Compound Directional)",
    "formula": "Action Verb + (上/下/进/出/回/过/起) + (来/去)",
    "explanation": "Combines a movement verb with directional markers indicating path and perspective relative to the speaker.",
    "examples": [
      {
        "chinese": "他从包里拿出来了一本新词典。",
        "pinyin": "Tā cóng bāo lǐ ná chūlái le yì běn xīn cídiǎn.",
        "english": "He took out a new dictionary from his bag."
      },
      {
        "chinese": "请大家快点儿跑进去，外面下大雨了。",
        "pinyin": "Qǐng dàjiā kuài diǎnr pǎo jìnqù, wàimiàn xià dà yǔ le.",
        "english": "Please run inside quickly, it's raining heavily outside."
      },
      {
        "chinese": "太阳从东边升起来了。",
        "pinyin": "Tàiyáng cóng dōngbian shēng qǐlái le.",
        "english": "The sun has risen from the east."
      }
    ]
  },
  {
    "id": "hsk3-p18",
    "level": 3,
    "patternNumber": 18,
    "title": "状态补语扩展 (Descriptive Clause)",
    "formula": "Adjective + 得 + Clause",
    "explanation": "Introduces a full descriptive consequence or reaction resulting from an adjective's intensity.",
    "examples": [
      {
        "chinese": "我现在累得想睡觉。",
        "pinyin": "Wǒ xiànzài lèi de xiǎng shuìjiào.",
        "english": "I am so tired right now that I just want to sleep."
      },
      {
        "chinese": "听到这个好消息，他高兴得跳了起来。",
        "pinyin": "Tīngdào zhège hǎo xiāoxi, tā gāoxìng de tiào le qǐlái.",
        "english": "Hearing the good news, he was so happy he jumped up."
      },
      {
        "chinese": "天气热得大家都不想出门。",
        "pinyin": "Tiānqì rè de dàjiā dōu bù xiǎng chū mén.",
        "english": "The weather was so hot that nobody wanted to go outside."
      }
    ]
  },
  {
    "id": "hsk3-p19",
    "level": 3,
    "patternNumber": 19,
    "title": "“只有……才……” (Conditional Necessity)",
    "formula": "只有 + Essential Condition, 才 + Result",
    "explanation": "Emphasizes the singular indispensability of a prerequisite condition (only if... then...).",
    "examples": [
      {
        "chinese": "只有认真努力，才能通过 HSK 考试。",
        "pinyin": "Zhǐyǒu rènzhēn nǔlì, cái néng tōngguò HSK kǎoshì.",
        "english": "Only by working conscientiously can one pass the HSK exam."
      },
      {
        "chinese": "只有身体健康，才能更好地工作和学习。",
        "pinyin": "Zhǐyǒu shēntǐ jiànkāng, cái néng gèng hǎo de gōngzuò hé xuéxí.",
        "english": "Only with good health can one work and study better."
      },
      {
        "chinese": "只有多练习，汉语才能说得流利。",
        "pinyin": "Zhǐyǒu duō liànxí, hànyǔ cái néng shuō de liúlì.",
        "english": "Only by practicing more can one speak Chinese fluently."
      }
    ]
  },
  {
    "id": "hsk3-p20",
    "level": 3,
    "patternNumber": 20,
    "title": "引申趋向补语 (Extended Complements)",
    "formula": "Verb + 出来 / 起来 / 下去",
    "explanation": "Metaphorical extensions: 出来 (discern/identify), 起来 (start/upward), 下去 (continue onwards).",
    "examples": [
      {
        "chinese": "你听出来这是谁的声音了吗？",
        "pinyin": "Nǐ tīng chūlái zhè shì shéi de shēngyīn le ma?",
        "english": "Did you discern whose voice this is by ear?"
      },
      {
        "chinese": "我想起来他的名字了！",
        "pinyin": "Wǒ xiǎng qǐlái tā de míngzi le!",
        "english": "I suddenly recalled his name!"
      },
      {
        "chinese": "请大家坚持学下去，一定会成功的。",
        "pinyin": "Qǐng dàjiā jiānchí xué xiàqù, yídìng huì chénggōng de.",
        "english": "Please persevere in studying onward, you will surely succeed."
      }
    ]
  }
];

export function getPatternsByLevel(level: 1 | 2 | 3): SentencePatternEntry[] {
  return SENTENCE_PATTERNS_DATA.filter(p => p.level === level)
}

export function getPatternById(id: string): SentencePatternEntry | undefined {
  return SENTENCE_PATTERNS_DATA.find(p => p.id === id)
}

export function getPatternByIndex(level: 1 | 2 | 3, index: number): SentencePatternEntry | undefined {
  return SENTENCE_PATTERNS_DATA.find(p => p.level === level && p.patternNumber === index)
}
