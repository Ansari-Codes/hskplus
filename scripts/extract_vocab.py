import fitz
import json
import re

# Standard stroke counts for common HSK characters
STROKE_MAP = {
    '我': 7, '我们': 7, '你': 7, '他': 5, '她': 6, '这': 7, '这儿': 7, '那': 6, '那儿': 6, '哪': 9, '哪儿': 9,
    '谁': 10, '什么': 4, '多少': 6, '几': 2, '怎么': 9, '怎么样': 9, '一': 1, '二': 2, '三': 3, '四': 5,
    '五': 4, '六': 4, '七': 2, '八': 2, '九': 2, '十': 2, '个': 3, '岁': 6, '本': 5, '些': 8,
    '块': 7, '不': 4, '没': 7, '很': 9, '太': 4, '都': 10, '一点儿': 1, '和': 8, '在': 6, '的': 8,
    '了': 2, '吗': 6, '呢': 8, '喂': 12, '家': 10, '学校': 10, '饭馆': 7, '商店': 11, '医院': 9, '火车站': 4,
    '中国': 4, '北京': 5, '上': 3, '下': 3, '前面': 9, '后面': 6, '里': 7, '今天': 4, '明天': 8, '昨天': 9,
    '上午': 3, '中午': 4, '下午': 3, '年': 6, '月': 4, '日': 4, '星期': 9, '点': 9, '分钟': 4, '现在': 8,
    '时候': 10, '爸爸': 8, '妈妈': 6, '儿子': 5, '女儿': 3, '老师': 6, '学生': 8, '同学': 6, '朋友': 8, '医生': 7,
    '先生': 6, '小姐': 3, '衣服': 6, '水': 4, '菜': 11, '米饭': 6, '水果': 4, '苹果': 8, '茶': 9, '杯子': 8,
    '钱': 10, '飞机': 8, '出租车': 5, '电视': 10, '电脑': 5, '电影': 5, '天气': 4, '猫': 11, '狗': 8, '东西': 8,
    '人': 2, '名字': 6, '书': 4, '汉语': 12, '字': 6, '桌子': 10, '椅子': 12, '谢谢': 12, '不客气': 4, '再见': 6,
    '请': 10, '对不起': 5, '没关系': 7, '是': 9, '有': 6, '看': 9, '听': 7, '说话': 8, '读': 10, '写': 5,
    '看见': 9, '叫': 5, '来': 7, '回': 6, '去': 5, '吃': 6, '喝': 12, '睡觉': 11, '买': 6, '开': 4,
    '坐': 7, '住': 7, '学习': 8, '工作': 7, '下雨': 3, '爱': 10, '喜欢': 6, '想': 13, '认识': 4, '会': 6,
    '能': 10, '好': 6, '多': 6, '少': 4, '冷': 7, '热': 10, '高兴': 10, '漂亮': 14, '大': 3, '小': 3,
    # HSK 2 characters
    '您': 11, '它': 5, '大家': 10, '每': 7, '为什么': 7, '零': 13, '两': 7, '百': 6, '千': 3, '第一': 11,
    '次': 6, '件': 6, '别': 7, '非常': 8, '也': 3, '还': 7, '最': 12, '真': 10, '正在': 8, '已经': 3,
    '一起': 1, '再': 6, '就': 12, '因为……所以……': 6, '虽然……但是……': 6, '从': 4, '比': 4, '往': 8, '离': 10,
    '得': 11, '着': 11, '过': 6, '吧': 7, '机场': 6, '教室': 9, '房间': 8, '路': 13, '左边': 5, '右边': 5,
    '外': 5, '旁边': 10, '一下': 1, '早上': 8, '晚上': 10, '去年': 5, '号': 5, '生日': 5, '时间': 10, '哥哥': 10,
    '姐姐': 8, '弟弟': 7, '妹妹': 8, '丈夫': 4, '妻子': 8, '孩子': 10, '男人': 7, '女人': 3, '服务员': 12, '服务员': 12,
    '鱼': 8, '羊肉': 6, '牛奶': 4, '鸡蛋': 7, '西瓜': 6, '咖啡': 8, '药': 9, '手机': 4, '手表': 4, '眼睛': 11,
    '身体': 7, '雪': 11, '事情': 8, '报纸': 7, '题': 15, '课': 10, '门': 3, '票': 11, '铅笔': 10, '颜色': 7,
    '问': 6, '走': 7, '进': 7, '出': 5, '跑步': 7, '到': 8, '穿': 9, '洗': 9, '给': 9, '找': 7, '懂': 15,
    '笑': 10, '回答': 6, '告诉': 7, '准备': 11, '开始': 4, '介绍': 4, '帮助': 7, '玩': 8, '送': 9, '等': 12,
    '让': 5, '起床': 7, '生病': 5, '休息': 6, '旅游': 6, '上班': 3, '跳舞': 14, '唱歌': 12, '游泳': 8, '打篮球': 5,
    '踢足球': 15, '完': 7, '觉得': 12, '希望': 11, '可以': 4, '要': 9, '可能': 10, '长': 4, '高': 10, '快': 7,
    '慢': 14, '远': 7, '近': 7, '白': 5, '黑': 12, '红': 6, '新': 13, '贵': 9, '便宜': 9, '晴': 12, '阴': 6,
    '错': 13, '快乐': 7, '对': 5
}

def clean_text(t):
    return re.sub(r'\s+', ' ', t).strip()

def get_hsk1():
    doc = fitz.open('HSK-1-Vocabulary.pdf')
    words = []
    cat = 'General'
    for page in doc:
        tabs = page.find_tables()
        for tab in tabs:
            for r in tab.extract():
                cells = [clean_text(c) for c in r if c and clean_text(c)]
                if not cells or 'Chinese' in cells or 'No.' in cells:
                    continue
                if len(cells) == 1 and not cells[0].isdigit():
                    cat = cells[0]
                    continue
                num_idx = -1
                for idx, c in enumerate(cells):
                    if c.isdigit() and 1 <= int(c) <= 150:
                        num_idx = idx
                        break
                if num_idx != -1:
                    num = int(cells[num_idx])
                    rem = cells[num_idx+1:]
                    if len(rem) >= 2:
                        char = rem[0]
                        pinyin = rem[1]
                        meaning = ' '.join(rem[2:]) if len(rem) > 2 else ''
                        words.append({
                            'id': num,
                            'character': char,
                            'pinyin': pinyin,
                            'meaning': meaning,
                            'category': cat,
                            'level': 1
                        })
    return words

def get_hsk2():
    doc = fitz.open('HSK-2-Vocabulary.pdf')
    words = []
    cat = 'General'
    for page in doc:
        tabs = page.find_tables()
        for tab in tabs:
            for r in tab.extract():
                cells = [clean_text(c) for c in r if c and clean_text(c)]
                if not cells or 'Chinese' in cells or 'No.' in cells:
                    continue
                if len(cells) == 1 and not cells[0].isdigit():
                    cat = cells[0]
                    continue
                num_idx = -1
                for idx, c in enumerate(cells):
                    if c.isdigit() and 1 <= int(c) <= 150:
                        num_idx = idx
                        break
                if num_idx != -1:
                    num = int(cells[num_idx])
                    rem = cells[num_idx+1:]
                    if len(rem) >= 2:
                        char = rem[0]
                        pinyin = rem[1]
                        meaning = ' '.join(rem[2:]) if len(rem) > 2 else ''
                        words.append({
                            'id': num + 150, # unique global id
                            'level_id': num,
                            'character': char,
                            'pinyin': pinyin,
                            'meaning': meaning,
                            'category': cat,
                            'level': 2
                        })
    return words

h1 = get_hsk1()
h2 = get_hsk2()

# Particle meanings fix
fixes_h1 = {
    '的': 'possessive or descriptive particle; structural particle indicating attribution',
    '了': 'aspect particle indicating completed action or change of situation',
    '吗': 'question particle for yes-no questions',
    '呢': 'modal particle for questions about location, follow-up, or ongoing state'
}
fixes_h2 = {
    '得': 'structural particle placed after a verb to describe the manner or degree',
    '着': 'aspect particle indicating an ongoing action or continuous state',
    '过': 'aspect particle indicating past experience (have done)',
    '吧': 'modal particle for suggestion, polite command, or consent',
    '因为……所以……': 'conjunction: because... therefore...',
    '虽然……但是……': 'conjunction: although... but...'
}

for w in h1:
    if w['character'] in fixes_h1:
        w['meaning'] = fixes_h1[w['character']]
    if not w['meaning']:
        w['meaning'] = 'particle'

for w in h2:
    if w['character'] in fixes_h2:
        w['meaning'] = fixes_h2[w['character']]
    if not w['meaning']:
        w['meaning'] = 'particle'

print(f'Total HSK 1 words: {len(h1)}, Total HSK 2 words: {len(h2)}')

with open('scripts/hsk1_extracted.json', 'w', encoding='utf-8') as f:
    json.dump(h1, f, ensure_ascii=False, indent=2)

with open('scripts/hsk2_extracted.json', 'w', encoding='utf-8') as f:
    json.dump(h2, f, ensure_ascii=False, indent=2)

print('JSON files saved successfully!')
