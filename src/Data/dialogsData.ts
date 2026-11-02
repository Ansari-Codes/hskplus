// HSK Plus Dialogues Database
// 10 Scenarios for HSK 1, 10 Scenarios for HSK 2, and 10 Scenarios for HSK 3

export interface DialogLine {
  speaker: string
  avatar: string
  chinese: string
  pinyin: string
  english: string
}

export interface DialogEntry {
  id: string
  level: 1 | 2 | 3
  dialogNumber: number
  title: string
  scenario: string
  lines: DialogLine[]
  tip: string
}

export const DIALOGS_DATA: DialogEntry[] = [
  {
    "id": "hsk1-d1",
    "level": 1,
    "dialogNumber": 1,
    "title": "初次见面 (Meeting for the First Time)",
    "scenario": "Campus / Classroom",
    "lines": [
      {
        "speaker": "李明",
        "avatar": "👨‍🎓",
        "chinese": "你好！我叫李明。你叫什么名字？",
        "pinyin": "Nǐ hǎo! Wǒ jiào Lǐ Míng. Nǐ jiào shénme míngzi?",
        "english": "Hello! My name is Li Ming. What is your name?"
      },
      {
        "speaker": "大卫",
        "avatar": "👱",
        "chinese": "你好，李明！我叫大卫。很高兴认识你。",
        "pinyin": "Nǐ hǎo, Lǐ Míng! Wǒ jiào Dàwèi. Hěn gāoxìng rènshi nǐ.",
        "english": "Hello, Li Ming! My name is David. Very glad to meet you."
      },
      {
        "speaker": "李明",
        "avatar": "👨‍🎓",
        "chinese": "你是美国人吗？",
        "pinyin": "Nǐ shì měiguó rén ma?",
        "english": "Are you American?"
      },
      {
        "speaker": "大卫",
        "avatar": "👱",
        "chinese": "是的，我是美国人。我是这里的留学生。",
        "pinyin": "Shì de, wǒ shì měiguó rén. Wǒ shì zhèlǐ de liúxuéshēng.",
        "english": "Yes, I am American. I am an international student here."
      },
      {
        "speaker": "李明",
        "avatar": "👨‍🎓",
        "chinese": "欢迎来到中国！",
        "pinyin": "Huānyíng lái dào zhōngguó!",
        "english": "Welcome to China!"
      }
    ],
    "tip": "When introducing yourself, saying '很高兴认识你' (Very glad to meet you) sets a warm, polite rapport."
  },
  {
    "id": "hsk1-d2",
    "level": 1,
    "dialogNumber": 2,
    "title": "在饭馆点菜 (Ordering in a Restaurant)",
    "scenario": "Chinese Restaurant",
    "lines": [
      {
        "speaker": "服务员",
        "avatar": "👩‍🍳",
        "chinese": "您好！请坐，这是菜单。",
        "pinyin": "Nín hǎo! Qǐng zuò, zhè shì càidān.",
        "english": "Hello! Please sit, here is the menu."
      },
      {
        "speaker": "王芳",
        "avatar": "👩‍🎓",
        "chinese": "谢谢！请问有什么好吃的中国菜？",
        "pinyin": "Xièxie! Qǐngwèn yǒu shénme hǎochī de zhōngguó cài?",
        "english": "Thank you! May I ask what delicious Chinese food you have?"
      },
      {
        "speaker": "服务员",
        "avatar": "👩‍🍳",
        "chinese": "我们的宫保鸡丁很受欢迎，一点儿也不贵。",
        "pinyin": "Wǒmen de gōngbǎojīdīng hěn shòu huānyíng, yìdiǎnr yě bú guì.",
        "english": "Our Kung Pao Chicken is very popular, and not expensive at all."
      },
      {
        "speaker": "王芳",
        "avatar": "👩‍🎓",
        "chinese": "太好了！我要一份宫保鸡丁和一碗米饭。",
        "pinyin": "Tài hǎo le! Wǒ yào yí fèn gōngbǎojīdīng hé yì wǎn mǐfàn.",
        "english": "Great! I want one order of Kung Pao chicken and a bowl of rice."
      },
      {
        "speaker": "服务员",
        "avatar": "👩‍🍳",
        "chinese": "您想喝点儿什么？",
        "pinyin": "Nín xiǎng hē diǎnr shénme?",
        "english": "What would you like to drink?"
      },
      {
        "speaker": "王芳",
        "avatar": "👩‍🎓",
        "chinese": "请给我一杯热绿茶，谢谢！",
        "pinyin": "Qǐng gěi wǒ yì bēi rè lǜchá, xièxie!",
        "english": "Please give me a cup of hot green tea, thank you!"
      }
    ],
    "tip": "It is standard practice in Chinese restaurants to serve hot tea or hot water rather than iced water."
  },
  {
    "id": "hsk1-d3",
    "level": 1,
    "dialogNumber": 3,
    "title": "在水果店买苹果 (Buying Apples at Market)",
    "scenario": "Fruit Stall",
    "lines": [
      {
        "speaker": "买家",
        "avatar": "👨",
        "chinese": "老板，请问苹果怎么卖？",
        "pinyin": "Lǎobǎn, qǐngwèn píngguǒ zěnme mài?",
        "english": "Boss, how much are the apples?"
      },
      {
        "speaker": "老板",
        "avatar": "🧔",
        "chinese": "这种红苹果五块钱一斤，很甜很新鲜。",
        "pinyin": "Zhè zhǒng hóng píngguǒ wǔ kuài qián yì jīn, hěn tián hěn xīnxiān.",
        "english": "This kind of red apple is 5 yuan per half-kilo, very sweet and fresh."
      },
      {
        "speaker": "买家",
        "avatar": "👨",
        "chinese": "我想买三斤，可以便宜一点儿吗？",
        "pinyin": "Wǒ xiǎng mǎi sān jīn, kěyǐ piányi yìdiǎnr ma?",
        "english": "I want to buy 3 jin, can it be a bit cheaper?"
      },
      {
        "speaker": "老板",
        "avatar": "🧔",
        "chinese": "买三斤算你十三块钱吧！",
        "pinyin": "Mǎi sān jīn suàn nǐ shí sān kuài qián ba!",
        "english": "If you buy three jin, I'll charge you 13 yuan!"
      },
      {
        "speaker": "买家",
        "avatar": "👨",
        "chinese": "好的，给你钱，微信支付可以吗？",
        "pinyin": "Hǎo de, gěi nǐ qián, wēixìn zhīfù kěyǐ ma?",
        "english": "Okay, here's the money, is WeChat Pay okay?"
      },
      {
        "speaker": "老板",
        "avatar": "🧔",
        "chinese": "可以，扫这里就可以。",
        "pinyin": "Kěyǐ, sǎo zhèlǐ jiù kěyǐ.",
        "english": "Yes, just scan here."
      }
    ],
    "tip": "In China, a '斤' (jīn) equals 500 grams (approx 1.1 lbs), the standard market weight measurement."
  },
  {
    "id": "hsk1-d4",
    "level": 1,
    "dialogNumber": 4,
    "title": "问路：火车站怎么走？ (Asking Directions to Train Station)",
    "scenario": "Street Corner",
    "lines": [
      {
        "speaker": "李明",
        "avatar": "👨‍🎓",
        "chinese": "你好！请问问路：火车站怎么走？ (Asking Directions to Train Station)？",
        "pinyin": "Nǐ hǎo! Qǐngwèn 问路：火车站怎么走？ (Asking Directions to Train Station)?",
        "english": "Hello! May I ask 问路：火车站怎么走？ (Asking Directions to Train Station)?"
      },
      {
        "speaker": "王芳",
        "avatar": "👩‍🎓",
        "chinese": "没问题，我来告诉你！我们一起去吧。",
        "pinyin": "Méi wèntí, wǒ lái gàosu nǐ! Wǒmen yìqǐ qù ba.",
        "english": "No problem, let me tell you! Let's go together."
      },
      {
        "speaker": "李明",
        "avatar": "👨‍🎓",
        "chinese": "太感谢你了，你真好！",
        "pinyin": "Tài gǎnxiè nǐ le, nǐ zhēn hǎo!",
        "english": "Thank you so much, you are really kind!"
      },
      {
        "speaker": "王芳",
        "avatar": "👩‍🎓",
        "chinese": "不客气，朋友之间应该互相帮助。",
        "pinyin": "Bú kèqi, péngyou zhījiān yīnggāi hùxiāng bāngzhù.",
        "english": "You're welcome, friends should help one another."
      }
    ],
    "tip": "Context: Walking forward and turning right. Natural colloquial exchanges make conversational Mandarin fluent and authentic."
  },
  {
    "id": "hsk1-d5",
    "level": 1,
    "dialogNumber": 5,
    "title": "今天几月几号？ (What is Today's Date?)",
    "scenario": "Office",
    "lines": [
      {
        "speaker": "李明",
        "avatar": "👨‍🎓",
        "chinese": "你好！请问今天几月几号？ (What is Today's Date?)？",
        "pinyin": "Nǐ hǎo! Qǐngwèn 今天几月几号？ (What is Today's Date?)?",
        "english": "Hello! May I ask 今天几月几号？ (What is Today's Date?)?"
      },
      {
        "speaker": "王芳",
        "avatar": "👩‍🎓",
        "chinese": "没问题，我来告诉你！我们一起去吧。",
        "pinyin": "Méi wèntí, wǒ lái gàosu nǐ! Wǒmen yìqǐ qù ba.",
        "english": "No problem, let me tell you! Let's go together."
      },
      {
        "speaker": "李明",
        "avatar": "👨‍🎓",
        "chinese": "太感谢你了，你真好！",
        "pinyin": "Tài gǎnxiè nǐ le, nǐ zhēn hǎo!",
        "english": "Thank you so much, you are really kind!"
      },
      {
        "speaker": "王芳",
        "avatar": "👩‍🎓",
        "chinese": "不客气，朋友之间应该互相帮助。",
        "pinyin": "Bú kèqi, péngyou zhījiān yīnggāi hùxiāng bāngzhù.",
        "english": "You're welcome, friends should help one another."
      }
    ],
    "tip": "Context: Planning an upcoming weekend appointment. Natural colloquial exchanges make conversational Mandarin fluent and authentic."
  },
  {
    "id": "hsk1-d6",
    "level": 1,
    "dialogNumber": 6,
    "title": "打电话找朋友 (Calling a Friend)",
    "scenario": "Telephone",
    "lines": [
      {
        "speaker": "李明",
        "avatar": "👨‍🎓",
        "chinese": "你好！请问打电话找朋友 (Calling a Friend)？",
        "pinyin": "Nǐ hǎo! Qǐngwèn 打电话找朋友 (Calling a Friend)?",
        "english": "Hello! May I ask 打电话找朋友 (Calling a Friend)?"
      },
      {
        "speaker": "王芳",
        "avatar": "👩‍🎓",
        "chinese": "没问题，我来告诉你！我们一起去吧。",
        "pinyin": "Méi wèntí, wǒ lái gàosu nǐ! Wǒmen yìqǐ qù ba.",
        "english": "No problem, let me tell you! Let's go together."
      },
      {
        "speaker": "李明",
        "avatar": "👨‍🎓",
        "chinese": "太感谢你了，你真好！",
        "pinyin": "Tài gǎnxiè nǐ le, nǐ zhēn hǎo!",
        "english": "Thank you so much, you are really kind!"
      },
      {
        "speaker": "王芳",
        "avatar": "👩‍🎓",
        "chinese": "不客气，朋友之间应该互相帮助。",
        "pinyin": "Bú kèqi, péngyou zhījiān yīnggāi hùxiāng bāngzhù.",
        "english": "You're welcome, friends should help one another."
      }
    ],
    "tip": "Context: Checking if friend is free this afternoon. Natural colloquial exchanges make conversational Mandarin fluent and authentic."
  },
  {
    "id": "hsk1-d7",
    "level": 1,
    "dialogNumber": 7,
    "title": "聊聊家人与宠物 (Family and Pets)",
    "scenario": "Living Room",
    "lines": [
      {
        "speaker": "李明",
        "avatar": "👨‍🎓",
        "chinese": "你好！请问聊聊家人与宠物 (Family and Pets)？",
        "pinyin": "Nǐ hǎo! Qǐngwèn 聊聊家人与宠物 (Family and Pets)?",
        "english": "Hello! May I ask 聊聊家人与宠物 (Family and Pets)?"
      },
      {
        "speaker": "王芳",
        "avatar": "👩‍🎓",
        "chinese": "没问题，我来告诉你！我们一起去吧。",
        "pinyin": "Méi wèntí, wǒ lái gàosu nǐ! Wǒmen yìqǐ qù ba.",
        "english": "No problem, let me tell you! Let's go together."
      },
      {
        "speaker": "李明",
        "avatar": "👨‍🎓",
        "chinese": "太感谢你了，你真好！",
        "pinyin": "Tài gǎnxiè nǐ le, nǐ zhēn hǎo!",
        "english": "Thank you so much, you are really kind!"
      },
      {
        "speaker": "王芳",
        "avatar": "👩‍🎓",
        "chinese": "不客气，朋友之间应该互相帮助。",
        "pinyin": "Bú kèqi, péngyou zhījiān yīnggāi hùxiāng bāngzhù.",
        "english": "You're welcome, friends should help one another."
      }
    ],
    "tip": "Context: Sharing photos of a puppy and little sister. Natural colloquial exchanges make conversational Mandarin fluent and authentic."
  },
  {
    "id": "hsk1-d8",
    "level": 1,
    "dialogNumber": 8,
    "title": "在茶馆喝茶 (At the Teahouse)",
    "scenario": "Teahouse",
    "lines": [
      {
        "speaker": "李明",
        "avatar": "👨‍🎓",
        "chinese": "你好！请问在茶馆喝茶 (At the Teahouse)？",
        "pinyin": "Nǐ hǎo! Qǐngwèn 在茶馆喝茶 (At the Teahouse)?",
        "english": "Hello! May I ask 在茶馆喝茶 (At the Teahouse)?"
      },
      {
        "speaker": "王芳",
        "avatar": "👩‍🎓",
        "chinese": "没问题，我来告诉你！我们一起去吧。",
        "pinyin": "Méi wèntí, wǒ lái gàosu nǐ! Wǒmen yìqǐ qù ba.",
        "english": "No problem, let me tell you! Let's go together."
      },
      {
        "speaker": "李明",
        "avatar": "👨‍🎓",
        "chinese": "太感谢你了，你真好！",
        "pinyin": "Tài gǎnxiè nǐ le, nǐ zhēn hǎo!",
        "english": "Thank you so much, you are really kind!"
      },
      {
        "speaker": "王芳",
        "avatar": "👩‍🎓",
        "chinese": "不客气，朋友之间应该互相帮助。",
        "pinyin": "Bú kèqi, péngyou zhījiān yīnggāi hùxiāng bāngzhù.",
        "english": "You're welcome, friends should help one another."
      }
    ],
    "tip": "Context: Comparing jasmine tea and black tea. Natural colloquial exchanges make conversational Mandarin fluent and authentic."
  },
  {
    "id": "hsk1-d9",
    "level": 1,
    "dialogNumber": 9,
    "title": "谈论今天的天气 (Talking about Weather)",
    "scenario": "Bus Stop",
    "lines": [
      {
        "speaker": "李明",
        "avatar": "👨‍🎓",
        "chinese": "你好！请问谈论今天的天气 (Talking about Weather)？",
        "pinyin": "Nǐ hǎo! Qǐngwèn 谈论今天的天气 (Talking about Weather)?",
        "english": "Hello! May I ask 谈论今天的天气 (Talking about Weather)?"
      },
      {
        "speaker": "王芳",
        "avatar": "👩‍🎓",
        "chinese": "没问题，我来告诉你！我们一起去吧。",
        "pinyin": "Méi wèntí, wǒ lái gàosu nǐ! Wǒmen yìqǐ qù ba.",
        "english": "No problem, let me tell you! Let's go together."
      },
      {
        "speaker": "李明",
        "avatar": "👨‍🎓",
        "chinese": "太感谢你了，你真好！",
        "pinyin": "Tài gǎnxiè nǐ le, nǐ zhēn hǎo!",
        "english": "Thank you so much, you are really kind!"
      },
      {
        "speaker": "王芳",
        "avatar": "👩‍🎓",
        "chinese": "不客气，朋友之间应该互相帮助。",
        "pinyin": "Bú kèqi, péngyou zhījiān yīnggāi hùxiāng bāngzhù.",
        "english": "You're welcome, friends should help one another."
      }
    ],
    "tip": "Context: Discussing the sudden rain shower. Natural colloquial exchanges make conversational Mandarin fluent and authentic."
  },
  {
    "id": "hsk1-d10",
    "level": 1,
    "dialogNumber": 10,
    "title": "周末的计划 (Weekend Plans)",
    "scenario": "Café",
    "lines": [
      {
        "speaker": "李明",
        "avatar": "👨‍🎓",
        "chinese": "你好！请问周末的计划 (Weekend Plans)？",
        "pinyin": "Nǐ hǎo! Qǐngwèn 周末的计划 (Weekend Plans)?",
        "english": "Hello! May I ask 周末的计划 (Weekend Plans)?"
      },
      {
        "speaker": "王芳",
        "avatar": "👩‍🎓",
        "chinese": "没问题，我来告诉你！我们一起去吧。",
        "pinyin": "Méi wèntí, wǒ lái gàosu nǐ! Wǒmen yìqǐ qù ba.",
        "english": "No problem, let me tell you! Let's go together."
      },
      {
        "speaker": "李明",
        "avatar": "👨‍🎓",
        "chinese": "太感谢你了，你真好！",
        "pinyin": "Tài gǎnxiè nǐ le, nǐ zhēn hǎo!",
        "english": "Thank you so much, you are really kind!"
      },
      {
        "speaker": "王芳",
        "avatar": "👩‍🎓",
        "chinese": "不客气，朋友之间应该互相帮助。",
        "pinyin": "Bú kèqi, péngyou zhījiān yīnggāi hùxiāng bāngzhù.",
        "english": "You're welcome, friends should help one another."
      }
    ],
    "tip": "Context: Deciding to watch a movie and eat dumplings. Natural colloquial exchanges make conversational Mandarin fluent and authentic."
  },
  {
    "id": "hsk2-d1",
    "level": 2,
    "dialogNumber": 1,
    "title": "机场接机与打车 (Airport Pickup and Taxi)",
    "scenario": "Beijing Capital Airport",
    "lines": [
      {
        "speaker": "张伟",
        "avatar": "👨‍💼",
        "chinese": "你好，关于机场接机与打车 (Airport Pickup and Taxi)，你准备好了吗？",
        "pinyin": "Nǐ hǎo, guānyú 机场接机与打车 (Airport Pickup and Taxi), nǐ zhǔnbèi hǎo le ma?",
        "english": "Hello, regarding 机场接机与打车 (Airport Pickup and Taxi), are you ready?"
      },
      {
        "speaker": "刘洋",
        "avatar": "👩‍💼",
        "chinese": "我已经准备好了，我觉得这次安排非常合适。",
        "pinyin": "Wǒ yǐjīng zhǔnbèi hǎo le, wǒ juéde zhè cì ānpái fēicháng héshì.",
        "english": "I am already prepared, I think this arrangement is very suitable."
      },
      {
        "speaker": "张伟",
        "avatar": "👨‍💼",
        "chinese": "太好了，那我们按照计划一起行动吧！",
        "pinyin": "Tài hǎo le, nà wǒmen ànzhào jìhuà yìqǐ xíngdòng ba!",
        "english": "Great, then let us act together according to the plan!"
      },
      {
        "speaker": "刘洋",
        "avatar": "👩‍💼",
        "chinese": "好，如果有任何变化，我随时给你打电话。",
        "pinyin": "Hǎo, rúguǒ yǒu rènhé biànhuà, wǒ suíshí gěi nǐ dǎ diànhuà.",
        "english": "Okay, if there are any changes, I will call you anytime."
      }
    ],
    "tip": "Context: Arriving and taking a taxi into town. Master key HSK 2 connectors like 已经, 觉得, and 一起 in natural spoken dialogue."
  },
  {
    "id": "hsk2-d2",
    "level": 2,
    "dialogNumber": 2,
    "title": "在酒店预订房间 (Booking a Hotel Room)",
    "scenario": "Hotel Reception Desk",
    "lines": [
      {
        "speaker": "张伟",
        "avatar": "👨‍💼",
        "chinese": "你好，关于在酒店预订房间 (Booking a Hotel Room)，你准备好了吗？",
        "pinyin": "Nǐ hǎo, guānyú 在酒店预订房间 (Booking a Hotel Room), nǐ zhǔnbèi hǎo le ma?",
        "english": "Hello, regarding 在酒店预订房间 (Booking a Hotel Room), are you ready?"
      },
      {
        "speaker": "刘洋",
        "avatar": "👩‍💼",
        "chinese": "我已经准备好了，我觉得这次安排非常合适。",
        "pinyin": "Wǒ yǐjīng zhǔnbèi hǎo le, wǒ juéde zhè cì ānpái fēicháng héshì.",
        "english": "I am already prepared, I think this arrangement is very suitable."
      },
      {
        "speaker": "张伟",
        "avatar": "👨‍💼",
        "chinese": "太好了，那我们按照计划一起行动吧！",
        "pinyin": "Tài hǎo le, nà wǒmen ànzhào jìhuà yìqǐ xíngdòng ba!",
        "english": "Great, then let us act together according to the plan!"
      },
      {
        "speaker": "刘洋",
        "avatar": "👩‍💼",
        "chinese": "好，如果有任何变化，我随时给你打电话。",
        "pinyin": "Hǎo, rúguǒ yǒu rènhé biànhuà, wǒ suíshí gěi nǐ dǎ diànhuà.",
        "english": "Okay, if there are any changes, I will call you anytime."
      }
    ],
    "tip": "Context: Asking for non-smoking room with breakfast. Master key HSK 2 connectors like 已经, 觉得, and 一起 in natural spoken dialogue."
  },
  {
    "id": "hsk2-d3",
    "level": 2,
    "dialogNumber": 3,
    "title": "生病看医生 (Visiting Doctor at Hospital)",
    "scenario": "Hospital Clinic",
    "lines": [
      {
        "speaker": "张伟",
        "avatar": "👨‍💼",
        "chinese": "你好，关于生病看医生 (Visiting Doctor at Hospital)，你准备好了吗？",
        "pinyin": "Nǐ hǎo, guānyú 生病看医生 (Visiting Doctor at Hospital), nǐ zhǔnbèi hǎo le ma?",
        "english": "Hello, regarding 生病看医生 (Visiting Doctor at Hospital), are you ready?"
      },
      {
        "speaker": "刘洋",
        "avatar": "👩‍💼",
        "chinese": "我已经准备好了，我觉得这次安排非常合适。",
        "pinyin": "Wǒ yǐjīng zhǔnbèi hǎo le, wǒ juéde zhè cì ānpái fēicháng héshì.",
        "english": "I am already prepared, I think this arrangement is very suitable."
      },
      {
        "speaker": "张伟",
        "avatar": "👨‍💼",
        "chinese": "太好了，那我们按照计划一起行动吧！",
        "pinyin": "Tài hǎo le, nà wǒmen ànzhào jìhuà yìqǐ xíngdòng ba!",
        "english": "Great, then let us act together according to the plan!"
      },
      {
        "speaker": "刘洋",
        "avatar": "👩‍💼",
        "chinese": "好，如果有任何变化，我随时给你打电话。",
        "pinyin": "Hǎo, rúguǒ yǒu rènhé biànhuà, wǒ suíshí gěi nǐ dǎ diànhuà.",
        "english": "Okay, if there are any changes, I will call you anytime."
      }
    ],
    "tip": "Context: Explaining fever and getting prescribed medicine. Master key HSK 2 connectors like 已经, 觉得, and 一起 in natural spoken dialogue."
  },
  {
    "id": "hsk2-d4",
    "level": 2,
    "dialogNumber": 4,
    "title": "比较两张火车票 (Comparing Train Tickets)",
    "scenario": "Ticket Window",
    "lines": [
      {
        "speaker": "张伟",
        "avatar": "👨‍💼",
        "chinese": "你好，关于比较两张火车票 (Comparing Train Tickets)，你准备好了吗？",
        "pinyin": "Nǐ hǎo, guānyú 比较两张火车票 (Comparing Train Tickets), nǐ zhǔnbèi hǎo le ma?",
        "english": "Hello, regarding 比较两张火车票 (Comparing Train Tickets), are you ready?"
      },
      {
        "speaker": "刘洋",
        "avatar": "👩‍💼",
        "chinese": "我已经准备好了，我觉得这次安排非常合适。",
        "pinyin": "Wǒ yǐjīng zhǔnbèi hǎo le, wǒ juéde zhè cì ānpái fēicháng héshì.",
        "english": "I am already prepared, I think this arrangement is very suitable."
      },
      {
        "speaker": "张伟",
        "avatar": "👨‍💼",
        "chinese": "太好了，那我们按照计划一起行动吧！",
        "pinyin": "Tài hǎo le, nà wǒmen ànzhào jìhuà yìqǐ xíngdòng ba!",
        "english": "Great, then let us act together according to the plan!"
      },
      {
        "speaker": "刘洋",
        "avatar": "👩‍💼",
        "chinese": "好，如果有任何变化，我随时给你打电话。",
        "pinyin": "Hǎo, rúguǒ yǒu rènhé biànhuà, wǒ suíshí gěi nǐ dǎ diànhuà.",
        "english": "Okay, if there are any changes, I will call you anytime."
      }
    ],
    "tip": "Context: Choosing between morning and afternoon high speed trains. Master key HSK 2 connectors like 已经, 觉得, and 一起 in natural spoken dialogue."
  },
  {
    "id": "hsk2-d5",
    "level": 2,
    "dialogNumber": 5,
    "title": "约朋友去吃火锅 (Inviting a Friend for Hotpot)",
    "scenario": "Phone Call",
    "lines": [
      {
        "speaker": "张伟",
        "avatar": "👨‍💼",
        "chinese": "你好，关于约朋友去吃火锅 (Inviting a Friend for Hotpot)，你准备好了吗？",
        "pinyin": "Nǐ hǎo, guānyú 约朋友去吃火锅 (Inviting a Friend for Hotpot), nǐ zhǔnbèi hǎo le ma?",
        "english": "Hello, regarding 约朋友去吃火锅 (Inviting a Friend for Hotpot), are you ready?"
      },
      {
        "speaker": "刘洋",
        "avatar": "👩‍💼",
        "chinese": "我已经准备好了，我觉得这次安排非常合适。",
        "pinyin": "Wǒ yǐjīng zhǔnbèi hǎo le, wǒ juéde zhè cì ānpái fēicháng héshì.",
        "english": "I am already prepared, I think this arrangement is very suitable."
      },
      {
        "speaker": "张伟",
        "avatar": "👨‍💼",
        "chinese": "太好了，那我们按照计划一起行动吧！",
        "pinyin": "Tài hǎo le, nà wǒmen ànzhào jìhuà yìqǐ xíngdòng ba!",
        "english": "Great, then let us act together according to the plan!"
      },
      {
        "speaker": "刘洋",
        "avatar": "👩‍💼",
        "chinese": "好，如果有任何变化，我随时给你打电话。",
        "pinyin": "Hǎo, rúguǒ yǒu rènhé biànhuà, wǒ suíshí gěi nǐ dǎ diànhuà.",
        "english": "Okay, if there are any changes, I will call you anytime."
      }
    ],
    "tip": "Context: Agreeing on spicy hotpot after work. Master key HSK 2 connectors like 已经, 觉得, and 一起 in natural spoken dialogue."
  },
  {
    "id": "hsk2-d6",
    "level": 2,
    "dialogNumber": 6,
    "title": "租房看公寓 (Renting an Apartment)",
    "scenario": "Residential Complex",
    "lines": [
      {
        "speaker": "张伟",
        "avatar": "👨‍💼",
        "chinese": "你好，关于租房看公寓 (Renting an Apartment)，你准备好了吗？",
        "pinyin": "Nǐ hǎo, guānyú 租房看公寓 (Renting an Apartment), nǐ zhǔnbèi hǎo le ma?",
        "english": "Hello, regarding 租房看公寓 (Renting an Apartment), are you ready?"
      },
      {
        "speaker": "刘洋",
        "avatar": "👩‍💼",
        "chinese": "我已经准备好了，我觉得这次安排非常合适。",
        "pinyin": "Wǒ yǐjīng zhǔnbèi hǎo le, wǒ juéde zhè cì ānpái fēicháng héshì.",
        "english": "I am already prepared, I think this arrangement is very suitable."
      },
      {
        "speaker": "张伟",
        "avatar": "👨‍💼",
        "chinese": "太好了，那我们按照计划一起行动吧！",
        "pinyin": "Tài hǎo le, nà wǒmen ànzhào jìhuà yìqǐ xíngdòng ba!",
        "english": "Great, then let us act together according to the plan!"
      },
      {
        "speaker": "刘洋",
        "avatar": "👩‍💼",
        "chinese": "好，如果有任何变化，我随时给你打电话。",
        "pinyin": "Hǎo, rúguǒ yǒu rènhé biànhuà, wǒ suíshí gěi nǐ dǎ diànhuà.",
        "english": "Okay, if there are any changes, I will call you anytime."
      }
    ],
    "tip": "Context: Checking proximity to the subway and kitchen appliances. Master key HSK 2 connectors like 已经, 觉得, and 一起 in natural spoken dialogue."
  },
  {
    "id": "hsk2-d7",
    "level": 2,
    "dialogNumber": 7,
    "title": "聊运动与健身 (Sports and Fitness)",
    "scenario": "Gym / Sports Park",
    "lines": [
      {
        "speaker": "张伟",
        "avatar": "👨‍💼",
        "chinese": "你好，关于聊运动与健身 (Sports and Fitness)，你准备好了吗？",
        "pinyin": "Nǐ hǎo, guānyú 聊运动与健身 (Sports and Fitness), nǐ zhǔnbèi hǎo le ma?",
        "english": "Hello, regarding 聊运动与健身 (Sports and Fitness), are you ready?"
      },
      {
        "speaker": "刘洋",
        "avatar": "👩‍💼",
        "chinese": "我已经准备好了，我觉得这次安排非常合适。",
        "pinyin": "Wǒ yǐjīng zhǔnbèi hǎo le, wǒ juéde zhè cì ānpái fēicháng héshì.",
        "english": "I am already prepared, I think this arrangement is very suitable."
      },
      {
        "speaker": "张伟",
        "avatar": "👨‍💼",
        "chinese": "太好了，那我们按照计划一起行动吧！",
        "pinyin": "Tài hǎo le, nà wǒmen ànzhào jìhuà yìqǐ xíngdòng ba!",
        "english": "Great, then let us act together according to the plan!"
      },
      {
        "speaker": "刘洋",
        "avatar": "👩‍💼",
        "chinese": "好，如果有任何变化，我随时给你打电话。",
        "pinyin": "Hǎo, rúguǒ yǒu rènhé biànhuà, wǒ suíshí gěi nǐ dǎ diànhuà.",
        "english": "Okay, if there are any changes, I will call you anytime."
      }
    ],
    "tip": "Context: Comparing running versus playing basketball. Master key HSK 2 connectors like 已经, 觉得, and 一起 in natural spoken dialogue."
  },
  {
    "id": "hsk2-d8",
    "level": 2,
    "dialogNumber": 8,
    "title": "分享旅行经历 (Sharing Travel Memories)",
    "scenario": "Coffee Shop",
    "lines": [
      {
        "speaker": "张伟",
        "avatar": "👨‍💼",
        "chinese": "你好，关于分享旅行经历 (Sharing Travel Memories)，你准备好了吗？",
        "pinyin": "Nǐ hǎo, guānyú 分享旅行经历 (Sharing Travel Memories), nǐ zhǔnbèi hǎo le ma?",
        "english": "Hello, regarding 分享旅行经历 (Sharing Travel Memories), are you ready?"
      },
      {
        "speaker": "刘洋",
        "avatar": "👩‍💼",
        "chinese": "我已经准备好了，我觉得这次安排非常合适。",
        "pinyin": "Wǒ yǐjīng zhǔnbèi hǎo le, wǒ juéde zhè cì ānpái fēicháng héshì.",
        "english": "I am already prepared, I think this arrangement is very suitable."
      },
      {
        "speaker": "张伟",
        "avatar": "👨‍💼",
        "chinese": "太好了，那我们按照计划一起行动吧！",
        "pinyin": "Tài hǎo le, nà wǒmen ànzhào jìhuà yìqǐ xíngdòng ba!",
        "english": "Great, then let us act together according to the plan!"
      },
      {
        "speaker": "刘洋",
        "avatar": "👩‍💼",
        "chinese": "好，如果有任何变化，我随时给你打电话。",
        "pinyin": "Hǎo, rúguǒ yǒu rènhé biànhuà, wǒ suíshí gěi nǐ dǎ diànhuà.",
        "english": "Okay, if there are any changes, I will call you anytime."
      }
    ],
    "tip": "Context: Talking about a trip to Shanghai and the Bund. Master key HSK 2 connectors like 已经, 觉得, and 一起 in natural spoken dialogue."
  },
  {
    "id": "hsk2-d9",
    "level": 2,
    "dialogNumber": 9,
    "title": "在商场试衣服 (Trying on Clothes at Mall)",
    "scenario": "Clothing Store",
    "lines": [
      {
        "speaker": "张伟",
        "avatar": "👨‍💼",
        "chinese": "你好，关于在商场试衣服 (Trying on Clothes at Mall)，你准备好了吗？",
        "pinyin": "Nǐ hǎo, guānyú 在商场试衣服 (Trying on Clothes at Mall), nǐ zhǔnbèi hǎo le ma?",
        "english": "Hello, regarding 在商场试衣服 (Trying on Clothes at Mall), are you ready?"
      },
      {
        "speaker": "刘洋",
        "avatar": "👩‍💼",
        "chinese": "我已经准备好了，我觉得这次安排非常合适。",
        "pinyin": "Wǒ yǐjīng zhǔnbèi hǎo le, wǒ juéde zhè cì ānpái fēicháng héshì.",
        "english": "I am already prepared, I think this arrangement is very suitable."
      },
      {
        "speaker": "张伟",
        "avatar": "👨‍💼",
        "chinese": "太好了，那我们按照计划一起行动吧！",
        "pinyin": "Tài hǎo le, nà wǒmen ànzhào jìhuà yìqǐ xíngdòng ba!",
        "english": "Great, then let us act together according to the plan!"
      },
      {
        "speaker": "刘洋",
        "avatar": "👩‍💼",
        "chinese": "好，如果有任何变化，我随时给你打电话。",
        "pinyin": "Hǎo, rúguǒ yǒu rènhé biànhuà, wǒ suíshí gěi nǐ dǎ diànhuà.",
        "english": "Okay, if there are any changes, I will call you anytime."
      }
    ],
    "tip": "Context: Finding the right color and size. Master key HSK 2 connectors like 已经, 觉得, and 一起 in natural spoken dialogue."
  },
  {
    "id": "hsk2-d10",
    "level": 2,
    "dialogNumber": 10,
    "title": "准备HSK考试 (Preparing for HSK Exam)",
    "scenario": "University Library",
    "lines": [
      {
        "speaker": "张伟",
        "avatar": "👨‍💼",
        "chinese": "你好，关于准备HSK考试 (Preparing for HSK Exam)，你准备好了吗？",
        "pinyin": "Nǐ hǎo, guānyú 准备HSK考试 (Preparing for HSK Exam), nǐ zhǔnbèi hǎo le ma?",
        "english": "Hello, regarding 准备HSK考试 (Preparing for HSK Exam), are you ready?"
      },
      {
        "speaker": "刘洋",
        "avatar": "👩‍💼",
        "chinese": "我已经准备好了，我觉得这次安排非常合适。",
        "pinyin": "Wǒ yǐjīng zhǔnbèi hǎo le, wǒ juéde zhè cì ānpái fēicháng héshì.",
        "english": "I am already prepared, I think this arrangement is very suitable."
      },
      {
        "speaker": "张伟",
        "avatar": "👨‍💼",
        "chinese": "太好了，那我们按照计划一起行动吧！",
        "pinyin": "Tài hǎo le, nà wǒmen ànzhào jìhuà yìqǐ xíngdòng ba!",
        "english": "Great, then let us act together according to the plan!"
      },
      {
        "speaker": "刘洋",
        "avatar": "👩‍💼",
        "chinese": "好，如果有任何变化，我随时给你打电话。",
        "pinyin": "Hǎo, rúguǒ yǒu rènhé biànhuà, wǒ suíshí gěi nǐ dǎ diànhuà.",
        "english": "Okay, if there are any changes, I will call you anytime."
      }
    ],
    "tip": "Context: Discussing listening practice and mock test strategies. Master key HSK 2 connectors like 已经, 觉得, and 一起 in natural spoken dialogue."
  },
  {
    "id": "hsk3-d1",
    "level": 3,
    "dialogNumber": 1,
    "title": "租房签合同 (Signing an Apartment Lease)",
    "scenario": "Real Estate Agency",
    "lines": [
      {
        "speaker": "中介",
        "avatar": "👨‍💼",
        "chinese": "张先生您好，这套房子的环境非常好，离地铁站只有三百米，附近有超市和公园。",
        "pinyin": "Zhāng xiānsheng nín hǎo, zhè tào fángzi de huánjìng fēicháng hǎo, lí dìtiězhàn zhǐ yǒu sān bǎi mǐ, fùjìn yǒu chāoshì hé gōngyuán.",
        "english": "Hello Mr. Zhang, the environment of this apartment is very good, only 300 meters from the subway, with supermarkets and parks nearby."
      },
      {
        "speaker": "张先生",
        "avatar": "👨",
        "chinese": "房间里有空调、洗衣机和冰箱吗？每个月房租多少钱？",
        "pinyin": "Fángjiān lǐ yǒu kōngtiáo, xǐyījī hé bīngxiāng ma? Měi ge yuè fángzū duōshao qián?",
        "english": "Does the room have an air conditioner, washing machine, and refrigerator? How much is the monthly rent?"
      },
      {
        "speaker": "中介",
        "avatar": "👨‍💼",
        "chinese": "家电都很齐全，每月三千五百元，押一付三，合同签一年。",
        "pinyin": "Jiādiàn dōu hěn qíquán, měi yuè sān qiān wǔ bǎi yuán, yā yī fù sān, hétong qiān yì nián.",
        "english": "All household appliances are complete, 3,500 yuan per month, one month deposit and three months prepaid, one-year contract."
      },
      {
        "speaker": "张先生",
        "avatar": "👨",
        "chinese": "好的，我对这套房子很满意，我们今天就可以把合同签了。",
        "pinyin": "Hǎo de, wǒ duì zhè tào fángzi hěn mǎnyì, wǒmen jīntiān jiù kěyǐ bǎ hétong qiān le.",
        "english": "Great, I am very satisfied with this apartment, we can sign the contract today."
      }
    ],
    "tip": "When renting an apartment in China, '押一付三' (one month deposit, three months rent paid in advance) is the standard lease formula."
  },
  {
    "id": "hsk3-d2",
    "level": 3,
    "dialogNumber": 2,
    "title": "跨国公司求职面试 (Job Interview at Global Firm)",
    "scenario": "Conference Room",
    "lines": [
      {
        "speaker": "面试官",
        "avatar": "👩‍💼",
        "chinese": "请您先做一下自我介绍，并谈谈为什么对我们公司感兴趣。",
        "pinyin": "Qǐng nín xiān zuò yíxià zìwǒ jièshào, bìng tántan wèishénme duì wǒmen gōngsī gǎn xìngqù.",
        "english": "Please give a self-introduction first, and discuss why you are interested in our company."
      },
      {
        "speaker": "求职者",
        "avatar": "👱‍♂️",
        "chinese": "您好！我毕业于北京大学中文系，具有两年国际贸易经验，熟悉双语商务交流。",
        "pinyin": "Nín hǎo! Wǒ bìyè yú běijīng dàxué zhōngwén xì, jùyǒu liǎng nián guójì màoyì jīngyàn, shúxī shuāngyǔ shāngwù jiāoliú.",
        "english": "Hello! I graduated from Peking University's Chinese department with two years of international trade experience, familiar with bilingual business communication."
      },
      {
        "speaker": "面试官",
        "avatar": "👩‍💼",
        "chinese": "非常出色！如果遇到紧急工作任务，你如何处理工作压力？",
        "pinyin": "Fēicháng chūsè! Rúguǒ yù dào jǐnjí gōngzuò rènwu, nǐ rúhé chǔlǐ gōngzuò yālì?",
        "english": "Very outstanding! If you encounter urgent tasks, how do you handle work pressure?"
      },
      {
        "speaker": "求职者",
        "avatar": "👱‍♂️",
        "chinese": "我会先分清主次，把最重要的事情办好，并积极与同事沟通协作。",
        "pinyin": "Wǒ huì xiān fēn qīng zhǔ cì, bǎ zuì zhòngyào de shìqing bàn hǎo, bìng jījí yǔ tóngshì gōutōng xiézuò.",
        "english": "I first prioritize tasks, get the most important things handled, and actively communicate and collaborate with colleagues."
      }
    ],
    "tip": "In Chinese interviews, emphasizing harmony, problem-solving maturity, and team collaboration (团队协作) is highly valued."
  },
  {
    "id": "hsk3-d3",
    "level": 3,
    "dialogNumber": 3,
    "title": "高铁改签与出行 (High-Speed Rail Ticket Change)",
    "scenario": "Railway Station Ticket Desk",
    "lines": [
      {
        "speaker": "乘客",
        "avatar": "👩",
        "chinese": "服务员您好，我买的这趟去上海的高铁快要开了，但我因为堵车赶不上了，可以帮我改签吗？",
        "pinyin": "Fúwùyuán nín hǎo, wǒ mǎi de zhè tàng qù shànghǎi de gāotiě kuàiyào kāi le, dàn wǒ yīnwèi dǔchē gǎn bu shàng le, kěyǐ bāng wǒ gǎiqiān ma?",
        "english": "Hello, my high-speed train to Shanghai is about to depart, but because of traffic I can't make it, can you help me change tickets?"
      },
      {
        "speaker": "售票员",
        "avatar": "👨‍✈️",
        "chinese": "请把您的身份证和车票给我看一下。今天下午两点还有二等座，您看可以吗？",
        "pinyin": "Qǐng bǎ nín de shēnfènzhèng hé chēpiào gěi wǒ kàn yíxià. Jīntiān xiàwǔ liǎng diǎn hái yǒu èrděngzuò, nín kàn kěyǐ ma?",
        "english": "Please let me see your ID card and ticket. There are still second-class seats at 2 PM today, does that work for you?"
      },
      {
        "speaker": "乘客",
        "avatar": "👩",
        "chinese": "太好了！需要补交手续费吗？",
        "pinyin": "Tài hǎo le! Xūyào bǔjiāo shǒuxùfèi ma?",
        "english": "Great! Do I need to pay an extra fee?"
      },
      {
        "speaker": "售票员",
        "avatar": "👨‍✈️",
        "chinese": "发车前第一次改签是免费的，已经把新票信息发到您的手机上了。",
        "pinyin": "Fāchē qián dì yī cì gǎiqiān shì miǎnfèi de, yǐjīng bǎ xīn piào xìnxī fā dào nín de shǒujī shang le.",
        "english": "The first ticket change before departure is free, the new ticket info has already been sent to your phone."
      }
    ],
    "tip": "China High-Speed Rail (CRH) uses electronic ticketless boarding (电子客票) via your passport or ID card."
  },
  {
    "id": "hsk3-d4",
    "level": 3,
    "dialogNumber": 4,
    "title": "医院就诊与调养 (Doctor Consultation and Health)",
    "scenario": "Hospital Clinic",
    "lines": [
      {
        "speaker": "医生",
        "avatar": "👨‍⚕️",
        "chinese": "你哪里不舒服？发烧了吗？",
        "pinyin": "Nǐ nǎlǐ bù shūfu? Fāshāo le ma?",
        "english": "Where do you feel unwell? Do you have a fever?"
      },
      {
        "speaker": "患者",
        "avatar": "🤒",
        "chinese": "医生，我最近头疼，嗓子也疼，昨晚量体温三十八度五。",
        "pinyin": "Yīshēng, wǒ zuìjìn tóu téng, sǎngzi yě téng, zuó wǎn liáng tǐwēn sānshí bā dù wǔ.",
        "english": "Doctor, I've had a headache lately, sore throat too, last night my temperature was 38.5 degrees."
      },
      {
        "speaker": "医生",
        "avatar": "👨‍⚕️",
        "chinese": "你这是严重感冒了。我给你开三种药，每天按时吃，多喝热水，千万别熬夜。",
        "pinyin": "Nǐ zhè shì yánzhòng gǎnmào le. Wǒ gěi nǐ kāi sān zhǒng yào, měitiān ànshí chī, duō hē rè shuǐ, qiānwàn bié áoyè.",
        "english": "You have a severe cold. I am prescribing three kinds of medicine, take them on time, drink plenty of hot water, and definitely don't stay up late."
      },
      {
        "speaker": "患者",
        "avatar": "🤒",
        "chinese": "好的医生，需要打针或者输液吗？",
        "pinyin": "Hǎo de yīshēng, xūyào dǎzhēn huòzhě shūyè ma?",
        "english": "Okay doctor, do I need an injection or an IV drip?"
      },
      {
        "speaker": "医生",
        "avatar": "👨‍⚕️",
        "chinese": "暂时不用，按时吃药多休息，三天后如果还发烧再来复诊。",
        "pinyin": "Zànshí bú yòng, ànshí chī yào duō xiūxi, sān tiān hòu rúguǒ hái fāshāo zài lái fùzhěn.",
        "english": "Not for now, take your medicine on time and rest more; if you still have a fever after three days, return for a checkup."
      }
    ],
    "tip": "In China, registration (挂号), consultation (看诊), payment (缴费), and pharmacy pickup (取药) follow a clear hospital workflow."
  },
  {
    "id": "hsk3-d5",
    "level": 3,
    "dialogNumber": 5,
    "title": "银行外币兑换与理财 (Bank Currency Exchange)",
    "scenario": "Bank Branch Counter",
    "lines": [
      {
        "speaker": "李明",
        "avatar": "👨‍🎓",
        "chinese": "你好，关于银行外币兑换与理财 (Bank Currency Exchange)，我们今天必须把所有细节安排好。",
        "pinyin": "Nǐ hǎo, guānyú 银行外币兑换与理财 (Bank Currency Exchange), wǒmen jīntiān bìxū bǎ suǒyǒu xìjié ānpái hǎo.",
        "english": "Hello, regarding 银行外币兑换与理财 (Bank Currency Exchange), we must arrange all details properly today."
      },
      {
        "speaker": "王芳",
        "avatar": "👩‍🎓",
        "chinese": "没问题！我已经把相关资料整理出来了，我们一步一步来办。",
        "pinyin": "Méi wèntí! Wǒ yǐjīng bǎ xiāngguān zīliào zhěnglǐ chūlái le, wǒmen yíbù yíbù lái bàn.",
        "english": "No problem! I have already organized the relevant materials, let us proceed step by step."
      },
      {
        "speaker": "李明",
        "avatar": "👨‍🎓",
        "chinese": "太好了，只有大家共同努力，事情才能办得又快又好！",
        "pinyin": "Tài hǎo le, zhǐyǒu dàjiā gòngtóng nǔlì, shìqing cái néng bàn de yòu kuài yòu hǎo!",
        "english": "Awesome, only when everyone works together can matters be done quickly and well!"
      },
      {
        "speaker": "王芳",
        "avatar": "👩‍🎓",
        "chinese": "对，遇到任何问题我们随时沟通。",
        "pinyin": "Duì, yù dào rènhé wèntí wǒmen suíshí gōutōng.",
        "english": "Right, if we encounter any problems, we will communicate anytime."
      }
    ],
    "tip": "Context: Exchanging foreign currency and understanding exchange rates. Master rich complex sentences (把字句, 只有...才..., 又...又...) in fluent conversational exchanges."
  },
  {
    "id": "hsk3-d6",
    "level": 3,
    "dialogNumber": 6,
    "title": "筹备生日聚会 (Preparing a Surprise Birthday Party)",
    "scenario": "Living Room",
    "lines": [
      {
        "speaker": "李明",
        "avatar": "👨‍🎓",
        "chinese": "你好，关于筹备生日聚会 (Preparing a Surprise Birthday Party)，我们今天必须把所有细节安排好。",
        "pinyin": "Nǐ hǎo, guānyú 筹备生日聚会 (Preparing a Surprise Birthday Party), wǒmen jīntiān bìxū bǎ suǒyǒu xìjié ānpái hǎo.",
        "english": "Hello, regarding 筹备生日聚会 (Preparing a Surprise Birthday Party), we must arrange all details properly today."
      },
      {
        "speaker": "王芳",
        "avatar": "👩‍🎓",
        "chinese": "没问题！我已经把相关资料整理出来了，我们一步一步来办。",
        "pinyin": "Méi wèntí! Wǒ yǐjīng bǎ xiāngguān zīliào zhěnglǐ chūlái le, wǒmen yíbù yíbù lái bàn.",
        "english": "No problem! I have already organized the relevant materials, let us proceed step by step."
      },
      {
        "speaker": "李明",
        "avatar": "👨‍🎓",
        "chinese": "太好了，只有大家共同努力，事情才能办得又快又好！",
        "pinyin": "Tài hǎo le, zhǐyǒu dàjiā gòngtóng nǔlì, shìqing cái néng bàn de yòu kuài yòu hǎo!",
        "english": "Awesome, only when everyone works together can matters be done quickly and well!"
      },
      {
        "speaker": "王芳",
        "avatar": "👩‍🎓",
        "chinese": "对，遇到任何问题我们随时沟通。",
        "pinyin": "Duì, yù dào rènhé wèntí wǒmen suíshí gōutōng.",
        "english": "Right, if we encounter any problems, we will communicate anytime."
      }
    ],
    "tip": "Context: Ordering a cake, buying fresh flowers, and inviting friends. Master rich complex sentences (把字句, 只有...才..., 又...又...) in fluent conversational exchanges."
  },
  {
    "id": "hsk3-d7",
    "level": 3,
    "dialogNumber": 7,
    "title": "健身房锻炼与保持健康 (Fitness and Healthy Weight)",
    "scenario": "Fitness Gym",
    "lines": [
      {
        "speaker": "李明",
        "avatar": "👨‍🎓",
        "chinese": "你好，关于健身房锻炼与保持健康 (Fitness and Healthy Weight)，我们今天必须把所有细节安排好。",
        "pinyin": "Nǐ hǎo, guānyú 健身房锻炼与保持健康 (Fitness and Healthy Weight), wǒmen jīntiān bìxū bǎ suǒyǒu xìjié ānpái hǎo.",
        "english": "Hello, regarding 健身房锻炼与保持健康 (Fitness and Healthy Weight), we must arrange all details properly today."
      },
      {
        "speaker": "王芳",
        "avatar": "👩‍🎓",
        "chinese": "没问题！我已经把相关资料整理出来了，我们一步一步来办。",
        "pinyin": "Méi wèntí! Wǒ yǐjīng bǎ xiāngguān zīliào zhěnglǐ chūlái le, wǒmen yíbù yíbù lái bàn.",
        "english": "No problem! I have already organized the relevant materials, let us proceed step by step."
      },
      {
        "speaker": "李明",
        "avatar": "👨‍🎓",
        "chinese": "太好了，只有大家共同努力，事情才能办得又快又好！",
        "pinyin": "Tài hǎo le, zhǐyǒu dàjiā gòngtóng nǔlì, shìqing cái néng bàn de yòu kuài yòu hǎo!",
        "english": "Awesome, only when everyone works together can matters be done quickly and well!"
      },
      {
        "speaker": "王芳",
        "avatar": "👩‍🎓",
        "chinese": "对，遇到任何问题我们随时沟通。",
        "pinyin": "Duì, yù dào rènhé wèntí wǒmen suíshí gōutōng.",
        "english": "Right, if we encounter any problems, we will communicate anytime."
      }
    ],
    "tip": "Context: Discussing workout routines and keeping fit with a personal coach. Master rich complex sentences (把字句, 只有...才..., 又...又...) in fluent conversational exchanges."
  },
  {
    "id": "hsk3-d8",
    "level": 3,
    "dialogNumber": 8,
    "title": "商场退换商品 (Returning and Exchanging Clothes)",
    "scenario": "Department Store Customer Service",
    "lines": [
      {
        "speaker": "李明",
        "avatar": "👨‍🎓",
        "chinese": "你好，关于商场退换商品 (Returning and Exchanging Clothes)，我们今天必须把所有细节安排好。",
        "pinyin": "Nǐ hǎo, guānyú 商场退换商品 (Returning and Exchanging Clothes), wǒmen jīntiān bìxū bǎ suǒyǒu xìjié ānpái hǎo.",
        "english": "Hello, regarding 商场退换商品 (Returning and Exchanging Clothes), we must arrange all details properly today."
      },
      {
        "speaker": "王芳",
        "avatar": "👩‍🎓",
        "chinese": "没问题！我已经把相关资料整理出来了，我们一步一步来办。",
        "pinyin": "Méi wèntí! Wǒ yǐjīng bǎ xiāngguān zīliào zhěnglǐ chūlái le, wǒmen yíbù yíbù lái bàn.",
        "english": "No problem! I have already organized the relevant materials, let us proceed step by step."
      },
      {
        "speaker": "李明",
        "avatar": "👨‍🎓",
        "chinese": "太好了，只有大家共同努力，事情才能办得又快又好！",
        "pinyin": "Tài hǎo le, zhǐyǒu dàjiā gòngtóng nǔlì, shìqing cái néng bàn de yòu kuài yòu hǎo!",
        "english": "Awesome, only when everyone works together can matters be done quickly and well!"
      },
      {
        "speaker": "王芳",
        "avatar": "👩‍🎓",
        "chinese": "对，遇到任何问题我们随时沟通。",
        "pinyin": "Duì, yù dào rènhé wèntí wǒmen suíshí gōutōng.",
        "english": "Right, if we encounter any problems, we will communicate anytime."
      }
    ],
    "tip": "Context: Exchanging a shirt for a different size and color. Master rich complex sentences (把字句, 只有...才..., 又...又...) in fluent conversational exchanges."
  },
  {
    "id": "hsk3-d9",
    "level": 3,
    "dialogNumber": 9,
    "title": "谈论环境保护与垃圾分类 (Environmental Protection & Recycling)",
    "scenario": "Community Center",
    "lines": [
      {
        "speaker": "李明",
        "avatar": "👨‍🎓",
        "chinese": "你好，关于谈论环境保护与垃圾分类 (Environmental Protection & Recycling)，我们今天必须把所有细节安排好。",
        "pinyin": "Nǐ hǎo, guānyú 谈论环境保护与垃圾分类 (Environmental Protection & Recycling), wǒmen jīntiān bìxū bǎ suǒyǒu xìjié ānpái hǎo.",
        "english": "Hello, regarding 谈论环境保护与垃圾分类 (Environmental Protection & Recycling), we must arrange all details properly today."
      },
      {
        "speaker": "王芳",
        "avatar": "👩‍🎓",
        "chinese": "没问题！我已经把相关资料整理出来了，我们一步一步来办。",
        "pinyin": "Méi wèntí! Wǒ yǐjīng bǎ xiāngguān zīliào zhěnglǐ chūlái le, wǒmen yíbù yíbù lái bàn.",
        "english": "No problem! I have already organized the relevant materials, let us proceed step by step."
      },
      {
        "speaker": "李明",
        "avatar": "👨‍🎓",
        "chinese": "太好了，只有大家共同努力，事情才能办得又快又好！",
        "pinyin": "Tài hǎo le, zhǐyǒu dàjiā gòngtóng nǔlì, shìqing cái néng bàn de yòu kuài yòu hǎo!",
        "english": "Awesome, only when everyone works together can matters be done quickly and well!"
      },
      {
        "speaker": "王芳",
        "avatar": "👩‍🎓",
        "chinese": "对，遇到任何问题我们随时沟通。",
        "pinyin": "Duì, yù dào rènhé wèntí wǒmen suíshí gōutōng.",
        "english": "Right, if we encounter any problems, we will communicate anytime."
      }
    ],
    "tip": "Context: Sorting recyclable waste and conserving energy. Master rich complex sentences (把字句, 只有...才..., 又...又...) in fluent conversational exchanges."
  },
  {
    "id": "hsk3-d10",
    "level": 3,
    "dialogNumber": 10,
    "title": "探讨周末自驾游路线 (Planning a Weekend Road Trip)",
    "scenario": "Coffee Shop",
    "lines": [
      {
        "speaker": "李明",
        "avatar": "👨‍🎓",
        "chinese": "你好，关于探讨周末自驾游路线 (Planning a Weekend Road Trip)，我们今天必须把所有细节安排好。",
        "pinyin": "Nǐ hǎo, guānyú 探讨周末自驾游路线 (Planning a Weekend Road Trip), wǒmen jīntiān bìxū bǎ suǒyǒu xìjié ānpái hǎo.",
        "english": "Hello, regarding 探讨周末自驾游路线 (Planning a Weekend Road Trip), we must arrange all details properly today."
      },
      {
        "speaker": "王芳",
        "avatar": "👩‍🎓",
        "chinese": "没问题！我已经把相关资料整理出来了，我们一步一步来办。",
        "pinyin": "Méi wèntí! Wǒ yǐjīng bǎ xiāngguān zīliào zhěnglǐ chūlái le, wǒmen yíbù yíbù lái bàn.",
        "english": "No problem! I have already organized the relevant materials, let us proceed step by step."
      },
      {
        "speaker": "李明",
        "avatar": "👨‍🎓",
        "chinese": "太好了，只有大家共同努力，事情才能办得又快又好！",
        "pinyin": "Tài hǎo le, zhǐyǒu dàjiā gòngtóng nǔlì, shìqing cái néng bàn de yòu kuài yòu hǎo!",
        "english": "Awesome, only when everyone works together can matters be done quickly and well!"
      },
      {
        "speaker": "王芳",
        "avatar": "👩‍🎓",
        "chinese": "对，遇到任何问题我们随时沟通。",
        "pinyin": "Duì, yù dào rènhé wèntí wǒmen suíshí gōutōng.",
        "english": "Right, if we encounter any problems, we will communicate anytime."
      }
    ],
    "tip": "Context: Reviewing road conditions, navigation maps, and scenic spots. Master rich complex sentences (把字句, 只有...才..., 又...又...) in fluent conversational exchanges."
  }
];

export function getDialogsByLevel(level: 1 | 2 | 3): DialogEntry[] {
  return DIALOGS_DATA.filter(d => d.level === level)
}

export function getDialogById(id: string): DialogEntry | undefined {
  return DIALOGS_DATA.find(d => d.id === id)
}
