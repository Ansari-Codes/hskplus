<script setup lang="ts">
import { ref, computed, onBeforeUnmount, watch } from 'vue'
import { useRoute, useRouter, RouterLink } from 'vue-router'
import {
  getMockTestsByLevel,
  getMockTestById,
  type MockTestEntry,
  type MockTestQuestion,
  type TestType
} from '../../Data/mockTestsData'
import { UiButton, UiBadge } from '../../Ui'
import { speakChinese } from '../../Utils/speech'
import CompAdSense from '../../Components/CompAdSense.vue'

const route = useRoute()
const router = useRouter()

const isAllLevelsView = computed(() => route.name === 'all-mock-tests')
const level = computed<1 | 2 | 3>(() => (route.params.level === '3' ? 3 : route.params.level === '2' ? 2 : 1))
const allTests = computed(() =>
  isAllLevelsView.value
    ? [...getMockTestsByLevel(1), ...getMockTestsByLevel(2), ...getMockTestsByLevel(3)]
    : getMockTestsByLevel(level.value)
)

const activeFilter = ref<'all' | TestType>('all')

const filteredTests = computed(() => {
  if (activeFilter.value === 'all') return allTests.value
  return allTests.value.filter(t => t.type === activeFilter.value)
})

const testGroups = computed(() =>
  (isAllLevelsView.value ? ([1, 2, 3] as const) : [level.value]).map(testLevel => ({
    level: testLevel,
    tests: filteredTests.value.filter(test => test.level === testLevel),
  }))
)

const selectedTestId = computed(() => {
  const q = route.query.id
  if (typeof q === 'string' && q) {
    return q
  }
  return null
})

const currentTest = computed<MockTestEntry | undefined>(() => {
  if (!selectedTestId.value || isAllLevelsView.value) return undefined
  const test = getMockTestById(selectedTestId.value)
  return test?.level === level.value ? test : undefined
})

// ==========================================
// Mandarin Bean Exam Runner State
// ==========================================
const userAnswers = ref<Record<number, number>>({})
const currentQuestionIndex = ref(0)
const isSubmitted = ref(false)
const timeLeftSeconds = ref(0)
let timerInterval: any = null
const audioPlayCount = ref<Record<number, number>>({})
const isPlayingAudio = ref(false)

// Exam Controls
const showPinyin = ref(true)
const audioSpeed = ref<number>(0.82)
const showExampleModal = ref(false)
const reviewFilter = ref<'all' | 'incorrect' | 'correct'>('all')

// Interactive Unscramble State: questionIndex -> placed words array
const unscramblePlaced = ref<Record<number, string[]>>({})

// Watch for active question change to initialize unscramble if needed
watch(currentQuestionIndex, (idx) => {
  if (!currentTest.value) return
  const q = currentTest.value.questions[idx]
  if (q && q.type === 'unscramble' && !unscramblePlaced.value[idx]) {
    unscramblePlaced.value[idx] = []
  }
})

function selectTest(test: MockTestEntry) {
  void router.push({
    path: `/hsk${test.level}/test`,
    query: { id: test.id },
  })
  startTest(test)
}

function startTest(test: MockTestEntry) {
  userAnswers.value = {}
  currentQuestionIndex.value = 0
  isSubmitted.value = false
  audioPlayCount.value = {}
  unscramblePlaced.value = {}
  showExampleModal.value = false
  reviewFilter.value = 'all'
  timeLeftSeconds.value = test.durationMinutes * 60

  // Default pinyin toggle: HSK 1 and 2 default ON, HSK 3 defaults OFF (real exam condition)
  showPinyin.value = test.level < 3

  clearInterval(timerInterval)
  timerInterval = setInterval(() => {
    if (timeLeftSeconds.value > 0) {
      timeLeftSeconds.value--
    } else {
      submitTest()
    }
  }, 1000)
}

function submitTest() {
  clearInterval(timerInterval)
  isSubmitted.value = true
}

function exitTest() {
  clearInterval(timerInterval)
  void router.push(isAllLevelsView.value ? '/mock-tests' : `/hsk${level.value}/test`)
}

const formattedTime = computed(() => {
  const m = Math.floor(timeLeftSeconds.value / 60)
  const s = timeLeftSeconds.value % 60
  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
})

const totalScore = computed(() => {
  if (!currentTest.value) return 0
  let correct = 0
  currentTest.value.questions.forEach((q, idx) => {
    if (userAnswers.value[idx] === q.correctAnswer) {
      correct++
    }
  })
  return Math.round((correct / currentTest.value.questions.length) * 100)
})

// Official Scaled Score calculation (Hanban standard)
const officialFullScore = computed(() => {
  if (!currentTest.value) return 200
  return currentTest.value.level === 3 ? 300 : 200
})

const officialPassingScore = computed(() => {
  if (!currentTest.value) return 120
  return currentTest.value.level === 3 ? 180 : 120
})

const officialScaledScore = computed(() => {
  return Math.round((totalScore.value / 100) * officialFullScore.value)
})

const isPassed = computed(() => {
  return officialScaledScore.value >= officialPassingScore.value
})

const correctCount = computed(() => {
  if (!currentTest.value) return 0
  return currentTest.value.questions.filter((q, idx) => userAnswers.value[idx] === q.correctAnswer).length
})

const incorrectCount = computed(() => {
  if (!currentTest.value) return 0
  return currentTest.value.questions.length - correctCount.value
})

async function playQuestionAudio(text?: string, qIdx?: number) {
  if (!text) return
  if (qIdx !== undefined) {
    audioPlayCount.value[qIdx] = (audioPlayCount.value[qIdx] || 0) + 1
  }
  isPlayingAudio.value = true
  try {
    await speakChinese(text, audioSpeed.value)
  } finally {
    isPlayingAudio.value = false
  }
}

// ==========================================
// Mandarin Bean Question Helpers
// ==========================================

// Parse Word Bank options: e.g. ["A. 个", "B. 本", "C. 口", "D. 块"] -> [{ letter: 'A', word: '个' }, ...]
function parseWordBankOptions(options: string[]) {
  return options.map((opt, idx) => {
    const match = opt.match(/^([A-E])[\.、\s]+(.*)$/i)
    if (match) {
      return {
        letter: match[1].toUpperCase(),
        word: match[2].trim(),
        originalIndex: idx
      }
    }
    const letters = ['A', 'B', 'C', 'D', 'E', 'F']
    return {
      letter: letters[idx] || `${idx + 1}`,
      word: opt.trim(),
      originalIndex: idx
    }
  })
}

// Get available words for unscramble question
function getAvailableUnscrambleWords(q: MockTestQuestion, qIdx: number): string[] {
  const allWords = q.scrambledWords || q.words || []
  const placed = unscramblePlaced.value[qIdx] || []
  // Compute remaining words (accounting for duplicates)
  const remaining = [...allWords]
  for (const w of placed) {
    const idx = remaining.indexOf(w)
    if (idx !== -1) {
      remaining.splice(idx, 1)
    }
  }
  return remaining
}

// Add word to unscramble sentence
function addUnscrambleWord(word: string, qIdx: number, q: MockTestQuestion) {
  if (!unscramblePlaced.value[qIdx]) {
    unscramblePlaced.value[qIdx] = []
  }
  unscramblePlaced.value[qIdx].push(word)

  // Check if assembled sentence matches an option
  const assembledSentence = unscramblePlaced.value[qIdx].join('')
  const matchedOptIdx = q.options.findIndex(opt => {
    const cleanOpt = opt.replace(/[。\.\s]/g, '')
    const cleanAssembled = assembledSentence.replace(/[。\.\s]/g, '')
    return cleanOpt === cleanAssembled
  })
  if (matchedOptIdx !== -1) {
    userAnswers.value[qIdx] = matchedOptIdx
  }
}

// Remove word from unscramble sentence
function removeUnscrambleWord(wordIndex: number, qIdx: number) {
  if (!unscramblePlaced.value[qIdx]) return
  unscramblePlaced.value[qIdx].splice(wordIndex, 1)
}

// Reset unscramble
function resetUnscramble(qIdx: number) {
  unscramblePlaced.value[qIdx] = []
}

// Dialogue speaker parser
interface DialogueSpeakerLine {
  speaker: '男' | '女' | '旁白'
  avatar: string
  text: string
}

function getSelectedWordBankItem(q: MockTestQuestion, ansIdx?: number) {
  if (ansIdx === undefined) return null
  const items = parseWordBankOptions(q.options)
  return items[ansIdx] || null
}

function parseDialogue(text: string): DialogueSpeakerLine[] {
  if (!text.includes('男：') && !text.includes('女：')) {
    return [{ speaker: '旁白', avatar: '🎙️', text }]
  }
  const parts = text.split(/(男：|女：)/).filter(Boolean)
  const lines: DialogueSpeakerLine[] = []
  let currentSpeaker: '男' | '女' = '男'

  for (let i = 0; i < parts.length; i++) {
    const part = parts[i].trim()
    if (part === '男：') {
      currentSpeaker = '男'
    } else if (part === '女：') {
      currentSpeaker = '女'
    } else if (part) {
      lines.push({
        speaker: currentSpeaker,
        avatar: currentSpeaker === '男' ? '👨' : '👩',
        text: part
      })
    }
  }
  return lines
}

// Pinyin filter: removes bracketed pinyin if showPinyin is false
function formatChineseText(text: string): string {
  if (!text) return ''
  if (!showPinyin.value) {
    // Remove pinyin in parentheses like "(fēijī)" or "(zhēn)"
    return text.replace(/\s*\([a-zāáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜ\s,]+\)/gi, '')
  }
  return text
}

// Hanban official instructions & example for each section/part
const officialSectionInfo = computed(() => {
  if (!currentTest.value) return { title: '', instruction: '', example: null }
  const test = currentTest.value
  const q = test.questions[currentQuestionIndex.value]
  const part = q.part || 1

  if (test.type === 'listening') {
    if (part === 1) {
      return {
        title: '第一部分 · 判断对错 (True / False)',
        instruction: '一共 5 个题，每题听两次。看图并听录音，判断录音内容与图片是否一致。',
        example: {
          audio: '他在看书。',
          image: '📖',
          explanation: '录音说“他在看书”，图片是看书，所以选【正确 √】。'
        }
      }
    } else if (part === 2) {
      return {
        title: '第二部分 · 图片/语境匹配 (Matching)',
        instruction: '一共 5 个题，每题听两次。听句子或对话，选择与内容最符合的选项。',
        example: {
          audio: '今天我想去商店买一件衣服。',
          options: ['A. 🏬 商店', 'B. ✈️ 机场', 'C. 🏥 医院'],
          explanation: '录音说“去商店买衣服”，选【A】。'
        }
      }
    } else {
      return {
        title: '第三/四部分 · 对话理解 (Dialogue Comprehension)',
        instruction: '每题听两次。听一段简短对话，根据对话内容回答问题。',
        example: {
          dialog: '男：小王，现在几点了？\n女：现在十点十分。',
          question: '现在几点了？',
          options: ['A. 9:10', 'B. 10:10', 'C. 10:20'],
          explanation: '女的说“现在十点十分”，选【B】。'
        }
      }
    }
  } else if (test.type === 'reading') {
    if (part === 1) {
      return {
        title: '第一部分 · 图文匹配 / 句子理解 (Match / True False)',
        instruction: '阅读短句或词语，判断与图片或语境是否相符。',
        example: {
          text: '飞机 (fēijī)',
          image: '✈️',
          explanation: '词语“飞机”与飞机图标一致，选【正确 √】。'
        }
      }
    } else if (part === 2) {
      return {
        title: '第二部分 · 选词填空 (Word Bank Fill-in)',
        instruction: '选词填空。阅读句子，从词语框中选择最合适的一项填入括号中。',
        example: {
          wordBank: ['A. 比', 'B. 往', 'C. 离', 'D. 过'],
          sentence: '今天的天气 ( A ) 昨天好多了。',
          explanation: '表示比较，用介词“比”，选【A】。'
        }
      }
    } else {
      return {
        title: '第三部分 · 阅读理解 (Reading Comprehension)',
        instruction: '阅读对话或短文，选出唯一正确答案。',
        example: {
          sentence: '我和他是大学同学，我们认识五年了。',
          question: '他们认识多长时间了？',
          options: ['A. 3年', 'B. 4年', 'C. 5年'],
          explanation: '文中明确提到“认识五年了”，选【C】。'
        }
      }
    }
  } else {
    return {
      title: '书写部分 · 连词成句与汉字考核 (Writing Section)',
      instruction: '连词成句。将打乱顺序的词语组成语法正确、意思通顺的完整句子。',
      example: {
        words: ['是', '我', '学生'],
        assembled: '我是学生。',
        explanation: '按照主谓宾语序排列成“我是学生”，选对应句子。'
      }
    }
  }
})

// Filtered review questions
const reviewQuestions = computed(() => {
  if (!currentTest.value) return []
  return currentTest.value.questions.map((q, idx) => ({
    ...q,
    originalIndex: idx,
    isCorrect: userAnswers.value[idx] === q.correctAnswer
  })).filter(item => {
    if (reviewFilter.value === 'incorrect') return !item.isCorrect
    if (reviewFilter.value === 'correct') return item.isCorrect
    return true
  })
})

onBeforeUnmount(() => {
  clearInterval(timerInterval)
})
</script>

<template>
  <div class="min-h-screen bg-background text-foreground">
    <!-- Header -->
    <header class="border-b border-border bg-surface py-6 px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-6xl">
        <div class="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div class="flex items-center gap-2">
              <RouterLink to="/" class="text-sm font-medium text-primary hover:underline">Home</RouterLink>
              <span class="text-muted-foreground">/</span>
              <template v-if="!isAllLevelsView">
                <RouterLink :to="`/hsk${level}`" class="text-sm font-medium text-primary hover:underline">HSK {{ level }} Hub</RouterLink>
                <span class="text-muted-foreground">/</span>
              </template>
              <span class="text-sm font-semibold text-muted-foreground">Official Mock Tests</span>
            </div>
            <div class="mt-2 flex items-center gap-3">
              <h1 class="text-2xl font-extrabold tracking-tight sm:text-3xl text-foreground">
                {{ isAllLevelsView ? 'HSK Official Mock Examinations' : `HSK ${level} Standard Practice Papers` }}
              </h1>
              <UiBadge variant="primary" class="font-bold">
                {{ isAllLevelsView ? 'HSK 1-3' : `Level ${level}` }}
              </UiBadge>
            </div>
            <p class="mt-1 text-xs sm:text-sm text-muted-foreground">
              Official Hanban & Mandarin Bean examination layout · Authentic Parts, True/False, Word Bank, Unscramble, Audio simulation & Score Reports.
            </p>
          </div>

          <div class="flex items-center gap-2">
            <RouterLink to="/hsk1/test">
              <UiButton :variant="!isAllLevelsView && level === 1 ? 'primary' : 'outline'" size="sm">HSK 1</UiButton>
            </RouterLink>
            <RouterLink to="/hsk2/test">
              <UiButton :variant="!isAllLevelsView && level === 2 ? 'primary' : 'outline'" size="sm">HSK 2</UiButton>
            </RouterLink>
            <RouterLink to="/hsk3/test">
              <UiButton :variant="!isAllLevelsView && level === 3 ? 'primary' : 'outline'" size="sm">HSK 3</UiButton>
            </RouterLink>
          </div>
        </div>
      </div>
    </header>

    <main class="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <!-- VIEW 1: ACTIVE MANDARIN BEAN TEST RUNNER -->
      <div v-if="currentTest">
        <!-- Official Hanban / Mandarin Bean Paper Header -->
        <div class="mb-6 rounded-2xl border-2 border-red-200/80 bg-linear-to-r from-red-50/50 via-surface to-red-50/30 p-5 shadow-sm dark:border-red-950/60 dark:from-red-950/20 dark:via-surface dark:to-red-950/10">
          <div class="flex flex-wrap items-center justify-between gap-4 border-b border-red-200/60 pb-4 dark:border-red-950/60">
            <div class="flex items-center gap-3">
              <div class="flex size-11 items-center justify-center rounded-xl bg-red-600 text-white font-extrabold shadow-sm">
                HSK
              </div>
              <div>
                <div class="flex items-center gap-2">
                  <span class="text-xs font-bold uppercase tracking-widest text-red-600 dark:text-red-400">
                    汉语水平考试 · 官方全真模拟
                  </span>
                  <span class="text-xs text-muted-foreground">| Paper H{{ currentTest.level }}090{{ currentTest.testNumber }}</span>
                </div>
                <h2 class="text-xl font-black text-foreground">
                  HSK {{ currentTest.level }} 级全真模拟试卷 · {{ currentTest.type === 'listening' ? '听力分卷' : currentTest.type === 'reading' ? '阅读分卷' : '书写分卷' }}
                </h2>
              </div>
            </div>

            <!-- Mandatory Exam Controls (Mandarin Bean Toolbar) -->
            <div class="flex flex-wrap items-center gap-2 sm:gap-3">
              <!-- Pinyin Toggle -->
              <button
                type="button"
                class="flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-xs font-bold transition-all shadow-xs"
                :class="showPinyin ? 'border-primary bg-primary text-primary-foreground shadow-primary/20' : 'border-border bg-surface text-muted-foreground hover:bg-muted'"
                @click="showPinyin = !showPinyin"
                title="Toggle Pinyin visibility"
              >
                <span>🔤 拼音 Pinyin:</span>
                <span class="uppercase">{{ showPinyin ? 'ON 显示' : 'OFF 隐藏' }}</span>
              </button>

              <!-- Audio Speed Controller -->
              <button
                type="button"
                class="flex items-center gap-1.5 rounded-xl border border-border bg-surface px-3 py-1.5 text-xs font-bold text-foreground hover:bg-muted transition-colors"
                @click="audioSpeed = audioSpeed === 0.82 ? 1.0 : 0.82"
                title="Toggle listening audio playback speed"
              >
                <span>🔊 语速:</span>
                <span>{{ audioSpeed === 0.82 ? '0.82x (考试专用)' : '1.0x (标准原速)' }}</span>
              </button>

              <!-- View Hanban Example Modal Trigger -->
              <UiButton
                size="sm"
                variant="outline"
                class="text-xs font-bold"
                @click="showExampleModal = !showExampleModal"
              >
                💡 真题例题
              </UiButton>

              <!-- Timer Display -->
              <div
                v-if="!isSubmitted"
                class="flex items-center gap-2 rounded-xl border px-3 py-1.5 font-mono text-sm font-black"
                :class="timeLeftSeconds < 120 ? 'border-red-500 bg-red-50 text-red-600 dark:bg-red-950/40 animate-pulse' : 'border-border bg-surface text-foreground'"
              >
                <span>⏱️</span>
                <span>{{ formattedTime }}</span>
              </div>

              <!-- Exit Button -->
              <UiButton variant="ghost" size="sm" class="text-xs text-muted-foreground" @click="exitTest">
                退出考试 Exit
              </UiButton>
            </div>
          </div>

          <!-- Official Hanban Instructions Banner -->
          <div class="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs">
            <div class="flex items-center gap-2 text-muted-foreground">
              <span class="font-bold text-foreground">考试规则说明:</span>
              <span>录音播放 2 次 · 满分 {{ officialFullScore }} 分 · 合格线 {{ officialPassingScore }} 分 (60%)</span>
            </div>
            <div class="text-xs font-semibold text-primary">
              总题量: {{ currentTest.questions.length }} 题 · 建议时长: {{ currentTest.durationMinutes }} 分钟
            </div>
          </div>

          <!-- Collapsible Hanban Section Example Box -->
          <div
            v-if="showExampleModal"
            class="mt-4 rounded-xl border border-amber-300 bg-amber-50/80 p-4 text-xs text-amber-950 dark:border-amber-900/60 dark:bg-amber-950/30 dark:text-amber-200"
          >
            <div class="flex items-center justify-between font-bold text-amber-900 dark:text-amber-200">
              <span class="flex items-center gap-1.5 text-sm">
                <span>📘</span> 官方答题示例 · {{ officialSectionInfo.title }}
              </span>
              <button type="button" class="text-amber-700 hover:underline dark:text-amber-300" @click="showExampleModal = false">
                ✕ 收起
              </button>
            </div>
            <p class="mt-1 font-medium">{{ officialSectionInfo.instruction }}</p>

            <div v-if="officialSectionInfo.example" class="mt-3 rounded-lg bg-surface/80 p-3 border border-amber-200 dark:border-amber-900 text-foreground">
              <span class="font-bold text-xs uppercase text-amber-600 dark:text-amber-400">例如 (Example):</span>
              <div v-if="officialSectionInfo.example.audio" class="mt-1">
                <span class="font-semibold">听力原文: </span>“{{ officialSectionInfo.example.audio }}”
                <span v-if="officialSectionInfo.example.image" class="ml-2 text-lg">{{ officialSectionInfo.example.image }}</span>
              </div>
              <div v-if="officialSectionInfo.example.sentence" class="mt-1">
                <span class="font-semibold">例句: </span>{{ officialSectionInfo.example.sentence }}
              </div>
              <div v-if="officialSectionInfo.example.words" class="mt-1">
                <span class="font-semibold">词语: </span>{{ officialSectionInfo.example.words.join(' / ') }}
              </div>
              <p class="mt-1 text-xs text-emerald-700 dark:text-emerald-400 font-semibold">
                {{ officialSectionInfo.example.explanation }}
              </p>
            </div>
          </div>
        </div>

        <!-- ============================================== -->
        <!-- RESULTS SCREEN (Mandarin Bean Official Report) -->
        <!-- ============================================== -->
        <div v-if="isSubmitted" class="space-y-8">
          <!-- Official Certificate Score Card -->
          <div class="relative overflow-hidden rounded-3xl border-2 border-red-300/80 bg-surface p-8 shadow-xl dark:border-red-950">
            <!-- Hanban Seal Watermark -->
            <div class="pointer-events-none absolute -right-10 -bottom-10 size-64 select-none opacity-5 dark:opacity-10 text-9xl font-black text-red-600">
              印
            </div>

            <div class="flex flex-col items-center justify-center text-center">
              <div class="flex items-center gap-3">
                <div class="size-3 rounded-full bg-red-600 animate-ping" />
                <span class="text-xs font-black tracking-widest uppercase text-red-600 dark:text-red-400">
                  汉语水平考试 · 模拟成绩报告单
                </span>
                <div class="size-3 rounded-full bg-red-600 animate-ping" />
              </div>

              <h3 class="mt-3 text-3xl sm:text-4xl font-black tracking-tight text-foreground">
                HSK {{ currentTest.level }} 级考试成绩单
              </h3>
              <p class="mt-1 text-xs sm:text-sm text-muted-foreground">
                Official Mock Test Report · Paper H{{ currentTest.level }}090{{ currentTest.testNumber }}
              </p>

              <!-- Scaled Scores Grid -->
              <div class="mt-8 grid w-full max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4 rounded-2xl border border-border bg-surface-raised p-6">
                <div class="text-center">
                  <p class="text-3xl font-black text-primary">{{ officialScaledScore }}</p>
                  <p class="text-xs font-semibold text-muted-foreground mt-1">换算总分 (Scaled)</p>
                  <p class="text-[11px] text-muted-foreground">满分 {{ officialFullScore }} 分</p>
                </div>
                <div class="text-center">
                  <p class="text-3xl font-black text-foreground">{{ totalScore }}%</p>
                  <p class="text-xs font-semibold text-muted-foreground mt-1">正确率 (Accuracy)</p>
                  <p class="text-[11px] text-muted-foreground">{{ correctCount }} / {{ currentTest.questions.length }} 题</p>
                </div>
                <div class="text-center">
                  <p class="text-3xl font-black text-muted-foreground">{{ officialPassingScore }}</p>
                  <p class="text-xs font-semibold text-muted-foreground mt-1">合格分数线</p>
                  <p class="text-[11px] text-muted-foreground">Passing 60%</p>
                </div>
                <div class="text-center">
                  <p
                    class="text-3xl font-black"
                    :class="isPassed ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'"
                  >
                    {{ isPassed ? '合格' : '需努力' }}
                  </p>
                  <p class="text-xs font-semibold text-muted-foreground mt-1">考试判定 (Result)</p>
                  <p class="text-[11px] font-bold" :class="isPassed ? 'text-emerald-600' : 'text-red-500'">
                    {{ isPassed ? 'PASSED ✓' : 'RETRY ✗' }}
                  </p>
                </div>
              </div>

              <!-- Action buttons -->
              <div class="mt-8 flex flex-wrap justify-center gap-3">
                <UiButton @click="startTest(currentTest)">
                  🔄 重新模拟 Retake Exam
                </UiButton>
                <UiButton variant="outline" @click="exitTest">
                  📋 返回模考列表 All Tests
                </UiButton>
              </div>

              <CompAdSense format="in-article" slot-id="mock-test-results-ad" class="mt-8" />
            </div>
          </div>

          <!-- Mandarin Bean Question Review Section -->
          <div class="rounded-2xl border border-border bg-surface p-6 sm:p-8 shadow-sm">
            <div class="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-5">
              <div>
                <h4 class="text-xl font-black text-foreground">
                  全真模拟试题详解 · 考点剖析 (Question Solutions & Analysis)
                </h4>
                <p class="text-xs text-muted-foreground mt-1">
                  Mandarin Bean style question-by-question breakdown, audio transcripts, English translations, and grammar test points.
                </p>
              </div>

              <!-- Filter tabs -->
              <div class="flex gap-2">
                <button
                  type="button"
                  class="rounded-xl px-3 py-1.5 text-xs font-bold transition-all"
                  :class="reviewFilter === 'all' ? 'bg-primary text-primary-foreground shadow-xs' : 'border border-border text-muted-foreground hover:text-foreground'"
                  @click="reviewFilter = 'all'"
                >
                  全部试题 ({{ currentTest.questions.length }})
                </button>
                <button
                  type="button"
                  class="rounded-xl px-3 py-1.5 text-xs font-bold transition-all"
                  :class="reviewFilter === 'incorrect' ? 'bg-red-600 text-white shadow-xs' : 'border border-border text-muted-foreground hover:text-foreground'"
                  @click="reviewFilter = 'incorrect'"
                >
                  错题精析 ({{ incorrectCount }})
                </button>
                <button
                  type="button"
                  class="rounded-xl px-3 py-1.5 text-xs font-bold transition-all"
                  :class="reviewFilter === 'correct' ? 'bg-emerald-600 text-white shadow-xs' : 'border border-border text-muted-foreground hover:text-foreground'"
                  @click="reviewFilter = 'correct'"
                >
                  答对题目 ({{ correctCount }})
                </button>
              </div>
            </div>

            <!-- List of Questions -->
            <div class="mt-6 space-y-6">
              <div
                v-for="q in reviewQuestions"
                :key="q.id"
                class="rounded-2xl border p-5 sm:p-6 transition-all"
                :class="q.isCorrect ? 'border-emerald-200/80 bg-emerald-50/20 dark:border-emerald-950 dark:bg-emerald-950/10' : 'border-red-200/80 bg-red-50/20 dark:border-red-950 dark:bg-red-950/10'"
              >
                <!-- Question Header -->
                <div class="flex flex-wrap items-center justify-between gap-2 border-b border-border/60 pb-3">
                  <div class="flex items-center gap-2">
                    <span
                      class="flex size-7 items-center justify-center rounded-lg text-xs font-black"
                      :class="q.isCorrect ? 'bg-emerald-600 text-white' : 'bg-red-600 text-white'"
                    >
                      {{ q.originalIndex + 1 }}
                    </span>
                    <span class="text-xs font-bold" :class="q.isCorrect ? 'text-emerald-700 dark:text-emerald-400' : 'text-red-700 dark:text-red-400'">
                      {{ q.isCorrect ? '✓ 回答正确 (Correct)' : '✗ 回答错误 (Incorrect)' }}
                    </span>
                    <span v-if="q.part" class="text-xs text-muted-foreground">
                      · 第 {{ q.part }} 部分
                    </span>
                  </div>

                  <!-- Audio Replay in Review -->
                  <div v-if="q.audioText" class="flex items-center gap-2">
                    <button
                      type="button"
                      class="flex items-center gap-1.5 rounded-lg border border-border bg-surface px-2.5 py-1 text-xs font-semibold text-primary hover:bg-muted"
                      @click="playQuestionAudio(q.audioText, q.originalIndex)"
                    >
                      <span>🔊 听力重播</span>
                    </button>
                  </div>
                </div>

                <!-- Prompt & Text -->
                <div class="mt-4 space-y-2">
                  <p class="text-sm font-bold text-foreground">{{ q.prompt }}</p>

                  <!-- Chinese Sentence / Prompt -->
                  <div v-if="q.sentence || q.text" class="rounded-xl bg-surface-raised p-3 border border-border">
                    <p class="text-lg font-bold text-foreground" lang="zh">
                      {{ formatChineseText(q.sentence || q.text || '') }}
                    </p>
                  </div>

                  <!-- Listening Transcript if applicable -->
                  <div v-if="q.audioText" class="rounded-xl border border-blue-200 bg-blue-50/40 p-3 text-xs dark:border-blue-950 dark:bg-blue-950/20">
                    <span class="font-bold text-blue-900 dark:text-blue-300">听力原文 (Audio Transcript): </span>
                    <span class="font-medium text-foreground text-sm" lang="zh">“{{ q.audioText }}”</span>
                  </div>

                  <!-- Image Emoji if applicable -->
                  <div v-if="q.imageEmoji" class="text-3xl py-1">{{ q.imageEmoji }}</div>
                </div>

                <!-- Options / Answer Comparison -->
                <div class="mt-4 grid gap-2 sm:grid-cols-2">
                  <div
                    v-for="(opt, optIdx) in q.options"
                    :key="opt"
                    class="rounded-xl border p-3 text-xs sm:text-sm font-medium transition-colors"
                    :class="[
                      optIdx === q.correctAnswer
                        ? 'border-emerald-500 bg-emerald-100/60 font-bold text-emerald-950 dark:bg-emerald-950/60 dark:text-emerald-100'
                        : optIdx === userAnswers[q.originalIndex]
                          ? 'border-red-500 bg-red-100/60 font-bold text-red-950 dark:bg-red-950/60 dark:text-red-100'
                          : 'border-border bg-surface text-muted-foreground'
                    ]"
                  >
                    <div class="flex items-center justify-between">
                      <span>{{ opt }}</span>
                      <span v-if="optIdx === q.correctAnswer" class="text-xs font-black text-emerald-700 dark:text-emerald-300">
                        ✓ 官方正解
                      </span>
                      <span v-else-if="optIdx === userAnswers[q.originalIndex]" class="text-xs font-black text-red-600 dark:text-red-400">
                        ✗ 您的选择
                      </span>
                    </div>
                  </div>
                </div>

                <!-- Mandarin Bean In-depth Explanation Card -->
                <div class="mt-4 rounded-xl border border-border bg-surface p-4 text-xs leading-relaxed text-foreground">
                  <div class="flex items-center gap-1.5 font-bold text-primary mb-1">
                    <span>💡</span> 考点详解与语法解析 (Mandarin Bean Analysis):
                  </div>
                  <p class="text-muted-foreground">{{ q.explanation }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- ============================================== -->
        <!-- ACTIVE QUESTION VIEW (Mandarin Bean Test Paper) -->
        <!-- ============================================== -->
        <div v-else class="grid items-start gap-6 lg:grid-cols-[1fr_20rem]">
          <!-- Main Exam Paper Question Box -->
          <div class="rounded-3xl border-2 border-border bg-surface p-6 shadow-md sm:p-8">
            <!-- Part & Question Indicator -->
            <div class="flex flex-wrap items-center justify-between gap-2 border-b border-border pb-4">
              <div class="flex items-center gap-2">
                <span class="rounded-md bg-red-100 px-2 py-0.5 text-xs font-black text-red-800 dark:bg-red-950/80 dark:text-red-200">
                  第 {{ currentTest.questions[currentQuestionIndex].part || 1 }} 部分
                </span>
                <span class="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  第 {{ currentQuestionIndex + 1 }} 题 / 共 {{ currentTest.questions.length }} 题
                </span>
              </div>
              <div class="flex items-center gap-3 text-xs text-muted-foreground">
                <span>已作答 {{ Object.keys(userAnswers).length }} / {{ currentTest.questions.length }}</span>
              </div>
            </div>

            <!-- Question Prompt Header -->
            <div class="mt-5">
              <h3 class="text-base sm:text-lg font-bold text-foreground">
                {{ currentTest.questions[currentQuestionIndex].prompt }}
              </h3>

              <!-- 1. AUDIO PLAYER CARD (Listening Questions) -->
              <div
                v-if="currentTest.questions[currentQuestionIndex].audioText"
                class="mt-5 rounded-2xl border-2 border-blue-200 bg-blue-50/30 p-5 dark:border-blue-900/50 dark:bg-blue-950/20"
              >
                <div class="flex flex-wrap items-center justify-between gap-4">
                  <div class="flex items-center gap-4">
                    <button
                      type="button"
                      class="flex size-14 items-center justify-center rounded-2xl bg-blue-600 text-white text-2xl shadow-lg hover:bg-blue-700 active:scale-95 transition-all"
                      :class="isPlayingAudio ? 'ring-4 ring-blue-300 animate-pulse' : ''"
                      @click="playQuestionAudio(currentTest.questions[currentQuestionIndex].audioText, currentQuestionIndex)"
                    >
                      {{ isPlayingAudio ? '🔊' : '▶️' }}
                    </button>
                    <div>
                      <p class="text-sm font-bold text-foreground">
                        听力音频 (Listening Audio Track)
                      </p>
                      <p class="text-xs text-muted-foreground">
                        已播放 {{ audioPlayCount[currentQuestionIndex] || 0 }} / 2 次 · 官方标准听力只播两次
                      </p>
                    </div>
                  </div>

                  <UiButton
                    size="sm"
                    variant="outline"
                    class="font-bold text-xs"
                    @click="playQuestionAudio(currentTest.questions[currentQuestionIndex].audioText, currentQuestionIndex)"
                  >
                    🔊 重新播放 Play
                  </UiButton>
                </div>
              </div>

              <!-- 2. IMAGE CARD (Picture Match Questions) -->
              <div
                v-if="currentTest.questions[currentQuestionIndex].imageEmoji"
                class="mt-6 flex flex-col items-center justify-center"
              >
                <div class="flex size-36 items-center justify-center rounded-3xl border-2 border-border bg-surface-raised text-7xl shadow-inner">
                  {{ currentTest.questions[currentQuestionIndex].imageEmoji }}
                </div>
                <p v-if="currentTest.questions[currentQuestionIndex].imageDesc" class="mt-2 text-xs text-muted-foreground">
                  {{ currentTest.questions[currentQuestionIndex].imageDesc }}
                </p>
              </div>

              <!-- 3. SENTENCE / TEXT PROMPT -->
              <div
                v-if="currentTest.questions[currentQuestionIndex].sentence || currentTest.questions[currentQuestionIndex].text"
                class="mt-5 rounded-2xl border border-border bg-surface-raised p-5 text-center shadow-xs"
              >
                <p class="text-2xl sm:text-3xl font-black text-foreground" lang="zh">
                  {{ formatChineseText(currentTest.questions[currentQuestionIndex].sentence || currentTest.questions[currentQuestionIndex].text || '') }}
                </p>
              </div>

              <!-- 4. DIALOGUE CARD (if dialogue present in question) -->
              <div
                v-if="Boolean(currentTest.questions[currentQuestionIndex]?.question?.includes('：'))"
                class="mt-5 space-y-2 rounded-2xl border border-border bg-surface-raised p-4"
              >
                <div
                  v-for="(line, lIdx) in parseDialogue(currentTest.questions[currentQuestionIndex].question || '')"
                  :key="lIdx"
                  class="flex items-start gap-2.5"
                >
                  <span class="text-base">{{ line.avatar }}</span>
                  <div>
                    <span class="text-xs font-bold text-muted-foreground">{{ line.speaker }}: </span>
                    <span class="text-base font-semibold text-foreground" lang="zh">{{ formatChineseText(line.text) }}</span>
                  </div>
                </div>
              </div>

              <!-- ============================================== -->
              <!-- MANDARIN BEAN SPECIALIZED INPUT COMPONENTS    -->
              <!-- ============================================== -->

              <!-- TYPE A: TRUE / FALSE (判断对错) -->
              <div
                v-if="currentTest.questions[currentQuestionIndex].type === 'true_false' || currentTest.questions[currentQuestionIndex].type === 'match'"
                class="mt-8 grid grid-cols-2 gap-4"
              >
                <!-- TRUE [ √ ] -->
                <button
                  type="button"
                  class="group flex flex-col items-center justify-center rounded-2xl border-3 p-6 transition-all hover:scale-[1.02] active:scale-95"
                  :class="[
                    userAnswers[currentQuestionIndex] === 0
                      ? 'border-emerald-600 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-100 shadow-md ring-2 ring-emerald-500'
                      : 'border-border bg-surface text-foreground hover:border-emerald-400 hover:bg-emerald-50/20'
                  ]"
                  @click="userAnswers[currentQuestionIndex] = 0"
                >
                  <span class="text-5xl font-black text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform">
                    √
                  </span>
                  <span class="mt-2 text-lg font-black text-foreground">正确 (True)</span>
                  <span class="text-xs text-muted-foreground">符合录音 / 图文一致</span>
                  <span v-if="userAnswers[currentQuestionIndex] === 0" class="mt-2 rounded-full bg-emerald-600 px-3 py-0.5 text-xs font-black text-white">
                    已勾选 Selected
                  </span>
                </button>

                <!-- FALSE [ ✕ ] -->
                <button
                  type="button"
                  class="group flex flex-col items-center justify-center rounded-2xl border-3 p-6 transition-all hover:scale-[1.02] active:scale-95"
                  :class="[
                    userAnswers[currentQuestionIndex] === 1
                      ? 'border-red-600 bg-red-50 dark:bg-red-950/40 text-red-900 dark:text-red-100 shadow-md ring-2 ring-red-500'
                      : 'border-border bg-surface text-foreground hover:border-red-400 hover:bg-red-50/20'
                  ]"
                  @click="userAnswers[currentQuestionIndex] = 1"
                >
                  <span class="text-5xl font-black text-red-600 dark:text-red-400 group-hover:scale-110 transition-transform">
                    ✕
                  </span>
                  <span class="mt-2 text-lg font-black text-foreground">错误 (False)</span>
                  <span class="text-xs text-muted-foreground">不符合录音 / 图文不符</span>
                  <span v-if="userAnswers[currentQuestionIndex] === 1" class="mt-2 rounded-full bg-red-600 px-3 py-0.5 text-xs font-black text-white">
                    已勾选 Selected
                  </span>
                </button>
              </div>

              <!-- TYPE B: WORD BANK FILL-IN-THE-BLANK (选词填空) -->
              <div
                v-else-if="currentTest.questions[currentQuestionIndex].type === 'fill_blank'"
                class="mt-8 space-y-6"
              >
                <!-- Prominent Word Bank Tray -->
                <div class="rounded-2xl border-2 border-primary/30 bg-primary/5 p-4 sm:p-5">
                  <div class="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-primary mb-3">
                    <span>词语选框 (Official Word Bank)</span>
                    <span>点击词语快速填空</span>
                  </div>

                  <div class="grid grid-cols-2 gap-3 sm:grid-cols-4">
                    <button
                      v-for="item in parseWordBankOptions(currentTest.questions[currentQuestionIndex].options)"
                      :key="item.letter"
                      type="button"
                      class="flex items-center justify-between rounded-xl border-2 p-3 text-left font-bold transition-all hover:scale-105"
                      :class="[
                        userAnswers[currentQuestionIndex] === item.originalIndex
                          ? 'border-primary bg-primary text-primary-foreground shadow-md ring-2 ring-primary/40'
                          : 'border-border bg-surface text-foreground hover:border-primary/50'
                      ]"
                      @click="userAnswers[currentQuestionIndex] = item.originalIndex"
                    >
                      <span class="flex size-7 items-center justify-center rounded-lg bg-surface-raised font-mono text-xs font-black text-primary">
                        {{ item.letter }}
                      </span>
                      <span class="text-base" lang="zh">{{ item.word }}</span>
                    </button>
                  </div>
                </div>

                <!-- Sentence with Active Blank -->
                <div class="rounded-2xl border border-border bg-surface-raised p-6 text-center">
                  <p class="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">答题目标句 (Target Sentence)</p>
                  <p class="text-xl sm:text-2xl font-black text-foreground leading-relaxed" lang="zh">
                    <template v-if="getSelectedWordBankItem(currentTest.questions[currentQuestionIndex], userAnswers[currentQuestionIndex])">
                      已选答案:
                      <span class="inline-block rounded-xl bg-primary px-4 py-1 text-primary-foreground font-black shadow-xs">
                        {{ getSelectedWordBankItem(currentTest.questions[currentQuestionIndex], userAnswers[currentQuestionIndex])?.letter }}.
                        {{ getSelectedWordBankItem(currentTest.questions[currentQuestionIndex], userAnswers[currentQuestionIndex])?.word }}
                      </span>
                    </template>
                    <template v-else>
                      请在上方词语框中选择填空项
                    </template>
                  </p>
                </div>
              </div>

              <!-- TYPE C: SENTENCE UNSCRAMBLE (连词成句 - HSK 3 Writing) -->
              <div
                v-else-if="currentTest.questions[currentQuestionIndex].type === 'unscramble'"
                class="mt-8 space-y-6"
              >
                <!-- Sentence Assembly Workspace -->
                <div class="rounded-2xl border-2 border-dashed border-primary/40 bg-surface-raised p-6">
                  <div class="flex items-center justify-between text-xs font-bold text-muted-foreground mb-3">
                    <span>排列后的句子 (Assembled Sentence):</span>
                    <button
                      type="button"
                      class="text-xs font-bold text-red-500 hover:underline"
                      @click="resetUnscramble(currentQuestionIndex)"
                    >
                      重置重排 (Reset)
                    </button>
                  </div>

                  <!-- Sentence Line -->
                  <div class="min-h-16 flex flex-wrap items-center gap-2 rounded-xl border border-border bg-surface p-3">
                    <template v-if="(unscramblePlaced[currentQuestionIndex] || []).length > 0">
                      <button
                        v-for="(w, wIdx) in unscramblePlaced[currentQuestionIndex]"
                        :key="`${w}-${wIdx}`"
                        type="button"
                        class="flex items-center gap-1 rounded-xl bg-primary px-3 py-1.5 font-bold text-primary-foreground shadow-xs hover:bg-primary/90"
                        title="Click to remove from sentence"
                        @click="removeUnscrambleWord(wIdx, currentQuestionIndex)"
                      >
                        <span class="text-base" lang="zh">{{ w }}</span>
                        <span class="text-xs opacity-70">✕</span>
                      </button>
                      <span class="text-2xl font-black text-foreground">。</span>
                    </template>
                    <span v-else class="text-sm text-muted-foreground italic">
                      点击下方词语卡片，按正确的汉语语序排入此栏...
                    </span>
                  </div>
                </div>

                <!-- Available Word Chips Tray -->
                <div>
                  <p class="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                    待排词语卡片 (Click chips to place):
                  </p>
                  <div class="flex flex-wrap gap-3">
                    <button
                      v-for="(word, wIdx) in getAvailableUnscrambleWords(currentTest.questions[currentQuestionIndex], currentQuestionIndex)"
                      :key="`${word}-${wIdx}`"
                      type="button"
                      class="rounded-xl border-2 border-border bg-surface px-4 py-2 text-base font-black text-foreground shadow-xs transition-transform hover:scale-105 active:scale-95 hover:border-primary"
                      lang="zh"
                      @click="addUnscrambleWord(word, currentQuestionIndex, currentTest.questions[currentQuestionIndex])"
                    >
                      {{ word }}
                    </button>
                  </div>
                </div>

                <!-- Options fallback selector -->
                <div class="mt-4 border-t border-border pt-4">
                  <p class="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                    或直接从候选排列中勾选 (Or choose candidate order):
                  </p>
                  <div class="space-y-2">
                    <button
                      v-for="(opt, optIdx) in currentTest.questions[currentQuestionIndex].options"
                      :key="opt"
                      type="button"
                      class="flex w-full items-center justify-between rounded-xl border p-3.5 text-left font-bold transition-all"
                      :class="[
                        userAnswers[currentQuestionIndex] === optIdx
                          ? 'border-primary bg-primary text-primary-foreground shadow-sm'
                          : 'border-border bg-surface text-foreground hover:bg-muted'
                      ]"
                      @click="userAnswers[currentQuestionIndex] = optIdx"
                    >
                      <span class="text-sm sm:text-base">{{ opt }}</span>
                      <span v-if="userAnswers[currentQuestionIndex] === optIdx" class="text-xs">✓ 已选择</span>
                    </button>
                  </div>
                </div>
              </div>

              <!-- TYPE D: STANDARD MULTIPLE CHOICE (Comprehension & Dialogues) -->
              <div v-else class="mt-8 space-y-3">
                <button
                  v-for="(opt, optIdx) in currentTest.questions[currentQuestionIndex].options"
                  :key="opt"
                  type="button"
                  class="group flex w-full items-center justify-between rounded-2xl border-2 p-4 text-left font-semibold transition-all hover:border-primary/60"
                  :class="[
                    userAnswers[currentQuestionIndex] === optIdx
                      ? 'border-primary bg-primary text-primary-foreground shadow-md font-bold'
                      : 'border-border bg-surface text-foreground hover:bg-muted'
                  ]"
                  @click="userAnswers[currentQuestionIndex] = optIdx"
                >
                  <div class="flex items-center gap-3">
                    <span
                      class="flex size-8 items-center justify-center rounded-xl text-xs font-black"
                      :class="userAnswers[currentQuestionIndex] === optIdx ? 'bg-primary-foreground text-primary' : 'bg-surface-raised text-muted-foreground group-hover:text-foreground'"
                    >
                      {{ ['A', 'B', 'C', 'D', 'E'][optIdx] || optIdx + 1 }}
                    </span>
                    <span class="text-base" lang="zh">{{ opt }}</span>
                  </div>
                  <span v-if="userAnswers[currentQuestionIndex] === optIdx" class="text-xs font-black">
                    ✓ 已选择
                  </span>
                </button>
              </div>
            </div>

            <!-- Exam Paper Stepper Controls -->
            <div class="mt-10 flex items-center justify-between border-t border-border pt-6">
              <UiButton
                size="sm"
                variant="outline"
                :disabled="currentQuestionIndex === 0"
                @click="currentQuestionIndex--"
              >
                ◀ 上一题 (Prev)
              </UiButton>

              <div class="text-xs font-bold text-muted-foreground">
                {{ currentQuestionIndex + 1 }} / {{ currentTest.questions.length }}
              </div>

              <UiButton
                v-if="currentQuestionIndex < currentTest.questions.length - 1"
                size="sm"
                @click="currentQuestionIndex++"
              >
                下一题 (Next) ▶
              </UiButton>

              <UiButton
                v-else
                size="sm"
                class="bg-emerald-600 hover:bg-emerald-700 text-white font-bold"
                @click="submitTest"
              >
                ✓ 交卷评卷 Submit
              </UiButton>
            </div>
          </div>

          <!-- Official Hanban Answer Sheet (答题卡) Sidebar -->
          <aside class="sticky top-6 rounded-3xl border border-border bg-surface p-5 shadow-sm">
            <div class="flex items-center justify-between border-b border-border pb-3">
              <div>
                <h3 class="text-sm font-black text-foreground">答题卡 (Answer Sheet)</h3>
                <p class="text-xs text-muted-foreground">Click number to jump</p>
              </div>
              <UiBadge variant="secondary" class="text-xs font-mono">
                {{ Object.keys(userAnswers).length }}/{{ currentTest.questions.length }}
              </UiBadge>
            </div>

            <!-- Question Numbers Grid -->
            <div class="mt-4 grid grid-cols-5 gap-2">
              <button
                v-for="(_, idx) in currentTest.questions"
                :key="idx"
                type="button"
                class="flex size-9 items-center justify-center rounded-xl text-xs font-black transition-all"
                :class="[
                  currentQuestionIndex === idx
                    ? 'ring-2 ring-primary ring-offset-2 bg-primary text-primary-foreground shadow-sm'
                    : userAnswers[idx] !== undefined
                      ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200 border border-emerald-300 dark:border-emerald-900'
                      : 'bg-muted text-muted-foreground hover:bg-accent'
                ]"
                @click="currentQuestionIndex = idx"
              >
                {{ idx + 1 }}
              </button>
            </div>

            <!-- Quick Submit Button in Drawer -->
            <div class="mt-6 border-t border-border pt-4">
              <UiButton
                class="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm shadow-md"
                @click="submitTest"
              >
                交卷评卷 (Submit Exam)
              </UiButton>
            </div>
          </aside>
        </div>
      </div>

      <!-- ============================================== -->
      <!-- VIEW 2: ALL MOCK TESTS CATALOGUE               -->
      <!-- ============================================== -->
      <div v-else>
        <!-- Filter Tabs -->
        <div class="mb-6 flex gap-2 overflow-x-auto pb-1">
          <button
            type="button"
            :class="[
              'rounded-xl px-4 py-2 text-sm font-semibold transition-colors',
              activeFilter === 'all'
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'bg-surface border border-border text-muted-foreground hover:text-foreground'
            ]"
            @click="activeFilter = 'all'"
          >
            全部模考 All Tests ({{ allTests.length }})
          </button>
          <button
            type="button"
            :class="[
              'rounded-xl px-4 py-2 text-sm font-semibold transition-colors',
              activeFilter === 'listening'
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'bg-surface border border-border text-muted-foreground hover:text-foreground'
            ]"
            @click="activeFilter = 'listening'"
          >
            🎧 听力全真模拟 Listening ({{ allTests.filter(test => test.type === 'listening').length }})
          </button>
          <button
            type="button"
            :class="[
              'rounded-xl px-4 py-2 text-sm font-semibold transition-colors',
              activeFilter === 'reading'
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'bg-surface border border-border text-muted-foreground hover:text-foreground'
            ]"
            @click="activeFilter = 'reading'"
          >
            📖 阅读全真模拟 Reading ({{ allTests.filter(test => test.type === 'reading').length }})
          </button>
          <button
            type="button"
            :class="[
              'rounded-xl px-4 py-2 text-sm font-semibold transition-colors',
              activeFilter === 'writing'
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'bg-surface border border-border text-muted-foreground hover:text-foreground'
            ]"
            @click="activeFilter = 'writing'"
          >
            ✍️ 书写语法模拟 Writing ({{ allTests.filter(test => test.type === 'writing').length }})
          </button>
        </div>

        <CompAdSense v-if="!currentTest" format="banner" slot-id="mock-tests-list-top" />

        <!-- Test Groups by Level -->
        <div class="space-y-10">
          <section v-for="group in testGroups" :key="group.level" :aria-labelledby="`hsk-${group.level}-tests`">
            <div class="mb-4 flex flex-wrap items-center justify-between gap-3">
              <div class="flex items-center gap-2">
                <span class="flex size-7 items-center justify-center rounded-lg bg-red-600 text-xs font-black text-white">
                  HSK
                </span>
                <h2 :id="`hsk-${group.level}-tests`" class="text-xl font-black text-foreground">
                  HSK {{ group.level }} 级全真模拟试卷
                </h2>
              </div>
              <span class="text-sm font-semibold text-muted-foreground">{{ group.tests.length }} 套试卷</span>
            </div>

            <div v-if="group.tests.length" class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div
                v-for="t in group.tests"
                :key="t.id"
                class="group cursor-pointer rounded-2xl border border-border bg-surface p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-red-500/50 hover:shadow-md"
                @click="selectTest(t)"
              >
                <div class="flex items-center justify-between">
                  <UiBadge :variant="t.type === 'listening' ? 'primary' : t.type === 'reading' ? 'secondary' : 'outline'">
                    {{ t.type.toUpperCase() }}
                  </UiBadge>
                  <span class="text-xs font-mono font-bold text-muted-foreground">⏱️ {{ t.durationMinutes }} Mins</span>
                </div>

                <h3 class="mt-4 text-lg font-black text-foreground group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                  {{ t.title }}
                </h3>

                <p class="mt-2 text-xs text-muted-foreground leading-relaxed">
                  {{ t.totalQuestions }} questions · Official Mandarin Bean format with audio simulation, True/False cards, Word Bank, and instant grading.
                </p>

                <div class="mt-6 pt-4 border-t border-border flex items-center justify-between">
                  <span class="text-xs font-black text-red-600 dark:text-red-400 group-hover:underline">进入考场 Start Exam →</span>
                  <span class="text-xs font-semibold text-muted-foreground">合格线: 60%</span>
                </div>
              </div>
            </div>
            <p v-else class="rounded-xl border border-dashed border-border p-5 text-sm text-muted-foreground">
              {{ allTests.length
                ? `No tests match this filter for HSK ${group.level}.`
                : `No HSK ${group.level} practice tests are available yet.` }}
            </p>
          </section>
        </div>

        <CompAdSense v-if="!currentTest" format="in-feed" slot-id="mock-tests-list-bottom" class="mt-10" />
      </div>
    </main>
  </div>
</template>
