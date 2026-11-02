<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { UiBadge } from '../Ui'
import { speakChinese } from '../Utils/speech'

type HeroTab = 'hanzi' | 'dialogue' | 'quiz'
const activeTab = ref<HeroTab>('hanzi')

// Hanzi Interactive Showcase Data
interface HeroCharacter {
  char: string
  pinyin: string
  meaning: string
  level: number
  strokes: number
  radical: string
  sentence: {
    chinese: string
    pinyin: string
    english: string
  }
}

const characters: HeroCharacter[] = [
  {
    char: '学',
    pinyin: 'xué',
    meaning: 'to study / learn',
    level: 1,
    strokes: 8,
    radical: '子',
    sentence: {
      chinese: '我们在学校学习汉语。',
      pinyin: 'Wǒmen zài xuéxiào xuéxí Hànyǔ.',
      english: 'We study Chinese at school.',
    },
  },
  {
    char: '好',
    pinyin: 'hǎo',
    meaning: 'good / well / fine',
    level: 1,
    strokes: 6,
    radical: '女',
    sentence: {
      chinese: '今天天气非常好！',
      pinyin: 'Jīntiān tiānqì fēicháng hǎo!',
      english: 'The weather today is very nice!',
    },
  },
  {
    char: '爱',
    pinyin: 'ài',
    meaning: 'to love / affection',
    level: 1,
    strokes: 10,
    radical: '爫',
    sentence: {
      chinese: '我爱我的家人和朋友。',
      pinyin: 'Wǒ ài wǒ de jiārén hé péngyou.',
      english: 'I love my family and friends.',
    },
  },
  {
    char: '书',
    pinyin: 'shū',
    meaning: 'book / letter',
    level: 1,
    strokes: 4,
    radical: '乛',
    sentence: {
      chinese: '桌子上有一本中文书。',
      pinyin: 'Zhuōzi shang yǒu yì běn Zhōngwén shū.',
      english: 'There is a Chinese book on the table.',
    },
  },
  {
    char: '友',
    pinyin: 'yǒu',
    meaning: 'friend / companion',
    level: 1,
    strokes: 4,
    radical: '又',
    sentence: {
      chinese: '他是我的中国好朋友。',
      pinyin: 'Tā shì wǒ de Zhōngguó hǎo péngyou.',
      english: 'He is my good Chinese friend.',
    },
  },
]

const selectedCharIndex = ref(0)
const currentChar = () => characters[selectedCharIndex.value]
const showPinyin = ref(true)

function playCharAudio(text: string) {
  void speakChinese(text, 0.9)
}

// Mini Quiz Interactive Data
interface MiniQuiz {
  question: string
  pinyin: string
  translation: string
  correctAnswer: boolean
  explanation: string
}

const quizQuestions: MiniQuiz[] = [
  {
    question: '我喜欢喝茶，不喜欢喝咖啡。',
    pinyin: 'Wǒ xǐhuan hē chá, bù xǐhuan hē kāfēi.',
    translation: 'I like drinking tea, I do not like drinking coffee.',
    correctAnswer: true,
    explanation: '“喜欢” (xǐhuan) means to like; “不” (bù) negates the second clause.',
  },
  {
    question: '昨天是星期日，今天是星期五。',
    pinyin: 'Zuótiān shì xīngqīrì, jīntiān shì xīngqīwǔ.',
    translation: 'Yesterday was Sunday, today is Friday.',
    correctAnswer: false,
    explanation: 'If yesterday was Sunday (星期日), today must be Monday (星期一), not Friday (星期五).',
  },
  {
    question: '他是中国留学生，会说汉语。',
    pinyin: 'Tā shì Zhōngguó liúxuéshēng, huì shuō Hànyǔ.',
    translation: 'He is a Chinese student abroad and can speak Chinese.',
    correctAnswer: true,
    explanation: '“会” (huì) expresses an acquired skill (speaking Chinese).',
  },
]

const currentQuizIndex = ref(0)
const quizSelectedAnswer = ref<boolean | null>(null)
const isAnswerChecked = ref(false)

function submitQuizAnswer(ans: boolean) {
  quizSelectedAnswer.value = ans
  isAnswerChecked.value = true
}

function nextQuiz() {
  currentQuizIndex.value = (currentQuizIndex.value + 1) % quizQuestions.length
  quizSelectedAnswer.value = null
  isAnswerChecked.value = false
}

const currentQuiz = () => quizQuestions[currentQuizIndex.value]
</script>

<template>
  <div class="relative w-full rounded-3xl border-2 border-primary/30 bg-surface p-5 sm:p-7 shadow-2xl backdrop-blur-md">
    <!-- Top Decorative Badge & Status Pill -->
    <div class="flex items-center justify-between pb-4 border-b border-border">
      <div class="flex items-center gap-2">
        <span class="flex size-3.5 relative">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span class="relative inline-flex rounded-full size-3.5 bg-emerald-500" />
        </span>
        <span class="text-xs font-bold uppercase tracking-wider text-foreground">
          HSK Interactive Live Studio
        </span>
      </div>
      <span class="rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-bold text-primary">
        Live Demo
      </span>
    </div>

    <!-- Mode Selector Tabs -->
    <div class="mt-4 flex items-center justify-between gap-1.5 rounded-2xl bg-muted/60 p-1.5 border border-border/80">
      <button
        type="button"
        @click="activeTab = 'hanzi'"
        :class="[
          'flex-1 rounded-xl py-2 text-xs font-bold transition-all cursor-pointer text-center',
          activeTab === 'hanzi'
            ? 'bg-surface text-primary shadow-sm shadow-black/5'
            : 'text-muted-foreground hover:text-foreground',
        ]"
      >
        ✍️ Hanzi Lab
      </button>
      <button
        type="button"
        @click="activeTab = 'dialogue'"
        :class="[
          'flex-1 rounded-xl py-2 text-xs font-bold transition-all cursor-pointer text-center',
          activeTab === 'dialogue'
            ? 'bg-surface text-primary shadow-sm shadow-black/5'
            : 'text-muted-foreground hover:text-foreground',
        ]"
      >
        💬 Dialogue
      </button>
      <button
        type="button"
        @click="activeTab = 'quiz'"
        :class="[
          'flex-1 rounded-xl py-2 text-xs font-bold transition-all cursor-pointer text-center',
          activeTab === 'quiz'
            ? 'bg-surface text-primary shadow-sm shadow-black/5'
            : 'text-muted-foreground hover:text-foreground',
        ]"
      >
        ⏱️ Mini Test
      </button>
    </div>

    <!-- TAB 1: HANZI LAB PREVIEW -->
    <div v-if="activeTab === 'hanzi'" class="mt-5 space-y-4">
      <!-- Character Switcher Pills -->
      <div class="flex items-center justify-center gap-2">
        <button
          v-for="(item, idx) in characters"
          :key="item.char"
          type="button"
          @click="selectedCharIndex = idx"
          :class="[
            'size-10 rounded-xl font-black text-sm transition-all cursor-pointer flex items-center justify-center border',
            selectedCharIndex === idx
              ? 'border-primary bg-primary text-white shadow-md shadow-primary/30 scale-105'
              : 'border-border bg-surface text-foreground hover:bg-surface-raised hover:border-primary/40',
          ]"
        >
          {{ item.char }}
        </button>
      </div>

      <!-- Tian Zi Ge Canvas Preview Card -->
      <div class="relative overflow-hidden rounded-2xl border border-red-200 dark:border-red-950 bg-red-50/40 dark:bg-red-950/20 p-5 text-center">
        <!-- Pinyin & Level Header -->
        <div class="flex items-center justify-between text-xs font-semibold text-muted-foreground mb-2">
          <div class="flex items-center gap-1.5">
            <span class="rounded bg-rose-600 px-1.5 py-0.5 text-[10px] font-black text-white">
              HSK {{ currentChar().level }}
            </span>
            <span>Radical: {{ currentChar().radical }} · {{ currentChar().strokes }} Strokes</span>
          </div>
          <button
            type="button"
            @click="showPinyin = !showPinyin"
            class="text-[11px] font-bold text-primary hover:underline cursor-pointer"
          >
            🔤 Pinyin: {{ showPinyin ? 'ON' : 'OFF' }}
          </button>
        </div>

        <!-- Tian Zi Ge Grid Box -->
        <div class="mx-auto my-3 flex size-36 sm:size-40 items-center justify-center rounded-2xl border-2 border-dashed border-red-300 dark:border-red-800 bg-surface shadow-inner relative">
          <!-- Crosshair Guidelines of Tian Zi Ge -->
          <div class="absolute inset-x-0 top-1/2 -translate-y-1/2 border-b border-dashed border-red-200 dark:border-red-900/60 pointer-events-none" />
          <div class="absolute inset-y-0 left-1/2 -translate-x-1/2 border-r border-dashed border-red-200 dark:border-red-900/60 pointer-events-none" />

          <!-- Large Character -->
          <span class="text-7xl sm:text-8xl font-black text-foreground select-none">
            {{ currentChar().char }}
          </span>
        </div>

        <!-- Pinyin and Audio Row -->
        <div class="mt-2 flex items-center justify-center gap-3">
          <span v-if="showPinyin" class="text-xl font-black text-primary">
            {{ currentChar().pinyin }}
          </span>
          <button
            type="button"
            @click="playCharAudio(currentChar().char)"
            class="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1 text-xs font-bold text-foreground shadow-xs hover:border-primary/50 cursor-pointer active:scale-95 transition-all"
            aria-label="Listen to character pronunciation"
          >
            <span>🔊</span>
            <span>Listen</span>
          </button>
        </div>
        <p class="mt-1 text-xs font-semibold text-muted-foreground">
          {{ currentChar().meaning }}
        </p>

        <!-- Example Sentence Breakdown -->
        <div class="mt-3.5 rounded-xl border border-border/80 bg-surface/90 p-3 text-left">
          <div class="flex items-center justify-between text-[11px] font-bold text-muted-foreground mb-1">
            <span>Example Usage:</span>
            <button
              type="button"
              @click="playCharAudio(currentChar().sentence.chinese)"
              class="text-primary hover:underline cursor-pointer"
            >
              🔊 Play Sentence
            </button>
          </div>
          <div class="text-sm font-bold text-foreground">
            {{ currentChar().sentence.chinese }}
          </div>
          <div v-if="showPinyin" class="text-xs text-primary font-medium mt-0.5">
            {{ currentChar().sentence.pinyin }}
          </div>
          <div class="text-xs text-muted-foreground mt-0.5">
            {{ currentChar().sentence.english }}
          </div>
        </div>

        <!-- Direct CTA to Character Lab -->
        <div class="mt-3.5 flex justify-end">
          <RouterLink :to="`/hsk1/practice?char=${currentChar().char}`" class="text-xs font-bold text-primary hover:underline">
            Open in Hanzi Writing Studio →
          </RouterLink>
        </div>
      </div>
    </div>

    <!-- TAB 2: DIALOGUE PREVIEW -->
    <div v-else-if="activeTab === 'dialogue'" class="mt-5 space-y-3.5">
      <div class="rounded-2xl border border-border bg-surface-raised p-4 space-y-3">
        <div class="flex items-center justify-between text-xs font-bold text-muted-foreground">
          <span>HSK 1 · Lesson 1 Greeting Scenario</span>
          <UiBadge variant="secondary">Audio Enabled</UiBadge>
        </div>

        <!-- Speaker A -->
        <div class="flex items-start gap-2.5">
          <div class="flex size-8 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-xs font-bold text-blue-700 dark:text-blue-400">
            A
          </div>
          <div class="flex-1 rounded-2xl rounded-tl-none bg-blue-50/60 dark:bg-blue-950/30 p-3 border border-blue-200/60 dark:border-blue-900/40">
            <div class="flex items-center justify-between">
              <span class="text-xs font-bold text-blue-900 dark:text-blue-300">王朋 (Wang Peng)</span>
              <button
                type="button"
                @click="playCharAudio('你好！你是中国留学生吗？')"
                class="text-xs text-blue-700 dark:text-blue-400 hover:underline cursor-pointer"
              >
                🔊 Play
              </button>
            </div>
            <p class="mt-1 text-sm font-bold text-foreground">你好！你是中国留学生吗？</p>
            <p class="text-xs text-primary font-medium">Nǐ hǎo! Nǐ shì Zhōngguó liúxuéshēng ma?</p>
            <p class="text-xs text-muted-foreground mt-0.5">Hello! Are you an overseas Chinese student?</p>
          </div>
        </div>

        <!-- Speaker B -->
        <div class="flex items-start gap-2.5">
          <div class="flex size-8 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-xs font-bold text-emerald-700 dark:text-emerald-400">
            B
          </div>
          <div class="flex-1 rounded-2xl rounded-tl-none bg-emerald-50/60 dark:bg-emerald-950/30 p-3 border border-emerald-200/60 dark:border-emerald-900/40">
            <div class="flex items-center justify-between">
              <span class="text-xs font-bold text-emerald-900 dark:text-emerald-300">李友 (Li You)</span>
              <button
                type="button"
                @click="playCharAudio('对，我是。很高兴认识你！')"
                class="text-xs text-emerald-700 dark:text-emerald-400 hover:underline cursor-pointer"
              >
                🔊 Play
              </button>
            </div>
            <p class="mt-1 text-sm font-bold text-foreground">对，我是。很高兴认识你！</p>
            <p class="text-xs text-primary font-medium">Duì, wǒ shì. Hěn gāoxìng rènshi nǐ!</p>
            <p class="text-xs text-muted-foreground mt-0.5">Yes, I am. Very nice to meet you!</p>
          </div>
        </div>
      </div>

      <div class="text-right">
        <RouterLink to="/hsk1/dialogs" class="text-xs font-bold text-primary hover:underline">
          Explore all 30 Dialogue Scenarios →
        </RouterLink>
      </div>
    </div>

    <!-- TAB 3: QUICK QUIZ PREVIEW -->
    <div v-else-if="activeTab === 'quiz'" class="mt-5 space-y-4">
      <div class="rounded-2xl border border-border bg-surface-raised p-4 space-y-3">
        <div class="flex items-center justify-between text-xs font-bold text-muted-foreground">
          <span>Official Hanban True / False Practice</span>
          <span>Question {{ currentQuizIndex + 1 }} of {{ quizQuestions.length }}</span>
        </div>

        <!-- Question Card -->
        <div class="rounded-xl border border-border bg-surface p-4">
          <div class="flex items-center justify-between">
            <span class="text-xs font-bold text-primary">Read the sentence:</span>
            <button
              type="button"
              @click="playCharAudio(currentQuiz().question)"
              class="text-xs font-bold text-primary hover:underline cursor-pointer"
            >
              🔊 Audio
            </button>
          </div>
          <p class="mt-2 text-base font-black text-foreground">
            {{ currentQuiz().question }}
          </p>
          <p class="text-xs text-primary font-medium mt-0.5">
            {{ currentQuiz().pinyin }}
          </p>
          <p class="text-xs text-muted-foreground mt-1">
            "{{ currentQuiz().translation }}"
          </p>
        </div>

        <!-- True / False Buttons -->
        <div class="grid grid-cols-2 gap-3 pt-1">
          <button
            type="button"
            @click="submitQuizAnswer(true)"
            :disabled="isAnswerChecked"
            :class="[
              'rounded-xl border-2 py-3 font-bold text-sm transition-all cursor-pointer flex items-center justify-center gap-2',
              quizSelectedAnswer === true
                ? quizSelectedAnswer === currentQuiz().correctAnswer
                  ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300'
                  : 'border-rose-500 bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300'
                : 'border-border bg-surface text-foreground hover:border-emerald-500 hover:text-emerald-600',
            ]"
          >
            <span>✓</span>
            <span>对 (True)</span>
          </button>

          <button
            type="button"
            @click="submitQuizAnswer(false)"
            :disabled="isAnswerChecked"
            :class="[
              'rounded-xl border-2 py-3 font-bold text-sm transition-all cursor-pointer flex items-center justify-center gap-2',
              quizSelectedAnswer === false
                ? quizSelectedAnswer === currentQuiz().correctAnswer
                  ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300'
                  : 'border-rose-500 bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300'
                : 'border-border bg-surface text-foreground hover:border-rose-500 hover:text-rose-600',
            ]"
          >
            <span>✕</span>
            <span>错 (False)</span>
          </button>
        </div>

        <!-- Feedback Box -->
        <div
          v-if="isAnswerChecked"
          :class="[
            'rounded-xl p-3 text-xs leading-relaxed border transition-all',
            quizSelectedAnswer === currentQuiz().correctAnswer
              ? 'border-emerald-300 bg-emerald-50/80 dark:bg-emerald-950/30 text-emerald-900 dark:text-emerald-200'
              : 'border-rose-300 bg-rose-50/80 dark:bg-rose-950/30 text-rose-900 dark:text-rose-200',
          ]"
        >
          <div class="font-bold flex items-center gap-1.5">
            <span v-if="quizSelectedAnswer === currentQuiz().correctAnswer">🎉 Correct!</span>
            <span v-else>💡 Incorrect answer</span>
          </div>
          <p class="mt-1">{{ currentQuiz().explanation }}</p>
          <div class="mt-2 text-right">
            <button
              type="button"
              @click="nextQuiz"
              class="font-bold text-primary hover:underline cursor-pointer"
            >
              Try Next Question →
            </button>
          </div>
        </div>
      </div>

      <div class="text-right">
        <RouterLink to="/mock-tests" class="text-xs font-bold text-primary hover:underline">
          Take full 33 Timed Mock Exams →
        </RouterLink>
      </div>
    </div>
  </div>
</template>
