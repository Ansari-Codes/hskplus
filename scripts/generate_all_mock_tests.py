import json

# Import the existing build_hsk1_tests and build_hsk2_tests from scripts/generate_mock_tests.py
with open('scripts/generate_mock_tests.py', 'r', encoding='utf-8') as f:
    orig_test_code = f.read()

env = {}
exec(orig_test_code, env)
build_hsk1_tests = env['build_hsk1_tests']
build_hsk2_tests = env['build_hsk2_tests']

def build_hsk3_tests():
    tests = []
    
    # 5 Listening tests for HSK 3
    for t_num in range(1, 6):
        questions = [
            {
                "id": 1,
                "part": 1,
                "type": "true_false",
                "prompt": "Listen to the statement. Does it match the picture?",
                "audioText": "别忘了把空调关了，我们要节约用电。",
                "imageEmoji": "❄️",
                "imageDesc": "Air conditioner cooling",
                "options": ["正确 (True)", "错误 (False)"],
                "correctAnswer": 0,
                "explanation": "Audio says '别忘了把空调关了' (Don't forget to turn off the air conditioner), matching the AC cooling icon."
            },
            {
                "id": 2,
                "part": 1,
                "type": "true_false",
                "prompt": "Listen to the audio. Does it match the statement?",
                "audioText": "他正在图书馆借书呢，准备写期末论文。",
                "imageEmoji": "🏊‍♂️",
                "imageDesc": "Swimmer in a pool",
                "options": ["正确 (True)", "错误 (False)"],
                "correctAnswer": 1,
                "explanation": "Audio describes studying and borrowing books in the library ('在图书馆借书'), but the picture shows swimming."
            },
            {
                "id": 3,
                "part": 2,
                "type": "choice",
                "prompt": "Listen to the dialogue and select the matching location.",
                "audioText": "男：请问您办理存款还是兑换外币？ 女：我想把这些美元换成人民币。",
                "options": ["A. 🏦 银行 (Bank)", "B. 🏬 商场 (Department Store)", "C. ✈️ 机场 (Airport)"],
                "correctAnswer": 0,
                "explanation": "'兑换外币' and '美元换成人民币' clearly takes place at a bank."
            },
            {
                "id": 4,
                "part": 3,
                "type": "dialog",
                "prompt": "Listen to the conversation and answer the question.",
                "audioText": "男：你最近怎么看起来这么累？ 女：最近公司的事情特别多，我每天都加班到晚上九点多。",
                "question": "女的为什么看起来很累？ (Why does the woman look tired?)",
                "options": ["A. 生病发烧了", "B. 每天加班到很晚", "C. 找不到眼镜"],
                "correctAnswer": 1,
                "explanation": "The woman explains '最近公司的事情特别多，我每天都加班到晚上九点多' (works overtime late every day)."
            },
            {
                "id": 5,
                "part": 4,
                "type": "comprehension",
                "prompt": "Listen to the dialogue and select the correct answer.",
                "audioText": "男：这套房子的租金多少钱一个月？ 女：每月三千块，离地铁站只有两百米，非常方便。",
                "question": "这套房子的房租是多少？ (How much is the rent?)",
                "options": ["A. 2,000 元", "B. 3,000 元", "C. 3,200 元"],
                "correctAnswer": 1,
                "explanation": "The woman clearly states '每月三千块' (3,000 yuan per month)."
            },
            {
                "id": 6,
                "part": 4,
                "type": "comprehension",
                "prompt": "Listen to the dialogue.",
                "audioText": "女：你把那本汉语词典放在哪儿了？ 男：我放在书架第二层了，你没看出来吗？",
                "question": "词典在什么地方？ (Where is the dictionary?)",
                "options": ["A. 桌子下面", "B. 书架第二层", "C. 行李箱里"],
                "correctAnswer": 1,
                "explanation": "The man says '放在书架第二层了' (on the 2nd shelf of the bookcase)."
            },
            {
                "id": 7,
                "part": 4,
                "type": "comprehension",
                "prompt": "Listen to the conversation.",
                "audioText": "男：周末我们一起去爬山怎么样？ 女：好啊，只要不下雨，我们就去！",
                "question": "女的什么情况下会去爬山？ (Under what condition will she go mountain climbing?)",
                "options": ["A. 只要不下雨", "B. 只要写完作业", "C. 只要身体不累"],
                "correctAnswer": 0,
                "explanation": "The woman says '只要不下雨，我们就去！' (As long as it doesn't rain)."
            },
            {
                "id": 8,
                "part": 4,
                "type": "comprehension",
                "prompt": "Listen to the dialogue.",
                "audioText": "女：你觉得这次考试难不难？ 男：数学比历史难多了，但是我都做完了。",
                "question": "男的觉得哪个科目更难？ (Which subject does the man find harder?)",
                "options": ["A. 历史", "B. 数学", "C. 两个都不难"],
                "correctAnswer": 1,
                "explanation": "The man states '数学比历史难多了' (Math is much harder than history)."
            },
            {
                "id": 9,
                "part": 4,
                "type": "comprehension",
                "prompt": "Listen to the conversation.",
                "audioText": "男：你认识新来的张经理吗？ 女：认识，他总是笑着跟每一个同事说话，非常热情。",
                "question": "女的觉得张经理怎么样？ (What does the woman think of Manager Zhang?)",
                "options": ["A. 很严肃", "B. 总是笑着，非常热情", "C. 经常迟到"],
                "correctAnswer": 1,
                "explanation": "She notes '他总是笑着跟每一个同事说话，非常热情'."
            },
            {
                "id": 10,
                "part": 4,
                "type": "comprehension",
                "prompt": "Listen to the dialogue.",
                "audioText": "女：你的脚好点儿了吗？ 男：好多了，医生说再休息两天就能正常走路了。",
                "question": "男的还需要休息几天？ (How many more days does the man need to rest?)",
                "options": ["A. 一天", "B. 两天", "C. 一周"],
                "correctAnswer": 1,
                "explanation": "He says '再休息两天就能正常走路了' (rest two more days)."
            }
        ]
        
        tests.append({
            "id": f"hsk3-listening-{t_num}",
            "level": 3,
            "type": "listening",
            "testNumber": t_num,
            "title": f"HSK 3 Official Mock Test {t_num} · Listening (听力)",
            "durationMinutes": 35,
            "totalQuestions": len(questions),
            "questions": questions
        })

    # 5 Reading tests for HSK 3
    for t_num in range(1, 6):
        r_questions = [
            {
                "id": 1,
                "part": 1,
                "type": "fill_blank",
                "prompt": "Choose the correct word to complete the 把-construction.",
                "sentence": "请你把桌子上的垃圾___掉。",
                "options": ["A. 扔", "B. 骑", "C. 借", "D. 哭"],
                "correctAnswer": 0,
                "explanation": "'把垃圾扔掉' means to throw away / discard the trash."
            },
            {
                "id": 2,
                "part": 1,
                "type": "fill_blank",
                "prompt": "Choose the appropriate correlative conjunction pair.",
                "sentence": "他的中文说得很好，___发音准确，___语法几乎没有错误。",
                "options": [
                    "A. 又……又……",
                    "B. 不但……而且……",
                    "C. 虽然……但是……",
                    "D. 越……越……"
                ],
                "correctAnswer": 1,
                "explanation": "'不但...而且...' expresses progressive addition: Not only is his pronunciation accurate, but his grammar also has almost no mistakes."
            },
            {
                "id": 3,
                "part": 2,
                "type": "fill_blank",
                "prompt": "Select the correct potential complement.",
                "sentence": "老师写在黑板上的字太小了，我坐后面看___。",
                "options": ["A. 不清", "B. 不到", "C. 不见", "D. 不完"],
                "correctAnswer": 0,
                "explanation": "'看不清' means 'cannot see clearly' due to distance or small size."
            },
            {
                "id": 4,
                "part": 2,
                "type": "fill_blank",
                "prompt": "Choose the correct structure for equality comparison.",
                "sentence": "妹妹的头发跟姐姐的一样___。",
                "options": ["A. 远", "B. 长", "C. 贵", "D. 快"],
                "correctAnswer": 1,
                "explanation": "'跟...一样长' describes having hair of the same length."
            },
            {
                "id": 5,
                "part": 3,
                "type": "dialog_match",
                "prompt": "Match the best response: '别忘了把空调关了！'",
                "question": "别忘了把空调关了！ (Don't forget to turn off the air conditioner!)",
                "options": [
                    "A. 放心吧，我已经关好了。",
                    "B. 我比他高三厘米。",
                    "C. 附近有一家中介公司。"
                ],
                "correctAnswer": 0,
                "explanation": "'放心吧，我已经关好了' (Don't worry, I already turned it off) directly answers the reminder."
            },
            {
                "id": 6,
                "part": 3,
                "type": "comprehension",
                "prompt": "Read the passage and judge: '虽然今天工作非常忙，但是他还是抽时间去健身房锻炼了一个小时。'",
                "question": "他今天没有去健身房锻炼。 (He did not go to the gym to exercise today.)",
                "options": ["正确 (True)", "错误 (False)"],
                "correctAnswer": 1,
                "explanation": "The text confirms he went and exercised for an hour ('锻炼了一个小时'), so the statement is False."
            },
            {
                "id": 7,
                "part": 4,
                "type": "comprehension",
                "prompt": "Read the statement: '除了李明以外，班上的其他同学都参加了这次汉语演讲比赛。'",
                "question": "李明参加了这次演讲比赛。 (Li Ming participated in the speech contest.)",
                "options": ["正确 (True)", "错误 (False)"],
                "correctAnswer": 1,
                "explanation": "'除了李明以外' means everyone participated EXCEPT Li Ming, so the statement is False."
            },
            {
                "id": 8,
                "part": 4,
                "type": "fill_blank",
                "prompt": "Choose the correct conjunction for conditional necessity.",
                "sentence": "___每天坚持练习，口语___能越来越流利。",
                "options": [
                    "A. 只有……才……",
                    "B. 虽然……但是……",
                    "C. 因为……所以……",
                    "D. 只要……就……"
                ],
                "correctAnswer": 0,
                "explanation": "'只有...才...' expresses: Only by persistently practicing every day can spoken language become increasingly fluent."
            },
            {
                "id": 9,
                "part": 4,
                "type": "fill_blank",
                "prompt": "Fill in the blank with the correct passive preposition.",
                "sentence": "桌子上的蛋糕___小猫吃了一半。",
                "options": ["A. 把", "B. 被", "C. 让", "D. 给"],
                "correctAnswer": 1,
                "explanation": "'被' marks passive voice: The cake on the table was eaten in half BY the kitten."
            },
            {
                "id": 10,
                "part": 4,
                "type": "fill_blank",
                "prompt": "Choose the correct word for gradual progression.",
                "sentence": "随着春天的到来，天气___暖和了。",
                "options": ["A. 越", "B. 越来越", "C. 一直", "D. 刚才"],
                "correctAnswer": 1,
                "explanation": "'越来越暖和' expresses: The weather is becoming warmer and warmer."
            }
        ]

        tests.append({
            "id": f"hsk3-reading-{t_num}",
            "level": 3,
            "type": "reading",
            "testNumber": t_num,
            "title": f"HSK 3 Official Mock Test {t_num} · Reading (阅读)",
            "durationMinutes": 30,
            "totalQuestions": len(r_questions),
            "questions": r_questions
        })

    # Writing test for HSK 3
    w_questions = [
        {
            "id": 1,
            "type": "unscramble",
            "prompt": "Unscramble into a correct 把-sentence.",
            "words": ["空调", "请", "关了", "把"],
            "options": ["请把空调关了。", "请空调把关了。", "把请空调关了。"],
            "correctAnswer": 0,
            "explanation": "Subject + 把 + Object + Verb + 了: 请把空调关了。"
        },
        {
            "id": 2,
            "type": "unscramble",
            "prompt": "Unscramble into a correct passive 被-sentence.",
            "words": ["吃完了", "蛋糕", "被", "弟弟"],
            "options": ["蛋糕被弟弟吃完了。", "弟弟被蛋糕吃完了。", "蛋糕弟弟被吃完了。"],
            "correctAnswer": 0,
            "explanation": "Object + 被 + Agent + Verb + 了: 蛋糕被弟弟吃完了。"
        },
        {
            "id": 3,
            "type": "unscramble",
            "prompt": "Unscramble into a correct 越来越-sentence.",
            "words": ["汉语", "他的", "流利了", "越来越"],
            "options": ["他的汉语越来越流利了。", "他的汉语流利了越来越。", "越来越他的汉语流利了。"],
            "correctAnswer": 0,
            "explanation": "Subject + 越来越 + Adjective: 他的汉语越来越流利了。"
        },
        {
            "id": 4,
            "type": "character_stroke",
            "prompt": "How many strokes does the character '搬' (bān, to move) have?",
            "character": "搬",
            "options": ["11 画", "12 画", "13 画", "14 画"],
            "correctAnswer": 2,
            "explanation": "'搬' has 13 strokes: 扌 (3) + 舟 (6) + 殳 (4) = 13 strokes."
        },
        {
            "id": 5,
            "type": "character_stroke",
            "prompt": "How many strokes does the character '懂' (dǒng, to understand) have?",
            "character": "懂",
            "options": ["13 画", "14 画", "15 画", "16 画"],
            "correctAnswer": 2,
            "explanation": "'懂' has 15 strokes: 忄 (3) + 董 (12) = 15 strokes."
        }
    ]
    tests.append({
        "id": "hsk3-writing-1",
        "level": 3,
        "type": "writing",
        "testNumber": 1,
        "title": "HSK 3 Writing & Syntax Assembly Test 1",
        "durationMinutes": 25,
        "totalQuestions": len(w_questions),
        "questions": w_questions
    })

    return tests

all_tests = build_hsk1_tests() + build_hsk2_tests() + build_hsk3_tests()
print(f'Total Mock Tests created across HSK 1, 2, and 3: {len(all_tests)}')

ts_tests = '''// HSK Plus Official Timed Mock Tests Database
// 5 Listening Tests + 5 Reading Tests + Writing Tests for HSK 1, HSK 2, and HSK 3

export type TestType = 'listening' | 'reading' | 'writing'

export interface MockTestQuestion {
  id: number
  part?: number
  type: string
  prompt: string
  audioText?: string
  imageEmoji?: string
  imageDesc?: string
  text?: string
  sentence?: string
  question?: string
  words?: string[]
  character?: string
  pinyin?: string
  options: string[]
  correctAnswer: number
  explanation: string
}

export interface MockTestEntry {
  id: string
  level: 1 | 2 | 3
  type: TestType
  testNumber: number
  title: string
  durationMinutes: number
  totalQuestions: number
  questions: MockTestQuestion[]
}

export const MOCK_TESTS_DATA: MockTestEntry[] = ''' + json.dumps(all_tests, ensure_ascii=False, indent=2) + ''';

export function getMockTestsByLevel(level: 1 | 2 | 3): MockTestEntry[] {
  return MOCK_TESTS_DATA.filter(t => t.level === level)
}

export function getMockTestsByLevelAndType(level: 1 | 2 | 3, type: TestType): MockTestEntry[] {
  return MOCK_TESTS_DATA.filter(t => t.level === level && t.type === type)
}

export function getMockTestById(id: string): MockTestEntry | undefined {
  return MOCK_TESTS_DATA.find(t => t.id === id)
}
'''

with open('src/Data/mockTestsData.ts', 'w', encoding='utf-8') as f:
    f.write(ts_tests)

print('Generated src/Data/mockTestsData.ts successfully!')
