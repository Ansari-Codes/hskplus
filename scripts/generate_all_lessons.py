import json

# Comprehensive curriculum aligned with BLCUP HSK Standard Course Textbooks 1, 2, and 3
# HSK 1: 15 Lessons
# HSK 2: 15 Lessons
# HSK 3: 20 Lessons

hsk1_lessons_raw = [
    (1, "你好", "Nǐ hǎo", "Hello!",
     "Master basic Chinese greetings, subject pronouns, initials, finals, and 3rd tone sandhi rules.",
     [{"character": "你", "pinyin": "nǐ", "meaning": "you"}, {"character": "好", "pinyin": "hǎo", "meaning": "good; fine"}, {"character": "您", "pinyin": "nín", "meaning": "you (polite)"}, {"character": "你们", "pinyin": "nǐmen", "meaning": "you (plural)"}, {"character": "对不起", "pinyin": "duìbuqǐ", "meaning": "sorry"}, {"character": "没关系", "pinyin": "méi guānxi", "meaning": "that's all right"}],
     "Pronoun + 好 is the standard greeting format. When two third tones appear together (nǐ + hǎo), the first becomes 2nd tone (ní hǎo).",
     "Polite form 您好 is standard when speaking to elders, teachers, or respected individuals in China."),
    (2, "谢谢你", "Xièxie nǐ", "Thank you!",
     "Express gratitude with 谢谢, respond politely with 不客气, say goodbye with 再见, and master tone sandhi of 不.",
     [{"character": "谢谢", "pinyin": "xièxie", "meaning": "to thank"}, {"character": "不", "pinyin": "bù", "meaning": "not; no"}, {"character": "不客气", "pinyin": "bú kèqi", "meaning": "you're welcome"}, {"character": "再见", "pinyin": "zàijiàn", "meaning": "goodbye"}],
     "When '不' precedes a 4th-tone syllable, it shifts to 2nd tone: 不客气 (bú kèqi).",
     "Saying '再见' literally means 'see you again'."),
    (3, "你叫什么名字", "Nǐ jiào shénme míngzi", "What's your name?",
     "Ask and answer names with 叫, interrogate with 什么, and learn the equational copula 是.",
     [{"character": "叫", "pinyin": "jiào", "meaning": "to be called"}, {"character": "什么", "pinyin": "shénme", "meaning": "what"}, {"character": "名字", "pinyin": "míngzi", "meaning": "name"}, {"character": "我", "pinyin": "wǒ", "meaning": "I; me"}, {"character": "是", "pinyin": "shì", "meaning": "to be"}, {"character": "老师", "pinyin": "lǎoshī", "meaning": "teacher"}, {"character": "学生", "pinyin": "xuésheng", "meaning": "student"}],
     "Subject + 叫 + Name; Subject + 是 + Noun.",
     "Chinese family names are pronounced first, followed by personal given names."),
    (4, "她是我的汉语老师", "Tā shì wǒ de hànyǔ lǎoshī", "She is my Chinese teacher",
     "Use possessive structural particle 的, question pronoun 谁, and state nationalities with 哪国人.",
     [{"character": "她", "pinyin": "tā", "meaning": "she; her"}, {"character": "谁", "pinyin": "shéi", "meaning": "who"}, {"character": "的", "pinyin": "de", "meaning": "possessive particle"}, {"character": "汉语", "pinyin": "hànyǔ", "meaning": "Chinese language"}, {"character": "哪", "pinyin": "nǎ", "meaning": "which"}, {"character": "中国", "pinyin": "zhōngguó", "meaning": "China"}, {"character": "美国", "pinyin": "měiguó", "meaning": "United States"}],
     "Possession pattern: Noun/Pronoun + 的 + Noun (我的书 = my book).",
     "China (中国) translates as 'Middle Kingdom'."),
    (5, "她女儿今年二十岁", "Tā nǚ'ér jīnnián èrshí suì", "Her daughter is 20 years old this year",
     "Count family members with 口, state age with 岁, ask age with 多大, and count numbers up to 100.",
     [{"character": "家", "pinyin": "jiā", "meaning": "family; home"}, {"character": "有", "pinyin": "yǒu", "meaning": "to have"}, {"character": "几", "pinyin": "jǐ", "meaning": "how many (<10)"}, {"character": "口", "pinyin": "kǒu", "meaning": "measure word for family"}, {"character": "女儿", "pinyin": "nǚ'ér", "meaning": "daughter"}, {"character": "岁", "pinyin": "suì", "meaning": "years old"}, {"character": "今年", "pinyin": "jīnnián", "meaning": "this year"}, {"character": "多大", "pinyin": "duō dà", "meaning": "how old"}],
     "Stating age does not require 是: Subject + Number + 岁.",
     "Measure word 口 literally means mouth, representing mouths to feed in agrarian culture."),
    (6, "我会说汉语", "Wǒ huì shuō hànyǔ", "I can speak Chinese",
     "Express acquired abilities with modal verb 会, ask yes-no questions with 吗, and talk about food.",
     [{"character": "会", "pinyin": "huì", "meaning": "can; know how to"}, {"character": "说", "pinyin": "shuō", "meaning": "to speak"}, {"character": "妈妈", "pinyin": "māma", "meaning": "mother"}, {"character": "菜", "pinyin": "cài", "meaning": "dish; vegetable"}, {"character": "很", "pinyin": "hěn", "meaning": "very"}, {"character": "好吃", "pinyin": "hǎochī", "meaning": "delicious"}, {"character": "做", "pinyin": "zuò", "meaning": "to make; to cook"}, {"character": "写", "pinyin": "xiě", "meaning": "to write"}, {"character": "汉字", "pinyin": "hànzì", "meaning": "Chinese characters"}],
     "Modal verb 会 + Action indicates a skill learned through study: 我会做中国菜.",
     "The Chinese culinary art features Eight Great Culinary Traditions."),
    (7, "今天几号", "Jīntiān jǐ hào", "What's the date today?",
     "Express year, month, date, days of the week, and master Chinese temporal sequence (large to small).",
     [{"character": "请问", "pinyin": "qǐngwèn", "meaning": "excuse me; may I ask"}, {"character": "今天", "pinyin": "jīntiān", "meaning": "today"}, {"character": "月", "pinyin": "yuè", "meaning": "month"}, {"character": "号", "pinyin": "hào", "meaning": "day of month"}, {"character": "星期", "pinyin": "xīngqī", "meaning": "week"}, {"character": "昨天", "pinyin": "zuótiān", "meaning": "yesterday"}, {"character": "明天", "pinyin": "míngtiān", "meaning": "tomorrow"}, {"character": "学校", "pinyin": "xuéxiào", "meaning": "school"}, {"character": "看书", "pinyin": "kàn shū", "meaning": "to read"}],
     "Date format: Year + Month + Day + Weekday: 2026年11月1日星期日.",
     "In China, Sunday is 星期日 or 星期天, while Monday through Saturday are numbers 1 to 6."),
    (8, "我想喝茶", "Wǒ xiǎng hē chá", "I'd like some tea",
     "Express desires with 想, use measure words 个, 本, 杯, and discuss prices with 块.",
     [{"character": "想", "pinyin": "xiǎng", "meaning": "would like to"}, {"character": "喝", "pinyin": "hē", "meaning": "to drink"}, {"character": "茶", "pinyin": "chá", "meaning": "tea"}, {"character": "吃", "pinyin": "chī", "meaning": "to eat"}, {"character": "米饭", "pinyin": "mǐfàn", "meaning": "cooked rice"}, {"character": "下午", "pinyin": "xiàwǔ", "meaning": "afternoon"}, {"character": "商店", "pinyin": "shāngdiàn", "meaning": "shop"}, {"character": "买", "pinyin": "mǎi", "meaning": "to buy"}, {"character": "杯子", "pinyin": "bēizi", "meaning": "cup"}, {"character": "多少", "pinyin": "duōshao", "meaning": "how many/how much"}, {"character": "块", "pinyin": "kuài", "meaning": "yuan"}],
     "Numeral + Measure Word + Noun: 一个杯子, 三本书.",
     "Tea drinking has flourished in China for over 4,000 years."),
    (9, "你儿子在哪儿工作", "Nǐ érzi zài nǎr gōngzuò", "Where does your son work?",
     "Use preposition 在 to establish location before action, and identify professions.",
     [{"character": "小", "pinyin": "xiǎo", "meaning": "small"}, {"character": "猫", "pinyin": "māo", "meaning": "cat"}, {"character": "在", "pinyin": "zài", "meaning": "at; in"}, {"character": "哪儿", "pinyin": "nǎr", "meaning": "where"}, {"character": "狗", "pinyin": "gǒu", "meaning": "dog"}, {"character": "椅子", "pinyin": "yǐzi", "meaning": "chair"}, {"character": "下面", "pinyin": "xiàmiàn", "meaning": "under"}, {"character": "工作", "pinyin": "gōngzuò", "meaning": "to work"}, {"character": "儿子", "pinyin": "érzi", "meaning": "son"}, {"character": "医院", "pinyin": "yīyuàn", "meaning": "hospital"}, {"character": "医生", "pinyin": "yīshēng", "meaning": "doctor"}, {"character": "爸爸", "pinyin": "bàba", "meaning": "father"}],
     "Subject + 在 + Location + Verb: 他在医院工作.",
     "Chinese places location before the verb action."),
    (10, "我能坐在这儿吗", "Wǒ néng zuò zài zhèr ma", "Can I sit here?",
     "Express permission with 能, master spatial words 上, 下, 里, and use conjunction 和.",
     [{"character": "桌子", "pinyin": "zhuōzi", "meaning": "table"}, {"character": "上", "pinyin": "shàng", "meaning": "on"}, {"character": "电脑", "pinyin": "diànnǎo", "meaning": "computer"}, {"character": "和", "pinyin": "hé", "meaning": "and"}, {"character": "本", "pinyin": "běn", "meaning": "measure word for books"}, {"character": "里", "pinyin": "lǐ", "meaning": "in"}, {"character": "前面", "pinyin": "qiánmiàn", "meaning": "front"}, {"character": "后面", "pinyin": "hòumiàn", "meaning": "back"}, {"character": "这儿", "pinyin": "zhèr", "meaning": "here"}, {"character": "没有", "pinyin": "méiyǒu", "meaning": "there is not"}, {"character": "能", "pinyin": "néng", "meaning": "can; may"}, {"character": "坐", "pinyin": "zuò", "meaning": "to sit"}],
     "Location postpositions attach directly after nouns: 桌子上, 房间里.",
     "Saying '请坐' is a polite host greeting in Chinese homes."),
    (11, "现在几点", "Xiànzài jǐ diǎn", "What time is it now?",
     "Tell clock time with 点 and 分, discuss daily schedules, and position time adverbs.",
     [{"character": "现在", "pinyin": "xiànzài", "meaning": "now"}, {"character": "点", "pinyin": "diǎn", "meaning": "o'clock"}, {"character": "分", "pinyin": "fēn", "meaning": "minute"}, {"character": "中午", "pinyin": "zhōngwǔ", "meaning": "noon"}, {"character": "吃饭", "pinyin": "chīfàn", "meaning": "to eat a meal"}, {"character": "时候", "pinyin": "shíhou", "meaning": "time; when"}, {"character": "回", "pinyin": "huí", "meaning": "to return"}, {"character": "我们", "pinyin": "wǒmen", "meaning": "we"}, {"character": "电影", "pinyin": "diànyǐng", "meaning": "movie"}, {"character": "住", "pinyin": "zhù", "meaning": "to live"}, {"character": "前", "pinyin": "qián", "meaning": "before"}],
     "Time phrases must precede the verb: 我们五点回家.",
     "Mandarin time of day segments into 早上, 上午, 中午, 下午, 晚上."),
    (12, "明天天气怎么样", "Míngtiān tiānqì zěnmeyàng", "What will the weather be like tomorrow?",
     "Discuss weather with 冷, 热, 下雨, use 太...了, and express likelihood with 会.",
     [{"character": "天气", "pinyin": "tiānqì", "meaning": "weather"}, {"character": "怎么样", "pinyin": "zěnmeyàng", "meaning": "how is it"}, {"character": "太", "pinyin": "tài", "meaning": "too"}, {"character": "热", "pinyin": "rè", "meaning": "hot"}, {"character": "冷", "pinyin": "lěng", "meaning": "cold"}, {"character": "下雨", "pinyin": "xiàyǔ", "meaning": "to rain"}, {"character": "小姐", "pinyin": "xiǎojiě", "meaning": "Miss"}, {"character": "来", "pinyin": "lái", "meaning": "to come"}, {"character": "身体", "pinyin": "shēntǐ", "meaning": "body; health"}, {"character": "爱", "pinyin": "ài", "meaning": "to love"}, {"character": "些", "pinyin": "xiē", "meaning": "some"}, {"character": "水果", "pinyin": "shuǐguǒ", "meaning": "fruit"}, {"character": "水", "pinyin": "shuǐ", "meaning": "water"}],
     "太 + Adj + 了 expresses extreme degree: 太热了！",
     "Chinese culture favors warm beverages ('多喝热水') for health."),
    (13, "他在学做中国菜呢", "Tā zài xué zuò zhōngguó cài ne", "He is learning to cook Chinese food",
     "Express ongoing continuous action with 在...呢, and master phone manners with 喂.",
     [{"character": "喂", "pinyin": "wèi", "meaning": "hello (on phone)"}, {"character": "也", "pinyin": "yě", "meaning": "also"}, {"character": "学习", "pinyin": "xuéxí", "meaning": "to study"}, {"character": "上午", "pinyin": "shàngwǔ", "meaning": "morning"}, {"character": "睡觉", "pinyin": "shuìjiào", "meaning": "to sleep"}, {"character": "电视", "pinyin": "diànshì", "meaning": "television"}, {"character": "喜欢", "pinyin": "xǐhuan", "meaning": "to like"}, {"character": "给", "pinyin": "gěi", "meaning": "to give"}, {"character": "打电话", "pinyin": "dǎ diànhuà", "meaning": "to make a phone call"}],
     "Subject + 在 + Verb + (呢) denotes an ongoing action.",
     "Answering phones in China begins with '喂' (wèi)."),
    (14, "她买了不少衣服", "Tā mǎi le bù shǎo yīfu", "She has bought quite a few clothes",
     "Master aspect particle 了 for completed actions, and use 东西 and 一点儿.",
     [{"character": "东西", "pinyin": "dōngxi", "meaning": "things"}, {"character": "一点儿", "pinyin": "yìdiǎnr", "meaning": "a little"}, {"character": "苹果", "pinyin": "píngguǒ", "meaning": "apple"}, {"character": "看见", "pinyin": "kànjiàn", "meaning": "to see"}, {"character": "先生", "pinyin": "xiānsheng", "meaning": "Mr."}, {"character": "开", "pinyin": "kāi", "meaning": "to drive"}, {"character": "车", "pinyin": "chē", "meaning": "car"}, {"character": "回来", "pinyin": "huílái", "meaning": "to come back"}, {"character": "分钟", "pinyin": "fēnzhōng", "meaning": "minute"}, {"character": "后", "pinyin": "hòu", "meaning": "after"}, {"character": "张", "pinyin": "zhāng", "meaning": "surname Zhang"}, {"character": "衣服", "pinyin": "yīfu", "meaning": "clothes"}, {"character": "漂亮", "pinyin": "piàoliang", "meaning": "beautiful"}, {"character": "啊", "pinyin": "a", "meaning": "modal particle"}, {"character": "少", "pinyin": "shǎo", "meaning": "few; little"}, {"character": "不少", "pinyin": "bù shǎo", "meaning": "quite a few"}],
     "Verb + 了 indicates an action is realized: 我买了一件衣服.",
     "The word 东西 combines East (东) and West (西)."),
    (15, "我是坐飞机来的", "Wǒ shì zuò fēijī lái de", "I came by air",
     "Master the cleft construction 是...的 to emphasize past time, location, or manner of transport.",
     [{"character": "认识", "pinyin": "rènshi", "meaning": "to know"}, {"character": "年", "pinyin": "nián", "meaning": "year"}, {"character": "大学", "pinyin": "dàxué", "meaning": "university"}, {"character": "饭馆", "pinyin": "fànguǎn", "meaning": "restaurant"}, {"character": "出租车", "pinyin": "chūzūchē", "meaning": "taxi"}, {"character": "一起", "pinyin": "yìqǐ", "meaning": "together"}, {"character": "高兴", "pinyin": "gāoxìng", "meaning": "happy"}, {"character": "听", "pinyin": "tīng", "meaning": "to listen"}, {"character": "飞机", "pinyin": "fēijī", "meaning": "airplane"}],
     "Subject + 是 + [Time / Manner / Place] + Verb + 的.",
     "High-speed trains (高铁) and civil flights connect all Chinese provinces.")
]

hsk2_lessons_raw = [
    (1, "九月去北京旅游最好", "Jiǔyuè qù běijīng lǚyóu zuì hǎo", "September is the best time to visit Beijing",
     "Learn superlative 最, expression of opinions with 觉得, and giving reasons with 为什么 / 因为.",
     [{"character": "旅游", "pinyin": "lǚyóu", "meaning": "to travel"}, {"character": "觉得", "pinyin": "juéde", "meaning": "to think; feel"}, {"character": "最", "pinyin": "zuì", "meaning": "most"}, {"character": "为什么", "pinyin": "wèishénme", "meaning": "why"}, {"character": "也", "pinyin": "yě", "meaning": "also"}, {"character": "运动", "pinyin": "yùndòng", "meaning": "sport"}, {"character": "踢足球", "pinyin": "tī zúqiú", "meaning": "play soccer"}, {"character": "一起", "pinyin": "yìqǐ", "meaning": "together"}, {"character": "要", "pinyin": "yào", "meaning": "to want; will"}, {"character": "新", "pinyin": "xīn", "meaning": "new"}, {"character": "新年", "pinyin": "xīnnián", "meaning": "New Year"}, {"character": "它", "pinyin": "tā", "meaning": "it"}, {"character": "眼睛", "pinyin": "yǎnjing", "meaning": "eye"}],
     "最 + Adjective denotes the superlative: 最好 (best), 最大 (biggest).",
     "Autumn in Beijing (金秋) is celebrated for its clear skies and golden foliage."),
    (2, "我每天六点起床", "Wǒ měitiān liù diǎn qǐchuáng", "I get up at six every day",
     "Discuss daily healthy routines, physical exercise with 跑步, and health with 生病 and 药.",
     [{"character": "生病", "pinyin": "shēngbìng", "meaning": "to fall ill"}, {"character": "每", "pinyin": "měi", "meaning": "every"}, {"character": "早上", "pinyin": "zǎoshang", "meaning": "morning"}, {"character": "跑步", "pinyin": "pǎobù", "meaning": "to jog"}, {"character": "起床", "pinyin": "qǐchuáng", "meaning": "to get up"}, {"character": "药", "pinyin": "yào", "meaning": "medicine"}, {"character": "身体", "pinyin": "shēntǐ", "meaning": "health; body"}, {"character": "出院", "pinyin": "chūyuàn", "meaning": "leave hospital"}, {"character": "高", "pinyin": "gāo", "meaning": "tall; high"}, {"character": "米", "pinyin": "mǐ", "meaning": "meter"}, {"character": "知道", "pinyin": "zhīdào", "meaning": "to know"}, {"character": "忙", "pinyin": "máng", "meaning": "busy"}, {"character": "时间", "pinyin": "shíjiān", "meaning": "time"}],
     "'每' (every) is paired with '都': 我每天都跑步.",
     "Morning parks in China are bustling with people of all ages practicing Tai Chi."),
    (3, "左边那个红色的是我的", "Zuǒbiān nà ge hóngsè de shì wǒ de", "The red one on the left is mine",
     "Master colors (红, 白, 黑), the structural particle 的 for noun omission, and alternative questions with 还是.",
     [{"character": "手表", "pinyin": "shǒubiǎo", "meaning": "watch"}, {"character": "千", "pinyin": "qiān", "meaning": "thousand"}, {"character": "报纸", "pinyin": "bàozhǐ", "meaning": "newspaper"}, {"character": "送", "pinyin": "sòng", "meaning": "to deliver; gift"}, {"character": "一下", "pinyin": "yíxià", "meaning": "briefly"}, {"character": "牛奶", "pinyin": "niúnǎi", "meaning": "milk"}, {"character": "房间", "pinyin": "fángjiān", "meaning": "room"}, {"character": "丈夫", "pinyin": "zhàngfu", "meaning": "husband"}, {"character": "旁边", "pinyin": "pángbiān", "meaning": "beside"}, {"character": "真", "pinyin": "zhēn", "meaning": "really"}, {"character": "粉色", "pinyin": "fěnsè", "meaning": "pink"}, {"character": "颜色", "pinyin": "yánsè", "meaning": "color"}, {"character": "左边", "pinyin": "zuǒbiān", "meaning": "left"}, {"character": "红色", "pinyin": "hóngsè", "meaning": "red"}],
     "Adjective + 的 stands for the noun: 红色的 (the red one).",
     "Red symbolizes luck, joy, and prosperity in Chinese culture."),
    (4, "这个工作是他帮我介绍的", "Zhè ge gōngzuò shì tā bāng wǒ jièshào de", "He recommended this job to me",
     "Discuss workplace experiences, introductions with 介绍, and understanding with 懂.",
     [{"character": "生日", "pinyin": "shēngrì", "meaning": "birthday"}, {"character": "快乐", "pinyin": "kuàilè", "meaning": "happy"}, {"character": "给", "pinyin": "gěi", "meaning": "to give"}, {"character": "接", "pinyin": "jiē", "meaning": "to receive"}, {"character": "晚上", "pinyin": "wǎnshang", "meaning": "evening"}, {"character": "问", "pinyin": "wèn", "meaning": "to ask"}, {"character": "非常", "pinyin": "fēicháng", "meaning": "very"}, {"character": "开始", "pinyin": "kāishǐ", "meaning": "to start"}, {"character": "已经", "pinyin": "yǐjīng", "meaning": "already"}, {"character": "长", "pinyin": "cháng", "meaning": "long"}, {"character": "两", "pinyin": "liǎng", "meaning": "two"}, {"character": "帮", "pinyin": "bāng", "meaning": "to help"}, {"character": "介绍", "pinyin": "jièshào", "meaning": "to introduce"}],
     "Resultative complement: 听懂, 看懂.",
     "Networking and introductions (关系) play an important social role in China."),
    (5, "就买这件吧", "Jiù mǎi zhè jiàn ba", "Take this one then",
     "Use modal particle 吧 for suggestions, measure word 件, and discuss shopping.",
     [{"character": "外", "pinyin": "wài", "meaning": "outside"}, {"character": "自行车", "pinyin": "zìxíngchē", "meaning": "bicycle"}, {"character": "羊肉", "pinyin": "yángròu", "meaning": "mutton"}, {"character": "好吃", "pinyin": "hǎochī", "meaning": "delicious"}, {"character": "面条", "pinyin": "miàntiáo", "meaning": "noodles"}, {"character": "打篮球", "pinyin": "dǎ lánqiú", "meaning": "play basketball"}, {"character": "因为", "pinyin": "yīnwèi", "meaning": "because"}, {"character": "所以", "pinyin": "suǒyǐ", "meaning": "therefore"}, {"character": "游泳", "pinyin": "yóuyǒng", "meaning": "swim"}, {"character": "经常", "pinyin": "jīngcháng", "meaning": "often"}, {"character": "公斤", "pinyin": "gōngjīn", "meaning": "kilogram"}],
     "Conjunction pair: 因为……所以……",
     "Noodles are traditionally eaten on birthdays in China to symbolize longevity (长寿面)."),
    (6, "你怎么不吃了", "Nǐ zěnme bù chī le", "Why don't you eat more?",
     "Express surprise with 怎么, discuss health with 身体, and talk about dairy, meat, and eggs.",
     [{"character": "门", "pinyin": "mén", "meaning": "door"}, {"character": "外", "pinyin": "wài", "meaning": "outside"}, {"character": "自行车", "pinyin": "zìxíngchē", "meaning": "bicycle"}, {"character": "羊肉", "pinyin": "yángròu", "meaning": "mutton"}, {"character": "鸡蛋", "pinyin": "jīdàn", "meaning": "egg"}, {"character": "西瓜", "pinyin": "xīguā", "meaning": "watermelon"}],
     "怎么 indicating surprise or inquiry: 你怎么不吃了？",
     "Chinese food culture balances ingredients according to hot (yang) and cooling (yin) properties."),
    (7, "你家离公司远吗", "Nǐ jiā lí gōngsī yuǎn ma", "Is your home far from the company?",
     "Ask directions, measure distance with 离, use 往 (towards), and navigate city streets.",
     [{"character": "教室", "pinyin": "jiàoshì", "meaning": "classroom"}, {"character": "机场", "pinyin": "jīchǎng", "meaning": "airport"}, {"character": "路", "pinyin": "lù", "meaning": "road"}, {"character": "离", "pinyin": "lí", "meaning": "away from"}, {"character": "远", "pinyin": "yuǎn", "meaning": "far"}, {"character": "近", "pinyin": "jìn", "meaning": "near"}, {"character": "快", "pinyin": "kuài", "meaning": "fast"}, {"character": "慢", "pinyin": "màn", "meaning": "slow"}],
     "Distance formula: Place A + 离 + Place B + 很远 / 很近.",
     "Major Chinese university campuses often have North, South, East, and West gates."),
    (8, "让我想想再告诉你", "Ràng wǒ xiǎng xiǎng zài gào su nǐ", "Let me think about it and then I'll tell you",
     "Master causative verb 让, temporal resumption with 再, and softening with 一下.",
     [{"character": "让", "pinyin": "ràng", "meaning": "to let; make"}, {"character": "告诉", "pinyin": "gàosu", "meaning": "to tell"}, {"character": "等", "pinyin": "děng", "meaning": "to wait"}, {"character": "找", "pinyin": "zhǎo", "meaning": "to look for"}, {"character": "事情", "pinyin": "shìqing", "meaning": "affair; matter"}, {"character": "服务员", "pinyin": "fúwùyuán", "meaning": "waiter"}],
     "Causative pattern: A + 让 + B + Action (老师让我回答).",
     "Addressing staff politely in Chinese restaurants as '服务员' is standard."),
    (9, "题太多，我没做完", "Tí tài duō, wǒ méi zuò wán", "There are too many questions, I haven't finished",
     "Use resultative complements (做完, 看见), and discuss test questions with 题 and 错.",
     [{"character": "错", "pinyin": "cuò", "meaning": "wrong"}, {"character": "从", "pinyin": "cóng", "meaning": "from"}, {"character": "跳舞", "pinyin": "tiàowǔ", "meaning": "dance"}, {"character": "第一", "pinyin": "dìyī", "meaning": "first"}, {"character": "希望", "pinyin": "xīwàng", "meaning": "hope"}, {"character": "问题", "pinyin": "wèntí", "meaning": "question"}, {"character": "欢迎", "pinyin": "huānyíng", "meaning": "welcome"}],
     "Resultative complement: 动词 + 完 / 懂 / 见.",
     "Standardized testing in China dates back to the imperial Keju examination system."),
    (10, "别找了，手机在桌子上呢", "Bié zhǎo le, shǒujī zài zhuōzi shang ne", "Stop looking, the phone is on the table",
     "Master negative imperative 别 (don't) and 别...了 (stop doing).",
     [{"character": "别", "pinyin": "bié", "meaning": "don't"}, {"character": "手机", "pinyin": "shǒujī", "meaning": "cellphone"}, {"character": "找", "pinyin": "zhǎo", "meaning": "to seek"}, {"character": "休息", "pinyin": "xiūxi", "meaning": "to rest"}],
     "Imperative prohibition: 别 + Verb!",
     "China is almost entirely cashless via mobile payments (WeChat Pay & Alipay)."),
    (11, "他比我大三岁", "Tā bǐ wǒ dà sān suì", "He is three years older than me",
     "Master the comparative structure 比 with specific quantitative differences.",
     [{"character": "比", "pinyin": "bǐ", "meaning": "than"}, {"character": "唱歌", "pinyin": "chànggē", "meaning": "sing"}, {"character": "男", "pinyin": "nán", "meaning": "male"}, {"character": "女", "pinyin": "nǚ", "meaning": "female"}, {"character": "孩子", "pinyin": "háizi", "meaning": "child"}, {"character": "可能", "pinyin": "kěnéng", "meaning": "maybe"}],
     "Comparative pattern: A + 比 + B + Adjective + Difference.",
     "Table tennis and badminton are national favorite pastimes in China."),
    (12, "你穿得太少了", "Nǐ chuān de tài shǎo le", "You are wearing too little",
     "Master degree complement with 得, describe clothes with 穿, and talk about snow (雪) and sun (晴).",
     [{"character": "得", "pinyin": "de", "meaning": "degree particle"}, {"character": "穿", "pinyin": "chuān", "meaning": "to wear"}, {"character": "晴", "pinyin": "qíng", "meaning": "sunny"}, {"character": "阴", "pinyin": "yīn", "meaning": "overcast"}, {"character": "雪", "pinyin": "xuě", "meaning": "snow"}],
     "Degree complement: Verb + 得 + Adjective (跑得快, 穿得少).",
     "Harbin in northeast China is famous for its winter Ice Festival."),
    (13, "门开着呢", "Mén kāi zhe ne", "The door is open",
     "Learn continuous state aspect marker 着, and describe clothing colors.",
     [{"character": "着", "pinyin": "zhe", "meaning": "aspect marker"}, {"character": "红", "pinyin": "hóng", "meaning": "red"}, {"character": "白", "pinyin": "bái", "meaning": "white"}, {"character": "黑", "pinyin": "hēi", "meaning": "black"}],
     "Verb + 着 describes a continuous static condition: 门开着, 坐着.",
     "Traditional Chinese doors often have red couplets (对联) pasted during Spring Festival."),
    (14, "你看过那个电影吗", "Nǐ kàn guo nà ge diànyǐng ma", "Have you seen that movie?",
     "Master experiential aspect marker 过, and quantify frequency with 次.",
     [{"character": "过", "pinyin": "guò", "meaning": "experiential marker"}, {"character": "次", "pinyin": "cì", "meaning": "times; frequency"}, {"character": "玩", "pinyin": "wán", "meaning": "to play"}, {"character": "晴", "pinyin": "qíng", "meaning": "clear"}],
     "Experiential pattern: Verb + 过 (我去过中国). Negation: 没 + Verb + 过.",
     "Chinese cinema has grown into a major cultural and box office force globally."),
    (15, "新年就要到了", "Xīnnián jiù yào dào le", "The New Year is coming",
     "Express imminent future actions with 快要...了 / 就要...了, and talk about farewells with 送.",
     [{"character": "快要", "pinyin": "kuàiyào", "meaning": "about to"}, {"character": "就要", "pinyin": "jiù yào", "meaning": "soon will"}, {"character": "送", "pinyin": "sòng", "meaning": "to see off"}, {"character": "完", "pinyin": "wán", "meaning": "to finish"}],
     "Imminent future: 快要 / 就要 + Action + 了.",
     "Spring Festival (春节) is the most cherished family reunion holiday in China.")
]

hsk3_lessons_raw = [
    (1, "周末你有什么打算", "Zhōumò nǐ yǒu shénme dǎsuàn", "What's your plan for the weekend?",
     "Talk about weekend plans, express constancy with 一直, and use 复习 and 跟...一样.",
     [{"character": "周末", "pinyin": "zhōumò", "meaning": "weekend"}, {"character": "打算", "pinyin": "dǎsuàn", "meaning": "plan; intend"}, {"character": "一直", "pinyin": "yìzhí", "meaning": "always; all along"}, {"character": "游戏", "pinyin": "yóuxì", "meaning": "game"}, {"character": "作业", "pinyin": "zuòyè", "meaning": "homework"}, {"character": "着急", "pinyin": "zháojí", "meaning": "worried; anxious"}, {"character": "复习", "pinyin": "fùxí", "meaning": "to review"}, {"character": "带", "pinyin": "dài", "meaning": "to bring; take"}, {"character": "地图", "pinyin": "dìtú", "meaning": "map"}, {"character": "搬", "pinyin": "bān", "meaning": "to move"}],
     "Verb + 好 indicates completion to satisfaction: 准备好了; 一直 + Verb indicates continuous persistence.",
     "Weekend excursions (周边游) are popular for Chinese city dwellers visiting nearby nature."),
    (2, "他什么时候回来", "Tā shénme shíhou huílái", "When will he come back?",
     "Master simple directional complements (来 vs 去) with directional motion verbs (上, 下, 进, 出, 回, 过, 起).",
     [{"character": "腿", "pinyin": "tuǐ", "meaning": "leg"}, {"character": "疼", "pinyin": "téng", "meaning": "painful; hurt"}, {"character": "脚", "pinyin": "jiǎo", "meaning": "foot"}, {"character": "树", "pinyin": "shù", "meaning": "tree"}, {"character": "容易", "pinyin": "róngyì", "meaning": "easy"}, {"character": "难", "pinyin": "nán", "meaning": "difficult"}, {"character": "太太", "pinyin": "tàitai", "meaning": "wife; Mrs."}, {"character": "秘书", "pinyin": "mìshū", "meaning": "secretary"}, {"character": "经理", "pinyin": "jīnglǐ", "meaning": "manager"}, {"character": "办公室", "pinyin": "bàngōngshì", "meaning": "office"}],
     "Directional complement: Verb + 来 (towards speaker) / 去 (away from speaker): 进来, 出来, 回来, 出去.",
     "Addressing business professionals with their title (王经理, 张秘书) is customary in China."),
    (3, "桌子上放着一杯咖啡", "Zhuōzi shang fàng zhe yì bēi kāfēi", "There is a cup of coffee on the table",
     "Master sentences of spatial existence (Location + Verb + 着 + Noun) and measure words for vehicles (辆).",
     [{"character": "放", "pinyin": "fàng", "meaning": "to put; place"}, {"character": "半", "pinyin": "bàn", "meaning": "half"}, {"character": "包", "pinyin": "bāo", "meaning": "bag"}, {"character": "鲜花", "pinyin": "xiānhuā", "meaning": "fresh flowers"}, {"character": "条", "pinyin": "tiáo", "meaning": "measure word for pants/skirts"}, {"character": "裤子", "pinyin": "kùzi", "meaning": "trousers"}, {"character": "衬衫", "pinyin": "chènshān", "meaning": "shirt"}, {"character": "元", "pinyin": "yuán", "meaning": "yuan"}, {"character": "辆", "pinyin": "liàng", "meaning": "measure word for vehicles"}],
     "Existence sentence: Location + Verb + 着 + Noun: 墙上挂着一张地图.",
     "Chinese coffee culture has exploded in recent years with domestic and global café brands."),
    (4, "她总是笑着跟客人说话", "Tā zǒngshì xiào zhe gēn kèrén shuōhuà", "She always smiles when talking to customers",
     "Express concomitant manner of action: Verb 1 + 着 + Verb 2, and use 总是 (always).",
     [{"character": "比赛", "pinyin": "bǐsài", "meaning": "match; competition"}, {"character": "照片", "pinyin": "zhàopiàn", "meaning": "photograph"}, {"character": "年级", "pinyin": "niánjí", "meaning": "grade; year"}, {"character": "又", "pinyin": "yòu", "meaning": "again; also"}, {"character": "聪明", "pinyin": "cōngming", "meaning": "clever; smart"}, {"character": "热情", "pinyin": "rèqíng", "meaning": "enthusiastic; warm"}, {"character": "努力", "pinyin": "nǔlì", "meaning": "hardworking"}, {"character": "总是", "pinyin": "zǒngshì", "meaning": "always"}, {"character": "回答", "pinyin": "huídá", "meaning": "to answer"}, {"character": "站", "pinyin": "zhàn", "meaning": "to stand"}],
     "Concomitant manner: V1 + 着 + V2 (笑着说 = speaking with a smile; 站着等 = waiting on one's feet).",
     "Hospitality (热情好客) is deeply valued when hosting guests and customers in China."),
    (5, "我最近越来越胖了", "Wǒ zuìjìn yuè lái yuè pàng le", "I've been getting fatter and fatter lately",
     "Master the developmental progression construction 越来越 + Adjective, and discuss health and fitness.",
     [{"character": "发烧", "pinyin": "fāshāo", "meaning": "to have a fever"}, {"character": "裙子", "pinyin": "qúnzi", "meaning": "skirt; dress"}, {"character": "草", "pinyin": "cǎo", "meaning": "grass"}, {"character": "最近", "pinyin": "zuìjìn", "meaning": "lately; recently"}, {"character": "越", "pinyin": "yuè", "meaning": "more; increasingly"}, {"character": "越来越", "pinyin": "yuè lái yuè", "meaning": "more and more"}, {"character": "照顾", "pinyin": "zhàogu", "meaning": "to look after; care for"}, {"character": "用", "pinyin": "yòng", "meaning": "to use"}, {"character": "感冒", "pinyin": "gǎnmào", "meaning": "catch cold"}, {"character": "季节", "pinyin": "jìjié", "meaning": "season"}, {"character": "当然", "pinyin": "dāngrán", "meaning": "of course"}, {"character": "春", "pinyin": "chūn", "meaning": "spring"}, {"character": "夏", "pinyin": "xià", "meaning": "summer"}, {"character": "秋", "pinyin": "qiū", "meaning": "autumn"}, {"character": "冬", "pinyin": "dōng", "meaning": "winter"}],
     "Increasing degree: 越来越 + Adj / Mental Verb: 汉语越来越流利.",
     "Traditional Chinese seasons are celebrated with 24 Solar Terms (二十四节气)."),
    (6, "怎么突然找不到了", "Zěnme tūrán zhǎo bu dào le", "Why is it suddenly missing?",
     "Master potential complements (Verb + 得/不 + Result): 找不到, 听得懂, 做不完, and use 刚 vs 刚才.",
     [{"character": "眼镜", "pinyin": "yǎnjìng", "meaning": "glasses"}, {"character": "突然", "pinyin": "tūrán", "meaning": "suddenly"}, {"character": "离开", "pinyin": "líkāi", "meaning": "to leave"}, {"character": "清楚", "pinyin": "qīngchu", "meaning": "clear"}, {"character": "刚才", "pinyin": "gāngcái", "meaning": "just now"}, {"character": "帮忙", "pinyin": "bāngmáng", "meaning": "to help"}, {"character": "特别", "pinyin": "tèbié", "meaning": "especially"}, {"character": "讲", "pinyin": "jiǎng", "meaning": "to explain; speak"}, {"character": "明白", "pinyin": "míngbai", "meaning": "clear; understand"}, {"character": "锻炼", "pinyin": "duànliàn", "meaning": "to workout; exercise"}, {"character": "音乐", "pinyin": "yīnyuè", "meaning": "music"}, {"character": "公园", "pinyin": "gōngyuán", "meaning": "park"}, {"character": "聊天", "pinyin": "liáotiān", "meaning": "to chat"}, {"character": "睡着", "pinyin": "shuìzháo", "meaning": "fall asleep"}],
     "Potential complement: Verb + 得/不 + Complement: 找得到 / 找不到, 看得懂 / 看不懂.",
     "Neighborhood fitness parks in Chinese residential zones are hubs for evening strolls and chats."),
    (7, "我跟你一样", "Wǒ gēn nǐ yíyàng", "I am the same as you",
     "Master comparative equality structure: A 跟 B 一样 (+ Adjective) and its negation A 跟 B 不一样.",
     [{"character": "同事", "pinyin": "tóngshì", "meaning": "colleague"}, {"character": "以前", "pinyin": "yǐqián", "meaning": "before; previously"}, {"character": "银行", "pinyin": "yínháng", "meaning": "bank"}, {"character": "久", "pinyin": "jiǔ", "meaning": "for a long time"}, {"character": "感兴趣", "pinyin": "gǎn xìngqù", "meaning": "interested in"}, {"character": "结婚", "pinyin": "jiéhūn", "meaning": "to marry"}, {"character": "欢迎", "pinyin": "huānyíng", "meaning": "welcome"}, {"character": "迟到", "pinyin": "chídào", "meaning": "late"}, {"character": "半", "pinyin": "bàn", "meaning": "half"}, {"character": "接", "pinyin": "jiē", "meaning": "to meet; pick up"}],
     "Equality comparison: A + 跟 + B + 一样 (+ Adj): 这本书跟那本书一样有趣.",
     "Saying '对...感兴趣' (interested in) is standard for discussing hobbies and majors in China."),
    (8, "我去哪儿你就去哪儿", "Wǒ qù nǎr nǐ jiù qù nǎr", "I'll go wherever you go",
     "Master flexible interrogative pronouns in correlative sentences (哪儿...哪儿, 什么...什么, 谁...谁).",
     [{"character": "又", "pinyin": "yòu", "meaning": "again"}, {"character": "满意", "pinyin": "mǎnyì", "meaning": "satisfied"}, {"character": "电梯", "pinyin": "diàntī", "meaning": "elevator"}, {"character": "层", "pinyin": "céng", "meaning": "floor; story"}, {"character": "害怕", "pinyin": "hàipà", "meaning": "afraid; scared"}, {"character": "熊猫", "pinyin": "xióngmāo", "meaning": "panda"}, {"character": "安静", "pinyin": "ānjìng", "meaning": "quiet"}, {"character": "可乐", "pinyin": "kělè", "meaning": "cola"}, {"character": "会儿", "pinyin": "huìr", "meaning": "a moment"}, {"character": "马上", "pinyin": "mǎshàng", "meaning": "immediately"}, {"character": "洗手间", "pinyin": "xǐshǒujiān", "meaning": "restroom"}, {"character": "老", "pinyin": "lǎo", "meaning": "old; experienced"}, {"character": "几乎", "pinyin": "jīhū", "meaning": "almost"}, {"character": "变化", "pinyin": "biànhuà", "meaning": "change"}, {"character": "健康", "pinyin": "jiànkāng", "meaning": "healthy"}, {"character": "重要", "pinyin": "zhòngyào", "meaning": "important"}],
     "Paired question words: 你吃什么我就吃什么 (I will eat whatever you eat).",
     "Giant Pandas (大熊猫) are China's national treasure (国宝)."),
    (9, "她的头发又黑又长", "Tā de tóufa yòu hēi yòu cháng", "Her hair is both black and long",
     "Master correlative conjunction 又...又... describing multiple qualities, and use 虽然...但是... review.",
     [{"character": "中文", "pinyin": "zhōngwén", "meaning": "Chinese"}, {"character": "班", "pinyin": "bān", "meaning": "class"}, {"character": "一样", "pinyin": "yíyàng", "meaning": "same"}, {"character": "最后", "pinyin": "zuìhòu", "meaning": "final; last"}, {"character": "放心", "pinyin": "fàngxīn", "meaning": "at ease"}, {"character": "一定", "pinyin": "yídìng", "meaning": "certainly"}, {"character": "一共", "pinyin": "yígòng", "meaning": "in total"}, {"character": "角", "pinyin": "jiǎo", "meaning": "dime; 0.1 yuan"}, {"character": "分", "pinyin": "fēn", "meaning": "cent; 0.01 yuan"}],
     "Correlative pattern: 又 + Adj 1 + 又 + Adj 2 (又聪明又努力).",
     "Chinese currency divides: 1 元 = 10 角 = 100 分."),
    (10, "数学比历史难多了", "Shùxué bǐ lìshǐ nán duō le", "Math is much harder than history",
     "Express specific extent in comparisons with 得多, 多了, or 一点儿.",
     [{"character": "历史", "pinyin": "lìshǐ", "meaning": "history"}, {"character": "哲学", "pinyin": "zhéxué", "meaning": "philosophy"}, {"character": "音乐", "pinyin": "yīnyuè", "meaning": "music"}, {"character": "体育", "pinyin": "tǐyù", "meaning": "PE; sports"}, {"character": "数学", "pinyin": "shùxué", "meaning": "mathematics"}, {"character": "方便", "pinyin": "fāngbiàn", "meaning": "convenient"}, {"character": "自行车", "pinyin": "zìxíngchē", "meaning": "bicycle"}, {"character": "骑", "pinyin": "qí", "meaning": "to ride"}, {"character": "旧", "pinyin": "jiù", "meaning": "old; worn"}, {"character": "换", "pinyin": "huàn", "meaning": "to change; exchange"}, {"character": "地方", "pinyin": "dìfang", "meaning": "place"}, {"character": "中介", "pinyin": "zhōngjiè", "meaning": "agent"}, {"character": "主要", "pinyin": "zhǔyào", "meaning": "main; primary"}, {"character": "环境", "pinyin": "huánjìng", "meaning": "environment"}, {"character": "附近", "pinyin": "fùjìn", "meaning": "nearby"}],
     "Comparative extent: A + 比 + B + Adj + 得多 / 多了 / 一点儿.",
     "Shared bicycles (共享单车) are widely used for short trips in Chinese cities."),
    (11, "别忘了把空调关了", "Bié wàng le bǎ kōngtiáo guān le", "Don't forget to turn off the air conditioner",
     "Master the pivotal 把-sentence (把字句) for object disposal, handling household appliances.",
     [{"character": "图书馆", "pinyin": "túshūguǎn", "meaning": "library"}, {"character": "借", "pinyin": "jiè", "meaning": "to borrow"}, {"character": "词典", "pinyin": "cídiǎn", "meaning": "dictionary"}, {"character": "还", "pinyin": "huán", "meaning": "to return"}, {"character": "灯", "pinyin": "dēng", "meaning": "lamp; light"}, {"character": "关", "pinyin": "guān", "meaning": "to turn off"}, {"character": "开", "pinyin": "kāi", "meaning": "to turn on"}, {"character": "会议", "pinyin": "huìyì", "meaning": "meeting"}, {"character": "结束", "pinyin": "jiéshù", "meaning": "to finish"}, {"character": "空调", "pinyin": "kōngtiáo", "meaning": "air conditioner"}, {"character": "双", "pinyin": "shuāng", "meaning": "pair"}],
     "把 sentence pattern: Subject + 把 + Object + Verb + other elements (把门关上).",
     "Turning off lights and air conditioning aligns with environmental conservation in China."),
    (12, "把这件衣服洗了", "Bǎ zhè jiàn yīfu xǐ le", "Wash these clothes",
     "Deepen mastery of 把-sentences with resultative completions (洗干净, 放在桌子上).",
     [{"character": "洗", "pinyin": "xǐ", "meaning": "to wash"}, {"character": "干净", "pinyin": "gānjìng", "meaning": "clean"}, {"character": "脏", "pinyin": "zāng", "meaning": "dirty"}, {"character": "杯子", "pinyin": "bēizi", "meaning": "cup"}, {"character": "盘子", "pinyin": "pánzi", "meaning": "plate"}, {"character": "碗", "pinyin": "wǎn", "meaning": "bowl"}, {"character": "筷子", "pinyin": "kuàizi", "meaning": "chopsticks"}, {"character": "擦", "pinyin": "cā", "meaning": "to wipe"}, {"character": "桌子", "pinyin": "zhuōzi", "meaning": "table"}, {"character": "黑板", "pinyin": "hēibǎn", "meaning": "blackboard"}],
     "把 sentence with resultative complement: 把衣服洗干净.",
     "Using chopsticks (筷子) dates back over 3,000 years in Chinese dining culture."),
    (13, "我是走回来的", "Wǒ shì zǒu huílái de", "I walked back",
     "Master compound directional complements (Verb + 跑出来, 走回来, 爬上去).",
     [{"character": "太阳", "pinyin": "tàiyáng", "meaning": "sun"}, {"character": "西", "pinyin": "xī", "meaning": "west"}, {"character": "生气", "pinyin": "shēngqì", "meaning": "angry"}, {"character": "行李箱", "pinyin": "xínglixiāng", "meaning": "suitcase"}, {"character": "自己", "pinyin": "zìjǐ", "meaning": "oneself"}, {"character": "包", "pinyin": "bāo", "meaning": "bag"}, {"character": "发现", "pinyin": "fāxiàn", "meaning": "to discover"}, {"character": "护照", "pinyin": "hùzhào", "meaning": "passport"}, {"character": "起飞", "pinyin": "qǐfēi", "meaning": "take off"}, {"character": "司机", "pinyin": "sījī", "meaning": "driver"}, {"character": "教", "pinyin": "jiāo", "meaning": "to teach"}, {"character": "画", "pinyin": "huà", "meaning": "to paint; draw"}, {"character": "需要", "pinyin": "xūyào", "meaning": "to need"}],
     "Compound directional complement: Action Verb + Direction Verb + 来/去 (跑出去, 拿回来).",
     "China's extensive transportation makes travel with luggage (行李箱) seamless."),
    (14, "你把水果拿出来", "Nǐ bǎ shuǐguǒ ná chūlái", "Bring out the fruit",
     "Combine 把-sentences with compound directional complements: 把 + Object + Verb + 出来/进去.",
     [{"character": "蛋糕", "pinyin": "dàngāo", "meaning": "cake"}, {"character": "铅笔", "pinyin": "qiānbǐ", "meaning": "pencil"}, {"character": "把", "pinyin": "bǎ", "meaning": "handle; hold"}, {"character": "伞", "pinyin": "sǎn", "meaning": "umbrella"}, {"character": "拿", "pinyin": "ná", "meaning": "to take; hold"}, {"character": "出来", "pinyin": "chūlái", "meaning": "come out"}, {"character": "胖", "pinyin": "pàng", "meaning": "fat"}, {"character": "瘦", "pinyin": "shòu", "meaning": "thin"}],
     "把 with compound directional: 主语 + 把 + 宾语 + 动词 + 出来/回去.",
     "Sharing fresh seasonal fruit after dinner is a classic Chinese family tradition."),
    (15, "其他的人都去哪儿了", "Qítā de rén dōu qù nǎr le", "Where did all the other people go?",
     "Master 除了...以外 (都/还) (besides / except), and learn 其他 (other).",
     [{"character": "除了", "pinyin": "chúle", "meaning": "except; besides"}, {"character": "以外", "pinyin": "yǐwài", "meaning": "beyond; except"}, {"character": "其他", "pinyin": "qítā", "meaning": "other"}, {"character": "水平", "pinyin": "shuǐpíng", "meaning": "standard; level"}, {"character": "提高", "pinyin": "tígāo", "meaning": "to improve"}, {"character": "完成", "pinyin": "wánchéng", "meaning": "to complete"}, {"character": "句子", "pinyin": "jùzi", "meaning": "sentence"}],
     "Inclusion vs exclusion: 除了 A 以外，都... (all except A); 除了 A 以外，还... (in addition to A).",
     "Continuous self-improvement (提高水平) is a central cultural virtue in Chinese education."),
    (16, "我现在累得想睡觉", "Wǒ xiànzài lèi de xiǎng shuìjiào", "I'm so tired now that I just want to sleep",
     "Master descriptive clauses introduced by 得: Adjective + 得 + Clause.",
     [{"character": "城市", "pinyin": "chéngshì", "meaning": "city"}, {"character": "如果", "pinyin": "rúguǒ", "meaning": "if"}, {"character": "认为", "pinyin": "rènwéi", "meaning": "to think; consider"}, {"character": "皮鞋", "pinyin": "píxié", "meaning": "leather shoes"}, {"character": "帽子", "pinyin": "màozi", "meaning": "hat"}, {"character": "长", "pinyin": "zhǎng", "meaning": "to grow; look"}, {"character": "可爱", "pinyin": "kě'ài", "meaning": "cute"}, {"character": "米", "pinyin": "mǐ", "meaning": "meter"}, {"character": "公斤", "pinyin": "gōngjīn", "meaning": "kilogram"}],
     "Descriptive clause complement: Adj + 得 + Clause: 他高兴得跳了起来.",
     "Balancing hard work with rest (劳逸结合) is emphasized in contemporary wellness."),
    (17, "谁都有生病的时候", "Shéi dōu yǒu shēngbìng de shíhou", "Everyone gets sick sometimes",
     "Master emphatic universal statements using question words: 谁都, 什么都, 哪儿都.",
     [{"character": "练习", "pinyin": "liànxí", "meaning": "to practice"}, {"character": "认真", "pinyin": "rènzhēn", "meaning": "conscientious"}, {"character": "热情", "pinyin": "rèqíng", "meaning": "warm"}, {"character": "客人", "pinyin": "kèrén", "meaning": "guest"}, {"character": "总是", "pinyin": "zǒngshì", "meaning": "always"}, {"character": "回答", "pinyin": "huídá", "meaning": "to answer"}, {"character": "站", "pinyin": "zhàn", "meaning": "to stand"}],
     "Emphatic universal: 疑问词 + 都/也 + Verb: 谁都知道这件事.",
     "Traditional Chinese Medicine treats prevention as higher than cure (治未病)."),
    (18, "我相信他们会同意的", "Wǒ xiāngxìn tāmen huì tóngyì de", "I believe they will agree",
     "Express conviction and certainty with 是...的, and review 虽然...但是... in formal contexts.",
     [{"character": "同意", "pinyin": "tóngyì", "meaning": "to agree"}, {"character": "相信", "pinyin": "xiāngxìn", "meaning": "to believe"}, {"character": "关于", "pinyin": "guānyú", "meaning": "about; regarding"}, {"character": "决定", "pinyin": "juédìng", "meaning": "to decide"}, {"character": "机会", "pinyin": "jīhuì", "meaning": "opportunity"}, {"character": "国家", "pinyin": "guójiā", "meaning": "country"}],
     "Conveying certainty: 会 + Action + 的: 事情一定会解决的.",
     "Consensus building and respectful agreement (协商) guide Chinese group decision-making."),
    (19, "你没看出来吗", "Nǐ méi kàn chūlái ma", "Didn't you recognize it?",
     "Master extended/metaphorical directional complements: 看出来 (discern), 想起来 (recall), 听出来 (identify).",
     [{"character": "出来", "pinyin": "chūlái", "meaning": "come out; discern"}, {"character": "起来", "pinyin": "qǐlái", "meaning": "start; upward"}, {"character": "下去", "pinyin": "xiàqù", "meaning": "continue on"}, {"character": "声音", "pinyin": "shēngyīn", "meaning": "sound; voice"}, {"character": "特别", "pinyin": "tèbié", "meaning": "special"}],
     "Extended complements: 听出来 (recognize by ear), 想起来 (suddenly remember).",
     "Chinese idiomatic phrases often make clever use of spatial metaphors."),
    (20, "我被他影响了", "Wǒ bèi tā yǐngxiǎng le", "I was influenced by him",
     "Master the standard passive construction with 被 (被字句), and discuss social habits and influences.",
     [{"character": "被", "pinyin": "bèi", "meaning": "passive marker (by)"}, {"character": "影响", "pinyin": "yǐngxiǎng", "meaning": "influence; effect"}, {"character": "经常", "pinyin": "jīngcháng", "meaning": "often"}, {"character": "习惯", "pinyin": "xíguàn", "meaning": "habit; accustomed to"}, {"character": "关系", "pinyin": "guānxi", "meaning": "relationship"}, {"character": "重要", "pinyin": "zhòngyào", "meaning": "important"}],
     "Passive construction: Object + 被 (+ Agent) + Verb + other elements: 蛋糕被弟弟吃了.",
     "The classic idiom 近朱者赤，近墨者黑 reflects the profound influence of companions.")
]

def make_lessons_list(level, raw_data):
    lessons = []
    for num, title, pin, eng, summ, voc, gram, cult in raw_data:
        lid = f"hsk{level}-l{num}"
        lessons.append({
            "id": lid,
            "level": level,
            "lessonNumber": num,
            "title": title,
            "pinyin": pin,
            "english": eng,
            "summary": summ,
            "vocabulary": voc,
            "grammar": [
                {
                    "title": f"Key Grammar in Lesson {num}",
                    "pattern": f"Core Pattern · Lesson {num}",
                    "explanation": gram,
                    "examples": [
                        {"chinese": f"{title}。", "pinyin": f"{pin}.", "english": eng},
                        {"chinese": "我们要认真准备HSK考试。", "pinyin": "Wǒmen yào rènzhēn zhǔnbèi HSK kǎoshì.", "english": "We must prepare earnestly for the HSK examination."}
                    ]
                }
            ],
            "dialogue": [
                {"speaker": "李明", "avatar": "👨‍🎓", "chinese": f"你好！请问{title}吗？", "pinyin": f"Nǐ hǎo! Qǐngwèn {pin} ma?", "english": f"Hello! May I ask, {eng}?"},
                {"speaker": "王芳", "avatar": "👩‍🎓", "chinese": "对，我完全赞成，大家一起加油！", "pinyin": "Duì, wǒ wánquán zànchéng, dàjiā yìqǐ jiāyóu!", "english": "Right, I completely agree, let us cheer together!"}
            ],
            "culture": cult,
            "exercises": [
                {"question": f"What is the central focus of Lesson {num} '{title}'?", "options": [eng, "Weather forecasting", "Ordering food", "Sports"], "answer": 0, "explanation": f"The textbook lesson title translates to '{eng}'."},
                {"question": "How do you say 'very' or 'often' in standard Mandarin?", "options": ["很 / 经常", "不 / 没", "在 / 离", "最 / 极"], "answer": 0, "explanation": "'很' means very, and '经常' means often."}
            ]
        })
    return lessons

all_h1 = make_lessons_list(1, hsk1_lessons_raw)
all_h2 = make_lessons_list(2, hsk2_lessons_raw)
all_h3 = make_lessons_list(3, hsk3_lessons_raw)
all_lessons = all_h1 + all_h2 + all_h3

print(f'Total Standard Lessons generated: {len(all_lessons)} (H1: {len(all_h1)}, H2: {len(all_h2)}, H3: {len(all_h3)})')

ts_file = '''// HSK Plus Official Standard Lessons Database
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

export const LESSONS_DATA: LessonEntry[] = ''' + json.dumps(all_lessons, ensure_ascii=False, indent=2) + ''';

export function getLessonsByLevel(level: 1 | 2 | 3): LessonEntry[] {
  return LESSONS_DATA.filter(l => l.level === level)
}

export function getLessonById(id: string): LessonEntry | undefined {
  return LESSONS_DATA.find(l => l.id === id)
}

export function getLessonByIndex(level: 1 | 2 | 3, index: number): LessonEntry | undefined {
  return LESSONS_DATA.find(l => l.level === level && l.lessonNumber === index)
}
'''

with open('src/Data/lessonsData.ts', 'w', encoding='utf-8') as f:
    f.write(ts_file)

print('Generated src/Data/lessonsData.ts with all 50 lessons!')
