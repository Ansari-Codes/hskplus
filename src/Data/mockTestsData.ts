// HSK Plus Official Timed Mock Tests Database
// 5 Listening Tests + 5 Reading Tests + Writing Tests for HSK 1, HSK 2, and HSK 3

export type TestType = 'listening' | 'reading' | 'writing'

export interface MockTestQuestion {
  id: number
  part?: number
  type: string
  prompt: string
  audioText?: string
  audioTranscript?: string
  imageEmoji?: string
  imageDesc?: string
  text?: string
  sentence?: string
  pinyinSentence?: string
  question?: string
  words?: string[]
  character?: string
  pinyin?: string
  options: string[]
  correctAnswer: number
  explanation: string
  translation?: string
  analysis?: string
  keyVocab?: { word: string; pinyin: string; meaning: string }[]
  wordBank?: { letter: string; word: string; pinyin?: string; meaning?: string }[]
  scrambledWords?: string[]
}

export interface MockTestEntry {
  id: string
  level: 1 | 2 | 3
  type: TestType
  testNumber: number
  title: string
  durationMinutes: number
  totalQuestions: number
  questions: MockTestQuestion[]
}

export const MOCK_TESTS_DATA: MockTestEntry[] = [
  {
    "id": "hsk1-listening-1",
    "level": 1,
    "type": "listening",
    "testNumber": 1,
    "title": "HSK 1 Official Mock Test 1 · Listening (听力)",
    "durationMinutes": 20,
    "totalQuestions": 10,
    "questions": [
      {
        "id": 1,
        "part": 1,
        "type": "true_false",
        "prompt": "Listen to the audio. Does the audio match the picture? (True or False)",
        "audioText": "他在看书。",
        "imageEmoji": "📖",
        "imageDesc": "A person reading a book",
        "options": [
          "正确 (True)",
          "错误 (False)"
        ],
        "correctAnswer": 0,
        "explanation": "Audio says '他在看书' (He is reading a book), which matches the book icon."
      },
      {
        "id": 2,
        "part": 1,
        "type": "true_false",
        "prompt": "Listen to the audio. Does the audio match the picture?",
        "audioText": "吃苹果。",
        "imageEmoji": "☕",
        "imageDesc": "A hot cup of coffee",
        "options": [
          "正确 (True)",
          "错误 (False)"
        ],
        "correctAnswer": 1,
        "explanation": "Audio says '吃苹果' (Eat an apple), but the picture shows a cup of coffee (喝咖啡/喝茶)."
      },
      {
        "id": 3,
        "part": 2,
        "type": "choice",
        "prompt": "Listen to the statement and select the matching image.",
        "audioText": "昨天我们去商店买衣服了。",
        "options": [
          "A. 🏬 商店 (Store / Shopping)",
          "B. ✈️ 机场 (Airport)",
          "C. 🏥 医院 (Hospital)"
        ],
        "correctAnswer": 0,
        "explanation": "'去商店买衣服' means 'went to the store to buy clothes'."
      },
      {
        "id": 4,
        "part": 3,
        "type": "dialog",
        "prompt": "Listen to the dialogue and answer the question.",
        "audioText": "男：请问，现在几点了？ 女：现在十点十分。",
        "question": "现在几点了？ (What time is it?)",
        "options": [
          "A. 9:10",
          "B. 10:10",
          "C. 10:20"
        ],
        "correctAnswer": 1,
        "explanation": "The woman clearly states '现在十点十分' (10:10)."
      },
      {
        "id": 5,
        "part": 4,
        "type": "comprehension",
        "prompt": "Listen to the conversation and choose the correct answer.",
        "audioText": "男：这个杯子多少钱？ 女：十八块钱一个。",
        "question": "杯子多少钱一个？ (How much is each cup?)",
        "options": [
          "A. 8 块",
          "B. 18 块",
          "C. 80 块"
        ],
        "correctAnswer": 1,
        "explanation": "The woman replies '十八块' (18 yuan)."
      },
      {
        "id": 6,
        "part": 4,
        "type": "comprehension",
        "prompt": "Listen to the dialogue and answer.",
        "audioText": "女：你明天想去哪儿？ 男：我想去北京看长城。",
        "question": "男的明天想去哪儿？ (Where does the man want to go tomorrow?)",
        "options": [
          "A. 学校 (School)",
          "B. 北京 (Beijing)",
          "C. 饭馆 (Restaurant)"
        ],
        "correctAnswer": 1,
        "explanation": "The man says '我想去北京看长城' (I want to go to Beijing)."
      },
      {
        "id": 7,
        "part": 4,
        "type": "comprehension",
        "prompt": "Listen to the conversation.",
        "audioText": "男：你喜欢吃中国菜吗？ 女：很喜欢，中国菜很好吃！",
        "question": "女的觉得中国菜怎么样？ (How does the woman like Chinese food?)",
        "options": [
          "A. 很好吃 (Very delicious)",
          "B. 不好吃 (Not delicious)",
          "C. 太辣了 (Too spicy)"
        ],
        "correctAnswer": 0,
        "explanation": "The woman says '很喜欢，中国菜很好吃！'."
      },
      {
        "id": 8,
        "part": 4,
        "type": "comprehension",
        "prompt": "Listen to the conversation.",
        "audioText": "女：王老师在学校吗？ 男：在，他正在三楼给学生上课。",
        "question": "王老师在做什么？ (What is Teacher Wang doing?)",
        "options": [
          "A. 睡觉 (Sleeping)",
          "B. 上课 (Teaching class)",
          "C. 开车 (Driving)"
        ],
        "correctAnswer": 1,
        "explanation": "The man notes '他正在三楼给学生上课' (He is teaching students on the 3rd floor)."
      },
      {
        "id": 9,
        "part": 4,
        "type": "comprehension",
        "prompt": "Listen to the conversation.",
        "audioText": "男：外面下雨了吗？ 女：没有下雨，天气非常好，很暖和。",
        "question": "今天天气怎么样？ (How is the weather today?)",
        "options": [
          "A. 下大雨 (Heavy rain)",
          "B. 很冷 (Very cold)",
          "C. 很好 (Very good)"
        ],
        "correctAnswer": 2,
        "explanation": "The woman says '没有下雨，天气非常好'."
      },
      {
        "id": 10,
        "part": 4,
        "type": "comprehension",
        "prompt": "Listen to the final question.",
        "audioText": "女：你是坐出租车来的吗？ 男：不是，我是坐地铁来的。",
        "question": "男的是怎么来的？ (How did the man come?)",
        "options": [
          "A. 坐飞机 (By plane)",
          "B. 坐出租车 (By taxi)",
          "C. 坐地铁 (By subway)"
        ],
        "correctAnswer": 2,
        "explanation": "The man states '不是，我是坐地铁来的' (I came by subway)."
      }
    ]
  },
  {
    "id": "hsk1-listening-2",
    "level": 1,
    "type": "listening",
    "testNumber": 2,
    "title": "HSK 1 Official Mock Test 2 · Listening (听力)",
    "durationMinutes": 20,
    "totalQuestions": 10,
    "questions": [
      {
        "id": 1,
        "part": 1,
        "type": "true_false",
        "prompt": "Listen to the audio. Does the audio match the picture? (True or False)",
        "audioText": "他在看书。",
        "imageEmoji": "📖",
        "imageDesc": "A person reading a book",
        "options": [
          "正确 (True)",
          "错误 (False)"
        ],
        "correctAnswer": 0,
        "explanation": "Audio says '他在看书' (He is reading a book), which matches the book icon."
      },
      {
        "id": 2,
        "part": 1,
        "type": "true_false",
        "prompt": "Listen to the audio. Does the audio match the picture?",
        "audioText": "吃苹果。",
        "imageEmoji": "☕",
        "imageDesc": "A hot cup of coffee",
        "options": [
          "正确 (True)",
          "错误 (False)"
        ],
        "correctAnswer": 1,
        "explanation": "Audio says '吃苹果' (Eat an apple), but the picture shows a cup of coffee (喝咖啡/喝茶)."
      },
      {
        "id": 3,
        "part": 2,
        "type": "choice",
        "prompt": "Listen to the statement and select the matching image.",
        "audioText": "昨天我们去商店买衣服了。",
        "options": [
          "A. 🏬 商店 (Store / Shopping)",
          "B. ✈️ 机场 (Airport)",
          "C. 🏥 医院 (Hospital)"
        ],
        "correctAnswer": 0,
        "explanation": "'去商店买衣服' means 'went to the store to buy clothes'."
      },
      {
        "id": 4,
        "part": 3,
        "type": "dialog",
        "prompt": "Listen to the dialogue and answer the question.",
        "audioText": "男：请问，现在几点了？ 女：现在十点十分。",
        "question": "现在几点了？ (What time is it?)",
        "options": [
          "A. 9:10",
          "B. 10:10",
          "C. 10:20"
        ],
        "correctAnswer": 1,
        "explanation": "The woman clearly states '现在十点十分' (10:10)."
      },
      {
        "id": 5,
        "part": 4,
        "type": "comprehension",
        "prompt": "Listen to the conversation and choose the correct answer.",
        "audioText": "男：这个杯子多少钱？ 女：十八块钱一个。",
        "question": "杯子多少钱一个？ (How much is each cup?)",
        "options": [
          "A. 8 块",
          "B. 18 块",
          "C. 80 块"
        ],
        "correctAnswer": 1,
        "explanation": "The woman replies '十八块' (18 yuan)."
      },
      {
        "id": 6,
        "part": 4,
        "type": "comprehension",
        "prompt": "Listen to the dialogue and answer.",
        "audioText": "女：你明天想去哪儿？ 男：我想去北京看长城。",
        "question": "男的明天想去哪儿？ (Where does the man want to go tomorrow?)",
        "options": [
          "A. 学校 (School)",
          "B. 北京 (Beijing)",
          "C. 饭馆 (Restaurant)"
        ],
        "correctAnswer": 1,
        "explanation": "The man says '我想去北京看长城' (I want to go to Beijing)."
      },
      {
        "id": 7,
        "part": 4,
        "type": "comprehension",
        "prompt": "Listen to the conversation.",
        "audioText": "男：你喜欢吃中国菜吗？ 女：很喜欢，中国菜很好吃！",
        "question": "女的觉得中国菜怎么样？ (How does the woman like Chinese food?)",
        "options": [
          "A. 很好吃 (Very delicious)",
          "B. 不好吃 (Not delicious)",
          "C. 太辣了 (Too spicy)"
        ],
        "correctAnswer": 0,
        "explanation": "The woman says '很喜欢，中国菜很好吃！'."
      },
      {
        "id": 8,
        "part": 4,
        "type": "comprehension",
        "prompt": "Listen to the conversation.",
        "audioText": "女：王老师在学校吗？ 男：在，他正在三楼给学生上课。",
        "question": "王老师在做什么？ (What is Teacher Wang doing?)",
        "options": [
          "A. 睡觉 (Sleeping)",
          "B. 上课 (Teaching class)",
          "C. 开车 (Driving)"
        ],
        "correctAnswer": 1,
        "explanation": "The man notes '他正在三楼给学生上课' (He is teaching students on the 3rd floor)."
      },
      {
        "id": 9,
        "part": 4,
        "type": "comprehension",
        "prompt": "Listen to the conversation.",
        "audioText": "男：外面下雨了吗？ 女：没有下雨，天气非常好，很暖和。",
        "question": "今天天气怎么样？ (How is the weather today?)",
        "options": [
          "A. 下大雨 (Heavy rain)",
          "B. 很冷 (Very cold)",
          "C. 很好 (Very good)"
        ],
        "correctAnswer": 2,
        "explanation": "The woman says '没有下雨，天气非常好'."
      },
      {
        "id": 10,
        "part": 4,
        "type": "comprehension",
        "prompt": "Listen to the final question.",
        "audioText": "女：你是坐出租车来的吗？ 男：不是，我是坐地铁来的。",
        "question": "男的是怎么来的？ (How did the man come?)",
        "options": [
          "A. 坐飞机 (By plane)",
          "B. 坐出租车 (By taxi)",
          "C. 坐地铁 (By subway)"
        ],
        "correctAnswer": 2,
        "explanation": "The man states '不是，我是坐地铁来的' (I came by subway)."
      }
    ]
  },
  {
    "id": "hsk1-listening-3",
    "level": 1,
    "type": "listening",
    "testNumber": 3,
    "title": "HSK 1 Official Mock Test 3 · Listening (听力)",
    "durationMinutes": 20,
    "totalQuestions": 10,
    "questions": [
      {
        "id": 1,
        "part": 1,
        "type": "true_false",
        "prompt": "Listen to the audio. Does the audio match the picture? (True or False)",
        "audioText": "他在看书。",
        "imageEmoji": "📖",
        "imageDesc": "A person reading a book",
        "options": [
          "正确 (True)",
          "错误 (False)"
        ],
        "correctAnswer": 0,
        "explanation": "Audio says '他在看书' (He is reading a book), which matches the book icon."
      },
      {
        "id": 2,
        "part": 1,
        "type": "true_false",
        "prompt": "Listen to the audio. Does the audio match the picture?",
        "audioText": "吃苹果。",
        "imageEmoji": "☕",
        "imageDesc": "A hot cup of coffee",
        "options": [
          "正确 (True)",
          "错误 (False)"
        ],
        "correctAnswer": 1,
        "explanation": "Audio says '吃苹果' (Eat an apple), but the picture shows a cup of coffee (喝咖啡/喝茶)."
      },
      {
        "id": 3,
        "part": 2,
        "type": "choice",
        "prompt": "Listen to the statement and select the matching image.",
        "audioText": "昨天我们去商店买衣服了。",
        "options": [
          "A. 🏬 商店 (Store / Shopping)",
          "B. ✈️ 机场 (Airport)",
          "C. 🏥 医院 (Hospital)"
        ],
        "correctAnswer": 0,
        "explanation": "'去商店买衣服' means 'went to the store to buy clothes'."
      },
      {
        "id": 4,
        "part": 3,
        "type": "dialog",
        "prompt": "Listen to the dialogue and answer the question.",
        "audioText": "男：请问，现在几点了？ 女：现在十点十分。",
        "question": "现在几点了？ (What time is it?)",
        "options": [
          "A. 9:10",
          "B. 10:10",
          "C. 10:20"
        ],
        "correctAnswer": 1,
        "explanation": "The woman clearly states '现在十点十分' (10:10)."
      },
      {
        "id": 5,
        "part": 4,
        "type": "comprehension",
        "prompt": "Listen to the conversation and choose the correct answer.",
        "audioText": "男：这个杯子多少钱？ 女：十八块钱一个。",
        "question": "杯子多少钱一个？ (How much is each cup?)",
        "options": [
          "A. 8 块",
          "B. 18 块",
          "C. 80 块"
        ],
        "correctAnswer": 1,
        "explanation": "The woman replies '十八块' (18 yuan)."
      },
      {
        "id": 6,
        "part": 4,
        "type": "comprehension",
        "prompt": "Listen to the dialogue and answer.",
        "audioText": "女：你明天想去哪儿？ 男：我想去北京看长城。",
        "question": "男的明天想去哪儿？ (Where does the man want to go tomorrow?)",
        "options": [
          "A. 学校 (School)",
          "B. 北京 (Beijing)",
          "C. 饭馆 (Restaurant)"
        ],
        "correctAnswer": 1,
        "explanation": "The man says '我想去北京看长城' (I want to go to Beijing)."
      },
      {
        "id": 7,
        "part": 4,
        "type": "comprehension",
        "prompt": "Listen to the conversation.",
        "audioText": "男：你喜欢吃中国菜吗？ 女：很喜欢，中国菜很好吃！",
        "question": "女的觉得中国菜怎么样？ (How does the woman like Chinese food?)",
        "options": [
          "A. 很好吃 (Very delicious)",
          "B. 不好吃 (Not delicious)",
          "C. 太辣了 (Too spicy)"
        ],
        "correctAnswer": 0,
        "explanation": "The woman says '很喜欢，中国菜很好吃！'."
      },
      {
        "id": 8,
        "part": 4,
        "type": "comprehension",
        "prompt": "Listen to the conversation.",
        "audioText": "女：王老师在学校吗？ 男：在，他正在三楼给学生上课。",
        "question": "王老师在做什么？ (What is Teacher Wang doing?)",
        "options": [
          "A. 睡觉 (Sleeping)",
          "B. 上课 (Teaching class)",
          "C. 开车 (Driving)"
        ],
        "correctAnswer": 1,
        "explanation": "The man notes '他正在三楼给学生上课' (He is teaching students on the 3rd floor)."
      },
      {
        "id": 9,
        "part": 4,
        "type": "comprehension",
        "prompt": "Listen to the conversation.",
        "audioText": "男：外面下雨了吗？ 女：没有下雨，天气非常好，很暖和。",
        "question": "今天天气怎么样？ (How is the weather today?)",
        "options": [
          "A. 下大雨 (Heavy rain)",
          "B. 很冷 (Very cold)",
          "C. 很好 (Very good)"
        ],
        "correctAnswer": 2,
        "explanation": "The woman says '没有下雨，天气非常好'."
      },
      {
        "id": 10,
        "part": 4,
        "type": "comprehension",
        "prompt": "Listen to the final question.",
        "audioText": "女：你是坐出租车来的吗？ 男：不是，我是坐地铁来的。",
        "question": "男的是怎么来的？ (How did the man come?)",
        "options": [
          "A. 坐飞机 (By plane)",
          "B. 坐出租车 (By taxi)",
          "C. 坐地铁 (By subway)"
        ],
        "correctAnswer": 2,
        "explanation": "The man states '不是，我是坐地铁来的' (I came by subway)."
      }
    ]
  },
  {
    "id": "hsk1-listening-4",
    "level": 1,
    "type": "listening",
    "testNumber": 4,
    "title": "HSK 1 Official Mock Test 4 · Listening (听力)",
    "durationMinutes": 20,
    "totalQuestions": 10,
    "questions": [
      {
        "id": 1,
        "part": 1,
        "type": "true_false",
        "prompt": "Listen to the audio. Does the audio match the picture? (True or False)",
        "audioText": "他在看书。",
        "imageEmoji": "📖",
        "imageDesc": "A person reading a book",
        "options": [
          "正确 (True)",
          "错误 (False)"
        ],
        "correctAnswer": 0,
        "explanation": "Audio says '他在看书' (He is reading a book), which matches the book icon."
      },
      {
        "id": 2,
        "part": 1,
        "type": "true_false",
        "prompt": "Listen to the audio. Does the audio match the picture?",
        "audioText": "吃苹果。",
        "imageEmoji": "☕",
        "imageDesc": "A hot cup of coffee",
        "options": [
          "正确 (True)",
          "错误 (False)"
        ],
        "correctAnswer": 1,
        "explanation": "Audio says '吃苹果' (Eat an apple), but the picture shows a cup of coffee (喝咖啡/喝茶)."
      },
      {
        "id": 3,
        "part": 2,
        "type": "choice",
        "prompt": "Listen to the statement and select the matching image.",
        "audioText": "昨天我们去商店买衣服了。",
        "options": [
          "A. 🏬 商店 (Store / Shopping)",
          "B. ✈️ 机场 (Airport)",
          "C. 🏥 医院 (Hospital)"
        ],
        "correctAnswer": 0,
        "explanation": "'去商店买衣服' means 'went to the store to buy clothes'."
      },
      {
        "id": 4,
        "part": 3,
        "type": "dialog",
        "prompt": "Listen to the dialogue and answer the question.",
        "audioText": "男：请问，现在几点了？ 女：现在十点十分。",
        "question": "现在几点了？ (What time is it?)",
        "options": [
          "A. 9:10",
          "B. 10:10",
          "C. 10:20"
        ],
        "correctAnswer": 1,
        "explanation": "The woman clearly states '现在十点十分' (10:10)."
      },
      {
        "id": 5,
        "part": 4,
        "type": "comprehension",
        "prompt": "Listen to the conversation and choose the correct answer.",
        "audioText": "男：这个杯子多少钱？ 女：十八块钱一个。",
        "question": "杯子多少钱一个？ (How much is each cup?)",
        "options": [
          "A. 8 块",
          "B. 18 块",
          "C. 80 块"
        ],
        "correctAnswer": 1,
        "explanation": "The woman replies '十八块' (18 yuan)."
      },
      {
        "id": 6,
        "part": 4,
        "type": "comprehension",
        "prompt": "Listen to the dialogue and answer.",
        "audioText": "女：你明天想去哪儿？ 男：我想去北京看长城。",
        "question": "男的明天想去哪儿？ (Where does the man want to go tomorrow?)",
        "options": [
          "A. 学校 (School)",
          "B. 北京 (Beijing)",
          "C. 饭馆 (Restaurant)"
        ],
        "correctAnswer": 1,
        "explanation": "The man says '我想去北京看长城' (I want to go to Beijing)."
      },
      {
        "id": 7,
        "part": 4,
        "type": "comprehension",
        "prompt": "Listen to the conversation.",
        "audioText": "男：你喜欢吃中国菜吗？ 女：很喜欢，中国菜很好吃！",
        "question": "女的觉得中国菜怎么样？ (How does the woman like Chinese food?)",
        "options": [
          "A. 很好吃 (Very delicious)",
          "B. 不好吃 (Not delicious)",
          "C. 太辣了 (Too spicy)"
        ],
        "correctAnswer": 0,
        "explanation": "The woman says '很喜欢，中国菜很好吃！'."
      },
      {
        "id": 8,
        "part": 4,
        "type": "comprehension",
        "prompt": "Listen to the conversation.",
        "audioText": "女：王老师在学校吗？ 男：在，他正在三楼给学生上课。",
        "question": "王老师在做什么？ (What is Teacher Wang doing?)",
        "options": [
          "A. 睡觉 (Sleeping)",
          "B. 上课 (Teaching class)",
          "C. 开车 (Driving)"
        ],
        "correctAnswer": 1,
        "explanation": "The man notes '他正在三楼给学生上课' (He is teaching students on the 3rd floor)."
      },
      {
        "id": 9,
        "part": 4,
        "type": "comprehension",
        "prompt": "Listen to the conversation.",
        "audioText": "男：外面下雨了吗？ 女：没有下雨，天气非常好，很暖和。",
        "question": "今天天气怎么样？ (How is the weather today?)",
        "options": [
          "A. 下大雨 (Heavy rain)",
          "B. 很冷 (Very cold)",
          "C. 很好 (Very good)"
        ],
        "correctAnswer": 2,
        "explanation": "The woman says '没有下雨，天气非常好'."
      },
      {
        "id": 10,
        "part": 4,
        "type": "comprehension",
        "prompt": "Listen to the final question.",
        "audioText": "女：你是坐出租车来的吗？ 男：不是，我是坐地铁来的。",
        "question": "男的是怎么来的？ (How did the man come?)",
        "options": [
          "A. 坐飞机 (By plane)",
          "B. 坐出租车 (By taxi)",
          "C. 坐地铁 (By subway)"
        ],
        "correctAnswer": 2,
        "explanation": "The man states '不是，我是坐地铁来的' (I came by subway)."
      }
    ]
  },
  {
    "id": "hsk1-listening-5",
    "level": 1,
    "type": "listening",
    "testNumber": 5,
    "title": "HSK 1 Official Mock Test 5 · Listening (听力)",
    "durationMinutes": 20,
    "totalQuestions": 10,
    "questions": [
      {
        "id": 1,
        "part": 1,
        "type": "true_false",
        "prompt": "Listen to the audio. Does the audio match the picture? (True or False)",
        "audioText": "他在看书。",
        "imageEmoji": "📖",
        "imageDesc": "A person reading a book",
        "options": [
          "正确 (True)",
          "错误 (False)"
        ],
        "correctAnswer": 0,
        "explanation": "Audio says '他在看书' (He is reading a book), which matches the book icon."
      },
      {
        "id": 2,
        "part": 1,
        "type": "true_false",
        "prompt": "Listen to the audio. Does the audio match the picture?",
        "audioText": "吃苹果。",
        "imageEmoji": "☕",
        "imageDesc": "A hot cup of coffee",
        "options": [
          "正确 (True)",
          "错误 (False)"
        ],
        "correctAnswer": 1,
        "explanation": "Audio says '吃苹果' (Eat an apple), but the picture shows a cup of coffee (喝咖啡/喝茶)."
      },
      {
        "id": 3,
        "part": 2,
        "type": "choice",
        "prompt": "Listen to the statement and select the matching image.",
        "audioText": "昨天我们去商店买衣服了。",
        "options": [
          "A. 🏬 商店 (Store / Shopping)",
          "B. ✈️ 机场 (Airport)",
          "C. 🏥 医院 (Hospital)"
        ],
        "correctAnswer": 0,
        "explanation": "'去商店买衣服' means 'went to the store to buy clothes'."
      },
      {
        "id": 4,
        "part": 3,
        "type": "dialog",
        "prompt": "Listen to the dialogue and answer the question.",
        "audioText": "男：请问，现在几点了？ 女：现在十点十分。",
        "question": "现在几点了？ (What time is it?)",
        "options": [
          "A. 9:10",
          "B. 10:10",
          "C. 10:20"
        ],
        "correctAnswer": 1,
        "explanation": "The woman clearly states '现在十点十分' (10:10)."
      },
      {
        "id": 5,
        "part": 4,
        "type": "comprehension",
        "prompt": "Listen to the conversation and choose the correct answer.",
        "audioText": "男：这个杯子多少钱？ 女：十八块钱一个。",
        "question": "杯子多少钱一个？ (How much is each cup?)",
        "options": [
          "A. 8 块",
          "B. 18 块",
          "C. 80 块"
        ],
        "correctAnswer": 1,
        "explanation": "The woman replies '十八块' (18 yuan)."
      },
      {
        "id": 6,
        "part": 4,
        "type": "comprehension",
        "prompt": "Listen to the dialogue and answer.",
        "audioText": "女：你明天想去哪儿？ 男：我想去北京看长城。",
        "question": "男的明天想去哪儿？ (Where does the man want to go tomorrow?)",
        "options": [
          "A. 学校 (School)",
          "B. 北京 (Beijing)",
          "C. 饭馆 (Restaurant)"
        ],
        "correctAnswer": 1,
        "explanation": "The man says '我想去北京看长城' (I want to go to Beijing)."
      },
      {
        "id": 7,
        "part": 4,
        "type": "comprehension",
        "prompt": "Listen to the conversation.",
        "audioText": "男：你喜欢吃中国菜吗？ 女：很喜欢，中国菜很好吃！",
        "question": "女的觉得中国菜怎么样？ (How does the woman like Chinese food?)",
        "options": [
          "A. 很好吃 (Very delicious)",
          "B. 不好吃 (Not delicious)",
          "C. 太辣了 (Too spicy)"
        ],
        "correctAnswer": 0,
        "explanation": "The woman says '很喜欢，中国菜很好吃！'."
      },
      {
        "id": 8,
        "part": 4,
        "type": "comprehension",
        "prompt": "Listen to the conversation.",
        "audioText": "女：王老师在学校吗？ 男：在，他正在三楼给学生上课。",
        "question": "王老师在做什么？ (What is Teacher Wang doing?)",
        "options": [
          "A. 睡觉 (Sleeping)",
          "B. 上课 (Teaching class)",
          "C. 开车 (Driving)"
        ],
        "correctAnswer": 1,
        "explanation": "The man notes '他正在三楼给学生上课' (He is teaching students on the 3rd floor)."
      },
      {
        "id": 9,
        "part": 4,
        "type": "comprehension",
        "prompt": "Listen to the conversation.",
        "audioText": "男：外面下雨了吗？ 女：没有下雨，天气非常好，很暖和。",
        "question": "今天天气怎么样？ (How is the weather today?)",
        "options": [
          "A. 下大雨 (Heavy rain)",
          "B. 很冷 (Very cold)",
          "C. 很好 (Very good)"
        ],
        "correctAnswer": 2,
        "explanation": "The woman says '没有下雨，天气非常好'."
      },
      {
        "id": 10,
        "part": 4,
        "type": "comprehension",
        "prompt": "Listen to the final question.",
        "audioText": "女：你是坐出租车来的吗？ 男：不是，我是坐地铁来的。",
        "question": "男的是怎么来的？ (How did the man come?)",
        "options": [
          "A. 坐飞机 (By plane)",
          "B. 坐出租车 (By taxi)",
          "C. 坐地铁 (By subway)"
        ],
        "correctAnswer": 2,
        "explanation": "The man states '不是，我是坐地铁来的' (I came by subway)."
      }
    ]
  },
  {
    "id": "hsk1-reading-1",
    "level": 1,
    "type": "reading",
    "testNumber": 1,
    "title": "HSK 1 Official Mock Test 1 · Reading (阅读)",
    "durationMinutes": 17,
    "totalQuestions": 10,
    "questions": [
      {
        "id": 1,
        "part": 1,
        "type": "match",
        "prompt": "Match the word to the picture. Is it correct?",
        "imageEmoji": "✈️",
        "text": "飞机 (fēijī)",
        "options": [
          "正确 (True)",
          "错误 (False)"
        ],
        "correctAnswer": 0,
        "explanation": "'飞机' means airplane, matching the airplane emoji."
      },
      {
        "id": 2,
        "part": 1,
        "type": "match",
        "prompt": "Match the word to the picture. Is it correct?",
        "imageEmoji": "🐱",
        "text": "大狗 (dà gǒu)",
        "options": [
          "正确 (True)",
          "错误 (False)"
        ],
        "correctAnswer": 1,
        "explanation": "'大狗' means big dog, but the picture shows a cat (猫)."
      },
      {
        "id": 3,
        "part": 2,
        "type": "fill_blank",
        "prompt": "Choose the best word to fill in the blank.",
        "sentence": "桌子上有两___书。",
        "options": [
          "A. 个",
          "B. 本",
          "C. 口",
          "D. 块"
        ],
        "correctAnswer": 1,
        "explanation": "'本' (běn) is the dedicated measure word for bound books and notebooks."
      },
      {
        "id": 4,
        "part": 2,
        "type": "fill_blank",
        "prompt": "Choose the best word to fill in the blank.",
        "sentence": "我不会___中国菜，但是我很喜欢吃。",
        "options": [
          "A. 做",
          "B. 喝",
          "C. 读",
          "D. 听"
        ],
        "correctAnswer": 0,
        "explanation": "'做中国菜' means to cook/make Chinese food."
      },
      {
        "id": 5,
        "part": 3,
        "type": "dialog_match",
        "prompt": "Match the best answer to: '你认识李老师吗？'",
        "question": "你认识李老师吗？ (Do you know Teacher Li?)",
        "options": [
          "A. 认识，她是我的汉语老师。",
          "B. 我想吃米饭。",
          "C. 今天星期三。"
        ],
        "correctAnswer": 0,
        "explanation": "'认识，她是我的汉语老师' directly answers the question about knowing Teacher Li."
      },
      {
        "id": 6,
        "part": 3,
        "type": "dialog_match",
        "prompt": "Match the best answer to: '对不起！'",
        "question": "对不起！ (Sorry!)",
        "options": [
          "A. 不客气。",
          "B. 没关系。",
          "C. 再见。"
        ],
        "correctAnswer": 1,
        "explanation": "'没关系' (That's all right / it doesn't matter) is the standard response to 对不起."
      },
      {
        "id": 7,
        "part": 4,
        "type": "comprehension",
        "prompt": "Read the statement and judge: '我爸爸是医生，他在大医院工作。'",
        "question": "爸爸在医院工作。 (Father works at the hospital.)",
        "options": [
          "正确 (True)",
          "错误 (False)"
        ],
        "correctAnswer": 0,
        "explanation": "The passage confirms '他在大医院工作'."
      },
      {
        "id": 8,
        "part": 4,
        "type": "comprehension",
        "prompt": "Read the statement: '今天上午天气很冷，下午下雨了。'",
        "question": "今天下午天气很好。 (This afternoon the weather was great.)",
        "options": [
          "正确 (True)",
          "错误 (False)"
        ],
        "correctAnswer": 1,
        "explanation": "The text states '下午下雨了' (it rained in the afternoon), so the statement is False."
      },
      {
        "id": 9,
        "part": 4,
        "type": "fill_blank",
        "prompt": "Choose the correct particle: '你是哪国人___？'",
        "sentence": "你是哪国人___？",
        "options": [
          "A. 呢",
          "B. 吗",
          "C. 的",
          "D. 了"
        ],
        "correctAnswer": 0,
        "explanation": "With the question word 哪国人, use '呢' for rhetorical or conversational inquiry (or omit particle). '吗' is incorrect because it cannot be paired with interrogative pronouns."
      },
      {
        "id": 10,
        "part": 4,
        "type": "fill_blank",
        "prompt": "Choose the correct question word: '这个苹果___钱一斤？'",
        "sentence": "这个苹果___钱一斤？",
        "options": [
          "A. 多少",
          "B. 几",
          "C. 怎么",
          "D. 为什么"
        ],
        "correctAnswer": 0,
        "explanation": "'多少钱' is the standard fixed expression for 'how much money'."
      }
    ]
  },
  {
    "id": "hsk1-reading-2",
    "level": 1,
    "type": "reading",
    "testNumber": 2,
    "title": "HSK 1 Official Mock Test 2 · Reading (阅读)",
    "durationMinutes": 17,
    "totalQuestions": 10,
    "questions": [
      {
        "id": 1,
        "part": 1,
        "type": "match",
        "prompt": "Match the word to the picture. Is it correct?",
        "imageEmoji": "✈️",
        "text": "飞机 (fēijī)",
        "options": [
          "正确 (True)",
          "错误 (False)"
        ],
        "correctAnswer": 0,
        "explanation": "'飞机' means airplane, matching the airplane emoji."
      },
      {
        "id": 2,
        "part": 1,
        "type": "match",
        "prompt": "Match the word to the picture. Is it correct?",
        "imageEmoji": "🐱",
        "text": "大狗 (dà gǒu)",
        "options": [
          "正确 (True)",
          "错误 (False)"
        ],
        "correctAnswer": 1,
        "explanation": "'大狗' means big dog, but the picture shows a cat (猫)."
      },
      {
        "id": 3,
        "part": 2,
        "type": "fill_blank",
        "prompt": "Choose the best word to fill in the blank.",
        "sentence": "桌子上有两___书。",
        "options": [
          "A. 个",
          "B. 本",
          "C. 口",
          "D. 块"
        ],
        "correctAnswer": 1,
        "explanation": "'本' (běn) is the dedicated measure word for bound books and notebooks."
      },
      {
        "id": 4,
        "part": 2,
        "type": "fill_blank",
        "prompt": "Choose the best word to fill in the blank.",
        "sentence": "我不会___中国菜，但是我很喜欢吃。",
        "options": [
          "A. 做",
          "B. 喝",
          "C. 读",
          "D. 听"
        ],
        "correctAnswer": 0,
        "explanation": "'做中国菜' means to cook/make Chinese food."
      },
      {
        "id": 5,
        "part": 3,
        "type": "dialog_match",
        "prompt": "Match the best answer to: '你认识李老师吗？'",
        "question": "你认识李老师吗？ (Do you know Teacher Li?)",
        "options": [
          "A. 认识，她是我的汉语老师。",
          "B. 我想吃米饭。",
          "C. 今天星期三。"
        ],
        "correctAnswer": 0,
        "explanation": "'认识，她是我的汉语老师' directly answers the question about knowing Teacher Li."
      },
      {
        "id": 6,
        "part": 3,
        "type": "dialog_match",
        "prompt": "Match the best answer to: '对不起！'",
        "question": "对不起！ (Sorry!)",
        "options": [
          "A. 不客气。",
          "B. 没关系。",
          "C. 再见。"
        ],
        "correctAnswer": 1,
        "explanation": "'没关系' (That's all right / it doesn't matter) is the standard response to 对不起."
      },
      {
        "id": 7,
        "part": 4,
        "type": "comprehension",
        "prompt": "Read the statement and judge: '我爸爸是医生，他在大医院工作。'",
        "question": "爸爸在医院工作。 (Father works at the hospital.)",
        "options": [
          "正确 (True)",
          "错误 (False)"
        ],
        "correctAnswer": 0,
        "explanation": "The passage confirms '他在大医院工作'."
      },
      {
        "id": 8,
        "part": 4,
        "type": "comprehension",
        "prompt": "Read the statement: '今天上午天气很冷，下午下雨了。'",
        "question": "今天下午天气很好。 (This afternoon the weather was great.)",
        "options": [
          "正确 (True)",
          "错误 (False)"
        ],
        "correctAnswer": 1,
        "explanation": "The text states '下午下雨了' (it rained in the afternoon), so the statement is False."
      },
      {
        "id": 9,
        "part": 4,
        "type": "fill_blank",
        "prompt": "Choose the correct particle: '你是哪国人___？'",
        "sentence": "你是哪国人___？",
        "options": [
          "A. 呢",
          "B. 吗",
          "C. 的",
          "D. 了"
        ],
        "correctAnswer": 0,
        "explanation": "With the question word 哪国人, use '呢' for rhetorical or conversational inquiry (or omit particle). '吗' is incorrect because it cannot be paired with interrogative pronouns."
      },
      {
        "id": 10,
        "part": 4,
        "type": "fill_blank",
        "prompt": "Choose the correct question word: '这个苹果___钱一斤？'",
        "sentence": "这个苹果___钱一斤？",
        "options": [
          "A. 多少",
          "B. 几",
          "C. 怎么",
          "D. 为什么"
        ],
        "correctAnswer": 0,
        "explanation": "'多少钱' is the standard fixed expression for 'how much money'."
      }
    ]
  },
  {
    "id": "hsk1-reading-3",
    "level": 1,
    "type": "reading",
    "testNumber": 3,
    "title": "HSK 1 Official Mock Test 3 · Reading (阅读)",
    "durationMinutes": 17,
    "totalQuestions": 10,
    "questions": [
      {
        "id": 1,
        "part": 1,
        "type": "match",
        "prompt": "Match the word to the picture. Is it correct?",
        "imageEmoji": "✈️",
        "text": "飞机 (fēijī)",
        "options": [
          "正确 (True)",
          "错误 (False)"
        ],
        "correctAnswer": 0,
        "explanation": "'飞机' means airplane, matching the airplane emoji."
      },
      {
        "id": 2,
        "part": 1,
        "type": "match",
        "prompt": "Match the word to the picture. Is it correct?",
        "imageEmoji": "🐱",
        "text": "大狗 (dà gǒu)",
        "options": [
          "正确 (True)",
          "错误 (False)"
        ],
        "correctAnswer": 1,
        "explanation": "'大狗' means big dog, but the picture shows a cat (猫)."
      },
      {
        "id": 3,
        "part": 2,
        "type": "fill_blank",
        "prompt": "Choose the best word to fill in the blank.",
        "sentence": "桌子上有两___书。",
        "options": [
          "A. 个",
          "B. 本",
          "C. 口",
          "D. 块"
        ],
        "correctAnswer": 1,
        "explanation": "'本' (běn) is the dedicated measure word for bound books and notebooks."
      },
      {
        "id": 4,
        "part": 2,
        "type": "fill_blank",
        "prompt": "Choose the best word to fill in the blank.",
        "sentence": "我不会___中国菜，但是我很喜欢吃。",
        "options": [
          "A. 做",
          "B. 喝",
          "C. 读",
          "D. 听"
        ],
        "correctAnswer": 0,
        "explanation": "'做中国菜' means to cook/make Chinese food."
      },
      {
        "id": 5,
        "part": 3,
        "type": "dialog_match",
        "prompt": "Match the best answer to: '你认识李老师吗？'",
        "question": "你认识李老师吗？ (Do you know Teacher Li?)",
        "options": [
          "A. 认识，她是我的汉语老师。",
          "B. 我想吃米饭。",
          "C. 今天星期三。"
        ],
        "correctAnswer": 0,
        "explanation": "'认识，她是我的汉语老师' directly answers the question about knowing Teacher Li."
      },
      {
        "id": 6,
        "part": 3,
        "type": "dialog_match",
        "prompt": "Match the best answer to: '对不起！'",
        "question": "对不起！ (Sorry!)",
        "options": [
          "A. 不客气。",
          "B. 没关系。",
          "C. 再见。"
        ],
        "correctAnswer": 1,
        "explanation": "'没关系' (That's all right / it doesn't matter) is the standard response to 对不起."
      },
      {
        "id": 7,
        "part": 4,
        "type": "comprehension",
        "prompt": "Read the statement and judge: '我爸爸是医生，他在大医院工作。'",
        "question": "爸爸在医院工作。 (Father works at the hospital.)",
        "options": [
          "正确 (True)",
          "错误 (False)"
        ],
        "correctAnswer": 0,
        "explanation": "The passage confirms '他在大医院工作'."
      },
      {
        "id": 8,
        "part": 4,
        "type": "comprehension",
        "prompt": "Read the statement: '今天上午天气很冷，下午下雨了。'",
        "question": "今天下午天气很好。 (This afternoon the weather was great.)",
        "options": [
          "正确 (True)",
          "错误 (False)"
        ],
        "correctAnswer": 1,
        "explanation": "The text states '下午下雨了' (it rained in the afternoon), so the statement is False."
      },
      {
        "id": 9,
        "part": 4,
        "type": "fill_blank",
        "prompt": "Choose the correct particle: '你是哪国人___？'",
        "sentence": "你是哪国人___？",
        "options": [
          "A. 呢",
          "B. 吗",
          "C. 的",
          "D. 了"
        ],
        "correctAnswer": 0,
        "explanation": "With the question word 哪国人, use '呢' for rhetorical or conversational inquiry (or omit particle). '吗' is incorrect because it cannot be paired with interrogative pronouns."
      },
      {
        "id": 10,
        "part": 4,
        "type": "fill_blank",
        "prompt": "Choose the correct question word: '这个苹果___钱一斤？'",
        "sentence": "这个苹果___钱一斤？",
        "options": [
          "A. 多少",
          "B. 几",
          "C. 怎么",
          "D. 为什么"
        ],
        "correctAnswer": 0,
        "explanation": "'多少钱' is the standard fixed expression for 'how much money'."
      }
    ]
  },
  {
    "id": "hsk1-reading-4",
    "level": 1,
    "type": "reading",
    "testNumber": 4,
    "title": "HSK 1 Official Mock Test 4 · Reading (阅读)",
    "durationMinutes": 17,
    "totalQuestions": 10,
    "questions": [
      {
        "id": 1,
        "part": 1,
        "type": "match",
        "prompt": "Match the word to the picture. Is it correct?",
        "imageEmoji": "✈️",
        "text": "飞机 (fēijī)",
        "options": [
          "正确 (True)",
          "错误 (False)"
        ],
        "correctAnswer": 0,
        "explanation": "'飞机' means airplane, matching the airplane emoji."
      },
      {
        "id": 2,
        "part": 1,
        "type": "match",
        "prompt": "Match the word to the picture. Is it correct?",
        "imageEmoji": "🐱",
        "text": "大狗 (dà gǒu)",
        "options": [
          "正确 (True)",
          "错误 (False)"
        ],
        "correctAnswer": 1,
        "explanation": "'大狗' means big dog, but the picture shows a cat (猫)."
      },
      {
        "id": 3,
        "part": 2,
        "type": "fill_blank",
        "prompt": "Choose the best word to fill in the blank.",
        "sentence": "桌子上有两___书。",
        "options": [
          "A. 个",
          "B. 本",
          "C. 口",
          "D. 块"
        ],
        "correctAnswer": 1,
        "explanation": "'本' (běn) is the dedicated measure word for bound books and notebooks."
      },
      {
        "id": 4,
        "part": 2,
        "type": "fill_blank",
        "prompt": "Choose the best word to fill in the blank.",
        "sentence": "我不会___中国菜，但是我很喜欢吃。",
        "options": [
          "A. 做",
          "B. 喝",
          "C. 读",
          "D. 听"
        ],
        "correctAnswer": 0,
        "explanation": "'做中国菜' means to cook/make Chinese food."
      },
      {
        "id": 5,
        "part": 3,
        "type": "dialog_match",
        "prompt": "Match the best answer to: '你认识李老师吗？'",
        "question": "你认识李老师吗？ (Do you know Teacher Li?)",
        "options": [
          "A. 认识，她是我的汉语老师。",
          "B. 我想吃米饭。",
          "C. 今天星期三。"
        ],
        "correctAnswer": 0,
        "explanation": "'认识，她是我的汉语老师' directly answers the question about knowing Teacher Li."
      },
      {
        "id": 6,
        "part": 3,
        "type": "dialog_match",
        "prompt": "Match the best answer to: '对不起！'",
        "question": "对不起！ (Sorry!)",
        "options": [
          "A. 不客气。",
          "B. 没关系。",
          "C. 再见。"
        ],
        "correctAnswer": 1,
        "explanation": "'没关系' (That's all right / it doesn't matter) is the standard response to 对不起."
      },
      {
        "id": 7,
        "part": 4,
        "type": "comprehension",
        "prompt": "Read the statement and judge: '我爸爸是医生，他在大医院工作。'",
        "question": "爸爸在医院工作。 (Father works at the hospital.)",
        "options": [
          "正确 (True)",
          "错误 (False)"
        ],
        "correctAnswer": 0,
        "explanation": "The passage confirms '他在大医院工作'."
      },
      {
        "id": 8,
        "part": 4,
        "type": "comprehension",
        "prompt": "Read the statement: '今天上午天气很冷，下午下雨了。'",
        "question": "今天下午天气很好。 (This afternoon the weather was great.)",
        "options": [
          "正确 (True)",
          "错误 (False)"
        ],
        "correctAnswer": 1,
        "explanation": "The text states '下午下雨了' (it rained in the afternoon), so the statement is False."
      },
      {
        "id": 9,
        "part": 4,
        "type": "fill_blank",
        "prompt": "Choose the correct particle: '你是哪国人___？'",
        "sentence": "你是哪国人___？",
        "options": [
          "A. 呢",
          "B. 吗",
          "C. 的",
          "D. 了"
        ],
        "correctAnswer": 0,
        "explanation": "With the question word 哪国人, use '呢' for rhetorical or conversational inquiry (or omit particle). '吗' is incorrect because it cannot be paired with interrogative pronouns."
      },
      {
        "id": 10,
        "part": 4,
        "type": "fill_blank",
        "prompt": "Choose the correct question word: '这个苹果___钱一斤？'",
        "sentence": "这个苹果___钱一斤？",
        "options": [
          "A. 多少",
          "B. 几",
          "C. 怎么",
          "D. 为什么"
        ],
        "correctAnswer": 0,
        "explanation": "'多少钱' is the standard fixed expression for 'how much money'."
      }
    ]
  },
  {
    "id": "hsk1-reading-5",
    "level": 1,
    "type": "reading",
    "testNumber": 5,
    "title": "HSK 1 Official Mock Test 5 · Reading (阅读)",
    "durationMinutes": 17,
    "totalQuestions": 10,
    "questions": [
      {
        "id": 1,
        "part": 1,
        "type": "match",
        "prompt": "Match the word to the picture. Is it correct?",
        "imageEmoji": "✈️",
        "text": "飞机 (fēijī)",
        "options": [
          "正确 (True)",
          "错误 (False)"
        ],
        "correctAnswer": 0,
        "explanation": "'飞机' means airplane, matching the airplane emoji."
      },
      {
        "id": 2,
        "part": 1,
        "type": "match",
        "prompt": "Match the word to the picture. Is it correct?",
        "imageEmoji": "🐱",
        "text": "大狗 (dà gǒu)",
        "options": [
          "正确 (True)",
          "错误 (False)"
        ],
        "correctAnswer": 1,
        "explanation": "'大狗' means big dog, but the picture shows a cat (猫)."
      },
      {
        "id": 3,
        "part": 2,
        "type": "fill_blank",
        "prompt": "Choose the best word to fill in the blank.",
        "sentence": "桌子上有两___书。",
        "options": [
          "A. 个",
          "B. 本",
          "C. 口",
          "D. 块"
        ],
        "correctAnswer": 1,
        "explanation": "'本' (běn) is the dedicated measure word for bound books and notebooks."
      },
      {
        "id": 4,
        "part": 2,
        "type": "fill_blank",
        "prompt": "Choose the best word to fill in the blank.",
        "sentence": "我不会___中国菜，但是我很喜欢吃。",
        "options": [
          "A. 做",
          "B. 喝",
          "C. 读",
          "D. 听"
        ],
        "correctAnswer": 0,
        "explanation": "'做中国菜' means to cook/make Chinese food."
      },
      {
        "id": 5,
        "part": 3,
        "type": "dialog_match",
        "prompt": "Match the best answer to: '你认识李老师吗？'",
        "question": "你认识李老师吗？ (Do you know Teacher Li?)",
        "options": [
          "A. 认识，她是我的汉语老师。",
          "B. 我想吃米饭。",
          "C. 今天星期三。"
        ],
        "correctAnswer": 0,
        "explanation": "'认识，她是我的汉语老师' directly answers the question about knowing Teacher Li."
      },
      {
        "id": 6,
        "part": 3,
        "type": "dialog_match",
        "prompt": "Match the best answer to: '对不起！'",
        "question": "对不起！ (Sorry!)",
        "options": [
          "A. 不客气。",
          "B. 没关系。",
          "C. 再见。"
        ],
        "correctAnswer": 1,
        "explanation": "'没关系' (That's all right / it doesn't matter) is the standard response to 对不起."
      },
      {
        "id": 7,
        "part": 4,
        "type": "comprehension",
        "prompt": "Read the statement and judge: '我爸爸是医生，他在大医院工作。'",
        "question": "爸爸在医院工作。 (Father works at the hospital.)",
        "options": [
          "正确 (True)",
          "错误 (False)"
        ],
        "correctAnswer": 0,
        "explanation": "The passage confirms '他在大医院工作'."
      },
      {
        "id": 8,
        "part": 4,
        "type": "comprehension",
        "prompt": "Read the statement: '今天上午天气很冷，下午下雨了。'",
        "question": "今天下午天气很好。 (This afternoon the weather was great.)",
        "options": [
          "正确 (True)",
          "错误 (False)"
        ],
        "correctAnswer": 1,
        "explanation": "The text states '下午下雨了' (it rained in the afternoon), so the statement is False."
      },
      {
        "id": 9,
        "part": 4,
        "type": "fill_blank",
        "prompt": "Choose the correct particle: '你是哪国人___？'",
        "sentence": "你是哪国人___？",
        "options": [
          "A. 呢",
          "B. 吗",
          "C. 的",
          "D. 了"
        ],
        "correctAnswer": 0,
        "explanation": "With the question word 哪国人, use '呢' for rhetorical or conversational inquiry (or omit particle). '吗' is incorrect because it cannot be paired with interrogative pronouns."
      },
      {
        "id": 10,
        "part": 4,
        "type": "fill_blank",
        "prompt": "Choose the correct question word: '这个苹果___钱一斤？'",
        "sentence": "这个苹果___钱一斤？",
        "options": [
          "A. 多少",
          "B. 几",
          "C. 怎么",
          "D. 为什么"
        ],
        "correctAnswer": 0,
        "explanation": "'多少钱' is the standard fixed expression for 'how much money'."
      }
    ]
  },
  {
    "id": "hsk1-writing-1",
    "level": 1,
    "type": "writing",
    "testNumber": 1,
    "title": "HSK 1 Writing & Hanzi Skills Test 1",
    "durationMinutes": 15,
    "totalQuestions": 5,
    "questions": [
      {
        "id": 1,
        "type": "unscramble",
        "prompt": "Unscramble the words into the correct grammatical sentence.",
        "words": [
          "是",
          "我",
          "学生"
        ],
        "options": [
          "我是学生。",
          "学生是我。",
          "是学生我。"
        ],
        "correctAnswer": 0,
        "explanation": "Subject + 是 + Object: 我是学生 (I am a student)."
      },
      {
        "id": 2,
        "type": "unscramble",
        "prompt": "Unscramble the words into correct sentence order.",
        "words": [
          "在",
          "看书",
          "他",
          "家里"
        ],
        "options": [
          "他在家里看书。",
          "他看书在家里。",
          "在家里他看书。"
        ],
        "correctAnswer": 0,
        "explanation": "Subject + 在 + Location + Verb: 他在家里看书。"
      },
      {
        "id": 3,
        "type": "stroke_count",
        "prompt": "How many strokes does the character '好' have?",
        "character": "好",
        "options": [
          "5 画",
          "6 画",
          "7 画",
          "8 画"
        ],
        "correctAnswer": 1,
        "explanation": "'好' has 6 strokes: 女 (3 strokes: 撇点, 撇, 横) + 子 (3 strokes: 横撇, 弯钩, 横)."
      },
      {
        "id": 4,
        "type": "stroke_count",
        "prompt": "How many strokes does the character '你' have?",
        "character": "你",
        "options": [
          "6 画",
          "7 画",
          "8 画",
          "9 画"
        ],
        "correctAnswer": 1,
        "explanation": "'你' has 7 strokes: 亻 (2) + 尔 (5)."
      },
      {
        "id": 5,
        "type": "character_match",
        "prompt": "Which character corresponds to pinyin 'shuǐ' (water)?",
        "pinyin": "shuǐ",
        "options": [
          "A. 火",
          "B. 水",
          "C. 木",
          "D. 金"
        ],
        "correctAnswer": 1,
        "explanation": "'水' is shuǐ (water)."
      }
    ]
  },
  {
    "id": "hsk2-listening-1",
    "level": 2,
    "type": "listening",
    "testNumber": 1,
    "title": "HSK 2 Official Mock Test 1 · Listening (听力)",
    "durationMinutes": 25,
    "totalQuestions": 10,
    "questions": [
      {
        "id": 1,
        "part": 1,
        "type": "true_false",
        "prompt": "Listen to the statement. Does it match the picture?",
        "audioText": "他跑得非常快，获得了第一名。",
        "imageEmoji": "🏃‍♂️",
        "imageDesc": "A person running fast",
        "options": [
          "正确 (True)",
          "错误 (False)"
        ],
        "correctAnswer": 0,
        "explanation": "'他跑得非常快' (He runs very fast) matches the runner icon."
      },
      {
        "id": 2,
        "part": 1,
        "type": "true_false",
        "prompt": "Listen to the statement. Does it match the picture?",
        "audioText": "外面的雪下得很大，天很冷。",
        "imageEmoji": "☀️",
        "imageDesc": "Bright hot sun",
        "options": [
          "正确 (True)",
          "错误 (False)"
        ],
        "correctAnswer": 1,
        "explanation": "Audio says '雪下得很大' (snowing heavily), but the picture shows bright sunshine."
      },
      {
        "id": 3,
        "part": 2,
        "type": "choice",
        "prompt": "Listen and select the matching image/location.",
        "audioText": "我们已经到了机场，准备上飞机。",
        "options": [
          "A. 🛫 机场 (Airport)",
          "B. 🚂 火车站 (Railway Station)",
          "C. 🏨 宾馆 (Hotel)"
        ],
        "correctAnswer": 0,
        "explanation": "'到了机场，准备上飞机' indicates an airport setting."
      },
      {
        "id": 4,
        "part": 3,
        "type": "dialog",
        "prompt": "Listen to the dialogue and choose the correct answer.",
        "audioText": "男：你昨天晚上几点睡觉的？ 女：昨天看电影看得太晚了，十二点才睡。",
        "question": "女的昨天几点睡觉的？ (What time did the woman sleep yesterday?)",
        "options": [
          "A. 10:00",
          "B. 11:00",
          "C. 12:00"
        ],
        "correctAnswer": 2,
        "explanation": "The woman says '十二点才睡' (didn't sleep until 12 o'clock)."
      },
      {
        "id": 5,
        "part": 4,
        "type": "comprehension",
        "prompt": "Listen to the conversation.",
        "audioText": "男：今天比昨天冷多了，你多穿点儿衣服吧。 女：好的，我穿这件红色的新毛衣。",
        "question": "女的准备穿什么衣服？ (What clothes does the woman prepare to wear?)",
        "options": [
          "A. 白色的衣服",
          "B. 红色的新毛衣",
          "C. 黑色的外套"
        ],
        "correctAnswer": 1,
        "explanation": "The woman specifies '红色的新毛衣' (new red sweater)."
      },
      {
        "id": 6,
        "part": 4,
        "type": "comprehension",
        "prompt": "Listen to the conversation.",
        "audioText": "男：服务员，请问这道羊肉多少钱？ 女：六十八块钱一份。",
        "question": "羊肉多少钱一份？ (How much is the mutton?)",
        "options": [
          "A. 58 块",
          "B. 68 块",
          "C. 78 块"
        ],
        "correctAnswer": 1,
        "explanation": "The waitress says '六十八块钱一份'."
      },
      {
        "id": 7,
        "part": 4,
        "type": "comprehension",
        "prompt": "Listen to the conversation.",
        "audioText": "女：你什么时候去上海旅游？ 男：下个月十号，我和妻子一起去。",
        "question": "男的和谁一起去上海？ (Who is the man going to Shanghai with?)",
        "options": [
          "A. 同学",
          "B. 妻子",
          "C. 医生"
        ],
        "correctAnswer": 1,
        "explanation": "The man says '我和妻子一起去' (with my wife)."
      },
      {
        "id": 8,
        "part": 4,
        "type": "comprehension",
        "prompt": "Listen to the dialogue.",
        "audioText": "男：你的自行车呢？ 女：自行车坏了，我今天走着来上班的。",
        "question": "女的今天是怎么来上班的？ (How did the woman come to work today?)",
        "options": [
          "A. 骑自行车",
          "B. 坐公交车",
          "C. 走着来 (Walking)"
        ],
        "correctAnswer": 2,
        "explanation": "The woman notes '我今天走着来上班的' (walked here today)."
      },
      {
        "id": 9,
        "part": 4,
        "type": "comprehension",
        "prompt": "Listen to the dialogue.",
        "audioText": "女：你生病了，医生怎么说？ 男：医生让我多休息，每天按时吃药。",
        "question": "医生让男的做什么？ (What did the doctor tell the man to do?)",
        "options": [
          "A. 多跑步",
          "B. 多休息、按时吃药",
          "C. 去旅游"
        ],
        "correctAnswer": 1,
        "explanation": "The doctor advised him to rest more and take medicine on time."
      },
      {
        "id": 10,
        "part": 4,
        "type": "comprehension",
        "prompt": "Listen to the dialogue.",
        "audioText": "男：这本书你看完了吗？ 女：还没看完，我才看了五十页。",
        "question": "女的看了多少页？ (How many pages has she read?)",
        "options": [
          "A. 15 页",
          "B. 50 页",
          "C. 100 页"
        ],
        "correctAnswer": 1,
        "explanation": "She states '我才看了五十页' (only read 50 pages)."
      }
    ]
  },
  {
    "id": "hsk2-listening-2",
    "level": 2,
    "type": "listening",
    "testNumber": 2,
    "title": "HSK 2 Official Mock Test 2 · Listening (听力)",
    "durationMinutes": 25,
    "totalQuestions": 10,
    "questions": [
      {
        "id": 1,
        "part": 1,
        "type": "true_false",
        "prompt": "Listen to the statement. Does it match the picture?",
        "audioText": "他跑得非常快，获得了第一名。",
        "imageEmoji": "🏃‍♂️",
        "imageDesc": "A person running fast",
        "options": [
          "正确 (True)",
          "错误 (False)"
        ],
        "correctAnswer": 0,
        "explanation": "'他跑得非常快' (He runs very fast) matches the runner icon."
      },
      {
        "id": 2,
        "part": 1,
        "type": "true_false",
        "prompt": "Listen to the statement. Does it match the picture?",
        "audioText": "外面的雪下得很大，天很冷。",
        "imageEmoji": "☀️",
        "imageDesc": "Bright hot sun",
        "options": [
          "正确 (True)",
          "错误 (False)"
        ],
        "correctAnswer": 1,
        "explanation": "Audio says '雪下得很大' (snowing heavily), but the picture shows bright sunshine."
      },
      {
        "id": 3,
        "part": 2,
        "type": "choice",
        "prompt": "Listen and select the matching image/location.",
        "audioText": "我们已经到了机场，准备上飞机。",
        "options": [
          "A. 🛫 机场 (Airport)",
          "B. 🚂 火车站 (Railway Station)",
          "C. 🏨 宾馆 (Hotel)"
        ],
        "correctAnswer": 0,
        "explanation": "'到了机场，准备上飞机' indicates an airport setting."
      },
      {
        "id": 4,
        "part": 3,
        "type": "dialog",
        "prompt": "Listen to the dialogue and choose the correct answer.",
        "audioText": "男：你昨天晚上几点睡觉的？ 女：昨天看电影看得太晚了，十二点才睡。",
        "question": "女的昨天几点睡觉的？ (What time did the woman sleep yesterday?)",
        "options": [
          "A. 10:00",
          "B. 11:00",
          "C. 12:00"
        ],
        "correctAnswer": 2,
        "explanation": "The woman says '十二点才睡' (didn't sleep until 12 o'clock)."
      },
      {
        "id": 5,
        "part": 4,
        "type": "comprehension",
        "prompt": "Listen to the conversation.",
        "audioText": "男：今天比昨天冷多了，你多穿点儿衣服吧。 女：好的，我穿这件红色的新毛衣。",
        "question": "女的准备穿什么衣服？ (What clothes does the woman prepare to wear?)",
        "options": [
          "A. 白色的衣服",
          "B. 红色的新毛衣",
          "C. 黑色的外套"
        ],
        "correctAnswer": 1,
        "explanation": "The woman specifies '红色的新毛衣' (new red sweater)."
      },
      {
        "id": 6,
        "part": 4,
        "type": "comprehension",
        "prompt": "Listen to the conversation.",
        "audioText": "男：服务员，请问这道羊肉多少钱？ 女：六十八块钱一份。",
        "question": "羊肉多少钱一份？ (How much is the mutton?)",
        "options": [
          "A. 58 块",
          "B. 68 块",
          "C. 78 块"
        ],
        "correctAnswer": 1,
        "explanation": "The waitress says '六十八块钱一份'."
      },
      {
        "id": 7,
        "part": 4,
        "type": "comprehension",
        "prompt": "Listen to the conversation.",
        "audioText": "女：你什么时候去上海旅游？ 男：下个月十号，我和妻子一起去。",
        "question": "男的和谁一起去上海？ (Who is the man going to Shanghai with?)",
        "options": [
          "A. 同学",
          "B. 妻子",
          "C. 医生"
        ],
        "correctAnswer": 1,
        "explanation": "The man says '我和妻子一起去' (with my wife)."
      },
      {
        "id": 8,
        "part": 4,
        "type": "comprehension",
        "prompt": "Listen to the dialogue.",
        "audioText": "男：你的自行车呢？ 女：自行车坏了，我今天走着来上班的。",
        "question": "女的今天是怎么来上班的？ (How did the woman come to work today?)",
        "options": [
          "A. 骑自行车",
          "B. 坐公交车",
          "C. 走着来 (Walking)"
        ],
        "correctAnswer": 2,
        "explanation": "The woman notes '我今天走着来上班的' (walked here today)."
      },
      {
        "id": 9,
        "part": 4,
        "type": "comprehension",
        "prompt": "Listen to the dialogue.",
        "audioText": "女：你生病了，医生怎么说？ 男：医生让我多休息，每天按时吃药。",
        "question": "医生让男的做什么？ (What did the doctor tell the man to do?)",
        "options": [
          "A. 多跑步",
          "B. 多休息、按时吃药",
          "C. 去旅游"
        ],
        "correctAnswer": 1,
        "explanation": "The doctor advised him to rest more and take medicine on time."
      },
      {
        "id": 10,
        "part": 4,
        "type": "comprehension",
        "prompt": "Listen to the dialogue.",
        "audioText": "男：这本书你看完了吗？ 女：还没看完，我才看了五十页。",
        "question": "女的看了多少页？ (How many pages has she read?)",
        "options": [
          "A. 15 页",
          "B. 50 页",
          "C. 100 页"
        ],
        "correctAnswer": 1,
        "explanation": "She states '我才看了五十页' (only read 50 pages)."
      }
    ]
  },
  {
    "id": "hsk2-listening-3",
    "level": 2,
    "type": "listening",
    "testNumber": 3,
    "title": "HSK 2 Official Mock Test 3 · Listening (听力)",
    "durationMinutes": 25,
    "totalQuestions": 10,
    "questions": [
      {
        "id": 1,
        "part": 1,
        "type": "true_false",
        "prompt": "Listen to the statement. Does it match the picture?",
        "audioText": "他跑得非常快，获得了第一名。",
        "imageEmoji": "🏃‍♂️",
        "imageDesc": "A person running fast",
        "options": [
          "正确 (True)",
          "错误 (False)"
        ],
        "correctAnswer": 0,
        "explanation": "'他跑得非常快' (He runs very fast) matches the runner icon."
      },
      {
        "id": 2,
        "part": 1,
        "type": "true_false",
        "prompt": "Listen to the statement. Does it match the picture?",
        "audioText": "外面的雪下得很大，天很冷。",
        "imageEmoji": "☀️",
        "imageDesc": "Bright hot sun",
        "options": [
          "正确 (True)",
          "错误 (False)"
        ],
        "correctAnswer": 1,
        "explanation": "Audio says '雪下得很大' (snowing heavily), but the picture shows bright sunshine."
      },
      {
        "id": 3,
        "part": 2,
        "type": "choice",
        "prompt": "Listen and select the matching image/location.",
        "audioText": "我们已经到了机场，准备上飞机。",
        "options": [
          "A. 🛫 机场 (Airport)",
          "B. 🚂 火车站 (Railway Station)",
          "C. 🏨 宾馆 (Hotel)"
        ],
        "correctAnswer": 0,
        "explanation": "'到了机场，准备上飞机' indicates an airport setting."
      },
      {
        "id": 4,
        "part": 3,
        "type": "dialog",
        "prompt": "Listen to the dialogue and choose the correct answer.",
        "audioText": "男：你昨天晚上几点睡觉的？ 女：昨天看电影看得太晚了，十二点才睡。",
        "question": "女的昨天几点睡觉的？ (What time did the woman sleep yesterday?)",
        "options": [
          "A. 10:00",
          "B. 11:00",
          "C. 12:00"
        ],
        "correctAnswer": 2,
        "explanation": "The woman says '十二点才睡' (didn't sleep until 12 o'clock)."
      },
      {
        "id": 5,
        "part": 4,
        "type": "comprehension",
        "prompt": "Listen to the conversation.",
        "audioText": "男：今天比昨天冷多了，你多穿点儿衣服吧。 女：好的，我穿这件红色的新毛衣。",
        "question": "女的准备穿什么衣服？ (What clothes does the woman prepare to wear?)",
        "options": [
          "A. 白色的衣服",
          "B. 红色的新毛衣",
          "C. 黑色的外套"
        ],
        "correctAnswer": 1,
        "explanation": "The woman specifies '红色的新毛衣' (new red sweater)."
      },
      {
        "id": 6,
        "part": 4,
        "type": "comprehension",
        "prompt": "Listen to the conversation.",
        "audioText": "男：服务员，请问这道羊肉多少钱？ 女：六十八块钱一份。",
        "question": "羊肉多少钱一份？ (How much is the mutton?)",
        "options": [
          "A. 58 块",
          "B. 68 块",
          "C. 78 块"
        ],
        "correctAnswer": 1,
        "explanation": "The waitress says '六十八块钱一份'."
      },
      {
        "id": 7,
        "part": 4,
        "type": "comprehension",
        "prompt": "Listen to the conversation.",
        "audioText": "女：你什么时候去上海旅游？ 男：下个月十号，我和妻子一起去。",
        "question": "男的和谁一起去上海？ (Who is the man going to Shanghai with?)",
        "options": [
          "A. 同学",
          "B. 妻子",
          "C. 医生"
        ],
        "correctAnswer": 1,
        "explanation": "The man says '我和妻子一起去' (with my wife)."
      },
      {
        "id": 8,
        "part": 4,
        "type": "comprehension",
        "prompt": "Listen to the dialogue.",
        "audioText": "男：你的自行车呢？ 女：自行车坏了，我今天走着来上班的。",
        "question": "女的今天是怎么来上班的？ (How did the woman come to work today?)",
        "options": [
          "A. 骑自行车",
          "B. 坐公交车",
          "C. 走着来 (Walking)"
        ],
        "correctAnswer": 2,
        "explanation": "The woman notes '我今天走着来上班的' (walked here today)."
      },
      {
        "id": 9,
        "part": 4,
        "type": "comprehension",
        "prompt": "Listen to the dialogue.",
        "audioText": "女：你生病了，医生怎么说？ 男：医生让我多休息，每天按时吃药。",
        "question": "医生让男的做什么？ (What did the doctor tell the man to do?)",
        "options": [
          "A. 多跑步",
          "B. 多休息、按时吃药",
          "C. 去旅游"
        ],
        "correctAnswer": 1,
        "explanation": "The doctor advised him to rest more and take medicine on time."
      },
      {
        "id": 10,
        "part": 4,
        "type": "comprehension",
        "prompt": "Listen to the dialogue.",
        "audioText": "男：这本书你看完了吗？ 女：还没看完，我才看了五十页。",
        "question": "女的看了多少页？ (How many pages has she read?)",
        "options": [
          "A. 15 页",
          "B. 50 页",
          "C. 100 页"
        ],
        "correctAnswer": 1,
        "explanation": "She states '我才看了五十页' (only read 50 pages)."
      }
    ]
  },
  {
    "id": "hsk2-listening-4",
    "level": 2,
    "type": "listening",
    "testNumber": 4,
    "title": "HSK 2 Official Mock Test 4 · Listening (听力)",
    "durationMinutes": 25,
    "totalQuestions": 10,
    "questions": [
      {
        "id": 1,
        "part": 1,
        "type": "true_false",
        "prompt": "Listen to the statement. Does it match the picture?",
        "audioText": "他跑得非常快，获得了第一名。",
        "imageEmoji": "🏃‍♂️",
        "imageDesc": "A person running fast",
        "options": [
          "正确 (True)",
          "错误 (False)"
        ],
        "correctAnswer": 0,
        "explanation": "'他跑得非常快' (He runs very fast) matches the runner icon."
      },
      {
        "id": 2,
        "part": 1,
        "type": "true_false",
        "prompt": "Listen to the statement. Does it match the picture?",
        "audioText": "外面的雪下得很大，天很冷。",
        "imageEmoji": "☀️",
        "imageDesc": "Bright hot sun",
        "options": [
          "正确 (True)",
          "错误 (False)"
        ],
        "correctAnswer": 1,
        "explanation": "Audio says '雪下得很大' (snowing heavily), but the picture shows bright sunshine."
      },
      {
        "id": 3,
        "part": 2,
        "type": "choice",
        "prompt": "Listen and select the matching image/location.",
        "audioText": "我们已经到了机场，准备上飞机。",
        "options": [
          "A. 🛫 机场 (Airport)",
          "B. 🚂 火车站 (Railway Station)",
          "C. 🏨 宾馆 (Hotel)"
        ],
        "correctAnswer": 0,
        "explanation": "'到了机场，准备上飞机' indicates an airport setting."
      },
      {
        "id": 4,
        "part": 3,
        "type": "dialog",
        "prompt": "Listen to the dialogue and choose the correct answer.",
        "audioText": "男：你昨天晚上几点睡觉的？ 女：昨天看电影看得太晚了，十二点才睡。",
        "question": "女的昨天几点睡觉的？ (What time did the woman sleep yesterday?)",
        "options": [
          "A. 10:00",
          "B. 11:00",
          "C. 12:00"
        ],
        "correctAnswer": 2,
        "explanation": "The woman says '十二点才睡' (didn't sleep until 12 o'clock)."
      },
      {
        "id": 5,
        "part": 4,
        "type": "comprehension",
        "prompt": "Listen to the conversation.",
        "audioText": "男：今天比昨天冷多了，你多穿点儿衣服吧。 女：好的，我穿这件红色的新毛衣。",
        "question": "女的准备穿什么衣服？ (What clothes does the woman prepare to wear?)",
        "options": [
          "A. 白色的衣服",
          "B. 红色的新毛衣",
          "C. 黑色的外套"
        ],
        "correctAnswer": 1,
        "explanation": "The woman specifies '红色的新毛衣' (new red sweater)."
      },
      {
        "id": 6,
        "part": 4,
        "type": "comprehension",
        "prompt": "Listen to the conversation.",
        "audioText": "男：服务员，请问这道羊肉多少钱？ 女：六十八块钱一份。",
        "question": "羊肉多少钱一份？ (How much is the mutton?)",
        "options": [
          "A. 58 块",
          "B. 68 块",
          "C. 78 块"
        ],
        "correctAnswer": 1,
        "explanation": "The waitress says '六十八块钱一份'."
      },
      {
        "id": 7,
        "part": 4,
        "type": "comprehension",
        "prompt": "Listen to the conversation.",
        "audioText": "女：你什么时候去上海旅游？ 男：下个月十号，我和妻子一起去。",
        "question": "男的和谁一起去上海？ (Who is the man going to Shanghai with?)",
        "options": [
          "A. 同学",
          "B. 妻子",
          "C. 医生"
        ],
        "correctAnswer": 1,
        "explanation": "The man says '我和妻子一起去' (with my wife)."
      },
      {
        "id": 8,
        "part": 4,
        "type": "comprehension",
        "prompt": "Listen to the dialogue.",
        "audioText": "男：你的自行车呢？ 女：自行车坏了，我今天走着来上班的。",
        "question": "女的今天是怎么来上班的？ (How did the woman come to work today?)",
        "options": [
          "A. 骑自行车",
          "B. 坐公交车",
          "C. 走着来 (Walking)"
        ],
        "correctAnswer": 2,
        "explanation": "The woman notes '我今天走着来上班的' (walked here today)."
      },
      {
        "id": 9,
        "part": 4,
        "type": "comprehension",
        "prompt": "Listen to the dialogue.",
        "audioText": "女：你生病了，医生怎么说？ 男：医生让我多休息，每天按时吃药。",
        "question": "医生让男的做什么？ (What did the doctor tell the man to do?)",
        "options": [
          "A. 多跑步",
          "B. 多休息、按时吃药",
          "C. 去旅游"
        ],
        "correctAnswer": 1,
        "explanation": "The doctor advised him to rest more and take medicine on time."
      },
      {
        "id": 10,
        "part": 4,
        "type": "comprehension",
        "prompt": "Listen to the dialogue.",
        "audioText": "男：这本书你看完了吗？ 女：还没看完，我才看了五十页。",
        "question": "女的看了多少页？ (How many pages has she read?)",
        "options": [
          "A. 15 页",
          "B. 50 页",
          "C. 100 页"
        ],
        "correctAnswer": 1,
        "explanation": "She states '我才看了五十页' (only read 50 pages)."
      }
    ]
  },
  {
    "id": "hsk2-listening-5",
    "level": 2,
    "type": "listening",
    "testNumber": 5,
    "title": "HSK 2 Official Mock Test 5 · Listening (听力)",
    "durationMinutes": 25,
    "totalQuestions": 10,
    "questions": [
      {
        "id": 1,
        "part": 1,
        "type": "true_false",
        "prompt": "Listen to the statement. Does it match the picture?",
        "audioText": "他跑得非常快，获得了第一名。",
        "imageEmoji": "🏃‍♂️",
        "imageDesc": "A person running fast",
        "options": [
          "正确 (True)",
          "错误 (False)"
        ],
        "correctAnswer": 0,
        "explanation": "'他跑得非常快' (He runs very fast) matches the runner icon."
      },
      {
        "id": 2,
        "part": 1,
        "type": "true_false",
        "prompt": "Listen to the statement. Does it match the picture?",
        "audioText": "外面的雪下得很大，天很冷。",
        "imageEmoji": "☀️",
        "imageDesc": "Bright hot sun",
        "options": [
          "正确 (True)",
          "错误 (False)"
        ],
        "correctAnswer": 1,
        "explanation": "Audio says '雪下得很大' (snowing heavily), but the picture shows bright sunshine."
      },
      {
        "id": 3,
        "part": 2,
        "type": "choice",
        "prompt": "Listen and select the matching image/location.",
        "audioText": "我们已经到了机场，准备上飞机。",
        "options": [
          "A. 🛫 机场 (Airport)",
          "B. 🚂 火车站 (Railway Station)",
          "C. 🏨 宾馆 (Hotel)"
        ],
        "correctAnswer": 0,
        "explanation": "'到了机场，准备上飞机' indicates an airport setting."
      },
      {
        "id": 4,
        "part": 3,
        "type": "dialog",
        "prompt": "Listen to the dialogue and choose the correct answer.",
        "audioText": "男：你昨天晚上几点睡觉的？ 女：昨天看电影看得太晚了，十二点才睡。",
        "question": "女的昨天几点睡觉的？ (What time did the woman sleep yesterday?)",
        "options": [
          "A. 10:00",
          "B. 11:00",
          "C. 12:00"
        ],
        "correctAnswer": 2,
        "explanation": "The woman says '十二点才睡' (didn't sleep until 12 o'clock)."
      },
      {
        "id": 5,
        "part": 4,
        "type": "comprehension",
        "prompt": "Listen to the conversation.",
        "audioText": "男：今天比昨天冷多了，你多穿点儿衣服吧。 女：好的，我穿这件红色的新毛衣。",
        "question": "女的准备穿什么衣服？ (What clothes does the woman prepare to wear?)",
        "options": [
          "A. 白色的衣服",
          "B. 红色的新毛衣",
          "C. 黑色的外套"
        ],
        "correctAnswer": 1,
        "explanation": "The woman specifies '红色的新毛衣' (new red sweater)."
      },
      {
        "id": 6,
        "part": 4,
        "type": "comprehension",
        "prompt": "Listen to the conversation.",
        "audioText": "男：服务员，请问这道羊肉多少钱？ 女：六十八块钱一份。",
        "question": "羊肉多少钱一份？ (How much is the mutton?)",
        "options": [
          "A. 58 块",
          "B. 68 块",
          "C. 78 块"
        ],
        "correctAnswer": 1,
        "explanation": "The waitress says '六十八块钱一份'."
      },
      {
        "id": 7,
        "part": 4,
        "type": "comprehension",
        "prompt": "Listen to the conversation.",
        "audioText": "女：你什么时候去上海旅游？ 男：下个月十号，我和妻子一起去。",
        "question": "男的和谁一起去上海？ (Who is the man going to Shanghai with?)",
        "options": [
          "A. 同学",
          "B. 妻子",
          "C. 医生"
        ],
        "correctAnswer": 1,
        "explanation": "The man says '我和妻子一起去' (with my wife)."
      },
      {
        "id": 8,
        "part": 4,
        "type": "comprehension",
        "prompt": "Listen to the dialogue.",
        "audioText": "男：你的自行车呢？ 女：自行车坏了，我今天走着来上班的。",
        "question": "女的今天是怎么来上班的？ (How did the woman come to work today?)",
        "options": [
          "A. 骑自行车",
          "B. 坐公交车",
          "C. 走着来 (Walking)"
        ],
        "correctAnswer": 2,
        "explanation": "The woman notes '我今天走着来上班的' (walked here today)."
      },
      {
        "id": 9,
        "part": 4,
        "type": "comprehension",
        "prompt": "Listen to the dialogue.",
        "audioText": "女：你生病了，医生怎么说？ 男：医生让我多休息，每天按时吃药。",
        "question": "医生让男的做什么？ (What did the doctor tell the man to do?)",
        "options": [
          "A. 多跑步",
          "B. 多休息、按时吃药",
          "C. 去旅游"
        ],
        "correctAnswer": 1,
        "explanation": "The doctor advised him to rest more and take medicine on time."
      },
      {
        "id": 10,
        "part": 4,
        "type": "comprehension",
        "prompt": "Listen to the dialogue.",
        "audioText": "男：这本书你看完了吗？ 女：还没看完，我才看了五十页。",
        "question": "女的看了多少页？ (How many pages has she read?)",
        "options": [
          "A. 15 页",
          "B. 50 页",
          "C. 100 页"
        ],
        "correctAnswer": 1,
        "explanation": "She states '我才看了五十页' (only read 50 pages)."
      }
    ]
  },
  {
    "id": "hsk2-reading-1",
    "level": 2,
    "type": "reading",
    "testNumber": 1,
    "title": "HSK 2 Official Mock Test 1 · Reading (阅读)",
    "durationMinutes": 22,
    "totalQuestions": 10,
    "questions": [
      {
        "id": 1,
        "part": 1,
        "type": "fill_blank",
        "prompt": "Choose the best word to complete the comparative sentence.",
        "sentence": "今天的天气___昨天好多了，阳光很明媚。",
        "options": [
          "A. 比",
          "B. 往",
          "C. 离",
          "D. 从"
        ],
        "correctAnswer": 0,
        "explanation": "Comparative pattern: A + 比 + B + Adjective."
      },
      {
        "id": 2,
        "part": 1,
        "type": "fill_blank",
        "prompt": "Choose the appropriate conjunction pair.",
        "sentence": "___今天下大雨，___大家还是按时到了教室。",
        "options": [
          "A. 虽然……但是……",
          "B. 因为……所以……",
          "C. 不但……而且……",
          "D. 要么……要么……"
        ],
        "correctAnswer": 0,
        "explanation": "'虽然...但是...' expresses concession: Although it rained heavily, everyone arrived on time."
      },
      {
        "id": 3,
        "part": 2,
        "type": "fill_blank",
        "prompt": "Select the correct aspect particle.",
        "sentence": "你去___北京吗？那里的烤鸭特别好吃。",
        "options": [
          "A. 了",
          "B. 过",
          "C. 着",
          "D. 得"
        ],
        "correctAnswer": 1,
        "explanation": "'去过' signifies past experiential aspect (have you ever been to Beijing?)."
      },
      {
        "id": 4,
        "part": 2,
        "type": "fill_blank",
        "prompt": "Fill in the blank with the appropriate preposition.",
        "sentence": "我们家___学校很近，走路只要五分钟。",
        "options": [
          "A. 离",
          "B. 往",
          "C. 比",
          "D. 给"
        ],
        "correctAnswer": 0,
        "explanation": "'离' measures distance between two locations: A 离 B 很近."
      },
      {
        "id": 5,
        "part": 3,
        "type": "dialog_match",
        "prompt": "Match the appropriate response: '这项工作做完了吗？'",
        "question": "这项工作做完了吗？ (Is this job completed?)",
        "options": [
          "A. 已经做完了，请您检查一下。",
          "B. 我比他高。",
          "C. 往右拐就是机场。"
        ],
        "correctAnswer": 0,
        "explanation": "'已经做完了' (Already completed) directly answers the completion inquiry."
      },
      {
        "id": 6,
        "part": 3,
        "type": "comprehension",
        "prompt": "Read the sentence and judge: '虽然这份工作很累，但是他觉得能学到很多东西。'",
        "question": "他不喜欢这份工作。 (He does not like this job.)",
        "options": [
          "正确 (True)",
          "错误 (False)"
        ],
        "correctAnswer": 1,
        "explanation": "He feels he can learn a lot from it ('能学到很多东西'), so stating he dislikes it is False."
      },
      {
        "id": 7,
        "part": 4,
        "type": "comprehension",
        "prompt": "Read the passage: '王先生每天早上六点起床跑步，身体非常好，很少生病。'",
        "question": "王先生经常生病。 (Mr. Wang often gets sick.)",
        "options": [
          "正确 (True)",
          "错误 (False)"
        ],
        "correctAnswer": 1,
        "explanation": "The text says '很少生病' (rarely gets sick), making the question statement False."
      },
      {
        "id": 8,
        "part": 4,
        "type": "fill_blank",
        "prompt": "Choose the correct degree complement particle.",
        "sentence": "她唱歌唱___真好听！",
        "options": [
          "A. 的",
          "B. 得",
          "C. 地",
          "D. 了"
        ],
        "correctAnswer": 1,
        "explanation": "'得' (de) is the structural particle following a verb to introduce a degree complement."
      },
      {
        "id": 9,
        "part": 4,
        "type": "fill_blank",
        "prompt": "Choose the correct word for imminent action.",
        "sentence": "快点儿吧，电影___开始了！",
        "options": [
          "A. 快要",
          "B. 已经",
          "C. 正在",
          "D. 经常"
        ],
        "correctAnswer": 0,
        "explanation": "'快要...了' indicates that the movie is about to start."
      },
      {
        "id": 10,
        "part": 4,
        "type": "fill_blank",
        "prompt": "Choose the correct negative imperative.",
        "sentence": "上课的时候___说话。",
        "options": [
          "A. 没",
          "B. 别",
          "C. 不",
          "D. 无"
        ],
        "correctAnswer": 1,
        "explanation": "'别' (bié) is used for imperative commands: '别说话' (Don't speak)."
      }
    ]
  },
  {
    "id": "hsk2-reading-2",
    "level": 2,
    "type": "reading",
    "testNumber": 2,
    "title": "HSK 2 Official Mock Test 2 · Reading (阅读)",
    "durationMinutes": 22,
    "totalQuestions": 10,
    "questions": [
      {
        "id": 1,
        "part": 1,
        "type": "fill_blank",
        "prompt": "Choose the best word to complete the comparative sentence.",
        "sentence": "今天的天气___昨天好多了，阳光很明媚。",
        "options": [
          "A. 比",
          "B. 往",
          "C. 离",
          "D. 从"
        ],
        "correctAnswer": 0,
        "explanation": "Comparative pattern: A + 比 + B + Adjective."
      },
      {
        "id": 2,
        "part": 1,
        "type": "fill_blank",
        "prompt": "Choose the appropriate conjunction pair.",
        "sentence": "___今天下大雨，___大家还是按时到了教室。",
        "options": [
          "A. 虽然……但是……",
          "B. 因为……所以……",
          "C. 不但……而且……",
          "D. 要么……要么……"
        ],
        "correctAnswer": 0,
        "explanation": "'虽然...但是...' expresses concession: Although it rained heavily, everyone arrived on time."
      },
      {
        "id": 3,
        "part": 2,
        "type": "fill_blank",
        "prompt": "Select the correct aspect particle.",
        "sentence": "你去___北京吗？那里的烤鸭特别好吃。",
        "options": [
          "A. 了",
          "B. 过",
          "C. 着",
          "D. 得"
        ],
        "correctAnswer": 1,
        "explanation": "'去过' signifies past experiential aspect (have you ever been to Beijing?)."
      },
      {
        "id": 4,
        "part": 2,
        "type": "fill_blank",
        "prompt": "Fill in the blank with the appropriate preposition.",
        "sentence": "我们家___学校很近，走路只要五分钟。",
        "options": [
          "A. 离",
          "B. 往",
          "C. 比",
          "D. 给"
        ],
        "correctAnswer": 0,
        "explanation": "'离' measures distance between two locations: A 离 B 很近."
      },
      {
        "id": 5,
        "part": 3,
        "type": "dialog_match",
        "prompt": "Match the appropriate response: '这项工作做完了吗？'",
        "question": "这项工作做完了吗？ (Is this job completed?)",
        "options": [
          "A. 已经做完了，请您检查一下。",
          "B. 我比他高。",
          "C. 往右拐就是机场。"
        ],
        "correctAnswer": 0,
        "explanation": "'已经做完了' (Already completed) directly answers the completion inquiry."
      },
      {
        "id": 6,
        "part": 3,
        "type": "comprehension",
        "prompt": "Read the sentence and judge: '虽然这份工作很累，但是他觉得能学到很多东西。'",
        "question": "他不喜欢这份工作。 (He does not like this job.)",
        "options": [
          "正确 (True)",
          "错误 (False)"
        ],
        "correctAnswer": 1,
        "explanation": "He feels he can learn a lot from it ('能学到很多东西'), so stating he dislikes it is False."
      },
      {
        "id": 7,
        "part": 4,
        "type": "comprehension",
        "prompt": "Read the passage: '王先生每天早上六点起床跑步，身体非常好，很少生病。'",
        "question": "王先生经常生病。 (Mr. Wang often gets sick.)",
        "options": [
          "正确 (True)",
          "错误 (False)"
        ],
        "correctAnswer": 1,
        "explanation": "The text says '很少生病' (rarely gets sick), making the question statement False."
      },
      {
        "id": 8,
        "part": 4,
        "type": "fill_blank",
        "prompt": "Choose the correct degree complement particle.",
        "sentence": "她唱歌唱___真好听！",
        "options": [
          "A. 的",
          "B. 得",
          "C. 地",
          "D. 了"
        ],
        "correctAnswer": 1,
        "explanation": "'得' (de) is the structural particle following a verb to introduce a degree complement."
      },
      {
        "id": 9,
        "part": 4,
        "type": "fill_blank",
        "prompt": "Choose the correct word for imminent action.",
        "sentence": "快点儿吧，电影___开始了！",
        "options": [
          "A. 快要",
          "B. 已经",
          "C. 正在",
          "D. 经常"
        ],
        "correctAnswer": 0,
        "explanation": "'快要...了' indicates that the movie is about to start."
      },
      {
        "id": 10,
        "part": 4,
        "type": "fill_blank",
        "prompt": "Choose the correct negative imperative.",
        "sentence": "上课的时候___说话。",
        "options": [
          "A. 没",
          "B. 别",
          "C. 不",
          "D. 无"
        ],
        "correctAnswer": 1,
        "explanation": "'别' (bié) is used for imperative commands: '别说话' (Don't speak)."
      }
    ]
  },
  {
    "id": "hsk2-reading-3",
    "level": 2,
    "type": "reading",
    "testNumber": 3,
    "title": "HSK 2 Official Mock Test 3 · Reading (阅读)",
    "durationMinutes": 22,
    "totalQuestions": 10,
    "questions": [
      {
        "id": 1,
        "part": 1,
        "type": "fill_blank",
        "prompt": "Choose the best word to complete the comparative sentence.",
        "sentence": "今天的天气___昨天好多了，阳光很明媚。",
        "options": [
          "A. 比",
          "B. 往",
          "C. 离",
          "D. 从"
        ],
        "correctAnswer": 0,
        "explanation": "Comparative pattern: A + 比 + B + Adjective."
      },
      {
        "id": 2,
        "part": 1,
        "type": "fill_blank",
        "prompt": "Choose the appropriate conjunction pair.",
        "sentence": "___今天下大雨，___大家还是按时到了教室。",
        "options": [
          "A. 虽然……但是……",
          "B. 因为……所以……",
          "C. 不但……而且……",
          "D. 要么……要么……"
        ],
        "correctAnswer": 0,
        "explanation": "'虽然...但是...' expresses concession: Although it rained heavily, everyone arrived on time."
      },
      {
        "id": 3,
        "part": 2,
        "type": "fill_blank",
        "prompt": "Select the correct aspect particle.",
        "sentence": "你去___北京吗？那里的烤鸭特别好吃。",
        "options": [
          "A. 了",
          "B. 过",
          "C. 着",
          "D. 得"
        ],
        "correctAnswer": 1,
        "explanation": "'去过' signifies past experiential aspect (have you ever been to Beijing?)."
      },
      {
        "id": 4,
        "part": 2,
        "type": "fill_blank",
        "prompt": "Fill in the blank with the appropriate preposition.",
        "sentence": "我们家___学校很近，走路只要五分钟。",
        "options": [
          "A. 离",
          "B. 往",
          "C. 比",
          "D. 给"
        ],
        "correctAnswer": 0,
        "explanation": "'离' measures distance between two locations: A 离 B 很近."
      },
      {
        "id": 5,
        "part": 3,
        "type": "dialog_match",
        "prompt": "Match the appropriate response: '这项工作做完了吗？'",
        "question": "这项工作做完了吗？ (Is this job completed?)",
        "options": [
          "A. 已经做完了，请您检查一下。",
          "B. 我比他高。",
          "C. 往右拐就是机场。"
        ],
        "correctAnswer": 0,
        "explanation": "'已经做完了' (Already completed) directly answers the completion inquiry."
      },
      {
        "id": 6,
        "part": 3,
        "type": "comprehension",
        "prompt": "Read the sentence and judge: '虽然这份工作很累，但是他觉得能学到很多东西。'",
        "question": "他不喜欢这份工作。 (He does not like this job.)",
        "options": [
          "正确 (True)",
          "错误 (False)"
        ],
        "correctAnswer": 1,
        "explanation": "He feels he can learn a lot from it ('能学到很多东西'), so stating he dislikes it is False."
      },
      {
        "id": 7,
        "part": 4,
        "type": "comprehension",
        "prompt": "Read the passage: '王先生每天早上六点起床跑步，身体非常好，很少生病。'",
        "question": "王先生经常生病。 (Mr. Wang often gets sick.)",
        "options": [
          "正确 (True)",
          "错误 (False)"
        ],
        "correctAnswer": 1,
        "explanation": "The text says '很少生病' (rarely gets sick), making the question statement False."
      },
      {
        "id": 8,
        "part": 4,
        "type": "fill_blank",
        "prompt": "Choose the correct degree complement particle.",
        "sentence": "她唱歌唱___真好听！",
        "options": [
          "A. 的",
          "B. 得",
          "C. 地",
          "D. 了"
        ],
        "correctAnswer": 1,
        "explanation": "'得' (de) is the structural particle following a verb to introduce a degree complement."
      },
      {
        "id": 9,
        "part": 4,
        "type": "fill_blank",
        "prompt": "Choose the correct word for imminent action.",
        "sentence": "快点儿吧，电影___开始了！",
        "options": [
          "A. 快要",
          "B. 已经",
          "C. 正在",
          "D. 经常"
        ],
        "correctAnswer": 0,
        "explanation": "'快要...了' indicates that the movie is about to start."
      },
      {
        "id": 10,
        "part": 4,
        "type": "fill_blank",
        "prompt": "Choose the correct negative imperative.",
        "sentence": "上课的时候___说话。",
        "options": [
          "A. 没",
          "B. 别",
          "C. 不",
          "D. 无"
        ],
        "correctAnswer": 1,
        "explanation": "'别' (bié) is used for imperative commands: '别说话' (Don't speak)."
      }
    ]
  },
  {
    "id": "hsk2-reading-4",
    "level": 2,
    "type": "reading",
    "testNumber": 4,
    "title": "HSK 2 Official Mock Test 4 · Reading (阅读)",
    "durationMinutes": 22,
    "totalQuestions": 10,
    "questions": [
      {
        "id": 1,
        "part": 1,
        "type": "fill_blank",
        "prompt": "Choose the best word to complete the comparative sentence.",
        "sentence": "今天的天气___昨天好多了，阳光很明媚。",
        "options": [
          "A. 比",
          "B. 往",
          "C. 离",
          "D. 从"
        ],
        "correctAnswer": 0,
        "explanation": "Comparative pattern: A + 比 + B + Adjective."
      },
      {
        "id": 2,
        "part": 1,
        "type": "fill_blank",
        "prompt": "Choose the appropriate conjunction pair.",
        "sentence": "___今天下大雨，___大家还是按时到了教室。",
        "options": [
          "A. 虽然……但是……",
          "B. 因为……所以……",
          "C. 不但……而且……",
          "D. 要么……要么……"
        ],
        "correctAnswer": 0,
        "explanation": "'虽然...但是...' expresses concession: Although it rained heavily, everyone arrived on time."
      },
      {
        "id": 3,
        "part": 2,
        "type": "fill_blank",
        "prompt": "Select the correct aspect particle.",
        "sentence": "你去___北京吗？那里的烤鸭特别好吃。",
        "options": [
          "A. 了",
          "B. 过",
          "C. 着",
          "D. 得"
        ],
        "correctAnswer": 1,
        "explanation": "'去过' signifies past experiential aspect (have you ever been to Beijing?)."
      },
      {
        "id": 4,
        "part": 2,
        "type": "fill_blank",
        "prompt": "Fill in the blank with the appropriate preposition.",
        "sentence": "我们家___学校很近，走路只要五分钟。",
        "options": [
          "A. 离",
          "B. 往",
          "C. 比",
          "D. 给"
        ],
        "correctAnswer": 0,
        "explanation": "'离' measures distance between two locations: A 离 B 很近."
      },
      {
        "id": 5,
        "part": 3,
        "type": "dialog_match",
        "prompt": "Match the appropriate response: '这项工作做完了吗？'",
        "question": "这项工作做完了吗？ (Is this job completed?)",
        "options": [
          "A. 已经做完了，请您检查一下。",
          "B. 我比他高。",
          "C. 往右拐就是机场。"
        ],
        "correctAnswer": 0,
        "explanation": "'已经做完了' (Already completed) directly answers the completion inquiry."
      },
      {
        "id": 6,
        "part": 3,
        "type": "comprehension",
        "prompt": "Read the sentence and judge: '虽然这份工作很累，但是他觉得能学到很多东西。'",
        "question": "他不喜欢这份工作。 (He does not like this job.)",
        "options": [
          "正确 (True)",
          "错误 (False)"
        ],
        "correctAnswer": 1,
        "explanation": "He feels he can learn a lot from it ('能学到很多东西'), so stating he dislikes it is False."
      },
      {
        "id": 7,
        "part": 4,
        "type": "comprehension",
        "prompt": "Read the passage: '王先生每天早上六点起床跑步，身体非常好，很少生病。'",
        "question": "王先生经常生病。 (Mr. Wang often gets sick.)",
        "options": [
          "正确 (True)",
          "错误 (False)"
        ],
        "correctAnswer": 1,
        "explanation": "The text says '很少生病' (rarely gets sick), making the question statement False."
      },
      {
        "id": 8,
        "part": 4,
        "type": "fill_blank",
        "prompt": "Choose the correct degree complement particle.",
        "sentence": "她唱歌唱___真好听！",
        "options": [
          "A. 的",
          "B. 得",
          "C. 地",
          "D. 了"
        ],
        "correctAnswer": 1,
        "explanation": "'得' (de) is the structural particle following a verb to introduce a degree complement."
      },
      {
        "id": 9,
        "part": 4,
        "type": "fill_blank",
        "prompt": "Choose the correct word for imminent action.",
        "sentence": "快点儿吧，电影___开始了！",
        "options": [
          "A. 快要",
          "B. 已经",
          "C. 正在",
          "D. 经常"
        ],
        "correctAnswer": 0,
        "explanation": "'快要...了' indicates that the movie is about to start."
      },
      {
        "id": 10,
        "part": 4,
        "type": "fill_blank",
        "prompt": "Choose the correct negative imperative.",
        "sentence": "上课的时候___说话。",
        "options": [
          "A. 没",
          "B. 别",
          "C. 不",
          "D. 无"
        ],
        "correctAnswer": 1,
        "explanation": "'别' (bié) is used for imperative commands: '别说话' (Don't speak)."
      }
    ]
  },
  {
    "id": "hsk2-reading-5",
    "level": 2,
    "type": "reading",
    "testNumber": 5,
    "title": "HSK 2 Official Mock Test 5 · Reading (阅读)",
    "durationMinutes": 22,
    "totalQuestions": 10,
    "questions": [
      {
        "id": 1,
        "part": 1,
        "type": "fill_blank",
        "prompt": "Choose the best word to complete the comparative sentence.",
        "sentence": "今天的天气___昨天好多了，阳光很明媚。",
        "options": [
          "A. 比",
          "B. 往",
          "C. 离",
          "D. 从"
        ],
        "correctAnswer": 0,
        "explanation": "Comparative pattern: A + 比 + B + Adjective."
      },
      {
        "id": 2,
        "part": 1,
        "type": "fill_blank",
        "prompt": "Choose the appropriate conjunction pair.",
        "sentence": "___今天下大雨，___大家还是按时到了教室。",
        "options": [
          "A. 虽然……但是……",
          "B. 因为……所以……",
          "C. 不但……而且……",
          "D. 要么……要么……"
        ],
        "correctAnswer": 0,
        "explanation": "'虽然...但是...' expresses concession: Although it rained heavily, everyone arrived on time."
      },
      {
        "id": 3,
        "part": 2,
        "type": "fill_blank",
        "prompt": "Select the correct aspect particle.",
        "sentence": "你去___北京吗？那里的烤鸭特别好吃。",
        "options": [
          "A. 了",
          "B. 过",
          "C. 着",
          "D. 得"
        ],
        "correctAnswer": 1,
        "explanation": "'去过' signifies past experiential aspect (have you ever been to Beijing?)."
      },
      {
        "id": 4,
        "part": 2,
        "type": "fill_blank",
        "prompt": "Fill in the blank with the appropriate preposition.",
        "sentence": "我们家___学校很近，走路只要五分钟。",
        "options": [
          "A. 离",
          "B. 往",
          "C. 比",
          "D. 给"
        ],
        "correctAnswer": 0,
        "explanation": "'离' measures distance between two locations: A 离 B 很近."
      },
      {
        "id": 5,
        "part": 3,
        "type": "dialog_match",
        "prompt": "Match the appropriate response: '这项工作做完了吗？'",
        "question": "这项工作做完了吗？ (Is this job completed?)",
        "options": [
          "A. 已经做完了，请您检查一下。",
          "B. 我比他高。",
          "C. 往右拐就是机场。"
        ],
        "correctAnswer": 0,
        "explanation": "'已经做完了' (Already completed) directly answers the completion inquiry."
      },
      {
        "id": 6,
        "part": 3,
        "type": "comprehension",
        "prompt": "Read the sentence and judge: '虽然这份工作很累，但是他觉得能学到很多东西。'",
        "question": "他不喜欢这份工作。 (He does not like this job.)",
        "options": [
          "正确 (True)",
          "错误 (False)"
        ],
        "correctAnswer": 1,
        "explanation": "He feels he can learn a lot from it ('能学到很多东西'), so stating he dislikes it is False."
      },
      {
        "id": 7,
        "part": 4,
        "type": "comprehension",
        "prompt": "Read the passage: '王先生每天早上六点起床跑步，身体非常好，很少生病。'",
        "question": "王先生经常生病。 (Mr. Wang often gets sick.)",
        "options": [
          "正确 (True)",
          "错误 (False)"
        ],
        "correctAnswer": 1,
        "explanation": "The text says '很少生病' (rarely gets sick), making the question statement False."
      },
      {
        "id": 8,
        "part": 4,
        "type": "fill_blank",
        "prompt": "Choose the correct degree complement particle.",
        "sentence": "她唱歌唱___真好听！",
        "options": [
          "A. 的",
          "B. 得",
          "C. 地",
          "D. 了"
        ],
        "correctAnswer": 1,
        "explanation": "'得' (de) is the structural particle following a verb to introduce a degree complement."
      },
      {
        "id": 9,
        "part": 4,
        "type": "fill_blank",
        "prompt": "Choose the correct word for imminent action.",
        "sentence": "快点儿吧，电影___开始了！",
        "options": [
          "A. 快要",
          "B. 已经",
          "C. 正在",
          "D. 经常"
        ],
        "correctAnswer": 0,
        "explanation": "'快要...了' indicates that the movie is about to start."
      },
      {
        "id": 10,
        "part": 4,
        "type": "fill_blank",
        "prompt": "Choose the correct negative imperative.",
        "sentence": "上课的时候___说话。",
        "options": [
          "A. 没",
          "B. 别",
          "C. 不",
          "D. 无"
        ],
        "correctAnswer": 1,
        "explanation": "'别' (bié) is used for imperative commands: '别说话' (Don't speak)."
      }
    ]
  },
  {
    "id": "hsk2-writing-1",
    "level": 2,
    "type": "writing",
    "testNumber": 1,
    "title": "HSK 2 Writing & Grammar Unscramble Test 1",
    "durationMinutes": 20,
    "totalQuestions": 5,
    "questions": [
      {
        "id": 1,
        "type": "unscramble",
        "prompt": "Unscramble into a correct comparative sentence.",
        "words": [
          "冷",
          "今天",
          "昨天",
          "比"
        ],
        "options": [
          "今天比昨天冷。",
          "昨天比今天冷。",
          "今天冷比昨天。"
        ],
        "correctAnswer": 0,
        "explanation": "A + 比 + B + Adjective: 今天比昨天冷 (Today is colder than yesterday)."
      },
      {
        "id": 2,
        "type": "unscramble",
        "prompt": "Unscramble into a correct degree complement sentence.",
        "words": [
          "跑",
          "他",
          "很快",
          "得"
        ],
        "options": [
          "他跑得很快。",
          "他很快得跑。",
          "他得跑很快。"
        ],
        "correctAnswer": 0,
        "explanation": "Subject + Verb + 得 + Degree: 他跑得很快。"
      },
      {
        "id": 3,
        "type": "unscramble",
        "prompt": "Unscramble into a correct ongoing state sentence.",
        "words": [
          "开着",
          "门",
          "呢"
        ],
        "options": [
          "门开着呢。",
          "开着门呢。",
          "呢门开着。"
        ],
        "correctAnswer": 0,
        "explanation": "Noun + Verb + 着 + 呢: 门开着呢 (The door is open)."
      },
      {
        "id": 4,
        "type": "character_stroke",
        "prompt": "How many strokes does the character '真' (zhēn) have?",
        "character": "真",
        "options": [
          "8 画",
          "9 画",
          "10 画",
          "11 画"
        ],
        "correctAnswer": 2,
        "explanation": "'真' has exactly 10 strokes: 横, 竖, 横折, 横, 横, 横, 竖, 提, 撇, 点."
      },
      {
        "id": 5,
        "type": "character_stroke",
        "prompt": "How many strokes does the character '高' (gāo) have?",
        "character": "高",
        "options": [
          "9 画",
          "10 画",
          "11 画",
          "12 画"
        ],
        "correctAnswer": 1,
        "explanation": "'高' has 10 strokes: 点, 横, 竖, 横折, 横, 竖, 横折钩, 竖, 横折, 横."
      }
    ]
  },
  {
    "id": "hsk3-listening-1",
    "level": 3,
    "type": "listening",
    "testNumber": 1,
    "title": "HSK 3 Official Mock Test 1 · Listening (听力)",
    "durationMinutes": 35,
    "totalQuestions": 10,
    "questions": [
      {
        "id": 1,
        "part": 1,
        "type": "true_false",
        "prompt": "Listen to the statement. Does it match the picture?",
        "audioText": "别忘了把空调关了，我们要节约用电。",
        "imageEmoji": "❄️",
        "imageDesc": "Air conditioner cooling",
        "options": [
          "正确 (True)",
          "错误 (False)"
        ],
        "correctAnswer": 0,
        "explanation": "Audio says '别忘了把空调关了' (Don't forget to turn off the air conditioner), matching the AC cooling icon."
      },
      {
        "id": 2,
        "part": 1,
        "type": "true_false",
        "prompt": "Listen to the audio. Does it match the statement?",
        "audioText": "他正在图书馆借书呢，准备写期末论文。",
        "imageEmoji": "🏊‍♂️",
        "imageDesc": "Swimmer in a pool",
        "options": [
          "正确 (True)",
          "错误 (False)"
        ],
        "correctAnswer": 1,
        "explanation": "Audio describes studying and borrowing books in the library ('在图书馆借书'), but the picture shows swimming."
      },
      {
        "id": 3,
        "part": 2,
        "type": "choice",
        "prompt": "Listen to the dialogue and select the matching location.",
        "audioText": "男：请问您办理存款还是兑换外币？ 女：我想把这些美元换成人民币。",
        "options": [
          "A. 🏦 银行 (Bank)",
          "B. 🏬 商场 (Department Store)",
          "C. ✈️ 机场 (Airport)"
        ],
        "correctAnswer": 0,
        "explanation": "'兑换外币' and '美元换成人民币' clearly takes place at a bank."
      },
      {
        "id": 4,
        "part": 3,
        "type": "dialog",
        "prompt": "Listen to the conversation and answer the question.",
        "audioText": "男：你最近怎么看起来这么累？ 女：最近公司的事情特别多，我每天都加班到晚上九点多。",
        "question": "女的为什么看起来很累？ (Why does the woman look tired?)",
        "options": [
          "A. 生病发烧了",
          "B. 每天加班到很晚",
          "C. 找不到眼镜"
        ],
        "correctAnswer": 1,
        "explanation": "The woman explains '最近公司的事情特别多，我每天都加班到晚上九点多' (works overtime late every day)."
      },
      {
        "id": 5,
        "part": 4,
        "type": "comprehension",
        "prompt": "Listen to the dialogue and select the correct answer.",
        "audioText": "男：这套房子的租金多少钱一个月？ 女：每月三千块，离地铁站只有两百米，非常方便。",
        "question": "这套房子的房租是多少？ (How much is the rent?)",
        "options": [
          "A. 2,000 元",
          "B. 3,000 元",
          "C. 3,200 元"
        ],
        "correctAnswer": 1,
        "explanation": "The woman clearly states '每月三千块' (3,000 yuan per month)."
      },
      {
        "id": 6,
        "part": 4,
        "type": "comprehension",
        "prompt": "Listen to the dialogue.",
        "audioText": "女：你把那本汉语词典放在哪儿了？ 男：我放在书架第二层了，你没看出来吗？",
        "question": "词典在什么地方？ (Where is the dictionary?)",
        "options": [
          "A. 桌子下面",
          "B. 书架第二层",
          "C. 行李箱里"
        ],
        "correctAnswer": 1,
        "explanation": "The man says '放在书架第二层了' (on the 2nd shelf of the bookcase)."
      },
      {
        "id": 7,
        "part": 4,
        "type": "comprehension",
        "prompt": "Listen to the conversation.",
        "audioText": "男：周末我们一起去爬山怎么样？ 女：好啊，只要不下雨，我们就去！",
        "question": "女的什么情况下会去爬山？ (Under what condition will she go mountain climbing?)",
        "options": [
          "A. 只要不下雨",
          "B. 只要写完作业",
          "C. 只要身体不累"
        ],
        "correctAnswer": 0,
        "explanation": "The woman says '只要不下雨，我们就去！' (As long as it doesn't rain)."
      },
      {
        "id": 8,
        "part": 4,
        "type": "comprehension",
        "prompt": "Listen to the dialogue.",
        "audioText": "女：你觉得这次考试难不难？ 男：数学比历史难多了，但是我都做完了。",
        "question": "男的觉得哪个科目更难？ (Which subject does the man find harder?)",
        "options": [
          "A. 历史",
          "B. 数学",
          "C. 两个都不难"
        ],
        "correctAnswer": 1,
        "explanation": "The man states '数学比历史难多了' (Math is much harder than history)."
      },
      {
        "id": 9,
        "part": 4,
        "type": "comprehension",
        "prompt": "Listen to the conversation.",
        "audioText": "男：你认识新来的张经理吗？ 女：认识，他总是笑着跟每一个同事说话，非常热情。",
        "question": "女的觉得张经理怎么样？ (What does the woman think of Manager Zhang?)",
        "options": [
          "A. 很严肃",
          "B. 总是笑着，非常热情",
          "C. 经常迟到"
        ],
        "correctAnswer": 1,
        "explanation": "She notes '他总是笑着跟每一个同事说话，非常热情'."
      },
      {
        "id": 10,
        "part": 4,
        "type": "comprehension",
        "prompt": "Listen to the dialogue.",
        "audioText": "女：你的脚好点儿了吗？ 男：好多了，医生说再休息两天就能正常走路了。",
        "question": "男的还需要休息几天？ (How many more days does the man need to rest?)",
        "options": [
          "A. 一天",
          "B. 两天",
          "C. 一周"
        ],
        "correctAnswer": 1,
        "explanation": "He says '再休息两天就能正常走路了' (rest two more days)."
      }
    ]
  },
  {
    "id": "hsk3-listening-2",
    "level": 3,
    "type": "listening",
    "testNumber": 2,
    "title": "HSK 3 Official Mock Test 2 · Listening (听力)",
    "durationMinutes": 35,
    "totalQuestions": 10,
    "questions": [
      {
        "id": 1,
        "part": 1,
        "type": "true_false",
        "prompt": "Listen to the statement. Does it match the picture?",
        "audioText": "别忘了把空调关了，我们要节约用电。",
        "imageEmoji": "❄️",
        "imageDesc": "Air conditioner cooling",
        "options": [
          "正确 (True)",
          "错误 (False)"
        ],
        "correctAnswer": 0,
        "explanation": "Audio says '别忘了把空调关了' (Don't forget to turn off the air conditioner), matching the AC cooling icon."
      },
      {
        "id": 2,
        "part": 1,
        "type": "true_false",
        "prompt": "Listen to the audio. Does it match the statement?",
        "audioText": "他正在图书馆借书呢，准备写期末论文。",
        "imageEmoji": "🏊‍♂️",
        "imageDesc": "Swimmer in a pool",
        "options": [
          "正确 (True)",
          "错误 (False)"
        ],
        "correctAnswer": 1,
        "explanation": "Audio describes studying and borrowing books in the library ('在图书馆借书'), but the picture shows swimming."
      },
      {
        "id": 3,
        "part": 2,
        "type": "choice",
        "prompt": "Listen to the dialogue and select the matching location.",
        "audioText": "男：请问您办理存款还是兑换外币？ 女：我想把这些美元换成人民币。",
        "options": [
          "A. 🏦 银行 (Bank)",
          "B. 🏬 商场 (Department Store)",
          "C. ✈️ 机场 (Airport)"
        ],
        "correctAnswer": 0,
        "explanation": "'兑换外币' and '美元换成人民币' clearly takes place at a bank."
      },
      {
        "id": 4,
        "part": 3,
        "type": "dialog",
        "prompt": "Listen to the conversation and answer the question.",
        "audioText": "男：你最近怎么看起来这么累？ 女：最近公司的事情特别多，我每天都加班到晚上九点多。",
        "question": "女的为什么看起来很累？ (Why does the woman look tired?)",
        "options": [
          "A. 生病发烧了",
          "B. 每天加班到很晚",
          "C. 找不到眼镜"
        ],
        "correctAnswer": 1,
        "explanation": "The woman explains '最近公司的事情特别多，我每天都加班到晚上九点多' (works overtime late every day)."
      },
      {
        "id": 5,
        "part": 4,
        "type": "comprehension",
        "prompt": "Listen to the dialogue and select the correct answer.",
        "audioText": "男：这套房子的租金多少钱一个月？ 女：每月三千块，离地铁站只有两百米，非常方便。",
        "question": "这套房子的房租是多少？ (How much is the rent?)",
        "options": [
          "A. 2,000 元",
          "B. 3,000 元",
          "C. 3,200 元"
        ],
        "correctAnswer": 1,
        "explanation": "The woman clearly states '每月三千块' (3,000 yuan per month)."
      },
      {
        "id": 6,
        "part": 4,
        "type": "comprehension",
        "prompt": "Listen to the dialogue.",
        "audioText": "女：你把那本汉语词典放在哪儿了？ 男：我放在书架第二层了，你没看出来吗？",
        "question": "词典在什么地方？ (Where is the dictionary?)",
        "options": [
          "A. 桌子下面",
          "B. 书架第二层",
          "C. 行李箱里"
        ],
        "correctAnswer": 1,
        "explanation": "The man says '放在书架第二层了' (on the 2nd shelf of the bookcase)."
      },
      {
        "id": 7,
        "part": 4,
        "type": "comprehension",
        "prompt": "Listen to the conversation.",
        "audioText": "男：周末我们一起去爬山怎么样？ 女：好啊，只要不下雨，我们就去！",
        "question": "女的什么情况下会去爬山？ (Under what condition will she go mountain climbing?)",
        "options": [
          "A. 只要不下雨",
          "B. 只要写完作业",
          "C. 只要身体不累"
        ],
        "correctAnswer": 0,
        "explanation": "The woman says '只要不下雨，我们就去！' (As long as it doesn't rain)."
      },
      {
        "id": 8,
        "part": 4,
        "type": "comprehension",
        "prompt": "Listen to the dialogue.",
        "audioText": "女：你觉得这次考试难不难？ 男：数学比历史难多了，但是我都做完了。",
        "question": "男的觉得哪个科目更难？ (Which subject does the man find harder?)",
        "options": [
          "A. 历史",
          "B. 数学",
          "C. 两个都不难"
        ],
        "correctAnswer": 1,
        "explanation": "The man states '数学比历史难多了' (Math is much harder than history)."
      },
      {
        "id": 9,
        "part": 4,
        "type": "comprehension",
        "prompt": "Listen to the conversation.",
        "audioText": "男：你认识新来的张经理吗？ 女：认识，他总是笑着跟每一个同事说话，非常热情。",
        "question": "女的觉得张经理怎么样？ (What does the woman think of Manager Zhang?)",
        "options": [
          "A. 很严肃",
          "B. 总是笑着，非常热情",
          "C. 经常迟到"
        ],
        "correctAnswer": 1,
        "explanation": "She notes '他总是笑着跟每一个同事说话，非常热情'."
      },
      {
        "id": 10,
        "part": 4,
        "type": "comprehension",
        "prompt": "Listen to the dialogue.",
        "audioText": "女：你的脚好点儿了吗？ 男：好多了，医生说再休息两天就能正常走路了。",
        "question": "男的还需要休息几天？ (How many more days does the man need to rest?)",
        "options": [
          "A. 一天",
          "B. 两天",
          "C. 一周"
        ],
        "correctAnswer": 1,
        "explanation": "He says '再休息两天就能正常走路了' (rest two more days)."
      }
    ]
  },
  {
    "id": "hsk3-listening-3",
    "level": 3,
    "type": "listening",
    "testNumber": 3,
    "title": "HSK 3 Official Mock Test 3 · Listening (听力)",
    "durationMinutes": 35,
    "totalQuestions": 10,
    "questions": [
      {
        "id": 1,
        "part": 1,
        "type": "true_false",
        "prompt": "Listen to the statement. Does it match the picture?",
        "audioText": "别忘了把空调关了，我们要节约用电。",
        "imageEmoji": "❄️",
        "imageDesc": "Air conditioner cooling",
        "options": [
          "正确 (True)",
          "错误 (False)"
        ],
        "correctAnswer": 0,
        "explanation": "Audio says '别忘了把空调关了' (Don't forget to turn off the air conditioner), matching the AC cooling icon."
      },
      {
        "id": 2,
        "part": 1,
        "type": "true_false",
        "prompt": "Listen to the audio. Does it match the statement?",
        "audioText": "他正在图书馆借书呢，准备写期末论文。",
        "imageEmoji": "🏊‍♂️",
        "imageDesc": "Swimmer in a pool",
        "options": [
          "正确 (True)",
          "错误 (False)"
        ],
        "correctAnswer": 1,
        "explanation": "Audio describes studying and borrowing books in the library ('在图书馆借书'), but the picture shows swimming."
      },
      {
        "id": 3,
        "part": 2,
        "type": "choice",
        "prompt": "Listen to the dialogue and select the matching location.",
        "audioText": "男：请问您办理存款还是兑换外币？ 女：我想把这些美元换成人民币。",
        "options": [
          "A. 🏦 银行 (Bank)",
          "B. 🏬 商场 (Department Store)",
          "C. ✈️ 机场 (Airport)"
        ],
        "correctAnswer": 0,
        "explanation": "'兑换外币' and '美元换成人民币' clearly takes place at a bank."
      },
      {
        "id": 4,
        "part": 3,
        "type": "dialog",
        "prompt": "Listen to the conversation and answer the question.",
        "audioText": "男：你最近怎么看起来这么累？ 女：最近公司的事情特别多，我每天都加班到晚上九点多。",
        "question": "女的为什么看起来很累？ (Why does the woman look tired?)",
        "options": [
          "A. 生病发烧了",
          "B. 每天加班到很晚",
          "C. 找不到眼镜"
        ],
        "correctAnswer": 1,
        "explanation": "The woman explains '最近公司的事情特别多，我每天都加班到晚上九点多' (works overtime late every day)."
      },
      {
        "id": 5,
        "part": 4,
        "type": "comprehension",
        "prompt": "Listen to the dialogue and select the correct answer.",
        "audioText": "男：这套房子的租金多少钱一个月？ 女：每月三千块，离地铁站只有两百米，非常方便。",
        "question": "这套房子的房租是多少？ (How much is the rent?)",
        "options": [
          "A. 2,000 元",
          "B. 3,000 元",
          "C. 3,200 元"
        ],
        "correctAnswer": 1,
        "explanation": "The woman clearly states '每月三千块' (3,000 yuan per month)."
      },
      {
        "id": 6,
        "part": 4,
        "type": "comprehension",
        "prompt": "Listen to the dialogue.",
        "audioText": "女：你把那本汉语词典放在哪儿了？ 男：我放在书架第二层了，你没看出来吗？",
        "question": "词典在什么地方？ (Where is the dictionary?)",
        "options": [
          "A. 桌子下面",
          "B. 书架第二层",
          "C. 行李箱里"
        ],
        "correctAnswer": 1,
        "explanation": "The man says '放在书架第二层了' (on the 2nd shelf of the bookcase)."
      },
      {
        "id": 7,
        "part": 4,
        "type": "comprehension",
        "prompt": "Listen to the conversation.",
        "audioText": "男：周末我们一起去爬山怎么样？ 女：好啊，只要不下雨，我们就去！",
        "question": "女的什么情况下会去爬山？ (Under what condition will she go mountain climbing?)",
        "options": [
          "A. 只要不下雨",
          "B. 只要写完作业",
          "C. 只要身体不累"
        ],
        "correctAnswer": 0,
        "explanation": "The woman says '只要不下雨，我们就去！' (As long as it doesn't rain)."
      },
      {
        "id": 8,
        "part": 4,
        "type": "comprehension",
        "prompt": "Listen to the dialogue.",
        "audioText": "女：你觉得这次考试难不难？ 男：数学比历史难多了，但是我都做完了。",
        "question": "男的觉得哪个科目更难？ (Which subject does the man find harder?)",
        "options": [
          "A. 历史",
          "B. 数学",
          "C. 两个都不难"
        ],
        "correctAnswer": 1,
        "explanation": "The man states '数学比历史难多了' (Math is much harder than history)."
      },
      {
        "id": 9,
        "part": 4,
        "type": "comprehension",
        "prompt": "Listen to the conversation.",
        "audioText": "男：你认识新来的张经理吗？ 女：认识，他总是笑着跟每一个同事说话，非常热情。",
        "question": "女的觉得张经理怎么样？ (What does the woman think of Manager Zhang?)",
        "options": [
          "A. 很严肃",
          "B. 总是笑着，非常热情",
          "C. 经常迟到"
        ],
        "correctAnswer": 1,
        "explanation": "She notes '他总是笑着跟每一个同事说话，非常热情'."
      },
      {
        "id": 10,
        "part": 4,
        "type": "comprehension",
        "prompt": "Listen to the dialogue.",
        "audioText": "女：你的脚好点儿了吗？ 男：好多了，医生说再休息两天就能正常走路了。",
        "question": "男的还需要休息几天？ (How many more days does the man need to rest?)",
        "options": [
          "A. 一天",
          "B. 两天",
          "C. 一周"
        ],
        "correctAnswer": 1,
        "explanation": "He says '再休息两天就能正常走路了' (rest two more days)."
      }
    ]
  },
  {
    "id": "hsk3-listening-4",
    "level": 3,
    "type": "listening",
    "testNumber": 4,
    "title": "HSK 3 Official Mock Test 4 · Listening (听力)",
    "durationMinutes": 35,
    "totalQuestions": 10,
    "questions": [
      {
        "id": 1,
        "part": 1,
        "type": "true_false",
        "prompt": "Listen to the statement. Does it match the picture?",
        "audioText": "别忘了把空调关了，我们要节约用电。",
        "imageEmoji": "❄️",
        "imageDesc": "Air conditioner cooling",
        "options": [
          "正确 (True)",
          "错误 (False)"
        ],
        "correctAnswer": 0,
        "explanation": "Audio says '别忘了把空调关了' (Don't forget to turn off the air conditioner), matching the AC cooling icon."
      },
      {
        "id": 2,
        "part": 1,
        "type": "true_false",
        "prompt": "Listen to the audio. Does it match the statement?",
        "audioText": "他正在图书馆借书呢，准备写期末论文。",
        "imageEmoji": "🏊‍♂️",
        "imageDesc": "Swimmer in a pool",
        "options": [
          "正确 (True)",
          "错误 (False)"
        ],
        "correctAnswer": 1,
        "explanation": "Audio describes studying and borrowing books in the library ('在图书馆借书'), but the picture shows swimming."
      },
      {
        "id": 3,
        "part": 2,
        "type": "choice",
        "prompt": "Listen to the dialogue and select the matching location.",
        "audioText": "男：请问您办理存款还是兑换外币？ 女：我想把这些美元换成人民币。",
        "options": [
          "A. 🏦 银行 (Bank)",
          "B. 🏬 商场 (Department Store)",
          "C. ✈️ 机场 (Airport)"
        ],
        "correctAnswer": 0,
        "explanation": "'兑换外币' and '美元换成人民币' clearly takes place at a bank."
      },
      {
        "id": 4,
        "part": 3,
        "type": "dialog",
        "prompt": "Listen to the conversation and answer the question.",
        "audioText": "男：你最近怎么看起来这么累？ 女：最近公司的事情特别多，我每天都加班到晚上九点多。",
        "question": "女的为什么看起来很累？ (Why does the woman look tired?)",
        "options": [
          "A. 生病发烧了",
          "B. 每天加班到很晚",
          "C. 找不到眼镜"
        ],
        "correctAnswer": 1,
        "explanation": "The woman explains '最近公司的事情特别多，我每天都加班到晚上九点多' (works overtime late every day)."
      },
      {
        "id": 5,
        "part": 4,
        "type": "comprehension",
        "prompt": "Listen to the dialogue and select the correct answer.",
        "audioText": "男：这套房子的租金多少钱一个月？ 女：每月三千块，离地铁站只有两百米，非常方便。",
        "question": "这套房子的房租是多少？ (How much is the rent?)",
        "options": [
          "A. 2,000 元",
          "B. 3,000 元",
          "C. 3,200 元"
        ],
        "correctAnswer": 1,
        "explanation": "The woman clearly states '每月三千块' (3,000 yuan per month)."
      },
      {
        "id": 6,
        "part": 4,
        "type": "comprehension",
        "prompt": "Listen to the dialogue.",
        "audioText": "女：你把那本汉语词典放在哪儿了？ 男：我放在书架第二层了，你没看出来吗？",
        "question": "词典在什么地方？ (Where is the dictionary?)",
        "options": [
          "A. 桌子下面",
          "B. 书架第二层",
          "C. 行李箱里"
        ],
        "correctAnswer": 1,
        "explanation": "The man says '放在书架第二层了' (on the 2nd shelf of the bookcase)."
      },
      {
        "id": 7,
        "part": 4,
        "type": "comprehension",
        "prompt": "Listen to the conversation.",
        "audioText": "男：周末我们一起去爬山怎么样？ 女：好啊，只要不下雨，我们就去！",
        "question": "女的什么情况下会去爬山？ (Under what condition will she go mountain climbing?)",
        "options": [
          "A. 只要不下雨",
          "B. 只要写完作业",
          "C. 只要身体不累"
        ],
        "correctAnswer": 0,
        "explanation": "The woman says '只要不下雨，我们就去！' (As long as it doesn't rain)."
      },
      {
        "id": 8,
        "part": 4,
        "type": "comprehension",
        "prompt": "Listen to the dialogue.",
        "audioText": "女：你觉得这次考试难不难？ 男：数学比历史难多了，但是我都做完了。",
        "question": "男的觉得哪个科目更难？ (Which subject does the man find harder?)",
        "options": [
          "A. 历史",
          "B. 数学",
          "C. 两个都不难"
        ],
        "correctAnswer": 1,
        "explanation": "The man states '数学比历史难多了' (Math is much harder than history)."
      },
      {
        "id": 9,
        "part": 4,
        "type": "comprehension",
        "prompt": "Listen to the conversation.",
        "audioText": "男：你认识新来的张经理吗？ 女：认识，他总是笑着跟每一个同事说话，非常热情。",
        "question": "女的觉得张经理怎么样？ (What does the woman think of Manager Zhang?)",
        "options": [
          "A. 很严肃",
          "B. 总是笑着，非常热情",
          "C. 经常迟到"
        ],
        "correctAnswer": 1,
        "explanation": "She notes '他总是笑着跟每一个同事说话，非常热情'."
      },
      {
        "id": 10,
        "part": 4,
        "type": "comprehension",
        "prompt": "Listen to the dialogue.",
        "audioText": "女：你的脚好点儿了吗？ 男：好多了，医生说再休息两天就能正常走路了。",
        "question": "男的还需要休息几天？ (How many more days does the man need to rest?)",
        "options": [
          "A. 一天",
          "B. 两天",
          "C. 一周"
        ],
        "correctAnswer": 1,
        "explanation": "He says '再休息两天就能正常走路了' (rest two more days)."
      }
    ]
  },
  {
    "id": "hsk3-listening-5",
    "level": 3,
    "type": "listening",
    "testNumber": 5,
    "title": "HSK 3 Official Mock Test 5 · Listening (听力)",
    "durationMinutes": 35,
    "totalQuestions": 10,
    "questions": [
      {
        "id": 1,
        "part": 1,
        "type": "true_false",
        "prompt": "Listen to the statement. Does it match the picture?",
        "audioText": "别忘了把空调关了，我们要节约用电。",
        "imageEmoji": "❄️",
        "imageDesc": "Air conditioner cooling",
        "options": [
          "正确 (True)",
          "错误 (False)"
        ],
        "correctAnswer": 0,
        "explanation": "Audio says '别忘了把空调关了' (Don't forget to turn off the air conditioner), matching the AC cooling icon."
      },
      {
        "id": 2,
        "part": 1,
        "type": "true_false",
        "prompt": "Listen to the audio. Does it match the statement?",
        "audioText": "他正在图书馆借书呢，准备写期末论文。",
        "imageEmoji": "🏊‍♂️",
        "imageDesc": "Swimmer in a pool",
        "options": [
          "正确 (True)",
          "错误 (False)"
        ],
        "correctAnswer": 1,
        "explanation": "Audio describes studying and borrowing books in the library ('在图书馆借书'), but the picture shows swimming."
      },
      {
        "id": 3,
        "part": 2,
        "type": "choice",
        "prompt": "Listen to the dialogue and select the matching location.",
        "audioText": "男：请问您办理存款还是兑换外币？ 女：我想把这些美元换成人民币。",
        "options": [
          "A. 🏦 银行 (Bank)",
          "B. 🏬 商场 (Department Store)",
          "C. ✈️ 机场 (Airport)"
        ],
        "correctAnswer": 0,
        "explanation": "'兑换外币' and '美元换成人民币' clearly takes place at a bank."
      },
      {
        "id": 4,
        "part": 3,
        "type": "dialog",
        "prompt": "Listen to the conversation and answer the question.",
        "audioText": "男：你最近怎么看起来这么累？ 女：最近公司的事情特别多，我每天都加班到晚上九点多。",
        "question": "女的为什么看起来很累？ (Why does the woman look tired?)",
        "options": [
          "A. 生病发烧了",
          "B. 每天加班到很晚",
          "C. 找不到眼镜"
        ],
        "correctAnswer": 1,
        "explanation": "The woman explains '最近公司的事情特别多，我每天都加班到晚上九点多' (works overtime late every day)."
      },
      {
        "id": 5,
        "part": 4,
        "type": "comprehension",
        "prompt": "Listen to the dialogue and select the correct answer.",
        "audioText": "男：这套房子的租金多少钱一个月？ 女：每月三千块，离地铁站只有两百米，非常方便。",
        "question": "这套房子的房租是多少？ (How much is the rent?)",
        "options": [
          "A. 2,000 元",
          "B. 3,000 元",
          "C. 3,200 元"
        ],
        "correctAnswer": 1,
        "explanation": "The woman clearly states '每月三千块' (3,000 yuan per month)."
      },
      {
        "id": 6,
        "part": 4,
        "type": "comprehension",
        "prompt": "Listen to the dialogue.",
        "audioText": "女：你把那本汉语词典放在哪儿了？ 男：我放在书架第二层了，你没看出来吗？",
        "question": "词典在什么地方？ (Where is the dictionary?)",
        "options": [
          "A. 桌子下面",
          "B. 书架第二层",
          "C. 行李箱里"
        ],
        "correctAnswer": 1,
        "explanation": "The man says '放在书架第二层了' (on the 2nd shelf of the bookcase)."
      },
      {
        "id": 7,
        "part": 4,
        "type": "comprehension",
        "prompt": "Listen to the conversation.",
        "audioText": "男：周末我们一起去爬山怎么样？ 女：好啊，只要不下雨，我们就去！",
        "question": "女的什么情况下会去爬山？ (Under what condition will she go mountain climbing?)",
        "options": [
          "A. 只要不下雨",
          "B. 只要写完作业",
          "C. 只要身体不累"
        ],
        "correctAnswer": 0,
        "explanation": "The woman says '只要不下雨，我们就去！' (As long as it doesn't rain)."
      },
      {
        "id": 8,
        "part": 4,
        "type": "comprehension",
        "prompt": "Listen to the dialogue.",
        "audioText": "女：你觉得这次考试难不难？ 男：数学比历史难多了，但是我都做完了。",
        "question": "男的觉得哪个科目更难？ (Which subject does the man find harder?)",
        "options": [
          "A. 历史",
          "B. 数学",
          "C. 两个都不难"
        ],
        "correctAnswer": 1,
        "explanation": "The man states '数学比历史难多了' (Math is much harder than history)."
      },
      {
        "id": 9,
        "part": 4,
        "type": "comprehension",
        "prompt": "Listen to the conversation.",
        "audioText": "男：你认识新来的张经理吗？ 女：认识，他总是笑着跟每一个同事说话，非常热情。",
        "question": "女的觉得张经理怎么样？ (What does the woman think of Manager Zhang?)",
        "options": [
          "A. 很严肃",
          "B. 总是笑着，非常热情",
          "C. 经常迟到"
        ],
        "correctAnswer": 1,
        "explanation": "She notes '他总是笑着跟每一个同事说话，非常热情'."
      },
      {
        "id": 10,
        "part": 4,
        "type": "comprehension",
        "prompt": "Listen to the dialogue.",
        "audioText": "女：你的脚好点儿了吗？ 男：好多了，医生说再休息两天就能正常走路了。",
        "question": "男的还需要休息几天？ (How many more days does the man need to rest?)",
        "options": [
          "A. 一天",
          "B. 两天",
          "C. 一周"
        ],
        "correctAnswer": 1,
        "explanation": "He says '再休息两天就能正常走路了' (rest two more days)."
      }
    ]
  },
  {
    "id": "hsk3-reading-1",
    "level": 3,
    "type": "reading",
    "testNumber": 1,
    "title": "HSK 3 Official Mock Test 1 · Reading (阅读)",
    "durationMinutes": 30,
    "totalQuestions": 10,
    "questions": [
      {
        "id": 1,
        "part": 1,
        "type": "fill_blank",
        "prompt": "Choose the correct word to complete the 把-construction.",
        "sentence": "请你把桌子上的垃圾___掉。",
        "options": [
          "A. 扔",
          "B. 骑",
          "C. 借",
          "D. 哭"
        ],
        "correctAnswer": 0,
        "explanation": "'把垃圾扔掉' means to throw away / discard the trash."
      },
      {
        "id": 2,
        "part": 1,
        "type": "fill_blank",
        "prompt": "Choose the appropriate correlative conjunction pair.",
        "sentence": "他的中文说得很好，___发音准确，___语法几乎没有错误。",
        "options": [
          "A. 又……又……",
          "B. 不但……而且……",
          "C. 虽然……但是……",
          "D. 越……越……"
        ],
        "correctAnswer": 1,
        "explanation": "'不但...而且...' expresses progressive addition: Not only is his pronunciation accurate, but his grammar also has almost no mistakes."
      },
      {
        "id": 3,
        "part": 2,
        "type": "fill_blank",
        "prompt": "Select the correct potential complement.",
        "sentence": "老师写在黑板上的字太小了，我坐后面看___。",
        "options": [
          "A. 不清",
          "B. 不到",
          "C. 不见",
          "D. 不完"
        ],
        "correctAnswer": 0,
        "explanation": "'看不清' means 'cannot see clearly' due to distance or small size."
      },
      {
        "id": 4,
        "part": 2,
        "type": "fill_blank",
        "prompt": "Choose the correct structure for equality comparison.",
        "sentence": "妹妹的头发跟姐姐的一样___。",
        "options": [
          "A. 远",
          "B. 长",
          "C. 贵",
          "D. 快"
        ],
        "correctAnswer": 1,
        "explanation": "'跟...一样长' describes having hair of the same length."
      },
      {
        "id": 5,
        "part": 3,
        "type": "dialog_match",
        "prompt": "Match the best response: '别忘了把空调关了！'",
        "question": "别忘了把空调关了！ (Don't forget to turn off the air conditioner!)",
        "options": [
          "A. 放心吧，我已经关好了。",
          "B. 我比他高三厘米。",
          "C. 附近有一家中介公司。"
        ],
        "correctAnswer": 0,
        "explanation": "'放心吧，我已经关好了' (Don't worry, I already turned it off) directly answers the reminder."
      },
      {
        "id": 6,
        "part": 3,
        "type": "comprehension",
        "prompt": "Read the passage and judge: '虽然今天工作非常忙，但是他还是抽时间去健身房锻炼了一个小时。'",
        "question": "他今天没有去健身房锻炼。 (He did not go to the gym to exercise today.)",
        "options": [
          "正确 (True)",
          "错误 (False)"
        ],
        "correctAnswer": 1,
        "explanation": "The text confirms he went and exercised for an hour ('锻炼了一个小时'), so the statement is False."
      },
      {
        "id": 7,
        "part": 4,
        "type": "comprehension",
        "prompt": "Read the statement: '除了李明以外，班上的其他同学都参加了这次汉语演讲比赛。'",
        "question": "李明参加了这次演讲比赛。 (Li Ming participated in the speech contest.)",
        "options": [
          "正确 (True)",
          "错误 (False)"
        ],
        "correctAnswer": 1,
        "explanation": "'除了李明以外' means everyone participated EXCEPT Li Ming, so the statement is False."
      },
      {
        "id": 8,
        "part": 4,
        "type": "fill_blank",
        "prompt": "Choose the correct conjunction for conditional necessity.",
        "sentence": "___每天坚持练习，口语___能越来越流利。",
        "options": [
          "A. 只有……才……",
          "B. 虽然……但是……",
          "C. 因为……所以……",
          "D. 只要……就……"
        ],
        "correctAnswer": 0,
        "explanation": "'只有...才...' expresses: Only by persistently practicing every day can spoken language become increasingly fluent."
      },
      {
        "id": 9,
        "part": 4,
        "type": "fill_blank",
        "prompt": "Fill in the blank with the correct passive preposition.",
        "sentence": "桌子上的蛋糕___小猫吃了一半。",
        "options": [
          "A. 把",
          "B. 被",
          "C. 让",
          "D. 给"
        ],
        "correctAnswer": 1,
        "explanation": "'被' marks passive voice: The cake on the table was eaten in half BY the kitten."
      },
      {
        "id": 10,
        "part": 4,
        "type": "fill_blank",
        "prompt": "Choose the correct word for gradual progression.",
        "sentence": "随着春天的到来，天气___暖和了。",
        "options": [
          "A. 越",
          "B. 越来越",
          "C. 一直",
          "D. 刚才"
        ],
        "correctAnswer": 1,
        "explanation": "'越来越暖和' expresses: The weather is becoming warmer and warmer."
      }
    ]
  },
  {
    "id": "hsk3-reading-2",
    "level": 3,
    "type": "reading",
    "testNumber": 2,
    "title": "HSK 3 Official Mock Test 2 · Reading (阅读)",
    "durationMinutes": 30,
    "totalQuestions": 10,
    "questions": [
      {
        "id": 1,
        "part": 1,
        "type": "fill_blank",
        "prompt": "Choose the correct word to complete the 把-construction.",
        "sentence": "请你把桌子上的垃圾___掉。",
        "options": [
          "A. 扔",
          "B. 骑",
          "C. 借",
          "D. 哭"
        ],
        "correctAnswer": 0,
        "explanation": "'把垃圾扔掉' means to throw away / discard the trash."
      },
      {
        "id": 2,
        "part": 1,
        "type": "fill_blank",
        "prompt": "Choose the appropriate correlative conjunction pair.",
        "sentence": "他的中文说得很好，___发音准确，___语法几乎没有错误。",
        "options": [
          "A. 又……又……",
          "B. 不但……而且……",
          "C. 虽然……但是……",
          "D. 越……越……"
        ],
        "correctAnswer": 1,
        "explanation": "'不但...而且...' expresses progressive addition: Not only is his pronunciation accurate, but his grammar also has almost no mistakes."
      },
      {
        "id": 3,
        "part": 2,
        "type": "fill_blank",
        "prompt": "Select the correct potential complement.",
        "sentence": "老师写在黑板上的字太小了，我坐后面看___。",
        "options": [
          "A. 不清",
          "B. 不到",
          "C. 不见",
          "D. 不完"
        ],
        "correctAnswer": 0,
        "explanation": "'看不清' means 'cannot see clearly' due to distance or small size."
      },
      {
        "id": 4,
        "part": 2,
        "type": "fill_blank",
        "prompt": "Choose the correct structure for equality comparison.",
        "sentence": "妹妹的头发跟姐姐的一样___。",
        "options": [
          "A. 远",
          "B. 长",
          "C. 贵",
          "D. 快"
        ],
        "correctAnswer": 1,
        "explanation": "'跟...一样长' describes having hair of the same length."
      },
      {
        "id": 5,
        "part": 3,
        "type": "dialog_match",
        "prompt": "Match the best response: '别忘了把空调关了！'",
        "question": "别忘了把空调关了！ (Don't forget to turn off the air conditioner!)",
        "options": [
          "A. 放心吧，我已经关好了。",
          "B. 我比他高三厘米。",
          "C. 附近有一家中介公司。"
        ],
        "correctAnswer": 0,
        "explanation": "'放心吧，我已经关好了' (Don't worry, I already turned it off) directly answers the reminder."
      },
      {
        "id": 6,
        "part": 3,
        "type": "comprehension",
        "prompt": "Read the passage and judge: '虽然今天工作非常忙，但是他还是抽时间去健身房锻炼了一个小时。'",
        "question": "他今天没有去健身房锻炼。 (He did not go to the gym to exercise today.)",
        "options": [
          "正确 (True)",
          "错误 (False)"
        ],
        "correctAnswer": 1,
        "explanation": "The text confirms he went and exercised for an hour ('锻炼了一个小时'), so the statement is False."
      },
      {
        "id": 7,
        "part": 4,
        "type": "comprehension",
        "prompt": "Read the statement: '除了李明以外，班上的其他同学都参加了这次汉语演讲比赛。'",
        "question": "李明参加了这次演讲比赛。 (Li Ming participated in the speech contest.)",
        "options": [
          "正确 (True)",
          "错误 (False)"
        ],
        "correctAnswer": 1,
        "explanation": "'除了李明以外' means everyone participated EXCEPT Li Ming, so the statement is False."
      },
      {
        "id": 8,
        "part": 4,
        "type": "fill_blank",
        "prompt": "Choose the correct conjunction for conditional necessity.",
        "sentence": "___每天坚持练习，口语___能越来越流利。",
        "options": [
          "A. 只有……才……",
          "B. 虽然……但是……",
          "C. 因为……所以……",
          "D. 只要……就……"
        ],
        "correctAnswer": 0,
        "explanation": "'只有...才...' expresses: Only by persistently practicing every day can spoken language become increasingly fluent."
      },
      {
        "id": 9,
        "part": 4,
        "type": "fill_blank",
        "prompt": "Fill in the blank with the correct passive preposition.",
        "sentence": "桌子上的蛋糕___小猫吃了一半。",
        "options": [
          "A. 把",
          "B. 被",
          "C. 让",
          "D. 给"
        ],
        "correctAnswer": 1,
        "explanation": "'被' marks passive voice: The cake on the table was eaten in half BY the kitten."
      },
      {
        "id": 10,
        "part": 4,
        "type": "fill_blank",
        "prompt": "Choose the correct word for gradual progression.",
        "sentence": "随着春天的到来，天气___暖和了。",
        "options": [
          "A. 越",
          "B. 越来越",
          "C. 一直",
          "D. 刚才"
        ],
        "correctAnswer": 1,
        "explanation": "'越来越暖和' expresses: The weather is becoming warmer and warmer."
      }
    ]
  },
  {
    "id": "hsk3-reading-3",
    "level": 3,
    "type": "reading",
    "testNumber": 3,
    "title": "HSK 3 Official Mock Test 3 · Reading (阅读)",
    "durationMinutes": 30,
    "totalQuestions": 10,
    "questions": [
      {
        "id": 1,
        "part": 1,
        "type": "fill_blank",
        "prompt": "Choose the correct word to complete the 把-construction.",
        "sentence": "请你把桌子上的垃圾___掉。",
        "options": [
          "A. 扔",
          "B. 骑",
          "C. 借",
          "D. 哭"
        ],
        "correctAnswer": 0,
        "explanation": "'把垃圾扔掉' means to throw away / discard the trash."
      },
      {
        "id": 2,
        "part": 1,
        "type": "fill_blank",
        "prompt": "Choose the appropriate correlative conjunction pair.",
        "sentence": "他的中文说得很好，___发音准确，___语法几乎没有错误。",
        "options": [
          "A. 又……又……",
          "B. 不但……而且……",
          "C. 虽然……但是……",
          "D. 越……越……"
        ],
        "correctAnswer": 1,
        "explanation": "'不但...而且...' expresses progressive addition: Not only is his pronunciation accurate, but his grammar also has almost no mistakes."
      },
      {
        "id": 3,
        "part": 2,
        "type": "fill_blank",
        "prompt": "Select the correct potential complement.",
        "sentence": "老师写在黑板上的字太小了，我坐后面看___。",
        "options": [
          "A. 不清",
          "B. 不到",
          "C. 不见",
          "D. 不完"
        ],
        "correctAnswer": 0,
        "explanation": "'看不清' means 'cannot see clearly' due to distance or small size."
      },
      {
        "id": 4,
        "part": 2,
        "type": "fill_blank",
        "prompt": "Choose the correct structure for equality comparison.",
        "sentence": "妹妹的头发跟姐姐的一样___。",
        "options": [
          "A. 远",
          "B. 长",
          "C. 贵",
          "D. 快"
        ],
        "correctAnswer": 1,
        "explanation": "'跟...一样长' describes having hair of the same length."
      },
      {
        "id": 5,
        "part": 3,
        "type": "dialog_match",
        "prompt": "Match the best response: '别忘了把空调关了！'",
        "question": "别忘了把空调关了！ (Don't forget to turn off the air conditioner!)",
        "options": [
          "A. 放心吧，我已经关好了。",
          "B. 我比他高三厘米。",
          "C. 附近有一家中介公司。"
        ],
        "correctAnswer": 0,
        "explanation": "'放心吧，我已经关好了' (Don't worry, I already turned it off) directly answers the reminder."
      },
      {
        "id": 6,
        "part": 3,
        "type": "comprehension",
        "prompt": "Read the passage and judge: '虽然今天工作非常忙，但是他还是抽时间去健身房锻炼了一个小时。'",
        "question": "他今天没有去健身房锻炼。 (He did not go to the gym to exercise today.)",
        "options": [
          "正确 (True)",
          "错误 (False)"
        ],
        "correctAnswer": 1,
        "explanation": "The text confirms he went and exercised for an hour ('锻炼了一个小时'), so the statement is False."
      },
      {
        "id": 7,
        "part": 4,
        "type": "comprehension",
        "prompt": "Read the statement: '除了李明以外，班上的其他同学都参加了这次汉语演讲比赛。'",
        "question": "李明参加了这次演讲比赛。 (Li Ming participated in the speech contest.)",
        "options": [
          "正确 (True)",
          "错误 (False)"
        ],
        "correctAnswer": 1,
        "explanation": "'除了李明以外' means everyone participated EXCEPT Li Ming, so the statement is False."
      },
      {
        "id": 8,
        "part": 4,
        "type": "fill_blank",
        "prompt": "Choose the correct conjunction for conditional necessity.",
        "sentence": "___每天坚持练习，口语___能越来越流利。",
        "options": [
          "A. 只有……才……",
          "B. 虽然……但是……",
          "C. 因为……所以……",
          "D. 只要……就……"
        ],
        "correctAnswer": 0,
        "explanation": "'只有...才...' expresses: Only by persistently practicing every day can spoken language become increasingly fluent."
      },
      {
        "id": 9,
        "part": 4,
        "type": "fill_blank",
        "prompt": "Fill in the blank with the correct passive preposition.",
        "sentence": "桌子上的蛋糕___小猫吃了一半。",
        "options": [
          "A. 把",
          "B. 被",
          "C. 让",
          "D. 给"
        ],
        "correctAnswer": 1,
        "explanation": "'被' marks passive voice: The cake on the table was eaten in half BY the kitten."
      },
      {
        "id": 10,
        "part": 4,
        "type": "fill_blank",
        "prompt": "Choose the correct word for gradual progression.",
        "sentence": "随着春天的到来，天气___暖和了。",
        "options": [
          "A. 越",
          "B. 越来越",
          "C. 一直",
          "D. 刚才"
        ],
        "correctAnswer": 1,
        "explanation": "'越来越暖和' expresses: The weather is becoming warmer and warmer."
      }
    ]
  },
  {
    "id": "hsk3-reading-4",
    "level": 3,
    "type": "reading",
    "testNumber": 4,
    "title": "HSK 3 Official Mock Test 4 · Reading (阅读)",
    "durationMinutes": 30,
    "totalQuestions": 10,
    "questions": [
      {
        "id": 1,
        "part": 1,
        "type": "fill_blank",
        "prompt": "Choose the correct word to complete the 把-construction.",
        "sentence": "请你把桌子上的垃圾___掉。",
        "options": [
          "A. 扔",
          "B. 骑",
          "C. 借",
          "D. 哭"
        ],
        "correctAnswer": 0,
        "explanation": "'把垃圾扔掉' means to throw away / discard the trash."
      },
      {
        "id": 2,
        "part": 1,
        "type": "fill_blank",
        "prompt": "Choose the appropriate correlative conjunction pair.",
        "sentence": "他的中文说得很好，___发音准确，___语法几乎没有错误。",
        "options": [
          "A. 又……又……",
          "B. 不但……而且……",
          "C. 虽然……但是……",
          "D. 越……越……"
        ],
        "correctAnswer": 1,
        "explanation": "'不但...而且...' expresses progressive addition: Not only is his pronunciation accurate, but his grammar also has almost no mistakes."
      },
      {
        "id": 3,
        "part": 2,
        "type": "fill_blank",
        "prompt": "Select the correct potential complement.",
        "sentence": "老师写在黑板上的字太小了，我坐后面看___。",
        "options": [
          "A. 不清",
          "B. 不到",
          "C. 不见",
          "D. 不完"
        ],
        "correctAnswer": 0,
        "explanation": "'看不清' means 'cannot see clearly' due to distance or small size."
      },
      {
        "id": 4,
        "part": 2,
        "type": "fill_blank",
        "prompt": "Choose the correct structure for equality comparison.",
        "sentence": "妹妹的头发跟姐姐的一样___。",
        "options": [
          "A. 远",
          "B. 长",
          "C. 贵",
          "D. 快"
        ],
        "correctAnswer": 1,
        "explanation": "'跟...一样长' describes having hair of the same length."
      },
      {
        "id": 5,
        "part": 3,
        "type": "dialog_match",
        "prompt": "Match the best response: '别忘了把空调关了！'",
        "question": "别忘了把空调关了！ (Don't forget to turn off the air conditioner!)",
        "options": [
          "A. 放心吧，我已经关好了。",
          "B. 我比他高三厘米。",
          "C. 附近有一家中介公司。"
        ],
        "correctAnswer": 0,
        "explanation": "'放心吧，我已经关好了' (Don't worry, I already turned it off) directly answers the reminder."
      },
      {
        "id": 6,
        "part": 3,
        "type": "comprehension",
        "prompt": "Read the passage and judge: '虽然今天工作非常忙，但是他还是抽时间去健身房锻炼了一个小时。'",
        "question": "他今天没有去健身房锻炼。 (He did not go to the gym to exercise today.)",
        "options": [
          "正确 (True)",
          "错误 (False)"
        ],
        "correctAnswer": 1,
        "explanation": "The text confirms he went and exercised for an hour ('锻炼了一个小时'), so the statement is False."
      },
      {
        "id": 7,
        "part": 4,
        "type": "comprehension",
        "prompt": "Read the statement: '除了李明以外，班上的其他同学都参加了这次汉语演讲比赛。'",
        "question": "李明参加了这次演讲比赛。 (Li Ming participated in the speech contest.)",
        "options": [
          "正确 (True)",
          "错误 (False)"
        ],
        "correctAnswer": 1,
        "explanation": "'除了李明以外' means everyone participated EXCEPT Li Ming, so the statement is False."
      },
      {
        "id": 8,
        "part": 4,
        "type": "fill_blank",
        "prompt": "Choose the correct conjunction for conditional necessity.",
        "sentence": "___每天坚持练习，口语___能越来越流利。",
        "options": [
          "A. 只有……才……",
          "B. 虽然……但是……",
          "C. 因为……所以……",
          "D. 只要……就……"
        ],
        "correctAnswer": 0,
        "explanation": "'只有...才...' expresses: Only by persistently practicing every day can spoken language become increasingly fluent."
      },
      {
        "id": 9,
        "part": 4,
        "type": "fill_blank",
        "prompt": "Fill in the blank with the correct passive preposition.",
        "sentence": "桌子上的蛋糕___小猫吃了一半。",
        "options": [
          "A. 把",
          "B. 被",
          "C. 让",
          "D. 给"
        ],
        "correctAnswer": 1,
        "explanation": "'被' marks passive voice: The cake on the table was eaten in half BY the kitten."
      },
      {
        "id": 10,
        "part": 4,
        "type": "fill_blank",
        "prompt": "Choose the correct word for gradual progression.",
        "sentence": "随着春天的到来，天气___暖和了。",
        "options": [
          "A. 越",
          "B. 越来越",
          "C. 一直",
          "D. 刚才"
        ],
        "correctAnswer": 1,
        "explanation": "'越来越暖和' expresses: The weather is becoming warmer and warmer."
      }
    ]
  },
  {
    "id": "hsk3-reading-5",
    "level": 3,
    "type": "reading",
    "testNumber": 5,
    "title": "HSK 3 Official Mock Test 5 · Reading (阅读)",
    "durationMinutes": 30,
    "totalQuestions": 10,
    "questions": [
      {
        "id": 1,
        "part": 1,
        "type": "fill_blank",
        "prompt": "Choose the correct word to complete the 把-construction.",
        "sentence": "请你把桌子上的垃圾___掉。",
        "options": [
          "A. 扔",
          "B. 骑",
          "C. 借",
          "D. 哭"
        ],
        "correctAnswer": 0,
        "explanation": "'把垃圾扔掉' means to throw away / discard the trash."
      },
      {
        "id": 2,
        "part": 1,
        "type": "fill_blank",
        "prompt": "Choose the appropriate correlative conjunction pair.",
        "sentence": "他的中文说得很好，___发音准确，___语法几乎没有错误。",
        "options": [
          "A. 又……又……",
          "B. 不但……而且……",
          "C. 虽然……但是……",
          "D. 越……越……"
        ],
        "correctAnswer": 1,
        "explanation": "'不但...而且...' expresses progressive addition: Not only is his pronunciation accurate, but his grammar also has almost no mistakes."
      },
      {
        "id": 3,
        "part": 2,
        "type": "fill_blank",
        "prompt": "Select the correct potential complement.",
        "sentence": "老师写在黑板上的字太小了，我坐后面看___。",
        "options": [
          "A. 不清",
          "B. 不到",
          "C. 不见",
          "D. 不完"
        ],
        "correctAnswer": 0,
        "explanation": "'看不清' means 'cannot see clearly' due to distance or small size."
      },
      {
        "id": 4,
        "part": 2,
        "type": "fill_blank",
        "prompt": "Choose the correct structure for equality comparison.",
        "sentence": "妹妹的头发跟姐姐的一样___。",
        "options": [
          "A. 远",
          "B. 长",
          "C. 贵",
          "D. 快"
        ],
        "correctAnswer": 1,
        "explanation": "'跟...一样长' describes having hair of the same length."
      },
      {
        "id": 5,
        "part": 3,
        "type": "dialog_match",
        "prompt": "Match the best response: '别忘了把空调关了！'",
        "question": "别忘了把空调关了！ (Don't forget to turn off the air conditioner!)",
        "options": [
          "A. 放心吧，我已经关好了。",
          "B. 我比他高三厘米。",
          "C. 附近有一家中介公司。"
        ],
        "correctAnswer": 0,
        "explanation": "'放心吧，我已经关好了' (Don't worry, I already turned it off) directly answers the reminder."
      },
      {
        "id": 6,
        "part": 3,
        "type": "comprehension",
        "prompt": "Read the passage and judge: '虽然今天工作非常忙，但是他还是抽时间去健身房锻炼了一个小时。'",
        "question": "他今天没有去健身房锻炼。 (He did not go to the gym to exercise today.)",
        "options": [
          "正确 (True)",
          "错误 (False)"
        ],
        "correctAnswer": 1,
        "explanation": "The text confirms he went and exercised for an hour ('锻炼了一个小时'), so the statement is False."
      },
      {
        "id": 7,
        "part": 4,
        "type": "comprehension",
        "prompt": "Read the statement: '除了李明以外，班上的其他同学都参加了这次汉语演讲比赛。'",
        "question": "李明参加了这次演讲比赛。 (Li Ming participated in the speech contest.)",
        "options": [
          "正确 (True)",
          "错误 (False)"
        ],
        "correctAnswer": 1,
        "explanation": "'除了李明以外' means everyone participated EXCEPT Li Ming, so the statement is False."
      },
      {
        "id": 8,
        "part": 4,
        "type": "fill_blank",
        "prompt": "Choose the correct conjunction for conditional necessity.",
        "sentence": "___每天坚持练习，口语___能越来越流利。",
        "options": [
          "A. 只有……才……",
          "B. 虽然……但是……",
          "C. 因为……所以……",
          "D. 只要……就……"
        ],
        "correctAnswer": 0,
        "explanation": "'只有...才...' expresses: Only by persistently practicing every day can spoken language become increasingly fluent."
      },
      {
        "id": 9,
        "part": 4,
        "type": "fill_blank",
        "prompt": "Fill in the blank with the correct passive preposition.",
        "sentence": "桌子上的蛋糕___小猫吃了一半。",
        "options": [
          "A. 把",
          "B. 被",
          "C. 让",
          "D. 给"
        ],
        "correctAnswer": 1,
        "explanation": "'被' marks passive voice: The cake on the table was eaten in half BY the kitten."
      },
      {
        "id": 10,
        "part": 4,
        "type": "fill_blank",
        "prompt": "Choose the correct word for gradual progression.",
        "sentence": "随着春天的到来，天气___暖和了。",
        "options": [
          "A. 越",
          "B. 越来越",
          "C. 一直",
          "D. 刚才"
        ],
        "correctAnswer": 1,
        "explanation": "'越来越暖和' expresses: The weather is becoming warmer and warmer."
      }
    ]
  },
  {
    "id": "hsk3-writing-1",
    "level": 3,
    "type": "writing",
    "testNumber": 1,
    "title": "HSK 3 Writing & Syntax Assembly Test 1",
    "durationMinutes": 25,
    "totalQuestions": 5,
    "questions": [
      {
        "id": 1,
        "type": "unscramble",
        "prompt": "Unscramble into a correct 把-sentence.",
        "words": [
          "空调",
          "请",
          "关了",
          "把"
        ],
        "options": [
          "请把空调关了。",
          "请空调把关了。",
          "把请空调关了。"
        ],
        "correctAnswer": 0,
        "explanation": "Subject + 把 + Object + Verb + 了: 请把空调关了。"
      },
      {
        "id": 2,
        "type": "unscramble",
        "prompt": "Unscramble into a correct passive 被-sentence.",
        "words": [
          "吃完了",
          "蛋糕",
          "被",
          "弟弟"
        ],
        "options": [
          "蛋糕被弟弟吃完了。",
          "弟弟被蛋糕吃完了。",
          "蛋糕弟弟被吃完了。"
        ],
        "correctAnswer": 0,
        "explanation": "Object + 被 + Agent + Verb + 了: 蛋糕被弟弟吃完了。"
      },
      {
        "id": 3,
        "type": "unscramble",
        "prompt": "Unscramble into a correct 越来越-sentence.",
        "words": [
          "汉语",
          "他的",
          "流利了",
          "越来越"
        ],
        "options": [
          "他的汉语越来越流利了。",
          "他的汉语流利了越来越。",
          "越来越他的汉语流利了。"
        ],
        "correctAnswer": 0,
        "explanation": "Subject + 越来越 + Adjective: 他的汉语越来越流利了。"
      },
      {
        "id": 4,
        "type": "character_stroke",
        "prompt": "How many strokes does the character '搬' (bān, to move) have?",
        "character": "搬",
        "options": [
          "11 画",
          "12 画",
          "13 画",
          "14 画"
        ],
        "correctAnswer": 2,
        "explanation": "'搬' has 13 strokes: 扌 (3) + 舟 (6) + 殳 (4) = 13 strokes."
      },
      {
        "id": 5,
        "type": "character_stroke",
        "prompt": "How many strokes does the character '懂' (dǒng, to understand) have?",
        "character": "懂",
        "options": [
          "13 画",
          "14 画",
          "15 画",
          "16 画"
        ],
        "correctAnswer": 2,
        "explanation": "'懂' has 15 strokes: 忄 (3) + 董 (12) = 15 strokes."
      }
    ]
  }
];

export function getMockTestsByLevel(level: 1 | 2 | 3): MockTestEntry[] {
  return MOCK_TESTS_DATA.filter(t => t.level === level)
}

export function getMockTestsByLevelAndType(level: 1 | 2 | 3, type: TestType): MockTestEntry[] {
  return MOCK_TESTS_DATA.filter(t => t.level === level && t.type === type)
}

export function getMockTestById(id: string): MockTestEntry | undefined {
  return MOCK_TESTS_DATA.find(t => t.id === id)
}
