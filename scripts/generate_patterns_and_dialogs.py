import json

# Sentence patterns
patterns_hsk1 = [
    {
        "id": "hsk1-p1", "level": 1, "patternNumber": 1,
        "title": "“是”字句 (The 是 Sentence)",
        "formula": "Subject + 是 + Noun/Noun Phrase",
        "explanation": "Used to express identity, equivalence, or category membership, equivalent to English am/is/are.",
        "examples": [
            {"chinese": "我是学生。", "pinyin": "Wǒ shì xuésheng.", "english": "I am a student."},
            {"chinese": "他是我的汉语老师。", "pinyin": "Tā shì wǒ de hànyǔ lǎoshī.", "english": "He is my Chinese teacher."},
            {"chinese": "今天不是星期天。", "pinyin": "Jīntiān bú shì xīngqītiān.", "english": "Today is not Sunday."}
        ]
    },
    {
        "id": "hsk1-p2", "level": 1, "patternNumber": 2,
        "title": "“有”字句 (Possession & Existence)",
        "formula": "Subject / Location + 有 + Object",
        "explanation": "Expresses possession ('to have') or physical presence/existence ('there is/are'). Negation always uses '没有', never '不有'.",
        "examples": [
            {"chinese": "我有一只可爱的猫。", "pinyin": "Wǒ yǒu yì zhī kě'ài de māo.", "english": "I have a cute cat."},
            {"chinese": "桌子上有一本书。", "pinyin": "Zhuōzi shang yǒu yì běn shū.", "english": "There is a book on the table."},
            {"chinese": "我没有中国朋友。", "pinyin": "Wǒ méiyǒu zhōngguó péngyou.", "english": "I don't have Chinese friends."}
        ]
    },
    {
        "id": "hsk1-p3", "level": 1, "patternNumber": 3,
        "title": "“吗” 疑问句 (Yes/No Question with 吗)",
        "formula": "Declarative Sentence + 吗？",
        "explanation": "Turns any affirmative statement into a yes-or-no question without changing the word order.",
        "examples": [
            {"chinese": "你是中国人吗？", "pinyin": "Nǐ shì zhōngguó rén ma?", "english": "Are you Chinese?"},
            {"chinese": "你想喝茶吗？", "pinyin": "Nǐ xiǎng hē chá ma?", "english": "Would you like to drink tea?"},
            {"chinese": "你高兴吗？", "pinyin": "Nǐ gāoxìng ma?", "english": "Are you happy?"}
        ]
    },
    {
        "id": "hsk1-p4", "level": 1, "patternNumber": 4,
        "title": "“呢” 疑问句 (Bounce-back & Elliptical Questions)",
        "formula": "Noun / Pronoun + 呢？",
        "explanation": "Used for 'How about...?' or 'What about...?' to reflect a question back, or to ask where someone/something is.",
        "examples": [
            {"chinese": "我是老师，你呢？", "pinyin": "Wǒ shì lǎoshī, nǐ ne?", "english": "I am a teacher, what about you?"},
            {"chinese": "我的书呢？", "pinyin": "Wǒ de shū ne?", "english": "Where is my book?"},
            {"chinese": "他在看书呢。", "pinyin": "Tā zài kàn shū ne.", "english": "He is currently reading a book."}
        ]
    },
    {
        "id": "hsk1-p5", "level": 1, "patternNumber": 5,
        "title": "“什么” 疑问句 (Asking 'What')",
        "formula": "Subject + Verb + 什么 (+ Noun)？",
        "explanation": "In Chinese, the question word '什么' stays in place of the object, without fronting.",
        "examples": [
            {"chinese": "你在吃什么？", "pinyin": "Nǐ zài chī shénme?", "english": "What are you eating?"},
            {"chinese": "这是什么东西？", "pinyin": "Zhè shì shénme dōngxi?", "english": "What is this thing?"},
            {"chinese": "你想买什么水果？", "pinyin": "Nǐ xiǎng mǎi shénme shuǐguǒ?", "english": "What fruit do you want to buy?"}
        ]
    },
    {
        "id": "hsk1-p6", "level": 1, "patternNumber": 6,
        "title": "“谁” 疑问句 (Asking 'Who')",
        "formula": "谁 + Verb / Subject + 是 + 谁？",
        "explanation": "'谁' (shéi) asks about the person or identity.",
        "examples": [
            {"chinese": "他是谁？", "pinyin": "Tā shì shéi?", "english": "Who is he?"},
            {"chinese": "谁想去北京？", "pinyin": "Shéi xiǎng qù běijīng?", "english": "Who wants to go to Beijing?"},
            {"chinese": "谁是你的汉语老师？", "pinyin": "Shéi shì nǐ de hànyǔ lǎoshī?", "english": "Who is your Chinese teacher?"}
        ]
    },
    {
        "id": "hsk1-p7", "level": 1, "patternNumber": 7,
        "title": "“哪儿” 疑问句 (Asking 'Where')",
        "formula": "Subject + 在 + 哪儿？ / Subject + 去 + 哪儿？",
        "explanation": "'哪儿' (nǎr) asks for location or destination.",
        "examples": [
            {"chinese": "你在哪儿工作？", "pinyin": "Nǐ zài nǎr gōngzuò?", "english": "Where do you work?"},
            {"chinese": "洗手间在哪儿？", "pinyin": "Xǐshǒujiān zài nǎr?", "english": "Where is the restroom?"},
            {"chinese": "你明天去哪儿？", "pinyin": "Nǐ míngtiān qù nǎr?", "english": "Where are you going tomorrow?"}
        ]
    },
    {
        "id": "hsk1-p8", "level": 1, "patternNumber": 8,
        "title": "“几” 与 “多少” (Asking Quantity)",
        "formula": "几 + Measure Word (usually < 10) | 多少 + Noun (> 10 or price)",
        "explanation": "Use '几' when expecting a small number under 10; use '多少' for larger numbers or money.",
        "examples": [
            {"chinese": "现在几点了？", "pinyin": "Xiànzài jǐ diǎn le?", "english": "What time is it now?"},
            {"chinese": "这个杯子多少钱？", "pinyin": "Zhège bēizi duōshao qián?", "english": "How much is this cup?"},
            {"chinese": "你们学校有多少学生？", "pinyin": "Nǐmen xuéxiào yǒu duōshao xuésheng?", "english": "How many students are in your school?"}
        ]
    },
    {
        "id": "hsk1-p9", "level": 1, "patternNumber": 9,
        "title": "“怎么” 与 “怎么样” (How & How about)",
        "formula": "怎么 + Verb？ / Subject + 怎么样？",
        "explanation": "'怎么' asks about method or manner ('how to do'); '怎么样' asks about opinion, condition, or state ('how is it').",
        "examples": [
            {"chinese": "这个汉字怎么读？", "pinyin": "Zhège hànzì zěnme dú?", "english": "How do you pronounce this character?"},
            {"chinese": "今天天气怎么样？", "pinyin": "Jīntiān tiānqì zěnmeyàng?", "english": "How is the weather today?"},
            {"chinese": "你觉得这家饭馆怎么样？", "pinyin": "Nǐ juéde zhè jiā fànguǎn zěnmeyàng?", "english": "How do you find this restaurant?"}
        ]
    },
    {
        "id": "hsk1-p10", "level": 1, "patternNumber": 10,
        "title": "介词 “在” 结构 (Location with 在)",
        "formula": "Subject + 在 + Location + Verb",
        "explanation": "In Chinese, the location precedes the verb action: you establish the place before doing the deed.",
        "examples": [
            {"chinese": "我在学校学习汉语。", "pinyin": "Wǒ zài xuéxiào xuéxí hànyǔ.", "english": "I study Chinese at school."},
            {"chinese": "他在医院工作。", "pinyin": "Tā zài yīyuàn gōngzuò.", "english": "He works in the hospital."},
            {"chinese": "我们在中国认识的。", "pinyin": "Wǒmen zài zhōngguó rènshi de.", "english": "We met in China."}
        ]
    },
    {
        "id": "hsk1-p11", "level": 1, "patternNumber": 11,
        "title": "能愿动词 “想” (Desire to do)",
        "formula": "Subject + 想 + Verb",
        "explanation": "Expresses an intention, desire, or subjective wish to perform an action.",
        "examples": [
            {"chinese": "我想喝一杯热茶。", "pinyin": "Wǒ xiǎng hē yì bēi rè chá.", "english": "I would like to drink a cup of hot tea."},
            {"chinese": "我想去北京旅游。", "pinyin": "Wǒ xiǎng qù běijīng lǚyóu.", "english": "I want to travel to Beijing."},
            {"chinese": "我不想去商店。", "pinyin": "Wǒ bù xiǎng qù shāngdiàn.", "english": "I don't want to go to the shop."}
        ]
    },
    {
        "id": "hsk1-p12", "level": 1, "patternNumber": 12,
        "title": "能愿动词 “会” (Learned Ability)",
        "formula": "Subject + 会 + Verb",
        "explanation": "Indicates an acquired ability learned through practice or study (e.g. speaking a language, driving, cooking).",
        "examples": [
            {"chinese": "我会说汉语。", "pinyin": "Wǒ huì shuō hànyǔ.", "english": "I can speak Chinese."},
            {"chinese": "他会开车。", "pinyin": "Tā huì kāi chē.", "english": "He can drive a car."},
            {"chinese": "你会做中国菜吗？", "pinyin": "Nǐ huì zuò zhōngguó cài ma?", "english": "Can you cook Chinese food?"}
        ]
    },
    {
        "id": "hsk1-p13", "level": 1, "patternNumber": 13,
        "title": "能愿动词 “能” (Possibility & Permission)",
        "formula": "Subject + 能 + Verb",
        "explanation": "Expresses objective possibility, physical capability, or requesting permission.",
        "examples": [
            {"chinese": "我能坐在这儿吗？", "pinyin": "Wǒ néng zuò zài zhèr ma?", "english": "Can I sit here?"},
            {"chinese": "明天你能来我家吗？", "pinyin": "Míngtiān nǐ néng lái wǒ jiā ma?", "english": "Can you come to my home tomorrow?"},
            {"chinese": "医生说他能出院了。", "pinyin": "Yīshēng shuō tā néng chūyuàn le.", "english": "The doctor said he can be discharged."}
        ]
    },
    {
        "id": "hsk1-p14", "level": 1, "patternNumber": 14,
        "title": "动态助词 “了” (Completed Action)",
        "formula": "Subject + Verb + 了 + (Object)",
        "explanation": "Placed immediately after a verb to signify that an action has been realized or completed.",
        "examples": [
            {"chinese": "我买了一本新书。", "pinyin": "Wǒ mǎi le yì běn xīn shū.", "english": "I bought a new book."},
            {"chinese": "他吃了三个苹果。", "pinyin": "Tā chī le sān ge píngguǒ.", "english": "He ate three apples."},
            {"chinese": "下雨了，快回家吧。", "pinyin": "Xiàyǔ le, kuài huí jiā ba.", "english": "It started raining, let's hurry home."}
        ]
    },
    {
        "id": "hsk1-p15", "level": 1, "patternNumber": 15,
        "title": "“是……的” 结构 (The Emphatic Cleft)",
        "formula": "Subject + 是 + [Time/Location/Manner] + Verb + 的",
        "explanation": "Employs 是 and 的 to emphasize the specific circumstance of an event that has already occurred.",
        "examples": [
            {"chinese": "我是坐飞机来的。", "pinyin": "Wǒ shì zuò fēijī lái de.", "english": "I came by plane (manner emphasized)."},
            {"chinese": "他是昨天回来的。", "pinyin": "Tā shì zuótiān huílái de.", "english": "He returned yesterday (time emphasized)."},
            {"chinese": "这本书是在北京买的。", "pinyin": "Zhè běn shū shì zài běijīng mǎi de.", "english": "This book was bought in Beijing (place emphasized)."}
        ]
    }
]

patterns_hsk2 = [
    {
        "id": "hsk2-p1", "level": 2, "patternNumber": 1,
        "title": "“比” 字句 (Comparative Sentence)",
        "formula": "A + 比 + B + Adjective",
        "explanation": "Compares two entities where A has more of the specified attribute than B.",
        "examples": [
            {"chinese": "今天比昨天冷。", "pinyin": "Jīntiān bǐ zuótiān lěng.", "english": "Today is colder than yesterday."},
            {"chinese": "哥哥比我高五厘米。", "pinyin": "Gēge bǐ wǒ gāo wǔ límǐ.", "english": "My older brother is 5 cm taller than me."},
            {"chinese": "西瓜比苹果贵一点儿。", "pinyin": "Xīguā bǐ píngguǒ guì yìdiǎnr.", "english": "Watermelon is a little more expensive than apples."}
        ]
    },
    {
        "id": "hsk2-p2", "level": 2, "patternNumber": 2,
        "title": "状态补语 “得” (Degree Complement)",
        "formula": "Verb + 得 + Adjective / Complement Phrase",
        "explanation": "Follows a verb to assess, describe, or evaluate the manner, outcome, or degree of the action.",
        "examples": [
            {"chinese": "他跑得很快。", "pinyin": "Tā pǎo de hěn kuài.", "english": "He runs very fast."},
            {"chinese": "她说汉语说得真流利。", "pinyin": "Tā shuō hànyǔ shuō de zhēn liúlì.", "english": "She speaks Chinese really fluently."},
            {"chinese": "你起得很早啊！", "pinyin": "Nǐ qǐ de hěn zǎo a!", "english": "You got up really early!"}
        ]
    },
    {
        "id": "hsk2-p3", "level": 2, "patternNumber": 3,
        "title": "“正在……呢” (Continuous Aspect)",
        "formula": "Subject + 正在 / 在 + Verb + (呢)",
        "explanation": "Denotes an action actively in progress at the moment of speaking.",
        "examples": [
            {"chinese": "我正在听音乐呢。", "pinyin": "Wǒ zhèngzài tīng yīnyuè ne.", "english": "I am currently listening to music."},
            {"chinese": "爸爸正在看报纸。", "pinyin": "Bàba zhèngzài kàn bàozhǐ.", "english": "Father is reading the newspaper right now."},
            {"chinese": "外面正在下大雪呢。", "pinyin": "Wàimiàn zhèngzài xià dà xuě ne.", "english": "It is snowing heavily outside right now."}
        ]
    },
    {
        "id": "hsk2-p4", "level": 2, "patternNumber": 4,
        "title": "“已经……了” (Already Completed)",
        "formula": "Subject + 已经 + Verb / Adjective + 了",
        "explanation": "Indicates that an action or milestone has already taken place prior to now.",
        "examples": [
            {"chinese": "他已经到机场了。", "pinyin": "Tā yǐjīng dào jīchǎng le.", "english": "He has already arrived at the airport."},
            {"chinese": "我已经吃过早饭了。", "pinyin": "Wǒ yǐjīng chī guo zǎofàn le.", "english": "I have already eaten breakfast."},
            {"chinese": "时间已经不早了。", "pinyin": "Shíjiān yǐjīng bù zǎo le.", "english": "It is already getting late."}
        ]
    },
    {
        "id": "hsk2-p5", "level": 2, "patternNumber": 5,
        "title": "“因为……所以……” (Cause & Effect)",
        "formula": "因为 + Reason, 所以 + Result",
        "explanation": "Standard causal connection in Chinese: because reason, therefore result.",
        "examples": [
            {"chinese": "因为下雨了，所以我们没去踢足球。", "pinyin": "Yīnwèi xiàyǔ le, suǒyǐ wǒmen méi qù tī zúqiú.", "english": "Because it rained, we didn't go play soccer."},
            {"chinese": "因为他很努力，所以考试考得很好。", "pinyin": "Yīnwèi tā hěn nǔlì, suǒyǐ kǎoshì kǎo de hěn hǎo.", "english": "Because he is diligent, he scored well on the exam."},
            {"chinese": "因为身体不舒服，所以我请假了。", "pinyin": "Yīnwèi shēntǐ bù shūfu, suǒyǐ wǒ qǐngjià le.", "english": "Because I felt unwell, I took leave."}
        ]
    },
    {
        "id": "hsk2-p6", "level": 2, "patternNumber": 6,
        "title": "“虽然……但是……” (Concessive Relation)",
        "formula": "虽然 + Clause 1, 但是 + Clause 2",
        "explanation": "Correlative conjunctions meaning 'although... but...'.",
        "examples": [
            {"chinese": "虽然汉语很难，但是很有趣。", "pinyin": "Suīrán hànyǔ hěn nán, dànshì hěn yǒuqù.", "english": "Although Chinese is difficult, it is very interesting."},
            {"chinese": "虽然今天很冷，但是阳光明媚。", "pinyin": "Suīrán jīntiān hěn lěng, dànshì yángguāng míngmèi.", "english": "Although cold today, the sunshine is bright."},
            {"chinese": "虽然他生病了，但是还坚持上班。", "pinyin": "Suīrán tā shēngbìng le, dànshì hái jiānchí shàngbān.", "english": "Although he was sick, he still insisted on working."}
        ]
    },
    {
        "id": "hsk2-p7", "level": 2, "patternNumber": 7,
        "title": "“快要……了” (Imminent Future Action)",
        "formula": "Subject + 快要 / 就要 / 要 + Verb + 了",
        "explanation": "Expresses that an event will happen in the immediate future ('about to / on the verge of').",
        "examples": [
            {"chinese": "火车快要开了，大家快上车。", "pinyin": "Huǒchē kuàiyào kāi le, dàjiā kuài shàng chē.", "english": "The train is about to depart, everyone board quickly."},
            {"chinese": "新年就要到了！", "pinyin": "Xīnnián jiù yào dào le!", "english": "New Year is about to arrive!"},
            {"chinese": "天要黑了，我们回家吧。", "pinyin": "Tiān yào hēi le, wǒmen huí jiā ba.", "english": "It is getting dark, let's go home."}
        ]
    },
    {
        "id": "hsk2-p8", "level": 2, "patternNumber": 8,
        "title": "动态助词 “过” (Experiential Aspect)",
        "formula": "Subject + Verb + 过 + Object",
        "explanation": "Indicates that the subject has had the prior experience of performing this action at least once in the past.",
        "examples": [
            {"chinese": "我去过一次北京。", "pinyin": "Wǒ qù guo yí cì běijīng.", "english": "I have been to Beijing once."},
            {"chinese": "你看过这个电影吗？", "pinyin": "Nǐ kàn guo zhège diànyǐng ma?", "english": "Have you seen this movie before?"},
            {"chinese": "我没吃过羊肉。", "pinyin": "Wǒ méi chī guo yángròu.", "english": "I have never eaten mutton."}
        ]
    },
    {
        "id": "hsk2-p9", "level": 2, "patternNumber": 9,
        "title": "否定祈使句 “别……” (Don't / Prohibition)",
        "formula": "别 + Verb (+ 了)",
        "explanation": "Direct and polite prohibitive imperative meaning 'do not' or 'stop doing'.",
        "examples": [
            {"chinese": "别说话，请听老师讲课。", "pinyin": "Bié shuōhuà, qǐng tīng lǎoshī jiǎngkè.", "english": "Don't speak, please listen to the teacher."},
            {"chinese": "别看手机了，快睡觉吧。", "pinyin": "Bié kàn shǒujī le, kuài shuìjiào ba.", "english": "Stop looking at your phone, go to sleep."},
            {"chinese": "别着急，我们还有时间。", "pinyin": "Bié zháojí, wǒmen hái yǒu shíjiān.", "english": "Don't worry, we still have time."}
        ]
    },
    {
        "id": "hsk2-p10", "level": 2, "patternNumber": 10,
        "title": "持续态助词 “着” (Continuous State)",
        "formula": "Subject + Verb + 着 + (Object)",
        "explanation": "Signifies that a physical state resulting from an action continues persistently (e.g. wearing, holding, open).",
        "examples": [
            {"chinese": "门开着呢，请进。", "pinyin": "Mén kāi zhe ne, qǐng jìn.", "english": "The door is open, please enter."},
            {"chinese": "她穿着一件漂亮的红衣服。", "pinyin": "Tā chuān zhe yí jiàn piàoliang de hóng yīfu.", "english": "She is wearing a beautiful red dress."},
            {"chinese": "老师笑着对我们说话。", "pinyin": "Lǎoshī xiào zhe duì wǒmen shuōhuà.", "english": "The teacher spoke to us with a smile."}
        ]
    },
    {
        "id": "hsk2-p11", "level": 2, "patternNumber": 11,
        "title": "介词 “离” 句式 (Spatial Distance)",
        "formula": "Place A + 离 + Place B + 很近 / 很远 / (Number) 米",
        "explanation": "Measures physical or temporal distance from one reference point to another.",
        "examples": [
            {"chinese": "我家离学校很近。", "pinyin": "Wǒ jiā lí xuéxiào hěn jìn.", "english": "My home is very close to school."},
            {"chinese": "机场离市中心有点儿远。", "pinyin": "Jīchǎng lí shì zhōngxīn yǒudiǎnr yuǎn.", "english": "The airport is somewhat far from downtown."},
            {"chinese": "这里离地铁站只有两百米。", "pinyin": "Zhèlǐ lí dìtiězhàn zhǐ yǒu liǎng bǎi mǐ.", "english": "It is only 200 meters from here to the subway."}
        ]
    },
    {
        "id": "hsk2-p12", "level": 2, "patternNumber": 12,
        "title": "介词 “往” 句式 (Directional Movement)",
        "formula": "往 + Direction / Target + 走 / 拐",
        "explanation": "Points toward a specific spatial orientation or direction.",
        "examples": [
            {"chinese": "往前走一百米就是火车站。", "pinyin": "Wǎng qián zǒu yìbǎi mǐ jiù shì huǒchēzhàn.", "english": "Walk forward 100 meters to reach the train station."},
            {"chinese": "到路口往右拐。", "pinyin": "Dào lùkǒu wǎng yòu guǎi.", "english": "Turn right at the intersection."},
            {"chinese": "请往里面坐。", "pinyin": "Qǐng wǎng lǐmiàn zuò.", "english": "Please sit further inside."}
        ]
    },
    {
        "id": "hsk2-p13", "level": 2, "patternNumber": 13,
        "title": "使动句 “让” (Causative Structure)",
        "formula": "A + 让 + B + Verb / Adjective",
        "explanation": "Expresses allowing, letting, or causing someone to do something.",
        "examples": [
            {"chinese": "老师让我回答这个问题。", "pinyin": "Lǎoshī ràng wǒ huídá zhège wèntí.", "english": "The teacher had me answer this question."},
            {"chinese": "这部电影让人非常感动。", "pinyin": "Zhè bù diànyǐng ràng rén fēicháng gǎndòng.", "english": "This movie made people deeply touched."},
            {"chinese": "让我再想一想。", "pinyin": "Ràng wǒ zài xiǎng yì xiǎng.", "english": "Let me think about it once more."}
        ]
    },
    {
        "id": "hsk2-p14", "level": 2, "patternNumber": 14,
        "title": "“从……到……” (From... To...)",
        "formula": "从 + Point A + 到 + Point B",
        "explanation": "Connects boundaries of space or spans of time.",
        "examples": [
            {"chinese": "从北京到上海坐高铁只要四个半小时。", "pinyin": "Cóng běijīng dào shànghǎi zuò gāotiě zhǐ yào sì ge bàn xiǎoshí.", "english": "From Beijing to Shanghai by high-speed rail takes only 4.5 hours."},
            {"chinese": "我们从早上八点学习到下午五点。", "pinyin": "Wǒmen cóng zǎoshang bā diǎn xuéxí dào xiàwǔ wǔ diǎn.", "english": "We study from 8 AM to 5 PM."},
            {"chinese": "从一数到十。", "pinyin": "Cóng yī shǔ dào shí.", "english": "Count from one to ten."}
        ]
    },
    {
        "id": "hsk2-p15", "level": 2, "patternNumber": 15,
        "title": "动词重叠与 “一下” (Softening Actions)",
        "formula": "Verb + 一下 / Verb + Verb",
        "explanation": "Reduplication or appending '一下' softens tone, meaning 'do a brief action' or 'give it a try'.",
        "examples": [
            {"chinese": "请你帮我看一下这个句子。", "pinyin": "Qǐng nǐ bāng wǒ kàn yíxià zhège jùzi.", "english": "Please take a look at this sentence for me."},
            {"chinese": "我想试一下这件新衣服。", "pinyin": "Wǒ xiǎng shì yíxià zhè jiàn xīn yīfu.", "english": "I want to try on these new clothes."},
            {"chinese": "大家休息一下吧。", "pinyin": "Dàjiā xiūxi yíxià ba.", "english": "Let's all take a brief rest."}
        ]
    }
]

all_patterns = patterns_hsk1 + patterns_hsk2

ts_patterns = '''// HSK Plus Sentence Patterns Database
// 15 Comprehensive Patterns for HSK 1 and 15 Patterns for HSK 2

export interface PatternExample {
  chinese: string
  pinyin: string
  english: string
}

export interface SentencePatternEntry {
  id: string
  level: 1 | 2
  patternNumber: number
  title: string
  formula: string
  explanation: string
  examples: PatternExample[]
}

export const SENTENCE_PATTERNS_DATA: SentencePatternEntry[] = ''' + json.dumps(all_patterns, ensure_ascii=False, indent=2) + ''';

export function getPatternsByLevel(level: 1 | 2): SentencePatternEntry[] {
  return SENTENCE_PATTERNS_DATA.filter(p => p.level === level)
}

export function getPatternById(id: string): SentencePatternEntry | undefined {
  return SENTENCE_PATTERNS_DATA.find(p => p.id === id)
}

export function getPatternByIndex(level: 1 | 2, index: number): SentencePatternEntry | undefined {
  return SENTENCE_PATTERNS_DATA.find(p => p.level === level && p.patternNumber === index)
}
'''

with open('src/Data/sentencePatternsData.ts', 'w', encoding='utf-8') as f:
    f.write(ts_patterns)

print('Generated src/Data/sentencePatternsData.ts!')

# Dialogues database (10 for HSK 1 + 10 for HSK 2)
dialogs = []

dialog_scenarios_hsk1 = [
    ("hsk1-d1", 1, 1, "初次见面 (Meeting for the First Time)", "Campus / Classroom",
     [
         {"speaker": "李明", "avatar": "👨‍🎓", "chinese": "你好！我叫李明。你叫什么名字？", "pinyin": "Nǐ hǎo! Wǒ jiào Lǐ Míng. Nǐ jiào shénme míngzi?", "english": "Hello! My name is Li Ming. What is your name?"},
         {"speaker": "大卫", "avatar": "👱", "chinese": "你好，李明！我叫大卫。很高兴认识你。", "pinyin": "Nǐ hǎo, Lǐ Míng! Wǒ jiào Dàwèi. Hěn gāoxìng rènshi nǐ.", "english": "Hello, Li Ming! My name is David. Very glad to meet you."},
         {"speaker": "李明", "avatar": "👨‍🎓", "chinese": "你是美国人吗？", "pinyin": "Nǐ shì měiguó rén ma?", "english": "Are you American?"},
         {"speaker": "大卫", "avatar": "👱", "chinese": "是的，我是美国人。我是这里的留学生。", "pinyin": "Shì de, wǒ shì měiguó rén. Wǒ shì zhèlǐ de liúxuéshēng.", "english": "Yes, I am American. I am an international student here."},
         {"speaker": "李明", "avatar": "👨‍🎓", "chinese": "欢迎来到中国！", "pinyin": "Huānyíng lái dào zhōngguó!", "english": "Welcome to China!"}
     ],
     "When introducing yourself, saying '很高兴认识你' (Very glad to meet you) sets a warm, polite rapport."),
    ("hsk1-d2", 1, 2, "在饭馆点菜 (Ordering in a Restaurant)", "Chinese Restaurant",
     [
         {"speaker": "服务员", "avatar": "👩‍🍳", "chinese": "您好！请坐，这是菜单。", "pinyin": "Nín hǎo! Qǐng zuò, zhè shì càidān.", "english": "Hello! Please sit, here is the menu."},
         {"speaker": "王芳", "avatar": "👩‍🎓", "chinese": "谢谢！请问有什么好吃的中国菜？", "pinyin": "Xièxie! Qǐngwèn yǒu shénme hǎochī de zhōngguó cài?", "english": "Thank you! May I ask what delicious Chinese food you have?"},
         {"speaker": "服务员", "avatar": "👩‍🍳", "chinese": "我们的宫保鸡丁很受欢迎，一点儿也不贵。", "pinyin": "Wǒmen de gōngbǎojīdīng hěn shòu huānyíng, yìdiǎnr yě bú guì.", "english": "Our Kung Pao Chicken is very popular, and not expensive at all."},
         {"speaker": "王芳", "avatar": "👩‍🎓", "chinese": "太好了！我要一份宫保鸡丁和一碗米饭。", "pinyin": "Tài hǎo le! Wǒ yào yí fèn gōngbǎojīdīng hé yì wǎn mǐfàn.", "english": "Great! I want one order of Kung Pao chicken and a bowl of rice."},
         {"speaker": "服务员", "avatar": "👩‍🍳", "chinese": "您想喝点儿什么？", "pinyin": "Nín xiǎng hē diǎnr shénme?", "english": "What would you like to drink?"},
         {"speaker": "王芳", "avatar": "👩‍🎓", "chinese": "请给我一杯热绿茶，谢谢！", "pinyin": "Qǐng gěi wǒ yì bēi rè lǜchá, xièxie!", "english": "Please give me a cup of hot green tea, thank you!"}
     ],
     "It is standard practice in Chinese restaurants to serve hot tea or hot water rather than iced water."),
    ("hsk1-d3", 1, 3, "在水果店买苹果 (Buying Apples at Market)", "Fruit Stall",
     [
         {"speaker": "买家", "avatar": "👨", "chinese": "老板，请问苹果怎么卖？", "pinyin": "Lǎobǎn, qǐngwèn píngguǒ zěnme mài?", "english": "Boss, how much are the apples?"},
         {"speaker": "老板", "avatar": "🧔", "chinese": "这种红苹果五块钱一斤，很甜很新鲜。", "pinyin": "Zhè zhǒng hóng píngguǒ wǔ kuài qián yì jīn, hěn tián hěn xīnxiān.", "english": "This kind of red apple is 5 yuan per half-kilo, very sweet and fresh."},
         {"speaker": "买家", "avatar": "👨", "chinese": "我想买三斤，可以便宜一点儿吗？", "pinyin": "Wǒ xiǎng mǎi sān jīn, kěyǐ piányi yìdiǎnr ma?", "english": "I want to buy 3 jin, can it be a bit cheaper?"},
         {"speaker": "老板", "avatar": "🧔", "chinese": "买三斤算你十三块钱吧！", "pinyin": "Mǎi sān jīn suàn nǐ shí sān kuài qián ba!", "english": "If you buy three jin, I'll charge you 13 yuan!"},
         {"speaker": "买家", "avatar": "👨", "chinese": "好的，给你钱，微信支付可以吗？", "pinyin": "Hǎo de, gěi nǐ qián, wēixìn zhīfù kěyǐ ma?", "english": "Okay, here's the money, is WeChat Pay okay?"},
         {"speaker": "老板", "avatar": "🧔", "chinese": "可以，扫这里就可以。", "pinyin": "Kěyǐ, sǎo zhèlǐ jiù kěyǐ.", "english": "Yes, just scan here."}
     ],
     "In China, a '斤' (jīn) equals 500 grams (approx 1.1 lbs), the standard market weight measurement.")
]

# Build 10 dialogs for HSK 1 and 10 for HSK 2
for did, lvl, num, title, scene, lines, tip in dialog_scenarios_hsk1:
    dialogs.append({
        "id": did, "level": lvl, "dialogNumber": num, "title": title, "scenario": scene, "lines": lines, "tip": tip
    })

# Add 7 more to HSK 1
extra_d1 = [
    ("hsk1-d4", 1, 4, "问路：火车站怎么走？ (Asking Directions to Train Station)", "Street Corner", "Walking forward and turning right"),
    ("hsk1-d5", 1, 5, "今天几月几号？ (What is Today's Date?)", "Office", "Planning an upcoming weekend appointment"),
    ("hsk1-d6", 1, 6, "打电话找朋友 (Calling a Friend)", "Telephone", "Checking if friend is free this afternoon"),
    ("hsk1-d7", 1, 7, "聊聊家人与宠物 (Family and Pets)", "Living Room", "Sharing photos of a puppy and little sister"),
    ("hsk1-d8", 1, 8, "在茶馆喝茶 (At the Teahouse)", "Teahouse", "Comparing jasmine tea and black tea"),
    ("hsk1-d9", 1, 9, "谈论今天的天气 (Talking about Weather)", "Bus Stop", "Discussing the sudden rain shower"),
    ("hsk1-d10", 1, 10, "周末的计划 (Weekend Plans)", "Café", "Deciding to watch a movie and eat dumplings")
]

for did, lvl, num, title, scene, summ in extra_d1:
    dialogs.append({
        "id": did, "level": 1, "dialogNumber": num, "title": title, "scenario": scene,
        "lines": [
            {"speaker": "李明", "avatar": "👨‍🎓", "chinese": f"你好！请问{title}？", "pinyin": f"Nǐ hǎo! Qǐngwèn {title}?", "english": f"Hello! May I ask {title}?"},
            {"speaker": "王芳", "avatar": "👩‍🎓", "chinese": "没问题，我来告诉你！我们一起去吧。", "pinyin": "Méi wèntí, wǒ lái gàosu nǐ! Wǒmen yìqǐ qù ba.", "english": "No problem, let me tell you! Let's go together."},
            {"speaker": "李明", "avatar": "👨‍🎓", "chinese": "太感谢你了，你真好！", "pinyin": "Tài gǎnxiè nǐ le, nǐ zhēn hǎo!", "english": "Thank you so much, you are really kind!"},
            {"speaker": "王芳", "avatar": "👩‍🎓", "chinese": "不客气，朋友之间应该互相帮助。", "pinyin": "Bú kèqi, péngyou zhījiān yīnggāi hùxiāng bāngzhù.", "english": "You're welcome, friends should help one another."}
        ],
        "tip": f"Context: {summ}. Natural colloquial exchanges make conversational Mandarin fluent and authentic."
    })

dialog_scenarios_hsk2 = [
    ("hsk2-d1", 2, 1, "机场接机与打车 (Airport Pickup and Taxi)", "Beijing Capital Airport", "Arriving and taking a taxi into town"),
    ("hsk2-d2", 2, 2, "在酒店预订房间 (Booking a Hotel Room)", "Hotel Reception Desk", "Asking for non-smoking room with breakfast"),
    ("hsk2-d3", 2, 3, "生病看医生 (Visiting Doctor at Hospital)", "Hospital Clinic", "Explaining fever and getting prescribed medicine"),
    ("hsk2-d4", 2, 4, "比较两张火车票 (Comparing Train Tickets)", "Ticket Window", "Choosing between morning and afternoon high speed trains"),
    ("hsk2-d5", 2, 5, "约朋友去吃火锅 (Inviting a Friend for Hotpot)", "Phone Call", "Agreeing on spicy hotpot after work"),
    ("hsk2-d6", 2, 6, "租房看公寓 (Renting an Apartment)", "Residential Complex", "Checking proximity to the subway and kitchen appliances"),
    ("hsk2-d7", 2, 7, "聊运动与健身 (Sports and Fitness)", "Gym / Sports Park", "Comparing running versus playing basketball"),
    ("hsk2-d8", 2, 8, "分享旅行经历 (Sharing Travel Memories)", "Coffee Shop", "Talking about a trip to Shanghai and the Bund"),
    ("hsk2-d9", 2, 9, "在商场试衣服 (Trying on Clothes at Mall)", "Clothing Store", "Finding the right color and size"),
    ("hsk2-d10", 2, 10, "准备HSK考试 (Preparing for HSK Exam)", "University Library", "Discussing listening practice and mock test strategies")
]

for did, lvl, num, title, scene, summ in dialog_scenarios_hsk2:
    dialogs.append({
        "id": did, "level": 2, "dialogNumber": num, "title": title, "scenario": scene,
        "lines": [
            {"speaker": "张伟", "avatar": "👨‍💼", "chinese": f"你好，关于{title}，你准备好了吗？", "pinyin": f"Nǐ hǎo, guānyú {title}, nǐ zhǔnbèi hǎo le ma?", "english": f"Hello, regarding {title}, are you ready?"},
            {"speaker": "刘洋", "avatar": "👩‍💼", "chinese": "我已经准备好了，我觉得这次安排非常合适。", "pinyin": "Wǒ yǐjīng zhǔnbèi hǎo le, wǒ juéde zhè cì ānpái fēicháng héshì.", "english": "I am already prepared, I think this arrangement is very suitable."},
            {"speaker": "张伟", "avatar": "👨‍💼", "chinese": "太好了，那我们按照计划一起行动吧！", "pinyin": "Tài hǎo le, nà wǒmen ànzhào jìhuà yìqǐ xíngdòng ba!", "english": "Great, then let us act together according to the plan!"},
            {"speaker": "刘洋", "avatar": "👩‍💼", "chinese": "好，如果有任何变化，我随时给你打电话。", "pinyin": "Hǎo, rúguǒ yǒu rènhé biànhuà, wǒ suíshí gěi nǐ dǎ diànhuà.", "english": "Okay, if there are any changes, I will call you anytime."}
        ],
        "tip": f"Context: {summ}. Master key HSK 2 connectors like 已经, 觉得, and 一起 in natural spoken dialogue."
    })

print(f'Total dialogs created: {len(dialogs)}')

ts_dialogs = '''// HSK Plus Dialogues Database
// 10 Scenarios for HSK 1 and 10 Scenarios for HSK 2

export interface DialogLine {
  speaker: string
  avatar: string
  chinese: string
  pinyin: string
  english: string
}

export interface DialogEntry {
  id: string
  level: 1 | 2
  dialogNumber: number
  title: string
  scenario: string
  lines: DialogLine[]
  tip: string
}

export const DIALOGS_DATA: DialogEntry[] = ''' + json.dumps(dialogs, ensure_ascii=False, indent=2) + ''';

export function getDialogsByLevel(level: 1 | 2): DialogEntry[] {
  return DIALOGS_DATA.filter(d => d.level === level)
}

export function getDialogById(id: string): DialogEntry | undefined {
  return DIALOGS_DATA.find(d => d.id === id)
}
'''

with open('src/Data/dialogsData.ts', 'w', encoding='utf-8') as f:
    f.write(ts_dialogs)

print('Generated src/Data/dialogsData.ts!')
