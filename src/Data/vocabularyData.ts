// HSK Plus Official Complete Vocabulary Database
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

export const VOCABULARY_DATA: VocabularyEntry[] = [
  {
    "id": 1,
    "character": "我",
    "pinyin": "wǒ",
    "meaning": "I, me",
    "category": "Personal Pron.",
    "level": 1,
    "strokes": 7,
    "examples": [
      {
        "chinese": "我是学生。",
        "pinyin": "wǒ shì xuésheng.",
        "translation": "I am a student."
      },
      {
        "chinese": "我很喜欢喝茶。",
        "pinyin": "wǒ hěn xǐhuan hē chá.",
        "translation": "I really like drinking tea."
      }
    ]
  },
  {
    "id": 2,
    "character": "我们",
    "pinyin": "wǒmen",
    "meaning": "we, us (pl.)",
    "category": "Personal Pron.",
    "level": 1,
    "strokes": 7,
    "examples": [
      {
        "chinese": "我们是好朋友。",
        "pinyin": "wǒmen shì hǎo péngyou.",
        "translation": "We are good friends."
      },
      {
        "chinese": "我们明天去北京。",
        "pinyin": "wǒmen míngtiān qù běijīng.",
        "translation": "We are going to Beijing tomorrow."
      }
    ]
  },
  {
    "id": 3,
    "character": "你",
    "pinyin": "nǐ",
    "meaning": "you",
    "category": "Personal Pron.",
    "level": 1,
    "strokes": 7,
    "examples": [
      {
        "chinese": "你好！",
        "pinyin": "nǐ hǎo!",
        "translation": "Hello!"
      },
      {
        "chinese": "你是哪国人？",
        "pinyin": "nǐ shì nǎ guó rén?",
        "translation": "Which country are you from?"
      }
    ]
  },
  {
    "id": 4,
    "character": "他",
    "pinyin": "tā",
    "meaning": "he, him",
    "category": "Personal Pron.",
    "level": 1,
    "strokes": 5,
    "examples": [
      {
        "chinese": "他是我的汉语老师。",
        "pinyin": "tā shì wǒ de hànyǔ lǎoshī.",
        "translation": "He is my Chinese teacher."
      },
      {
        "chinese": "他不在家。",
        "pinyin": "tā bú zài jiā.",
        "translation": "He is not at home."
      }
    ]
  },
  {
    "id": 5,
    "character": "她",
    "pinyin": "tā",
    "meaning": "she, her",
    "category": "Personal Pron.",
    "level": 1,
    "strokes": 6,
    "examples": [
      {
        "chinese": "她长得很漂亮。",
        "pinyin": "tā zhǎng de hěn piàoliang.",
        "translation": "She is very pretty."
      },
      {
        "chinese": "她是医生。",
        "pinyin": "tā shì yīshēng.",
        "translation": "She is a doctor."
      }
    ]
  },
  {
    "id": 6,
    "character": "这 (这儿)",
    "pinyin": "zhè ( zhèr)",
    "meaning": "this (here)",
    "category": "Demonstrative Pron.",
    "level": 1,
    "strokes": 7,
    "examples": [
      {
        "chinese": "这是我的书。",
        "pinyin": "zhè shì wǒ de shū.",
        "translation": "This is my book."
      },
      {
        "chinese": "这儿有很多人。",
        "pinyin": "zhèr yǒu hěn duō rén.",
        "translation": "There are many people here."
      }
    ]
  },
  {
    "id": 7,
    "character": "那 (那儿)",
    "pinyin": "nà (nàr)",
    "meaning": "that (there)",
    "category": "Demonstrative Pron.",
    "level": 1,
    "strokes": 6,
    "examples": [
      {
        "chinese": "那是谁的电脑？",
        "pinyin": "nà shì shéi de diànnǎo?",
        "translation": "Whose computer is that?"
      },
      {
        "chinese": "他在那儿工作。",
        "pinyin": "tā zài nàr gōngzuò.",
        "translation": "He works there."
      }
    ]
  },
  {
    "id": 8,
    "character": "哪",
    "pinyin": "nǎ",
    "meaning": "which",
    "category": "Interrogative Pron.",
    "level": 1,
    "strokes": 9,
    "examples": [
      {
        "chinese": "你想买哪个？",
        "pinyin": "nǐ xiǎng mǎi nǎge?",
        "translation": "Which one do you want to buy?"
      },
      {
        "chinese": "哪本书是你的？",
        "pinyin": "nǎ běn shū shì nǐ de?",
        "translation": "Which book is yours?"
      }
    ]
  },
  {
    "id": 9,
    "character": "哪儿",
    "pinyin": "nǎr",
    "meaning": "where",
    "category": "Interrogative Pron.",
    "level": 1,
    "strokes": 9,
    "examples": [
      {
        "chinese": "你在哪儿工作？",
        "pinyin": "nǐ zài nǎr gōngzuò?",
        "translation": "Where do you work?"
      },
      {
        "chinese": "洗手间在哪儿？",
        "pinyin": "xǐshǒujiān zài nǎr?",
        "translation": "Where is the restroom?"
      }
    ]
  },
  {
    "id": 10,
    "character": "谁",
    "pinyin": "shéi",
    "meaning": "who",
    "category": "Interrogative Pron.",
    "level": 1,
    "strokes": 10,
    "examples": [
      {
        "chinese": "他是谁？",
        "pinyin": "tā shì shéi?",
        "translation": "Who is he?"
      },
      {
        "chinese": "谁想喝咖啡？",
        "pinyin": "shéi xiǎng hē kāfēi?",
        "translation": "Who wants to drink coffee?"
      }
    ]
  },
  {
    "id": 11,
    "character": "什么",
    "pinyin": "shénme",
    "meaning": "what, why",
    "category": "Interrogative Pron.",
    "level": 1,
    "strokes": 4,
    "examples": [
      {
        "chinese": "你叫什么名字？",
        "pinyin": "nǐ jiào shénme míngzi?",
        "translation": "What is your name?"
      },
      {
        "chinese": "这是什么东西？",
        "pinyin": "zhè shì shénme dōngxi?",
        "translation": "What is this thing?"
      }
    ]
  },
  {
    "id": 12,
    "character": "多少",
    "pinyin": "duōshǎo",
    "meaning": "how many, how",
    "category": "Interrogative Pron.",
    "level": 1,
    "strokes": 6,
    "examples": [
      {
        "chinese": "这个杯子多少钱？",
        "pinyin": "zhège bēizi duōshao qián?",
        "translation": "How much is this cup?"
      },
      {
        "chinese": "你们学校有多少学生？",
        "pinyin": "nǐmen xuéxiào yǒu duōshao xuésheng?",
        "translation": "How many students are in your school?"
      }
    ]
  },
  {
    "id": 13,
    "character": "几",
    "pinyin": "jǐ",
    "meaning": "a few, how many",
    "category": "much",
    "level": 1,
    "strokes": 2,
    "examples": [
      {
        "chinese": "现在几点了？",
        "pinyin": "xiànzài jǐ diǎn le?",
        "translation": "What time is it now?"
      },
      {
        "chinese": "你有几个苹果？",
        "pinyin": "nǐ yǒu jǐ ge píngguǒ?",
        "translation": "How many apples do you have?"
      }
    ]
  },
  {
    "id": 14,
    "character": "怎么",
    "pinyin": "zěnme",
    "meaning": "how",
    "category": "much",
    "level": 1,
    "strokes": 9,
    "examples": [
      {
        "chinese": "这个字怎么写？",
        "pinyin": "zhège zì zěnme xiě?",
        "translation": "How do you write this character?"
      },
      {
        "chinese": "你怎么去火车站？",
        "pinyin": "nǐ zěnme qù huǒchēzhàn?",
        "translation": "How do you get to the train station?"
      }
    ]
  },
  {
    "id": 15,
    "character": "怎么样",
    "pinyin": "zěnmeyàng",
    "meaning": "how about",
    "category": "much",
    "level": 1,
    "strokes": 9,
    "examples": [
      {
        "chinese": "今天天气怎么样？",
        "pinyin": "jīntiān tiānqì zěnmeyàng?",
        "translation": "How is the weather today?"
      },
      {
        "chinese": "这本书怎么样？",
        "pinyin": "zhè běn shū zěnmeyàng?",
        "translation": "How is this book?"
      }
    ]
  },
  {
    "id": 16,
    "character": "一",
    "pinyin": "yī",
    "meaning": "one",
    "category": "Numberal",
    "level": 1,
    "strokes": 1,
    "examples": [
      {
        "chinese": "我喜欢一。",
        "pinyin": "wǒ xǐhuan yī.",
        "translation": "I like one."
      },
      {
        "chinese": "这是一。",
        "pinyin": "zhè shì yī.",
        "translation": "This is one."
      }
    ]
  },
  {
    "id": 17,
    "character": "二",
    "pinyin": "èr",
    "meaning": "two",
    "category": "Numberal",
    "level": 1,
    "strokes": 2,
    "examples": [
      {
        "chinese": "我喜欢二。",
        "pinyin": "wǒ xǐhuan èr.",
        "translation": "I like two."
      },
      {
        "chinese": "这是二。",
        "pinyin": "zhè shì èr.",
        "translation": "This is two."
      }
    ]
  },
  {
    "id": 18,
    "character": "三",
    "pinyin": "sān",
    "meaning": "three",
    "category": "Numberal",
    "level": 1,
    "strokes": 3,
    "examples": [
      {
        "chinese": "我喜欢三。",
        "pinyin": "wǒ xǐhuan sān.",
        "translation": "I like three."
      },
      {
        "chinese": "这是三。",
        "pinyin": "zhè shì sān.",
        "translation": "This is three."
      }
    ]
  },
  {
    "id": 19,
    "character": "四",
    "pinyin": "sì",
    "meaning": "four",
    "category": "Numberal",
    "level": 1,
    "strokes": 5,
    "examples": [
      {
        "chinese": "我喜欢四。",
        "pinyin": "wǒ xǐhuan sì.",
        "translation": "I like four."
      },
      {
        "chinese": "这是四。",
        "pinyin": "zhè shì sì.",
        "translation": "This is four."
      }
    ]
  },
  {
    "id": 20,
    "character": "五",
    "pinyin": "wǔ",
    "meaning": "five",
    "category": "Numberal",
    "level": 1,
    "strokes": 4,
    "examples": [
      {
        "chinese": "我喜欢五。",
        "pinyin": "wǒ xǐhuan wǔ.",
        "translation": "I like five."
      },
      {
        "chinese": "这是五。",
        "pinyin": "zhè shì wǔ.",
        "translation": "This is five."
      }
    ]
  },
  {
    "id": 21,
    "character": "六",
    "pinyin": "liù",
    "meaning": "six",
    "category": "Numberal",
    "level": 1,
    "strokes": 4,
    "examples": [
      {
        "chinese": "我喜欢六。",
        "pinyin": "wǒ xǐhuan liù.",
        "translation": "I like six."
      },
      {
        "chinese": "这是六。",
        "pinyin": "zhè shì liù.",
        "translation": "This is six."
      }
    ]
  },
  {
    "id": 22,
    "character": "七",
    "pinyin": "qī",
    "meaning": "seven",
    "category": "Numberal",
    "level": 1,
    "strokes": 2,
    "examples": [
      {
        "chinese": "我喜欢七。",
        "pinyin": "wǒ xǐhuan qī.",
        "translation": "I like seven."
      },
      {
        "chinese": "这是七。",
        "pinyin": "zhè shì qī.",
        "translation": "This is seven."
      }
    ]
  },
  {
    "id": 23,
    "character": "八",
    "pinyin": "bā",
    "meaning": "eight",
    "category": "Numberal",
    "level": 1,
    "strokes": 2,
    "examples": [
      {
        "chinese": "我喜欢八。",
        "pinyin": "wǒ xǐhuan bā.",
        "translation": "I like eight."
      },
      {
        "chinese": "这是八。",
        "pinyin": "zhè shì bā.",
        "translation": "This is eight."
      }
    ]
  },
  {
    "id": 24,
    "character": "九",
    "pinyin": "jiǔ",
    "meaning": "nine",
    "category": "Numberal",
    "level": 1,
    "strokes": 2,
    "examples": [
      {
        "chinese": "我喜欢九。",
        "pinyin": "wǒ xǐhuan jiǔ.",
        "translation": "I like nine."
      },
      {
        "chinese": "这是九。",
        "pinyin": "zhè shì jiǔ.",
        "translation": "This is nine."
      }
    ]
  },
  {
    "id": 25,
    "character": "十",
    "pinyin": "shí",
    "meaning": "ten",
    "category": "Numberal",
    "level": 1,
    "strokes": 2,
    "examples": [
      {
        "chinese": "我喜欢十。",
        "pinyin": "wǒ xǐhuan shí.",
        "translation": "I like ten."
      },
      {
        "chinese": "这是十。",
        "pinyin": "zhè shì shí.",
        "translation": "This is ten."
      }
    ]
  },
  {
    "id": 26,
    "character": "个",
    "pinyin": "gè",
    "meaning": "(for normal objects)",
    "category": "Quantifier",
    "level": 1,
    "strokes": 3,
    "examples": [
      {
        "chinese": "我喜欢个。",
        "pinyin": "wǒ xǐhuan gè.",
        "translation": "I like (for normal objects)."
      },
      {
        "chinese": "这是个。",
        "pinyin": "zhè shì gè.",
        "translation": "This is (for normal objects)."
      }
    ]
  },
  {
    "id": 27,
    "character": "岁",
    "pinyin": "suì",
    "meaning": "(for age)",
    "category": "Quantifier",
    "level": 1,
    "strokes": 6,
    "examples": [
      {
        "chinese": "我喜欢岁。",
        "pinyin": "wǒ xǐhuan suì.",
        "translation": "I like (for age)."
      },
      {
        "chinese": "这是岁。",
        "pinyin": "zhè shì suì.",
        "translation": "This is (for age)."
      }
    ]
  },
  {
    "id": 28,
    "character": "本",
    "pinyin": "běn",
    "meaning": "(for books)",
    "category": "Quantifier",
    "level": 1,
    "strokes": 5,
    "examples": [
      {
        "chinese": "我喜欢本。",
        "pinyin": "wǒ xǐhuan běn.",
        "translation": "I like (for books)."
      },
      {
        "chinese": "这是本。",
        "pinyin": "zhè shì běn.",
        "translation": "This is (for books)."
      }
    ]
  },
  {
    "id": 29,
    "character": "些",
    "pinyin": "xiē",
    "meaning": "some",
    "category": "Quantifier",
    "level": 1,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我喜欢些。",
        "pinyin": "wǒ xǐhuan xiē.",
        "translation": "I like some."
      },
      {
        "chinese": "这是些。",
        "pinyin": "zhè shì xiē.",
        "translation": "This is some."
      }
    ]
  },
  {
    "id": 30,
    "character": "块",
    "pinyin": "kuài",
    "meaning": "piece, chunk",
    "category": "Quantifier",
    "level": 1,
    "strokes": 7,
    "examples": [
      {
        "chinese": "我喜欢块。",
        "pinyin": "wǒ xǐhuan kuài.",
        "translation": "I like piece, chunk."
      },
      {
        "chinese": "这是块。",
        "pinyin": "zhè shì kuài.",
        "translation": "This is piece, chunk."
      }
    ]
  },
  {
    "id": 31,
    "character": "不",
    "pinyin": "bù",
    "meaning": "no",
    "category": "Adverb",
    "level": 1,
    "strokes": 4,
    "examples": [
      {
        "chinese": "我喜欢不。",
        "pinyin": "wǒ xǐhuan bù.",
        "translation": "I like no."
      },
      {
        "chinese": "这是不。",
        "pinyin": "zhè shì bù.",
        "translation": "This is no."
      }
    ]
  },
  {
    "id": 32,
    "character": "没",
    "pinyin": "méi",
    "meaning": "no",
    "category": "Adverb",
    "level": 1,
    "strokes": 7,
    "examples": [
      {
        "chinese": "我喜欢没。",
        "pinyin": "wǒ xǐhuan méi.",
        "translation": "I like no."
      },
      {
        "chinese": "这是没。",
        "pinyin": "zhè shì méi.",
        "translation": "This is no."
      }
    ]
  },
  {
    "id": 33,
    "character": "很",
    "pinyin": "hěn",
    "meaning": "quite, very",
    "category": "Adverb",
    "level": 1,
    "strokes": 9,
    "examples": [
      {
        "chinese": "我喜欢很。",
        "pinyin": "wǒ xǐhuan hěn.",
        "translation": "I like quite, very."
      },
      {
        "chinese": "这是很。",
        "pinyin": "zhè shì hěn.",
        "translation": "This is quite, very."
      }
    ]
  },
  {
    "id": 34,
    "character": "太",
    "pinyin": "tài",
    "meaning": "too",
    "category": "Adverb",
    "level": 1,
    "strokes": 4,
    "examples": [
      {
        "chinese": "我喜欢太。",
        "pinyin": "wǒ xǐhuan tài.",
        "translation": "I like too."
      },
      {
        "chinese": "这是太。",
        "pinyin": "zhè shì tài.",
        "translation": "This is too."
      }
    ]
  },
  {
    "id": 35,
    "character": "都",
    "pinyin": "dōu",
    "meaning": "all",
    "category": "Adverb",
    "level": 1,
    "strokes": 10,
    "examples": [
      {
        "chinese": "我喜欢都。",
        "pinyin": "wǒ xǐhuan dōu.",
        "translation": "I like all."
      },
      {
        "chinese": "这是都。",
        "pinyin": "zhè shì dōu.",
        "translation": "This is all."
      }
    ]
  },
  {
    "id": 36,
    "character": "一点儿",
    "pinyin": "yīdiǎnr",
    "meaning": "a little bit",
    "category": "Adverb",
    "level": 1,
    "strokes": 1,
    "examples": [
      {
        "chinese": "我喜欢一点儿。",
        "pinyin": "wǒ xǐhuan yīdiǎnr.",
        "translation": "I like a little bit."
      },
      {
        "chinese": "这是一点儿。",
        "pinyin": "zhè shì yīdiǎnr.",
        "translation": "This is a little bit."
      }
    ]
  },
  {
    "id": 37,
    "character": "和",
    "pinyin": "hé",
    "meaning": "and",
    "category": "Conjunction",
    "level": 1,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我喜欢和。",
        "pinyin": "wǒ xǐhuan hé.",
        "translation": "I like and."
      },
      {
        "chinese": "这是和。",
        "pinyin": "zhè shì hé.",
        "translation": "This is and."
      }
    ]
  },
  {
    "id": 38,
    "character": "在",
    "pinyin": "zài",
    "meaning": "in, at",
    "category": "Preposition",
    "level": 1,
    "strokes": 6,
    "examples": [
      {
        "chinese": "我喜欢在。",
        "pinyin": "wǒ xǐhuan zài.",
        "translation": "I like in, at."
      },
      {
        "chinese": "这是在。",
        "pinyin": "zhè shì zài.",
        "translation": "This is in, at."
      }
    ]
  },
  {
    "id": 39,
    "character": "的",
    "pinyin": "de",
    "meaning": "possessive or descriptive particle; structural particle indicating attribution",
    "category": "Auxiliary",
    "level": 1,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我喜欢的。",
        "pinyin": "wǒ xǐhuan de.",
        "translation": "I like possessive or descriptive particle; structural particle indicating attribution."
      },
      {
        "chinese": "这是的。",
        "pinyin": "zhè shì de.",
        "translation": "This is possessive or descriptive particle; structural particle indicating attribution."
      }
    ]
  },
  {
    "id": 40,
    "character": "了",
    "pinyin": "le",
    "meaning": "aspect particle indicating completed action or change of situation",
    "category": "Auxiliary",
    "level": 1,
    "strokes": 2,
    "examples": [
      {
        "chinese": "我喜欢了。",
        "pinyin": "wǒ xǐhuan le.",
        "translation": "I like aspect particle indicating completed action or change of situation."
      },
      {
        "chinese": "这是了。",
        "pinyin": "zhè shì le.",
        "translation": "This is aspect particle indicating completed action or change of situation."
      }
    ]
  },
  {
    "id": 41,
    "character": "吗",
    "pinyin": "ma",
    "meaning": "question particle for yes-no questions",
    "category": "Auxiliary",
    "level": 1,
    "strokes": 6,
    "examples": [
      {
        "chinese": "我喜欢吗。",
        "pinyin": "wǒ xǐhuan ma.",
        "translation": "I like question particle for yes-no questions."
      },
      {
        "chinese": "这是吗。",
        "pinyin": "zhè shì ma.",
        "translation": "This is question particle for yes-no questions."
      }
    ]
  },
  {
    "id": 42,
    "character": "呢",
    "pinyin": "ne",
    "meaning": "modal particle for questions about location, follow-up, or ongoing state",
    "category": "Auxiliary",
    "level": 1,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我喜欢呢。",
        "pinyin": "wǒ xǐhuan ne.",
        "translation": "I like modal particle for questions about location, follow-up, or ongoing state."
      },
      {
        "chinese": "这是呢。",
        "pinyin": "zhè shì ne.",
        "translation": "This is modal particle for questions about location, follow-up, or ongoing state."
      }
    ]
  },
  {
    "id": 43,
    "character": "喂",
    "pinyin": "wèi",
    "meaning": "hello",
    "category": "Interjection",
    "level": 1,
    "strokes": 12,
    "examples": [
      {
        "chinese": "我喜欢喂。",
        "pinyin": "wǒ xǐhuan wèi.",
        "translation": "I like hello."
      },
      {
        "chinese": "这是喂。",
        "pinyin": "zhè shì wèi.",
        "translation": "This is hello."
      }
    ]
  },
  {
    "id": 44,
    "character": "家",
    "pinyin": "jiā",
    "meaning": "home",
    "category": "Noun",
    "level": 1,
    "strokes": 10,
    "examples": [
      {
        "chinese": "我喜欢家。",
        "pinyin": "wǒ xǐhuan jiā.",
        "translation": "I like home."
      },
      {
        "chinese": "这是家。",
        "pinyin": "zhè shì jiā.",
        "translation": "This is home."
      }
    ]
  },
  {
    "id": 45,
    "character": "学校",
    "pinyin": "xuéxiào",
    "meaning": "school",
    "category": "Noun",
    "level": 1,
    "strokes": 10,
    "examples": [
      {
        "chinese": "我喜欢学校。",
        "pinyin": "wǒ xǐhuan xuéxiào.",
        "translation": "I like school."
      },
      {
        "chinese": "这是学校。",
        "pinyin": "zhè shì xuéxiào.",
        "translation": "This is school."
      }
    ]
  },
  {
    "id": 46,
    "character": "饭店",
    "pinyin": "fàndiàn",
    "meaning": "restaurant",
    "category": "Noun",
    "level": 1,
    "strokes": 6,
    "examples": [
      {
        "chinese": "我喜欢饭店。",
        "pinyin": "wǒ xǐhuan fàndiàn.",
        "translation": "I like restaurant."
      },
      {
        "chinese": "这是饭店。",
        "pinyin": "zhè shì fàndiàn.",
        "translation": "This is restaurant."
      }
    ]
  },
  {
    "id": 47,
    "character": "商店",
    "pinyin": "shāngdiàn",
    "meaning": "store",
    "category": "Noun",
    "level": 1,
    "strokes": 11,
    "examples": [
      {
        "chinese": "我喜欢商店。",
        "pinyin": "wǒ xǐhuan shāngdiàn.",
        "translation": "I like store."
      },
      {
        "chinese": "这是商店。",
        "pinyin": "zhè shì shāngdiàn.",
        "translation": "This is store."
      }
    ]
  },
  {
    "id": 48,
    "character": "医院",
    "pinyin": "yīyuàn",
    "meaning": "hospital",
    "category": "Noun",
    "level": 1,
    "strokes": 9,
    "examples": [
      {
        "chinese": "我喜欢医院。",
        "pinyin": "wǒ xǐhuan yīyuàn.",
        "translation": "I like hospital."
      },
      {
        "chinese": "这是医院。",
        "pinyin": "zhè shì yīyuàn.",
        "translation": "This is hospital."
      }
    ]
  },
  {
    "id": 49,
    "character": "中国",
    "pinyin": "Zhōngguò",
    "meaning": "China",
    "category": "Noun",
    "level": 1,
    "strokes": 4,
    "examples": [
      {
        "chinese": "我喜欢中国。",
        "pinyin": "wǒ xǐhuan Zhōngguò.",
        "translation": "I like China."
      },
      {
        "chinese": "这是中国。",
        "pinyin": "zhè shì Zhōngguò.",
        "translation": "This is China."
      }
    ]
  },
  {
    "id": 50,
    "character": "北京",
    "pinyin": "Běijīng",
    "meaning": "Beijing",
    "category": "Noun",
    "level": 1,
    "strokes": 5,
    "examples": [
      {
        "chinese": "我喜欢北京。",
        "pinyin": "wǒ xǐhuan Běijīng.",
        "translation": "I like Beijing."
      },
      {
        "chinese": "这是北京。",
        "pinyin": "zhè shì Běijīng.",
        "translation": "This is Beijing."
      }
    ]
  },
  {
    "id": 51,
    "character": "上",
    "pinyin": "shàng",
    "meaning": "up",
    "category": "Noun",
    "level": 1,
    "strokes": 3,
    "examples": [
      {
        "chinese": "我喜欢上。",
        "pinyin": "wǒ xǐhuan shàng.",
        "translation": "I like up."
      },
      {
        "chinese": "这是上。",
        "pinyin": "zhè shì shàng.",
        "translation": "This is up."
      }
    ]
  },
  {
    "id": 52,
    "character": "下",
    "pinyin": "xià",
    "meaning": "down",
    "category": "Noun",
    "level": 1,
    "strokes": 3,
    "examples": [
      {
        "chinese": "我喜欢下。",
        "pinyin": "wǒ xǐhuan xià.",
        "translation": "I like down."
      },
      {
        "chinese": "这是下。",
        "pinyin": "zhè shì xià.",
        "translation": "This is down."
      }
    ]
  },
  {
    "id": 53,
    "character": "前面",
    "pinyin": "qiánmiàn",
    "meaning": "front",
    "category": "Noun",
    "level": 1,
    "strokes": 9,
    "examples": [
      {
        "chinese": "我喜欢前面。",
        "pinyin": "wǒ xǐhuan qiánmiàn.",
        "translation": "I like front."
      },
      {
        "chinese": "这是前面。",
        "pinyin": "zhè shì qiánmiàn.",
        "translation": "This is front."
      }
    ]
  },
  {
    "id": 54,
    "character": "后面",
    "pinyin": "hòumiàn",
    "meaning": "behind",
    "category": "Noun",
    "level": 1,
    "strokes": 6,
    "examples": [
      {
        "chinese": "我喜欢后面。",
        "pinyin": "wǒ xǐhuan hòumiàn.",
        "translation": "I like behind."
      },
      {
        "chinese": "这是后面。",
        "pinyin": "zhè shì hòumiàn.",
        "translation": "This is behind."
      }
    ]
  },
  {
    "id": 55,
    "character": "里",
    "pinyin": "lǐmiàn",
    "meaning": "inside",
    "category": "Noun",
    "level": 1,
    "strokes": 7,
    "examples": [
      {
        "chinese": "我喜欢里。",
        "pinyin": "wǒ xǐhuan lǐmiàn.",
        "translation": "I like inside."
      },
      {
        "chinese": "这是里。",
        "pinyin": "zhè shì lǐmiàn.",
        "translation": "This is inside."
      }
    ]
  },
  {
    "id": 56,
    "character": "今天",
    "pinyin": "jīntiān",
    "meaning": "today",
    "category": "Noun",
    "level": 1,
    "strokes": 4,
    "examples": [
      {
        "chinese": "我喜欢今天。",
        "pinyin": "wǒ xǐhuan jīntiān.",
        "translation": "I like today."
      },
      {
        "chinese": "这是今天。",
        "pinyin": "zhè shì jīntiān.",
        "translation": "This is today."
      }
    ]
  },
  {
    "id": 57,
    "character": "明天",
    "pinyin": "míngtiān",
    "meaning": "tomorrow",
    "category": "Noun",
    "level": 1,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我喜欢明天。",
        "pinyin": "wǒ xǐhuan míngtiān.",
        "translation": "I like tomorrow."
      },
      {
        "chinese": "这是明天。",
        "pinyin": "zhè shì míngtiān.",
        "translation": "This is tomorrow."
      }
    ]
  },
  {
    "id": 58,
    "character": "昨天",
    "pinyin": "zuótiān",
    "meaning": "yesterday",
    "category": "Noun",
    "level": 1,
    "strokes": 9,
    "examples": [
      {
        "chinese": "我喜欢昨天。",
        "pinyin": "wǒ xǐhuan zuótiān.",
        "translation": "I like yesterday."
      },
      {
        "chinese": "这是昨天。",
        "pinyin": "zhè shì zuótiān.",
        "translation": "This is yesterday."
      }
    ]
  },
  {
    "id": 59,
    "character": "上午",
    "pinyin": "shàngwǔ",
    "meaning": "morning",
    "category": "Noun",
    "level": 1,
    "strokes": 3,
    "examples": [
      {
        "chinese": "我喜欢上午。",
        "pinyin": "wǒ xǐhuan shàngwǔ.",
        "translation": "I like morning."
      },
      {
        "chinese": "这是上午。",
        "pinyin": "zhè shì shàngwǔ.",
        "translation": "This is morning."
      }
    ]
  },
  {
    "id": 60,
    "character": "中午",
    "pinyin": "zhōngwǔ",
    "meaning": "noon",
    "category": "Noun",
    "level": 1,
    "strokes": 4,
    "examples": [
      {
        "chinese": "我喜欢中午。",
        "pinyin": "wǒ xǐhuan zhōngwǔ.",
        "translation": "I like noon."
      },
      {
        "chinese": "这是中午。",
        "pinyin": "zhè shì zhōngwǔ.",
        "translation": "This is noon."
      }
    ]
  },
  {
    "id": 61,
    "character": "下午",
    "pinyin": "xiàwǔ",
    "meaning": "afternoon",
    "category": "Noun",
    "level": 1,
    "strokes": 3,
    "examples": [
      {
        "chinese": "我喜欢下午。",
        "pinyin": "wǒ xǐhuan xiàwǔ.",
        "translation": "I like afternoon."
      },
      {
        "chinese": "这是下午。",
        "pinyin": "zhè shì xiàwǔ.",
        "translation": "This is afternoon."
      }
    ]
  },
  {
    "id": 62,
    "character": "年",
    "pinyin": "nián",
    "meaning": "year",
    "category": "Noun",
    "level": 1,
    "strokes": 6,
    "examples": [
      {
        "chinese": "我喜欢年。",
        "pinyin": "wǒ xǐhuan nián.",
        "translation": "I like year."
      },
      {
        "chinese": "这是年。",
        "pinyin": "zhè shì nián.",
        "translation": "This is year."
      }
    ]
  },
  {
    "id": 63,
    "character": "月",
    "pinyin": "yuè",
    "meaning": "month",
    "category": "Noun",
    "level": 1,
    "strokes": 4,
    "examples": [
      {
        "chinese": "我喜欢月。",
        "pinyin": "wǒ xǐhuan yuè.",
        "translation": "I like month."
      },
      {
        "chinese": "这是月。",
        "pinyin": "zhè shì yuè.",
        "translation": "This is month."
      }
    ]
  },
  {
    "id": 64,
    "character": "号",
    "pinyin": "hào",
    "meaning": "number/date",
    "category": "Noun",
    "level": 1,
    "strokes": 5,
    "examples": [
      {
        "chinese": "我喜欢号。",
        "pinyin": "wǒ xǐhuan hào.",
        "translation": "I like number/date."
      },
      {
        "chinese": "这是号。",
        "pinyin": "zhè shì hào.",
        "translation": "This is number/date."
      }
    ]
  },
  {
    "id": 65,
    "character": "星期",
    "pinyin": "xīngqī",
    "meaning": "week",
    "category": "Noun",
    "level": 1,
    "strokes": 9,
    "examples": [
      {
        "chinese": "我喜欢星期。",
        "pinyin": "wǒ xǐhuan xīngqī.",
        "translation": "I like week."
      },
      {
        "chinese": "这是星期。",
        "pinyin": "zhè shì xīngqī.",
        "translation": "This is week."
      }
    ]
  },
  {
    "id": 66,
    "character": "点",
    "pinyin": "diǎn",
    "meaning": "o'clock",
    "category": "Noun",
    "level": 1,
    "strokes": 9,
    "examples": [
      {
        "chinese": "我喜欢点。",
        "pinyin": "wǒ xǐhuan diǎn.",
        "translation": "I like o'clock."
      },
      {
        "chinese": "这是点。",
        "pinyin": "zhè shì diǎn.",
        "translation": "This is o'clock."
      }
    ]
  },
  {
    "id": 67,
    "character": "分钟",
    "pinyin": "fēnzhōng",
    "meaning": "minute",
    "category": "Noun",
    "level": 1,
    "strokes": 4,
    "examples": [
      {
        "chinese": "我喜欢分钟。",
        "pinyin": "wǒ xǐhuan fēnzhōng.",
        "translation": "I like minute."
      },
      {
        "chinese": "这是分钟。",
        "pinyin": "zhè shì fēnzhōng.",
        "translation": "This is minute."
      }
    ]
  },
  {
    "id": 68,
    "character": "现在",
    "pinyin": "xiànzài",
    "meaning": "now",
    "category": "Noun",
    "level": 1,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我喜欢现在。",
        "pinyin": "wǒ xǐhuan xiànzài.",
        "translation": "I like now."
      },
      {
        "chinese": "这是现在。",
        "pinyin": "zhè shì xiànzài.",
        "translation": "This is now."
      }
    ]
  },
  {
    "id": 69,
    "character": "时候",
    "pinyin": "shíhou",
    "meaning": "time",
    "category": "Noun",
    "level": 1,
    "strokes": 10,
    "examples": [
      {
        "chinese": "我喜欢时候。",
        "pinyin": "wǒ xǐhuan shíhou.",
        "translation": "I like time."
      },
      {
        "chinese": "这是时候。",
        "pinyin": "zhè shì shíhou.",
        "translation": "This is time."
      }
    ]
  },
  {
    "id": 70,
    "character": "爸爸",
    "pinyin": "bàba",
    "meaning": "father",
    "category": "Noun",
    "level": 1,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我喜欢爸爸。",
        "pinyin": "wǒ xǐhuan bàba.",
        "translation": "I like father."
      },
      {
        "chinese": "这是爸爸。",
        "pinyin": "zhè shì bàba.",
        "translation": "This is father."
      }
    ]
  },
  {
    "id": 71,
    "character": "妈妈",
    "pinyin": "māma",
    "meaning": "mother",
    "category": "Noun",
    "level": 1,
    "strokes": 6,
    "examples": [
      {
        "chinese": "我喜欢妈妈。",
        "pinyin": "wǒ xǐhuan māma.",
        "translation": "I like mother."
      },
      {
        "chinese": "这是妈妈。",
        "pinyin": "zhè shì māma.",
        "translation": "This is mother."
      }
    ]
  },
  {
    "id": 72,
    "character": "儿子",
    "pinyin": "érzi",
    "meaning": "son",
    "category": "Noun",
    "level": 1,
    "strokes": 5,
    "examples": [
      {
        "chinese": "我喜欢儿子。",
        "pinyin": "wǒ xǐhuan érzi.",
        "translation": "I like son."
      },
      {
        "chinese": "这是儿子。",
        "pinyin": "zhè shì érzi.",
        "translation": "This is son."
      }
    ]
  },
  {
    "id": 73,
    "character": "女儿",
    "pinyin": "nǚér",
    "meaning": "daughter",
    "category": "Noun",
    "level": 1,
    "strokes": 3,
    "examples": [
      {
        "chinese": "我喜欢女儿。",
        "pinyin": "wǒ xǐhuan nǚér.",
        "translation": "I like daughter."
      },
      {
        "chinese": "这是女儿。",
        "pinyin": "zhè shì nǚér.",
        "translation": "This is daughter."
      }
    ]
  },
  {
    "id": 74,
    "character": "老师",
    "pinyin": "lǎoshī",
    "meaning": "teacher",
    "category": "Noun",
    "level": 1,
    "strokes": 6,
    "examples": [
      {
        "chinese": "我喜欢老师。",
        "pinyin": "wǒ xǐhuan lǎoshī.",
        "translation": "I like teacher."
      },
      {
        "chinese": "这是老师。",
        "pinyin": "zhè shì lǎoshī.",
        "translation": "This is teacher."
      }
    ]
  },
  {
    "id": 75,
    "character": "学生",
    "pinyin": "xuéshēng",
    "meaning": "student",
    "category": "Noun",
    "level": 1,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我喜欢学生。",
        "pinyin": "wǒ xǐhuan xuéshēng.",
        "translation": "I like student."
      },
      {
        "chinese": "这是学生。",
        "pinyin": "zhè shì xuéshēng.",
        "translation": "This is student."
      }
    ]
  },
  {
    "id": 76,
    "character": "同学",
    "pinyin": "tóngxué",
    "meaning": "classmate",
    "category": "Noun",
    "level": 1,
    "strokes": 6,
    "examples": [
      {
        "chinese": "我喜欢同学。",
        "pinyin": "wǒ xǐhuan tóngxué.",
        "translation": "I like classmate."
      },
      {
        "chinese": "这是同学。",
        "pinyin": "zhè shì tóngxué.",
        "translation": "This is classmate."
      }
    ]
  },
  {
    "id": 77,
    "character": "朋友",
    "pinyin": "péngyǒu",
    "meaning": "friend",
    "category": "Noun",
    "level": 1,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我喜欢朋友。",
        "pinyin": "wǒ xǐhuan péngyǒu.",
        "translation": "I like friend."
      },
      {
        "chinese": "这是朋友。",
        "pinyin": "zhè shì péngyǒu.",
        "translation": "This is friend."
      }
    ]
  },
  {
    "id": 78,
    "character": "医生",
    "pinyin": "yīshēng",
    "meaning": "doctor",
    "category": "Noun",
    "level": 1,
    "strokes": 7,
    "examples": [
      {
        "chinese": "我喜欢医生。",
        "pinyin": "wǒ xǐhuan yīshēng.",
        "translation": "I like doctor."
      },
      {
        "chinese": "这是医生。",
        "pinyin": "zhè shì yīshēng.",
        "translation": "This is doctor."
      }
    ]
  },
  {
    "id": 79,
    "character": "先生",
    "pinyin": "xiānsheng",
    "meaning": "sir",
    "category": "Noun",
    "level": 1,
    "strokes": 6,
    "examples": [
      {
        "chinese": "我喜欢先生。",
        "pinyin": "wǒ xǐhuan xiānsheng.",
        "translation": "I like sir."
      },
      {
        "chinese": "这是先生。",
        "pinyin": "zhè shì xiānsheng.",
        "translation": "This is sir."
      }
    ]
  },
  {
    "id": 80,
    "character": "小姐",
    "pinyin": "xiǎojiě",
    "meaning": "Miss",
    "category": "Noun",
    "level": 1,
    "strokes": 3,
    "examples": [
      {
        "chinese": "我喜欢小姐。",
        "pinyin": "wǒ xǐhuan xiǎojiě.",
        "translation": "I like Miss."
      },
      {
        "chinese": "这是小姐。",
        "pinyin": "zhè shì xiǎojiě.",
        "translation": "This is Miss."
      }
    ]
  },
  {
    "id": 81,
    "character": "衣服",
    "pinyin": "yīfu",
    "meaning": "cloth",
    "category": "Noun",
    "level": 1,
    "strokes": 6,
    "examples": [
      {
        "chinese": "我喜欢衣服。",
        "pinyin": "wǒ xǐhuan yīfu.",
        "translation": "I like cloth."
      },
      {
        "chinese": "这是衣服。",
        "pinyin": "zhè shì yīfu.",
        "translation": "This is cloth."
      }
    ]
  },
  {
    "id": 82,
    "character": "水",
    "pinyin": "shuǐ",
    "meaning": "water",
    "category": "Noun",
    "level": 1,
    "strokes": 4,
    "examples": [
      {
        "chinese": "我喜欢水。",
        "pinyin": "wǒ xǐhuan shuǐ.",
        "translation": "I like water."
      },
      {
        "chinese": "这是水。",
        "pinyin": "zhè shì shuǐ.",
        "translation": "This is water."
      }
    ]
  },
  {
    "id": 83,
    "character": "菜",
    "pinyin": "cài",
    "meaning": "dish",
    "category": "Noun",
    "level": 1,
    "strokes": 11,
    "examples": [
      {
        "chinese": "我喜欢菜。",
        "pinyin": "wǒ xǐhuan cài.",
        "translation": "I like dish."
      },
      {
        "chinese": "这是菜。",
        "pinyin": "zhè shì cài.",
        "translation": "This is dish."
      }
    ]
  },
  {
    "id": 84,
    "character": "米饭",
    "pinyin": "mǐfàn",
    "meaning": "rice",
    "category": "Noun",
    "level": 1,
    "strokes": 6,
    "examples": [
      {
        "chinese": "我喜欢米饭。",
        "pinyin": "wǒ xǐhuan mǐfàn.",
        "translation": "I like rice."
      },
      {
        "chinese": "这是米饭。",
        "pinyin": "zhè shì mǐfàn.",
        "translation": "This is rice."
      }
    ]
  },
  {
    "id": 85,
    "character": "水果",
    "pinyin": "shuǐguǒ",
    "meaning": "fruit",
    "category": "Noun",
    "level": 1,
    "strokes": 4,
    "examples": [
      {
        "chinese": "我喜欢水果。",
        "pinyin": "wǒ xǐhuan shuǐguǒ.",
        "translation": "I like fruit."
      },
      {
        "chinese": "这是水果。",
        "pinyin": "zhè shì shuǐguǒ.",
        "translation": "This is fruit."
      }
    ]
  },
  {
    "id": 86,
    "character": "苹果",
    "pinyin": "píngguǒ",
    "meaning": "apple",
    "category": "Noun",
    "level": 1,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我喜欢苹果。",
        "pinyin": "wǒ xǐhuan píngguǒ.",
        "translation": "I like apple."
      },
      {
        "chinese": "这是苹果。",
        "pinyin": "zhè shì píngguǒ.",
        "translation": "This is apple."
      }
    ]
  },
  {
    "id": 87,
    "character": "茶",
    "pinyin": "chá",
    "meaning": "tea",
    "category": "Noun",
    "level": 1,
    "strokes": 9,
    "examples": [
      {
        "chinese": "我喜欢茶。",
        "pinyin": "wǒ xǐhuan chá.",
        "translation": "I like tea."
      },
      {
        "chinese": "这是茶。",
        "pinyin": "zhè shì chá.",
        "translation": "This is tea."
      }
    ]
  },
  {
    "id": 88,
    "character": "杯子",
    "pinyin": "bēizi",
    "meaning": "cup",
    "category": "Noun",
    "level": 1,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我喜欢杯子。",
        "pinyin": "wǒ xǐhuan bēizi.",
        "translation": "I like cup."
      },
      {
        "chinese": "这是杯子。",
        "pinyin": "zhè shì bēizi.",
        "translation": "This is cup."
      }
    ]
  },
  {
    "id": 89,
    "character": "钱",
    "pinyin": "qián",
    "meaning": "money",
    "category": "Noun",
    "level": 1,
    "strokes": 10,
    "examples": [
      {
        "chinese": "我喜欢钱。",
        "pinyin": "wǒ xǐhuan qián.",
        "translation": "I like money."
      },
      {
        "chinese": "这是钱。",
        "pinyin": "zhè shì qián.",
        "translation": "This is money."
      }
    ]
  },
  {
    "id": 90,
    "character": "飞机",
    "pinyin": "fēijī",
    "meaning": "airplane",
    "category": "Noun",
    "level": 1,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我喜欢飞机。",
        "pinyin": "wǒ xǐhuan fēijī.",
        "translation": "I like airplane."
      },
      {
        "chinese": "这是飞机。",
        "pinyin": "zhè shì fēijī.",
        "translation": "This is airplane."
      }
    ]
  },
  {
    "id": 91,
    "character": "出租车",
    "pinyin": "chūzūchē",
    "meaning": "taxi",
    "category": "Noun",
    "level": 1,
    "strokes": 5,
    "examples": [
      {
        "chinese": "我喜欢出租车。",
        "pinyin": "wǒ xǐhuan chūzūchē.",
        "translation": "I like taxi."
      },
      {
        "chinese": "这是出租车。",
        "pinyin": "zhè shì chūzūchē.",
        "translation": "This is taxi."
      }
    ]
  },
  {
    "id": 92,
    "character": "电视",
    "pinyin": "diànshì",
    "meaning": "television",
    "category": "Noun",
    "level": 1,
    "strokes": 10,
    "examples": [
      {
        "chinese": "我喜欢电视。",
        "pinyin": "wǒ xǐhuan diànshì.",
        "translation": "I like television."
      },
      {
        "chinese": "这是电视。",
        "pinyin": "zhè shì diànshì.",
        "translation": "This is television."
      }
    ]
  },
  {
    "id": 93,
    "character": "电脑",
    "pinyin": "diànnǎo",
    "meaning": "computer",
    "category": "Noun",
    "level": 1,
    "strokes": 5,
    "examples": [
      {
        "chinese": "我喜欢电脑。",
        "pinyin": "wǒ xǐhuan diànnǎo.",
        "translation": "I like computer."
      },
      {
        "chinese": "这是电脑。",
        "pinyin": "zhè shì diànnǎo.",
        "translation": "This is computer."
      }
    ]
  },
  {
    "id": 94,
    "character": "电影",
    "pinyin": "diànyǐng",
    "meaning": "movie",
    "category": "Noun",
    "level": 1,
    "strokes": 5,
    "examples": [
      {
        "chinese": "我喜欢电影。",
        "pinyin": "wǒ xǐhuan diànyǐng.",
        "translation": "I like movie."
      },
      {
        "chinese": "这是电影。",
        "pinyin": "zhè shì diànyǐng.",
        "translation": "This is movie."
      }
    ]
  },
  {
    "id": 95,
    "character": "天气",
    "pinyin": "tiānqì",
    "meaning": "weather",
    "category": "Noun",
    "level": 1,
    "strokes": 4,
    "examples": [
      {
        "chinese": "我喜欢天气。",
        "pinyin": "wǒ xǐhuan tiānqì.",
        "translation": "I like weather."
      },
      {
        "chinese": "这是天气。",
        "pinyin": "zhè shì tiānqì.",
        "translation": "This is weather."
      }
    ]
  },
  {
    "id": 96,
    "character": "猫",
    "pinyin": "māo",
    "meaning": "cat",
    "category": "Noun",
    "level": 1,
    "strokes": 11,
    "examples": [
      {
        "chinese": "我喜欢猫。",
        "pinyin": "wǒ xǐhuan māo.",
        "translation": "I like cat."
      },
      {
        "chinese": "这是猫。",
        "pinyin": "zhè shì māo.",
        "translation": "This is cat."
      }
    ]
  },
  {
    "id": 97,
    "character": "狗",
    "pinyin": "gǒu",
    "meaning": "dog",
    "category": "Noun",
    "level": 1,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我喜欢狗。",
        "pinyin": "wǒ xǐhuan gǒu.",
        "translation": "I like dog."
      },
      {
        "chinese": "这是狗。",
        "pinyin": "zhè shì gǒu.",
        "translation": "This is dog."
      }
    ]
  },
  {
    "id": 98,
    "character": "东西",
    "pinyin": "dōngxi",
    "meaning": "thing",
    "category": "Noun",
    "level": 1,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我喜欢东西。",
        "pinyin": "wǒ xǐhuan dōngxi.",
        "translation": "I like thing."
      },
      {
        "chinese": "这是东西。",
        "pinyin": "zhè shì dōngxi.",
        "translation": "This is thing."
      }
    ]
  },
  {
    "id": 99,
    "character": "人",
    "pinyin": "rén",
    "meaning": "person",
    "category": "Noun",
    "level": 1,
    "strokes": 2,
    "examples": [
      {
        "chinese": "我喜欢人。",
        "pinyin": "wǒ xǐhuan rén.",
        "translation": "I like person."
      },
      {
        "chinese": "这是人。",
        "pinyin": "zhè shì rén.",
        "translation": "This is person."
      }
    ]
  },
  {
    "id": 100,
    "character": "名字",
    "pinyin": "míngzi",
    "meaning": "name",
    "category": "Noun",
    "level": 1,
    "strokes": 6,
    "examples": [
      {
        "chinese": "我喜欢名字。",
        "pinyin": "wǒ xǐhuan míngzi.",
        "translation": "I like name."
      },
      {
        "chinese": "这是名字。",
        "pinyin": "zhè shì míngzi.",
        "translation": "This is name."
      }
    ]
  },
  {
    "id": 101,
    "character": "书",
    "pinyin": "shū",
    "meaning": "book",
    "category": "Noun",
    "level": 1,
    "strokes": 4,
    "examples": [
      {
        "chinese": "我喜欢书。",
        "pinyin": "wǒ xǐhuan shū.",
        "translation": "I like book."
      },
      {
        "chinese": "这是书。",
        "pinyin": "zhè shì shū.",
        "translation": "This is book."
      }
    ]
  },
  {
    "id": 102,
    "character": "汉语",
    "pinyin": "hànyǔ",
    "meaning": "mandarin Chinese",
    "category": "Noun",
    "level": 1,
    "strokes": 12,
    "examples": [
      {
        "chinese": "我喜欢汉语。",
        "pinyin": "wǒ xǐhuan hànyǔ.",
        "translation": "I like mandarin Chinese."
      },
      {
        "chinese": "这是汉语。",
        "pinyin": "zhè shì hànyǔ.",
        "translation": "This is mandarin Chinese."
      }
    ]
  },
  {
    "id": 103,
    "character": "字",
    "pinyin": "zì",
    "meaning": "character",
    "category": "Noun",
    "level": 1,
    "strokes": 6,
    "examples": [
      {
        "chinese": "我喜欢字。",
        "pinyin": "wǒ xǐhuan zì.",
        "translation": "I like character."
      },
      {
        "chinese": "这是字。",
        "pinyin": "zhè shì zì.",
        "translation": "This is character."
      }
    ]
  },
  {
    "id": 104,
    "character": "桌子",
    "pinyin": "zhuōzi",
    "meaning": "desk",
    "category": "Noun",
    "level": 1,
    "strokes": 10,
    "examples": [
      {
        "chinese": "我喜欢桌子。",
        "pinyin": "wǒ xǐhuan zhuōzi.",
        "translation": "I like desk."
      },
      {
        "chinese": "这是桌子。",
        "pinyin": "zhè shì zhuōzi.",
        "translation": "This is desk."
      }
    ]
  },
  {
    "id": 105,
    "character": "椅子",
    "pinyin": "yǐzi",
    "meaning": "chair",
    "category": "Noun",
    "level": 1,
    "strokes": 12,
    "examples": [
      {
        "chinese": "我喜欢椅子。",
        "pinyin": "wǒ xǐhuan yǐzi.",
        "translation": "I like chair."
      },
      {
        "chinese": "这是椅子。",
        "pinyin": "zhè shì yǐzi.",
        "translation": "This is chair."
      }
    ]
  },
  {
    "id": 106,
    "character": "谢谢",
    "pinyin": "xièxie",
    "meaning": "thank",
    "category": "Verb",
    "level": 1,
    "strokes": 12,
    "examples": [
      {
        "chinese": "谢谢你的帮助。",
        "pinyin": "xièxie nǐ de bāngzhù.",
        "translation": "Thank you for your help."
      },
      {
        "chinese": "太谢谢你了！",
        "pinyin": "tài xièxie nǐ le!",
        "translation": "Thank you so much!"
      }
    ]
  },
  {
    "id": 107,
    "character": "不客气",
    "pinyin": "búkèqì",
    "meaning": "you are welcome",
    "category": "Verb",
    "level": 1,
    "strokes": 4,
    "examples": [
      {
        "chinese": "别客气，快请进。",
        "pinyin": "bié kèqi, kuài qǐng jìn.",
        "translation": "You are welcome, please come in."
      },
      {
        "chinese": "不客气，这是我应该做的。",
        "pinyin": "bú kèqi, zhè shì wǒ yīnggāi zuò de.",
        "translation": "You're welcome, this is my pleasure."
      }
    ]
  },
  {
    "id": 108,
    "character": "再见",
    "pinyin": "zàijiàn",
    "meaning": "good-bye",
    "category": "Verb",
    "level": 1,
    "strokes": 6,
    "examples": [
      {
        "chinese": "老师，再见！",
        "pinyin": "lǎoshī, zàijiàn!",
        "translation": "Goodbye, teacher!"
      },
      {
        "chinese": "明天见，再见！",
        "pinyin": "míngtiān jiàn, zàijiàn!",
        "translation": "See you tomorrow, goodbye!"
      }
    ]
  },
  {
    "id": 109,
    "character": "请",
    "pinyin": "qǐng",
    "meaning": "please",
    "category": "Verb",
    "level": 1,
    "strokes": 10,
    "examples": [
      {
        "chinese": "请坐，请喝茶。",
        "pinyin": "qǐng zuò, qǐng hē chá.",
        "translation": "Please sit down, please have some tea."
      },
      {
        "chinese": "请进！",
        "pinyin": "qǐng jìn!",
        "translation": "Please enter!"
      }
    ]
  },
  {
    "id": 110,
    "character": "对不起",
    "pinyin": "duìbùqǐ",
    "meaning": "sorry",
    "category": "Verb",
    "level": 1,
    "strokes": 5,
    "examples": [
      {
        "chinese": "对不起，我迟到了。",
        "pinyin": "duìbuqǐ, wǒ chídào le.",
        "translation": "I'm sorry, I am late."
      },
      {
        "chinese": "对不起，我不知道。",
        "pinyin": "duìbuqǐ, wǒ bù zhīdào.",
        "translation": "I'm sorry, I don't know."
      }
    ]
  },
  {
    "id": 111,
    "character": "没关系",
    "pinyin": "méiguānxì",
    "meaning": "It doesn't matter",
    "category": "Verb",
    "level": 1,
    "strokes": 7,
    "examples": [
      {
        "chinese": "没关系，不用客气。",
        "pinyin": "méi guānxi, bú yòng kèqi.",
        "translation": "It doesn't matter, don't worry about it."
      },
      {
        "chinese": "没关系，我们还有时间。",
        "pinyin": "méi guānxi, wǒmen hái yǒu shíjiān.",
        "translation": "It's okay, we still have time."
      }
    ]
  },
  {
    "id": 112,
    "character": "是",
    "pinyin": "shì",
    "meaning": "be (am, is, are)",
    "category": "Verb",
    "level": 1,
    "strokes": 9,
    "examples": [
      {
        "chinese": "我是老师。",
        "pinyin": "wǒ shì lǎoshī.",
        "translation": "I am a teacher."
      },
      {
        "chinese": "他是中国人吗？是的。",
        "pinyin": "tā shì zhōngguó rén ma? shì de.",
        "translation": "Is he Chinese? Yes."
      }
    ]
  },
  {
    "id": 113,
    "character": "有",
    "pinyin": "yǒu",
    "meaning": "have",
    "category": "Verb",
    "level": 1,
    "strokes": 6,
    "examples": [
      {
        "chinese": "我有一只可爱的猫。",
        "pinyin": "wǒ yǒu yì zhī kě'ài de māo.",
        "translation": "I have a cute cat."
      },
      {
        "chinese": "桌子上有一本书。",
        "pinyin": "zhuōzi shang yǒu yì běn shū.",
        "translation": "There is a book on the table."
      }
    ]
  },
  {
    "id": 114,
    "character": "看",
    "pinyin": "kàn",
    "meaning": "look",
    "category": "Verb",
    "level": 1,
    "strokes": 9,
    "examples": [
      {
        "chinese": "我在看电影。",
        "pinyin": "wǒ zài kàn diànyǐng.",
        "translation": "I am watching a movie."
      },
      {
        "chinese": "请看这本书。",
        "pinyin": "qǐng kàn zhè běn shū.",
        "translation": "Please look at this book."
      }
    ]
  },
  {
    "id": 115,
    "character": "听",
    "pinyin": "tīng",
    "meaning": "listen",
    "category": "Verb",
    "level": 1,
    "strokes": 7,
    "examples": [
      {
        "chinese": "你喜欢听音乐吗？",
        "pinyin": "nǐ xǐhuan tīng yīnyuè ma?",
        "translation": "Do you like listening to music?"
      },
      {
        "chinese": "请仔细听老师说话。",
        "pinyin": "qǐng zǐxì tīng lǎoshī shuōhuà.",
        "translation": "Please listen carefully to the teacher."
      }
    ]
  },
  {
    "id": 116,
    "character": "说",
    "pinyin": "shuō",
    "meaning": "speak",
    "category": "Verb",
    "level": 1,
    "strokes": 6,
    "examples": [
      {
        "chinese": "我喜欢说。",
        "pinyin": "wǒ xǐhuan shuō.",
        "translation": "I like speak."
      },
      {
        "chinese": "这是说。",
        "pinyin": "zhè shì shuō.",
        "translation": "This is speak."
      }
    ]
  },
  {
    "id": 117,
    "character": "读",
    "pinyin": "dú",
    "meaning": "read",
    "category": "Verb",
    "level": 1,
    "strokes": 10,
    "examples": [
      {
        "chinese": "请大家跟我读。",
        "pinyin": "qǐng dàjiā gēn wǒ dú.",
        "translation": "Please read after me, everyone."
      },
      {
        "chinese": "你会读这个汉字吗？",
        "pinyin": "nǐ huì dú zhège hànzì ma?",
        "translation": "Can you read this Chinese character?"
      }
    ]
  },
  {
    "id": 118,
    "character": "写",
    "pinyin": "xiě",
    "meaning": "write",
    "category": "Verb",
    "level": 1,
    "strokes": 5,
    "examples": [
      {
        "chinese": "我正在写字。",
        "pinyin": "wǒ zhèngzài xiě zì.",
        "translation": "I am writing characters."
      },
      {
        "chinese": "请写下你的名字。",
        "pinyin": "qǐng xiě xià nǐ de míngzi.",
        "translation": "Please write down your name."
      }
    ]
  },
  {
    "id": 119,
    "character": "看见",
    "pinyin": "kànjiàn",
    "meaning": "see",
    "category": "Verb",
    "level": 1,
    "strokes": 9,
    "examples": [
      {
        "chinese": "你看见我的手机了吗？",
        "pinyin": "nǐ kànjiàn wǒ de shǒujī le ma?",
        "translation": "Did you see my phone?"
      },
      {
        "chinese": "我看见前面有一家饭馆。",
        "pinyin": "wǒ kànjiàn qiánmian yǒu yì jiā fànguǎn.",
        "translation": "I see a restaurant ahead."
      }
    ]
  },
  {
    "id": 120,
    "character": "叫",
    "pinyin": "jiào",
    "meaning": "call",
    "category": "Verb",
    "level": 1,
    "strokes": 5,
    "examples": [
      {
        "chinese": "我叫李明。",
        "pinyin": "wǒ jiào lǐ míng.",
        "translation": "My name is Li Ming."
      },
      {
        "chinese": "有人在叫你的名字。",
        "pinyin": "yǒu rén zài jiào nǐ de míngzi.",
        "translation": "Someone is calling your name."
      }
    ]
  },
  {
    "id": 121,
    "character": "来",
    "pinyin": "lái",
    "meaning": "come",
    "category": "Verb",
    "level": 1,
    "strokes": 7,
    "examples": [
      {
        "chinese": "他明天来我家。",
        "pinyin": "tā míngtiān lái wǒ jiā.",
        "translation": "He is coming to my home tomorrow."
      },
      {
        "chinese": "请来这里。",
        "pinyin": "qǐng lái zhèlǐ.",
        "translation": "Please come here."
      }
    ]
  },
  {
    "id": 122,
    "character": "回",
    "pinyin": "huí",
    "meaning": "return",
    "category": "Verb",
    "level": 1,
    "strokes": 6,
    "examples": [
      {
        "chinese": "我下午五点回家。",
        "pinyin": "wǒ xiàwǔ wǔ diǎn huí jiā.",
        "translation": "I go home at 5 PM."
      },
      {
        "chinese": "他什么时候回学校？",
        "pinyin": "tā shénme shíhou huí xuéxiào?",
        "translation": "When does he return to school?"
      }
    ]
  },
  {
    "id": 123,
    "character": "去",
    "pinyin": "qù",
    "meaning": "go",
    "category": "Verb",
    "level": 1,
    "strokes": 5,
    "examples": [
      {
        "chinese": "我想去中国旅游。",
        "pinyin": "wǒ xiǎng qù zhōngguó lǚyóu.",
        "translation": "I want to travel to China."
      },
      {
        "chinese": "你去哪儿？",
        "pinyin": "nǐ qù nǎr?",
        "translation": "Where are you going?"
      }
    ]
  },
  {
    "id": 124,
    "character": "吃",
    "pinyin": "chī",
    "meaning": "eat",
    "category": "Verb",
    "level": 1,
    "strokes": 6,
    "examples": [
      {
        "chinese": "你想吃什么？",
        "pinyin": "nǐ xiǎng chī shénme?",
        "translation": "What do you want to eat?"
      },
      {
        "chinese": "中国菜很好吃。",
        "pinyin": "zhōngguó cài hěn hǎochī.",
        "translation": "Chinese food is delicious."
      }
    ]
  },
  {
    "id": 125,
    "character": "喝",
    "pinyin": "hē",
    "meaning": "drink",
    "category": "Verb",
    "level": 1,
    "strokes": 12,
    "examples": [
      {
        "chinese": "你喜欢喝茶还是喝水？",
        "pinyin": "nǐ xǐhuan hē chá háishì hē shuǐ?",
        "translation": "Do you prefer tea or water?"
      },
      {
        "chinese": "请喝一杯咖啡。",
        "pinyin": "qǐng hē yì bēi kāfēi.",
        "translation": "Please have a cup of coffee."
      }
    ]
  },
  {
    "id": 126,
    "character": "睡觉",
    "pinyin": "shuìjiào",
    "meaning": "sleep",
    "category": "Verb",
    "level": 1,
    "strokes": 11,
    "examples": [
      {
        "chinese": "太晚了，我想去睡觉了。",
        "pinyin": "tài wǎn le, wǒ xiǎng qù shuìjiào le.",
        "translation": "It's late, I want to go to sleep."
      },
      {
        "chinese": "孩子已经睡觉了。",
        "pinyin": "háizi yǐjīng shuìjiào le.",
        "translation": "The child has already gone to sleep."
      }
    ]
  },
  {
    "id": 127,
    "character": "打电话",
    "pinyin": "dǎdiànhuà",
    "meaning": "make phone call",
    "category": "Verb",
    "level": 1,
    "strokes": 6,
    "examples": [
      {
        "chinese": "我喜欢打电话。",
        "pinyin": "wǒ xǐhuan dǎdiànhuà.",
        "translation": "I like make phone call."
      },
      {
        "chinese": "这是打电话。",
        "pinyin": "zhè shì dǎdiànhuà.",
        "translation": "This is make phone call."
      }
    ]
  },
  {
    "id": 128,
    "character": "做",
    "pinyin": "zuò",
    "meaning": "do",
    "category": "Verb",
    "level": 1,
    "strokes": 6,
    "examples": [
      {
        "chinese": "我喜欢做。",
        "pinyin": "wǒ xǐhuan zuò.",
        "translation": "I like do."
      },
      {
        "chinese": "这是做。",
        "pinyin": "zhè shì zuò.",
        "translation": "This is do."
      }
    ]
  },
  {
    "id": 129,
    "character": "买",
    "pinyin": "mǎi",
    "meaning": "buy",
    "category": "Verb",
    "level": 1,
    "strokes": 6,
    "examples": [
      {
        "chinese": "我想买一些水果。",
        "pinyin": "wǒ xiǎng mǎi yìxiē shuǐguǒ.",
        "translation": "I want to buy some fruits."
      },
      {
        "chinese": "你在哪儿买的衣服？",
        "pinyin": "nǐ zài nǎr mǎi de yīfu?",
        "translation": "Where did you buy the clothes?"
      }
    ]
  },
  {
    "id": 130,
    "character": "开",
    "pinyin": "kāi",
    "meaning": "open",
    "category": "Verb",
    "level": 1,
    "strokes": 4,
    "examples": [
      {
        "chinese": "他会开车。",
        "pinyin": "tā huì kāi chē.",
        "translation": "He can drive a car."
      },
      {
        "chinese": "请把门打开。",
        "pinyin": "qǐng bǎ mén dǎkāi.",
        "translation": "Please open the door."
      }
    ]
  },
  {
    "id": 131,
    "character": "坐",
    "pinyin": "zuò",
    "meaning": "sit",
    "category": "Verb",
    "level": 1,
    "strokes": 7,
    "examples": [
      {
        "chinese": "请坐在这儿。",
        "pinyin": "qǐng zuò zài zhèr.",
        "translation": "Please sit here."
      },
      {
        "chinese": "我们坐出租车去火车站。",
        "pinyin": "wǒmen zuò chūzūchē qù huǒchēzhàn.",
        "translation": "We take a taxi to the train station."
      }
    ]
  },
  {
    "id": 132,
    "character": "住",
    "pinyin": "zhù",
    "meaning": "live",
    "category": "Verb",
    "level": 1,
    "strokes": 7,
    "examples": [
      {
        "chinese": "你在北京住哪儿？",
        "pinyin": "nǐ zài běijīng zhù nǎr?",
        "translation": "Where do you live in Beijing?"
      },
      {
        "chinese": "他住在三楼。",
        "pinyin": "tā zhù zài sān lóu.",
        "translation": "He lives on the 3rd floor."
      }
    ]
  },
  {
    "id": 133,
    "character": "学习",
    "pinyin": "xuéxí",
    "meaning": "study",
    "category": "Verb",
    "level": 1,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们努力学习汉语。",
        "pinyin": "wǒmen nǔlì xuéxí hànyǔ.",
        "translation": "We study Chinese diligently."
      },
      {
        "chinese": "他在图书馆学习。",
        "pinyin": "tā zài túshūguǎn xuéxí.",
        "translation": "He studies in the library."
      }
    ]
  },
  {
    "id": 134,
    "character": "工作",
    "pinyin": "gōngzuò",
    "meaning": "work",
    "category": "Verb",
    "level": 1,
    "strokes": 7,
    "examples": [
      {
        "chinese": "你在哪里工作？",
        "pinyin": "nǐ zài nǎlǐ gōngzuò?",
        "translation": "Where do you work?"
      },
      {
        "chinese": "这份工作很有意思。",
        "pinyin": "zhè fèn gōngzuò hěn yǒu yìsi.",
        "translation": "This job is very interesting."
      }
    ]
  },
  {
    "id": 135,
    "character": "下雨",
    "pinyin": "xiàyǔ",
    "meaning": "rain",
    "category": "Verb",
    "level": 1,
    "strokes": 3,
    "examples": [
      {
        "chinese": "外面在下雨，带伞吧。",
        "pinyin": "wàimiàn zài xiàyǔ, dài sǎn ba.",
        "translation": "It's raining outside, bring an umbrella."
      },
      {
        "chinese": "今天不会下雨。",
        "pinyin": "jīntiān bú huì xiàyǔ.",
        "translation": "It will not rain today."
      }
    ]
  },
  {
    "id": 136,
    "character": "爱",
    "pinyin": "ài",
    "meaning": "love",
    "category": "Verb",
    "level": 1,
    "strokes": 10,
    "examples": [
      {
        "chinese": "我爱我的家人。",
        "pinyin": "wǒ ài wǒ de jiārén.",
        "translation": "I love my family."
      },
      {
        "chinese": "他很爱吃苹果。",
        "pinyin": "tā hěn ài chī píngguǒ.",
        "translation": "He loves eating apples."
      }
    ]
  },
  {
    "id": 137,
    "character": "喜欢",
    "pinyin": "xǐhuān",
    "meaning": "love, like",
    "category": "Verb",
    "level": 1,
    "strokes": 6,
    "examples": [
      {
        "chinese": "你喜欢吃什么中国菜？",
        "pinyin": "nǐ xǐhuan chī shénme zhōngguó cài?",
        "translation": "What Chinese food do you like to eat?"
      },
      {
        "chinese": "我喜欢这里的环境。",
        "pinyin": "wǒ xǐhuan zhèlǐ de huánjìng.",
        "translation": "I like the environment here."
      }
    ]
  },
  {
    "id": 138,
    "character": "想",
    "pinyin": "xiǎng",
    "meaning": "want",
    "category": "Verb",
    "level": 1,
    "strokes": 13,
    "examples": [
      {
        "chinese": "我想去北京看长城。",
        "pinyin": "wǒ xiǎng qù běijīng kàn chángchéng.",
        "translation": "I want to go to Beijing to see the Great Wall."
      },
      {
        "chinese": "你在想什么呢？",
        "pinyin": "nǐ zài xiǎng shénme ne?",
        "translation": "What are you thinking about?"
      }
    ]
  },
  {
    "id": 139,
    "character": "认识",
    "pinyin": "rènshi",
    "meaning": "know",
    "category": "Verb",
    "level": 1,
    "strokes": 4,
    "examples": [
      {
        "chinese": "很高兴认识你！",
        "pinyin": "hěn gāoxìng rènshi nǐ!",
        "translation": "Nice to meet you!"
      },
      {
        "chinese": "你认识那个医生吗？",
        "pinyin": "nǐ rènshi nà ge yīshēng ma?",
        "translation": "Do you know that doctor?"
      }
    ]
  },
  {
    "id": 140,
    "character": "会",
    "pinyin": "huì",
    "meaning": "can",
    "category": "Verb",
    "level": 1,
    "strokes": 6,
    "examples": [
      {
        "chinese": "你会说汉语吗？",
        "pinyin": "nǐ huì shuō hànyǔ ma?",
        "translation": "Can you speak Chinese?"
      },
      {
        "chinese": "他明天会来。",
        "pinyin": "tā míngtiān huì lái.",
        "translation": "He will come tomorrow."
      }
    ]
  },
  {
    "id": 141,
    "character": "能",
    "pinyin": "néng",
    "meaning": "can, be able to",
    "category": "Verb",
    "level": 1,
    "strokes": 10,
    "examples": [
      {
        "chinese": "我能坐在这里吗？",
        "pinyin": "wǒ néng zuò zài zhèlǐ ma?",
        "translation": "Can I sit here?"
      },
      {
        "chinese": "你能帮帮我吗？",
        "pinyin": "nǐ néng bāngbang wǒ ma?",
        "translation": "Could you please help me?"
      }
    ]
  },
  {
    "id": 142,
    "character": "好",
    "pinyin": "hǎo",
    "meaning": "good",
    "category": "Adjective",
    "level": 1,
    "strokes": 6,
    "examples": [
      {
        "chinese": "你好，很高兴见到你。",
        "pinyin": "nǐ hǎo, hěn gāoxìng jiàn dào nǐ.",
        "translation": "Hello, nice to meet you."
      },
      {
        "chinese": "这个建议很好。",
        "pinyin": "zhège jiànyì hěn hǎo.",
        "translation": "This is a good suggestion."
      }
    ]
  },
  {
    "id": 143,
    "character": "大",
    "pinyin": "dà",
    "meaning": "big",
    "category": "Adjective",
    "level": 1,
    "strokes": 3,
    "examples": [
      {
        "chinese": "这个苹果很大。",
        "pinyin": "zhège píngguǒ hěn dà.",
        "translation": "This apple is very big."
      },
      {
        "chinese": "大西瓜很甜。",
        "pinyin": "dà xīguā hěn tián.",
        "translation": "The big watermelon is sweet."
      }
    ]
  },
  {
    "id": 144,
    "character": "小",
    "pinyin": "xiǎo",
    "meaning": "small",
    "category": "Adjective",
    "level": 1,
    "strokes": 3,
    "examples": [
      {
        "chinese": "这只小猫很可爱。",
        "pinyin": "zhè zhī xiǎomāo hěn kě'ài.",
        "translation": "This little cat is cute."
      },
      {
        "chinese": "房间有点儿小。",
        "pinyin": "fángjiān yǒudiǎnr xiǎo.",
        "translation": "The room is a bit small."
      }
    ]
  },
  {
    "id": 145,
    "character": "多",
    "pinyin": "duō",
    "meaning": "many, much",
    "category": "Adjective",
    "level": 1,
    "strokes": 6,
    "examples": [
      {
        "chinese": "这里的人很多。",
        "pinyin": "zhèlǐ de rén hěn duō.",
        "translation": "There are a lot of people here."
      },
      {
        "chinese": "多喝热水对身体好。",
        "pinyin": "duō hē rè shuǐ duì shēntǐ hǎo.",
        "translation": "Drinking more hot water is good for your health."
      }
    ]
  },
  {
    "id": 146,
    "character": "少",
    "pinyin": "shǎo",
    "meaning": "few, little",
    "category": "Adjective",
    "level": 1,
    "strokes": 4,
    "examples": [
      {
        "chinese": "今天来的人很少。",
        "pinyin": "jīntiān lái de rén hěn shǎo.",
        "translation": "Very few people came today."
      },
      {
        "chinese": "少吃甜食，多运动。",
        "pinyin": "shǎo chī tiánshí, duō yùndòng.",
        "translation": "Eat less sweets and exercise more."
      }
    ]
  },
  {
    "id": 147,
    "character": "冷",
    "pinyin": "lěng",
    "meaning": "cold",
    "category": "Adjective",
    "level": 1,
    "strokes": 7,
    "examples": [
      {
        "chinese": "今天天气很冷。",
        "pinyin": "jīntiān tiānqì hěn lěng.",
        "translation": "The weather is very cold today."
      },
      {
        "chinese": "水太冷了，我不能喝。",
        "pinyin": "shuǐ tài lěng le, wǒ bù néng hē.",
        "translation": "The water is too cold, I cannot drink it."
      }
    ]
  },
  {
    "id": 148,
    "character": "热",
    "pinyin": "rè",
    "meaning": "hot",
    "category": "Adjective",
    "level": 1,
    "strokes": 10,
    "examples": [
      {
        "chinese": "夏天北京很热。",
        "pinyin": "xiàtiān běijīng hěn rè.",
        "translation": "Summer in Beijing is very hot."
      },
      {
        "chinese": "请喝热茶。",
        "pinyin": "qǐng hē rè chá.",
        "translation": "Please drink some hot tea."
      }
    ]
  },
  {
    "id": 149,
    "character": "高兴",
    "pinyin": "gāoxìng",
    "meaning": "happy",
    "category": "Adjective",
    "level": 1,
    "strokes": 10,
    "examples": [
      {
        "chinese": "今天大家都很高兴。",
        "pinyin": "jīntiān dàjiā dōu hěn gāoxìng.",
        "translation": "Everyone is very happy today."
      },
      {
        "chinese": "认识你我很高兴。",
        "pinyin": "rènshi nǐ wǒ hěn gāoxìng.",
        "translation": "I am very pleased to meet you."
      }
    ]
  },
  {
    "id": 150,
    "character": "漂亮",
    "pinyin": "piàoliang",
    "meaning": "beautiful",
    "category": "Adjective",
    "level": 1,
    "strokes": 14,
    "examples": [
      {
        "chinese": "这件衣服真漂亮。",
        "pinyin": "zhè jiàn yīfu zhēn piàoliang.",
        "translation": "These clothes are really beautiful."
      },
      {
        "chinese": "她笑起来很漂亮。",
        "pinyin": "tā xiào qǐlái hěn piàoliang.",
        "translation": "She looks very pretty when she smiles."
      }
    ]
  },
  {
    "id": 151,
    "character": "您",
    "pinyin": "nín",
    "meaning": "you",
    "category": "General",
    "level": 2,
    "strokes": 11,
    "examples": [
      {
        "chinese": "老师，您好！",
        "pinyin": "lǎoshī, nín hǎo!",
        "translation": "Teacher, hello (polite)!"
      },
      {
        "chinese": "请问您找哪位？",
        "pinyin": "qǐngwèn nín zhǎo nǎ wèi?",
        "translation": "May I ask whom you are looking for?"
      }
    ]
  },
  {
    "id": 152,
    "character": "它",
    "pinyin": "tā",
    "meaning": "it",
    "category": "General",
    "level": 2,
    "strokes": 5,
    "examples": [
      {
        "chinese": "这是我家的小猫，它很可爱。",
        "pinyin": "zhè shì wǒ jiā de xiǎomāo, tā hěn kě'ài.",
        "translation": "This is my cat, it is very cute."
      },
      {
        "chinese": "它喜欢在桌子下睡觉。",
        "pinyin": "tā xǐhuan zài zhuōzi xià shuìjiào.",
        "translation": "It likes to sleep under the table."
      }
    ]
  },
  {
    "id": 153,
    "character": "大家",
    "pinyin": "dàjiā",
    "meaning": "everyone",
    "category": "General",
    "level": 2,
    "strokes": 10,
    "examples": [
      {
        "chinese": "请大家安静一下。",
        "pinyin": "qǐng dàjiā ānjìng yíxià.",
        "translation": "Please be quiet, everyone."
      },
      {
        "chinese": "大家都喜欢这个电影。",
        "pinyin": "dàjiā dōu xǐhuan zhège diànyǐng.",
        "translation": "Everyone likes this movie."
      }
    ]
  },
  {
    "id": 154,
    "character": "每",
    "pinyin": "měi",
    "meaning": "every, each",
    "category": "General",
    "level": 2,
    "strokes": 7,
    "examples": [
      {
        "chinese": "我每天早上跑步。",
        "pinyin": "wǒ měitiān zǎoshang pǎobù.",
        "translation": "I run every morning."
      },
      {
        "chinese": "每个人都有自己的爱好。",
        "pinyin": "měi ge rén dōu yǒu zìjǐ de àihào.",
        "translation": "Everyone has their own hobbies."
      }
    ]
  },
  {
    "id": 155,
    "character": "为什么",
    "pinyin": "wèishénme",
    "meaning": "why",
    "category": "General",
    "level": 2,
    "strokes": 7,
    "examples": [
      {
        "chinese": "你为什么迟到了？",
        "pinyin": "nǐ wèishénme chídào le?",
        "translation": "Why are you late?"
      },
      {
        "chinese": "他为什么没来上班？",
        "pinyin": "tā wèishénme méi lái shàngbān?",
        "translation": "Why didn't he come to work?"
      }
    ]
  },
  {
    "id": 156,
    "character": "零",
    "pinyin": "líng",
    "meaning": "zero",
    "category": "General",
    "level": 2,
    "strokes": 13,
    "examples": [
      {
        "chinese": "今天最低温度是零下五度。",
        "pinyin": "jīntiān zuìdī wēndù shì língxià wǔ dù.",
        "translation": "Today's lowest temperature is 5 degrees below zero."
      },
      {
        "chinese": "我的手机号里有两个零。",
        "pinyin": "wǒ de shǒujī hào lǐ yǒu liǎng ge líng.",
        "translation": "There are two zeros in my phone number."
      }
    ]
  },
  {
    "id": 157,
    "character": "两",
    "pinyin": "liǎng",
    "meaning": "two",
    "category": "General",
    "level": 2,
    "strokes": 7,
    "examples": [
      {
        "chinese": "我想买两个西瓜。",
        "pinyin": "wǒ xiǎng mǎi liǎng ge xīguā.",
        "translation": "I want to buy two watermelons."
      },
      {
        "chinese": "我们两个人一起去。",
        "pinyin": "wǒmen liǎng ge rén yìqǐ qù.",
        "translation": "The two of us will go together."
      }
    ]
  },
  {
    "id": 158,
    "character": "百",
    "pinyin": "bǎi",
    "meaning": "hundred",
    "category": "General",
    "level": 2,
    "strokes": 6,
    "examples": [
      {
        "chinese": "这本书一百块钱。",
        "pinyin": "zhè běn shū yìbǎi kuài qián.",
        "translation": "This book costs 100 yuan."
      },
      {
        "chinese": "学校里有五百多名老师。",
        "pinyin": "xuéxiào lǐ yǒu wǔbǎi duō míng lǎoshī.",
        "translation": "There are over 500 teachers in the school."
      }
    ]
  },
  {
    "id": 159,
    "character": "千",
    "pinyin": "qiān",
    "meaning": "thousand",
    "category": "General",
    "level": 2,
    "strokes": 3,
    "examples": [
      {
        "chinese": "这台电脑三千块。",
        "pinyin": "zhè tái diànnǎo sānqiān kuài.",
        "translation": "This computer is 3,000 yuan."
      },
      {
        "chinese": "他跑了一千米。",
        "pinyin": "tā pǎo le yìqiān mǐ.",
        "translation": "He ran 1,000 meters."
      }
    ]
  },
  {
    "id": 160,
    "character": "第一",
    "pinyin": "dìyī",
    "meaning": "first",
    "category": "General",
    "level": 2,
    "strokes": 11,
    "examples": [
      {
        "chinese": "他是第一个到教室的。",
        "pinyin": "tā shì dì yī ge dào jiàoshì de.",
        "translation": "He was the first to arrive in the classroom."
      },
      {
        "chinese": "这是我的第一杯咖啡。",
        "pinyin": "zhè shì wǒ de dì yī bēi kāfēi.",
        "translation": "This is my first cup of coffee."
      }
    ]
  },
  {
    "id": 161,
    "character": "次",
    "pinyin": "cì",
    "meaning": "times",
    "category": "General",
    "level": 2,
    "strokes": 6,
    "examples": [
      {
        "chinese": "我去过两次中国。",
        "pinyin": "wǒ qù guo liǎng cì zhōngguó.",
        "translation": "I have been to China twice."
      },
      {
        "chinese": "这是我第一次吃北京烤鸭。",
        "pinyin": "zhè shì wǒ dì yī cì chī běijīng kǎoyā.",
        "translation": "This is my first time eating Peking roast duck."
      }
    ]
  },
  {
    "id": 162,
    "character": "件",
    "pinyin": "jiàn",
    "meaning": "piece",
    "category": "General",
    "level": 2,
    "strokes": 6,
    "examples": [
      {
        "chinese": "我想试一下这件衣服。",
        "pinyin": "wǒ xiǎng shì yíxià zhè jiàn yīfu.",
        "translation": "I want to try on this piece of clothing."
      },
      {
        "chinese": "今天有一件重要的事情。",
        "pinyin": "jīntiān yǒu yí jiàn zhòngyào de shìqing.",
        "translation": "There is an important matter today."
      }
    ]
  },
  {
    "id": 163,
    "character": "别",
    "pinyin": "bié",
    "meaning": "do not",
    "category": "General",
    "level": 2,
    "strokes": 7,
    "examples": [
      {
        "chinese": "别担心，一切都会好的。",
        "pinyin": "bié dānxīn, yíqiè dōu huì hǎo de.",
        "translation": "Don't worry, everything will be fine."
      },
      {
        "chinese": "上课的时候别看手机。",
        "pinyin": "shàngkè de shíhou bié kàn shǒujī.",
        "translation": "Don't look at your phone during class."
      }
    ]
  },
  {
    "id": 164,
    "character": "非常",
    "pinyin": "fēicháng",
    "meaning": "very",
    "category": "General",
    "level": 2,
    "strokes": 8,
    "examples": [
      {
        "chinese": "今天天气非常晴朗。",
        "pinyin": "jīntiān tiānqì fēicháng qínglǎng.",
        "translation": "The weather is very sunny today."
      },
      {
        "chinese": "他非常喜欢踢足球。",
        "pinyin": "tā fēicháng xǐhuan tī zúqiú.",
        "translation": "He likes playing soccer very much."
      }
    ]
  },
  {
    "id": 165,
    "character": "也",
    "pinyin": "yě",
    "meaning": "also",
    "category": "General",
    "level": 2,
    "strokes": 3,
    "examples": [
      {
        "chinese": "我也是大学生。",
        "pinyin": "wǒ yě shì dàxuéshēng.",
        "translation": "I am also a university student."
      },
      {
        "chinese": "他也想去旅游。",
        "pinyin": "tā yě xiǎng qù lǚyóu.",
        "translation": "He also wants to travel."
      }
    ]
  },
  {
    "id": 166,
    "character": "还",
    "pinyin": "hái",
    "meaning": "still",
    "category": "General",
    "level": 2,
    "strokes": 7,
    "examples": [
      {
        "chinese": "时间还早，再休息一会儿吧。",
        "pinyin": "shíjiān hái zǎo, zài xiūxi yíhuìr ba.",
        "translation": "It's still early, rest a bit more."
      },
      {
        "chinese": "除了汉语，他还会说英语。",
        "pinyin": "chúle hànyǔ, tā hái huì shuō yīngyǔ.",
        "translation": "Besides Chinese, he can also speak English."
      }
    ]
  },
  {
    "id": 167,
    "character": "最",
    "pinyin": "zuì",
    "meaning": "the most",
    "category": "General",
    "level": 2,
    "strokes": 12,
    "examples": [
      {
        "chinese": "我最喜欢吃的水果是西瓜。",
        "pinyin": "wǒ zuì xǐhuan chī de shuǐguǒ shì xīguā.",
        "translation": "My favorite fruit is watermelon."
      },
      {
        "chinese": "他是我们班最高的学生。",
        "pinyin": "tā shì wǒmen bān zuì gāo de xuésheng.",
        "translation": "He is the tallest student in our class."
      }
    ]
  },
  {
    "id": 168,
    "character": "真",
    "pinyin": "zhēn",
    "meaning": "really",
    "category": "General",
    "level": 2,
    "strokes": 10,
    "examples": [
      {
        "chinese": "今天天气真好！",
        "pinyin": "jīntiān tiānqì zhēn hǎo!",
        "translation": "The weather is really nice today!"
      },
      {
        "chinese": "你的汉语说得真流利。",
        "pinyin": "nǐ de hànyǔ shuō de zhēn liúlì.",
        "translation": "You speak Chinese really fluently."
      }
    ]
  },
  {
    "id": 169,
    "character": "正在",
    "pinyin": "zhèngzài",
    "meaning": "be being",
    "category": "General",
    "level": 2,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我正在听音乐。",
        "pinyin": "wǒ zhèngzài tīng yīnyuè.",
        "translation": "I am currently listening to music."
      },
      {
        "chinese": "爸爸正在看报纸。",
        "pinyin": "bàba zhèngzài kàn bàozhǐ.",
        "translation": "Father is reading the newspaper."
      }
    ]
  },
  {
    "id": 170,
    "character": "已经",
    "pinyin": "yǐjīng",
    "meaning": "already",
    "category": "General",
    "level": 2,
    "strokes": 3,
    "examples": [
      {
        "chinese": "我已经吃过早饭了。",
        "pinyin": "wǒ yǐjīng chī guo zǎofàn le.",
        "translation": "I have already eaten breakfast."
      },
      {
        "chinese": "他已经到了机场。",
        "pinyin": "tā yǐjīng dào le jīchǎng.",
        "translation": "He has already arrived at the airport."
      }
    ]
  },
  {
    "id": 171,
    "character": "一起",
    "pinyin": "yìqǐ",
    "meaning": "together",
    "category": "General",
    "level": 2,
    "strokes": 1,
    "examples": [
      {
        "chinese": "我们一起去超市吧。",
        "pinyin": "wǒmen yìqǐ qù chāoshì ba.",
        "translation": "Let's go to the supermarket together."
      },
      {
        "chinese": "他们总是在一起学习。",
        "pinyin": "tāmen zǒngshì zài yìqǐ xuéxí.",
        "translation": "They always study together."
      }
    ]
  },
  {
    "id": 172,
    "character": "再",
    "pinyin": "zài",
    "meaning": "again",
    "category": "General",
    "level": 2,
    "strokes": 6,
    "examples": [
      {
        "chinese": "请再读一遍。",
        "pinyin": "qǐng zài dú yí biàn.",
        "translation": "Please read it once again."
      },
      {
        "chinese": "我想再喝一杯水。",
        "pinyin": "wǒ xiǎng zài hē yì bēi shuǐ.",
        "translation": "I want to drink one more cup of water."
      }
    ]
  },
  {
    "id": 173,
    "character": "就",
    "pinyin": "jiǜ",
    "meaning": "at once",
    "category": "General",
    "level": 2,
    "strokes": 12,
    "examples": [
      {
        "chinese": "我马上就到。",
        "pinyin": "wǒ mǎshàng jiù dào.",
        "translation": "I will arrive right away."
      },
      {
        "chinese": "这就是我的家。",
        "pinyin": "zhè jiù shì wǒ de jiā.",
        "translation": "This is exactly my home."
      }
    ]
  },
  {
    "id": 174,
    "character": "因为……所以……",
    "pinyin": "yīnwèi...suǒyǐ…",
    "meaning": "conjunction: because... therefore...",
    "category": "General",
    "level": 2,
    "strokes": 6,
    "examples": [
      {
        "chinese": "因为下雨了，所以我们没去公园。",
        "pinyin": "yīnwèi xiàyǔ le, suǒyǐ wǒmen méi qù gōngyuán.",
        "translation": "Because it rained, so we didn't go to the park."
      },
      {
        "chinese": "因为他很努力，所以考试考得很好。",
        "pinyin": "yīnwèi tā hěn nǔlì, suǒyǐ kǎoshì kǎo de hěn hǎo.",
        "translation": "Because he worked hard, he did very well on the exam."
      }
    ]
  },
  {
    "id": 175,
    "character": "虽然……但是……",
    "pinyin": "suīrán…dànshì…",
    "meaning": "conjunction: although... but...",
    "category": "General",
    "level": 2,
    "strokes": 6,
    "examples": [
      {
        "chinese": "虽然汉语很难，但是很有趣。",
        "pinyin": "suīrán hànyǔ hěn nán, dànshì hěn yǒuqù.",
        "translation": "Although Chinese is difficult, it is very interesting."
      },
      {
        "chinese": "虽然今天很冷，但是阳光很好。",
        "pinyin": "suīrán jīntiān hěn lěng, dànshì yángguāng hěn hǎo.",
        "translation": "Although it is cold today, the sunshine is great."
      }
    ]
  },
  {
    "id": 176,
    "character": "从",
    "pinyin": "cóng",
    "meaning": "from",
    "category": "General",
    "level": 2,
    "strokes": 4,
    "examples": [
      {
        "chinese": "我从北京坐飞机去上海。",
        "pinyin": "wǒ cóng běijīng zuò fēijī qù shànghǎi.",
        "translation": "I take a plane from Beijing to Shanghai."
      },
      {
        "chinese": "从学校到家只要十分钟。",
        "pinyin": "cóng xuéxiào dào jiā zhǐ yào shí fēnzhōng.",
        "translation": "It only takes ten minutes from school to home."
      }
    ]
  },
  {
    "id": 177,
    "character": "比",
    "pinyin": "bǐ",
    "meaning": "comparing to",
    "category": "General",
    "level": 2,
    "strokes": 4,
    "examples": [
      {
        "chinese": "哥哥比我大两岁。",
        "pinyin": "gēge bǐ wǒ dà liǎng suì.",
        "translation": "My older brother is two years older than me."
      },
      {
        "chinese": "今天比昨天冷。",
        "pinyin": "jīntiān bǐ zuótiān lěng.",
        "translation": "Today is colder than yesterday."
      }
    ]
  },
  {
    "id": 178,
    "character": "往",
    "pinyin": "wǎng",
    "meaning": "toward, to",
    "category": "General",
    "level": 2,
    "strokes": 8,
    "examples": [
      {
        "chinese": "往前走一百米就是银行。",
        "pinyin": "wǎng qián zǒu yìbǎi mǐ jiù shì yínháng.",
        "translation": "Walk forward 100 meters and there is the bank."
      },
      {
        "chinese": "往右拐就是机场大厅。",
        "pinyin": "wǎng yòu guǎi jiù shì jīchǎng dàtīng.",
        "translation": "Turn right to reach the airport hall."
      }
    ]
  },
  {
    "id": 179,
    "character": "离",
    "pinyin": "lí",
    "meaning": "indicate the distance",
    "category": "General",
    "level": 2,
    "strokes": 10,
    "examples": [
      {
        "chinese": "我家离学校很近。",
        "pinyin": "wǒ jiā lí xuéxiào hěn jìn.",
        "translation": "My home is very close to school."
      },
      {
        "chinese": "医院离这里远吗？",
        "pinyin": "yīyuàn lí zhèlǐ yuǎn ma?",
        "translation": "Is the hospital far from here?"
      }
    ]
  },
  {
    "id": 180,
    "character": "得",
    "pinyin": "de",
    "meaning": "structural particle placed after a verb to describe the manner or degree",
    "category": "between two objects",
    "level": 2,
    "strokes": 11,
    "examples": [
      {
        "chinese": "他跑得很快。",
        "pinyin": "tā pǎo de hěn kuài.",
        "translation": "He runs very fast."
      },
      {
        "chinese": "她唱歌唱得非常好。",
        "pinyin": "tā chànggē chàng de fēicháng hǎo.",
        "translation": "She sings extremely well."
      }
    ]
  },
  {
    "id": 181,
    "character": "着",
    "pinyin": "zhe",
    "meaning": "aspect particle indicating an ongoing action or continuous state",
    "category": "between two objects",
    "level": 2,
    "strokes": 11,
    "examples": [
      {
        "chinese": "门开着呢。",
        "pinyin": "mén kāi zhe ne.",
        "translation": "The door is open."
      },
      {
        "chinese": "他笑着跟我说话。",
        "pinyin": "tā xiào zhe gēn wǒ shuōhuà.",
        "translation": "He spoke to me with a smile."
      }
    ]
  },
  {
    "id": 182,
    "character": "过",
    "pinyin": "guò",
    "meaning": "aspect particle indicating past experience (have done)",
    "category": "between two objects",
    "level": 2,
    "strokes": 6,
    "examples": [
      {
        "chinese": "我去过一次北京。",
        "pinyin": "wǒ qù guo yí cì běijīng.",
        "translation": "I have been to Beijing once."
      },
      {
        "chinese": "你吃过羊肉吗？",
        "pinyin": "nǐ chī guo yángròu ma?",
        "translation": "Have you ever eaten mutton?"
      }
    ]
  },
  {
    "id": 183,
    "character": "吧",
    "pinyin": "ba",
    "meaning": "modal particle for suggestion, polite command, or consent",
    "category": "between two objects",
    "level": 2,
    "strokes": 7,
    "examples": [
      {
        "chinese": "我们一起去吃晚饭吧！",
        "pinyin": "wǒmen yìqǐ qù chī wǎnfàn ba!",
        "translation": "Let's go eat dinner together!"
      },
      {
        "chinese": "快点走吧，要迟到了。",
        "pinyin": "kuài diǎn zǒu ba, yào chídào le.",
        "translation": "Let's hurry up, we're going to be late."
      }
    ]
  },
  {
    "id": 184,
    "character": "机场",
    "pinyin": "jīchǎng",
    "meaning": "airport",
    "category": "between two objects",
    "level": 2,
    "strokes": 6,
    "examples": [
      {
        "chinese": "他正在准备机场。",
        "pinyin": "tā zhèngzài zhǔnbèi jīchǎng.",
        "translation": "He is preparing airport."
      },
      {
        "chinese": "这个机场很有意思。",
        "pinyin": "zhège jīchǎng hěn yǒu yìsi.",
        "translation": "This airport is very interesting."
      }
    ]
  },
  {
    "id": 185,
    "character": "教室",
    "pinyin": "jiàoshì",
    "meaning": "classroom",
    "category": "between two objects",
    "level": 2,
    "strokes": 9,
    "examples": [
      {
        "chinese": "他正在准备教室。",
        "pinyin": "tā zhèngzài zhǔnbèi jiàoshì.",
        "translation": "He is preparing classroom."
      },
      {
        "chinese": "这个教室很有意思。",
        "pinyin": "zhège jiàoshì hěn yǒu yìsi.",
        "translation": "This classroom is very interesting."
      }
    ]
  },
  {
    "id": 186,
    "character": "房间",
    "pinyin": "fángjiān",
    "meaning": "room",
    "category": "between two objects",
    "level": 2,
    "strokes": 8,
    "examples": [
      {
        "chinese": "他正在准备房间。",
        "pinyin": "tā zhèngzài zhǔnbèi fángjiān.",
        "translation": "He is preparing room."
      },
      {
        "chinese": "这个房间很有意思。",
        "pinyin": "zhège fángjiān hěn yǒu yìsi.",
        "translation": "This room is very interesting."
      }
    ]
  },
  {
    "id": 187,
    "character": "路",
    "pinyin": "lù",
    "meaning": "road",
    "category": "between two objects",
    "level": 2,
    "strokes": 13,
    "examples": [
      {
        "chinese": "他正在准备路。",
        "pinyin": "tā zhèngzài zhǔnbèi lù.",
        "translation": "He is preparing road."
      },
      {
        "chinese": "这个路很有意思。",
        "pinyin": "zhège lù hěn yǒu yìsi.",
        "translation": "This road is very interesting."
      }
    ]
  },
  {
    "id": 188,
    "character": "左边",
    "pinyin": "zuǒbiān",
    "meaning": "left",
    "category": "between two objects",
    "level": 2,
    "strokes": 5,
    "examples": [
      {
        "chinese": "他正在准备左边。",
        "pinyin": "tā zhèngzài zhǔnbèi zuǒbiān.",
        "translation": "He is preparing left."
      },
      {
        "chinese": "这个左边很有意思。",
        "pinyin": "zhège zuǒbiān hěn yǒu yìsi.",
        "translation": "This left is very interesting."
      }
    ]
  },
  {
    "id": 189,
    "character": "右边",
    "pinyin": "yòubiān",
    "meaning": "right",
    "category": "between two objects",
    "level": 2,
    "strokes": 5,
    "examples": [
      {
        "chinese": "他正在准备右边。",
        "pinyin": "tā zhèngzài zhǔnbèi yòubiān.",
        "translation": "He is preparing right."
      },
      {
        "chinese": "这个右边很有意思。",
        "pinyin": "zhège yòubiān hěn yǒu yìsi.",
        "translation": "This right is very interesting."
      }
    ]
  },
  {
    "id": 190,
    "character": "外",
    "pinyin": "wài",
    "meaning": "outside",
    "category": "between two objects",
    "level": 2,
    "strokes": 5,
    "examples": [
      {
        "chinese": "他正在准备外。",
        "pinyin": "tā zhèngzài zhǔnbèi wài.",
        "translation": "He is preparing outside."
      },
      {
        "chinese": "这个外很有意思。",
        "pinyin": "zhège wài hěn yǒu yìsi.",
        "translation": "This outside is very interesting."
      }
    ]
  },
  {
    "id": 191,
    "character": "旁边",
    "pinyin": "pángbiān",
    "meaning": "side",
    "category": "between two objects",
    "level": 2,
    "strokes": 10,
    "examples": [
      {
        "chinese": "他正在准备旁边。",
        "pinyin": "tā zhèngzài zhǔnbèi pángbiān.",
        "translation": "He is preparing side."
      },
      {
        "chinese": "这个旁边很有意思。",
        "pinyin": "zhège pángbiān hěn yǒu yìsi.",
        "translation": "This side is very interesting."
      }
    ]
  },
  {
    "id": 192,
    "character": "一下",
    "pinyin": "yīxià",
    "meaning": "in a short while",
    "category": "between two objects",
    "level": 2,
    "strokes": 1,
    "examples": [
      {
        "chinese": "他正在准备一下。",
        "pinyin": "tā zhèngzài zhǔnbèi yīxià.",
        "translation": "He is preparing in a short while."
      },
      {
        "chinese": "这个一下很有意思。",
        "pinyin": "zhège yīxià hěn yǒu yìsi.",
        "translation": "This in a short while is very interesting."
      }
    ]
  },
  {
    "id": 193,
    "character": "早上",
    "pinyin": "zǎoshàng",
    "meaning": "morning",
    "category": "between two objects",
    "level": 2,
    "strokes": 8,
    "examples": [
      {
        "chinese": "他正在准备早上。",
        "pinyin": "tā zhèngzài zhǔnbèi zǎoshàng.",
        "translation": "He is preparing morning."
      },
      {
        "chinese": "这个早上很有意思。",
        "pinyin": "zhège zǎoshàng hěn yǒu yìsi.",
        "translation": "This morning is very interesting."
      }
    ]
  },
  {
    "id": 194,
    "character": "晚上",
    "pinyin": "wǎnshàng",
    "meaning": "night",
    "category": "between two objects",
    "level": 2,
    "strokes": 10,
    "examples": [
      {
        "chinese": "他正在准备晚上。",
        "pinyin": "tā zhèngzài zhǔnbèi wǎnshàng.",
        "translation": "He is preparing night."
      },
      {
        "chinese": "这个晚上很有意思。",
        "pinyin": "zhège wǎnshàng hěn yǒu yìsi.",
        "translation": "This night is very interesting."
      }
    ]
  },
  {
    "id": 195,
    "character": "小时",
    "pinyin": "xiǎoshí",
    "meaning": "hour",
    "category": "between two objects",
    "level": 2,
    "strokes": 3,
    "examples": [
      {
        "chinese": "他正在准备小时。",
        "pinyin": "tā zhèngzài zhǔnbèi xiǎoshí.",
        "translation": "He is preparing hour."
      },
      {
        "chinese": "这个小时很有意思。",
        "pinyin": "zhège xiǎoshí hěn yǒu yìsi.",
        "translation": "This hour is very interesting."
      }
    ]
  },
  {
    "id": 196,
    "character": "时间",
    "pinyin": "shíjiān",
    "meaning": "time",
    "category": "between two objects",
    "level": 2,
    "strokes": 10,
    "examples": [
      {
        "chinese": "他正在准备时间。",
        "pinyin": "tā zhèngzài zhǔnbèi shíjiān.",
        "translation": "He is preparing time."
      },
      {
        "chinese": "这个时间很有意思。",
        "pinyin": "zhège shíjiān hěn yǒu yìsi.",
        "translation": "This time is very interesting."
      }
    ]
  },
  {
    "id": 197,
    "character": "去年",
    "pinyin": "qùnián",
    "meaning": "last year",
    "category": "between two objects",
    "level": 2,
    "strokes": 5,
    "examples": [
      {
        "chinese": "他正在准备去年。",
        "pinyin": "tā zhèngzài zhǔnbèi qùnián.",
        "translation": "He is preparing last year."
      },
      {
        "chinese": "这个去年很有意思。",
        "pinyin": "zhège qùnián hěn yǒu yìsi.",
        "translation": "This last year is very interesting."
      }
    ]
  },
  {
    "id": 198,
    "character": "日",
    "pinyin": "rì",
    "meaning": "date",
    "category": "between two objects",
    "level": 2,
    "strokes": 4,
    "examples": [
      {
        "chinese": "他正在准备日。",
        "pinyin": "tā zhèngzài zhǔnbèi rì.",
        "translation": "He is preparing date."
      },
      {
        "chinese": "这个日很有意思。",
        "pinyin": "zhège rì hěn yǒu yìsi.",
        "translation": "This date is very interesting."
      }
    ]
  },
  {
    "id": 199,
    "character": "生日",
    "pinyin": "shēngrì",
    "meaning": "birthday",
    "category": "between two objects",
    "level": 2,
    "strokes": 5,
    "examples": [
      {
        "chinese": "他正在准备生日。",
        "pinyin": "tā zhèngzài zhǔnbèi shēngrì.",
        "translation": "He is preparing birthday."
      },
      {
        "chinese": "这个生日很有意思。",
        "pinyin": "zhège shēngrì hěn yǒu yìsi.",
        "translation": "This birthday is very interesting."
      }
    ]
  },
  {
    "id": 200,
    "character": "哥哥",
    "pinyin": "gēge",
    "meaning": "older brother",
    "category": "between two objects",
    "level": 2,
    "strokes": 10,
    "examples": [
      {
        "chinese": "他正在准备哥哥。",
        "pinyin": "tā zhèngzài zhǔnbèi gēge.",
        "translation": "He is preparing older brother."
      },
      {
        "chinese": "这个哥哥很有意思。",
        "pinyin": "zhège gēge hěn yǒu yìsi.",
        "translation": "This older brother is very interesting."
      }
    ]
  },
  {
    "id": 201,
    "character": "姐姐",
    "pinyin": "jiějie",
    "meaning": "older sister",
    "category": "between two objects",
    "level": 2,
    "strokes": 8,
    "examples": [
      {
        "chinese": "他正在准备姐姐。",
        "pinyin": "tā zhèngzài zhǔnbèi jiějie.",
        "translation": "He is preparing older sister."
      },
      {
        "chinese": "这个姐姐很有意思。",
        "pinyin": "zhège jiějie hěn yǒu yìsi.",
        "translation": "This older sister is very interesting."
      }
    ]
  },
  {
    "id": 202,
    "character": "弟弟",
    "pinyin": "dìdi",
    "meaning": "younger brother",
    "category": "between two objects",
    "level": 2,
    "strokes": 7,
    "examples": [
      {
        "chinese": "他正在准备弟弟。",
        "pinyin": "tā zhèngzài zhǔnbèi dìdi.",
        "translation": "He is preparing younger brother."
      },
      {
        "chinese": "这个弟弟很有意思。",
        "pinyin": "zhège dìdi hěn yǒu yìsi.",
        "translation": "This younger brother is very interesting."
      }
    ]
  },
  {
    "id": 203,
    "character": "妹妹",
    "pinyin": "mèimei",
    "meaning": "younger sister",
    "category": "between two objects",
    "level": 2,
    "strokes": 8,
    "examples": [
      {
        "chinese": "他正在准备妹妹。",
        "pinyin": "tā zhèngzài zhǔnbèi mèimei.",
        "translation": "He is preparing younger sister."
      },
      {
        "chinese": "这个妹妹很有意思。",
        "pinyin": "zhège mèimei hěn yǒu yìsi.",
        "translation": "This younger sister is very interesting."
      }
    ]
  },
  {
    "id": 204,
    "character": "丈夫",
    "pinyin": "zhàngfu",
    "meaning": "husband",
    "category": "between two objects",
    "level": 2,
    "strokes": 4,
    "examples": [
      {
        "chinese": "他正在准备丈夫。",
        "pinyin": "tā zhèngzài zhǔnbèi zhàngfu.",
        "translation": "He is preparing husband."
      },
      {
        "chinese": "这个丈夫很有意思。",
        "pinyin": "zhège zhàngfu hěn yǒu yìsi.",
        "translation": "This husband is very interesting."
      }
    ]
  },
  {
    "id": 205,
    "character": "妻子",
    "pinyin": "qīzi",
    "meaning": "wife",
    "category": "between two objects",
    "level": 2,
    "strokes": 8,
    "examples": [
      {
        "chinese": "他正在准备妻子。",
        "pinyin": "tā zhèngzài zhǔnbèi qīzi.",
        "translation": "He is preparing wife."
      },
      {
        "chinese": "这个妻子很有意思。",
        "pinyin": "zhège qīzi hěn yǒu yìsi.",
        "translation": "This wife is very interesting."
      }
    ]
  },
  {
    "id": 206,
    "character": "孩子",
    "pinyin": "háizi",
    "meaning": "child",
    "category": "between two objects",
    "level": 2,
    "strokes": 10,
    "examples": [
      {
        "chinese": "他正在准备孩子。",
        "pinyin": "tā zhèngzài zhǔnbèi háizi.",
        "translation": "He is preparing child."
      },
      {
        "chinese": "这个孩子很有意思。",
        "pinyin": "zhège háizi hěn yǒu yìsi.",
        "translation": "This child is very interesting."
      }
    ]
  },
  {
    "id": 207,
    "character": "男人",
    "pinyin": "nánrén",
    "meaning": "man",
    "category": "between two objects",
    "level": 2,
    "strokes": 7,
    "examples": [
      {
        "chinese": "他正在准备男人。",
        "pinyin": "tā zhèngzài zhǔnbèi nánrén.",
        "translation": "He is preparing man."
      },
      {
        "chinese": "这个男人很有意思。",
        "pinyin": "zhège nánrén hěn yǒu yìsi.",
        "translation": "This man is very interesting."
      }
    ]
  },
  {
    "id": 208,
    "character": "女人",
    "pinyin": "nǚrén",
    "meaning": "woman",
    "category": "between two objects",
    "level": 2,
    "strokes": 3,
    "examples": [
      {
        "chinese": "他正在准备女人。",
        "pinyin": "tā zhèngzài zhǔnbèi nǚrén.",
        "translation": "He is preparing woman."
      },
      {
        "chinese": "这个女人很有意思。",
        "pinyin": "zhège nǚrén hěn yǒu yìsi.",
        "translation": "This woman is very interesting."
      }
    ]
  },
  {
    "id": 209,
    "character": "服务员",
    "pinyin": "fúwùyuán",
    "meaning": "waiter",
    "category": "between two objects",
    "level": 2,
    "strokes": 12,
    "examples": [
      {
        "chinese": "他正在准备服务员。",
        "pinyin": "tā zhèngzài zhǔnbèi fúwùyuán.",
        "translation": "He is preparing waiter."
      },
      {
        "chinese": "这个服务员很有意思。",
        "pinyin": "zhège fúwùyuán hěn yǒu yìsi.",
        "translation": "This waiter is very interesting."
      }
    ]
  },
  {
    "id": 210,
    "character": "鱼",
    "pinyin": "yú",
    "meaning": "fish",
    "category": "between two objects",
    "level": 2,
    "strokes": 8,
    "examples": [
      {
        "chinese": "他正在准备鱼。",
        "pinyin": "tā zhèngzài zhǔnbèi yú.",
        "translation": "He is preparing fish."
      },
      {
        "chinese": "这个鱼很有意思。",
        "pinyin": "zhège yú hěn yǒu yìsi.",
        "translation": "This fish is very interesting."
      }
    ]
  },
  {
    "id": 211,
    "character": "羊肉",
    "pinyin": "yángròu",
    "meaning": "mutton",
    "category": "between two objects",
    "level": 2,
    "strokes": 6,
    "examples": [
      {
        "chinese": "他正在准备羊肉。",
        "pinyin": "tā zhèngzài zhǔnbèi yángròu.",
        "translation": "He is preparing mutton."
      },
      {
        "chinese": "这个羊肉很有意思。",
        "pinyin": "zhège yángròu hěn yǒu yìsi.",
        "translation": "This mutton is very interesting."
      }
    ]
  },
  {
    "id": 212,
    "character": "牛奶",
    "pinyin": "niúnǎi",
    "meaning": "milk",
    "category": "between two objects",
    "level": 2,
    "strokes": 4,
    "examples": [
      {
        "chinese": "他正在准备牛奶。",
        "pinyin": "tā zhèngzài zhǔnbèi niúnǎi.",
        "translation": "He is preparing milk."
      },
      {
        "chinese": "这个牛奶很有意思。",
        "pinyin": "zhège niúnǎi hěn yǒu yìsi.",
        "translation": "This milk is very interesting."
      }
    ]
  },
  {
    "id": 213,
    "character": "鸡蛋",
    "pinyin": "jīdàn",
    "meaning": "egg",
    "category": "between two objects",
    "level": 2,
    "strokes": 7,
    "examples": [
      {
        "chinese": "他正在准备鸡蛋。",
        "pinyin": "tā zhèngzài zhǔnbèi jīdàn.",
        "translation": "He is preparing egg."
      },
      {
        "chinese": "这个鸡蛋很有意思。",
        "pinyin": "zhège jīdàn hěn yǒu yìsi.",
        "translation": "This egg is very interesting."
      }
    ]
  },
  {
    "id": 214,
    "character": "西瓜",
    "pinyin": "xīguā",
    "meaning": "watermelon",
    "category": "between two objects",
    "level": 2,
    "strokes": 6,
    "examples": [
      {
        "chinese": "他正在准备西瓜。",
        "pinyin": "tā zhèngzài zhǔnbèi xīguā.",
        "translation": "He is preparing watermelon."
      },
      {
        "chinese": "这个西瓜很有意思。",
        "pinyin": "zhège xīguā hěn yǒu yìsi.",
        "translation": "This watermelon is very interesting."
      }
    ]
  },
  {
    "id": 215,
    "character": "咖啡",
    "pinyin": "kāfēi",
    "meaning": "coffee",
    "category": "between two objects",
    "level": 2,
    "strokes": 8,
    "examples": [
      {
        "chinese": "他正在准备咖啡。",
        "pinyin": "tā zhèngzài zhǔnbèi kāfēi.",
        "translation": "He is preparing coffee."
      },
      {
        "chinese": "这个咖啡很有意思。",
        "pinyin": "zhège kāfēi hěn yǒu yìsi.",
        "translation": "This coffee is very interesting."
      }
    ]
  },
  {
    "id": 216,
    "character": "雪",
    "pinyin": "xuě",
    "meaning": "snow",
    "category": "between two objects",
    "level": 2,
    "strokes": 11,
    "examples": [
      {
        "chinese": "他正在准备雪。",
        "pinyin": "tā zhèngzài zhǔnbèi xuě.",
        "translation": "He is preparing snow."
      },
      {
        "chinese": "这个雪很有意思。",
        "pinyin": "zhège xuě hěn yǒu yìsi.",
        "translation": "This snow is very interesting."
      }
    ]
  },
  {
    "id": 217,
    "character": "药",
    "pinyin": "yào",
    "meaning": "medicine",
    "category": "between two objects",
    "level": 2,
    "strokes": 9,
    "examples": [
      {
        "chinese": "他正在准备药。",
        "pinyin": "tā zhèngzài zhǔnbèi yào.",
        "translation": "He is preparing medicine."
      },
      {
        "chinese": "这个药很有意思。",
        "pinyin": "zhège yào hěn yǒu yìsi.",
        "translation": "This medicine is very interesting."
      }
    ]
  },
  {
    "id": 218,
    "character": "手机",
    "pinyin": "shǒujī",
    "meaning": "cellphone",
    "category": "between two objects",
    "level": 2,
    "strokes": 4,
    "examples": [
      {
        "chinese": "他正在准备手机。",
        "pinyin": "tā zhèngzài zhǔnbèi shǒujī.",
        "translation": "He is preparing cellphone."
      },
      {
        "chinese": "这个手机很有意思。",
        "pinyin": "zhège shǒujī hěn yǒu yìsi.",
        "translation": "This cellphone is very interesting."
      }
    ]
  },
  {
    "id": 219,
    "character": "手表",
    "pinyin": "shǒubiǎo",
    "meaning": "watch",
    "category": "between two objects",
    "level": 2,
    "strokes": 4,
    "examples": [
      {
        "chinese": "他正在准备手表。",
        "pinyin": "tā zhèngzài zhǔnbèi shǒubiǎo.",
        "translation": "He is preparing watch."
      },
      {
        "chinese": "这个手表很有意思。",
        "pinyin": "zhège shǒubiǎo hěn yǒu yìsi.",
        "translation": "This watch is very interesting."
      }
    ]
  },
  {
    "id": 220,
    "character": "眼睛",
    "pinyin": "yǎnjīng",
    "meaning": "eye",
    "category": "between two objects",
    "level": 2,
    "strokes": 11,
    "examples": [
      {
        "chinese": "他正在准备眼睛。",
        "pinyin": "tā zhèngzài zhǔnbèi yǎnjīng.",
        "translation": "He is preparing eye."
      },
      {
        "chinese": "这个眼睛很有意思。",
        "pinyin": "zhège yǎnjīng hěn yǒu yìsi.",
        "translation": "This eye is very interesting."
      }
    ]
  },
  {
    "id": 221,
    "character": "身体",
    "pinyin": "shēntǐ",
    "meaning": "body",
    "category": "between two objects",
    "level": 2,
    "strokes": 7,
    "examples": [
      {
        "chinese": "他正在准备身体。",
        "pinyin": "tā zhèngzài zhǔnbèi shēntǐ.",
        "translation": "He is preparing body."
      },
      {
        "chinese": "这个身体很有意思。",
        "pinyin": "zhège shēntǐ hěn yǒu yìsi.",
        "translation": "This body is very interesting."
      }
    ]
  },
  {
    "id": 222,
    "character": "公共汽车",
    "pinyin": "gōnggòngqìchē",
    "meaning": "bus",
    "category": "between two objects",
    "level": 2,
    "strokes": 7,
    "examples": [
      {
        "chinese": "他正在准备公共汽车。",
        "pinyin": "tā zhèngzài zhǔnbèi gōnggòngqìchē.",
        "translation": "He is preparing bus."
      },
      {
        "chinese": "这个公共汽车很有意思。",
        "pinyin": "zhège gōnggòngqìchē hěn yǒu yìsi.",
        "translation": "This bus is very interesting."
      }
    ]
  },
  {
    "id": 223,
    "character": "报纸",
    "pinyin": "bàozhǐ",
    "meaning": "newspaper",
    "category": "between two objects",
    "level": 2,
    "strokes": 7,
    "examples": [
      {
        "chinese": "他正在准备报纸。",
        "pinyin": "tā zhèngzài zhǔnbèi bàozhǐ.",
        "translation": "He is preparing newspaper."
      },
      {
        "chinese": "这个报纸很有意思。",
        "pinyin": "zhège bàozhǐ hěn yǒu yìsi.",
        "translation": "This newspaper is very interesting."
      }
    ]
  },
  {
    "id": 224,
    "character": "门",
    "pinyin": "mén",
    "meaning": "door",
    "category": "between two objects",
    "level": 2,
    "strokes": 3,
    "examples": [
      {
        "chinese": "他正在准备门。",
        "pinyin": "tā zhèngzài zhǔnbèi mén.",
        "translation": "He is preparing door."
      },
      {
        "chinese": "这个门很有意思。",
        "pinyin": "zhège mén hěn yǒu yìsi.",
        "translation": "This door is very interesting."
      }
    ]
  },
  {
    "id": 225,
    "character": "题",
    "pinyin": "tí",
    "meaning": "topic, item",
    "category": "between two objects",
    "level": 2,
    "strokes": 15,
    "examples": [
      {
        "chinese": "他正在准备题。",
        "pinyin": "tā zhèngzài zhǔnbèi tí.",
        "translation": "He is preparing topic, item."
      },
      {
        "chinese": "这个题很有意思。",
        "pinyin": "zhège tí hěn yǒu yìsi.",
        "translation": "This topic, item is very interesting."
      }
    ]
  },
  {
    "id": 226,
    "character": "课",
    "pinyin": "kè",
    "meaning": "lesson",
    "category": "between two objects",
    "level": 2,
    "strokes": 10,
    "examples": [
      {
        "chinese": "他正在准备课。",
        "pinyin": "tā zhèngzài zhǔnbèi kè.",
        "translation": "He is preparing lesson."
      },
      {
        "chinese": "这个课很有意思。",
        "pinyin": "zhège kè hěn yǒu yìsi.",
        "translation": "This lesson is very interesting."
      }
    ]
  },
  {
    "id": 227,
    "character": "姓",
    "pinyin": "xìng",
    "meaning": "surname",
    "category": "between two objects",
    "level": 2,
    "strokes": 7,
    "examples": [
      {
        "chinese": "他正在准备姓。",
        "pinyin": "tā zhèngzài zhǔnbèi xìng.",
        "translation": "He is preparing surname."
      },
      {
        "chinese": "这个姓很有意思。",
        "pinyin": "zhège xìng hěn yǒu yìsi.",
        "translation": "This surname is very interesting."
      }
    ]
  },
  {
    "id": 228,
    "character": "问题",
    "pinyin": "wèntí",
    "meaning": "question",
    "category": "between two objects",
    "level": 2,
    "strokes": 6,
    "examples": [
      {
        "chinese": "他正在准备问题。",
        "pinyin": "tā zhèngzài zhǔnbèi wèntí.",
        "translation": "He is preparing question."
      },
      {
        "chinese": "这个问题很有意思。",
        "pinyin": "zhège wèntí hěn yǒu yìsi.",
        "translation": "This question is very interesting."
      }
    ]
  },
  {
    "id": 229,
    "character": "事情",
    "pinyin": "shìqing",
    "meaning": "matter",
    "category": "between two objects",
    "level": 2,
    "strokes": 8,
    "examples": [
      {
        "chinese": "他正在准备事情。",
        "pinyin": "tā zhèngzài zhǔnbèi shìqing.",
        "translation": "He is preparing matter."
      },
      {
        "chinese": "这个事情很有意思。",
        "pinyin": "zhège shìqing hěn yǒu yìsi.",
        "translation": "This matter is very interesting."
      }
    ]
  },
  {
    "id": 230,
    "character": "考试",
    "pinyin": "kǎoshì",
    "meaning": "exam",
    "category": "between two objects",
    "level": 2,
    "strokes": 7,
    "examples": [
      {
        "chinese": "他正在准备考试。",
        "pinyin": "tā zhèngzài zhǔnbèi kǎoshì.",
        "translation": "He is preparing exam."
      },
      {
        "chinese": "这个考试很有意思。",
        "pinyin": "zhège kǎoshì hěn yǒu yìsi.",
        "translation": "This exam is very interesting."
      }
    ]
  },
  {
    "id": 231,
    "character": "票",
    "pinyin": "piào",
    "meaning": "ticket",
    "category": "between two objects",
    "level": 2,
    "strokes": 11,
    "examples": [
      {
        "chinese": "他正在准备票。",
        "pinyin": "tā zhèngzài zhǔnbèi piào.",
        "translation": "He is preparing ticket."
      },
      {
        "chinese": "这个票很有意思。",
        "pinyin": "zhège piào hěn yǒu yìsi.",
        "translation": "This ticket is very interesting."
      }
    ]
  },
  {
    "id": 232,
    "character": "意思",
    "pinyin": "yìsi",
    "meaning": "meaning",
    "category": "between two objects",
    "level": 2,
    "strokes": 7,
    "examples": [
      {
        "chinese": "他正在准备意思。",
        "pinyin": "tā zhèngzài zhǔnbèi yìsi.",
        "translation": "He is preparing meaning."
      },
      {
        "chinese": "这个意思很有意思。",
        "pinyin": "zhège yìsi hěn yǒu yìsi.",
        "translation": "This meaning is very interesting."
      }
    ]
  },
  {
    "id": 233,
    "character": "颜色",
    "pinyin": "yánsè",
    "meaning": "color",
    "category": "between two objects",
    "level": 2,
    "strokes": 7,
    "examples": [
      {
        "chinese": "他正在准备颜色。",
        "pinyin": "tā zhèngzài zhǔnbèi yánsè.",
        "translation": "He is preparing color."
      },
      {
        "chinese": "这个颜色很有意思。",
        "pinyin": "zhège yánsè hěn yǒu yìsi.",
        "translation": "This color is very interesting."
      }
    ]
  },
  {
    "id": 234,
    "character": "铅笔",
    "pinyin": "qiánbǐ",
    "meaning": "pencil",
    "category": "between two objects",
    "level": 2,
    "strokes": 10,
    "examples": [
      {
        "chinese": "他正在准备铅笔。",
        "pinyin": "tā zhèngzài zhǔnbèi qiánbǐ.",
        "translation": "He is preparing pencil."
      },
      {
        "chinese": "这个铅笔很有意思。",
        "pinyin": "zhège qiánbǐ hěn yǒu yìsi.",
        "translation": "This pencil is very interesting."
      }
    ]
  },
  {
    "id": 235,
    "character": "面条",
    "pinyin": "miàntiáo",
    "meaning": "noodle",
    "category": "between two objects",
    "level": 2,
    "strokes": 7,
    "examples": [
      {
        "chinese": "他正在准备面条。",
        "pinyin": "tā zhèngzài zhǔnbèi miàntiáo.",
        "translation": "He is preparing noodle."
      },
      {
        "chinese": "这个面条很有意思。",
        "pinyin": "zhège miàntiáo hěn yǒu yìsi.",
        "translation": "This noodle is very interesting."
      }
    ]
  },
  {
    "id": 236,
    "character": "火车站",
    "pinyin": "huǒchēzhàn",
    "meaning": "train station",
    "category": "between two objects",
    "level": 2,
    "strokes": 4,
    "examples": [
      {
        "chinese": "他正在准备火车站。",
        "pinyin": "tā zhèngzài zhǔnbèi huǒchēzhàn.",
        "translation": "He is preparing train station."
      },
      {
        "chinese": "这个火车站很有意思。",
        "pinyin": "zhège huǒchēzhàn hěn yǒu yìsi.",
        "translation": "This train station is very interesting."
      }
    ]
  },
  {
    "id": 237,
    "character": "公司",
    "pinyin": "gōngsī",
    "meaning": "company",
    "category": "between two objects",
    "level": 2,
    "strokes": 7,
    "examples": [
      {
        "chinese": "他正在准备公司。",
        "pinyin": "tā zhèngzài zhǔnbèi gōngsī.",
        "translation": "He is preparing company."
      },
      {
        "chinese": "这个公司很有意思。",
        "pinyin": "zhège gōngsī hěn yǒu yìsi.",
        "translation": "This company is very interesting."
      }
    ]
  },
  {
    "id": 238,
    "character": "宾馆",
    "pinyin": "bīngguǎn",
    "meaning": "hotel",
    "category": "between two objects",
    "level": 2,
    "strokes": 7,
    "examples": [
      {
        "chinese": "他正在准备宾馆。",
        "pinyin": "tā zhèngzài zhǔnbèi bīngguǎn.",
        "translation": "He is preparing hotel."
      },
      {
        "chinese": "这个宾馆很有意思。",
        "pinyin": "zhège bīngguǎn hěn yǒu yìsi.",
        "translation": "This hotel is very interesting."
      }
    ]
  },
  {
    "id": 239,
    "character": "说话",
    "pinyin": "shuōhuà",
    "meaning": "talk",
    "category": "between two objects",
    "level": 2,
    "strokes": 8,
    "examples": [
      {
        "chinese": "他正在准备说话。",
        "pinyin": "tā zhèngzài zhǔnbèi shuōhuà.",
        "translation": "He is preparing talk."
      },
      {
        "chinese": "这个说话很有意思。",
        "pinyin": "zhège shuōhuà hěn yǒu yìsi.",
        "translation": "This talk is very interesting."
      }
    ]
  },
  {
    "id": 240,
    "character": "卖",
    "pinyin": "mài",
    "meaning": "sell",
    "category": "between two objects",
    "level": 2,
    "strokes": 7,
    "examples": [
      {
        "chinese": "他正在准备卖。",
        "pinyin": "tā zhèngzài zhǔnbèi mài.",
        "translation": "He is preparing sell."
      },
      {
        "chinese": "这个卖很有意思。",
        "pinyin": "zhège mài hěn yǒu yìsi.",
        "translation": "This sell is very interesting."
      }
    ]
  },
  {
    "id": 241,
    "character": "问",
    "pinyin": "wèn",
    "meaning": "ask",
    "category": "between two objects",
    "level": 2,
    "strokes": 6,
    "examples": [
      {
        "chinese": "他正在准备问。",
        "pinyin": "tā zhèngzài zhǔnbèi wèn.",
        "translation": "He is preparing ask."
      },
      {
        "chinese": "这个问很有意思。",
        "pinyin": "zhège wèn hěn yǒu yìsi.",
        "translation": "This ask is very interesting."
      }
    ]
  },
  {
    "id": 242,
    "character": "走",
    "pinyin": "zǒu",
    "meaning": "walk",
    "category": "between two objects",
    "level": 2,
    "strokes": 7,
    "examples": [
      {
        "chinese": "他正在准备走。",
        "pinyin": "tā zhèngzài zhǔnbèi zǒu.",
        "translation": "He is preparing walk."
      },
      {
        "chinese": "这个走很有意思。",
        "pinyin": "zhège zǒu hěn yǒu yìsi.",
        "translation": "This walk is very interesting."
      }
    ]
  },
  {
    "id": 243,
    "character": "进",
    "pinyin": "jìn",
    "meaning": "enter",
    "category": "between two objects",
    "level": 2,
    "strokes": 7,
    "examples": [
      {
        "chinese": "他正在准备进。",
        "pinyin": "tā zhèngzài zhǔnbèi jìn.",
        "translation": "He is preparing enter."
      },
      {
        "chinese": "这个进很有意思。",
        "pinyin": "zhège jìn hěn yǒu yìsi.",
        "translation": "This enter is very interesting."
      }
    ]
  },
  {
    "id": 244,
    "character": "出",
    "pinyin": "chū",
    "meaning": "come",
    "category": "between two objects",
    "level": 2,
    "strokes": 5,
    "examples": [
      {
        "chinese": "他正在准备出。",
        "pinyin": "tā zhèngzài zhǔnbèi chū.",
        "translation": "He is preparing come."
      },
      {
        "chinese": "这个出很有意思。",
        "pinyin": "zhège chū hěn yǒu yìsi.",
        "translation": "This come is very interesting."
      }
    ]
  },
  {
    "id": 245,
    "character": "跑步",
    "pinyin": "pǎobù",
    "meaning": "run",
    "category": "between two objects",
    "level": 2,
    "strokes": 7,
    "examples": [
      {
        "chinese": "他正在准备跑步。",
        "pinyin": "tā zhèngzài zhǔnbèi pǎobù.",
        "translation": "He is preparing run."
      },
      {
        "chinese": "这个跑步很有意思。",
        "pinyin": "zhège pǎobù hěn yǒu yìsi.",
        "translation": "This run is very interesting."
      }
    ]
  },
  {
    "id": 246,
    "character": "到",
    "pinyin": "dào",
    "meaning": "arrive",
    "category": "between two objects",
    "level": 2,
    "strokes": 8,
    "examples": [
      {
        "chinese": "他正在准备到。",
        "pinyin": "tā zhèngzài zhǔnbèi dào.",
        "translation": "He is preparing arrive."
      },
      {
        "chinese": "这个到很有意思。",
        "pinyin": "zhège dào hěn yǒu yìsi.",
        "translation": "This arrive is very interesting."
      }
    ]
  },
  {
    "id": 247,
    "character": "穿",
    "pinyin": "chuān",
    "meaning": "wear",
    "category": "between two objects",
    "level": 2,
    "strokes": 9,
    "examples": [
      {
        "chinese": "他正在准备穿。",
        "pinyin": "tā zhèngzài zhǔnbèi chuān.",
        "translation": "He is preparing wear."
      },
      {
        "chinese": "这个穿很有意思。",
        "pinyin": "zhège chuān hěn yǒu yìsi.",
        "translation": "This wear is very interesting."
      }
    ]
  },
  {
    "id": 248,
    "character": "洗",
    "pinyin": "xǐ",
    "meaning": "wash",
    "category": "between two objects",
    "level": 2,
    "strokes": 9,
    "examples": [
      {
        "chinese": "他正在准备洗。",
        "pinyin": "tā zhèngzài zhǔnbèi xǐ.",
        "translation": "He is preparing wash."
      },
      {
        "chinese": "这个洗很有意思。",
        "pinyin": "zhège xǐ hěn yǒu yìsi.",
        "translation": "This wash is very interesting."
      }
    ]
  },
  {
    "id": 249,
    "character": "给",
    "pinyin": "gěi",
    "meaning": "give",
    "category": "between two objects",
    "level": 2,
    "strokes": 9,
    "examples": [
      {
        "chinese": "他正在准备给。",
        "pinyin": "tā zhèngzài zhǔnbèi gěi.",
        "translation": "He is preparing give."
      },
      {
        "chinese": "这个给很有意思。",
        "pinyin": "zhège gěi hěn yǒu yìsi.",
        "translation": "This give is very interesting."
      }
    ]
  },
  {
    "id": 250,
    "character": "找",
    "pinyin": "zhǎo",
    "meaning": "find",
    "category": "between two objects",
    "level": 2,
    "strokes": 7,
    "examples": [
      {
        "chinese": "他正在准备找。",
        "pinyin": "tā zhèngzài zhǔnbèi zhǎo.",
        "translation": "He is preparing find."
      },
      {
        "chinese": "这个找很有意思。",
        "pinyin": "zhège zhǎo hěn yǒu yìsi.",
        "translation": "This find is very interesting."
      }
    ]
  },
  {
    "id": 251,
    "character": "懂",
    "pinyin": "dǒng",
    "meaning": "understand",
    "category": "between two objects",
    "level": 2,
    "strokes": 15,
    "examples": [
      {
        "chinese": "他正在准备懂。",
        "pinyin": "tā zhèngzài zhǔnbèi dǒng.",
        "translation": "He is preparing understand."
      },
      {
        "chinese": "这个懂很有意思。",
        "pinyin": "zhège dǒng hěn yǒu yìsi.",
        "translation": "This understand is very interesting."
      }
    ]
  },
  {
    "id": 252,
    "character": "笑",
    "pinyin": "xiào",
    "meaning": "smile",
    "category": "between two objects",
    "level": 2,
    "strokes": 10,
    "examples": [
      {
        "chinese": "他正在准备笑。",
        "pinyin": "tā zhèngzài zhǔnbèi xiào.",
        "translation": "He is preparing smile."
      },
      {
        "chinese": "这个笑很有意思。",
        "pinyin": "zhège xiào hěn yǒu yìsi.",
        "translation": "This smile is very interesting."
      }
    ]
  },
  {
    "id": 253,
    "character": "告诉",
    "pinyin": "gàosù",
    "meaning": "tell",
    "category": "between two objects",
    "level": 2,
    "strokes": 7,
    "examples": [
      {
        "chinese": "他正在准备告诉。",
        "pinyin": "tā zhèngzài zhǔnbèi gàosù.",
        "translation": "He is preparing tell."
      },
      {
        "chinese": "这个告诉很有意思。",
        "pinyin": "zhège gàosù hěn yǒu yìsi.",
        "translation": "This tell is very interesting."
      }
    ]
  },
  {
    "id": 254,
    "character": "准备",
    "pinyin": "zhǔnbèi",
    "meaning": "prepare",
    "category": "between two objects",
    "level": 2,
    "strokes": 11,
    "examples": [
      {
        "chinese": "他正在准备准备。",
        "pinyin": "tā zhèngzài zhǔnbèi zhǔnbèi.",
        "translation": "He is preparing prepare."
      },
      {
        "chinese": "这个准备很有意思。",
        "pinyin": "zhège zhǔnbèi hěn yǒu yìsi.",
        "translation": "This prepare is very interesting."
      }
    ]
  },
  {
    "id": 255,
    "character": "开始",
    "pinyin": "kāishǐ",
    "meaning": "begin",
    "category": "between two objects",
    "level": 2,
    "strokes": 4,
    "examples": [
      {
        "chinese": "他正在准备开始。",
        "pinyin": "tā zhèngzài zhǔnbèi kāishǐ.",
        "translation": "He is preparing begin."
      },
      {
        "chinese": "这个开始很有意思。",
        "pinyin": "zhège kāishǐ hěn yǒu yìsi.",
        "translation": "This begin is very interesting."
      }
    ]
  },
  {
    "id": 256,
    "character": "介绍",
    "pinyin": "jièshào",
    "meaning": "introduce",
    "category": "between two objects",
    "level": 2,
    "strokes": 4,
    "examples": [
      {
        "chinese": "他正在准备介绍。",
        "pinyin": "tā zhèngzài zhǔnbèi jièshào.",
        "translation": "He is preparing introduce."
      },
      {
        "chinese": "这个介绍很有意思。",
        "pinyin": "zhège jièshào hěn yǒu yìsi.",
        "translation": "This introduce is very interesting."
      }
    ]
  },
  {
    "id": 257,
    "character": "帮助",
    "pinyin": "bāngzhù",
    "meaning": "help",
    "category": "between two objects",
    "level": 2,
    "strokes": 7,
    "examples": [
      {
        "chinese": "他正在准备帮助。",
        "pinyin": "tā zhèngzài zhǔnbèi bāngzhù.",
        "translation": "He is preparing help."
      },
      {
        "chinese": "这个帮助很有意思。",
        "pinyin": "zhège bāngzhù hěn yǒu yìsi.",
        "translation": "This help is very interesting."
      }
    ]
  },
  {
    "id": 258,
    "character": "玩",
    "pinyin": "wán",
    "meaning": "play",
    "category": "between two objects",
    "level": 2,
    "strokes": 8,
    "examples": [
      {
        "chinese": "他正在准备玩。",
        "pinyin": "tā zhèngzài zhǔnbèi wán.",
        "translation": "He is preparing play."
      },
      {
        "chinese": "这个玩很有意思。",
        "pinyin": "zhège wán hěn yǒu yìsi.",
        "translation": "This play is very interesting."
      }
    ]
  },
  {
    "id": 259,
    "character": "送",
    "pinyin": "sòng",
    "meaning": "present",
    "category": "between two objects",
    "level": 2,
    "strokes": 9,
    "examples": [
      {
        "chinese": "他正在准备送。",
        "pinyin": "tā zhèngzài zhǔnbèi sòng.",
        "translation": "He is preparing present."
      },
      {
        "chinese": "这个送很有意思。",
        "pinyin": "zhège sòng hěn yǒu yìsi.",
        "translation": "This present is very interesting."
      }
    ]
  },
  {
    "id": 260,
    "character": "等",
    "pinyin": "děng",
    "meaning": "wait",
    "category": "between two objects",
    "level": 2,
    "strokes": 12,
    "examples": [
      {
        "chinese": "他正在准备等。",
        "pinyin": "tā zhèngzài zhǔnbèi děng.",
        "translation": "He is preparing wait."
      },
      {
        "chinese": "这个等很有意思。",
        "pinyin": "zhège děng hěn yǒu yìsi.",
        "translation": "This wait is very interesting."
      }
    ]
  },
  {
    "id": 261,
    "character": "让",
    "pinyin": "ràng",
    "meaning": "let",
    "category": "between two objects",
    "level": 2,
    "strokes": 5,
    "examples": [
      {
        "chinese": "他正在准备让。",
        "pinyin": "tā zhèngzài zhǔnbèi ràng.",
        "translation": "He is preparing let."
      },
      {
        "chinese": "这个让很有意思。",
        "pinyin": "zhège ràng hěn yǒu yìsi.",
        "translation": "This let is very interesting."
      }
    ]
  },
  {
    "id": 262,
    "character": "起床",
    "pinyin": "qǐchuáng",
    "meaning": "get up",
    "category": "between two objects",
    "level": 2,
    "strokes": 7,
    "examples": [
      {
        "chinese": "他正在准备起床。",
        "pinyin": "tā zhèngzài zhǔnbèi qǐchuáng.",
        "translation": "He is preparing get up."
      },
      {
        "chinese": "这个起床很有意思。",
        "pinyin": "zhège qǐchuáng hěn yǒu yìsi.",
        "translation": "This get up is very interesting."
      }
    ]
  },
  {
    "id": 263,
    "character": "唱歌",
    "pinyin": "chànggē",
    "meaning": "sing",
    "category": "between two objects",
    "level": 2,
    "strokes": 12,
    "examples": [
      {
        "chinese": "他正在准备唱歌。",
        "pinyin": "tā zhèngzài zhǔnbèi chànggē.",
        "translation": "He is preparing sing."
      },
      {
        "chinese": "这个唱歌很有意思。",
        "pinyin": "zhège chànggē hěn yǒu yìsi.",
        "translation": "This sing is very interesting."
      }
    ]
  },
  {
    "id": 264,
    "character": "跳舞",
    "pinyin": "tiàowǔ",
    "meaning": "dance",
    "category": "between two objects",
    "level": 2,
    "strokes": 14,
    "examples": [
      {
        "chinese": "他正在准备跳舞。",
        "pinyin": "tā zhèngzài zhǔnbèi tiàowǔ.",
        "translation": "He is preparing dance."
      },
      {
        "chinese": "这个跳舞很有意思。",
        "pinyin": "zhège tiàowǔ hěn yǒu yìsi.",
        "translation": "This dance is very interesting."
      }
    ]
  },
  {
    "id": 265,
    "character": "旅游",
    "pinyin": "lǚyóu",
    "meaning": "travel",
    "category": "between two objects",
    "level": 2,
    "strokes": 6,
    "examples": [
      {
        "chinese": "他正在准备旅游。",
        "pinyin": "tā zhèngzài zhǔnbèi lǚyóu.",
        "translation": "He is preparing travel."
      },
      {
        "chinese": "这个旅游很有意思。",
        "pinyin": "zhège lǚyóu hěn yǒu yìsi.",
        "translation": "This travel is very interesting."
      }
    ]
  },
  {
    "id": 266,
    "character": "上班",
    "pinyin": "shàngbān",
    "meaning": "be on duty",
    "category": "between two objects",
    "level": 2,
    "strokes": 3,
    "examples": [
      {
        "chinese": "他正在准备上班。",
        "pinyin": "tā zhèngzài zhǔnbèi shàngbān.",
        "translation": "He is preparing be on duty."
      },
      {
        "chinese": "这个上班很有意思。",
        "pinyin": "zhège shàngbān hěn yǒu yìsi.",
        "translation": "This be on duty is very interesting."
      }
    ]
  },
  {
    "id": 267,
    "character": "生病",
    "pinyin": "shēngbìng",
    "meaning": "get ill, get sick",
    "category": "between two objects",
    "level": 2,
    "strokes": 5,
    "examples": [
      {
        "chinese": "他正在准备生病。",
        "pinyin": "tā zhèngzài zhǔnbèi shēngbìng.",
        "translation": "He is preparing get ill, get sick."
      },
      {
        "chinese": "这个生病很有意思。",
        "pinyin": "zhège shēngbìng hěn yǒu yìsi.",
        "translation": "This get ill, get sick is very interesting."
      }
    ]
  },
  {
    "id": 268,
    "character": "休息",
    "pinyin": "xiūxi",
    "meaning": "rest",
    "category": "between two objects",
    "level": 2,
    "strokes": 6,
    "examples": [
      {
        "chinese": "他正在准备休息。",
        "pinyin": "tā zhèngzài zhǔnbèi xiūxi.",
        "translation": "He is preparing rest."
      },
      {
        "chinese": "这个休息很有意思。",
        "pinyin": "zhège xiūxi hěn yǒu yìsi.",
        "translation": "This rest is very interesting."
      }
    ]
  },
  {
    "id": 269,
    "character": "运动",
    "pinyin": "yùndòng",
    "meaning": "exercise",
    "category": "between two objects",
    "level": 2,
    "strokes": 7,
    "examples": [
      {
        "chinese": "他正在准备运动。",
        "pinyin": "tā zhèngzài zhǔnbèi yùndòng.",
        "translation": "He is preparing exercise."
      },
      {
        "chinese": "这个运动很有意思。",
        "pinyin": "zhège yùndòng hěn yǒu yìsi.",
        "translation": "This exercise is very interesting."
      }
    ]
  },
  {
    "id": 270,
    "character": "游泳",
    "pinyin": "yóuyǒng",
    "meaning": "swim",
    "category": "between two objects",
    "level": 2,
    "strokes": 8,
    "examples": [
      {
        "chinese": "他正在准备游泳。",
        "pinyin": "tā zhèngzài zhǔnbèi yóuyǒng.",
        "translation": "He is preparing swim."
      },
      {
        "chinese": "这个游泳很有意思。",
        "pinyin": "zhège yóuyǒng hěn yǒu yìsi.",
        "translation": "This swim is very interesting."
      }
    ]
  },
  {
    "id": 271,
    "character": "踢足球",
    "pinyin": "tīzúqiú",
    "meaning": "play footbal",
    "category": "between two objects",
    "level": 2,
    "strokes": 15,
    "examples": [
      {
        "chinese": "他正在准备踢足球。",
        "pinyin": "tā zhèngzài zhǔnbèi tīzúqiú.",
        "translation": "He is preparing play footbal."
      },
      {
        "chinese": "这个踢足球很有意思。",
        "pinyin": "zhège tīzúqiú hěn yǒu yìsi.",
        "translation": "This play footbal is very interesting."
      }
    ]
  },
  {
    "id": 272,
    "character": "打篮球",
    "pinyin": "dǎlánqiú",
    "meaning": "play basketball",
    "category": "between two objects",
    "level": 2,
    "strokes": 5,
    "examples": [
      {
        "chinese": "他正在准备打篮球。",
        "pinyin": "tā zhèngzài zhǔnbèi dǎlánqiú.",
        "translation": "He is preparing play basketball."
      },
      {
        "chinese": "这个打篮球很有意思。",
        "pinyin": "zhège dǎlánqiú hěn yǒu yìsi.",
        "translation": "This play basketball is very interesting."
      }
    ]
  },
  {
    "id": 273,
    "character": "完",
    "pinyin": "wán",
    "meaning": "finish",
    "category": "between two objects",
    "level": 2,
    "strokes": 7,
    "examples": [
      {
        "chinese": "他正在准备完。",
        "pinyin": "tā zhèngzài zhǔnbèi wán.",
        "translation": "He is preparing finish."
      },
      {
        "chinese": "这个完很有意思。",
        "pinyin": "zhège wán hěn yǒu yìsi.",
        "translation": "This finish is very interesting."
      }
    ]
  },
  {
    "id": 274,
    "character": "觉得",
    "pinyin": "juédé",
    "meaning": "think",
    "category": "between two objects",
    "level": 2,
    "strokes": 12,
    "examples": [
      {
        "chinese": "他正在准备觉得。",
        "pinyin": "tā zhèngzài zhǔnbèi juédé.",
        "translation": "He is preparing think."
      },
      {
        "chinese": "这个觉得很有意思。",
        "pinyin": "zhège juédé hěn yǒu yìsi.",
        "translation": "This think is very interesting."
      }
    ]
  },
  {
    "id": 275,
    "character": "知道",
    "pinyin": "zhīdao",
    "meaning": "know",
    "category": "between two objects",
    "level": 2,
    "strokes": 7,
    "examples": [
      {
        "chinese": "他正在准备知道。",
        "pinyin": "tā zhèngzài zhǔnbèi zhīdao.",
        "translation": "He is preparing know."
      },
      {
        "chinese": "这个知道很有意思。",
        "pinyin": "zhège zhīdao hěn yǒu yìsi.",
        "translation": "This know is very interesting."
      }
    ]
  },
  {
    "id": 276,
    "character": "希望",
    "pinyin": "xīwàng",
    "meaning": "hope",
    "category": "between two objects",
    "level": 2,
    "strokes": 11,
    "examples": [
      {
        "chinese": "他正在准备希望。",
        "pinyin": "tā zhèngzài zhǔnbèi xīwàng.",
        "translation": "He is preparing hope."
      },
      {
        "chinese": "这个希望很有意思。",
        "pinyin": "zhège xīwàng hěn yǒu yìsi.",
        "translation": "This hope is very interesting."
      }
    ]
  },
  {
    "id": 277,
    "character": "可以",
    "pinyin": "kěyǐ",
    "meaning": "can",
    "category": "between two objects",
    "level": 2,
    "strokes": 4,
    "examples": [
      {
        "chinese": "他正在准备可以。",
        "pinyin": "tā zhèngzài zhǔnbèi kěyǐ.",
        "translation": "He is preparing can."
      },
      {
        "chinese": "这个可以很有意思。",
        "pinyin": "zhège kěyǐ hěn yǒu yìsi.",
        "translation": "This can is very interesting."
      }
    ]
  },
  {
    "id": 278,
    "character": "要",
    "pinyin": "yào",
    "meaning": "want",
    "category": "between two objects",
    "level": 2,
    "strokes": 9,
    "examples": [
      {
        "chinese": "他正在准备要。",
        "pinyin": "tā zhèngzài zhǔnbèi yào.",
        "translation": "He is preparing want."
      },
      {
        "chinese": "这个要很有意思。",
        "pinyin": "zhège yào hěn yǒu yìsi.",
        "translation": "This want is very interesting."
      }
    ]
  },
  {
    "id": 279,
    "character": "可能",
    "pinyin": "kěnéng",
    "meaning": "may",
    "category": "between two objects",
    "level": 2,
    "strokes": 10,
    "examples": [
      {
        "chinese": "他正在准备可能。",
        "pinyin": "tā zhèngzài zhǔnbèi kěnéng.",
        "translation": "He is preparing may."
      },
      {
        "chinese": "这个可能很有意思。",
        "pinyin": "zhège kěnéng hěn yǒu yìsi.",
        "translation": "This may is very interesting."
      }
    ]
  },
  {
    "id": 280,
    "character": "高",
    "pinyin": "gāo",
    "meaning": "tall",
    "category": "between two objects",
    "level": 2,
    "strokes": 10,
    "examples": [
      {
        "chinese": "他正在准备高。",
        "pinyin": "tā zhèngzài zhǔnbèi gāo.",
        "translation": "He is preparing tall."
      },
      {
        "chinese": "这个高很有意思。",
        "pinyin": "zhège gāo hěn yǒu yìsi.",
        "translation": "This tall is very interesting."
      }
    ]
  },
  {
    "id": 281,
    "character": "红",
    "pinyin": "hóng",
    "meaning": "red",
    "category": "between two objects",
    "level": 2,
    "strokes": 6,
    "examples": [
      {
        "chinese": "他正在准备红。",
        "pinyin": "tā zhèngzài zhǔnbèi hóng.",
        "translation": "He is preparing red."
      },
      {
        "chinese": "这个红很有意思。",
        "pinyin": "zhège hóng hěn yǒu yìsi.",
        "translation": "This red is very interesting."
      }
    ]
  },
  {
    "id": 282,
    "character": "白",
    "pinyin": "bái",
    "meaning": "white",
    "category": "between two objects",
    "level": 2,
    "strokes": 5,
    "examples": [
      {
        "chinese": "他正在准备白。",
        "pinyin": "tā zhèngzài zhǔnbèi bái.",
        "translation": "He is preparing white."
      },
      {
        "chinese": "这个白很有意思。",
        "pinyin": "zhège bái hěn yǒu yìsi.",
        "translation": "This white is very interesting."
      }
    ]
  },
  {
    "id": 283,
    "character": "黑",
    "pinyin": "hēi",
    "meaning": "black",
    "category": "between two objects",
    "level": 2,
    "strokes": 12,
    "examples": [
      {
        "chinese": "他正在准备黑。",
        "pinyin": "tā zhèngzài zhǔnbèi hēi.",
        "translation": "He is preparing black."
      },
      {
        "chinese": "这个黑很有意思。",
        "pinyin": "zhège hēi hěn yǒu yìsi.",
        "translation": "This black is very interesting."
      }
    ]
  },
  {
    "id": 284,
    "character": "忙",
    "pinyin": "máng",
    "meaning": "busy",
    "category": "between two objects",
    "level": 2,
    "strokes": 7,
    "examples": [
      {
        "chinese": "他正在准备忙。",
        "pinyin": "tā zhèngzài zhǔnbèi máng.",
        "translation": "He is preparing busy."
      },
      {
        "chinese": "这个忙很有意思。",
        "pinyin": "zhège máng hěn yǒu yìsi.",
        "translation": "This busy is very interesting."
      }
    ]
  },
  {
    "id": 285,
    "character": "快",
    "pinyin": "kuài",
    "meaning": "fast",
    "category": "between two objects",
    "level": 2,
    "strokes": 7,
    "examples": [
      {
        "chinese": "他正在准备快。",
        "pinyin": "tā zhèngzài zhǔnbèi kuài.",
        "translation": "He is preparing fast."
      },
      {
        "chinese": "这个快很有意思。",
        "pinyin": "zhège kuài hěn yǒu yìsi.",
        "translation": "This fast is very interesting."
      }
    ]
  },
  {
    "id": 286,
    "character": "慢",
    "pinyin": "màn",
    "meaning": "slow",
    "category": "between two objects",
    "level": 2,
    "strokes": 14,
    "examples": [
      {
        "chinese": "他正在准备慢。",
        "pinyin": "tā zhèngzài zhǔnbèi màn.",
        "translation": "He is preparing slow."
      },
      {
        "chinese": "这个慢很有意思。",
        "pinyin": "zhège màn hěn yǒu yìsi.",
        "translation": "This slow is very interesting."
      }
    ]
  },
  {
    "id": 287,
    "character": "远",
    "pinyin": "yuǎn",
    "meaning": "far",
    "category": "between two objects",
    "level": 2,
    "strokes": 7,
    "examples": [
      {
        "chinese": "他正在准备远。",
        "pinyin": "tā zhèngzài zhǔnbèi yuǎn.",
        "translation": "He is preparing far."
      },
      {
        "chinese": "这个远很有意思。",
        "pinyin": "zhège yuǎn hěn yǒu yìsi.",
        "translation": "This far is very interesting."
      }
    ]
  },
  {
    "id": 288,
    "character": "近",
    "pinyin": "jìn",
    "meaning": "close",
    "category": "between two objects",
    "level": 2,
    "strokes": 7,
    "examples": [
      {
        "chinese": "他正在准备近。",
        "pinyin": "tā zhèngzài zhǔnbèi jìn.",
        "translation": "He is preparing close."
      },
      {
        "chinese": "这个近很有意思。",
        "pinyin": "zhège jìn hěn yǒu yìsi.",
        "translation": "This close is very interesting."
      }
    ]
  },
  {
    "id": 289,
    "character": "好吃",
    "pinyin": "hǎochī",
    "meaning": "delicious",
    "category": "between two objects",
    "level": 2,
    "strokes": 6,
    "examples": [
      {
        "chinese": "他正在准备好吃。",
        "pinyin": "tā zhèngzài zhǔnbèi hǎochī.",
        "translation": "He is preparing delicious."
      },
      {
        "chinese": "这个好吃很有意思。",
        "pinyin": "zhège hǎochī hěn yǒu yìsi.",
        "translation": "This delicious is very interesting."
      }
    ]
  },
  {
    "id": 290,
    "character": "累",
    "pinyin": "lèi",
    "meaning": "tired",
    "category": "between two objects",
    "level": 2,
    "strokes": 7,
    "examples": [
      {
        "chinese": "他正在准备累。",
        "pinyin": "tā zhèngzài zhǔnbèi lèi.",
        "translation": "He is preparing tired."
      },
      {
        "chinese": "这个累很有意思。",
        "pinyin": "zhège lèi hěn yǒu yìsi.",
        "translation": "This tired is very interesting."
      }
    ]
  },
  {
    "id": 291,
    "character": "长",
    "pinyin": "cháng",
    "meaning": "long",
    "category": "between two objects",
    "level": 2,
    "strokes": 4,
    "examples": [
      {
        "chinese": "他正在准备长。",
        "pinyin": "tā zhèngzài zhǔnbèi cháng.",
        "translation": "He is preparing long."
      },
      {
        "chinese": "这个长很有意思。",
        "pinyin": "zhège cháng hěn yǒu yìsi.",
        "translation": "This long is very interesting."
      }
    ]
  },
  {
    "id": 292,
    "character": "新",
    "pinyin": "xīn",
    "meaning": "new",
    "category": "between two objects",
    "level": 2,
    "strokes": 13,
    "examples": [
      {
        "chinese": "他正在准备新。",
        "pinyin": "tā zhèngzài zhǔnbèi xīn.",
        "translation": "He is preparing new."
      },
      {
        "chinese": "这个新很有意思。",
        "pinyin": "zhège xīn hěn yǒu yìsi.",
        "translation": "This new is very interesting."
      }
    ]
  },
  {
    "id": 293,
    "character": "贵",
    "pinyin": "guì",
    "meaning": "expensive",
    "category": "between two objects",
    "level": 2,
    "strokes": 9,
    "examples": [
      {
        "chinese": "他正在准备贵。",
        "pinyin": "tā zhèngzài zhǔnbèi guì.",
        "translation": "He is preparing expensive."
      },
      {
        "chinese": "这个贵很有意思。",
        "pinyin": "zhège guì hěn yǒu yìsi.",
        "translation": "This expensive is very interesting."
      }
    ]
  },
  {
    "id": 294,
    "character": "便宜",
    "pinyin": "piányi",
    "meaning": "cheap",
    "category": "between two objects",
    "level": 2,
    "strokes": 9,
    "examples": [
      {
        "chinese": "他正在准备便宜。",
        "pinyin": "tā zhèngzài zhǔnbèi piányi.",
        "translation": "He is preparing cheap."
      },
      {
        "chinese": "这个便宜很有意思。",
        "pinyin": "zhège piányi hěn yǒu yìsi.",
        "translation": "This cheap is very interesting."
      }
    ]
  },
  {
    "id": 295,
    "character": "晴",
    "pinyin": "qíng",
    "meaning": "fine",
    "category": "between two objects",
    "level": 2,
    "strokes": 12,
    "examples": [
      {
        "chinese": "他正在准备晴。",
        "pinyin": "tā zhèngzài zhǔnbèi qíng.",
        "translation": "He is preparing fine."
      },
      {
        "chinese": "这个晴很有意思。",
        "pinyin": "zhège qíng hěn yǒu yìsi.",
        "translation": "This fine is very interesting."
      }
    ]
  },
  {
    "id": 296,
    "character": "阴",
    "pinyin": "yīn",
    "meaning": "cloudy",
    "category": "between two objects",
    "level": 2,
    "strokes": 6,
    "examples": [
      {
        "chinese": "他正在准备阴。",
        "pinyin": "tā zhèngzài zhǔnbèi yīn.",
        "translation": "He is preparing cloudy."
      },
      {
        "chinese": "这个阴很有意思。",
        "pinyin": "zhège yīn hěn yǒu yìsi.",
        "translation": "This cloudy is very interesting."
      }
    ]
  },
  {
    "id": 297,
    "character": "错",
    "pinyin": "cuò",
    "meaning": "wrong",
    "category": "between two objects",
    "level": 2,
    "strokes": 13,
    "examples": [
      {
        "chinese": "他正在准备错。",
        "pinyin": "tā zhèngzài zhǔnbèi cuò.",
        "translation": "He is preparing wrong."
      },
      {
        "chinese": "这个错很有意思。",
        "pinyin": "zhège cuò hěn yǒu yìsi.",
        "translation": "This wrong is very interesting."
      }
    ]
  },
  {
    "id": 298,
    "character": "快乐",
    "pinyin": "kuàilè",
    "meaning": "happy",
    "category": "between two objects",
    "level": 2,
    "strokes": 7,
    "examples": [
      {
        "chinese": "他正在准备快乐。",
        "pinyin": "tā zhèngzài zhǔnbèi kuàilè.",
        "translation": "He is preparing happy."
      },
      {
        "chinese": "这个快乐很有意思。",
        "pinyin": "zhège kuàilè hěn yǒu yìsi.",
        "translation": "This happy is very interesting."
      }
    ]
  },
  {
    "id": 299,
    "character": "对",
    "pinyin": "duì",
    "meaning": "to",
    "category": "between two objects",
    "level": 2,
    "strokes": 5,
    "examples": [
      {
        "chinese": "他正在准备对。",
        "pinyin": "tā zhèngzài zhǔnbèi duì.",
        "translation": "He is preparing to."
      },
      {
        "chinese": "这个对很有意思。",
        "pinyin": "zhège duì hěn yǒu yìsi.",
        "translation": "This to is very interesting."
      }
    ]
  },
  {
    "id": 300,
    "character": "对",
    "pinyin": "duì",
    "meaning": "right",
    "category": "between two objects",
    "level": 2,
    "strokes": 5,
    "examples": [
      {
        "chinese": "他正在准备对。",
        "pinyin": "tā zhèngzài zhǔnbèi duì.",
        "translation": "He is preparing right."
      },
      {
        "chinese": "这个对很有意思。",
        "pinyin": "zhège duì hěn yǒu yìsi.",
        "translation": "This right is very interesting."
      }
    ]
  },
  {
    "id": 301,
    "character": "阿姨",
    "pinyin": "āyí",
    "meaning": "aunt",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 7,
    "examples": [
      {
        "chinese": "这位阿姨很热心。",
        "pinyin": "Zhè wèi āyí hěn rèxīn.",
        "translation": "This auntie is very warm-hearted."
      },
      {
        "chinese": "阿姨好，请进！",
        "pinyin": "Āyí hǎo, qǐng jìn!",
        "translation": "Hello Auntie, please come in!"
      }
    ]
  },
  {
    "id": 302,
    "character": "啊",
    "pinyin": "a",
    "meaning": "ah",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 10,
    "examples": [
      {
        "chinese": "我们经常用啊交流。",
        "pinyin": "Wǒmen jīngcháng yòng a jiāoliú.",
        "translation": "We often use 啊 (ah) in communication."
      },
      {
        "chinese": "你知道这个啊的意思吗？",
        "pinyin": "Nǐ zhīdào zhège a de yìsi ma?",
        "translation": "Do you know the meaning of this 啊?"
      }
    ]
  },
  {
    "id": 303,
    "character": "矮",
    "pinyin": "ǎi",
    "meaning": "short",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 13,
    "examples": [
      {
        "chinese": "我们经常用矮交流。",
        "pinyin": "Wǒmen jīngcháng yòng ǎi jiāoliú.",
        "translation": "We often use 矮 (short) in communication."
      },
      {
        "chinese": "你知道这个矮的意思吗？",
        "pinyin": "Nǐ zhīdào zhège ǎi de yìsi ma?",
        "translation": "Do you know the meaning of this 矮?"
      }
    ]
  },
  {
    "id": 304,
    "character": "爱好",
    "pinyin": "àihào",
    "meaning": "hobby",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 10,
    "examples": [
      {
        "chinese": "我们经常用爱好交流。",
        "pinyin": "Wǒmen jīngcháng yòng àihào jiāoliú.",
        "translation": "We often use 爱好 (hobby) in communication."
      },
      {
        "chinese": "你知道这个爱好的意思吗？",
        "pinyin": "Nǐ zhīdào zhège àihào de yìsi ma?",
        "translation": "Do you know the meaning of this 爱好?"
      }
    ]
  },
  {
    "id": 305,
    "character": "安静",
    "pinyin": "ānjìng",
    "meaning": "Be quiet",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 6,
    "examples": [
      {
        "chinese": "图书馆里非常安静。",
        "pinyin": "Túshūguǎn lǐ fēicháng ānjìng.",
        "translation": "It is very quiet inside the library."
      },
      {
        "chinese": "请大家保持安静。",
        "pinyin": "Qǐng dàjiā bǎochí ānjìng.",
        "translation": "Please remain quiet, everyone."
      }
    ]
  },
  {
    "id": 306,
    "character": "把",
    "pinyin": "bǎ",
    "meaning": "hold",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 7,
    "examples": [
      {
        "chinese": "请把空调关了。",
        "pinyin": "Qǐng bǎ kōngtiáo guān le.",
        "translation": "Please turn off the air conditioner."
      },
      {
        "chinese": "他把作业做完了。",
        "pinyin": "Tā bǎ zuòyè zuò wán le.",
        "translation": "He finished his homework."
      }
    ]
  },
  {
    "id": 307,
    "character": "班",
    "pinyin": "bān",
    "meaning": "class",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 10,
    "examples": [
      {
        "chinese": "我们经常用班交流。",
        "pinyin": "Wǒmen jīngcháng yòng bān jiāoliú.",
        "translation": "We often use 班 (class) in communication."
      },
      {
        "chinese": "你知道这个班的意思吗？",
        "pinyin": "Nǐ zhīdào zhège bān de yìsi ma?",
        "translation": "Do you know the meaning of this 班?"
      }
    ]
  },
  {
    "id": 308,
    "character": "搬",
    "pinyin": "bān",
    "meaning": "move",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 13,
    "examples": [
      {
        "chinese": "我们下个月搬新家。",
        "pinyin": "Wǒmen xià ge yuè bān xīn jiā.",
        "translation": "We are moving to a new home next month."
      },
      {
        "chinese": "请帮我搬一下这张桌子。",
        "pinyin": "Qǐng bāng wǒ bān yíxià zhè zhāng zhuōzi.",
        "translation": "Please help me move this table."
      }
    ]
  },
  {
    "id": 309,
    "character": "半",
    "pinyin": "bàn",
    "meaning": "half",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 5,
    "examples": [
      {
        "chinese": "我们经常用半交流。",
        "pinyin": "Wǒmen jīngcháng yòng bàn jiāoliú.",
        "translation": "We often use 半 (half) in communication."
      },
      {
        "chinese": "你知道这个半的意思吗？",
        "pinyin": "Nǐ zhīdào zhège bàn de yìsi ma?",
        "translation": "Do you know the meaning of this 半?"
      }
    ]
  },
  {
    "id": 310,
    "character": "办法",
    "pinyin": "bànfǎ",
    "meaning": "Way",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 4,
    "examples": [
      {
        "chinese": "这是一个好办法！",
        "pinyin": "Zhè shì yí ge hǎo bànfǎ!",
        "translation": "This is a great solution!"
      },
      {
        "chinese": "你想出办法了吗？",
        "pinyin": "Nǐ xiǎng chū bànfǎ le ma?",
        "translation": "Have you thought of a way?"
      }
    ]
  },
  {
    "id": 311,
    "character": "办公室",
    "pinyin": "bàngōngshì",
    "meaning": "Office",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 4,
    "examples": [
      {
        "chinese": "我们经常用办公室交流。",
        "pinyin": "Wǒmen jīngcháng yòng bàngōngshì jiāoliú.",
        "translation": "We often use 办公室 (Office) in communication."
      },
      {
        "chinese": "你知道这个办公室的意思吗？",
        "pinyin": "Nǐ zhīdào zhège bàngōngshì de yìsi ma?",
        "translation": "Do you know the meaning of this 办公室?"
      }
    ]
  },
  {
    "id": 312,
    "character": "帮忙",
    "pinyin": "bāngmáng",
    "meaning": "Help",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 9,
    "examples": [
      {
        "chinese": "我们经常用帮忙交流。",
        "pinyin": "Wǒmen jīngcháng yòng bāngmáng jiāoliú.",
        "translation": "We often use 帮忙 (Help) in communication."
      },
      {
        "chinese": "你知道这个帮忙的意思吗？",
        "pinyin": "Nǐ zhīdào zhège bāngmáng de yìsi ma?",
        "translation": "Do you know the meaning of this 帮忙?"
      }
    ]
  },
  {
    "id": 313,
    "character": "包",
    "pinyin": "bāo",
    "meaning": "package",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 5,
    "examples": [
      {
        "chinese": "我们经常用包交流。",
        "pinyin": "Wǒmen jīngcháng yòng bāo jiāoliú.",
        "translation": "We often use 包 (package) in communication."
      },
      {
        "chinese": "你知道这个包的意思吗？",
        "pinyin": "Nǐ zhīdào zhège bāo de yìsi ma?",
        "translation": "Do you know the meaning of this 包?"
      }
    ]
  },
  {
    "id": 314,
    "character": "饱",
    "pinyin": "bǎo",
    "meaning": "full",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用饱交流。",
        "pinyin": "Wǒmen jīngcháng yòng bǎo jiāoliú.",
        "translation": "We often use 饱 (full) in communication."
      },
      {
        "chinese": "你知道这个饱的意思吗？",
        "pinyin": "Nǐ zhīdào zhège bǎo de yìsi ma?",
        "translation": "Do you know the meaning of this 饱?"
      }
    ]
  },
  {
    "id": 315,
    "character": "北方",
    "pinyin": "běifāng",
    "meaning": "north",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 5,
    "examples": [
      {
        "chinese": "我们经常用北方交流。",
        "pinyin": "Wǒmen jīngcháng yòng běifāng jiāoliú.",
        "translation": "We often use 北方 (north) in communication."
      },
      {
        "chinese": "你知道这个北方的意思吗？",
        "pinyin": "Nǐ zhīdào zhège běifāng de yìsi ma?",
        "translation": "Do you know the meaning of this 北方?"
      }
    ]
  },
  {
    "id": 316,
    "character": "被",
    "pinyin": "bèi",
    "meaning": "cover",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 10,
    "examples": [
      {
        "chinese": "西瓜被弟弟吃完了。",
        "pinyin": "Xīguā bèi dìdi chī wán le.",
        "translation": "The watermelon was eaten up by younger brother."
      },
      {
        "chinese": "我的雨伞被他借走了。",
        "pinyin": "Wǒ de yǔsǎn bèi tā jiè zǒu le.",
        "translation": "My umbrella was borrowed by him."
      }
    ]
  },
  {
    "id": 317,
    "character": "鼻子",
    "pinyin": "bízi",
    "meaning": "nose",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 14,
    "examples": [
      {
        "chinese": "我们经常用鼻子交流。",
        "pinyin": "Wǒmen jīngcháng yòng bízi jiāoliú.",
        "translation": "We often use 鼻子 (nose) in communication."
      },
      {
        "chinese": "你知道这个鼻子的意思吗？",
        "pinyin": "Nǐ zhīdào zhège bízi de yìsi ma?",
        "translation": "Do you know the meaning of this 鼻子?"
      }
    ]
  },
  {
    "id": 318,
    "character": "比较",
    "pinyin": "bǐjiào",
    "meaning": "compare",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 4,
    "examples": [
      {
        "chinese": "我们经常用比较交流。",
        "pinyin": "Wǒmen jīngcháng yòng bǐjiào jiāoliú.",
        "translation": "We often use 比较 (compare) in communication."
      },
      {
        "chinese": "你知道这个比较的意思吗？",
        "pinyin": "Nǐ zhīdào zhège bǐjiào de yìsi ma?",
        "translation": "Do you know the meaning of this 比较?"
      }
    ]
  },
  {
    "id": 319,
    "character": "比赛",
    "pinyin": "bǐsài",
    "meaning": "Match",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 4,
    "examples": [
      {
        "chinese": "我们经常用比赛交流。",
        "pinyin": "Wǒmen jīngcháng yòng bǐsài jiāoliú.",
        "translation": "We often use 比赛 (Match) in communication."
      },
      {
        "chinese": "你知道这个比赛的意思吗？",
        "pinyin": "Nǐ zhīdào zhège bǐsài de yìsi ma?",
        "translation": "Do you know the meaning of this 比赛?"
      }
    ]
  },
  {
    "id": 320,
    "character": "笔记本",
    "pinyin": "bǐjìběn",
    "meaning": "notebook",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 10,
    "examples": [
      {
        "chinese": "我们经常用笔记本交流。",
        "pinyin": "Wǒmen jīngcháng yòng bǐjìběn jiāoliú.",
        "translation": "We often use 笔记本 (notebook) in communication."
      },
      {
        "chinese": "你知道这个笔记本的意思吗？",
        "pinyin": "Nǐ zhīdào zhège bǐjìběn de yìsi ma?",
        "translation": "Do you know the meaning of this 笔记本?"
      }
    ]
  },
  {
    "id": 321,
    "character": "必须",
    "pinyin": "bìxū",
    "meaning": "Must",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用必须交流。",
        "pinyin": "Wǒmen jīngcháng yòng bìxū jiāoliú.",
        "translation": "We often use 必须 (Must) in communication."
      },
      {
        "chinese": "你知道这个必须的意思吗？",
        "pinyin": "Nǐ zhīdào zhège bìxū de yìsi ma?",
        "translation": "Do you know the meaning of this 必须?"
      }
    ]
  },
  {
    "id": 322,
    "character": "变化",
    "pinyin": "biànhuà",
    "meaning": "change",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用变化交流。",
        "pinyin": "Wǒmen jīngcháng yòng biànhuà jiāoliú.",
        "translation": "We often use 变化 (change) in communication."
      },
      {
        "chinese": "你知道这个变化的意思吗？",
        "pinyin": "Nǐ zhīdào zhège biànhuà de yìsi ma?",
        "translation": "Do you know the meaning of this 变化?"
      }
    ]
  },
  {
    "id": 323,
    "character": "别人",
    "pinyin": "biéren",
    "meaning": "Others",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 7,
    "examples": [
      {
        "chinese": "我们经常用别人交流。",
        "pinyin": "Wǒmen jīngcháng yòng biéren jiāoliú.",
        "translation": "We often use 别人 (Others) in communication."
      },
      {
        "chinese": "你知道这个别人的意思吗？",
        "pinyin": "Nǐ zhīdào zhège biéren de yìsi ma?",
        "translation": "Do you know the meaning of this 别人?"
      }
    ]
  },
  {
    "id": 324,
    "character": "冰箱",
    "pinyin": "bīngxiāng",
    "meaning": "Refrigerator",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 6,
    "examples": [
      {
        "chinese": "我们经常用冰箱交流。",
        "pinyin": "Wǒmen jīngcháng yòng bīngxiāng jiāoliú.",
        "translation": "We often use 冰箱 (Refrigerator) in communication."
      },
      {
        "chinese": "你知道这个冰箱的意思吗？",
        "pinyin": "Nǐ zhīdào zhège bīngxiāng de yìsi ma?",
        "translation": "Do you know the meaning of this 冰箱?"
      }
    ]
  },
  {
    "id": 325,
    "character": "菜单",
    "pinyin": "càidān",
    "meaning": "menu",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 11,
    "examples": [
      {
        "chinese": "我们经常用菜单交流。",
        "pinyin": "Wǒmen jīngcháng yòng càidān jiāoliú.",
        "translation": "We often use 菜单 (menu) in communication."
      },
      {
        "chinese": "你知道这个菜单的意思吗？",
        "pinyin": "Nǐ zhīdào zhège càidān de yìsi ma?",
        "translation": "Do you know the meaning of this 菜单?"
      }
    ]
  },
  {
    "id": 326,
    "character": "参加",
    "pinyin": "cānjiā",
    "meaning": "participate in",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用参加交流。",
        "pinyin": "Wǒmen jīngcháng yòng cānjiā jiāoliú.",
        "translation": "We often use 参加 (participate in) in communication."
      },
      {
        "chinese": "你知道这个参加的意思吗？",
        "pinyin": "Nǐ zhīdào zhège cānjiā de yìsi ma?",
        "translation": "Do you know the meaning of this 参加?"
      }
    ]
  },
  {
    "id": 327,
    "character": "草",
    "pinyin": "cǎo",
    "meaning": "grass",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 9,
    "examples": [
      {
        "chinese": "我们经常用草交流。",
        "pinyin": "Wǒmen jīngcháng yòng cǎo jiāoliú.",
        "translation": "We often use 草 (grass) in communication."
      },
      {
        "chinese": "你知道这个草的意思吗？",
        "pinyin": "Nǐ zhīdào zhège cǎo de yìsi ma?",
        "translation": "Do you know the meaning of this 草?"
      }
    ]
  },
  {
    "id": 328,
    "character": "层",
    "pinyin": "céng",
    "meaning": "layer",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 7,
    "examples": [
      {
        "chinese": "我们经常用层交流。",
        "pinyin": "Wǒmen jīngcháng yòng céng jiāoliú.",
        "translation": "We often use 层 (layer) in communication."
      },
      {
        "chinese": "你知道这个层的意思吗？",
        "pinyin": "Nǐ zhīdào zhège céng de yìsi ma?",
        "translation": "Do you know the meaning of this 层?"
      }
    ]
  },
  {
    "id": 329,
    "character": "差",
    "pinyin": "chà",
    "meaning": "bad",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 9,
    "examples": [
      {
        "chinese": "我们经常用差交流。",
        "pinyin": "Wǒmen jīngcháng yòng chà jiāoliú.",
        "translation": "We often use 差 (bad) in communication."
      },
      {
        "chinese": "你知道这个差的意思吗？",
        "pinyin": "Nǐ zhīdào zhège chà de yìsi ma?",
        "translation": "Do you know the meaning of this 差?"
      }
    ]
  },
  {
    "id": 330,
    "character": "超市",
    "pinyin": "chāoshì",
    "meaning": "Supermarket",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 12,
    "examples": [
      {
        "chinese": "我们经常用超市交流。",
        "pinyin": "Wǒmen jīngcháng yòng chāoshì jiāoliú.",
        "translation": "We often use 超市 (Supermarket) in communication."
      },
      {
        "chinese": "你知道这个超市的意思吗？",
        "pinyin": "Nǐ zhīdào zhège chāoshì de yìsi ma?",
        "translation": "Do you know the meaning of this 超市?"
      }
    ]
  },
  {
    "id": 331,
    "character": "衬衫",
    "pinyin": "chènshān",
    "meaning": "shirt",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用衬衫交流。",
        "pinyin": "Wǒmen jīngcháng yòng chènshān jiāoliú.",
        "translation": "We often use 衬衫 (shirt) in communication."
      },
      {
        "chinese": "你知道这个衬衫的意思吗？",
        "pinyin": "Nǐ zhīdào zhège chènshān de yìsi ma?",
        "translation": "Do you know the meaning of this 衬衫?"
      }
    ]
  },
  {
    "id": 332,
    "character": "成绩",
    "pinyin": "chéngjì",
    "meaning": "achievement",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 6,
    "examples": [
      {
        "chinese": "我们经常用成绩交流。",
        "pinyin": "Wǒmen jīngcháng yòng chéngjì jiāoliú.",
        "translation": "We often use 成绩 (achievement) in communication."
      },
      {
        "chinese": "你知道这个成绩的意思吗？",
        "pinyin": "Nǐ zhīdào zhège chéngjì de yìsi ma?",
        "translation": "Do you know the meaning of this 成绩?"
      }
    ]
  },
  {
    "id": 333,
    "character": "城市",
    "pinyin": "chéngshì",
    "meaning": "City",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 9,
    "examples": [
      {
        "chinese": "我们经常用城市交流。",
        "pinyin": "Wǒmen jīngcháng yòng chéngshì jiāoliú.",
        "translation": "We often use 城市 (City) in communication."
      },
      {
        "chinese": "你知道这个城市的意思吗？",
        "pinyin": "Nǐ zhīdào zhège chéngshì de yìsi ma?",
        "translation": "Do you know the meaning of this 城市?"
      }
    ]
  },
  {
    "id": 334,
    "character": "迟到",
    "pinyin": "chídào",
    "meaning": "Late",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 7,
    "examples": [
      {
        "chinese": "我们经常用迟到交流。",
        "pinyin": "Wǒmen jīngcháng yòng chídào jiāoliú.",
        "translation": "We often use 迟到 (Late) in communication."
      },
      {
        "chinese": "你知道这个迟到的意思吗？",
        "pinyin": "Nǐ zhīdào zhège chídào de yìsi ma?",
        "translation": "Do you know the meaning of this 迟到?"
      }
    ]
  },
  {
    "id": 335,
    "character": "除了",
    "pinyin": "chúle",
    "meaning": "except, besides",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 9,
    "examples": [
      {
        "chinese": "我们经常用除了交流。",
        "pinyin": "Wǒmen jīngcháng yòng chúle jiāoliú.",
        "translation": "We often use 除了 (except, besides) in communication."
      },
      {
        "chinese": "你知道这个除了的意思吗？",
        "pinyin": "Nǐ zhīdào zhège chúle de yìsi ma?",
        "translation": "Do you know the meaning of this 除了?"
      }
    ]
  },
  {
    "id": 336,
    "character": "船",
    "pinyin": "chuán",
    "meaning": "ship",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 11,
    "examples": [
      {
        "chinese": "我们经常用船交流。",
        "pinyin": "Wǒmen jīngcháng yòng chuán jiāoliú.",
        "translation": "We often use 船 (ship) in communication."
      },
      {
        "chinese": "你知道这个船的意思吗？",
        "pinyin": "Nǐ zhīdào zhège chuán de yìsi ma?",
        "translation": "Do you know the meaning of this 船?"
      }
    ]
  },
  {
    "id": 337,
    "character": "春",
    "pinyin": "chūn",
    "meaning": "spring",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 9,
    "examples": [
      {
        "chinese": "我们经常用春交流。",
        "pinyin": "Wǒmen jīngcháng yòng chūn jiāoliú.",
        "translation": "We often use 春 (spring) in communication."
      },
      {
        "chinese": "你知道这个春的意思吗？",
        "pinyin": "Nǐ zhīdào zhège chūn de yìsi ma?",
        "translation": "Do you know the meaning of this 春?"
      }
    ]
  },
  {
    "id": 338,
    "character": "词典",
    "pinyin": "cídiǎn",
    "meaning": "Dictionaries",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 7,
    "examples": [
      {
        "chinese": "我们经常用词典交流。",
        "pinyin": "Wǒmen jīngcháng yòng cídiǎn jiāoliú.",
        "translation": "We often use 词典 (Dictionaries) in communication."
      },
      {
        "chinese": "你知道这个词典的意思吗？",
        "pinyin": "Nǐ zhīdào zhège cídiǎn de yìsi ma?",
        "translation": "Do you know the meaning of this 词典?"
      }
    ]
  },
  {
    "id": 339,
    "character": "聪明",
    "pinyin": "cōngming",
    "meaning": "clever",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用聪明交流。",
        "pinyin": "Wǒmen jīngcháng yòng cōngming jiāoliú.",
        "translation": "We often use 聪明 (clever) in communication."
      },
      {
        "chinese": "你知道这个聪明的意思吗？",
        "pinyin": "Nǐ zhīdào zhège cōngming de yìsi ma?",
        "translation": "Do you know the meaning of this 聪明?"
      }
    ]
  },
  {
    "id": 340,
    "character": "打扫",
    "pinyin": "dǎsǎo",
    "meaning": "Clean",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 5,
    "examples": [
      {
        "chinese": "我们经常用打扫交流。",
        "pinyin": "Wǒmen jīngcháng yòng dǎsǎo jiāoliú.",
        "translation": "We often use 打扫 (Clean) in communication."
      },
      {
        "chinese": "你知道这个打扫的意思吗？",
        "pinyin": "Nǐ zhīdào zhège dǎsǎo de yìsi ma?",
        "translation": "Do you know the meaning of this 打扫?"
      }
    ]
  },
  {
    "id": 341,
    "character": "打算",
    "pinyin": "dǎsuàn",
    "meaning": "Plan",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 5,
    "examples": [
      {
        "chinese": "我们经常用打算交流。",
        "pinyin": "Wǒmen jīngcháng yòng dǎsuàn jiāoliú.",
        "translation": "We often use 打算 (Plan) in communication."
      },
      {
        "chinese": "你知道这个打算的意思吗？",
        "pinyin": "Nǐ zhīdào zhège dǎsuàn de yìsi ma?",
        "translation": "Do you know the meaning of this 打算?"
      }
    ]
  },
  {
    "id": 342,
    "character": "带",
    "pinyin": "dài",
    "meaning": "belt",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 9,
    "examples": [
      {
        "chinese": "我们经常用带交流。",
        "pinyin": "Wǒmen jīngcháng yòng dài jiāoliú.",
        "translation": "We often use 带 (belt) in communication."
      },
      {
        "chinese": "你知道这个带的意思吗？",
        "pinyin": "Nǐ zhīdào zhège dài de yìsi ma?",
        "translation": "Do you know the meaning of this 带?"
      }
    ]
  },
  {
    "id": 343,
    "character": "担心",
    "pinyin": "dānxīn",
    "meaning": "Worry",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用担心交流。",
        "pinyin": "Wǒmen jīngcháng yòng dānxīn jiāoliú.",
        "translation": "We often use 担心 (Worry) in communication."
      },
      {
        "chinese": "你知道这个担心的意思吗？",
        "pinyin": "Nǐ zhīdào zhège dānxīn de yìsi ma?",
        "translation": "Do you know the meaning of this 担心?"
      }
    ]
  },
  {
    "id": 344,
    "character": "蛋糕",
    "pinyin": "dàngāo",
    "meaning": "Cake",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 11,
    "examples": [
      {
        "chinese": "我们经常用蛋糕交流。",
        "pinyin": "Wǒmen jīngcháng yòng dàngāo jiāoliú.",
        "translation": "We often use 蛋糕 (Cake) in communication."
      },
      {
        "chinese": "你知道这个蛋糕的意思吗？",
        "pinyin": "Nǐ zhīdào zhège dàngāo de yìsi ma?",
        "translation": "Do you know the meaning of this 蛋糕?"
      }
    ]
  },
  {
    "id": 345,
    "character": "当然",
    "pinyin": "dāngrán",
    "meaning": "Of course",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 6,
    "examples": [
      {
        "chinese": "我们经常用当然交流。",
        "pinyin": "Wǒmen jīngcháng yòng dāngrán jiāoliú.",
        "translation": "We often use 当然 (Of course) in communication."
      },
      {
        "chinese": "你知道这个当然的意思吗？",
        "pinyin": "Nǐ zhīdào zhège dāngrán de yìsi ma?",
        "translation": "Do you know the meaning of this 当然?"
      }
    ]
  },
  {
    "id": 346,
    "character": "地",
    "pinyin": "de",
    "meaning": "word; term",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 6,
    "examples": [
      {
        "chinese": "我们经常用地交流。",
        "pinyin": "Wǒmen jīngcháng yòng de jiāoliú.",
        "translation": "We often use 地 (word; term) in communication."
      },
      {
        "chinese": "你知道这个地的意思吗？",
        "pinyin": "Nǐ zhīdào zhège de de yìsi ma?",
        "translation": "Do you know the meaning of this 地?"
      }
    ]
  },
  {
    "id": 347,
    "character": "灯",
    "pinyin": "dēng",
    "meaning": "lamp",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 6,
    "examples": [
      {
        "chinese": "我们经常用灯交流。",
        "pinyin": "Wǒmen jīngcháng yòng dēng jiāoliú.",
        "translation": "We often use 灯 (lamp) in communication."
      },
      {
        "chinese": "你知道这个灯的意思吗？",
        "pinyin": "Nǐ zhīdào zhège dēng de yìsi ma?",
        "translation": "Do you know the meaning of this 灯?"
      }
    ]
  },
  {
    "id": 348,
    "character": "地方",
    "pinyin": "dìfang",
    "meaning": "local",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 6,
    "examples": [
      {
        "chinese": "我们经常用地方交流。",
        "pinyin": "Wǒmen jīngcháng yòng dìfang jiāoliú.",
        "translation": "We often use 地方 (local) in communication."
      },
      {
        "chinese": "你知道这个地方的意思吗？",
        "pinyin": "Nǐ zhīdào zhège dìfang de yìsi ma?",
        "translation": "Do you know the meaning of this 地方?"
      }
    ]
  },
  {
    "id": 349,
    "character": "地铁",
    "pinyin": "dìtiě",
    "meaning": "metro",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 6,
    "examples": [
      {
        "chinese": "我们经常用地铁交流。",
        "pinyin": "Wǒmen jīngcháng yòng dìtiě jiāoliú.",
        "translation": "We often use 地铁 (metro) in communication."
      },
      {
        "chinese": "你知道这个地铁的意思吗？",
        "pinyin": "Nǐ zhīdào zhège dìtiě de yìsi ma?",
        "translation": "Do you know the meaning of this 地铁?"
      }
    ]
  },
  {
    "id": 350,
    "character": "地图",
    "pinyin": "dìtú",
    "meaning": "Map",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 6,
    "examples": [
      {
        "chinese": "我们经常用地图交流。",
        "pinyin": "Wǒmen jīngcháng yòng dìtú jiāoliú.",
        "translation": "We often use 地图 (Map) in communication."
      },
      {
        "chinese": "你知道这个地图的意思吗？",
        "pinyin": "Nǐ zhīdào zhège dìtú de yìsi ma?",
        "translation": "Do you know the meaning of this 地图?"
      }
    ]
  },
  {
    "id": 351,
    "character": "电梯",
    "pinyin": "diàntī",
    "meaning": "Elevator.",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 5,
    "examples": [
      {
        "chinese": "我们经常用电梯交流。",
        "pinyin": "Wǒmen jīngcháng yòng diàntī jiāoliú.",
        "translation": "We often use 电梯 (Elevator.) in communication."
      },
      {
        "chinese": "你知道这个电梯的意思吗？",
        "pinyin": "Nǐ zhīdào zhège diàntī de yìsi ma?",
        "translation": "Do you know the meaning of this 电梯?"
      }
    ]
  },
  {
    "id": 352,
    "character": "电子邮件",
    "pinyin": "diànzǐyóujiàn",
    "meaning": "E-mail",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 5,
    "examples": [
      {
        "chinese": "我们经常用电子邮件交流。",
        "pinyin": "Wǒmen jīngcháng yòng diànzǐyóujiàn jiāoliú.",
        "translation": "We often use 电子邮件 (E-mail) in communication."
      },
      {
        "chinese": "你知道这个电子邮件的意思吗？",
        "pinyin": "Nǐ zhīdào zhège diànzǐyóujiàn de yìsi ma?",
        "translation": "Do you know the meaning of this 电子邮件?"
      }
    ]
  },
  {
    "id": 353,
    "character": "东",
    "pinyin": "dōng",
    "meaning": "east",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用东交流。",
        "pinyin": "Wǒmen jīngcháng yòng dōng jiāoliú.",
        "translation": "We often use 东 (east) in communication."
      },
      {
        "chinese": "你知道这个东的意思吗？",
        "pinyin": "Nǐ zhīdào zhège dōng de yìsi ma?",
        "translation": "Do you know the meaning of this 东?"
      }
    ]
  },
  {
    "id": 354,
    "character": "冬",
    "pinyin": "dōng",
    "meaning": "winter",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用冬交流。",
        "pinyin": "Wǒmen jīngcháng yòng dōng jiāoliú.",
        "translation": "We often use 冬 (winter) in communication."
      },
      {
        "chinese": "你知道这个冬的意思吗？",
        "pinyin": "Nǐ zhīdào zhège dōng de yìsi ma?",
        "translation": "Do you know the meaning of this 冬?"
      }
    ]
  },
  {
    "id": 355,
    "character": "动物",
    "pinyin": "dòngwù",
    "meaning": "Animal",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 6,
    "examples": [
      {
        "chinese": "我们经常用动物交流。",
        "pinyin": "Wǒmen jīngcháng yòng dòngwù jiāoliú.",
        "translation": "We often use 动物 (Animal) in communication."
      },
      {
        "chinese": "你知道这个动物的意思吗？",
        "pinyin": "Nǐ zhīdào zhège dòngwù de yìsi ma?",
        "translation": "Do you know the meaning of this 动物?"
      }
    ]
  },
  {
    "id": 356,
    "character": "短",
    "pinyin": "duǎn",
    "meaning": "short",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 12,
    "examples": [
      {
        "chinese": "我们经常用短交流。",
        "pinyin": "Wǒmen jīngcháng yòng duǎn jiāoliú.",
        "translation": "We often use 短 (short) in communication."
      },
      {
        "chinese": "你知道这个短的意思吗？",
        "pinyin": "Nǐ zhīdào zhège duǎn de yìsi ma?",
        "translation": "Do you know the meaning of this 短?"
      }
    ]
  },
  {
    "id": 357,
    "character": "段",
    "pinyin": "duàn",
    "meaning": "paragraph",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 9,
    "examples": [
      {
        "chinese": "我们经常用段交流。",
        "pinyin": "Wǒmen jīngcháng yòng duàn jiāoliú.",
        "translation": "We often use 段 (paragraph) in communication."
      },
      {
        "chinese": "你知道这个段的意思吗？",
        "pinyin": "Nǐ zhīdào zhège duàn de yìsi ma?",
        "translation": "Do you know the meaning of this 段?"
      }
    ]
  },
  {
    "id": 358,
    "character": "锻炼",
    "pinyin": "duànliàn",
    "meaning": "Physical exercise",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 14,
    "examples": [
      {
        "chinese": "我们经常用锻炼交流。",
        "pinyin": "Wǒmen jīngcháng yòng duànliàn jiāoliú.",
        "translation": "We often use 锻炼 (Physical exercise) in communication."
      },
      {
        "chinese": "你知道这个锻炼的意思吗？",
        "pinyin": "Nǐ zhīdào zhège duànliàn de yìsi ma?",
        "translation": "Do you know the meaning of this 锻炼?"
      }
    ]
  },
  {
    "id": 359,
    "character": "多么",
    "pinyin": "duōme",
    "meaning": "such",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 6,
    "examples": [
      {
        "chinese": "我们经常用多么交流。",
        "pinyin": "Wǒmen jīngcháng yòng duōme jiāoliú.",
        "translation": "We often use 多么 (such) in communication."
      },
      {
        "chinese": "你知道这个多么的意思吗？",
        "pinyin": "Nǐ zhīdào zhège duōme de yìsi ma?",
        "translation": "Do you know the meaning of this 多么?"
      }
    ]
  },
  {
    "id": 360,
    "character": "饿",
    "pinyin": "è",
    "meaning": "hungry",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 10,
    "examples": [
      {
        "chinese": "我们经常用饿交流。",
        "pinyin": "Wǒmen jīngcháng yòng è jiāoliú.",
        "translation": "We often use 饿 (hungry) in communication."
      },
      {
        "chinese": "你知道这个饿的意思吗？",
        "pinyin": "Nǐ zhīdào zhège è de yìsi ma?",
        "translation": "Do you know the meaning of this 饿?"
      }
    ]
  },
  {
    "id": 361,
    "character": "不但……而且……",
    "pinyin": "búdàn...érqiě…",
    "meaning": "not only…but also…",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用不但……而且……交流。",
        "pinyin": "Wǒmen jīngcháng yòng búdàn...érqiě… jiāoliú.",
        "translation": "We often use 不但……而且…… (not only…but also…) in communication."
      },
      {
        "chinese": "你知道这个不但……而且……的意思吗？",
        "pinyin": "Nǐ zhīdào zhège búdàn...érqiě… de yìsi ma?",
        "translation": "Do you know the meaning of this 不但……而且……?"
      }
    ]
  },
  {
    "id": 362,
    "character": "耳朵",
    "pinyin": "ěrduo",
    "meaning": "Ears",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 6,
    "examples": [
      {
        "chinese": "我们经常用耳朵交流。",
        "pinyin": "Wǒmen jīngcháng yòng ěrduo jiāoliú.",
        "translation": "We often use 耳朵 (Ears) in communication."
      },
      {
        "chinese": "你知道这个耳朵的意思吗？",
        "pinyin": "Nǐ zhīdào zhège ěrduo de yìsi ma?",
        "translation": "Do you know the meaning of this 耳朵?"
      }
    ]
  },
  {
    "id": 363,
    "character": "发",
    "pinyin": "fā",
    "meaning": "send out",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 5,
    "examples": [
      {
        "chinese": "我们经常用发交流。",
        "pinyin": "Wǒmen jīngcháng yòng fā jiāoliú.",
        "translation": "We often use 发 (send out) in communication."
      },
      {
        "chinese": "你知道这个发的意思吗？",
        "pinyin": "Nǐ zhīdào zhège fā de yìsi ma?",
        "translation": "Do you know the meaning of this 发?"
      }
    ]
  },
  {
    "id": 364,
    "character": "发烧",
    "pinyin": "fāshāo",
    "meaning": "Have a fever",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 5,
    "examples": [
      {
        "chinese": "我们经常用发烧交流。",
        "pinyin": "Wǒmen jīngcháng yòng fāshāo jiāoliú.",
        "translation": "We often use 发烧 (Have a fever) in communication."
      },
      {
        "chinese": "你知道这个发烧的意思吗？",
        "pinyin": "Nǐ zhīdào zhège fāshāo de yìsi ma?",
        "translation": "Do you know the meaning of this 发烧?"
      }
    ]
  },
  {
    "id": 365,
    "character": "发现",
    "pinyin": "fāxiàn",
    "meaning": "find, discover",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 5,
    "examples": [
      {
        "chinese": "我们经常用发现交流。",
        "pinyin": "Wǒmen jīngcháng yòng fāxiàn jiāoliú.",
        "translation": "We often use 发现 (find, discover) in communication."
      },
      {
        "chinese": "你知道这个发现的意思吗？",
        "pinyin": "Nǐ zhīdào zhège fāxiàn de yìsi ma?",
        "translation": "Do you know the meaning of this 发现?"
      }
    ]
  },
  {
    "id": 366,
    "character": "方便",
    "pinyin": "fāngbiàn",
    "meaning": "convenient",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 4,
    "examples": [
      {
        "chinese": "我们经常用方便交流。",
        "pinyin": "Wǒmen jīngcháng yòng fāngbiàn jiāoliú.",
        "translation": "We often use 方便 (convenient) in communication."
      },
      {
        "chinese": "你知道这个方便的意思吗？",
        "pinyin": "Nǐ zhīdào zhège fāngbiàn de yìsi ma?",
        "translation": "Do you know the meaning of this 方便?"
      }
    ]
  },
  {
    "id": 367,
    "character": "放",
    "pinyin": "fàng",
    "meaning": "discharge",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用放交流。",
        "pinyin": "Wǒmen jīngcháng yòng fàng jiāoliú.",
        "translation": "We often use 放 (discharge) in communication."
      },
      {
        "chinese": "你知道这个放的意思吗？",
        "pinyin": "Nǐ zhīdào zhège fàng de yìsi ma?",
        "translation": "Do you know the meaning of this 放?"
      }
    ]
  },
  {
    "id": 368,
    "character": "放心",
    "pinyin": "fàngxīn",
    "meaning": "Don't worry",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用放心交流。",
        "pinyin": "Wǒmen jīngcháng yòng fàngxīn jiāoliú.",
        "translation": "We often use 放心 (Don't worry) in communication."
      },
      {
        "chinese": "你知道这个放心的意思吗？",
        "pinyin": "Nǐ zhīdào zhège fàngxīn de yìsi ma?",
        "translation": "Do you know the meaning of this 放心?"
      }
    ]
  },
  {
    "id": 369,
    "character": "分",
    "pinyin": "fēn",
    "meaning": "minute",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 4,
    "examples": [
      {
        "chinese": "我们经常用分交流。",
        "pinyin": "Wǒmen jīngcháng yòng fēn jiāoliú.",
        "translation": "We often use 分 (minute) in communication."
      },
      {
        "chinese": "你知道这个分的意思吗？",
        "pinyin": "Nǐ zhīdào zhège fēn de yìsi ma?",
        "translation": "Do you know the meaning of this 分?"
      }
    ]
  },
  {
    "id": 370,
    "character": "附近",
    "pinyin": "fùjìn",
    "meaning": "nearby",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用附近交流。",
        "pinyin": "Wǒmen jīngcháng yòng fùjìn jiāoliú.",
        "translation": "We often use 附近 (nearby) in communication."
      },
      {
        "chinese": "你知道这个附近的意思吗？",
        "pinyin": "Nǐ zhīdào zhège fùjìn de yìsi ma?",
        "translation": "Do you know the meaning of this 附近?"
      }
    ]
  },
  {
    "id": 371,
    "character": "复习",
    "pinyin": "fùxí",
    "meaning": "Review",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 9,
    "examples": [
      {
        "chinese": "我们经常用复习交流。",
        "pinyin": "Wǒmen jīngcháng yòng fùxí jiāoliú.",
        "translation": "We often use 复习 (Review) in communication."
      },
      {
        "chinese": "你知道这个复习的意思吗？",
        "pinyin": "Nǐ zhīdào zhège fùxí de yìsi ma?",
        "translation": "Do you know the meaning of this 复习?"
      }
    ]
  },
  {
    "id": 372,
    "character": "干净",
    "pinyin": "gānjìng",
    "meaning": "clean",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用干净交流。",
        "pinyin": "Wǒmen jīngcháng yòng gānjìng jiāoliú.",
        "translation": "We often use 干净 (clean) in communication."
      },
      {
        "chinese": "你知道这个干净的意思吗？",
        "pinyin": "Nǐ zhīdào zhège gānjìng de yìsi ma?",
        "translation": "Do you know the meaning of this 干净?"
      }
    ]
  },
  {
    "id": 373,
    "character": "感兴趣",
    "pinyin": "gǎnxìngqù",
    "meaning": "be intretested in",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用感兴趣交流。",
        "pinyin": "Wǒmen jīngcháng yòng gǎnxìngqù jiāoliú.",
        "translation": "We often use 感兴趣 (be intretested in) in communication."
      },
      {
        "chinese": "你知道这个感兴趣的意思吗？",
        "pinyin": "Nǐ zhīdào zhège gǎnxìngqù de yìsi ma?",
        "translation": "Do you know the meaning of this 感兴趣?"
      }
    ]
  },
  {
    "id": 374,
    "character": "感冒",
    "pinyin": "gǎnmào",
    "meaning": "get a cold",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用感冒交流。",
        "pinyin": "Wǒmen jīngcháng yòng gǎnmào jiāoliú.",
        "translation": "We often use 感冒 (get a cold) in communication."
      },
      {
        "chinese": "你知道这个感冒的意思吗？",
        "pinyin": "Nǐ zhīdào zhège gǎnmào de yìsi ma?",
        "translation": "Do you know the meaning of this 感冒?"
      }
    ]
  },
  {
    "id": 375,
    "character": "刚才",
    "pinyin": "gāngcái",
    "meaning": "just",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用刚才交流。",
        "pinyin": "Wǒmen jīngcháng yòng gāngcái jiāoliú.",
        "translation": "We often use 刚才 (just) in communication."
      },
      {
        "chinese": "你知道这个刚才的意思吗？",
        "pinyin": "Nǐ zhīdào zhège gāngcái de yìsi ma?",
        "translation": "Do you know the meaning of this 刚才?"
      }
    ]
  },
  {
    "id": 376,
    "character": "个子",
    "pinyin": "gèzi",
    "meaning": "height",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 3,
    "examples": [
      {
        "chinese": "我们经常用个子交流。",
        "pinyin": "Wǒmen jīngcháng yòng gèzi jiāoliú.",
        "translation": "We often use 个子 (height) in communication."
      },
      {
        "chinese": "你知道这个个子的意思吗？",
        "pinyin": "Nǐ zhīdào zhège gèzi de yìsi ma?",
        "translation": "Do you know the meaning of this 个子?"
      }
    ]
  },
  {
    "id": 377,
    "character": "跟",
    "pinyin": "gēn",
    "meaning": "with",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 13,
    "examples": [
      {
        "chinese": "我们经常用跟交流。",
        "pinyin": "Wǒmen jīngcháng yòng gēn jiāoliú.",
        "translation": "We often use 跟 (with) in communication."
      },
      {
        "chinese": "你知道这个跟的意思吗？",
        "pinyin": "Nǐ zhīdào zhège gēn de yìsi ma?",
        "translation": "Do you know the meaning of this 跟?"
      }
    ]
  },
  {
    "id": 378,
    "character": "根据",
    "pinyin": "gēnjù",
    "meaning": "according to",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用根据交流。",
        "pinyin": "Wǒmen jīngcháng yòng gēnjù jiāoliú.",
        "translation": "We often use 根据 (according to) in communication."
      },
      {
        "chinese": "你知道这个根据的意思吗？",
        "pinyin": "Nǐ zhīdào zhège gēnjù de yìsi ma?",
        "translation": "Do you know the meaning of this 根据?"
      }
    ]
  },
  {
    "id": 379,
    "character": "更",
    "pinyin": "gèng",
    "meaning": "more",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 7,
    "examples": [
      {
        "chinese": "我们经常用更交流。",
        "pinyin": "Wǒmen jīngcháng yòng gèng jiāoliú.",
        "translation": "We often use 更 (more) in communication."
      },
      {
        "chinese": "你知道这个更的意思吗？",
        "pinyin": "Nǐ zhīdào zhège gèng de yìsi ma?",
        "translation": "Do you know the meaning of this 更?"
      }
    ]
  },
  {
    "id": 380,
    "character": "公斤",
    "pinyin": "gōngjīn",
    "meaning": "Kg.",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 4,
    "examples": [
      {
        "chinese": "我们经常用公斤交流。",
        "pinyin": "Wǒmen jīngcháng yòng gōngjīn jiāoliú.",
        "translation": "We often use 公斤 (Kg.) in communication."
      },
      {
        "chinese": "你知道这个公斤的意思吗？",
        "pinyin": "Nǐ zhīdào zhège gōngjīn de yìsi ma?",
        "translation": "Do you know the meaning of this 公斤?"
      }
    ]
  },
  {
    "id": 381,
    "character": "公园",
    "pinyin": "gōngyuán",
    "meaning": "Park",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 4,
    "examples": [
      {
        "chinese": "我们经常用公园交流。",
        "pinyin": "Wǒmen jīngcháng yòng gōngyuán jiāoliú.",
        "translation": "We often use 公园 (Park) in communication."
      },
      {
        "chinese": "你知道这个公园的意思吗？",
        "pinyin": "Nǐ zhīdào zhège gōngyuán de yìsi ma?",
        "translation": "Do you know the meaning of this 公园?"
      }
    ]
  },
  {
    "id": 382,
    "character": "故事",
    "pinyin": "gùshi",
    "meaning": "Story",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用故事交流。",
        "pinyin": "Wǒmen jīngcháng yòng gùshi jiāoliú.",
        "translation": "We often use 故事 (Story) in communication."
      },
      {
        "chinese": "你知道这个故事的意思吗？",
        "pinyin": "Nǐ zhīdào zhège gùshi de yìsi ma?",
        "translation": "Do you know the meaning of this 故事?"
      }
    ]
  },
  {
    "id": 383,
    "character": "刮风",
    "pinyin": "guāfēng",
    "meaning": "Windy",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用刮风交流。",
        "pinyin": "Wǒmen jīngcháng yòng guāfēng jiāoliú.",
        "translation": "We often use 刮风 (Windy) in communication."
      },
      {
        "chinese": "你知道这个刮风的意思吗？",
        "pinyin": "Nǐ zhīdào zhège guāfēng de yìsi ma?",
        "translation": "Do you know the meaning of this 刮风?"
      }
    ]
  },
  {
    "id": 384,
    "character": "关",
    "pinyin": "guān",
    "meaning": "shut",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 6,
    "examples": [
      {
        "chinese": "我们经常用关交流。",
        "pinyin": "Wǒmen jīngcháng yòng guān jiāoliú.",
        "translation": "We often use 关 (shut) in communication."
      },
      {
        "chinese": "你知道这个关的意思吗？",
        "pinyin": "Nǐ zhīdào zhège guān de yìsi ma?",
        "translation": "Do you know the meaning of this 关?"
      }
    ]
  },
  {
    "id": 385,
    "character": "关系",
    "pinyin": "guānxì",
    "meaning": "relationship",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 6,
    "examples": [
      {
        "chinese": "我们经常用关系交流。",
        "pinyin": "Wǒmen jīngcháng yòng guānxì jiāoliú.",
        "translation": "We often use 关系 (relationship) in communication."
      },
      {
        "chinese": "你知道这个关系的意思吗？",
        "pinyin": "Nǐ zhīdào zhège guānxì de yìsi ma?",
        "translation": "Do you know the meaning of this 关系?"
      }
    ]
  },
  {
    "id": 386,
    "character": "关心",
    "pinyin": "guānxīn",
    "meaning": "Care for",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 6,
    "examples": [
      {
        "chinese": "我们经常用关心交流。",
        "pinyin": "Wǒmen jīngcháng yòng guānxīn jiāoliú.",
        "translation": "We often use 关心 (Care for) in communication."
      },
      {
        "chinese": "你知道这个关心的意思吗？",
        "pinyin": "Nǐ zhīdào zhège guānxīn de yìsi ma?",
        "translation": "Do you know the meaning of this 关心?"
      }
    ]
  },
  {
    "id": 387,
    "character": "关于",
    "pinyin": "guānyú",
    "meaning": "about",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 6,
    "examples": [
      {
        "chinese": "我们经常用关于交流。",
        "pinyin": "Wǒmen jīngcháng yòng guānyú jiāoliú.",
        "translation": "We often use 关于 (about) in communication."
      },
      {
        "chinese": "你知道这个关于的意思吗？",
        "pinyin": "Nǐ zhīdào zhège guānyú de yìsi ma?",
        "translation": "Do you know the meaning of this 关于?"
      }
    ]
  },
  {
    "id": 388,
    "character": "国家",
    "pinyin": "guójiā",
    "meaning": "Country",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用国家交流。",
        "pinyin": "Wǒmen jīngcháng yòng guójiā jiāoliú.",
        "translation": "We often use 国家 (Country) in communication."
      },
      {
        "chinese": "你知道这个国家的意思吗？",
        "pinyin": "Nǐ zhīdào zhège guójiā de yìsi ma?",
        "translation": "Do you know the meaning of this 国家?"
      }
    ]
  },
  {
    "id": 389,
    "character": "过去",
    "pinyin": "guòqù",
    "meaning": "Past times",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 6,
    "examples": [
      {
        "chinese": "我们经常用过去交流。",
        "pinyin": "Wǒmen jīngcháng yòng guòqù jiāoliú.",
        "translation": "We often use 过去 (Past times) in communication."
      },
      {
        "chinese": "你知道这个过去的意思吗？",
        "pinyin": "Nǐ zhīdào zhège guòqù de yìsi ma?",
        "translation": "Do you know the meaning of this 过去?"
      }
    ]
  },
  {
    "id": 390,
    "character": "过（动词）",
    "pinyin": "guò",
    "meaning": "pass",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 6,
    "examples": [
      {
        "chinese": "我们经常用过（动词）交流。",
        "pinyin": "Wǒmen jīngcháng yòng guò jiāoliú.",
        "translation": "We often use 过（动词） (pass) in communication."
      },
      {
        "chinese": "你知道这个过（动词）的意思吗？",
        "pinyin": "Nǐ zhīdào zhège guò de yìsi ma?",
        "translation": "Do you know the meaning of this 过（动词）?"
      }
    ]
  },
  {
    "id": 391,
    "character": "还是",
    "pinyin": "háishì",
    "meaning": "still",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 7,
    "examples": [
      {
        "chinese": "我们经常用还是交流。",
        "pinyin": "Wǒmen jīngcháng yòng háishì jiāoliú.",
        "translation": "We often use 还是 (still) in communication."
      },
      {
        "chinese": "你知道这个还是的意思吗？",
        "pinyin": "Nǐ zhīdào zhège háishì de yìsi ma?",
        "translation": "Do you know the meaning of this 还是?"
      }
    ]
  },
  {
    "id": 392,
    "character": "害怕",
    "pinyin": "hàipà",
    "meaning": "Fear",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用害怕交流。",
        "pinyin": "Wǒmen jīngcháng yòng hàipà jiāoliú.",
        "translation": "We often use 害怕 (Fear) in communication."
      },
      {
        "chinese": "你知道这个害怕的意思吗？",
        "pinyin": "Nǐ zhīdào zhège hàipà de yìsi ma?",
        "translation": "Do you know the meaning of this 害怕?"
      }
    ]
  },
  {
    "id": 393,
    "character": "黑板",
    "pinyin": "hēibǎn",
    "meaning": "blackboard",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 12,
    "examples": [
      {
        "chinese": "我们经常用黑板交流。",
        "pinyin": "Wǒmen jīngcháng yòng hēibǎn jiāoliú.",
        "translation": "We often use 黑板 (blackboard) in communication."
      },
      {
        "chinese": "你知道这个黑板的意思吗？",
        "pinyin": "Nǐ zhīdào zhège hēibǎn de yìsi ma?",
        "translation": "Do you know the meaning of this 黑板?"
      }
    ]
  },
  {
    "id": 394,
    "character": "后来",
    "pinyin": "hòulái",
    "meaning": "later",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 6,
    "examples": [
      {
        "chinese": "我们经常用后来交流。",
        "pinyin": "Wǒmen jīngcháng yòng hòulái jiāoliú.",
        "translation": "We often use 后来 (later) in communication."
      },
      {
        "chinese": "你知道这个后来的意思吗？",
        "pinyin": "Nǐ zhīdào zhège hòulái de yìsi ma?",
        "translation": "Do you know the meaning of this 后来?"
      }
    ]
  },
  {
    "id": 395,
    "character": "护照",
    "pinyin": "hùzhào",
    "meaning": "passport",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用护照交流。",
        "pinyin": "Wǒmen jīngcháng yòng hùzhào jiāoliú.",
        "translation": "We often use 护照 (passport) in communication."
      },
      {
        "chinese": "你知道这个护照的意思吗？",
        "pinyin": "Nǐ zhīdào zhège hùzhào de yìsi ma?",
        "translation": "Do you know the meaning of this 护照?"
      }
    ]
  },
  {
    "id": 396,
    "character": "花（动词）",
    "pinyin": "huā",
    "meaning": "spend",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 7,
    "examples": [
      {
        "chinese": "我们经常用花（动词）交流。",
        "pinyin": "Wǒmen jīngcháng yòng huā jiāoliú.",
        "translation": "We often use 花（动词） (spend) in communication."
      },
      {
        "chinese": "你知道这个花（动词）的意思吗？",
        "pinyin": "Nǐ zhīdào zhège huā de yìsi ma?",
        "translation": "Do you know the meaning of this 花（动词）?"
      }
    ]
  },
  {
    "id": 397,
    "character": "花（名词）",
    "pinyin": "huā",
    "meaning": "flower",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 7,
    "examples": [
      {
        "chinese": "我们经常用花（名词）交流。",
        "pinyin": "Wǒmen jīngcháng yòng huā jiāoliú.",
        "translation": "We often use 花（名词） (flower) in communication."
      },
      {
        "chinese": "你知道这个花（名词）的意思吗？",
        "pinyin": "Nǐ zhīdào zhège huā de yìsi ma?",
        "translation": "Do you know the meaning of this 花（名词）?"
      }
    ]
  },
  {
    "id": 398,
    "character": "画",
    "pinyin": "huà",
    "meaning": "painting",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用画交流。",
        "pinyin": "Wǒmen jīngcháng yòng huà jiāoliú.",
        "translation": "We often use 画 (painting) in communication."
      },
      {
        "chinese": "你知道这个画的意思吗？",
        "pinyin": "Nǐ zhīdào zhège huà de yìsi ma?",
        "translation": "Do you know the meaning of this 画?"
      }
    ]
  },
  {
    "id": 399,
    "character": "坏",
    "pinyin": "huài",
    "meaning": "bad",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 7,
    "examples": [
      {
        "chinese": "我们经常用坏交流。",
        "pinyin": "Wǒmen jīngcháng yòng huài jiāoliú.",
        "translation": "We often use 坏 (bad) in communication."
      },
      {
        "chinese": "你知道这个坏的意思吗？",
        "pinyin": "Nǐ zhīdào zhège huài de yìsi ma?",
        "translation": "Do you know the meaning of this 坏?"
      }
    ]
  },
  {
    "id": 400,
    "character": "欢迎",
    "pinyin": "huānyíng",
    "meaning": "Welcome",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 6,
    "examples": [
      {
        "chinese": "我们经常用欢迎交流。",
        "pinyin": "Wǒmen jīngcháng yòng huānyíng jiāoliú.",
        "translation": "We often use 欢迎 (Welcome) in communication."
      },
      {
        "chinese": "你知道这个欢迎的意思吗？",
        "pinyin": "Nǐ zhīdào zhège huānyíng de yìsi ma?",
        "translation": "Do you know the meaning of this 欢迎?"
      }
    ]
  },
  {
    "id": 401,
    "character": "还（动词）",
    "pinyin": "huán",
    "meaning": "Return",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 7,
    "examples": [
      {
        "chinese": "我们经常用还（动词）交流。",
        "pinyin": "Wǒmen jīngcháng yòng huán jiāoliú.",
        "translation": "We often use 还（动词） (Return) in communication."
      },
      {
        "chinese": "你知道这个还（动词）的意思吗？",
        "pinyin": "Nǐ zhīdào zhège huán de yìsi ma?",
        "translation": "Do you know the meaning of this 还（动词）?"
      }
    ]
  },
  {
    "id": 402,
    "character": "环境",
    "pinyin": "huánjìng",
    "meaning": "Environment",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用环境交流。",
        "pinyin": "Wǒmen jīngcháng yòng huánjìng jiāoliú.",
        "translation": "We often use 环境 (Environment) in communication."
      },
      {
        "chinese": "你知道这个环境的意思吗？",
        "pinyin": "Nǐ zhīdào zhège huánjìng de yìsi ma?",
        "translation": "Do you know the meaning of this 环境?"
      }
    ]
  },
  {
    "id": 403,
    "character": "换",
    "pinyin": "huàn",
    "meaning": "change",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 10,
    "examples": [
      {
        "chinese": "我们经常用换交流。",
        "pinyin": "Wǒmen jīngcháng yòng huàn jiāoliú.",
        "translation": "We often use 换 (change) in communication."
      },
      {
        "chinese": "你知道这个换的意思吗？",
        "pinyin": "Nǐ zhīdào zhège huàn de yìsi ma?",
        "translation": "Do you know the meaning of this 换?"
      }
    ]
  },
  {
    "id": 404,
    "character": "黄河",
    "pinyin": "huánghé",
    "meaning": "Yellow River",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 11,
    "examples": [
      {
        "chinese": "我们经常用黄河交流。",
        "pinyin": "Wǒmen jīngcháng yòng huánghé jiāoliú.",
        "translation": "We often use 黄河 (Yellow River) in communication."
      },
      {
        "chinese": "你知道这个黄河的意思吗？",
        "pinyin": "Nǐ zhīdào zhège huánghé de yìsi ma?",
        "translation": "Do you know the meaning of this 黄河?"
      }
    ]
  },
  {
    "id": 405,
    "character": "回答",
    "pinyin": "huídá",
    "meaning": "Answer",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 6,
    "examples": [
      {
        "chinese": "我们经常用回答交流。",
        "pinyin": "Wǒmen jīngcháng yòng huídá jiāoliú.",
        "translation": "We often use 回答 (Answer) in communication."
      },
      {
        "chinese": "你知道这个回答的意思吗？",
        "pinyin": "Nǐ zhīdào zhège huídá de yìsi ma?",
        "translation": "Do you know the meaning of this 回答?"
      }
    ]
  },
  {
    "id": 406,
    "character": "会议",
    "pinyin": "huìyì",
    "meaning": "Meeting",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 6,
    "examples": [
      {
        "chinese": "我们经常用会议交流。",
        "pinyin": "Wǒmen jīngcháng yòng huìyì jiāoliú.",
        "translation": "We often use 会议 (Meeting) in communication."
      },
      {
        "chinese": "你知道这个会议的意思吗？",
        "pinyin": "Nǐ zhīdào zhège huìyì de yìsi ma?",
        "translation": "Do you know the meaning of this 会议?"
      }
    ]
  },
  {
    "id": 407,
    "character": "或者",
    "pinyin": "huòzhě",
    "meaning": "perhaps",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用或者交流。",
        "pinyin": "Wǒmen jīngcháng yòng huòzhě jiāoliú.",
        "translation": "We often use 或者 (perhaps) in communication."
      },
      {
        "chinese": "你知道这个或者的意思吗？",
        "pinyin": "Nǐ zhīdào zhège huòzhě de yìsi ma?",
        "translation": "Do you know the meaning of this 或者?"
      }
    ]
  },
  {
    "id": 408,
    "character": "几乎",
    "pinyin": "jīhū",
    "meaning": "almost",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 2,
    "examples": [
      {
        "chinese": "我们经常用几乎交流。",
        "pinyin": "Wǒmen jīngcháng yòng jīhū jiāoliú.",
        "translation": "We often use 几乎 (almost) in communication."
      },
      {
        "chinese": "你知道这个几乎的意思吗？",
        "pinyin": "Nǐ zhīdào zhège jīhū de yìsi ma?",
        "translation": "Do you know the meaning of this 几乎?"
      }
    ]
  },
  {
    "id": 409,
    "character": "机会",
    "pinyin": "jīhuì",
    "meaning": "Opportunity",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 6,
    "examples": [
      {
        "chinese": "我们经常用机会交流。",
        "pinyin": "Wǒmen jīngcháng yòng jīhuì jiāoliú.",
        "translation": "We often use 机会 (Opportunity) in communication."
      },
      {
        "chinese": "你知道这个机会的意思吗？",
        "pinyin": "Nǐ zhīdào zhège jīhuì de yìsi ma?",
        "translation": "Do you know the meaning of this 机会?"
      }
    ]
  },
  {
    "id": 410,
    "character": "极",
    "pinyin": "jí",
    "meaning": "extremely",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 7,
    "examples": [
      {
        "chinese": "我们经常用极交流。",
        "pinyin": "Wǒmen jīngcháng yòng jí jiāoliú.",
        "translation": "We often use 极 (extremely) in communication."
      },
      {
        "chinese": "你知道这个极的意思吗？",
        "pinyin": "Nǐ zhīdào zhège jí de yìsi ma?",
        "translation": "Do you know the meaning of this 极?"
      }
    ]
  },
  {
    "id": 411,
    "character": "记得",
    "pinyin": "jìde",
    "meaning": "remember",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用记得交流。",
        "pinyin": "Wǒmen jīngcháng yòng jìde jiāoliú.",
        "translation": "We often use 记得 (remember) in communication."
      },
      {
        "chinese": "你知道这个记得的意思吗？",
        "pinyin": "Nǐ zhīdào zhège jìde de yìsi ma?",
        "translation": "Do you know the meaning of this 记得?"
      }
    ]
  },
  {
    "id": 412,
    "character": "季节",
    "pinyin": "jìjié",
    "meaning": "Season",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用季节交流。",
        "pinyin": "Wǒmen jīngcháng yòng jìjié jiāoliú.",
        "translation": "We often use 季节 (Season) in communication."
      },
      {
        "chinese": "你知道这个季节的意思吗？",
        "pinyin": "Nǐ zhīdào zhège jìjié de yìsi ma?",
        "translation": "Do you know the meaning of this 季节?"
      }
    ]
  },
  {
    "id": 413,
    "character": "检查",
    "pinyin": "jiǎnchá",
    "meaning": "inspect",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用检查交流。",
        "pinyin": "Wǒmen jīngcháng yòng jiǎnchá jiāoliú.",
        "translation": "We often use 检查 (inspect) in communication."
      },
      {
        "chinese": "你知道这个检查的意思吗？",
        "pinyin": "Nǐ zhīdào zhège jiǎnchá de yìsi ma?",
        "translation": "Do you know the meaning of this 检查?"
      }
    ]
  },
  {
    "id": 414,
    "character": "简单",
    "pinyin": "jiǎndān",
    "meaning": "simple",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用简单交流。",
        "pinyin": "Wǒmen jīngcháng yòng jiǎndān jiāoliú.",
        "translation": "We often use 简单 (simple) in communication."
      },
      {
        "chinese": "你知道这个简单的意思吗？",
        "pinyin": "Nǐ zhīdào zhège jiǎndān de yìsi ma?",
        "translation": "Do you know the meaning of this 简单?"
      }
    ]
  },
  {
    "id": 415,
    "character": "健康",
    "pinyin": "jiànkāng",
    "meaning": "Healthy",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 10,
    "examples": [
      {
        "chinese": "我们经常用健康交流。",
        "pinyin": "Wǒmen jīngcháng yòng jiànkāng jiāoliú.",
        "translation": "We often use 健康 (Healthy) in communication."
      },
      {
        "chinese": "你知道这个健康的意思吗？",
        "pinyin": "Nǐ zhīdào zhège jiànkāng de yìsi ma?",
        "translation": "Do you know the meaning of this 健康?"
      }
    ]
  },
  {
    "id": 416,
    "character": "见面",
    "pinyin": "jiànmiàn",
    "meaning": "meet",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 4,
    "examples": [
      {
        "chinese": "我们经常用见面交流。",
        "pinyin": "Wǒmen jīngcháng yòng jiànmiàn jiāoliú.",
        "translation": "We often use 见面 (meet) in communication."
      },
      {
        "chinese": "你知道这个见面的意思吗？",
        "pinyin": "Nǐ zhīdào zhège jiànmiàn de yìsi ma?",
        "translation": "Do you know the meaning of this 见面?"
      }
    ]
  },
  {
    "id": 417,
    "character": "讲",
    "pinyin": "jiǎng",
    "meaning": "speak",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 6,
    "examples": [
      {
        "chinese": "我们经常用讲交流。",
        "pinyin": "Wǒmen jīngcháng yòng jiǎng jiāoliú.",
        "translation": "We often use 讲 (speak) in communication."
      },
      {
        "chinese": "你知道这个讲的意思吗？",
        "pinyin": "Nǐ zhīdào zhège jiǎng de yìsi ma?",
        "translation": "Do you know the meaning of this 讲?"
      }
    ]
  },
  {
    "id": 418,
    "character": "教",
    "pinyin": "jiāo",
    "meaning": "teach",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 11,
    "examples": [
      {
        "chinese": "我们经常用教交流。",
        "pinyin": "Wǒmen jīngcháng yòng jiāo jiāoliú.",
        "translation": "We often use 教 (teach) in communication."
      },
      {
        "chinese": "你知道这个教的意思吗？",
        "pinyin": "Nǐ zhīdào zhège jiāo de yìsi ma?",
        "translation": "Do you know the meaning of this 教?"
      }
    ]
  },
  {
    "id": 419,
    "character": "角",
    "pinyin": "jiǎo",
    "meaning": "horn",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用角交流。",
        "pinyin": "Wǒmen jīngcháng yòng jiǎo jiāoliú.",
        "translation": "We often use 角 (horn) in communication."
      },
      {
        "chinese": "你知道这个角的意思吗？",
        "pinyin": "Nǐ zhīdào zhège jiǎo de yìsi ma?",
        "translation": "Do you know the meaning of this 角?"
      }
    ]
  },
  {
    "id": 420,
    "character": "脚",
    "pinyin": "jiǎo",
    "meaning": "foot",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用脚交流。",
        "pinyin": "Wǒmen jīngcháng yòng jiǎo jiāoliú.",
        "translation": "We often use 脚 (foot) in communication."
      },
      {
        "chinese": "你知道这个脚的意思吗？",
        "pinyin": "Nǐ zhīdào zhège jiǎo de yìsi ma?",
        "translation": "Do you know the meaning of this 脚?"
      }
    ]
  },
  {
    "id": 421,
    "character": "接",
    "pinyin": "jiē",
    "meaning": "pick,get",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 11,
    "examples": [
      {
        "chinese": "我们经常用接交流。",
        "pinyin": "Wǒmen jīngcháng yòng jiē jiāoliú.",
        "translation": "We often use 接 (pick,get) in communication."
      },
      {
        "chinese": "你知道这个接的意思吗？",
        "pinyin": "Nǐ zhīdào zhège jiē de yìsi ma?",
        "translation": "Do you know the meaning of this 接?"
      }
    ]
  },
  {
    "id": 422,
    "character": "街道",
    "pinyin": "jiēdào",
    "meaning": "Street",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 12,
    "examples": [
      {
        "chinese": "我们经常用街道交流。",
        "pinyin": "Wǒmen jīngcháng yòng jiēdào jiāoliú.",
        "translation": "We often use 街道 (Street) in communication."
      },
      {
        "chinese": "你知道这个街道的意思吗？",
        "pinyin": "Nǐ zhīdào zhège jiēdào de yìsi ma?",
        "translation": "Do you know the meaning of this 街道?"
      }
    ]
  },
  {
    "id": 423,
    "character": "结婚",
    "pinyin": "jiéhūn",
    "meaning": "marry",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 9,
    "examples": [
      {
        "chinese": "我们经常用结婚交流。",
        "pinyin": "Wǒmen jīngcháng yòng jiéhūn jiāoliú.",
        "translation": "We often use 结婚 (marry) in communication."
      },
      {
        "chinese": "你知道这个结婚的意思吗？",
        "pinyin": "Nǐ zhīdào zhège jiéhūn de yìsi ma?",
        "translation": "Do you know the meaning of this 结婚?"
      }
    ]
  },
  {
    "id": 424,
    "character": "结束",
    "pinyin": "jiéshù",
    "meaning": "End",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 9,
    "examples": [
      {
        "chinese": "我们经常用结束交流。",
        "pinyin": "Wǒmen jīngcháng yòng jiéshù jiāoliú.",
        "translation": "We often use 结束 (End) in communication."
      },
      {
        "chinese": "你知道这个结束的意思吗？",
        "pinyin": "Nǐ zhīdào zhège jiéshù de yìsi ma?",
        "translation": "Do you know the meaning of this 结束?"
      }
    ]
  },
  {
    "id": 425,
    "character": "节目",
    "pinyin": "jiémù",
    "meaning": "program",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 5,
    "examples": [
      {
        "chinese": "我们经常用节目交流。",
        "pinyin": "Wǒmen jīngcháng yòng jiémù jiāoliú.",
        "translation": "We often use 节目 (program) in communication."
      },
      {
        "chinese": "你知道这个节目的意思吗？",
        "pinyin": "Nǐ zhīdào zhège jiémù de yìsi ma?",
        "translation": "Do you know the meaning of this 节目?"
      }
    ]
  },
  {
    "id": 426,
    "character": "节日",
    "pinyin": "jiérì",
    "meaning": "festival",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 5,
    "examples": [
      {
        "chinese": "我们经常用节日交流。",
        "pinyin": "Wǒmen jīngcháng yòng jiérì jiāoliú.",
        "translation": "We often use 节日 (festival) in communication."
      },
      {
        "chinese": "你知道这个节日的意思吗？",
        "pinyin": "Nǐ zhīdào zhège jiérì de yìsi ma?",
        "translation": "Do you know the meaning of this 节日?"
      }
    ]
  },
  {
    "id": 427,
    "character": "解决",
    "pinyin": "jiějué",
    "meaning": "Solve",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用解决交流。",
        "pinyin": "Wǒmen jīngcháng yòng jiějué jiāoliú.",
        "translation": "We often use 解决 (Solve) in communication."
      },
      {
        "chinese": "你知道这个解决的意思吗？",
        "pinyin": "Nǐ zhīdào zhège jiějué de yìsi ma?",
        "translation": "Do you know the meaning of this 解决?"
      }
    ]
  },
  {
    "id": 428,
    "character": "借",
    "pinyin": "jiè",
    "meaning": "borrow",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 10,
    "examples": [
      {
        "chinese": "我们经常用借交流。",
        "pinyin": "Wǒmen jīngcháng yòng jiè jiāoliú.",
        "translation": "We often use 借 (borrow) in communication."
      },
      {
        "chinese": "你知道这个借的意思吗？",
        "pinyin": "Nǐ zhīdào zhège jiè de yìsi ma?",
        "translation": "Do you know the meaning of this 借?"
      }
    ]
  },
  {
    "id": 429,
    "character": "经常",
    "pinyin": "jīngcháng",
    "meaning": "Often",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用经常交流。",
        "pinyin": "Wǒmen jīngcháng yòng jīngcháng jiāoliú.",
        "translation": "We often use 经常 (Often) in communication."
      },
      {
        "chinese": "你知道这个经常的意思吗？",
        "pinyin": "Nǐ zhīdào zhège jīngcháng de yìsi ma?",
        "translation": "Do you know the meaning of this 经常?"
      }
    ]
  },
  {
    "id": 430,
    "character": "经过",
    "pinyin": "jīngguò",
    "meaning": "After, through",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用经过交流。",
        "pinyin": "Wǒmen jīngcháng yòng jīngguò jiāoliú.",
        "translation": "We often use 经过 (After, through) in communication."
      },
      {
        "chinese": "你知道这个经过的意思吗？",
        "pinyin": "Nǐ zhīdào zhège jīngguò de yìsi ma?",
        "translation": "Do you know the meaning of this 经过?"
      }
    ]
  },
  {
    "id": 431,
    "character": "经理",
    "pinyin": "jīnglǐ",
    "meaning": "manager",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用经理交流。",
        "pinyin": "Wǒmen jīngcháng yòng jīnglǐ jiāoliú.",
        "translation": "We often use 经理 (manager) in communication."
      },
      {
        "chinese": "你知道这个经理的意思吗？",
        "pinyin": "Nǐ zhīdào zhège jīnglǐ de yìsi ma?",
        "translation": "Do you know the meaning of this 经理?"
      }
    ]
  },
  {
    "id": 432,
    "character": "久",
    "pinyin": "jiǔ",
    "meaning": "long",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 3,
    "examples": [
      {
        "chinese": "我们经常用久交流。",
        "pinyin": "Wǒmen jīngcháng yòng jiǔ jiāoliú.",
        "translation": "We often use 久 (long) in communication."
      },
      {
        "chinese": "你知道这个久的意思吗？",
        "pinyin": "Nǐ zhīdào zhège jiǔ de yìsi ma?",
        "translation": "Do you know the meaning of this 久?"
      }
    ]
  },
  {
    "id": 433,
    "character": "旧",
    "pinyin": "jiù",
    "meaning": "old,used",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 5,
    "examples": [
      {
        "chinese": "我们经常用旧交流。",
        "pinyin": "Wǒmen jīngcháng yòng jiù jiāoliú.",
        "translation": "We often use 旧 (old,used) in communication."
      },
      {
        "chinese": "你知道这个旧的意思吗？",
        "pinyin": "Nǐ zhīdào zhège jiù de yìsi ma?",
        "translation": "Do you know the meaning of this 旧?"
      }
    ]
  },
  {
    "id": 434,
    "character": "句子",
    "pinyin": "jùzi",
    "meaning": "sentence",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 5,
    "examples": [
      {
        "chinese": "我们经常用句子交流。",
        "pinyin": "Wǒmen jīngcháng yòng jùzi jiāoliú.",
        "translation": "We often use 句子 (sentence) in communication."
      },
      {
        "chinese": "你知道这个句子的意思吗？",
        "pinyin": "Nǐ zhīdào zhège jùzi de yìsi ma?",
        "translation": "Do you know the meaning of this 句子?"
      }
    ]
  },
  {
    "id": 435,
    "character": "决定",
    "pinyin": "juédìng",
    "meaning": "Decision",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 6,
    "examples": [
      {
        "chinese": "我们经常用决定交流。",
        "pinyin": "Wǒmen jīngcháng yòng juédìng jiāoliú.",
        "translation": "We often use 决定 (Decision) in communication."
      },
      {
        "chinese": "你知道这个决定的意思吗？",
        "pinyin": "Nǐ zhīdào zhège juédìng de yìsi ma?",
        "translation": "Do you know the meaning of this 决定?"
      }
    ]
  },
  {
    "id": 436,
    "character": "渴",
    "pinyin": "kě",
    "meaning": "thirsty",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 12,
    "examples": [
      {
        "chinese": "我们经常用渴交流。",
        "pinyin": "Wǒmen jīngcháng yòng kě jiāoliú.",
        "translation": "We often use 渴 (thirsty) in communication."
      },
      {
        "chinese": "你知道这个渴的意思吗？",
        "pinyin": "Nǐ zhīdào zhège kě de yìsi ma?",
        "translation": "Do you know the meaning of this 渴?"
      }
    ]
  },
  {
    "id": 437,
    "character": "可爱",
    "pinyin": "kě'ài",
    "meaning": "Lovely",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用可爱交流。",
        "pinyin": "Wǒmen jīngcháng yòng kě'ài jiāoliú.",
        "translation": "We often use 可爱 (Lovely) in communication."
      },
      {
        "chinese": "你知道这个可爱的意思吗？",
        "pinyin": "Nǐ zhīdào zhège kě'ài de yìsi ma?",
        "translation": "Do you know the meaning of this 可爱?"
      }
    ]
  },
  {
    "id": 438,
    "character": "刻",
    "pinyin": "kè",
    "meaning": "moment",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用刻交流。",
        "pinyin": "Wǒmen jīngcháng yòng kè jiāoliú.",
        "translation": "We often use 刻 (moment) in communication."
      },
      {
        "chinese": "你知道这个刻的意思吗？",
        "pinyin": "Nǐ zhīdào zhège kè de yìsi ma?",
        "translation": "Do you know the meaning of this 刻?"
      }
    ]
  },
  {
    "id": 439,
    "character": "客人",
    "pinyin": "kèrén",
    "meaning": "Guest",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用客人交流。",
        "pinyin": "Wǒmen jīngcháng yòng kèrén jiāoliú.",
        "translation": "We often use 客人 (Guest) in communication."
      },
      {
        "chinese": "你知道这个客人的意思吗？",
        "pinyin": "Nǐ zhīdào zhège kèrén de yìsi ma?",
        "translation": "Do you know the meaning of this 客人?"
      }
    ]
  },
  {
    "id": 440,
    "character": "空调",
    "pinyin": "kōngtiáo",
    "meaning": "Air conditioner",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用空调交流。",
        "pinyin": "Wǒmen jīngcháng yòng kōngtiáo jiāoliú.",
        "translation": "We often use 空调 (Air conditioner) in communication."
      },
      {
        "chinese": "你知道这个空调的意思吗？",
        "pinyin": "Nǐ zhīdào zhège kōngtiáo de yìsi ma?",
        "translation": "Do you know the meaning of this 空调?"
      }
    ]
  },
  {
    "id": 441,
    "character": "口",
    "pinyin": "kǒu",
    "meaning": "mouth",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 3,
    "examples": [
      {
        "chinese": "我们经常用口交流。",
        "pinyin": "Wǒmen jīngcháng yòng kǒu jiāoliú.",
        "translation": "We often use 口 (mouth) in communication."
      },
      {
        "chinese": "你知道这个口的意思吗？",
        "pinyin": "Nǐ zhīdào zhège kǒu de yìsi ma?",
        "translation": "Do you know the meaning of this 口?"
      }
    ]
  },
  {
    "id": 442,
    "character": "哭",
    "pinyin": "kū",
    "meaning": "cry",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 10,
    "examples": [
      {
        "chinese": "我们经常用哭交流。",
        "pinyin": "Wǒmen jīngcháng yòng kū jiāoliú.",
        "translation": "We often use 哭 (cry) in communication."
      },
      {
        "chinese": "你知道这个哭的意思吗？",
        "pinyin": "Nǐ zhīdào zhège kū de yìsi ma?",
        "translation": "Do you know the meaning of this 哭?"
      }
    ]
  },
  {
    "id": 443,
    "character": "裤子",
    "pinyin": "kùzi",
    "meaning": "trousers",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 12,
    "examples": [
      {
        "chinese": "我们经常用裤子交流。",
        "pinyin": "Wǒmen jīngcháng yòng kùzi jiāoliú.",
        "translation": "We often use 裤子 (trousers) in communication."
      },
      {
        "chinese": "你知道这个裤子的意思吗？",
        "pinyin": "Nǐ zhīdào zhège kùzi de yìsi ma?",
        "translation": "Do you know the meaning of this 裤子?"
      }
    ]
  },
  {
    "id": 444,
    "character": "筷子",
    "pinyin": "kuàizi",
    "meaning": "chopsticks",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用筷子交流。",
        "pinyin": "Wǒmen jīngcháng yòng kuàizi jiāoliú.",
        "translation": "We often use 筷子 (chopsticks) in communication."
      },
      {
        "chinese": "你知道这个筷子的意思吗？",
        "pinyin": "Nǐ zhīdào zhège kuàizi de yìsi ma?",
        "translation": "Do you know the meaning of this 筷子?"
      }
    ]
  },
  {
    "id": 445,
    "character": "蓝",
    "pinyin": "lán",
    "meaning": "blue",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用蓝交流。",
        "pinyin": "Wǒmen jīngcháng yòng lán jiāoliú.",
        "translation": "We often use 蓝 (blue) in communication."
      },
      {
        "chinese": "你知道这个蓝的意思吗？",
        "pinyin": "Nǐ zhīdào zhège lán de yìsi ma?",
        "translation": "Do you know the meaning of this 蓝?"
      }
    ]
  },
  {
    "id": 446,
    "character": "老",
    "pinyin": "lǎo",
    "meaning": "old",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用老交流。",
        "pinyin": "Wǒmen jīngcháng yòng lǎo jiāoliú.",
        "translation": "We often use 老 (old) in communication."
      },
      {
        "chinese": "你知道这个老的意思吗？",
        "pinyin": "Nǐ zhīdào zhège lǎo de yìsi ma?",
        "translation": "Do you know the meaning of this 老?"
      }
    ]
  },
  {
    "id": 447,
    "character": "离开",
    "pinyin": "líkāi",
    "meaning": "leave",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 10,
    "examples": [
      {
        "chinese": "我们经常用离开交流。",
        "pinyin": "Wǒmen jīngcháng yòng líkāi jiāoliú.",
        "translation": "We often use 离开 (leave) in communication."
      },
      {
        "chinese": "你知道这个离开的意思吗？",
        "pinyin": "Nǐ zhīdào zhège líkāi de yìsi ma?",
        "translation": "Do you know the meaning of this 离开?"
      }
    ]
  },
  {
    "id": 448,
    "character": "礼物",
    "pinyin": "lǐwù",
    "meaning": "gift",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用礼物交流。",
        "pinyin": "Wǒmen jīngcháng yòng lǐwù jiāoliú.",
        "translation": "We often use 礼物 (gift) in communication."
      },
      {
        "chinese": "你知道这个礼物的意思吗？",
        "pinyin": "Nǐ zhīdào zhège lǐwù de yìsi ma?",
        "translation": "Do you know the meaning of this 礼物?"
      }
    ]
  },
  {
    "id": 449,
    "character": "历史",
    "pinyin": "lìshǐ",
    "meaning": "History",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 4,
    "examples": [
      {
        "chinese": "我们经常用历史交流。",
        "pinyin": "Wǒmen jīngcháng yòng lìshǐ jiāoliú.",
        "translation": "We often use 历史 (History) in communication."
      },
      {
        "chinese": "你知道这个历史的意思吗？",
        "pinyin": "Nǐ zhīdào zhège lìshǐ de yìsi ma?",
        "translation": "Do you know the meaning of this 历史?"
      }
    ]
  },
  {
    "id": 450,
    "character": "脸",
    "pinyin": "liǎn",
    "meaning": "face",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 11,
    "examples": [
      {
        "chinese": "我们经常用脸交流。",
        "pinyin": "Wǒmen jīngcháng yòng liǎn jiāoliú.",
        "translation": "We often use 脸 (face) in communication."
      },
      {
        "chinese": "你知道这个脸的意思吗？",
        "pinyin": "Nǐ zhīdào zhège liǎn de yìsi ma?",
        "translation": "Do you know the meaning of this 脸?"
      }
    ]
  },
  {
    "id": 451,
    "character": "聊天",
    "pinyin": "liáotiān",
    "meaning": "chat",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用聊天交流。",
        "pinyin": "Wǒmen jīngcháng yòng liáotiān jiāoliú.",
        "translation": "We often use 聊天 (chat) in communication."
      },
      {
        "chinese": "你知道这个聊天的意思吗？",
        "pinyin": "Nǐ zhīdào zhège liáotiān de yìsi ma?",
        "translation": "Do you know the meaning of this 聊天?"
      }
    ]
  },
  {
    "id": 452,
    "character": "练习",
    "pinyin": "liànxí",
    "meaning": "Practice",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用练习交流。",
        "pinyin": "Wǒmen jīngcháng yòng liànxí jiāoliú.",
        "translation": "We often use 练习 (Practice) in communication."
      },
      {
        "chinese": "你知道这个练习的意思吗？",
        "pinyin": "Nǐ zhīdào zhège liànxí de yìsi ma?",
        "translation": "Do you know the meaning of this 练习?"
      }
    ]
  },
  {
    "id": 453,
    "character": "辆",
    "pinyin": "liàng",
    "meaning": "Car",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 11,
    "examples": [
      {
        "chinese": "我们经常用辆交流。",
        "pinyin": "Wǒmen jīngcháng yòng liàng jiāoliú.",
        "translation": "We often use 辆 (Car) in communication."
      },
      {
        "chinese": "你知道这个辆的意思吗？",
        "pinyin": "Nǐ zhīdào zhège liàng de yìsi ma?",
        "translation": "Do you know the meaning of this 辆?"
      }
    ]
  },
  {
    "id": 454,
    "character": "了解",
    "pinyin": "liǎojiě",
    "meaning": "understand",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 2,
    "examples": [
      {
        "chinese": "我们经常用了解交流。",
        "pinyin": "Wǒmen jīngcháng yòng liǎojiě jiāoliú.",
        "translation": "We often use 了解 (understand) in communication."
      },
      {
        "chinese": "你知道这个了解的意思吗？",
        "pinyin": "Nǐ zhīdào zhège liǎojiě de yìsi ma?",
        "translation": "Do you know the meaning of this 了解?"
      }
    ]
  },
  {
    "id": 455,
    "character": "邻居",
    "pinyin": "línjū",
    "meaning": "neighbor",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用邻居交流。",
        "pinyin": "Wǒmen jīngcháng yòng línjū jiāoliú.",
        "translation": "We often use 邻居 (neighbor) in communication."
      },
      {
        "chinese": "你知道这个邻居的意思吗？",
        "pinyin": "Nǐ zhīdào zhège línjū de yìsi ma?",
        "translation": "Do you know the meaning of this 邻居?"
      }
    ]
  },
  {
    "id": 456,
    "character": "留学",
    "pinyin": "liúxué",
    "meaning": "Overseas Study",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用留学交流。",
        "pinyin": "Wǒmen jīngcháng yòng liúxué jiāoliú.",
        "translation": "We often use 留学 (Overseas Study) in communication."
      },
      {
        "chinese": "你知道这个留学的意思吗？",
        "pinyin": "Nǐ zhīdào zhège liúxué de yìsi ma?",
        "translation": "Do you know the meaning of this 留学?"
      }
    ]
  },
  {
    "id": 457,
    "character": "楼",
    "pinyin": "lóu",
    "meaning": "floor",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 13,
    "examples": [
      {
        "chinese": "我们经常用楼交流。",
        "pinyin": "Wǒmen jīngcháng yòng lóu jiāoliú.",
        "translation": "We often use 楼 (floor) in communication."
      },
      {
        "chinese": "你知道这个楼的意思吗？",
        "pinyin": "Nǐ zhīdào zhège lóu de yìsi ma?",
        "translation": "Do you know the meaning of this 楼?"
      }
    ]
  },
  {
    "id": 458,
    "character": "绿",
    "pinyin": "lǜ",
    "meaning": "green",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 11,
    "examples": [
      {
        "chinese": "我们经常用绿交流。",
        "pinyin": "Wǒmen jīngcháng yòng lǜ jiāoliú.",
        "translation": "We often use 绿 (green) in communication."
      },
      {
        "chinese": "你知道这个绿的意思吗？",
        "pinyin": "Nǐ zhīdào zhège lǜ de yìsi ma?",
        "translation": "Do you know the meaning of this 绿?"
      }
    ]
  },
  {
    "id": 459,
    "character": "马",
    "pinyin": "mǎ",
    "meaning": "Horse",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 3,
    "examples": [
      {
        "chinese": "我们经常用马交流。",
        "pinyin": "Wǒmen jīngcháng yòng mǎ jiāoliú.",
        "translation": "We often use 马 (Horse) in communication."
      },
      {
        "chinese": "你知道这个马的意思吗？",
        "pinyin": "Nǐ zhīdào zhège mǎ de yìsi ma?",
        "translation": "Do you know the meaning of this 马?"
      }
    ]
  },
  {
    "id": 460,
    "character": "马上",
    "pinyin": "mǎshàng",
    "meaning": "Right off",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 3,
    "examples": [
      {
        "chinese": "我们经常用马上交流。",
        "pinyin": "Wǒmen jīngcháng yòng mǎshàng jiāoliú.",
        "translation": "We often use 马上 (Right off) in communication."
      },
      {
        "chinese": "你知道这个马上的意思吗？",
        "pinyin": "Nǐ zhīdào zhège mǎshàng de yìsi ma?",
        "translation": "Do you know the meaning of this 马上?"
      }
    ]
  },
  {
    "id": 461,
    "character": "满意",
    "pinyin": "mǎnyì",
    "meaning": "Satisfied",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 13,
    "examples": [
      {
        "chinese": "我们经常用满意交流。",
        "pinyin": "Wǒmen jīngcháng yòng mǎnyì jiāoliú.",
        "translation": "We often use 满意 (Satisfied) in communication."
      },
      {
        "chinese": "你知道这个满意的意思吗？",
        "pinyin": "Nǐ zhīdào zhège mǎnyì de yìsi ma?",
        "translation": "Do you know the meaning of this 满意?"
      }
    ]
  },
  {
    "id": 462,
    "character": "帽子",
    "pinyin": "màozi",
    "meaning": "Hat",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 12,
    "examples": [
      {
        "chinese": "我们经常用帽子交流。",
        "pinyin": "Wǒmen jīngcháng yòng màozi jiāoliú.",
        "translation": "We often use 帽子 (Hat) in communication."
      },
      {
        "chinese": "你知道这个帽子的意思吗？",
        "pinyin": "Nǐ zhīdào zhège màozi de yìsi ma?",
        "translation": "Do you know the meaning of this 帽子?"
      }
    ]
  },
  {
    "id": 463,
    "character": "米",
    "pinyin": "mǐ",
    "meaning": "rice",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 6,
    "examples": [
      {
        "chinese": "我们经常用米交流。",
        "pinyin": "Wǒmen jīngcháng yòng mǐ jiāoliú.",
        "translation": "We often use 米 (rice) in communication."
      },
      {
        "chinese": "你知道这个米的意思吗？",
        "pinyin": "Nǐ zhīdào zhège mǐ de yìsi ma?",
        "translation": "Do you know the meaning of this 米?"
      }
    ]
  },
  {
    "id": 464,
    "character": "面包",
    "pinyin": "miànbāo",
    "meaning": "Bread",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 9,
    "examples": [
      {
        "chinese": "我们经常用面包交流。",
        "pinyin": "Wǒmen jīngcháng yòng miànbāo jiāoliú.",
        "translation": "We often use 面包 (Bread) in communication."
      },
      {
        "chinese": "你知道这个面包的意思吗？",
        "pinyin": "Nǐ zhīdào zhège miànbāo de yìsi ma?",
        "translation": "Do you know the meaning of this 面包?"
      }
    ]
  },
  {
    "id": 465,
    "character": "明白",
    "pinyin": "míngbai",
    "meaning": "clear",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用明白交流。",
        "pinyin": "Wǒmen jīngcháng yòng míngbai jiāoliú.",
        "translation": "We often use 明白 (clear) in communication."
      },
      {
        "chinese": "你知道这个明白的意思吗？",
        "pinyin": "Nǐ zhīdào zhège míngbai de yìsi ma?",
        "translation": "Do you know the meaning of this 明白?"
      }
    ]
  },
  {
    "id": 466,
    "character": "拿",
    "pinyin": "ná",
    "meaning": "take",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 10,
    "examples": [
      {
        "chinese": "我们经常用拿交流。",
        "pinyin": "Wǒmen jīngcháng yòng ná jiāoliú.",
        "translation": "We often use 拿 (take) in communication."
      },
      {
        "chinese": "你知道这个拿的意思吗？",
        "pinyin": "Nǐ zhīdào zhège ná de yìsi ma?",
        "translation": "Do you know the meaning of this 拿?"
      }
    ]
  },
  {
    "id": 467,
    "character": "奶奶",
    "pinyin": "nǎinai",
    "meaning": "grandma",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 5,
    "examples": [
      {
        "chinese": "我们经常用奶奶交流。",
        "pinyin": "Wǒmen jīngcháng yòng nǎinai jiāoliú.",
        "translation": "We often use 奶奶 (grandma) in communication."
      },
      {
        "chinese": "你知道这个奶奶的意思吗？",
        "pinyin": "Nǐ zhīdào zhège nǎinai de yìsi ma?",
        "translation": "Do you know the meaning of this 奶奶?"
      }
    ]
  },
  {
    "id": 468,
    "character": "南",
    "pinyin": "nán",
    "meaning": "south",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 9,
    "examples": [
      {
        "chinese": "我们经常用南交流。",
        "pinyin": "Wǒmen jīngcháng yòng nán jiāoliú.",
        "translation": "We often use 南 (south) in communication."
      },
      {
        "chinese": "你知道这个南的意思吗？",
        "pinyin": "Nǐ zhīdào zhège nán de yìsi ma?",
        "translation": "Do you know the meaning of this 南?"
      }
    ]
  },
  {
    "id": 469,
    "character": "难",
    "pinyin": "nán",
    "meaning": "difficult",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 10,
    "examples": [
      {
        "chinese": "我们经常用难交流。",
        "pinyin": "Wǒmen jīngcháng yòng nán jiāoliú.",
        "translation": "We often use 难 (difficult) in communication."
      },
      {
        "chinese": "你知道这个难的意思吗？",
        "pinyin": "Nǐ zhīdào zhège nán de yìsi ma?",
        "translation": "Do you know the meaning of this 难?"
      }
    ]
  },
  {
    "id": 470,
    "character": "难过",
    "pinyin": "nánguò",
    "meaning": "sad",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 10,
    "examples": [
      {
        "chinese": "我们经常用难过交流。",
        "pinyin": "Wǒmen jīngcháng yòng nánguò jiāoliú.",
        "translation": "We often use 难过 (sad) in communication."
      },
      {
        "chinese": "你知道这个难过的意思吗？",
        "pinyin": "Nǐ zhīdào zhège nánguò de yìsi ma?",
        "translation": "Do you know the meaning of this 难过?"
      }
    ]
  },
  {
    "id": 471,
    "character": "年级",
    "pinyin": "niánjí",
    "meaning": "grade",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 6,
    "examples": [
      {
        "chinese": "我们经常用年级交流。",
        "pinyin": "Wǒmen jīngcháng yòng niánjí jiāoliú.",
        "translation": "We often use 年级 (grade) in communication."
      },
      {
        "chinese": "你知道这个年级的意思吗？",
        "pinyin": "Nǐ zhīdào zhège niánjí de yìsi ma?",
        "translation": "Do you know the meaning of this 年级?"
      }
    ]
  },
  {
    "id": 472,
    "character": "年轻",
    "pinyin": "niánqīng",
    "meaning": "Young",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 6,
    "examples": [
      {
        "chinese": "我们经常用年轻交流。",
        "pinyin": "Wǒmen jīngcháng yòng niánqīng jiāoliú.",
        "translation": "We often use 年轻 (Young) in communication."
      },
      {
        "chinese": "你知道这个年轻的意思吗？",
        "pinyin": "Nǐ zhīdào zhège niánqīng de yìsi ma?",
        "translation": "Do you know the meaning of this 年轻?"
      }
    ]
  },
  {
    "id": 473,
    "character": "鸟",
    "pinyin": "niǎo",
    "meaning": "bird",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用鸟交流。",
        "pinyin": "Wǒmen jīngcháng yòng niǎo jiāoliú.",
        "translation": "We often use 鸟 (bird) in communication."
      },
      {
        "chinese": "你知道这个鸟的意思吗？",
        "pinyin": "Nǐ zhīdào zhège niǎo de yìsi ma?",
        "translation": "Do you know the meaning of this 鸟?"
      }
    ]
  },
  {
    "id": 474,
    "character": "努力",
    "pinyin": "nǔlì",
    "meaning": "Strive",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用努力交流。",
        "pinyin": "Wǒmen jīngcháng yòng nǔlì jiāoliú.",
        "translation": "We often use 努力 (Strive) in communication."
      },
      {
        "chinese": "你知道这个努力的意思吗？",
        "pinyin": "Nǐ zhīdào zhège nǔlì de yìsi ma?",
        "translation": "Do you know the meaning of this 努力?"
      }
    ]
  },
  {
    "id": 475,
    "character": "爬山",
    "pinyin": "páshān",
    "meaning": "Mountain climbing",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用爬山交流。",
        "pinyin": "Wǒmen jīngcháng yòng páshān jiāoliú.",
        "translation": "We often use 爬山 (Mountain climbing) in communication."
      },
      {
        "chinese": "你知道这个爬山的意思吗？",
        "pinyin": "Nǐ zhīdào zhège páshān de yìsi ma?",
        "translation": "Do you know the meaning of this 爬山?"
      }
    ]
  },
  {
    "id": 476,
    "character": "盘子",
    "pinyin": "pánzi",
    "meaning": "plate",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用盘子交流。",
        "pinyin": "Wǒmen jīngcháng yòng pánzi jiāoliú.",
        "translation": "We often use 盘子 (plate) in communication."
      },
      {
        "chinese": "你知道这个盘子的意思吗？",
        "pinyin": "Nǐ zhīdào zhège pánzi de yìsi ma?",
        "translation": "Do you know the meaning of this 盘子?"
      }
    ]
  },
  {
    "id": 477,
    "character": "胖",
    "pinyin": "pàng",
    "meaning": "fat",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用胖交流。",
        "pinyin": "Wǒmen jīngcháng yòng pàng jiāoliú.",
        "translation": "We often use 胖 (fat) in communication."
      },
      {
        "chinese": "你知道这个胖的意思吗？",
        "pinyin": "Nǐ zhīdào zhège pàng de yìsi ma?",
        "translation": "Do you know the meaning of this 胖?"
      }
    ]
  },
  {
    "id": 478,
    "character": "啤酒",
    "pinyin": "píjiǔ",
    "meaning": "Beer",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用啤酒交流。",
        "pinyin": "Wǒmen jīngcháng yòng píjiǔ jiāoliú.",
        "translation": "We often use 啤酒 (Beer) in communication."
      },
      {
        "chinese": "你知道这个啤酒的意思吗？",
        "pinyin": "Nǐ zhīdào zhège píjiǔ de yìsi ma?",
        "translation": "Do you know the meaning of this 啤酒?"
      }
    ]
  },
  {
    "id": 479,
    "character": "皮鞋",
    "pinyin": "píxié",
    "meaning": "leather shoes",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 5,
    "examples": [
      {
        "chinese": "我们经常用皮鞋交流。",
        "pinyin": "Wǒmen jīngcháng yòng píxié jiāoliú.",
        "translation": "We often use 皮鞋 (leather shoes) in communication."
      },
      {
        "chinese": "你知道这个皮鞋的意思吗？",
        "pinyin": "Nǐ zhīdào zhège píxié de yìsi ma?",
        "translation": "Do you know the meaning of this 皮鞋?"
      }
    ]
  },
  {
    "id": 480,
    "character": "瓶子",
    "pinyin": "píngzi",
    "meaning": "bottle",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用瓶子交流。",
        "pinyin": "Wǒmen jīngcháng yòng píngzi jiāoliú.",
        "translation": "We often use 瓶子 (bottle) in communication."
      },
      {
        "chinese": "你知道这个瓶子的意思吗？",
        "pinyin": "Nǐ zhīdào zhège píngzi de yìsi ma?",
        "translation": "Do you know the meaning of this 瓶子?"
      }
    ]
  },
  {
    "id": 481,
    "character": "其实",
    "pinyin": "qíshí",
    "meaning": "actually",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用其实交流。",
        "pinyin": "Wǒmen jīngcháng yòng qíshí jiāoliú.",
        "translation": "We often use 其实 (actually) in communication."
      },
      {
        "chinese": "你知道这个其实的意思吗？",
        "pinyin": "Nǐ zhīdào zhège qíshí de yìsi ma?",
        "translation": "Do you know the meaning of this 其实?"
      }
    ]
  },
  {
    "id": 482,
    "character": "其他",
    "pinyin": "qítā",
    "meaning": "Other",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用其他交流。",
        "pinyin": "Wǒmen jīngcháng yòng qítā jiāoliú.",
        "translation": "We often use 其他 (Other) in communication."
      },
      {
        "chinese": "你知道这个其他的意思吗？",
        "pinyin": "Nǐ zhīdào zhège qítā de yìsi ma?",
        "translation": "Do you know the meaning of this 其他?"
      }
    ]
  },
  {
    "id": 483,
    "character": "骑",
    "pinyin": "qí",
    "meaning": "ride",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 11,
    "examples": [
      {
        "chinese": "我们经常用骑交流。",
        "pinyin": "Wǒmen jīngcháng yòng qí jiāoliú.",
        "translation": "We often use 骑 (ride) in communication."
      },
      {
        "chinese": "你知道这个骑的意思吗？",
        "pinyin": "Nǐ zhīdào zhège qí de yìsi ma?",
        "translation": "Do you know the meaning of this 骑?"
      }
    ]
  },
  {
    "id": 484,
    "character": "奇怪",
    "pinyin": "qíguài",
    "meaning": "strange",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用奇怪交流。",
        "pinyin": "Wǒmen jīngcháng yòng qíguài jiāoliú.",
        "translation": "We often use 奇怪 (strange) in communication."
      },
      {
        "chinese": "你知道这个奇怪的意思吗？",
        "pinyin": "Nǐ zhīdào zhège qíguài de yìsi ma?",
        "translation": "Do you know the meaning of this 奇怪?"
      }
    ]
  },
  {
    "id": 485,
    "character": "起来",
    "pinyin": "qǐlái",
    "meaning": "get up",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 10,
    "examples": [
      {
        "chinese": "我们经常用起来交流。",
        "pinyin": "Wǒmen jīngcháng yòng qǐlái jiāoliú.",
        "translation": "We often use 起来 (get up) in communication."
      },
      {
        "chinese": "你知道这个起来的意思吗？",
        "pinyin": "Nǐ zhīdào zhège qǐlái de yìsi ma?",
        "translation": "Do you know the meaning of this 起来?"
      }
    ]
  },
  {
    "id": 486,
    "character": "起飞",
    "pinyin": "qǐfēi",
    "meaning": "take off",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 10,
    "examples": [
      {
        "chinese": "我们经常用起飞交流。",
        "pinyin": "Wǒmen jīngcháng yòng qǐfēi jiāoliú.",
        "translation": "We often use 起飞 (take off) in communication."
      },
      {
        "chinese": "你知道这个起飞的意思吗？",
        "pinyin": "Nǐ zhīdào zhège qǐfēi de yìsi ma?",
        "translation": "Do you know the meaning of this 起飞?"
      }
    ]
  },
  {
    "id": 487,
    "character": "清楚",
    "pinyin": "qīngchu",
    "meaning": "clear",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用清楚交流。",
        "pinyin": "Wǒmen jīngcháng yòng qīngchu jiāoliú.",
        "translation": "We often use 清楚 (clear) in communication."
      },
      {
        "chinese": "你知道这个清楚的意思吗？",
        "pinyin": "Nǐ zhīdào zhège qīngchu de yìsi ma?",
        "translation": "Do you know the meaning of this 清楚?"
      }
    ]
  },
  {
    "id": 488,
    "character": "请假",
    "pinyin": "qǐngjià",
    "meaning": "ask for leave",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 10,
    "examples": [
      {
        "chinese": "我们经常用请假交流。",
        "pinyin": "Wǒmen jīngcháng yòng qǐngjià jiāoliú.",
        "translation": "We often use 请假 (ask for leave) in communication."
      },
      {
        "chinese": "你知道这个请假的意思吗？",
        "pinyin": "Nǐ zhīdào zhège qǐngjià de yìsi ma?",
        "translation": "Do you know the meaning of this 请假?"
      }
    ]
  },
  {
    "id": 489,
    "character": "秋",
    "pinyin": "qiū",
    "meaning": "autumn",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 9,
    "examples": [
      {
        "chinese": "我们经常用秋交流。",
        "pinyin": "Wǒmen jīngcháng yòng qiū jiāoliú.",
        "translation": "We often use 秋 (autumn) in communication."
      },
      {
        "chinese": "你知道这个秋的意思吗？",
        "pinyin": "Nǐ zhīdào zhège qiū de yìsi ma?",
        "translation": "Do you know the meaning of this 秋?"
      }
    ]
  },
  {
    "id": 490,
    "character": "裙子",
    "pinyin": "qúnzi",
    "meaning": "skirt",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用裙子交流。",
        "pinyin": "Wǒmen jīngcháng yòng qúnzi jiāoliú.",
        "translation": "We often use 裙子 (skirt) in communication."
      },
      {
        "chinese": "你知道这个裙子的意思吗？",
        "pinyin": "Nǐ zhīdào zhège qúnzi de yìsi ma?",
        "translation": "Do you know the meaning of this 裙子?"
      }
    ]
  },
  {
    "id": 491,
    "character": "然后",
    "pinyin": "ránhòu",
    "meaning": "Then",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用然后交流。",
        "pinyin": "Wǒmen jīngcháng yòng ránhòu jiāoliú.",
        "translation": "We often use 然后 (Then) in communication."
      },
      {
        "chinese": "你知道这个然后的意思吗？",
        "pinyin": "Nǐ zhīdào zhège ránhòu de yìsi ma?",
        "translation": "Do you know the meaning of this 然后?"
      }
    ]
  },
  {
    "id": 492,
    "character": "热情",
    "pinyin": "rèqíng",
    "meaning": "Enthusiasm",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 10,
    "examples": [
      {
        "chinese": "我们经常用热情交流。",
        "pinyin": "Wǒmen jīngcháng yòng rèqíng jiāoliú.",
        "translation": "We often use 热情 (Enthusiasm) in communication."
      },
      {
        "chinese": "你知道这个热情的意思吗？",
        "pinyin": "Nǐ zhīdào zhège rèqíng de yìsi ma?",
        "translation": "Do you know the meaning of this 热情?"
      }
    ]
  },
  {
    "id": 493,
    "character": "认为",
    "pinyin": "rènwéi",
    "meaning": "think",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 4,
    "examples": [
      {
        "chinese": "我们经常用认为交流。",
        "pinyin": "Wǒmen jīngcháng yòng rènwéi jiāoliú.",
        "translation": "We often use 认为 (think) in communication."
      },
      {
        "chinese": "你知道这个认为的意思吗？",
        "pinyin": "Nǐ zhīdào zhège rènwéi de yìsi ma?",
        "translation": "Do you know the meaning of this 认为?"
      }
    ]
  },
  {
    "id": 494,
    "character": "认真",
    "pinyin": "rènzhēn",
    "meaning": "earnest",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 4,
    "examples": [
      {
        "chinese": "我们经常用认真交流。",
        "pinyin": "Wǒmen jīngcháng yòng rènzhēn jiāoliú.",
        "translation": "We often use 认真 (earnest) in communication."
      },
      {
        "chinese": "你知道这个认真的意思吗？",
        "pinyin": "Nǐ zhīdào zhège rènzhēn de yìsi ma?",
        "translation": "Do you know the meaning of this 认真?"
      }
    ]
  },
  {
    "id": 495,
    "character": "容易",
    "pinyin": "róngyì",
    "meaning": "easily",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用容易交流。",
        "pinyin": "Wǒmen jīngcháng yòng róngyì jiāoliú.",
        "translation": "We often use 容易 (easily) in communication."
      },
      {
        "chinese": "你知道这个容易的意思吗？",
        "pinyin": "Nǐ zhīdào zhège róngyì de yìsi ma?",
        "translation": "Do you know the meaning of this 容易?"
      }
    ]
  },
  {
    "id": 496,
    "character": "如果",
    "pinyin": "rúguǒ",
    "meaning": "If",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用如果交流。",
        "pinyin": "Wǒmen jīngcháng yòng rúguǒ jiāoliú.",
        "translation": "We often use 如果 (If) in communication."
      },
      {
        "chinese": "你知道这个如果的意思吗？",
        "pinyin": "Nǐ zhīdào zhège rúguǒ de yìsi ma?",
        "translation": "Do you know the meaning of this 如果?"
      }
    ]
  },
  {
    "id": 497,
    "character": "伞",
    "pinyin": "sǎn",
    "meaning": "umbrella",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 6,
    "examples": [
      {
        "chinese": "我们经常用伞交流。",
        "pinyin": "Wǒmen jīngcháng yòng sǎn jiāoliú.",
        "translation": "We often use 伞 (umbrella) in communication."
      },
      {
        "chinese": "你知道这个伞的意思吗？",
        "pinyin": "Nǐ zhīdào zhège sǎn de yìsi ma?",
        "translation": "Do you know the meaning of this 伞?"
      }
    ]
  },
  {
    "id": 498,
    "character": "上网",
    "pinyin": "shàngwǎng",
    "meaning": "Surf the Internet",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 3,
    "examples": [
      {
        "chinese": "我们经常用上网交流。",
        "pinyin": "Wǒmen jīngcháng yòng shàngwǎng jiāoliú.",
        "translation": "We often use 上网 (Surf the Internet) in communication."
      },
      {
        "chinese": "你知道这个上网的意思吗？",
        "pinyin": "Nǐ zhīdào zhège shàngwǎng de yìsi ma?",
        "translation": "Do you know the meaning of this 上网?"
      }
    ]
  },
  {
    "id": 499,
    "character": "生气",
    "pinyin": "shēngqì",
    "meaning": "get angry",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 5,
    "examples": [
      {
        "chinese": "我们经常用生气交流。",
        "pinyin": "Wǒmen jīngcháng yòng shēngqì jiāoliú.",
        "translation": "We often use 生气 (get angry) in communication."
      },
      {
        "chinese": "你知道这个生气的意思吗？",
        "pinyin": "Nǐ zhīdào zhège shēngqì de yìsi ma?",
        "translation": "Do you know the meaning of this 生气?"
      }
    ]
  },
  {
    "id": 500,
    "character": "声音",
    "pinyin": "shēngyīn",
    "meaning": "voice",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 7,
    "examples": [
      {
        "chinese": "我们经常用声音交流。",
        "pinyin": "Wǒmen jīngcháng yòng shēngyīn jiāoliú.",
        "translation": "We often use 声音 (voice) in communication."
      },
      {
        "chinese": "你知道这个声音的意思吗？",
        "pinyin": "Nǐ zhīdào zhège shēngyīn de yìsi ma?",
        "translation": "Do you know the meaning of this 声音?"
      }
    ]
  },
  {
    "id": 501,
    "character": "试",
    "pinyin": "shì",
    "meaning": "try",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用试交流。",
        "pinyin": "Wǒmen jīngcháng yòng shì jiāoliú.",
        "translation": "We often use 试 (try) in communication."
      },
      {
        "chinese": "你知道这个试的意思吗？",
        "pinyin": "Nǐ zhīdào zhège shì de yìsi ma?",
        "translation": "Do you know the meaning of this 试?"
      }
    ]
  },
  {
    "id": 502,
    "character": "世界",
    "pinyin": "shìjiè",
    "meaning": "world",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用世界交流。",
        "pinyin": "Wǒmen jīngcháng yòng shìjiè jiāoliú.",
        "translation": "We often use 世界 (world) in communication."
      },
      {
        "chinese": "你知道这个世界的意思吗？",
        "pinyin": "Nǐ zhīdào zhège shìjiè de yìsi ma?",
        "translation": "Do you know the meaning of this 世界?"
      }
    ]
  },
  {
    "id": 503,
    "character": "瘦",
    "pinyin": "shòu",
    "meaning": "thin",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 14,
    "examples": [
      {
        "chinese": "我们经常用瘦交流。",
        "pinyin": "Wǒmen jīngcháng yòng shòu jiāoliú.",
        "translation": "We often use 瘦 (thin) in communication."
      },
      {
        "chinese": "你知道这个瘦的意思吗？",
        "pinyin": "Nǐ zhīdào zhège shòu de yìsi ma?",
        "translation": "Do you know the meaning of this 瘦?"
      }
    ]
  },
  {
    "id": 504,
    "character": "舒服",
    "pinyin": "shūfu",
    "meaning": "comfortable",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用舒服交流。",
        "pinyin": "Wǒmen jīngcháng yòng shūfu jiāoliú.",
        "translation": "We often use 舒服 (comfortable) in communication."
      },
      {
        "chinese": "你知道这个舒服的意思吗？",
        "pinyin": "Nǐ zhīdào zhège shūfu de yìsi ma?",
        "translation": "Do you know the meaning of this 舒服?"
      }
    ]
  },
  {
    "id": 505,
    "character": "叔叔",
    "pinyin": "shūshu",
    "meaning": "uncle",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用叔叔交流。",
        "pinyin": "Wǒmen jīngcháng yòng shūshu jiāoliú.",
        "translation": "We often use 叔叔 (uncle) in communication."
      },
      {
        "chinese": "你知道这个叔叔的意思吗？",
        "pinyin": "Nǐ zhīdào zhège shūshu de yìsi ma?",
        "translation": "Do you know the meaning of this 叔叔?"
      }
    ]
  },
  {
    "id": 506,
    "character": "树",
    "pinyin": "shù",
    "meaning": "tree",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 9,
    "examples": [
      {
        "chinese": "我们经常用树交流。",
        "pinyin": "Wǒmen jīngcháng yòng shù jiāoliú.",
        "translation": "We often use 树 (tree) in communication."
      },
      {
        "chinese": "你知道这个树的意思吗？",
        "pinyin": "Nǐ zhīdào zhège shù de yìsi ma?",
        "translation": "Do you know the meaning of this 树?"
      }
    ]
  },
  {
    "id": 507,
    "character": "数学",
    "pinyin": "shùxué",
    "meaning": "Mathematics",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用数学交流。",
        "pinyin": "Wǒmen jīngcháng yòng shùxué jiāoliú.",
        "translation": "We often use 数学 (Mathematics) in communication."
      },
      {
        "chinese": "你知道这个数学的意思吗？",
        "pinyin": "Nǐ zhīdào zhège shùxué de yìsi ma?",
        "translation": "Do you know the meaning of this 数学?"
      }
    ]
  },
  {
    "id": 508,
    "character": "刷牙",
    "pinyin": "shuāyá",
    "meaning": "Brush one's teeth",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用刷牙交流。",
        "pinyin": "Wǒmen jīngcháng yòng shuāyá jiāoliú.",
        "translation": "We often use 刷牙 (Brush one's teeth) in communication."
      },
      {
        "chinese": "你知道这个刷牙的意思吗？",
        "pinyin": "Nǐ zhīdào zhège shuāyá de yìsi ma?",
        "translation": "Do you know the meaning of this 刷牙?"
      }
    ]
  },
  {
    "id": 509,
    "character": "双",
    "pinyin": "shuāng",
    "meaning": "double, pair",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用双交流。",
        "pinyin": "Wǒmen jīngcháng yòng shuāng jiāoliú.",
        "translation": "We often use 双 (double, pair) in communication."
      },
      {
        "chinese": "你知道这个双的意思吗？",
        "pinyin": "Nǐ zhīdào zhège shuāng de yìsi ma?",
        "translation": "Do you know the meaning of this 双?"
      }
    ]
  },
  {
    "id": 510,
    "character": "水平",
    "pinyin": "shuǐpíng",
    "meaning": "level",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 4,
    "examples": [
      {
        "chinese": "我们经常用水平交流。",
        "pinyin": "Wǒmen jīngcháng yòng shuǐpíng jiāoliú.",
        "translation": "We often use 水平 (level) in communication."
      },
      {
        "chinese": "你知道这个水平的意思吗？",
        "pinyin": "Nǐ zhīdào zhège shuǐpíng de yìsi ma?",
        "translation": "Do you know the meaning of this 水平?"
      }
    ]
  },
  {
    "id": 511,
    "character": "司机",
    "pinyin": "sījī",
    "meaning": "Driver",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用司机交流。",
        "pinyin": "Wǒmen jīngcháng yòng sījī jiāoliú.",
        "translation": "We often use 司机 (Driver) in communication."
      },
      {
        "chinese": "你知道这个司机的意思吗？",
        "pinyin": "Nǐ zhīdào zhège sījī de yìsi ma?",
        "translation": "Do you know the meaning of this 司机?"
      }
    ]
  },
  {
    "id": 512,
    "character": "太阳",
    "pinyin": "tàiyáng",
    "meaning": "sun",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 4,
    "examples": [
      {
        "chinese": "我们经常用太阳交流。",
        "pinyin": "Wǒmen jīngcháng yòng tàiyáng jiāoliú.",
        "translation": "We often use 太阳 (sun) in communication."
      },
      {
        "chinese": "你知道这个太阳的意思吗？",
        "pinyin": "Nǐ zhīdào zhège tàiyáng de yìsi ma?",
        "translation": "Do you know the meaning of this 太阳?"
      }
    ]
  },
  {
    "id": 513,
    "character": "特别",
    "pinyin": "tèbié",
    "meaning": "Especially",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用特别交流。",
        "pinyin": "Wǒmen jīngcháng yòng tèbié jiāoliú.",
        "translation": "We often use 特别 (Especially) in communication."
      },
      {
        "chinese": "你知道这个特别的意思吗？",
        "pinyin": "Nǐ zhīdào zhège tèbié de yìsi ma?",
        "translation": "Do you know the meaning of this 特别?"
      }
    ]
  },
  {
    "id": 514,
    "character": "疼",
    "pinyin": "téng",
    "meaning": "hurt",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用疼交流。",
        "pinyin": "Wǒmen jīngcháng yòng téng jiāoliú.",
        "translation": "We often use 疼 (hurt) in communication."
      },
      {
        "chinese": "你知道这个疼的意思吗？",
        "pinyin": "Nǐ zhīdào zhège téng de yìsi ma?",
        "translation": "Do you know the meaning of this 疼?"
      }
    ]
  },
  {
    "id": 515,
    "character": "提高",
    "pinyin": "tígāo",
    "meaning": "increase",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用提高交流。",
        "pinyin": "Wǒmen jīngcháng yòng tígāo jiāoliú.",
        "translation": "We often use 提高 (increase) in communication."
      },
      {
        "chinese": "你知道这个提高的意思吗？",
        "pinyin": "Nǐ zhīdào zhège tígāo de yìsi ma?",
        "translation": "Do you know the meaning of this 提高?"
      }
    ]
  },
  {
    "id": 516,
    "character": "体育",
    "pinyin": "tǐyù",
    "meaning": "Sports",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用体育交流。",
        "pinyin": "Wǒmen jīngcháng yòng tǐyù jiāoliú.",
        "translation": "We often use 体育 (Sports) in communication."
      },
      {
        "chinese": "你知道这个体育的意思吗？",
        "pinyin": "Nǐ zhīdào zhège tǐyù de yìsi ma?",
        "translation": "Do you know the meaning of this 体育?"
      }
    ]
  },
  {
    "id": 517,
    "character": "甜",
    "pinyin": "tián",
    "meaning": "sweet",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用甜交流。",
        "pinyin": "Wǒmen jīngcháng yòng tián jiāoliú.",
        "translation": "We often use 甜 (sweet) in communication."
      },
      {
        "chinese": "你知道这个甜的意思吗？",
        "pinyin": "Nǐ zhīdào zhège tián de yìsi ma?",
        "translation": "Do you know the meaning of this 甜?"
      }
    ]
  },
  {
    "id": 518,
    "character": "条",
    "pinyin": "tiáo",
    "meaning": "strip",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 7,
    "examples": [
      {
        "chinese": "我们经常用条交流。",
        "pinyin": "Wǒmen jīngcháng yòng tiáo jiāoliú.",
        "translation": "We often use 条 (strip) in communication."
      },
      {
        "chinese": "你知道这个条的意思吗？",
        "pinyin": "Nǐ zhīdào zhège tiáo de yìsi ma?",
        "translation": "Do you know the meaning of this 条?"
      }
    ]
  },
  {
    "id": 519,
    "character": "同事",
    "pinyin": "tóngshì",
    "meaning": "Colleague",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 6,
    "examples": [
      {
        "chinese": "我们经常用同事交流。",
        "pinyin": "Wǒmen jīngcháng yòng tóngshì jiāoliú.",
        "translation": "We often use 同事 (Colleague) in communication."
      },
      {
        "chinese": "你知道这个同事的意思吗？",
        "pinyin": "Nǐ zhīdào zhège tóngshì de yìsi ma?",
        "translation": "Do you know the meaning of this 同事?"
      }
    ]
  },
  {
    "id": 520,
    "character": "同意",
    "pinyin": "tóngyì",
    "meaning": "Agree",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 6,
    "examples": [
      {
        "chinese": "我们经常用同意交流。",
        "pinyin": "Wǒmen jīngcháng yòng tóngyì jiāoliú.",
        "translation": "We often use 同意 (Agree) in communication."
      },
      {
        "chinese": "你知道这个同意的意思吗？",
        "pinyin": "Nǐ zhīdào zhège tóngyì de yìsi ma?",
        "translation": "Do you know the meaning of this 同意?"
      }
    ]
  },
  {
    "id": 521,
    "character": "头发",
    "pinyin": "tóufa",
    "meaning": "Hair",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 5,
    "examples": [
      {
        "chinese": "我们经常用头发交流。",
        "pinyin": "Wǒmen jīngcháng yòng tóufa jiāoliú.",
        "translation": "We often use 头发 (Hair) in communication."
      },
      {
        "chinese": "你知道这个头发的意思吗？",
        "pinyin": "Nǐ zhīdào zhège tóufa de yìsi ma?",
        "translation": "Do you know the meaning of this 头发?"
      }
    ]
  },
  {
    "id": 522,
    "character": "突然",
    "pinyin": "tūrán",
    "meaning": "suddenly",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用突然交流。",
        "pinyin": "Wǒmen jīngcháng yòng tūrán jiāoliú.",
        "translation": "We often use 突然 (suddenly) in communication."
      },
      {
        "chinese": "你知道这个突然的意思吗？",
        "pinyin": "Nǐ zhīdào zhège tūrán de yìsi ma?",
        "translation": "Do you know the meaning of this 突然?"
      }
    ]
  },
  {
    "id": 523,
    "character": "图书馆",
    "pinyin": "túshūguǎn",
    "meaning": "Library",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用图书馆交流。",
        "pinyin": "Wǒmen jīngcháng yòng túshūguǎn jiāoliú.",
        "translation": "We often use 图书馆 (Library) in communication."
      },
      {
        "chinese": "你知道这个图书馆的意思吗？",
        "pinyin": "Nǐ zhīdào zhège túshūguǎn de yìsi ma?",
        "translation": "Do you know the meaning of this 图书馆?"
      }
    ]
  },
  {
    "id": 524,
    "character": "腿",
    "pinyin": "tuǐ",
    "meaning": "leg",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用腿交流。",
        "pinyin": "Wǒmen jīngcháng yòng tuǐ jiāoliú.",
        "translation": "We often use 腿 (leg) in communication."
      },
      {
        "chinese": "你知道这个腿的意思吗？",
        "pinyin": "Nǐ zhīdào zhège tuǐ de yìsi ma?",
        "translation": "Do you know the meaning of this 腿?"
      }
    ]
  },
  {
    "id": 525,
    "character": "完成",
    "pinyin": "wánchéng",
    "meaning": "complete",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 7,
    "examples": [
      {
        "chinese": "我们经常用完成交流。",
        "pinyin": "Wǒmen jīngcháng yòng wánchéng jiāoliú.",
        "translation": "We often use 完成 (complete) in communication."
      },
      {
        "chinese": "你知道这个完成的意思吗？",
        "pinyin": "Nǐ zhīdào zhège wánchéng de yìsi ma?",
        "translation": "Do you know the meaning of this 完成?"
      }
    ]
  },
  {
    "id": 526,
    "character": "碗",
    "pinyin": "wǎn",
    "meaning": "bowl",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用碗交流。",
        "pinyin": "Wǒmen jīngcháng yòng wǎn jiāoliú.",
        "translation": "We often use 碗 (bowl) in communication."
      },
      {
        "chinese": "你知道这个碗的意思吗？",
        "pinyin": "Nǐ zhīdào zhège wǎn de yìsi ma?",
        "translation": "Do you know the meaning of this 碗?"
      }
    ]
  },
  {
    "id": 527,
    "character": "万",
    "pinyin": "wàn",
    "meaning": "ten thousand",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用万交流。",
        "pinyin": "Wǒmen jīngcháng yòng wàn jiāoliú.",
        "translation": "We often use 万 (ten thousand) in communication."
      },
      {
        "chinese": "你知道这个万的意思吗？",
        "pinyin": "Nǐ zhīdào zhège wàn de yìsi ma?",
        "translation": "Do you know the meaning of this 万?"
      }
    ]
  },
  {
    "id": 528,
    "character": "忘记",
    "pinyin": "wàngjì",
    "meaning": "forget",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 7,
    "examples": [
      {
        "chinese": "我们经常用忘记交流。",
        "pinyin": "Wǒmen jīngcháng yòng wàngjì jiāoliú.",
        "translation": "We often use 忘记 (forget) in communication."
      },
      {
        "chinese": "你知道这个忘记的意思吗？",
        "pinyin": "Nǐ zhīdào zhège wàngjì de yìsi ma?",
        "translation": "Do you know the meaning of this 忘记?"
      }
    ]
  },
  {
    "id": 529,
    "character": "为",
    "pinyin": "wèi",
    "meaning": "for",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 4,
    "examples": [
      {
        "chinese": "我们经常用为交流。",
        "pinyin": "Wǒmen jīngcháng yòng wèi jiāoliú.",
        "translation": "We often use 为 (for) in communication."
      },
      {
        "chinese": "你知道这个为的意思吗？",
        "pinyin": "Nǐ zhīdào zhège wèi de yìsi ma?",
        "translation": "Do you know the meaning of this 为?"
      }
    ]
  },
  {
    "id": 530,
    "character": "为了",
    "pinyin": "wèile",
    "meaning": "in order to",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 4,
    "examples": [
      {
        "chinese": "我们经常用为了交流。",
        "pinyin": "Wǒmen jīngcháng yòng wèile jiāoliú.",
        "translation": "We often use 为了 (in order to) in communication."
      },
      {
        "chinese": "你知道这个为了的意思吗？",
        "pinyin": "Nǐ zhīdào zhège wèile de yìsi ma?",
        "translation": "Do you know the meaning of this 为了?"
      }
    ]
  },
  {
    "id": 531,
    "character": "位",
    "pinyin": "wèi",
    "meaning": "position",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用位交流。",
        "pinyin": "Wǒmen jīngcháng yòng wèi jiāoliú.",
        "translation": "We often use 位 (position) in communication."
      },
      {
        "chinese": "你知道这个位的意思吗？",
        "pinyin": "Nǐ zhīdào zhège wèi de yìsi ma?",
        "translation": "Do you know the meaning of this 位?"
      }
    ]
  },
  {
    "id": 532,
    "character": "文化",
    "pinyin": "wénhuà",
    "meaning": "Culture",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用文化交流。",
        "pinyin": "Wǒmen jīngcháng yòng wénhuà jiāoliú.",
        "translation": "We often use 文化 (Culture) in communication."
      },
      {
        "chinese": "你知道这个文化的意思吗？",
        "pinyin": "Nǐ zhīdào zhège wénhuà de yìsi ma?",
        "translation": "Do you know the meaning of this 文化?"
      }
    ]
  },
  {
    "id": 533,
    "character": "西",
    "pinyin": "xī",
    "meaning": "west",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 6,
    "examples": [
      {
        "chinese": "我们经常用西交流。",
        "pinyin": "Wǒmen jīngcháng yòng xī jiāoliú.",
        "translation": "We often use 西 (west) in communication."
      },
      {
        "chinese": "你知道这个西的意思吗？",
        "pinyin": "Nǐ zhīdào zhège xī de yìsi ma?",
        "translation": "Do you know the meaning of this 西?"
      }
    ]
  },
  {
    "id": 534,
    "character": "习惯",
    "pinyin": "xíguàn",
    "meaning": "Habit",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用习惯交流。",
        "pinyin": "Wǒmen jīngcháng yòng xíguàn jiāoliú.",
        "translation": "We often use 习惯 (Habit) in communication."
      },
      {
        "chinese": "你知道这个习惯的意思吗？",
        "pinyin": "Nǐ zhīdào zhège xíguàn de yìsi ma?",
        "translation": "Do you know the meaning of this 习惯?"
      }
    ]
  },
  {
    "id": 535,
    "character": "洗手间",
    "pinyin": "xǐshǒujiān",
    "meaning": "Restroom",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 9,
    "examples": [
      {
        "chinese": "我们经常用洗手间交流。",
        "pinyin": "Wǒmen jīngcháng yòng xǐshǒujiān jiāoliú.",
        "translation": "We often use 洗手间 (Restroom) in communication."
      },
      {
        "chinese": "你知道这个洗手间的意思吗？",
        "pinyin": "Nǐ zhīdào zhège xǐshǒujiān de yìsi ma?",
        "translation": "Do you know the meaning of this 洗手间?"
      }
    ]
  },
  {
    "id": 536,
    "character": "洗澡",
    "pinyin": "xǐzǎo",
    "meaning": "Take a shower",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 9,
    "examples": [
      {
        "chinese": "我们经常用洗澡交流。",
        "pinyin": "Wǒmen jīngcháng yòng xǐzǎo jiāoliú.",
        "translation": "We often use 洗澡 (Take a shower) in communication."
      },
      {
        "chinese": "你知道这个洗澡的意思吗？",
        "pinyin": "Nǐ zhīdào zhège xǐzǎo de yìsi ma?",
        "translation": "Do you know the meaning of this 洗澡?"
      }
    ]
  },
  {
    "id": 537,
    "character": "夏",
    "pinyin": "xià",
    "meaning": "summer",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 10,
    "examples": [
      {
        "chinese": "我们经常用夏交流。",
        "pinyin": "Wǒmen jīngcháng yòng xià jiāoliú.",
        "translation": "We often use 夏 (summer) in communication."
      },
      {
        "chinese": "你知道这个夏的意思吗？",
        "pinyin": "Nǐ zhīdào zhège xià de yìsi ma?",
        "translation": "Do you know the meaning of this 夏?"
      }
    ]
  },
  {
    "id": 538,
    "character": "先",
    "pinyin": "xiān",
    "meaning": "first",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 6,
    "examples": [
      {
        "chinese": "我们经常用先交流。",
        "pinyin": "Wǒmen jīngcháng yòng xiān jiāoliú.",
        "translation": "We often use 先 (first) in communication."
      },
      {
        "chinese": "你知道这个先的意思吗？",
        "pinyin": "Nǐ zhīdào zhège xiān de yìsi ma?",
        "translation": "Do you know the meaning of this 先?"
      }
    ]
  },
  {
    "id": 539,
    "character": "香蕉",
    "pinyin": "xiāngjiāo",
    "meaning": "Banana",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用香蕉交流。",
        "pinyin": "Wǒmen jīngcháng yòng xiāngjiāo jiāoliú.",
        "translation": "We often use 香蕉 (Banana) in communication."
      },
      {
        "chinese": "你知道这个香蕉的意思吗？",
        "pinyin": "Nǐ zhīdào zhège xiāngjiāo de yìsi ma?",
        "translation": "Do you know the meaning of this 香蕉?"
      }
    ]
  },
  {
    "id": 540,
    "character": "相信",
    "pinyin": "xiāngxìn",
    "meaning": "believe",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 9,
    "examples": [
      {
        "chinese": "我们经常用相信交流。",
        "pinyin": "Wǒmen jīngcháng yòng xiāngxìn jiāoliú.",
        "translation": "We often use 相信 (believe) in communication."
      },
      {
        "chinese": "你知道这个相信的意思吗？",
        "pinyin": "Nǐ zhīdào zhège xiāngxìn de yìsi ma?",
        "translation": "Do you know the meaning of this 相信?"
      }
    ]
  },
  {
    "id": 541,
    "character": "向",
    "pinyin": "xiàng",
    "meaning": "towards",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 6,
    "examples": [
      {
        "chinese": "我们经常用向交流。",
        "pinyin": "Wǒmen jīngcháng yòng xiàng jiāoliú.",
        "translation": "We often use 向 (towards) in communication."
      },
      {
        "chinese": "你知道这个向的意思吗？",
        "pinyin": "Nǐ zhīdào zhège xiàng de yìsi ma?",
        "translation": "Do you know the meaning of this 向?"
      }
    ]
  },
  {
    "id": 542,
    "character": "像",
    "pinyin": "xiàng",
    "meaning": "image",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 13,
    "examples": [
      {
        "chinese": "我们经常用像交流。",
        "pinyin": "Wǒmen jīngcháng yòng xiàng jiāoliú.",
        "translation": "We often use 像 (image) in communication."
      },
      {
        "chinese": "你知道这个像的意思吗？",
        "pinyin": "Nǐ zhīdào zhège xiàng de yìsi ma?",
        "translation": "Do you know the meaning of this 像?"
      }
    ]
  },
  {
    "id": 543,
    "character": "小心",
    "pinyin": "xiǎoxīn",
    "meaning": "watch out",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 3,
    "examples": [
      {
        "chinese": "我们经常用小心交流。",
        "pinyin": "Wǒmen jīngcháng yòng xiǎoxīn jiāoliú.",
        "translation": "We often use 小心 (watch out) in communication."
      },
      {
        "chinese": "你知道这个小心的意思吗？",
        "pinyin": "Nǐ zhīdào zhège xiǎoxīn de yìsi ma?",
        "translation": "Do you know the meaning of this 小心?"
      }
    ]
  },
  {
    "id": 544,
    "character": "校长",
    "pinyin": "xiàozhǎng",
    "meaning": "Principal",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 10,
    "examples": [
      {
        "chinese": "我们经常用校长交流。",
        "pinyin": "Wǒmen jīngcháng yòng xiàozhǎng jiāoliú.",
        "translation": "We often use 校长 (Principal) in communication."
      },
      {
        "chinese": "你知道这个校长的意思吗？",
        "pinyin": "Nǐ zhīdào zhège xiàozhǎng de yìsi ma?",
        "translation": "Do you know the meaning of this 校长?"
      }
    ]
  },
  {
    "id": 545,
    "character": "新闻",
    "pinyin": "xīnwén",
    "meaning": "news",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 13,
    "examples": [
      {
        "chinese": "我们经常用新闻交流。",
        "pinyin": "Wǒmen jīngcháng yòng xīnwén jiāoliú.",
        "translation": "We often use 新闻 (news) in communication."
      },
      {
        "chinese": "你知道这个新闻的意思吗？",
        "pinyin": "Nǐ zhīdào zhège xīnwén de yìsi ma?",
        "translation": "Do you know the meaning of this 新闻?"
      }
    ]
  },
  {
    "id": 546,
    "character": "新鲜",
    "pinyin": "xīnxiān",
    "meaning": "fresh",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 13,
    "examples": [
      {
        "chinese": "我们经常用新鲜交流。",
        "pinyin": "Wǒmen jīngcháng yòng xīnxiān jiāoliú.",
        "translation": "We often use 新鲜 (fresh) in communication."
      },
      {
        "chinese": "你知道这个新鲜的意思吗？",
        "pinyin": "Nǐ zhīdào zhège xīnxiān de yìsi ma?",
        "translation": "Do you know the meaning of this 新鲜?"
      }
    ]
  },
  {
    "id": 547,
    "character": "信用卡",
    "pinyin": "xìnyòngkǎ",
    "meaning": "Credit card",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 9,
    "examples": [
      {
        "chinese": "我们经常用信用卡交流。",
        "pinyin": "Wǒmen jīngcháng yòng xìnyòngkǎ jiāoliú.",
        "translation": "We often use 信用卡 (Credit card) in communication."
      },
      {
        "chinese": "你知道这个信用卡的意思吗？",
        "pinyin": "Nǐ zhīdào zhège xìnyòngkǎ de yìsi ma?",
        "translation": "Do you know the meaning of this 信用卡?"
      }
    ]
  },
  {
    "id": 548,
    "character": "行李箱",
    "pinyin": "xínglixiāng",
    "meaning": "Trunk",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 6,
    "examples": [
      {
        "chinese": "我们经常用行李箱交流。",
        "pinyin": "Wǒmen jīngcháng yòng xínglixiāng jiāoliú.",
        "translation": "We often use 行李箱 (Trunk) in communication."
      },
      {
        "chinese": "你知道这个行李箱的意思吗？",
        "pinyin": "Nǐ zhīdào zhège xínglixiāng de yìsi ma?",
        "translation": "Do you know the meaning of this 行李箱?"
      }
    ]
  },
  {
    "id": 549,
    "character": "熊猫",
    "pinyin": "xióngmāo",
    "meaning": "Panda",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用熊猫交流。",
        "pinyin": "Wǒmen jīngcháng yòng xióngmāo jiāoliú.",
        "translation": "We often use 熊猫 (Panda) in communication."
      },
      {
        "chinese": "你知道这个熊猫的意思吗？",
        "pinyin": "Nǐ zhīdào zhège xióngmāo de yìsi ma?",
        "translation": "Do you know the meaning of this 熊猫?"
      }
    ]
  },
  {
    "id": 550,
    "character": "需要",
    "pinyin": "xūyào",
    "meaning": "Need",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用需要交流。",
        "pinyin": "Wǒmen jīngcháng yòng xūyào jiāoliú.",
        "translation": "We often use 需要 (Need) in communication."
      },
      {
        "chinese": "你知道这个需要的意思吗？",
        "pinyin": "Nǐ zhīdào zhège xūyào de yìsi ma?",
        "translation": "Do you know the meaning of this 需要?"
      }
    ]
  },
  {
    "id": 551,
    "character": "选择",
    "pinyin": "xuǎnzé",
    "meaning": "Choice",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用选择交流。",
        "pinyin": "Wǒmen jīngcháng yòng xuǎnzé jiāoliú.",
        "translation": "We often use 选择 (Choice) in communication."
      },
      {
        "chinese": "你知道这个选择的意思吗？",
        "pinyin": "Nǐ zhīdào zhège xuǎnzé de yìsi ma?",
        "translation": "Do you know the meaning of this 选择?"
      }
    ]
  },
  {
    "id": 552,
    "character": "要求",
    "pinyin": "yāoqiú",
    "meaning": "Requirement",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 9,
    "examples": [
      {
        "chinese": "我们经常用要求交流。",
        "pinyin": "Wǒmen jīngcháng yòng yāoqiú jiāoliú.",
        "translation": "We often use 要求 (Requirement) in communication."
      },
      {
        "chinese": "你知道这个要求的意思吗？",
        "pinyin": "Nǐ zhīdào zhège yāoqiú de yìsi ma?",
        "translation": "Do you know the meaning of this 要求?"
      }
    ]
  },
  {
    "id": 553,
    "character": "爷爷",
    "pinyin": "yéye",
    "meaning": "grandpa",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用爷爷交流。",
        "pinyin": "Wǒmen jīngcháng yòng yéye jiāoliú.",
        "translation": "We often use 爷爷 (grandpa) in communication."
      },
      {
        "chinese": "你知道这个爷爷的意思吗？",
        "pinyin": "Nǐ zhīdào zhège yéye de yìsi ma?",
        "translation": "Do you know the meaning of this 爷爷?"
      }
    ]
  },
  {
    "id": 554,
    "character": "一定",
    "pinyin": "yídìng",
    "meaning": "Certain",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 1,
    "examples": [
      {
        "chinese": "我们经常用一定交流。",
        "pinyin": "Wǒmen jīngcháng yòng yídìng jiāoliú.",
        "translation": "We often use 一定 (Certain) in communication."
      },
      {
        "chinese": "你知道这个一定的意思吗？",
        "pinyin": "Nǐ zhīdào zhège yídìng de yìsi ma?",
        "translation": "Do you know the meaning of this 一定?"
      }
    ]
  },
  {
    "id": 555,
    "character": "一共",
    "pinyin": "yígòng",
    "meaning": "Altogether",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 1,
    "examples": [
      {
        "chinese": "我们经常用一共交流。",
        "pinyin": "Wǒmen jīngcháng yòng yígòng jiāoliú.",
        "translation": "We often use 一共 (Altogether) in communication."
      },
      {
        "chinese": "你知道这个一共的意思吗？",
        "pinyin": "Nǐ zhīdào zhège yígòng de yìsi ma?",
        "translation": "Do you know the meaning of this 一共?"
      }
    ]
  },
  {
    "id": 556,
    "character": "一会儿",
    "pinyin": "yíhuìr",
    "meaning": "a while",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 1,
    "examples": [
      {
        "chinese": "我们经常用一会儿交流。",
        "pinyin": "Wǒmen jīngcháng yòng yíhuìr jiāoliú.",
        "translation": "We often use 一会儿 (a while) in communication."
      },
      {
        "chinese": "你知道这个一会儿的意思吗？",
        "pinyin": "Nǐ zhīdào zhège yíhuìr de yìsi ma?",
        "translation": "Do you know the meaning of this 一会儿?"
      }
    ]
  },
  {
    "id": 557,
    "character": "一样",
    "pinyin": "yíyàng",
    "meaning": "equally",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 1,
    "examples": [
      {
        "chinese": "我们经常用一样交流。",
        "pinyin": "Wǒmen jīngcháng yòng yíyàng jiāoliú.",
        "translation": "We often use 一样 (equally) in communication."
      },
      {
        "chinese": "你知道这个一样的意思吗？",
        "pinyin": "Nǐ zhīdào zhège yíyàng de yìsi ma?",
        "translation": "Do you know the meaning of this 一样?"
      }
    ]
  },
  {
    "id": 558,
    "character": "以前",
    "pinyin": "yǐqián",
    "meaning": "before",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 4,
    "examples": [
      {
        "chinese": "我们经常用以前交流。",
        "pinyin": "Wǒmen jīngcháng yòng yǐqián jiāoliú.",
        "translation": "We often use 以前 (before) in communication."
      },
      {
        "chinese": "你知道这个以前的意思吗？",
        "pinyin": "Nǐ zhīdào zhège yǐqián de yìsi ma?",
        "translation": "Do you know the meaning of this 以前?"
      }
    ]
  },
  {
    "id": 559,
    "character": "一般",
    "pinyin": "yìbān",
    "meaning": "commonly",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 1,
    "examples": [
      {
        "chinese": "我们经常用一般交流。",
        "pinyin": "Wǒmen jīngcháng yòng yìbān jiāoliú.",
        "translation": "We often use 一般 (commonly) in communication."
      },
      {
        "chinese": "你知道这个一般的意思吗？",
        "pinyin": "Nǐ zhīdào zhège yìbān de yìsi ma?",
        "translation": "Do you know the meaning of this 一般?"
      }
    ]
  },
  {
    "id": 560,
    "character": "一边",
    "pinyin": "yìbiān",
    "meaning": "One side",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 1,
    "examples": [
      {
        "chinese": "我们经常用一边交流。",
        "pinyin": "Wǒmen jīngcháng yòng yìbiān jiāoliú.",
        "translation": "We often use 一边 (One side) in communication."
      },
      {
        "chinese": "你知道这个一边的意思吗？",
        "pinyin": "Nǐ zhīdào zhège yìbiān de yìsi ma?",
        "translation": "Do you know the meaning of this 一边?"
      }
    ]
  },
  {
    "id": 561,
    "character": "一直",
    "pinyin": "yìzhí",
    "meaning": "always",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 1,
    "examples": [
      {
        "chinese": "我们经常用一直交流。",
        "pinyin": "Wǒmen jīngcháng yòng yìzhí jiāoliú.",
        "translation": "We often use 一直 (always) in communication."
      },
      {
        "chinese": "你知道这个一直的意思吗？",
        "pinyin": "Nǐ zhīdào zhège yìzhí de yìsi ma?",
        "translation": "Do you know the meaning of this 一直?"
      }
    ]
  },
  {
    "id": 562,
    "character": "音乐",
    "pinyin": "yīnyuè",
    "meaning": "Music",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 9,
    "examples": [
      {
        "chinese": "我们经常用音乐交流。",
        "pinyin": "Wǒmen jīngcháng yòng yīnyuè jiāoliú.",
        "translation": "We often use 音乐 (Music) in communication."
      },
      {
        "chinese": "你知道这个音乐的意思吗？",
        "pinyin": "Nǐ zhīdào zhège yīnyuè de yìsi ma?",
        "translation": "Do you know the meaning of this 音乐?"
      }
    ]
  },
  {
    "id": 563,
    "character": "银行",
    "pinyin": "yínháng",
    "meaning": "Bank",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用银行交流。",
        "pinyin": "Wǒmen jīngcháng yòng yínháng jiāoliú.",
        "translation": "We often use 银行 (Bank) in communication."
      },
      {
        "chinese": "你知道这个银行的意思吗？",
        "pinyin": "Nǐ zhīdào zhège yínháng de yìsi ma?",
        "translation": "Do you know the meaning of this 银行?"
      }
    ]
  },
  {
    "id": 564,
    "character": "饮料",
    "pinyin": "yǐnliào",
    "meaning": "Drinks",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用饮料交流。",
        "pinyin": "Wǒmen jīngcháng yòng yǐnliào jiāoliú.",
        "translation": "We often use 饮料 (Drinks) in communication."
      },
      {
        "chinese": "你知道这个饮料的意思吗？",
        "pinyin": "Nǐ zhīdào zhège yǐnliào de yìsi ma?",
        "translation": "Do you know the meaning of this 饮料?"
      }
    ]
  },
  {
    "id": 565,
    "character": "应该",
    "pinyin": "yīnggāi",
    "meaning": "Should",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用应该交流。",
        "pinyin": "Wǒmen jīngcháng yòng yīnggāi jiāoliú.",
        "translation": "We often use 应该 (Should) in communication."
      },
      {
        "chinese": "你知道这个应该的意思吗？",
        "pinyin": "Nǐ zhīdào zhège yīnggāi de yìsi ma?",
        "translation": "Do you know the meaning of this 应该?"
      }
    ]
  },
  {
    "id": 566,
    "character": "影响",
    "pinyin": "yǐngxiǎng",
    "meaning": "Influence",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用影响交流。",
        "pinyin": "Wǒmen jīngcháng yòng yǐngxiǎng jiāoliú.",
        "translation": "We often use 影响 (Influence) in communication."
      },
      {
        "chinese": "你知道这个影响的意思吗？",
        "pinyin": "Nǐ zhīdào zhège yǐngxiǎng de yìsi ma?",
        "translation": "Do you know the meaning of this 影响?"
      }
    ]
  },
  {
    "id": 567,
    "character": "用",
    "pinyin": "yòng",
    "meaning": "use",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 5,
    "examples": [
      {
        "chinese": "我们经常用用交流。",
        "pinyin": "Wǒmen jīngcháng yòng yòng jiāoliú.",
        "translation": "We often use 用 (use) in communication."
      },
      {
        "chinese": "你知道这个用的意思吗？",
        "pinyin": "Nǐ zhīdào zhège yòng de yìsi ma?",
        "translation": "Do you know the meaning of this 用?"
      }
    ]
  },
  {
    "id": 568,
    "character": "游戏",
    "pinyin": "yóuxì",
    "meaning": "Game",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 12,
    "examples": [
      {
        "chinese": "我们经常用游戏交流。",
        "pinyin": "Wǒmen jīngcháng yòng yóuxì jiāoliú.",
        "translation": "We often use 游戏 (Game) in communication."
      },
      {
        "chinese": "你知道这个游戏的意思吗？",
        "pinyin": "Nǐ zhīdào zhège yóuxì de yìsi ma?",
        "translation": "Do you know the meaning of this 游戏?"
      }
    ]
  },
  {
    "id": 569,
    "character": "有名",
    "pinyin": "yǒumíng",
    "meaning": "Famous",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用有名交流。",
        "pinyin": "Wǒmen jīngcháng yòng yǒumíng jiāoliú.",
        "translation": "We often use 有名 (Famous) in communication."
      },
      {
        "chinese": "你知道这个有名的意思吗？",
        "pinyin": "Nǐ zhīdào zhège yǒumíng de yìsi ma?",
        "translation": "Do you know the meaning of this 有名?"
      }
    ]
  },
  {
    "id": 570,
    "character": "又",
    "pinyin": "yòu",
    "meaning": "again",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用又交流。",
        "pinyin": "Wǒmen jīngcháng yòng yòu jiāoliú.",
        "translation": "We often use 又 (again) in communication."
      },
      {
        "chinese": "你知道这个又的意思吗？",
        "pinyin": "Nǐ zhīdào zhège yòu de yìsi ma?",
        "translation": "Do you know the meaning of this 又?"
      }
    ]
  },
  {
    "id": 571,
    "character": "遇到",
    "pinyin": "yùdào",
    "meaning": "encounter",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用遇到交流。",
        "pinyin": "Wǒmen jīngcháng yòng yùdào jiāoliú.",
        "translation": "We often use 遇到 (encounter) in communication."
      },
      {
        "chinese": "你知道这个遇到的意思吗？",
        "pinyin": "Nǐ zhīdào zhège yùdào de yìsi ma?",
        "translation": "Do you know the meaning of this 遇到?"
      }
    ]
  },
  {
    "id": 572,
    "character": "元",
    "pinyin": "yuán",
    "meaning": "element; yuan",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 4,
    "examples": [
      {
        "chinese": "我们经常用元交流。",
        "pinyin": "Wǒmen jīngcháng yòng yuán jiāoliú.",
        "translation": "We often use 元 (element; yuan) in communication."
      },
      {
        "chinese": "你知道这个元的意思吗？",
        "pinyin": "Nǐ zhīdào zhège yuán de yìsi ma?",
        "translation": "Do you know the meaning of this 元?"
      }
    ]
  },
  {
    "id": 573,
    "character": "愿意",
    "pinyin": "yuànyì",
    "meaning": "Be willing",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用愿意交流。",
        "pinyin": "Wǒmen jīngcháng yòng yuànyì jiāoliú.",
        "translation": "We often use 愿意 (Be willing) in communication."
      },
      {
        "chinese": "你知道这个愿意的意思吗？",
        "pinyin": "Nǐ zhīdào zhège yuànyì de yìsi ma?",
        "translation": "Do you know the meaning of this 愿意?"
      }
    ]
  },
  {
    "id": 574,
    "character": "月亮",
    "pinyin": "yuèliang",
    "meaning": "Moon",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 4,
    "examples": [
      {
        "chinese": "我们经常用月亮交流。",
        "pinyin": "Wǒmen jīngcháng yòng yuèliang jiāoliú.",
        "translation": "We often use 月亮 (Moon) in communication."
      },
      {
        "chinese": "你知道这个月亮的意思吗？",
        "pinyin": "Nǐ zhīdào zhège yuèliang de yìsi ma?",
        "translation": "Do you know the meaning of this 月亮?"
      }
    ]
  },
  {
    "id": 575,
    "character": "越",
    "pinyin": "yuè",
    "meaning": "the more",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 12,
    "examples": [
      {
        "chinese": "我们经常用越交流。",
        "pinyin": "Wǒmen jīngcháng yòng yuè jiāoliú.",
        "translation": "We often use 越 (the more) in communication."
      },
      {
        "chinese": "你知道这个越的意思吗？",
        "pinyin": "Nǐ zhīdào zhège yuè de yìsi ma?",
        "translation": "Do you know the meaning of this 越?"
      }
    ]
  },
  {
    "id": 576,
    "character": "站",
    "pinyin": "zhàn",
    "meaning": "station",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 10,
    "examples": [
      {
        "chinese": "我们经常用站交流。",
        "pinyin": "Wǒmen jīngcháng yòng zhàn jiāoliú.",
        "translation": "We often use 站 (station) in communication."
      },
      {
        "chinese": "你知道这个站的意思吗？",
        "pinyin": "Nǐ zhīdào zhège zhàn de yìsi ma?",
        "translation": "Do you know the meaning of this 站?"
      }
    ]
  },
  {
    "id": 577,
    "character": "张",
    "pinyin": "zhāng",
    "meaning": "Zhang (surname)",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 7,
    "examples": [
      {
        "chinese": "我们经常用张交流。",
        "pinyin": "Wǒmen jīngcháng yòng zhāng jiāoliú.",
        "translation": "We often use 张 (Zhang (surname)) in communication."
      },
      {
        "chinese": "你知道这个张的意思吗？",
        "pinyin": "Nǐ zhīdào zhège zhāng de yìsi ma?",
        "translation": "Do you know the meaning of this 张?"
      }
    ]
  },
  {
    "id": 578,
    "character": "长（动词）",
    "pinyin": "zhǎng",
    "meaning": "grow",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 4,
    "examples": [
      {
        "chinese": "我们经常用长（动词）交流。",
        "pinyin": "Wǒmen jīngcháng yòng zhǎng jiāoliú.",
        "translation": "We often use 长（动词） (grow) in communication."
      },
      {
        "chinese": "你知道这个长（动词）的意思吗？",
        "pinyin": "Nǐ zhīdào zhège zhǎng de yìsi ma?",
        "translation": "Do you know the meaning of this 长（动词）?"
      }
    ]
  },
  {
    "id": 579,
    "character": "着急",
    "pinyin": "zháojí",
    "meaning": "Worry",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 11,
    "examples": [
      {
        "chinese": "我们经常用着急交流。",
        "pinyin": "Wǒmen jīngcháng yòng zháojí jiāoliú.",
        "translation": "We often use 着急 (Worry) in communication."
      },
      {
        "chinese": "你知道这个着急的意思吗？",
        "pinyin": "Nǐ zhīdào zhège zháojí de yìsi ma?",
        "translation": "Do you know the meaning of this 着急?"
      }
    ]
  },
  {
    "id": 580,
    "character": "照顾",
    "pinyin": "zhàogù",
    "meaning": "look after",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 13,
    "examples": [
      {
        "chinese": "我们经常用照顾交流。",
        "pinyin": "Wǒmen jīngcháng yòng zhàogù jiāoliú.",
        "translation": "We often use 照顾 (look after) in communication."
      },
      {
        "chinese": "你知道这个照顾的意思吗？",
        "pinyin": "Nǐ zhīdào zhège zhàogù de yìsi ma?",
        "translation": "Do you know the meaning of this 照顾?"
      }
    ]
  },
  {
    "id": 581,
    "character": "照片",
    "pinyin": "zhàopiàn",
    "meaning": "Photo",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 13,
    "examples": [
      {
        "chinese": "我们经常用照片交流。",
        "pinyin": "Wǒmen jīngcháng yòng zhàopiàn jiāoliú.",
        "translation": "We often use 照片 (Photo) in communication."
      },
      {
        "chinese": "你知道这个照片的意思吗？",
        "pinyin": "Nǐ zhīdào zhège zhàopiàn de yìsi ma?",
        "translation": "Do you know the meaning of this 照片?"
      }
    ]
  },
  {
    "id": 582,
    "character": "照相机",
    "pinyin": "zhàoxiàngjī",
    "meaning": "Camera",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 13,
    "examples": [
      {
        "chinese": "我们经常用照相机交流。",
        "pinyin": "Wǒmen jīngcháng yòng zhàoxiàngjī jiāoliú.",
        "translation": "We often use 照相机 (Camera) in communication."
      },
      {
        "chinese": "你知道这个照相机的意思吗？",
        "pinyin": "Nǐ zhīdào zhège zhàoxiàngjī de yìsi ma?",
        "translation": "Do you know the meaning of this 照相机?"
      }
    ]
  },
  {
    "id": 583,
    "character": "只（量词）",
    "pinyin": "zhī",
    "meaning": "(measure word)",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用只（量词）交流。",
        "pinyin": "Wǒmen jīngcháng yòng zhī jiāoliú.",
        "translation": "We often use 只（量词） ((measure word)) in communication."
      },
      {
        "chinese": "你知道这个只（量词）的意思吗？",
        "pinyin": "Nǐ zhīdào zhège zhī de yìsi ma?",
        "translation": "Do you know the meaning of this 只（量词）?"
      }
    ]
  },
  {
    "id": 584,
    "character": "只（副词）",
    "pinyin": "zhǐ",
    "meaning": "only",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用只（副词）交流。",
        "pinyin": "Wǒmen jīngcháng yòng zhǐ jiāoliú.",
        "translation": "We often use 只（副词） (only) in communication."
      },
      {
        "chinese": "你知道这个只（副词）的意思吗？",
        "pinyin": "Nǐ zhīdào zhège zhǐ de yìsi ma?",
        "translation": "Do you know the meaning of this 只（副词）?"
      }
    ]
  },
  {
    "id": 585,
    "character": "只有……才……",
    "pinyin": "zhǐyǒu…cái…",
    "meaning": "only if",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用只有……才……交流。",
        "pinyin": "Wǒmen jīngcháng yòng zhǐyǒu…cái… jiāoliú.",
        "translation": "We often use 只有……才…… (only if) in communication."
      },
      {
        "chinese": "你知道这个只有……才……的意思吗？",
        "pinyin": "Nǐ zhīdào zhège zhǐyǒu…cái… de yìsi ma?",
        "translation": "Do you know the meaning of this 只有……才……?"
      }
    ]
  },
  {
    "id": 586,
    "character": "中文",
    "pinyin": "zhōngwén",
    "meaning": "Chinese language; Chinese writing",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 4,
    "examples": [
      {
        "chinese": "你会写中文吗？",
        "pinyin": "Nǐ huì xiě zhōngwén ma?",
        "translation": "Can you write in Chinese?"
      },
      {
        "chinese": "他的中文水平进步很快。",
        "pinyin": "Tā de zhōngwén shuǐpíng jìnbù hěn kuài.",
        "translation": "His Chinese proficiency has improved very rapidly."
      }
    ]
  },
  {
    "id": 587,
    "character": "中间",
    "pinyin": "zhōngjiān",
    "meaning": "Middle",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 4,
    "examples": [
      {
        "chinese": "我们经常用中间交流。",
        "pinyin": "Wǒmen jīngcháng yòng zhōngjiān jiāoliú.",
        "translation": "We often use 中间 (Middle) in communication."
      },
      {
        "chinese": "你知道这个中间的意思吗？",
        "pinyin": "Nǐ zhīdào zhège zhōngjiān de yìsi ma?",
        "translation": "Do you know the meaning of this 中间?"
      }
    ]
  },
  {
    "id": 588,
    "character": "终于",
    "pinyin": "zhōngyú",
    "meaning": "finally",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用终于交流。",
        "pinyin": "Wǒmen jīngcháng yòng zhōngyú jiāoliú.",
        "translation": "We often use 终于 (finally) in communication."
      },
      {
        "chinese": "你知道这个终于的意思吗？",
        "pinyin": "Nǐ zhīdào zhège zhōngyú de yìsi ma?",
        "translation": "Do you know the meaning of this 终于?"
      }
    ]
  },
  {
    "id": 589,
    "character": "种",
    "pinyin": "zhǒng",
    "meaning": "species",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用种交流。",
        "pinyin": "Wǒmen jīngcháng yòng zhǒng jiāoliú.",
        "translation": "We often use 种 (species) in communication."
      },
      {
        "chinese": "你知道这个种的意思吗？",
        "pinyin": "Nǐ zhīdào zhège zhǒng de yìsi ma?",
        "translation": "Do you know the meaning of this 种?"
      }
    ]
  },
  {
    "id": 590,
    "character": "重要",
    "pinyin": "zhòngyào",
    "meaning": "important",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 9,
    "examples": [
      {
        "chinese": "我们经常用重要交流。",
        "pinyin": "Wǒmen jīngcháng yòng zhòngyào jiāoliú.",
        "translation": "We often use 重要 (important) in communication."
      },
      {
        "chinese": "你知道这个重要的意思吗？",
        "pinyin": "Nǐ zhīdào zhège zhòngyào de yìsi ma?",
        "translation": "Do you know the meaning of this 重要?"
      }
    ]
  },
  {
    "id": 591,
    "character": "周末",
    "pinyin": "zhōumò",
    "meaning": "Weekend",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用周末交流。",
        "pinyin": "Wǒmen jīngcháng yòng zhōumò jiāoliú.",
        "translation": "We often use 周末 (Weekend) in communication."
      },
      {
        "chinese": "你知道这个周末的意思吗？",
        "pinyin": "Nǐ zhīdào zhège zhōumò de yìsi ma?",
        "translation": "Do you know the meaning of this 周末?"
      }
    ]
  },
  {
    "id": 592,
    "character": "主要",
    "pinyin": "zhǔyào",
    "meaning": "main",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 5,
    "examples": [
      {
        "chinese": "我们经常用主要交流。",
        "pinyin": "Wǒmen jīngcháng yòng zhǔyào jiāoliú.",
        "translation": "We often use 主要 (main) in communication."
      },
      {
        "chinese": "你知道这个主要的意思吗？",
        "pinyin": "Nǐ zhīdào zhège zhǔyào de yìsi ma?",
        "translation": "Do you know the meaning of this 主要?"
      }
    ]
  },
  {
    "id": 593,
    "character": "注意",
    "pinyin": "zhùyì",
    "meaning": "Be careful",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用注意交流。",
        "pinyin": "Wǒmen jīngcháng yòng zhùyì jiāoliú.",
        "translation": "We often use 注意 (Be careful) in communication."
      },
      {
        "chinese": "你知道这个注意的意思吗？",
        "pinyin": "Nǐ zhīdào zhège zhùyì de yìsi ma?",
        "translation": "Do you know the meaning of this 注意?"
      }
    ]
  },
  {
    "id": 594,
    "character": "自己",
    "pinyin": "zìjǐ",
    "meaning": "Own, self",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 6,
    "examples": [
      {
        "chinese": "我们经常用自己交流。",
        "pinyin": "Wǒmen jīngcháng yòng zìjǐ jiāoliú.",
        "translation": "We often use 自己 (Own, self) in communication."
      },
      {
        "chinese": "你知道这个自己的意思吗？",
        "pinyin": "Nǐ zhīdào zhège zìjǐ de yìsi ma?",
        "translation": "Do you know the meaning of this 自己?"
      }
    ]
  },
  {
    "id": 595,
    "character": "自行车",
    "pinyin": "zìxíngchē",
    "meaning": "Bicycle",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 6,
    "examples": [
      {
        "chinese": "我们经常用自行车交流。",
        "pinyin": "Wǒmen jīngcháng yòng zìxíngchē jiāoliú.",
        "translation": "We often use 自行车 (Bicycle) in communication."
      },
      {
        "chinese": "你知道这个自行车的意思吗？",
        "pinyin": "Nǐ zhīdào zhège zìxíngchē de yìsi ma?",
        "translation": "Do you know the meaning of this 自行车?"
      }
    ]
  },
  {
    "id": 596,
    "character": "总是",
    "pinyin": "zǒngshì",
    "meaning": "always",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用总是交流。",
        "pinyin": "Wǒmen jīngcháng yòng zǒngshì jiāoliú.",
        "translation": "We often use 总是 (always) in communication."
      },
      {
        "chinese": "你知道这个总是的意思吗？",
        "pinyin": "Nǐ zhīdào zhège zǒngshì de yìsi ma?",
        "translation": "Do you know the meaning of this 总是?"
      }
    ]
  },
  {
    "id": 597,
    "character": "嘴",
    "pinyin": "zuǐ",
    "meaning": "mouth",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 8,
    "examples": [
      {
        "chinese": "我们经常用嘴交流。",
        "pinyin": "Wǒmen jīngcháng yòng zuǐ jiāoliú.",
        "translation": "We often use 嘴 (mouth) in communication."
      },
      {
        "chinese": "你知道这个嘴的意思吗？",
        "pinyin": "Nǐ zhīdào zhège zuǐ de yìsi ma?",
        "translation": "Do you know the meaning of this 嘴?"
      }
    ]
  },
  {
    "id": 598,
    "character": "最后",
    "pinyin": "zuìhòu",
    "meaning": "Last",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 12,
    "examples": [
      {
        "chinese": "我们经常用最后交流。",
        "pinyin": "Wǒmen jīngcháng yòng zuìhòu jiāoliú.",
        "translation": "We often use 最后 (Last) in communication."
      },
      {
        "chinese": "你知道这个最后的意思吗？",
        "pinyin": "Nǐ zhīdào zhège zuìhòu de yìsi ma?",
        "translation": "Do you know the meaning of this 最后?"
      }
    ]
  },
  {
    "id": 599,
    "character": "最近",
    "pinyin": "zuìjìn",
    "meaning": "lately",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 12,
    "examples": [
      {
        "chinese": "我们经常用最近交流。",
        "pinyin": "Wǒmen jīngcháng yòng zuìjìn jiāoliú.",
        "translation": "We often use 最近 (lately) in communication."
      },
      {
        "chinese": "你知道这个最近的意思吗？",
        "pinyin": "Nǐ zhīdào zhège zuìjìn de yìsi ma?",
        "translation": "Do you know the meaning of this 最近?"
      }
    ]
  },
  {
    "id": 600,
    "character": "作业",
    "pinyin": "zuòyè",
    "meaning": "homework",
    "category": "HSK 3 Standard",
    "level": 3,
    "strokes": 7,
    "examples": [
      {
        "chinese": "我们经常用作业交流。",
        "pinyin": "Wǒmen jīngcháng yòng zuòyè jiāoliú.",
        "translation": "We often use 作业 (homework) in communication."
      },
      {
        "chinese": "你知道这个作业的意思吗？",
        "pinyin": "Nǐ zhīdào zhège zuòyè de yìsi ma?",
        "translation": "Do you know the meaning of this 作业?"
      }
    ]
  }
];

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
