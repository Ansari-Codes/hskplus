import json

def build_hsk1_tests():
    tests = []
    
    # 5 Listening tests for HSK 1
    for t_num in range(1, 6):
        questions = [
            {
                "id": 1,
                "part": 1,
                "type": "true_false",
                "prompt": "Listen to the audio. Does the audio match the picture? (True or False)",
                "audioText": "他在看书。",
                "imageEmoji": "📖",
                "imageDesc": "A person reading a book",
                "options": ["正确 (True)", "错误 (False)"],
                "correctAnswer": 0,
                "explanation": "Audio says '他在看书' (He is reading a book), which matches the book icon."
            },
            {
                "id": 2,
                "part": 1,
                "type": "true_false",
                "prompt": "Listen to the audio. Does the audio match the picture?",
                "audioText": "吃苹果。",
                "imageEmoji": "☕",
                "imageDesc": "A hot cup of coffee",
                "options": ["正确 (True)", "错误 (False)"],
                "correctAnswer": 1,
                "explanation": "Audio says '吃苹果' (Eat an apple), but the picture shows a cup of coffee (喝咖啡/喝茶)."
            },
            {
                "id": 3,
                "part": 2,
                "type": "choice",
                "prompt": "Listen to the statement and select the matching image.",
                "audioText": "昨天我们去商店买衣服了。",
                "options": ["A. 🏬 商店 (Store / Shopping)", "B. ✈️ 机场 (Airport)", "C. 🏥 医院 (Hospital)"],
                "correctAnswer": 0,
                "explanation": "'去商店买衣服' means 'went to the store to buy clothes'."
            },
            {
                "id": 4,
                "part": 3,
                "type": "dialog",
                "prompt": "Listen to the dialogue and answer the question.",
                "audioText": "男：请问，现在几点了？ 女：现在十点十分。",
                "question": "现在几点了？ (What time is it?)",
                "options": ["A. 9:10", "B. 10:10", "C. 10:20"],
                "correctAnswer": 1,
                "explanation": "The woman clearly states '现在十点十分' (10:10)."
            },
            {
                "id": 5,
                "part": 4,
                "type": "comprehension",
                "prompt": "Listen to the conversation and choose the correct answer.",
                "audioText": "男：这个杯子多少钱？ 女：十八块钱一个。",
                "question": "杯子多少钱一个？ (How much is each cup?)",
                "options": ["A. 8 块", "B. 18 块", "C. 80 块"],
                "correctAnswer": 1,
                "explanation": "The woman replies '十八块' (18 yuan)."
            },
            {
                "id": 6,
                "part": 4,
                "type": "comprehension",
                "prompt": "Listen to the dialogue and answer.",
                "audioText": "女：你明天想去哪儿？ 男：我想去北京看长城。",
                "question": "男的明天想去哪儿？ (Where does the man want to go tomorrow?)",
                "options": ["A. 学校 (School)", "B. 北京 (Beijing)", "C. 饭馆 (Restaurant)"],
                "correctAnswer": 1,
                "explanation": "The man says '我想去北京看长城' (I want to go to Beijing)."
            },
            {
                "id": 7,
                "part": 4,
                "type": "comprehension",
                "prompt": "Listen to the conversation.",
                "audioText": "男：你喜欢吃中国菜吗？ 女：很喜欢，中国菜很好吃！",
                "question": "女的觉得中国菜怎么样？ (How does the woman like Chinese food?)",
                "options": ["A. 很好吃 (Very delicious)", "B. 不好吃 (Not delicious)", "C. 太辣了 (Too spicy)"],
                "correctAnswer": 0,
                "explanation": "The woman says '很喜欢，中国菜很好吃！'."
            },
            {
                "id": 8,
                "part": 4,
                "type": "comprehension",
                "prompt": "Listen to the conversation.",
                "audioText": "女：王老师在学校吗？ 男：在，他正在三楼给学生上课。",
                "question": "王老师在做什么？ (What is Teacher Wang doing?)",
                "options": ["A. 睡觉 (Sleeping)", "B. 上课 (Teaching class)", "C. 开车 (Driving)"],
                "correctAnswer": 1,
                "explanation": "The man notes '他正在三楼给学生上课' (He is teaching students on the 3rd floor)."
            },
            {
                "id": 9,
                "part": 4,
                "type": "comprehension",
                "prompt": "Listen to the conversation.",
                "audioText": "男：外面下雨了吗？ 女：没有下雨，天气非常好，很暖和。",
                "question": "今天天气怎么样？ (How is the weather today?)",
                "options": ["A. 下大雨 (Heavy rain)", "B. 很冷 (Very cold)", "C. 很好 (Very good)"],
                "correctAnswer": 2,
                "explanation": "The woman says '没有下雨，天气非常好'."
            },
            {
                "id": 10,
                "part": 4,
                "type": "comprehension",
                "prompt": "Listen to the final question.",
                "audioText": "女：你是坐出租车来的吗？ 男：不是，我是坐地铁来的。",
                "question": "男的是怎么来的？ (How did the man come?)",
                "options": ["A. 坐飞机 (By plane)", "B. 坐出租车 (By taxi)", "C. 坐地铁 (By subway)"],
                "correctAnswer": 2,
                "explanation": "The man states '不是，我是坐地铁来的' (I came by subway)."
            }
        ]
        
        tests.append({
            "id": f"hsk1-listening-{t_num}",
            "level": 1,
            "type": "listening",
            "testNumber": t_num,
            "title": f"HSK 1 Official Mock Test {t_num} · Listening (听力)",
            "durationMinutes": 20,
            "totalQuestions": len(questions),
            "questions": questions
        })

    # 5 Reading tests for HSK 1
    for t_num in range(1, 6):
        r_questions = [
            {
                "id": 1,
                "part": 1,
                "type": "match",
                "prompt": "Match the word to the picture. Is it correct?",
                "imageEmoji": "✈️",
                "text": "飞机 (fēijī)",
                "options": ["正确 (True)", "错误 (False)"],
                "correctAnswer": 0,
                "explanation": "'飞机' means airplane, matching the airplane emoji."
            },
            {
                "id": 2,
                "part": 1,
                "type": "match",
                "prompt": "Match the word to the picture. Is it correct?",
                "imageEmoji": "🐱",
                "text": "大狗 (dà gǒu)",
                "options": ["正确 (True)", "错误 (False)"],
                "correctAnswer": 1,
                "explanation": "'大狗' means big dog, but the picture shows a cat (猫)."
            },
            {
                "id": 3,
                "part": 2,
                "type": "fill_blank",
                "prompt": "Choose the best word to fill in the blank.",
                "sentence": "桌子上有两___书。",
                "options": ["A. 个", "B. 本", "C. 口", "D. 块"],
                "correctAnswer": 1,
                "explanation": "'本' (běn) is the dedicated measure word for bound books and notebooks."
            },
            {
                "id": 4,
                "part": 2,
                "type": "fill_blank",
                "prompt": "Choose the best word to fill in the blank.",
                "sentence": "我不会___中国菜，但是我很喜欢吃。",
                "options": ["A. 做", "B. 喝", "C. 读", "D. 听"],
                "correctAnswer": 0,
                "explanation": "'做中国菜' means to cook/make Chinese food."
            },
            {
                "id": 5,
                "part": 3,
                "type": "dialog_match",
                "prompt": "Match the best answer to: '你认识李老师吗？'",
                "question": "你认识李老师吗？ (Do you know Teacher Li?)",
                "options": [
                    "A. 认识，她是我的汉语老师。",
                    "B. 我想吃米饭。",
                    "C. 今天星期三。"
                ],
                "correctAnswer": 0,
                "explanation": "'认识，她是我的汉语老师' directly answers the question about knowing Teacher Li."
            },
            {
                "id": 6,
                "part": 3,
                "type": "dialog_match",
                "prompt": "Match the best answer to: '对不起！'",
                "question": "对不起！ (Sorry!)",
                "options": [
                    "A. 不客气。",
                    "B. 没关系。",
                    "C. 再见。"
                ],
                "correctAnswer": 1,
                "explanation": "'没关系' (That's all right / it doesn't matter) is the standard response to 对不起."
            },
            {
                "id": 7,
                "part": 4,
                "type": "comprehension",
                "prompt": "Read the statement and judge: '我爸爸是医生，他在大医院工作。'",
                "question": "爸爸在医院工作。 (Father works at the hospital.)",
                "options": ["正确 (True)", "错误 (False)"],
                "correctAnswer": 0,
                "explanation": "The passage confirms '他在大医院工作'."
            },
            {
                "id": 8,
                "part": 4,
                "type": "comprehension",
                "prompt": "Read the statement: '今天上午天气很冷，下午下雨了。'",
                "question": "今天下午天气很好。 (This afternoon the weather was great.)",
                "options": ["正确 (True)", "错误 (False)"],
                "correctAnswer": 1,
                "explanation": "The text states '下午下雨了' (it rained in the afternoon), so the statement is False."
            },
            {
                "id": 9,
                "part": 4,
                "type": "fill_blank",
                "prompt": "Choose the correct particle: '你是哪国人___？'",
                "sentence": "你是哪国人___？",
                "options": ["A. 呢", "B. 吗", "C. 的", "D. 了"],
                "correctAnswer": 0,
                "explanation": "With the question word 哪国人, use '呢' for rhetorical or conversational inquiry (or omit particle). '吗' is incorrect because it cannot be paired with interrogative pronouns."
            },
            {
                "id": 10,
                "part": 4,
                "type": "fill_blank",
                "prompt": "Choose the correct question word: '这个苹果___钱一斤？'",
                "sentence": "这个苹果___钱一斤？",
                "options": ["A. 多少", "B. 几", "C. 怎么", "D. 为什么"],
                "correctAnswer": 0,
                "explanation": "'多少钱' is the standard fixed expression for 'how much money'."
            }
        ]

        tests.append({
            "id": f"hsk1-reading-{t_num}",
            "level": 1,
            "type": "reading",
            "testNumber": t_num,
            "title": f"HSK 1 Official Mock Test {t_num} · Reading (阅读)",
            "durationMinutes": 17,
            "totalQuestions": len(r_questions),
            "questions": r_questions
        })

    # Writing test for HSK 1
    w_questions = [
        {
            "id": 1,
            "type": "unscramble",
            "prompt": "Unscramble the words into the correct grammatical sentence.",
            "words": ["是", "我", "学生"],
            "options": ["我是学生。", "学生是我。", "是学生我。"],
            "correctAnswer": 0,
            "explanation": "Subject + 是 + Object: 我是学生 (I am a student)."
        },
        {
            "id": 2,
            "type": "unscramble",
            "prompt": "Unscramble the words into correct sentence order.",
            "words": ["在", "看书", "他", "家里"],
            "options": ["他在家里看书。", "他看书在家里。", "在家里他看书。"],
            "correctAnswer": 0,
            "explanation": "Subject + 在 + Location + Verb: 他在家里看书。"
        },
        {
            "id": 3,
            "type": "stroke_count",
            "prompt": "How many strokes does the character '好' have?",
            "character": "好",
            "options": ["5 画", "6 画", "7 画", "8 画"],
            "correctAnswer": 1,
            "explanation": "'好' has 6 strokes: 女 (3 strokes: 撇点, 撇, 横) + 子 (3 strokes: 横撇, 弯钩, 横)."
        },
        {
            "id": 4,
            "type": "stroke_count",
            "prompt": "How many strokes does the character '你' have?",
            "character": "你",
            "options": ["6 画", "7 画", "8 画", "9 画"],
            "correctAnswer": 1,
            "explanation": "'你' has 7 strokes: 亻 (2) + 尔 (5)."
        },
        {
            "id": 5,
            "type": "character_match",
            "prompt": "Which character corresponds to pinyin 'shuǐ' (water)?",
            "pinyin": "shuǐ",
            "options": ["A. 火", "B. 水", "C. 木", "D. 金"],
            "correctAnswer": 1,
            "explanation": "'水' is shuǐ (water)."
        }
    ]
    tests.append({
        "id": "hsk1-writing-1",
        "level": 1,
        "type": "writing",
        "testNumber": 1,
        "title": "HSK 1 Writing & Hanzi Skills Test 1",
        "durationMinutes": 15,
        "totalQuestions": len(w_questions),
        "questions": w_questions
    })

    return tests

def build_hsk2_tests():
    tests = []
    
    # 5 Listening tests for HSK 2
    for t_num in range(1, 6):
        questions = [
            {
                "id": 1,
                "part": 1,
                "type": "true_false",
                "prompt": "Listen to the statement. Does it match the picture?",
                "audioText": "他跑得非常快，获得了第一名。",
                "imageEmoji": "🏃‍♂️",
                "imageDesc": "A person running fast",
                "options": ["正确 (True)", "错误 (False)"],
                "correctAnswer": 0,
                "explanation": "'他跑得非常快' (He runs very fast) matches the runner icon."
            },
            {
                "id": 2,
                "part": 1,
                "type": "true_false",
                "prompt": "Listen to the statement. Does it match the picture?",
                "audioText": "外面的雪下得很大，天很冷。",
                "imageEmoji": "☀️",
                "imageDesc": "Bright hot sun",
                "options": ["正确 (True)", "错误 (False)"],
                "correctAnswer": 1,
                "explanation": "Audio says '雪下得很大' (snowing heavily), but the picture shows bright sunshine."
            },
            {
                "id": 3,
                "part": 2,
                "type": "choice",
                "prompt": "Listen and select the matching image/location.",
                "audioText": "我们已经到了机场，准备上飞机。",
                "options": ["A. 🛫 机场 (Airport)", "B. 🚂 火车站 (Railway Station)", "C. 🏨 宾馆 (Hotel)"],
                "correctAnswer": 0,
                "explanation": "'到了机场，准备上飞机' indicates an airport setting."
            },
            {
                "id": 4,
                "part": 3,
                "type": "dialog",
                "prompt": "Listen to the dialogue and choose the correct answer.",
                "audioText": "男：你昨天晚上几点睡觉的？ 女：昨天看电影看得太晚了，十二点才睡。",
                "question": "女的昨天几点睡觉的？ (What time did the woman sleep yesterday?)",
                "options": ["A. 10:00", "B. 11:00", "C. 12:00"],
                "correctAnswer": 2,
                "explanation": "The woman says '十二点才睡' (didn't sleep until 12 o'clock)."
            },
            {
                "id": 5,
                "part": 4,
                "type": "comprehension",
                "prompt": "Listen to the conversation.",
                "audioText": "男：今天比昨天冷多了，你多穿点儿衣服吧。 女：好的，我穿这件红色的新毛衣。",
                "question": "女的准备穿什么衣服？ (What clothes does the woman prepare to wear?)",
                "options": ["A. 白色的衣服", "B. 红色的新毛衣", "C. 黑色的外套"],
                "correctAnswer": 1,
                "explanation": "The woman specifies '红色的新毛衣' (new red sweater)."
            },
            {
                "id": 6,
                "part": 4,
                "type": "comprehension",
                "prompt": "Listen to the conversation.",
                "audioText": "男：服务员，请问这道羊肉多少钱？ 女：六十八块钱一份。",
                "question": "羊肉多少钱一份？ (How much is the mutton?)",
                "options": ["A. 58 块", "B. 68 块", "C. 78 块"],
                "correctAnswer": 1,
                "explanation": "The waitress says '六十八块钱一份'."
            },
            {
                "id": 7,
                "part": 4,
                "type": "comprehension",
                "prompt": "Listen to the conversation.",
                "audioText": "女：你什么时候去上海旅游？ 男：下个月十号，我和妻子一起去。",
                "question": "男的和谁一起去上海？ (Who is the man going to Shanghai with?)",
                "options": ["A. 同学", "B. 妻子", "C. 医生"],
                "correctAnswer": 1,
                "explanation": "The man says '我和妻子一起去' (with my wife)."
            },
            {
                "id": 8,
                "part": 4,
                "type": "comprehension",
                "prompt": "Listen to the dialogue.",
                "audioText": "男：你的自行车呢？ 女：自行车坏了，我今天走着来上班的。",
                "question": "女的今天是怎么来上班的？ (How did the woman come to work today?)",
                "options": ["A. 骑自行车", "B. 坐公交车", "C. 走着来 (Walking)"],
                "correctAnswer": 2,
                "explanation": "The woman notes '我今天走着来上班的' (walked here today)."
            },
            {
                "id": 9,
                "part": 4,
                "type": "comprehension",
                "prompt": "Listen to the dialogue.",
                "audioText": "女：你生病了，医生怎么说？ 男：医生让我多休息，每天按时吃药。",
                "question": "医生让男的做什么？ (What did the doctor tell the man to do?)",
                "options": ["A. 多跑步", "B. 多休息、按时吃药", "C. 去旅游"],
                "correctAnswer": 1,
                "explanation": "The doctor advised him to rest more and take medicine on time."
            },
            {
                "id": 10,
                "part": 4,
                "type": "comprehension",
                "prompt": "Listen to the dialogue.",
                "audioText": "男：这本书你看完了吗？ 女：还没看完，我才看了五十页。",
                "question": "女的看了多少页？ (How many pages has she read?)",
                "options": ["A. 15 页", "B. 50 页", "C. 100 页"],
                "correctAnswer": 1,
                "explanation": "She states '我才看了五十页' (only read 50 pages)."
            }
        ]
        
        tests.append({
            "id": f"hsk2-listening-{t_num}",
            "level": 2,
            "type": "listening",
            "testNumber": t_num,
            "title": f"HSK 2 Official Mock Test {t_num} · Listening (听力)",
            "durationMinutes": 25,
            "totalQuestions": len(questions),
            "questions": questions
        })

    # 5 Reading tests for HSK 2
    for t_num in range(1, 6):
        r_questions = [
            {
                "id": 1,
                "part": 1,
                "type": "fill_blank",
                "prompt": "Choose the best word to complete the comparative sentence.",
                "sentence": "今天的天气___昨天好多了，阳光很明媚。",
                "options": ["A. 比", "B. 往", "C. 离", "D. 从"],
                "correctAnswer": 0,
                "explanation": "Comparative pattern: A + 比 + B + Adjective."
            },
            {
                "id": 2,
                "part": 1,
                "type": "fill_blank",
                "prompt": "Choose the appropriate conjunction pair.",
                "sentence": "___今天下大雨，___大家还是按时到了教室。",
                "options": [
                    "A. 虽然……但是……",
                    "B. 因为……所以……",
                    "C. 不但……而且……",
                    "D. 要么……要么……"
                ],
                "correctAnswer": 0,
                "explanation": "'虽然...但是...' expresses concession: Although it rained heavily, everyone arrived on time."
            },
            {
                "id": 3,
                "part": 2,
                "type": "fill_blank",
                "prompt": "Select the correct aspect particle.",
                "sentence": "你去___北京吗？那里的烤鸭特别好吃。",
                "options": ["A. 了", "B. 过", "C. 着", "D. 得"],
                "correctAnswer": 1,
                "explanation": "'去过' signifies past experiential aspect (have you ever been to Beijing?)."
            },
            {
                "id": 4,
                "part": 2,
                "type": "fill_blank",
                "prompt": "Fill in the blank with the appropriate preposition.",
                "sentence": "我们家___学校很近，走路只要五分钟。",
                "options": ["A. 离", "B. 往", "C. 比", "D. 给"],
                "correctAnswer": 0,
                "explanation": "'离' measures distance between two locations: A 离 B 很近."
            },
            {
                "id": 5,
                "part": 3,
                "type": "dialog_match",
                "prompt": "Match the appropriate response: '这项工作做完了吗？'",
                "question": "这项工作做完了吗？ (Is this job completed?)",
                "options": [
                    "A. 已经做完了，请您检查一下。",
                    "B. 我比他高。",
                    "C. 往右拐就是机场。"
                ],
                "correctAnswer": 0,
                "explanation": "'已经做完了' (Already completed) directly answers the completion inquiry."
            },
            {
                "id": 6,
                "part": 3,
                "type": "comprehension",
                "prompt": "Read the sentence and judge: '虽然这份工作很累，但是他觉得能学到很多东西。'",
                "question": "他不喜欢这份工作。 (He does not like this job.)",
                "options": ["正确 (True)", "错误 (False)"],
                "correctAnswer": 1,
                "explanation": "He feels he can learn a lot from it ('能学到很多东西'), so stating he dislikes it is False."
            },
            {
                "id": 7,
                "part": 4,
                "type": "comprehension",
                "prompt": "Read the passage: '王先生每天早上六点起床跑步，身体非常好，很少生病。'",
                "question": "王先生经常生病。 (Mr. Wang often gets sick.)",
                "options": ["正确 (True)", "错误 (False)"],
                "correctAnswer": 1,
                "explanation": "The text says '很少生病' (rarely gets sick), making the question statement False."
            },
            {
                "id": 8,
                "part": 4,
                "type": "fill_blank",
                "prompt": "Choose the correct degree complement particle.",
                "sentence": "她唱歌唱___真好听！",
                "options": ["A. 的", "B. 得", "C. 地", "D. 了"],
                "correctAnswer": 1,
                "explanation": "'得' (de) is the structural particle following a verb to introduce a degree complement."
            },
            {
                "id": 9,
                "part": 4,
                "type": "fill_blank",
                "prompt": "Choose the correct word for imminent action.",
                "sentence": "快点儿吧，电影___开始了！",
                "options": ["A. 快要", "B. 已经", "C. 正在", "D. 经常"],
                "correctAnswer": 0,
                "explanation": "'快要...了' indicates that the movie is about to start."
            },
            {
                "id": 10,
                "part": 4,
                "type": "fill_blank",
                "prompt": "Choose the correct negative imperative.",
                "sentence": "上课的时候___说话。",
                "options": ["A. 没", "B. 别", "C. 不", "D. 无"],
                "correctAnswer": 1,
                "explanation": "'别' (bié) is used for imperative commands: '别说话' (Don't speak)."
            }
        ]

        tests.append({
            "id": f"hsk2-reading-{t_num}",
            "level": 2,
            "type": "reading",
            "testNumber": t_num,
            "title": f"HSK 2 Official Mock Test {t_num} · Reading (阅读)",
            "durationMinutes": 22,
            "totalQuestions": len(r_questions),
            "questions": r_questions
        })

    # Writing test for HSK 2
    w_questions = [
        {
            "id": 1,
            "type": "unscramble",
            "prompt": "Unscramble into a correct comparative sentence.",
            "words": ["冷", "今天", "昨天", "比"],
            "options": ["今天比昨天冷。", "昨天比今天冷。", "今天冷比昨天。"],
            "correctAnswer": 0,
            "explanation": "A + 比 + B + Adjective: 今天比昨天冷 (Today is colder than yesterday)."
        },
        {
            "id": 2,
            "type": "unscramble",
            "prompt": "Unscramble into a correct degree complement sentence.",
            "words": ["跑", "他", "很快", "得"],
            "options": ["他跑得很快。", "他很快得跑。", "他得跑很快。"],
            "correctAnswer": 0,
            "explanation": "Subject + Verb + 得 + Degree: 他跑得很快。"
        },
        {
            "id": 3,
            "type": "unscramble",
            "prompt": "Unscramble into a correct ongoing state sentence.",
            "words": ["开着", "门", "呢"],
            "options": ["门开着呢。", "开着门呢。", "呢门开着。"],
            "correctAnswer": 0,
            "explanation": "Noun + Verb + 着 + 呢: 门开着呢 (The door is open)."
        },
        {
            "id": 4,
            "type": "character_stroke",
            "prompt": "How many strokes does the character '真' (zhēn) have?",
            "character": "真",
            "options": ["8 画", "9 画", "10 画", "11 画"],
            "correctAnswer": 2,
            "explanation": "'真' has exactly 10 strokes: 横, 竖, 横折, 横, 横, 横, 竖, 提, 撇, 点."
        },
        {
            "id": 5,
            "type": "character_stroke",
            "prompt": "How many strokes does the character '高' (gāo) have?",
            "character": "高",
            "options": ["9 画", "10 画", "11 画", "12 画"],
            "correctAnswer": 1,
            "explanation": "'高' has 10 strokes: 点, 横, 竖, 横折, 横, 竖, 横折钩, 竖, 横折, 横."
        }
    ]
    tests.append({
        "id": "hsk2-writing-1",
        "level": 2,
        "type": "writing",
        "testNumber": 1,
        "title": "HSK 2 Writing & Grammar Unscramble Test 1",
        "durationMinutes": 20,
        "totalQuestions": len(w_questions),
        "questions": w_questions
    })

    return tests

all_tests = build_hsk1_tests() + build_hsk2_tests()
print(f'Total Mock Tests created: {len(all_tests)}')

ts_tests = '''// HSK Plus Official Timed Mock Tests Database
// 5 Listening Tests + 5 Reading Tests + Writing Tests for HSK 1 and HSK 2

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
  level: 1 | 2
  type: TestType
  testNumber: number
  title: string
  durationMinutes: number
  totalQuestions: number
  questions: MockTestQuestion[]
}

export const MOCK_TESTS_DATA: MockTestEntry[] = ''' + json.dumps(all_tests, ensure_ascii=False, indent=2) + ''';

export function getMockTestsByLevel(level: 1 | 2): MockTestEntry[] {
  return MOCK_TESTS_DATA.filter(t => t.level === level)
}

export function getMockTestsByLevelAndType(level: 1 | 2, type: TestType): MockTestEntry[] {
  return MOCK_TESTS_DATA.filter(t => t.level === level && t.type === type)
}

export function getMockTestById(id: string): MockTestEntry | undefined {
  return MOCK_TESTS_DATA.find(t => t.id === id)
}
'''

with open('src/Data/mockTestsData.ts', 'w', encoding='utf-8') as f:
    f.write(ts_tests)

print('Generated src/Data/mockTestsData.ts successfully!')
