import json

# ==============================================================================
# HSK 1 STANDARD COURSE (15 LESSONS)
# ==============================================================================
hsk1_lessons = [
    {
        "id": "hsk1-l1", "level": 1, "lessonNumber": 1, "title": "你好", "pinyin": "Nǐ hǎo", "english": "Hello",
        "summary": "Master basic Chinese greetings, polite address, subject pronouns, and third-tone sandhi rules.",
        "vocabulary": [
            {"character": "你", "pinyin": "nǐ", "meaning": "you"},
            {"character": "好", "pinyin": "hǎo", "meaning": "good; fine; well"},
            {"character": "您", "pinyin": "nín", "meaning": "you (polite honorific)"},
            {"character": "你们", "pinyin": "nǐmen", "meaning": "you (plural)"},
            {"character": "对不起", "pinyin": "duìbuqǐ", "meaning": "sorry; excuse me"},
            {"character": "没关系", "pinyin": "méi guānxi", "meaning": "that's all right; it doesn't matter"}
        ],
        "grammar": [
            {
                "title": "Basic Greeting: 你好 / 您好",
                "pattern": "Pronoun + 好",
                "explanation": "In Chinese, '你好' is the standard greeting to a peer or acquaintance. '您好' shows respect to an elder or superior. In response, one also says '你好' or '您好'.",
                "examples": [
                    {"chinese": "你好！", "pinyin": "Nǐ hǎo!", "english": "Hello!"},
                    {"chinese": "老师，您好！", "pinyin": "Lǎoshī, nín hǎo!", "english": "Hello, teacher!"}
                ]
            },
            {
                "title": "Apologizing & Responding: 对不起 / 没关系",
                "pattern": "对不起 ↔ 没关系",
                "explanation": "'对不起' is used to apologize for an error or inconvenience. The standard polite response is '没关系'.",
                "examples": [
                    {"chinese": "对不起！", "pinyin": "Duìbuqǐ!", "english": "I am sorry!"},
                    {"chinese": "没关系，请坐。", "pinyin": "Méi guānxi, qǐng zuò.", "english": "That's all right, please sit down."}
                ]
            }
        ],
        "dialogue": [
            {"speaker": "李月", "avatar": "👩‍🏫", "chinese": "你好！", "pinyin": "Nǐ hǎo!", "english": "Hello!"},
            {"speaker": "大卫", "avatar": "👨‍🎓", "chinese": "你好！", "pinyin": "Nǐ hǎo!", "english": "Hello!"},
            {"speaker": "大卫", "avatar": "👨‍🎓", "chinese": "老师，您好！", "pinyin": "Lǎoshī, nín hǎo!", "english": "Teacher, hello!"},
            {"speaker": "李月", "avatar": "👩‍🏫", "chinese": "你们好！", "pinyin": "Nǐmen hǎo!", "english": "Hello everyone!"},
            {"speaker": "大卫", "avatar": "👨‍🎓", "chinese": "对不起！", "pinyin": "Duìbuqǐ!", "english": "I'm sorry!"},
            {"speaker": "李月", "avatar": "👩‍🏫", "chinese": "没关系。", "pinyin": "Méi guānxi.", "english": "That's all right."}
        ],
        "culture": "When two third tones appear together (nǐ + hǎo), the first third tone shifts into a second tone (ní hǎo). This tone sandhi applies to all consecutive third tones.",
        "exercises": [
            {"question": "How do you politely greet your Chinese teacher?", "options": ["您好！", "对不起！", "没关系！", "再见！"], "answer": 0, "explanation": "'您好' is the polite honorific greeting used for teachers and elders."},
            {"question": "When someone says '对不起', what is the appropriate reply?", "options": ["没关系", "你好", "你们好", "谢谢"], "answer": 0, "explanation": "'没关系' means 'that's all right' or 'no problem'."}
        ]
    },
    {
        "id": "hsk1-l2", "level": 1, "lessonNumber": 2, "title": "谢谢你", "pinyin": "Xièxie nǐ", "english": "Thank You",
        "summary": "Express gratitude with 谢谢, respond politely with 不客气, say goodbye with 再见, and understand tone change of 不.",
        "vocabulary": [
            {"character": "谢谢", "pinyin": "xièxie", "meaning": "to thank; thanks"},
            {"character": "不", "pinyin": "bù", "meaning": "no; not"},
            {"character": "不客气", "pinyin": "bú kèqi", "meaning": "you are welcome"},
            {"character": "再见", "pinyin": "zàijiàn", "meaning": "goodbye; see you again"}
        ],
        "grammar": [
            {
                "title": "Expressing Gratitude & Responding",
                "pattern": "谢谢 (你) ↔ 不客气 / 不谢",
                "explanation": "To express thanks, say '谢谢' or '谢谢你'. The standard polite replies are '不客气' (you're welcome) or '不谢' (no need to thank).",
                "examples": [
                    {"chinese": "谢谢你！", "pinyin": "Xièxie nǐ!", "english": "Thank you!"},
                    {"chinese": "不客气，不用谢。", "pinyin": "Bú kèqi, bú yòng xiè.", "english": "You're welcome, no need for thanks."}
                ]
            },
            {
                "title": "Tone Sandhi of '不' (bù)",
                "pattern": "不 + 4th tone → bú + 4th tone",
                "explanation": "When '不' is followed by another fourth tone syllable (such as 客 kè, 是 shì, 对 duì), '不' changes from 4th tone to 2nd tone: 不客气 (bú kèqi), 不是 (bú shì).",
                "examples": [
                    {"chinese": "不客气。", "pinyin": "Bú kèqi.", "english": "You are welcome."},
                    {"chinese": "我不是老师。", "pinyin": "Wǒ bú shì lǎoshī.", "english": "I am not a teacher."}
                ]
            }
        ],
        "dialogue": [
            {"speaker": "玛丽", "avatar": "👩‍🎓", "chinese": "谢谢你！", "pinyin": "Xièxie nǐ!", "english": "Thank you!"},
            {"speaker": "大卫", "avatar": "👨‍🎓", "chinese": "不客气！", "pinyin": "Bú kèqi!", "english": "You're welcome!"},
            {"speaker": "玛丽", "avatar": "👩‍🎓", "chinese": "再见！", "pinyin": "Zàijiàn!", "english": "Goodbye!"},
            {"speaker": "大卫", "avatar": "👨‍🎓", "chinese": "再见！明天见！", "pinyin": "Zàijiàn! Míngtiān jiàn!", "english": "Goodbye! See you tomorrow!"}
        ],
        "culture": "The Chinese farewell '再见' literally means 'again see' (see you again), expressing optimism for future encounters.",
        "exercises": [
            {"question": "What is the tone of '不' in '不客气'?", "options": ["Second tone (bú)", "Fourth tone (bù)", "First tone (bū)", "Neutral tone (bu)"], "answer": 0, "explanation": "Before a 4th-tone syllable like '客' (kè), '不' shifts to 2nd tone: bú kèqi."},
            {"question": "How do you say 'Goodbye' in Mandarin?", "options": ["再见", "谢谢", "没关系", "你好"], "answer": 0, "explanation": "'再见' (zàijiàn) means goodbye."}
        ]
    },
    {
        "id": "hsk1-l3", "level": 1, "lessonNumber": 3, "title": "你叫什么名字", "pinyin": "Nǐ jiào shénme míngzi", "english": "What's Your Name?",
        "summary": "Inquire about names with 叫 and 什么, introduce oneself with 我叫..., and form equational sentences with 是.",
        "vocabulary": [
            {"character": "叫", "pinyin": "jiào", "meaning": "to be called; to call"},
            {"character": "什么", "pinyin": "shénme", "meaning": "what"},
            {"character": "名字", "pinyin": "míngzi", "meaning": "name"},
            {"character": "我", "pinyin": "wǒ", "meaning": "I; me"},
            {"character": "是", "pinyin": "shì", "meaning": "to be (am, is, are)"},
            {"character": "老师", "pinyin": "lǎoshī", "meaning": "teacher"},
            {"character": "学生", "pinyin": "xuésheng", "meaning": "student"},
            {"character": "人", "pinyin": "rén", "meaning": "person; people"}
        ],
        "grammar": [
            {
                "title": "Asking Names with '什么'",
                "pattern": "主语 + 叫 + 什么 + 名字？",
                "explanation": "In Chinese questions, the question word '什么' stays in the position where the answer would appear, without inverting subject and verb.",
                "examples": [
                    {"chinese": "你叫什么名字？", "pinyin": "Nǐ jiào shénme míngzi?", "english": "What is your name?"},
                    {"chinese": "我叫李月。", "pinyin": "Wǒ jiào Lǐ Yuè.", "english": "My name is Li Yue."}
                ]
            },
            {
                "title": "The '是' Sentence (Identity)",
                "pattern": "主语 + 是 + 宾语 (否定: 不是)",
                "explanation": "'是' links subject and predicate noun phrase, expressing equivalence or category membership.",
                "examples": [
                    {"chinese": "我是学生。", "pinyin": "Wǒ shì xuésheng.", "english": "I am a student."},
                    {"chinese": "我不是老师。", "pinyin": "Wǒ bú shì lǎoshī.", "english": "I am not a teacher."}
                ]
            }
        ],
        "dialogue": [
            {"speaker": "大卫", "avatar": "👨‍🎓", "chinese": "你叫什么名字？", "pinyin": "Nǐ jiào shénme míngzi?", "english": "What is your name?"},
            {"speaker": "李月", "avatar": "👩‍🏫", "chinese": "我叫李月。你叫什么名字？", "pinyin": "Wǒ jiào Lǐ Yuè. Nǐ jiào shénme míngzi?", "english": "My name is Li Yue. What is your name?"},
            {"speaker": "大卫", "avatar": "👨‍🎓", "chinese": "我叫大卫。你是老师吗？", "pinyin": "Wǒ jiào Dàwèi. Nǐ shì lǎoshī ma?", "english": "My name is David. Are you a teacher?"},
            {"speaker": "李月", "avatar": "👩‍🏫", "chinese": "我不是老师，我是学生。", "pinyin": "Wǒ bú shì lǎoshī, wǒ shì xuésheng.", "english": "I am not a teacher, I am a student."}
        ],
        "culture": "Chinese names place the family surname first, followed by the given name. For example, in '李月', '李' (Li) is the family surname and '月' (Yue) is the personal name.",
        "exercises": [
            {"question": "Complete the sentence: 我不是老师，我______学生。", "options": ["是", "叫", "什么", "吗"], "answer": 0, "explanation": "'是' is the equational verb meaning 'am/is/are'."},
            {"question": "How do you ask someone's name in Chinese?", "options": ["你叫什么名字？", "你是谁？", "你好吗？", "他在哪儿？"], "answer": 0, "explanation": "'你叫什么名字？' means 'What is your name?'."}
        ]
    },
    {
        "id": "hsk1-l4", "level": 1, "lessonNumber": 4, "title": "她是我的汉语老师", "pinyin": "Tā shì wǒ de hànyǔ lǎoshī", "english": "She is My Chinese Teacher",
        "summary": "Master possessive particle 的, question pronoun 谁, specify countries with 哪国人, and introduce classmates.",
        "vocabulary": [
            {"character": "她", "pinyin": "tā", "meaning": "she; her"},
            {"character": "谁", "pinyin": "shéi / shuí", "meaning": "who; whom"},
            {"character": "的", "pinyin": "de", "meaning": "possessive structural particle"},
            {"character": "汉语", "pinyin": "hànyǔ", "meaning": "Chinese language"},
            {"character": "哪", "pinyin": "nǎ", "meaning": "which"},
            {"character": "国", "pinyin": "guó", "meaning": "country; nation"},
            {"character": "同学", "pinyin": "tóngxué", "meaning": "classmate"},
            {"character": "朋友", "pinyin": "péngyou", "meaning": "friend"},
            {"character": "中国", "pinyin": "zhōngguó", "meaning": "China"},
            {"character": "美国", "pinyin": "měiguó", "meaning": "United States"}
        ],
        "grammar": [
            {
                "title": "Structural Particle '的' for Possession",
                "pattern": "Noun/Pronoun + 的 + Noun",
                "explanation": "'的' indicates possession or modification. When referring to close relationships (like family), '的' can optionally be omitted.",
                "examples": [
                    {"chinese": "她是我的汉语老师。", "pinyin": "Tā shì wǒ de hànyǔ lǎoshī.", "english": "She is my Chinese teacher."},
                    {"chinese": "他是我的同学。", "pinyin": "Tā shì wǒ de tóngxué.", "english": "He is my classmate."}
                ]
            },
            {
                "title": "Asking Nationality with '哪国人'",
                "pattern": "主语 + 是 + 哪国人？",
                "explanation": "'哪国人' asks which country someone comes from. The response replaces '哪' with the country name.",
                "examples": [
                    {"chinese": "你是哪国人？", "pinyin": "Nǐ shì nǎ guó rén?", "english": "What nationality are you?"},
                    {"chinese": "我是中国人，他是美国人。", "pinyin": "Wǒ shì zhōngguó rén, tā shì měiguó rén.", "english": "I am Chinese, he is American."}
                ]
            }
        ],
        "dialogue": [
            {"speaker": "大卫", "avatar": "👨‍🎓", "chinese": "她是谁？", "pinyin": "Tā shì shéi?", "english": "Who is she?"},
            {"speaker": "李月", "avatar": "👩‍🏫", "chinese": "她是我的汉语老师，她叫李老师。", "pinyin": "Tā shì wǒ de hànyǔ lǎoshī, tā jiào Lǐ lǎoshī.", "english": "She is my Chinese teacher, she is Teacher Li."},
            {"speaker": "大卫", "avatar": "👨‍🎓", "chinese": "她是哪国人？", "pinyin": "Tā shì nǎ guó rén?", "english": "What nationality is she?"},
            {"speaker": "李月", "avatar": "👩‍🏫", "chinese": "她是中国人。他是你的同学吗？", "pinyin": "Tā shì zhōngguó rén. Tā shì nǐ de tóngxué ma?", "english": "She is Chinese. Is he your classmate?"},
            {"speaker": "大卫", "avatar": "👨‍🎓", "chinese": "他是我的同学，也是我的好朋友。", "pinyin": "Tā shì wǒ de tóngxué, yě shì wǒ de hǎo péngyou.", "english": "He is my classmate, and also my good friend."}
        ],
        "culture": "The word for China, 中国 (Zhōngguó), literally means 'Central Kingdom' or 'Middle Kingdom', reflecting ancient Chinese geographical perception.",
        "exercises": [
            {"question": "Translate: 'She is my Chinese teacher.'", "options": ["她是我的汉语老师。", "我是她的学生。", "她是哪国人？", "他叫什么名字？"], "answer": 0, "explanation": "'她' (she) + '是' (is) + '我的汉语老师' (my Chinese teacher)."},
            {"question": "How do you ask 'Which country are you from?'", "options": ["你是哪国人？", "她是谁？", "你叫什么？", "你在哪儿？"], "answer": 0, "explanation": "'哪国人' specifically inquires about country of origin / nationality."}
        ]
    },
    {
        "id": "hsk1-l5", "level": 1, "lessonNumber": 5, "title": "她女儿今年二十岁", "pinyin": "Tā nǚ'ér jīnnián èrshí suì", "english": "Her Daughter is 20 Years Old This Year",
        "summary": "Inquire family members with 口, state age with 岁, ask age with 多大, and count numbers up to 100.",
        "vocabulary": [
            {"character": "家", "pinyin": "jiā", "meaning": "family; home"},
            {"character": "有", "pinyin": "yǒu", "meaning": "to have; there is/are"},
            {"character": "几", "pinyin": "jǐ", "meaning": "how many (<10)"},
            {"character": "口", "pinyin": "kǒu", "meaning": "measure word for family members"},
            {"character": "照片", "pinyin": "zhàopiàn", "meaning": "photo; picture"},
            {"character": "女儿", "pinyin": "nǚ'ér", "meaning": "daughter"},
            {"character": "岁", "pinyin": "suì", "meaning": "years old (age)"},
            {"character": "今年", "pinyin": "jīnnián", "meaning": "this year"},
            {"character": "多大", "pinyin": "duō dà", "meaning": "how old"}
        ],
        "grammar": [
            {
                "title": "Expressing Age with '岁'",
                "pattern": "主语 + (今年) + Number + 岁",
                "explanation": "In Chinese, stating age does not require the verb '是'. Simply state the subject, time word, number, and '岁'.",
                "examples": [
                    {"chinese": "她女儿今年二十岁。", "pinyin": "Tā nǚ'ér jīnnián èrshí suì.", "english": "Her daughter is 20 years old this year."},
                    {"chinese": "你女儿今年几岁？", "pinyin": "Nǐ nǚ'ér jīnnián jǐ suì?", "english": "How old is your daughter this year?"}
                ]
            },
            {
                "title": "Asking Number with '几' (<10)",
                "pattern": "几 + Measure Word + Noun",
                "explanation": "'几' asks about small numbers, typically under 10. For family members, the measure word is '口'.",
                "examples": [
                    {"chinese": "你家有几口人？", "pinyin": "Nǐ jiā yǒu jǐ kǒu rén?", "english": "How many people are there in your family?"},
                    {"chinese": "我家有三口人。", "pinyin": "Wǒ jiā yǒu sān kǒu rén.", "english": "There are three people in my family."}
                ]
            }
        ],
        "dialogue": [
            {"speaker": "大卫", "avatar": "👨‍🎓", "chinese": "你家有几口人？", "pinyin": "Nǐ jiā yǒu jǐ kǒu rén?", "english": "How many people are there in your family?"},
            {"speaker": "李月", "avatar": "👩‍🏫", "chinese": "我家有三口人：爸爸、妈妈和我。", "pinyin": "Wǒ jiā yǒu sān kǒu rén: bàba, māma hé wǒ.", "english": "My family has three people: dad, mom, and me."},
            {"speaker": "大卫", "avatar": "👨‍🎓", "chinese": "李老师今年多大了？", "pinyin": "Lǐ lǎoshī jīnnián duō dà le?", "english": "How old is Teacher Li this year?"},
            {"speaker": "李月", "avatar": "👩‍🏫", "chinese": "她今年五十岁。她女儿今年二十岁。", "pinyin": "Tā jīnnián wǔshí suì. Tā nǚ'ér jīnnián èrshí suì.", "english": "She is 50 years old this year. Her daughter is 20."}
        ],
        "culture": "When asking age: for children under 10 use '几岁'; for peers or young adults use '多大'; for respected elders use '多大年纪' or '您高寿'.",
        "exercises": [
            {"question": "How do you ask a peer how old they are?", "options": ["你今年多大？", "你有几口人？", "你叫什么？", "你是哪国人？"], "answer": 0, "explanation": "'你今年多大？' is the standard way to ask someone's age."},
            {"question": "What is the measure word for family members in '我家有三____人'?", "options": ["口", "个", "本", "岁"], "answer": 0, "explanation": "'口' (kǒu) is the traditional measure word for members of a household."}
        ]
    },
    {
        "id": "hsk1-l6", "level": 1, "lessonNumber": 6, "title": "我会说汉语", "pinyin": "Wǒ huì shuō hànyǔ", "english": "I Can Speak Chinese",
        "summary": "Express acquired abilities with modal verb 会, ask yes-no questions with 吗, and talk about Chinese food.",
        "vocabulary": [
            {"character": "会", "pinyin": "huì", "meaning": "can; know how to (via learning)"},
            {"character": "说", "pinyin": "shuō", "meaning": "to speak; to say"},
            {"character": "菜", "pinyin": "cài", "meaning": "dish; cuisine; food"},
            {"character": "很", "pinyin": "hěn", "meaning": "very; quite"},
            {"character": "好吃", "pinyin": "hǎochī", "meaning": "delicious; tasty"},
            {"character": "做", "pinyin": "zuò", "meaning": "to make; to cook; to do"},
            {"character": "写", "pinyin": "xiě", "meaning": "to write"},
            {"character": "汉字", "pinyin": "hànzì", "meaning": "Chinese character"},
            {"character": "字", "pinyin": "zì", "meaning": "character; word"},
            {"character": "怎么", "pinyin": "zěnme", "meaning": "how (manner of action)"},
            {"character": "读", "pinyin": "dú", "meaning": "to read"}
        ],
        "grammar": [
            {
                "title": "Modal Verb '会' (Acquired Ability)",
                "pattern": "主语 + 会 / 不会 + 动词",
                "explanation": "'会' signifies an ability acquired through learning or practice. Its negative form is '不会'.",
                "examples": [
                    {"chinese": "我会说汉语，不会写汉字。", "pinyin": "Wǒ huì shuō hànyǔ, bú huì xiě hànzì.", "english": "I can speak Chinese, I can't write characters."},
                    {"chinese": "你会做中国菜吗？", "pinyin": "Nǐ huì zuò zhōngguó cài ma?", "english": "Can you cook Chinese food?"}
                ]
            },
            {
                "title": "Asking How with '怎么 + 动词'",
                "pattern": "怎么 + 动词",
                "explanation": "'怎么' placed before a verb inquires about the method or manner of carrying out an action.",
                "examples": [
                    {"chinese": "这个汉字怎么写？", "pinyin": "Zhè ge hànzì zěnme xiě?", "english": "How do you write this Chinese character?"},
                    {"chinese": "这个字怎么读？", "pinyin": "Zhè ge zì zěnme dú?", "english": "How do you read this character?"}
                ]
            }
        ],
        "dialogue": [
            {"speaker": "大卫", "avatar": "👨‍🎓", "chinese": "你会说汉语吗？", "pinyin": "Nǐ huì shuō hànyǔ ma?", "english": "Can you speak Chinese?"},
            {"speaker": "玛丽", "avatar": "👩‍🎓", "chinese": "我会说汉语。你会写汉字吗？", "pinyin": "Wǒ huì shuō hànyǔ. Nǐ huì xiě hànzì ma?", "english": "I can speak Chinese. Can you write characters?"},
            {"speaker": "大卫", "avatar": "👨‍🎓", "chinese": "我会写汉字。中国菜好吃吗？", "pinyin": "Wǒ huì xiě hànzì. Zhōngguó cài hǎochī ma?", "english": "I can write characters. Is Chinese food delicious?"},
            {"speaker": "玛丽", "avatar": "👩‍🎓", "chinese": "中国菜很好吃！你会做中国菜吗？", "pinyin": "Zhōngguó cài hěn hǎochī! Nǐ huì zuò zhōngguó cài ma?", "english": "Chinese food is very delicious! Can you cook Chinese food?"},
            {"speaker": "大卫", "avatar": "👨‍🎓", "chinese": "我不会做，我妈妈会做。", "pinyin": "Wǒ bú huì zuò, wǒ māma huì zuò.", "english": "I cannot cook it, my mom can."}
        ],
        "culture": "Chinese culinary tradition emphasizes color, fragrance, and taste (色香味俱全). Dishes are typically shared communally from central plates.",
        "exercises": [
            {"question": "How do you say 'I can cook Chinese food'?", "options": ["我会做中国菜。", "我想吃中国菜。", "我不做中国菜。", "中国菜很好吃。"], "answer": 0, "explanation": "'会' denotes learned ability, so '我会做' means 'I know how to cook'."},
            {"question": "How do you ask 'How do you write this character?'", "options": ["这个汉字怎么写？", "这个汉字是什么？", "谁写汉字？", "你会写汉字吗？"], "answer": 0, "explanation": "'怎么 + 动词' asks how an action is performed: 怎么写."}
        ]
    },
    {
        "id": "hsk1-l7", "level": 1, "lessonNumber": 7, "title": "今天几号", "pinyin": "Jīntiān jǐ hào", "english": "What's the Date Today?",
        "summary": "Express year, month, date, days of the week, and master Chinese temporal sequence (year → month → day → weekday).",
        "vocabulary": [
            {"character": "请问", "pinyin": "qǐngwèn", "meaning": "excuse me; may I ask"},
            {"character": "今天", "pinyin": "jīntiān", "meaning": "today"},
            {"character": "月", "pinyin": "yuè", "meaning": "month; moon"},
            {"character": "号", "pinyin": "hào", "meaning": "day of month; number"},
            {"character": "星期", "pinyin": "xīngqī", "meaning": "week"},
            {"character": "昨天", "pinyin": "zuótiān", "meaning": "yesterday"},
            {"character": "明天", "pinyin": "míngtiān", "meaning": "tomorrow"},
            {"character": "学校", "pinyin": "xuéxiào", "meaning": "school"},
            {"character": "去", "pinyin": "qù", "meaning": "to go"},
            {"character": "看书", "pinyin": "kàn shū", "meaning": "to read; read books"}
        ],
        "grammar": [
            {
                "title": "Chinese Date Order: Year, Month, Day, Week",
                "pattern": "年 + 月 + 号 + 星期几",
                "explanation": "Chinese always expresses time from the largest unit to the smallest: Year → Month → Day → Day of Week.",
                "examples": [
                    {"chinese": "今天九月一号，星期三。", "pinyin": "Jīntiān jiǔ yuè yī hào, xīngqīsān.", "english": "Today is September 1st, Wednesday."},
                    {"chinese": "昨天是八月三十一号。", "pinyin": "Zuótiān shì bā yuè sānshíyī hào.", "english": "Yesterday was August 31st."}
                ]
            },
            {
                "title": "Sentence with Serial Verb: 去 + Place + Action",
                "pattern": "主语 + 去 + 地方 + 做什么",
                "explanation": "'去' followed by a destination and a purpose verb expresses going somewhere to do something.",
                "examples": [
                    {"chinese": "明天我去学校看书。", "pinyin": "Míngtiān wǒ qù xuéxiào kàn shū.", "english": "Tomorrow I will go to school to read."},
                    {"chinese": "你去哪儿？我去中国学汉语。", "pinyin": "Nǐ qù nǎr? Wǒ qù zhōngguó xué hànyǔ.", "english": "Where are you going? I'm going to China to study Chinese."}
                ]
            }
        ],
        "dialogue": [
            {"speaker": "大卫", "avatar": "👨‍🎓", "chinese": "请问，今天几号？", "pinyin": "Qǐngwèn, jīntiān jǐ hào?", "english": "Excuse me, what is the date today?"},
            {"speaker": "李月", "avatar": "👩‍🏫", "chinese": "今天九月一号。", "pinyin": "Jīntiān jiǔ yuè yī hào.", "english": "Today is September 1st."},
            {"speaker": "大卫", "avatar": "👨‍🎓", "chinese": "今天星期几？", "pinyin": "Jīntiān xīngqī jǐ?", "english": "What day of the week is today?"},
            {"speaker": "李月", "avatar": "👩‍🏫", "chinese": "今天星期三。明天你去哪儿？", "pinyin": "Jīntiān xīngqīsān. Míngtiān nǐ qù nǎr?", "english": "Today is Wednesday. Where are you going tomorrow?"},
            {"speaker": "大卫", "avatar": "👨‍🎓", "chinese": "明天我去学校看书。", "pinyin": "Míngtiān wǒ qù xuéxiào kàn shū.", "english": "Tomorrow I'm going to school to read."}
        ],
        "culture": "In spoken Chinese, dates use '号' (hào), while formal written Chinese uses '日' (rì). Sunday is 星期天 or 星期日, while Monday through Saturday use numbers 1 through 6.",
        "exercises": [
            {"question": "How do you ask 'What is the date today?'", "options": ["今天几号？", "今天几点？", "今天星期几？", "你是哪国人？"], "answer": 0, "explanation": "'今天几号？' asks for the day of the month."},
            {"question": "Translate: 'Tomorrow I am going to school to read.'", "options": ["明天我去学校看书。", "今天我在家看书。", "昨天我去学校了。", "明天我去看电影。"], "answer": 0, "explanation": "Subject (明天我) + 去 + Place (学校) + Verb (看书)."}
        ]
    },
    {
        "id": "hsk1-l8", "level": 1, "lessonNumber": 8, "title": "我想喝茶", "pinyin": "Wǒ xiǎng hē chá", "english": "I'd Like Some Tea",
        "summary": "Express desires with optative verb 想, use measure words 个 and 杯, and discuss prices with 多少钱 and 块.",
        "vocabulary": [
            {"character": "想", "pinyin": "xiǎng", "meaning": "would like to; to want; to miss"},
            {"character": "喝", "pinyin": "hē", "meaning": "to drink"},
            {"character": "茶", "pinyin": "chá", "meaning": "tea"},
            {"character": "吃", "pinyin": "chī", "meaning": "to eat"},
            {"character": "米饭", "pinyin": "mǐfàn", "meaning": "cooked rice"},
            {"character": "下午", "pinyin": "xiàwǔ", "meaning": "afternoon"},
            {"character": "商店", "pinyin": "shāngdiàn", "meaning": "shop; store"},
            {"character": "买", "pinyin": "mǎi", "meaning": "to buy"},
            {"character": "个", "pinyin": "gè", "meaning": "general measure word"},
            {"character": "杯子", "pinyin": "bēizi", "meaning": "cup; glass"},
            {"character": "这", "pinyin": "zhè", "meaning": "this"},
            {"character": "多少", "pinyin": "duōshao", "meaning": "how many; how much"},
            {"character": "钱", "pinyin": "qián", "meaning": "money"},
            {"character": "块", "pinyin": "kuài", "meaning": "yuan (colloquial unit of currency)"},
            {"character": "那", "pinyin": "nà", "meaning": "that"}
        ],
        "grammar": [
            {
                "title": "Optative Verb '想' (Desire / Wish)",
                "pattern": "主语 + 想 + 动词",
                "explanation": "'想' expresses a desire or inclination to do something. The negative form is '不想'.",
                "examples": [
                    {"chinese": "我想喝茶，不想喝咖啡。", "pinyin": "Wǒ xiǎng hē chá, bù xiǎng hē kāfēi.", "english": "I would like to drink tea, I don't want to drink coffee."},
                    {"chinese": "下午你想去哪儿？", "pinyin": "Xiàwǔ nǐ xiǎng qù nǎr?", "english": "Where would you like to go this afternoon?"}
                ]
            },
            {
                "title": "Asking Price with '多少钱'",
                "pattern": "这 / 那 + Measure Word + 东西 + 多少钱？",
                "explanation": "'多少钱' is the standard question for prices of goods.",
                "examples": [
                    {"chinese": "这个杯子多少钱？", "pinyin": "Zhè ge bēizi duōshao qián?", "english": "How much is this cup?"},
                    {"chinese": "这个杯子二十八块钱。", "pinyin": "Zhè ge bēizi èrshíbā kuài qián.", "english": "This cup is 28 yuan."}
                ]
            }
        ],
        "dialogue": [
            {"speaker": "服务员", "avatar": "👨‍🍳", "chinese": "你好，你想喝什么？", "pinyin": "Nǐ hǎo, nǐ xiǎng hē shénme?", "english": "Hello, what would you like to drink?"},
            {"speaker": "大卫", "avatar": "👨‍🎓", "chinese": "我想喝茶。你呢，玛丽？", "pinyin": "Wǒ xiǎng hē chá. Nǐ ne, Mǎlì?", "english": "I'd like to drink tea. How about you, Mary?"},
            {"speaker": "玛丽", "avatar": "👩‍🎓", "chinese": "我想喝水，还想吃米饭。", "pinyin": "Wǒ xiǎng hē shuǐ, hái xiǎng chī mǐfàn.", "english": "I want to drink water, and also want to eat rice."},
            {"speaker": "大卫", "avatar": "👨‍🎓", "chinese": "下午你想去哪儿？", "pinyin": "Xiàwǔ nǐ xiǎng qù nǎr?", "english": "Where would you like to go this afternoon?"},
            {"speaker": "玛丽", "avatar": "👩‍🎓", "chinese": "我想去商店买一个杯子。", "pinyin": "Wǒ xiǎng qù shāngdiàn mǎi yí ge bēizi.", "english": "I want to go to the store to buy a cup."},
            {"speaker": "大卫", "avatar": "👨‍🎓", "chinese": "这个杯子多少钱？", "pinyin": "Zhè ge bēizi duōshao qián?", "english": "How much is this cup?"},
            {"speaker": "服务员", "avatar": "👨‍🍳", "chinese": "这个杯子二十八块钱。", "pinyin": "Zhè ge bēizi èrshíbā kuài qián.", "english": "This cup is 28 yuan."}
        ],
        "culture": "Tea drinking is deeply embedded in Chinese hospitality. Serving tea to guests with both hands is a sign of respect and welcome.",
        "exercises": [
            {"question": "How do you ask 'How much is this cup?'", "options": ["这个杯子多少钱？", "这个杯子是什么？", "你想喝什么？", "杯子在哪儿？"], "answer": 0, "explanation": "'多少钱' means 'how much money / how much does it cost'."},
            {"question": "Complete: 我想去商店______一个杯子。", "options": ["买", "看", "喝", "叫"], "answer": 0, "explanation": "'买' (mǎi) means to buy."}
        ]
    },
    {
        "id": "hsk1-l9", "level": 1, "lessonNumber": 9, "title": "你儿子在哪儿工作", "pinyin": "Nǐ érzi zài nǎr gōngzuò", "english": "Where Does Your Son Work?",
        "summary": "Use preposition 在 to indicate location, master spatial position words 上面 and 下面, and talk about professions.",
        "vocabulary": [
            {"character": "小", "pinyin": "xiǎo", "meaning": "small; little"},
            {"character": "猫", "pinyin": "māo", "meaning": "cat"},
            {"character": "在", "pinyin": "zài", "meaning": "at; in; on (locative preposition)"},
            {"character": "哪儿", "pinyin": "nǎr", "meaning": "where"},
            {"character": "狗", "pinyin": "gǒu", "meaning": "dog"},
            {"character": "椅子", "pinyin": "yǐzi", "meaning": "chair"},
            {"character": "下面", "pinyin": "xiàmiàn", "meaning": "under; below"},
            {"character": "工作", "pinyin": "gōngzuò", "meaning": "to work; job"},
            {"character": "儿子", "pinyin": "érzi", "meaning": "son"},
            {"character": "医院", "pinyin": "yīyuàn", "meaning": "hospital"},
            {"character": "医生", "pinyin": "yīshēng", "meaning": "doctor"},
            {"character": "爸爸", "pinyin": "bàba", "meaning": "father; dad"}
        ],
        "grammar": [
            {
                "title": "Preposition '在' (Location before Action)",
                "pattern": "主语 + 在 + 地方 + 动词",
                "explanation": "In Chinese, the location of an action is stated before the verb: 在医院工作 (work at the hospital), 在学校看书 (read at school).",
                "examples": [
                    {"chinese": "我儿子在医院工作，他是医生。", "pinyin": "Wǒ érzi zài yīyuàn gōngzuò, tā shì yīshēng.", "english": "My son works at the hospital, he is a doctor."},
                    {"chinese": "你在哪儿工作？", "pinyin": "Nǐ zài nǎr gōngzuò?", "english": "Where do you work?"}
                ]
            },
            {
                "title": "Expressing Spatial Positions with '在...下面/上面'",
                "pattern": "物体 + 在 + 参考物 + 上面 / 下面",
                "explanation": "To state where an object is relative to another, place the reference noun before the spatial position word.",
                "examples": [
                    {"chinese": "小猫在椅子上面。", "pinyin": "Xiǎo māo zài yǐzi shàngmiàn.", "english": "The kitten is on the chair."},
                    {"chinese": "小狗在椅子下面。", "pinyin": "Xiǎo gǒu zài yǐzi xiàmiàn.", "english": "The dog is under the chair."}
                ]
            }
        ],
        "dialogue": [
            {"speaker": "大卫", "avatar": "👨‍🎓", "chinese": "小猫在哪儿？", "pinyin": "Xiǎo māo zài nǎr?", "english": "Where is the kitten?"},
            {"speaker": "李月", "avatar": "👩‍🏫", "chinese": "小猫在椅子上面，小狗在椅子下面。", "pinyin": "Xiǎo māo zài yǐzi shàngmiàn, xiǎo gǒu zài yǐzi xiàmiàn.", "english": "The kitten is on the chair, the puppy is under the chair."},
            {"speaker": "大卫", "avatar": "👨‍🎓", "chinese": "你在学校工作吗？", "pinyin": "Nǐ zài xuéxiào gōngzuò ma?", "english": "Do you work at school?"},
            {"speaker": "李月", "avatar": "👩‍🏫", "chinese": "我不在学校工作，我在医院工作。我是医生。", "pinyin": "Wǒ bú zài xuéxiào gōngzuò, wǒ zài yīyuàn gōngzuò. Wǒ shì yīshēng.", "english": "I don't work at school, I work at the hospital. I am a doctor."},
            {"speaker": "大卫", "avatar": "👨‍🎓", "chinese": "你儿子在哪儿工作？", "pinyin": "Nǐ érzi zài nǎr gōngzuò?", "english": "Where does your son work?"},
            {"speaker": "李月", "avatar": "👩‍🏫", "chinese": "我儿子也在医院工作，他也是医生。", "pinyin": "Wǒ érzi yě zài yīyuàn gōngzuò, tā yě shì yīshēng.", "english": "My son also works at the hospital, he is also a doctor."}
        ],
        "culture": "Unlike English, which places location at the end of a sentence ('He works at a hospital'), Mandarin places location before the action ('他 在医院 工作').",
        "exercises": [
            {"question": "Translate: 'The dog is under the chair.'", "options": ["小狗在椅子下面。", "小猫在椅子上面。", "小狗在医院里。", "他在学校看书。"], "answer": 0, "explanation": "'在椅子下面' indicates 'under the chair'."},
            {"question": "Where does a doctor (医生) work?", "options": ["医院", "学校", "商店", "饭店"], "answer": 0, "explanation": "A doctor works at a hospital (医院)."}
        ]
    },
    {
        "id": "hsk1-l10", "level": 1, "lessonNumber": 10, "title": "我能坐这儿吗", "pinyin": "Wǒ néng zuò zhèr ma", "english": "Can I Sit Here?",
        "summary": "Express permission with modal verb 能, master spatial words 前面 and 后面, and use conjunction 和.",
        "vocabulary": [
            {"character": "桌子", "pinyin": "zhuōzi", "meaning": "table; desk"},
            {"character": "上", "pinyin": "shàng", "meaning": "on; above"},
            {"character": "电脑", "pinyin": "diànnǎo", "meaning": "computer"},
            {"character": "和", "pinyin": "hé", "meaning": "and (joins nouns)"},
            {"character": "本", "pinyin": "běn", "meaning": "measure word for books"},
            {"character": "里", "pinyin": "lǐ", "meaning": "in; inside"},
            {"character": "前面", "pinyin": "qiánmiàn", "meaning": "front; ahead"},
            {"character": "后面", "pinyin": "hòumiàn", "meaning": "back; behind"},
            {"character": "这儿", "pinyin": "zhèr", "meaning": "here"},
            {"character": "没有", "pinyin": "méiyǒu", "meaning": "there is not; don't have"},
            {"character": "能", "pinyin": "néng", "meaning": "can; may (permission/ability)"},
            {"character": "坐", "pinyin": "zuò", "meaning": "to sit"}
        ],
        "grammar": [
            {
                "title": "Expressing Permission with '能'",
                "pattern": "主语 + 能 + 动词 + 吗？",
                "explanation": "'能' is an optative modal verb expressing capability or permission ('may I...').",
                "examples": [
                    {"chinese": "我能坐这儿吗？请坐。", "pinyin": "Wǒ néng zuò zhèr ma? Qǐng zuò.", "english": "Can I sit here? Please sit."},
                    {"chinese": "今天我不能去学校。", "pinyin": "Jīntiān wǒ bù néng qù xuéxiào.", "english": "Today I cannot go to school."}
                ]
            },
            {
                "title": "Conjunction '和' for Nouns",
                "pattern": "Noun A + 和 + Noun B",
                "explanation": "'和' connects nouns or noun phrases together. It is not used to connect clauses or sentences.",
                "examples": [
                    {"chinese": "桌子上有一个电脑和两本书。", "pinyin": "Zhuōzi shang yǒu yí ge diànnǎo hé liǎng běn shū.", "english": "There is a computer and two books on the table."},
                    {"chinese": "我和大卫都是学生。", "pinyin": "Wǒ hé Dàwèi dōu shì xuésheng.", "english": "Both David and I are students."}
                ]
            }
        ],
        "dialogue": [
            {"speaker": "大卫", "avatar": "👨‍🎓", "chinese": "桌子上有什么？", "pinyin": "Zhuōzi shang yǒu shénme?", "english": "What is on the table?"},
            {"speaker": "玛丽", "avatar": "👩‍🎓", "chinese": "桌子上有一个电脑和两本书。", "pinyin": "Zhuōzi shang yǒu yí ge diànnǎo hé liǎng běn shū.", "english": "There is a computer and two books on the table."},
            {"speaker": "大卫", "avatar": "👨‍🎓", "chinese": "前面那个人是谁？", "pinyin": "Qiánmiàn nà ge rén shì shéi?", "english": "Who is that person in front?"},
            {"speaker": "玛丽", "avatar": "👩‍🎓", "chinese": "前面那个人是王方，后面那个人是谢朋。", "pinyin": "Qiánmiàn nà ge rén shì Wáng Fāng, hòumiàn nà ge rén shì Xiè Péng.", "english": "The person in front is Wang Fang, the person behind is Xie Peng."},
            {"speaker": "大卫", "avatar": "👨‍🎓", "chinese": "这儿有人吗？我能坐这儿吗？", "pinyin": "Zhèr yǒu rén ma? Wǒ néng zuò zhèr ma?", "english": "Is anyone here? Can I sit here?"},
            {"speaker": "玛丽", "avatar": "👩‍🎓", "chinese": "这儿没有人，请坐。", "pinyin": "Zhèr méiyǒu rén, qǐng zuò.", "english": "There is no one here, please sit."}
        ],
        "culture": "When offering a seat to a guest in China, saying '请坐' (qǐng zuò) and pouring a cup of hot water or tea is customary etiquette.",
        "exercises": [
            {"question": "How do you politely ask 'May I sit here?'", "options": ["我能坐这儿吗？", "你叫什么名字？", "他在哪儿？", "这里有什么？"], "answer": 0, "explanation": "'我能坐这儿吗？' is the standard polite request to take a seat."},
            {"question": "What is the correct measure word for books in '两____书'?", "options": ["本", "个", "口", "块"], "answer": 0, "explanation": "'本' (běn) is the dedicated measure word for bound volumes and books."}
        ]
    },
    {
        "id": "hsk1-l11", "level": 1, "lessonNumber": 11, "title": "现在几点", "pinyin": "Xiànzài jǐ diǎn", "english": "What Time is It Now?",
        "summary": "Tell clock time with 点 and 分, position temporal adverbs before the verb, and discuss daily schedules.",
        "vocabulary": [
            {"character": "现在", "pinyin": "xiànzài", "meaning": "now; currently"},
            {"character": "点", "pinyin": "diǎn", "meaning": "o'clock; dot"},
            {"character": "分", "pinyin": "fēn", "meaning": "minute"},
            {"character": "中午", "pinyin": "zhōngwǔ", "meaning": "noon; midday"},
            {"character": "吃饭", "pinyin": "chīfàn", "meaning": "to eat a meal"},
            {"character": "时候", "pinyin": "shíhou", "meaning": "time; moment"},
            {"character": "回", "pinyin": "huí", "meaning": "to return; go back"},
            {"character": "我们", "pinyin": "wǒmen", "meaning": "we; us"},
            {"character": "电影", "pinyin": "diànyǐng", "meaning": "movie; film"},
            {"character": "住", "pinyin": "zhù", "meaning": "to live; reside"},
            {"character": "前", "pinyin": "qián", "meaning": "before; earlier"}
        ],
        "grammar": [
            {
                "title": "Telling Clock Time with 点 and 分",
                "pattern": "Number + 点 (+ Number + 分)",
                "explanation": "'点' marks hours and '分' marks minutes. Minutes under ten use '零' (líng): 八点零五分 (8:05).",
                "examples": [
                    {"chinese": "现在十点十分。", "pinyin": "Xiànzài shí diǎn shí fēn.", "english": "It is 10:10 now."},
                    {"chinese": "我们中午十二点吃饭。", "pinyin": "Wǒmen zhōngwǔ shí'èr diǎn chīfàn.", "english": "We eat lunch at 12:00 noon."}
                ]
            },
            {
                "title": "Time Phrases as Adverbials before Verb",
                "pattern": "主语 + 时间 + 动词 / 时间 + 主语 + 动词",
                "explanation": "In Chinese, time expressions must precede the predicate verb, never placed at the end of the sentence.",
                "examples": [
                    {"chinese": "爸爸下午五点回家。", "pinyin": "Bàba xiàwǔ wǔ diǎn huí jiā.", "english": "Dad returns home at 5 PM."},
                    {"chinese": "我们什么时候去看电影？", "pinyin": "Wǒmen shénme shíhou qù kàn diànyǐng?", "english": "When are we going to see the movie?"}
                ]
            }
        ],
        "dialogue": [
            {"speaker": "大卫", "avatar": "👨‍🎓", "chinese": "现在几点？", "pinyin": "Xiànzài jǐ diǎn?", "english": "What time is it now?"},
            {"speaker": "李月", "avatar": "👩‍🏫", "chinese": "现在十点十分。", "pinyin": "Xiànzài shí diǎn shí fēn.", "english": "It is 10:10 now."},
            {"speaker": "大卫", "avatar": "👨‍🎓", "chinese": "中午几点吃饭？", "pinyin": "Zhōngwǔ jǐ diǎn chīfàn?", "english": "What time do we eat lunch?"},
            {"speaker": "李月", "avatar": "👩‍🏫", "chinese": "十二点吃饭。爸爸什么时候回家？", "pinyin": "Shí'èr diǎn chīfàn. Bàba shénme shíhou huí jiā?", "english": "Eat at 12:00. When is dad coming home?"},
            {"speaker": "大卫", "avatar": "👨‍🎓", "chinese": "下午五点。我们什么时候去看电影？", "pinyin": "Xiàwǔ wǔ diǎn. Wǒmen shénme shíhou qù kàn diànyǐng?", "english": "At 5:00 PM. When are we going to watch the movie?"},
            {"speaker": "李月", "avatar": "👩‍🏫", "chinese": "六点三十分前去。", "pinyin": "Liù diǎn sānshí fēn qián qù.", "english": "Let's go before 6:30."}
        ],
        "culture": "Daily time in China is framed broadly by periods: 早上 (early morning), 上午 (morning), 中午 (noon), 下午 (afternoon), 晚上 (evening).",
        "exercises": [
            {"question": "How do you say '10:10' in Chinese?", "options": ["十点十分", "十一点十分", "十点零五分", "九点十分"], "answer": 0, "explanation": "'十点' (10 o'clock) + '十分' (10 minutes) = 十点十分."},
            {"question": "Choose the correct word order: 'We eat at 12 o'clock.'", "options": ["我们十二点吃饭。", "我们吃饭十二点。", "十二点吃饭我们。", "吃饭我们十二点。"], "answer": 0, "explanation": "Time adverbs must precede the verb: 我们 (Subject) + 十二点 (Time) + 吃饭 (Verb)."}
        ]
    },
    {
        "id": "hsk1-l12", "level": 1, "lessonNumber": 12, "title": "明天天气怎么样", "pinyin": "Míngtiān tiānqì zěnmeyàng", "english": "What Will the Weather Be Like Tomorrow?",
        "summary": "Describe weather with 冷, 热, and 下雨, use degree pattern 太...了, and express future possibility with 会.",
        "vocabulary": [
            {"character": "天气", "pinyin": "tiānqì", "meaning": "weather"},
            {"character": "怎么样", "pinyin": "zěnmeyàng", "meaning": "how is it; what about"},
            {"character": "太", "pinyin": "tài", "meaning": "too; excessively"},
            {"character": "热", "pinyin": "rè", "meaning": "hot"},
            {"character": "冷", "pinyin": "lěng", "meaning": "cold"},
            {"character": "下雨", "pinyin": "xiàyǔ", "meaning": "to rain"},
            {"character": "水", "pinyin": "shuǐ", "meaning": "water"},
            {"character": "些", "pinyin": "xiē", "meaning": "some; a few"},
            {"character": "水果", "pinyin": "shuǐguǒ", "meaning": "fruit"},
            {"character": "身体", "pinyin": "shēntǐ", "meaning": "health; body"},
            {"character": "爱", "pinyin": "ài", "meaning": "to love; like doing"},
            {"character": "多", "pinyin": "duō", "meaning": "much; many; more"}
        ],
        "grammar": [
            {
                "title": "Degree Exclamation: 太 + Adjective + 了",
                "pattern": "太 + 形容词 + 了",
                "explanation": "'太...了' conveys an extreme degree, either enthusiastic praise ('太好了!') or excess ('太热了!').",
                "examples": [
                    {"chinese": "今天太热了！", "pinyin": "Jīntiān tài rè le!", "english": "Today is too hot!"},
                    {"chinese": "太冷了，不想去学校。", "pinyin": "Tài lěng le, bù xiǎng qù xuéxiào.", "english": "It's too cold, I don't want to go to school."}
                ]
            },
            {
                "title": "Modal Verb '会' Indicating Possibility / Future",
                "pattern": "主语 + 会 + 动词",
                "explanation": "Here '会' indicates an anticipated future occurrence or possibility ('will happen').",
                "examples": [
                    {"chinese": "明天会下雨吗？", "pinyin": "Míngtiān huì xiàyǔ ma?", "english": "Will it rain tomorrow?"},
                    {"chinese": "明天不会下雨，天气很好。", "pinyin": "Míngtiān bú huì xiàyǔ, tiānqì hěn hǎo.", "english": "It won't rain tomorrow, weather will be very good."}
                ]
            }
        ],
        "dialogue": [
            {"speaker": "大卫", "avatar": "👨‍🎓", "chinese": "昨天北京的天气怎么样？", "pinyin": "Zuótiān Běijīng de tiānqì zěnmeyàng?", "english": "How was the weather in Beijing yesterday?"},
            {"speaker": "李月", "avatar": "👩‍🏫", "chinese": "太热了。今天天气很好，不冷也不热。", "pinyin": "Tài rè le. Jīntiān tiānqì hěn hǎo, bù lěng yě bú rè.", "english": "Too hot. Today the weather is great, neither cold nor hot."},
            {"speaker": "大卫", "avatar": "👨‍🎓", "chinese": "明天天气怎么样？会下雨吗？", "pinyin": "Míngtiān tiānqì zěnmeyàng? Huì xiàyǔ ma?", "english": "What will the weather be like tomorrow? Will it rain?"},
            {"speaker": "李月", "avatar": "👩‍🏫", "chinese": "明天会下雨，天气很冷。", "pinyin": "Míngtiān huì xiàyǔ, tiānqì hěn lěng.", "english": "Tomorrow it will rain, weather will be cold."},
            {"speaker": "大卫", "avatar": "👨‍🎓", "chinese": "天气冷，多喝水，多吃些水果。", "pinyin": "Tiānqì lěng, duō hē shuǐ, duō chī xiē shuǐguǒ.", "english": "Weather is cold, drink more water, eat some fruit."},
            {"speaker": "李月", "avatar": "👩‍🏫", "chinese": "谢谢，我的身体很好。", "pinyin": "Xièxie, wǒ de shēntǐ hěn hǎo.", "english": "Thanks, my health is very good."}
        ],
        "culture": "In Chinese culture, advising someone to '多喝热水' (drink more warm water) and eat fruit is a common expression of genuine care and warmth.",
        "exercises": [
            {"question": "How do you say 'Too hot!' in Chinese?", "options": ["太热了！", "太冷了！", "太好了！", "多喝水！"], "answer": 0, "explanation": "'太' + 热 (hot) + '了' = 太热了！"},
            {"question": "How do you ask 'How is the weather today?'", "options": ["今天天气怎么样？", "现在几点？", "你叫什么名字？", "你去哪儿？"], "answer": 0, "explanation": "'天气怎么样？' asks about the condition of the weather."}
        ]
    },
    {
        "id": "hsk1-l13", "level": 1, "lessonNumber": 13, "title": "他在学做中国菜呢", "pinyin": "Tā zài xué zuò zhōngguó cài ne", "english": "He is Learning to Cook Chinese Food",
        "summary": "Express ongoing actions with 在...呢, master telephone manners with 喂, and communicate preferences with 喜欢.",
        "vocabulary": [
            {"character": "喂", "pinyin": "wèi", "meaning": "hello (on telephone)"},
            {"character": "也", "pinyin": "yě", "meaning": "also; too"},
            {"character": "学习", "pinyin": "xuéxí", "meaning": "to study; learn"},
            {"character": "上午", "pinyin": "shàngwǔ", "meaning": "morning; forenoon"},
            {"character": "睡觉", "pinyin": "shuìjiào", "meaning": "to sleep"},
            {"character": "电视", "pinyin": "diànshì", "meaning": "television"},
            {"character": "喜欢", "pinyin": "xǐhuan", "meaning": "to like; enjoy"},
            {"character": "给", "pinyin": "gěi", "meaning": "to; for; give"},
            {"character": "打电话", "pinyin": "dǎ diànhuà", "meaning": "to make a phone call"}
        ],
        "grammar": [
            {
                "title": "Progressive Aspect: 在 + 动词 + (呢)",
                "pattern": "主语 + 在 + 动词 + (宾语) + (呢)",
                "explanation": "'在' before a verb indicates an action is currently in progress, similar to English '-ing'. '呢' at the end reinforces the continuous mood.",
                "examples": [
                    {"chinese": "他在学做中国菜呢。", "pinyin": "Tā zài xué zuò zhōngguó cài ne.", "english": "He is learning to cook Chinese food."},
                    {"chinese": "你在做什么呢？我在看书呢。", "pinyin": "Nǐ zài zuò shénme ne? Wǒ zài kàn shū ne.", "english": "What are you doing? I am reading."}
                ]
            },
            {
                "title": "Making Phone Calls with '给...打电话'",
                "pattern": "主语 + 给 + 某人 + 打电话",
                "explanation": "To call someone on the telephone, use the preposition '给' (to): 给老师打电话.",
                "examples": [
                    {"chinese": "我给王老师打电话了。", "pinyin": "Wǒ gěi Wáng lǎoshī dǎ diànhuà le.", "english": "I made a phone call to Teacher Wang."},
                    {"chinese": "他在给朋友打电话呢。", "pinyin": "Tā zài gěi péngyou dǎ diànhuà ne.", "english": "He is calling his friend."}
                ]
            }
        ],
        "dialogue": [
            {"speaker": "大卫", "avatar": "👨‍🎓", "chinese": "喂，你在做什么呢？", "pinyin": "Wèi, nǐ zài zuò shénme ne?", "english": "Hello, what are you doing?"},
            {"speaker": "李月", "avatar": "👩‍🏫", "chinese": "我在看书呢。你呢？", "pinyin": "Wǒ zài kàn shū ne. Nǐ ne?", "english": "I am reading. What about you?"},
            {"speaker": "大卫", "avatar": "👨‍🎓", "chinese": "我在学做中国菜呢。昨天上午你做什么了？", "pinyin": "Wǒ zài xué zuò zhōngguó cài ne. Zuótiān shàngwǔ nǐ zuò shénme le?", "english": "I am learning to cook Chinese food. What did you do yesterday morning?"},
            {"speaker": "李月", "avatar": "👩‍🏫", "chinese": "昨天上午我在睡觉，没去学校。", "pinyin": "Zuótiān shàngwǔ wǒ zài shuìjiào, méi qù xuéxiào.", "english": "Yesterday morning I was sleeping, didn't go to school."},
            {"speaker": "大卫", "avatar": "👨‍🎓", "chinese": "他喜欢看电视吗？", "pinyin": "Tā xǐhuan kàn diànshì ma?", "english": "Does he like watching TV?"},
            {"speaker": "李月", "avatar": "👩‍🏫", "chinese": "他不喜欢看电视，他喜欢听音乐。", "pinyin": "Tā bù xǐhuan kàn diànshì, tā xǐhuan tīng yīnyuè.", "english": "He doesn't like watching TV, he likes listening to music."}
        ],
        "culture": "Answering phone calls in Chinese begins with the greeting '喂' (wèi), spoken with a rising second or falling fourth tone.",
        "exercises": [
            {"question": "How do you express 'I am reading a book right now'?", "options": ["我在看书呢。", "我想看书。", "我看了书。", "我喜欢看书。"], "answer": 0, "explanation": "'在 + 动词 + 呢' indicates ongoing continuous action."},
            {"question": "How do you answer the telephone in Mandarin?", "options": ["喂", "您好", "再见", "谢谢"], "answer": 0, "explanation": "'喂' (wèi) is the standard phone greeting."}
        ]
    },
    {
        "id": "hsk1-l14", "level": 1, "lessonNumber": 14, "title": "她买了不少衣服", "pinyin": "Tā mǎi le bù shǎo yīfu", "english": "She Has Bought Quite a Few Clothes",
        "summary": "Master aspect particle 了 for completed actions, express quantities with 一点儿 and 不少, and use time word 后.",
        "vocabulary": [
            {"character": "东西", "pinyin": "dōngxi", "meaning": "things; stuff"},
            {"character": "一点儿", "pinyin": "yìdiǎnr", "meaning": "a little; a bit"},
            {"character": "苹果", "pinyin": "píngguǒ", "meaning": "apple"},
            {"character": "看见", "pinyin": "kànjiàn", "meaning": "to see; catch sight of"},
            {"character": "先生", "pinyin": "xiānsheng", "meaning": "Mr.; sir"},
            {"character": "开", "pinyin": "kāi", "meaning": "to drive; open"},
            {"character": "车", "pinyin": "chē", "meaning": "vehicle; car"},
            {"character": "回来", "pinyin": "huílái", "meaning": "to return; come back"},
            {"character": "分钟", "pinyin": "fēnzhōng", "meaning": "minute"},
            {"character": "后", "pinyin": "hòu", "meaning": "after; later"},
            {"character": "衣服", "pinyin": "yīfu", "meaning": "clothes; clothing"},
            {"character": "漂亮", "pinyin": "piàoliang", "meaning": "beautiful; pretty"},
            {"character": "不少", "pinyin": "bù shǎo", "meaning": "quite a few; many"}
        ],
        "grammar": [
            {
                "title": "Aspect Particle '了' for Completed Actions",
                "pattern": "动词 + 了 + 数量词 + 宾语",
                "explanation": "When an action has occurred or been completed, '了' follows the verb, particularly when the object is quantified.",
                "examples": [
                    {"chinese": "她买了不少衣服。", "pinyin": "Tā mǎi le bù shǎo yīfu.", "english": "She bought quite a few clothes."},
                    {"chinese": "我买了一点儿苹果。", "pinyin": "Wǒ mǎi le yìdiǎnr píngguǒ.", "english": "I bought a few apples."}
                ]
            },
            {
                "title": "Expressing Future Time with '...后'",
                "pattern": "Time duration + 后",
                "explanation": "Placing '后' after a duration of time denotes 'after' or 'in... time'.",
                "examples": [
                    {"chinese": "张先生四十分钟后回来。", "pinyin": "Zhāng xiānsheng sìshí fēnzhōng hòu huílái.", "english": "Mr. Zhang will return in 40 minutes."},
                    {"chinese": "三天后我们去北京。", "pinyin": "Sān tiān hòu wǒmen qù Běijīng.", "english": "In three days we will go to Beijing."}
                ]
            }
        ],
        "dialogue": [
            {"speaker": "大卫", "avatar": "👨‍🎓", "chinese": "昨天上午你去哪儿了？", "pinyin": "Zuótiān shàngwǔ nǐ qù nǎr le?", "english": "Where did you go yesterday morning?"},
            {"speaker": "玛丽", "avatar": "👩‍🎓", "chinese": "我去商店买东西了。", "pinyin": "Wǒ qù shāngdiàn mǎi dōngxi le.", "english": "I went to the shop to buy things."},
            {"speaker": "大卫", "avatar": "👨‍🎓", "chinese": "你买什么了？", "pinyin": "Nǐ mǎi shénme le?", "english": "What did you buy?"},
            {"speaker": "玛丽", "avatar": "👩‍🎓", "chinese": "我买了一点儿苹果，还买了不少衣服。", "pinyin": "Wǒ mǎi le yìdiǎnr píngguǒ, hái mǎi le bù shǎo yīfu.", "english": "I bought some apples, and also bought quite a few clothes."},
            {"speaker": "大卫", "avatar": "👨‍🎓", "chinese": "张先生看见你了吗？", "pinyin": "Zhāng xiānsheng kànjiàn nǐ le ma?", "english": "Did Mr. Zhang see you?"},
            {"speaker": "玛丽", "avatar": "👩‍🎓", "chinese": "看见了，他开车送我回来的。", "pinyin": "Kànjiàn le, tā kāi chē sòng wǒ huílái de.", "english": "Yes, he drove me back."}
        ],
        "culture": "The word for 'things' or 'merchandise', 东西 (dōngxi), originates from the cardinal directions East (东) and West (西), referring to goods brought from market stalls across ancient trade axes.",
        "exercises": [
            {"question": "Translate: 'She bought quite a few clothes.'", "options": ["她买了不少衣服。", "她想买衣服。", "她没有衣服。", "衣服很漂亮。"], "answer": 0, "explanation": "'买了不少' expresses having bought a large quantity of something."},
            {"question": "How do you say 'in 40 minutes'?", "options": ["四十分钟后", "四十分钟前", "四点十分", "十分钟后"], "answer": 0, "explanation": "Duration + 后 means 'after / in ... minutes'."}
        ]
    },
    {
        "id": "hsk1-l15", "level": 1, "lessonNumber": 15, "title": "我是坐飞机来的", "pinyin": "Wǒ shì zuò fēijī lái de", "english": "I Came by Plane",
        "summary": "Master the focal '是...的' construction to emphasize past time, location, or manner of transportation.",
        "vocabulary": [
            {"character": "认识", "pinyin": "rènshi", "meaning": "to know; recognize; meet"},
            {"character": "年", "pinyin": "nián", "meaning": "year"},
            {"character": "大学", "pinyin": "dàxué", "meaning": "university; college"},
            {"character": "饭店", "pinyin": "fàndiàn", "meaning": "restaurant; hotel"},
            {"character": "出租车", "pinyin": "chūzūchē", "meaning": "taxi; cab"},
            {"character": "一起", "pinyin": "yìqǐ", "meaning": "together"},
            {"character": "高兴", "pinyin": "gāoxìng", "meaning": "happy; glad"},
            {"character": "听", "pinyin": "tīng", "meaning": "to listen; hear"},
            {"character": "飞机", "pinyin": "fēijī", "meaning": "airplane; plane"}
        ],
        "grammar": [
            {
                "title": "Cleft Construction: 是...的 (Emphasis on Details)",
                "pattern": "主语 + 是 + [时间/地点/方式] + 动词 + 的",
                "explanation": "When an action is already known to have occurred in the past, '是...的' is used to emphasize specific details such as when, where, with whom, or how it happened.",
                "examples": [
                    {"chinese": "我们是2011年认识的。", "pinyin": "Wǒmen shì èr líng yī yī nián rènshi de.", "english": "It was in 2011 that we first met."},
                    {"chinese": "他是坐出租车来的。", "pinyin": "Tā shì zuò chūzūchē lái de.", "english": "He came by taxi (manner of transport)."}
                ]
            },
            {
                "title": "Expressing Companionship with '一起'",
                "pattern": "主语 + (跟/和...) + 一起 + 动词",
                "explanation": "'一起' indicates doing something collectively or in companionship.",
                "examples": [
                    {"chinese": "我们是在北京大学认识的，我们在一起学汉语。", "pinyin": "Wǒmen shì zài Běijīng Dàxué rènshi de, wǒmen zài yìqǐ xué hànyǔ.", "english": "We met at Peking University, we studied Chinese together."},
                    {"chinese": "很高兴和你们在一起。", "pinyin": "Hěn gāoxìng hé nǐmen zài yìqǐ.", "english": "Very glad to be with you all."}
                ]
            }
        ],
        "dialogue": [
            {"speaker": "大卫", "avatar": "👨‍🎓", "chinese": "你认识李先生吗？", "pinyin": "Nǐ rènshi Lǐ xiānsheng ma?", "english": "Do you know Mr. Li?"},
            {"speaker": "玛丽", "avatar": "👩‍🎓", "chinese": "认识，我们是大学同学。", "pinyin": "Rènshi, wǒmen shì dàxué tóngxué.", "english": "Yes, we are university classmates."},
            {"speaker": "大卫", "avatar": "👨‍🎓", "chinese": "你们是什么时候认识的？", "pinyin": "Nǐmen shì shénme shíhou rènshi de?", "english": "When did you two meet?"},
            {"speaker": "玛丽", "avatar": "👩‍🎓", "chinese": "我们是2011年9月认识的。", "pinyin": "Wǒmen shì èr líng yī yī nián jiǔ yuè rènshi de.", "english": "We met in September 2011."},
            {"speaker": "大卫", "avatar": "👨‍🎓", "chinese": "你们是在哪儿认识的？你是怎么来的？", "pinyin": "Nǐmen shì zài nǎr rènshi de? Nǐ shì zěnme lái de?", "english": "Where did you meet? How did you get here?"},
            {"speaker": "玛丽", "avatar": "👩‍🎓", "chinese": "我们是在北京认识的。我是坐飞机来的。", "pinyin": "Wǒmen shì zài Běijīng rènshi de. Wǒ shì zuò fēijī lái de.", "english": "We met in Beijing. I came by airplane."}
        ],
        "culture": "Meeting a friend for the first time is warmly marked with '认识你很高兴' (Rènshi nǐ hěn gāoxìng - Nice to meet you).",
        "exercises": [
            {"question": "How do you emphasize 'I came by taxi'?", "options": ["我是坐出租车来的。", "我坐出租车去。", "我想坐出租车。", "出租车来了。"], "answer": 0, "explanation": "'是...的' construction emphasizes the manner of past travel."},
            {"question": "How do you say 'Nice to meet you' in Chinese?", "options": ["认识你很高兴。", "对不起！", "没关系。", "再见！"], "answer": 0, "explanation": "'认识你很高兴' is the standard polite greeting when being introduced."}
        ]
    }
]

print(f"Loaded {len(hsk1_lessons)} HSK 1 lessons.")
