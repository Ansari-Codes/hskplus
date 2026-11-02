import json
from curriculum_hsk3_part import hsk3_lessons as hsk3_l1_to_5

hsk3_l6_to_20 = [
    {
        "id": "hsk3-l6", "level": 3, "lessonNumber": 6, "title": "怎么突然找不到了", "pinyin": "Zěnme tūrán zhǎo bu dào le", "english": "Why Can't I Find It All of a Sudden?",
        "summary": "Master potential complements (Verb + 得/不 + Result: 找不到, 听得懂), use 刚 vs 刚才, and describe park workouts.",
        "vocabulary": [
            {"character": "眼镜", "pinyin": "yǎnjìng", "meaning": "glasses; spectacles"},
            {"character": "突然", "pinyin": "tūrán", "meaning": "suddenly; unexpected"},
            {"character": "离开", "pinyin": "líkāi", "meaning": "to leave; depart from"},
            {"character": "清楚", "pinyin": "qīngchu", "meaning": "clear; distinct"},
            {"character": "刚才", "pinyin": "gāngcái", "meaning": "just now; a moment ago"},
            {"character": "帮忙", "pinyin": "bāngmáng", "meaning": "to help; do a favor"},
            {"character": "特别", "pinyin": "tèbié", "meaning": "especially; special"},
            {"character": "讲", "pinyin": "jiǎng", "meaning": "to explain; speak"},
            {"character": "明白", "pinyin": "míngbai", "meaning": "clear; understand"},
            {"character": "锻炼", "pinyin": "duànliàn", "meaning": "to exercise; workout"},
            {"character": "音乐", "pinyin": "yīnyuè", "meaning": "music"},
            {"character": "公园", "pinyin": "gōngyuán", "meaning": "park"},
            {"character": "聊天", "pinyin": "liáotiān", "meaning": "to chat"},
            {"character": "睡着", "pinyin": "shuìzháo", "meaning": "to fall asleep"}
        ],
        "grammar": [
            {
                "title": "Potential Complements: 动词 + 得 / 不 + 结果补语",
                "pattern": "V + 得 / 不 + 到 / 完 / 懂",
                "explanation": "Signifies whether an action can or cannot reach a specific result or capacity: 找得到 (can find), 找不到 (cannot find).",
                "examples": [
                    {"chinese": "我的眼镜怎么突然找不到了？", "pinyin": "Wǒ de yǎnjìng zěnme tūrán zhǎo bu dào le?", "english": "Why can't I find my glasses all of a sudden?"},
                    {"chinese": "老师讲得很清楚，大家都听得懂。", "pinyin": "Lǎoshī jiǎng de hěn qīngchu, dàjiā dōu tīng de dǒng.", "english": "The teacher explained very clearly, everyone could understand."}
                ]
            },
            {
                "title": "Time Words: 刚 (Adverb) vs 刚才 (Noun)",
                "pattern": "刚 + 动词 (Just) vs 刚才 + 动词 (A moment ago)",
                "explanation": "'刚' is an adverb of recent action; '刚才' is a time noun referring to the immediate past few minutes.",
                "examples": [
                    {"chinese": "我刚才还看见你的眼镜在桌子上呢。", "pinyin": "Wǒ gāngcái hái kànjiàn nǐ de yǎnjìng zài zhuōzi shang ne.", "english": "Just a moment ago I saw your glasses on the table."},
                    {"chinese": "他刚离开办公室去开会。", "pinyin": "Tā gāng líkāi bàngōngshì qù kāi huì.", "english": "He just left the office to attend a meeting."}
                ]
            }
        ],
        "dialogue": [
            {"speaker": "大卫", "avatar": "👨‍🎓", "chinese": "奇怪，我的眼镜刚才还在桌上，怎么突然找不到了？", "pinyin": "Qíguài, wǒ de yǎnjìng gāngcái hái zài zhuō shang, zěnme tūrán zhǎo bu dào le?", "english": "Strange, my glasses were on the desk just now, why can't I find them suddenly?"},
            {"speaker": "李月", "avatar": "👩‍🏫", "chinese": "你别着急，是不是放进书包里了？", "pinyin": "Nǐ bié zháojí, shì bu shì fàng jìn shūbāo lǐ le?", "english": "Don't worry, did you put them into your backpack?"},
            {"speaker": "大卫", "avatar": "👨‍🎓", "chinese": "书包里也没有。没有眼镜，黑板上的字我都看不清楚。", "pinyin": "Shūbāo lǐ yě méiyǒu. Méiyǒu yǎnjìng, hēibǎn shang de zì wǒ dōu kàn bu qīngchu.", "english": "Not in the backpack either. Without glasses, I can't see the words on the blackboard clearly."},
            {"speaker": "李月", "avatar": "👩‍🏫", "chinese": "你看，在你的电脑后边呢！快戴上吧。", "pinyin": "Nǐ kàn, zài nǐ de diànnǎo hòubian ne! Kuài dài shang ba.", "english": "Look, right behind your computer! Put them on quickly."}
        ],
        "culture": "Evening walks in parks (公园散步) with background square dancing (广场舞) and chatting are hallmark community pastimes across Chinese towns.",
        "exercises": [
            {"question": "How do you say 'I cannot find my keys'?", "options": ["我找不到钥匙。", "我没钥匙。", "钥匙在桌子上。", "我不要钥匙。"], "answer": 0, "explanation": "'找不到' is the potential complement indicating inability to find."},
            {"question": "What is the difference between 刚 and 刚才?", "options": ["刚 is an adverb of recent time, 刚才 is a time noun meaning 'a moment ago'", "They mean completely different things", "刚 is for future, 刚才 is for past", "There is no difference"], "answer": 0, "explanation": "'刚' modifies verbs directly, while '刚才' functions as a temporal noun."}
        ]
    },
    {
        "id": "hsk3-l7", "level": 3, "lessonNumber": 7, "title": "我跟你一样", "pinyin": "Wǒ gēn nǐ yíyàng", "english": "I Am the Same as You",
        "summary": "Master comparison of equality: A 跟 B 一样 (+ Adjective) and its negation A 跟 B 不一样.",
        "vocabulary": [
            {"character": "同事", "pinyin": "tóngshì", "meaning": "colleague; coworker"},
            {"character": "以前", "pinyin": "yǐqián", "meaning": "before; previously"},
            {"character": "银行", "pinyin": "yínháng", "meaning": "bank"},
            {"character": "久", "pinyin": "jiǔ", "meaning": "for a long time; long duration"},
            {"character": "感兴趣", "pinyin": "gǎn xìngqù", "meaning": "interested in"},
            {"character": "结婚", "pinyin": "jiéhūn", "meaning": "to marry; get married"},
            {"character": "欢迎", "pinyin": "huānyíng", "meaning": "welcome"},
            {"character": "迟到", "pinyin": "chídào", "meaning": "to arrive late"},
            {"character": "半", "pinyin": "bàn", "meaning": "half"},
            {"character": "接", "pinyin": "jiē", "meaning": "to pick up; receive"}
        ],
        "grammar": [
            {
                "title": "Comparison of Equality: A 跟 B 一样 (+ 形容词)",
                "pattern": "A + 跟 + B + 一样 (+ 形容词) / A + 跟 + B + 不一样",
                "explanation": "Expresses that A and B possess the same quality or state. To negate, place '不' before '一样'.",
                "examples": [
                    {"chinese": "我跟你一样，对中国历史很感兴趣。", "pinyin": "Wǒ gēn nǐ yíyàng, duì zhōngguó lìshǐ hěn gǎn xìngqù.", "english": "I am the same as you, very interested in Chinese history."},
                    {"chinese": "这件衣服的颜色跟那件不一样。", "pinyin": "Zhè jiàn yīfu de yánsè gēn nà jiàn bù yíyàng.", "english": "The color of this dress is not the same as that one."}
                ]
            },
            {
                "title": "Expressing Interest: 对...感兴趣",
                "pattern": "主语 + 对 + 对象 + 感兴趣",
                "explanation": "'对...感兴趣' is the standard construction for stating one's interests or hobbies.",
                "examples": [
                    {"chinese": "新同事对中国音乐非常感兴趣。", "pinyin": "Xīn tóngshì duì zhōngguó yīnyuè fēicháng gǎn xìngqù.", "english": "The new colleague is extremely interested in Chinese music."},
                    {"chinese": "我对玩电脑游戏不感兴趣。", "pinyin": "Wǒ duì wán diànnǎo yóuxì bù gǎn xìngqù.", "english": "I am not interested in playing computer games."}
                ]
            }
        ],
        "dialogue": [
            {"speaker": "小丽", "avatar": "👩‍🎓", "chinese": "听说新来的同事李明以前在银行工作，是吗？", "pinyin": "Tīngshuō xīn lái de tóngshì Lǐ Míng yǐqián zài yínháng gōngzuò, shì ma?", "english": "I heard the new colleague Li Ming previously worked at a bank, is that so?"},
            {"speaker": "小刚", "avatar": "👨‍🎓", "chinese": "对，他跟我一样，对现在的互联网技术更感兴趣。", "pinyin": "Duì, tā gēn wǒ yíyàng, duì xiànzài de hùliánwǎng jìshù gèng gǎn xìngqù.", "english": "Right, he's the same as me, more interested in current Internet technology."},
            {"speaker": "小丽", "avatar": "👩‍🎓", "chinese": "他工作多久了？", "pinyin": "Tā gōngzuò duō jiǔ le?", "english": "How long has he been working?"},
            {"speaker": "小刚", "avatar": "👨‍🎓", "chinese": "他工作三年了，业务能力非常强，大家都很欢迎他。", "pinyin": "Tā gōngzuò sān nián le, yèwù néng lì fēicháng qiáng, dàjiā dōu hěn huānyíng tā.", "english": "He's worked for three years, very strong skills, everyone welcomes him."}
        ],
        "culture": "Colleague camaraderie (同事关系) in Chinese enterprises is reinforced through communal lunch breaks, team dinners, and group WeChat discussions.",
        "exercises": [
            {"question": "How do you say 'My hobby is the same as yours'?", "options": ["我的爱好跟你的一样。", "我的爱好比你好。", "我和你没有爱好。", "爱好很一样。"], "answer": 0, "explanation": "'A + 跟 + B + 一样' expresses equality of attributes."},
            {"question": "What is the phrase for 'interested in'?", "options": ["对...感兴趣", "想...有意思", "觉得...不错", "喜欢...极了"], "answer": 0, "explanation": "'对...感兴趣' is the fixed expression for having interest in something."}
        ]
    },
    {
        "id": "hsk3-l8", "level": 3, "lessonNumber": 8, "title": "我去哪儿你都去", "pinyin": "Wǒ qù nǎr nǐ dōu qù", "english": "I Will Go Wherever You Go",
        "summary": "Master flexible interrogative pronouns in correlative sentences (哪儿...哪儿, 什么...什么, 谁...谁) and express unconditional commitment.",
        "vocabulary": [
            {"character": "又", "pinyin": "yòu", "meaning": "again (in the past); also"},
            {"character": "满意", "pinyin": "mǎnyì", "meaning": "satisfied; pleased"},
            {"character": "电梯", "pinyin": "diàntī", "meaning": "elevator; lift"},
            {"character": "层", "pinyin": "céng", "meaning": "floor; story (measure word)"},
            {"character": "害怕", "pinyin": "hàipà", "meaning": "afraid; scared"},
            {"character": "熊猫", "pinyin": "xióngmāo", "meaning": "panda"},
            {"character": "安静", "pinyin": "ānjìng", "meaning": "quiet; peaceful"},
            {"character": "可乐", "pinyin": "kělè", "meaning": "cola"},
            {"character": "会儿", "pinyin": "huìr", "meaning": "a short moment"},
            {"character": "马上", "pinyin": "mǎshàng", "meaning": "immediately; right away"},
            {"character": "洗手间", "pinyin": "xǐshǒujiān", "meaning": "restroom; washroom"},
            {"character": "老", "pinyin": "lǎo", "meaning": "old; experienced; always"},
            {"character": "几乎", "pinyin": "jīhū", "meaning": "almost; nearly"},
            {"character": "变化", "pinyin": "biànhuà", "meaning": "change; vary"},
            {"character": "健康", "pinyin": "jiànkāng", "meaning": "healthy; health"},
            {"character": "重要", "pinyin": "zhòngyào", "meaning": "important; significant"}
        ],
        "grammar": [
            {
                "title": "Flexible Interrogative Correlative Pattern",
                "pattern": "疑问词... 就 / 都 + 相同疑问词",
                "explanation": "Pairs matching question words to denote that the second choice matches unconditionally whatever is determined by the first.",
                "examples": [
                    {"chinese": "你去哪儿，我就去哪儿。", "pinyin": "Nǐ qù nǎr, wǒ jiù qù nǎr.", "english": "Wherever you go, I will go there."},
                    {"chinese": "你吃什么，我就吃什么。", "pinyin": "Nǐ chī shénme, wǒ jiù chī shénme.", "english": "I will eat whatever you eat."}
                ]
            },
            {
                "title": "Approximation Adverb '几乎' (Almost / Nearly)",
                "pattern": "几乎 + 动词 / 数量词",
                "explanation": "'几乎' denotes coming very close to an amount or complete state.",
                "examples": [
                    {"chinese": "三年不见，城市的变化几乎让我认不出来了。", "pinyin": "Sān nián bú jiàn, chéngshì de biànhuà jīhū ràng wǒ rèn bu chūlái le.", "english": "Not seeing it for three years, changes in the city almost made me unable to recognize it."},
                    {"chinese": "他几乎每天都去图书馆学习。", "pinyin": "Tā jīhū měitiān dōu qù túshūguǎn xuéxí.", "english": "He goes to the library to study almost every day."}
                ]
            }
        ],
        "dialogue": [
            {"speaker": "小丽", "avatar": "👩‍🎓", "chinese": "周末我们到底去哪儿玩儿呢？", "pinyin": "Zhōumò wǒmen dàodǐ qù nǎr wánr ne?", "english": "Where on earth are we going to play this weekend?"},
            {"speaker": "小刚", "avatar": "👨‍🎓", "chinese": "只要跟你在一起，你去哪儿我都去！", "pinyin": "Zhǐyào gēn nǐ zài yìqǐ, nǐ qù nǎr wǒ dōu qù!", "english": "As long as I'm with you, wherever you go I will go!"},
            {"speaker": "小丽", "avatar": "👩‍🎓", "chinese": "那我们去动物园看大熊猫吧，我最喜欢熊猫了。", "pinyin": "Nà wǒmen qù dòngwùyuán kàn dà xióngmāo ba, wǒ zuì xǐhuan xióngmāo le.", "english": "Then let's go to the zoo to see giant pandas, I like pandas the most."},
            {"speaker": "小刚", "avatar": "👨‍🎓", "chinese": "没问题！听说动物园最近还有好几只可爱的小熊猫呢。", "pinyin": "Méi wèntí! Tīngshuō dòngwùyuán zuìjìn hái yǒu hǎo jǐ zhī kě'ài de xiǎo xióngmāo ne.", "english": "No problem! I heard the zoo recently has several cute baby pandas too."}
        ],
        "culture": "The Giant Panda (大熊猫) is China's beloved national treasure (国宝). The Chengdu Research Base of Giant Panda Breeding is internationally renowned.",
        "exercises": [
            {"question": "Translate: 'I will eat whatever you eat.'", "options": ["你吃什么，我就吃什么。", "你想吃什么？", "我什么都不吃。", "你吃的比我多。"], "answer": 0, "explanation": "'什么...就什么' pairs identical interrogatives."},
            {"question": "What does '几乎' mean?", "options": ["Almost; nearly", "Immediately", "Always", "Frequently"], "answer": 0, "explanation": "'几乎' (jīhū) means almost or nearly."}
        ]
    },
    {
        "id": "hsk3-l9", "level": 3, "lessonNumber": 9, "title": "她的汉语说得跟中国人一样好", "pinyin": "Tā de hànyǔ shuō de gēn zhōngguó rén yíyàng hǎo", "english": "She Speaks Chinese as Well as a Native",
        "summary": "Combine complement of degree with comparison of equality (V + 得 + 跟 B 一样 + Adj) and express certainty with 一定.",
        "vocabulary": [
            {"character": "中文", "pinyin": "zhōngwén", "meaning": "Chinese language"},
            {"character": "班", "pinyin": "bān", "meaning": "class; team"},
            {"character": "一样", "pinyin": "yíyàng", "meaning": "same; identical"},
            {"character": "最后", "pinyin": "zuìhòu", "meaning": "final; at last"},
            {"character": "放心", "pinyin": "fàngxīn", "meaning": "to set one's mind at ease; rest assured"},
            {"character": "一定", "pinyin": "yídìng", "meaning": "certainly; definitely"},
            {"character": "担心", "pinyin": "dānxīn", "meaning": "to worry; anxious"},
            {"character": "比较", "pinyin": "bǐjiào", "meaning": "fairly; comparatively"},
            {"character": "了解", "pinyin": "liǎojiě", "meaning": "to understand thoroughly"},
            {"character": "先", "pinyin": "xiān", "meaning": "first; prior"},
            {"character": "中间", "pinyin": "zhōngjiān", "meaning": "middle; between"}
        ],
        "grammar": [
            {
                "title": "Combined Degree & Equality Comparison",
                "pattern": "动词 + 得 + 跟 + B + 一样 + 形容词",
                "explanation": "Blends the degree complement '得' with the comparative equality structure '跟...一样'.",
                "examples": [
                    {"chinese": "玛丽的汉语说得跟中国人一样好。", "pinyin": "Mǎlì de hànyǔ shuō de gēn zhōngguó rén yíyàng hǎo.", "english": "Mary speaks Chinese as well as a native Chinese person."},
                    {"chinese": "大卫汉字写得跟我一样快。", "pinyin": "Dàwèi hànzì xiě de gēn wǒ yíyàng kuài.", "english": "David writes characters as fast as I do."}
                ]
            },
            {
                "title": "Adverb of Certainty: 一定 (Definitely)",
                "pattern": "主语 + 一定 + 动词短语",
                "explanation": "'一定' expresses firm conviction, necessity, or determination.",
                "examples": [
                    {"chinese": "请老师放心，我们一定会努力复习的！", "pinyin": "Qǐng lǎoshī fàngxīn, wǒmen yídìng huì nǔlì fùxí de!", "english": "Please rest assured teacher, we will definitely revise diligently!"},
                    {"chinese": "这次考试你一定能考好。", "pinyin": "Zhè cì kǎoshì nǐ yídìng néng kǎo hǎo.", "english": "You will certainly perform well in this examination."}
                ]
            }
        ],
        "dialogue": [
            {"speaker": "李月", "avatar": "👩‍🏫", "chinese": "听说你们班的大卫在中文演讲比赛中得了第一名？", "pinyin": "Tīngshuō nǐmen bān de Dàwèi zài zhōngwén yǎnjiǎng bǐsài zhōng dé le dì-yī míng?", "english": "I heard David from your class won first prize in the Chinese speech contest?"},
            {"speaker": "王方", "avatar": "👩‍🎓", "chinese": "是的，他的普通话发音特别标准，说得跟中国人一样好！", "pinyin": "Shì de, tā de pǔtōnghuà fāyīn tèbié biāozhǔn, shuō de gēn zhōngguó rén yíyàng hǎo!", "english": "Yes, his Mandarin pronunciation is very standard, he speaks as well as a native!"},
            {"speaker": "李月", "avatar": "👩‍🏫", "chinese": "真棒！下周的HSK三级考试他一定能顺利通过吧？", "pinyin": "Zhēn bàng! Xià zhōu de HSK sān jí kǎoshì tā yídìng néng shùnlì tōngguò ba?", "english": "Awesome! He will definitely pass next week's HSK 3 exam smoothly, right?"},
            {"speaker": "王方", "avatar": "👩‍🎓", "chinese": "您放心，他准备得非常充分，一定没问题！", "pinyin": "Nín fàngxīn, tā zhǔnbèi de fēicháng chōngfèn, yídìng méi wèntí!", "english": "Rest assured, he prepared thoroughly, definitely no problem!"}
        ],
        "culture": "Standard Mandarin (普通话) is based on the Beijing phonological system and northern dialect vocabulary, serving as the common spoken tongue across China's diverse linguistic regions.",
        "exercises": [
            {"question": "Translate: 'He speaks as well as a native.'", "options": ["他说得跟中国人一样好。", "他比中国人说得好。", "他说得很好中国人。", "他喜欢说中文。"], "answer": 0, "explanation": "'动词 + 得 + 跟 B + 一样 + 形容词' expresses identical high degree."},
            {"question": "What is the meaning of '放心'?", "options": ["Rest assured; feel at ease", "Worry", "Careful", "Forget"], "answer": 0, "explanation": "'放心' (fàngxīn) means to set one's mind at ease."}
        ]
    },
    {
        "id": "hsk3-l10", "level": 3, "lessonNumber": 10, "title": "数学比历史难多了", "pinyin": "Shùxué bǐ lìshǐ nán duō le", "english": "Math is Much Harder Than History",
        "summary": "Express extent in comparisons with 得多 and 多了, compare academic subjects, and discuss transportation habits.",
        "vocabulary": [
            {"character": "数学", "pinyin": "shùxué", "meaning": "mathematics; math"},
            {"character": "历史", "pinyin": "lìshǐ", "meaning": "history"},
            {"character": "体育", "pinyin": "tǐyù", "meaning": "physical education; sports"},
            {"character": "简单", "pinyin": "jiǎndān", "meaning": "simple; easy"},
            {"character": "作业", "pinyin": "zuòyè", "meaning": "homework; assignment"},
            {"character": "练习", "pinyin": "liànxí", "meaning": "to practice; exercise"},
            {"character": "成绩", "pinyin": "chéngjì", "meaning": "exam score; achievement"},
            {"character": "句子", "pinyin": "jùzi", "meaning": "sentence"},
            {"character": "认真", "pinyin": "rènzhēn", "meaning": "conscientious; earnest"}
        ],
        "grammar": [
            {
                "title": "Comparative Extent: A 比 B + 形容词 + 得多 / 多了",
                "pattern": "A + 比 + B + 形容词 + 得多 / 多了 / 一点儿",
                "explanation": "Signifies a significant degree of difference between A and B.",
                "examples": [
                    {"chinese": "我觉得高等数学比中国历史难多了。", "pinyin": "Wǒ juéde gāoděng shùxué bǐ zhōngguó lìshǐ nán duō le.", "english": "I think higher math is much harder than Chinese history."},
                    {"chinese": "坐高铁比坐大巴舒服得多。", "pinyin": "Zuò gāotiě bǐ zuò dàbā shūfu de duō.", "english": "Taking high-speed rail is far more comfortable than riding a bus."}
                ]
            },
            {
                "title": "Minor Degree Difference with '一点儿'",
                "pattern": "A + 比 + B + 形容词 + 一点儿",
                "explanation": "Expresses a slight disparity in degree between two compared items.",
                "examples": [
                    {"chinese": "今天比昨天暖和一点儿。", "pinyin": "Jīntiān bǐ zuótiān nuǎnhuo yìdiǎnr.", "english": "Today is slightly warmer than yesterday."},
                    {"chinese": "这个西瓜比那个甜一点儿。", "pinyin": "Zhè ge xīguā bǐ nà ge tián yìdiǎnr.", "english": "This watermelon is slightly sweeter than that one."}
                ]
            }
        ],
        "dialogue": [
            {"speaker": "大卫", "avatar": "👨‍🎓", "chinese": "你这学期选了什么课？", "pinyin": "Nǐ zhè xuéqī xuǎn le shénme kè?", "english": "What courses did you choose this semester?"},
            {"speaker": "王方", "avatar": "👩‍🎓", "chinese": "我选了数学、中国历史和体育。你呢？", "pinyin": "Wǒ xuǎn le shùxué, zhōngguó lìshǐ hé tǐyù. Nǐ ne?", "english": "I chose math, Chinese history, and PE. What about you?"},
            {"speaker": "大卫", "avatar": "👨‍🎓", "chinese": "我也选了历史。我觉得数学比历史难多了，有很多复杂的算式。", "pinyin": "Wǒ yě xuǎn le lìshǐ. Wǒ juéde shùxué bǐ lìshǐ nán duō le, yǒu hěn duō fùzá de suànshì.", "english": "I also picked history. I think math is much harder than history, lots of complex formulas."},
            {"speaker": "王方", "avatar": "👩‍🎓", "chinese": "但只要每天认真做练习，成绩一定会提高的！", "pinyin": "Dàn zhǐyào měitiān rènzhēn zuò liànxí, chéngjì yídìng huì tígāo de!", "english": "But as long as you do exercises conscientiously every day, grades will definitely improve!"}
        ],
        "culture": "Mathematics education in China places strong emphasis on mental arithmetic and rigorous fundamental problem-solving drills from primary school onwards.",
        "exercises": [
            {"question": "How do you say 'Math is much harder than history'?", "options": ["数学比历史难多了。", "数学和历史一样难。", "历史比数学难一点儿。", "数学不难历史难。"], "answer": 0, "explanation": "'A 比 B + 形容词 + 多了' denotes a much greater degree."},
            {"question": "What is '成绩'?", "options": ["Exam score; academic grade", "Homework", "Question", "Subject"], "answer": 0, "explanation": "'成绩' (chéngjì) refers to scores, grades, or accomplishments."}
        ]
    },
    {
        "id": "hsk3-l11", "level": 3, "lessonNumber": 11, "title": "别忘了把空调关了", "pinyin": "Bié wàng le bǎ kōngtiáo guān le", "english": "Don't Forget to Turn Off the Air Conditioner",
        "summary": "Master the pivotal 把-construction (把字句) for object disposal, handle household appliances, and manage library loans.",
        "vocabulary": [
            {"character": "把", "pinyin": "bǎ", "meaning": "disposal marker; to hold"},
            {"character": "忘", "pinyin": "wàng", "meaning": "to forget"},
            {"character": "空调", "pinyin": "kōngtiáo", "meaning": "air conditioner"},
            {"character": "关", "pinyin": "guān", "meaning": "to turn off; close"},
            {"character": "关门", "pinyin": "guān mén", "meaning": "to close the door"},
            {"character": "发票", "pinyin": "fāpiào", "meaning": "official tax receipt; invoice"},
            {"character": "借", "pinyin": "jiè", "meaning": "to borrow; lend"},
            {"character": "还", "pinyin": "huán", "meaning": "to return (something borrowed)"},
            {"character": "洗手间", "pinyin": "xǐshǒujiān", "meaning": "restroom; washroom"}
        ],
        "grammar": [
            {
                "title": "The Disposal '把' Sentence: Subject + 把 + Object + Verb + Other Element",
                "pattern": "主语 + 把 + 宾语 + 动词 + 结果 / 了",
                "explanation": "The '把' construction shifts the direct object before the verb to emphasize what happens to or how one disposes of that object.",
                "examples": [
                    {"chinese": "离开教室前，别忘了把空调关了。", "pinyin": "Líkāi jiàoshì qián, bié wàng le bǎ kōngtiáo guān le.", "english": "Before leaving the classroom, don't forget to turn off the air conditioner."},
                    {"chinese": "请你把借的书还给图书馆。", "pinyin": "Qǐng nǐ bǎ jiè de shū huán gěi túshūguǎn.", "english": "Please return the borrowed books to the library."}
                ]
            },
            {
                "title": "Verbal Direction Complement with '把'",
                "pattern": "主语 + 把 + 宾语 + 动词 + 上 / 下 / 进 / 出",
                "explanation": "Pairs '把' with directional verb particles to specify movement or closure: 关上 (close up), 拿出来 (bring out).",
                "examples": [
                    {"chinese": "请把门关上，外边风大。", "pinyin": "Qǐng bǎ mén guān shang, wàibian fēng dà.", "english": "Please close the door, it's windy outside."},
                    {"chinese": "别忘了把发票带走。", "pinyin": "Bié wàng le bǎ fāpiào dài zǒu.", "english": "Don't forget to take the receipt with you."}
                ]
            }
        ],
        "dialogue": [
            {"speaker": "李朋", "avatar": "👨‍💼", "chinese": "时间不早了，大家都下班了，我们也走吧。", "pinyin": "Shíjiān bù zǎo le, dàjiā dōu xiàbān le, wǒmen yě zǒu ba.", "english": "It's getting late, everyone has left work, let's leave too."},
            {"speaker": "王经理", "avatar": "👩‍💼", "chinese": "好的。离开办公室前，别忘了把空调和电脑都关了。", "pinyin": "Hǎo de. Líkāi bàngōngshì qián, bié wàng le bǎ kōngtiáo hé diànnǎo dōu guān le.", "english": "Okay. Before leaving the office, don't forget to turn off the air conditioner and computers."},
            {"speaker": "李朋", "avatar": "👨‍💼", "chinese": "我已经关好了。窗户也关上了吗？", "pinyin": "Wǒ yǐjīng guān hǎo le. Chuānghu yě guān shang le ma?", "english": "I've already turned them off. Are the windows shut too?"},
            {"speaker": "王经理", "avatar": "👩‍💼", "chinese": "关上了。最后把门锁好就可以走了。", "pinyin": "Guān shang le. Zuìhòu bǎ mén suǒ hǎo jiù kěyǐ zǒu le.", "english": "Shut. Finally lock the door and we can go."}
        ],
        "culture": "Conserving electricity and turning off air conditioning (节约用电) is encouraged in public and commercial facilities in China under energy conservation initiatives.",
        "exercises": [
            {"question": "Put in correct order: '关了 (1) / 把空调 (2) / 别忘了 (3)'", "options": ["3 - 2 - 1 (别忘了把空调关了)", "1 - 2 - 3", "2 - 1 - 3", "3 - 1 - 2"], "answer": 0, "explanation": "In a '把' sentence, '把 + 宾语' precedes the verb and result: 别忘了把空调关了."},
            {"question": "What does '把门关上' mean?", "options": ["Close the door", "Open the door", "Lock the room", "Clean the door"], "answer": 0, "explanation": "'关上' means to close / shut."}
        ]
    },
    {
        "id": "hsk3-l12", "level": 3, "lessonNumber": 12, "title": "把这件衣服洗了", "pinyin": "Bǎ zhè jiàn yīfu xǐ le", "english": "Wash These Clothes",
        "summary": "Master 把-sentences with resultative completions (洗干净, 放在桌子上), and handle household dining and cleaning tasks.",
        "vocabulary": [
            {"character": "脏", "pinyin": "zāng", "meaning": "dirty; soiled"},
            {"character": "干净", "pinyin": "gānjìng", "meaning": "clean; tidy"},
            {"character": "头发", "pinyin": "tóufa", "meaning": "hair (on head)"},
            {"character": "梳", "pinyin": "shū", "meaning": "to comb; brush"},
            {"character": "刷牙", "pinyin": "shuā yá", "meaning": "to brush teeth"},
            {"character": "脸", "pinyin": "liǎn", "meaning": "face"},
            {"character": "声音", "pinyin": "shēngyīn", "meaning": "sound; voice"},
            {"character": "冰箱", "pinyin": "bīngxiāng", "meaning": "refrigerator; fridge"},
            {"character": "盘子", "pinyin": "pánzi", "meaning": "plate; dish"}
        ],
        "grammar": [
            {
                "title": "把-Sentence with Resultative Complement",
                "pattern": "主语 + 把 + 宾语 + 动词 + 结果补语 (干净 / 破 / 好)",
                "explanation": "Highlights that the action caused a substantive change in state to the object.",
                "examples": [
                    {"chinese": "请你把这件脏衣服洗干净。", "pinyin": "Qǐng nǐ bǎ zhè jiàn zāng yīfu xǐ gānjìng.", "english": "Please wash this dirty garment clean."},
                    {"chinese": "我已经把盘子刷干净了。", "pinyin": "Wǒ yǐjīng bǎ pánzi shuā gānjìng le.", "english": "I have already scrubbed the plates clean."}
                ]
            },
            {
                "title": "把-Sentence with Locative Displacement (放在/搬到)",
                "pattern": "主语 + 把 + 宾语 + 放 / 拿 / 搬 + 在 / 到 + 处所",
                "explanation": "Specifies moving an item into a designated target location.",
                "examples": [
                    {"chinese": "把牛奶放在冰箱里吧。", "pinyin": "Bǎ niúnǎi fàng zài bīngxiāng lǐ ba.", "english": "Put the milk into the refrigerator."},
                    {"chinese": "请把桌子搬到客厅去。", "pinyin": "Qǐng bǎ zhuōzi bān dào kètīng qù.", "english": "Please move the table to the living room."}
                ]
            }
        ],
        "dialogue": [
            {"speaker": "妈妈", "avatar": "👩", "chinese": "儿子，你踢完足球回来了？衣服怎么这么脏？", "pinyin": "Érzi, nǐ tī wán zúqiú huílái le? Yīfu zěnme zhème zāng?", "english": "Son, you're back from soccer? Why are your clothes so dirty?"},
            {"speaker": "儿子", "avatar": "👦", "chinese": "草地上有水。我这就去洗澡换衣服。", "pinyin": "Cǎodì shang yǒu shuǐ. Wǒ zhè jiù qù xǐ zǎo huàn yīfu.", "english": "There was water on the grass. I'll go take a shower and change clothes right now."},
            {"speaker": "妈妈", "avatar": "👩", "chinese": "换下来后把这件脏衣服洗了，别随便扔在地上。", "pinyin": "Huàn xiàlái hòu bǎ zhè jiàn zāng yīfu xǐ le, bié suíbiàn rēng zài dì shang.", "english": "After changing, wash this dirty shirt, don't toss it on the floor."},
            {"speaker": "儿子", "avatar": "👦", "chinese": "知道了，我一定把它洗得干干净净的！", "pinyin": "Zhīdào le, wǒ yídìng bǎ tā xǐ de gāngānjìngjìng de!", "english": "Understood, I will definitely wash it spotless clean!"}
        ],
        "culture": "The Chinese idiom 窗明几净 (bright windows and clean tables) depicts an orderly, well-maintained home reflecting family virtue.",
        "exercises": [
            {"question": "Translate: 'Wash the dirty clothes clean.'", "options": ["把脏衣服洗干净。", "脏衣服洗了。", "洗衣服干净。", "衣服很脏。"], "answer": 0, "explanation": "'把 + 脏衣服 + 洗 (verb) + 干净 (result)'."},
            {"question": "What is the opposite of '脏' (dirty)?", "options": ["干净", "漂亮", "新", "高"], "answer": 0, "explanation": "'干净' (gānjìng) means clean."}
        ]
    },
    {
        "id": "hsk3-l13", "level": 3, "lessonNumber": 13, "title": "我是走回来的", "pinyin": "Wǒ shì zǒu huílái de", "english": "I Walked Back",
        "summary": "Master compound directional complements (Verb + 走回来, 跑出去, 爬上去), and express concurrent actions with 一边...一边.",
        "vocabulary": [
            {"character": "经过", "pinyin": "jīngguò", "meaning": "to pass by; go through; process"},
            {"character": "遇到", "pinyin": "yùdào", "meaning": "to meet; encounter"},
            {"character": "一边", "pinyin": "yìbiān", "meaning": "simultaneously; on one hand"},
            {"character": "过去", "pinyin": "guòqu", "meaning": "in the past; go over"},
            {"character": "愿意", "pinyin": "yuànyì", "meaning": "willing; wish to"},
            {"character": "起来", "pinyin": "qǐlái", "meaning": "to rise; start up"},
            {"character": "应该", "pinyin": "yīnggāi", "meaning": "should; ought to"},
            {"character": "生活", "pinyin": "shēnghuó", "meaning": "life; livelihood"}
        ],
        "grammar": [
            {
                "title": "Compound Directional Complements",
                "pattern": "动词 + 上 / 下 / 进 / 出 / 回 / 过 + 来 / 去",
                "explanation": "Combines a specific directional verb with 来 (toward speaker) or 去 (away from speaker): 走回来 (walk back here), 跑出去 (run out there).",
                "examples": [
                    {"chinese": "路上堵车，出租车开不动，我是走回来的。", "pinyin": "Lù shang dǔchē, chūzūchē kāi bu dòng, wǒ shì zǒu huílái de.", "english": "Traffic was jammed and the taxi couldn't move, so I walked back."},
                    {"chinese": "他从教室里跑出来了。", "pinyin": "Tā cóng jiàoshì lǐ pǎo chūlái le.", "english": "He ran out from inside the classroom."}
                ]
            },
            {
                "title": "Simultaneous Actions: 一边...一边...",
                "pattern": "主语 + 一边 + 动词 1 + 一边 + 动词 2",
                "explanation": "Expresses that two actions are conducted concurrently by the same subject.",
                "examples": [
                    {"chinese": "我们一边散步一边聊天。", "pinyin": "Wǒmen yìbiān sànbù yìbiān liáotiān.", "english": "We chatted while strolling."},
                    {"chinese": "他喜欢一边听音乐一边写作业。", "pinyin": "Tā xǐhuan yìbiān tīng yīnyuè yìbiān xiě zuòyè.", "english": "He likes writing homework while listening to music."}
                ]
            }
        ],
        "dialogue": [
            {"speaker": "玛丽", "avatar": "👩‍🎓", "chinese": "大卫，外边下着雨呢，你怎么没坐出租车？", "pinyin": "Dàwèi, wàibian xià zhe yǔ ne, nǐ zěnme méi zuò chūzūchē?", "english": "David, it's raining outside, why didn't you take a taxi?"},
            {"speaker": "大卫", "avatar": "👨‍🎓", "chinese": "刚才路上车太多了，半个小时都没动，我是走回来的。", "pinyin": "Gāngcái lù shang chē tài duō le, bàn ge xiǎoshí dōu méi dòng, wǒ shì zǒu huílái de.", "english": "Just now too many cars on the road, didn't move for half an hour, I walked back."},
            {"speaker": "玛丽", "avatar": "👩‍🎓", "chinese": "走回来花了多长时间？衣服都湿了吧？", "pinyin": "Zǒu huílái huā le duō cháng shíjiān? Yīfu dōu shī le ba?", "english": "How long did it take to walk back? Are your clothes soaked?"},
            {"speaker": "大卫", "avatar": "👨‍🎓", "chinese": "我带了伞。一边听中文广播一边走，二十分钟就到了。", "pinyin": "Wǒ dài le sǎn. Yìbiān tīng zhōngwén guǎngbō yìbiān zǒu, èrshí fēnzhōng jiù dào le.", "english": "I had an umbrella. Listening to Chinese radio while walking, arrived in 20 minutes."}
        ],
        "culture": "Walking as aerobic transit (慢行交通) is celebrated in urban China with greenway walkways (绿道) constructed alongside rivers and canals.",
        "exercises": [
            {"question": "How do you say 'listening to music while studying'?", "options": ["一边听音乐一边学习", "又听音乐又学习", "听音乐然后再学习", "因为听音乐所以学习"], "answer": 0, "explanation": "'一边...一边...' expresses simultaneous concurrent actions."},
            {"question": "Which is a compound directional complement?", "options": ["走出来", "走了", "走完", "走路"], "answer": 0, "explanation": "'走出来' combines verb (走) + directional (出) + anchor (来)."}
        ]
    },
    {
        "id": "hsk3-l14", "level": 3, "lessonNumber": 14, "title": "你把水果拿过来", "pinyin": "Nǐ bǎ shuǐguǒ ná guòlái", "english": "Bring the Fruit Over",
        "summary": "Combine 把-sentences with compound directional complements: 把 + 宾语 + 动词 + 出来/过去/拿过来.",
        "vocabulary": [
            {"character": "拿", "pinyin": "ná", "meaning": "to take; hold; bring"},
            {"character": "过", "pinyin": "guò", "meaning": "to pass; cross"},
            {"character": "过来", "pinyin": "guòlái", "meaning": "come over (toward speaker)"},
            {"character": "过去", "pinyin": "guòqu", "meaning": "go over (away from speaker)"},
            {"character": "师傅", "pinyin": "shīfu", "meaning": "master; skilled worker; driver"},
            {"character": "司机", "pinyin": "sījī", "meaning": "driver; chauffeur"},
            {"character": "终于", "pinyin": "zhōngyú", "meaning": "at last; finally"},
            {"character": "习惯", "pinyin": "xíguàn", "meaning": "habit; to be accustomed to"},
            {"character": "差", "pinyin": "chà", "meaning": "poor; short of; differ"},
            {"character": "包裹", "pinyin": "bāoguǒ", "meaning": "parcel; package"}
        ],
        "grammar": [
            {
                "title": "把 with Compound Directional Complement",
                "pattern": "主语 + 把 + 宾语 + 动词 + 复合趋向补语 (拿过来 / 搬进去)",
                "explanation": "Expresses directing an object across space relative to the speaker.",
                "examples": [
                    {"chinese": "请你把桌上的新鲜水果拿过来。", "pinyin": "Qǐng nǐ bǎ zhuō shang de xīnxiān shuǐguǒ ná guòlái.", "english": "Please bring the fresh fruit on the table over here."},
                    {"chinese": "师傅把大包裹搬进屋去了。", "pinyin": "Shīfu bǎ dà bāoguǒ bān jìn wū qù le.", "english": "The master worker carried the large parcel into the room."}
                ]
            },
            {
                "title": "Adverb '终于' (Finally / At Long Last)",
                "pattern": "主语 + 终于 + 动词短语 + 了",
                "explanation": "'终于' indicates that a desired result has been achieved after a lengthy wait or considerable effort.",
                "examples": [
                    {"chinese": "准备了两个月，我终于通过HSK考试了！", "pinyin": "Zhǔnbèi le liǎng ge yuè, wǒ zhōngyú tōngguò HSK kǎoshì le!", "english": "After preparing for two months, I finally passed the HSK exam!"},
                    {"chinese": "等了半天，出租车终于来了。", "pinyin": "Děng le bàntiān, chūzūchē zhōngyú lái le.", "english": "After waiting half the day, the taxi finally arrived."}
                ]
            }
        ],
        "dialogue": [
            {"speaker": "小丽", "avatar": "👩‍🎓", "chinese": "小刚，客人快到了，你把洗好的水果拿过来放在茶几上吧。", "pinyin": "Xiǎogāng, kèrén kuài dào le, nǐ bǎ xǐ hǎo de shuǐguǒ ná guòlái fàng zài chájī shang ba.", "english": "Xiaogang, guests are arriving soon, bring the washed fruit over and put it on the coffee table."},
            {"speaker": "小刚", "avatar": "👨‍🎓", "chinese": "好的，我顺便把冰箱里的绿茶也拿出来。", "pinyin": "Hǎo de, wǒ shùnbiàn bǎ bīngxiāng lǐ de lǜchá yě ná chūlái.", "english": "Okay, I'll also take the green tea out from the fridge while I'm at it."},
            {"speaker": "小丽", "avatar": "👩‍🎓", "chinese": "辛苦了！忙活了一下午，终于准备齐了。", "pinyin": "Xīnkǔ le! Mánghuo le yí xiàwǔ, zhōngyú zhǔnbèi qí le.", "english": "Thanks for your hard work! Busy all afternoon, finally ready."},
            {"speaker": "小刚", "avatar": "👨‍🎓", "chinese": "门铃响了，师傅送蛋糕过来了，我去开门！", "pinyin": "Ménlíng xiǎng le, shīfu sòng dàngāo guòlái le, wǒ qù kāi mén!", "english": "Doorbell rang, the master delivery brought the cake over, I'll go open the door!"}
        ],
        "culture": "Addressing service professionals, drivers, and skilled repair craftspeople as '师傅' (shīfu - master) is universally polite and respectful in everyday Chinese life.",
        "exercises": [
            {"question": "How do you ask someone to 'bring the book over here'?", "options": ["把书拿过来", "把书拿过去", "书拿走", "带书走"], "answer": 0, "explanation": "'拿过来' indicates moving the item toward the speaker."},
            {"question": "What is the polite title for a delivery worker or taxi driver?", "options": ["师傅", "老师", "先生", "学生"], "answer": 0, "explanation": "'师傅' (shīfu) is the standard polite address for service craftspeople and drivers."}
        ]
    },
    {
        "id": "hsk3-l15", "level": 3, "lessonNumber": 15, "title": "其他都没什么问题", "pinyin": "Qítā dōu méi shénme wèntí", "english": "Other Than That, Everything is Fine",
        "summary": "Master inclusive and exclusive prepositional construction 除了...以外 (都/还), and handle restaurant or hotel reviews.",
        "vocabulary": [
            {"character": "其他", "pinyin": "qítā", "meaning": "other; else"},
            {"character": "满意", "pinyin": "mǎnyì", "meaning": "satisfied; pleased"},
            {"character": "菜单", "pinyin": "càidān", "meaning": "menu"},
            {"character": "尝", "pinyin": "cháng", "meaning": "to taste; savor"},
            {"character": "经常", "pinyin": "jīngcháng", "meaning": "often; frequently"},
            {"character": "渴", "pinyin": "kě", "meaning": "thirsty"},
            {"character": "香蕉", "pinyin": "xiāngjiāo", "meaning": "banana"},
            {"character": "甜", "pinyin": "tián", "meaning": "sweet"}
        ],
        "grammar": [
            {
                "title": "Exclusive Construction: 除了...以外，都...",
                "pattern": "除了 + A + 以外，主语 + 都 + 谓语",
                "explanation": "Signifies that except for A, all other members of the group share the stated predicate (exclusion).",
                "examples": [
                    {"chinese": "除了这个题有点儿难以外，其他都没什么问题。", "pinyin": "Chúle zhè ge tí yǒudiǎnr nán yǐwài, qítā dōu méi shénme wèntí.", "english": "Except for this question being a bit hard, other than that everything is fine."},
                    {"chinese": "除了大卫以外，全班同学都来了。", "pinyin": "Chúle Dàwèi yǐwài, quán bān tóngxué dōu lái le.", "english": "Except for David, all classmates have arrived."}
                ]
            },
            {
                "title": "Inclusive Construction: 除了...以外，还...",
                "pattern": "除了 + A + 以外，主语 + 还 / 也 + 谓语",
                "explanation": "Signifies that in addition to A, other items are also included (addition).",
                "examples": [
                    {"chinese": "除了汉语以外，他还会说法语和英语。", "pinyin": "Chúle hànyǔ yǐwài, tā hái huì shuō fǎyǔ hé yīngyǔ.", "english": "In addition to Chinese, he can also speak French and English."},
                    {"chinese": "桌上除了苹果以外，还有西瓜和香蕉。", "pinyin": "Zhuō shang chúle píngguǒ yǐwài, hái yǒu xīguā hé xiāngjiāo.", "english": "On the table, besides apples, there are also watermelon and bananas."}
                ]
            }
        ],
        "dialogue": [
            {"speaker": "服务员", "avatar": "👨‍🍳", "chinese": "先生，您对我们饭店今天的菜品还满意吗？", "pinyin": "Xiānsheng, nín duì wǒmen fàndiàn jīntiān de càipǐn hái mǎnyì ma?", "english": "Sir, are you satisfied with our restaurant's dishes today?"},
            {"speaker": "大卫", "avatar": "👨‍🎓", "chinese": "非常满意！除了汤稍微有一点儿咸以外，其他都没什么问题。", "pinyin": "Fēicháng mǎnyì! Chúle tāng shāowēi yǒu yìdiǎnr xián yǐwài, qítā dōu méi shénme wèntí.", "english": "Very satisfied! Except for the soup being slightly salty, other than that everything was great."},
            {"speaker": "服务员", "avatar": "👨‍🍳", "chinese": "谢谢您的宝贵意见！欢迎您下次再来尝尝我们的特色烤鸭。", "pinyin": "Xièxie nín de bǎoguì yìjiàn! Huānyíng nín xià cì zài lái chángchang wǒmen de tèsè kǎoyā.", "english": "Thank you for your valuable feedback! Welcome to come taste our specialty roast duck next time."},
            {"speaker": "大卫", "avatar": "👨‍🎓", "chinese": "好的，我一定带朋友一起来！", "pinyin": "Hǎo de, wǒ yídìng dài péngyou yìqǐ lái!", "english": "Sure, I will definitely bring friends along!"}
        ],
        "culture": "Chinese dining culture places prime emphasis on guest feedback. Restaurant managers routinely inquire if dishes suit diners' palates (合不合胃口).",
        "exercises": [
            {"question": "How do you say 'Except for Sunday, I work every day'?", "options": ["除了星期日以外，我每天都上班。", "因为星期日，所以我上班。", "虽然是星期日，但我上班。", "不仅星期日上班，平时也上班。"], "answer": 0, "explanation": "'除了...以外，都...' denotes exclusion."},
            {"question": "What is '菜单'?", "options": ["Menu", "Bill / Check", "Dish", "Drink"], "answer": 0, "explanation": "'菜单' (càidān) means menu."}
        ]
    },
    {
        "id": "hsk3-l16", "level": 3, "lessonNumber": 16, "title": "我现在累得下班就想睡觉", "pinyin": "Wǒ xiànzài lèi de xiàbān jiù xiǎng shuìjiào", "english": "I'm So Tired Now That I Just Want to Sleep After Work",
        "summary": "Master descriptive clause complements introduced by 得 (Adjective + 得 + Clause), and discuss career pressures and rest.",
        "vocabulary": [
            {"character": "累得", "pinyin": "lèi de", "meaning": "so tired that..."},
            {"character": "打扫", "pinyin": "dǎsǎo", "meaning": "to sweep; clean"},
            {"character": "擦", "pinyin": "cā", "meaning": "to wipe; rub"},
            {"character": "黑板", "pinyin": "hēibǎn", "meaning": "blackboard"},
            {"character": "倒", "pinyin": "dào", "meaning": "to pour; tip"},
            {"character": "水", "pinyin": "shuǐ", "meaning": "water"},
            {"character": "结束", "pinyin": "jiéshù", "meaning": "to conclude; finish"}
        ],
        "grammar": [
            {
                "title": "Descriptive Clause Complement: 形容词 + 得 + 小句",
                "pattern": "形容词 + 得 + 主谓短语 / 动宾短语",
                "explanation": "Introduces a full explanatory clause to describe the vivid outcome or degree of the preceding adjective.",
                "examples": [
                    {"chinese": "我现在累得下班就想睡觉。", "pinyin": "Wǒ xiànzài lèi de xiàbān jiù xiǎng shuìjiào.", "english": "I'm so exhausted now that I just want to sleep after work."},
                    {"chinese": "听到这个好消息，大家高兴得跳了起来。", "pinyin": "Tīngdào zhè ge hǎo xiāoxi, dàjiā gāoxìng de tiào le qǐlái.", "english": "Hearing this good news, everyone was so happy that they jumped up."}
                ]
            },
            {
                "title": "Prompt Sequel: ...就...",
                "pattern": "事件 A + 就 + 事件 B",
                "explanation": "'就' indicates that Event B follows immediately upon the realization of Event A.",
                "examples": [
                    {"chinese": "我一下班就回家做饭。", "pinyin": "Wǒ yí xiàbān jiù huí jiā zuò fàn.", "english": "As soon as I finish work, I go home to cook."},
                    {"chinese": "会议一结束我们就出发。", "pinyin": "Huìyì yì jiéshù wǒmen jiù chūfā.", "english": "As soon as the meeting ends, we set off."}
                ]
            }
        ],
        "dialogue": [
            {"speaker": "李朋", "avatar": "👨‍💼", "chinese": "你最近看起来很疲倦，工作很忙吗？", "pinyin": "Nǐ zuìjìn kàn qǐlái hěn píjuàn, gōngzuò hěn máng ma?", "english": "You look very tired lately, is work very busy?"},
            {"speaker": "王方", "avatar": "👩‍🎓", "chinese": "是啊，新项目要上线，我现在累得下班就想睡觉，什么都不想做。", "pinyin": "Shì a, xīn xiàngmù yào shàngxiàn, wǒ xiànzài lèi de xiàbān jiù xiǎng shuìjiào, shénme dōu bù xiǎng zuò.", "english": "Yeah, new project is launching, I'm so tired now that I just want to sleep after work, don't want to do anything."},
            {"speaker": "李朋", "avatar": "👨‍💼", "chinese": "身体最重要，周末一定要好好放松一下，出去散散步。", "pinyin": "Shēntǐ zuì zhòngyào, zhōumò yídìng yào hǎohǎo fàngsōng yíxià, chūqu sànsan bù.", "english": "Health is most important, on the weekend definitely relax well and take a walk."},
            {"speaker": "王方", "avatar": "👩‍🎓", "chinese": "你说得对，今天等会议一结束，我就早点儿休息。", "pinyin": "Nǐ shuō de duì, jīntiān děng huìyì yì jiéshù, wǒ jiù zǎodiǎnr xiūxi.", "english": "You're right, today once the meeting ends, I will rest early."}
        ],
        "culture": "The modern health adage 劳逸结合 (balance labor with rest) encourages working professionals to safeguard mental and bodily health amid fast-paced urban lifestyles.",
        "exercises": [
            {"question": "How do you say 'He was so happy that he laughed out loud'?", "options": ["他高兴得大笑起来。", "他高兴也笑。", "因为高兴所以大笑。", "他想大笑。"], "answer": 0, "explanation": "'形容词 + 得 + 结果小句' conveys dramatic descriptive outcome."},
            {"question": "Complete: 我一回家______做作业。", "options": ["就", "才", "也", "还"], "answer": 0, "explanation": "'一...就...' means 'as soon as... then...'."}
        ]
    },
    {
        "id": "hsk3-l17", "level": 3, "lessonNumber": 17, "title": "谁都有生病的时候", "pinyin": "Shéi dōu yǒu shēngbìng de shíhou", "english": "Everyone Gets Sick Sometimes",
        "summary": "Master emphatic universal statements using question words (谁都, 什么都, 哪儿都), and talk about healthcare and doctor visits.",
        "vocabulary": [
            {"character": "办法", "pinyin": "bànfǎ", "meaning": "method; way; solution"},
            {"character": "抽烟", "pinyin": "chōuyān", "meaning": "to smoke (cigarettes)"},
            {"character": "咳嗽", "pinyin": "késou", "meaning": "to cough"},
            {"character": "严重", "pinyin": "yánzhòng", "meaning": "serious; grave; severe"},
            {"character": "检查", "pinyin": "jiǎnchá", "meaning": "to examine; inspect; checkup"}
        ],
        "grammar": [
            {
                "title": "Emphatic Universal Statements: 疑问代词 + 都 / 也 + 谓语",
                "pattern": "谁都 / 什么都 / 哪儿都 + 谓语",
                "explanation": "Question words followed by 都 or 也 represent universal inclusion ('everyone', 'everything', 'everywhere') or absolute negation ('no one', 'nothing', 'nowhere').",
                "examples": [
                    {"chinese": "谁都有生病的时候，好好休息几天就好了。", "pinyin": "Shéi dōu yǒu shēngbìng de shíhou, hǎohǎo xiūxi jǐ tiān jiù hǎo le.", "english": "Everyone has times when they get sick; resting well for a few days will cure it."},
                    {"chinese": "今天我太累了，哪儿都不想去。", "pinyin": "Jīntiān wǒ tài lèi le, nǎr dōu bù xiǎng qù.", "english": "Today I'm too exhausted, I don't want to go anywhere."}
                ]
            },
            {
                "title": "Expressing Solutions with '有办法'",
                "pattern": "有 / 没有 + 办法 + 动词",
                "explanation": "'办法' refers to a concrete technique or approach to address a dilemma.",
                "examples": [
                    {"chinese": "医生一定有办法治好你的咳嗽。", "pinyin": "Yīshēng yídìng yǒu bànfǎ zhì hǎo nǐ de késou.", "english": "The doctor definitely has a way to cure your cough."},
                    {"chinese": "别担心，我们一定能想出办法来。", "pinyin": "Bié dānxīn, wǒmen yídìng néng xiǎng chū bànfǎ lái.", "english": "Don't worry, we can definitely come up with a solution."}
                ]
            }
        ],
        "dialogue": [
            {"speaker": "医生", "avatar": "👨‍⚕️", "chinese": "你咳嗽得很严重，最近抽烟了吗？", "pinyin": "Nǐ késou de hěn yánzhòng, zuìjìn chōuyān le ma?", "english": "Your cough is quite severe, have you been smoking recently?"},
            {"speaker": "大卫", "avatar": "👨‍🎓", "chinese": "抽了一点儿。医生，检查结果怎么样？严重吗？", "pinyin": "Chōu le yìdiǎnr. Yīshēng, jiǎnchá jiéguǒ zěnmeyàng? Yánzhòng ma?", "english": "A little bit. Doctor, how were the checkup results? Is it serious?"},
            {"speaker": "医生", "avatar": "👨‍⚕️", "chinese": "问题不算太严重，但从今天起必须把烟戒了，不能再抽了。", "pinyin": "Wèntí bú suàn tài yánzhòng, dàn cóng jīntiān qǐ bìxū bǎ yān jiè le, bù néng zài chōu le.", "english": "Not too grave, but starting today you must quit smoking, cannot smoke anymore."},
            {"speaker": "大卫", "avatar": "👨‍🎓", "chinese": "好的，我一定听您的话，按时吃药多喝水。", "pinyin": "Hǎo de, wǒ yídìng tīng nín de huà, ànshí chī yào duō hē shuǐ.", "english": "Okay, I will definitely follow your advice, take medicine on time and drink more water."}
        ],
        "culture": "Public spaces across China enforce strict indoor smoking prohibitions (禁止吸烟) to cultivate healthy civic environments.",
        "exercises": [
            {"question": "How do you say 'Nobody knows this matter'?", "options": ["谁都不知道这件事。", "谁知道这件事？", "有人知道这件事。", "大家都想知道。"], "answer": 0, "explanation": "'谁都 + 否定' expresses universal negation: nobody."},
            {"question": "What is '检查'?", "options": ["To inspect; checkup", "To cough", "To rest", "To cure"], "answer": 0, "explanation": "'检查' (jiǎnchá) means to examine or checkup."}
        ]
    },
    {
        "id": "hsk3-l18", "level": 3, "lessonNumber": 18, "title": "我相信他们会同意的", "pinyin": "Wǒ xiāngxìn tāmen huì tóngyì de", "english": "I Believe They Will Agree",
        "summary": "Express conviction and certainty with 会...的, master topic preposition 关于, and discuss proposals and opportunities.",
        "vocabulary": [
            {"character": "同意", "pinyin": "tóngyì", "meaning": "to agree; approve"},
            {"character": "相信", "pinyin": "xiāngxìn", "meaning": "to believe; trust"},
            {"character": "关于", "pinyin": "guānyú", "meaning": "about; regarding; concerning"},
            {"character": "机会", "pinyin": "jīhuì", "meaning": "opportunity; chance"},
            {"character": "国家", "pinyin": "guójiā", "meaning": "country; state; nation"},
            {"character": "语言", "pinyin": "yǔyán", "meaning": "language"},
            {"character": "文化", "pinyin": "wénhuà", "meaning": "culture"}
        ],
        "grammar": [
            {
                "title": "Conveying Certainty: 会...的",
                "pattern": "主语 + 会 + 动词短语 + 的",
                "explanation": "'会...的' affirms the speaker's strong conviction that an anticipated event will certainly happen.",
                "examples": [
                    {"chinese": "你的计划很详细，我相信他们会同意的。", "pinyin": "Nǐ de jìhuà hěn xiángxì, wǒ xiāngxìn tāmen huì tóngyì de.", "english": "Your plan is very detailed, I believe they will agree."},
                    {"chinese": "只要努力，你一定会成功的。", "pinyin": "Zhǐyào nǔlì, nǐ yídìng huì chénggōng de.", "english": "As long as you work hard, you will certainly succeed."}
                ]
            },
            {
                "title": "Topic Preposition '关于' (Regarding / About)",
                "pattern": "关于 + 对象，主语 + 谓语",
                "explanation": "'关于' introduces the topic or scope of the following clause.",
                "examples": [
                    {"chinese": "关于中国传统文化，我借了几本很有趣的书。", "pinyin": "Guānyú zhōngguó chuántǒng wénhuà, wǒ jiè le jǐ běn hěn yǒu yìsi de shū.", "english": "Regarding traditional Chinese culture, I borrowed several interesting books."},
                    {"chinese": "关于这次留学机会，老师跟我们聊了很久。", "pinyin": "Guānyú zhè cì liúxué jīhuì, lǎoshī gēn wǒmen liáo le hěn jiǔ.", "english": "Regarding this study abroad opportunity, the teacher chatted with us for a long time."}
                ]
            }
        ],
        "dialogue": [
            {"speaker": "大卫", "avatar": "👨‍🎓", "chinese": "李老师，我想申请下学期去北京留学的机会，您觉得怎么样？", "pinyin": "Lǐ lǎoshī, wǒ xiǎng shēnqǐng xià xuéqī qù Běijīng liúxué de jīhuì, nín juéde zěnmeyàng?", "english": "Teacher Li, I want to apply for the study abroad opportunity in Beijing next semester, what do you think?"},
            {"speaker": "李月", "avatar": "👩‍🏫", "chinese": "这是一个了解中国语言和文化的绝好机会！你的申请材料准备好了吗？", "pinyin": "Zhè shì yí ge liǎojiě zhōngguó yǔyán hé wénhuà de juéhǎo jīhuì! Nǐ de shēnqǐng cáiliào zhǔnbèi hǎo le ma?", "english": "This is an extraordinary opportunity to understand Chinese language and culture! Are your application materials ready?"},
            {"speaker": "大卫", "avatar": "👨‍🎓", "chinese": "都准备齐了。关于我的汉语水平证明，我也附上了HSK成绩。", "pinyin": "Dōu zhǔnbèi qí le. Guānyú wǒ de hànyǔ shuǐpíng zhèngmíng, wǒ yě fù shang le HSK chéngjì.", "english": "All prepared. Regarding proof of my Chinese level, I also attached my HSK score."},
            {"speaker": "李月", "avatar": "👩‍🏫", "chinese": "非常好，你的成绩很优秀，我相信他们一定会同意录取的！", "pinyin": "Fēicháng hǎo, nǐ de chéngjì hěn yōuxiù, wǒ xiāngxìn tāmen yídìng huì tóngyì lùqǔ de!", "english": "Very good, your scores are excellent, I believe they will definitely approve your admission!"}
        ],
        "culture": "International cultural exchange (文化交流) and scholarship programs such as the CSC Chinese Government Scholarship welcome tens of thousands of international students to Chinese universities every year.",
        "exercises": [
            {"question": "How do you express conviction that something will succeed?", "options": ["他一定会成功的。", "他想成功。", "他不成功。", "成功很难。"], "answer": 0, "explanation": "'会...的' conveys firm positive conviction."},
            {"question": "Translate: 'Regarding Chinese culture':", "options": ["关于中国文化", "因为中国文化", "对于中国文化", "虽然中国文化"], "answer": 0, "explanation": "'关于' introduces a topic of discussion."}
        ]
    },
    {
        "id": "hsk3-l19", "level": 3, "lessonNumber": 19, "title": "你没看出来吗", "pinyin": "Nǐ méi kàn chūlái ma", "english": "Didn't You Recognize It?",
        "summary": "Master metaphorical extended directional complements (看出来, 想起来, 听出来), and discuss personal appearance changes.",
        "vocabulary": [
            {"character": "出来", "pinyin": "chūlái", "meaning": "come out; recognize; discern"},
            {"character": "起来", "pinyin": "qǐlái", "meaning": "upward; recall; initiate"},
            {"character": "声音", "pinyin": "shēngyīn", "meaning": "sound; voice"},
            {"character": "特别", "pinyin": "tèbié", "meaning": "special; especially"},
            {"character": "耳朵", "pinyin": "ěrduo", "meaning": "ear"},
            {"character": "脸", "pinyin": "liǎn", "meaning": "face"},
            {"character": "短", "pinyin": "duǎn", "meaning": "short (in length)"},
            {"character": "马", "pinyin": "mǎ", "meaning": "horse"}
        ],
        "grammar": [
            {
                "title": "Extended Directional Complement: 动词 + 出来",
                "pattern": "看 / 听 / 认 + 出来 (否定: 没...出来)",
                "explanation": "Signifies discernment or recognition through the senses: 看出来 (discern by sight), 听出来 (recognize by ear).",
                "examples": [
                    {"chinese": "几年不见，你没看出来他是小王吗？", "pinyin": "Jǐ nián bú jiàn, nǐ méi kàn chūlái tā shì Xiǎo Wáng ma?", "english": "Not seeing him for years, didn't you recognize that he is Xiao Wang?"},
                    {"chinese": "打电话时我一下子就听出他的声音来了。", "pinyin": "Dǎ diànhuà shí wǒ yíxiàzi jiù tīng chū tā de shēngyīn lái le.", "english": "When on the phone, I recognized his voice right away."}
                ]
            },
            {
                "title": "Recollection Complement: 想起来",
                "pattern": "想 + 起来 (否定: 没想起来 / 想不起来)",
                "explanation": "Indicates retrieving a past memory or piece of information from the mind.",
                "examples": [
                    {"chinese": "我想起来了，那个饭店在电影院旁边！", "pinyin": "Wǒ xiǎng qǐlái le, nà ge fàndiàn zài diànyǐngyuàn pángbiān!", "english": "I remembered, that restaurant is next to the cinema!"},
                    {"chinese": "对不起，我实在想不起来他的名字了。", "pinyin": "Duìbuqǐ, wǒ shízài xiǎng bu qǐlái tā de míngzi le.", "english": "Sorry, I really can't recall his name."}
                ]
            }
        ],
        "dialogue": [
            {"speaker": "小丽", "avatar": "👩‍🎓", "chinese": "小刚，你看这张老照片，左边这个剪短头发的人是谁，你没看出来吗？", "pinyin": "Xiǎogāng, nǐ kàn zhè zhāng lǎo zhàopiàn, zuǒbiān zhè ge jiǎn duǎn tóufa de rén shì shéi, nǐ méi kàn chūlái ma?", "english": "Xiaogang, look at this old photo, the person with short hair on the left, didn't you recognize who it is?"},
            {"speaker": "小刚", "avatar": "👨‍🎓", "chinese": "哈哈，这不是你中学时候的样子吗？看眼睛和圆圆的脸就能看出来！", "pinyin": "Hāhā, zhè bú shì nǐ zhōngxué shíhou de yàngzi ma? Kàn yǎnjing hé yuányuán de liǎn jiù néng kàn chūlái!", "english": "Haha, isn't this you in middle school? You can tell just by looking at the eyes and round face!"},
            {"speaker": "小丽", "avatar": "👩‍🎓", "chinese": "我想起来了，这是我们初中去内蒙古骑马时拍的照片。", "pinyin": "Wǒ xiǎng qǐlái le, zhè shì wǒmen chūzhōng qù Nèi Měnggǔ qí mǎ shí pāi de zhàopiàn.", "english": "I remember now, this photo was taken when we went horseback riding in Inner Mongolia in middle school."},
            {"speaker": "小刚", "avatar": "👨‍🎓", "chinese": "时间过得真快啊，一转眼我们都上大学了！", "pinyin": "Shíjiān guò de zhēn kuài a, yì zhuǎnyǎn wǒmen dōu shàng dàxué le!", "english": "Time flies so fast, in the blink of an eye we're already in university!"}
        ],
        "culture": "Reviewing old family photographs (老照片) during the Spring Festival allows multi-generational families to reminisce over the dramatic societal changes across eras.",
        "exercises": [
            {"question": "How do you say 'I recognized his voice'?", "options": ["我听出了他的声音。", "我看出了他的声音。", "我想了他的声音。", "他的声音很大。"], "answer": 0, "explanation": "'听出来' signifies recognizing by ear."},
            {"question": "What does '我想起来了' mean?", "options": ["I recalled / remembered!", "I want to get up.", "I think so.", "I forgot."], "answer": 0, "explanation": "'想起来' refers to retrieving a memory."}
        ]
    },
    {
        "id": "hsk3-l20", "level": 3, "lessonNumber": 20, "title": "我被他影响了", "pinyin": "Wǒ bèi tā yǐngxiǎng le", "english": "I Was Influenced by Him",
        "summary": "Master the passive construction with 被 (被字句), analyze formative relationships, and review comprehensive HSK 3 language milestones.",
        "vocabulary": [
            {"character": "被", "pinyin": "bèi", "meaning": "by (passive voice marker)"},
            {"character": "影响", "pinyin": "yǐngxiǎng", "meaning": "influence; effect; to affect"},
            {"character": "经常", "pinyin": "jīngcháng", "meaning": "often; frequently"},
            {"character": "习惯", "pinyin": "xíguàn", "meaning": "habit; custom; accustomed to"},
            {"character": "关系", "pinyin": "guānxi", "meaning": "relationship; relation"},
            {"character": "重要", "pinyin": "zhòngyào", "meaning": "important; vital"},
            {"character": "水平", "pinyin": "shuǐpíng", "meaning": "level; standard; proficiency"},
            {"character": "提高", "pinyin": "tígāo", "meaning": "to improve; raise"}
        ],
        "grammar": [
            {
                "title": "The Passive '被' Sentence: 受事 + 被 (+ 施事) + 动词 + 其他成分",
                "pattern": "受事主语 + 被 + (施事者) + 动词 + 结果 / 了",
                "explanation": "Shifts the receiver of an action to the subject position to indicate how it was affected by the agent.",
                "examples": [
                    {"chinese": "桌上的蛋糕被弟弟吃了。", "pinyin": "Zhuō shang de dàngāo bèi dìdi chī le.", "english": "The cake on the table was eaten by younger brother."},
                    {"chinese": "我被室友的好习惯深深影响了。", "pinyin": "Wǒ bèi shìyǒu de hǎo xíguàn shēnshēn yǐngxiǎng le.", "english": "I was deeply influenced by my roommate's good habits."}
                ]
            },
            {
                "title": "Expressing Improvement: 提高 + 水平",
                "pattern": "提高 + ...水平 / 成绩",
                "explanation": "'提高' is the standard verb paired with '水平' (proficiency) or '成绩' (scores) to denote advancement.",
                "examples": [
                    {"chinese": "经过一年努力，他的汉语水平大大提高了。", "pinyin": "Jīngguò yì nián nǔlì, tā de hànyǔ shuǐpíng dàdà tígāo le.", "english": "Through a year of diligence, his Chinese proficiency greatly improved."},
                    {"chinese": "好习惯对提高成绩非常重要。", "pinyin": "Hǎo xíguàn duì tígāo chéngjì fēicháng zhòngyào.", "english": "Good habits are extremely important for raising grades."}
                ]
            }
        ],
        "dialogue": [
            {"speaker": "大卫", "avatar": "👨‍🎓", "chinese": "李月，你最近每天早上跑步，汉语进步也特别快，真让人佩服！", "pinyin": "Lǐ Yuè, nǐ zuìjìn měitiān zǎoshang pǎobù, hànyǔ jìnbù yě tèbié kuài, zhēn ràng rén pèifú!", "english": "Li Yue, you jog every morning lately and your Chinese progress is so fast, truly admirable!"},
            {"speaker": "李月", "avatar": "👩‍🏫", "chinese": "其实我以前挺懒的，后来遇到了王老师，被她的自律和热情深深影响了。", "pinyin": "Qíshí wǒ yǐqián tǐng lǎn de, hòulái yùdào le Wáng lǎoshī, bèi tā de zìlǜ hé rèqíng shēnshēn yǐngxiǎng le.", "english": "Actually I used to be quite lazy, but then I met Teacher Wang and was deeply influenced by her self-discipline and enthusiasm."},
            {"speaker": "大卫", "avatar": "👨‍🎓", "chinese": "古人说'近朱者赤，近墨者黑'，好的朋友和老师对我们的生活影响太大了！", "pinyin": "Gǔrén shuō 'jìn zhū zhě chì, jìn mò zhě hēi', hǎo de péngyou hé lǎoshī duì wǒmen de shēnghuó yǐngxiǎng tài dà le!", "english": "The ancients said 'Near vermilion one turns red; near ink one turns black'—good friends and teachers influence our lives immensely!"},
            {"speaker": "李月", "avatar": "👩‍🏫", "chinese": "是啊，大家互相学习，共同提高汉语水平！", "pinyin": "Shì a, dàjiā hùxiāng xuéxí, gòngtóng tígāo hànyǔ shuǐpíng!", "english": "Yes, let's learn from one another and jointly elevate our Chinese proficiency!"}
        ],
        "culture": "The ancient proverb 近朱者赤，近墨者黑 (One who stays near vermilion gets stained red; one near ink gets stained black) is a cornerstone of Chinese educational philosophy, emphasizing the formative impact of environments and peers.",
        "exercises": [
            {"question": "Put in correct passive order: '蛋糕 (1) / 弟弟 (2) / 吃了 (3) / 被 (4)'", "options": ["1 - 4 - 2 - 3 (蛋糕被弟弟吃了)", "2 - 4 - 1 - 3", "4 - 2 - 1 - 3", "1 - 2 - 4 - 3"], "answer": 0, "explanation": "In a '被' passive sentence: Receiver (蛋糕) + 被 + Agent (弟弟) + Verb + 了 (吃了)."},
            {"question": "How do you express 'elevate one's Chinese level'?", "options": ["提高汉语水平", "做好汉语水平", "学大汉语水平", "放好汉语水平"], "answer": 0, "explanation": "'提高 + 水平' is the standard verb-object collocation."}
        ]
    }
]

hsk3_all_lessons = hsk3_l1_to_5 + hsk3_l6_to_20
print(f"Total HSK 3 authentic lessons: {len(hsk3_all_lessons)}")
