import json

# Full Standard Curriculum Lessons Data for HSK 1, HSK 2, and HSK 3
# Strictly aligned with BLCUP HSK Standard Course Textbooks (Jiang Liping)

hsk1_lessons = [
    {
        "num": 1,
        "title": "你好",
        "pinyin": "Nǐ hǎo",
        "english": "Hello",
        "summary": "Master basic Chinese greetings, polite address, subject pronouns, and third-tone sandhi rules.",
        "vocab": [
            {"character": "你", "pinyin": "nǐ", "meaning": "you"},
            {"character": "好", "pinyin": "hǎo", "meaning": "good; well; fine"},
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
        "num": 2,
        "title": "谢谢你",
        "pinyin": "Xièxie nǐ",
        "english": "Thank You",
        "summary": "Express gratitude with 谢谢, respond politely with 不客气, say goodbye with 再见, and understand tone change of 不.",
        "vocab": [
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
        "num": 3,
        "title": "你叫什么名字",
        "pinyin": "Nǐ jiào shénme míngzi",
        "english": "What's Your Name?",
        "summary": "Inquire about names with 叫 and 什么, introduce oneself with 我叫..., and form equational sentences with 是.",
        "vocab": [
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
        "num": 4,
        "title": "她是我的汉语老师",
        "pinyin": "Tā shì wǒ de hànyǔ lǎoshī",
        "english": "She is My Chinese Teacher",
        "summary": "Master possessive particle 的, question pronoun 谁, specify countries with 哪国人, and introduce classmates.",
        "vocab": [
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
        "num": 5,
        "title": "她女儿今年二十岁",
        "pinyin": "Tā nǚ'ér jīnnián èrshí suì",
        "english": "Her Daughter is 20 Years Old This Year",
        "summary": "Inquire family members with 口, state age with 岁, ask age with 多大, and count numbers up to 100.",
        "vocab": [
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
    }
]

print(f"Generated {len(hsk1_lessons)} foundation lessons template.")
