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
        "summary": "Discuss daily healthy habits with 每...都, express health conditions with 生病, 药, and 出院, and state height with 米.",
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
        "summary": "Master colors (红, 白, 黑), the structural particle 的 for noun ellipsis, and verbal measure word 一下.",
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
    },
    {
        "id": "hsk2-l6", "level": 2, "lessonNumber": 6, "title": "你怎么不吃了", "pinyin": "Nǐ zěnme bù chī le", "english": "Why Don't You Eat More?",
        "summary": "Inquire reasons with 怎么, express cause-and-effect with 因为...所以..., and discuss food and recovery.",
        "vocabulary": [
            {"character": "门", "pinyin": "mén", "meaning": "door; gate"},
            {"character": "外", "pinyin": "wài", "meaning": "outside; outer"},
            {"character": "自行车", "pinyin": "zìxíngchē", "meaning": "bicycle; bike"},
            {"character": "羊肉", "pinyin": "yángròu", "meaning": "mutton; lamb"},
            {"character": "好吃", "pinyin": "hǎochī", "meaning": "delicious"},
            {"character": "面条", "pinyin": "miàntiáo", "meaning": "noodles"},
            {"character": "怎么", "pinyin": "zěnme", "meaning": "how; why (inquiry)"},
            {"character": "因为", "pinyin": "yīnwèi", "meaning": "because"},
            {"character": "所以", "pinyin": "suǒyǐ", "meaning": "so; therefore"},
            {"character": "游泳", "pinyin": "yóuyǒng", "meaning": "to swim"}
        ],
        "grammar": [
            {
                "title": "Interrogative '怎么' Inquiring Cause/Reason",
                "pattern": "怎么 + 动词 / 否定词",
                "explanation": "'怎么' can ask WHY something did not occur or why someone is acting unexpectedly, with subtle surprise.",
                "examples": [
                    {"chinese": "你怎么不吃了？这道羊肉很好吃。", "pinyin": "Nǐ zěnme bù chī le? Zhè dào yángròu hěn hǎochī.", "english": "Why aren't you eating anymore? This lamb is delicious."},
                    {"chinese": "昨天你为什么没来上课？", "pinyin": "Zuótiān nǐ wèishénme méi lái shàngkè?", "english": "Why didn't you come to class yesterday?"}
                ]
            },
            {
                "title": "Cause and Effect: 因为...所以...",
                "pattern": "因为 + 原因，所以 + 结果",
                "explanation": "'因为' introduces the cause, and '所以' introduces the resulting outcome.",
                "examples": [
                    {"chinese": "因为我生病了，所以不想吃羊肉。", "pinyin": "Yīnwèi wǒ shēngbìng le, suǒyǐ bù xiǎng chī yángròu.", "english": "Because I fell ill, therefore I don't feel like eating mutton."},
                    {"chinese": "因为下雨了，所以我们没去踢足球。", "pinyin": "Yīnwèi xiàyǔ le, suǒyǐ wǒmen méi qù tī zúqiú.", "english": "Because it rained, we didn't go play soccer."}
                ]
            }
        ],
        "dialogue": [
            {"speaker": "李月", "avatar": "👩‍🏫", "chinese": "你最喜欢吃面条，今天怎么不吃了？", "pinyin": "Nǐ zuì xǐhuan chī miàntiáo, jīntiān zěnme bù chī le?", "english": "You like eating noodles the most, why aren't you eating today?"},
            {"speaker": "大卫", "avatar": "👨‍🎓", "chinese": "因为我昨晚感冒了，身体有点儿不舒服。", "pinyin": "Yīnwèi wǒ zuówǎn gǎnmào le, shēntǐ yǒudiǎnr bù shūfu.", "english": "Because I caught a cold last night, my body feels a bit uncomfortable."},
            {"speaker": "李月", "avatar": "👩‍🏫", "chinese": "那多喝热水，今天别骑自行车去学校了。", "pinyin": "Nà duō hē rè shuǐ, jīntiān bié qí zìxíngchē qù xuéxiào le.", "english": "Then drink more warm water, and don't ride a bicycle to school today."},
            {"speaker": "大卫", "avatar": "👨‍🎓", "chinese": "好的，谢谢老师，我吃了药就休息。", "pinyin": "Hǎo de, xièxie lǎoshī, wǒ chī le yào jiù xiūxi.", "english": "Okay, thank you teacher, I will rest after taking the medicine."}
        ],
        "culture": "In northern China, eating noodles (面条) on birthdays symbolizes long life (长寿面), whereas dumplings (饺子) symbolize wealth.",
        "exercises": [
            {"question": "How do you connect cause and effect in Chinese?", "options": ["因为...所以...", "虽然...但是...", "不仅...而且...", "除了...以外..."], "answer": 0, "explanation": "'因为...所以...' means 'because... therefore...'."},
            {"question": "What is '羊肉' in English?", "options": ["Mutton / Lamb", "Beef", "Pork", "Chicken"], "answer": 0, "explanation": "'羊肉' (yángròu) means mutton or lamb meat."}
        ]
    },
    {
        "id": "hsk2-l7", "level": 2, "lessonNumber": 7, "title": "你家离公司远吗", "pinyin": "Nǐ jiā lí gōngsī yuǎn ma", "english": "Do You Live Far from the Company?",
        "summary": "Master preposition 离 for distances, express travel speed with 快 and 慢, and talk about buses and airports.",
        "vocabulary": [
            {"character": "教室", "pinyin": "jiàoshì", "meaning": "classroom"},
            {"character": "机场", "pinyin": "jīchǎng", "meaning": "airport"},
            {"character": "路", "pinyin": "lù", "meaning": "road; route; way"},
            {"character": "离", "pinyin": "lí", "meaning": "away from; distance from"},
            {"character": "公司", "pinyin": "gōngsī", "meaning": "company; corporation"},
            {"character": "远", "pinyin": "yuǎn", "meaning": "far; distant"},
            {"character": "公共汽车", "pinyin": "gōnggòng qìchē", "meaning": "bus; public bus"},
            {"character": "小时", "pinyin": "xiǎoshí", "meaning": "hour"},
            {"character": "慢", "pinyin": "màn", "meaning": "slow"},
            {"character": "快", "pinyin": "kuài", "meaning": "fast; quick; soon"},
            {"character": "走", "pinyin": "zǒu", "meaning": "to walk; leave"},
            {"character": "到", "pinyin": "dào", "meaning": "to arrive; reach"}
        ],
        "grammar": [
            {
                "title": "Distance Preposition '离' (From)",
                "pattern": "地点 A + 离 + 地点 B + 很远 / 很近",
                "explanation": "'离' measures spatial or temporal distance between two reference points.",
                "examples": [
                    {"chinese": "我家离公司很近，走路十分钟就到了。", "pinyin": "Wǒ jiā lí gōngsī hěn jìn, zǒulù shí fēnzhōng jiù dào le.", "english": "My home is very close to the company; 10 minutes walk and I arrive."},
                    {"chinese": "学校离机场远不远？", "pinyin": "Xuéxiào lí jīchǎng yuǎn bù yuǎn?", "english": "Is the school far from the airport?"}
                ]
            },
            {
                "title": "Duration of Time: 小时",
                "pattern": "Number + 个 + 小时",
                "explanation": "Duration in hours requires the measure word '个': 一个小时 (one hour), 两个小时 (two hours).",
                "examples": [
                    {"chinese": "坐公共汽车要一个小时。", "pinyin": "Zuò gōnggòng qìchē yào yí ge xiǎoshí.", "english": "Taking the bus takes one hour."},
                    {"chinese": "坐出租车比坐公共汽车快。", "pinyin": "Zuò chūzūchē bǐ zuò gōnggòng qìchē kuài.", "english": "Taking a taxi is faster than taking a bus."}
                ]
            }
        ],
        "dialogue": [
            {"speaker": "王方", "avatar": "👩‍🎓", "chinese": "大卫，你家离公司远吗？", "pinyin": "Dàwèi, nǐ jiā lí gōngsī yuǎn ma?", "english": "David, do you live far from the company?"},
            {"speaker": "大卫", "avatar": "👨‍🎓", "chinese": "我家离公司不太远，坐公共汽车二十多分钟。", "pinyin": "Wǒ jiā lí gōngsī bú tài yuǎn, zuò gōnggòng qìchē èrshí duō fēnzhōng.", "english": "My home is not too far from the company, over 20 minutes by bus."},
            {"speaker": "王方", "avatar": "👩‍🎓", "chinese": "路上车多吗？堵不堵车？", "pinyin": "Lù shang chē duō ma? Dǔ bù dǔ chē?", "english": "Are there many cars on the road? Is it jammed?"},
            {"speaker": "大卫", "avatar": "👨‍🎓", "chinese": "早上车很多，开得有点儿慢。坐地铁最快了。", "pinyin": "Zǎoshang chē hěn duō, kāi de yǒudiǎnr màn. Zuò dìtiě zuì kuài le.", "english": "In the morning there are many cars, driving is slow. Taking the subway is fastest."}
        ],
        "culture": "China boasts the world's most extensive public transportation network, with subway systems in over 50 cities and clean electric buses ubiquitous.",
        "exercises": [
            {"question": "How do you ask 'Is your home far from school?'", "options": ["你家离学校远吗？", "你家在学校哪儿？", "你为什么去学校？", "学校几点关门？"], "answer": 0, "explanation": "'地点 A + 离 + 地点 B + 远吗？' is the pattern for asking distance."},
            {"question": "Translate 'two hours':", "options": ["两个小时", "两小时点", "二点", "二小时"], "answer": 0, "explanation": "Duration in hours uses '两个小时'."}
        ]
    },
    {
        "id": "hsk2-l8", "level": 2, "lessonNumber": 8, "title": "让我想想再告诉你", "pinyin": "Ràng wǒ xiǎngxiang zài gàosu nǐ", "english": "Let Me Think About It and Tell You Later",
        "summary": "Master causative verb 让, sequential temporal adverb 再, and verb reduplication (想想, 看看).",
        "vocabulary": [
            {"character": "再", "pinyin": "zài", "meaning": "again; then (sequential future)"},
            {"character": "让", "pinyin": "ràng", "meaning": "to let; allow; ask (causative)"},
            {"character": "告诉", "pinyin": "gàosu", "meaning": "to tell; inform"},
            {"character": "等", "pinyin": "děng", "meaning": "to wait"},
            {"character": "找", "pinyin": "zhǎo", "meaning": "to look for; seek"},
            {"character": "事情", "pinyin": "shìqing", "meaning": "affair; matter; thing"},
            {"character": "服务员", "pinyin": "fúwùyuán", "meaning": "waiter; attendant"},
            {"character": "白", "pinyin": "bái", "meaning": "white"},
            {"character": "黑", "pinyin": "hēi", "meaning": "black"},
            {"character": "贵", "pinyin": "guì", "meaning": "expensive"}
        ],
        "grammar": [
            {
                "title": "Causative Verb '让' (Let / Allow)",
                "pattern": "主语 + 让 + 宾语 + 动词",
                "explanation": "'让' indicates permission, request, or causation ('allow me to...', 'cause someone to...').",
                "examples": [
                    {"chinese": "让我想想再告诉你。", "pinyin": "Ràng wǒ xiǎngxiang zài gàosu nǐ.", "english": "Let me think about it and then tell you."},
                    {"chinese": "老师让我读一下这篇课文。", "pinyin": "Lǎoshī ràng wǒ dú yíxià zhè piān kèwén.", "english": "The teacher asked me to read this text."}
                ]
            },
            {
                "title": "Sequential Adverb '再' (Action Follows Another)",
                "pattern": "先... 再 + 动词",
                "explanation": "'再' placed before a verb indicates that an action will happen only after another prerequisite action is completed.",
                "examples": [
                    {"chinese": "我们吃了饭再去看电影吧。", "pinyin": "Wǒmen chī le fàn zài qù kàn diànyǐng ba.", "english": "Let's eat a meal first, then go watch the movie."},
                    {"chinese": "你先等一下，我找找手机。", "pinyin": "Nǐ xiān děng yíxià, wǒ zhǎozhao shǒujī.", "english": "Wait a moment, I'll look for my phone."}
                ]
            }
        ],
        "dialogue": [
            {"speaker": "大卫", "avatar": "👨‍🎓", "chinese": "周末我们去爬山，怎么样？", "pinyin": "Zhōumò wǒmen qù pá shān, zěnmeyàng?", "english": "How about we go mountain climbing this weekend?"},
            {"speaker": "李月", "avatar": "👩‍🏫", "chinese": "周末我可能有点儿事情，让我想想再告诉你。", "pinyin": "Zhōumò wǒ kěnéng yǒudiǎnr shìqing, ràng wǒ xiǎngxiang zài gàosu nǐ.", "english": "I might have some matters this weekend, let me think about it and tell you later."},
            {"speaker": "大卫", "avatar": "👨‍🎓", "chinese": "好的。你看这两件衣服，哪件好看？", "pinyin": "Hǎo de. Nǐ kàn zhè liǎng jiàn yīfu, nǎ jiàn hǎokàn?", "english": "Okay. Look at these two shirts, which one looks better?"},
            {"speaker": "李月", "avatar": "👩‍🏫", "chinese": "白色的比黑色的好看，但是有点儿贵。", "pinyin": "Báisè de bǐ hēisè de hǎokàn, dànshì yǒudiǎnr guì.", "english": "The white one looks better than the black one, but it is a bit expensive."}
        ],
        "culture": "Reduplicating a verb (看看, 听听, 想想) softens the tone of speech, making requests and statements sound polite, gentle, and informal.",
        "exercises": [
            {"question": "What does '让我想想' mean?", "options": ["Let me think a bit", "I am thinking", "Don't think", "Think deeply"], "answer": 0, "explanation": "'让' (let) + '想想' (think a bit) = Let me think a bit."},
            {"question": "How do you say 'eat first, then go'?", "options": ["吃了饭再去", "再去吃饭", "不要吃饭", "去吃饭了"], "answer": 0, "explanation": "'再' denotes a subsequent action in the future."}
        ]
    },
    {
        "id": "hsk2-l9", "level": 2, "lessonNumber": 9, "title": "题太多，我没做完", "pinyin": "Tí tài duō, wǒ méi zuò wán", "english": "There Were Too Many Questions, I Didn't Finish",
        "summary": "Master resultative complements 完 and 懂, express ranges with 从...到..., and use ordinal marker 第.",
        "vocabulary": [
            {"character": "错", "pinyin": "cuò", "meaning": "wrong; mistaken"},
            {"character": "从", "pinyin": "cóng", "meaning": "from (preposition)"},
            {"character": "跳舞", "pinyin": "tiàowǔ", "meaning": "to dance"},
            {"character": "第一", "pinyin": "dì-yī", "meaning": "first; number one"},
            {"character": "希望", "pinyin": "xīwàng", "meaning": "to hope; wish"},
            {"character": "问题", "pinyin": "wèntí", "meaning": "question; problem"},
            {"character": "欢迎", "pinyin": "huānyíng", "meaning": "to welcome"},
            {"character": "上班", "pinyin": "shàngbān", "meaning": "to go to work"},
            {"character": "懂", "pinyin": "dǒng", "meaning": "to understand; comprehend"},
            {"character": "完", "pinyin": "wán", "meaning": "to finish; complete (resultative)"},
            {"character": "题", "pinyin": "tí", "meaning": "exam question; problem"}
        ],
        "grammar": [
            {
                "title": "Resultative Complement: 动词 + 完 / 懂",
                "pattern": "动词 + 完 / 懂 (否定: 没 + 动词 + 完)",
                "explanation": "Resultative complements attach directly to the verb to signify the outcome of the action: 做完 (finish doing), 听懂 (comprehend by listening).",
                "examples": [
                    {"chinese": "考试的题太多了，我没做完。", "pinyin": "Kǎoshì de tí tài duō le, wǒ méi zuò wán.", "english": "There were too many exam questions, I didn't finish doing them."},
                    {"chinese": "老师说的话你听懂了吗？", "pinyin": "Lǎoshī shuō de huà nǐ tīng dǒng le ma?", "english": "Did you understand what the teacher said?"}
                ]
            },
            {
                "title": "Span of Time / Place: 从...到...",
                "pattern": "从 + 起点 + 到 + 终点",
                "explanation": "'从...到...' defines a range between two points in time or space.",
                "examples": [
                    {"chinese": "我们从早上八点到中午十二点上班。", "pinyin": "Wǒmen cóng zǎoshang bā diǎn dào zhōngwǔ shí'èr diǎn shàngbān.", "english": "We work from 8 AM to 12 noon."},
                    {"chinese": "从北京到上海坐高铁很快。", "pinyin": "Cóng Běijīng dào Shànghǎi zuò gāotiě hěn kuài.", "english": "From Beijing to Shanghai by high-speed rail is very fast."}
                ]
            }
        ],
        "dialogue": [
            {"speaker": "大卫", "avatar": "👨‍🎓", "chinese": "今天的考试你觉得怎么样？", "pinyin": "Jīntiān de kǎoshì nǐ juéde zěnmeyàng?", "english": "How did you find today's exam?"},
            {"speaker": "玛丽", "avatar": "👩‍🎓", "chinese": "题太多了，我没做完。第一道题你做对了吗？", "pinyin": "Tí tài duō le, wǒ méi zuò wán. Dì-yī dào tí nǐ zuò duì le ma?", "english": "There were too many questions, I didn't finish. Did you get the first question right?"},
            {"speaker": "大卫", "avatar": "👨‍🎓", "chinese": "第一道题我听懂了，做对了。后面的听力有点儿难。", "pinyin": "Dì-yī dào tí wǒ tīng dǒng le, zuò duì le. Hòumiàn de tīnglì yǒudiǎnr nán.", "english": "I understood the first question and got it right. The listening later on was a bit hard."},
            {"speaker": "玛丽", "avatar": "👩‍🎓", "chinese": "希望我们都能考出好成绩！", "pinyin": "Xīwàng wǒmen dōu néng kǎo chū hǎo chéngjì!", "english": "I hope we both get good grades!"}
        ],
        "culture": "Standard examinations in China place strong weight on reading speed and accuracy, preparing learners for timed proficiency assessments like the HSK.",
        "exercises": [
            {"question": "How do you express 'I did not finish the exam'?", "options": ["我没做完考试。", "我做完考试了。", "我想做考试。", "考试很难。"], "answer": 0, "explanation": "'没做完' is the negative resultative complement form."},
            {"question": "What is '第一' in English?", "options": ["First / Number one", "Second", "Last", "One time"], "answer": 0, "explanation": "Prefix '第' forms ordinal numbers: 第一 (first)."}
        ]
    },
    {
        "id": "hsk2-l10", "level": 2, "lessonNumber": 10, "title": "别找了，手机在桌子上呢", "pinyin": "Bié zhǎo le, shǒujī zài zhuōzi shang ne", "english": "Stop Looking, the Phone is on the Table",
        "summary": "Master negative imperative 别...了, progressive aspect 正在, and modal particle 呢 indicating current state.",
        "vocabulary": [
            {"character": "别", "pinyin": "bié", "meaning": "don't; do not (imperative)"},
            {"character": "哥哥", "pinyin": "gēge", "meaning": "elder brother"},
            {"character": "鸡蛋", "pinyin": "jīdàn", "meaning": "chicken egg"},
            {"character": "西瓜", "pinyin": "xīguā", "meaning": "watermelon"},
            {"character": "正在", "pinyin": "zhèngzài", "meaning": "in the process of; right now"},
            {"character": "手机", "pinyin": "shǒujī", "meaning": "cellphone; mobile phone"},
            {"character": "洗", "pinyin": "xǐ", "meaning": "to wash"},
            {"character": "唱歌", "pinyin": "chànggē", "meaning": "to sing"},
            {"character": "男", "pinyin": "nán", "meaning": "male"},
            {"character": "孩子", "pinyin": "háizi", "meaning": "child; kid"}
        ],
        "grammar": [
            {
                "title": "Negative Imperative: 别 + 动词 + (了)",
                "pattern": "别 + 动词 + 了",
                "explanation": "'别...了' functions as 'Stop doing that!' or 'Don't do that anymore', urging cessation of an action.",
                "examples": [
                    {"chinese": "别找了，手机在桌子上呢。", "pinyin": "Bié zhǎo le, shǒujī zài zhuōzi shang ne.", "english": "Stop looking, the phone is on the table."},
                    {"chinese": "别说话了，老师来了。", "pinyin": "Bié shuōhuà le, lǎoshī lái le.", "english": "Stop talking, the teacher is here."}
                ]
            },
            {
                "title": "Progressive Marker: 正在 + 动词",
                "pattern": "主语 + 正在 + 动词",
                "explanation": "'正在' emphasizes that an action is taking place right at this exact moment.",
                "examples": [
                    {"chinese": "哥哥正在房间里唱歌呢。", "pinyin": "Gēge zhèngzài fángjiān lǐ chànggē ne.", "english": "Older brother is right now singing in his room."},
                    {"chinese": "妈妈正在洗衣服。", "pinyin": "Māma zhèngzài xǐ yīfu.", "english": "Mom is washing clothes right now."}
                ]
            }
        ],
        "dialogue": [
            {"speaker": "大卫", "avatar": "👨‍🎓", "chinese": "你在找什么呢？", "pinyin": "Nǐ zài zhǎo shénme ne?", "english": "What are you looking for?"},
            {"speaker": "王方", "avatar": "👩‍🎓", "chinese": "我的手机不见了，不知道在哪儿。", "pinyin": "Wǒ de shǒujī bú jiàn le, bù zhīdào zài nǎr.", "english": "My phone is gone, I don't know where it is."},
            {"speaker": "大卫", "avatar": "👨‍🎓", "chinese": "别找了，手机在桌子上呢，电脑旁边。", "pinyin": "Bié zhǎo le, shǒujī zài zhuōzi shang ne, diànnǎo pángbiān.", "english": "Stop looking, the phone is right on the table, next to the computer."},
            {"speaker": "王方", "avatar": "👩‍🎓", "chinese": "看到了！太谢谢你了，我们吃西瓜吧。", "pinyin": "Kàndào le! Tài xièxie nǐ le, wǒmen chī xīguā ba.", "english": "Found it! Thanks so much, let's eat watermelon."}
        ],
        "culture": "Watermelon (西瓜) is China's quintessential summer fruit, traditionally chilled in well-water or refrigerators and served after meals.",
        "exercises": [
            {"question": "How do you say 'Stop looking!'?", "options": ["别找了！", "想找！", "在找呢！", "找手机！"], "answer": 0, "explanation": "'别...了' orders someone to stop an ongoing action."},
            {"question": "Complete: 他______在房间里看书呢。", "options": ["正", "从", "最", "让"], "answer": 0, "explanation": "'正在' denotes ongoing action right now."}
        ]
    },
    {
        "id": "hsk2-l11", "level": 2, "lessonNumber": 11, "title": "他比我大三岁", "pinyin": "Tā bǐ wǒ dà sān suì", "english": "He is Three Years Older Than Me",
        "summary": "Master comparative construction A 比 B + Adjective, express concrete differences with numbers, and use negative comparison 没有.",
        "vocabulary": [
            {"character": "比", "pinyin": "bǐ", "meaning": "than (comparative marker)"},
            {"character": "矮", "pinyin": "ǎi", "meaning": "short (in stature)"},
            {"character": "唱歌", "pinyin": "chànggē", "meaning": "to sing"},
            {"character": "妻子", "pinyin": "qīzi", "meaning": "wife"},
            {"character": "日记", "pinyin": "rìjì", "meaning": "diary"},
            {"character": "便宜", "pinyin": "piányi", "meaning": "cheap; inexpensive"},
            {"character": "说话", "pinyin": "shuōhuà", "meaning": "to speak; talk"},
            {"character": "可能", "pinyin": "kěnéng", "meaning": "maybe; possible"},
            {"character": "去年", "pinyin": "qùnián", "meaning": "last year"}
        ],
        "grammar": [
            {
                "title": "Basic Comparative: A 比 B + 形容词",
                "pattern": "A + 比 + B + 形容词",
                "explanation": "To compare two entities where A has more of a quality than B, place '比' between A and B.",
                "examples": [
                    {"chinese": "哥哥比弟弟高。", "pinyin": "Gēge bǐ dìdi gāo.", "english": "Older brother is taller than younger brother."},
                    {"chinese": "今天比昨天冷。", "pinyin": "Jīntiān bǐ zuótiān lěng.", "english": "Today is colder than yesterday."}
                ]
            },
            {
                "title": "Comparative with Concrete Quantity",
                "pattern": "A + 比 + B + 形容词 + 数量词",
                "explanation": "To state the specific numerical difference between A and B, place the quantity AFTER the adjective.",
                "examples": [
                    {"chinese": "他比我大三岁。", "pinyin": "Tā bǐ wǒ dà sān suì.", "english": "He is three years older than me."},
                    {"chinese": "这件衣服比那件便宜五十块钱。", "pinyin": "Zhè jiàn yīfu bǐ nà jiàn piányi wǔshí kuài qián.", "english": "This piece of clothing is 50 yuan cheaper than that one."}
                ]
            }
        ],
        "dialogue": [
            {"speaker": "大卫", "avatar": "👨‍🎓", "chinese": "王方，你和你哥哥谁大？", "pinyin": "Wáng Fāng, nǐ hé nǐ gēge shéi dà?", "english": "Wang Fang, who is older between you and your brother?"},
            {"speaker": "王方", "avatar": "👩‍🎓", "chinese": "我哥哥比我大三岁，他也比我高一点儿。", "pinyin": "Wǒ gēge bǐ wǒ dà sān suì, tā yě bǐ wǒ gāo yìdiǎnr.", "english": "My brother is three years older than me, he is also a bit taller than me."},
            {"speaker": "大卫", "avatar": "👨‍🎓", "chinese": "你唱歌唱得很好，你哥哥也会唱歌吗？", "pinyin": "Nǐ chànggē chàng de hěn hǎo, nǐ gēge yě huì chànggē ma?", "english": "You sing very well, can your brother sing too?"},
            {"speaker": "王方", "avatar": "👩‍🎓", "chinese": "他比我更喜欢唱歌，唱得比我好听多了！", "pinyin": "Tā bǐ wǒ gèng xǐhuan chànggē, chàng de bǐ wǒ hǎotīng duō le!", "english": "He likes singing even more than me, and sings much better!"}
        ],
        "culture": "In Chinese families, addressing siblings by specific kinship titles (哥哥, 姐姐, 弟弟, 妹妹) rather than first names expresses familial respect and affection.",
        "exercises": [
            {"question": "How do you say 'He is 3 years older than me'?", "options": ["他比我大三岁。", "他比我三岁大。", "我比他大三岁。", "他是大三岁。"], "answer": 0, "explanation": "A + 比 + B + 形容词 (大) + 数量词 (三岁)."},
            {"question": "What is the opposite of '高' (tall)?", "options": ["矮", "长", "短", "小"], "answer": 0, "explanation": "'矮' (ǎi) means short in height."}
        ]
    },
    {
        "id": "hsk2-l12", "level": 2, "lessonNumber": 12, "title": "你穿得太少了", "pinyin": "Nǐ chuān de tài shǎo le", "english": "You Are Wearing Too Little",
        "summary": "Master degree complements with 得 (跑得快, 穿得少), describe cold winter weather, and express frequency with 次.",
        "vocabulary": [
            {"character": "得", "pinyin": "de", "meaning": "structural particle (for complement of degree)"},
            {"character": "穿", "pinyin": "chuān", "meaning": "to wear; put on"},
            {"character": "进", "pinyin": "jìn", "meaning": "to enter; come in"},
            {"character": "妻子", "pinyin": "qīzi", "meaning": "wife"},
            {"character": "雪", "pinyin": "xuě", "meaning": "snow"},
            {"character": "零", "pinyin": "líng", "meaning": "zero"},
            {"character": "度", "pinyin": "dù", "meaning": "degree (temperature/angle)"},
            {"character": "次", "pinyin": "cì", "meaning": "time (frequency measure word)"}
        ],
        "grammar": [
            {
                "title": "Complement of Degree: 动词 + 得 + 评价",
                "pattern": "动词 + 得 + 很 / 太 / 比较 + 形容词",
                "explanation": "'得' connects a verb with an evaluation of how well or to what degree that action is performed.",
                "examples": [
                    {"chinese": "外边下雪了，你穿得太少了！", "pinyin": "Wàibian xià xuě le, nǐ chuān de tài shǎo le!", "english": "It's snowing outside, you are dressed too lightly!"},
                    {"chinese": "他跑步跑得非常快。", "pinyin": "Tā pǎobù pǎo de fēicháng kuài.", "english": "He runs exceptionally fast."}
                ]
            },
            {
                "title": "Describing Temperature with '度' and '零下'",
                "pattern": "Number + 度 (零下 = Below Zero)",
                "explanation": "Temperature in Celsius is measured in '度'. Below zero is '零下'.",
                "examples": [
                    {"chinese": "今天北京零下五度。", "pinyin": "Jīntiān Běijīng língxià wǔ dù.", "english": "Today in Beijing it is 5 degrees below zero."},
                    {"chinese": "快进房间来吧，里边暖和。", "pinyin": "Kuài jìn fángjiān lái ba, lǐbian nuǎnhuo.", "english": "Quickly come into the room, inside is warm."}
                ]
            }
        ],
        "dialogue": [
            {"speaker": "李月", "avatar": "👩‍🏫", "chinese": "今天外边下雪了，零下五度呢！你怎么穿得这么少？", "pinyin": "Jīntiān wàibian xià xuě le, língxià wǔ dù ne! Nǐ zěnme chuān de zhème shǎo?", "english": "It's snowing outside today, minus five degrees! Why are you dressed so lightly?"},
            {"speaker": "大卫", "avatar": "👨‍🎓", "chinese": "我出门时没看天气预报。真的有点儿冷！", "pinyin": "Wǒ chū mén shí méi kàn tiānqì yùbào. Zhēn de yǒudiǎnr lěng!", "english": "I didn't check the weather forecast when I left home. It really is cold!"},
            {"speaker": "李月", "avatar": "👩‍🏫", "chinese": "快进屋来，喝一杯热茶吧。", "pinyin": "Kuài jìn wū lái, hē yì bēi rè chá ba.", "english": "Come into the room quickly, have a cup of hot tea."},
            {"speaker": "大卫", "avatar": "👨‍🎓", "chinese": "谢谢李老师，今天不能在外面跑步了。", "pinyin": "Xièxie Lǐ lǎoshī, jīntiān bù néng zài wàimiàn pǎobù le.", "english": "Thank you Teacher Li, today we can't run outside."}
        ],
        "culture": "Northern China features widespread municipal central heating (暖气) from November to March, making indoor spaces delightfully warm even in freezing winter.",
        "exercises": [
            {"question": "How do you say 'He runs very fast'?", "options": ["他跑得很快。", "他快跑。", "他跑得很慢。", "他跑得少。"], "answer": 0, "explanation": "'动词 + 得 + 评价形容词' expresses degree."},
            {"question": "What is '雪'?", "options": ["Snow", "Rain", "Wind", "Cloud"], "answer": 0, "explanation": "'雪' (xuě) means snow."}
        ]
    },
    {
        "id": "hsk2-l13", "level": 2, "lessonNumber": 13, "title": "门开着呢", "pinyin": "Mén kāi zhe ne", "english": "The Door is Open",
        "summary": "Master aspect particle 着 for continuous states, indicate directions with 往, and navigate streets.",
        "vocabulary": [
            {"character": "着", "pinyin": "zhe", "meaning": "aspect particle (continuous state)"},
            {"character": "手", "pinyin": "shǒu", "meaning": "hand"},
            {"character": "拿", "pinyin": "ná", "meaning": "to hold; take"},
            {"character": "铅笔", "pinyin": "qiānbǐ", "meaning": "pencil"},
            {"character": "笑", "pinyin": "xiào", "meaning": "to smile; laugh"},
            {"character": "宾馆", "pinyin": "bīnguǎn", "meaning": "hotel; guesthouse"},
            {"character": "一直", "pinyin": "yìzhí", "meaning": "straight; continuously"},
            {"character": "往", "pinyin": "wǎng", "meaning": "toward; head for"},
            {"character": "路口", "pinyin": "lùkǒu", "meaning": "intersection; crossing"}
        ],
        "grammar": [
            {
                "title": "Continuous State with '着'",
                "pattern": "动词 + 着 + (呢)",
                "explanation": "'着' indicates the continuation of a state resulting from an action: 门开着 (the door is open), 他穿着红衣服 (he is wearing red clothes).",
                "examples": [
                    {"chinese": "门开着呢，请进吧。", "pinyin": "Mén kāi zhe ne, qǐng jìn ba.", "english": "The door is open, please come in."},
                    {"chinese": "那个手里拿着铅笔的人是谁？", "pinyin": "Nà ge shǒu lǐ ná zhe qiānbǐ de rén shì shéi?", "english": "Who is that person holding a pencil in hand?"}
                ]
            },
            {
                "title": "Giving Directions: 往 + Direction + 动词",
                "pattern": "往 + 方向 + 动词",
                "explanation": "'往' indicates the direction of movement: 往左拐 (turn left), 往前走 (walk forward).",
                "examples": [
                    {"chinese": "从这儿一直往前走，就是宾馆。", "pinyin": "Cóng zhèr yìzhí wǎng qián zǒu, jiù shì bīnguǎn.", "english": "From here walk straight forward, and there is the hotel."},
                    {"chinese": "到前面的路口往右拐。", "pinyin": "Dào qiánmiàn de lùkǒu wǎng yòu guǎi.", "english": "Turn right at the intersection ahead."}
                ]
            }
        ],
        "dialogue": [
            {"speaker": "大卫", "avatar": "👨‍🎓", "chinese": "请问，李老师在办公室吗？", "pinyin": "Qǐngwèn, Lǐ lǎoshī zài bàngōngshì ma?", "english": "Excuse me, is Teacher Li in the office?"},
            {"speaker": "王方", "avatar": "👩‍🎓", "chinese": "在，你看，办公室的门开着呢。", "pinyin": "Zài, nǐ kàn, bàngōngshì de mén kāi zhe ne.", "english": "Yes, look, the office door is open."},
            {"speaker": "大卫", "avatar": "👨‍🎓", "chinese": "里面那个笑着跟客人说话的人就是她吧？", "pinyin": "Lǐmiàn nà ge xiào zhe gēn kèrén shuōhuà de rén jiù shì tā ba?", "english": "The person inside smiling and talking with guests is her, right?"},
            {"speaker": "王方", "avatar": "👩‍🎓", "chinese": "对，就是李老师，你快进去吧。", "pinyin": "Duì, jiù shì Lǐ lǎoshī, nǐ kuài jìnqu ba.", "english": "Right, that's Teacher Li, go in quickly."}
        ],
        "culture": "Chinese directional navigation traditionally relies on cardinal points (东南西北) as well as relative terms (前后左右). In cities like Beijing, locals often direct you '往东' (head east).",
        "exercises": [
            {"question": "What does '门开着呢' indicate?", "options": ["The door is in an open state", "Someone is opening the door", "Please close the door", "The door is locked"], "answer": 0, "explanation": "'动词 + 着' indicates a persisting state resulting from an action."},
            {"question": "How do you say 'Walk straight forward'?", "options": ["一直往前走", "往左边看", "往后退", "往右边走"], "answer": 0, "explanation": "'一直' (straight) + '往前走' (walk forward) = 一直往前走."}
        ]
    },
    {
        "id": "hsk2-l14", "level": 2, "lessonNumber": 14, "title": "你看过那个电影吗", "pinyin": "Nǐ kàn guo nà ge diànyǐng ma", "english": "Have You Seen That Movie?",
        "summary": "Master experiential aspect particle 过 for past experiences, express contrast with 虽然...但是..., and talk about cinema.",
        "vocabulary": [
            {"character": "过", "pinyin": "guo", "meaning": "aspect particle (past experience)"},
            {"character": "次", "pinyin": "cì", "meaning": "time; frequency measure word"},
            {"character": "虽然", "pinyin": "suīrán", "meaning": "although; even though"},
            {"character": "但是", "pinyin": "dànshì", "meaning": "but; however"},
            {"character": "晴", "pinyin": "qíng", "meaning": "sunny; clear weather"},
            {"character": "百", "pinyin": "bǎi", "meaning": "hundred"},
            {"character": "日", "pinyin": "rì", "meaning": "day; sun; date"},
            {"character": "报纸", "pinyin": "bàozhǐ", "meaning": "newspaper"}
        ],
        "grammar": [
            {
                "title": "Experiential Aspect: 动词 + 过",
                "pattern": "主语 + 动词 + 过 + (宾语) (否定: 没 + 动词 + 过)",
                "explanation": "'过' indicates that an action has been experienced at least once in the past. Its negative form is '没(有)...过'.",
                "examples": [
                    {"chinese": "你看过那个电影吗？我没看过。", "pinyin": "Nǐ kàn guo nà ge diànyǐng ma? Wǒ méi kàn guo.", "english": "Have you seen that movie? I haven't seen it."},
                    {"chinese": "我去过一次北京。", "pinyin": "Wǒ qù guo yí cì Běijīng.", "english": "I have been to Beijing once."}
                ]
            },
            {
                "title": "Concession and Contrast: 虽然...但是...",
                "pattern": "虽然 + 事实，但是 + 转折",
                "explanation": "Pairs 'although' with 'but' to convey contrast between two clauses.",
                "examples": [
                    {"chinese": "虽然天气很冷，但是今天是个晴天。", "pinyin": "Suīrán tiānqì hěn lěng, dànshì jīntiān shì ge qíngtiān.", "english": "Although the weather is cold, today is a sunny day."},
                    {"chinese": "虽然汉语有点儿难，但是很有意思。", "pinyin": "Suīrán hànyǔ yǒudiǎnr nán, dànshì hěn yǒu yìsi.", "english": "Although Chinese is a bit hard, it is very interesting."}
                ]
            }
        ],
        "dialogue": [
            {"speaker": "大卫", "avatar": "👨‍🎓", "chinese": "你看过那个新电影吗？", "pinyin": "Nǐ kàn guo nà ge xīn diànyǐng ma?", "english": "Have you seen that new movie?"},
            {"speaker": "玛丽", "avatar": "👩‍🎓", "chinese": "没看过。听说很有意思，你想去看吗？", "pinyin": "Méi kàn guo. Tīngshuō hěn yǒu yìsi, nǐ xiǎng qù kàn ma?", "english": "I haven't. I heard it's very interesting, do you want to go see it?"},
            {"speaker": "大卫", "avatar": "👨‍🎓", "chinese": "虽然今天票有点儿贵，但是我想去看。", "pinyin": "Suīrán jīntiān piào yǒudiǎnr guì, dànshì wǒ xiǎng qù kàn.", "english": "Although tickets are a bit expensive today, I want to see it."},
            {"speaker": "玛丽", "avatar": "👩‍🎓", "chinese": "好啊，那我们晚上一起去电影院吧！", "pinyin": "Hǎo a, nà wǒmen wǎnshang yìqǐ qù diànyǐngyuàn ba!", "english": "Great, then let's go to the cinema together tonight!"}
        ],
        "culture": "Movie-going is a major social activity in Chinese cities, with theaters frequently screening domestic animations and major cultural epics during holiday seasons.",
        "exercises": [
            {"question": "How do you ask 'Have you ever eaten Beijing Roast Duck?'", "options": ["你吃过北京烤鸭吗？", "你想吃烤鸭吗？", "烤鸭好吃吗？", "你在哪儿吃烤鸭？"], "answer": 0, "explanation": "'动词 + 过' asks about past life experience."},
            {"question": "Connect clauses: 'Although it is hard, it is fun.'", "options": ["虽然很难，但是很有意思。", "因为很难，所以很有意思。", "不仅很难，而且很有意思。", "如果很难，就很有意思。"], "answer": 0, "explanation": "'虽然...但是...' is the concession-contrast construction."}
        ]
    },
    {
        "id": "hsk2-l15", "level": 2, "lessonNumber": 15, "title": "新年就要到了", "pinyin": "Xīnnián jiù yào dào le", "english": "The New Year is Coming",
        "summary": "Express imminent future actions with 快要 / 就要...了, comparative degree with 更, and talk about train stations and holidays.",
        "vocabulary": [
            {"character": "新年", "pinyin": "xīnnián", "meaning": "New Year"},
            {"character": "票", "pinyin": "piào", "meaning": "ticket"},
            {"character": "火车站", "pinyin": "huǒchēzhàn", "meaning": "railway station; train station"},
            {"character": "大家", "pinyin": "dàjiā", "meaning": "everyone; all of us"},
            {"character": "更", "pinyin": "gèng", "meaning": "even more; further"},
            {"character": "妹妹", "pinyin": "mèimei", "meaning": "younger sister"},
            {"character": "阴", "pinyin": "yīn", "meaning": "overcast; cloudy"}
        ],
        "grammar": [
            {
                "title": "Imminent Future: 快要 / 就要 + 动词 + 了",
                "pattern": "主语 + 快要 / 就要 + 动词 + 了",
                "explanation": "Signifies that an event or action is about to take place very soon. When a specific time adverb is present, use '就要...了'.",
                "examples": [
                    {"chinese": "新年就要到了，火车站的人越来越多。", "pinyin": "Xīnnián jiù yào dào le, huǒchēzhàn de rén yuè lái yuè duō.", "english": "New Year is about to arrive, more and more people at the train station."},
                    {"chinese": "飞机快要起飞了，请坐好。", "pinyin": "Fēijī kuàiyào qǐfēi le, qǐng zuò hǎo.", "english": "The plane is about to take off, please remain seated."}
                ]
            },
            {
                "title": "Comparative Degree Adverb '更' (Even More)",
                "pattern": "更 + 形容词",
                "explanation": "'更' modifies adjectives to denote a step further in degree compared to an already high standard.",
                "examples": [
                    {"chinese": "明天天气会更冷。", "pinyin": "Míngtiān tiānqì huì gèng lěng.", "english": "Tomorrow the weather will be even colder."},
                    {"chinese": "祝大家新年快乐，学习更上一层楼！", "pinyin": "Zhù dàjiā xīnnián kuàilè, xuéxí gèng shàng yì céng lóu!", "english": "Wishing everyone a Happy New Year, with your studies reaching even greater heights!"}
                ]
            }
        ],
        "dialogue": [
            {"speaker": "大卫", "avatar": "👨‍🎓", "chinese": "新年就要到了，你买好回家的火车票了吗？", "pinyin": "Xīnnián jiù yào dào le, nǐ mǎi hǎo huí jiā de huǒchēpiào le ma?", "english": "The New Year is coming soon, have you bought your train ticket home?"},
            {"speaker": "王方", "avatar": "👩‍🎓", "chinese": "买好了，我明天下午就回老家看我妹妹。", "pinyin": "Mǎi hǎo le, wǒ míngtiān xiàwǔ jiù huí lǎojiā kàn wǒ mèimei.", "english": "Bought it, I'm heading back to my hometown tomorrow afternoon to see my younger sister."},
            {"speaker": "大卫", "avatar": "👨‍🎓", "chinese": "火车站人很多吧？", "pinyin": "Huǒchēzhàn rén hěn duō ba?", "english": "There must be a lot of people at the train station?"},
            {"speaker": "王方", "avatar": "👩‍🎓", "chinese": "对，比平时多很多。祝你新年快乐！", "pinyin": "Duì, bǐ píngshí duō hěn duō. Zhù nǐ xīnnián kuàilè!", "english": "Yes, much more than usual. Wishing you a Happy New Year!"},
            {"speaker": "大卫", "avatar": "👨‍🎓", "chinese": "祝你和大家新年快乐，身体健康！", "pinyin": "Zhù nǐ hé dàjiā xīnnián kuàilè, shēntǐ jiànkāng!", "english": "Wishing you and everyone a Happy New Year and good health!"}
        ],
        "culture": "The Spring Festival migration (春运) is the world's largest annual human movement, where hundreds of millions travel across China to celebrate the lunar New Year with family.",
        "exercises": [
            {"question": "How do you express that an event is about to happen very soon?", "options": ["快要...了 / 就要...了", "已经...了", "虽然...但是...", "不仅...而且..."], "answer": 0, "explanation": "'快要/就要...了' denotes imminent future action."},
            {"question": "How do you say 'Happy New Year' in Mandarin?", "options": ["新年快乐！", "生日快乐！", "对不起！", "没关系！"], "answer": 0, "explanation": "'新年快乐' (Xīnnián kuàilè) means Happy New Year."}
        ]
    }
]

print(f"Loaded {len(hsk2_lessons)} HSK 2 lessons.")
