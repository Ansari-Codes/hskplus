import json

# Full Standard Curriculum Lessons for HSK 2 (Lessons 1-15)
hsk2_lessons = [
    {
        "id": "hsk2-l1", "level": 2, "lessonNumber": 1, "title": "九月去北京旅游最好", "pinyin": "Jiǔyuè qù Běijīng lǚyóu zuì hǎo", "english": "September is the Best Time to Visit Beijing",
        "summary": "Express superlative degrees with 最, share opinions with 觉得, explain reasons with 为什么 / 因为, and talk about seasonal travel.",
        "vocabulary": [
            {"character": "旅游", "pinyin": "lǚyóu", "meaning": "to travel; tour"},
            {"character": "觉得", "pinyin": "juéde", "meaning": "to think; feel"},
            {"character": "最", "pinyin": "zuì", "meaning": "most; superlative (est)"},
            {"character": "为什么", "pinyin": "wèishénme", "meaning": "why"},
            {"character": "也", "pinyin": "yě", "meaning": "also; too"},
            {"character": "运动", "pinyin": "yùndòng", "meaning": "sport; exercise"},
            {"character": "踢足球", "pinyin": "tī zúqiú", "meaning": "to play football/soccer"},
            {"character": "一起", "pinyin": "yìqǐ", "meaning": "together"},
            {"character": "要", "pinyin": "yào", "meaning": "to want; plan to; will"},
            {"character": "新", "pinyin": "xīn", "meaning": "new"},
            {"character": "眼睛", "pinyin": "yǎnjing", "meaning": "eye"}
        ],
        "grammar": [
            {
                "title": "Superlative Degree: 最 + Adjective",
                "pattern": "最 + 形容词 / 心理动词",
                "explanation": "'最' expresses the highest degree of a quality or emotion.",
                "examples": [
                    {"chinese": "九月去北京旅游最好，天气不冷也不热。", "pinyin": "Jiǔyuè qù Běijīng lǚyóu zuì hǎo, tiānqì bù lěng yě bú rè.", "english": "September is best to visit Beijing; weather is neither cold nor hot."},
                    {"chinese": "我最喜欢踢足球。", "pinyin": "Wǒ zuì xǐhuan tī zúqiú.", "english": "I like playing football the most."}
                ]
            },
            {
                "title": "Giving Reasons: 为什么 ↔ 因为...",
                "pattern": "为什么...? 因为...",
                "explanation": "'为什么' asks for reasons; '因为' introduces the explanatory clause.",
                "examples": [
                    {"chinese": "你为什么九月去北京？因为九月天气最好。", "pinyin": "Nǐ wèishénme jiǔyuè qù Běijīng? Yīnwèi jiǔyuè tiānqì zuì hǎo.", "english": "Why are you going to Beijing in September? Because September has the best weather."},
                    {"chinese": "他觉得北京很漂亮。", "pinyin": "Tā juéde Běijīng hěn piàoliang.", "english": "He feels that Beijing is very beautiful."}
                ]
            }
        ],
        "dialogue": [
            {"speaker": "大卫", "avatar": "👨‍🎓", "chinese": "我想去北京旅游，什么时候去最好？", "pinyin": "Wǒ xiǎng qù Běijīng lǚyóu, shénme shíhou qù zuì hǎo?", "english": "I want to travel to Beijing, when is the best time to go?"},
            {"speaker": "王方", "avatar": "👩‍🎓", "chinese": "九月去北京旅游最好。", "pinyin": "Jiǔyuè qù Běijīng lǚyóu zuì hǎo.", "english": "September is the best time to visit Beijing."},
            {"speaker": "大卫", "avatar": "👨‍🎓", "chinese": "为什么？", "pinyin": "Wèishénme?", "english": "Why?"},
            {"speaker": "王方", "avatar": "👩‍🎓", "chinese": "因为九月的北京天气不冷也不热，风景最漂亮。", "pinyin": "Yīnwèi jiǔyuè de Běijīng tiānqì bù lěng yě bú rè, fēngjǐng zuì piàoliang.", "english": "Because in September Beijing is neither cold nor hot, and the scenery is most beautiful."},
            {"speaker": "大卫", "avatar": "👨‍🎓", "chinese": "下午我们一起去踢足球吧！", "pinyin": "Xiàwǔ wǒmen yìqǐ qù tī zúqiú ba!", "english": "Let's go play soccer together this afternoon!"},
            {"speaker": "王方", "avatar": "👩‍🎓", "chinese": "好啊，我最喜欢踢足球了！", "pinyin": "Hǎo a, wǒ zuì xǐhuan tī zúqiú le!", "english": "Great, I like playing soccer the most!"}
        ],
        "culture": "Autumn in Beijing (金秋北京) is famous for mild sunny weather, crisp air, and the yellow ginkgo leaves along Diaoyutai and Xiangshan.",
        "exercises": [
            {"question": "How do you say 'My favorite sport is soccer'?", "options": ["我最喜欢的运动是踢足球。", "我想踢足球。", "我不会踢足球。", "足球很好看。"], "answer": 0, "explanation": "'最喜欢' indicates 'favorite / like the most'."},
            {"question": "How do you respond to '为什么' (Why)?", "options": ["因为...", "所以...", "但是...", "虽然..."], "answer": 0, "explanation": "'因为' introduces the explanation / reason."}
        ]
    },
    {
        "id": "hsk2-l2", "level": 2, "lessonNumber": 2, "title": "我每天六点起床", "pinyin": "Wǒ měitiān liù diǎn qǐchuáng", "english": "I Get Up at Six Every Day",
        "summary": "Discuss healthy daily habits with 每...都, express health conditions with 生病, 药, and 出院, and state height with 米.",
        "vocabulary": [
            {"character": "生病", "pinyin": "shēngbìng", "meaning": "to fall ill; sick"},
            {"character": "每", "pinyin": "měi", "meaning": "every; each"},
            {"character": "早上", "pinyin": "zǎoshang", "meaning": "morning"},
            {"character": "跑步", "pinyin": "pǎobù", "meaning": "to run; jog"},
            {"character": "起床", "pinyin": "qǐchuáng", "meaning": "to get out of bed; get up"},
            {"character": "药", "pinyin": "yào", "meaning": "medicine; drug"},
            {"character": "身体", "pinyin": "shēntǐ", "meaning": "body; health"},
            {"character": "出院", "pinyin": "chūyuàn", "meaning": "leave hospital; discharged"},
            {"character": "高", "pinyin": "gāo", "meaning": "tall; high"},
            {"character": "米", "pinyin": "mǐ", "meaning": "meter"},
            {"character": "知道", "pinyin": "zhīdào", "meaning": "to know; realize"},
            {"character": "忙", "pinyin": "máng", "meaning": "busy"},
            {"character": "时间", "pinyin": "shíjiān", "meaning": "time"}
        ],
        "grammar": [
            {
                "title": "Distributive Pronoun '每' with '都'",
                "pattern": "每 + Measure Word + Noun + 都 + 动词",
                "explanation": "'每' denotes each individual in a group and is almost always reinforced by '都' before the verb.",
                "examples": [
                    {"chinese": "我每天早上都跑步。", "pinyin": "Wǒ měitiān zǎoshang dōu pǎobù.", "english": "I run every morning."},
                    {"chinese": "他每个星期六都去学校。", "pinyin": "Tā měi ge xīngqīliù dōu qù xuéxiào.", "english": "He goes to school every Saturday."}
                ]
            },
            {
                "title": "Inquiring about Sickness & Recovery",
                "pattern": "生病 / 吃药 / 出院",
                "explanation": "To fall ill is '生病', to take medicine is '吃药', and leaving the hospital after recovery is '出院'.",
                "examples": [
                    {"chinese": "他生病了，吃药后身体好多了。", "pinyin": "Tā shēngbìng le, chī yào hòu shēntǐ hǎo duō le.", "english": "He fell ill; after taking medicine his health is much better."},
                    {"chinese": "你什么时候能出院？下个星期。", "pinyin": "Nǐ shénme shíhou néng chūyuàn? Xià ge xīngqī.", "english": "When can you be discharged? Next week."}
                ]
            }
        ],
        "dialogue": [
            {"speaker": "医生", "avatar": "👨‍⚕️", "chinese": "你很少生病，平时是怎么锻炼的？", "pinyin": "Nǐ hěn shǎo shēngbìng, píngshí shì zěnme duànliàn de?", "english": "You rarely get sick, how do you usually exercise?"},
            {"speaker": "大卫", "avatar": "👨‍🎓", "chinese": "我每天早上六点起床去跑步。", "pinyin": "Wǒ měitiān zǎoshang liù diǎn qǐchuáng qù pǎobù.", "english": "I get up at six every morning to go jogging."},
            {"speaker": "医生", "avatar": "👨‍⚕️", "chinese": "你每天都跑多长时间？", "pinyin": "Nǐ měitiān dōu pǎo duō cháng shíjiān?", "english": "How long do you run each day?"},
            {"speaker": "大卫", "avatar": "👨‍🎓", "chinese": "我每天跑半个小时。张老师今天能出院吗？", "pinyin": "Wǒ měitiān pǎo bàn ge xiǎoshí. Zhāng lǎoshī jīntiān néng chūyuàn ma?", "english": "I run for half an hour every day. Can Teacher Zhang leave the hospital today?"},
            {"speaker": "医生", "avatar": "👨‍⚕️", "chinese": "他身体好多了，明天可以出院。", "pinyin": "Tā shēntǐ hǎo duō le, míngtiān kěyǐ chūyuàn.", "english": "His health is much better, he can be discharged tomorrow."}
        ],
        "culture": "Morning exercise (晨练) is a cherished tradition across China. Parks fill with citizens doing Tai Chi, jogging, and practicing fan dances at sunrise.",
        "exercises": [
            {"question": "Fill in the blank: 我每______六点起床跑步。", "options": ["天", "个", "年", "月"], "answer": 0, "explanation": "'每天' means every day."},
            {"question": "What does '出院' mean?", "options": ["Be discharged from hospital", "Enter hospital", "Visit doctor", "Take medicine"], "answer": 0, "explanation": "'出院' literally means 'exit hospital'."}
        ]
    },
    {
        "id": "hsk2-l3", "level": 2, "lessonNumber": 3, "title": "左边那个红色的是我的", "pinyin": "Zuǒbiān nà ge hóngsè de shì wǒ de", "english": "The Red One on the Left is Mine",
        "summary": "Master colors (红, 白, 黑), the structural particle 的 for noun ellipsis, and alternative questions with 还是.",
        "vocabulary": [
            {"character": "手表", "pinyin": "shǒubiǎo", "meaning": "wrist watch"},
            {"character": "千", "pinyin": "qiān", "meaning": "thousand"},
            {"character": "报纸", "pinyin": "bàozhǐ", "meaning": "newspaper"},
            {"character": "送", "pinyin": "sòng", "meaning": "to give as gift; deliver"},
            {"character": "一下", "pinyin": "yíxià", "meaning": "briefly; a little bit"},
            {"character": "牛奶", "pinyin": "niúnǎi", "meaning": "cow's milk"},
            {"character": "房间", "pinyin": "fángjiān", "meaning": "room"},
            {"character": "丈夫", "pinyin": "zhàngfu", "meaning": "husband"},
            {"character": "旁边", "pinyin": "pángbiān", "meaning": "beside; side"},
            {"character": "真", "pinyin": "zhēn", "meaning": "really; truly"},
            {"character": "颜色", "pinyin": "yánsè", "meaning": "color"},
            {"character": "红色", "pinyin": "hóngsè", "meaning": "red color"},
            {"character": "左边", "pinyin": "zuǒbiān", "meaning": "left side"}
        ],
        "grammar": [
            {
                "title": "Noun Ellipsis: Adjective + 的",
                "pattern": "形容词 / 代词 + 的",
                "explanation": "When the noun is understood from context, attaching '的' to an adjective or possessive pronoun replaces the noun phrase entirely: 红色的 (the red one), 我的 (mine).",
                "examples": [
                    {"chinese": "左边那个红色的是我的手表。", "pinyin": "Zuǒbiān nà ge hóngsè de shì wǒ de shǒubiǎo.", "english": "The red one on the left is my watch."},
                    {"chinese": "这个杯子是新的，那个是旧的。", "pinyin": "Zhè ge bēizi shì xīn de, nà ge shì jiù de.", "english": "This cup is new, that one is old."}
                ]
            },
            {
                "title": "Verbal Measure Word '一下' (Brief Action)",
                "pattern": "动词 + 一下",
                "explanation": "'一下' indicates an action of brief duration or an informal casual attempt: 看一下 (take a quick look), 问一下 (ask quickly).",
                "examples": [
                    {"chinese": "请您看一下这块手表。", "pinyin": "Qǐng nín kàn yíxià zhè kuài shǒubiǎo.", "english": "Please take a look at this watch."},
                    {"chinese": "我喝一下牛奶。", "pinyin": "Wǒ hē yíxià niúnǎi.", "english": "I'll take a sip of milk."}
                ]
            }
        ],
        "dialogue": [
            {"speaker": "王方", "avatar": "👩‍🎓", "chinese": "这块手表是你的吗？", "pinyin": "Zhè kuài shǒubiǎo shì nǐ de ma?", "english": "Is this watch yours?"},
            {"speaker": "大卫", "avatar": "👨‍🎓", "chinese": "不是我的。左边那个红色的是我的。", "pinyin": "Bú shì wǒ de. Zuǒbiān nà ge hóngsè de shì wǒ de.", "english": "It's not mine. The red one on the left is mine."},
            {"speaker": "王方", "avatar": "👩‍🎓", "chinese": "这块手表多少钱？真漂亮！", "pinyin": "Zhè kuài shǒubiǎo duōshao qián? Zhēn piàoliang!", "english": "How much was this watch? It's really beautiful!"},
            {"speaker": "大卫", "avatar": "👨‍🎓", "chinese": "三千多块钱，是我丈夫送给我的生日礼物。", "pinyin": "Sānqiān duō kuài qián, shì wǒ zhàngfu sòng gěi wǒ de shēngrì lǐwù.", "english": "Over 3,000 yuan, it was a birthday gift from my husband."}
        ],
        "culture": "Red (红色) in Chinese culture symbolizes good fortune, joy, and vitality. It is prominently worn during weddings and the Spring Festival.",
        "exercises": [
            {"question": "What does '红色的' mean when talking about cups?", "options": ["The red one", "A new cup", "My cup", "An expensive cup"], "answer": 0, "explanation": "'红色的' functions as a nominal phrase meaning 'the red one'."},
            {"question": "How do you say 'Please take a quick look'?", "options": ["请看一下", "请走一下", "请写一下", "请吃一下"], "answer": 0, "explanation": "'看' (look) + '一下' (briefly) = 看一下."}
        ]
    },
    {
        "id": "hsk2-l4", "level": 2, "lessonNumber": 4, "title": "这个工作是他帮我介绍的", "pinyin": "Zhè ge gōngzuò shì tā bāng wǒ jièshào de", "english": "He Recommended Me for This Job",
        "summary": "Master 是...的 emphasizing agent or helper, express birthdays with 生日快乐, and indicate time duration with 已经 and 开始.",
        "vocabulary": [
            {"character": "生日", "pinyin": "shēngrì", "meaning": "birthday"},
            {"character": "快乐", "pinyin": "kuàilè", "meaning": "happy; cheerful"},
            {"character": "给", "pinyin": "gěi", "meaning": "to give; for"},
            {"character": "接", "pinyin": "jiē", "meaning": "to receive; pick up (phone/person)"},
            {"character": "晚上", "pinyin": "wǎnshang", "meaning": "evening; night"},
            {"character": "问", "pinyin": "wèn", "meaning": "to ask"},
            {"character": "非常", "pinyin": "fēicháng", "meaning": "extremely; unusually"},
            {"character": "开始", "pinyin": "kāishǐ", "meaning": "to start; begin"},
            {"character": "已经", "pinyin": "yǐjīng", "meaning": "already"},
            {"character": "长", "pinyin": "cháng", "meaning": "long"},
            {"character": "两", "pinyin": "liǎng", "meaning": "two (before measure words)"},
            {"character": "帮", "pinyin": "bāng", "meaning": "to help; assist"},
            {"character": "介绍", "pinyin": "jièshào", "meaning": "to introduce; recommend"}
        ],
        "grammar": [
            {
                "title": "Cleft '是...的' Emphasizing the Agent / Helper",
                "pattern": "主语 + 是 + 某人 + 动词 + 的",
                "explanation": "When an event has taken place, '是...的' can pinpoint WHO performed or assisted with the action.",
                "examples": [
                    {"chinese": "这个工作是他帮我介绍的。", "pinyin": "Zhè ge gōngzuò shì tā bāng wǒ jièshào de.", "english": "It was he who helped recommend me for this job."},
                    {"chinese": "这本书是李老师买的。", "pinyin": "Zhè běn shū shì Lǐ lǎoshī mǎi de.", "english": "This book was bought by Teacher Li."}
                ]
            },
            {
                "title": "Adverb '已经' (Already)",
                "pattern": "主语 + 已经 + 谓语 + 了",
                "explanation": "'已经...了' indicates an action or state has already taken effect or reached a specific duration.",
                "examples": [
                    {"chinese": "他在北京已经住了两年了。", "pinyin": "Tā zài Běijīng yǐjīng zhù le liǎng nián le.", "english": "He has already lived in Beijing for two years."},
                    {"chinese": "会议已经开始了。", "pinyin": "Huìyì yǐjīng kāishǐ le.", "english": "The meeting has already started."}
                ]
            }
        ],
        "dialogue": [
            {"speaker": "大卫", "avatar": "👨‍🎓", "chinese": "生日快乐！这是送给你的礼物。", "pinyin": "Shēngrì kuàilè! Zhè shì sòng gěi nǐ de lǐwù.", "english": "Happy birthday! This is a gift for you."},
            {"speaker": "李月", "avatar": "👩‍🏫", "chinese": "谢谢你！你在新公司工作得怎么样？", "pinyin": "Xièxie nǐ! Nǐ zài xīn gōngsī gōngzuò de zěnmeyàng?", "english": "Thank you! How is your work going at the new company?"},
            {"speaker": "大卫", "avatar": "👨‍🎓", "chinese": "非常好。这个工作是王老师帮我介绍的。", "pinyin": "Fēicháng hǎo. Zhè ge gōngzuò shì Wáng lǎoshī bāng wǒ jièshào de.", "english": "Very well. It was Teacher Wang who introduced me to this job."},
            {"speaker": "李月", "avatar": "👩‍🏫", "chinese": "你已经工作多长时间了？", "pinyin": "Nǐ yǐjīng gōngzuò duō cháng shíjiān le?", "english": "How long have you been working there already?"},
            {"speaker": "大卫", "avatar": "👨‍🎓", "chinese": "我已经工作两个多月了。", "pinyin": "Wǒ yǐjīng gōngzuò liǎng ge duō yuè le.", "english": "I have already been working for over two months."}
        ],
        "culture": "Recommending acquaintances for job opportunities (介绍工作) is a traditional facet of Chinese social networking and mutual assistance (互相帮助).",
        "exercises": [
            {"question": "How do you say 'Happy Birthday' in Chinese?", "options": ["生日快乐！", "新年好！", "再见！", "认识你很高兴！"], "answer": 0, "explanation": "'生日快乐' (shēngrì kuàilè) means Happy Birthday."},
            {"question": "Translate: 'It was my friend who introduced me to this job.'", "options": ["这个工作是我朋友帮我介绍的。", "我想找一个工作。", "我朋友没有工作。", "这个工作很好。"], "answer": 0, "explanation": "'是...的' construction identifies the agent/introducer."}
        ]
    },
    {
        "id": "hsk2-l5", "level": 2, "lessonNumber": 5, "title": "就买这件吧", "pinyin": "Jiù mǎi zhè jiàn ba", "english": "Take This One",
        "summary": "Express decisions with 就, offer suggestions with 吧, use measure word 件 for clothing, and evaluate with 还可以.",
        "vocabulary": [
            {"character": "外面", "pinyin": "wàimiàn", "meaning": "outside; exterior"},
            {"character": "准备", "pinyin": "zhǔnbèi", "meaning": "to prepare; plan"},
            {"character": "就", "pinyin": "jiù", "meaning": "then; precisely; immediately"},
            {"character": "鱼", "pinyin": "yú", "meaning": "fish"},
            {"character": "吧", "pinyin": "ba", "meaning": "suggestion modal particle"},
            {"character": "件", "pinyin": "jiàn", "meaning": "measure word for clothing"},
            {"character": "还", "pinyin": "hái", "meaning": "still; fairly; yet"},
            {"character": "可以", "pinyin": "kěyǐ", "meaning": "can; passable; not bad"},
            {"character": "不错", "pinyin": "búcuò", "meaning": "pretty good; not bad"},
            {"character": "考试", "pinyin": "kǎoshì", "meaning": "exam; test"},
            {"character": "意思", "pinyin": "yìsi", "meaning": "meaning; fun"},
            {"character": "以后", "pinyin": "yǐhòu", "meaning": "after; in the future"}
        ],
        "grammar": [
            {
                "title": "Adverb '就' for Prompt Decisions",
                "pattern": "就 + 动词",
                "explanation": "'就' indicates a resolution, choice, or decision reached without hesitation.",
                "examples": [
                    {"chinese": "这件衣服很漂亮，就买这件吧！", "pinyin": "Zhè jiàn yīfu hěn piàoliang, jiù mǎi zhè jiàn ba!", "english": "This dress is very pretty, let's just buy this one!"},
                    {"chinese": "今天太累了，我们就在家吃饭吧。", "pinyin": "Jīntiān tài lèi le, wǒmen jiù zài jiā chīfàn ba.", "english": "Too tired today, let's just eat at home."}
                ]
            },
            {
                "title": "Evaluation with '还可以' and '不错'",
                "pattern": "主语 + 还可以 / 不错",
                "explanation": "'还可以' signifies acceptable/passable ('pretty good'), while '不错' signifies genuinely good ('not bad').",
                "examples": [
                    {"chinese": "这件衣服颜色还可以。", "pinyin": "Zhè jiàn yīfu yánsè hái kěyǐ.", "english": "This dress's color is pretty good."},
                    {"chinese": "昨天的考试我觉得很不错。", "pinyin": "Zuótiān de kǎoshì wǒ juéde hěn búcuò.", "english": "I think yesterday's exam went very well."}
                ]
            }
        ],
        "dialogue": [
            {"speaker": "大卫", "avatar": "👨‍🎓", "chinese": "晚上我们去外面吃鱼，怎么样？", "pinyin": "Wǎnshang wǒmen qù wàimiàn chī yú, zěnmeyàng?", "english": "How about we go outside to eat fish tonight?"},
            {"speaker": "玛丽", "avatar": "👩‍🎓", "chinese": "我已经准备好做饭了，就在家吃吧。", "pinyin": "Wǒ yǐjīng zhǔnbèi hǎo zuò fàn le, jiù zài jiā chī ba.", "english": "I've already prepared to cook, let's just eat at home."},
            {"speaker": "大卫", "avatar": "👨‍🎓", "chinese": "你看这件衣服怎么样？", "pinyin": "Nǐ kàn zhè jiàn yīfu zěnmeyàng?", "english": "What do you think of this piece of clothing?"},
            {"speaker": "玛丽", "avatar": "👩‍🎓", "chinese": "颜色还可以，不太贵，就买这件吧！", "pinyin": "Yánsè hái kěyǐ, bú tài guì, jiù mǎi zhè jiàn ba!", "english": "The color is nice, not too expensive, let's buy this one!"}
        ],
        "culture": "The Chinese word for fish, 鱼 (yú), is a homophone for 余 (yú - abundance/surplus), giving rise to the famous festive greeting '年年有余' (May you have surplus year after year).",
        "exercises": [
            {"question": "What is the measure word for a shirt or jacket in Chinese?", "options": ["件", "个", "本", "口"], "answer": 0, "explanation": "'件' (jiàn) is the dedicated measure word for upper-body clothing."},
            {"question": "How do you suggest: 'Let's buy this one'?", "options": ["就买这件吧！", "我想买衣服。", "这件衣服多少钱？", "不要买这件。"], "answer": 0, "explanation": "'就...吧' forms a decisive suggestion."}
        ]
    }
]

print(f"HSK 2 sample: {len(hsk2_lessons)} authentic lessons defined.")
