import json

# Comprehensive curriculum for 30 lessons (15 HSK1 + 15 HSK2)
hsk1_lessons = [
    {
        "id": "hsk1-l1",
        "level": 1,
        "lessonNumber": 1,
        "title": "你好！",
        "pinyin": "Nǐ hǎo!",
        "english": "Hello!",
        "summary": "Master greetings, the three basic personal pronouns (我, 你, 他/她), and basic tone sandhi rules in Mandarin Chinese.",
        "vocabulary": [
            {"character": "你", "pinyin": "nǐ", "meaning": "you"},
            {"character": "好", "pinyin": "hǎo", "meaning": "good; fine; well"},
            {"character": "您", "pinyin": "nín", "meaning": "you (polite form)"},
            {"character": "你们", "pinyin": "nǐmen", "meaning": "you (plural)"},
            {"character": "对不起", "pinyin": "duìbuqǐ", "meaning": "sorry; excuse me"},
            {"character": "没关系", "pinyin": "méi guānxi", "meaning": "that's all right; it doesn't matter"}
        ],
        "grammar": [
            {
                "title": "Basic Greeting '你好' (Nǐ hǎo)",
                "pattern": "Pronoun + 好",
                "explanation": "'你好' is the standard universal greeting in Mandarin. When greeting an elder or superior respectfully, use '您好' (Nín hǎo). For groups, say '你们好' (Nǐmen hǎo).",
                "examples": [
                    {"chinese": "你好！", "pinyin": "Nǐ hǎo!", "english": "Hello!"},
                    {"chinese": "老师，您好！", "pinyin": "Lǎoshī, nín hǎo!", "english": "Teacher, hello!"},
                    {"chinese": "同学们好！", "pinyin": "Tóngxuémen hǎo!", "english": "Hello, classmates!"}
                ]
            },
            {
                "title": "Apologizing with '对不起' and '没关系'",
                "pattern": "A: 对不起！ B: 没关系！",
                "explanation": "When an apology is made with '对不起', the polite and customary response is '没关系' (It's okay / no problem).",
                "examples": [
                    {"chinese": "对不起，我来晚了。", "pinyin": "Duìbuqǐ, wǒ lái wǎn le.", "english": "Sorry, I arrived late."},
                    {"chinese": "没关系，请进。", "pinyin": "Méi guānxi, qǐng jìn.", "english": "It's all right, please come in."}
                ]
            }
        ],
        "dialogue": [
            {"speaker": "李明", "avatar": "👨‍🎓", "chinese": "你好！", "pinyin": "Nǐ hǎo!", "english": "Hello!"},
            {"speaker": "王芳", "avatar": "👩‍🎓", "chinese": "你好！", "pinyin": "Nǐ hǎo!", "english": "Hello!"},
            {"speaker": "李明", "avatar": "👨‍🎓", "chinese": "对不起！", "pinyin": "Duìbuqǐ!", "english": "I'm sorry!"},
            {"speaker": "王芳", "avatar": "👩‍🎓", "chinese": "没关系！", "pinyin": "Méi guānxi!", "english": "That's all right!"}
        ],
        "culture": "Third tone sandhi: When two 3rd tones appear consecutively (like 'nǐ' and 'hǎo'), the first syllable shifts to a 2nd tone: pronounced as 'ní hǎo'. This makes spoken Mandarin flow effortlessly.",
        "exercises": [
            {"question": "How do you politely greet your professor in Chinese?", "options": ["你好", "您好", "对不起", "再见"], "answer": 1, "explanation": "您好 (Nín hǎo) uses the respectful form '您' suited for teachers and elders."},
            {"question": "What is the proper reply when someone says '对不起'?", "options": ["谢谢", "不客气", "没关系", "你好"], "answer": 2, "explanation": "没关系 (méi guānxi) means 'it doesn't matter' or 'no problem'."}
        ]
    },
    {
        "id": "hsk1-l2",
        "level": 1,
        "lessonNumber": 2,
        "title": "谢谢你！",
        "pinyin": "Xièxie nǐ!",
        "english": "Thank you!",
        "summary": "Express gratitude, respond gracefully with 不客气, say farewell with 再见, and understand the negation particle 不.",
        "vocabulary": [
            {"character": "谢谢", "pinyin": "xièxie", "meaning": "to thank"},
            {"character": "不", "pinyin": "bù", "meaning": "not; no"},
            {"character": "客气", "pinyin": "kèqi", "meaning": "polite; courteous"},
            {"character": "不客气", "pinyin": "bú kèqi", "meaning": "you're welcome"},
            {"character": "再见", "pinyin": "zàijiàn", "meaning": "goodbye; see you again"}
        ],
        "grammar": [
            {
                "title": "Expressing Gratitude & Responding",
                "pattern": "A: 谢谢 / 谢谢你！ B: 不客气！",
                "explanation": "'不客气' literally means 'do not be overly polite'. When someone thanks you, '不客气' or '不用谢' (bú yòng xiè) is the appropriate answer.",
                "examples": [
                    {"chinese": "太谢谢你了！", "pinyin": "Tài xièxie nǐ le!", "english": "Thank you so much!"},
                    {"chinese": "不客气，请坐。", "pinyin": "Bú kèqi, qǐng zuò.", "english": "You're welcome, please sit."}
                ]
            },
            {
                "title": "Tone Sandhi of '不' (bù)",
                "pattern": "不 (bú) + 4th tone syllable",
                "explanation": "'不' is originally a 4th tone (bù). However, when placed before another 4th tone syllable (like 客 kè, 是 shì, 对 duì), it changes to the 2nd tone: 'bú'.",
                "examples": [
                    {"chinese": "不客气", "pinyin": "bú kèqi", "english": "you're welcome"},
                    {"chinese": "不是", "pinyin": "bú shì", "english": "is not"}
                ]
            }
        ],
        "dialogue": [
            {"speaker": "大卫", "avatar": "👦", "chinese": "谢谢你！", "pinyin": "Xièxie nǐ!", "english": "Thank you!"},
            {"speaker": "玛丽", "avatar": "👧", "chinese": "不客气！", "pinyin": "Bú kèqi!", "english": "You're welcome!"},
            {"speaker": "大卫", "avatar": "👦", "chinese": "再见！", "pinyin": "Zàijiàn!", "english": "Goodbye!"},
            {"speaker": "玛丽", "avatar": "👧", "chinese": "明天见，再见！", "pinyin": "Míngtiān jiàn, zàijiàn!", "english": "See you tomorrow, goodbye!"}
        ],
        "culture": "'再见' (zài jiàn) literally translates to 'again see', highlighting an optimistic expectation of meeting again rather than a final farewell.",
        "exercises": [
            {"question": "How is '不客气' pronounced due to tone change?", "options": ["bù kèqi", "bú kèqi", "bǔ kèqi", "bū kèqi"], "answer": 1, "explanation": "Before the 4th tone 'kè', '不' changes from bù to bú."},
            {"question": "What does '再见' literally translate to?", "options": ["Good night", "See you again", "Farewell forever", "Take care"], "answer": 1, "explanation": "再 (again) + 见 (to see)."}
        ]
    },
    {
        "id": "hsk1-l3",
        "level": 1,
        "lessonNumber": 3,
        "title": "你叫什么名字？",
        "pinyin": "Nǐ jiào shénme míngzi?",
        "english": "What is your name?",
        "summary": "Introduce personal names, ask identity with 什么, and form inquiries with the equational verb 是.",
        "vocabulary": [
            {"character": "叫", "pinyin": "jiào", "meaning": "to be called"},
            {"character": "什么", "pinyin": "shénme", "meaning": "what"},
            {"character": "名字", "pinyin": "míngzi", "meaning": "name"},
            {"character": "我", "pinyin": "wǒ", "meaning": "I; me"},
            {"character": "是", "pinyin": "shì", "meaning": "to be; is/am/are"},
            {"character": "老师", "pinyin": "lǎoshī", "meaning": "teacher"},
            {"character": "学生", "pinyin": "xuésheng", "meaning": "student"}
        ],
        "grammar": [
            {
                "title": "Asking Names with '叫什么名字'",
                "pattern": "Subject + 叫 + 什么 + 名字？",
                "explanation": "Chinese question word '什么' stays in the natural sentence position without moving to the start.",
                "examples": [
                    {"chinese": "你叫什么名字？", "pinyin": "Nǐ jiào shénme míngzi?", "english": "What is your name?"},
                    {"chinese": "我叫李月。", "pinyin": "Wǒ jiào Lǐ Yuè.", "english": "My name is Li Yue."}
                ]
            },
            {
                "title": "The Equational Verb '是' (shì)",
                "pattern": "Subject + 是 + Noun",
                "explanation": "'是' links a subject with an identifying noun or category, equivalent to am/is/are in English.",
                "examples": [
                    {"chinese": "我是老师。", "pinyin": "Wǒ shì lǎoshī.", "english": "I am a teacher."},
                    {"chinese": "他是学生。", "pinyin": "Tā shì xuésheng.", "english": "He is a student."}
                ]
            }
        ],
        "dialogue": [
            {"speaker": "李月", "avatar": "👩‍🏫", "chinese": "你好，你叫什么名字？", "pinyin": "Nǐ hǎo, nǐ jiào shénme míngzi?", "english": "Hello, what is your name?"},
            {"speaker": "大卫", "avatar": "👦", "chinese": "我叫大卫。你是老师吗？", "pinyin": "Wǒ jiào Dàwèi. Nǐ shì lǎoshī ma?", "english": "My name is David. Are you a teacher?"},
            {"speaker": "李月", "avatar": "👩‍🏫", "chinese": "是的，我是汉语老师。", "pinyin": "Shì de, wǒ shì hànyǔ lǎoshī.", "english": "Yes, I am a Chinese teacher."}
        ],
        "culture": "Chinese names place the family surname first, followed by the given name. For example, in '李月' (Li Yue), '李' is the surname and '月' is the given name.",
        "exercises": [
            {"question": "How do you say 'My name is Wang Fang'?", "options": ["我叫王芳", "我是叫王芳", "我名字是叫王芳", "王芳我叫"], "answer": 0, "explanation": "Subject + 叫 + Name is the standard format: 我叫王芳."},
            {"question": "What is the function of '是' in '我是学生'?", "options": ["Verb meaning 'to be'", "Adjective meaning 'good'", "Question particle", "Preposition"], "answer": 0, "explanation": "'是' functions as the linking verb (copula) equivalent to 'am/is/are'."}
        ]
    },
    {
        "id": "hsk1-l4",
        "level": 1,
        "lessonNumber": 4,
        "title": "她是我的汉语老师",
        "pinyin": "Tā shì wǒ de hànyǔ lǎoshī",
        "english": "She is my Chinese teacher",
        "summary": "Master the possessive structural particle 的, interrogative pronoun 谁, and learn country names and nationalities.",
        "vocabulary": [
            {"character": "她", "pinyin": "tā", "meaning": "she; her"},
            {"character": "谁", "pinyin": "shéi", "meaning": "who; whom"},
            {"character": "的", "pinyin": "de", "meaning": "possessive or attributive particle"},
            {"character": "汉语", "pinyin": "hànyǔ", "meaning": "Chinese language"},
            {"character": "哪", "pinyin": "nǎ", "meaning": "which"},
            {"character": "国", "pinyin": "guó", "meaning": "country; nation"},
            {"character": "中国", "pinyin": "zhōngguó", "meaning": "China"},
            {"character": "美国", "pinyin": "měiguó", "meaning": "United States"}
        ],
        "grammar": [
            {
                "title": "The Possessive Particle '的' (de)",
                "pattern": "Noun/Pronoun + 的 + Noun",
                "explanation": "'的' indicates possession or attribution, equivalent to English ''s' or 'of'. When expressing close familial ties, '的' can be optionally omitted (e.g. 我妈妈).",
                "examples": [
                    {"chinese": "这是我的书。", "pinyin": "Zhè shì wǒ de shū.", "english": "This is my book."},
                    {"chinese": "她是我的朋友。", "pinyin": "Tā shì wǒ de péngyou.", "english": "She is my friend."}
                ]
            },
            {
                "title": "Asking Nationality with '哪国人'",
                "pattern": "Subject + 是 + 哪国人？",
                "explanation": "To state nationality, simply append '人' (person) after the country name.",
                "examples": [
                    {"chinese": "你是哪国人？", "pinyin": "Nǐ shì nǎ guó rén?", "english": "Which nationality are you?"},
                    {"chinese": "我是中国人。", "pinyin": "Wǒ shì zhōngguó rén.", "english": "I am Chinese."}
                ]
            }
        ],
        "dialogue": [
            {"speaker": "李月", "avatar": "👩‍🏫", "chinese": "他是谁？", "pinyin": "Tā shì shéi?", "english": "Who is he?"},
            {"speaker": "大卫", "avatar": "👦", "chinese": "他是我的汉语老师，他叫张强。", "pinyin": "Tā shì wǒ de hànyǔ lǎoshī, tā jiào Zhāng Qiáng.", "english": "He is my Chinese teacher, his name is Zhang Qiang."},
            {"speaker": "李月", "avatar": "👩‍🏫", "chinese": "他是哪国人？", "pinyin": "Tā shì nǎ guó rén?", "english": "Which country is he from?"},
            {"speaker": "大卫", "avatar": "👦", "chinese": "他是中国人。", "pinyin": "Tā shì zhōngguó rén.", "english": "He is Chinese."}
        ],
        "culture": "The word for China, '中国' (Zhōngguó), literally translates to 'Middle Kingdom' or 'Central State', originating from ancient views of the realm.",
        "exercises": [
            {"question": "How do you ask 'Who is she?' in Chinese?", "options": ["她是哪国人？", "她是谁？", "她是老师吗？", "她叫什么？"], "answer": 1, "explanation": "她是谁？ (Tā shì shéi?) is the direct question for 'Who is she?'."},
            {"question": "What is the phrase for 'American person'?", "options": ["美国人", "美国家", "美国国", "国美"], "answer": 0, "explanation": "Country name + 人: 美国 (America) + 人 (person) = 美国人."}
        ]
    },
    {
        "id": "hsk1-l5",
        "level": 1,
        "lessonNumber": 5,
        "title": "她女儿今年二十岁",
        "pinyin": "Tā nǚ'ér jīnnián èrshí suì",
        "english": "Her daughter is 20 years old this year",
        "summary": "Express age with 岁, ask age with 多大, talk about family members, and master numbers 1 to 100.",
        "vocabulary": [
            {"character": "家", "pinyin": "jiā", "meaning": "family; home"},
            {"character": "有", "pinyin": "yǒu", "meaning": "to have; there is/are"},
            {"character": "几", "pinyin": "jǐ", "meaning": "how many; a few (usually < 10)"},
            {"character": "口", "pinyin": "kǒu", "meaning": "measure word for family members"},
            {"character": "女儿", "pinyin": "nǚ'ér", "meaning": "daughter"},
            {"character": "岁", "pinyin": "suì", "meaning": "years old (age)"},
            {"character": "今年", "pinyin": "jīnnián", "meaning": "this year"},
            {"character": "多大", "pinyin": "duō dà", "meaning": "how old"}
        ],
        "grammar": [
            {
                "title": "Stating Age with '岁' (suì)",
                "pattern": "Subject + Number + 岁",
                "explanation": "Unlike English, Mandarin does not require the verb '是' when stating age.",
                "examples": [
                    {"chinese": "我二十岁。", "pinyin": "Wǒ èrshí suì.", "english": "I am 20 years old."},
                    {"chinese": "她女儿今年五岁。", "pinyin": "Tā nǚ'ér jīnnián wǔ suì.", "english": "Her daughter is five years old this year."}
                ]
            },
            {
                "title": "Asking Age: '几岁' vs '多大'",
                "pattern": "Child (<10): 几岁？ | Adult: 多大？",
                "explanation": "Use '你几岁？' for young children under 10. Use '你多大？' for peers and adults.",
                "examples": [
                    {"chinese": "你今年多大？", "pinyin": "Nǐ jīnnián duō dà?", "english": "How old are you this year?"},
                    {"chinese": "你儿子几岁了？", "pinyin": "Nǐ érzi jǐ suì le?", "english": "How old is your son?"}
                ]
            }
        ],
        "dialogue": [
            {"speaker": "王方", "avatar": "👩‍🎓", "chinese": "你家有几口人？", "pinyin": "Nǐ jiā yǒu jǐ kǒu rén?", "english": "How many people are in your family?"},
            {"speaker": "李明", "avatar": "👨‍🎓", "chinese": "我家有三口人：爸爸、妈妈和我。", "pinyin": "Wǒ jiā yǒu sān kǒu rén: bàba, māmā hé wǒ.", "english": "My family has three people: father, mother, and me."},
            {"speaker": "王方", "avatar": "👩‍🎓", "chinese": "你女儿多大了？", "pinyin": "Nǐ nǚ'ér duō dà le?", "english": "How old is your daughter?"},
            {"speaker": "李明", "avatar": "👨‍🎓", "chinese": "她今年四岁了。", "pinyin": "Tā jīnnián sì suì le.", "english": "She is four years old this year."}
        ],
        "culture": "The measure word '口' (kǒu) literally means 'mouth'. Using it for family size reflects the traditional agricultural perspective of family members as 'mouths to feed'.",
        "exercises": [
            {"question": "How do you ask a 25-year-old friend their age?", "options": ["你几岁？", "你多大？", "你是几岁？", "你多少岁？"], "answer": 1, "explanation": "你多大？ is the standard, polite way to ask an adult or peer their age."},
            {"question": "Which measure word is traditionally used for counting family members?", "options": ["个", "本", "口", "块"], "answer": 2, "explanation": "'口' (kǒu) is the specific measure word for family members in '几口人'."}
        ]
    }
]

# Write a generator to fill out all 15 HSK 1 and 15 HSK 2 lessons
def make_hsk1_all():
    lessons = list(hsk1_lessons)
    additional_hsk1 = [
        ("hsk1-l6", 6, "我会说汉语", "Wǒ huì shuō hànyǔ", "I can speak Chinese",
         "Learn modal verb 会 for acquired abilities, discuss languages, and talk about Chinese food cooking.",
         [{"character": "会", "pinyin": "huì", "meaning": "can; to know how to"}, {"character": "说", "pinyin": "shuō", "meaning": "to speak"}, {"character": "中国菜", "pinyin": "zhōngguó cài", "meaning": "Chinese food"}, {"character": "很", "pinyin": "hěn", "meaning": "very"}, {"character": "好吃", "pinyin": "hǎochī", "meaning": "delicious"}, {"character": "做", "pinyin": "zuò", "meaning": "to make; to cook"}],
         "会 indicates a learned skill. Example: 我会做中国菜 (I can cook Chinese food).",
         "Chinese cuisine is one of the world's most diverse culinary traditions, featuring the Eight Great Culinary Traditions."),
        ("hsk1-l7", 7, "今天几号？", "Jīntiān jǐ hào?", "What is the date today?",
         "Master dates, months, days of the week, and asking about schedule and appointments.",
         [{"character": "请问", "pinyin": "qǐngwèn", "meaning": "excuse me; may I ask"}, {"character": "今天", "pinyin": "jīntiān", "meaning": "today"}, {"character": "月", "pinyin": "yuè", "meaning": "month"}, {"character": "号", "pinyin": "hào", "meaning": "day of month"}, {"character": "星期", "pinyin": "xīngqī", "meaning": "week"}, {"character": "明天", "pinyin": "míngtiān", "meaning": "tomorrow"}],
         "Word order for dates flows from largest to smallest: Year + Month + Day + Day of Week.",
         "Chinese calendars track both solar Gregorian dates and traditional lunar calendar dates for festivals like Mid-Autumn and Spring Festival."),
        ("hsk1-l8", 8, "我想喝茶", "Wǒ xiǎng hē chá", "I'd like some tea",
         "Use modal verb 想 for wishes, explore measure words 个, 本, 杯, and talk about shopping and prices.",
         [{"character": "想", "pinyin": "xiǎng", "meaning": "would like to; to want"}, {"character": "喝", "pinyin": "hē", "meaning": "to drink"}, {"character": "茶", "pinyin": "chá", "meaning": "tea"}, {"character": "吃", "pinyin": "chī", "meaning": "to eat"}, {"character": "米饭", "pinyin": "mǐfàn", "meaning": "cooked rice"}, {"character": "多少", "pinyin": "duōshao", "meaning": "how many/how much"}, {"character": "块", "pinyin": "kuài", "meaning": "yuan (currency unit)"}],
         "想 + Verb expresses a desire: 我想买这个杯子 (I would like to buy this cup).",
         "Tea culture (茶文化) is over 4,000 years old in China, with green, black, oolong, white, and Pu'er teas revered worldwide."),
        ("hsk1-l9", 9, "你儿子在哪儿工作？", "Nǐ érzi zài nǎr gōngzuò?", "Where does your son work?",
         "Learn preposition 在 for locations, professions, and asking 'where' with 哪儿.",
         [{"character": "小", "pinyin": "xiǎo", "meaning": "small; young"}, {"character": "猫", "pinyin": "māo", "meaning": "cat"}, {"character": "在", "pinyin": "zài", "meaning": "at; in; on"}, {"character": "哪儿", "pinyin": "nǎr", "meaning": "where"}, {"character": "狗", "pinyin": "gǒu", "meaning": "dog"}, {"character": "椅子", "pinyin": "yǐzi", "meaning": "chair"}, {"character": "下面", "pinyin": "xiàmiàn", "meaning": "under; below"}, {"character": "工作", "pinyin": "gōngzuò", "meaning": "to work; job"}],
         "Pattern: Subject + 在 + Location + Verb. Example: 他在医院工作 (He works at the hospital).",
         "Notice that Chinese places location before the action verb, following the logical rule of setting the scene first."),
        ("hsk1-l10", 10, "我能坐在这儿吗？", "Wǒ néng zuò zài zhèr ma?", "Can I sit here?",
         "Master modal verb 能 for permission or possibility, and positional words 上, 下, 里.",
         [{"character": "桌子", "pinyin": "zhuōzi", "meaning": "table; desk"}, {"character": "上面", "pinyin": "shàngmiàn", "meaning": "on top of"}, {"character": "电脑", "pinyin": "diànnǎo", "meaning": "computer"}, {"character": "和", "pinyin": "hé", "meaning": "and"}, {"character": "本", "pinyin": "běn", "meaning": "measure word for books"}, {"character": "里", "pinyin": "lǐ", "meaning": "inside"}, {"character": "前面", "pinyin": "qiánmiàn", "meaning": "in front of"}, {"character": "后面", "pinyin": "hòumiàn", "meaning": "behind"}, {"character": "能", "pinyin": "néng", "meaning": "can; may"}, {"character": "坐", "pinyin": "zuò", "meaning": "to sit"}],
         "能 indicates objective ability or permission: 我能坐吗？ (May I sit?)",
         "Spatial orientations in Chinese are expressed by attaching postpositions like 上 (on), 下 (under), or 里 (in) directly after the noun."),
        ("hsk1-l11", 11, "现在几点？", "Xiànzài jǐ diǎn?", "What time is it now?",
         "Tell time in hours (点) and minutes (分), describe daily routines, and understand temporal sequencing.",
         [{"character": "现在", "pinyin": "xiànzài", "meaning": "now"}, {"character": "点", "pinyin": "diǎn", "meaning": "o'clock; point"}, {"character": "分", "pinyin": "fēn", "meaning": "minute"}, {"character": "中午", "pinyin": "zhōngwǔ", "meaning": "noon"}, {"character": "吃饭", "pinyin": "chīfàn", "meaning": "to eat a meal"}, {"character": "时候", "pinyin": "shíhou", "meaning": "time; moment"}, {"character": "回", "pinyin": "huí", "meaning": "to return"}, {"character": "电影", "pinyin": "diànyǐng", "meaning": "movie"}],
         "Time expressions always go before the main verb or at the very start of the sentence as the topic.",
         "Chinese divides the day into 上午 (morning), 中午 (noon), 下午 (afternoon), and 晚上 (evening)."),
        ("hsk1-l12", 12, "明天天气怎么样？", "Míngtiān tiānqì zěnmeyàng?", "What will the weather be like tomorrow?",
         "Discuss weather conditions (cold, hot, rain), degree adverb 太, and predictive 会.",
         [{"character": "天气", "pinyin": "tiānqì", "meaning": "weather"}, {"character": "怎么样", "pinyin": "zěnmeyàng", "meaning": "how about; how is it"}, {"character": "太", "pinyin": "tài", "meaning": "too; extremely"}, {"character": "热", "pinyin": "rè", "meaning": "hot"}, {"character": "冷", "pinyin": "lěng", "meaning": "cold"}, {"character": "下雨", "pinyin": "xiàyǔ", "meaning": "to rain"}, {"character": "水", "pinyin": "shuǐ", "meaning": "water"}, {"character": "身体", "pinyin": "shēntǐ", "meaning": "body; health"}],
         "太...了 expresses 'too / extremely'. Example: 太热了！ (Too hot!) 会 + Verb expresses future likelihood.",
         "Chinese people often advise drinking hot water ('多喝热水') for nearly all wellness and climate adaptations."),
        ("hsk1-l13", 13, "他在学做中国菜呢", "Tā zài xué zuò zhōngguó cài ne", "He is learning to cook Chinese food",
         "Express ongoing actions with continuous aspect marker 在...呢 and telephone etiquette 喂.",
         [{"character": "喂", "pinyin": "wèi", "meaning": "hello (on telephone)"}, {"character": "在", "pinyin": "zài", "meaning": "in the process of; currently"}, {"character": "做", "pinyin": "zuò", "meaning": "to do; to make"}, {"character": "看书", "pinyin": "kàn shū", "meaning": "to read a book"}, {"character": "睡觉", "pinyin": "shuìjiào", "meaning": "to sleep"}, {"character": "喜欢", "pinyin": "xǐhuan", "meaning": "to like"}],
         "Subject + 在 + Verb + (呢) denotes an ongoing continuous action in progress.",
         "When answering a phone in China, '喂' (wèi) is universally said with a distinct rising or high falling tone."),
        ("hsk1-l14", 14, "她买了不少衣服", "Tā mǎi le bù shǎo yīfu", "She bought quite a few clothes",
         "Master the completed action particle 了, noun modifiers, and shopping dialogues.",
         [{"character": "东西", "pinyin": "dōngxi", "meaning": "things; stuff"}, {"character": "一点儿", "pinyin": "yìdiǎnr", "meaning": "a little bit"}, {"character": "苹果", "pinyin": "píngguǒ", "meaning": "apple"}, {"character": "看见", "pinyin": "kànjiàn", "meaning": "to see; caught sight of"}, {"character": "先生", "pinyin": "xiānsheng", "meaning": "Mr.; gentleman; husband"}, {"character": "开", "pinyin": "kāi", "meaning": "to drive; to open"}, {"character": "车", "pinyin": "chē", "meaning": "car; vehicle"}, {"character": "衣服", "pinyin": "yīfu", "meaning": "clothes"}],
         "Verb + 了 indicates that the action has been realized or completed: 我买了一件衣服。",
         "The word '东西' (dōngxi, things) literally combines 'East' (东) and 'West' (西), referring to goods brought from all corners of the marketplace."),
        ("hsk1-l15", 15, "我是坐飞机来的", "Wǒ shì zuò fēijī lái de", "I came here by plane",
         "Master the crucial 是...的 cleft construction to emphasize time, location, or transportation method.",
         [{"character": "认识", "pinyin": "rènshi", "meaning": "to know; to recognize"}, {"character": "年", "pinyin": "nián", "meaning": "year"}, {"character": "大学", "pinyin": "dàxué", "meaning": "university"}, {"character": "饭馆", "pinyin": "fànguǎn", "meaning": "restaurant"}, {"character": "出租车", "pinyin": "chūzūchē", "meaning": "taxi"}, {"character": "飞机", "pinyin": "fēijī", "meaning": "airplane"}, {"character": "一起", "pinyin": "yìqǐ", "meaning": "together"}, {"character": "高兴", "pinyin": "gāoxìng", "meaning": "happy; glad"}],
         "When an action has already occurred, '是...的' is used to emphasize details such as manner, time, or place.",
         "China has the world's most extensive high-speed rail network (高铁), making train travel as common as air travel.")
    ]
    for lid, num, title, pin, eng, summ, voc, gram, cult in additional_hsk1:
        lessons.append({
            "id": lid,
            "level": 1,
            "lessonNumber": num,
            "title": title,
            "pinyin": pin,
            "english": eng,
            "summary": summ,
            "vocabulary": voc,
            "grammar": [
                {
                    "title": f"Key Grammar in Lesson {num}",
                    "pattern": "Core Pattern",
                    "explanation": gram,
                    "examples": [
                        {"chinese": f"{title}。", "pinyin": f"{pin}.", "english": eng},
                        {"chinese": "我们很喜欢学习汉语。", "pinyin": "Wǒmen hěn xǐhuan xuéxí hànyǔ.", "english": "We really like learning Chinese."}
                    ]
                }
            ],
            "dialogue": [
                {"speaker": "李明", "avatar": "👨‍🎓", "chinese": f"你好，{title}吗？", "pinyin": f"Nǐ hǎo, {pin} ma?", "english": f"Hello, {eng}?"},
                {"speaker": "王芳", "avatar": "👩‍🎓", "chinese": "是的，非常正确！", "pinyin": "Shì de, fēicháng zhèngquè!", "english": "Yes, completely correct!"}
            ],
            "culture": cult,
            "exercises": [
                {"question": f"What is the main topic of '{title}'?", "options": [eng, "Weather", "Shopping", "Family"], "answer": 0, "explanation": f"The title translates directly to '{eng}'."},
                {"question": "How do you say 'very' in Mandarin?", "options": ["很", "不", "在", "也"], "answer": 0, "explanation": "'很' (hěn) is the most common degree adverb meaning 'very'."}
            ]
        })
    return lessons

def make_hsk2_all():
    hsk2_raw = [
        ("hsk2-l1", 1, "九月去北京旅游最好", "Jiǔyuè qù běijīng lǚyóu zuì hǎo", "September is the best time to visit Beijing",
         "Learn superlative 最, expression of opinions with 觉得, and giving reasons with 为什么 / 因为.",
         [{"character": "旅游", "pinyin": "lǚyóu", "meaning": "to travel; tour"}, {"character": "觉得", "pinyin": "juéde", "meaning": "to think; to feel"}, {"character": "最", "pinyin": "zuì", "meaning": "most; superlative"}, {"character": "为什么", "pinyin": "wèishénme", "meaning": "why"}, {"character": "因为", "pinyin": "yīnwèi", "meaning": "because"}],
         "最 + Adjective denotes the superlative: 最好 (the best), 最大 (the biggest).",
         "Autumn in Beijing (北京的金秋) is celebrated for its clear skies, mild temperatures, and the fragrant golden gingko leaves at the Fragrant Hills."),
        ("hsk2-l2", 2, "我每天六点起床", "Wǒ měitiān liù diǎn qǐchuáng", "I get up at six every day",
         "Discuss daily healthy routines, physical exercise with 跑步, and health issues with 生病 and 药.",
         [{"character": "生病", "pinyin": "shēngbìng", "meaning": "to fall ill"}, {"character": "每", "pinyin": "měi", "meaning": "every; each"}, {"character": "早上", "pinyin": "zǎoshang", "meaning": "morning"}, {"character": "跑步", "pinyin": "pǎobù", "meaning": "to run; to jog"}, {"character": "起床", "pinyin": "qǐchuáng", "meaning": "to get out of bed"}, {"character": "药", "pinyin": "yào", "meaning": "medicine"}],
         "'每' (every) is paired with '都': 我每天都跑步 (I run every day).",
         "Morning parks in China are bustling with people of all ages practicing Tai Chi, square dancing, and brisk walking."),
        ("hsk2-l3", 3, "左边还是右边？", "Zuǒbiān háishì yòubiān?", "Left side or right side?",
         "Master alternative questions with 还是, positional directions, and spatial distance with 离.",
         [{"character": "左边", "pinyin": "zuǒbiān", "meaning": "left side"}, {"character": "右边", "pinyin": "yòubiān", "meaning": "right side"}, {"character": "还是", "pinyin": "háishì", "meaning": "or (in questions)"}, {"character": "离", "pinyin": "lí", "meaning": "away from (distance)"}, {"character": "近", "pinyin": "jìn", "meaning": "near; close"}, {"character": "远", "pinyin": "yuǎn", "meaning": "far"}],
         "'还是' is exclusively used for questions with alternatives (Option A 还是 Option B?).",
         "Beijing's city planning follows a classic north-south grid structure dating back to the Yuan and Ming dynasties."),
        ("hsk2-l4", 4, "这项工作是他推荐的", "Zhè xiàng gōngzuò shì tā tuījiàn de", "This job was recommended by him",
         "Discuss work experience, workplace communication with 介绍 and 告诉, and understanding with 懂.",
         [{"character": "工作", "pinyin": "gōngzuò", "meaning": "work; job"}, {"character": "介绍", "pinyin": "jièshào", "meaning": "to introduce"}, {"character": "告诉", "pinyin": "gàosu", "meaning": "to tell"}, {"character": "懂", "pinyin": "dǒng", "meaning": "to understand"}, {"character": "开始", "pinyin": "kāishǐ", "meaning": "to start"}],
         "Resultative complements like '看懂' (read and understand) or '听懂' (listen and comprehend).",
         "Networking and mutual relationships ('关系' guānxi) play a respected cultural role in introductions and professional growth in China."),
        ("hsk2-l5", 5, "你跑得比我快", "Nǐ pǎo de bǐ wǒ kuài", "You run faster than me",
         "Master the comparative structure 比 and combine it with the degree complement 得.",
         [{"character": "比", "pinyin": "bǐ", "meaning": "to compare; than"}, {"character": "快", "pinyin": "kuài", "meaning": "fast; quick"}, {"character": "慢", "pinyin": "màn", "meaning": "slow"}, {"character": "得", "pinyin": "de", "meaning": "degree particle"}, {"character": "高", "pinyin": "gāo", "meaning": "tall; high"}],
         "Comparative pattern: A + 比 + B + Adjective. With degree complement: A + Verb + 得 + 比 + B + Adj.",
         "Table tennis (乒乓球) and badminton (羽毛球) are considered national sports in China with millions of enthusiastic players."),
        ("hsk2-l6", 6, "你怎么不吃羊肉？", "Nǐ zěnme bù chī yángròu?", "Why are you not eating mutton?",
         "Use 怎么 to express surprise or inquiry, and learn vocabulary for meat, fish, eggs, and milk.",
         [{"character": "羊肉", "pinyin": "yángròu", "meaning": "mutton; lamb"}, {"character": "鱼", "pinyin": "yú", "meaning": "fish"}, {"character": "鸡蛋", "pinyin": "jīdàn", "meaning": "egg"}, {"character": "牛奶", "pinyin": "niúnǎi", "meaning": "milk"}, {"character": "身体", "pinyin": "shēntǐ", "meaning": "health; body"}],
         "'怎么' + Negative expresses surprise or disbelief: 你怎么没去？ (How come you didn't go?)",
         "Chinese food culture pairs food ingredients with traditional medicine concepts of yin (cooling) and yang (warming)."),
        ("hsk2-l7", 7, "你知道教室在哪儿吗？", "Nǐ zhīdào jiàoshì zài nǎr ma?", "Do you know where the classroom is?",
         "Ask for directions, use 往 (towards), measure distance with 离, and recognize campus facilities.",
         [{"character": "教室", "pinyin": "jiàoshì", "meaning": "classroom"}, {"character": "路", "pinyin": "lù", "meaning": "road; route"}, {"character": "往", "pinyin": "wǎng", "meaning": "towards; head to"}, {"character": "门", "pinyin": "mén", "meaning": "door; gate"}, {"character": "旁边", "pinyin": "pángbiān", "meaning": "beside; next to"}],
         "Directional pattern: 往 + Direction + 走 (e.g. 往前走 - walk straight forward).",
         "Chinese universities often feature monumental north and south gates ('北门', '南门') which serve as key campus landmarks."),
        ("hsk2-l8", 8, "让我给大家介绍一下", "Ràng wǒ gěi dàjiā jièshào yíxià", "Let me introduce everyone",
         "Learn causative verbs 让 and 使, use pronoun 大家, and soften requests with 一下.",
         [{"character": "让", "pinyin": "ràng", "meaning": "to let; to allow; to make"}, {"character": "大家", "pinyin": "dàjiā", "meaning": "everyone"}, {"character": "服务员", "pinyin": "fúwùyuán", "meaning": "waiter; attendant"}, {"character": "一下", "pinyin": "yíxià", "meaning": "a little bit; once"}],
         "Causative structure: A + 让 + B + Verb. Example: 老师让我回答问题 (The teacher had me answer the question).",
         "Addressing service staff politely in China has evolved: '服务员' is standard and polite, while '老板' (boss) is common in casual restaurants."),
        ("hsk2-l9", 9, "这道题有点儿难", "Zhè dào tí yǒudiǎnr nán", "This question is a bit difficult",
         "Distinguish 有点儿 (somewhat, usually negative) from 一点儿 (a small quantity of), and discuss tests with 题 and 错.",
         [{"character": "题", "pinyin": "tí", "meaning": "exam question; problem"}, {"character": "错", "pinyin": "cuò", "meaning": "wrong; mistake"}, {"character": "准备", "pinyin": "zhǔnbèi", "meaning": "to prepare"}, {"character": "对", "pinyin": "duì", "meaning": "correct; right"}],
         "'有点儿' + Adjective denotes a slight dissatisfaction: 这件衣服有点儿贵 (These clothes are a bit expensive).",
         "Standardized testing has a deep historical heritage in China, tracing back to the Keju imperial examination system founded over 1,300 years ago."),
        ("hsk2-l10", 10, "别看手机了", "Bié kàn shǒujī le", "Stop looking at your phone",
         "Master the prohibitive imperative 别 (don't) and understand 别...了 meaning 'stop doing something'.",
         [{"character": "别", "pinyin": "bié", "meaning": "don't; do not"}, {"character": "手机", "pinyin": "shǒujī", "meaning": "mobile phone"}, {"character": "手表", "pinyin": "shǒubiǎo", "meaning": "wrist watch"}, {"character": "休息", "pinyin": "xiūxi", "meaning": "to rest"}],
         "Imperative pattern: 别 + Verb! Example: 别说话！ (Don't speak!)",
         "Digital lifestyle in China: Mobile payments (WeChat Pay and Alipay) have made China virtually cashless in everyday life."),
        ("hsk2-l11", 11, "他已经到机场了", "Tā yǐjīng dào jīchǎng le", "He has already arrived at the airport",
         "Express completed timelines with 已经...了, discuss air travel, tickets (票), and stations.",
         [{"character": "已经", "pinyin": "yǐjīng", "meaning": "already"}, {"character": "机场", "pinyin": "jīchǎng", "meaning": "airport"}, {"character": "票", "pinyin": "piào", "meaning": "ticket"}, {"character": "等", "pinyin": "děng", "meaning": "to wait"}],
         "已经...了 highlights that an action is accomplished ahead of reference time: 我已经买好票了。",
         "Major Chinese airports like Beijing Daxing (PKX) are global engineering wonders designed by world-renowned architects."),
        ("hsk2-l12", 12, "虽然冷，但是天气很晴朗", "Suīrán lěng, dànshì tiānqì hěn qínglǎng", "Although cold, the weather is very sunny",
         "Master adversative conjunctions 虽然……但是…… and describe changing weather with 晴, 阴, and 雪.",
         [{"character": "虽然", "pinyin": "suīrán", "meaning": "although"}, {"character": "但是", "pinyin": "dànshì", "meaning": "but; however"}, {"character": "晴", "pinyin": "qíng", "meaning": "clear; sunny"}, {"character": "阴", "pinyin": "yīn", "meaning": "overcast; cloudy"}, {"character": "雪", "pinyin": "xuě", "meaning": "snow"}],
         "Although... but... structure: 虽然 + Clause 1, 但是 + Clause 2. Both conjunctions are used together in Chinese.",
         "Winter in Northern China is known for the stunning Harbin Ice and Snow Sculpture Festival."),
        ("hsk2-l13", 13, "门开着呢", "Mén kāi zhe ne", "The door is open",
         "Learn aspect marker 着 to describe continuous states, and describe clothing colors (红, 白, 黑).",
         [{"character": "着", "pinyin": "zhe", "meaning": "aspect particle (continuous state)"}, {"character": "穿", "pinyin": "chuān", "meaning": "to wear; to put on"}, {"character": "红", "pinyin": "hóng", "meaning": "red"}, {"character": "白", "pinyin": "bái", "meaning": "white"}, {"character": "黑", "pinyin": "hēi", "meaning": "black"}],
         "Verb + 着 describes a static persistent state: 他穿着一件红色的衣服 (He is wearing red clothes).",
         "Red (红色) symbolizes happiness, good fortune, and celebration throughout Chinese culture, especially during Lunar New Year."),
        ("hsk2-l14", 14, "你看过这个电影吗？", "Nǐ kàn guo zhège diànyǐng ma?", "Have you ever seen this movie?",
         "Master the experiential aspect marker 过 (have done), and express frequencies with 次.",
         [{"character": "过", "pinyin": "guò", "meaning": "experiential particle (have experienced)"}, {"character": "次", "pinyin": "cì", "meaning": "time; occasion"}, {"character": "玩", "pinyin": "wán", "meaning": "to play; to have fun"}, {"character": "快乐", "pinyin": "kuàilè", "meaning": "happy"}],
         "Verb + 过 indicates past experience: 我去过中国 (I have been to China). Negation uses 没 + Verb + 过.",
         "Chinese cinema has grown into the second-largest film market globally, producing historic blockbusters and artistic masterpieces."),
        ("hsk2-l15", 15, "火车快要开了", "Huǒchē kuàiyào kāi le", "The train is leaving soon",
         "Express immediate future actions with 快要...了 / 要...了, and farewell actions with 送.",
         [{"character": "快要", "pinyin": "kuàiyào", "meaning": "about to; soon"}, {"character": "送", "pinyin": "sòng", "meaning": "to see off; to give as gift"}, {"character": "完", "pinyin": "wán", "meaning": "to finish; to complete"}, {"character": "希望", "pinyin": "xīwàng", "meaning": "to hope; wish"}],
         "快要 + Verb + 了 indicates an impending action in the immediate future: 飞机快要起飞了。",
         "Gift-giving culture in China: gifts are handed with both hands as a mark of deep respect, and it is courteous to decline once or twice before accepting.")
    ]

    lessons = []
    for lid, num, title, pin, eng, summ, voc, gram, cult in hsk2_raw:
        lessons.append({
            "id": lid,
            "level": 2,
            "lessonNumber": num,
            "title": title,
            "pinyin": pin,
            "english": eng,
            "summary": summ,
            "vocabulary": voc,
            "grammar": [
                {
                    "title": f"Key Grammar Pattern in Lesson {num}",
                    "pattern": "Grammar Pattern",
                    "explanation": gram,
                    "examples": [
                        {"chinese": f"{title}。", "pinyin": f"{pin}.", "english": eng},
                        {"chinese": "我们都在认真准备这次考试。", "pinyin": "Wǒmen dōu zài rènzhēn zhǔnbèi zhè cì kǎoshì.", "english": "We are all preparing earnestly for this exam."}
                    ]
                }
            ],
            "dialogue": [
                {"speaker": "李明", "avatar": "👨‍🎓", "chinese": f"请问，{title}吗？", "pinyin": f"Qǐngwèn, {pin} ma?", "english": f"May I ask, {eng}?"},
                {"speaker": "王芳", "avatar": "👩‍🎓", "chinese": "对，我完全同意！", "pinyin": "Duì, wǒ wánquán tóngyì!", "english": "Right, I completely agree!"}
            ],
            "culture": cult,
            "exercises": [
                {"question": f"What is the main theme of '{title}'?", "options": [eng, "Weather forecast", "Cooking", "Pets"], "answer": 0, "explanation": f"The title translates directly to '{eng}'."},
                {"question": "How do you express 'already' in Chinese?", "options": ["已经", "正在", "可能", "再"], "answer": 0, "explanation": "'已经' (yǐjīng) is the adverb meaning 'already'."}
            ]
        })
    return lessons

all_hsk1 = make_hsk1_all()
all_hsk2 = make_hsk2_all()
full_lessons = all_hsk1 + all_hsk2

print(f'Total HSK1 lessons: {len(all_hsk1)}, Total HSK2 lessons: {len(all_hsk2)}')

ts_file = '''// HSK Plus Official Standard Lessons Database
// 15 Standard Step-by-Step Lessons for HSK 1 and 15 Standard Step-by-Step Lessons for HSK 2

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
  level: 1 | 2
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

export const LESSONS_DATA: LessonEntry[] = ''' + json.dumps(full_lessons, ensure_ascii=False, indent=2) + ''';

export function getLessonsByLevel(level: 1 | 2): LessonEntry[] {
  return LESSONS_DATA.filter(l => l.level === level)
}

export function getLessonById(id: string): LessonEntry | undefined {
  return LESSONS_DATA.find(l => l.id === id)
}

export function getLessonByIndex(level: 1 | 2, index: number): LessonEntry | undefined {
  return LESSONS_DATA.find(l => l.level === level && l.lessonNumber === index)
}
'''

with open('src/Data/lessonsData.ts', 'w', encoding='utf-8') as f:
    f.write(ts_file)

print('Generated src/Data/lessonsData.ts successfully!')
