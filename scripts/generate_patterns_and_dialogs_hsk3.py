import json

# Read existing sentence patterns
with open('scripts/generate_patterns_and_dialogs.py', 'r', encoding='utf-8') as f:
    orig_code = f.read()

# Execute orig to get patterns_hsk1 and patterns_hsk2
local_env = {}
exec(orig_code, local_env)
patterns_hsk1 = local_env['patterns_hsk1']
patterns_hsk2 = local_env['patterns_hsk2']

patterns_hsk3 = [
    {
        "id": "hsk3-p1", "level": 3, "patternNumber": 1,
        "title": "“把” 字句 (Disposal Construction)",
        "formula": "Subject + 把 + Object + Verb + Complement / 了",
        "explanation": "Used when an action affects, disposes of, or changes the state or location of a specific object.",
        "examples": [
            {"chinese": "请把空调关了。", "pinyin": "Qǐng bǎ kōngtiáo guān le.", "english": "Please turn off the air conditioner."},
            {"chinese": "他把作业做完了。", "pinyin": "Tā bǎ zuòyè zuò wán le.", "english": "He finished his homework."},
            {"chinese": "我把书放在桌子上了。", "pinyin": "Wǒ bǎ shū fàng zài zhuōzi shang le.", "english": "I placed the book on the table."}
        ]
    },
    {
        "id": "hsk3-p2", "level": 3, "patternNumber": 2,
        "title": "“被” 字句 (Passive Construction)",
        "formula": "Object + 被 (+ Agent) + Verb + other element",
        "explanation": "Indicates that the subject receives or suffers the action performed by the agent.",
        "examples": [
            {"chinese": "西瓜被弟弟吃完了。", "pinyin": "Xīguā bèi dìdi chī wán le.", "english": "The watermelon was eaten up by younger brother."},
            {"chinese": "我的雨伞被他借走了。", "pinyin": "Wǒ de yǔsǎn bèi tā jiè zǒu le.", "english": "My umbrella was borrowed by him."},
            {"chinese": "他被老师表扬了。", "pinyin": "Tā bèi lǎoshī biǎoyáng le.", "english": "He was praised by the teacher."}
        ]
    },
    {
        "id": "hsk3-p3", "level": 3, "patternNumber": 3,
        "title": "“越来越……” (Gradual Progression)",
        "formula": "Subject + 越来越 + Adjective / Mental Verb",
        "explanation": "Expresses that a quality or emotion intensifies steadily over time (more and more).",
        "examples": [
            {"chinese": "他的汉语说得越来越流利了。", "pinyin": "Tā de hànyǔ shuō de yuè lái yuè liúlì le.", "english": "His Chinese is becoming more and more fluent."},
            {"chinese": "天气越来越冷了。", "pinyin": "Tiānqì yuè lái yuè lěng le.", "english": "The weather is getting colder and colder."},
            {"chinese": "我越来越喜欢中国茶了。", "pinyin": "Wǒ yuè lái yuè xǐhuan zhōngguó chá le.", "english": "I like Chinese tea more and more."}
        ]
    },
    {
        "id": "hsk3-p4", "level": 3, "patternNumber": 4,
        "title": "“越……越……” (Proportional Correlation)",
        "formula": "越 + Clause / Adj 1 + 越 + Clause / Adj 2",
        "explanation": "Correlates two conditions: the more A happens, the more B results (the more... the more...).",
        "examples": [
            {"chinese": "雨越下越大。", "pinyin": "Yǔ yuè xià yuè dà.", "english": "The rain is pouring harder and harder."},
            {"chinese": "这本书越看越有意思。", "pinyin": "Zhè běn shū yuè kàn yuè yǒu yìsi.", "english": "The more I read this book, the more interesting it gets."},
            {"chinese": "你越紧张，就越容易出错。", "pinyin": "Nǐ yuè jǐnzhāng, jiù yuè róngyì chūcuò.", "english": "The more nervous you are, the easier it is to make mistakes."}
        ]
    },
    {
        "id": "hsk3-p5", "level": 3, "patternNumber": 5,
        "title": "“又……又……” (Dual Qualities)",
        "formula": "又 + Adjective 1 + 又 + Adjective 2",
        "explanation": "Describes two concurrent positive or two concurrent negative qualities (both... and...).",
        "examples": [
            {"chinese": "这里的西瓜又大又甜。", "pinyin": "Zhèlǐ de xīguā yòu dà yòu tián.", "english": "The watermelons here are both big and sweet."},
            {"chinese": "她又聪明又努力。", "pinyin": "Tā yòu cōngming yòu nǔlì.", "english": "She is both smart and diligent."},
            {"chinese": "这件衣服又便宜又好看。", "pinyin": "Zhè jiàn yīfu yòu piányi yòu hǎokàn.", "english": "These clothes are both inexpensive and good-looking."}
        ]
    },
    {
        "id": "hsk3-p6", "level": 3, "patternNumber": 6,
        "title": "可能补语 (Potential Complements)",
        "formula": "Verb + 得 / 不 + Resultative / Directional Complement",
        "explanation": "Expresses the objective ability or impossibility to achieve a result (看得懂 = can understand, 看不懂 = cannot understand).",
        "examples": [
            {"chinese": "老师讲的话你听得懂吗？", "pinyin": "Lǎoshī jiǎng de huà nǐ tīng de dǒng ma?", "english": "Can you understand what the teacher explained?"},
            {"chinese": "我的眼镜突然找不到了。", "pinyin": "Wǒ de yǎnjìng tūrán zhǎo bu dào le.", "english": "My glasses suddenly cannot be found."},
            {"chinese": "这么多作业，我今天做不完。", "pinyin": "Zhème duō zuòyè, wǒ jīntiān zuò bu wán.", "english": "With this much homework, I cannot finish today."}
        ]
    },
    {
        "id": "hsk3-p7", "level": 3, "patternNumber": 7,
        "title": "“跟……一样 / 不一样” (Comparative Equality)",
        "formula": "A + 跟 + B + 一样 (+ Adjective)",
        "explanation": "Asserts that entity A has the exact same quality or attribute as entity B.",
        "examples": [
            {"chinese": "我跟他一样高。", "pinyin": "Wǒ gēn tā yíyàng gāo.", "english": "I am as tall as him."},
            {"chinese": "这个手机跟那个手机不一样。", "pinyin": "Zhège shǒujī gēn nàge shǒujī bù yíyàng.", "english": "This phone is not the same as that one."},
            {"chinese": "这道题的想法跟我完全一样。", "pinyin": "Zhè dào tí de xiǎngfǎ gēn wǒ wánquán yíyàng.", "english": "The approach to this question is completely the same as mine."}
        ]
    },
    {
        "id": "hsk3-p8", "level": 3, "patternNumber": 8,
        "title": "“除了……以外，都 / 还……” (Inclusion & Exclusion)",
        "formula": "除了 + A + 以外，都 + Verb (Exclusion) | 还 + Verb (Inclusion)",
        "explanation": "With '都', it means 'except for A'; with '还', it means 'in addition to A'.",
        "examples": [
            {"chinese": "除了李明以外，大家都按时到了。", "pinyin": "Chúle Lǐ Míng yǐwài, dàjiā dōu ànshí dào le.", "english": "Except for Li Ming, everyone arrived on time."},
            {"chinese": "除了英语以外，他还会说汉语和法语。", "pinyin": "Chúle yīngyǔ yǐwài, tā hái huì shuō hànyǔ hé fǎyǔ.", "english": "In addition to English, he can also speak Chinese and French."},
            {"chinese": "除了周末以外，图书馆每天都开门。", "pinyin": "Chúle zhōumò yǐwài, túshūguǎn měitiān dōu kāi mén.", "english": "Except on weekends, the library is open every day."}
        ]
    },
    {
        "id": "hsk3-p9", "level": 3, "patternNumber": 9,
        "title": "疑问代词表示任指 (Emphatic Universal)",
        "formula": "疑问词 (谁 / 什么 / 哪儿) + 都 / 也 + Verb",
        "explanation": "Question words used emphatically to mean 'anyone / everyone', 'anything / everything', or 'anywhere / everywhere'.",
        "examples": [
            {"chinese": "这件事大家都知道，谁都明白。", "pinyin": "Zhè jiàn shì dàjiā dōu zhīdào, shéi dōu míngbai.", "english": "Everyone knows about this matter, anyone understands."},
            {"chinese": "他生病了，今天什么也不想吃。", "pinyin": "Tā shēngbìng le, jīntiān shénme yě bù xiǎng chī.", "english": "He is sick and doesn't feel like eating anything today."},
            {"chinese": "周末我哪儿都不想去，只想在家休息。", "pinyin": "Zhōumò wǒ nǎr dōu bù xiǎng qù, zhǐ xiǎng zài jiā xiūxi.", "english": "On weekends I don't want to go anywhere, just want to rest at home."}
        ]
    },
    {
        "id": "hsk3-p10", "level": 3, "patternNumber": 10,
        "title": "“一边……一边……” (Simultaneous Actions)",
        "formula": "Subject + 一边 + Action 1 + 一边 + Action 2",
        "explanation": "Expresses two actions carried out simultaneously at the same time.",
        "examples": [
            {"chinese": "我们一边喝咖啡一边聊天。", "pinyin": "Wǒmen yìbiān hē kāfēi yìbiān liáotiān.", "english": "We chat while drinking coffee."},
            {"chinese": "他喜欢一边听音乐一边做作业。", "pinyin": "Tā xǐhuan yìbiān tīng yīnyuè yìbiān zuò zuòyè.", "english": "He likes doing homework while listening to music."},
            {"chinese": "别一边走路一边看手机。", "pinyin": "Bié yìbiān zǒulù yìbiān kàn shǒujī.", "english": "Don't look at your phone while walking."}
        ]
    },
    {
        "id": "hsk3-p11", "level": 3, "patternNumber": 11,
        "title": "“连……都 / 也……” (Emphatic Extreme)",
        "formula": "Subject + 连 + Object / Point + 都 / 也 + Verb",
        "explanation": "Highlights an extreme or unexpected case (equivalent to English 'even').",
        "examples": [
            {"chinese": "这个问题太简单了，连小孩子都知道。", "pinyin": "Zhège wèntí tài jiǎndān le, lián xiǎoháizi dōu zhīdào.", "english": "This question is so simple, even a small child knows it."},
            {"chinese": "他太忙了，连早饭都没吃就去上班了。", "pinyin": "Tā tài máng le, lián zǎofàn dōu méi chī jiù qù shàngbān le.", "english": "He was so busy he went to work without even eating breakfast."},
            {"chinese": "我太累了，连一句话都不想说。", "pinyin": "Wǒ tài lèi le, lián yí jù huà dōu bù xiǎng shuō.", "english": "I'm so exhausted I don't even want to say a single word."}
        ]
    },
    {
        "id": "hsk3-p12", "level": 3, "patternNumber": 12,
        "title": "“一……就……” (Immediate Sequence)",
        "formula": "Subject + 一 + Action 1 + 就 + Action 2",
        "explanation": "Indicates that Action 2 occurs immediately as soon as Action 1 takes place (as soon as... then...).",
        "examples": [
            {"chinese": "他一下课就回家了。", "pinyin": "Tā yí xiàkè jiù huí jiā le.", "english": "As soon as class ended, he went home."},
            {"chinese": "我一到北京就给你打电话。", "pinyin": "Wǒ yí dào běijīng jiù gěi nǐ dǎ diànhuà.", "english": "As soon as I arrive in Beijing, I will call you."},
            {"chinese": "大家一听到这个好消息就高兴地跳了起来。", "pinyin": "Dàjiā yì tīngdào zhège hǎo xiāoxi jiù gāoxìng de tiào le qǐlái.", "english": "As soon as everyone heard the good news, they jumped with joy."}
        ]
    },
    {
        "id": "hsk3-p13", "level": 3, "patternNumber": 13,
        "title": "“先……然后……” (Sequential Chronology)",
        "formula": "先 + Step 1 + 然后 + Step 2",
        "explanation": "Establishes a structured step-by-step order of operations (first... then...).",
        "examples": [
            {"chinese": "我们先复习生词，然后做练习题。", "pinyin": "Wǒmen xiān fùxí shēngcí, ránhòu zuò liànxítí.", "english": "We first review the vocabulary, and then do exercise questions."},
            {"chinese": "请先洗手，然后吃饭。", "pinyin": "Qǐng xiān xǐshǒu, ránhòu chīfàn.", "english": "Please wash your hands first, and then eat."},
            {"chinese": "你先去办公室找经理，然后再来找我。", "pinyin": "Nǐ xiān qù bàngōngshì zhǎo jīnglǐ, ránhòu zài lái zhǎo wǒ.", "english": "First go to the office to see the manager, then come see me."}
        ]
    },
    {
        "id": "hsk3-p14", "level": 3, "patternNumber": 14,
        "title": "“对……感兴趣” (Expressing Interest)",
        "formula": "Subject + 对 + Topic + 感兴趣 / 有兴趣",
        "explanation": "Standard fixed prepositional construction to express intellectual or recreational interest in something.",
        "examples": [
            {"chinese": "我对中国书法非常感兴趣。", "pinyin": "Wǒ duì zhōngguó shūfǎ fēicháng gǎn xìngqù.", "english": "I am extremely interested in Chinese calligraphy."},
            {"chinese": "你对哪门课程最感兴趣？", "pinyin": "Nǐ duì nǎ mén kèchéng zuì gǎn xìngqù?", "english": "Which course are you most interested in?"},
            {"chinese": "小孩子对什么都感兴趣。", "pinyin": "Xiǎoháizi duì shénme dōu gǎn xìngqù.", "english": "Children are interested in everything."}
        ]
    },
    {
        "id": "hsk3-p15", "level": 3, "patternNumber": 15,
        "title": "“为……着想” (Showing Consideration)",
        "formula": "为 + Someone / Goal + 着想",
        "explanation": "Expresses considering someone else's interests or planning ahead for a goal.",
        "examples": [
            {"chinese": "我们要多为别人的健康着想。", "pinyin": "Wǒmen yào duō wèi biérén de jiànkāng zhuóxiǎng.", "english": "We should consider other people's health more."},
            {"chinese": "父母总是为孩子的将来着想。", "pinyin": "Fùmǔ zǒngshì wèi háizi de jiānglái zhuóxiǎng.", "english": "Parents always plan with consideration for their children's future."},
            {"chinese": "这是为了你的安全着想。", "pinyin": "Zhè shì wèile nǐ de ānquán zhuóxiǎng.", "english": "This is in consideration of your safety."}
        ]
    },
    {
        "id": "hsk3-p16", "level": 3, "patternNumber": 16,
        "title": "“动词 1 + 着 + 动词 2” (Concomitant Manner)",
        "formula": "Verb 1 + 着 + Verb 2",
        "explanation": "Verb 1 indicates the physical manner or sustained posture in which Verb 2 is performed.",
        "examples": [
            {"chinese": "她总是笑着跟客人说话。", "pinyin": "Tā zǒngshì xiào zhe gēn kèrén shuōhuà.", "english": "She always smiles while talking to guests."},
            {"chinese": "他们站着等了半个小时。", "pinyin": "Tāmen zhàn zhe děng le bàn ge xiǎoshí.", "english": "They waited on their feet for half an hour."},
            {"chinese": "老师手里拿着一本书走进教室。", "pinyin": "Lǎoshī shǒulǐ ná zhe yì běn shū zǒu jìn jiàoshì.", "english": "Holding a book in hand, the teacher walked into the classroom."}
        ]
    },
    {
        "id": "hsk3-p17", "level": 3, "patternNumber": 17,
        "title": "复合趋向补语 (Compound Directional)",
        "formula": "Action Verb + (上/下/进/出/回/过/起) + (来/去)",
        "explanation": "Combines a movement verb with directional markers indicating path and perspective relative to the speaker.",
        "examples": [
            {"chinese": "他从包里拿出来了一本新词典。", "pinyin": "Tā cóng bāo lǐ ná chūlái le yì běn xīn cídiǎn.", "english": "He took out a new dictionary from his bag."},
            {"chinese": "请大家快点儿跑进去，外面下大雨了。", "pinyin": "Qǐng dàjiā kuài diǎnr pǎo jìnqù, wàimiàn xià dà yǔ le.", "english": "Please run inside quickly, it's raining heavily outside."},
            {"chinese": "太阳从东边升起来了。", "pinyin": "Tàiyáng cóng dōngbian shēng qǐlái le.", "english": "The sun has risen from the east."}
        ]
    },
    {
        "id": "hsk3-p18", "level": 3, "patternNumber": 18,
        "title": "状态补语扩展 (Descriptive Clause)",
        "formula": "Adjective + 得 + Clause",
        "explanation": "Introduces a full descriptive consequence or reaction resulting from an adjective's intensity.",
        "examples": [
            {"chinese": "我现在累得想睡觉。", "pinyin": "Wǒ xiànzài lèi de xiǎng shuìjiào.", "english": "I am so tired right now that I just want to sleep."},
            {"chinese": "听到这个好消息，他高兴得跳了起来。", "pinyin": "Tīngdào zhège hǎo xiāoxi, tā gāoxìng de tiào le qǐlái.", "english": "Hearing the good news, he was so happy he jumped up."},
            {"chinese": "天气热得大家都不想出门。", "pinyin": "Tiānqì rè de dàjiā dōu bù xiǎng chū mén.", "english": "The weather was so hot that nobody wanted to go outside."}
        ]
    },
    {
        "id": "hsk3-p19", "level": 3, "patternNumber": 19,
        "title": "“只有……才……” (Conditional Necessity)",
        "formula": "只有 + Essential Condition, 才 + Result",
        "explanation": "Emphasizes the singular indispensability of a prerequisite condition (only if... then...).",
        "examples": [
            {"chinese": "只有认真努力，才能通过 HSK 考试。", "pinyin": "Zhǐyǒu rènzhēn nǔlì, cái néng tōngguò HSK kǎoshì.", "english": "Only by working conscientiously can one pass the HSK exam."},
            {"chinese": "只有身体健康，才能更好地工作和学习。", "pinyin": "Zhǐyǒu shēntǐ jiànkāng, cái néng gèng hǎo de gōngzuò hé xuéxí.", "english": "Only with good health can one work and study better."},
            {"chinese": "只有多练习，汉语才能说得流利。", "pinyin": "Zhǐyǒu duō liànxí, hànyǔ cái néng shuō de liúlì.", "english": "Only by practicing more can one speak Chinese fluently."}
        ]
    },
    {
        "id": "hsk3-p20", "level": 3, "patternNumber": 20,
        "title": "引申趋向补语 (Extended Complements)",
        "formula": "Verb + 出来 / 起来 / 下去",
        "explanation": "Metaphorical extensions: 出来 (discern/identify), 起来 (start/upward), 下去 (continue onwards).",
        "examples": [
            {"chinese": "你听出来这是谁的声音了吗？", "pinyin": "Nǐ tīng chūlái zhè shì shéi de shēngyīn le ma?", "english": "Did you discern whose voice this is by ear?"},
            {"chinese": "我想起来他的名字了！", "pinyin": "Wǒ xiǎng qǐlái tā de míngzi le!", "english": "I suddenly recalled his name!"},
            {"chinese": "请大家坚持学下去，一定会成功的。", "pinyin": "Qǐng dàjiā jiānchí xué xiàqù, yídìng huì chénggōng de.", "english": "Please persevere in studying onward, you will surely succeed."}
        ]
    }
]

all_patterns = patterns_hsk1 + patterns_hsk2 + patterns_hsk3

ts_patterns = '''// HSK Plus Sentence Patterns Database
// 15 Patterns for HSK 1, 15 Patterns for HSK 2, and 20 Patterns for HSK 3

export interface PatternExample {
  chinese: string
  pinyin: string
  english: string
}

export interface SentencePatternEntry {
  id: string
  level: 1 | 2 | 3
  patternNumber: number
  title: string
  formula: string
  explanation: string
  examples: PatternExample[]
}

export const SENTENCE_PATTERNS_DATA: SentencePatternEntry[] = ''' + json.dumps(all_patterns, ensure_ascii=False, indent=2) + ''';

export function getPatternsByLevel(level: 1 | 2 | 3): SentencePatternEntry[] {
  return SENTENCE_PATTERNS_DATA.filter(p => p.level === level)
}

export function getPatternById(id: string): SentencePatternEntry | undefined {
  return SENTENCE_PATTERNS_DATA.find(p => p.id === id)
}

export function getPatternByIndex(level: 1 | 2 | 3, index: number): SentencePatternEntry | undefined {
  return SENTENCE_PATTERNS_DATA.find(p => p.level === level && p.patternNumber === index)
}
'''

with open('src/Data/sentencePatternsData.ts', 'w', encoding='utf-8') as f:
    f.write(ts_patterns)

print(f'Saved src/Data/sentencePatternsData.ts with {len(all_patterns)} patterns!')

# Add 10 Dialogue Scenarios for HSK 3
dialogs_orig = local_env['dialogs']

dialog_scenarios_hsk3 = [
    ("hsk3-d1", 3, 1, "租房签合同 (Signing an Apartment Lease)", "Real Estate Agency",
     [
         {"speaker": "中介", "avatar": "👨‍💼", "chinese": "张先生您好，这套房子的环境非常好，离地铁站只有三百米，附近有超市和公园。", "pinyin": "Zhāng xiānsheng nín hǎo, zhè tào fángzi de huánjìng fēicháng hǎo, lí dìtiězhàn zhǐ yǒu sān bǎi mǐ, fùjìn yǒu chāoshì hé gōngyuán.", "english": "Hello Mr. Zhang, the environment of this apartment is very good, only 300 meters from the subway, with supermarkets and parks nearby."},
         {"speaker": "张先生", "avatar": "👨", "chinese": "房间里有空调、洗衣机和冰箱吗？每个月房租多少钱？", "pinyin": "Fángjiān lǐ yǒu kōngtiáo, xǐyījī hé bīngxiāng ma? Měi ge yuè fángzū duōshao qián?", "english": "Does the room have an air conditioner, washing machine, and refrigerator? How much is the monthly rent?"},
         {"speaker": "中介", "avatar": "👨‍💼", "chinese": "家电都很齐全，每月三千五百元，押一付三，合同签一年。", "pinyin": "Jiādiàn dōu hěn qíquán, měi yuè sān qiān wǔ bǎi yuán, yā yī fù sān, hétong qiān yì nián.", "english": "All household appliances are complete, 3,500 yuan per month, one month deposit and three months prepaid, one-year contract."},
         {"speaker": "张先生", "avatar": "👨", "chinese": "好的，我对这套房子很满意，我们今天就可以把合同签了。", "pinyin": "Hǎo de, wǒ duì zhè tào fángzi hěn mǎnyì, wǒmen jīntiān jiù kěyǐ bǎ hétong qiān le.", "english": "Great, I am very satisfied with this apartment, we can sign the contract today."}
     ],
     "When renting an apartment in China, '押一付三' (one month deposit, three months rent paid in advance) is the standard lease formula."),
    ("hsk3-d2", 3, 2, "跨国公司求职面试 (Job Interview at Global Firm)", "Conference Room",
     [
         {"speaker": "面试官", "avatar": "👩‍💼", "chinese": "请您先做一下自我介绍，并谈谈为什么对我们公司感兴趣。", "pinyin": "Qǐng nín xiān zuò yíxià zìwǒ jièshào, bìng tántan wèishénme duì wǒmen gōngsī gǎn xìngqù.", "english": "Please give a self-introduction first, and discuss why you are interested in our company."},
         {"speaker": "求职者", "avatar": "👱‍♂️", "chinese": "您好！我毕业于北京大学中文系，具有两年国际贸易经验，熟悉双语商务交流。", "pinyin": "Nín hǎo! Wǒ bìyè yú běijīng dàxué zhōngwén xì, jùyǒu liǎng nián guójì màoyì jīngyàn, shúxī shuāngyǔ shāngwù jiāoliú.", "english": "Hello! I graduated from Peking University's Chinese department with two years of international trade experience, familiar with bilingual business communication."},
         {"speaker": "面试官", "avatar": "👩‍💼", "chinese": "非常出色！如果遇到紧急工作任务，你如何处理工作压力？", "pinyin": "Fēicháng chūsè! Rúguǒ yù dào jǐnjí gōngzuò rènwu, nǐ rúhé chǔlǐ gōngzuò yālì?", "english": "Very outstanding! If you encounter urgent tasks, how do you handle work pressure?"},
         {"speaker": "求职者", "avatar": "👱‍♂️", "chinese": "我会先分清主次，把最重要的事情办好，并积极与同事沟通协作。", "pinyin": "Wǒ huì xiān fēn qīng zhǔ cì, bǎ zuì zhòngyào de shìqing bàn hǎo, bìng jījí yǔ tóngshì gōutōng xiézuò.", "english": "I first prioritize tasks, get the most important things handled, and actively communicate and collaborate with colleagues."}
     ],
     "In Chinese interviews, emphasizing harmony, problem-solving maturity, and team collaboration (团队协作) is highly valued."),
    ("hsk3-d3", 3, 3, "高铁改签与出行 (High-Speed Rail Ticket Change)", "Railway Station Ticket Desk",
     [
         {"speaker": "乘客", "avatar": "👩", "chinese": "服务员您好，我买的这趟去上海的高铁快要开了，但我因为堵车赶不上了，可以帮我改签吗？", "pinyin": "Fúwùyuán nín hǎo, wǒ mǎi de zhè tàng qù shànghǎi de gāotiě kuàiyào kāi le, dàn wǒ yīnwèi dǔchē gǎn bu shàng le, kěyǐ bāng wǒ gǎiqiān ma?", "english": "Hello, my high-speed train to Shanghai is about to depart, but because of traffic I can't make it, can you help me change tickets?"},
         {"speaker": "售票员", "avatar": "👨‍✈️", "chinese": "请把您的身份证和车票给我看一下。今天下午两点还有二等座，您看可以吗？", "pinyin": "Qǐng bǎ nín de shēnfènzhèng hé chēpiào gěi wǒ kàn yíxià. Jīntiān xiàwǔ liǎng diǎn hái yǒu èrděngzuò, nín kàn kěyǐ ma?", "english": "Please let me see your ID card and ticket. There are still second-class seats at 2 PM today, does that work for you?"},
         {"speaker": "乘客", "avatar": "👩", "chinese": "太好了！需要补交手续费吗？", "pinyin": "Tài hǎo le! Xūyào bǔjiāo shǒuxùfèi ma?", "english": "Great! Do I need to pay an extra fee?"},
         {"speaker": "售票员", "avatar": "👨‍✈️", "chinese": "发车前第一次改签是免费的，已经把新票信息发到您的手机上了。", "pinyin": "Fāchē qián dì yī cì gǎiqiān shì miǎnfèi de, yǐjīng bǎ xīn piào xìnxī fā dào nín de shǒujī shang le.", "english": "The first ticket change before departure is free, the new ticket info has already been sent to your phone."}
     ],
     "China High-Speed Rail (CRH) uses electronic ticketless boarding (电子客票) via your passport or ID card."),
    ("hsk3-d4", 3, 4, "医院就诊与调养 (Doctor Consultation and Health)", "Hospital Clinic",
     [
         {"speaker": "医生", "avatar": "👨‍⚕️", "chinese": "你哪里不舒服？发烧了吗？", "pinyin": "Nǐ nǎlǐ bù shūfu? Fāshāo le ma?", "english": "Where do you feel unwell? Do you have a fever?"},
         {"speaker": "患者", "avatar": "🤒", "chinese": "医生，我最近头疼，嗓子也疼，昨晚量体温三十八度五。", "pinyin": "Yīshēng, wǒ zuìjìn tóu téng, sǎngzi yě téng, zuó wǎn liáng tǐwēn sānshí bā dù wǔ.", "english": "Doctor, I've had a headache lately, sore throat too, last night my temperature was 38.5 degrees."},
         {"speaker": "医生", "avatar": "👨‍⚕️", "chinese": "你这是严重感冒了。我给你开三种药，每天按时吃，多喝热水，千万别熬夜。", "pinyin": "Nǐ zhè shì yánzhòng gǎnmào le. Wǒ gěi nǐ kāi sān zhǒng yào, měitiān ànshí chī, duō hē rè shuǐ, qiānwàn bié áoyè.", "english": "You have a severe cold. I am prescribing three kinds of medicine, take them on time, drink plenty of hot water, and definitely don't stay up late."},
         {"speaker": "患者", "avatar": "🤒", "chinese": "好的医生，需要打针或者输液吗？", "pinyin": "Hǎo de yīshēng, xūyào dǎzhēn huòzhě shūyè ma?", "english": "Okay doctor, do I need an injection or an IV drip?"},
         {"speaker": "医生", "avatar": "👨‍⚕️", "chinese": "暂时不用，按时吃药多休息，三天后如果还发烧再来复诊。", "pinyin": "Zànshí bú yòng, ànshí chī yào duō xiūxi, sān tiān hòu rúguǒ hái fāshāo zài lái fùzhěn.", "english": "Not for now, take your medicine on time and rest more; if you still have a fever after three days, return for a checkup."}
     ],
     "In China, registration (挂号), consultation (看诊), payment (缴费), and pharmacy pickup (取药) follow a clear hospital workflow.")
]

# Add 6 more HSK 3 scenarios
extra_d3 = [
    ("hsk3-d5", 3, 5, "银行外币兑换与理财 (Bank Currency Exchange)", "Bank Branch Counter", "Exchanging foreign currency and understanding exchange rates"),
    ("hsk3-d6", 3, 6, "筹备生日聚会 (Preparing a Surprise Birthday Party)", "Living Room", "Ordering a cake, buying fresh flowers, and inviting friends"),
    ("hsk3-d7", 3, 7, "健身房锻炼与保持健康 (Fitness and Healthy Weight)", "Fitness Gym", "Discussing workout routines and keeping fit with a personal coach"),
    ("hsk3-d8", 3, 8, "商场退换商品 (Returning and Exchanging Clothes)", "Department Store Customer Service", "Exchanging a shirt for a different size and color"),
    ("hsk3-d9", 3, 9, "谈论环境保护与垃圾分类 (Environmental Protection & Recycling)", "Community Center", "Sorting recyclable waste and conserving energy"),
    ("hsk3-d10", 3, 10, "探讨周末自驾游路线 (Planning a Weekend Road Trip)", "Coffee Shop", "Reviewing road conditions, navigation maps, and scenic spots")
]

for did, lvl, num, title, scene, summ in extra_d3:
    dialog_scenarios_hsk3.append((
        did, lvl, num, title, scene,
        [
            {"speaker": "李明", "avatar": "👨‍🎓", "chinese": f"你好，关于{title}，我们今天必须把所有细节安排好。", "pinyin": f"Nǐ hǎo, guānyú {title}, wǒmen jīntiān bìxū bǎ suǒyǒu xìjié ānpái hǎo.", "english": f"Hello, regarding {title}, we must arrange all details properly today."},
            {"speaker": "王芳", "avatar": "👩‍🎓", "chinese": "没问题！我已经把相关资料整理出来了，我们一步一步来办。", "pinyin": "Méi wèntí! Wǒ yǐjīng bǎ xiāngguān zīliào zhěnglǐ chūlái le, wǒmen yíbù yíbù lái bàn.", "english": "No problem! I have already organized the relevant materials, let us proceed step by step."},
            {"speaker": "李明", "avatar": "👨‍🎓", "chinese": "太好了，只有大家共同努力，事情才能办得又快又好！", "pinyin": "Tài hǎo le, zhǐyǒu dàjiā gòngtóng nǔlì, shìqing cái néng bàn de yòu kuài yòu hǎo!", "english": "Awesome, only when everyone works together can matters be done quickly and well!"},
            {"speaker": "王芳", "avatar": "👩‍🎓", "chinese": "对，遇到任何问题我们随时沟通。", "pinyin": "Duì, yù dào rènhé wèntí wǒmen suíshí gōutōng.", "english": "Right, if we encounter any problems, we will communicate anytime."}
        ],
        f"Context: {summ}. Master rich complex sentences (把字句, 只有...才..., 又...又...) in fluent conversational exchanges."
    ))

all_dialogs = dialogs_orig + [
    {"id": d[0], "level": d[1], "dialogNumber": d[2], "title": d[3], "scenario": d[4], "lines": d[5], "tip": d[6]}
    for d in dialog_scenarios_hsk3
]

ts_dialogs = '''// HSK Plus Dialogues Database
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

export const DIALOGS_DATA: DialogEntry[] = ''' + json.dumps(all_dialogs, ensure_ascii=False, indent=2) + ''';

export function getDialogsByLevel(level: 1 | 2 | 3): DialogEntry[] {
  return DIALOGS_DATA.filter(d => d.level === level)
}

export function getDialogById(id: string): DialogEntry | undefined {
  return DIALOGS_DATA.find(d => d.id === id)
}
'''

with open('src/Data/dialogsData.ts', 'w', encoding='utf-8') as f:
    f.write(ts_dialogs)

print(f'Saved src/Data/dialogsData.ts with {len(all_dialogs)} dialogues!')
