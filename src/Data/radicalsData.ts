// Chinese Radicals (部首 Bùshǒu) Database
// Comprehensive radicals for HSK 1, 2, and 3 mastery with categories & levels

export type RadicalCategory =
  | 'Nature & Elements'
  | 'People & Body'
  | 'Actions & Movement'
  | 'Structures & Space'
  | 'Food, Plants & Clothing'
  | 'Mind, Speech & Culture'

export interface ChineseRadical {
  id: string
  radical: string
  variants?: string[]
  pinyin: string
  nameZh: string
  nameEn: string
  category: RadicalCategory
  meaning: string
  strokes: number
  origin: string
  frequency: 'High' | 'Very High' | 'Medium'
  hskLevel: 1 | 2 | 3
  examples: {
    hanzi: string
    pinyin: string
    meaning: string
    level: 1 | 2 | 3
  }[]
  mnemonic: string
}

export const RADICALS_DATA: ChineseRadical[] = [
  {
    "id": "rad-water",
    "radical": "氵",
    "variants": [
      "水",
      "氺"
    ],
    "pinyin": "shuǐ",
    "nameZh": "三点水 (sāndiǎnshuǐ)",
    "nameEn": "Three Drops of Water Radical",
    "category": "Nature & Elements",
    "meaning": "Water, liquid, moisture, rivers, washing, beverages",
    "strokes": 3,
    "origin": "Originally an ancient pictograph of flowing water or meandering stream droplets. When placed on the left side of a character, it compresses into three curved drops.",
    "frequency": "Very High",
    "hskLevel": 1,
    "examples": [
      {
        "hanzi": "没",
        "pinyin": "méi",
        "meaning": "not have / sink",
        "level": 1
      },
      {
        "hanzi": "汉",
        "pinyin": "hàn",
        "meaning": "Han / Chinese language",
        "level": 1
      },
      {
        "hanzi": "洗",
        "pinyin": "xǐ",
        "meaning": "to wash",
        "level": 2
      },
      {
        "hanzi": "游泳",
        "pinyin": "yóu yǒng",
        "meaning": "to swim",
        "level": 2
      },
      {
        "hanzi": "渴",
        "pinyin": "kě",
        "meaning": "thirsty",
        "level": 3
      },
      {
        "hanzi": "河",
        "pinyin": "hé",
        "meaning": "river",
        "level": 3
      }
    ],
    "mnemonic": "Three droplets splashed on the left signal that the word relates to liquids, rivers, drinking, cleaning, or swimming."
  },
  {
    "id": "rad-fire",
    "radical": "灬",
    "variants": [
      "火"
    ],
    "pinyin": "huǒ",
    "nameZh": "四点底 (sìdiǎndǐ) / 火字旁",
    "nameEn": "Fire / Thermal Heat Radical",
    "category": "Nature & Elements",
    "meaning": "Fire, thermal heat, cooking, combustion, lamps",
    "strokes": 4,
    "origin": "Rising flames depicted in oracle bones. At the base of a character, the flames compress into four radiating ember dots (灬).",
    "frequency": "High",
    "hskLevel": 1,
    "examples": [
      {
        "hanzi": "热",
        "pinyin": "rè",
        "meaning": "hot",
        "level": 1
      },
      {
        "hanzi": "火",
        "pinyin": "huǒ",
        "meaning": "fire",
        "level": 1
      },
      {
        "hanzi": "灯",
        "pinyin": "dēng",
        "meaning": "lamp / light",
        "level": 3
      },
      {
        "hanzi": "煮",
        "pinyin": "zhǔ",
        "meaning": "to boil / cook",
        "level": 3
      },
      {
        "hanzi": "照顾",
        "pinyin": "zhào gù",
        "meaning": "to look after (illuminate)",
        "level": 3
      }
    ],
    "mnemonic": "Four ember dots or 火 indicate thermal heat, boiling, cooking, or radiant light."
  },
  {
    "id": "rad-sun",
    "radical": "日",
    "variants": [],
    "pinyin": "rì",
    "nameZh": "日字旁 (rìzìpáng)",
    "nameEn": "Sun / Daylight Radical",
    "category": "Nature & Elements",
    "meaning": "Sun, daylight, time, hours, calendar, brightness",
    "strokes": 4,
    "origin": "An ancient circle with a central sunspot dot, evolving into a rectangular box with a central solar ray.",
    "frequency": "Very High",
    "hskLevel": 1,
    "examples": [
      {
        "hanzi": "明",
        "pinyin": "míng",
        "meaning": "bright / tomorrow (sun + moon)",
        "level": 1
      },
      {
        "hanzi": "昨",
        "pinyin": "zuó",
        "meaning": "yesterday",
        "level": 1
      },
      {
        "hanzi": "时",
        "pinyin": "shí",
        "meaning": "time / hour",
        "level": 1
      },
      {
        "hanzi": "星",
        "pinyin": "xīng",
        "meaning": "star",
        "level": 1
      },
      {
        "hanzi": "晴",
        "pinyin": "qíng",
        "meaning": "sunny / clear sky",
        "level": 2
      }
    ],
    "mnemonic": "The sun rules time, calendar days, celestial brightness, and daytime hours."
  },
  {
    "id": "rad-earth",
    "radical": "土",
    "variants": [],
    "pinyin": "tǔ",
    "nameZh": "提土旁 (títǔpáng)",
    "nameEn": "Earth / Soil Radical",
    "category": "Nature & Elements",
    "meaning": "Soil, ground, territory, walls, dust, location",
    "strokes": 3,
    "origin": "A mound of clay on the flat ground. Represents the terrestrial surface and earthen architectural construction.",
    "frequency": "High",
    "hskLevel": 1,
    "examples": [
      {
        "hanzi": "在",
        "pinyin": "zài",
        "meaning": "at / located in (anchored on earth)",
        "level": 1
      },
      {
        "hanzi": "块",
        "pinyin": "kuài",
        "meaning": "lump of earth / piece / dollar",
        "level": 1
      },
      {
        "hanzi": "地",
        "pinyin": "dì / de",
        "meaning": "earth / ground / adverb particle",
        "level": 2
      },
      {
        "hanzi": "场",
        "pinyin": "chǎng",
        "meaning": "open ground (in 机场 airport)",
        "level": 2
      },
      {
        "hanzi": "坏",
        "pinyin": "huài",
        "meaning": "bad / crumbling earthen wall",
        "level": 3
      }
    ],
    "mnemonic": "Physical ground and terrain: locations, fields, clay, and building blocks."
  },
  {
    "id": "rad-wood",
    "radical": "木",
    "variants": [],
    "pinyin": "mù",
    "nameZh": "木字旁 (mùzìpáng)",
    "nameEn": "Tree / Wood Radical",
    "category": "Nature & Elements",
    "meaning": "Tree, wood, timber, furniture, wooden tools, flora",
    "strokes": 4,
    "origin": "A drawing of a tree showing trunk, upper branches spreading upward, and roots anchoring downward.",
    "frequency": "Very High",
    "hskLevel": 1,
    "examples": [
      {
        "hanzi": "本",
        "pinyin": "běn",
        "meaning": "book / origin (tree root mark)",
        "level": 1
      },
      {
        "hanzi": "杯",
        "pinyin": "bēi",
        "meaning": "cup (wooden goblet)",
        "level": 1
      },
      {
        "hanzi": "桌",
        "pinyin": "zhuō",
        "meaning": "table / desk",
        "level": 1
      },
      {
        "hanzi": "机",
        "pinyin": "jī",
        "meaning": "machine / plane (wooden loom)",
        "level": 1
      },
      {
        "hanzi": "校",
        "pinyin": "xiào",
        "meaning": "school building",
        "level": 1
      },
      {
        "hanzi": "树",
        "pinyin": "shù",
        "meaning": "tree",
        "level": 3
      }
    ],
    "mnemonic": "Look for the tree trunk and roots. Governs timber, desks, trees, and instruments."
  },
  {
    "id": "rad-metal",
    "radical": "钅",
    "variants": [
      "金"
    ],
    "pinyin": "jīn",
    "nameZh": "金字旁 (jīnzìpáng)",
    "nameEn": "Metal / Gold Radical",
    "category": "Nature & Elements",
    "meaning": "Metal, coins, money, metallic instruments, sharp tools",
    "strokes": 5,
    "origin": "Earth containing veins and nuggets of precious gold ore. Simplified down to 5 strokes.",
    "frequency": "High",
    "hskLevel": 1,
    "examples": [
      {
        "hanzi": "钱",
        "pinyin": "qián",
        "meaning": "money / bronze coins",
        "level": 1
      },
      {
        "hanzi": "错",
        "pinyin": "cuò",
        "meaning": "wrong / inlay metal",
        "level": 2
      },
      {
        "hanzi": "钟",
        "pinyin": "zhōng",
        "meaning": "clock / bronze bell",
        "level": 2
      },
      {
        "hanzi": "铁",
        "pinyin": "tiě",
        "meaning": "iron (in 地铁 subway)",
        "level": 3
      },
      {
        "hanzi": "银行",
        "pinyin": "yín háng",
        "meaning": "bank (silver guild)",
        "level": 3
      }
    ],
    "mnemonic": "Coins, iron rails, keys, clocks, and heavy metals all carry the 钅 component."
  },
  {
    "id": "rad-rain",
    "radical": "雨",
    "variants": [],
    "pinyin": "yǔ",
    "nameZh": "雨字头 (yǔzìtóu)",
    "nameEn": "Rain / Meteorology Radical",
    "category": "Nature & Elements",
    "meaning": "Rain, weather phenomena, clouds, snow, atmospheric conditions",
    "strokes": 8,
    "origin": "A cloud canopy in the sky releasing four falling raindrops.",
    "frequency": "High",
    "hskLevel": 1,
    "examples": [
      {
        "hanzi": "雨",
        "pinyin": "yǔ",
        "meaning": "rain (in 下雨)",
        "level": 1
      },
      {
        "hanzi": "雪",
        "pinyin": "xuě",
        "meaning": "snow (in 下雪)",
        "level": 2
      },
      {
        "hanzi": "零",
        "pinyin": "líng",
        "meaning": "zero (gentle drops)",
        "level": 1
      },
      {
        "hanzi": "需要",
        "pinyin": "xū yào",
        "meaning": "to need (waiting for rain)",
        "level": 3
      }
    ],
    "mnemonic": "Four raindrops falling from an overarching sky cloud: indicates precipitation and weather."
  },
  {
    "id": "rad-stone",
    "radical": "石",
    "variants": [],
    "pinyin": "shí",
    "nameZh": "石字旁 (shízìpáng)",
    "nameEn": "Stone / Mineral Radical",
    "category": "Nature & Elements",
    "meaning": "Stone, rock, hard minerals, bowls, masonry",
    "strokes": 5,
    "origin": "A rock fallen at the foot of an overhanging cliff (厂).",
    "frequency": "Medium",
    "hskLevel": 3,
    "examples": [
      {
        "hanzi": "碗",
        "pinyin": "wǎn",
        "meaning": "bowl (carved of stone)",
        "level": 3
      },
      {
        "hanzi": "破",
        "pinyin": "pò",
        "meaning": "broken / shattered stone",
        "level": 3
      },
      {
        "hanzi": "码",
        "pinyin": "mǎ",
        "meaning": "code / yard / counter stone",
        "level": 3
      }
    ],
    "mnemonic": "A cliff with a heavy stone below: ceramics, bowls, hardness, and minerals."
  },
  {
    "id": "rad-mountain",
    "radical": "山",
    "variants": [],
    "pinyin": "shān",
    "nameZh": "山字旁 (shānzìpáng)",
    "nameEn": "Mountain Radical",
    "category": "Nature & Elements",
    "meaning": "Mountain, peaks, cliffs, topography",
    "strokes": 3,
    "origin": "A pictograph of three jagged mountain summits rising from the earth.",
    "frequency": "Medium",
    "hskLevel": 2,
    "examples": [
      {
        "hanzi": "岁",
        "pinyin": "suì",
        "meaning": "years of age (mountain passage)",
        "level": 1
      },
      {
        "hanzi": "出",
        "pinyin": "chū",
        "meaning": "to exit / come out",
        "level": 1
      },
      {
        "hanzi": "爬山",
        "pinyin": "pá shān",
        "meaning": "to climb mountain",
        "level": 3
      }
    ],
    "mnemonic": "Three peaks standing tall: mountains, heights, and age cycles."
  },
  {
    "id": "rad-person",
    "radical": "亻",
    "variants": [
      "人"
    ],
    "pinyin": "rén",
    "nameZh": "单人旁 (dānrénpáng)",
    "nameEn": "Standing Person Radical",
    "category": "People & Body",
    "meaning": "Human, person, interpersonal relationships, professions",
    "strokes": 2,
    "origin": "Derived from 人 (person). Compressed on the left into an upright standing figure with torso and arm.",
    "frequency": "Very High",
    "hskLevel": 1,
    "examples": [
      {
        "hanzi": "你",
        "pinyin": "nǐ",
        "meaning": "you",
        "level": 1
      },
      {
        "hanzi": "他",
        "pinyin": "tā",
        "meaning": "he / him",
        "level": 1
      },
      {
        "hanzi": "们",
        "pinyin": "men",
        "meaning": "plural suffix",
        "level": 1
      },
      {
        "hanzi": "住",
        "pinyin": "zhù",
        "meaning": "to live / dwell",
        "level": 1
      },
      {
        "hanzi": "休",
        "pinyin": "xiū",
        "meaning": "to rest (person against tree)",
        "level": 2
      },
      {
        "hanzi": "借",
        "pinyin": "jiè",
        "meaning": "to borrow / lend",
        "level": 3
      }
    ],
    "mnemonic": "An upright standing figure: always connects directly to people, pronouns, and occupations."
  },
  {
    "id": "rad-female",
    "radical": "女",
    "variants": [],
    "pinyin": "nǚ",
    "nameZh": "女字旁 (nǚzìpáng)",
    "nameEn": "Woman / Female Radical",
    "category": "People & Body",
    "meaning": "Woman, female, kinship relationships, elegance, marriage",
    "strokes": 3,
    "origin": "An ancient sketch of a kneeling woman with gracefully crossed hands.",
    "frequency": "Very High",
    "hskLevel": 1,
    "examples": [
      {
        "hanzi": "她",
        "pinyin": "tā",
        "meaning": "she / her",
        "level": 1
      },
      {
        "hanzi": "妈妈",
        "pinyin": "mā ma",
        "meaning": "mother",
        "level": 1
      },
      {
        "hanzi": "好",
        "pinyin": "hǎo",
        "meaning": "good (woman + child)",
        "level": 1
      },
      {
        "hanzi": "妹妹",
        "pinyin": "mèi mei",
        "meaning": "younger sister",
        "level": 2
      },
      {
        "hanzi": "妻子",
        "pinyin": "qī zi",
        "meaning": "wife",
        "level": 2
      },
      {
        "hanzi": "奶奶",
        "pinyin": "nǎi nai",
        "meaning": "grandmother",
        "level": 3
      }
    ],
    "mnemonic": "The female archetype: building block for kinship terms (mother, sisters, grandmother) and goodness (好)."
  },
  {
    "id": "rad-child",
    "radical": "子",
    "variants": [],
    "pinyin": "zǐ",
    "nameZh": "子字旁 (zǐzìpáng)",
    "nameEn": "Child / Infant Radical",
    "category": "People & Body",
    "meaning": "Child, offspring, small item suffix, education",
    "strokes": 3,
    "origin": "A newborn swaddled infant with outspread arms and kicking legs.",
    "frequency": "High",
    "hskLevel": 1,
    "examples": [
      {
        "hanzi": "字",
        "pinyin": "zì",
        "meaning": "character (child under roof taught)",
        "level": 1
      },
      {
        "hanzi": "儿子",
        "pinyin": "ér zi",
        "meaning": "son",
        "level": 1
      },
      {
        "hanzi": "孩子",
        "pinyin": "hái zi",
        "meaning": "child / children",
        "level": 2
      },
      {
        "hanzi": "学习",
        "pinyin": "xué xí",
        "meaning": "to study (child guided)",
        "level": 1
      }
    ],
    "mnemonic": "A child being nurtured: education, youth, and noun suffix (椅子, 桌子)."
  },
  {
    "id": "rad-mouth",
    "radical": "口",
    "variants": [],
    "pinyin": "kǒu",
    "nameZh": "口字旁 (kǒuzìpáng)",
    "nameEn": "Mouth Radical",
    "category": "People & Body",
    "meaning": "Mouth, vocal sounds, eating, drinking, questions, speech",
    "strokes": 3,
    "origin": "An ancient open human mouth.",
    "frequency": "Very High",
    "hskLevel": 1,
    "examples": [
      {
        "hanzi": "吃",
        "pinyin": "chī",
        "meaning": "to eat",
        "level": 1
      },
      {
        "hanzi": "喝",
        "pinyin": "hē",
        "meaning": "to drink",
        "level": 1
      },
      {
        "hanzi": "叫",
        "pinyin": "jiào",
        "meaning": "to be called / shout",
        "level": 1
      },
      {
        "hanzi": "吗",
        "pinyin": "ma",
        "meaning": "question marker",
        "level": 1
      },
      {
        "hanzi": "呢",
        "pinyin": "ne",
        "meaning": "follow-up marker",
        "level": 1
      },
      {
        "hanzi": "唱",
        "pinyin": "chàng",
        "meaning": "to sing",
        "level": 2
      }
    ],
    "mnemonic": "An open mouth: ingestion, vocal expression, and grammar question particles."
  },
  {
    "id": "rad-eye",
    "radical": "目",
    "variants": [],
    "pinyin": "mù",
    "nameZh": "目字旁 (mùzìpáng)",
    "nameEn": "Eye / Vision Radical",
    "category": "People & Body",
    "meaning": "Eye, vision, looking, staring, blindness, sleep",
    "strokes": 5,
    "origin": "A horizontal human eye with iris and pupil, later oriented vertically.",
    "frequency": "High",
    "hskLevel": 1,
    "examples": [
      {
        "hanzi": "看",
        "pinyin": "kàn",
        "meaning": "to look (hand over eye)",
        "level": 1
      },
      {
        "hanzi": "睛",
        "pinyin": "jīng",
        "meaning": "pupil (in 眼睛 eyes)",
        "level": 2
      },
      {
        "hanzi": "睡",
        "pinyin": "shuì",
        "meaning": "to sleep (drooping eyelid)",
        "level": 2
      },
      {
        "hanzi": "眼",
        "pinyin": "yǎn",
        "meaning": "eye",
        "level": 2
      }
    ],
    "mnemonic": "A vertical eye with double pupils: looking, watching, sleeping, and optics."
  },
  {
    "id": "rad-ear",
    "radical": "耳",
    "variants": [],
    "pinyin": "ěr",
    "nameZh": "耳字旁 (ěrzìpáng)",
    "nameEn": "Ear / Hearing Radical",
    "category": "People & Body",
    "meaning": "Ear, hearing, auditory perception, listening",
    "strokes": 6,
    "origin": "A drawing of the human outer ear lobe and auditory canal.",
    "frequency": "Medium",
    "hskLevel": 1,
    "examples": [
      {
        "hanzi": "听",
        "pinyin": "tīng",
        "meaning": "to listen",
        "level": 1
      },
      {
        "hanzi": "耳朵",
        "pinyin": "ěr duo",
        "meaning": "ears",
        "level": 3
      },
      {
        "hanzi": "聊天",
        "pinyin": "liáo tiān",
        "meaning": "to chat (ear listening)",
        "level": 3
      },
      {
        "hanzi": "聪明",
        "pinyin": "cōng ming",
        "meaning": "clever / sharp hearing",
        "level": 3
      }
    ],
    "mnemonic": "An ear listening to sound: hearing, chatting, and intelligent perception."
  },
  {
    "id": "rad-foot",
    "radical": "𧾷",
    "variants": [
      "足"
    ],
    "pinyin": "zú",
    "nameZh": "足字旁 (zúzìpáng)",
    "nameEn": "Foot / Leg Radical",
    "category": "People & Body",
    "meaning": "Foot, stepping, running, jumping, kicking, dancing",
    "strokes": 7,
    "origin": "A human leg showing kneecap, shin, and foot.",
    "frequency": "High",
    "hskLevel": 2,
    "examples": [
      {
        "hanzi": "踢",
        "pinyin": "tī",
        "meaning": "to kick (in 踢足球)",
        "level": 2
      },
      {
        "hanzi": "跑",
        "pinyin": "pǎo",
        "meaning": "to run",
        "level": 2
      },
      {
        "hanzi": "跳",
        "pinyin": "tiào",
        "meaning": "to jump (in 跳舞)",
        "level": 2
      },
      {
        "hanzi": "路",
        "pinyin": "lù",
        "meaning": "road / path where feet walk",
        "level": 2
      },
      {
        "hanzi": "跟",
        "pinyin": "gēn",
        "meaning": "heel / to follow / with",
        "level": 3
      }
    ],
    "mnemonic": "Foot movements: running, jumping, kicking soccer balls, and following behind."
  },
  {
    "id": "rad-body-flesh",
    "radical": "月",
    "variants": [
      "⺼"
    ],
    "pinyin": "ròu",
    "nameZh": "肉月旁 (ròuyuèpáng)",
    "nameEn": "Flesh / Body Organ Radical",
    "category": "People & Body",
    "meaning": "Flesh, human organs, bodily parts, plumpness",
    "strokes": 4,
    "origin": "Derived from 肉 (meat/flesh), stylized into a crescent Moon shape.",
    "frequency": "High",
    "hskLevel": 1,
    "examples": [
      {
        "hanzi": "朋",
        "pinyin": "péng",
        "meaning": "friend",
        "level": 1
      },
      {
        "hanzi": "腿",
        "pinyin": "tuǐ",
        "meaning": "leg",
        "level": 3
      },
      {
        "hanzi": "胖",
        "pinyin": "pàng",
        "meaning": "fat / plump",
        "level": 3
      },
      {
        "hanzi": "脸",
        "pinyin": "liǎn",
        "meaning": "face",
        "level": 3
      },
      {
        "hanzi": "脖子",
        "pinyin": "bó zi",
        "meaning": "neck",
        "level": 3
      }
    ],
    "mnemonic": "Flesh and body parts: legs, face, neck, and organs."
  },
  {
    "id": "rad-illness",
    "radical": "疒",
    "variants": [],
    "pinyin": "bìng",
    "nameZh": "病字旁 (bìngzìpáng)",
    "nameEn": "Illness / Sickness Radical",
    "category": "People & Body",
    "meaning": "Sickness, disease, pain, fever, medical symptoms",
    "strokes": 5,
    "origin": "A patient resting on a sickbed with beads of sweat on the brow.",
    "frequency": "Medium",
    "hskLevel": 2,
    "examples": [
      {
        "hanzi": "病",
        "pinyin": "bìng",
        "meaning": "illness / sick (看病)",
        "level": 2
      },
      {
        "hanzi": "疼",
        "pinyin": "téng",
        "meaning": "painful / ache",
        "level": 3
      },
      {
        "hanzi": "瘦",
        "pinyin": "shòu",
        "meaning": "thin / lean",
        "level": 3
      },
      {
        "hanzi": "痛",
        "pinyin": "tòng",
        "meaning": "pain / hurt",
        "level": 3
      }
    ],
    "mnemonic": "A hospital sickbed canopy: any word with 疒 connects directly to illness or bodily pain."
  },
  {
    "id": "rad-hand",
    "radical": "扌",
    "variants": [
      "手"
    ],
    "pinyin": "shǒu",
    "nameZh": "提手旁 (tíshǒupáng)",
    "nameEn": "Action Hand Radical",
    "category": "Actions & Movement",
    "meaning": "Hand, manual action, grasping, throwing, pushing, holding",
    "strokes": 3,
    "origin": "A stylized hand with five fingers. On the left side, it forms a rising flick and hook.",
    "frequency": "Very High",
    "hskLevel": 1,
    "examples": [
      {
        "hanzi": "打",
        "pinyin": "dǎ",
        "meaning": "to hit / make phone call",
        "level": 1
      },
      {
        "hanzi": "找",
        "pinyin": "zhǎo",
        "meaning": "to look for / give change",
        "level": 2
      },
      {
        "hanzi": "拿",
        "pinyin": "ná",
        "meaning": "to hold / take",
        "level": 3
      },
      {
        "hanzi": "推",
        "pinyin": "tuī",
        "meaning": "to push",
        "level": 3
      },
      {
        "hanzi": "拉",
        "pinyin": "lā",
        "meaning": "to pull",
        "level": 3
      }
    ],
    "mnemonic": "Manual dexterity: hands pulling, hitting, pushing, taking, or searching."
  },
  {
    "id": "rad-movement",
    "radical": "辶",
    "variants": [
      "辵"
    ],
    "pinyin": "chuò",
    "nameZh": "走之底 (zǒuzhīdǐ)",
    "nameEn": "Walking / Movement Radical",
    "category": "Actions & Movement",
    "meaning": "Walking, road, travelling, distance, passing time",
    "strokes": 3,
    "origin": "A foot taking sequential steps along a crossroads intersection.",
    "frequency": "Very High",
    "hskLevel": 1,
    "examples": [
      {
        "hanzi": "这",
        "pinyin": "zhè",
        "meaning": "this (approached near)",
        "level": 1
      },
      {
        "hanzi": "进",
        "pinyin": "jìn",
        "meaning": "to enter / step forward",
        "level": 2
      },
      {
        "hanzi": "远",
        "pinyin": "yuǎn",
        "meaning": "far / distant",
        "level": 2
      },
      {
        "hanzi": "近",
        "pinyin": "jìn",
        "meaning": "near / close",
        "level": 2
      },
      {
        "hanzi": "过",
        "pinyin": "guò",
        "meaning": "to pass / cross",
        "level": 2
      },
      {
        "hanzi": "迟到",
        "pinyin": "chí dào",
        "meaning": "to arrive late",
        "level": 3
      }
    ],
    "mnemonic": "Footsteps along a road: passing, entering, travelling distance, and moving."
  },
  {
    "id": "rad-step",
    "radical": "彳",
    "variants": [],
    "pinyin": "chì",
    "nameZh": "双人旁 (shuāngrénpáng)",
    "nameEn": "Step / Slow Walk Radical",
    "category": "Actions & Movement",
    "meaning": "Stepping, pacing, walking slowly along a path",
    "strokes": 3,
    "origin": "The left half of the ancient character 行 (crossroads), showing a foot taking a stride.",
    "frequency": "High",
    "hskLevel": 1,
    "examples": [
      {
        "hanzi": "很",
        "pinyin": "hěn",
        "meaning": "very",
        "level": 1
      },
      {
        "hanzi": "得",
        "pinyin": "de",
        "meaning": "manner complement particle",
        "level": 2
      },
      {
        "hanzi": "行",
        "pinyin": "xíng",
        "meaning": "to walk / alright",
        "level": 2
      },
      {
        "hanzi": "往",
        "pinyin": "wǎng",
        "meaning": "towards / to go",
        "level": 2
      }
    ],
    "mnemonic": "A person pacing forward along a walkway: going towards, stepping, and progressing."
  },
  {
    "id": "rad-knife",
    "radical": "刂",
    "variants": [
      "刀"
    ],
    "pinyin": "dāo",
    "nameZh": "立刀旁 (lìdāopáng)",
    "nameEn": "Knife / Blade Radical",
    "category": "Actions & Movement",
    "meaning": "Knife, blade, cutting, separating, decisive boundaries",
    "strokes": 2,
    "origin": "Drawing of a curved cleaver blade.",
    "frequency": "High",
    "hskLevel": 2,
    "examples": [
      {
        "hanzi": "别",
        "pinyin": "bié",
        "meaning": "do not / separate",
        "level": 2
      },
      {
        "hanzi": "到",
        "pinyin": "dào",
        "meaning": "to arrive (reach sharp destination)",
        "level": 2
      },
      {
        "hanzi": "刚",
        "pinyin": "gāng",
        "meaning": "just / hard (steel blade)",
        "level": 3
      },
      {
        "hanzi": "划",
        "pinyin": "huà",
        "meaning": "to delimit / plan",
        "level": 3
      }
    ],
    "mnemonic": "A vertical blade on the right: cut, slice, sever, or set sharp boundaries."
  },
  {
    "id": "rad-strength",
    "radical": "力",
    "variants": [],
    "pinyin": "lì",
    "nameZh": "力字旁 (lìzìpáng)",
    "nameEn": "Strength / Power Radical",
    "category": "Actions & Movement",
    "meaning": "Physical strength, effort, labor, power, capability",
    "strokes": 2,
    "origin": "A plough being pushed into heavy soil or a flexed muscular arm.",
    "frequency": "High",
    "hskLevel": 2,
    "examples": [
      {
        "hanzi": "男",
        "pinyin": "nán",
        "meaning": "man (strength in field 田+力)",
        "level": 2
      },
      {
        "hanzi": "努力",
        "pinyin": "nǔ lì",
        "meaning": "hardworking / striving",
        "level": 3
      },
      {
        "hanzi": "帮助",
        "pinyin": "bāng zhù",
        "meaning": "to help (add strength 助)",
        "level": 2
      }
    ],
    "mnemonic": "Muscular force: working fields, striving hard, and offering assistance."
  },
  {
    "id": "rad-vehicle",
    "radical": "车",
    "variants": [
      "車"
    ],
    "pinyin": "chē",
    "nameZh": "车字旁 (chēzìpáng)",
    "nameEn": "Cart / Vehicle Radical",
    "category": "Actions & Movement",
    "meaning": "Cart, carriage, vehicle, wheels, transportation",
    "strokes": 4,
    "origin": "An aerial view of a two-wheeled chariot with central axle and draught pole.",
    "frequency": "High",
    "hskLevel": 1,
    "examples": [
      {
        "hanzi": "出租车",
        "pinyin": "chū zū chē",
        "meaning": "taxi",
        "level": 1
      },
      {
        "hanzi": "辆",
        "pinyin": "liàng",
        "meaning": "measure word for vehicles",
        "level": 2
      },
      {
        "hanzi": "轮",
        "pinyin": "lún",
        "meaning": "wheel",
        "level": 3
      },
      {
        "hanzi": "转",
        "pinyin": "zhuǎn",
        "meaning": "to turn (like carriage wheel)",
        "level": 3
      }
    ],
    "mnemonic": "A wheeled chariot: vehicles, wheels, rotating, and transport."
  },
  {
    "id": "rad-roof",
    "radical": "宀",
    "variants": [],
    "pinyin": "mián",
    "nameZh": "宝盖头 (bǎogàitóu)",
    "nameEn": "Roof / Shelter Radical",
    "category": "Structures & Space",
    "meaning": "Roof, house, room, shelter, domestic safety",
    "strokes": 3,
    "origin": "Gabled rooftop with eave slopes over sheltering walls.",
    "frequency": "Very High",
    "hskLevel": 1,
    "examples": [
      {
        "hanzi": "家",
        "pinyin": "jiā",
        "meaning": "home / family (roof + pig)",
        "level": 1
      },
      {
        "hanzi": "字",
        "pinyin": "zì",
        "meaning": "character (child taught under roof)",
        "level": 1
      },
      {
        "hanzi": "客",
        "pinyin": "kè",
        "meaning": "guest at home",
        "level": 1
      },
      {
        "hanzi": "安静",
        "pinyin": "ān jìng",
        "meaning": "quiet / peaceful (woman under roof)",
        "level": 2
      },
      {
        "hanzi": "室",
        "pinyin": "shì",
        "meaning": "room (in 教室 classroom)",
        "level": 2
      }
    ],
    "mnemonic": "A protective roof: home, families, quiet rooms, and safe shelter."
  },
  {
    "id": "rad-enclosure",
    "radical": "囗",
    "variants": [],
    "pinyin": "wéi",
    "nameZh": "大口框 (dàkǒukuāng)",
    "nameEn": "Enclosure Radical",
    "category": "Structures & Space",
    "meaning": "Enclosure, boundary, border wall, surrounded space",
    "strokes": 3,
    "origin": "A continuous defensive perimeter wall completely enclosing what lies within.",
    "frequency": "High",
    "hskLevel": 1,
    "examples": [
      {
        "hanzi": "国",
        "pinyin": "guó",
        "meaning": "country (jade inside walls)",
        "level": 1
      },
      {
        "hanzi": "回",
        "pinyin": "huí",
        "meaning": "to return inside",
        "level": 1
      },
      {
        "hanzi": "四",
        "pinyin": "sì",
        "meaning": "four",
        "level": 1
      },
      {
        "hanzi": "公园",
        "pinyin": "gōng yuán",
        "meaning": "park / garden enclosure",
        "level": 3
      }
    ],
    "mnemonic": "A boundary fence: countries, circular enclosures, and returning within."
  },
  {
    "id": "rad-door",
    "radical": "门",
    "variants": [
      "門"
    ],
    "pinyin": "mén",
    "nameZh": "门字框 (ménzìkuāng)",
    "nameEn": "Door / Gateway Radical",
    "category": "Structures & Space",
    "meaning": "Door, gate, entrance, asking through doorway, rooms",
    "strokes": 3,
    "origin": "Two hinged leaves of a traditional Chinese entryway gate.",
    "frequency": "High",
    "hskLevel": 1,
    "examples": [
      {
        "hanzi": "问",
        "pinyin": "wèn",
        "meaning": "to ask (mouth at door)",
        "level": 1
      },
      {
        "hanzi": "门",
        "pinyin": "mén",
        "meaning": "door / gate",
        "level": 1
      },
      {
        "hanzi": "房间",
        "pinyin": "fáng jiān",
        "meaning": "room / space between doors",
        "level": 2
      },
      {
        "hanzi": "闭",
        "pinyin": "bì",
        "meaning": "to close / shut door",
        "level": 3
      }
    ],
    "mnemonic": "A gateway frame: doors, rooms, opening, closing, and asking questions."
  },
  {
    "id": "rad-shed",
    "radical": "广",
    "variants": [],
    "pinyin": "guǎng",
    "nameZh": "广字旁 (guǎngzìpáng)",
    "nameEn": "Broad Shed / Pavilion Radical",
    "category": "Structures & Space",
    "meaning": "Building with open side, store, shop, pavilion, wide space",
    "strokes": 3,
    "origin": "A large building built against a cliff side, open on one flank.",
    "frequency": "Medium",
    "hskLevel": 1,
    "examples": [
      {
        "hanzi": "商店",
        "pinyin": "shāng diàn",
        "meaning": "shop / store",
        "level": 1
      },
      {
        "hanzi": "厨房",
        "pinyin": "chú fáng",
        "meaning": "kitchen",
        "level": 3
      },
      {
        "hanzi": "底",
        "pinyin": "dǐ",
        "meaning": "bottom / base of shed",
        "level": 3
      }
    ],
    "mnemonic": "A commercial shop or open pavilion: stores, kitchens, and public halls."
  },
  {
    "id": "rad-grass",
    "radical": "艹",
    "variants": [
      "艸"
    ],
    "pinyin": "cǎo",
    "nameZh": "草字头 (cǎozìtóu)",
    "nameEn": "Grass / Botanical Radical",
    "category": "Food, Plants & Clothing",
    "meaning": "Grass, vegetation, herbal plants, flowers, tea, vegetables",
    "strokes": 3,
    "origin": "Twin sprouts of green grass emerging from the soil.",
    "frequency": "Very High",
    "hskLevel": 1,
    "examples": [
      {
        "hanzi": "茶",
        "pinyin": "chá",
        "meaning": "tea leaves",
        "level": 1
      },
      {
        "hanzi": "菜",
        "pinyin": "cài",
        "meaning": "vegetable / dish",
        "level": 1
      },
      {
        "hanzi": "苹果",
        "pinyin": "píng guǒ",
        "meaning": "apple",
        "level": 1
      },
      {
        "hanzi": "花",
        "pinyin": "huā",
        "meaning": "flower",
        "level": 2
      },
      {
        "hanzi": "草",
        "pinyin": "cǎo",
        "meaning": "grass",
        "level": 3
      }
    ],
    "mnemonic": "Twin sprouted green leaves on top: tea, fruits, flowers, and vegetables."
  },
  {
    "id": "rad-food",
    "radical": "饣",
    "variants": [
      "食",
      "飠"
    ],
    "pinyin": "shí",
    "nameZh": "食字旁 (shízìpáng)",
    "nameEn": "Food / Meal Radical",
    "category": "Food, Plants & Clothing",
    "meaning": "Food, eating, meals, dining, grain, hunger, restaurant",
    "strokes": 3,
    "origin": "A lidded food vessel containing cooked grain.",
    "frequency": "High",
    "hskLevel": 1,
    "examples": [
      {
        "hanzi": "饭馆",
        "pinyin": "fàn guǎn",
        "meaning": "restaurant",
        "level": 1
      },
      {
        "hanzi": "米饭",
        "pinyin": "mǐ fàn",
        "meaning": "cooked rice",
        "level": 1
      },
      {
        "hanzi": "饱",
        "pinyin": "bǎo",
        "meaning": "full / satisfied",
        "level": 3
      },
      {
        "hanzi": "饿",
        "pinyin": "è",
        "meaning": "hungry",
        "level": 3
      }
    ],
    "mnemonic": "Meals, dining halls, full bellies, and cooked rice."
  },
  {
    "id": "rad-silk",
    "radical": "纟",
    "variants": [
      "糸",
      "糹"
    ],
    "pinyin": "sī",
    "nameZh": "绞丝旁 (jiǎosīpáng)",
    "nameEn": "Silk / Thread Radical",
    "category": "Food, Plants & Clothing",
    "meaning": "Silk, spun thread, cords, weaving, connections, practice",
    "strokes": 3,
    "origin": "A twisted skein of fine silk threads with hanging fibers.",
    "frequency": "High",
    "hskLevel": 1,
    "examples": [
      {
        "hanzi": "给",
        "pinyin": "gěi",
        "meaning": "to give / join cords",
        "level": 2
      },
      {
        "hanzi": "红",
        "pinyin": "hóng",
        "meaning": "red (prized silk dye)",
        "level": 2
      },
      {
        "hanzi": "介绍",
        "pinyin": "jiè shào",
        "meaning": "to introduce (connect cords)",
        "level": 2
      },
      {
        "hanzi": "练习",
        "pinyin": "liàn xí",
        "meaning": "to practice (refine silk)",
        "level": 3
      }
    ],
    "mnemonic": "Spun silk cords: bindings, connections, dyes (red, green), and practice."
  },
  {
    "id": "rad-clothing",
    "radical": "衤",
    "variants": [
      "衣"
    ],
    "pinyin": "yī",
    "nameZh": "衣字旁 (yīzìpáng)",
    "nameEn": "Clothing / Garment Radical",
    "category": "Food, Plants & Clothing",
    "meaning": "Clothes, garments, coats, fabric, wearing, pockets",
    "strokes": 5,
    "origin": "A folded collar and draped robe.",
    "frequency": "Medium",
    "hskLevel": 1,
    "examples": [
      {
        "hanzi": "衣服",
        "pinyin": "yī fu",
        "meaning": "clothes",
        "level": 1
      },
      {
        "hanzi": "衬衫",
        "pinyin": "chèn shān",
        "meaning": "shirt / blouse",
        "level": 3
      },
      {
        "hanzi": "裤子",
        "pinyin": "kù zi",
        "meaning": "trousers",
        "level": 3
      },
      {
        "hanzi": "裙子",
        "pinyin": "qún zi",
        "meaning": "skirt",
        "level": 3
      }
    ],
    "mnemonic": "Tailored apparel: shirts, pants, skirts, and quilts."
  },
  {
    "id": "rad-grain",
    "radical": "禾",
    "variants": [],
    "pinyin": "hé",
    "nameZh": "禾木旁 (hémùpáng)",
    "nameEn": "Grain / Cereal Plant Radical",
    "category": "Food, Plants & Clothing",
    "meaning": "Grain, cereal crops, rice stalk, harvest, harmony",
    "strokes": 5,
    "origin": "A stalk of grain with drooping ripe ear of wheat.",
    "frequency": "High",
    "hskLevel": 1,
    "examples": [
      {
        "hanzi": "和",
        "pinyin": "hé",
        "meaning": "and / harmony (mouth eating grain)",
        "level": 1
      },
      {
        "hanzi": "秋",
        "pinyin": "qiū",
        "meaning": "autumn (grain harvest)",
        "level": 2
      },
      {
        "hanzi": "科学",
        "pinyin": "kē xué",
        "meaning": "science (measuring grain)",
        "level": 3
      }
    ],
    "mnemonic": "Ripe drooping ear of grain: crops, seasons (autumn), and food peace (和)."
  },
  {
    "id": "rad-animal",
    "radical": "犭",
    "variants": [
      "犬"
    ],
    "pinyin": "quǎn",
    "nameZh": "反犬旁 (fǎnquǎnpáng)",
    "nameEn": "Animal / Canine Radical",
    "category": "Food, Plants & Clothing",
    "meaning": "Animals, quadrupeds, beasts, pets, wild nature",
    "strokes": 3,
    "origin": "Side profile of a dog with curled tail and alert ears.",
    "frequency": "High",
    "hskLevel": 1,
    "examples": [
      {
        "hanzi": "狗",
        "pinyin": "gǒu",
        "meaning": "dog",
        "level": 1
      },
      {
        "hanzi": "猫",
        "pinyin": "māo",
        "meaning": "cat",
        "level": 1
      },
      {
        "hanzi": "猪",
        "pinyin": "zhū",
        "meaning": "pig",
        "level": 3
      },
      {
        "hanzi": "猜",
        "pinyin": "cāi",
        "meaning": "to guess (hunting hound)",
        "level": 3
      }
    ],
    "mnemonic": "Four-legged animals and pets: dogs, cats, pigs, and wild beasts."
  },
  {
    "id": "rad-bird",
    "radical": "鸟",
    "variants": [
      "鳥"
    ],
    "pinyin": "niǎo",
    "nameZh": "鸟字旁 (niǎozìpáng)",
    "nameEn": "Bird / Avian Radical",
    "category": "Food, Plants & Clothing",
    "meaning": "Birds, avian species, wings, chirping, feathers",
    "strokes": 5,
    "origin": "Pictograph of a perched bird with beak, eye, plumage, and claws.",
    "frequency": "Medium",
    "hskLevel": 2,
    "examples": [
      {
        "hanzi": "鸟",
        "pinyin": "niǎo",
        "meaning": "bird",
        "level": 2
      },
      {
        "hanzi": "鸣",
        "pinyin": "míng",
        "meaning": "chirp / bird singing",
        "level": 3
      }
    ],
    "mnemonic": "A feathered bird: avian species and aerial calls."
  },
  {
    "id": "rad-speech",
    "radical": "讠",
    "variants": [
      "言"
    ],
    "pinyin": "yán",
    "nameZh": "言字旁 (yánzìpáng)",
    "nameEn": "Speech / Language Radical",
    "category": "Mind, Speech & Culture",
    "meaning": "Speech, words, language, conversation, reading, discourse",
    "strokes": 2,
    "origin": "Sound waves radiating from a speaking tongue and mouth.",
    "frequency": "Very High",
    "hskLevel": 1,
    "examples": [
      {
        "hanzi": "说",
        "pinyin": "shuō",
        "meaning": "to speak",
        "level": 1
      },
      {
        "hanzi": "请",
        "pinyin": "qǐng",
        "meaning": "please / invite",
        "level": 1
      },
      {
        "hanzi": "话",
        "pinyin": "huà",
        "meaning": "spoken words",
        "level": 1
      },
      {
        "hanzi": "读",
        "pinyin": "dú",
        "meaning": "to read aloud",
        "level": 1
      },
      {
        "hanzi": "认识",
        "pinyin": "rèn shi",
        "meaning": "to recognize / know",
        "level": 1
      },
      {
        "hanzi": "词典",
        "pinyin": "cí diǎn",
        "meaning": "dictionary",
        "level": 3
      }
    ],
    "mnemonic": "Spoken conversation: words, dialogues, reading, and linguistic terms."
  },
  {
    "id": "rad-heart",
    "radical": "忄",
    "variants": [
      "心",
      "⺗"
    ],
    "pinyin": "xīn",
    "nameZh": "竖心旁 (shùxīnpáng) / 心字底",
    "nameEn": "Heart / Mind Radical",
    "category": "Mind, Speech & Culture",
    "meaning": "Heart, mind, feelings, intellect, emotions, fear, desire",
    "strokes": 3,
    "origin": "Depiction of the physical heart. The left vertical form (忄) features central aorta flanked by dual ventricles.",
    "frequency": "Very High",
    "hskLevel": 1,
    "examples": [
      {
        "hanzi": "想",
        "pinyin": "xiǎng",
        "meaning": "to think / want (心 at bottom)",
        "level": 1
      },
      {
        "hanzi": "您",
        "pinyin": "nín",
        "meaning": "respectful you (你 + 心)",
        "level": 2
      },
      {
        "hanzi": "快",
        "pinyin": "kuài",
        "meaning": "fast / happy",
        "level": 2
      },
      {
        "hanzi": "怕",
        "pinyin": "pà",
        "meaning": "afraid / to fear",
        "level": 2
      },
      {
        "hanzi": "懂",
        "pinyin": "dǒng",
        "meaning": "to understand",
        "level": 2
      },
      {
        "hanzi": "急",
        "pinyin": "jí",
        "meaning": "anxious / urgent",
        "level": 3
      }
    ],
    "mnemonic": "Seat of human thought and emotion: thinking, understanding, worrying, and respecting."
  },
  {
    "id": "rad-shell-wealth",
    "radical": "贝",
    "variants": [
      "貝"
    ],
    "pinyin": "bèi",
    "nameZh": "贝字旁 (bèizìpáng)",
    "nameEn": "Cowrie Shell / Wealth Radical",
    "category": "Mind, Speech & Culture",
    "meaning": "Wealth, money, currency, trade, price, precious value",
    "strokes": 4,
    "origin": "Prized cowrie sea shell used as the universal standard currency in Bronze Age China.",
    "frequency": "High",
    "hskLevel": 2,
    "examples": [
      {
        "hanzi": "贵",
        "pinyin": "guì",
        "meaning": "expensive / precious",
        "level": 2
      },
      {
        "hanzi": "买",
        "pinyin": "mǎi",
        "meaning": "to buy",
        "level": 1
      },
      {
        "hanzi": "卖",
        "pinyin": "mài",
        "meaning": "to sell",
        "level": 2
      },
      {
        "hanzi": "贵姓",
        "pinyin": "guì xìng",
        "meaning": "honorable surname",
        "level": 2
      }
    ],
    "mnemonic": "Ancient currency shells: prices, buying, selling, and precious value."
  },
  {
    "id": "rad-spirit",
    "radical": "礻",
    "variants": [
      "示"
    ],
    "pinyin": "shì",
    "nameZh": "示字旁 (shìzìpáng)",
    "nameEn": "Spirit / Ancestral Ritual Radical",
    "category": "Mind, Speech & Culture",
    "meaning": "Spirit, blessings, ritual offering, ceremonial celebration",
    "strokes": 4,
    "origin": "An ancient stone altar table with droplets of wine offerings presented to the heavens.",
    "frequency": "Medium",
    "hskLevel": 2,
    "examples": [
      {
        "hanzi": "祝",
        "pinyin": "zhù",
        "meaning": "to bless / wish well",
        "level": 2
      },
      {
        "hanzi": "电视",
        "pinyin": "diàn shì",
        "meaning": "television (view/show)",
        "level": 1
      },
      {
        "hanzi": "票",
        "pinyin": "piào",
        "meaning": "ticket / ballot",
        "level": 1
      },
      {
        "hanzi": "礼物",
        "pinyin": "lǐ wù",
        "meaning": "gift / ritual offering",
        "level": 3
      }
    ],
    "mnemonic": "Stone altar with offerings: wishes, blessings, gifts, and solemn views."
  }
];
