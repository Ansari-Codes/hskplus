// HSK Plus Official Standard Lessons Database
// 15 Standard Lessons for HSK 1, 15 Lessons for HSK 2, and 20 Lessons for HSK 3
// Aligned with official BLCUP HSK Standard Course Textbooks

export interface LessonVocabItem {
  character: string
  pinyin: string
  meaning: string
}

export interface LessonGrammarItem {
  title: string
  pattern: string
  explanation: string
  examples: { chinese: string; pinyin: string; english: string }[]
}

export interface LessonDialogueLine {
  speaker: string
  avatar: string
  chinese: string
  pinyin: string
  english: string
}

export interface LessonExercise {
  question: string
  options: string[]
  answer: number
  explanation: string
}

export interface LessonEntry {
  id: string
  level: 1 | 2 | 3
  lessonNumber: number
  title: string
  pinyin: string
  english: string
  summary: string
  vocabulary: LessonVocabItem[]
  grammar: LessonGrammarItem[]
  dialogue: LessonDialogueLine[]
  culture: string
  exercises: LessonExercise[]
}

export const LESSONS_DATA: LessonEntry[] = [
  {
    "id": "hsk1-l1",
    "level": 1,
    "lessonNumber": 1,
    "title": "你好",
    "pinyin": "Nǐ hǎo",
    "english": "Hello",
    "summary": "Master basic Chinese greetings, polite address, subject pronouns, and third-tone sandhi rules.",
    "vocabulary": [
      {
        "character": "你",
        "pinyin": "nǐ",
        "meaning": "you"
      },
      {
        "character": "好",
        "pinyin": "hǎo",
        "meaning": "good; fine; well"
      },
      {
        "character": "您",
        "pinyin": "nín",
        "meaning": "you (polite honorific)"
      },
      {
        "character": "你们",
        "pinyin": "nǐmen",
        "meaning": "you (plural)"
      },
      {
        "character": "对不起",
        "pinyin": "duìbuqǐ",
        "meaning": "sorry; excuse me"
      },
      {
        "character": "没关系",
        "pinyin": "méi guānxi",
        "meaning": "that's all right; it doesn't matter"
      }
    ],
    "grammar": [
      {
        "title": "Basic Greeting: 你好 / 您好",
        "pattern": "Pronoun + 好",
        "explanation": "In Chinese, '你好' is the standard greeting to a peer or acquaintance. '您好' shows respect to an elder or superior. In response, one also says '你好' or '您好'.",
        "examples": [
          {
            "chinese": "你好！",
            "pinyin": "Nǐ hǎo!",
            "english": "Hello!"
          },
          {
            "chinese": "老师，您好！",
            "pinyin": "Lǎoshī, nín hǎo!",
            "english": "Hello, teacher!"
          }
        ]
      },
      {
        "title": "Apologizing & Responding: 对不起 / 没关系",
        "pattern": "对不起 ↔ 没关系",
        "explanation": "'对不起' is used to apologize for an error or inconvenience. The standard polite response is '没关系'.",
        "examples": [
          {
            "chinese": "对不起！",
            "pinyin": "Duìbuqǐ!",
            "english": "I am sorry!"
          },
          {
            "chinese": "没关系，请坐。",
            "pinyin": "Méi guānxi, qǐng zuò.",
            "english": "That's all right, please sit down."
          }
        ]
      }
    ],
    "dialogue": [
      {
        "speaker": "李月",
        "avatar": "👩‍🏫",
        "chinese": "你好！",
        "pinyin": "Nǐ hǎo!",
        "english": "Hello!"
      },
      {
        "speaker": "大卫",
        "avatar": "👨‍🎓",
        "chinese": "你好！",
        "pinyin": "Nǐ hǎo!",
        "english": "Hello!"
      },
      {
        "speaker": "大卫",
        "avatar": "👨‍🎓",
        "chinese": "老师，您好！",
        "pinyin": "Lǎoshī, nín hǎo!",
        "english": "Teacher, hello!"
      },
      {
        "speaker": "李月",
        "avatar": "👩‍🏫",
        "chinese": "你们好！",
        "pinyin": "Nǐmen hǎo!",
        "english": "Hello everyone!"
      },
      {
        "speaker": "大卫",
        "avatar": "👨‍🎓",
        "chinese": "对不起！",
        "pinyin": "Duìbuqǐ!",
        "english": "I'm sorry!"
      },
      {
        "speaker": "李月",
        "avatar": "👩‍🏫",
        "chinese": "没关系。",
        "pinyin": "Méi guānxi.",
        "english": "That's all right."
      }
    ],
    "culture": "When two third tones appear together (nǐ + hǎo), the first third tone shifts into a second tone (ní hǎo). This tone sandhi applies to all consecutive third tones.",
    "exercises": [
      {
        "question": "How do you politely greet your Chinese teacher?",
        "options": [
          "您好！",
          "对不起！",
          "没关系！",
          "再见！"
        ],
        "answer": 0,
        "explanation": "'您好' is the polite honorific greeting used for teachers and elders."
      },
      {
        "question": "When someone says '对不起', what is the appropriate reply?",
        "options": [
          "没关系",
          "你好",
          "你们好",
          "谢谢"
        ],
        "answer": 0,
        "explanation": "'没关系' means 'that's all right' or 'no problem'."
      }
    ]
  },
  {
    "id": "hsk1-l2",
    "level": 1,
    "lessonNumber": 2,
    "title": "谢谢你",
    "pinyin": "Xièxie nǐ",
    "english": "Thank You",
    "summary": "Express gratitude with 谢谢, respond politely with 不客气, say goodbye with 再见, and understand tone change of 不.",
    "vocabulary": [
      {
        "character": "谢谢",
        "pinyin": "xièxie",
        "meaning": "to thank; thanks"
      },
      {
        "character": "不",
        "pinyin": "bù",
        "meaning": "no; not"
      },
      {
        "character": "不客气",
        "pinyin": "bú kèqi",
        "meaning": "you are welcome"
      },
      {
        "character": "再见",
        "pinyin": "zàijiàn",
        "meaning": "goodbye; see you again"
      }
    ],
    "grammar": [
      {
        "title": "Expressing Gratitude & Responding",
        "pattern": "谢谢 (你) ↔ 不客气 / 不谢",
        "explanation": "To express thanks, say '谢谢' or '谢谢你'. The standard polite replies are '不客气' (you're welcome) or '不谢' (no need to thank).",
        "examples": [
          {
            "chinese": "谢谢你！",
            "pinyin": "Xièxie nǐ!",
            "english": "Thank you!"
          },
          {
            "chinese": "不客气，不用谢。",
            "pinyin": "Bú kèqi, bú yòng xiè.",
            "english": "You're welcome, no need for thanks."
          }
        ]
      },
      {
        "title": "Tone Sandhi of '不' (bù)",
        "pattern": "不 + 4th tone → bú + 4th tone",
        "explanation": "When '不' is followed by another fourth tone syllable (such as 客 kè, 是 shì, 对 duì), '不' changes from 4th tone to 2nd tone: 不客气 (bú kèqi), 不是 (bú shì).",
        "examples": [
          {
            "chinese": "不客气。",
            "pinyin": "Bú kèqi.",
            "english": "You are welcome."
          },
          {
            "chinese": "我不是老师。",
            "pinyin": "Wǒ bú shì lǎoshī.",
            "english": "I am not a teacher."
          }
        ]
      }
    ],
    "dialogue": [
      {
        "speaker": "玛丽",
        "avatar": "👩‍🎓",
        "chinese": "谢谢你！",
        "pinyin": "Xièxie nǐ!",
        "english": "Thank you!"
      },
      {
        "speaker": "大卫",
        "avatar": "👨‍🎓",
        "chinese": "不客气！",
        "pinyin": "Bú kèqi!",
        "english": "You're welcome!"
      },
      {
        "speaker": "玛丽",
        "avatar": "👩‍🎓",
        "chinese": "再见！",
        "pinyin": "Zàijiàn!",
        "english": "Goodbye!"
      },
      {
        "speaker": "大卫",
        "avatar": "👨‍🎓",
        "chinese": "再见！明天见！",
        "pinyin": "Zàijiàn! Míngtiān jiàn!",
        "english": "Goodbye! See you tomorrow!"
      }
    ],
    "culture": "The Chinese farewell '再见' literally means 'again see' (see you again), expressing optimism for future encounters.",
    "exercises": [
      {
        "question": "What is the tone of '不' in '不客气'?",
        "options": [
          "Second tone (bú)",
          "Fourth tone (bù)",
          "First tone (bū)",
          "Neutral tone (bu)"
        ],
        "answer": 0,
        "explanation": "Before a 4th-tone syllable like '客' (kè), '不' shifts to 2nd tone: bú kèqi."
      },
      {
        "question": "How do you say 'Goodbye' in Mandarin?",
        "options": [
          "再见",
          "谢谢",
          "没关系",
          "你好"
        ],
        "answer": 0,
        "explanation": "'再见' (zàijiàn) means goodbye."
      }
    ]
  },
  {
    "id": "hsk1-l3",
    "level": 1,
    "lessonNumber": 3,
    "title": "你叫什么名字",
    "pinyin": "Nǐ jiào shénme míngzi",
    "english": "What's Your Name?",
    "summary": "Inquire about names with 叫 and 什么, introduce oneself with 我叫..., and form equational sentences with 是.",
    "vocabulary": [
      {
        "character": "叫",
        "pinyin": "jiào",
        "meaning": "to be called; to call"
      },
      {
        "character": "什么",
        "pinyin": "shénme",
        "meaning": "what"
      },
      {
        "character": "名字",
        "pinyin": "míngzi",
        "meaning": "name"
      },
      {
        "character": "我",
        "pinyin": "wǒ",
        "meaning": "I; me"
      },
      {
        "character": "是",
        "pinyin": "shì",
        "meaning": "to be (am, is, are)"
      },
      {
        "character": "老师",
        "pinyin": "lǎoshī",
        "meaning": "teacher"
      },
      {
        "character": "学生",
        "pinyin": "xuésheng",
        "meaning": "student"
      },
      {
        "character": "人",
        "pinyin": "rén",
        "meaning": "person; people"
      }
    ],
    "grammar": [
      {
        "title": "Asking Names with '什么'",
        "pattern": "主语 + 叫 + 什么 + 名字？",
        "explanation": "In Chinese questions, the question word '什么' stays in the position where the answer would appear, without inverting subject and verb.",
        "examples": [
          {
            "chinese": "你叫什么名字？",
            "pinyin": "Nǐ jiào shénme míngzi?",
            "english": "What is your name?"
          },
          {
            "chinese": "我叫李月。",
            "pinyin": "Wǒ jiào Lǐ Yuè.",
            "english": "My name is Li Yue."
          }
        ]
      },
      {
        "title": "The '是' Sentence (Identity)",
        "pattern": "主语 + 是 + 宾语 (否定: 不是)",
        "explanation": "'是' links subject and predicate noun phrase, expressing equivalence or category membership.",
        "examples": [
          {
            "chinese": "我是学生。",
            "pinyin": "Wǒ shì xuésheng.",
            "english": "I am a student."
          },
          {
            "chinese": "我不是老师。",
            "pinyin": "Wǒ bú shì lǎoshī.",
            "english": "I am not a teacher."
          }
        ]
      }
    ],
    "dialogue": [
      {
        "speaker": "大卫",
        "avatar": "👨‍🎓",
        "chinese": "你叫什么名字？",
        "pinyin": "Nǐ jiào shénme míngzi?",
        "english": "What is your name?"
      },
      {
        "speaker": "李月",
        "avatar": "👩‍🏫",
        "chinese": "我叫李月。你叫什么名字？",
        "pinyin": "Wǒ jiào Lǐ Yuè. Nǐ jiào shénme míngzi?",
        "english": "My name is Li Yue. What is your name?"
      },
      {
        "speaker": "大卫",
        "avatar": "👨‍🎓",
        "chinese": "我叫大卫。你是老师吗？",
        "pinyin": "Wǒ jiào Dàwèi. Nǐ shì lǎoshī ma?",
        "english": "My name is David. Are you a teacher?"
      },
      {
        "speaker": "李月",
        "avatar": "👩‍🏫",
        "chinese": "我不是老师，我是学生。",
        "pinyin": "Wǒ bú shì lǎoshī, wǒ shì xuésheng.",
        "english": "I am not a teacher, I am a student."
      }
    ],
    "culture": "Chinese names place the family surname first, followed by the given name. For example, in '李月', '李' (Li) is the family surname and '月' (Yue) is the personal name.",
    "exercises": [
      {
        "question": "Complete the sentence: 我不是老师，我______学生。",
        "options": [
          "是",
          "叫",
          "什么",
          "吗"
        ],
        "answer": 0,
        "explanation": "'是' is the equational verb meaning 'am/is/are'."
      },
      {
        "question": "How do you ask someone's name in Chinese?",
        "options": [
          "你叫什么名字？",
          "你是谁？",
          "你好吗？",
          "他在哪儿？"
        ],
        "answer": 0,
        "explanation": "'你叫什么名字？' means 'What is your name?'."
      }
    ]
  },
  {
    "id": "hsk1-l4",
    "level": 1,
    "lessonNumber": 4,
    "title": "她是我的汉语老师",
    "pinyin": "Tā shì wǒ de hànyǔ lǎoshī",
    "english": "She is My Chinese Teacher",
    "summary": "Master possessive particle 的, question pronoun 谁, specify countries with 哪国人, and introduce classmates.",
    "vocabulary": [
      {
        "character": "她",
        "pinyin": "tā",
        "meaning": "she; her"
      },
      {
        "character": "谁",
        "pinyin": "shéi / shuí",
        "meaning": "who; whom"
      },
      {
        "character": "的",
        "pinyin": "de",
        "meaning": "possessive structural particle"
      },
      {
        "character": "汉语",
        "pinyin": "hànyǔ",
        "meaning": "Chinese language"
      },
      {
        "character": "哪",
        "pinyin": "nǎ",
        "meaning": "which"
      },
      {
        "character": "国",
        "pinyin": "guó",
        "meaning": "country; nation"
      },
      {
        "character": "同学",
        "pinyin": "tóngxué",
        "meaning": "classmate"
      },
      {
        "character": "朋友",
        "pinyin": "péngyou",
        "meaning": "friend"
      },
      {
        "character": "中国",
        "pinyin": "zhōngguó",
        "meaning": "China"
      },
      {
        "character": "美国",
        "pinyin": "měiguó",
        "meaning": "United States"
      }
    ],
    "grammar": [
      {
        "title": "Structural Particle '的' for Possession",
        "pattern": "Noun/Pronoun + 的 + Noun",
        "explanation": "'的' indicates possession or modification. When referring to close relationships (like family), '的' can optionally be omitted.",
        "examples": [
          {
            "chinese": "她是我的汉语老师。",
            "pinyin": "Tā shì wǒ de hànyǔ lǎoshī.",
            "english": "She is my Chinese teacher."
          },
          {
            "chinese": "他是我的同学。",
            "pinyin": "Tā shì wǒ de tóngxué.",
            "english": "He is my classmate."
          }
        ]
      },
      {
        "title": "Asking Nationality with '哪国人'",
        "pattern": "主语 + 是 + 哪国人？",
        "explanation": "'哪国人' asks which country someone comes from. The response replaces '哪' with the country name.",
        "examples": [
          {
            "chinese": "你是哪国人？",
            "pinyin": "Nǐ shì nǎ guó rén?",
            "english": "What nationality are you?"
          },
          {
            "chinese": "我是中国人，他是美国人。",
            "pinyin": "Wǒ shì zhōngguó rén, tā shì měiguó rén.",
            "english": "I am Chinese, he is American."
          }
        ]
      }
    ],
    "dialogue": [
      {
        "speaker": "大卫",
        "avatar": "👨‍🎓",
        "chinese": "她是谁？",
        "pinyin": "Tā shì shéi?",
        "english": "Who is she?"
      },
      {
        "speaker": "李月",
        "avatar": "👩‍🏫",
        "chinese": "她是我的汉语老师，她叫李老师。",
        "pinyin": "Tā shì wǒ de hànyǔ lǎoshī, tā jiào Lǐ lǎoshī.",
        "english": "She is my Chinese teacher, she is Teacher Li."
      },
      {
        "speaker": "大卫",
        "avatar": "👨‍🎓",
        "chinese": "她是哪国人？",
        "pinyin": "Tā shì nǎ guó rén?",
        "english": "What nationality is she?"
      },
      {
        "speaker": "李月",
        "avatar": "👩‍🏫",
        "chinese": "她是中国人。他是你的同学吗？",
        "pinyin": "Tā shì zhōngguó rén. Tā shì nǐ de tóngxué ma?",
        "english": "She is Chinese. Is he your classmate?"
      },
      {
        "speaker": "大卫",
        "avatar": "👨‍🎓",
        "chinese": "他是我的同学，也是我的好朋友。",
        "pinyin": "Tā shì wǒ de tóngxué, yě shì wǒ de hǎo péngyou.",
        "english": "He is my classmate, and also my good friend."
      }
    ],
    "culture": "The word for China, 中国 (Zhōngguó), literally means 'Central Kingdom' or 'Middle Kingdom', reflecting ancient Chinese geographical perception.",
    "exercises": [
      {
        "question": "Translate: 'She is my Chinese teacher.'",
        "options": [
          "她是我的汉语老师。",
          "我是她的学生。",
          "她是哪国人？",
          "他叫什么名字？"
        ],
        "answer": 0,
        "explanation": "'她' (she) + '是' (is) + '我的汉语老师' (my Chinese teacher)."
      },
      {
        "question": "How do you ask 'Which country are you from?'",
        "options": [
          "你是哪国人？",
          "她是谁？",
          "你叫什么？",
          "你在哪儿？"
        ],
        "answer": 0,
        "explanation": "'哪国人' specifically inquires about country of origin / nationality."
      }
    ]
  },
  {
    "id": "hsk1-l5",
    "level": 1,
    "lessonNumber": 5,
    "title": "她女儿今年二十岁",
    "pinyin": "Tā nǚ'ér jīnnián èrshí suì",
    "english": "Her Daughter is 20 Years Old This Year",
    "summary": "Inquire family members with 口, state age with 岁, ask age with 多大, and count numbers up to 100.",
    "vocabulary": [
      {
        "character": "家",
        "pinyin": "jiā",
        "meaning": "family; home"
      },
      {
        "character": "有",
        "pinyin": "yǒu",
        "meaning": "to have; there is/are"
      },
      {
        "character": "几",
        "pinyin": "jǐ",
        "meaning": "how many (<10)"
      },
      {
        "character": "口",
        "pinyin": "kǒu",
        "meaning": "measure word for family members"
      },
      {
        "character": "照片",
        "pinyin": "zhàopiàn",
        "meaning": "photo; picture"
      },
      {
        "character": "女儿",
        "pinyin": "nǚ'ér",
        "meaning": "daughter"
      },
      {
        "character": "岁",
        "pinyin": "suì",
        "meaning": "years old (age)"
      },
      {
        "character": "今年",
        "pinyin": "jīnnián",
        "meaning": "this year"
      },
      {
        "character": "多大",
        "pinyin": "duō dà",
        "meaning": "how old"
      }
    ],
    "grammar": [
      {
        "title": "Expressing Age with '岁'",
        "pattern": "主语 + (今年) + Number + 岁",
        "explanation": "In Chinese, stating age does not require the verb '是'. Simply state the subject, time word, number, and '岁'.",
        "examples": [
          {
            "chinese": "她女儿今年二十岁。",
            "pinyin": "Tā nǚ'ér jīnnián èrshí suì.",
            "english": "Her daughter is 20 years old this year."
          },
          {
            "chinese": "你女儿今年几岁？",
            "pinyin": "Nǐ nǚ'ér jīnnián jǐ suì?",
            "english": "How old is your daughter this year?"
          }
        ]
      },
      {
        "title": "Asking Number with '几' (<10)",
        "pattern": "几 + Measure Word + Noun",
        "explanation": "'几' asks about small numbers, typically under 10. For family members, the measure word is '口'.",
        "examples": [
          {
            "chinese": "你家有几口人？",
            "pinyin": "Nǐ jiā yǒu jǐ kǒu rén?",
            "english": "How many people are there in your family?"
          },
          {
            "chinese": "我家有三口人。",
            "pinyin": "Wǒ jiā yǒu sān kǒu rén.",
            "english": "There are three people in my family."
          }
        ]
      }
    ],
    "dialogue": [
      {
        "speaker": "大卫",
        "avatar": "👨‍🎓",
        "chinese": "你家有几口人？",
        "pinyin": "Nǐ jiā yǒu jǐ kǒu rén?",
        "english": "How many people are there in your family?"
      },
      {
        "speaker": "李月",
        "avatar": "👩‍🏫",
        "chinese": "我家有三口人：爸爸、妈妈和我。",
        "pinyin": "Wǒ jiā yǒu sān kǒu rén: bàba, māma hé wǒ.",
        "english": "My family has three people: dad, mom, and me."
      },
      {
        "speaker": "大卫",
        "avatar": "👨‍🎓",
        "chinese": "李老师今年多大了？",
        "pinyin": "Lǐ lǎoshī jīnnián duō dà le?",
        "english": "How old is Teacher Li this year?"
      },
      {
        "speaker": "李月",
        "avatar": "👩‍🏫",
        "chinese": "她今年五十岁。她女儿今年二十岁。",
        "pinyin": "Tā jīnnián wǔshí suì. Tā nǚ'ér jīnnián èrshí suì.",
        "english": "She is 50 years old this year. Her daughter is 20."
      }
    ],
    "culture": "When asking age: for children under 10 use '几岁'; for peers or young adults use '多大'; for respected elders use '多大年纪' or '您高寿'.",
    "exercises": [
      {
        "question": "How do you ask a peer how old they are?",
        "options": [
          "你今年多大？",
          "你有几口人？",
          "你叫什么？",
          "你是哪国人？"
        ],
        "answer": 0,
        "explanation": "'你今年多大？' is the standard way to ask someone's age."
      },
      {
        "question": "What is the measure word for family members in '我家有三____人'?",
        "options": [
          "口",
          "个",
          "本",
          "岁"
        ],
        "answer": 0,
        "explanation": "'口' (kǒu) is the traditional measure word for members of a household."
      }
    ]
  },
  {
    "id": "hsk1-l6",
    "level": 1,
    "lessonNumber": 6,
    "title": "我会说汉语",
    "pinyin": "Wǒ huì shuō hànyǔ",
    "english": "I Can Speak Chinese",
    "summary": "Express acquired abilities with modal verb 会, ask yes-no questions with 吗, and talk about Chinese food.",
    "vocabulary": [
      {
        "character": "会",
        "pinyin": "huì",
        "meaning": "can; know how to (via learning)"
      },
      {
        "character": "说",
        "pinyin": "shuō",
        "meaning": "to speak; to say"
      },
      {
        "character": "菜",
        "pinyin": "cài",
        "meaning": "dish; cuisine; food"
      },
      {
        "character": "很",
        "pinyin": "hěn",
        "meaning": "very; quite"
      },
      {
        "character": "好吃",
        "pinyin": "hǎochī",
        "meaning": "delicious; tasty"
      },
      {
        "character": "做",
        "pinyin": "zuò",
        "meaning": "to make; to cook; to do"
      },
      {
        "character": "写",
        "pinyin": "xiě",
        "meaning": "to write"
      },
      {
        "character": "汉字",
        "pinyin": "hànzì",
        "meaning": "Chinese character"
      },
      {
        "character": "字",
        "pinyin": "zì",
        "meaning": "character; word"
      },
      {
        "character": "怎么",
        "pinyin": "zěnme",
        "meaning": "how (manner of action)"
      },
      {
        "character": "读",
        "pinyin": "dú",
        "meaning": "to read"
      }
    ],
    "grammar": [
      {
        "title": "Modal Verb '会' (Acquired Ability)",
        "pattern": "主语 + 会 / 不会 + 动词",
        "explanation": "'会' signifies an ability acquired through learning or practice. Its negative form is '不会'.",
        "examples": [
          {
            "chinese": "我会说汉语，不会写汉字。",
            "pinyin": "Wǒ huì shuō hànyǔ, bú huì xiě hànzì.",
            "english": "I can speak Chinese, I can't write characters."
          },
          {
            "chinese": "你会做中国菜吗？",
            "pinyin": "Nǐ huì zuò zhōngguó cài ma?",
            "english": "Can you cook Chinese food?"
          }
        ]
      },
      {
        "title": "Asking How with '怎么 + 动词'",
        "pattern": "怎么 + 动词",
        "explanation": "'怎么' placed before a verb inquires about the method or manner of carrying out an action.",
        "examples": [
          {
            "chinese": "这个汉字怎么写？",
            "pinyin": "Zhè ge hànzì zěnme xiě?",
            "english": "How do you write this Chinese character?"
          },
          {
            "chinese": "这个字怎么读？",
            "pinyin": "Zhè ge zì zěnme dú?",
            "english": "How do you read this character?"
          }
        ]
      }
    ],
    "dialogue": [
      {
        "speaker": "大卫",
        "avatar": "👨‍🎓",
        "chinese": "你会说汉语吗？",
        "pinyin": "Nǐ huì shuō hànyǔ ma?",
        "english": "Can you speak Chinese?"
      },
      {
        "speaker": "玛丽",
        "avatar": "👩‍🎓",
        "chinese": "我会说汉语。你会写汉字吗？",
        "pinyin": "Wǒ huì shuō hànyǔ. Nǐ huì xiě hànzì ma?",
        "english": "I can speak Chinese. Can you write characters?"
      },
      {
        "speaker": "大卫",
        "avatar": "👨‍🎓",
        "chinese": "我会写汉字。中国菜好吃吗？",
        "pinyin": "Wǒ huì xiě hànzì. Zhōngguó cài hǎochī ma?",
        "english": "I can write characters. Is Chinese food delicious?"
      },
      {
        "speaker": "玛丽",
        "avatar": "👩‍🎓",
        "chinese": "中国菜很好吃！你会做中国菜吗？",
        "pinyin": "Zhōngguó cài hěn hǎochī! Nǐ huì zuò zhōngguó cài ma?",
        "english": "Chinese food is very delicious! Can you cook Chinese food?"
      },
      {
        "speaker": "大卫",
        "avatar": "👨‍🎓",
        "chinese": "我不会做，我妈妈会做。",
        "pinyin": "Wǒ bú huì zuò, wǒ māma huì zuò.",
        "english": "I cannot cook it, my mom can."
      }
    ],
    "culture": "Chinese culinary tradition emphasizes color, fragrance, and taste (色香味俱全). Dishes are typically shared communally from central plates.",
    "exercises": [
      {
        "question": "How do you say 'I can cook Chinese food'?",
        "options": [
          "我会做中国菜。",
          "我想吃中国菜。",
          "我不做中国菜。",
          "中国菜很好吃。"
        ],
        "answer": 0,
        "explanation": "'会' denotes learned ability, so '我会做' means 'I know how to cook'."
      },
      {
        "question": "How do you ask 'How do you write this character?'",
        "options": [
          "这个汉字怎么写？",
          "这个汉字是什么？",
          "谁写汉字？",
          "你会写汉字吗？"
        ],
        "answer": 0,
        "explanation": "'怎么 + 动词' asks how an action is performed: 怎么写."
      }
    ]
  },
  {
    "id": "hsk1-l7",
    "level": 1,
    "lessonNumber": 7,
    "title": "今天几号",
    "pinyin": "Jīntiān jǐ hào",
    "english": "What's the Date Today?",
    "summary": "Express year, month, date, days of the week, and master Chinese temporal sequence (year → month → day → weekday).",
    "vocabulary": [
      {
        "character": "请问",
        "pinyin": "qǐngwèn",
        "meaning": "excuse me; may I ask"
      },
      {
        "character": "今天",
        "pinyin": "jīntiān",
        "meaning": "today"
      },
      {
        "character": "月",
        "pinyin": "yuè",
        "meaning": "month; moon"
      },
      {
        "character": "号",
        "pinyin": "hào",
        "meaning": "day of month; number"
      },
      {
        "character": "星期",
        "pinyin": "xīngqī",
        "meaning": "week"
      },
      {
        "character": "昨天",
        "pinyin": "zuótiān",
        "meaning": "yesterday"
      },
      {
        "character": "明天",
        "pinyin": "míngtiān",
        "meaning": "tomorrow"
      },
      {
        "character": "学校",
        "pinyin": "xuéxiào",
        "meaning": "school"
      },
      {
        "character": "去",
        "pinyin": "qù",
        "meaning": "to go"
      },
      {
        "character": "看书",
        "pinyin": "kàn shū",
        "meaning": "to read; read books"
      }
    ],
    "grammar": [
      {
        "title": "Chinese Date Order: Year, Month, Day, Week",
        "pattern": "年 + 月 + 号 + 星期几",
        "explanation": "Chinese always expresses time from the largest unit to the smallest: Year → Month → Day → Day of Week.",
        "examples": [
          {
            "chinese": "今天九月一号，星期三。",
            "pinyin": "Jīntiān jiǔ yuè yī hào, xīngqīsān.",
            "english": "Today is September 1st, Wednesday."
          },
          {
            "chinese": "昨天是八月三十一号。",
            "pinyin": "Zuótiān shì bā yuè sānshíyī hào.",
            "english": "Yesterday was August 31st."
          }
        ]
      },
      {
        "title": "Sentence with Serial Verb: 去 + Place + Action",
        "pattern": "主语 + 去 + 地方 + 做什么",
        "explanation": "'去' followed by a destination and a purpose verb expresses going somewhere to do something.",
        "examples": [
          {
            "chinese": "明天我去学校看书。",
            "pinyin": "Míngtiān wǒ qù xuéxiào kàn shū.",
            "english": "Tomorrow I will go to school to read."
          },
          {
            "chinese": "你去哪儿？我去中国学汉语。",
            "pinyin": "Nǐ qù nǎr? Wǒ qù zhōngguó xué hànyǔ.",
            "english": "Where are you going? I'm going to China to study Chinese."
          }
        ]
      }
    ],
    "dialogue": [
      {
        "speaker": "大卫",
        "avatar": "👨‍🎓",
        "chinese": "请问，今天几号？",
        "pinyin": "Qǐngwèn, jīntiān jǐ hào?",
        "english": "Excuse me, what is the date today?"
      },
      {
        "speaker": "李月",
        "avatar": "👩‍🏫",
        "chinese": "今天九月一号。",
        "pinyin": "Jīntiān jiǔ yuè yī hào.",
        "english": "Today is September 1st."
      },
      {
        "speaker": "大卫",
        "avatar": "👨‍🎓",
        "chinese": "今天星期几？",
        "pinyin": "Jīntiān xīngqī jǐ?",
        "english": "What day of the week is today?"
      },
      {
        "speaker": "李月",
        "avatar": "👩‍🏫",
        "chinese": "今天星期三。明天你去哪儿？",
        "pinyin": "Jīntiān xīngqīsān. Míngtiān nǐ qù nǎr?",
        "english": "Today is Wednesday. Where are you going tomorrow?"
      },
      {
        "speaker": "大卫",
        "avatar": "👨‍🎓",
        "chinese": "明天我去学校看书。",
        "pinyin": "Míngtiān wǒ qù xuéxiào kàn shū.",
        "english": "Tomorrow I'm going to school to read."
      }
    ],
    "culture": "In spoken Chinese, dates use '号' (hào), while formal written Chinese uses '日' (rì). Sunday is 星期天 or 星期日, while Monday through Saturday use numbers 1 through 6.",
    "exercises": [
      {
        "question": "How do you ask 'What is the date today?'",
        "options": [
          "今天几号？",
          "今天几点？",
          "今天星期几？",
          "你是哪国人？"
        ],
        "answer": 0,
        "explanation": "'今天几号？' asks for the day of the month."
      },
      {
        "question": "Translate: 'Tomorrow I am going to school to read.'",
        "options": [
          "明天我去学校看书。",
          "今天我在家看书。",
          "昨天我去学校了。",
          "明天我去看电影。"
        ],
        "answer": 0,
        "explanation": "Subject (明天我) + 去 + Place (学校) + Verb (看书)."
      }
    ]
  },
  {
    "id": "hsk1-l8",
    "level": 1,
    "lessonNumber": 8,
    "title": "我想喝茶",
    "pinyin": "Wǒ xiǎng hē chá",
    "english": "I'd Like Some Tea",
    "summary": "Express desires with optative verb 想, use measure words 个 and 杯, and discuss prices with 多少钱 and 块.",
    "vocabulary": [
      {
        "character": "想",
        "pinyin": "xiǎng",
        "meaning": "would like to; to want; to miss"
      },
      {
        "character": "喝",
        "pinyin": "hē",
        "meaning": "to drink"
      },
      {
        "character": "茶",
        "pinyin": "chá",
        "meaning": "tea"
      },
      {
        "character": "吃",
        "pinyin": "chī",
        "meaning": "to eat"
      },
      {
        "character": "米饭",
        "pinyin": "mǐfàn",
        "meaning": "cooked rice"
      },
      {
        "character": "下午",
        "pinyin": "xiàwǔ",
        "meaning": "afternoon"
      },
      {
        "character": "商店",
        "pinyin": "shāngdiàn",
        "meaning": "shop; store"
      },
      {
        "character": "买",
        "pinyin": "mǎi",
        "meaning": "to buy"
      },
      {
        "character": "个",
        "pinyin": "gè",
        "meaning": "general measure word"
      },
      {
        "character": "杯子",
        "pinyin": "bēizi",
        "meaning": "cup; glass"
      },
      {
        "character": "这",
        "pinyin": "zhè",
        "meaning": "this"
      },
      {
        "character": "多少",
        "pinyin": "duōshao",
        "meaning": "how many; how much"
      },
      {
        "character": "钱",
        "pinyin": "qián",
        "meaning": "money"
      },
      {
        "character": "块",
        "pinyin": "kuài",
        "meaning": "yuan (colloquial unit of currency)"
      },
      {
        "character": "那",
        "pinyin": "nà",
        "meaning": "that"
      }
    ],
    "grammar": [
      {
        "title": "Optative Verb '想' (Desire / Wish)",
        "pattern": "主语 + 想 + 动词",
        "explanation": "'想' expresses a desire or inclination to do something. The negative form is '不想'.",
        "examples": [
          {
            "chinese": "我想喝茶，不想喝咖啡。",
            "pinyin": "Wǒ xiǎng hē chá, bù xiǎng hē kāfēi.",
            "english": "I would like to drink tea, I don't want to drink coffee."
          },
          {
            "chinese": "下午你想去哪儿？",
            "pinyin": "Xiàwǔ nǐ xiǎng qù nǎr?",
            "english": "Where would you like to go this afternoon?"
          }
        ]
      },
      {
        "title": "Asking Price with '多少钱'",
        "pattern": "这 / 那 + Measure Word + 东西 + 多少钱？",
        "explanation": "'多少钱' is the standard question for prices of goods.",
        "examples": [
          {
            "chinese": "这个杯子多少钱？",
            "pinyin": "Zhè ge bēizi duōshao qián?",
            "english": "How much is this cup?"
          },
          {
            "chinese": "这个杯子二十八块钱。",
            "pinyin": "Zhè ge bēizi èrshíbā kuài qián.",
            "english": "This cup is 28 yuan."
          }
        ]
      }
    ],
    "dialogue": [
      {
        "speaker": "服务员",
        "avatar": "👨‍🍳",
        "chinese": "你好，你想喝什么？",
        "pinyin": "Nǐ hǎo, nǐ xiǎng hē shénme?",
        "english": "Hello, what would you like to drink?"
      },
      {
        "speaker": "大卫",
        "avatar": "👨‍🎓",
        "chinese": "我想喝茶。你呢，玛丽？",
        "pinyin": "Wǒ xiǎng hē chá. Nǐ ne, Mǎlì?",
        "english": "I'd like to drink tea. How about you, Mary?"
      },
      {
        "speaker": "玛丽",
        "avatar": "👩‍🎓",
        "chinese": "我想喝水，还想吃米饭。",
        "pinyin": "Wǒ xiǎng hē shuǐ, hái xiǎng chī mǐfàn.",
        "english": "I want to drink water, and also want to eat rice."
      },
      {
        "speaker": "大卫",
        "avatar": "👨‍🎓",
        "chinese": "下午你想去哪儿？",
        "pinyin": "Xiàwǔ nǐ xiǎng qù nǎr?",
        "english": "Where would you like to go this afternoon?"
      },
      {
        "speaker": "玛丽",
        "avatar": "👩‍🎓",
        "chinese": "我想去商店买一个杯子。",
        "pinyin": "Wǒ xiǎng qù shāngdiàn mǎi yí ge bēizi.",
        "english": "I want to go to the store to buy a cup."
      },
      {
        "speaker": "大卫",
        "avatar": "👨‍🎓",
        "chinese": "这个杯子多少钱？",
        "pinyin": "Zhè ge bēizi duōshao qián?",
        "english": "How much is this cup?"
      },
      {
        "speaker": "服务员",
        "avatar": "👨‍🍳",
        "chinese": "这个杯子二十八块钱。",
        "pinyin": "Zhè ge bēizi èrshíbā kuài qián.",
        "english": "This cup is 28 yuan."
      }
    ],
    "culture": "Tea drinking is deeply embedded in Chinese hospitality. Serving tea to guests with both hands is a sign of respect and welcome.",
    "exercises": [
      {
        "question": "How do you ask 'How much is this cup?'",
        "options": [
          "这个杯子多少钱？",
          "这个杯子是什么？",
          "你想喝什么？",
          "杯子在哪儿？"
        ],
        "answer": 0,
        "explanation": "'多少钱' means 'how much money / how much does it cost'."
      },
      {
        "question": "Complete: 我想去商店______一个杯子。",
        "options": [
          "买",
          "看",
          "喝",
          "叫"
        ],
        "answer": 0,
        "explanation": "'买' (mǎi) means to buy."
      }
    ]
  },
  {
    "id": "hsk1-l9",
    "level": 1,
    "lessonNumber": 9,
    "title": "你儿子在哪儿工作",
    "pinyin": "Nǐ érzi zài nǎr gōngzuò",
    "english": "Where Does Your Son Work?",
    "summary": "Use preposition 在 to indicate location, master spatial position words 上面 and 下面, and talk about professions.",
    "vocabulary": [
      {
        "character": "小",
        "pinyin": "xiǎo",
        "meaning": "small; little"
      },
      {
        "character": "猫",
        "pinyin": "māo",
        "meaning": "cat"
      },
      {
        "character": "在",
        "pinyin": "zài",
        "meaning": "at; in; on (locative preposition)"
      },
      {
        "character": "哪儿",
        "pinyin": "nǎr",
        "meaning": "where"
      },
      {
        "character": "狗",
        "pinyin": "gǒu",
        "meaning": "dog"
      },
      {
        "character": "椅子",
        "pinyin": "yǐzi",
        "meaning": "chair"
      },
      {
        "character": "下面",
        "pinyin": "xiàmiàn",
        "meaning": "under; below"
      },
      {
        "character": "工作",
        "pinyin": "gōngzuò",
        "meaning": "to work; job"
      },
      {
        "character": "儿子",
        "pinyin": "érzi",
        "meaning": "son"
      },
      {
        "character": "医院",
        "pinyin": "yīyuàn",
        "meaning": "hospital"
      },
      {
        "character": "医生",
        "pinyin": "yīshēng",
        "meaning": "doctor"
      },
      {
        "character": "爸爸",
        "pinyin": "bàba",
        "meaning": "father; dad"
      }
    ],
    "grammar": [
      {
        "title": "Preposition '在' (Location before Action)",
        "pattern": "主语 + 在 + 地方 + 动词",
        "explanation": "In Chinese, the location of an action is stated before the verb: 在医院工作 (work at the hospital), 在学校看书 (read at school).",
        "examples": [
          {
            "chinese": "我儿子在医院工作，他是医生。",
            "pinyin": "Wǒ érzi zài yīyuàn gōngzuò, tā shì yīshēng.",
            "english": "My son works at the hospital, he is a doctor."
          },
          {
            "chinese": "你在哪儿工作？",
            "pinyin": "Nǐ zài nǎr gōngzuò?",
            "english": "Where do you work?"
          }
        ]
      },
      {
        "title": "Expressing Spatial Positions with '在...下面/上面'",
        "pattern": "物体 + 在 + 参考物 + 上面 / 下面",
        "explanation": "To state where an object is relative to another, place the reference noun before the spatial position word.",
        "examples": [
          {
            "chinese": "小猫在椅子上面。",
            "pinyin": "Xiǎo māo zài yǐzi shàngmiàn.",
            "english": "The kitten is on the chair."
          },
          {
            "chinese": "小狗在椅子下面。",
            "pinyin": "Xiǎo gǒu zài yǐzi xiàmiàn.",
            "english": "The dog is under the chair."
          }
        ]
      }
    ],
    "dialogue": [
      {
        "speaker": "大卫",
        "avatar": "👨‍🎓",
        "chinese": "小猫在哪儿？",
        "pinyin": "Xiǎo māo zài nǎr?",
        "english": "Where is the kitten?"
      },
      {
        "speaker": "李月",
        "avatar": "👩‍🏫",
        "chinese": "小猫在椅子上面，小狗在椅子下面。",
        "pinyin": "Xiǎo māo zài yǐzi shàngmiàn, xiǎo gǒu zài yǐzi xiàmiàn.",
        "english": "The kitten is on the chair, the puppy is under the chair."
      },
      {
        "speaker": "大卫",
        "avatar": "👨‍🎓",
        "chinese": "你在学校工作吗？",
        "pinyin": "Nǐ zài xuéxiào gōngzuò ma?",
        "english": "Do you work at school?"
      },
      {
        "speaker": "李月",
        "avatar": "👩‍🏫",
        "chinese": "我不在学校工作，我在医院工作。我是医生。",
        "pinyin": "Wǒ bú zài xuéxiào gōngzuò, wǒ zài yīyuàn gōngzuò. Wǒ shì yīshēng.",
        "english": "I don't work at school, I work at the hospital. I am a doctor."
      },
      {
        "speaker": "大卫",
        "avatar": "👨‍🎓",
        "chinese": "你儿子在哪儿工作？",
        "pinyin": "Nǐ érzi zài nǎr gōngzuò?",
        "english": "Where does your son work?"
      },
      {
        "speaker": "李月",
        "avatar": "👩‍🏫",
        "chinese": "我儿子也在医院工作，他也是医生。",
        "pinyin": "Wǒ érzi yě zài yīyuàn gōngzuò, tā yě shì yīshēng.",
        "english": "My son also works at the hospital, he is also a doctor."
      }
    ],
    "culture": "Unlike English, which places location at the end of a sentence ('He works at a hospital'), Mandarin places location before the action ('他 在医院 工作').",
    "exercises": [
      {
        "question": "Translate: 'The dog is under the chair.'",
        "options": [
          "小狗在椅子下面。",
          "小猫在椅子上面。",
          "小狗在医院里。",
          "他在学校看书。"
        ],
        "answer": 0,
        "explanation": "'在椅子下面' indicates 'under the chair'."
      },
      {
        "question": "Where does a doctor (医生) work?",
        "options": [
          "医院",
          "学校",
          "商店",
          "饭店"
        ],
        "answer": 0,
        "explanation": "A doctor works at a hospital (医院)."
      }
    ]
  },
  {
    "id": "hsk1-l10",
    "level": 1,
    "lessonNumber": 10,
    "title": "我能坐这儿吗",
    "pinyin": "Wǒ néng zuò zhèr ma",
    "english": "Can I Sit Here?",
    "summary": "Express permission with modal verb 能, master spatial words 前面 and 后面, and use conjunction 和.",
    "vocabulary": [
      {
        "character": "桌子",
        "pinyin": "zhuōzi",
        "meaning": "table; desk"
      },
      {
        "character": "上",
        "pinyin": "shàng",
        "meaning": "on; above"
      },
      {
        "character": "电脑",
        "pinyin": "diànnǎo",
        "meaning": "computer"
      },
      {
        "character": "和",
        "pinyin": "hé",
        "meaning": "and (joins nouns)"
      },
      {
        "character": "本",
        "pinyin": "běn",
        "meaning": "measure word for books"
      },
      {
        "character": "里",
        "pinyin": "lǐ",
        "meaning": "in; inside"
      },
      {
        "character": "前面",
        "pinyin": "qiánmiàn",
        "meaning": "front; ahead"
      },
      {
        "character": "后面",
        "pinyin": "hòumiàn",
        "meaning": "back; behind"
      },
      {
        "character": "这儿",
        "pinyin": "zhèr",
        "meaning": "here"
      },
      {
        "character": "没有",
        "pinyin": "méiyǒu",
        "meaning": "there is not; don't have"
      },
      {
        "character": "能",
        "pinyin": "néng",
        "meaning": "can; may (permission/ability)"
      },
      {
        "character": "坐",
        "pinyin": "zuò",
        "meaning": "to sit"
      }
    ],
    "grammar": [
      {
        "title": "Expressing Permission with '能'",
        "pattern": "主语 + 能 + 动词 + 吗？",
        "explanation": "'能' is an optative modal verb expressing capability or permission ('may I...').",
        "examples": [
          {
            "chinese": "我能坐这儿吗？请坐。",
            "pinyin": "Wǒ néng zuò zhèr ma? Qǐng zuò.",
            "english": "Can I sit here? Please sit."
          },
          {
            "chinese": "今天我不能去学校。",
            "pinyin": "Jīntiān wǒ bù néng qù xuéxiào.",
            "english": "Today I cannot go to school."
          }
        ]
      },
      {
        "title": "Conjunction '和' for Nouns",
        "pattern": "Noun A + 和 + Noun B",
        "explanation": "'和' connects nouns or noun phrases together. It is not used to connect clauses or sentences.",
        "examples": [
          {
            "chinese": "桌子上有一个电脑和两本书。",
            "pinyin": "Zhuōzi shang yǒu yí ge diànnǎo hé liǎng běn shū.",
            "english": "There is a computer and two books on the table."
          },
          {
            "chinese": "我和大卫都是学生。",
            "pinyin": "Wǒ hé Dàwèi dōu shì xuésheng.",
            "english": "Both David and I are students."
          }
        ]
      }
    ],
    "dialogue": [
      {
        "speaker": "大卫",
        "avatar": "👨‍🎓",
        "chinese": "桌子上有什么？",
        "pinyin": "Zhuōzi shang yǒu shénme?",
        "english": "What is on the table?"
      },
      {
        "speaker": "玛丽",
        "avatar": "👩‍🎓",
        "chinese": "桌子上有一个电脑和两本书。",
        "pinyin": "Zhuōzi shang yǒu yí ge diànnǎo hé liǎng běn shū.",
        "english": "There is a computer and two books on the table."
      },
      {
        "speaker": "大卫",
        "avatar": "👨‍🎓",
        "chinese": "前面那个人是谁？",
        "pinyin": "Qiánmiàn nà ge rén shì shéi?",
        "english": "Who is that person in front?"
      },
      {
        "speaker": "玛丽",
        "avatar": "👩‍🎓",
        "chinese": "前面那个人是王方，后面那个人是谢朋。",
        "pinyin": "Qiánmiàn nà ge rén shì Wáng Fāng, hòumiàn nà ge rén shì Xiè Péng.",
        "english": "The person in front is Wang Fang, the person behind is Xie Peng."
      },
      {
        "speaker": "大卫",
        "avatar": "👨‍🎓",
        "chinese": "这儿有人吗？我能坐这儿吗？",
        "pinyin": "Zhèr yǒu rén ma? Wǒ néng zuò zhèr ma?",
        "english": "Is anyone here? Can I sit here?"
      },
      {
        "speaker": "玛丽",
        "avatar": "👩‍🎓",
        "chinese": "这儿没有人，请坐。",
        "pinyin": "Zhèr méiyǒu rén, qǐng zuò.",
        "english": "There is no one here, please sit."
      }
    ],
    "culture": "When offering a seat to a guest in China, saying '请坐' (qǐng zuò) and pouring a cup of hot water or tea is customary etiquette.",
    "exercises": [
      {
        "question": "How do you politely ask 'May I sit here?'",
        "options": [
          "我能坐这儿吗？",
          "你叫什么名字？",
          "他在哪儿？",
          "这里有什么？"
        ],
        "answer": 0,
        "explanation": "'我能坐这儿吗？' is the standard polite request to take a seat."
      },
      {
        "question": "What is the correct measure word for books in '两____书'?",
        "options": [
          "本",
          "个",
          "口",
          "块"
        ],
        "answer": 0,
        "explanation": "'本' (běn) is the dedicated measure word for bound volumes and books."
      }
    ]
  },
  {
    "id": "hsk1-l11",
    "level": 1,
    "lessonNumber": 11,
    "title": "现在几点",
    "pinyin": "Xiànzài jǐ diǎn",
    "english": "What Time is It Now?",
    "summary": "Tell clock time with 点 and 分, position temporal adverbs before the verb, and discuss daily schedules.",
    "vocabulary": [
      {
        "character": "现在",
        "pinyin": "xiànzài",
        "meaning": "now; currently"
      },
      {
        "character": "点",
        "pinyin": "diǎn",
        "meaning": "o'clock; dot"
      },
      {
        "character": "分",
        "pinyin": "fēn",
        "meaning": "minute"
      },
      {
        "character": "中午",
        "pinyin": "zhōngwǔ",
        "meaning": "noon; midday"
      },
      {
        "character": "吃饭",
        "pinyin": "chīfàn",
        "meaning": "to eat a meal"
      },
      {
        "character": "时候",
        "pinyin": "shíhou",
        "meaning": "time; moment"
      },
      {
        "character": "回",
        "pinyin": "huí",
        "meaning": "to return; go back"
      },
      {
        "character": "我们",
        "pinyin": "wǒmen",
        "meaning": "we; us"
      },
      {
        "character": "电影",
        "pinyin": "diànyǐng",
        "meaning": "movie; film"
      },
      {
        "character": "住",
        "pinyin": "zhù",
        "meaning": "to live; reside"
      },
      {
        "character": "前",
        "pinyin": "qián",
        "meaning": "before; earlier"
      }
    ],
    "grammar": [
      {
        "title": "Telling Clock Time with 点 and 分",
        "pattern": "Number + 点 (+ Number + 分)",
        "explanation": "'点' marks hours and '分' marks minutes. Minutes under ten use '零' (líng): 八点零五分 (8:05).",
        "examples": [
          {
            "chinese": "现在十点十分。",
            "pinyin": "Xiànzài shí diǎn shí fēn.",
            "english": "It is 10:10 now."
          },
          {
            "chinese": "我们中午十二点吃饭。",
            "pinyin": "Wǒmen zhōngwǔ shí'èr diǎn chīfàn.",
            "english": "We eat lunch at 12:00 noon."
          }
        ]
      },
      {
        "title": "Time Phrases as Adverbials before Verb",
        "pattern": "主语 + 时间 + 动词 / 时间 + 主语 + 动词",
        "explanation": "In Chinese, time expressions must precede the predicate verb, never placed at the end of the sentence.",
        "examples": [
          {
            "chinese": "爸爸下午五点回家。",
            "pinyin": "Bàba xiàwǔ wǔ diǎn huí jiā.",
            "english": "Dad returns home at 5 PM."
          },
          {
            "chinese": "我们什么时候去看电影？",
            "pinyin": "Wǒmen shénme shíhou qù kàn diànyǐng?",
            "english": "When are we going to see the movie?"
          }
        ]
      }
    ],
    "dialogue": [
      {
        "speaker": "大卫",
        "avatar": "👨‍🎓",
        "chinese": "现在几点？",
        "pinyin": "Xiànzài jǐ diǎn?",
        "english": "What time is it now?"
      },
      {
        "speaker": "李月",
        "avatar": "👩‍🏫",
        "chinese": "现在十点十分。",
        "pinyin": "Xiànzài shí diǎn shí fēn.",
        "english": "It is 10:10 now."
      },
      {
        "speaker": "大卫",
        "avatar": "👨‍🎓",
        "chinese": "中午几点吃饭？",
        "pinyin": "Zhōngwǔ jǐ diǎn chīfàn?",
        "english": "What time do we eat lunch?"
      },
      {
        "speaker": "李月",
        "avatar": "👩‍🏫",
        "chinese": "十二点吃饭。爸爸什么时候回家？",
        "pinyin": "Shí'èr diǎn chīfàn. Bàba shénme shíhou huí jiā?",
        "english": "Eat at 12:00. When is dad coming home?"
      },
      {
        "speaker": "大卫",
        "avatar": "👨‍🎓",
        "chinese": "下午五点。我们什么时候去看电影？",
        "pinyin": "Xiàwǔ wǔ diǎn. Wǒmen shénme shíhou qù kàn diànyǐng?",
        "english": "At 5:00 PM. When are we going to watch the movie?"
      },
      {
        "speaker": "李月",
        "avatar": "👩‍🏫",
        "chinese": "六点三十分前去。",
        "pinyin": "Liù diǎn sānshí fēn qián qù.",
        "english": "Let's go before 6:30."
      }
    ],
    "culture": "Daily time in China is framed broadly by periods: 早上 (early morning), 上午 (morning), 中午 (noon), 下午 (afternoon), 晚上 (evening).",
    "exercises": [
      {
        "question": "How do you say '10:10' in Chinese?",
        "options": [
          "十点十分",
          "十一点十分",
          "十点零五分",
          "九点十分"
        ],
        "answer": 0,
        "explanation": "'十点' (10 o'clock) + '十分' (10 minutes) = 十点十分."
      },
      {
        "question": "Choose the correct word order: 'We eat at 12 o'clock.'",
        "options": [
          "我们十二点吃饭。",
          "我们吃饭十二点。",
          "十二点吃饭我们。",
          "吃饭我们十二点。"
        ],
        "answer": 0,
        "explanation": "Time adverbs must precede the verb: 我们 (Subject) + 十二点 (Time) + 吃饭 (Verb)."
      }
    ]
  },
  {
    "id": "hsk1-l12",
    "level": 1,
    "lessonNumber": 12,
    "title": "明天天气怎么样",
    "pinyin": "Míngtiān tiānqì zěnmeyàng",
    "english": "What Will the Weather Be Like Tomorrow?",
    "summary": "Describe weather with 冷, 热, and 下雨, use degree pattern 太...了, and express future possibility with 会.",
    "vocabulary": [
      {
        "character": "天气",
        "pinyin": "tiānqì",
        "meaning": "weather"
      },
      {
        "character": "怎么样",
        "pinyin": "zěnmeyàng",
        "meaning": "how is it; what about"
      },
      {
        "character": "太",
        "pinyin": "tài",
        "meaning": "too; excessively"
      },
      {
        "character": "热",
        "pinyin": "rè",
        "meaning": "hot"
      },
      {
        "character": "冷",
        "pinyin": "lěng",
        "meaning": "cold"
      },
      {
        "character": "下雨",
        "pinyin": "xiàyǔ",
        "meaning": "to rain"
      },
      {
        "character": "水",
        "pinyin": "shuǐ",
        "meaning": "water"
      },
      {
        "character": "些",
        "pinyin": "xiē",
        "meaning": "some; a few"
      },
      {
        "character": "水果",
        "pinyin": "shuǐguǒ",
        "meaning": "fruit"
      },
      {
        "character": "身体",
        "pinyin": "shēntǐ",
        "meaning": "health; body"
      },
      {
        "character": "爱",
        "pinyin": "ài",
        "meaning": "to love; like doing"
      },
      {
        "character": "多",
        "pinyin": "duō",
        "meaning": "much; many; more"
      }
    ],
    "grammar": [
      {
        "title": "Degree Exclamation: 太 + Adjective + 了",
        "pattern": "太 + 形容词 + 了",
        "explanation": "'太...了' conveys an extreme degree, either enthusiastic praise ('太好了!') or excess ('太热了!').",
        "examples": [
          {
            "chinese": "今天太热了！",
            "pinyin": "Jīntiān tài rè le!",
            "english": "Today is too hot!"
          },
          {
            "chinese": "太冷了，不想去学校。",
            "pinyin": "Tài lěng le, bù xiǎng qù xuéxiào.",
            "english": "It's too cold, I don't want to go to school."
          }
        ]
      },
      {
        "title": "Modal Verb '会' Indicating Possibility / Future",
        "pattern": "主语 + 会 + 动词",
        "explanation": "Here '会' indicates an anticipated future occurrence or possibility ('will happen').",
        "examples": [
          {
            "chinese": "明天会下雨吗？",
            "pinyin": "Míngtiān huì xiàyǔ ma?",
            "english": "Will it rain tomorrow?"
          },
          {
            "chinese": "明天不会下雨，天气很好。",
            "pinyin": "Míngtiān bú huì xiàyǔ, tiānqì hěn hǎo.",
            "english": "It won't rain tomorrow, weather will be very good."
          }
        ]
      }
    ],
    "dialogue": [
      {
        "speaker": "大卫",
        "avatar": "👨‍🎓",
        "chinese": "昨天北京的天气怎么样？",
        "pinyin": "Zuótiān Běijīng de tiānqì zěnmeyàng?",
        "english": "How was the weather in Beijing yesterday?"
      },
      {
        "speaker": "李月",
        "avatar": "👩‍🏫",
        "chinese": "太热了。今天天气很好，不冷也不热。",
        "pinyin": "Tài rè le. Jīntiān tiānqì hěn hǎo, bù lěng yě bú rè.",
        "english": "Too hot. Today the weather is great, neither cold nor hot."
      },
      {
        "speaker": "大卫",
        "avatar": "👨‍🎓",
        "chinese": "明天天气怎么样？会下雨吗？",
        "pinyin": "Míngtiān tiānqì zěnmeyàng? Huì xiàyǔ ma?",
        "english": "What will the weather be like tomorrow? Will it rain?"
      },
      {
        "speaker": "李月",
        "avatar": "👩‍🏫",
        "chinese": "明天会下雨，天气很冷。",
        "pinyin": "Míngtiān huì xiàyǔ, tiānqì hěn lěng.",
        "english": "Tomorrow it will rain, weather will be cold."
      },
      {
        "speaker": "大卫",
        "avatar": "👨‍🎓",
        "chinese": "天气冷，多喝水，多吃些水果。",
        "pinyin": "Tiānqì lěng, duō hē shuǐ, duō chī xiē shuǐguǒ.",
        "english": "Weather is cold, drink more water, eat some fruit."
      },
      {
        "speaker": "李月",
        "avatar": "👩‍🏫",
        "chinese": "谢谢，我的身体很好。",
        "pinyin": "Xièxie, wǒ de shēntǐ hěn hǎo.",
        "english": "Thanks, my health is very good."
      }
    ],
    "culture": "In Chinese culture, advising someone to '多喝热水' (drink more warm water) and eat fruit is a common expression of genuine care and warmth.",
    "exercises": [
      {
        "question": "How do you say 'Too hot!' in Chinese?",
        "options": [
          "太热了！",
          "太冷了！",
          "太好了！",
          "多喝水！"
        ],
        "answer": 0,
        "explanation": "'太' + 热 (hot) + '了' = 太热了！"
      },
      {
        "question": "How do you ask 'How is the weather today?'",
        "options": [
          "今天天气怎么样？",
          "现在几点？",
          "你叫什么名字？",
          "你去哪儿？"
        ],
        "answer": 0,
        "explanation": "'天气怎么样？' asks about the condition of the weather."
      }
    ]
  },
  {
    "id": "hsk1-l13",
    "level": 1,
    "lessonNumber": 13,
    "title": "他在学做中国菜呢",
    "pinyin": "Tā zài xué zuò zhōngguó cài ne",
    "english": "He is Learning to Cook Chinese Food",
    "summary": "Express ongoing actions with 在...呢, master telephone manners with 喂, and communicate preferences with 喜欢.",
    "vocabulary": [
      {
        "character": "喂",
        "pinyin": "wèi",
        "meaning": "hello (on telephone)"
      },
      {
        "character": "也",
        "pinyin": "yě",
        "meaning": "also; too"
      },
      {
        "character": "学习",
        "pinyin": "xuéxí",
        "meaning": "to study; learn"
      },
      {
        "character": "上午",
        "pinyin": "shàngwǔ",
        "meaning": "morning; forenoon"
      },
      {
        "character": "睡觉",
        "pinyin": "shuìjiào",
        "meaning": "to sleep"
      },
      {
        "character": "电视",
        "pinyin": "diànshì",
        "meaning": "television"
      },
      {
        "character": "喜欢",
        "pinyin": "xǐhuan",
        "meaning": "to like; enjoy"
      },
      {
        "character": "给",
        "pinyin": "gěi",
        "meaning": "to; for; give"
      },
      {
        "character": "打电话",
        "pinyin": "dǎ diànhuà",
        "meaning": "to make a phone call"
      }
    ],
    "grammar": [
      {
        "title": "Progressive Aspect: 在 + 动词 + (呢)",
        "pattern": "主语 + 在 + 动词 + (宾语) + (呢)",
        "explanation": "'在' before a verb indicates an action is currently in progress, similar to English '-ing'. '呢' at the end reinforces the continuous mood.",
        "examples": [
          {
            "chinese": "他在学做中国菜呢。",
            "pinyin": "Tā zài xué zuò zhōngguó cài ne.",
            "english": "He is learning to cook Chinese food."
          },
          {
            "chinese": "你在做什么呢？我在看书呢。",
            "pinyin": "Nǐ zài zuò shénme ne? Wǒ zài kàn shū ne.",
            "english": "What are you doing? I am reading."
          }
        ]
      },
      {
        "title": "Making Phone Calls with '给...打电话'",
        "pattern": "主语 + 给 + 某人 + 打电话",
        "explanation": "To call someone on the telephone, use the preposition '给' (to): 给老师打电话.",
        "examples": [
          {
            "chinese": "我给王老师打电话了。",
            "pinyin": "Wǒ gěi Wáng lǎoshī dǎ diànhuà le.",
            "english": "I made a phone call to Teacher Wang."
          },
          {
            "chinese": "他在给朋友打电话呢。",
            "pinyin": "Tā zài gěi péngyou dǎ diànhuà ne.",
            "english": "He is calling his friend."
          }
        ]
      }
    ],
    "dialogue": [
      {
        "speaker": "大卫",
        "avatar": "👨‍🎓",
        "chinese": "喂，你在做什么呢？",
        "pinyin": "Wèi, nǐ zài zuò shénme ne?",
        "english": "Hello, what are you doing?"
      },
      {
        "speaker": "李月",
        "avatar": "👩‍🏫",
        "chinese": "我在看书呢。你呢？",
        "pinyin": "Wǒ zài kàn shū ne. Nǐ ne?",
        "english": "I am reading. What about you?"
      },
      {
        "speaker": "大卫",
        "avatar": "👨‍🎓",
        "chinese": "我在学做中国菜呢。昨天上午你做什么了？",
        "pinyin": "Wǒ zài xué zuò zhōngguó cài ne. Zuótiān shàngwǔ nǐ zuò shénme le?",
        "english": "I am learning to cook Chinese food. What did you do yesterday morning?"
      },
      {
        "speaker": "李月",
        "avatar": "👩‍🏫",
        "chinese": "昨天上午我在睡觉，没去学校。",
        "pinyin": "Zuótiān shàngwǔ wǒ zài shuìjiào, méi qù xuéxiào.",
        "english": "Yesterday morning I was sleeping, didn't go to school."
      },
      {
        "speaker": "大卫",
        "avatar": "👨‍🎓",
        "chinese": "他喜欢看电视吗？",
        "pinyin": "Tā xǐhuan kàn diànshì ma?",
        "english": "Does he like watching TV?"
      },
      {
        "speaker": "李月",
        "avatar": "👩‍🏫",
        "chinese": "他不喜欢看电视，他喜欢听音乐。",
        "pinyin": "Tā bù xǐhuan kàn diànshì, tā xǐhuan tīng yīnyuè.",
        "english": "He doesn't like watching TV, he likes listening to music."
      }
    ],
    "culture": "Answering phone calls in Chinese begins with the greeting '喂' (wèi), spoken with a rising second or falling fourth tone.",
    "exercises": [
      {
        "question": "How do you express 'I am reading a book right now'?",
        "options": [
          "我在看书呢。",
          "我想看书。",
          "我看了书。",
          "我喜欢看书。"
        ],
        "answer": 0,
        "explanation": "'在 + 动词 + 呢' indicates ongoing continuous action."
      },
      {
        "question": "How do you answer the telephone in Mandarin?",
        "options": [
          "喂",
          "您好",
          "再见",
          "谢谢"
        ],
        "answer": 0,
        "explanation": "'喂' (wèi) is the standard phone greeting."
      }
    ]
  },
  {
    "id": "hsk1-l14",
    "level": 1,
    "lessonNumber": 14,
    "title": "她买了不少衣服",
    "pinyin": "Tā mǎi le bù shǎo yīfu",
    "english": "She Has Bought Quite a Few Clothes",
    "summary": "Master aspect particle 了 for completed actions, express quantities with 一点儿 and 不少, and use time word 后.",
    "vocabulary": [
      {
        "character": "东西",
        "pinyin": "dōngxi",
        "meaning": "things; stuff"
      },
      {
        "character": "一点儿",
        "pinyin": "yìdiǎnr",
        "meaning": "a little; a bit"
      },
      {
        "character": "苹果",
        "pinyin": "píngguǒ",
        "meaning": "apple"
      },
      {
        "character": "看见",
        "pinyin": "kànjiàn",
        "meaning": "to see; catch sight of"
      },
      {
        "character": "先生",
        "pinyin": "xiānsheng",
        "meaning": "Mr.; sir"
      },
      {
        "character": "开",
        "pinyin": "kāi",
        "meaning": "to drive; open"
      },
      {
        "character": "车",
        "pinyin": "chē",
        "meaning": "vehicle; car"
      },
      {
        "character": "回来",
        "pinyin": "huílái",
        "meaning": "to return; come back"
      },
      {
        "character": "分钟",
        "pinyin": "fēnzhōng",
        "meaning": "minute"
      },
      {
        "character": "后",
        "pinyin": "hòu",
        "meaning": "after; later"
      },
      {
        "character": "衣服",
        "pinyin": "yīfu",
        "meaning": "clothes; clothing"
      },
      {
        "character": "漂亮",
        "pinyin": "piàoliang",
        "meaning": "beautiful; pretty"
      },
      {
        "character": "不少",
        "pinyin": "bù shǎo",
        "meaning": "quite a few; many"
      }
    ],
    "grammar": [
      {
        "title": "Aspect Particle '了' for Completed Actions",
        "pattern": "动词 + 了 + 数量词 + 宾语",
        "explanation": "When an action has occurred or been completed, '了' follows the verb, particularly when the object is quantified.",
        "examples": [
          {
            "chinese": "她买了不少衣服。",
            "pinyin": "Tā mǎi le bù shǎo yīfu.",
            "english": "She bought quite a few clothes."
          },
          {
            "chinese": "我买了一点儿苹果。",
            "pinyin": "Wǒ mǎi le yìdiǎnr píngguǒ.",
            "english": "I bought a few apples."
          }
        ]
      },
      {
        "title": "Expressing Future Time with '...后'",
        "pattern": "Time duration + 后",
        "explanation": "Placing '后' after a duration of time denotes 'after' or 'in... time'.",
        "examples": [
          {
            "chinese": "张先生四十分钟后回来。",
            "pinyin": "Zhāng xiānsheng sìshí fēnzhōng hòu huílái.",
            "english": "Mr. Zhang will return in 40 minutes."
          },
          {
            "chinese": "三天后我们去北京。",
            "pinyin": "Sān tiān hòu wǒmen qù Běijīng.",
            "english": "In three days we will go to Beijing."
          }
        ]
      }
    ],
    "dialogue": [
      {
        "speaker": "大卫",
        "avatar": "👨‍🎓",
        "chinese": "昨天上午你去哪儿了？",
        "pinyin": "Zuótiān shàngwǔ nǐ qù nǎr le?",
        "english": "Where did you go yesterday morning?"
      },
      {
        "speaker": "玛丽",
        "avatar": "👩‍🎓",
        "chinese": "我去商店买东西了。",
        "pinyin": "Wǒ qù shāngdiàn mǎi dōngxi le.",
        "english": "I went to the shop to buy things."
      },
      {
        "speaker": "大卫",
        "avatar": "👨‍🎓",
        "chinese": "你买什么了？",
        "pinyin": "Nǐ mǎi shénme le?",
        "english": "What did you buy?"
      },
      {
        "speaker": "玛丽",
        "avatar": "👩‍🎓",
        "chinese": "我买了一点儿苹果，还买了不少衣服。",
        "pinyin": "Wǒ mǎi le yìdiǎnr píngguǒ, hái mǎi le bù shǎo yīfu.",
        "english": "I bought some apples, and also bought quite a few clothes."
      },
      {
        "speaker": "大卫",
        "avatar": "👨‍🎓",
        "chinese": "张先生看见你了吗？",
        "pinyin": "Zhāng xiānsheng kànjiàn nǐ le ma?",
        "english": "Did Mr. Zhang see you?"
      },
      {
        "speaker": "玛丽",
        "avatar": "👩‍🎓",
        "chinese": "看见了，他开车送我回来的。",
        "pinyin": "Kànjiàn le, tā kāi chē sòng wǒ huílái de.",
        "english": "Yes, he drove me back."
      }
    ],
    "culture": "The word for 'things' or 'merchandise', 东西 (dōngxi), originates from the cardinal directions East (东) and West (西), referring to goods brought from market stalls across ancient trade axes.",
    "exercises": [
      {
        "question": "Translate: 'She bought quite a few clothes.'",
        "options": [
          "她买了不少衣服。",
          "她想买衣服。",
          "她没有衣服。",
          "衣服很漂亮。"
        ],
        "answer": 0,
        "explanation": "'买了不少' expresses having bought a large quantity of something."
      },
      {
        "question": "How do you say 'in 40 minutes'?",
        "options": [
          "四十分钟后",
          "四十分钟前",
          "四点十分",
          "十分钟后"
        ],
        "answer": 0,
        "explanation": "Duration + 后 means 'after / in ... minutes'."
      }
    ]
  },
  {
    "id": "hsk1-l15",
    "level": 1,
    "lessonNumber": 15,
    "title": "我是坐飞机来的",
    "pinyin": "Wǒ shì zuò fēijī lái de",
    "english": "I Came by Plane",
    "summary": "Master the focal '是...的' construction to emphasize past time, location, or manner of transportation.",
    "vocabulary": [
      {
        "character": "认识",
        "pinyin": "rènshi",
        "meaning": "to know; recognize; meet"
      },
      {
        "character": "年",
        "pinyin": "nián",
        "meaning": "year"
      },
      {
        "character": "大学",
        "pinyin": "dàxué",
        "meaning": "university; college"
      },
      {
        "character": "饭店",
        "pinyin": "fàndiàn",
        "meaning": "restaurant; hotel"
      },
      {
        "character": "出租车",
        "pinyin": "chūzūchē",
        "meaning": "taxi; cab"
      },
      {
        "character": "一起",
        "pinyin": "yìqǐ",
        "meaning": "together"
      },
      {
        "character": "高兴",
        "pinyin": "gāoxìng",
        "meaning": "happy; glad"
      },
      {
        "character": "听",
        "pinyin": "tīng",
        "meaning": "to listen; hear"
      },
      {
        "character": "飞机",
        "pinyin": "fēijī",
        "meaning": "airplane; plane"
      }
    ],
    "grammar": [
      {
        "title": "Cleft Construction: 是...的 (Emphasis on Details)",
        "pattern": "主语 + 是 + [时间/地点/方式] + 动词 + 的",
        "explanation": "When an action is already known to have occurred in the past, '是...的' is used to emphasize specific details such as when, where, with whom, or how it happened.",
        "examples": [
          {
            "chinese": "我们是2011年认识的。",
            "pinyin": "Wǒmen shì èr líng yī yī nián rènshi de.",
            "english": "It was in 2011 that we first met."
          },
          {
            "chinese": "他是坐出租车来的。",
            "pinyin": "Tā shì zuò chūzūchē lái de.",
            "english": "He came by taxi (manner of transport)."
          }
        ]
      },
      {
        "title": "Expressing Companionship with '一起'",
        "pattern": "主语 + (跟/和...) + 一起 + 动词",
        "explanation": "'一起' indicates doing something collectively or in companionship.",
        "examples": [
          {
            "chinese": "我们是在北京大学认识的，我们在一起学汉语。",
            "pinyin": "Wǒmen shì zài Běijīng Dàxué rènshi de, wǒmen zài yìqǐ xué hànyǔ.",
            "english": "We met at Peking University, we studied Chinese together."
          },
          {
            "chinese": "很高兴和你们在一起。",
            "pinyin": "Hěn gāoxìng hé nǐmen zài yìqǐ.",
            "english": "Very glad to be with you all."
          }
        ]
      }
    ],
    "dialogue": [
      {
        "speaker": "大卫",
        "avatar": "👨‍🎓",
        "chinese": "你认识李先生吗？",
        "pinyin": "Nǐ rènshi Lǐ xiānsheng ma?",
        "english": "Do you know Mr. Li?"
      },
      {
        "speaker": "玛丽",
        "avatar": "👩‍🎓",
        "chinese": "认识，我们是大学同学。",
        "pinyin": "Rènshi, wǒmen shì dàxué tóngxué.",
        "english": "Yes, we are university classmates."
      },
      {
        "speaker": "大卫",
        "avatar": "👨‍🎓",
        "chinese": "你们是什么时候认识的？",
        "pinyin": "Nǐmen shì shénme shíhou rènshi de?",
        "english": "When did you two meet?"
      },
      {
        "speaker": "玛丽",
        "avatar": "👩‍🎓",
        "chinese": "我们是2011年9月认识的。",
        "pinyin": "Wǒmen shì èr líng yī yī nián jiǔ yuè rènshi de.",
        "english": "We met in September 2011."
      },
      {
        "speaker": "大卫",
        "avatar": "👨‍🎓",
        "chinese": "你们是在哪儿认识的？你是怎么来的？",
        "pinyin": "Nǐmen shì zài nǎr rènshi de? Nǐ shì zěnme lái de?",
        "english": "Where did you meet? How did you get here?"
      },
      {
        "speaker": "玛丽",
        "avatar": "👩‍🎓",
        "chinese": "我们是在北京认识的。我是坐飞机来的。",
        "pinyin": "Wǒmen shì zài Běijīng rènshi de. Wǒ shì zuò fēijī lái de.",
        "english": "We met in Beijing. I came by airplane."
      }
    ],
    "culture": "Meeting a friend for the first time is warmly marked with '认识你很高兴' (Rènshi nǐ hěn gāoxìng - Nice to meet you).",
    "exercises": [
      {
        "question": "How do you emphasize 'I came by taxi'?",
        "options": [
          "我是坐出租车来的。",
          "我坐出租车去。",
          "我想坐出租车。",
          "出租车来了。"
        ],
        "answer": 0,
        "explanation": "'是...的' construction emphasizes the manner of past travel."
      },
      {
        "question": "How do you say 'Nice to meet you' in Chinese?",
        "options": [
          "认识你很高兴。",
          "对不起！",
          "没关系。",
          "再见！"
        ],
        "answer": 0,
        "explanation": "'认识你很高兴' is the standard polite greeting when being introduced."
      }
    ]
  },
  {
    "id": "hsk2-l1",
    "level": 2,
    "lessonNumber": 1,
    "title": "九月去北京旅游最好",
    "pinyin": "Jiǔyuè qù Běijīng lǚyóu zuì hǎo",
    "english": "September is the Best Time to Visit Beijing",
    "summary": "Express superlative degrees with 最, share opinions with 觉得, explain reasons with 为什么 / 因为, and talk about seasonal travel.",
    "vocabulary": [
      {
        "character": "旅游",
        "pinyin": "lǚyóu",
        "meaning": "to travel; tour"
      },
      {
        "character": "觉得",
        "pinyin": "juéde",
        "meaning": "to think; feel"
      },
      {
        "character": "最",
        "pinyin": "zuì",
        "meaning": "most; superlative (est)"
      },
      {
        "character": "为什么",
        "pinyin": "wèishénme",
        "meaning": "why"
      },
      {
        "character": "也",
        "pinyin": "yě",
        "meaning": "also; too"
      },
      {
        "character": "运动",
        "pinyin": "yùndòng",
        "meaning": "sport; exercise"
      },
      {
        "character": "踢足球",
        "pinyin": "tī zúqiú",
        "meaning": "to play football/soccer"
      },
      {
        "character": "一起",
        "pinyin": "yìqǐ",
        "meaning": "together"
      },
      {
        "character": "要",
        "pinyin": "yào",
        "meaning": "to want; plan to; will"
      },
      {
        "character": "新",
        "pinyin": "xīn",
        "meaning": "new"
      },
      {
        "character": "眼睛",
        "pinyin": "yǎnjing",
        "meaning": "eye"
      }
    ],
    "grammar": [
      {
        "title": "Superlative Degree: 最 + Adjective",
        "pattern": "最 + 形容词 / 心理动词",
        "explanation": "'最' expresses the highest degree of a quality or emotion.",
        "examples": [
          {
            "chinese": "九月去北京旅游最好，天气不冷也不热。",
            "pinyin": "Jiǔyuè qù Běijīng lǚyóu zuì hǎo, tiānqì bù lěng yě bú rè.",
            "english": "September is best to visit Beijing; weather is neither cold nor hot."
          },
          {
            "chinese": "我最喜欢踢足球。",
            "pinyin": "Wǒ zuì xǐhuan tī zúqiú.",
            "english": "I like playing football the most."
          }
        ]
      },
      {
        "title": "Giving Reasons: 为什么 ↔ 因为...",
        "pattern": "为什么...? 因为...",
        "explanation": "'为什么' asks for reasons; '因为' introduces the explanatory clause.",
        "examples": [
          {
            "chinese": "你为什么九月去北京？因为九月天气最好。",
            "pinyin": "Nǐ wèishénme jiǔyuè qù Běijīng? Yīnwèi jiǔyuè tiānqì zuì hǎo.",
            "english": "Why are you going to Beijing in September? Because September has the best weather."
          },
          {
            "chinese": "他觉得北京很漂亮。",
            "pinyin": "Tā juéde Běijīng hěn piàoliang.",
            "english": "He feels that Beijing is very beautiful."
          }
        ]
      }
    ],
    "dialogue": [
      {
        "speaker": "大卫",
        "avatar": "👨‍🎓",
        "chinese": "我想去北京旅游，什么时候去最好？",
        "pinyin": "Wǒ xiǎng qù Běijīng lǚyóu, shénme shíhou qù zuì hǎo?",
        "english": "I want to travel to Beijing, when is the best time to go?"
      },
      {
        "speaker": "王方",
        "avatar": "👩‍🎓",
        "chinese": "九月去北京旅游最好。",
        "pinyin": "Jiǔyuè qù Běijīng lǚyóu zuì hǎo.",
        "english": "September is the best time to visit Beijing."
      },
      {
        "speaker": "大卫",
        "avatar": "👨‍🎓",
        "chinese": "为什么？",
        "pinyin": "Wèishénme?",
        "english": "Why?"
      },
      {
        "speaker": "王方",
        "avatar": "👩‍🎓",
        "chinese": "因为九月的北京天气不冷也不热，风景最漂亮。",
        "pinyin": "Yīnwèi jiǔyuè de Běijīng tiānqì bù lěng yě bú rè, fēngjǐng zuì piàoliang.",
        "english": "Because in September Beijing is neither cold nor hot, and the scenery is most beautiful."
      },
      {
        "speaker": "大卫",
        "avatar": "👨‍🎓",
        "chinese": "下午我们一起去踢足球吧！",
        "pinyin": "Xiàwǔ wǒmen yìqǐ qù tī zúqiú ba!",
        "english": "Let's go play soccer together this afternoon!"
      },
      {
        "speaker": "王方",
        "avatar": "👩‍🎓",
        "chinese": "好啊，我最喜欢踢足球了！",
        "pinyin": "Hǎo a, wǒ zuì xǐhuan tī zúqiú le!",
        "english": "Great, I like playing soccer the most!"
      }
    ],
    "culture": "Autumn in Beijing (金秋北京) is famous for mild sunny weather, crisp air, and the yellow ginkgo leaves along Diaoyutai and Xiangshan.",
    "exercises": [
      {
        "question": "How do you say 'My favorite sport is soccer'?",
        "options": [
          "我最喜欢的运动是踢足球。",
          "我想踢足球。",
          "我不会踢足球。",
          "足球很好看。"
        ],
        "answer": 0,
        "explanation": "'最喜欢' indicates 'favorite / like the most'."
      },
      {
        "question": "How do you respond to '为什么' (Why)?",
        "options": [
          "因为...",
          "所以...",
          "但是...",
          "虽然..."
        ],
        "answer": 0,
        "explanation": "'因为' introduces the explanation / reason."
      }
    ]
  },
  {
    "id": "hsk2-l2",
    "level": 2,
    "lessonNumber": 2,
    "title": "我每天六点起床",
    "pinyin": "Wǒ měitiān liù diǎn qǐchuáng",
    "english": "I Get Up at Six Every Day",
    "summary": "Discuss daily healthy habits with 每...都, express health conditions with 生病, 药, and 出院, and state height with 米.",
    "vocabulary": [
      {
        "character": "生病",
        "pinyin": "shēngbìng",
        "meaning": "to fall ill; sick"
      },
      {
        "character": "每",
        "pinyin": "měi",
        "meaning": "every; each"
      },
      {
        "character": "早上",
        "pinyin": "zǎoshang",
        "meaning": "morning"
      },
      {
        "character": "跑步",
        "pinyin": "pǎobù",
        "meaning": "to run; jog"
      },
      {
        "character": "起床",
        "pinyin": "qǐchuáng",
        "meaning": "to get out of bed; get up"
      },
      {
        "character": "药",
        "pinyin": "yào",
        "meaning": "medicine; drug"
      },
      {
        "character": "身体",
        "pinyin": "shēntǐ",
        "meaning": "body; health"
      },
      {
        "character": "出院",
        "pinyin": "chūyuàn",
        "meaning": "leave hospital; discharged"
      },
      {
        "character": "高",
        "pinyin": "gāo",
        "meaning": "tall; high"
      },
      {
        "character": "米",
        "pinyin": "mǐ",
        "meaning": "meter"
      },
      {
        "character": "知道",
        "pinyin": "zhīdào",
        "meaning": "to know; realize"
      },
      {
        "character": "忙",
        "pinyin": "máng",
        "meaning": "busy"
      },
      {
        "character": "时间",
        "pinyin": "shíjiān",
        "meaning": "time"
      }
    ],
    "grammar": [
      {
        "title": "Distributive Pronoun '每' with '都'",
        "pattern": "每 + Measure Word + Noun + 都 + 动词",
        "explanation": "'每' denotes each individual in a group and is almost always reinforced by '都' before the verb.",
        "examples": [
          {
            "chinese": "我每天早上都跑步。",
            "pinyin": "Wǒ měitiān zǎoshang dōu pǎobù.",
            "english": "I run every morning."
          },
          {
            "chinese": "他每个星期六都去学校。",
            "pinyin": "Tā měi ge xīngqīliù dōu qù xuéxiào.",
            "english": "He goes to school every Saturday."
          }
        ]
      },
      {
        "title": "Inquiring about Sickness & Recovery",
        "pattern": "生病 / 吃药 / 出院",
        "explanation": "To fall ill is '生病', to take medicine is '吃药', and leaving the hospital after recovery is '出院'.",
        "examples": [
          {
            "chinese": "他生病了，吃药后身体好多了。",
            "pinyin": "Tā shēngbìng le, chī yào hòu shēntǐ hǎo duō le.",
            "english": "He fell ill; after taking medicine his health is much better."
          },
          {
            "chinese": "你什么时候能出院？下个星期。",
            "pinyin": "Nǐ shénme shíhou néng chūyuàn? Xià ge xīngqī.",
            "english": "When can you be discharged? Next week."
          }
        ]
      }
    ],
    "dialogue": [
      {
        "speaker": "医生",
        "avatar": "👨‍⚕️",
        "chinese": "你很少生病，平时是怎么锻炼的？",
        "pinyin": "Nǐ hěn shǎo shēngbìng, píngshí shì zěnme duànliàn de?",
        "english": "You rarely get sick, how do you usually exercise?"
      },
      {
        "speaker": "大卫",
        "avatar": "👨‍🎓",
        "chinese": "我每天早上六点起床去跑步。",
        "pinyin": "Wǒ měitiān zǎoshang liù diǎn qǐchuáng qù pǎobù.",
        "english": "I get up at six every morning to go jogging."
      },
      {
        "speaker": "医生",
        "avatar": "👨‍⚕️",
        "chinese": "你每天都跑多长时间？",
        "pinyin": "Nǐ měitiān dōu pǎo duō cháng shíjiān?",
        "english": "How long do you run each day?"
      },
      {
        "speaker": "大卫",
        "avatar": "👨‍🎓",
        "chinese": "我每天跑半个小时。张老师今天能出院吗？",
        "pinyin": "Wǒ měitiān pǎo bàn ge xiǎoshí. Zhāng lǎoshī jīntiān néng chūyuàn ma?",
        "english": "I run for half an hour every day. Can Teacher Zhang leave the hospital today?"
      },
      {
        "speaker": "医生",
        "avatar": "👨‍⚕️",
        "chinese": "他身体好多了，明天可以出院。",
        "pinyin": "Tā shēntǐ hǎo duō le, míngtiān kěyǐ chūyuàn.",
        "english": "His health is much better, he can be discharged tomorrow."
      }
    ],
    "culture": "Morning exercise (晨练) is a cherished tradition across China. Parks fill with citizens doing Tai Chi, jogging, and practicing fan dances at sunrise.",
    "exercises": [
      {
        "question": "Fill in the blank: 我每______六点起床跑步。",
        "options": [
          "天",
          "个",
          "年",
          "月"
        ],
        "answer": 0,
        "explanation": "'每天' means every day."
      },
      {
        "question": "What does '出院' mean?",
        "options": [
          "Be discharged from hospital",
          "Enter hospital",
          "Visit doctor",
          "Take medicine"
        ],
        "answer": 0,
        "explanation": "'出院' literally means 'exit hospital'."
      }
    ]
  },
  {
    "id": "hsk2-l3",
    "level": 2,
    "lessonNumber": 3,
    "title": "左边那个红色的是我的",
    "pinyin": "Zuǒbiān nà ge hóngsè de shì wǒ de",
    "english": "The Red One on the Left is Mine",
    "summary": "Master colors (红, 白, 黑), the structural particle 的 for noun ellipsis, and verbal measure word 一下.",
    "vocabulary": [
      {
        "character": "手表",
        "pinyin": "shǒubiǎo",
        "meaning": "wrist watch"
      },
      {
        "character": "千",
        "pinyin": "qiān",
        "meaning": "thousand"
      },
      {
        "character": "报纸",
        "pinyin": "bàozhǐ",
        "meaning": "newspaper"
      },
      {
        "character": "送",
        "pinyin": "sòng",
        "meaning": "to give as gift; deliver"
      },
      {
        "character": "一下",
        "pinyin": "yíxià",
        "meaning": "briefly; a little bit"
      },
      {
        "character": "牛奶",
        "pinyin": "niúnǎi",
        "meaning": "cow's milk"
      },
      {
        "character": "房间",
        "pinyin": "fángjiān",
        "meaning": "room"
      },
      {
        "character": "丈夫",
        "pinyin": "zhàngfu",
        "meaning": "husband"
      },
      {
        "character": "旁边",
        "pinyin": "pángbiān",
        "meaning": "beside; side"
      },
      {
        "character": "真",
        "pinyin": "zhēn",
        "meaning": "really; truly"
      },
      {
        "character": "颜色",
        "pinyin": "yánsè",
        "meaning": "color"
      },
      {
        "character": "红色",
        "pinyin": "hóngsè",
        "meaning": "red color"
      },
      {
        "character": "左边",
        "pinyin": "zuǒbiān",
        "meaning": "left side"
      }
    ],
    "grammar": [
      {
        "title": "Noun Ellipsis: Adjective + 的",
        "pattern": "形容词 / 代词 + 的",
        "explanation": "When the noun is understood from context, attaching '的' to an adjective or possessive pronoun replaces the noun phrase entirely: 红色的 (the red one), 我的 (mine).",
        "examples": [
          {
            "chinese": "左边那个红色的是我的手表。",
            "pinyin": "Zuǒbiān nà ge hóngsè de shì wǒ de shǒubiǎo.",
            "english": "The red one on the left is my watch."
          },
          {
            "chinese": "这个杯子是新的，那个是旧的。",
            "pinyin": "Zhè ge bēizi shì xīn de, nà ge shì jiù de.",
            "english": "This cup is new, that one is old."
          }
        ]
      },
      {
        "title": "Verbal Measure Word '一下' (Brief Action)",
        "pattern": "动词 + 一下",
        "explanation": "'一下' indicates an action of brief duration or an informal casual attempt: 看一下 (take a quick look), 问一下 (ask quickly).",
        "examples": [
          {
            "chinese": "请您看一下这块手表。",
            "pinyin": "Qǐng nín kàn yíxià zhè kuài shǒubiǎo.",
            "english": "Please take a look at this watch."
          },
          {
            "chinese": "我喝一下牛奶。",
            "pinyin": "Wǒ hē yíxià niúnǎi.",
            "english": "I'll take a sip of milk."
          }
        ]
      }
    ],
    "dialogue": [
      {
        "speaker": "王方",
        "avatar": "👩‍🎓",
        "chinese": "这块手表是你的吗？",
        "pinyin": "Zhè kuài shǒubiǎo shì nǐ de ma?",
        "english": "Is this watch yours?"
      },
      {
        "speaker": "大卫",
        "avatar": "👨‍🎓",
        "chinese": "不是我的。左边那个红色的是我的。",
        "pinyin": "Bú shì wǒ de. Zuǒbiān nà ge hóngsè de shì wǒ de.",
        "english": "It's not mine. The red one on the left is mine."
      },
      {
        "speaker": "王方",
        "avatar": "👩‍🎓",
        "chinese": "这块手表多少钱？真漂亮！",
        "pinyin": "Zhè kuài shǒubiǎo duōshao qián? Zhēn piàoliang!",
        "english": "How much was this watch? It's really beautiful!"
      },
      {
        "speaker": "大卫",
        "avatar": "👨‍🎓",
        "chinese": "三千多块钱，是我丈夫送给我的生日礼物。",
        "pinyin": "Sānqiān duō kuài qián, shì wǒ zhàngfu sòng gěi wǒ de shēngrì lǐwù.",
        "english": "Over 3,000 yuan, it was a birthday gift from my husband."
      }
    ],
    "culture": "Red (红色) in Chinese culture symbolizes good fortune, joy, and vitality. It is prominently worn during weddings and the Spring Festival.",
    "exercises": [
      {
        "question": "What does '红色的' mean when talking about cups?",
        "options": [
          "The red one",
          "A new cup",
          "My cup",
          "An expensive cup"
        ],
        "answer": 0,
        "explanation": "'红色的' functions as a nominal phrase meaning 'the red one'."
      },
      {
        "question": "How do you say 'Please take a quick look'?",
        "options": [
          "请看一下",
          "请走一下",
          "请写一下",
          "请吃一下"
        ],
        "answer": 0,
        "explanation": "'看' (look) + '一下' (briefly) = 看一下."
      }
    ]
  },
  {
    "id": "hsk2-l4",
    "level": 2,
    "lessonNumber": 4,
    "title": "这个工作是他帮我介绍的",
    "pinyin": "Zhè ge gōngzuò shì tā bāng wǒ jièshào de",
    "english": "He Recommended Me for This Job",
    "summary": "Master 是...的 emphasizing agent or helper, express birthdays with 生日快乐, and indicate time duration with 已经 and 开始.",
    "vocabulary": [
      {
        "character": "生日",
        "pinyin": "shēngrì",
        "meaning": "birthday"
      },
      {
        "character": "快乐",
        "pinyin": "kuàilè",
        "meaning": "happy; cheerful"
      },
      {
        "character": "给",
        "pinyin": "gěi",
        "meaning": "to give; for"
      },
      {
        "character": "接",
        "pinyin": "jiē",
        "meaning": "to receive; pick up (phone/person)"
      },
      {
        "character": "晚上",
        "pinyin": "wǎnshang",
        "meaning": "evening; night"
      },
      {
        "character": "问",
        "pinyin": "wèn",
        "meaning": "to ask"
      },
      {
        "character": "非常",
        "pinyin": "fēicháng",
        "meaning": "extremely; unusually"
      },
      {
        "character": "开始",
        "pinyin": "kāishǐ",
        "meaning": "to start; begin"
      },
      {
        "character": "已经",
        "pinyin": "yǐjīng",
        "meaning": "already"
      },
      {
        "character": "长",
        "pinyin": "cháng",
        "meaning": "long"
      },
      {
        "character": "两",
        "pinyin": "liǎng",
        "meaning": "two (before measure words)"
      },
      {
        "character": "帮",
        "pinyin": "bāng",
        "meaning": "to help; assist"
      },
      {
        "character": "介绍",
        "pinyin": "jièshào",
        "meaning": "to introduce; recommend"
      }
    ],
    "grammar": [
      {
        "title": "Cleft '是...的' Emphasizing the Agent / Helper",
        "pattern": "主语 + 是 + 某人 + 动词 + 的",
        "explanation": "When an event has taken place, '是...的' can pinpoint WHO performed or assisted with the action.",
        "examples": [
          {
            "chinese": "这个工作是他帮我介绍的。",
            "pinyin": "Zhè ge gōngzuò shì tā bāng wǒ jièshào de.",
            "english": "It was he who helped recommend me for this job."
          },
          {
            "chinese": "这本书是李老师买的。",
            "pinyin": "Zhè běn shū shì Lǐ lǎoshī mǎi de.",
            "english": "This book was bought by Teacher Li."
          }
        ]
      },
      {
        "title": "Adverb '已经' (Already)",
        "pattern": "主语 + 已经 + 谓语 + 了",
        "explanation": "'已经...了' indicates an action or state has already taken effect or reached a specific duration.",
        "examples": [
          {
            "chinese": "他在北京已经住了两年了。",
            "pinyin": "Tā zài Běijīng yǐjīng zhù le liǎng nián le.",
            "english": "He has already lived in Beijing for two years."
          },
          {
            "chinese": "会议已经开始了。",
            "pinyin": "Huìyì yǐjīng kāishǐ le.",
            "english": "The meeting has already started."
          }
        ]
      }
    ],
    "dialogue": [
      {
        "speaker": "大卫",
        "avatar": "👨‍🎓",
        "chinese": "生日快乐！这是送给你的礼物。",
        "pinyin": "Shēngrì kuàilè! Zhè shì sòng gěi nǐ de lǐwù.",
        "english": "Happy birthday! This is a gift for you."
      },
      {
        "speaker": "李月",
        "avatar": "👩‍🏫",
        "chinese": "谢谢你！你在新公司工作得怎么样？",
        "pinyin": "Xièxie nǐ! Nǐ zài xīn gōngsī gōngzuò de zěnmeyàng?",
        "english": "Thank you! How is your work going at the new company?"
      },
      {
        "speaker": "大卫",
        "avatar": "👨‍🎓",
        "chinese": "非常好。这个工作是王老师帮我介绍的。",
        "pinyin": "Fēicháng hǎo. Zhè ge gōngzuò shì Wáng lǎoshī bāng wǒ jièshào de.",
        "english": "Very well. It was Teacher Wang who introduced me to this job."
      },
      {
        "speaker": "李月",
        "avatar": "👩‍🏫",
        "chinese": "你已经工作多长时间了？",
        "pinyin": "Nǐ yǐjīng gōngzuò duō cháng shíjiān le?",
        "english": "How long have you been working there already?"
      },
      {
        "speaker": "大卫",
        "avatar": "👨‍🎓",
        "chinese": "我已经工作两个多月了。",
        "pinyin": "Wǒ yǐjīng gōngzuò liǎng ge duō yuè le.",
        "english": "I have already been working for over two months."
      }
    ],
    "culture": "Recommending acquaintances for job opportunities (介绍工作) is a traditional facet of Chinese social networking and mutual assistance (互相帮助).",
    "exercises": [
      {
        "question": "How do you say 'Happy Birthday' in Chinese?",
        "options": [
          "生日快乐！",
          "新年好！",
          "再见！",
          "认识你很高兴！"
        ],
        "answer": 0,
        "explanation": "'生日快乐' (shēngrì kuàilè) means Happy Birthday."
      },
      {
        "question": "Translate: 'It was my friend who introduced me to this job.'",
        "options": [
          "这个工作是我朋友帮我介绍的。",
          "我想找一个工作。",
          "我朋友没有工作。",
          "这个工作很好。"
        ],
        "answer": 0,
        "explanation": "'是...的' construction identifies the agent/introducer."
      }
    ]
  },
  {
    "id": "hsk2-l5",
    "level": 2,
    "lessonNumber": 5,
    "title": "就买这件吧",
    "pinyin": "Jiù mǎi zhè jiàn ba",
    "english": "Take This One",
    "summary": "Express decisions with 就, offer suggestions with 吧, use measure word 件 for clothing, and evaluate with 还可以.",
    "vocabulary": [
      {
        "character": "外面",
        "pinyin": "wàimiàn",
        "meaning": "outside; exterior"
      },
      {
        "character": "准备",
        "pinyin": "zhǔnbèi",
        "meaning": "to prepare; plan"
      },
      {
        "character": "就",
        "pinyin": "jiù",
        "meaning": "then; precisely; immediately"
      },
      {
        "character": "鱼",
        "pinyin": "yú",
        "meaning": "fish"
      },
      {
        "character": "吧",
        "pinyin": "ba",
        "meaning": "suggestion modal particle"
      },
      {
        "character": "件",
        "pinyin": "jiàn",
        "meaning": "measure word for clothing"
      },
      {
        "character": "还",
        "pinyin": "hái",
        "meaning": "still; fairly; yet"
      },
      {
        "character": "可以",
        "pinyin": "kěyǐ",
        "meaning": "can; passable; not bad"
      },
      {
        "character": "不错",
        "pinyin": "búcuò",
        "meaning": "pretty good; not bad"
      },
      {
        "character": "考试",
        "pinyin": "kǎoshì",
        "meaning": "exam; test"
      },
      {
        "character": "意思",
        "pinyin": "yìsi",
        "meaning": "meaning; fun"
      },
      {
        "character": "以后",
        "pinyin": "yǐhòu",
        "meaning": "after; in the future"
      }
    ],
    "grammar": [
      {
        "title": "Adverb '就' for Prompt Decisions",
        "pattern": "就 + 动词",
        "explanation": "'就' indicates a resolution, choice, or decision reached without hesitation.",
        "examples": [
          {
            "chinese": "这件衣服很漂亮，就买这件吧！",
            "pinyin": "Zhè jiàn yīfu hěn piàoliang, jiù mǎi zhè jiàn ba!",
            "english": "This dress is very pretty, let's just buy this one!"
          },
          {
            "chinese": "今天太累了，我们就在家吃饭吧。",
            "pinyin": "Jīntiān tài lèi le, wǒmen jiù zài jiā chīfàn ba.",
            "english": "Too tired today, let's just eat at home."
          }
        ]
      },
      {
        "title": "Evaluation with '还可以' and '不错'",
        "pattern": "主语 + 还可以 / 不错",
        "explanation": "'还可以' signifies acceptable/passable ('pretty good'), while '不错' signifies genuinely good ('not bad').",
        "examples": [
          {
            "chinese": "这件衣服颜色还可以。",
            "pinyin": "Zhè jiàn yīfu yánsè hái kěyǐ.",
            "english": "This dress's color is pretty good."
          },
          {
            "chinese": "昨天的考试我觉得很不错。",
            "pinyin": "Zuótiān de kǎoshì wǒ juéde hěn búcuò.",
            "english": "I think yesterday's exam went very well."
          }
        ]
      }
    ],
    "dialogue": [
      {
        "speaker": "大卫",
        "avatar": "👨‍🎓",
        "chinese": "晚上我们去外面吃鱼，怎么样？",
        "pinyin": "Wǎnshang wǒmen qù wàimiàn chī yú, zěnmeyàng?",
        "english": "How about we go outside to eat fish tonight?"
      },
      {
        "speaker": "玛丽",
        "avatar": "👩‍🎓",
        "chinese": "我已经准备好做饭了，就在家吃吧。",
        "pinyin": "Wǒ yǐjīng zhǔnbèi hǎo zuò fàn le, jiù zài jiā chī ba.",
        "english": "I've already prepared to cook, let's just eat at home."
      },
      {
        "speaker": "大卫",
        "avatar": "👨‍🎓",
        "chinese": "你看这件衣服怎么样？",
        "pinyin": "Nǐ kàn zhè jiàn yīfu zěnmeyàng?",
        "english": "What do you think of this piece of clothing?"
      },
      {
        "speaker": "玛丽",
        "avatar": "👩‍🎓",
        "chinese": "颜色还可以，不太贵，就买这件吧！",
        "pinyin": "Yánsè hái kěyǐ, bú tài guì, jiù mǎi zhè jiàn ba!",
        "english": "The color is nice, not too expensive, let's buy this one!"
      }
    ],
    "culture": "The Chinese word for fish, 鱼 (yú), is a homophone for 余 (yú - abundance/surplus), giving rise to the famous festive greeting '年年有余' (May you have surplus year after year).",
    "exercises": [
      {
        "question": "What is the measure word for a shirt or jacket in Chinese?",
        "options": [
          "件",
          "个",
          "本",
          "口"
        ],
        "answer": 0,
        "explanation": "'件' (jiàn) is the dedicated measure word for upper-body clothing."
      },
      {
        "question": "How do you suggest: 'Let's buy this one'?",
        "options": [
          "就买这件吧！",
          "我想买衣服。",
          "这件衣服多少钱？",
          "不要买这件。"
        ],
        "answer": 0,
        "explanation": "'就...吧' forms a decisive suggestion."
      }
    ]
  },
  {
    "id": "hsk2-l6",
    "level": 2,
    "lessonNumber": 6,
    "title": "你怎么不吃了",
    "pinyin": "Nǐ zěnme bù chī le",
    "english": "Why Don't You Eat More?",
    "summary": "Inquire reasons with 怎么, express cause-and-effect with 因为...所以..., and discuss food and recovery.",
    "vocabulary": [
      {
        "character": "门",
        "pinyin": "mén",
        "meaning": "door; gate"
      },
      {
        "character": "外",
        "pinyin": "wài",
        "meaning": "outside; outer"
      },
      {
        "character": "自行车",
        "pinyin": "zìxíngchē",
        "meaning": "bicycle; bike"
      },
      {
        "character": "羊肉",
        "pinyin": "yángròu",
        "meaning": "mutton; lamb"
      },
      {
        "character": "好吃",
        "pinyin": "hǎochī",
        "meaning": "delicious"
      },
      {
        "character": "面条",
        "pinyin": "miàntiáo",
        "meaning": "noodles"
      },
      {
        "character": "怎么",
        "pinyin": "zěnme",
        "meaning": "how; why (inquiry)"
      },
      {
        "character": "因为",
        "pinyin": "yīnwèi",
        "meaning": "because"
      },
      {
        "character": "所以",
        "pinyin": "suǒyǐ",
        "meaning": "so; therefore"
      },
      {
        "character": "游泳",
        "pinyin": "yóuyǒng",
        "meaning": "to swim"
      }
    ],
    "grammar": [
      {
        "title": "Interrogative '怎么' Inquiring Cause/Reason",
        "pattern": "怎么 + 动词 / 否定词",
        "explanation": "'怎么' can ask WHY something did not occur or why someone is acting unexpectedly, with subtle surprise.",
        "examples": [
          {
            "chinese": "你怎么不吃了？这道羊肉很好吃。",
            "pinyin": "Nǐ zěnme bù chī le? Zhè dào yángròu hěn hǎochī.",
            "english": "Why aren't you eating anymore? This lamb is delicious."
          },
          {
            "chinese": "昨天你为什么没来上课？",
            "pinyin": "Zuótiān nǐ wèishénme méi lái shàngkè?",
            "english": "Why didn't you come to class yesterday?"
          }
        ]
      },
      {
        "title": "Cause and Effect: 因为...所以...",
        "pattern": "因为 + 原因，所以 + 结果",
        "explanation": "'因为' introduces the cause, and '所以' introduces the resulting outcome.",
        "examples": [
          {
            "chinese": "因为我生病了，所以不想吃羊肉。",
            "pinyin": "Yīnwèi wǒ shēngbìng le, suǒyǐ bù xiǎng chī yángròu.",
            "english": "Because I fell ill, therefore I don't feel like eating mutton."
          },
          {
            "chinese": "因为下雨了，所以我们没去踢足球。",
            "pinyin": "Yīnwèi xiàyǔ le, suǒyǐ wǒmen méi qù tī zúqiú.",
            "english": "Because it rained, we didn't go play soccer."
          }
        ]
      }
    ],
    "dialogue": [
      {
        "speaker": "李月",
        "avatar": "👩‍🏫",
        "chinese": "你最喜欢吃面条，今天怎么不吃了？",
        "pinyin": "Nǐ zuì xǐhuan chī miàntiáo, jīntiān zěnme bù chī le?",
        "english": "You like eating noodles the most, why aren't you eating today?"
      },
      {
        "speaker": "大卫",
        "avatar": "👨‍🎓",
        "chinese": "因为我昨晚感冒了，身体有点儿不舒服。",
        "pinyin": "Yīnwèi wǒ zuówǎn gǎnmào le, shēntǐ yǒudiǎnr bù shūfu.",
        "english": "Because I caught a cold last night, my body feels a bit uncomfortable."
      },
      {
        "speaker": "李月",
        "avatar": "👩‍🏫",
        "chinese": "那多喝热水，今天别骑自行车去学校了。",
        "pinyin": "Nà duō hē rè shuǐ, jīntiān bié qí zìxíngchē qù xuéxiào le.",
        "english": "Then drink more warm water, and don't ride a bicycle to school today."
      },
      {
        "speaker": "大卫",
        "avatar": "👨‍🎓",
        "chinese": "好的，谢谢老师，我吃了药就休息。",
        "pinyin": "Hǎo de, xièxie lǎoshī, wǒ chī le yào jiù xiūxi.",
        "english": "Okay, thank you teacher, I will rest after taking the medicine."
      }
    ],
    "culture": "In northern China, eating noodles (面条) on birthdays symbolizes long life (长寿面), whereas dumplings (饺子) symbolize wealth.",
    "exercises": [
      {
        "question": "How do you connect cause and effect in Chinese?",
        "options": [
          "因为...所以...",
          "虽然...但是...",
          "不仅...而且...",
          "除了...以外..."
        ],
        "answer": 0,
        "explanation": "'因为...所以...' means 'because... therefore...'."
      },
      {
        "question": "What is '羊肉' in English?",
        "options": [
          "Mutton / Lamb",
          "Beef",
          "Pork",
          "Chicken"
        ],
        "answer": 0,
        "explanation": "'羊肉' (yángròu) means mutton or lamb meat."
      }
    ]
  },
  {
    "id": "hsk2-l7",
    "level": 2,
    "lessonNumber": 7,
    "title": "你家离公司远吗",
    "pinyin": "Nǐ jiā lí gōngsī yuǎn ma",
    "english": "Do You Live Far from the Company?",
    "summary": "Master preposition 离 for distances, express travel speed with 快 and 慢, and talk about buses and airports.",
    "vocabulary": [
      {
        "character": "教室",
        "pinyin": "jiàoshì",
        "meaning": "classroom"
      },
      {
        "character": "机场",
        "pinyin": "jīchǎng",
        "meaning": "airport"
      },
      {
        "character": "路",
        "pinyin": "lù",
        "meaning": "road; route; way"
      },
      {
        "character": "离",
        "pinyin": "lí",
        "meaning": "away from; distance from"
      },
      {
        "character": "公司",
        "pinyin": "gōngsī",
        "meaning": "company; corporation"
      },
      {
        "character": "远",
        "pinyin": "yuǎn",
        "meaning": "far; distant"
      },
      {
        "character": "公共汽车",
        "pinyin": "gōnggòng qìchē",
        "meaning": "bus; public bus"
      },
      {
        "character": "小时",
        "pinyin": "xiǎoshí",
        "meaning": "hour"
      },
      {
        "character": "慢",
        "pinyin": "màn",
        "meaning": "slow"
      },
      {
        "character": "快",
        "pinyin": "kuài",
        "meaning": "fast; quick; soon"
      },
      {
        "character": "走",
        "pinyin": "zǒu",
        "meaning": "to walk; leave"
      },
      {
        "character": "到",
        "pinyin": "dào",
        "meaning": "to arrive; reach"
      }
    ],
    "grammar": [
      {
        "title": "Distance Preposition '离' (From)",
        "pattern": "地点 A + 离 + 地点 B + 很远 / 很近",
        "explanation": "'离' measures spatial or temporal distance between two reference points.",
        "examples": [
          {
            "chinese": "我家离公司很近，走路十分钟就到了。",
            "pinyin": "Wǒ jiā lí gōngsī hěn jìn, zǒulù shí fēnzhōng jiù dào le.",
            "english": "My home is very close to the company; 10 minutes walk and I arrive."
          },
          {
            "chinese": "学校离机场远不远？",
            "pinyin": "Xuéxiào lí jīchǎng yuǎn bù yuǎn?",
            "english": "Is the school far from the airport?"
          }
        ]
      },
      {
        "title": "Duration of Time: 小时",
        "pattern": "Number + 个 + 小时",
        "explanation": "Duration in hours requires the measure word '个': 一个小时 (one hour), 两个小时 (two hours).",
        "examples": [
          {
            "chinese": "坐公共汽车要一个小时。",
            "pinyin": "Zuò gōnggòng qìchē yào yí ge xiǎoshí.",
            "english": "Taking the bus takes one hour."
          },
          {
            "chinese": "坐出租车比坐公共汽车快。",
            "pinyin": "Zuò chūzūchē bǐ zuò gōnggòng qìchē kuài.",
            "english": "Taking a taxi is faster than taking a bus."
          }
        ]
      }
    ],
    "dialogue": [
      {
        "speaker": "王方",
        "avatar": "👩‍🎓",
        "chinese": "大卫，你家离公司远吗？",
        "pinyin": "Dàwèi, nǐ jiā lí gōngsī yuǎn ma?",
        "english": "David, do you live far from the company?"
      },
      {
        "speaker": "大卫",
        "avatar": "👨‍🎓",
        "chinese": "我家离公司不太远，坐公共汽车二十多分钟。",
        "pinyin": "Wǒ jiā lí gōngsī bú tài yuǎn, zuò gōnggòng qìchē èrshí duō fēnzhōng.",
        "english": "My home is not too far from the company, over 20 minutes by bus."
      },
      {
        "speaker": "王方",
        "avatar": "👩‍🎓",
        "chinese": "路上车多吗？堵不堵车？",
        "pinyin": "Lù shang chē duō ma? Dǔ bù dǔ chē?",
        "english": "Are there many cars on the road? Is it jammed?"
      },
      {
        "speaker": "大卫",
        "avatar": "👨‍🎓",
        "chinese": "早上车很多，开得有点儿慢。坐地铁最快了。",
        "pinyin": "Zǎoshang chē hěn duō, kāi de yǒudiǎnr màn. Zuò dìtiě zuì kuài le.",
        "english": "In the morning there are many cars, driving is slow. Taking the subway is fastest."
      }
    ],
    "culture": "China boasts the world's most extensive public transportation network, with subway systems in over 50 cities and clean electric buses ubiquitous.",
    "exercises": [
      {
        "question": "How do you ask 'Is your home far from school?'",
        "options": [
          "你家离学校远吗？",
          "你家在学校哪儿？",
          "你为什么去学校？",
          "学校几点关门？"
        ],
        "answer": 0,
        "explanation": "'地点 A + 离 + 地点 B + 远吗？' is the pattern for asking distance."
      },
      {
        "question": "Translate 'two hours':",
        "options": [
          "两个小时",
          "两小时点",
          "二点",
          "二小时"
        ],
        "answer": 0,
        "explanation": "Duration in hours uses '两个小时'."
      }
    ]
  },
  {
    "id": "hsk2-l8",
    "level": 2,
    "lessonNumber": 8,
    "title": "让我想想再告诉你",
    "pinyin": "Ràng wǒ xiǎngxiang zài gàosu nǐ",
    "english": "Let Me Think About It and Tell You Later",
    "summary": "Master causative verb 让, sequential temporal adverb 再, and verb reduplication (想想, 看看).",
    "vocabulary": [
      {
        "character": "再",
        "pinyin": "zài",
        "meaning": "again; then (sequential future)"
      },
      {
        "character": "让",
        "pinyin": "ràng",
        "meaning": "to let; allow; ask (causative)"
      },
      {
        "character": "告诉",
        "pinyin": "gàosu",
        "meaning": "to tell; inform"
      },
      {
        "character": "等",
        "pinyin": "děng",
        "meaning": "to wait"
      },
      {
        "character": "找",
        "pinyin": "zhǎo",
        "meaning": "to look for; seek"
      },
      {
        "character": "事情",
        "pinyin": "shìqing",
        "meaning": "affair; matter; thing"
      },
      {
        "character": "服务员",
        "pinyin": "fúwùyuán",
        "meaning": "waiter; attendant"
      },
      {
        "character": "白",
        "pinyin": "bái",
        "meaning": "white"
      },
      {
        "character": "黑",
        "pinyin": "hēi",
        "meaning": "black"
      },
      {
        "character": "贵",
        "pinyin": "guì",
        "meaning": "expensive"
      }
    ],
    "grammar": [
      {
        "title": "Causative Verb '让' (Let / Allow)",
        "pattern": "主语 + 让 + 宾语 + 动词",
        "explanation": "'让' indicates permission, request, or causation ('allow me to...', 'cause someone to...').",
        "examples": [
          {
            "chinese": "让我想想再告诉你。",
            "pinyin": "Ràng wǒ xiǎngxiang zài gàosu nǐ.",
            "english": "Let me think about it and then tell you."
          },
          {
            "chinese": "老师让我读一下这篇课文。",
            "pinyin": "Lǎoshī ràng wǒ dú yíxià zhè piān kèwén.",
            "english": "The teacher asked me to read this text."
          }
        ]
      },
      {
        "title": "Sequential Adverb '再' (Action Follows Another)",
        "pattern": "先... 再 + 动词",
        "explanation": "'再' placed before a verb indicates that an action will happen only after another prerequisite action is completed.",
        "examples": [
          {
            "chinese": "我们吃了饭再去看电影吧。",
            "pinyin": "Wǒmen chī le fàn zài qù kàn diànyǐng ba.",
            "english": "Let's eat a meal first, then go watch the movie."
          },
          {
            "chinese": "你先等一下，我找找手机。",
            "pinyin": "Nǐ xiān děng yíxià, wǒ zhǎozhao shǒujī.",
            "english": "Wait a moment, I'll look for my phone."
          }
        ]
      }
    ],
    "dialogue": [
      {
        "speaker": "大卫",
        "avatar": "👨‍🎓",
        "chinese": "周末我们去爬山，怎么样？",
        "pinyin": "Zhōumò wǒmen qù pá shān, zěnmeyàng?",
        "english": "How about we go mountain climbing this weekend?"
      },
      {
        "speaker": "李月",
        "avatar": "👩‍🏫",
        "chinese": "周末我可能有点儿事情，让我想想再告诉你。",
        "pinyin": "Zhōumò wǒ kěnéng yǒudiǎnr shìqing, ràng wǒ xiǎngxiang zài gàosu nǐ.",
        "english": "I might have some matters this weekend, let me think about it and tell you later."
      },
      {
        "speaker": "大卫",
        "avatar": "👨‍🎓",
        "chinese": "好的。你看这两件衣服，哪件好看？",
        "pinyin": "Hǎo de. Nǐ kàn zhè liǎng jiàn yīfu, nǎ jiàn hǎokàn?",
        "english": "Okay. Look at these two shirts, which one looks better?"
      },
      {
        "speaker": "李月",
        "avatar": "👩‍🏫",
        "chinese": "白色的比黑色的好看，但是有点儿贵。",
        "pinyin": "Báisè de bǐ hēisè de hǎokàn, dànshì yǒudiǎnr guì.",
        "english": "The white one looks better than the black one, but it is a bit expensive."
      }
    ],
    "culture": "Reduplicating a verb (看看, 听听, 想想) softens the tone of speech, making requests and statements sound polite, gentle, and informal.",
    "exercises": [
      {
        "question": "What does '让我想想' mean?",
        "options": [
          "Let me think a bit",
          "I am thinking",
          "Don't think",
          "Think deeply"
        ],
        "answer": 0,
        "explanation": "'让' (let) + '想想' (think a bit) = Let me think a bit."
      },
      {
        "question": "How do you say 'eat first, then go'?",
        "options": [
          "吃了饭再去",
          "再去吃饭",
          "不要吃饭",
          "去吃饭了"
        ],
        "answer": 0,
        "explanation": "'再' denotes a subsequent action in the future."
      }
    ]
  },
  {
    "id": "hsk2-l9",
    "level": 2,
    "lessonNumber": 9,
    "title": "题太多，我没做完",
    "pinyin": "Tí tài duō, wǒ méi zuò wán",
    "english": "There Were Too Many Questions, I Didn't Finish",
    "summary": "Master resultative complements 完 and 懂, express ranges with 从...到..., and use ordinal marker 第.",
    "vocabulary": [
      {
        "character": "错",
        "pinyin": "cuò",
        "meaning": "wrong; mistaken"
      },
      {
        "character": "从",
        "pinyin": "cóng",
        "meaning": "from (preposition)"
      },
      {
        "character": "跳舞",
        "pinyin": "tiàowǔ",
        "meaning": "to dance"
      },
      {
        "character": "第一",
        "pinyin": "dì-yī",
        "meaning": "first; number one"
      },
      {
        "character": "希望",
        "pinyin": "xīwàng",
        "meaning": "to hope; wish"
      },
      {
        "character": "问题",
        "pinyin": "wèntí",
        "meaning": "question; problem"
      },
      {
        "character": "欢迎",
        "pinyin": "huānyíng",
        "meaning": "to welcome"
      },
      {
        "character": "上班",
        "pinyin": "shàngbān",
        "meaning": "to go to work"
      },
      {
        "character": "懂",
        "pinyin": "dǒng",
        "meaning": "to understand; comprehend"
      },
      {
        "character": "完",
        "pinyin": "wán",
        "meaning": "to finish; complete (resultative)"
      },
      {
        "character": "题",
        "pinyin": "tí",
        "meaning": "exam question; problem"
      }
    ],
    "grammar": [
      {
        "title": "Resultative Complement: 动词 + 完 / 懂",
        "pattern": "动词 + 完 / 懂 (否定: 没 + 动词 + 完)",
        "explanation": "Resultative complements attach directly to the verb to signify the outcome of the action: 做完 (finish doing), 听懂 (comprehend by listening).",
        "examples": [
          {
            "chinese": "考试的题太多了，我没做完。",
            "pinyin": "Kǎoshì de tí tài duō le, wǒ méi zuò wán.",
            "english": "There were too many exam questions, I didn't finish doing them."
          },
          {
            "chinese": "老师说的话你听懂了吗？",
            "pinyin": "Lǎoshī shuō de huà nǐ tīng dǒng le ma?",
            "english": "Did you understand what the teacher said?"
          }
        ]
      },
      {
        "title": "Span of Time / Place: 从...到...",
        "pattern": "从 + 起点 + 到 + 终点",
        "explanation": "'从...到...' defines a range between two points in time or space.",
        "examples": [
          {
            "chinese": "我们从早上八点到中午十二点上班。",
            "pinyin": "Wǒmen cóng zǎoshang bā diǎn dào zhōngwǔ shí'èr diǎn shàngbān.",
            "english": "We work from 8 AM to 12 noon."
          },
          {
            "chinese": "从北京到上海坐高铁很快。",
            "pinyin": "Cóng Běijīng dào Shànghǎi zuò gāotiě hěn kuài.",
            "english": "From Beijing to Shanghai by high-speed rail is very fast."
          }
        ]
      }
    ],
    "dialogue": [
      {
        "speaker": "大卫",
        "avatar": "👨‍🎓",
        "chinese": "今天的考试你觉得怎么样？",
        "pinyin": "Jīntiān de kǎoshì nǐ juéde zěnmeyàng?",
        "english": "How did you find today's exam?"
      },
      {
        "speaker": "玛丽",
        "avatar": "👩‍🎓",
        "chinese": "题太多了，我没做完。第一道题你做对了吗？",
        "pinyin": "Tí tài duō le, wǒ méi zuò wán. Dì-yī dào tí nǐ zuò duì le ma?",
        "english": "There were too many questions, I didn't finish. Did you get the first question right?"
      },
      {
        "speaker": "大卫",
        "avatar": "👨‍🎓",
        "chinese": "第一道题我听懂了，做对了。后面的听力有点儿难。",
        "pinyin": "Dì-yī dào tí wǒ tīng dǒng le, zuò duì le. Hòumiàn de tīnglì yǒudiǎnr nán.",
        "english": "I understood the first question and got it right. The listening later on was a bit hard."
      },
      {
        "speaker": "玛丽",
        "avatar": "👩‍🎓",
        "chinese": "希望我们都能考出好成绩！",
        "pinyin": "Xīwàng wǒmen dōu néng kǎo chū hǎo chéngjì!",
        "english": "I hope we both get good grades!"
      }
    ],
    "culture": "Standard examinations in China place strong weight on reading speed and accuracy, preparing learners for timed proficiency assessments like the HSK.",
    "exercises": [
      {
        "question": "How do you express 'I did not finish the exam'?",
        "options": [
          "我没做完考试。",
          "我做完考试了。",
          "我想做考试。",
          "考试很难。"
        ],
        "answer": 0,
        "explanation": "'没做完' is the negative resultative complement form."
      },
      {
        "question": "What is '第一' in English?",
        "options": [
          "First / Number one",
          "Second",
          "Last",
          "One time"
        ],
        "answer": 0,
        "explanation": "Prefix '第' forms ordinal numbers: 第一 (first)."
      }
    ]
  },
  {
    "id": "hsk2-l10",
    "level": 2,
    "lessonNumber": 10,
    "title": "别找了，手机在桌子上呢",
    "pinyin": "Bié zhǎo le, shǒujī zài zhuōzi shang ne",
    "english": "Stop Looking, the Phone is on the Table",
    "summary": "Master negative imperative 别...了, progressive aspect 正在, and modal particle 呢 indicating current state.",
    "vocabulary": [
      {
        "character": "别",
        "pinyin": "bié",
        "meaning": "don't; do not (imperative)"
      },
      {
        "character": "哥哥",
        "pinyin": "gēge",
        "meaning": "elder brother"
      },
      {
        "character": "鸡蛋",
        "pinyin": "jīdàn",
        "meaning": "chicken egg"
      },
      {
        "character": "西瓜",
        "pinyin": "xīguā",
        "meaning": "watermelon"
      },
      {
        "character": "正在",
        "pinyin": "zhèngzài",
        "meaning": "in the process of; right now"
      },
      {
        "character": "手机",
        "pinyin": "shǒujī",
        "meaning": "cellphone; mobile phone"
      },
      {
        "character": "洗",
        "pinyin": "xǐ",
        "meaning": "to wash"
      },
      {
        "character": "唱歌",
        "pinyin": "chànggē",
        "meaning": "to sing"
      },
      {
        "character": "男",
        "pinyin": "nán",
        "meaning": "male"
      },
      {
        "character": "孩子",
        "pinyin": "háizi",
        "meaning": "child; kid"
      }
    ],
    "grammar": [
      {
        "title": "Negative Imperative: 别 + 动词 + (了)",
        "pattern": "别 + 动词 + 了",
        "explanation": "'别...了' functions as 'Stop doing that!' or 'Don't do that anymore', urging cessation of an action.",
        "examples": [
          {
            "chinese": "别找了，手机在桌子上呢。",
            "pinyin": "Bié zhǎo le, shǒujī zài zhuōzi shang ne.",
            "english": "Stop looking, the phone is on the table."
          },
          {
            "chinese": "别说话了，老师来了。",
            "pinyin": "Bié shuōhuà le, lǎoshī lái le.",
            "english": "Stop talking, the teacher is here."
          }
        ]
      },
      {
        "title": "Progressive Marker: 正在 + 动词",
        "pattern": "主语 + 正在 + 动词",
        "explanation": "'正在' emphasizes that an action is taking place right at this exact moment.",
        "examples": [
          {
            "chinese": "哥哥正在房间里唱歌呢。",
            "pinyin": "Gēge zhèngzài fángjiān lǐ chànggē ne.",
            "english": "Older brother is right now singing in his room."
          },
          {
            "chinese": "妈妈正在洗衣服。",
            "pinyin": "Māma zhèngzài xǐ yīfu.",
            "english": "Mom is washing clothes right now."
          }
        ]
      }
    ],
    "dialogue": [
      {
        "speaker": "大卫",
        "avatar": "👨‍🎓",
        "chinese": "你在找什么呢？",
        "pinyin": "Nǐ zài zhǎo shénme ne?",
        "english": "What are you looking for?"
      },
      {
        "speaker": "王方",
        "avatar": "👩‍🎓",
        "chinese": "我的手机不见了，不知道在哪儿。",
        "pinyin": "Wǒ de shǒujī bú jiàn le, bù zhīdào zài nǎr.",
        "english": "My phone is gone, I don't know where it is."
      },
      {
        "speaker": "大卫",
        "avatar": "👨‍🎓",
        "chinese": "别找了，手机在桌子上呢，电脑旁边。",
        "pinyin": "Bié zhǎo le, shǒujī zài zhuōzi shang ne, diànnǎo pángbiān.",
        "english": "Stop looking, the phone is right on the table, next to the computer."
      },
      {
        "speaker": "王方",
        "avatar": "👩‍🎓",
        "chinese": "看到了！太谢谢你了，我们吃西瓜吧。",
        "pinyin": "Kàndào le! Tài xièxie nǐ le, wǒmen chī xīguā ba.",
        "english": "Found it! Thanks so much, let's eat watermelon."
      }
    ],
    "culture": "Watermelon (西瓜) is China's quintessential summer fruit, traditionally chilled in well-water or refrigerators and served after meals.",
    "exercises": [
      {
        "question": "How do you say 'Stop looking!'?",
        "options": [
          "别找了！",
          "想找！",
          "在找呢！",
          "找手机！"
        ],
        "answer": 0,
        "explanation": "'别...了' orders someone to stop an ongoing action."
      },
      {
        "question": "Complete: 他______在房间里看书呢。",
        "options": [
          "正",
          "从",
          "最",
          "让"
        ],
        "answer": 0,
        "explanation": "'正在' denotes ongoing action right now."
      }
    ]
  },
  {
    "id": "hsk2-l11",
    "level": 2,
    "lessonNumber": 11,
    "title": "他比我大三岁",
    "pinyin": "Tā bǐ wǒ dà sān suì",
    "english": "He is Three Years Older Than Me",
    "summary": "Master comparative construction A 比 B + Adjective, express concrete differences with numbers, and use negative comparison 没有.",
    "vocabulary": [
      {
        "character": "比",
        "pinyin": "bǐ",
        "meaning": "than (comparative marker)"
      },
      {
        "character": "矮",
        "pinyin": "ǎi",
        "meaning": "short (in stature)"
      },
      {
        "character": "唱歌",
        "pinyin": "chànggē",
        "meaning": "to sing"
      },
      {
        "character": "妻子",
        "pinyin": "qīzi",
        "meaning": "wife"
      },
      {
        "character": "日记",
        "pinyin": "rìjì",
        "meaning": "diary"
      },
      {
        "character": "便宜",
        "pinyin": "piányi",
        "meaning": "cheap; inexpensive"
      },
      {
        "character": "说话",
        "pinyin": "shuōhuà",
        "meaning": "to speak; talk"
      },
      {
        "character": "可能",
        "pinyin": "kěnéng",
        "meaning": "maybe; possible"
      },
      {
        "character": "去年",
        "pinyin": "qùnián",
        "meaning": "last year"
      }
    ],
    "grammar": [
      {
        "title": "Basic Comparative: A 比 B + 形容词",
        "pattern": "A + 比 + B + 形容词",
        "explanation": "To compare two entities where A has more of a quality than B, place '比' between A and B.",
        "examples": [
          {
            "chinese": "哥哥比弟弟高。",
            "pinyin": "Gēge bǐ dìdi gāo.",
            "english": "Older brother is taller than younger brother."
          },
          {
            "chinese": "今天比昨天冷。",
            "pinyin": "Jīntiān bǐ zuótiān lěng.",
            "english": "Today is colder than yesterday."
          }
        ]
      },
      {
        "title": "Comparative with Concrete Quantity",
        "pattern": "A + 比 + B + 形容词 + 数量词",
        "explanation": "To state the specific numerical difference between A and B, place the quantity AFTER the adjective.",
        "examples": [
          {
            "chinese": "他比我大三岁。",
            "pinyin": "Tā bǐ wǒ dà sān suì.",
            "english": "He is three years older than me."
          },
          {
            "chinese": "这件衣服比那件便宜五十块钱。",
            "pinyin": "Zhè jiàn yīfu bǐ nà jiàn piányi wǔshí kuài qián.",
            "english": "This piece of clothing is 50 yuan cheaper than that one."
          }
        ]
      }
    ],
    "dialogue": [
      {
        "speaker": "大卫",
        "avatar": "👨‍🎓",
        "chinese": "王方，你和你哥哥谁大？",
        "pinyin": "Wáng Fāng, nǐ hé nǐ gēge shéi dà?",
        "english": "Wang Fang, who is older between you and your brother?"
      },
      {
        "speaker": "王方",
        "avatar": "👩‍🎓",
        "chinese": "我哥哥比我大三岁，他也比我高一点儿。",
        "pinyin": "Wǒ gēge bǐ wǒ dà sān suì, tā yě bǐ wǒ gāo yìdiǎnr.",
        "english": "My brother is three years older than me, he is also a bit taller than me."
      },
      {
        "speaker": "大卫",
        "avatar": "👨‍🎓",
        "chinese": "你唱歌唱得很好，你哥哥也会唱歌吗？",
        "pinyin": "Nǐ chànggē chàng de hěn hǎo, nǐ gēge yě huì chànggē ma?",
        "english": "You sing very well, can your brother sing too?"
      },
      {
        "speaker": "王方",
        "avatar": "👩‍🎓",
        "chinese": "他比我更喜欢唱歌，唱得比我好听多了！",
        "pinyin": "Tā bǐ wǒ gèng xǐhuan chànggē, chàng de bǐ wǒ hǎotīng duō le!",
        "english": "He likes singing even more than me, and sings much better!"
      }
    ],
    "culture": "In Chinese families, addressing siblings by specific kinship titles (哥哥, 姐姐, 弟弟, 妹妹) rather than first names expresses familial respect and affection.",
    "exercises": [
      {
        "question": "How do you say 'He is 3 years older than me'?",
        "options": [
          "他比我大三岁。",
          "他比我三岁大。",
          "我比他大三岁。",
          "他是大三岁。"
        ],
        "answer": 0,
        "explanation": "A + 比 + B + 形容词 (大) + 数量词 (三岁)."
      },
      {
        "question": "What is the opposite of '高' (tall)?",
        "options": [
          "矮",
          "长",
          "短",
          "小"
        ],
        "answer": 0,
        "explanation": "'矮' (ǎi) means short in height."
      }
    ]
  },
  {
    "id": "hsk2-l12",
    "level": 2,
    "lessonNumber": 12,
    "title": "你穿得太少了",
    "pinyin": "Nǐ chuān de tài shǎo le",
    "english": "You Are Wearing Too Little",
    "summary": "Master degree complements with 得 (跑得快, 穿得少), describe cold winter weather, and express frequency with 次.",
    "vocabulary": [
      {
        "character": "得",
        "pinyin": "de",
        "meaning": "structural particle (for complement of degree)"
      },
      {
        "character": "穿",
        "pinyin": "chuān",
        "meaning": "to wear; put on"
      },
      {
        "character": "进",
        "pinyin": "jìn",
        "meaning": "to enter; come in"
      },
      {
        "character": "妻子",
        "pinyin": "qīzi",
        "meaning": "wife"
      },
      {
        "character": "雪",
        "pinyin": "xuě",
        "meaning": "snow"
      },
      {
        "character": "零",
        "pinyin": "líng",
        "meaning": "zero"
      },
      {
        "character": "度",
        "pinyin": "dù",
        "meaning": "degree (temperature/angle)"
      },
      {
        "character": "次",
        "pinyin": "cì",
        "meaning": "time (frequency measure word)"
      }
    ],
    "grammar": [
      {
        "title": "Complement of Degree: 动词 + 得 + 评价",
        "pattern": "动词 + 得 + 很 / 太 / 比较 + 形容词",
        "explanation": "'得' connects a verb with an evaluation of how well or to what degree that action is performed.",
        "examples": [
          {
            "chinese": "外边下雪了，你穿得太少了！",
            "pinyin": "Wàibian xià xuě le, nǐ chuān de tài shǎo le!",
            "english": "It's snowing outside, you are dressed too lightly!"
          },
          {
            "chinese": "他跑步跑得非常快。",
            "pinyin": "Tā pǎobù pǎo de fēicháng kuài.",
            "english": "He runs exceptionally fast."
          }
        ]
      },
      {
        "title": "Describing Temperature with '度' and '零下'",
        "pattern": "Number + 度 (零下 = Below Zero)",
        "explanation": "Temperature in Celsius is measured in '度'. Below zero is '零下'.",
        "examples": [
          {
            "chinese": "今天北京零下五度。",
            "pinyin": "Jīntiān Běijīng língxià wǔ dù.",
            "english": "Today in Beijing it is 5 degrees below zero."
          },
          {
            "chinese": "快进房间来吧，里边暖和。",
            "pinyin": "Kuài jìn fángjiān lái ba, lǐbian nuǎnhuo.",
            "english": "Quickly come into the room, inside is warm."
          }
        ]
      }
    ],
    "dialogue": [
      {
        "speaker": "李月",
        "avatar": "👩‍🏫",
        "chinese": "今天外边下雪了，零下五度呢！你怎么穿得这么少？",
        "pinyin": "Jīntiān wàibian xià xuě le, língxià wǔ dù ne! Nǐ zěnme chuān de zhème shǎo?",
        "english": "It's snowing outside today, minus five degrees! Why are you dressed so lightly?"
      },
      {
        "speaker": "大卫",
        "avatar": "👨‍🎓",
        "chinese": "我出门时没看天气预报。真的有点儿冷！",
        "pinyin": "Wǒ chū mén shí méi kàn tiānqì yùbào. Zhēn de yǒudiǎnr lěng!",
        "english": "I didn't check the weather forecast when I left home. It really is cold!"
      },
      {
        "speaker": "李月",
        "avatar": "👩‍🏫",
        "chinese": "快进屋来，喝一杯热茶吧。",
        "pinyin": "Kuài jìn wū lái, hē yì bēi rè chá ba.",
        "english": "Come into the room quickly, have a cup of hot tea."
      },
      {
        "speaker": "大卫",
        "avatar": "👨‍🎓",
        "chinese": "谢谢李老师，今天不能在外面跑步了。",
        "pinyin": "Xièxie Lǐ lǎoshī, jīntiān bù néng zài wàimiàn pǎobù le.",
        "english": "Thank you Teacher Li, today we can't run outside."
      }
    ],
    "culture": "Northern China features widespread municipal central heating (暖气) from November to March, making indoor spaces delightfully warm even in freezing winter.",
    "exercises": [
      {
        "question": "How do you say 'He runs very fast'?",
        "options": [
          "他跑得很快。",
          "他快跑。",
          "他跑得很慢。",
          "他跑得少。"
        ],
        "answer": 0,
        "explanation": "'动词 + 得 + 评价形容词' expresses degree."
      },
      {
        "question": "What is '雪'?",
        "options": [
          "Snow",
          "Rain",
          "Wind",
          "Cloud"
        ],
        "answer": 0,
        "explanation": "'雪' (xuě) means snow."
      }
    ]
  },
  {
    "id": "hsk2-l13",
    "level": 2,
    "lessonNumber": 13,
    "title": "门开着呢",
    "pinyin": "Mén kāi zhe ne",
    "english": "The Door is Open",
    "summary": "Master aspect particle 着 for continuous states, indicate directions with 往, and navigate streets.",
    "vocabulary": [
      {
        "character": "着",
        "pinyin": "zhe",
        "meaning": "aspect particle (continuous state)"
      },
      {
        "character": "手",
        "pinyin": "shǒu",
        "meaning": "hand"
      },
      {
        "character": "拿",
        "pinyin": "ná",
        "meaning": "to hold; take"
      },
      {
        "character": "铅笔",
        "pinyin": "qiānbǐ",
        "meaning": "pencil"
      },
      {
        "character": "笑",
        "pinyin": "xiào",
        "meaning": "to smile; laugh"
      },
      {
        "character": "宾馆",
        "pinyin": "bīnguǎn",
        "meaning": "hotel; guesthouse"
      },
      {
        "character": "一直",
        "pinyin": "yìzhí",
        "meaning": "straight; continuously"
      },
      {
        "character": "往",
        "pinyin": "wǎng",
        "meaning": "toward; head for"
      },
      {
        "character": "路口",
        "pinyin": "lùkǒu",
        "meaning": "intersection; crossing"
      }
    ],
    "grammar": [
      {
        "title": "Continuous State with '着'",
        "pattern": "动词 + 着 + (呢)",
        "explanation": "'着' indicates the continuation of a state resulting from an action: 门开着 (the door is open), 他穿着红衣服 (he is wearing red clothes).",
        "examples": [
          {
            "chinese": "门开着呢，请进吧。",
            "pinyin": "Mén kāi zhe ne, qǐng jìn ba.",
            "english": "The door is open, please come in."
          },
          {
            "chinese": "那个手里拿着铅笔的人是谁？",
            "pinyin": "Nà ge shǒu lǐ ná zhe qiānbǐ de rén shì shéi?",
            "english": "Who is that person holding a pencil in hand?"
          }
        ]
      },
      {
        "title": "Giving Directions: 往 + Direction + 动词",
        "pattern": "往 + 方向 + 动词",
        "explanation": "'往' indicates the direction of movement: 往左拐 (turn left), 往前走 (walk forward).",
        "examples": [
          {
            "chinese": "从这儿一直往前走，就是宾馆。",
            "pinyin": "Cóng zhèr yìzhí wǎng qián zǒu, jiù shì bīnguǎn.",
            "english": "From here walk straight forward, and there is the hotel."
          },
          {
            "chinese": "到前面的路口往右拐。",
            "pinyin": "Dào qiánmiàn de lùkǒu wǎng yòu guǎi.",
            "english": "Turn right at the intersection ahead."
          }
        ]
      }
    ],
    "dialogue": [
      {
        "speaker": "大卫",
        "avatar": "👨‍🎓",
        "chinese": "请问，李老师在办公室吗？",
        "pinyin": "Qǐngwèn, Lǐ lǎoshī zài bàngōngshì ma?",
        "english": "Excuse me, is Teacher Li in the office?"
      },
      {
        "speaker": "王方",
        "avatar": "👩‍🎓",
        "chinese": "在，你看，办公室的门开着呢。",
        "pinyin": "Zài, nǐ kàn, bàngōngshì de mén kāi zhe ne.",
        "english": "Yes, look, the office door is open."
      },
      {
        "speaker": "大卫",
        "avatar": "👨‍🎓",
        "chinese": "里面那个笑着跟客人说话的人就是她吧？",
        "pinyin": "Lǐmiàn nà ge xiào zhe gēn kèrén shuōhuà de rén jiù shì tā ba?",
        "english": "The person inside smiling and talking with guests is her, right?"
      },
      {
        "speaker": "王方",
        "avatar": "👩‍🎓",
        "chinese": "对，就是李老师，你快进去吧。",
        "pinyin": "Duì, jiù shì Lǐ lǎoshī, nǐ kuài jìnqu ba.",
        "english": "Right, that's Teacher Li, go in quickly."
      }
    ],
    "culture": "Chinese directional navigation traditionally relies on cardinal points (东南西北) as well as relative terms (前后左右). In cities like Beijing, locals often direct you '往东' (head east).",
    "exercises": [
      {
        "question": "What does '门开着呢' indicate?",
        "options": [
          "The door is in an open state",
          "Someone is opening the door",
          "Please close the door",
          "The door is locked"
        ],
        "answer": 0,
        "explanation": "'动词 + 着' indicates a persisting state resulting from an action."
      },
      {
        "question": "How do you say 'Walk straight forward'?",
        "options": [
          "一直往前走",
          "往左边看",
          "往后退",
          "往右边走"
        ],
        "answer": 0,
        "explanation": "'一直' (straight) + '往前走' (walk forward) = 一直往前走."
      }
    ]
  },
  {
    "id": "hsk2-l14",
    "level": 2,
    "lessonNumber": 14,
    "title": "你看过那个电影吗",
    "pinyin": "Nǐ kàn guo nà ge diànyǐng ma",
    "english": "Have You Seen That Movie?",
    "summary": "Master experiential aspect particle 过 for past experiences, express contrast with 虽然...但是..., and talk about cinema.",
    "vocabulary": [
      {
        "character": "过",
        "pinyin": "guo",
        "meaning": "aspect particle (past experience)"
      },
      {
        "character": "次",
        "pinyin": "cì",
        "meaning": "time; frequency measure word"
      },
      {
        "character": "虽然",
        "pinyin": "suīrán",
        "meaning": "although; even though"
      },
      {
        "character": "但是",
        "pinyin": "dànshì",
        "meaning": "but; however"
      },
      {
        "character": "晴",
        "pinyin": "qíng",
        "meaning": "sunny; clear weather"
      },
      {
        "character": "百",
        "pinyin": "bǎi",
        "meaning": "hundred"
      },
      {
        "character": "日",
        "pinyin": "rì",
        "meaning": "day; sun; date"
      },
      {
        "character": "报纸",
        "pinyin": "bàozhǐ",
        "meaning": "newspaper"
      }
    ],
    "grammar": [
      {
        "title": "Experiential Aspect: 动词 + 过",
        "pattern": "主语 + 动词 + 过 + (宾语) (否定: 没 + 动词 + 过)",
        "explanation": "'过' indicates that an action has been experienced at least once in the past. Its negative form is '没(有)...过'.",
        "examples": [
          {
            "chinese": "你看过那个电影吗？我没看过。",
            "pinyin": "Nǐ kàn guo nà ge diànyǐng ma? Wǒ méi kàn guo.",
            "english": "Have you seen that movie? I haven't seen it."
          },
          {
            "chinese": "我去过一次北京。",
            "pinyin": "Wǒ qù guo yí cì Běijīng.",
            "english": "I have been to Beijing once."
          }
        ]
      },
      {
        "title": "Concession and Contrast: 虽然...但是...",
        "pattern": "虽然 + 事实，但是 + 转折",
        "explanation": "Pairs 'although' with 'but' to convey contrast between two clauses.",
        "examples": [
          {
            "chinese": "虽然天气很冷，但是今天是个晴天。",
            "pinyin": "Suīrán tiānqì hěn lěng, dànshì jīntiān shì ge qíngtiān.",
            "english": "Although the weather is cold, today is a sunny day."
          },
          {
            "chinese": "虽然汉语有点儿难，但是很有意思。",
            "pinyin": "Suīrán hànyǔ yǒudiǎnr nán, dànshì hěn yǒu yìsi.",
            "english": "Although Chinese is a bit hard, it is very interesting."
          }
        ]
      }
    ],
    "dialogue": [
      {
        "speaker": "大卫",
        "avatar": "👨‍🎓",
        "chinese": "你看过那个新电影吗？",
        "pinyin": "Nǐ kàn guo nà ge xīn diànyǐng ma?",
        "english": "Have you seen that new movie?"
      },
      {
        "speaker": "玛丽",
        "avatar": "👩‍🎓",
        "chinese": "没看过。听说很有意思，你想去看吗？",
        "pinyin": "Méi kàn guo. Tīngshuō hěn yǒu yìsi, nǐ xiǎng qù kàn ma?",
        "english": "I haven't. I heard it's very interesting, do you want to go see it?"
      },
      {
        "speaker": "大卫",
        "avatar": "👨‍🎓",
        "chinese": "虽然今天票有点儿贵，但是我想去看。",
        "pinyin": "Suīrán jīntiān piào yǒudiǎnr guì, dànshì wǒ xiǎng qù kàn.",
        "english": "Although tickets are a bit expensive today, I want to see it."
      },
      {
        "speaker": "玛丽",
        "avatar": "👩‍🎓",
        "chinese": "好啊，那我们晚上一起去电影院吧！",
        "pinyin": "Hǎo a, nà wǒmen wǎnshang yìqǐ qù diànyǐngyuàn ba!",
        "english": "Great, then let's go to the cinema together tonight!"
      }
    ],
    "culture": "Movie-going is a major social activity in Chinese cities, with theaters frequently screening domestic animations and major cultural epics during holiday seasons.",
    "exercises": [
      {
        "question": "How do you ask 'Have you ever eaten Beijing Roast Duck?'",
        "options": [
          "你吃过北京烤鸭吗？",
          "你想吃烤鸭吗？",
          "烤鸭好吃吗？",
          "你在哪儿吃烤鸭？"
        ],
        "answer": 0,
        "explanation": "'动词 + 过' asks about past life experience."
      },
      {
        "question": "Connect clauses: 'Although it is hard, it is fun.'",
        "options": [
          "虽然很难，但是很有意思。",
          "因为很难，所以很有意思。",
          "不仅很难，而且很有意思。",
          "如果很难，就很有意思。"
        ],
        "answer": 0,
        "explanation": "'虽然...但是...' is the concession-contrast construction."
      }
    ]
  },
  {
    "id": "hsk2-l15",
    "level": 2,
    "lessonNumber": 15,
    "title": "新年就要到了",
    "pinyin": "Xīnnián jiù yào dào le",
    "english": "The New Year is Coming",
    "summary": "Express imminent future actions with 快要 / 就要...了, comparative degree with 更, and talk about train stations and holidays.",
    "vocabulary": [
      {
        "character": "新年",
        "pinyin": "xīnnián",
        "meaning": "New Year"
      },
      {
        "character": "票",
        "pinyin": "piào",
        "meaning": "ticket"
      },
      {
        "character": "火车站",
        "pinyin": "huǒchēzhàn",
        "meaning": "railway station; train station"
      },
      {
        "character": "大家",
        "pinyin": "dàjiā",
        "meaning": "everyone; all of us"
      },
      {
        "character": "更",
        "pinyin": "gèng",
        "meaning": "even more; further"
      },
      {
        "character": "妹妹",
        "pinyin": "mèimei",
        "meaning": "younger sister"
      },
      {
        "character": "阴",
        "pinyin": "yīn",
        "meaning": "overcast; cloudy"
      }
    ],
    "grammar": [
      {
        "title": "Imminent Future: 快要 / 就要 + 动词 + 了",
        "pattern": "主语 + 快要 / 就要 + 动词 + 了",
        "explanation": "Signifies that an event or action is about to take place very soon. When a specific time adverb is present, use '就要...了'.",
        "examples": [
          {
            "chinese": "新年就要到了，火车站的人越来越多。",
            "pinyin": "Xīnnián jiù yào dào le, huǒchēzhàn de rén yuè lái yuè duō.",
            "english": "New Year is about to arrive, more and more people at the train station."
          },
          {
            "chinese": "飞机快要起飞了，请坐好。",
            "pinyin": "Fēijī kuàiyào qǐfēi le, qǐng zuò hǎo.",
            "english": "The plane is about to take off, please remain seated."
          }
        ]
      },
      {
        "title": "Comparative Degree Adverb '更' (Even More)",
        "pattern": "更 + 形容词",
        "explanation": "'更' modifies adjectives to denote a step further in degree compared to an already high standard.",
        "examples": [
          {
            "chinese": "明天天气会更冷。",
            "pinyin": "Míngtiān tiānqì huì gèng lěng.",
            "english": "Tomorrow the weather will be even colder."
          },
          {
            "chinese": "祝大家新年快乐，学习更上一层楼！",
            "pinyin": "Zhù dàjiā xīnnián kuàilè, xuéxí gèng shàng yì céng lóu!",
            "english": "Wishing everyone a Happy New Year, with your studies reaching even greater heights!"
          }
        ]
      }
    ],
    "dialogue": [
      {
        "speaker": "大卫",
        "avatar": "👨‍🎓",
        "chinese": "新年就要到了，你买好回家的火车票了吗？",
        "pinyin": "Xīnnián jiù yào dào le, nǐ mǎi hǎo huí jiā de huǒchēpiào le ma?",
        "english": "The New Year is coming soon, have you bought your train ticket home?"
      },
      {
        "speaker": "王方",
        "avatar": "👩‍🎓",
        "chinese": "买好了，我明天下午就回老家看我妹妹。",
        "pinyin": "Mǎi hǎo le, wǒ míngtiān xiàwǔ jiù huí lǎojiā kàn wǒ mèimei.",
        "english": "Bought it, I'm heading back to my hometown tomorrow afternoon to see my younger sister."
      },
      {
        "speaker": "大卫",
        "avatar": "👨‍🎓",
        "chinese": "火车站人很多吧？",
        "pinyin": "Huǒchēzhàn rén hěn duō ba?",
        "english": "There must be a lot of people at the train station?"
      },
      {
        "speaker": "王方",
        "avatar": "👩‍🎓",
        "chinese": "对，比平时多很多。祝你新年快乐！",
        "pinyin": "Duì, bǐ píngshí duō hěn duō. Zhù nǐ xīnnián kuàilè!",
        "english": "Yes, much more than usual. Wishing you a Happy New Year!"
      },
      {
        "speaker": "大卫",
        "avatar": "👨‍🎓",
        "chinese": "祝你和大家新年快乐，身体健康！",
        "pinyin": "Zhù nǐ hé dàjiā xīnnián kuàilè, shēntǐ jiànkāng!",
        "english": "Wishing you and everyone a Happy New Year and good health!"
      }
    ],
    "culture": "The Spring Festival migration (春运) is the world's largest annual human movement, where hundreds of millions travel across China to celebrate the lunar New Year with family.",
    "exercises": [
      {
        "question": "How do you express that an event is about to happen very soon?",
        "options": [
          "快要...了 / 就要...了",
          "已经...了",
          "虽然...但是...",
          "不仅...而且..."
        ],
        "answer": 0,
        "explanation": "'快要/就要...了' denotes imminent future action."
      },
      {
        "question": "How do you say 'Happy New Year' in Mandarin?",
        "options": [
          "新年快乐！",
          "生日快乐！",
          "对不起！",
          "没关系！"
        ],
        "answer": 0,
        "explanation": "'新年快乐' (Xīnnián kuàilè) means Happy New Year."
      }
    ]
  },
  {
    "id": "hsk3-l1",
    "level": 3,
    "lessonNumber": 1,
    "title": "周末你有什么打算",
    "pinyin": "Zhōumò nǐ yǒu shénme dǎsuan",
    "english": "What's Your Plan for the Weekend?",
    "summary": "Discuss weekend plans with 打算, use conjunction 跟, express continuous habit with 一直, and review flexible question words.",
    "vocabulary": [
      {
        "character": "打算",
        "pinyin": "dǎsuan",
        "meaning": "to plan; intention"
      },
      {
        "character": "跟",
        "pinyin": "gēn",
        "meaning": "with; and (preposition)"
      },
      {
        "character": "一直",
        "pinyin": "yìzhí",
        "meaning": "all along; continuously"
      },
      {
        "character": "游戏",
        "pinyin": "yóuxì",
        "meaning": "game"
      },
      {
        "character": "作业",
        "pinyin": "zuòyè",
        "meaning": "homework; assignment"
      },
      {
        "character": "着急",
        "pinyin": "zháojí",
        "meaning": "anxious; worried"
      },
      {
        "character": "复习",
        "pinyin": "fùxí",
        "meaning": "to review; revise"
      },
      {
        "character": "南方",
        "pinyin": "nánfāng",
        "meaning": "south; southern part"
      },
      {
        "character": "面包",
        "pinyin": "miànbāo",
        "meaning": "bread"
      },
      {
        "character": "带",
        "pinyin": "dài",
        "meaning": "to bring; carry; lead"
      }
    ],
    "grammar": [
      {
        "title": "Expressing Plans with '打算'",
        "pattern": "主语 + 打算 + 动词短语",
        "explanation": "'打算' expresses planned or intended actions for the future.",
        "examples": [
          {
            "chinese": "周末你有什么打算？我打算去南方旅游。",
            "pinyin": "Zhōumò nǐ yǒu shénme dǎsuan? Wǒ dǎsuan qù nánfāng lǚyóu.",
            "english": "What are your plans for the weekend? I plan to travel to the south."
          },
          {
            "chinese": "我打算在家复习功课。",
            "pinyin": "Wǒ dǎsuan zài jiā fùxí gōngkè.",
            "english": "I plan to review schoolwork at home."
          }
        ]
      },
      {
        "title": "Continuous Action / State with '一直'",
        "pattern": "主语 + 一直 + 动词短语",
        "explanation": "'一直' emphasizes an uninterrupted duration or persistent habit without break.",
        "examples": [
          {
            "chinese": "你一直在玩电脑游戏，作业写完了吗？",
            "pinyin": "Nǐ yìzhí zài wán diànnǎo yóuxì, zuòyè xiě wán le ma?",
            "english": "You've been playing computer games all along, did you finish your homework?"
          },
          {
            "chinese": "他一直在北京大学学习汉语。",
            "pinyin": "Tā yìzhí zài Běijīng Dàxué xuéxí hànyǔ.",
            "english": "He has been studying Chinese at Peking University continuously."
          }
        ]
      }
    ],
    "dialogue": [
      {
        "speaker": "小丽",
        "avatar": "👩‍🎓",
        "chinese": "周末你有什么打算？",
        "pinyin": "Zhōumò nǐ yǒu shénme dǎsuan?",
        "english": "What are your plans for the weekend?"
      },
      {
        "speaker": "小刚",
        "avatar": "👨‍🎓",
        "chinese": "我早就想好了，请你吃饭、看电影、买东西。",
        "pinyin": "Wǒ zǎo jiù xiǎng hǎo le, qǐng nǐ chīfàn, kàn diànyǐng, mǎi dōngxi.",
        "english": "I thought it all out long ago: treat you to dinner, watch a movie, go shopping."
      },
      {
        "speaker": "小丽",
        "avatar": "👩‍🎓",
        "chinese": "请我？你不是说下个月才发工资吗？",
        "pinyin": "Qǐng wǒ? Nǐ bú shì shuō xià ge yuè cái fā gōngzī ma?",
        "english": "Treat me? Didn't you say you wouldn't get paid until next month?"
      },
      {
        "speaker": "小刚",
        "avatar": "👨‍🎓",
        "chinese": "没关系，我还有一点儿钱。下周考试，你复习得怎么样了？",
        "pinyin": "Méi guānxi, wǒ hái yǒu yìdiǎnr qián. Xià zhōu kǎoshì, nǐ fùxí de zěnmeyàng le?",
        "english": "No problem, I still have some money. Next week is exams, how's your revision going?"
      },
      {
        "speaker": "小丽",
        "avatar": "👩‍🎓",
        "chinese": "我一直在复习，准备得差不多了。",
        "pinyin": "Wǒ yìzhí zài fùxí, zhǔnbèi de chàbuduō le.",
        "english": "I've been reviewing all along, almost ready."
      }
    ],
    "culture": "The cultural divide between North (北方) and South (南方) China is marked by the Qinling-Huaihe Line, influencing climate, cuisine (wheat noodles vs rice), and lifestyles.",
    "exercises": [
      {
        "question": "How do you ask 'What are your plans for the weekend?'",
        "options": [
          "周末你有什么打算？",
          "你什么时候回来？",
          "你在哪儿工作？",
          "几点开始？"
        ],
        "answer": 0,
        "explanation": "'打算' means plan / intention."
      },
      {
        "question": "Translate: 'He has been studying all along.'",
        "options": [
          "他一直在学习。",
          "他不学习。",
          "他打算学习。",
          "他会学习。"
        ],
        "answer": 0,
        "explanation": "'一直' signifies continuous unbroken action."
      }
    ]
  },
  {
    "id": "hsk3-l2",
    "level": 3,
    "lessonNumber": 2,
    "title": "他什么时候回来",
    "pinyin": "Tā shénme shíhou huílái",
    "english": "When Will He Come Back?",
    "summary": "Master simple directional complements (来 vs 去), discuss office and business tasks, and express physical sensations.",
    "vocabulary": [
      {
        "character": "腿",
        "pinyin": "tuǐ",
        "meaning": "leg"
      },
      {
        "character": "疼",
        "pinyin": "téng",
        "meaning": "painful; sore; hurt"
      },
      {
        "character": "脚",
        "pinyin": "jiǎo",
        "meaning": "foot"
      },
      {
        "character": "树",
        "pinyin": "shù",
        "meaning": "tree"
      },
      {
        "character": "容易",
        "pinyin": "róngyì",
        "meaning": "easy; likely"
      },
      {
        "character": "难",
        "pinyin": "nán",
        "meaning": "difficult; hard"
      },
      {
        "character": "太太",
        "pinyin": "tàitai",
        "meaning": "Mrs.; wife"
      },
      {
        "character": "秘书",
        "pinyin": "mìshū",
        "meaning": "secretary"
      },
      {
        "character": "经理",
        "pinyin": "jīnglǐ",
        "meaning": "manager"
      },
      {
        "character": "办公室",
        "pinyin": "bàngōngshì",
        "meaning": "office"
      },
      {
        "character": "辆",
        "pinyin": "liàng",
        "meaning": "measure word for vehicles"
      },
      {
        "character": "楼",
        "pinyin": "lóu",
        "meaning": "building; floor"
      },
      {
        "character": "拿",
        "pinyin": "ná",
        "meaning": "to take; hold; bring"
      },
      {
        "character": "把",
        "pinyin": "bǎ",
        "meaning": "measure word for umbrellas/chairs"
      },
      {
        "character": "伞",
        "pinyin": "sǎn",
        "meaning": "umbrella"
      },
      {
        "character": "胖",
        "pinyin": "pàng",
        "meaning": "fat; plump"
      },
      {
        "character": "瘦",
        "pinyin": "shòu",
        "meaning": "thin; lean"
      }
    ],
    "grammar": [
      {
        "title": "Simple Directional Complements: 动词 + 来 / 去",
        "pattern": "动词 + 来 (toward speaker) / 去 (away from speaker)",
        "explanation": "'来' indicates motion toward the speaker's current location; '去' indicates motion away from the speaker.",
        "examples": [
          {
            "chinese": "经理什么时候回来？他下午三点回来。",
            "pinyin": "Jīnglǐ shénme shíhou huílái? Tā xiàwǔ sān diǎn huílái.",
            "english": "When will the manager return here? He will return at 3 PM."
          },
          {
            "chinese": "上山容易下山难，我们慢慢走下去吧。",
            "pinyin": "Shàng shān róngyì xià shān nán, wǒmen mànmàn zǒu xiàqu ba.",
            "english": "Climbing up is easy, going down is hard; let's walk down slowly."
          }
        ]
      },
      {
        "title": "Directional Movement with Location Noun",
        "pattern": "动词 + 处所词 + 来 / 去",
        "explanation": "When an action verb has a directional complement and a destination place noun, the place noun MUST be inserted before 来/去: 回家来, 进办公室去.",
        "examples": [
          {
            "chinese": "请大家进办公室来开会。",
            "pinyin": "Qǐng dàjiā jìn bàngōngshì lái kāi huì.",
            "english": "Please everyone come into the office for the meeting."
          },
          {
            "chinese": "外边下雨了，带把伞出去吧。",
            "pinyin": "Wàibian xià yǔ le, dài bǎ sǎn chūqu ba.",
            "english": "It's raining outside, take an umbrella out with you."
          }
        ]
      }
    ],
    "dialogue": [
      {
        "speaker": "职员",
        "avatar": "👨‍💼",
        "chinese": "请问，周经理在办公室吗？",
        "pinyin": "Qǐngwèn, Zhōu jīnglǐ zài bàngōngshì ma?",
        "english": "Excuse me, is Manager Zhou in the office?"
      },
      {
        "speaker": "秘书",
        "avatar": "👩‍💼",
        "chinese": "他出去了，不在办公室。",
        "pinyin": "Tā chūqu le, bú zài bàngōngshì.",
        "english": "He went out, not in the office."
      },
      {
        "speaker": "职员",
        "avatar": "👨‍💼",
        "chinese": "他去哪儿了？什么时候回来？",
        "pinyin": "Tā qù nǎr le? Shénme shíhou huílái?",
        "english": "Where did he go? When will he come back?"
      },
      {
        "speaker": "秘书",
        "avatar": "👩‍💼",
        "chinese": "他去总公司开会了，下午三点左右回来。",
        "pinyin": "Tā qù zǒnggōngsī kāi huì le, xiàwǔ sān diǎn zuǒyòu huílái.",
        "english": "He went to the head office for a meeting, will return around 3 PM."
      },
      {
        "speaker": "职员",
        "avatar": "👨‍💼",
        "chinese": "好的，等他回来了我再来找他。",
        "pinyin": "Hǎo de, děng tā huílái le wǒ zài lái zhǎo tā.",
        "english": "Okay, once he comes back I will come look for him again."
      }
    ],
    "culture": "Office culture in China highly respects executive hierarchy. Senior managers and directors are addressed by surname plus title: 周经理 (Manager Zhou), 王总 (Director Wang).",
    "exercises": [
      {
        "question": "Where does the location noun go in '回家来'?",
        "options": [
          "Between the verb and 来/去",
          "At the very end",
          "Before the subject",
          "After 来/去"
        ],
        "answer": 0,
        "explanation": "Place words must precede the directional particle: 回 (verb) + 家 (place) + 来."
      },
      {
        "question": "What is the measure word for an umbrella?",
        "options": [
          "把",
          "件",
          "个",
          "本"
        ],
        "answer": 0,
        "explanation": "'把' (bǎ) is the measure word for objects with handles like umbrellas and chairs."
      }
    ]
  },
  {
    "id": "hsk3-l3",
    "level": 3,
    "lessonNumber": 3,
    "title": "桌子上放着很多饮料",
    "pinyin": "Zhuōzi shang fàng zhe hěn duō yǐnliào",
    "english": "There Are Plenty of Drinks on the Table",
    "summary": "Master existential sentences with 着, distinguish 或者 (statements) vs 还是 (questions), and describe beverages.",
    "vocabulary": [
      {
        "character": "饮料",
        "pinyin": "yǐnliào",
        "meaning": "beverage; drink"
      },
      {
        "character": "放",
        "pinyin": "fàng",
        "meaning": "to put; place"
      },
      {
        "character": "块",
        "pinyin": "kuài",
        "meaning": "piece; chunk; slice"
      },
      {
        "character": "甜",
        "pinyin": "tián",
        "meaning": "sweet"
      },
      {
        "character": "或者",
        "pinyin": "huòzhě",
        "meaning": "or (in statements)"
      },
      {
        "character": "舒服",
        "pinyin": "shūfu",
        "meaning": "comfortable; well"
      },
      {
        "character": "花",
        "pinyin": "huā",
        "meaning": "flower; to spend"
      },
      {
        "character": "绿",
        "pinyin": "lǜ",
        "meaning": "green"
      },
      {
        "character": "衬衫",
        "pinyin": "chènshān",
        "meaning": "shirt; blouse"
      },
      {
        "character": "元",
        "pinyin": "yuán",
        "meaning": "yuan (currency unit)"
      }
    ],
    "grammar": [
      {
        "title": "Existential Sentence: 处所 + 动词 + 着 + 数量词 + 名词",
        "pattern": "处所 + 放 / 挂 / 写 + 着 + 名词短语",
        "explanation": "Describes a static state existing at a specific location without indicating active movement.",
        "examples": [
          {
            "chinese": "桌子上放着很多饮料和水果。",
            "pinyin": "Zhuōzi shang fàng zhe hěn duō yǐnliào hé shuǐguǒ.",
            "english": "Many drinks and fruits are placed on the table."
          },
          {
            "chinese": "墙上挂着一张中国地图。",
            "pinyin": "Qiáng shang guà zhe yì zhāng zhōngguó dìtú.",
            "english": "A map of China hangs on the wall."
          }
        ]
      },
      {
        "title": "Conjunctions '或者' vs '还是' (Or)",
        "pattern": "或者 (Declarative sentences) / 还是 (Alternative questions)",
        "explanation": "Use '还是' when asking a question offering choices, and '或者' when stating alternatives in declarative statements.",
        "examples": [
          {
            "chinese": "你想喝咖啡还是喝绿茶？",
            "pinyin": "Nǐ xiǎng hē kāfēi háishi hē lǜchá?",
            "english": "Do you want to drink coffee or green tea? (Question)"
          },
          {
            "chinese": "明天吃米饭或者吃面条都可以。",
            "pinyin": "Míngtiān chī mǐfàn huòzhě chī miàntiáo dōu kěyǐ.",
            "english": "Eating rice or eating noodles tomorrow are both fine. (Statement)"
          }
        ]
      }
    ],
    "dialogue": [
      {
        "speaker": "小丽",
        "avatar": "👩‍🎓",
        "chinese": "桌子上放着这么多好喝的饮料，你想喝哪种？",
        "pinyin": "Zhuōzi shang fàng zhe zhème duō hǎohē de yǐnliào, nǐ xiǎng hē nǎ zhǒng?",
        "english": "So many tasty drinks are sitting on the table, which kind would you like?"
      },
      {
        "speaker": "小刚",
        "avatar": "👨‍🎓",
        "chinese": "绿茶或者新鲜果汁都可以，我不挑剔。",
        "pinyin": "Lǜchá huòzhě xīnxiān guǒzhī dōu kěyǐ, wǒ bù tiāotì.",
        "english": "Green tea or fresh fruit juice are both good, I'm not picky."
      },
      {
        "speaker": "小丽",
        "avatar": "👩‍🎓",
        "chinese": "这家咖啡馆环境真舒服，桌上还放着一瓶鲜花呢。",
        "pinyin": "Zhè jiā kāfēiguǎn huánjìng zhēn shūfu, zhuō shang hái fàng zhe yì píng xiānhuā ne.",
        "english": "This cafe has such a comfortable atmosphere, there's even a vase of fresh flowers on the table."
      },
      {
        "speaker": "小刚",
        "avatar": "👨‍🎓",
        "chinese": "是啊，我们坐在这儿一边喝茶一边看书吧。",
        "pinyin": "Shì a, wǒmen zuò zài zhèr yìbiān hē chá yìbiān kàn shū ba.",
        "english": "Yeah, let's sit here drinking tea while reading."
      }
    ],
    "culture": "Green tea (绿茶) such as Longjing and Biluochun is traditionally prepared with 80°C hot water in glass tumblers to allow drinkers to admire the floating tea leaves.",
    "exercises": [
      {
        "question": "Which word for 'or' is used in a statement?",
        "options": [
          "或者",
          "还是",
          "因为",
          "所以"
        ],
        "answer": 0,
        "explanation": "'或者' is used in declarative statements, while '还是' is used in questions."
      },
      {
        "question": "Translate: 'A map is hanging on the wall.'",
        "options": [
          "墙上挂着一张地图。",
          "桌子上放着地图。",
          "他拿着地图。",
          "地图在书包里。"
        ],
        "answer": 0,
        "explanation": "'挂着' expresses the persistent hanging state."
      }
    ]
  },
  {
    "id": "hsk3-l4",
    "level": 3,
    "lessonNumber": 4,
    "title": "她总是笑着跟客人说话",
    "pinyin": "Tā zǒngshì xiào zhe gēn kèrén shuōhuà",
    "english": "She Always Smiles When Talking to Customers",
    "summary": "Express concomitant actions with V1 + 着 + V2, use frequency adverb 总是, and describe personal traits.",
    "vocabulary": [
      {
        "character": "比赛",
        "pinyin": "bǐsài",
        "meaning": "match; competition"
      },
      {
        "character": "照片",
        "pinyin": "zhàopiàn",
        "meaning": "photograph; photo"
      },
      {
        "character": "年级",
        "pinyin": "niánjí",
        "meaning": "grade; school year"
      },
      {
        "character": "又",
        "pinyin": "yòu",
        "meaning": "again; also"
      },
      {
        "character": "聪明",
        "pinyin": "cōngming",
        "meaning": "smart; intelligent"
      },
      {
        "character": "热情",
        "pinyin": "rèqíng",
        "meaning": "enthusiastic; warm-hearted"
      },
      {
        "character": "努力",
        "pinyin": "nǔlì",
        "meaning": "hardworking; diligent"
      },
      {
        "character": "总是",
        "pinyin": "zǒngshì",
        "meaning": "always"
      },
      {
        "character": "回答",
        "pinyin": "huídá",
        "meaning": "to answer; reply"
      },
      {
        "character": "站",
        "pinyin": "zhàn",
        "meaning": "to stand; station"
      },
      {
        "character": "超市",
        "pinyin": "chāoshì",
        "meaning": "supermarket"
      },
      {
        "character": "蛋糕",
        "pinyin": "dàngāo",
        "meaning": "cake"
      }
    ],
    "grammar": [
      {
        "title": "Concomitant Manner: 动词 1 + 着 + (宾语) + 动词 2",
        "pattern": "V1 + 着 + V2",
        "explanation": "Indicates that Verb 1 describes the ongoing manner or posture in which Verb 2 is performed.",
        "examples": [
          {
            "chinese": "她总是笑着跟客人说话。",
            "pinyin": "Tā zǒngshì xiào zhe gēn kèrén shuōhuà.",
            "english": "She always smiles while speaking to customers."
          },
          {
            "chinese": "老师站着讲课，学生坐着听课。",
            "pinyin": "Lǎoshī zhàn zhe jiǎngkè, xuésheng zuò zhe tīngkè.",
            "english": "The teacher lectures standing, and students listen sitting."
          }
        ]
      },
      {
        "title": "Correlative Adjective Structure: 又...又...",
        "pattern": "又 + 形容词 1 + 又 + 形容词 2",
        "explanation": "Describes that a person or entity simultaneously possesses two positive or two negative qualities.",
        "examples": [
          {
            "chinese": "那个服务员又聪明又热情。",
            "pinyin": "Nà ge fúwùyuán yòu cōngming yòu rèqíng.",
            "english": "That attendant is both intelligent and warm-hearted."
          },
          {
            "chinese": "这个西瓜又大又甜。",
            "pinyin": "Zhè ge xīguā yòu dà yòu tián.",
            "english": "This watermelon is both big and sweet."
          }
        ]
      }
    ],
    "dialogue": [
      {
        "speaker": "李朋",
        "avatar": "👨‍💼",
        "chinese": "你觉得新来的前台服务员工作得怎么样？",
        "pinyin": "Nǐ juéde xīn lái de qiántái fúwùyuán gōngzuò de zěnmeyàng?",
        "english": "How do you think the new front desk receptionist is doing?"
      },
      {
        "speaker": "王经理",
        "avatar": "👩‍💼",
        "chinese": "她非常优秀，总是笑着跟客人说话，服务很热情。",
        "pinyin": "Tā fēicháng yōuxiù, zǒngshì xiào zhe gēn kèrén shuōhuà, fúwù hěn rèqíng.",
        "english": "She's very excellent, always smiles when talking to guests, and is very hospitable."
      },
      {
        "speaker": "李朋",
        "avatar": "👨‍💼",
        "chinese": "而且她又聪明又努力，很多客人都表扬她呢。",
        "pinyin": "Érqiě tā yòu cōngming yòu nǔlì, hěn duō kèrén dōu biǎoyáng tā ne.",
        "english": "Furthermore she is both smart and hardworking, many guests praise her."
      },
      {
        "speaker": "王经理",
        "avatar": "👩‍💼",
        "chinese": "对，这样的员工我们一定要好好奖励！",
        "pinyin": "Duì, zhèyàng de yuángōng wǒmen yídìng yào hǎohǎo jiǎnglì!",
        "english": "Yes, we must definitely reward employees like this well!"
      }
    ],
    "culture": "In Chinese business and service culture, hospitality (热情好客) and treating guests with respect (礼貌待客) are cardinal benchmarks of service excellence.",
    "exercises": [
      {
        "question": "Translate: 'He speaks with a smile.'",
        "options": [
          "他笑着说话。",
          "他笑也说。",
          "他说话笑。",
          "他不笑了。"
        ],
        "answer": 0,
        "explanation": "'V1 + 着 + V2' describes the manner of action: 笑着说话."
      },
      {
        "question": "How do you say 'both smart and hardworking'?",
        "options": [
          "又聪明又努力",
          "也聪明也努力",
          "聪明和努力",
          "因为聪明所以努力"
        ],
        "answer": 0,
        "explanation": "'又...又...' expresses simultaneous attributes."
      }
    ]
  },
  {
    "id": "hsk3-l5",
    "level": 3,
    "lessonNumber": 5,
    "title": "我最近越来越胖了",
    "pinyin": "Wǒ zuìjìn yuè lái yuè pàng le",
    "english": "I've Been Getting Fatter and Fatter Lately",
    "summary": "Master progressive degree marker 越来越, express extreme degree with 极了, and discuss seasons and physical fitness.",
    "vocabulary": [
      {
        "character": "发烧",
        "pinyin": "fāshāo",
        "meaning": "to have a fever"
      },
      {
        "character": "裙子",
        "pinyin": "qúnzi",
        "meaning": "skirt; dress"
      },
      {
        "character": "草",
        "pinyin": "cǎo",
        "meaning": "grass; lawn"
      },
      {
        "character": "最近",
        "pinyin": "zuìjìn",
        "meaning": "lately; recently"
      },
      {
        "character": "越",
        "pinyin": "yuè",
        "meaning": "more; increasingly"
      },
      {
        "character": "越来越",
        "pinyin": "yuè lái yuè",
        "meaning": "more and more; increasingly"
      },
      {
        "character": "照顾",
        "pinyin": "zhàogu",
        "meaning": "to look after; care for"
      },
      {
        "character": "用",
        "pinyin": "yòng",
        "meaning": "to use"
      },
      {
        "character": "极了",
        "pinyin": "jí le",
        "meaning": "extremely; exceedingly"
      },
      {
        "character": "季节",
        "pinyin": "jìjié",
        "meaning": "season"
      },
      {
        "character": "春",
        "pinyin": "chūn",
        "meaning": "spring"
      },
      {
        "character": "夏",
        "pinyin": "xià",
        "meaning": "summer"
      },
      {
        "character": "秋",
        "pinyin": "qiū",
        "meaning": "autumn; fall"
      },
      {
        "character": "冬",
        "pinyin": "dōng",
        "meaning": "winter"
      }
    ],
    "grammar": [
      {
        "title": "Progressive Degree: 越来越 + 形容词 / 心理动词",
        "pattern": "主语 + 越来越 + 形容词 / 动词 + 了",
        "explanation": "Signifies that a degree intensifies progressively with the passage of time.",
        "examples": [
          {
            "chinese": "我最近运动少，越来越胖了。",
            "pinyin": "Wǒ zuìjìn yùndòng shǎo, yuè lái yuè pàng le.",
            "english": "I've exercised little lately, getting fatter and fatter."
          },
          {
            "chinese": "他的汉语说得越来越流利了。",
            "pinyin": "Tā de hànyǔ shuō de yuè lái yuè liúlì le.",
            "english": "He speaks Chinese more and more fluently."
          }
        ]
      },
      {
        "title": "Extreme Exclamation: 形容词 + 极了",
        "pattern": "形容词 + 极了",
        "explanation": "Follows an adjective as an exclamation of extreme degree, equivalent to '极其' or '非常'.",
        "examples": [
          {
            "chinese": "今天天气舒服极了！",
            "pinyin": "Jīntiān tiānqì shūfu jí le!",
            "english": "Today's weather is comfortable to the extreme!"
          },
          {
            "chinese": "这件新裙子漂亮极了。",
            "pinyin": "Zhè jiàn xīn qúnzi piàoliang jí le.",
            "english": "This new skirt is gorgeous!"
          }
        ]
      }
    ],
    "dialogue": [
      {
        "speaker": "小丽",
        "avatar": "👩‍🎓",
        "chinese": "我最近胃口太好，越来越胖了，去年买的裙子都穿不下了！",
        "pinyin": "Wǒ zuìjìn wèikǒu tài hǎo, yuè lái yuè pàng le, qùnián mǎi de qúnzi dōu chuān bu xià le!",
        "english": "My appetite has been too good lately, I'm getting fatter and fatter, can't fit into the skirts bought last year!"
      },
      {
        "speaker": "小刚",
        "avatar": "👨‍🎓",
        "chinese": "谁让你总是吃甜食又不爱运动呢？",
        "pinyin": "Shéi ràng nǐ zǒngshì chī tiánshí yòu bú ài yùndòng ne?",
        "english": "Who told you to always eat sweets and not like exercising?"
      },
      {
        "speaker": "小丽",
        "avatar": "👩‍🎓",
        "chinese": "从明天开始，我每天早上都去公园跑步。",
        "pinyin": "Cóng míngtiān kāishǐ, wǒ měitiān zǎoshang dōu qù gōngyuán pǎobù.",
        "english": "Starting tomorrow, I'll go jogging in the park every morning."
      },
      {
        "speaker": "小刚",
        "avatar": "👨‍🎓",
        "chinese": "现在春天到了，公园里的草绿了，花开了，风景漂亮极了，正适合锻炼！",
        "pinyin": "Xiànzài chūntiān dào le, gōngyuán lǐ de cǎo lǜ le, huā kāi le, fēngjǐng piàoliang jí le, zhèng shìhé duànliàn!",
        "english": "Now spring is here, grass is green, flowers blooming, scenery gorgeous, perfect for workouts!"
      }
    ],
    "culture": "The Chinese calendar observes the traditional 24 Solar Terms (二十四节气), which divide spring, summer, autumn, and winter into precise fortnightly seasonal changes guiding agriculture and wellness.",
    "exercises": [
      {
        "question": "How do you say 'more and more fluent'?",
        "options": [
          "越来越流利",
          "很流利",
          "比较流利",
          "更流利"
        ],
        "answer": 0,
        "explanation": "'越来越 + 形容词' expresses progressive degree over time."
      },
      {
        "question": "What does '极了' mean after an adjective?",
        "options": [
          "Extremely",
          "A little bit",
          "Not at all",
          "Hardly"
        ],
        "answer": 0,
        "explanation": "'形容词 + 极了' means 'extremely / in the highest degree'."
      }
    ]
  },
  {
    "id": "hsk3-l6",
    "level": 3,
    "lessonNumber": 6,
    "title": "怎么突然找不到了",
    "pinyin": "Zěnme tūrán zhǎo bu dào le",
    "english": "Why Can't I Find It All of a Sudden?",
    "summary": "Master potential complements (Verb + 得/不 + Result: 找不到, 听得懂), use 刚 vs 刚才, and describe park workouts.",
    "vocabulary": [
      {
        "character": "眼镜",
        "pinyin": "yǎnjìng",
        "meaning": "glasses; spectacles"
      },
      {
        "character": "突然",
        "pinyin": "tūrán",
        "meaning": "suddenly; unexpected"
      },
      {
        "character": "离开",
        "pinyin": "líkāi",
        "meaning": "to leave; depart from"
      },
      {
        "character": "清楚",
        "pinyin": "qīngchu",
        "meaning": "clear; distinct"
      },
      {
        "character": "刚才",
        "pinyin": "gāngcái",
        "meaning": "just now; a moment ago"
      },
      {
        "character": "帮忙",
        "pinyin": "bāngmáng",
        "meaning": "to help; do a favor"
      },
      {
        "character": "特别",
        "pinyin": "tèbié",
        "meaning": "especially; special"
      },
      {
        "character": "讲",
        "pinyin": "jiǎng",
        "meaning": "to explain; speak"
      },
      {
        "character": "明白",
        "pinyin": "míngbai",
        "meaning": "clear; understand"
      },
      {
        "character": "锻炼",
        "pinyin": "duànliàn",
        "meaning": "to exercise; workout"
      },
      {
        "character": "音乐",
        "pinyin": "yīnyuè",
        "meaning": "music"
      },
      {
        "character": "公园",
        "pinyin": "gōngyuán",
        "meaning": "park"
      },
      {
        "character": "聊天",
        "pinyin": "liáotiān",
        "meaning": "to chat"
      },
      {
        "character": "睡着",
        "pinyin": "shuìzháo",
        "meaning": "to fall asleep"
      }
    ],
    "grammar": [
      {
        "title": "Potential Complements: 动词 + 得 / 不 + 结果补语",
        "pattern": "V + 得 / 不 + 到 / 完 / 懂",
        "explanation": "Signifies whether an action can or cannot reach a specific result or capacity: 找得到 (can find), 找不到 (cannot find).",
        "examples": [
          {
            "chinese": "我的眼镜怎么突然找不到了？",
            "pinyin": "Wǒ de yǎnjìng zěnme tūrán zhǎo bu dào le?",
            "english": "Why can't I find my glasses all of a sudden?"
          },
          {
            "chinese": "老师讲得很清楚，大家都听得懂。",
            "pinyin": "Lǎoshī jiǎng de hěn qīngchu, dàjiā dōu tīng de dǒng.",
            "english": "The teacher explained very clearly, everyone could understand."
          }
        ]
      },
      {
        "title": "Time Words: 刚 (Adverb) vs 刚才 (Noun)",
        "pattern": "刚 + 动词 (Just) vs 刚才 + 动词 (A moment ago)",
        "explanation": "'刚' is an adverb of recent action; '刚才' is a time noun referring to the immediate past few minutes.",
        "examples": [
          {
            "chinese": "我刚才还看见你的眼镜在桌子上呢。",
            "pinyin": "Wǒ gāngcái hái kànjiàn nǐ de yǎnjìng zài zhuōzi shang ne.",
            "english": "Just a moment ago I saw your glasses on the table."
          },
          {
            "chinese": "他刚离开办公室去开会。",
            "pinyin": "Tā gāng líkāi bàngōngshì qù kāi huì.",
            "english": "He just left the office to attend a meeting."
          }
        ]
      }
    ],
    "dialogue": [
      {
        "speaker": "大卫",
        "avatar": "👨‍🎓",
        "chinese": "奇怪，我的眼镜刚才还在桌上，怎么突然找不到了？",
        "pinyin": "Qíguài, wǒ de yǎnjìng gāngcái hái zài zhuō shang, zěnme tūrán zhǎo bu dào le?",
        "english": "Strange, my glasses were on the desk just now, why can't I find them suddenly?"
      },
      {
        "speaker": "李月",
        "avatar": "👩‍🏫",
        "chinese": "你别着急，是不是放进书包里了？",
        "pinyin": "Nǐ bié zháojí, shì bu shì fàng jìn shūbāo lǐ le?",
        "english": "Don't worry, did you put them into your backpack?"
      },
      {
        "speaker": "大卫",
        "avatar": "👨‍🎓",
        "chinese": "书包里也没有。没有眼镜，黑板上的字我都看不清楚。",
        "pinyin": "Shūbāo lǐ yě méiyǒu. Méiyǒu yǎnjìng, hēibǎn shang de zì wǒ dōu kàn bu qīngchu.",
        "english": "Not in the backpack either. Without glasses, I can't see the words on the blackboard clearly."
      },
      {
        "speaker": "李月",
        "avatar": "👩‍🏫",
        "chinese": "你看，在你的电脑后边呢！快戴上吧。",
        "pinyin": "Nǐ kàn, zài nǐ de diànnǎo hòubian ne! Kuài dài shang ba.",
        "english": "Look, right behind your computer! Put them on quickly."
      }
    ],
    "culture": "Evening walks in parks (公园散步) with background square dancing (广场舞) and chatting are hallmark community pastimes across Chinese towns.",
    "exercises": [
      {
        "question": "How do you say 'I cannot find my keys'?",
        "options": [
          "我找不到钥匙。",
          "我没钥匙。",
          "钥匙在桌子上。",
          "我不要钥匙。"
        ],
        "answer": 0,
        "explanation": "'找不到' is the potential complement indicating inability to find."
      },
      {
        "question": "What is the difference between 刚 and 刚才?",
        "options": [
          "刚 is an adverb of recent time, 刚才 is a time noun meaning 'a moment ago'",
          "They mean completely different things",
          "刚 is for future, 刚才 is for past",
          "There is no difference"
        ],
        "answer": 0,
        "explanation": "'刚' modifies verbs directly, while '刚才' functions as a temporal noun."
      }
    ]
  },
  {
    "id": "hsk3-l7",
    "level": 3,
    "lessonNumber": 7,
    "title": "我跟你一样",
    "pinyin": "Wǒ gēn nǐ yíyàng",
    "english": "I Am the Same as You",
    "summary": "Master comparison of equality: A 跟 B 一样 (+ Adjective) and its negation A 跟 B 不一样.",
    "vocabulary": [
      {
        "character": "同事",
        "pinyin": "tóngshì",
        "meaning": "colleague; coworker"
      },
      {
        "character": "以前",
        "pinyin": "yǐqián",
        "meaning": "before; previously"
      },
      {
        "character": "银行",
        "pinyin": "yínháng",
        "meaning": "bank"
      },
      {
        "character": "久",
        "pinyin": "jiǔ",
        "meaning": "for a long time; long duration"
      },
      {
        "character": "感兴趣",
        "pinyin": "gǎn xìngqù",
        "meaning": "interested in"
      },
      {
        "character": "结婚",
        "pinyin": "jiéhūn",
        "meaning": "to marry; get married"
      },
      {
        "character": "欢迎",
        "pinyin": "huānyíng",
        "meaning": "welcome"
      },
      {
        "character": "迟到",
        "pinyin": "chídào",
        "meaning": "to arrive late"
      },
      {
        "character": "半",
        "pinyin": "bàn",
        "meaning": "half"
      },
      {
        "character": "接",
        "pinyin": "jiē",
        "meaning": "to pick up; receive"
      }
    ],
    "grammar": [
      {
        "title": "Comparison of Equality: A 跟 B 一样 (+ 形容词)",
        "pattern": "A + 跟 + B + 一样 (+ 形容词) / A + 跟 + B + 不一样",
        "explanation": "Expresses that A and B possess the same quality or state. To negate, place '不' before '一样'.",
        "examples": [
          {
            "chinese": "我跟你一样，对中国历史很感兴趣。",
            "pinyin": "Wǒ gēn nǐ yíyàng, duì zhōngguó lìshǐ hěn gǎn xìngqù.",
            "english": "I am the same as you, very interested in Chinese history."
          },
          {
            "chinese": "这件衣服的颜色跟那件不一样。",
            "pinyin": "Zhè jiàn yīfu de yánsè gēn nà jiàn bù yíyàng.",
            "english": "The color of this dress is not the same as that one."
          }
        ]
      },
      {
        "title": "Expressing Interest: 对...感兴趣",
        "pattern": "主语 + 对 + 对象 + 感兴趣",
        "explanation": "'对...感兴趣' is the standard construction for stating one's interests or hobbies.",
        "examples": [
          {
            "chinese": "新同事对中国音乐非常感兴趣。",
            "pinyin": "Xīn tóngshì duì zhōngguó yīnyuè fēicháng gǎn xìngqù.",
            "english": "The new colleague is extremely interested in Chinese music."
          },
          {
            "chinese": "我对玩电脑游戏不感兴趣。",
            "pinyin": "Wǒ duì wán diànnǎo yóuxì bù gǎn xìngqù.",
            "english": "I am not interested in playing computer games."
          }
        ]
      }
    ],
    "dialogue": [
      {
        "speaker": "小丽",
        "avatar": "👩‍🎓",
        "chinese": "听说新来的同事李明以前在银行工作，是吗？",
        "pinyin": "Tīngshuō xīn lái de tóngshì Lǐ Míng yǐqián zài yínháng gōngzuò, shì ma?",
        "english": "I heard the new colleague Li Ming previously worked at a bank, is that so?"
      },
      {
        "speaker": "小刚",
        "avatar": "👨‍🎓",
        "chinese": "对，他跟我一样，对现在的互联网技术更感兴趣。",
        "pinyin": "Duì, tā gēn wǒ yíyàng, duì xiànzài de hùliánwǎng jìshù gèng gǎn xìngqù.",
        "english": "Right, he's the same as me, more interested in current Internet technology."
      },
      {
        "speaker": "小丽",
        "avatar": "👩‍🎓",
        "chinese": "他工作多久了？",
        "pinyin": "Tā gōngzuò duō jiǔ le?",
        "english": "How long has he been working?"
      },
      {
        "speaker": "小刚",
        "avatar": "👨‍🎓",
        "chinese": "他工作三年了，业务能力非常强，大家都很欢迎他。",
        "pinyin": "Tā gōngzuò sān nián le, yèwù néng lì fēicháng qiáng, dàjiā dōu hěn huānyíng tā.",
        "english": "He's worked for three years, very strong skills, everyone welcomes him."
      }
    ],
    "culture": "Colleague camaraderie (同事关系) in Chinese enterprises is reinforced through communal lunch breaks, team dinners, and group WeChat discussions.",
    "exercises": [
      {
        "question": "How do you say 'My hobby is the same as yours'?",
        "options": [
          "我的爱好跟你的一样。",
          "我的爱好比你好。",
          "我和你没有爱好。",
          "爱好很一样。"
        ],
        "answer": 0,
        "explanation": "'A + 跟 + B + 一样' expresses equality of attributes."
      },
      {
        "question": "What is the phrase for 'interested in'?",
        "options": [
          "对...感兴趣",
          "想...有意思",
          "觉得...不错",
          "喜欢...极了"
        ],
        "answer": 0,
        "explanation": "'对...感兴趣' is the fixed expression for having interest in something."
      }
    ]
  },
  {
    "id": "hsk3-l8",
    "level": 3,
    "lessonNumber": 8,
    "title": "我去哪儿你都去",
    "pinyin": "Wǒ qù nǎr nǐ dōu qù",
    "english": "I Will Go Wherever You Go",
    "summary": "Master flexible interrogative pronouns in correlative sentences (哪儿...哪儿, 什么...什么, 谁...谁) and express unconditional commitment.",
    "vocabulary": [
      {
        "character": "又",
        "pinyin": "yòu",
        "meaning": "again (in the past); also"
      },
      {
        "character": "满意",
        "pinyin": "mǎnyì",
        "meaning": "satisfied; pleased"
      },
      {
        "character": "电梯",
        "pinyin": "diàntī",
        "meaning": "elevator; lift"
      },
      {
        "character": "层",
        "pinyin": "céng",
        "meaning": "floor; story (measure word)"
      },
      {
        "character": "害怕",
        "pinyin": "hàipà",
        "meaning": "afraid; scared"
      },
      {
        "character": "熊猫",
        "pinyin": "xióngmāo",
        "meaning": "panda"
      },
      {
        "character": "安静",
        "pinyin": "ānjìng",
        "meaning": "quiet; peaceful"
      },
      {
        "character": "可乐",
        "pinyin": "kělè",
        "meaning": "cola"
      },
      {
        "character": "会儿",
        "pinyin": "huìr",
        "meaning": "a short moment"
      },
      {
        "character": "马上",
        "pinyin": "mǎshàng",
        "meaning": "immediately; right away"
      },
      {
        "character": "洗手间",
        "pinyin": "xǐshǒujiān",
        "meaning": "restroom; washroom"
      },
      {
        "character": "老",
        "pinyin": "lǎo",
        "meaning": "old; experienced; always"
      },
      {
        "character": "几乎",
        "pinyin": "jīhū",
        "meaning": "almost; nearly"
      },
      {
        "character": "变化",
        "pinyin": "biànhuà",
        "meaning": "change; vary"
      },
      {
        "character": "健康",
        "pinyin": "jiànkāng",
        "meaning": "healthy; health"
      },
      {
        "character": "重要",
        "pinyin": "zhòngyào",
        "meaning": "important; significant"
      }
    ],
    "grammar": [
      {
        "title": "Flexible Interrogative Correlative Pattern",
        "pattern": "疑问词... 就 / 都 + 相同疑问词",
        "explanation": "Pairs matching question words to denote that the second choice matches unconditionally whatever is determined by the first.",
        "examples": [
          {
            "chinese": "你去哪儿，我就去哪儿。",
            "pinyin": "Nǐ qù nǎr, wǒ jiù qù nǎr.",
            "english": "Wherever you go, I will go there."
          },
          {
            "chinese": "你吃什么，我就吃什么。",
            "pinyin": "Nǐ chī shénme, wǒ jiù chī shénme.",
            "english": "I will eat whatever you eat."
          }
        ]
      },
      {
        "title": "Approximation Adverb '几乎' (Almost / Nearly)",
        "pattern": "几乎 + 动词 / 数量词",
        "explanation": "'几乎' denotes coming very close to an amount or complete state.",
        "examples": [
          {
            "chinese": "三年不见，城市的变化几乎让我认不出来了。",
            "pinyin": "Sān nián bú jiàn, chéngshì de biànhuà jīhū ràng wǒ rèn bu chūlái le.",
            "english": "Not seeing it for three years, changes in the city almost made me unable to recognize it."
          },
          {
            "chinese": "他几乎每天都去图书馆学习。",
            "pinyin": "Tā jīhū měitiān dōu qù túshūguǎn xuéxí.",
            "english": "He goes to the library to study almost every day."
          }
        ]
      }
    ],
    "dialogue": [
      {
        "speaker": "小丽",
        "avatar": "👩‍🎓",
        "chinese": "周末我们到底去哪儿玩儿呢？",
        "pinyin": "Zhōumò wǒmen dàodǐ qù nǎr wánr ne?",
        "english": "Where on earth are we going to play this weekend?"
      },
      {
        "speaker": "小刚",
        "avatar": "👨‍🎓",
        "chinese": "只要跟你在一起，你去哪儿我都去！",
        "pinyin": "Zhǐyào gēn nǐ zài yìqǐ, nǐ qù nǎr wǒ dōu qù!",
        "english": "As long as I'm with you, wherever you go I will go!"
      },
      {
        "speaker": "小丽",
        "avatar": "👩‍🎓",
        "chinese": "那我们去动物园看大熊猫吧，我最喜欢熊猫了。",
        "pinyin": "Nà wǒmen qù dòngwùyuán kàn dà xióngmāo ba, wǒ zuì xǐhuan xióngmāo le.",
        "english": "Then let's go to the zoo to see giant pandas, I like pandas the most."
      },
      {
        "speaker": "小刚",
        "avatar": "👨‍🎓",
        "chinese": "没问题！听说动物园最近还有好几只可爱的小熊猫呢。",
        "pinyin": "Méi wèntí! Tīngshuō dòngwùyuán zuìjìn hái yǒu hǎo jǐ zhī kě'ài de xiǎo xióngmāo ne.",
        "english": "No problem! I heard the zoo recently has several cute baby pandas too."
      }
    ],
    "culture": "The Giant Panda (大熊猫) is China's beloved national treasure (国宝). The Chengdu Research Base of Giant Panda Breeding is internationally renowned.",
    "exercises": [
      {
        "question": "Translate: 'I will eat whatever you eat.'",
        "options": [
          "你吃什么，我就吃什么。",
          "你想吃什么？",
          "我什么都不吃。",
          "你吃的比我多。"
        ],
        "answer": 0,
        "explanation": "'什么...就什么' pairs identical interrogatives."
      },
      {
        "question": "What does '几乎' mean?",
        "options": [
          "Almost; nearly",
          "Immediately",
          "Always",
          "Frequently"
        ],
        "answer": 0,
        "explanation": "'几乎' (jīhū) means almost or nearly."
      }
    ]
  },
  {
    "id": "hsk3-l9",
    "level": 3,
    "lessonNumber": 9,
    "title": "她的汉语说得跟中国人一样好",
    "pinyin": "Tā de hànyǔ shuō de gēn zhōngguó rén yíyàng hǎo",
    "english": "She Speaks Chinese as Well as a Native",
    "summary": "Combine complement of degree with comparison of equality (V + 得 + 跟 B 一样 + Adj) and express certainty with 一定.",
    "vocabulary": [
      {
        "character": "中文",
        "pinyin": "zhōngwén",
        "meaning": "Chinese language"
      },
      {
        "character": "班",
        "pinyin": "bān",
        "meaning": "class; team"
      },
      {
        "character": "一样",
        "pinyin": "yíyàng",
        "meaning": "same; identical"
      },
      {
        "character": "最后",
        "pinyin": "zuìhòu",
        "meaning": "final; at last"
      },
      {
        "character": "放心",
        "pinyin": "fàngxīn",
        "meaning": "to set one's mind at ease; rest assured"
      },
      {
        "character": "一定",
        "pinyin": "yídìng",
        "meaning": "certainly; definitely"
      },
      {
        "character": "担心",
        "pinyin": "dānxīn",
        "meaning": "to worry; anxious"
      },
      {
        "character": "比较",
        "pinyin": "bǐjiào",
        "meaning": "fairly; comparatively"
      },
      {
        "character": "了解",
        "pinyin": "liǎojiě",
        "meaning": "to understand thoroughly"
      },
      {
        "character": "先",
        "pinyin": "xiān",
        "meaning": "first; prior"
      },
      {
        "character": "中间",
        "pinyin": "zhōngjiān",
        "meaning": "middle; between"
      }
    ],
    "grammar": [
      {
        "title": "Combined Degree & Equality Comparison",
        "pattern": "动词 + 得 + 跟 + B + 一样 + 形容词",
        "explanation": "Blends the degree complement '得' with the comparative equality structure '跟...一样'.",
        "examples": [
          {
            "chinese": "玛丽的汉语说得跟中国人一样好。",
            "pinyin": "Mǎlì de hànyǔ shuō de gēn zhōngguó rén yíyàng hǎo.",
            "english": "Mary speaks Chinese as well as a native Chinese person."
          },
          {
            "chinese": "大卫汉字写得跟我一样快。",
            "pinyin": "Dàwèi hànzì xiě de gēn wǒ yíyàng kuài.",
            "english": "David writes characters as fast as I do."
          }
        ]
      },
      {
        "title": "Adverb of Certainty: 一定 (Definitely)",
        "pattern": "主语 + 一定 + 动词短语",
        "explanation": "'一定' expresses firm conviction, necessity, or determination.",
        "examples": [
          {
            "chinese": "请老师放心，我们一定会努力复习的！",
            "pinyin": "Qǐng lǎoshī fàngxīn, wǒmen yídìng huì nǔlì fùxí de!",
            "english": "Please rest assured teacher, we will definitely revise diligently!"
          },
          {
            "chinese": "这次考试你一定能考好。",
            "pinyin": "Zhè cì kǎoshì nǐ yídìng néng kǎo hǎo.",
            "english": "You will certainly perform well in this examination."
          }
        ]
      }
    ],
    "dialogue": [
      {
        "speaker": "李月",
        "avatar": "👩‍🏫",
        "chinese": "听说你们班的大卫在中文演讲比赛中得了第一名？",
        "pinyin": "Tīngshuō nǐmen bān de Dàwèi zài zhōngwén yǎnjiǎng bǐsài zhōng dé le dì-yī míng?",
        "english": "I heard David from your class won first prize in the Chinese speech contest?"
      },
      {
        "speaker": "王方",
        "avatar": "👩‍🎓",
        "chinese": "是的，他的普通话发音特别标准，说得跟中国人一样好！",
        "pinyin": "Shì de, tā de pǔtōnghuà fāyīn tèbié biāozhǔn, shuō de gēn zhōngguó rén yíyàng hǎo!",
        "english": "Yes, his Mandarin pronunciation is very standard, he speaks as well as a native!"
      },
      {
        "speaker": "李月",
        "avatar": "👩‍🏫",
        "chinese": "真棒！下周的HSK三级考试他一定能顺利通过吧？",
        "pinyin": "Zhēn bàng! Xià zhōu de HSK sān jí kǎoshì tā yídìng néng shùnlì tōngguò ba?",
        "english": "Awesome! He will definitely pass next week's HSK 3 exam smoothly, right?"
      },
      {
        "speaker": "王方",
        "avatar": "👩‍🎓",
        "chinese": "您放心，他准备得非常充分，一定没问题！",
        "pinyin": "Nín fàngxīn, tā zhǔnbèi de fēicháng chōngfèn, yídìng méi wèntí!",
        "english": "Rest assured, he prepared thoroughly, definitely no problem!"
      }
    ],
    "culture": "Standard Mandarin (普通话) is based on the Beijing phonological system and northern dialect vocabulary, serving as the common spoken tongue across China's diverse linguistic regions.",
    "exercises": [
      {
        "question": "Translate: 'He speaks as well as a native.'",
        "options": [
          "他说得跟中国人一样好。",
          "他比中国人说得好。",
          "他说得很好中国人。",
          "他喜欢说中文。"
        ],
        "answer": 0,
        "explanation": "'动词 + 得 + 跟 B + 一样 + 形容词' expresses identical high degree."
      },
      {
        "question": "What is the meaning of '放心'?",
        "options": [
          "Rest assured; feel at ease",
          "Worry",
          "Careful",
          "Forget"
        ],
        "answer": 0,
        "explanation": "'放心' (fàngxīn) means to set one's mind at ease."
      }
    ]
  },
  {
    "id": "hsk3-l10",
    "level": 3,
    "lessonNumber": 10,
    "title": "数学比历史难多了",
    "pinyin": "Shùxué bǐ lìshǐ nán duō le",
    "english": "Math is Much Harder Than History",
    "summary": "Express extent in comparisons with 得多 and 多了, compare academic subjects, and discuss transportation habits.",
    "vocabulary": [
      {
        "character": "数学",
        "pinyin": "shùxué",
        "meaning": "mathematics; math"
      },
      {
        "character": "历史",
        "pinyin": "lìshǐ",
        "meaning": "history"
      },
      {
        "character": "体育",
        "pinyin": "tǐyù",
        "meaning": "physical education; sports"
      },
      {
        "character": "简单",
        "pinyin": "jiǎndān",
        "meaning": "simple; easy"
      },
      {
        "character": "作业",
        "pinyin": "zuòyè",
        "meaning": "homework; assignment"
      },
      {
        "character": "练习",
        "pinyin": "liànxí",
        "meaning": "to practice; exercise"
      },
      {
        "character": "成绩",
        "pinyin": "chéngjì",
        "meaning": "exam score; achievement"
      },
      {
        "character": "句子",
        "pinyin": "jùzi",
        "meaning": "sentence"
      },
      {
        "character": "认真",
        "pinyin": "rènzhēn",
        "meaning": "conscientious; earnest"
      }
    ],
    "grammar": [
      {
        "title": "Comparative Extent: A 比 B + 形容词 + 得多 / 多了",
        "pattern": "A + 比 + B + 形容词 + 得多 / 多了 / 一点儿",
        "explanation": "Signifies a significant degree of difference between A and B.",
        "examples": [
          {
            "chinese": "我觉得高等数学比中国历史难多了。",
            "pinyin": "Wǒ juéde gāoděng shùxué bǐ zhōngguó lìshǐ nán duō le.",
            "english": "I think higher math is much harder than Chinese history."
          },
          {
            "chinese": "坐高铁比坐大巴舒服得多。",
            "pinyin": "Zuò gāotiě bǐ zuò dàbā shūfu de duō.",
            "english": "Taking high-speed rail is far more comfortable than riding a bus."
          }
        ]
      },
      {
        "title": "Minor Degree Difference with '一点儿'",
        "pattern": "A + 比 + B + 形容词 + 一点儿",
        "explanation": "Expresses a slight disparity in degree between two compared items.",
        "examples": [
          {
            "chinese": "今天比昨天暖和一点儿。",
            "pinyin": "Jīntiān bǐ zuótiān nuǎnhuo yìdiǎnr.",
            "english": "Today is slightly warmer than yesterday."
          },
          {
            "chinese": "这个西瓜比那个甜一点儿。",
            "pinyin": "Zhè ge xīguā bǐ nà ge tián yìdiǎnr.",
            "english": "This watermelon is slightly sweeter than that one."
          }
        ]
      }
    ],
    "dialogue": [
      {
        "speaker": "大卫",
        "avatar": "👨‍🎓",
        "chinese": "你这学期选了什么课？",
        "pinyin": "Nǐ zhè xuéqī xuǎn le shénme kè?",
        "english": "What courses did you choose this semester?"
      },
      {
        "speaker": "王方",
        "avatar": "👩‍🎓",
        "chinese": "我选了数学、中国历史和体育。你呢？",
        "pinyin": "Wǒ xuǎn le shùxué, zhōngguó lìshǐ hé tǐyù. Nǐ ne?",
        "english": "I chose math, Chinese history, and PE. What about you?"
      },
      {
        "speaker": "大卫",
        "avatar": "👨‍🎓",
        "chinese": "我也选了历史。我觉得数学比历史难多了，有很多复杂的算式。",
        "pinyin": "Wǒ yě xuǎn le lìshǐ. Wǒ juéde shùxué bǐ lìshǐ nán duō le, yǒu hěn duō fùzá de suànshì.",
        "english": "I also picked history. I think math is much harder than history, lots of complex formulas."
      },
      {
        "speaker": "王方",
        "avatar": "👩‍🎓",
        "chinese": "但只要每天认真做练习，成绩一定会提高的！",
        "pinyin": "Dàn zhǐyào měitiān rènzhēn zuò liànxí, chéngjì yídìng huì tígāo de!",
        "english": "But as long as you do exercises conscientiously every day, grades will definitely improve!"
      }
    ],
    "culture": "Mathematics education in China places strong emphasis on mental arithmetic and rigorous fundamental problem-solving drills from primary school onwards.",
    "exercises": [
      {
        "question": "How do you say 'Math is much harder than history'?",
        "options": [
          "数学比历史难多了。",
          "数学和历史一样难。",
          "历史比数学难一点儿。",
          "数学不难历史难。"
        ],
        "answer": 0,
        "explanation": "'A 比 B + 形容词 + 多了' denotes a much greater degree."
      },
      {
        "question": "What is '成绩'?",
        "options": [
          "Exam score; academic grade",
          "Homework",
          "Question",
          "Subject"
        ],
        "answer": 0,
        "explanation": "'成绩' (chéngjì) refers to scores, grades, or accomplishments."
      }
    ]
  },
  {
    "id": "hsk3-l11",
    "level": 3,
    "lessonNumber": 11,
    "title": "别忘了把空调关了",
    "pinyin": "Bié wàng le bǎ kōngtiáo guān le",
    "english": "Don't Forget to Turn Off the Air Conditioner",
    "summary": "Master the pivotal 把-construction (把字句) for object disposal, handle household appliances, and manage library loans.",
    "vocabulary": [
      {
        "character": "把",
        "pinyin": "bǎ",
        "meaning": "disposal marker; to hold"
      },
      {
        "character": "忘",
        "pinyin": "wàng",
        "meaning": "to forget"
      },
      {
        "character": "空调",
        "pinyin": "kōngtiáo",
        "meaning": "air conditioner"
      },
      {
        "character": "关",
        "pinyin": "guān",
        "meaning": "to turn off; close"
      },
      {
        "character": "关门",
        "pinyin": "guān mén",
        "meaning": "to close the door"
      },
      {
        "character": "发票",
        "pinyin": "fāpiào",
        "meaning": "official tax receipt; invoice"
      },
      {
        "character": "借",
        "pinyin": "jiè",
        "meaning": "to borrow; lend"
      },
      {
        "character": "还",
        "pinyin": "huán",
        "meaning": "to return (something borrowed)"
      },
      {
        "character": "洗手间",
        "pinyin": "xǐshǒujiān",
        "meaning": "restroom; washroom"
      }
    ],
    "grammar": [
      {
        "title": "The Disposal '把' Sentence: Subject + 把 + Object + Verb + Other Element",
        "pattern": "主语 + 把 + 宾语 + 动词 + 结果 / 了",
        "explanation": "The '把' construction shifts the direct object before the verb to emphasize what happens to or how one disposes of that object.",
        "examples": [
          {
            "chinese": "离开教室前，别忘了把空调关了。",
            "pinyin": "Líkāi jiàoshì qián, bié wàng le bǎ kōngtiáo guān le.",
            "english": "Before leaving the classroom, don't forget to turn off the air conditioner."
          },
          {
            "chinese": "请你把借的书还给图书馆。",
            "pinyin": "Qǐng nǐ bǎ jiè de shū huán gěi túshūguǎn.",
            "english": "Please return the borrowed books to the library."
          }
        ]
      },
      {
        "title": "Verbal Direction Complement with '把'",
        "pattern": "主语 + 把 + 宾语 + 动词 + 上 / 下 / 进 / 出",
        "explanation": "Pairs '把' with directional verb particles to specify movement or closure: 关上 (close up), 拿出来 (bring out).",
        "examples": [
          {
            "chinese": "请把门关上，外边风大。",
            "pinyin": "Qǐng bǎ mén guān shang, wàibian fēng dà.",
            "english": "Please close the door, it's windy outside."
          },
          {
            "chinese": "别忘了把发票带走。",
            "pinyin": "Bié wàng le bǎ fāpiào dài zǒu.",
            "english": "Don't forget to take the receipt with you."
          }
        ]
      }
    ],
    "dialogue": [
      {
        "speaker": "李朋",
        "avatar": "👨‍💼",
        "chinese": "时间不早了，大家都下班了，我们也走吧。",
        "pinyin": "Shíjiān bù zǎo le, dàjiā dōu xiàbān le, wǒmen yě zǒu ba.",
        "english": "It's getting late, everyone has left work, let's leave too."
      },
      {
        "speaker": "王经理",
        "avatar": "👩‍💼",
        "chinese": "好的。离开办公室前，别忘了把空调和电脑都关了。",
        "pinyin": "Hǎo de. Líkāi bàngōngshì qián, bié wàng le bǎ kōngtiáo hé diànnǎo dōu guān le.",
        "english": "Okay. Before leaving the office, don't forget to turn off the air conditioner and computers."
      },
      {
        "speaker": "李朋",
        "avatar": "👨‍💼",
        "chinese": "我已经关好了。窗户也关上了吗？",
        "pinyin": "Wǒ yǐjīng guān hǎo le. Chuānghu yě guān shang le ma?",
        "english": "I've already turned them off. Are the windows shut too?"
      },
      {
        "speaker": "王经理",
        "avatar": "👩‍💼",
        "chinese": "关上了。最后把门锁好就可以走了。",
        "pinyin": "Guān shang le. Zuìhòu bǎ mén suǒ hǎo jiù kěyǐ zǒu le.",
        "english": "Shut. Finally lock the door and we can go."
      }
    ],
    "culture": "Conserving electricity and turning off air conditioning (节约用电) is encouraged in public and commercial facilities in China under energy conservation initiatives.",
    "exercises": [
      {
        "question": "Put in correct order: '关了 (1) / 把空调 (2) / 别忘了 (3)'",
        "options": [
          "3 - 2 - 1 (别忘了把空调关了)",
          "1 - 2 - 3",
          "2 - 1 - 3",
          "3 - 1 - 2"
        ],
        "answer": 0,
        "explanation": "In a '把' sentence, '把 + 宾语' precedes the verb and result: 别忘了把空调关了."
      },
      {
        "question": "What does '把门关上' mean?",
        "options": [
          "Close the door",
          "Open the door",
          "Lock the room",
          "Clean the door"
        ],
        "answer": 0,
        "explanation": "'关上' means to close / shut."
      }
    ]
  },
  {
    "id": "hsk3-l12",
    "level": 3,
    "lessonNumber": 12,
    "title": "把这件衣服洗了",
    "pinyin": "Bǎ zhè jiàn yīfu xǐ le",
    "english": "Wash These Clothes",
    "summary": "Master 把-sentences with resultative completions (洗干净, 放在桌子上), and handle household dining and cleaning tasks.",
    "vocabulary": [
      {
        "character": "脏",
        "pinyin": "zāng",
        "meaning": "dirty; soiled"
      },
      {
        "character": "干净",
        "pinyin": "gānjìng",
        "meaning": "clean; tidy"
      },
      {
        "character": "头发",
        "pinyin": "tóufa",
        "meaning": "hair (on head)"
      },
      {
        "character": "梳",
        "pinyin": "shū",
        "meaning": "to comb; brush"
      },
      {
        "character": "刷牙",
        "pinyin": "shuā yá",
        "meaning": "to brush teeth"
      },
      {
        "character": "脸",
        "pinyin": "liǎn",
        "meaning": "face"
      },
      {
        "character": "声音",
        "pinyin": "shēngyīn",
        "meaning": "sound; voice"
      },
      {
        "character": "冰箱",
        "pinyin": "bīngxiāng",
        "meaning": "refrigerator; fridge"
      },
      {
        "character": "盘子",
        "pinyin": "pánzi",
        "meaning": "plate; dish"
      }
    ],
    "grammar": [
      {
        "title": "把-Sentence with Resultative Complement",
        "pattern": "主语 + 把 + 宾语 + 动词 + 结果补语 (干净 / 破 / 好)",
        "explanation": "Highlights that the action caused a substantive change in state to the object.",
        "examples": [
          {
            "chinese": "请你把这件脏衣服洗干净。",
            "pinyin": "Qǐng nǐ bǎ zhè jiàn zāng yīfu xǐ gānjìng.",
            "english": "Please wash this dirty garment clean."
          },
          {
            "chinese": "我已经把盘子刷干净了。",
            "pinyin": "Wǒ yǐjīng bǎ pánzi shuā gānjìng le.",
            "english": "I have already scrubbed the plates clean."
          }
        ]
      },
      {
        "title": "把-Sentence with Locative Displacement (放在/搬到)",
        "pattern": "主语 + 把 + 宾语 + 放 / 拿 / 搬 + 在 / 到 + 处所",
        "explanation": "Specifies moving an item into a designated target location.",
        "examples": [
          {
            "chinese": "把牛奶放在冰箱里吧。",
            "pinyin": "Bǎ niúnǎi fàng zài bīngxiāng lǐ ba.",
            "english": "Put the milk into the refrigerator."
          },
          {
            "chinese": "请把桌子搬到客厅去。",
            "pinyin": "Qǐng bǎ zhuōzi bān dào kètīng qù.",
            "english": "Please move the table to the living room."
          }
        ]
      }
    ],
    "dialogue": [
      {
        "speaker": "妈妈",
        "avatar": "👩",
        "chinese": "儿子，你踢完足球回来了？衣服怎么这么脏？",
        "pinyin": "Érzi, nǐ tī wán zúqiú huílái le? Yīfu zěnme zhème zāng?",
        "english": "Son, you're back from soccer? Why are your clothes so dirty?"
      },
      {
        "speaker": "儿子",
        "avatar": "👦",
        "chinese": "草地上有水。我这就去洗澡换衣服。",
        "pinyin": "Cǎodì shang yǒu shuǐ. Wǒ zhè jiù qù xǐ zǎo huàn yīfu.",
        "english": "There was water on the grass. I'll go take a shower and change clothes right now."
      },
      {
        "speaker": "妈妈",
        "avatar": "👩",
        "chinese": "换下来后把这件脏衣服洗了，别随便扔在地上。",
        "pinyin": "Huàn xiàlái hòu bǎ zhè jiàn zāng yīfu xǐ le, bié suíbiàn rēng zài dì shang.",
        "english": "After changing, wash this dirty shirt, don't toss it on the floor."
      },
      {
        "speaker": "儿子",
        "avatar": "👦",
        "chinese": "知道了，我一定把它洗得干干净净的！",
        "pinyin": "Zhīdào le, wǒ yídìng bǎ tā xǐ de gāngānjìngjìng de!",
        "english": "Understood, I will definitely wash it spotless clean!"
      }
    ],
    "culture": "The Chinese idiom 窗明几净 (bright windows and clean tables) depicts an orderly, well-maintained home reflecting family virtue.",
    "exercises": [
      {
        "question": "Translate: 'Wash the dirty clothes clean.'",
        "options": [
          "把脏衣服洗干净。",
          "脏衣服洗了。",
          "洗衣服干净。",
          "衣服很脏。"
        ],
        "answer": 0,
        "explanation": "'把 + 脏衣服 + 洗 (verb) + 干净 (result)'."
      },
      {
        "question": "What is the opposite of '脏' (dirty)?",
        "options": [
          "干净",
          "漂亮",
          "新",
          "高"
        ],
        "answer": 0,
        "explanation": "'干净' (gānjìng) means clean."
      }
    ]
  },
  {
    "id": "hsk3-l13",
    "level": 3,
    "lessonNumber": 13,
    "title": "我是走回来的",
    "pinyin": "Wǒ shì zǒu huílái de",
    "english": "I Walked Back",
    "summary": "Master compound directional complements (Verb + 走回来, 跑出去, 爬上去), and express concurrent actions with 一边...一边.",
    "vocabulary": [
      {
        "character": "经过",
        "pinyin": "jīngguò",
        "meaning": "to pass by; go through; process"
      },
      {
        "character": "遇到",
        "pinyin": "yùdào",
        "meaning": "to meet; encounter"
      },
      {
        "character": "一边",
        "pinyin": "yìbiān",
        "meaning": "simultaneously; on one hand"
      },
      {
        "character": "过去",
        "pinyin": "guòqu",
        "meaning": "in the past; go over"
      },
      {
        "character": "愿意",
        "pinyin": "yuànyì",
        "meaning": "willing; wish to"
      },
      {
        "character": "起来",
        "pinyin": "qǐlái",
        "meaning": "to rise; start up"
      },
      {
        "character": "应该",
        "pinyin": "yīnggāi",
        "meaning": "should; ought to"
      },
      {
        "character": "生活",
        "pinyin": "shēnghuó",
        "meaning": "life; livelihood"
      }
    ],
    "grammar": [
      {
        "title": "Compound Directional Complements",
        "pattern": "动词 + 上 / 下 / 进 / 出 / 回 / 过 + 来 / 去",
        "explanation": "Combines a specific directional verb with 来 (toward speaker) or 去 (away from speaker): 走回来 (walk back here), 跑出去 (run out there).",
        "examples": [
          {
            "chinese": "路上堵车，出租车开不动，我是走回来的。",
            "pinyin": "Lù shang dǔchē, chūzūchē kāi bu dòng, wǒ shì zǒu huílái de.",
            "english": "Traffic was jammed and the taxi couldn't move, so I walked back."
          },
          {
            "chinese": "他从教室里跑出来了。",
            "pinyin": "Tā cóng jiàoshì lǐ pǎo chūlái le.",
            "english": "He ran out from inside the classroom."
          }
        ]
      },
      {
        "title": "Simultaneous Actions: 一边...一边...",
        "pattern": "主语 + 一边 + 动词 1 + 一边 + 动词 2",
        "explanation": "Expresses that two actions are conducted concurrently by the same subject.",
        "examples": [
          {
            "chinese": "我们一边散步一边聊天。",
            "pinyin": "Wǒmen yìbiān sànbù yìbiān liáotiān.",
            "english": "We chatted while strolling."
          },
          {
            "chinese": "他喜欢一边听音乐一边写作业。",
            "pinyin": "Tā xǐhuan yìbiān tīng yīnyuè yìbiān xiě zuòyè.",
            "english": "He likes writing homework while listening to music."
          }
        ]
      }
    ],
    "dialogue": [
      {
        "speaker": "玛丽",
        "avatar": "👩‍🎓",
        "chinese": "大卫，外边下着雨呢，你怎么没坐出租车？",
        "pinyin": "Dàwèi, wàibian xià zhe yǔ ne, nǐ zěnme méi zuò chūzūchē?",
        "english": "David, it's raining outside, why didn't you take a taxi?"
      },
      {
        "speaker": "大卫",
        "avatar": "👨‍🎓",
        "chinese": "刚才路上车太多了，半个小时都没动，我是走回来的。",
        "pinyin": "Gāngcái lù shang chē tài duō le, bàn ge xiǎoshí dōu méi dòng, wǒ shì zǒu huílái de.",
        "english": "Just now too many cars on the road, didn't move for half an hour, I walked back."
      },
      {
        "speaker": "玛丽",
        "avatar": "👩‍🎓",
        "chinese": "走回来花了多长时间？衣服都湿了吧？",
        "pinyin": "Zǒu huílái huā le duō cháng shíjiān? Yīfu dōu shī le ba?",
        "english": "How long did it take to walk back? Are your clothes soaked?"
      },
      {
        "speaker": "大卫",
        "avatar": "👨‍🎓",
        "chinese": "我带了伞。一边听中文广播一边走，二十分钟就到了。",
        "pinyin": "Wǒ dài le sǎn. Yìbiān tīng zhōngwén guǎngbō yìbiān zǒu, èrshí fēnzhōng jiù dào le.",
        "english": "I had an umbrella. Listening to Chinese radio while walking, arrived in 20 minutes."
      }
    ],
    "culture": "Walking as aerobic transit (慢行交通) is celebrated in urban China with greenway walkways (绿道) constructed alongside rivers and canals.",
    "exercises": [
      {
        "question": "How do you say 'listening to music while studying'?",
        "options": [
          "一边听音乐一边学习",
          "又听音乐又学习",
          "听音乐然后再学习",
          "因为听音乐所以学习"
        ],
        "answer": 0,
        "explanation": "'一边...一边...' expresses simultaneous concurrent actions."
      },
      {
        "question": "Which is a compound directional complement?",
        "options": [
          "走出来",
          "走了",
          "走完",
          "走路"
        ],
        "answer": 0,
        "explanation": "'走出来' combines verb (走) + directional (出) + anchor (来)."
      }
    ]
  },
  {
    "id": "hsk3-l14",
    "level": 3,
    "lessonNumber": 14,
    "title": "你把水果拿过来",
    "pinyin": "Nǐ bǎ shuǐguǒ ná guòlái",
    "english": "Bring the Fruit Over",
    "summary": "Combine 把-sentences with compound directional complements: 把 + 宾语 + 动词 + 出来/过去/拿过来.",
    "vocabulary": [
      {
        "character": "拿",
        "pinyin": "ná",
        "meaning": "to take; hold; bring"
      },
      {
        "character": "过",
        "pinyin": "guò",
        "meaning": "to pass; cross"
      },
      {
        "character": "过来",
        "pinyin": "guòlái",
        "meaning": "come over (toward speaker)"
      },
      {
        "character": "过去",
        "pinyin": "guòqu",
        "meaning": "go over (away from speaker)"
      },
      {
        "character": "师傅",
        "pinyin": "shīfu",
        "meaning": "master; skilled worker; driver"
      },
      {
        "character": "司机",
        "pinyin": "sījī",
        "meaning": "driver; chauffeur"
      },
      {
        "character": "终于",
        "pinyin": "zhōngyú",
        "meaning": "at last; finally"
      },
      {
        "character": "习惯",
        "pinyin": "xíguàn",
        "meaning": "habit; to be accustomed to"
      },
      {
        "character": "差",
        "pinyin": "chà",
        "meaning": "poor; short of; differ"
      },
      {
        "character": "包裹",
        "pinyin": "bāoguǒ",
        "meaning": "parcel; package"
      }
    ],
    "grammar": [
      {
        "title": "把 with Compound Directional Complement",
        "pattern": "主语 + 把 + 宾语 + 动词 + 复合趋向补语 (拿过来 / 搬进去)",
        "explanation": "Expresses directing an object across space relative to the speaker.",
        "examples": [
          {
            "chinese": "请你把桌上的新鲜水果拿过来。",
            "pinyin": "Qǐng nǐ bǎ zhuō shang de xīnxiān shuǐguǒ ná guòlái.",
            "english": "Please bring the fresh fruit on the table over here."
          },
          {
            "chinese": "师傅把大包裹搬进屋去了。",
            "pinyin": "Shīfu bǎ dà bāoguǒ bān jìn wū qù le.",
            "english": "The master worker carried the large parcel into the room."
          }
        ]
      },
      {
        "title": "Adverb '终于' (Finally / At Long Last)",
        "pattern": "主语 + 终于 + 动词短语 + 了",
        "explanation": "'终于' indicates that a desired result has been achieved after a lengthy wait or considerable effort.",
        "examples": [
          {
            "chinese": "准备了两个月，我终于通过HSK考试了！",
            "pinyin": "Zhǔnbèi le liǎng ge yuè, wǒ zhōngyú tōngguò HSK kǎoshì le!",
            "english": "After preparing for two months, I finally passed the HSK exam!"
          },
          {
            "chinese": "等了半天，出租车终于来了。",
            "pinyin": "Děng le bàntiān, chūzūchē zhōngyú lái le.",
            "english": "After waiting half the day, the taxi finally arrived."
          }
        ]
      }
    ],
    "dialogue": [
      {
        "speaker": "小丽",
        "avatar": "👩‍🎓",
        "chinese": "小刚，客人快到了，你把洗好的水果拿过来放在茶几上吧。",
        "pinyin": "Xiǎogāng, kèrén kuài dào le, nǐ bǎ xǐ hǎo de shuǐguǒ ná guòlái fàng zài chájī shang ba.",
        "english": "Xiaogang, guests are arriving soon, bring the washed fruit over and put it on the coffee table."
      },
      {
        "speaker": "小刚",
        "avatar": "👨‍🎓",
        "chinese": "好的，我顺便把冰箱里的绿茶也拿出来。",
        "pinyin": "Hǎo de, wǒ shùnbiàn bǎ bīngxiāng lǐ de lǜchá yě ná chūlái.",
        "english": "Okay, I'll also take the green tea out from the fridge while I'm at it."
      },
      {
        "speaker": "小丽",
        "avatar": "👩‍🎓",
        "chinese": "辛苦了！忙活了一下午，终于准备齐了。",
        "pinyin": "Xīnkǔ le! Mánghuo le yí xiàwǔ, zhōngyú zhǔnbèi qí le.",
        "english": "Thanks for your hard work! Busy all afternoon, finally ready."
      },
      {
        "speaker": "小刚",
        "avatar": "👨‍🎓",
        "chinese": "门铃响了，师傅送蛋糕过来了，我去开门！",
        "pinyin": "Ménlíng xiǎng le, shīfu sòng dàngāo guòlái le, wǒ qù kāi mén!",
        "english": "Doorbell rang, the master delivery brought the cake over, I'll go open the door!"
      }
    ],
    "culture": "Addressing service professionals, drivers, and skilled repair craftspeople as '师傅' (shīfu - master) is universally polite and respectful in everyday Chinese life.",
    "exercises": [
      {
        "question": "How do you ask someone to 'bring the book over here'?",
        "options": [
          "把书拿过来",
          "把书拿过去",
          "书拿走",
          "带书走"
        ],
        "answer": 0,
        "explanation": "'拿过来' indicates moving the item toward the speaker."
      },
      {
        "question": "What is the polite title for a delivery worker or taxi driver?",
        "options": [
          "师傅",
          "老师",
          "先生",
          "学生"
        ],
        "answer": 0,
        "explanation": "'师傅' (shīfu) is the standard polite address for service craftspeople and drivers."
      }
    ]
  },
  {
    "id": "hsk3-l15",
    "level": 3,
    "lessonNumber": 15,
    "title": "其他都没什么问题",
    "pinyin": "Qítā dōu méi shénme wèntí",
    "english": "Other Than That, Everything is Fine",
    "summary": "Master inclusive and exclusive prepositional construction 除了...以外 (都/还), and handle restaurant or hotel reviews.",
    "vocabulary": [
      {
        "character": "其他",
        "pinyin": "qítā",
        "meaning": "other; else"
      },
      {
        "character": "满意",
        "pinyin": "mǎnyì",
        "meaning": "satisfied; pleased"
      },
      {
        "character": "菜单",
        "pinyin": "càidān",
        "meaning": "menu"
      },
      {
        "character": "尝",
        "pinyin": "cháng",
        "meaning": "to taste; savor"
      },
      {
        "character": "经常",
        "pinyin": "jīngcháng",
        "meaning": "often; frequently"
      },
      {
        "character": "渴",
        "pinyin": "kě",
        "meaning": "thirsty"
      },
      {
        "character": "香蕉",
        "pinyin": "xiāngjiāo",
        "meaning": "banana"
      },
      {
        "character": "甜",
        "pinyin": "tián",
        "meaning": "sweet"
      }
    ],
    "grammar": [
      {
        "title": "Exclusive Construction: 除了...以外，都...",
        "pattern": "除了 + A + 以外，主语 + 都 + 谓语",
        "explanation": "Signifies that except for A, all other members of the group share the stated predicate (exclusion).",
        "examples": [
          {
            "chinese": "除了这个题有点儿难以外，其他都没什么问题。",
            "pinyin": "Chúle zhè ge tí yǒudiǎnr nán yǐwài, qítā dōu méi shénme wèntí.",
            "english": "Except for this question being a bit hard, other than that everything is fine."
          },
          {
            "chinese": "除了大卫以外，全班同学都来了。",
            "pinyin": "Chúle Dàwèi yǐwài, quán bān tóngxué dōu lái le.",
            "english": "Except for David, all classmates have arrived."
          }
        ]
      },
      {
        "title": "Inclusive Construction: 除了...以外，还...",
        "pattern": "除了 + A + 以外，主语 + 还 / 也 + 谓语",
        "explanation": "Signifies that in addition to A, other items are also included (addition).",
        "examples": [
          {
            "chinese": "除了汉语以外，他还会说法语和英语。",
            "pinyin": "Chúle hànyǔ yǐwài, tā hái huì shuō fǎyǔ hé yīngyǔ.",
            "english": "In addition to Chinese, he can also speak French and English."
          },
          {
            "chinese": "桌上除了苹果以外，还有西瓜和香蕉。",
            "pinyin": "Zhuō shang chúle píngguǒ yǐwài, hái yǒu xīguā hé xiāngjiāo.",
            "english": "On the table, besides apples, there are also watermelon and bananas."
          }
        ]
      }
    ],
    "dialogue": [
      {
        "speaker": "服务员",
        "avatar": "👨‍🍳",
        "chinese": "先生，您对我们饭店今天的菜品还满意吗？",
        "pinyin": "Xiānsheng, nín duì wǒmen fàndiàn jīntiān de càipǐn hái mǎnyì ma?",
        "english": "Sir, are you satisfied with our restaurant's dishes today?"
      },
      {
        "speaker": "大卫",
        "avatar": "👨‍🎓",
        "chinese": "非常满意！除了汤稍微有一点儿咸以外，其他都没什么问题。",
        "pinyin": "Fēicháng mǎnyì! Chúle tāng shāowēi yǒu yìdiǎnr xián yǐwài, qítā dōu méi shénme wèntí.",
        "english": "Very satisfied! Except for the soup being slightly salty, other than that everything was great."
      },
      {
        "speaker": "服务员",
        "avatar": "👨‍🍳",
        "chinese": "谢谢您的宝贵意见！欢迎您下次再来尝尝我们的特色烤鸭。",
        "pinyin": "Xièxie nín de bǎoguì yìjiàn! Huānyíng nín xià cì zài lái chángchang wǒmen de tèsè kǎoyā.",
        "english": "Thank you for your valuable feedback! Welcome to come taste our specialty roast duck next time."
      },
      {
        "speaker": "大卫",
        "avatar": "👨‍🎓",
        "chinese": "好的，我一定带朋友一起来！",
        "pinyin": "Hǎo de, wǒ yídìng dài péngyou yìqǐ lái!",
        "english": "Sure, I will definitely bring friends along!"
      }
    ],
    "culture": "Chinese dining culture places prime emphasis on guest feedback. Restaurant managers routinely inquire if dishes suit diners' palates (合不合胃口).",
    "exercises": [
      {
        "question": "How do you say 'Except for Sunday, I work every day'?",
        "options": [
          "除了星期日以外，我每天都上班。",
          "因为星期日，所以我上班。",
          "虽然是星期日，但我上班。",
          "不仅星期日上班，平时也上班。"
        ],
        "answer": 0,
        "explanation": "'除了...以外，都...' denotes exclusion."
      },
      {
        "question": "What is '菜单'?",
        "options": [
          "Menu",
          "Bill / Check",
          "Dish",
          "Drink"
        ],
        "answer": 0,
        "explanation": "'菜单' (càidān) means menu."
      }
    ]
  },
  {
    "id": "hsk3-l16",
    "level": 3,
    "lessonNumber": 16,
    "title": "我现在累得下班就想睡觉",
    "pinyin": "Wǒ xiànzài lèi de xiàbān jiù xiǎng shuìjiào",
    "english": "I'm So Tired Now That I Just Want to Sleep After Work",
    "summary": "Master descriptive clause complements introduced by 得 (Adjective + 得 + Clause), and discuss career pressures and rest.",
    "vocabulary": [
      {
        "character": "累得",
        "pinyin": "lèi de",
        "meaning": "so tired that..."
      },
      {
        "character": "打扫",
        "pinyin": "dǎsǎo",
        "meaning": "to sweep; clean"
      },
      {
        "character": "擦",
        "pinyin": "cā",
        "meaning": "to wipe; rub"
      },
      {
        "character": "黑板",
        "pinyin": "hēibǎn",
        "meaning": "blackboard"
      },
      {
        "character": "倒",
        "pinyin": "dào",
        "meaning": "to pour; tip"
      },
      {
        "character": "水",
        "pinyin": "shuǐ",
        "meaning": "water"
      },
      {
        "character": "结束",
        "pinyin": "jiéshù",
        "meaning": "to conclude; finish"
      }
    ],
    "grammar": [
      {
        "title": "Descriptive Clause Complement: 形容词 + 得 + 小句",
        "pattern": "形容词 + 得 + 主谓短语 / 动宾短语",
        "explanation": "Introduces a full explanatory clause to describe the vivid outcome or degree of the preceding adjective.",
        "examples": [
          {
            "chinese": "我现在累得下班就想睡觉。",
            "pinyin": "Wǒ xiànzài lèi de xiàbān jiù xiǎng shuìjiào.",
            "english": "I'm so exhausted now that I just want to sleep after work."
          },
          {
            "chinese": "听到这个好消息，大家高兴得跳了起来。",
            "pinyin": "Tīngdào zhè ge hǎo xiāoxi, dàjiā gāoxìng de tiào le qǐlái.",
            "english": "Hearing this good news, everyone was so happy that they jumped up."
          }
        ]
      },
      {
        "title": "Prompt Sequel: ...就...",
        "pattern": "事件 A + 就 + 事件 B",
        "explanation": "'就' indicates that Event B follows immediately upon the realization of Event A.",
        "examples": [
          {
            "chinese": "我一下班就回家做饭。",
            "pinyin": "Wǒ yí xiàbān jiù huí jiā zuò fàn.",
            "english": "As soon as I finish work, I go home to cook."
          },
          {
            "chinese": "会议一结束我们就出发。",
            "pinyin": "Huìyì yì jiéshù wǒmen jiù chūfā.",
            "english": "As soon as the meeting ends, we set off."
          }
        ]
      }
    ],
    "dialogue": [
      {
        "speaker": "李朋",
        "avatar": "👨‍💼",
        "chinese": "你最近看起来很疲倦，工作很忙吗？",
        "pinyin": "Nǐ zuìjìn kàn qǐlái hěn píjuàn, gōngzuò hěn máng ma?",
        "english": "You look very tired lately, is work very busy?"
      },
      {
        "speaker": "王方",
        "avatar": "👩‍🎓",
        "chinese": "是啊，新项目要上线，我现在累得下班就想睡觉，什么都不想做。",
        "pinyin": "Shì a, xīn xiàngmù yào shàngxiàn, wǒ xiànzài lèi de xiàbān jiù xiǎng shuìjiào, shénme dōu bù xiǎng zuò.",
        "english": "Yeah, new project is launching, I'm so tired now that I just want to sleep after work, don't want to do anything."
      },
      {
        "speaker": "李朋",
        "avatar": "👨‍💼",
        "chinese": "身体最重要，周末一定要好好放松一下，出去散散步。",
        "pinyin": "Shēntǐ zuì zhòngyào, zhōumò yídìng yào hǎohǎo fàngsōng yíxià, chūqu sànsan bù.",
        "english": "Health is most important, on the weekend definitely relax well and take a walk."
      },
      {
        "speaker": "王方",
        "avatar": "👩‍🎓",
        "chinese": "你说得对，今天等会议一结束，我就早点儿休息。",
        "pinyin": "Nǐ shuō de duì, jīntiān děng huìyì yì jiéshù, wǒ jiù zǎodiǎnr xiūxi.",
        "english": "You're right, today once the meeting ends, I will rest early."
      }
    ],
    "culture": "The modern health adage 劳逸结合 (balance labor with rest) encourages working professionals to safeguard mental and bodily health amid fast-paced urban lifestyles.",
    "exercises": [
      {
        "question": "How do you say 'He was so happy that he laughed out loud'?",
        "options": [
          "他高兴得大笑起来。",
          "他高兴也笑。",
          "因为高兴所以大笑。",
          "他想大笑。"
        ],
        "answer": 0,
        "explanation": "'形容词 + 得 + 结果小句' conveys dramatic descriptive outcome."
      },
      {
        "question": "Complete: 我一回家______做作业。",
        "options": [
          "就",
          "才",
          "也",
          "还"
        ],
        "answer": 0,
        "explanation": "'一...就...' means 'as soon as... then...'."
      }
    ]
  },
  {
    "id": "hsk3-l17",
    "level": 3,
    "lessonNumber": 17,
    "title": "谁都有生病的时候",
    "pinyin": "Shéi dōu yǒu shēngbìng de shíhou",
    "english": "Everyone Gets Sick Sometimes",
    "summary": "Master emphatic universal statements using question words (谁都, 什么都, 哪儿都), and talk about healthcare and doctor visits.",
    "vocabulary": [
      {
        "character": "办法",
        "pinyin": "bànfǎ",
        "meaning": "method; way; solution"
      },
      {
        "character": "抽烟",
        "pinyin": "chōuyān",
        "meaning": "to smoke (cigarettes)"
      },
      {
        "character": "咳嗽",
        "pinyin": "késou",
        "meaning": "to cough"
      },
      {
        "character": "严重",
        "pinyin": "yánzhòng",
        "meaning": "serious; grave; severe"
      },
      {
        "character": "检查",
        "pinyin": "jiǎnchá",
        "meaning": "to examine; inspect; checkup"
      }
    ],
    "grammar": [
      {
        "title": "Emphatic Universal Statements: 疑问代词 + 都 / 也 + 谓语",
        "pattern": "谁都 / 什么都 / 哪儿都 + 谓语",
        "explanation": "Question words followed by 都 or 也 represent universal inclusion ('everyone', 'everything', 'everywhere') or absolute negation ('no one', 'nothing', 'nowhere').",
        "examples": [
          {
            "chinese": "谁都有生病的时候，好好休息几天就好了。",
            "pinyin": "Shéi dōu yǒu shēngbìng de shíhou, hǎohǎo xiūxi jǐ tiān jiù hǎo le.",
            "english": "Everyone has times when they get sick; resting well for a few days will cure it."
          },
          {
            "chinese": "今天我太累了，哪儿都不想去。",
            "pinyin": "Jīntiān wǒ tài lèi le, nǎr dōu bù xiǎng qù.",
            "english": "Today I'm too exhausted, I don't want to go anywhere."
          }
        ]
      },
      {
        "title": "Expressing Solutions with '有办法'",
        "pattern": "有 / 没有 + 办法 + 动词",
        "explanation": "'办法' refers to a concrete technique or approach to address a dilemma.",
        "examples": [
          {
            "chinese": "医生一定有办法治好你的咳嗽。",
            "pinyin": "Yīshēng yídìng yǒu bànfǎ zhì hǎo nǐ de késou.",
            "english": "The doctor definitely has a way to cure your cough."
          },
          {
            "chinese": "别担心，我们一定能想出办法来。",
            "pinyin": "Bié dānxīn, wǒmen yídìng néng xiǎng chū bànfǎ lái.",
            "english": "Don't worry, we can definitely come up with a solution."
          }
        ]
      }
    ],
    "dialogue": [
      {
        "speaker": "医生",
        "avatar": "👨‍⚕️",
        "chinese": "你咳嗽得很严重，最近抽烟了吗？",
        "pinyin": "Nǐ késou de hěn yánzhòng, zuìjìn chōuyān le ma?",
        "english": "Your cough is quite severe, have you been smoking recently?"
      },
      {
        "speaker": "大卫",
        "avatar": "👨‍🎓",
        "chinese": "抽了一点儿。医生，检查结果怎么样？严重吗？",
        "pinyin": "Chōu le yìdiǎnr. Yīshēng, jiǎnchá jiéguǒ zěnmeyàng? Yánzhòng ma?",
        "english": "A little bit. Doctor, how were the checkup results? Is it serious?"
      },
      {
        "speaker": "医生",
        "avatar": "👨‍⚕️",
        "chinese": "问题不算太严重，但从今天起必须把烟戒了，不能再抽了。",
        "pinyin": "Wèntí bú suàn tài yánzhòng, dàn cóng jīntiān qǐ bìxū bǎ yān jiè le, bù néng zài chōu le.",
        "english": "Not too grave, but starting today you must quit smoking, cannot smoke anymore."
      },
      {
        "speaker": "大卫",
        "avatar": "👨‍🎓",
        "chinese": "好的，我一定听您的话，按时吃药多喝水。",
        "pinyin": "Hǎo de, wǒ yídìng tīng nín de huà, ànshí chī yào duō hē shuǐ.",
        "english": "Okay, I will definitely follow your advice, take medicine on time and drink more water."
      }
    ],
    "culture": "Public spaces across China enforce strict indoor smoking prohibitions (禁止吸烟) to cultivate healthy civic environments.",
    "exercises": [
      {
        "question": "How do you say 'Nobody knows this matter'?",
        "options": [
          "谁都不知道这件事。",
          "谁知道这件事？",
          "有人知道这件事。",
          "大家都想知道。"
        ],
        "answer": 0,
        "explanation": "'谁都 + 否定' expresses universal negation: nobody."
      },
      {
        "question": "What is '检查'?",
        "options": [
          "To inspect; checkup",
          "To cough",
          "To rest",
          "To cure"
        ],
        "answer": 0,
        "explanation": "'检查' (jiǎnchá) means to examine or checkup."
      }
    ]
  },
  {
    "id": "hsk3-l18",
    "level": 3,
    "lessonNumber": 18,
    "title": "我相信他们会同意的",
    "pinyin": "Wǒ xiāngxìn tāmen huì tóngyì de",
    "english": "I Believe They Will Agree",
    "summary": "Express conviction and certainty with 会...的, master topic preposition 关于, and discuss proposals and opportunities.",
    "vocabulary": [
      {
        "character": "同意",
        "pinyin": "tóngyì",
        "meaning": "to agree; approve"
      },
      {
        "character": "相信",
        "pinyin": "xiāngxìn",
        "meaning": "to believe; trust"
      },
      {
        "character": "关于",
        "pinyin": "guānyú",
        "meaning": "about; regarding; concerning"
      },
      {
        "character": "机会",
        "pinyin": "jīhuì",
        "meaning": "opportunity; chance"
      },
      {
        "character": "国家",
        "pinyin": "guójiā",
        "meaning": "country; state; nation"
      },
      {
        "character": "语言",
        "pinyin": "yǔyán",
        "meaning": "language"
      },
      {
        "character": "文化",
        "pinyin": "wénhuà",
        "meaning": "culture"
      }
    ],
    "grammar": [
      {
        "title": "Conveying Certainty: 会...的",
        "pattern": "主语 + 会 + 动词短语 + 的",
        "explanation": "'会...的' affirms the speaker's strong conviction that an anticipated event will certainly happen.",
        "examples": [
          {
            "chinese": "你的计划很详细，我相信他们会同意的。",
            "pinyin": "Nǐ de jìhuà hěn xiángxì, wǒ xiāngxìn tāmen huì tóngyì de.",
            "english": "Your plan is very detailed, I believe they will agree."
          },
          {
            "chinese": "只要努力，你一定会成功的。",
            "pinyin": "Zhǐyào nǔlì, nǐ yídìng huì chénggōng de.",
            "english": "As long as you work hard, you will certainly succeed."
          }
        ]
      },
      {
        "title": "Topic Preposition '关于' (Regarding / About)",
        "pattern": "关于 + 对象，主语 + 谓语",
        "explanation": "'关于' introduces the topic or scope of the following clause.",
        "examples": [
          {
            "chinese": "关于中国传统文化，我借了几本很有趣的书。",
            "pinyin": "Guānyú zhōngguó chuántǒng wénhuà, wǒ jiè le jǐ běn hěn yǒu yìsi de shū.",
            "english": "Regarding traditional Chinese culture, I borrowed several interesting books."
          },
          {
            "chinese": "关于这次留学机会，老师跟我们聊了很久。",
            "pinyin": "Guānyú zhè cì liúxué jīhuì, lǎoshī gēn wǒmen liáo le hěn jiǔ.",
            "english": "Regarding this study abroad opportunity, the teacher chatted with us for a long time."
          }
        ]
      }
    ],
    "dialogue": [
      {
        "speaker": "大卫",
        "avatar": "👨‍🎓",
        "chinese": "李老师，我想申请下学期去北京留学的机会，您觉得怎么样？",
        "pinyin": "Lǐ lǎoshī, wǒ xiǎng shēnqǐng xià xuéqī qù Běijīng liúxué de jīhuì, nín juéde zěnmeyàng?",
        "english": "Teacher Li, I want to apply for the study abroad opportunity in Beijing next semester, what do you think?"
      },
      {
        "speaker": "李月",
        "avatar": "👩‍🏫",
        "chinese": "这是一个了解中国语言和文化的绝好机会！你的申请材料准备好了吗？",
        "pinyin": "Zhè shì yí ge liǎojiě zhōngguó yǔyán hé wénhuà de juéhǎo jīhuì! Nǐ de shēnqǐng cáiliào zhǔnbèi hǎo le ma?",
        "english": "This is an extraordinary opportunity to understand Chinese language and culture! Are your application materials ready?"
      },
      {
        "speaker": "大卫",
        "avatar": "👨‍🎓",
        "chinese": "都准备齐了。关于我的汉语水平证明，我也附上了HSK成绩。",
        "pinyin": "Dōu zhǔnbèi qí le. Guānyú wǒ de hànyǔ shuǐpíng zhèngmíng, wǒ yě fù shang le HSK chéngjì.",
        "english": "All prepared. Regarding proof of my Chinese level, I also attached my HSK score."
      },
      {
        "speaker": "李月",
        "avatar": "👩‍🏫",
        "chinese": "非常好，你的成绩很优秀，我相信他们一定会同意录取的！",
        "pinyin": "Fēicháng hǎo, nǐ de chéngjì hěn yōuxiù, wǒ xiāngxìn tāmen yídìng huì tóngyì lùqǔ de!",
        "english": "Very good, your scores are excellent, I believe they will definitely approve your admission!"
      }
    ],
    "culture": "International cultural exchange (文化交流) and scholarship programs such as the CSC Chinese Government Scholarship welcome tens of thousands of international students to Chinese universities every year.",
    "exercises": [
      {
        "question": "How do you express conviction that something will succeed?",
        "options": [
          "他一定会成功的。",
          "他想成功。",
          "他不成功。",
          "成功很难。"
        ],
        "answer": 0,
        "explanation": "'会...的' conveys firm positive conviction."
      },
      {
        "question": "Translate: 'Regarding Chinese culture':",
        "options": [
          "关于中国文化",
          "因为中国文化",
          "对于中国文化",
          "虽然中国文化"
        ],
        "answer": 0,
        "explanation": "'关于' introduces a topic of discussion."
      }
    ]
  },
  {
    "id": "hsk3-l19",
    "level": 3,
    "lessonNumber": 19,
    "title": "你没看出来吗",
    "pinyin": "Nǐ méi kàn chūlái ma",
    "english": "Didn't You Recognize It?",
    "summary": "Master metaphorical extended directional complements (看出来, 想起来, 听出来), and discuss personal appearance changes.",
    "vocabulary": [
      {
        "character": "出来",
        "pinyin": "chūlái",
        "meaning": "come out; recognize; discern"
      },
      {
        "character": "起来",
        "pinyin": "qǐlái",
        "meaning": "upward; recall; initiate"
      },
      {
        "character": "声音",
        "pinyin": "shēngyīn",
        "meaning": "sound; voice"
      },
      {
        "character": "特别",
        "pinyin": "tèbié",
        "meaning": "special; especially"
      },
      {
        "character": "耳朵",
        "pinyin": "ěrduo",
        "meaning": "ear"
      },
      {
        "character": "脸",
        "pinyin": "liǎn",
        "meaning": "face"
      },
      {
        "character": "短",
        "pinyin": "duǎn",
        "meaning": "short (in length)"
      },
      {
        "character": "马",
        "pinyin": "mǎ",
        "meaning": "horse"
      }
    ],
    "grammar": [
      {
        "title": "Extended Directional Complement: 动词 + 出来",
        "pattern": "看 / 听 / 认 + 出来 (否定: 没...出来)",
        "explanation": "Signifies discernment or recognition through the senses: 看出来 (discern by sight), 听出来 (recognize by ear).",
        "examples": [
          {
            "chinese": "几年不见，你没看出来他是小王吗？",
            "pinyin": "Jǐ nián bú jiàn, nǐ méi kàn chūlái tā shì Xiǎo Wáng ma?",
            "english": "Not seeing him for years, didn't you recognize that he is Xiao Wang?"
          },
          {
            "chinese": "打电话时我一下子就听出他的声音来了。",
            "pinyin": "Dǎ diànhuà shí wǒ yíxiàzi jiù tīng chū tā de shēngyīn lái le.",
            "english": "When on the phone, I recognized his voice right away."
          }
        ]
      },
      {
        "title": "Recollection Complement: 想起来",
        "pattern": "想 + 起来 (否定: 没想起来 / 想不起来)",
        "explanation": "Indicates retrieving a past memory or piece of information from the mind.",
        "examples": [
          {
            "chinese": "我想起来了，那个饭店在电影院旁边！",
            "pinyin": "Wǒ xiǎng qǐlái le, nà ge fàndiàn zài diànyǐngyuàn pángbiān!",
            "english": "I remembered, that restaurant is next to the cinema!"
          },
          {
            "chinese": "对不起，我实在想不起来他的名字了。",
            "pinyin": "Duìbuqǐ, wǒ shízài xiǎng bu qǐlái tā de míngzi le.",
            "english": "Sorry, I really can't recall his name."
          }
        ]
      }
    ],
    "dialogue": [
      {
        "speaker": "小丽",
        "avatar": "👩‍🎓",
        "chinese": "小刚，你看这张老照片，左边这个剪短头发的人是谁，你没看出来吗？",
        "pinyin": "Xiǎogāng, nǐ kàn zhè zhāng lǎo zhàopiàn, zuǒbiān zhè ge jiǎn duǎn tóufa de rén shì shéi, nǐ méi kàn chūlái ma?",
        "english": "Xiaogang, look at this old photo, the person with short hair on the left, didn't you recognize who it is?"
      },
      {
        "speaker": "小刚",
        "avatar": "👨‍🎓",
        "chinese": "哈哈，这不是你中学时候的样子吗？看眼睛和圆圆的脸就能看出来！",
        "pinyin": "Hāhā, zhè bú shì nǐ zhōngxué shíhou de yàngzi ma? Kàn yǎnjing hé yuányuán de liǎn jiù néng kàn chūlái!",
        "english": "Haha, isn't this you in middle school? You can tell just by looking at the eyes and round face!"
      },
      {
        "speaker": "小丽",
        "avatar": "👩‍🎓",
        "chinese": "我想起来了，这是我们初中去内蒙古骑马时拍的照片。",
        "pinyin": "Wǒ xiǎng qǐlái le, zhè shì wǒmen chūzhōng qù Nèi Měnggǔ qí mǎ shí pāi de zhàopiàn.",
        "english": "I remember now, this photo was taken when we went horseback riding in Inner Mongolia in middle school."
      },
      {
        "speaker": "小刚",
        "avatar": "👨‍🎓",
        "chinese": "时间过得真快啊，一转眼我们都上大学了！",
        "pinyin": "Shíjiān guò de zhēn kuài a, yì zhuǎnyǎn wǒmen dōu shàng dàxué le!",
        "english": "Time flies so fast, in the blink of an eye we're already in university!"
      }
    ],
    "culture": "Reviewing old family photographs (老照片) during the Spring Festival allows multi-generational families to reminisce over the dramatic societal changes across eras.",
    "exercises": [
      {
        "question": "How do you say 'I recognized his voice'?",
        "options": [
          "我听出了他的声音。",
          "我看出了他的声音。",
          "我想了他的声音。",
          "他的声音很大。"
        ],
        "answer": 0,
        "explanation": "'听出来' signifies recognizing by ear."
      },
      {
        "question": "What does '我想起来了' mean?",
        "options": [
          "I recalled / remembered!",
          "I want to get up.",
          "I think so.",
          "I forgot."
        ],
        "answer": 0,
        "explanation": "'想起来' refers to retrieving a memory."
      }
    ]
  },
  {
    "id": "hsk3-l20",
    "level": 3,
    "lessonNumber": 20,
    "title": "我被他影响了",
    "pinyin": "Wǒ bèi tā yǐngxiǎng le",
    "english": "I Was Influenced by Him",
    "summary": "Master the passive construction with 被 (被字句), analyze formative relationships, and review comprehensive HSK 3 language milestones.",
    "vocabulary": [
      {
        "character": "被",
        "pinyin": "bèi",
        "meaning": "by (passive voice marker)"
      },
      {
        "character": "影响",
        "pinyin": "yǐngxiǎng",
        "meaning": "influence; effect; to affect"
      },
      {
        "character": "经常",
        "pinyin": "jīngcháng",
        "meaning": "often; frequently"
      },
      {
        "character": "习惯",
        "pinyin": "xíguàn",
        "meaning": "habit; custom; accustomed to"
      },
      {
        "character": "关系",
        "pinyin": "guānxi",
        "meaning": "relationship; relation"
      },
      {
        "character": "重要",
        "pinyin": "zhòngyào",
        "meaning": "important; vital"
      },
      {
        "character": "水平",
        "pinyin": "shuǐpíng",
        "meaning": "level; standard; proficiency"
      },
      {
        "character": "提高",
        "pinyin": "tígāo",
        "meaning": "to improve; raise"
      }
    ],
    "grammar": [
      {
        "title": "The Passive '被' Sentence: 受事 + 被 (+ 施事) + 动词 + 其他成分",
        "pattern": "受事主语 + 被 + (施事者) + 动词 + 结果 / 了",
        "explanation": "Shifts the receiver of an action to the subject position to indicate how it was affected by the agent.",
        "examples": [
          {
            "chinese": "桌上的蛋糕被弟弟吃了。",
            "pinyin": "Zhuō shang de dàngāo bèi dìdi chī le.",
            "english": "The cake on the table was eaten by younger brother."
          },
          {
            "chinese": "我被室友的好习惯深深影响了。",
            "pinyin": "Wǒ bèi shìyǒu de hǎo xíguàn shēnshēn yǐngxiǎng le.",
            "english": "I was deeply influenced by my roommate's good habits."
          }
        ]
      },
      {
        "title": "Expressing Improvement: 提高 + 水平",
        "pattern": "提高 + ...水平 / 成绩",
        "explanation": "'提高' is the standard verb paired with '水平' (proficiency) or '成绩' (scores) to denote advancement.",
        "examples": [
          {
            "chinese": "经过一年努力，他的汉语水平大大提高了。",
            "pinyin": "Jīngguò yì nián nǔlì, tā de hànyǔ shuǐpíng dàdà tígāo le.",
            "english": "Through a year of diligence, his Chinese proficiency greatly improved."
          },
          {
            "chinese": "好习惯对提高成绩非常重要。",
            "pinyin": "Hǎo xíguàn duì tígāo chéngjì fēicháng zhòngyào.",
            "english": "Good habits are extremely important for raising grades."
          }
        ]
      }
    ],
    "dialogue": [
      {
        "speaker": "大卫",
        "avatar": "👨‍🎓",
        "chinese": "李月，你最近每天早上跑步，汉语进步也特别快，真让人佩服！",
        "pinyin": "Lǐ Yuè, nǐ zuìjìn měitiān zǎoshang pǎobù, hànyǔ jìnbù yě tèbié kuài, zhēn ràng rén pèifú!",
        "english": "Li Yue, you jog every morning lately and your Chinese progress is so fast, truly admirable!"
      },
      {
        "speaker": "李月",
        "avatar": "👩‍🏫",
        "chinese": "其实我以前挺懒的，后来遇到了王老师，被她的自律和热情深深影响了。",
        "pinyin": "Qíshí wǒ yǐqián tǐng lǎn de, hòulái yùdào le Wáng lǎoshī, bèi tā de zìlǜ hé rèqíng shēnshēn yǐngxiǎng le.",
        "english": "Actually I used to be quite lazy, but then I met Teacher Wang and was deeply influenced by her self-discipline and enthusiasm."
      },
      {
        "speaker": "大卫",
        "avatar": "👨‍🎓",
        "chinese": "古人说'近朱者赤，近墨者黑'，好的朋友和老师对我们的生活影响太大了！",
        "pinyin": "Gǔrén shuō 'jìn zhū zhě chì, jìn mò zhě hēi', hǎo de péngyou hé lǎoshī duì wǒmen de shēnghuó yǐngxiǎng tài dà le!",
        "english": "The ancients said 'Near vermilion one turns red; near ink one turns black'—good friends and teachers influence our lives immensely!"
      },
      {
        "speaker": "李月",
        "avatar": "👩‍🏫",
        "chinese": "是啊，大家互相学习，共同提高汉语水平！",
        "pinyin": "Shì a, dàjiā hùxiāng xuéxí, gòngtóng tígāo hànyǔ shuǐpíng!",
        "english": "Yes, let's learn from one another and jointly elevate our Chinese proficiency!"
      }
    ],
    "culture": "The ancient proverb 近朱者赤，近墨者黑 (One who stays near vermilion gets stained red; one near ink gets stained black) is a cornerstone of Chinese educational philosophy, emphasizing the formative impact of environments and peers.",
    "exercises": [
      {
        "question": "Put in correct passive order: '蛋糕 (1) / 弟弟 (2) / 吃了 (3) / 被 (4)'",
        "options": [
          "1 - 4 - 2 - 3 (蛋糕被弟弟吃了)",
          "2 - 4 - 1 - 3",
          "4 - 2 - 1 - 3",
          "1 - 2 - 4 - 3"
        ],
        "answer": 0,
        "explanation": "In a '被' passive sentence: Receiver (蛋糕) + 被 + Agent (弟弟) + Verb + 了 (吃了)."
      },
      {
        "question": "How do you express 'elevate one's Chinese level'?",
        "options": [
          "提高汉语水平",
          "做好汉语水平",
          "学大汉语水平",
          "放好汉语水平"
        ],
        "answer": 0,
        "explanation": "'提高 + 水平' is the standard verb-object collocation."
      }
    ]
  }
];

export function getLessonsByLevel(level: 1 | 2 | 3): LessonEntry[] {
  return LESSONS_DATA.filter(l => l.level === level)
}

export function getLessonByIndex(level: 1 | 2 | 3, index: number): LessonEntry | undefined {
  return LESSONS_DATA.find(l => l.level === level && l.lessonNumber === index)
}

export function getLessonById(id: string): LessonEntry | undefined {
  return LESSONS_DATA.find(l => l.id === id)
}
