<script setup lang="ts">
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { UiButton } from '../../Ui'
import { speakChinese } from '../../Utils/speech'
import CompAdSense from '../../Components/CompAdSense.vue'

const activeStep = ref<1 | 2 | 3 | 4>(1)

// Step 1: 4 Tones
const tones = [
  { tone: '1st Tone', hanzi: '妈', pinyin: 'mā', meaning: 'Mother', pitch: '5-5 High Flat', tip: 'Sing high: like a high flat soprano note.' },
  { tone: '2nd Tone', hanzi: '麻', pinyin: 'má', meaning: 'Hemp', pitch: '3-5 Rising', tip: 'Question: like asking "What?! Really?!"' },
  { tone: '3rd Tone', hanzi: '马', pinyin: 'mǎ', meaning: 'Horse', pitch: '2-1-4 Dipping', tip: 'Dip low into your chest, then swoop slightly up.' },
  { tone: '4th Tone', hanzi: '骂', pinyin: 'mà', meaning: 'To scold', pitch: '5-1 Falling', tip: 'Firm, decisive command: like firmly saying "No!"' },
]

// Step 2: Top 5 Survival Words
const survivalWords = [
  { hanzi: '你好', pinyin: 'nǐ hǎo', meaning: 'Hello / Hi', breakdown: '你 (you) + 好 (good). Tone sandhi: pronounced "ní hǎo"!' },
  { hanzi: '谢谢', pinyin: 'xièxie', meaning: 'Thank you', breakdown: '1st syllable is decisive 4th tone; 2nd syllable is light neutral.' },
  { hanzi: '不客气', pinyin: 'bú kèqi', meaning: "You're welcome", breakdown: 'Literally "No politeness needed". 不 shifts to 2nd tone!' },
  { hanzi: '对不起', pinyin: 'duìbuqǐ', meaning: 'Sorry / Excuse me', breakdown: 'Essential politeness expression for apologizing.' },
  { hanzi: '再见', pinyin: 'zàijiàn', meaning: 'Goodbye / See you again', breakdown: '再 (again) + 见 (see). Two crisp 4th tones!' },
]

// Step 3: Interactive Quiz
const quiz = [
  {
    question: 'How do you say "Hello" in Chinese?',
    options: ['谢谢 (Xièxie)', '你好 (Nǐ hǎo)', '再见 (Zàijiàn)', '对不起 (Duìbuqǐ)'],
    correct: 1,
    tip: '你好 (Nǐ hǎo) literally means "You good"!',
  },
  {
    question: 'When two 3rd tones appear together (like 你 nǐ + 好 hǎo), how is the first tone pronounced?',
    options: ['It stays 3rd tone', 'It changes into 2nd tone (rising)', 'It becomes 4th tone', 'It becomes silent'],
    correct: 1,
    tip: 'This is the 3+3 -> 2+3 Tone Sandhi rule! Nǐ hǎo becomes Ní hǎo.',
  },
  {
    question: 'Which word means "Thank you"?',
    options: ['不客气 (Bú kèqi)', '对不起 (Duìbuqǐ)', '谢谢 (Xièxie)', '再见 (Zàijiàn)'],
    correct: 2,
    tip: '谢谢 (Xièxie) is the universal word of gratitude.',
  },
  {
    question: 'What does "再见" (Zàijiàn) literally mean?',
    options: ['Never again', 'Good morning', 'See you again', 'Safe journey'],
    correct: 2,
    tip: '再 (again) + 见 (to see) = See you again!',
  },
]

const userAnswers = ref<Record<number, number>>({})
const isSubmitted = ref(false)

const score = computed(() => {
  let s = 0
  quiz.forEach((q, idx) => {
    if (userAnswers.value[idx] === q.correct) s++
  })
  return s
})

function selectAnswer(qIdx: number, oIdx: number) {
  if (isSubmitted.value) return
  userAnswers.value[qIdx] = oIdx
}

function submitQuiz() {
  isSubmitted.value = true
}

function resetQuiz() {
  userAnswers.value = {}
  isSubmitted.value = false
}

function playAudio(text: string) {
  speakChinese(text)
}
</script>

<template>
  <main class="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8">
    <div class="mx-auto max-w-5xl space-y-8">
      
      <!-- Header -->
      <header class="space-y-3">
        <div class="flex items-center gap-2 text-sm text-muted-foreground">
          <RouterLink to="/" class="text-primary hover:underline">← Home</RouterLink>
          <span>/</span>
          <span class="text-foreground font-semibold">HSK Intro Lesson</span>
        </div>
        <div class="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 class="text-3xl font-extrabold tracking-tight sm:text-4xl">
              HSK Starter Lesson: 15-Minute Beginner Onboarding
            </h1>
            <p class="mt-2 text-muted-foreground max-w-2xl">
              Zero prior experience needed. Learn the 4 tones, 5 daily survival phrases, test yourself with an instant quiz, and discover the path to HSK certification.
            </p>
          </div>
          <RouterLink to="/hsk1">
            <UiButton variant="primary" size="sm">
              Go to HSK 1 Hub →
            </UiButton>
          </RouterLink>
        </div>
      </header>

      <!-- Step Navigation Tabs -->
      <nav aria-label="Lesson steps" class="grid grid-cols-2 sm:grid-cols-4 gap-2 border-b border-border pb-4">
        <button
          v-for="s in [1, 2, 3, 4] as const"
          :key="s"
          type="button"
          class="flex items-center gap-2 rounded-xl p-3 text-left transition-all cursor-pointer border"
          :class="activeStep === s ? 'border-primary bg-primary/10 text-primary font-bold shadow-xs' : 'border-border bg-surface text-muted-foreground hover:text-foreground'"
          @click="activeStep = s"
        >
          <span class="flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-black" :class="activeStep === s ? 'bg-primary text-white' : 'bg-muted text-foreground'">
            {{ s }}
          </span>
          <span class="text-xs truncate">
            {{ s === 1 ? '1. The 4 Tones' : s === 2 ? '2. Survival Words' : s === 3 ? '3. Quick Check' : '4. HSK Exam Map' }}
          </span>
        </button>
      </nav>

      <!-- Step 1: The 4 Tones -->
      <section v-if="activeStep === 1" class="space-y-6">
        <div class="rounded-3xl border border-border bg-surface p-6 sm:p-8 space-y-6 shadow-sm">
          <div>
            <span class="text-xs font-bold text-primary uppercase tracking-wider">Step 1 of 4</span>
            <h2 class="text-2xl font-bold tracking-tight">The 4 Tones: One Syllable, Four Meanings</h2>
            <p class="mt-1 text-sm text-muted-foreground">
              In Chinese, changing the pitch contour changes the entire word. Click each tone card to hear the difference between "Mother", "Hemp", "Horse", and "To scold".
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div
              v-for="t in tones"
              :key="t.tone"
              class="rounded-2xl border border-border bg-surface-raised p-4 transition-all hover:border-primary/50 space-y-2 cursor-pointer"
              @click="playAudio(t.hanzi)"
            >
              <div class="flex items-start justify-between">
                <div>
                  <span class="text-xs font-bold text-primary">{{ t.tone }}</span>
                  <div class="flex items-baseline gap-2 mt-1">
                    <span class="text-3xl font-serif font-black text-foreground">{{ t.hanzi }}</span>
                    <span class="text-lg font-bold text-primary">{{ t.pinyin }}</span>
                    <span class="text-xs text-muted-foreground">({{ t.meaning }})</span>
                  </div>
                </div>
                <button type="button" class="size-9 rounded-full bg-surface border border-border flex items-center justify-center text-sm shadow-xs hover:border-primary">
                  🔊
                </button>
              </div>
              <div class="text-[11px] font-mono text-muted-foreground">Pitch: {{ t.pitch }}</div>
              <p class="text-xs text-muted-foreground">{{ t.tip }}</p>
            </div>
          </div>

          <div class="flex justify-end pt-4">
            <UiButton @click="activeStep = 2">
              Next: Survival Words →
            </UiButton>
          </div>
        </div>
      </section>

      <!-- Step 2: Survival Words -->
      <section v-if="activeStep === 2" class="space-y-6">
        <div class="rounded-3xl border border-border bg-surface p-6 sm:p-8 space-y-6 shadow-sm">
          <div>
            <span class="text-xs font-bold text-primary uppercase tracking-wider">Step 2 of 4</span>
            <h2 class="text-2xl font-bold tracking-tight">The 5 Essential Survival Words</h2>
            <p class="mt-1 text-sm text-muted-foreground">
              These 5 phrases allow you to greet anyone, show gratitude, apologize, and politely depart. Click 🔊 to hear native pronunciation.
            </p>
          </div>

          <div class="space-y-3">
            <div
              v-for="word in survivalWords"
              :key="word.hanzi"
              class="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border bg-surface-raised p-4 transition-colors hover:border-primary/40"
            >
              <div class="flex items-center gap-4">
                <button
                  type="button"
                  class="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20 hover:scale-105 transition-transform"
                  title="Play audio"
                  @click="playAudio(word.hanzi)"
                >
                  🔊
                </button>
                <div>
                  <div class="flex items-baseline gap-2">
                    <span class="text-xl font-bold font-serif text-foreground">{{ word.hanzi }}</span>
                    <span class="text-sm font-semibold text-primary">{{ word.pinyin }}</span>
                    <span class="text-xs font-medium text-foreground">— {{ word.meaning }}</span>
                  </div>
                  <p class="text-xs text-muted-foreground mt-0.5">{{ word.breakdown }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="flex justify-between pt-4">
            <UiButton variant="outline" @click="activeStep = 1">
              ← Back to Tones
            </UiButton>
            <UiButton @click="activeStep = 3">
              Next: Quick Quiz →
            </UiButton>
          </div>
        </div>
      </section>

      <!-- Step 3: Quick Quiz -->
      <section v-if="activeStep === 3" class="space-y-6">
        <div class="rounded-3xl border border-border bg-surface p-6 sm:p-8 space-y-6 shadow-sm">
          <div class="flex flex-wrap items-center justify-between gap-4">
            <div>
              <span class="text-xs font-bold text-primary uppercase tracking-wider">Step 3 of 4</span>
              <h2 class="text-2xl font-bold tracking-tight">Quick Retention Check</h2>
              <p class="mt-1 text-sm text-muted-foreground">
                Answer these 4 questions to verify what you just learned.
              </p>
            </div>
            <div v-if="isSubmitted" class="rounded-xl bg-primary/10 border border-primary/20 px-3 py-1.5 text-center">
              <span class="text-xs font-bold text-primary">Score: {{ score }} / {{ quiz.length }}</span>
            </div>
          </div>

          <div class="space-y-6">
            <div
              v-for="(q, qIdx) in quiz"
              :key="q.question"
              class="rounded-2xl border border-border bg-surface-raised p-4 space-y-3"
            >
              <div class="font-bold text-sm text-foreground">
                {{ qIdx + 1 }}. {{ q.question }}
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <button
                  v-for="(opt, oIdx) in q.options"
                  :key="opt"
                  type="button"
                  class="rounded-xl border p-2.5 text-xs text-left transition-colors cursor-pointer"
                  :class="[
                    isSubmitted && oIdx === q.correct
                      ? 'border-emerald-500 bg-emerald-500/10 text-emerald-600 font-bold'
                      : isSubmitted && userAnswers[qIdx] === oIdx
                      ? 'border-rose-500 bg-rose-500/10 text-rose-600'
                      : userAnswers[qIdx] === oIdx
                      ? 'border-primary bg-primary/10 text-primary font-bold'
                      : 'border-border bg-surface text-foreground hover:border-primary/40',
                  ]"
                  @click="selectAnswer(qIdx, oIdx)"
                >
                  {{ opt }}
                </button>
              </div>

              <div v-if="isSubmitted" class="text-[11px] text-muted-foreground pt-1 border-t border-border/60">
                💡 {{ q.tip }}
              </div>
            </div>
          </div>

          <div class="flex flex-wrap items-center justify-between gap-4 pt-4">
            <UiButton variant="outline" @click="activeStep = 2">
              ← Back to Words
            </UiButton>
            <div class="flex gap-2">
              <UiButton v-if="!isSubmitted" variant="primary" @click="submitQuiz">
                Check Answers
              </UiButton>
              <UiButton v-else variant="outline" @click="resetQuiz">
                Try Again
              </UiButton>
              <UiButton @click="activeStep = 4">
                Next: Exam Roadmap →
              </UiButton>
            </div>
          </div>
        </div>
      </section>

      <!-- Step 4: Exam Roadmap -->
      <section v-if="activeStep === 4" class="space-y-6">
        <div class="rounded-3xl border border-border bg-surface p-6 sm:p-8 space-y-6 shadow-sm">
          <div>
            <span class="text-xs font-bold text-primary uppercase tracking-wider">Step 4 of 4</span>
            <h2 class="text-2xl font-bold tracking-tight">Your Path to HSK Certification</h2>
            <p class="mt-1 text-sm text-muted-foreground">
              The Hanyu Shuiping Kaoshi (HSK) is the official global standard. Here is how your learning journey will unfold on HSK Plus.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-5 space-y-3">
              <div class="flex items-center justify-between">
                <span class="rounded-lg bg-amber-500 text-white px-2 py-0.5 text-xs font-black">HSK 1</span>
                <span class="text-xs font-semibold text-amber-700 dark:text-amber-400">150 Words</span>
              </div>
              <h3 class="text-base font-bold text-foreground">Beginner Communication</h3>
              <p class="text-xs text-muted-foreground leading-relaxed">
                Simple greetings, ordering food, basic questions, numbers, dates, and shopping.
              </p>
              <RouterLink to="/hsk1" class="block pt-2">
                <UiButton variant="outline" size="sm" class="w-full">Explore HSK 1 →</UiButton>
              </RouterLink>
            </div>

            <div class="rounded-2xl border border-sky-500/30 bg-sky-500/5 p-5 space-y-3">
              <div class="flex items-center justify-between">
                <span class="rounded-lg bg-sky-500 text-white px-2 py-0.5 text-xs font-black">HSK 2</span>
                <span class="text-xs font-semibold text-sky-700 dark:text-sky-400">300 Words</span>
              </div>
              <h3 class="text-base font-bold text-foreground">Elementary Travel & Life</h3>
              <p class="text-xs text-muted-foreground leading-relaxed">
                Navigating transport, hotel check-ins, weather, directions, and everyday interactions in China.
              </p>
              <RouterLink to="/hsk2" class="block pt-2">
                <UiButton variant="outline" size="sm" class="w-full">Explore HSK 2 →</UiButton>
              </RouterLink>
            </div>

            <div class="rounded-2xl border border-rose-500/30 bg-rose-500/5 p-5 space-y-3">
              <div class="flex items-center justify-between">
                <span class="rounded-lg bg-rose-500 text-white px-2 py-0.5 text-xs font-black">HSK 3</span>
                <span class="text-xs font-semibold text-rose-700 dark:text-rose-400">600 Words</span>
              </div>
              <h3 class="text-base font-bold text-foreground">Intermediate Fluency</h3>
              <p class="text-xs text-muted-foreground leading-relaxed">
                Campus life, workplace discussion, expressing opinions, reading unpinyined texts, and CSC scholarship eligibility.
              </p>
              <RouterLink to="/hsk3" class="block pt-2">
                <UiButton variant="outline" size="sm" class="w-full">Explore HSK 3 →</UiButton>
              </RouterLink>
            </div>
          </div>

          <div class="rounded-2xl bg-muted/40 p-5 text-center space-y-3">
            <h3 class="text-lg font-bold text-foreground">Ready to start Lesson 1?</h3>
            <p class="text-xs text-muted-foreground max-w-lg mx-auto">
              Jump straight into HSK 1 Lesson 1: "Hello (你好)" with bilingual dialogues, stroke practice, and listening audio.
            </p>
            <RouterLink to="/hsk1/lessons">
              <UiButton variant="primary" size="md">
                Start HSK 1 Lesson 1 Now 🚀
              </UiButton>
            </RouterLink>
          </div>
        </div>
      </section>

      <CompAdSense class="mt-8" />
    </div>
  </main>
</template>
