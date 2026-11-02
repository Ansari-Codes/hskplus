import json

# Full Standard Curriculum Lessons for HSK 3 (Lessons 1-20)
hsk3_lessons = [
    {
        "id": "hsk3-l1", "level": 3, "lessonNumber": 1, "title": "周末你有什么打算", "pinyin": "Zhōumò nǐ yǒu shénme dǎsuan", "english": "What's Your Plan for the Weekend?",
        "summary": "Discuss weekend plans with 打算, use conjunction 跟, express continuous habit with 一直, and review flexible question words.",
        "vocabulary": [
            {"character": "打算", "pinyin": "dǎsuan", "meaning": "to plan; intention"},
            {"character": "跟", "pinyin": "gēn", "meaning": "with; and (preposition)"},
            {"character": "一直", "pinyin": "yìzhí", "meaning": "all along; continuously"},
            {"character": "游戏", "pinyin": "yóuxì", "meaning": "game"},
            {"character": "作业", "pinyin": "zuòyè", "meaning": "homework; assignment"},
            {"character": "着急", "pinyin": "zháojí", "meaning": "anxious; worried"},
            {"character": "复习", "pinyin": "fùxí", "meaning": "to review; revise"},
            {"character": "南方", "pinyin": "nánfāng", "meaning": "south; southern part"},
            {"character": "面包", "pinyin": "miànbāo", "meaning": "bread"},
            {"character": "带", "pinyin": "dài", "meaning": "to bring; carry; lead"}
        ],
        "grammar": [
            {
                "title": "Expressing Plans with '打算'",
                "pattern": "主语 + 打算 + 动词短语",
                "explanation": "'打算' expresses planned or intended actions for the future.",
                "examples": [
                    {"chinese": "周末你有什么打算？我打算去南方旅游。", "pinyin": "Zhōumò nǐ yǒu shénme dǎsuan? Wǒ dǎsuan qù nánfāng lǚyóu.", "english": "What are your plans for the weekend? I plan to travel to the south."},
                    {"chinese": "我打算在家复习功课。", "pinyin": "Wǒ dǎsuan zài jiā fùxí gōngkè.", "english": "I plan to review schoolwork at home."}
                ]
            },
            {
                "title": "Continuous Action / State with '一直'",
                "pattern": "主语 + 一直 + 动词短语",
                "explanation": "'一直' emphasizes an uninterrupted duration or persistent habit without break.",
                "examples": [
                    {"chinese": "你一直在玩电脑游戏，作业写完了吗？", "pinyin": "Nǐ yìzhí zài wán diànnǎo yóuxì, zuòyè xiě wán le ma?", "english": "You've been playing computer games all along, did you finish your homework?"},
                    {"chinese": "他一直在北京大学学习汉语。", "pinyin": "Tā yìzhí zài Běijīng Dàxué xuéxí hànyǔ.", "english": "He has been studying Chinese at Peking University continuously."}
                ]
            }
        ],
        "dialogue": [
            {"speaker": "小丽", "avatar": "👩‍🎓", "chinese": "周末你有什么打算？", "pinyin": "Zhōumò nǐ yǒu shénme dǎsuan?", "english": "What are your plans for the weekend?"},
            {"speaker": "小刚", "avatar": "👨‍🎓", "chinese": "我早就想好了，请你吃饭、看电影、买东西。", "pinyin": "Wǒ zǎo jiù xiǎng hǎo le, qǐng nǐ chīfàn, kàn diànyǐng, mǎi dōngxi.", "english": "I thought it all out long ago: treat you to dinner, watch a movie, go shopping."},
            {"speaker": "小丽", "avatar": "👩‍🎓", "chinese": "请我？你不是说下个月才发工资吗？", "pinyin": "Qǐng wǒ? Nǐ bú shì shuō xià ge yuè cái fā gōngzī ma?", "english": "Treat me? Didn't you say you wouldn't get paid until next month?"},
            {"speaker": "小刚", "avatar": "👨‍🎓", "chinese": "没关系，我还有一点儿钱。下周考试，你复习得怎么样了？", "pinyin": "Méi guānxi, wǒ hái yǒu yìdiǎnr qián. Xià zhōu kǎoshì, nǐ fùxí de zěnmeyàng le?", "english": "No problem, I still have some money. Next week is exams, how's your revision going?"},
            {"speaker": "小丽", "avatar": "👩‍🎓", "chinese": "我一直在复习，准备得差不多了。", "pinyin": "Wǒ yìzhí zài fùxí, zhǔnbèi de chàbuduō le.", "english": "I've been reviewing all along, almost ready."}
        ],
        "culture": "The cultural divide between North (北方) and South (南方) China is marked by the Qinling-Huaihe Line, influencing climate, cuisine (wheat noodles vs rice), and lifestyles.",
        "exercises": [
            {"question": "How do you ask 'What are your plans for the weekend?'", "options": ["周末你有什么打算？", "你什么时候回来？", "你在哪儿工作？", "几点开始？"], "answer": 0, "explanation": "'打算' means plan / intention."},
            {"question": "Translate: 'He has been studying all along.'", "options": ["他一直在学习。", "他不学习。", "他打算学习。", "他会学习。"], "answer": 0, "explanation": "'一直' signifies continuous unbroken action."}
        ]
    },
    {
        "id": "hsk3-l2", "level": 3, "lessonNumber": 2, "title": "他什么时候回来", "pinyin": "Tā shénme shíhou huílái", "english": "When Will He Come Back?",
        "summary": "Master simple directional complements (来 vs 去), discuss office and business tasks, and express physical sensations.",
        "vocabulary": [
            {"character": "腿", "pinyin": "tuǐ", "meaning": "leg"},
            {"character": "疼", "pinyin": "téng", "meaning": "painful; sore; hurt"},
            {"character": "脚", "pinyin": "jiǎo", "meaning": "foot"},
            {"character": "树", "pinyin": "shù", "meaning": "tree"},
            {"character": "容易", "pinyin": "róngyì", "meaning": "easy; likely"},
            {"character": "难", "pinyin": "nán", "meaning": "difficult; hard"},
            {"character": "太太", "pinyin": "tàitai", "meaning": "Mrs.; wife"},
            {"character": "秘书", "pinyin": "mìshū", "meaning": "secretary"},
            {"character": "经理", "pinyin": "jīnglǐ", "meaning": "manager"},
            {"character": "办公室", "pinyin": "bàngōngshì", "meaning": "office"},
            {"character": "辆", "pinyin": "liàng", "meaning": "measure word for vehicles"},
            {"character": "楼", "pinyin": "lóu", "meaning": "building; floor"},
            {"character": "拿", "pinyin": "ná", "meaning": "to take; hold; bring"},
            {"character": "把", "pinyin": "bǎ", "meaning": "measure word for umbrellas/chairs"},
            {"character": "伞", "pinyin": "sǎn", "meaning": "umbrella"},
            {"character": "胖", "pinyin": "pàng", "meaning": "fat; plump"},
            {"character": "瘦", "pinyin": "shòu", "meaning": "thin; lean"}
        ],
        "grammar": [
            {
                "title": "Simple Directional Complements: 动词 + 来 / 去",
                "pattern": "动词 + 来 (toward speaker) / 去 (away from speaker)",
                "explanation": "'来' indicates motion toward the speaker's current location; '去' indicates motion away from the speaker.",
                "examples": [
                    {"chinese": "经理什么时候回来？他下午三点回来。", "pinyin": "Jīnglǐ shénme shíhou huílái? Tā xiàwǔ sān diǎn huílái.", "english": "When will the manager return here? He will return at 3 PM."},
                    {"chinese": "上山容易下山难，我们慢慢走下去吧。", "pinyin": "Shàng shān róngyì xià shān nán, wǒmen mànmàn zǒu xiàqu ba.", "english": "Climbing up is easy, going down is hard; let's walk down slowly."}
                ]
            },
            {
                "title": "Directional Movement with Location Noun",
                "pattern": "动词 + 处所词 + 来 / 去",
                "explanation": "When an action verb has a directional complement and a destination place noun, the place noun MUST be inserted before 来/去: 回家来, 进办公室去.",
                "examples": [
                    {"chinese": "请大家进办公室来开会。", "pinyin": "Qǐng dàjiā jìn bàngōngshì lái kāi huì.", "english": "Please everyone come into the office for the meeting."},
                    {"chinese": "外边下雨了，带把伞出去吧。", "pinyin": "Wàibian xià yǔ le, dài bǎ sǎn chūqu ba.", "english": "It's raining outside, take an umbrella out with you."}
                ]
            }
        ],
        "dialogue": [
            {"speaker": "职员", "avatar": "👨‍💼", "chinese": "请问，周经理在办公室吗？", "pinyin": "Qǐngwèn, Zhōu jīnglǐ zài bàngōngshì ma?", "english": "Excuse me, is Manager Zhou in the office?"},
            {"speaker": "秘书", "avatar": "👩‍💼", "chinese": "他出去了，不在办公室。", "pinyin": "Tā chūqu le, bú zài bàngōngshì.", "english": "He went out, not in the office."},
            {"speaker": "职员", "avatar": "👨‍💼", "chinese": "他去哪儿了？什么时候回来？", "pinyin": "Tā qù nǎr le? Shénme shíhou huílái?", "english": "Where did he go? When will he come back?"},
            {"speaker": "秘书", "avatar": "👩‍💼", "chinese": "他去总公司开会了，下午三点左右回来。", "pinyin": "Tā qù zǒnggōngsī kāi huì le, xiàwǔ sān diǎn zuǒyòu huílái.", "english": "He went to the head office for a meeting, will return around 3 PM."},
            {"speaker": "职员", "avatar": "👨‍💼", "chinese": "好的，等他回来了我再来找他。", "pinyin": "Hǎo de, děng tā huílái le wǒ zài lái zhǎo tā.", "english": "Okay, once he comes back I will come look for him again."}
        ],
        "culture": "Office culture in China highly respects executive hierarchy. Senior managers and directors are addressed by surname plus title: 周经理 (Manager Zhou), 王总 (Director Wang).",
        "exercises": [
            {"question": "Where does the location noun go in '回家来'?", "options": ["Between the verb and 来/去", "At the very end", "Before the subject", "After 来/去"], "answer": 0, "explanation": "Place words must precede the directional particle: 回 (verb) + 家 (place) + 来."},
            {"question": "What is the measure word for an umbrella?", "options": ["把", "件", "个", "本"], "answer": 0, "explanation": "'把' (bǎ) is the measure word for objects with handles like umbrellas and chairs."}
        ]
    },
    {
        "id": "hsk3-l3", "level": 3, "lessonNumber": 3, "title": "桌子上放着很多饮料", "pinyin": "Zhuōzi shang fàng zhe hěn duō yǐnliào", "english": "There Are Plenty of Drinks on the Table",
        "summary": "Master existential sentences with 着, distinguish 或者 (statements) vs 还是 (questions), and describe beverages.",
        "vocabulary": [
            {"character": "饮料", "pinyin": "yǐnliào", "meaning": "beverage; drink"},
            {"character": "放", "pinyin": "fàng", "meaning": "to put; place"},
            {"character": "块", "pinyin": "kuài", "meaning": "piece; chunk; slice"},
            {"character": "甜", "pinyin": "tián", "meaning": "sweet"},
            {"character": "或者", "pinyin": "huòzhě", "meaning": "or (in statements)"},
            {"character": "舒服", "pinyin": "shūfu", "meaning": "comfortable; well"},
            {"character": "花", "pinyin": "huā", "meaning": "flower; to spend"},
            {"character": "绿", "pinyin": "lǜ", "meaning": "green"},
            {"character": "衬衫", "pinyin": "chènshān", "meaning": "shirt; blouse"},
            {"character": "元", "pinyin": "yuán", "meaning": "yuan (currency unit)"}
        ],
        "grammar": [
            {
                "title": "Existential Sentence: 处所 + 动词 + 着 + 数量词 + 名词",
                "pattern": "处所 + 放 / 挂 / 写 + 着 + 名词短语",
                "explanation": "Describes a static state existing at a specific location without indicating active movement.",
                "examples": [
                    {"chinese": "桌子上放着很多饮料和水果。", "pinyin": "Zhuōzi shang fàng zhe hěn duō yǐnliào hé shuǐguǒ.", "english": "Many drinks and fruits are placed on the table."},
                    {"chinese": "墙上挂着一张中国地图。", "pinyin": "Qiáng shang guà zhe yì zhāng zhōngguó dìtú.", "english": "A map of China hangs on the wall."}
                ]
            },
            {
                "title": "Conjunctions '或者' vs '还是' (Or)",
                "pattern": "或者 (Declarative sentences) / 还是 (Alternative questions)",
                "explanation": "Use '还是' when asking a question offering choices, and '或者' when stating alternatives in declarative statements.",
                "examples": [
                    {"chinese": "你想喝咖啡还是喝绿茶？", "pinyin": "Nǐ xiǎng hē kāfēi háishi hē lǜchá?", "english": "Do you want to drink coffee or green tea? (Question)"},
                    {"chinese": "明天吃米饭或者吃面条都可以。", "pinyin": "Míngtiān chī mǐfàn huòzhě chī miàntiáo dōu kěyǐ.", "english": "Eating rice or eating noodles tomorrow are both fine. (Statement)"}
                ]
            }
        ],
        "dialogue": [
            {"speaker": "小丽", "avatar": "👩‍🎓", "chinese": "桌子上放着这么多好喝的饮料，你想喝哪种？", "pinyin": "Zhuōzi shang fàng zhe zhème duō hǎohē de yǐnliào, nǐ xiǎng hē nǎ zhǒng?", "english": "So many tasty drinks are sitting on the table, which kind would you like?"},
            {"speaker": "小刚", "avatar": "👨‍🎓", "chinese": "绿茶或者新鲜果汁都可以，我不挑剔。", "pinyin": "Lǜchá huòzhě xīnxiān guǒzhī dōu kěyǐ, wǒ bù tiāotì.", "english": "Green tea or fresh fruit juice are both good, I'm not picky."},
            {"speaker": "小丽", "avatar": "👩‍🎓", "chinese": "这家咖啡馆环境真舒服，桌上还放着一瓶鲜花呢。", "pinyin": "Zhè jiā kāfēiguǎn huánjìng zhēn shūfu, zhuō shang hái fàng zhe yì píng xiānhuā ne.", "english": "This cafe has such a comfortable atmosphere, there's even a vase of fresh flowers on the table."},
            {"speaker": "小刚", "avatar": "👨‍🎓", "chinese": "是啊，我们坐在这儿一边喝茶一边看书吧。", "pinyin": "Shì a, wǒmen zuò zài zhèr yìbiān hē chá yìbiān kàn shū ba.", "english": "Yeah, let's sit here drinking tea while reading."}
        ],
        "culture": "Green tea (绿茶) such as Longjing and Biluochun is traditionally prepared with 80°C hot water in glass tumblers to allow drinkers to admire the floating tea leaves.",
        "exercises": [
            {"question": "Which word for 'or' is used in a statement?", "options": ["或者", "还是", "因为", "所以"], "answer": 0, "explanation": "'或者' is used in declarative statements, while '还是' is used in questions."},
            {"question": "Translate: 'A map is hanging on the wall.'", "options": ["墙上挂着一张地图。", "桌子上放着地图。", "他拿着地图。", "地图在书包里。"], "answer": 0, "explanation": "'挂着' expresses the persistent hanging state."}
        ]
    },
    {
        "id": "hsk3-l4", "level": 3, "lessonNumber": 4, "title": "她总是笑着跟客人说话", "pinyin": "Tā zǒngshì xiào zhe gēn kèrén shuōhuà", "english": "She Always Smiles When Talking to Customers",
        "summary": "Express concomitant actions with V1 + 着 + V2, use frequency adverb 总是, and describe personal traits.",
        "vocabulary": [
            {"character": "比赛", "pinyin": "bǐsài", "meaning": "match; competition"},
            {"character": "照片", "pinyin": "zhàopiàn", "meaning": "photograph; photo"},
            {"character": "年级", "pinyin": "niánjí", "meaning": "grade; school year"},
            {"character": "又", "pinyin": "yòu", "meaning": "again; also"},
            {"character": "聪明", "pinyin": "cōngming", "meaning": "smart; intelligent"},
            {"character": "热情", "pinyin": "rèqíng", "meaning": "enthusiastic; warm-hearted"},
            {"character": "努力", "pinyin": "nǔlì", "meaning": "hardworking; diligent"},
            {"character": "总是", "pinyin": "zǒngshì", "meaning": "always"},
            {"character": "回答", "pinyin": "huídá", "meaning": "to answer; reply"},
            {"character": "站", "pinyin": "zhàn", "meaning": "to stand; station"},
            {"character": "超市", "pinyin": "chāoshì", "meaning": "supermarket"},
            {"character": "蛋糕", "pinyin": "dàngāo", "meaning": "cake"}
        ],
        "grammar": [
            {
                "title": "Concomitant Manner: 动词 1 + 着 + (宾语) + 动词 2",
                "pattern": "V1 + 着 + V2",
                "explanation": "Indicates that Verb 1 describes the ongoing manner or posture in which Verb 2 is performed.",
                "examples": [
                    {"chinese": "她总是笑着跟客人说话。", "pinyin": "Tā zǒngshì xiào zhe gēn kèrén shuōhuà.", "english": "She always smiles while speaking to customers."},
                    {"chinese": "老师站着讲课，学生坐着听课。", "pinyin": "Lǎoshī zhàn zhe jiǎngkè, xuésheng zuò zhe tīngkè.", "english": "The teacher lectures standing, and students listen sitting."}
                ]
            },
            {
                "title": "Correlative Adjective Structure: 又...又...",
                "pattern": "又 + 形容词 1 + 又 + 形容词 2",
                "explanation": "Describes that a person or entity simultaneously possesses two positive or two negative qualities.",
                "examples": [
                    {"chinese": "那个服务员又聪明又热情。", "pinyin": "Nà ge fúwùyuán yòu cōngming yòu rèqíng.", "english": "That attendant is both intelligent and warm-hearted."},
                    {"chinese": "这个西瓜又大又甜。", "pinyin": "Zhè ge xīguā yòu dà yòu tián.", "english": "This watermelon is both big and sweet."}
                ]
            }
        ],
        "dialogue": [
            {"speaker": "李朋", "avatar": "👨‍💼", "chinese": "你觉得新来的前台服务员工作得怎么样？", "pinyin": "Nǐ juéde xīn lái de qiántái fúwùyuán gōngzuò de zěnmeyàng?", "english": "How do you think the new front desk receptionist is doing?"},
            {"speaker": "王经理", "avatar": "👩‍💼", "chinese": "她非常优秀，总是笑着跟客人说话，服务很热情。", "pinyin": "Tā fēicháng yōuxiù, zǒngshì xiào zhe gēn kèrén shuōhuà, fúwù hěn rèqíng.", "english": "She's very excellent, always smiles when talking to guests, and is very hospitable."},
            {"speaker": "李朋", "avatar": "👨‍💼", "chinese": "而且她又聪明又努力，很多客人都表扬她呢。", "pinyin": "Érqiě tā yòu cōngming yòu nǔlì, hěn duō kèrén dōu biǎoyáng tā ne.", "english": "Furthermore she is both smart and hardworking, many guests praise her."},
            {"speaker": "王经理", "avatar": "👩‍💼", "chinese": "对，这样的员工我们一定要好好奖励！", "pinyin": "Duì, zhèyàng de yuángōng wǒmen yídìng yào hǎohǎo jiǎnglì!", "english": "Yes, we must definitely reward employees like this well!"}
        ],
        "culture": "In Chinese business and service culture, hospitality (热情好客) and treating guests with respect (礼貌待客) are cardinal benchmarks of service excellence.",
        "exercises": [
            {"question": "Translate: 'He speaks with a smile.'", "options": ["他笑着说话。", "他笑也说。", "他说话笑。", "他不笑了。"], "answer": 0, "explanation": "'V1 + 着 + V2' describes the manner of action: 笑着说话."},
            {"question": "How do you say 'both smart and hardworking'?", "options": ["又聪明又努力", "也聪明也努力", "聪明和努力", "因为聪明所以努力"], "answer": 0, "explanation": "'又...又...' expresses simultaneous attributes."}
        ]
    },
    {
        "id": "hsk3-l5", "level": 3, "lessonNumber": 5, "title": "我最近越来越胖了", "pinyin": "Wǒ zuìjìn yuè lái yuè pàng le", "english": "I've Been Getting Fatter and Fatter Lately",
        "summary": "Master progressive degree marker 越来越, express extreme degree with 极了, and discuss seasons and physical fitness.",
        "vocabulary": [
            {"character": "发烧", "pinyin": "fāshāo", "meaning": "to have a fever"},
            {"character": "裙子", "pinyin": "qúnzi", "meaning": "skirt; dress"},
            {"character": "草", "pinyin": "cǎo", "meaning": "grass; lawn"},
            {"character": "最近", "pinyin": "zuìjìn", "meaning": "lately; recently"},
            {"character": "越", "pinyin": "yuè", "meaning": "more; increasingly"},
            {"character": "越来越", "pinyin": "yuè lái yuè", "meaning": "more and more; increasingly"},
            {"character": "照顾", "pinyin": "zhàogu", "meaning": "to look after; care for"},
            {"character": "用", "pinyin": "yòng", "meaning": "to use"},
            {"character": "极了", "pinyin": "jí le", "meaning": "extremely; exceedingly"},
            {"character": "季节", "pinyin": "jìjié", "meaning": "season"},
            {"character": "春", "pinyin": "chūn", "meaning": "spring"},
            {"character": "夏", "pinyin": "xià", "meaning": "summer"},
            {"character": "秋", "pinyin": "qiū", "meaning": "autumn; fall"},
            {"character": "冬", "pinyin": "dōng", "meaning": "winter"}
        ],
        "grammar": [
            {
                "title": "Progressive Degree: 越来越 + 形容词 / 心理动词",
                "pattern": "主语 + 越来越 + 形容词 / 动词 + 了",
                "explanation": "Signifies that a degree intensifies progressively with the passage of time.",
                "examples": [
                    {"chinese": "我最近运动少，越来越胖了。", "pinyin": "Wǒ zuìjìn yùndòng shǎo, yuè lái yuè pàng le.", "english": "I've exercised little lately, getting fatter and fatter."},
                    {"chinese": "他的汉语说得越来越流利了。", "pinyin": "Tā de hànyǔ shuō de yuè lái yuè liúlì le.", "english": "He speaks Chinese more and more fluently."}
                ]
            },
            {
                "title": "Extreme Exclamation: 形容词 + 极了",
                "pattern": "形容词 + 极了",
                "explanation": "Follows an adjective as an exclamation of extreme degree, equivalent to '极其' or '非常'.",
                "examples": [
                    {"chinese": "今天天气舒服极了！", "pinyin": "Jīntiān tiānqì shūfu jí le!", "english": "Today's weather is comfortable to the extreme!"},
                    {"chinese": "这件新裙子漂亮极了。", "pinyin": "Zhè jiàn xīn qúnzi piàoliang jí le.", "english": "This new skirt is gorgeous!"}
                ]
            }
        ],
        "dialogue": [
            {"speaker": "小丽", "avatar": "👩‍🎓", "chinese": "我最近胃口太好，越来越胖了，去年买的裙子都穿不下了！", "pinyin": "Wǒ zuìjìn wèikǒu tài hǎo, yuè lái yuè pàng le, qùnián mǎi de qúnzi dōu chuān bu xià le!", "english": "My appetite has been too good lately, I'm getting fatter and fatter, can't fit into the skirts bought last year!"},
            {"speaker": "小刚", "avatar": "👨‍🎓", "chinese": "谁让你总是吃甜食又不爱运动呢？", "pinyin": "Shéi ràng nǐ zǒngshì chī tiánshí yòu bú ài yùndòng ne?", "english": "Who told you to always eat sweets and not like exercising?"},
            {"speaker": "小丽", "avatar": "👩‍🎓", "chinese": "从明天开始，我每天早上都去公园跑步。", "pinyin": "Cóng míngtiān kāishǐ, wǒ měitiān zǎoshang dōu qù gōngyuán pǎobù.", "english": "Starting tomorrow, I'll go jogging in the park every morning."},
            {"speaker": "小刚", "avatar": "👨‍🎓", "chinese": "现在春天到了，公园里的草绿了，花开了，风景漂亮极了，正适合锻炼！", "pinyin": "Xiànzài chūntiān dào le, gōngyuán lǐ de cǎo lǜ le, huā kāi le, fēngjǐng piàoliang jí le, zhèng shìhé duànliàn!", "english": "Now spring is here, grass is green, flowers blooming, scenery gorgeous, perfect for workouts!"}
        ],
        "culture": "The Chinese calendar observes the traditional 24 Solar Terms (二十四节气), which divide spring, summer, autumn, and winter into precise fortnightly seasonal changes guiding agriculture and wellness.",
        "exercises": [
            {"question": "How do you say 'more and more fluent'?", "options": ["越来越流利", "很流利", "比较流利", "更流利"], "answer": 0, "explanation": "'越来越 + 形容词' expresses progressive degree over time."},
            {"question": "What does '极了' mean after an adjective?", "options": ["Extremely", "A little bit", "Not at all", "Hardly"], "answer": 0, "explanation": "'形容词 + 极了' means 'extremely / in the highest degree'."}
        ]
    }
]

print(f"Loaded {len(hsk3_lessons)} HSK 3 sample lessons.")
