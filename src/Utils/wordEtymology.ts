// Word Etymology, Character Origin & Pedagogical Description Helper

export type HanziStructuralType =
  | 'Pictograph (象形)'
  | 'Phono-Semantic (形声)'
  | 'Compound Ideograph (会意)'
  | 'Simple Ideograph (指事)'
  | 'Compound Word (双音节词)'
  | 'Modern Compound Word (双音节词)'
  | 'Simplified Logogram'
  | 'Grammatical Idiom'
  | 'Compound Phrase'

export interface WordOriginInfo {
  structuralType: HanziStructuralType
  radicalInfo: string
  originStory: string
  memoryHook: string
}

// Curated high-frequency HSK etymologies
const ETYMOLOGY_OVERRIDES: Record<string, WordOriginInfo> = {
  '我': {
    structuralType: 'Pictograph (象形)',
    radicalInfo: '戈 (gē - dagger-axe / halberd)',
    originStory: 'In Shang Dynasty oracle bones, 我 was a pictograph of a saw-toothed combat weapon or defensive halberd. Over centuries, the character was phonetically borrowed in Old Chinese to represent the first-person pronoun ("I / me").',
    memoryHook: 'The left stroke holds the shield and the right stroke grips the spear — defending the personal self (我).'
  },
  '你': {
    structuralType: 'Phono-Semantic (形声)',
    radicalInfo: '亻 (dānrénpáng - standing person)',
    originStory: 'Composed of the Standing Person radical (亻) on the left denoting human identity, and the phonetic anchor 尔 (ěr), an ancient archaic pronoun meaning "thou / you".',
    memoryHook: 'A person (亻) standing opposite to you — the universal informal address "you" (你).'
  },
  '他': {
    structuralType: 'Phono-Semantic (形声)',
    radicalInfo: '亻 (dānrénpáng - standing person)',
    originStory: 'Anciently, 他 meant "another" or "different" (composed of person 亻 + 也 yě). In modern Chinese, it was codified as the third-person masculine pronoun "he / him".',
    memoryHook: 'A different person (亻) over there (也) — "he / him".'
  },
  '她': {
    structuralType: 'Phono-Semantic (形声)',
    radicalInfo: '女 (nǚ - woman / female)',
    originStory: 'Invented in the early 20th century during the New Culture Movement by linguist Liu Bannong (刘半农) to give Chinese a distinct third-person feminine pronoun ("she / her"), pairing 女 with 也.',
    memoryHook: 'The female radical (女) replaces the person radical to specifically honor the feminine pronoun "she".'
  },
  '好': {
    structuralType: 'Compound Ideograph (会意)',
    radicalInfo: '女 (nǚ - woman) + 子 (zǐ - child)',
    originStory: 'Combines a mother (女) gently cradling her newborn infant (子). In ancient Chinese philosophy, the loving bond between mother and offspring is the ultimate symbol of goodness and well-being.',
    memoryHook: 'When a mother (女) is with her child (子), everything is harmonious, peaceful, and good (好).'
  },
  '学': {
    structuralType: 'Compound Ideograph (会意)',
    radicalInfo: '子 (zǐ - child) under 宀 (roof)',
    originStory: 'Ancient oracle bone inscriptions depict two hands teaching a child under a sheltered academy roof (宀). It represents the transmission of wisdom from teacher to youth.',
    memoryHook: 'Two hands guiding a child (子) under a roof — studying and learning (学).'
  },
  '学习': {
    structuralType: 'Compound Word (双音节词)',
    radicalInfo: '学 (study) + 习 (practice)',
    originStory: '学 (xué) denotes acquiring new theoretical concepts; 习 (xí, originally picturing young birds beating their wings in the nest) denotes practicing until habitual. Together, they mean true mastery through study and repetition.',
    memoryHook: 'Confucius noted: "Is it not a pleasure to study (学) and constantly practice (习) what you have learned?"'
  },
  '学校': {
    structuralType: 'Compound Word (双音节词)',
    radicalInfo: '学 (study) + 校 (school building / check)',
    originStory: 'Combines 学 (learning) with 校 (xiào, originally a wooden pavilion or grounds where people assemble to compare and inspect knowledge).',
    memoryHook: 'The designated campus grounds where students gather to study (学校).'
  },
  '学生': {
    structuralType: 'Compound Word (双音节词)',
    radicalInfo: '学 (study) + 生 (born / life)',
    originStory: 'Combines 学 (acquiring wisdom) with 生 (shēng - a sprout emerging from soil, symbol of youth and life). Literally: "one whose life is devoted to study".',
    memoryHook: 'A young developing mind born to learn — a student (学生).'
  },
  '吃': {
    structuralType: 'Phono-Semantic (形声)',
    radicalInfo: '口 (kǒu - mouth)',
    originStory: 'The Mouth radical (口) indicates the physical act of chewing and swallowing, paired with the phonetic component 乞 (qǐ).',
    memoryHook: 'An open mouth (口) begging (乞) for delicious food to eat (吃).'
  },
  '喝': {
    structuralType: 'Phono-Semantic (形声)',
    radicalInfo: '口 (kǒu - mouth)',
    originStory: 'Features the Mouth radical (口) for consumption, paired with phonetic 曷 (hé). In Classical Chinese it meant to call out with a parched throat, evolving into "to drink".',
    memoryHook: 'Opening the mouth (口) in the sun (日) when thirsty to drink (喝) water or tea.'
  },
  '看': {
    structuralType: 'Compound Ideograph (会意)',
    radicalInfo: '手 (shǒu - hand) + 目 (mù - eye)',
    originStory: 'A vivid physical sketch: a stylized hand (手, compressed to the top three strokes) positioned directly above an eye (目), shielding the pupil against the bright sun to look into the distance.',
    memoryHook: 'Holding your hand over your eye (目) to peer ahead — looking and reading (看).'
  },
  '听': {
    structuralType: 'Phono-Semantic (形声)',
    radicalInfo: '口 (kǒu - mouth) + 斤 (jīn - axe/measure)',
    originStory: 'Simplified from the intricate traditional character 聽 (which had ear 耳, king 王, and heart 心). The simplified form pairs 口 with 斤 (sound anchor) to indicate hearing voices.',
    memoryHook: 'Hearing words uttered by someone\'s mouth (口) with sharp clarity (斤).'
  },
  '说': {
    structuralType: 'Phono-Semantic (形声)',
    radicalInfo: '讠 (yán - speech)',
    originStory: 'The Speech radical (讠) indicates spoken language and dialogue, combined with 兑 (duì), which anciently depicted a person speaking joyfully.',
    memoryHook: 'Words (讠) flowing outward to communicate ideas — to speak and say (说).'
  },
  '买': {
    structuralType: 'Simplified Logogram',
    radicalInfo: '乛 + 头 (ancient cowrie shell derivative)',
    originStory: 'Historically written 買 with a cowrie shell (貝 bèi - the ancient money of China) at the bottom. Buying involves bringing shells to acquire goods.',
    memoryHook: 'Remember: 买 has no top cross (buying keeps money down), while 卖 (sell) has a cross (+) on top (selling sends goods out).'
  },
  '卖': {
    structuralType: 'Simplified Logogram',
    radicalInfo: '十 + 买',
    originStory: 'Anciently 賣. The additional stroke on top represents goods being elevated or dispatched outwards in exchange for currency.',
    memoryHook: 'The merchant puts a cross (+) on top to advertise goods for sale (卖).'
  },
  '家': {
    structuralType: 'Compound Ideograph (会意)',
    radicalInfo: '宀 (mián - roof) + 豕 (shǐ - pig / livestock)',
    originStory: 'An architectural roof (宀) sheltering a pig (豕). In ancient agrarian China, keeping domestic pigs inside the enclosure signified agricultural prosperity, safety, and a true family home.',
    memoryHook: 'A sturdy sheltering roof (宀) protecting the family\'s prized livestock — home and family (家).'
  },
  '朋友': {
    structuralType: 'Compound Word (双音节词)',
    radicalInfo: '朋 (two strings of cowries) + 友 (two clasping hands)',
    originStory: '朋 (péng) originally depicted two identical strings of cowrie currencies hanging together in equality; 友 (yǒu) was an oracle bone sketch of two right hands reaching out in cooperative friendship.',
    memoryHook: 'Two equal strings of pearls (朋) working hand-in-hand (友) — dependable friends (朋友).'
  },
  '谢谢': {
    structuralType: 'Phono-Semantic (形声)',
    radicalInfo: '讠 (yán - speech)',
    originStory: 'Composed of Speech (讠) + 身 (body) + 寸 (hand/measure). In classical antiquity, 谢 meant to bow respectfully with words to discharge an obligation or tender an apology, evolving into gratitude.',
    memoryHook: 'Using polite speech (讠) with your whole body (身) to express heartfelt thanks (谢谢).'
  },
  '对不起': {
    structuralType: 'Grammatical Idiom',
    radicalInfo: '对 (face) + 不 (not) + 起 (raise)',
    originStory: 'A humble classical Chinese idiom literally meaning "I cannot raise (起) my head to face (对) you properly due to remorse". It is the definitive sincere apology in standard Mandarin.',
    memoryHook: 'I feel so apologetic that I cannot hold my head up to face you — "Sorry / Excuse me" (对不起).'
  },
  '不客气': {
    structuralType: 'Grammatical Idiom',
    radicalInfo: '不 (no) + 客气 (polite/guest air)',
    originStory: '客 (guest) + 气 (air/demeanor). Literally: "Do not treat me like a distant guest; no excessive formality is necessary between close friends."',
    memoryHook: 'No need for guest formalities — you are welcome (不客气)!'
  },
  '再见': {
    structuralType: 'Compound Phrase',
    radicalInfo: '再 (again) + 见 (see)',
    originStory: '再 (zài) indicates recurrence or repeating an action; 见 (jiàn) is a human figure with an oversized eye (目) looking out. Together: "we will see each other once again".',
    memoryHook: 'Not a final farewell, but an active promise to see you again (再见)!'
  },
  '钱': {
    structuralType: 'Phono-Semantic (形声)',
    radicalInfo: '钅 (jīn - metal / gold)',
    originStory: 'The Metal radical (钅) on the left signals metallic bronze and silver coins, paired with 戋 (jiān, crossed weapons), which originally referred to ancient spades cast as early currency.',
    memoryHook: 'Precious metal (钅) forged into currency to buy and trade — money (钱).'
  },
  '喜欢': {
    structuralType: 'Compound Word (双音节词)',
    radicalInfo: '喜 (joy) + 欢 (pleasure)',
    originStory: '喜 depicts a ceremonial drum and an open smiling mouth cheering celebrations; 欢 pairs a bird with a yawning open mouth singing in joyous glee. Together: to like, be fond of, or enjoy.',
    memoryHook: 'Two celebrating characters joined together to express affection — to like and love (喜欢).'
  },
  '苹果': {
    structuralType: 'Compound Word (双音节词)',
    radicalInfo: '艹 (cǎozìtóu - grass/plant) + 果 (fruit)',
    originStory: '苹 has the vegetation crown (艹) denoting botanical crops; 果 is a tree (木) bearing a round spherical fruit at its crown. Together: the apple fruit.',
    memoryHook: 'A fresh botanical crop (艹) that bears juicy round fruit (果) on a tree — apple (苹果).'
  },
  '茶': {
    structuralType: 'Compound Ideograph (会意)',
    radicalInfo: '艹 (grass/plant) + 人 (person) + 木 (wood/tree)',
    originStory: 'A person (人) standing immersed between the wild herb bushes (艹) and the timber trunk (木), peacefully harvesting tea leaves from Camellia sinensis.',
    memoryHook: 'A human (人) surrounded by green leaves (艹) and tree branches (木), steeping a fragrant cup of tea (茶).'
  },
  '水': {
    structuralType: 'Pictograph (象形)',
    radicalInfo: '水 (water) - primary 4-stroke root',
    originStory: 'A pristine Shang Dynasty pictograph depicting the meandering center current of a river flanked by splashing water droplets on both banks.',
    memoryHook: 'A flowing central river current with two splashing ripples on either side — water (水).'
  },
  '电脑': {
    structuralType: 'Modern Compound Word (双音节词)',
    radicalInfo: '电 (lightning / electricity) + 脑 (brain)',
    originStory: 'One of the most poetic coinages of modern Mandarin. 电 represents celestial lightning flash; 脑 features the flesh radical (月) and thoughts (囟). Together: an "electric brain".',
    memoryHook: 'Lightning electricity (电) powering an artificial brain (脑) — a computer (电脑).'
  },
  '飞机': {
    structuralType: 'Modern Compound Word (双音节词)',
    radicalInfo: '飞 (to fly) + 机 (machine)',
    originStory: '飞 depicts the outstretched flapping wings of an airborne crane; 机 represents an intricate mechanical loom or apparatus. Together: an "airplane / flying machine".',
    memoryHook: 'Outstretched wings flying (飞) with a powerful machine (机) — an airplane (飞机).'
  }
}

// Radical lookup fallback table
const RADICAL_MEANINGS: Record<string, { name: string; meaning: string; category: string }> = {
  '氵': { name: 'Three Drops of Water (三点水)', meaning: 'Liquids, rivers, washing, moisture, and beverages.', category: 'Nature & Elements' },
  '亻': { name: 'Standing Person (单人旁)', meaning: 'Human beings, personal relationships, postures, and traits.', category: 'People & Body' },
  '扌': { name: 'Action Hand (提手旁)', meaning: 'Physical manual actions, gripping, pulling, or pushing.', category: 'Actions & Movement' },
  '讠': { name: 'Speech / Language (言字旁)', meaning: 'Verbal communication, talking, reading, studying, or words.', category: 'Mind & Speech' },
  '口': { name: 'Mouth (口字旁)', meaning: 'Oral actions, eating, drinking, shouting, tasting, or questions.', category: 'People & Body' },
  '日': { name: 'Sun / Day (日字旁)', meaning: 'Light, solar calendar, daytime, hours, and brightness.', category: 'Nature & Elements' },
  '月': { name: 'Moon / Flesh (月字旁)', meaning: 'Months of the year, or human internal organs and body parts.', category: 'Nature / Body' },
  '木': { name: 'Wood / Tree (木字旁)', meaning: 'Timber, trees, furniture, wooden implements, and botany.', category: 'Nature & Plants' },
  '忄': { name: 'Heart / Emotion (竖心旁)', meaning: 'Thoughts, psychological feelings, moods, fear, and desire.', category: 'Mind & Emotion' },
  '心': { name: 'Heart (心字底)', meaning: 'The emotional center, thoughts, intentions, and intellect.', category: 'Mind & Emotion' },
  '女': { name: 'Woman / Female (女字旁)', meaning: 'Females, maternal relationships, kinship terms, and elegance.', category: 'People & Body' },
  '辶': { name: 'Movement / Walking (走之底)', meaning: 'Walking along a road, traveling, passing time, or distance.', category: 'Actions & Movement' },
  '宀': { name: 'Roof / Shelter (宝盖头)', meaning: 'Buildings, rooms, dwelling enclosures, and domestic peace.', category: 'Structures & Space' },
  '灬': { name: 'Fire / Heat (四点底)', meaning: 'Thermal cooking heat, flames, boiling, and illumination.', category: 'Nature & Elements' },
  '火': { name: 'Fire (火字旁)', meaning: 'Combustion, warmth, lamps, and cooking operations.', category: 'Nature & Elements' },
  '纟': { name: 'Silk / Thread (绞丝旁)', meaning: 'Woven fabric, cords, interpersonal ties, and continuous practice.', category: 'Food & Clothing' },
  '饣': { name: 'Food / Eating (食字旁)', meaning: 'Nourishment, meals, restaurants, dining, and hunger.', category: 'Food & Plants' },
  '艹': { name: 'Grass / Vegetation (草字头)', meaning: 'Herbal plants, vegetables, tea, flowers, and agriculture.', category: 'Food & Plants' },
  '土': { name: 'Earth / Soil (提土旁)', meaning: 'Territory, clay, ground, walls, and foundational structures.', category: 'Nature & Elements' },
  '目': { name: 'Eye / Vision (目字旁)', meaning: 'Optics, looking, sleeping, blinking, and visual observation.', category: 'People & Body' },
  '钅': { name: 'Metal / Gold (金字旁)', meaning: 'Heavy metals, coinage, bronze bells, and metallic tools.', category: 'Nature & Elements' },
  '囗': { name: 'Enclosure (大口框)', meaning: 'City borders, enclosed spaces, parks, and containers.', category: 'Structures & Space' },
  '刂': { name: 'Knife / Blade (立刀旁)', meaning: 'Cutting, splitting, separation, and sharp delimitation.', category: 'Tools & Actions' },
  '门': { name: 'Door / Gate (门字框)', meaning: 'Entrances, gateways, rooms, and asking through a threshold.', category: 'Structures & Space' },
  '𧾷': { name: 'Foot / Leg (足字旁)', meaning: 'Stepping, running, jumping, kicking balls, and roads.', category: 'People & Body' }
}

export function getWordOriginInfo(character: string, pinyin: string, meaning: string, category?: string): WordOriginInfo {
  // Check exact curated override first
  if (ETYMOLOGY_OVERRIDES[character]) {
    return ETYMOLOGY_OVERRIDES[character]
  }

  // Check if first character has override
  const firstChar = character[0]
  if (character.length > 1 && ETYMOLOGY_OVERRIDES[firstChar]) {
    const parent = ETYMOLOGY_OVERRIDES[firstChar]
    return {
      structuralType: 'Compound Word (双音节词)',
      radicalInfo: parent.radicalInfo,
      originStory: `This word anchors around the root character "${firstChar}" (${parent.structuralType}). ${parent.originStory}`,
      memoryHook: `Remember the root "${firstChar}": ${parent.memoryHook} In this compound, it pairs with "${character.slice(1)}" to form "${meaning}".`
    }
  }

  // Detect embedded radical
  for (const [rad, radMeta] of Object.entries(RADICAL_MEANINGS)) {
    if (character.includes(rad)) {
      return {
        structuralType: character.length > 1 ? 'Compound Word (双音节词)' : 'Phono-Semantic (形声)',
        radicalInfo: `${rad} — ${radMeta.name}`,
        originStory: `This character contains the ${radMeta.name} semantic radical. In classical Hanzi formation, this root governs concepts of ${radMeta.meaning}`,
        memoryHook: `Spot the radical "${rad}"! It alerts you immediately that the character relates to ${radMeta.category.toLowerCase()}.`
      }
    }
  }

  // General structural analysis
  const isMulti = character.length > 1
  return {
    structuralType: isMulti ? 'Compound Word (双音节词)' : 'Phono-Semantic (形声)',
    radicalInfo: `HSK ${category || 'Standard'} Lexicon`,
    originStory: `In modern Chinese syntax, "${character}" functions as a ${category || 'vocabulary word'} meaning "${meaning}". Each stroke is systematically ordered according to traditional square-character (方块字) geometry.`,
    memoryHook: `Associate the sound "${pinyin}" directly with the concept "${meaning}" using our Tian Zi Ge practice lab!`
  }
}
