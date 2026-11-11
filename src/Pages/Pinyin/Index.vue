<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { UiButton, UiIcon } from '../../Ui'
import { speakChinese } from '../../Utils/speech'
import CompAdSense from '../../Components/CompAdSense.vue'

// Tone Profiles
const tones = [
  {
    num: 1,
    name: '1st Tone: High & Flat',
    mark: 'ˉ (e.g. mā)',
    pitch: '5-5',
    color: 'rose',
    accent: 'border-rose-500/40 bg-rose-500/5 text-rose-600 dark:text-rose-400',
    hint: 'Sing a steady, high musical note. Keep pitch flat and unwavering.',
    examples: [
      { hanzi: '妈', pinyin: 'mā', en: 'Mom / Mother' },
      { hanzi: '八', pinyin: 'bā', en: 'Eight (8)' },
      { hanzi: '他', pinyin: 'tā', en: 'He / Him' },
      { hanzi: '吃', pinyin: 'chī', en: 'To eat' },
    ],
  },
  {
    num: 2,
    name: '2nd Tone: Rising Pitch',
    mark: 'ˊ (e.g. má)',
    pitch: '3-5',
    color: 'emerald',
    accent: 'border-emerald-500/40 bg-emerald-500/5 text-emerald-600 dark:text-emerald-400',
    hint: 'Like asking a question in surprise: "What?! Really?!" Starts mid, shoots up.',
    examples: [
      { hanzi: '麻', pinyin: 'má', en: 'Hemp / Sesame' },
      { hanzi: '十', pinyin: 'shí', en: 'Ten (10)' },
      { hanzi: '来', pinyin: 'lái', en: 'To come' },
      { hanzi: '国', pinyin: 'guó', en: 'Country' },
    ],
  },
  {
    num: 3,
    name: '3rd Tone: Dipping & Low',
    mark: 'ˇ (e.g. mǎ)',
    pitch: '2-1-4',
    color: 'indigo',
    accent: 'border-indigo-500/40 bg-indigo-500/5 text-indigo-600 dark:text-indigo-400',
    hint: 'Pitch dips down into your chest, then gently rises back up.',
    examples: [
      { hanzi: '马', pinyin: 'mǎ', en: 'Horse' },
      { hanzi: '好', pinyin: 'hǎo', en: 'Good / Well' },
      { hanzi: '你', pinyin: 'nǐ', en: 'You' },
      { hanzi: '我', pinyin: 'wǒ', en: 'I / Me' },
    ],
  },
  {
    num: 4,
    name: '4th Tone: Falling & Sharp',
    mark: 'ˋ (e.g. mà)',
    pitch: '5-1',
    color: 'amber',
    accent: 'border-amber-500/40 bg-amber-500/5 text-amber-700 dark:text-amber-400',
    hint: 'A decisive, sharp downward command: like firmly shouting "No!" or "Stop!"',
    examples: [
      { hanzi: '骂', pinyin: 'mà', en: 'To scold' },
      { hanzi: '不', pinyin: 'bù', en: 'No / Not' },
      { hanzi: '去', pinyin: 'qù', en: 'To go' },
      { hanzi: '看', pinyin: 'kàn', en: 'To look / read' },
    ],
  },
  {
    num: 5,
    name: 'Neutral Tone: Light & Soft',
    mark: '· (e.g. ma)',
    pitch: 'Light',
    color: 'stone',
    accent: 'border-border bg-muted/30 text-foreground',
    hint: 'Spoken softly, briefly, and neutrally with zero stress, like an unstuck syllable.',
    examples: [
      { hanzi: '吗', pinyin: 'ma', en: 'Question marker' },
      { hanzi: '呢', pinyin: 'ne', en: 'Follow-up marker' },
      { hanzi: '的', pinyin: 'de', en: 'Possessive marker' },
      { hanzi: '爸爸', pinyin: 'bàba', en: 'Dad (2nd syllable)' },
    ],
  },
]

// 21 Initials
const initials = [
  { pinyin: 'b', ipa: '[p]', audioText: '波', hint: 'unaspirated p like "s-p-ot"' },
  { pinyin: 'p', ipa: '[pʰ]', audioText: '坡', hint: 'aspirated p with puff of air' },
  { pinyin: 'm', ipa: '[m]', audioText: '摸', hint: 'like "m" in mom' },
  { pinyin: 'f', ipa: '[f]', audioText: '佛', hint: 'like "f" in food' },
  { pinyin: 'd', ipa: '[t]', audioText: '得', hint: 'unaspirated t like "s-t-op"' },
  { pinyin: 't', ipa: '[tʰ]', audioText: '特', hint: 'aspirated t with puff of air' },
  { pinyin: 'n', ipa: '[n]', audioText: '讷', hint: 'like "n" in no' },
  { pinyin: 'l', ipa: '[l]', audioText: '勒', hint: 'like "l" in light' },
  { pinyin: 'g', ipa: '[k]', audioText: '哥', hint: 'unaspirated k like "s-k-y"' },
  { pinyin: 'k', ipa: '[kʰ]', audioText: '科', hint: 'aspirated k with puff of air' },
  { pinyin: 'h', ipa: '[x]', audioText: '喝', hint: 'throaty h like German "Bach"' },
  { pinyin: 'j', ipa: '[tɕ]', audioText: '基', hint: 'tongue flat, like "jeep"' },
  { pinyin: 'q', ipa: '[tɕʰ]', audioText: '欺', hint: 'aspirated, like "cheep"' },
  { pinyin: 'x', ipa: '[ɕ]', audioText: '希', hint: 'hissing sh with flat tongue' },
  { pinyin: 'zh', ipa: '[ʈʂ]', audioText: '知', hint: 'curled retroflex "j"' },
  { pinyin: 'ch', ipa: '[ʈʂʰ]', audioText: '吃', hint: 'curled retroflex "ch"' },
  { pinyin: 'sh', ipa: '[ʂ]', audioText: '诗', hint: 'curled retroflex "sh"' },
  { pinyin: 'r', ipa: '[ʐ]', audioText: '日', hint: 'curled tongue between "r" & "zh"' },
  { pinyin: 'z', ipa: '[ts]', audioText: '资', hint: 'like "ts" in cats' },
  { pinyin: 'c', ipa: '[tsʰ]', audioText: '雌', hint: 'aspirated "ts" with puff' },
  { pinyin: 's', ipa: '[s]', audioText: '思', hint: 'like "s" in sun' },
]

// 24 Finals
const finals = [
  { pinyin: 'a', audioText: '啊', hint: 'open ah' },
  { pinyin: 'o', audioText: '喔', hint: 'rounded oh' },
  { pinyin: 'e', audioText: '鹅', hint: 'guttural uh' },
  { pinyin: 'i', audioText: '衣', hint: 'ee sound' },
  { pinyin: 'u', audioText: '乌', hint: 'oo sound' },
  { pinyin: 'ü', audioText: '迂', hint: 'say ee with lips rounded in oo' },
  { pinyin: 'ai', audioText: '哀', hint: 'like eye' },
  { pinyin: 'ei', audioText: '诶', hint: 'like day' },
  { pinyin: 'ui', audioText: '威', hint: 'way sound' },
  { pinyin: 'ao', audioText: '熬', hint: 'like cow' },
  { pinyin: 'ou', audioText: '欧', hint: 'like so' },
  { pinyin: 'iu', audioText: '优', hint: 'yew sound' },
  { pinyin: 'ie', audioText: '耶', hint: 'ee-yeh' },
  { pinyin: 'üe', audioText: '约', hint: 'rounded u + eh' },
  { pinyin: 'er', audioText: '儿', hint: 'curled retroflex ar' },
  { pinyin: 'an', audioText: '安', hint: 'ahn' },
  { pinyin: 'en', audioText: '恩', hint: 'uhn' },
  { pinyin: 'in', audioText: '因', hint: 'een' },
  { pinyin: 'un', audioText: '温', hint: 'wuhn' },
  { pinyin: 'ün', audioText: '晕', hint: 'rounded yoon' },
  { pinyin: 'ang', audioText: '昂', hint: 'ahng' },
  { pinyin: 'eng', audioText: '鞥', hint: 'uhng' },
  { pinyin: 'ing', audioText: '英', hint: 'eeng' },
  { pinyin: 'ong', audioText: '轰', hint: 'oong' },
]

// Interactive Tone Ear-Training Game
const quizPool = [
  { syllable: 'mā', hanzi: '妈', tone: 1 },
  { syllable: 'má', hanzi: '麻', tone: 2 },
  { syllable: 'mǎ', hanzi: '马', tone: 3 },
  { syllable: 'mà', hanzi: '骂', tone: 4 },
  { syllable: 'tā', hanzi: '他', tone: 1 },
  { syllable: 'bái', hanzi: '白', tone: 2 },
  { syllable: 'hǎo', hanzi: '好', tone: 3 },
  { syllable: 'dà', hanzi: '大', tone: 4 },
  { syllable: 'gē', hanzi: '哥', tone: 1 },
  { syllable: 'guó', hanzi: '国', tone: 2 },
  { syllable: 'nǐ', hanzi: '你', tone: 3 },
  { syllable: 'kàn', hanzi: '看', tone: 4 },
]

const currentQuizIndex = ref(0)
const quizUserChoice = ref<number | null>(null)
const quizScore = ref(0)
const quizStreak = ref(0)
const hasAnswered = ref(false)

const currentQuizItem = () => quizPool[currentQuizIndex.value]

function playCurrentQuizAudio() {
  speakChinese(currentQuizItem().hanzi)
}

function handleQuizAnswer(selectedTone: number) {
  if (hasAnswered.value) return
  quizUserChoice.value = selectedTone
  hasAnswered.value = true
  if (selectedTone === currentQuizItem().tone) {
    quizScore.value++
    quizStreak.value++
  } else {
    quizStreak.value = 0
  }
}

function nextQuizQuestion() {
  quizUserChoice.value = null
  hasAnswered.value = false
  currentQuizIndex.value = (currentQuizIndex.value + 1) % quizPool.length
  setTimeout(() => {
    playCurrentQuizAudio()
  }, 200)
}

function playAudio(text: string) {
  speakChinese(text)
}
</script>

<template>
  <main class="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8">
    <div class="mx-auto max-w-6xl space-y-10">
      
      <!-- Breadcrumb & Header -->
      <header class="space-y-3">
        <div class="flex items-center gap-2 text-sm text-muted-foreground">
          <RouterLink to="/" class="text-primary hover:underline">← Home</RouterLink>
          <span>/</span>
          <span class="text-foreground font-semibold">Pinyin Soundboard & Tone Trainer</span>
        </div>
        <div class="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 class="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Mandarin Pinyin Soundboard & Tone Trainer
            </h1>
            <p class="mt-2 text-muted-foreground max-w-3xl">
              Pinyin is standard Romanization for Mandarin Chinese. Master the 5 tones, 21 initials, 24 finals, tone sandhi laws, and train your ear with our interactive tone listener.
            </p>
          </div>
          <RouterLink to="/blogs/pinyin-and-four-tones-mastery">
            <UiButton variant="outline" size="sm">
              <UiIcon name="book" :size="16" />
              Full Tone Mastery Guide →
            </UiButton>
          </RouterLink>
        </div>
      </header>

      <!-- Section 1: The 5 Tones Demystified -->
      <section class="space-y-4">
        <div class="flex items-center justify-between">
          <h2 class="text-2xl font-bold tracking-tight">The 5 Tones of Mandarin Chinese</h2>
          <span class="text-xs text-muted-foreground">Click any syllable to hear pronunciation</span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div
            v-for="t in tones"
            :key="t.num"
            class="rounded-2xl border p-5 transition-shadow hover:shadow-md space-y-4"
            :class="t.accent"
          >
            <div class="flex items-start justify-between">
              <div>
                <span class="text-xs font-black uppercase tracking-wider">Tone {{ t.num }}</span>
                <h3 class="text-lg font-bold text-foreground">{{ t.name }}</h3>
              </div>
              <span class="rounded-lg bg-surface px-2.5 py-1 text-xs font-mono font-bold border border-border">
                Pitch: {{ t.pitch }}
              </span>
            </div>

            <p class="text-xs text-muted-foreground leading-relaxed">
              {{ t.hint }}
            </p>

            <div class="grid grid-cols-2 gap-2 pt-1 border-t border-border/60">
              <button
                v-for="ex in t.examples"
                :key="ex.hanzi"
                type="button"
                class="flex items-center justify-between rounded-xl bg-surface p-2 text-left border border-border/80 hover:border-primary cursor-pointer transition-colors"
                @click="playAudio(ex.hanzi)"
              >
                <div>
                  <div class="text-sm font-bold text-foreground flex items-center gap-1">
                    <span>{{ ex.hanzi }}</span>
                    <span class="text-xs font-normal text-primary">({{ ex.pinyin }})</span>
                  </div>
                  <div class="text-[10px] text-muted-foreground truncate max-w-[85px]">{{ ex.en }}</div>
                </div>
                <span class="text-xs text-muted-foreground">🔊</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 2: Interactive Tone Ear-Training Game -->
      <section class="rounded-3xl border border-border bg-gradient-to-br from-primary/5 via-surface to-surface-raised p-6 sm:p-8 shadow-sm space-y-6">
        <div class="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div class="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
              <UiIcon name="sparkles" :size="14" />
              <span>Interactive Ear-Training Game</span>
            </div>
            <h2 class="mt-2 text-2xl font-bold tracking-tight">Which Tone Did You Hear?</h2>
            <p class="text-xs sm:text-sm text-muted-foreground">
              Listen closely to the audio and click the correct tone number.
            </p>
          </div>

          <div class="flex items-center gap-3">
            <div class="rounded-xl border border-border bg-surface px-3 py-1.5 text-center">
              <div class="text-xs text-muted-foreground">Streak</div>
              <div class="text-base font-black text-amber-600">🔥 {{ quizStreak }}</div>
            </div>
            <div class="rounded-xl border border-border bg-surface px-3 py-1.5 text-center">
              <div class="text-xs text-muted-foreground">Score</div>
              <div class="text-base font-black text-primary">{{ quizScore }}</div>
            </div>
          </div>
        </div>

        <div class="flex flex-col items-center justify-center py-6 space-y-5">
          <button
            type="button"
            class="group flex size-24 items-center justify-center rounded-3xl bg-primary text-white shadow-lg transition-transform hover:scale-105 active:scale-95 cursor-pointer"
            title="Click to play tone audio"
            @click="playCurrentQuizAudio"
          >
            <span class="text-4xl transition-transform group-hover:scale-110">🔊</span>
          </button>
          <div class="text-xs text-muted-foreground">
            Click the big speaker button to listen again
          </div>

          <!-- Tone Options (1, 2, 3, 4) -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-lg pt-2">
            <button
              v-for="toneNum in [1, 2, 3, 4]"
              :key="toneNum"
              type="button"
              :disabled="hasAnswered"
              class="flex flex-col items-center justify-center rounded-2xl border p-4 transition-all cursor-pointer"
              :class="[
                hasAnswered && toneNum === currentQuizItem().tone
                  ? 'border-emerald-500 bg-emerald-500/10 text-emerald-600 font-bold ring-2 ring-emerald-500/30'
                  : hasAnswered && quizUserChoice === toneNum
                  ? 'border-rose-500 bg-rose-500/10 text-rose-600 font-bold'
                  : 'border-border bg-surface hover:border-primary/50 text-foreground',
              ]"
              @click="handleQuizAnswer(toneNum)"
            >
              <span class="text-2xl font-black">{{ toneNum }}</span>
              <span class="text-xs text-muted-foreground mt-1">Tone {{ toneNum }}</span>
            </button>
          </div>

          <!-- Feedback & Next Button -->
          <div v-if="hasAnswered" class="w-full max-w-lg text-center space-y-3 pt-2">
            <div
              class="rounded-xl p-3 text-sm font-semibold"
              :class="quizUserChoice === currentQuizItem().tone ? 'bg-emerald-500/10 text-emerald-600' : 'bg-rose-500/10 text-rose-600'"
            >
              <span v-if="quizUserChoice === currentQuizItem().tone">
                ✅ Correct! It was {{ currentQuizItem().hanzi }} ({{ currentQuizItem().syllable }}), which is Tone {{ currentQuizItem().tone }}.
              </span>
              <span v-else>
                ❌ Almost! The correct answer was Tone {{ currentQuizItem().tone }}: {{ currentQuizItem().hanzi }} ({{ currentQuizItem().syllable }}).
              </span>
            </div>
            <UiButton size="sm" class="mx-auto" @click="nextQuizQuestion">
              Next Syllable →
            </UiButton>
          </div>
        </div>
      </section>

      <!-- Section 3: Tone Sandhi (变调) Rules -->
      <section class="rounded-2xl border border-border bg-surface p-6 shadow-xs space-y-4">
        <h2 class="text-xl font-bold tracking-tight">The 3 Golden Rules of Tone Sandhi (变调)</h2>
        <p class="text-xs text-muted-foreground">
          In spoken Mandarin, certain tones shift automatically when placed next to each other to make speech smoother.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div class="rounded-xl border border-border bg-surface-raised p-4 space-y-2">
            <div class="font-bold text-primary text-sm">1. Two Third Tones (3 + 3 → 2 + 3)</div>
            <p class="text-muted-foreground">
              When two 3rd tones appear consecutively, the first changes into a rising 2nd tone.
            </p>
            <div class="rounded-lg bg-surface p-2 border border-border flex items-center justify-between">
              <span><strong>你好</strong>: nǐ + hǎo → <em>ní hǎo</em></span>
              <button type="button" @click="playAudio('你好')">🔊</button>
            </div>
          </div>

          <div class="rounded-xl border border-border bg-surface-raised p-4 space-y-2">
            <div class="font-bold text-primary text-sm">2. The Negator 不 (bù → bú)</div>
            <p class="text-muted-foreground">
              不 is normally 4th tone (bù). When followed by another 4th tone, it shifts to 2nd tone (bú).
            </p>
            <div class="rounded-lg bg-surface p-2 border border-border flex items-center justify-between">
              <span><strong>不是</strong>: bù + shì → <em>bú shì</em></span>
              <button type="button" @click="playAudio('不是')">🔊</button>
            </div>
          </div>

          <div class="rounded-xl border border-border bg-surface-raised p-4 space-y-2">
            <div class="font-bold text-primary text-sm">3. The Numeral 一 (yī shifts)</div>
            <p class="text-muted-foreground">
              一 is 1st tone (yī) in counting. Before 4th tone it becomes 2nd tone (yí ge); before 1st/2nd/3rd it becomes 4th tone (yì tiān).
            </p>
            <div class="rounded-lg bg-surface p-2 border border-border flex items-center justify-between">
              <span><strong>一个</strong>: yī + gè → <em>yí ge</em></span>
              <button type="button" @click="playAudio('一个')">🔊</button>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 4: Full Soundboard (21 Initials & 24 Finals) -->
      <section class="space-y-6">
        <div>
          <h2 class="text-2xl font-bold tracking-tight">The 21 Initials (声母 Shēngmǔ)</h2>
          <p class="text-xs text-muted-foreground">Click any initial to hear the standard pronunciation</p>
        </div>

        <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-2.5">
          <button
            v-for="ini in initials"
            :key="ini.pinyin"
            type="button"
            class="flex flex-col items-center justify-center rounded-xl border border-border bg-surface p-3 transition-colors hover:border-primary hover:bg-primary/5 cursor-pointer"
            @click="playAudio(ini.audioText)"
          >
            <span class="text-lg font-bold text-primary">{{ ini.pinyin }}</span>
            <span class="text-[10px] font-mono text-muted-foreground">{{ ini.ipa }}</span>
            <span class="text-[10px] text-muted-foreground truncate mt-0.5">{{ ini.hint }}</span>
          </button>
        </div>

        <div class="pt-4">
          <h2 class="text-2xl font-bold tracking-tight">The 24 Finals (韵母 Yùnmǔ)</h2>
          <p class="text-xs text-muted-foreground">Vowels and diphthongs that complete a Chinese syllable</p>
        </div>

        <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2.5">
          <button
            v-for="fin in finals"
            :key="fin.pinyin"
            type="button"
            class="flex flex-col items-center justify-center rounded-xl border border-border bg-surface p-3 transition-colors hover:border-primary hover:bg-primary/5 cursor-pointer"
            @click="playAudio(fin.audioText)"
          >
            <span class="text-base font-bold text-foreground">{{ fin.pinyin }}</span>
            <span class="text-[10px] text-muted-foreground">{{ fin.hint }}</span>
          </button>
        </div>
      </section>

      <CompAdSense class="mt-8" />
    </div>
  </main>
</template>
