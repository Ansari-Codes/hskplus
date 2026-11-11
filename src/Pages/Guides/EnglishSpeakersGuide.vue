<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { UiButton, UiIcon } from '../../Ui'
import { speakChinese } from '../../Utils/speech'
import CompAdSense from '../../Components/CompAdSense.vue'

const epiphanies = [
  {
    num: 1,
    title: 'Zero Verb Conjugations: Chinese Verbs Never Change Form',
    englishProblem: 'In English, you juggle: eat, eats, ate, eating, eaten, had eaten. In Spanish, dozens of endings per verb.',
    mandarinSolution: 'In Chinese, 吃 (chī) is ALWAYS 吃 (chī). It never changes for I, you, he, she, past, present, or future.',
    example: {
      en: 'I eat (now) / I ate (yesterday) / I will eat (tomorrow)',
      zh: '我现在吃 / 我昨天吃 / 我明天吃',
      py: 'Wǒ xiànzài chī / Wǒ zuótiān chī / Wǒ míngtiān chī',
    },
    takeaway: 'Time adverbs (now, yesterday, tomorrow) indicate when the action happens. The verb stays pristine.',
  },
  {
    num: 2,
    title: 'The Golden Word Order: Time & Place Must Precede the Verb',
    englishProblem: 'English puts time and location freely at the very end: "I study Chinese at the library on Sundays."',
    mandarinSolution: 'In Mandarin, the frame MUST be set before the action occurs: Subject + WHEN + WHERE + DO.',
    example: {
      en: 'I study Chinese at the library on Sundays.',
      wrongZh: '❌ 我学习汉语在图书馆在星期日 (Grammatically un-Chinese!)',
      zh: '✅ 我星期天在图书馆学习汉语。',
      py: 'Wǒ xīngqītiān zài túshūguǎn xuéxí Hànyǔ.',
    },
    takeaway: 'Imagine shooting a movie scene: first you establish the time, then you set up the stage location, then the actors perform the action.',
  },
  {
    num: 3,
    title: 'Aspect Markers (了, 过, 着) are NOT English Tenses',
    englishProblem: 'English speakers reflexively translate 了 (le) as the past tense "-ed". This causes catastrophic exam errors.',
    mandarinSolution: '了 marks the COMPLETION of an action or a CHANGE OF STATE, not past tense. You can use 了 in future actions!',
    example: {
      en: 'Tomorrow, after I have finished lunch, I will call you.',
      zh: '明天我吃了午饭就给你打电话。',
      py: 'Míngtiān wǒ chī le wǔfàn jiù gěi nǐ dǎ diànhuà.',
    },
    takeaway: 'Notice this is set tomorrow! 了 signals that lunch is finished before the phone call occurs.',
  },
  {
    num: 4,
    title: 'The Measure Word (Classifier) Law: You Can Never Say "One Book"',
    englishProblem: 'In English you say "one book", "two dogs", "three cars". Classifiers are rare ("a sheet of paper", "a cup of tea").',
    mandarinSolution: 'In Chinese, EVERY noun requires a measure word between the number/demonstrative and the noun.',
    example: {
      en: 'one book / two dogs / this car',
      zh: '一本书 (yì běn shū) / 两只狗 (liǎng zhī gǒu) / 这辆车 (zhè liàng chē)',
      py: 'Number + Classifier + Noun',
    },
    takeaway: 'When in doubt on HSK 1, 个 (ge) acts as the universal fallback classifier.',
  },
  {
    num: 5,
    title: 'The 3 "De" Particles Decoded for English Minds',
    englishProblem: 'English speakers see 的, 得, and 地 (all pronounced "de") and get hopelessly confused.',
    mandarinSolution: 'Each has a strict grammatical domain: Noun Modifier (的), Action Evaluation (得), Manner Adverb (地).',
    example: {
      en: 'My red car (的) / She speaks very quickly (得) / He ran away quickly (地)',
      zh: '我的红车 (的) / 她说得很快 (得) / 他快速地跑了 (地)',
      py: 'Noun anchor (的) · Verb compliment (得) · Adverb marker (地)',
    },
    takeaway: 'Read our dedicated Confusing Words breakdown: 的 vs 得 vs 地 for full mastery.',
  },
  {
    num: 6,
    title: 'Topic-Prominence: Fronting the Subject',
    englishProblem: 'English relies on Subject-Verb-Object (SVO) passive constructions ("The cake was eaten by him").',
    mandarinSolution: 'Mandarin is topic-prominent: native speakers mention the topic of conversation first, then add comments.',
    example: {
      en: 'I have already read that book.',
      zh: '那本书我已经看过了。(That book, I already read.)',
      py: 'Nà běn shū wǒ yǐjīng kàn guò le.',
    },
    takeaway: 'Start sentences with what everyone is talking about, then state what happened to it.',
  },
  {
    num: 7,
    title: 'Watch Out for English False Friends',
    englishProblem: 'Words that sound like single concepts in English often split into distinct verbs in Chinese.',
    mandarinSolution: 'Understanding the semantic boundaries prevents embarrassing mix-ups in conversation.',
    example: {
      en: '1. "Borrow" vs "Lend": Both use 借 (jiè), distinguished by direction: 跟/向...借 (borrow from) vs 借给 (lend to).\n2. "Two": 二 (èr) for counting / math, but 两 (liǎng) before measure words!\n3. "Not": 不 (bù) for intentions/habits/future, but 没 (méi) for past events or having.',
      zh: '',
      py: '',
    },
    takeaway: 'Check our Confusing Words section for 15 deep comparisons with quiz drills.',
  },
]

function playAudio(text: string) {
  speakChinese(text)
}
</script>

<template>
  <main class="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8">
    <div class="mx-auto max-w-5xl space-y-10">
      
      <!-- Breadcrumb & Header -->
      <header class="space-y-3">
        <div class="flex items-center gap-2 text-sm text-muted-foreground">
          <RouterLink to="/" class="text-primary hover:underline">← Home</RouterLink>
          <span>/</span>
          <span class="text-foreground font-semibold">HSK for English Speakers</span>
        </div>
        <div class="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 class="text-3xl font-extrabold tracking-tight sm:text-4xl">
              HSK for English Speakers: The Structural Blueprint
            </h1>
            <p class="mt-2 text-muted-foreground max-w-2xl">
              Mandarin is not "difficult" — it is simply built on different architectural rules. Unlearn English habits and unlock natural Chinese intuition with these 7 core epiphanies.
            </p>
          </div>
          <RouterLink to="/compare">
            <UiButton variant="outline" size="sm">
              <UiIcon name="sparkles" :size="16" />
              15 Confusing Word Guides →
            </UiButton>
          </RouterLink>
        </div>
      </header>

      <!-- 7 Epiphanies Stack -->
      <section class="space-y-6">
        <article
          v-for="item in epiphanies"
          :key="item.num"
          class="rounded-3xl border border-border bg-surface p-6 sm:p-8 space-y-5 shadow-xs transition-shadow hover:shadow-md"
        >
          <div class="flex items-start gap-4">
            <span class="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-primary text-white font-black text-lg">
              {{ item.num }}
            </span>
            <div class="space-y-1">
              <span class="text-xs font-bold uppercase tracking-wider text-primary">Mindset Shift #{{ item.num }}</span>
              <h2 class="text-xl sm:text-2xl font-bold text-foreground">{{ item.title }}</h2>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div class="rounded-2xl border border-rose-500/20 bg-rose-500/5 p-4 space-y-1.5">
              <div class="font-bold text-rose-700 dark:text-rose-400">⚠️ The English Trap</div>
              <p class="text-muted-foreground leading-relaxed">{{ item.englishProblem }}</p>
            </div>

            <div class="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-4 space-y-1.5">
              <div class="font-bold text-emerald-700 dark:text-emerald-400">✨ The Mandarin Solution</div>
              <p class="text-foreground/90 leading-relaxed">{{ item.mandarinSolution }}</p>
            </div>
          </div>

          <!-- Concrete Code/Example Box -->
          <div class="rounded-2xl bg-surface-raised border border-border p-4 space-y-2">
            <div class="flex items-center justify-between text-xs text-muted-foreground">
              <span class="font-bold uppercase tracking-wider">Example Demonstration</span>
              <button
                v-if="item.example.zh"
                type="button"
                class="hover:text-primary transition-colors flex items-center gap-1"
                @click="playAudio(item.example.zh)"
              >
                <span>🔊 Listen to Chinese</span>
              </button>
            </div>
            
            <div v-if="item.example.wrongZh" class="text-xs text-rose-600 font-medium">
              {{ item.example.wrongZh }}
            </div>
            <div v-if="item.example.zh" class="text-base sm:text-lg font-bold font-serif text-foreground">
              {{ item.example.zh }}
            </div>
            <div v-if="item.example.py" class="text-xs sm:text-sm font-semibold text-primary">
              {{ item.example.py }}
            </div>
            <div class="text-xs text-muted-foreground italic">
              {{ item.example.en }}
            </div>
          </div>

          <div class="rounded-xl bg-primary/5 p-3 text-xs text-foreground/90 border border-primary/10">
            <strong>💡 Key Takeaway:</strong> {{ item.takeaway }}
          </div>
        </article>
      </section>

      <!-- Quick Action Gateway -->
      <section class="rounded-3xl border border-border bg-gradient-to-r from-primary/10 via-surface to-surface-raised p-8 text-center space-y-4">
        <h2 class="text-2xl font-bold tracking-tight">Put These Rules Into Practice</h2>
        <p class="text-sm text-muted-foreground max-w-xl mx-auto">
          Start drilling HSK 1 vocabulary and sentence patterns with our real-time feedback tools.
        </p>
        <div class="flex flex-wrap justify-center gap-3 pt-2">
          <RouterLink to="/hsk1/vocabulary">
            <UiButton variant="primary" size="md">
              HSK 1 Vocabulary (150 Words) →
            </UiButton>
          </RouterLink>
          <RouterLink to="/compare">
            <UiButton variant="outline" size="md">
              15 Confusing Word Pairs →
            </UiButton>
          </RouterLink>
          <RouterLink to="/radicals">
            <UiButton variant="outline" size="md">
              25+ Radicals Directory →
            </UiButton>
          </RouterLink>
        </div>
      </section>

      <CompAdSense class="mt-8" />
    </div>
  </main>
</template>
