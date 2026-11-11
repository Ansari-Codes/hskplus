<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { UiButton, UiBadge } from '../../Ui'
import { FEATURED_BLOGS } from '../../Data/featuredBlogs'
import CompAdSense from '../../Components/CompAdSense.vue'
import CompComparisonTable from '../../Components/CompComparisonTable.vue'
import CompHeroInteractiveCard from '../../Components/CompHeroInteractiveCard.vue'
import CompProgressDashboard from '../../Components/CompProgressDashboard.vue'
import { speakChinese } from '../../Utils/speech'

const featuredBlogs = FEATURED_BLOGS
const totalBlogs = 24

const levelStats = {
  1: {
    vocabulary: 150,
    lessons: 15,
    patterns: 15,
    dialogues: 10,
    tests: 11,
  },
  2: {
    vocabulary: 150,
    lessons: 15,
    patterns: 15,
    dialogues: 10,
    tests: 11,
  },
  3: {
    vocabulary: 300,
    lessons: 20,
    patterns: 20,
    dialogues: 10,
    tests: 11,
  },
}

const totals = {
  vocabulary: 600,
  lessons: 50,
  patterns: 50,
  dialogues: 30,
  tests: 33,
  comparisons: 15,
  radicals: 25,
}

// Live interactive mini-drill for the homepage
const drillAnswered = ref(false)
const selectedDrillChoice = ref<string | null>(null)

function answerDrill(choice: string) {
  selectedDrillChoice.value = choice
  drillAnswered.value = true
}

function resetDrill() {
  selectedDrillChoice.value = null
  drillAnswered.value = false
}

function playAudio(text: string) {
  speakChinese(text)
}

const faqs = [
  {
    question: 'What does HSK mean?',
    answer: 'HSK stands for Hanyu Shuiping Kaoshi (汉语水平考试), commonly translated as the Chinese Proficiency Test. It is the standardized global certification for non-native Chinese speakers administered by CLEC / Hanban.',
  },
  {
    question: 'Which HSK levels can I study on HSK Plus?',
    answer: 'HSK Plus includes complete, free study academies for HSK 1 (150 words), HSK 2 (150 words), and HSK 3 (300 words) — totaling 600 official words, 50 standard textbook lessons, 50 grammar structures, 30 situational dialogues, 33 timed mock exams, 15 confusing words guides, and 25+ radicals.',
  },
  {
    question: 'Is HSK Plus 100% free, and do I need to register an account?',
    answer: 'Yes! HSK Plus is 100% free forever with zero paywalls. You do not need to register or provide credit cards. Your study progress (streak, mastered words, mock test scores) is safely stored locally in your browser with 1-click JSON backup/restore.',
  },
  {
    question: 'Are official textbook PDFs and audio files available for download?',
    answer: 'Yes! Visit our dedicated Official Downloads portal (/downloads) to access standard course textbooks, workbook PDFs, teacher guides, and high-fidelity MP3 listening audio packs hosted on high-speed GitHub releases.',
  },
  {
    question: 'Can I install HSK Plus as an app on my phone or computer?',
    answer: 'Yes! HSK Plus is a Progressive Web App (PWA). You can tap "Install App" or "Add to Home Screen" in your browser (Chrome, Safari, Edge) for offline access and native app experience.',
  },
]
</script>

<template>
  <div class="min-h-screen bg-background text-foreground">
    
    <!-- Hero Section -->
    <section class="relative overflow-hidden border-b border-border bg-gradient-to-b from-surface via-background to-background py-10 px-4 sm:px-6 lg:px-8 lg:py-16">
      <div class="mx-auto max-w-7xl">
        <!-- Split Hero Grid: Content (Left) + Interactive Studio (Right) -->
        <div class="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          
          <!-- Left Column (7 cols): Hero Headlines & CTAs -->
          <div class="lg:col-span-7 space-y-6 text-left">
            <!-- Top Tag Pill -->
            <div class="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold text-primary shadow-xs">
              <span class="flex size-2 relative">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span class="relative inline-flex rounded-full size-2 bg-primary" />
              </span>
              <span>100% Free · Comprehensive HSK 1–3 Chinese Academy</span>
            </div>

            <!-- Main Heading -->
            <h1 class="text-4xl font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-[1.12]">
              The Complete Online School for
              <span class="bg-gradient-to-r from-primary via-rose-600 to-amber-600 bg-clip-text text-transparent">
                HSK Mastery
              </span>
            </h1>

            <div class="flex items-center gap-2 text-sm font-bold text-foreground">
              <span class="rounded-md bg-primary/10 px-2.5 py-1 text-xs text-primary font-black uppercase tracking-wider">
                汉语水平考试 · HSK PLUS
              </span>
              <span class="text-muted-foreground">·</span>
              <span class="text-muted-foreground">Standard Curriculum Learning Platform</span>
            </div>

            <p class="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              From your very first <em>"Nǐ Hǎo"</em> to intermediate fluency. Master 600 official words with native speech audio, 50 standard textbook lessons, interactive Tian Zi Ge stroke animations, 15 confusing word comparative guides, and 33 timed mock exams.
            </p>

            <!-- Feature Bullet Pills -->
            <div class="flex flex-wrap items-center gap-2 pt-1 text-xs font-semibold text-foreground">
              <span class="rounded-xl border border-border bg-surface px-3 py-1.5 shadow-xs">
                🎙️ 600 Words with Audio
              </span>
              <span class="rounded-xl border border-border bg-surface px-3 py-1.5 shadow-xs">
                📖 50 Textbook Lessons
              </span>
              <span class="rounded-xl border border-border bg-surface px-3 py-1.5 shadow-xs">
                ⏱️ 33 Timed Mock Exams
              </span>
              <span class="rounded-xl border border-border bg-surface px-3 py-1.5 shadow-xs">
                ⚖️ 15 Confusing Word Guides
              </span>
              <span class="rounded-xl border border-border bg-surface px-3 py-1.5 shadow-xs">
                🧩 25+ Chinese Radicals
              </span>
              <span class="rounded-xl border border-border bg-surface px-3 py-1.5 shadow-xs">
                ✍️ Tian Zi Ge Stroke Studio
              </span>
            </div>

            <!-- CTA Buttons -->
            <div class="flex flex-wrap items-center gap-3.5 pt-2">
              <RouterLink to="/hsk-intro">
                <UiButton size="lg" variant="primary" class="shadow-lg shadow-primary/25 font-bold">
                  🚀 Start 15-Min Intro Lesson →
                </UiButton>
              </RouterLink>
              <RouterLink to="/mock-tests">
                <UiButton size="lg" variant="outline" class="font-bold">
                  ⏱️ Take a Timed Mock Test
                </UiButton>
              </RouterLink>
              <RouterLink to="/compare">
                <UiButton size="lg" variant="secondary" class="font-bold">
                  ⚖️ Confusing Words Lab
                </UiButton>
              </RouterLink>
            </div>

            <!-- Trust Indicator -->
            <p class="text-xs text-muted-foreground pt-1">
              ✨ 100% Free Forever · No Account Required · PWA Offline Ready · Local Progress Tracking
            </p>
          </div>

          <!-- Right Column (5 cols): Interactive Studio Card -->
          <div class="lg:col-span-5 w-full">
            <CompHeroInteractiveCard />
          </div>
        </div>

        <!-- Quick Stats Banner (7 Stat Blocks) -->
        <div class="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7 max-w-7xl mx-auto">
          <div class="rounded-2xl border border-border bg-surface p-3.5 text-center shadow-xs transition-transform hover:-translate-y-0.5">
            <p class="text-2xl font-black text-primary">{{ totals.vocabulary }}</p>
            <p class="text-[11px] font-semibold text-muted-foreground mt-0.5">Vocabulary Words</p>
          </div>
          <div class="rounded-2xl border border-border bg-surface p-3.5 text-center shadow-xs transition-transform hover:-translate-y-0.5">
            <p class="text-2xl font-black text-indigo-600 dark:text-indigo-400">{{ totals.lessons }}</p>
            <p class="text-[11px] font-semibold text-muted-foreground mt-0.5">Standard Lessons</p>
          </div>
          <div class="rounded-2xl border border-border bg-surface p-3.5 text-center shadow-xs transition-transform hover:-translate-y-0.5">
            <p class="text-2xl font-black text-emerald-600 dark:text-emerald-400">{{ totals.patterns }}</p>
            <p class="text-[11px] font-semibold text-muted-foreground mt-0.5">Grammar Patterns</p>
          </div>
          <div class="rounded-2xl border border-border bg-surface p-3.5 text-center shadow-xs transition-transform hover:-translate-y-0.5">
            <p class="text-2xl font-black text-purple-600 dark:text-purple-400">{{ totals.dialogues }}</p>
            <p class="text-[11px] font-semibold text-muted-foreground mt-0.5">Audio Dialogues</p>
          </div>
          <div class="rounded-2xl border border-border bg-surface p-3.5 text-center shadow-xs transition-transform hover:-translate-y-0.5">
            <p class="text-2xl font-black text-amber-600 dark:text-amber-400">{{ totals.tests }}</p>
            <p class="text-[11px] font-semibold text-muted-foreground mt-0.5">Mock Test Exams</p>
          </div>
          <div class="rounded-2xl border border-border bg-surface p-3.5 text-center shadow-xs transition-transform hover:-translate-y-0.5">
            <p class="text-2xl font-black text-rose-600 dark:text-rose-400">{{ totals.comparisons }}</p>
            <p class="text-[11px] font-semibold text-muted-foreground mt-0.5">Confusing Words</p>
          </div>
          <div class="rounded-2xl border border-border bg-surface p-3.5 text-center shadow-xs transition-transform hover:-translate-y-0.5 col-span-2 sm:col-span-1">
            <p class="text-2xl font-black text-sky-600 dark:text-sky-400">{{ totals.radicals }}</p>
            <p class="text-[11px] font-semibold text-muted-foreground mt-0.5">Chinese Radicals</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Personal Progress Tracker Section (Interactive Student Dashboard) -->
    <section class="py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <CompProgressDashboard />
    </section>

    <!-- Academy Action Command Center: 8 Portals Grid -->
    <section class="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div class="text-center mb-10">
        <UiBadge variant="secondary">Academy Campus</UiBadge>
        <h2 class="mt-2 text-3xl font-extrabold sm:text-4xl text-foreground">
          Explore Academy Learning Portals
        </h2>
        <p class="mt-2 text-sm text-muted-foreground max-w-xl mx-auto">
          Every tool, drill, soundboard, and curriculum module designed for non-native Chinese learners.
        </p>
      </div>

      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <!-- Portal 1: Beginner Intro Lesson -->
        <RouterLink
          to="/hsk-intro"
          class="group rounded-2xl border border-border bg-surface p-5 shadow-xs transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-md flex flex-col justify-between"
        >
          <div>
            <div class="flex size-11 items-center justify-center rounded-xl bg-emerald-500/10 text-2xl group-hover:scale-105 transition-transform">
              🚀
            </div>
            <h3 class="mt-3.5 text-lg font-bold text-foreground group-hover:text-primary transition-colors">
              HSK Starter Lesson
            </h3>
            <p class="mt-1.5 text-xs text-muted-foreground leading-relaxed">
              15-minute quick onboarding: The 4 tones, 5 survival phrases, and self-assessment quiz.
            </p>
          </div>
          <div class="mt-4 pt-3 border-t border-border/70 flex items-center justify-between text-xs font-bold text-primary">
            <span>Start Lesson</span>
            <span>→</span>
          </div>
        </RouterLink>

        <!-- Portal 2: Pinyin & Tone Soundboard -->
        <RouterLink
          to="/pinyin"
          class="group rounded-2xl border border-border bg-surface p-5 shadow-xs transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-md flex flex-col justify-between"
        >
          <div>
            <div class="flex size-11 items-center justify-center rounded-xl bg-indigo-500/10 text-2xl group-hover:scale-105 transition-transform">
              🎙️
            </div>
            <h3 class="mt-3.5 text-lg font-bold text-foreground group-hover:text-primary transition-colors">
              Pinyin & Tone Soundboard
            </h3>
            <p class="mt-1.5 text-xs text-muted-foreground leading-relaxed">
              21 initials, 24 finals, pitch visualizer, tone sandhi laws, and ear-training game.
            </p>
          </div>
          <div class="mt-4 pt-3 border-t border-border/70 flex items-center justify-between text-xs font-bold text-primary">
            <span>Open Soundboard</span>
            <span>→</span>
          </div>
        </RouterLink>

        <!-- Portal 3: 15 Confusing Word Guides -->
        <RouterLink
          to="/compare"
          class="group rounded-2xl border border-border bg-surface p-5 shadow-xs transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-md flex flex-col justify-between"
        >
          <div>
            <div class="flex size-11 items-center justify-center rounded-xl bg-rose-500/10 text-2xl group-hover:scale-105 transition-transform">
              ⚖️
            </div>
            <h3 class="mt-3.5 text-lg font-bold text-foreground group-hover:text-primary transition-colors">
              Confusing Words Lab
            </h3>
            <p class="mt-1.5 text-xs text-muted-foreground leading-relaxed">
              15 essential comparisons: 不 vs 没, 二 vs 两, 的 vs 得 vs 地, 会/能/可以 with drills.
            </p>
          </div>
          <div class="mt-4 pt-3 border-t border-border/70 flex items-center justify-between text-xs font-bold text-primary">
            <span>Explore 15 Guides</span>
            <span>→</span>
          </div>
        </RouterLink>

        <!-- Portal 4: Chinese Radicals Directory -->
        <RouterLink
          to="/radicals"
          class="group rounded-2xl border border-border bg-surface p-5 shadow-xs transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-md flex flex-col justify-between"
        >
          <div>
            <div class="flex size-11 items-center justify-center rounded-xl bg-amber-500/10 text-2xl font-serif font-black text-amber-700 dark:text-amber-400 group-hover:scale-105 transition-transform">
              氵
            </div>
            <h3 class="mt-3.5 text-lg font-bold text-foreground group-hover:text-primary transition-colors">
              Chinese Radicals (部首)
            </h3>
            <p class="mt-1.5 text-xs text-muted-foreground leading-relaxed">
              25+ essential semantic roots, stroke counts, pictographic origins, and HSK vocabulary.
            </p>
          </div>
          <div class="mt-4 pt-3 border-t border-border/70 flex items-center justify-between text-xs font-bold text-primary">
            <span>Browse Radicals</span>
            <span>→</span>
          </div>
        </RouterLink>

        <!-- Portal 5: Hanzi Writing Studio -->
        <RouterLink
          to="/hsk1/practice"
          class="group rounded-2xl border border-border bg-surface p-5 shadow-xs transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-md flex flex-col justify-between"
        >
          <div>
            <div class="flex size-11 items-center justify-center rounded-xl bg-emerald-500/10 text-2xl group-hover:scale-105 transition-transform">
              ✍️
            </div>
            <h3 class="mt-3.5 text-lg font-bold text-foreground group-hover:text-primary transition-colors">
              Hanzi Writing Studio
            </h3>
            <p class="mt-1.5 text-xs text-muted-foreground leading-relaxed">
              Tian Zi Ge calligraphy grid, animated stroke sequences, and automated shape scoring.
            </p>
          </div>
          <div class="mt-4 pt-3 border-t border-border/70 flex items-center justify-between text-xs font-bold text-primary">
            <span>Practice Writing</span>
            <span>→</span>
          </div>
        </RouterLink>

        <!-- Portal 6: 33 Timed Mock Exams -->
        <RouterLink
          to="/mock-tests"
          class="group rounded-2xl border border-border bg-surface p-5 shadow-xs transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-md flex flex-col justify-between"
        >
          <div>
            <div class="flex size-11 items-center justify-center rounded-xl bg-sky-500/10 text-2xl group-hover:scale-105 transition-transform">
              ⏱️
            </div>
            <h3 class="mt-3.5 text-lg font-bold text-foreground group-hover:text-primary transition-colors">
              33 Timed Mock Exams
            </h3>
            <p class="mt-1.5 text-xs text-muted-foreground leading-relaxed">
              Official Hanban test formatting with countdown timer, listening audio, and instant scoring.
            </p>
          </div>
          <div class="mt-4 pt-3 border-t border-border/70 flex items-center justify-between text-xs font-bold text-primary">
            <span>Take Practice Test</span>
            <span>→</span>
          </div>
        </RouterLink>

        <!-- Portal 7: Official Course Downloads -->
        <RouterLink
          to="/downloads"
          class="group rounded-2xl border border-border bg-surface p-5 shadow-xs transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-md flex flex-col justify-between"
        >
          <div>
            <div class="flex size-11 items-center justify-center rounded-xl bg-purple-500/10 text-2xl group-hover:scale-105 transition-transform">
              📥
            </div>
            <h3 class="mt-3.5 text-lg font-bold text-foreground group-hover:text-primary transition-colors">
              Official Material Downloads
            </h3>
            <p class="mt-1.5 text-xs text-muted-foreground leading-relaxed">
              Standard Course textbook PDFs, workbooks, vocabulary sheets, and MP3 audio packs.
            </p>
          </div>
          <div class="mt-4 pt-3 border-t border-border/70 flex items-center justify-between text-xs font-bold text-primary">
            <span>Download PDFs & Audio</span>
            <span>→</span>
          </div>
        </RouterLink>

        <!-- Portal 8: HSK for English Speakers -->
        <RouterLink
          to="/english-speakers-guide"
          class="group rounded-2xl border border-border bg-surface p-5 shadow-xs transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-md flex flex-col justify-between"
        >
          <div>
            <div class="flex size-11 items-center justify-center rounded-xl bg-amber-500/10 text-2xl group-hover:scale-105 transition-transform">
              🇬🇧
            </div>
            <h3 class="mt-3.5 text-lg font-bold text-foreground group-hover:text-primary transition-colors">
              HSK for English Speakers
            </h3>
            <p class="mt-1.5 text-xs text-muted-foreground leading-relaxed">
              The 7 architectural mindset shifts: Zero verb conjugations, time-before-verb, and aspect rules.
            </p>
          </div>
          <div class="mt-4 pt-3 border-t border-border/70 flex items-center justify-between text-xs font-bold text-primary">
            <span>Read Blueprint</span>
            <span>→</span>
          </div>
        </RouterLink>
      </div>
    </section>

    <!-- Interactive Live Drill Spotlight: Confusing Word of the Day & Radical Lab -->
    <section class="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div class="rounded-3xl border border-border bg-gradient-to-br from-surface to-surface-raised p-6 sm:p-8 shadow-xs">
        <div class="flex flex-wrap items-center justify-between gap-4 border-b border-border/70 pb-5">
          <div>
            <span class="text-xs font-bold uppercase tracking-wider text-primary">Interactive Spotlight</span>
            <h2 class="text-2xl font-bold tracking-tight text-foreground">
              Daily Master Drill: 不 (bù) vs 没 (méi)
            </h2>
            <p class="text-xs sm:text-sm text-muted-foreground mt-0.5">
              Which negator fits the sentence? Test your grammatical intuition right now.
            </p>
          </div>

          <RouterLink to="/compare/bu-vs-mei">
            <UiButton variant="outline" size="sm">
              Read Complete 不 vs 没 Guide →
            </UiButton>
          </RouterLink>
        </div>

        <div class="mt-6 grid gap-6 md:grid-cols-2 items-center">
          <!-- Quiz Question Card -->
          <div class="rounded-2xl border border-border bg-surface p-5 space-y-4">
            <div class="flex items-center justify-between">
              <span class="rounded-md bg-rose-500/10 text-rose-600 dark:text-rose-400 text-xs font-bold px-2 py-0.5">
                Fill in the blank
              </span>
              <button
                type="button"
                class="text-xs text-muted-foreground hover:text-primary transition-colors"
                @click="playAudio('我昨天没有去学校。')"
              >
                🔊 Audio Hint
              </button>
            </div>

            <p class="text-lg font-serif font-bold text-foreground">
              我昨天 _____ 去学校，因为我生病了。
            </p>
            <p class="text-xs font-mono text-primary">
              Wǒ zuótiān _____ qù xuéxiào, yīnwèi wǒ shēngbìng le.
            </p>
            <p class="text-xs text-muted-foreground italic">
              "I _____ go to school yesterday, because I was sick."
            </p>

            <div class="grid grid-cols-2 gap-3 pt-2">
              <button
                type="button"
                :disabled="drillAnswered"
                class="rounded-xl border p-3 text-center transition-all cursor-pointer font-bold"
                :class="[
                  drillAnswered && selectedDrillChoice === '不'
                    ? 'border-rose-500 bg-rose-500/10 text-rose-600'
                    : 'border-border bg-surface-raised hover:border-primary/50 text-foreground',
                ]"
                @click="answerDrill('不')"
              >
                A. 不 (bù)
              </button>

              <button
                type="button"
                :disabled="drillAnswered"
                class="rounded-xl border p-3 text-center transition-all cursor-pointer font-bold"
                :class="[
                  drillAnswered && selectedDrillChoice === '没'
                    ? 'border-emerald-500 bg-emerald-500/10 text-emerald-600 ring-2 ring-emerald-500/30'
                    : 'border-border bg-surface-raised hover:border-primary/50 text-foreground',
                ]"
                @click="answerDrill('没')"
              >
                B. 没 (méi)
              </button>
            </div>

            <!-- Rationale feedback -->
            <div v-if="drillAnswered" class="rounded-xl p-3 text-xs space-y-1" :class="selectedDrillChoice === '没' ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300' : 'bg-rose-500/10 text-rose-700 dark:text-rose-300'">
              <div class="font-bold">
                {{ selectedDrillChoice === '没' ? '✅ Correct! Use 没 (méi) for past actions.' : '❌ Not quite! The sentence is set in the past (昨天 yesterday).' }}
              </div>
              <p>
                Rule: <strong>没 (méi)</strong> negates past events or occurrence of actions. <strong>不 (bù)</strong> negates present habits, future intentions, or adjectives.
              </p>
              <button type="button" class="underline font-semibold mt-1" @click="resetDrill">
                Reset & Try Again
              </button>
            </div>
          </div>

          <!-- Side Matrix Preview -->
          <div class="rounded-2xl border border-border bg-surface p-5 space-y-3 text-xs">
            <div class="font-bold text-foreground text-sm flex items-center justify-between">
              <span>Quick Distinction Matrix</span>
              <span class="text-primary font-mono">Rule of Thumb</span>
            </div>

            <div class="space-y-2">
              <div class="p-2.5 rounded-xl bg-surface-raised border border-border">
                <div class="font-bold text-foreground">不 (bù) — Habitual / Willful / Future</div>
                <div class="text-muted-foreground mt-0.5">他不喝咖啡 (He does not drink coffee [habit]). 我明天不去 (I will not go tomorrow [intent]).</div>
              </div>

              <div class="p-2.5 rounded-xl bg-surface-raised border border-border">
                <div class="font-bold text-foreground">没 (méi) — Completed Action / Past / Having</div>
                <div class="text-muted-foreground mt-0.5">他没喝咖啡 (He didn't drink coffee [didn't happen]). 我没有钱 (I don't have money).</div>
              </div>
            </div>

            <div class="pt-2 flex justify-between items-center text-muted-foreground text-[11px]">
              <span>Need more drills?</span>
              <RouterLink to="/compare" class="text-primary font-bold hover:underline">
                View all 15 comparisons →
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- AdSense Top Banner -->
    <div class="mx-auto max-w-7xl px-4 py-2">
      <CompAdSense format="banner" slot-id="home-top-banner" />
    </div>

    <!-- HSK Level Curriculum Gateways -->
    <section id="levels" class="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div class="text-center mb-12">
        <UiBadge variant="secondary">Curriculum Gateways</UiBadge>
        <h2 class="mt-3 text-3xl font-extrabold sm:text-4xl text-foreground">Choose Your HSK Level</h2>
        <p class="mt-2 text-muted-foreground max-w-xl mx-auto text-sm">
          Explore level-based vocabulary, textbook lessons, grammar structures, dialogue practice, and timed mock tests.
        </p>
      </div>

      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <!-- HSK 1 Gate Card -->
        <div class="relative overflow-hidden rounded-3xl border-2 bg-surface p-8 shadow-md transition-all hover:shadow-xl" :style="{ borderColor: 'color-mix(in srgb, var(--hsk1-accent) 32%, transparent)' }">
          <div class="flex items-center justify-between">
            <span class="flex size-14 items-center justify-center rounded-2xl text-2xl font-bold" :style="{ color: 'var(--hsk1-accent)', backgroundColor: 'color-mix(in srgb, var(--hsk1-accent) 12%, transparent)' }">
              1级
            </span>
            <UiBadge variant="primary">Beginner</UiBadge>
          </div>

          <h3 class="mt-6 text-2xl font-black text-foreground">HSK Level 1 Portal</h3>
          <p class="mt-2 text-sm text-muted-foreground leading-relaxed">
            Designed for absolute beginners. Master greetings, numbers, family members, food, shopping, and everyday questions.
          </p>

          <ul class="mt-6 space-y-2 text-sm text-muted-foreground">
            <li class="flex items-center gap-2">✓ <strong>{{ levelStats[1].vocabulary }} Vocabulary Entries:</strong> With pinyin, English, and audio.</li>
            <li class="flex items-center gap-2">✓ <strong>{{ levelStats[1].lessons }} Lessons:</strong> Following HSK Standard Course 1.</li>
            <li class="flex items-center gap-2">✓ <strong>{{ levelStats[1].patterns }} Grammar Topics:</strong> Sentence structures & examples.</li>
            <li class="flex items-center gap-2">✓ <strong>{{ levelStats[1].dialogues }} Dialogue Scenarios:</strong> Line-by-line speech audio.</li>
            <li class="flex items-center gap-2">✓ <strong>{{ levelStats[1].tests }} Practice Tests:</strong> Timed listening & reading tests.</li>
          </ul>

          <div class="mt-8 pt-6 border-t border-border flex flex-wrap gap-2">
            <RouterLink to="/hsk1" class="flex-1">
              <UiButton class="w-full">
                Enter HSK 1 Portal →
              </UiButton>
            </RouterLink>
            <RouterLink to="/hsk1/practice">
              <UiButton variant="outline">
                Writing Lab
              </UiButton>
            </RouterLink>
          </div>
        </div>

        <!-- HSK 2 Gate Card -->
        <div class="relative overflow-hidden rounded-3xl border-2 bg-surface p-8 shadow-md transition-all hover:shadow-xl" :style="{ borderColor: 'color-mix(in srgb, var(--hsk2-accent) 32%, transparent)' }">
          <div class="flex items-center justify-between">
            <span class="flex size-14 items-center justify-center rounded-2xl text-2xl font-bold" :style="{ color: 'var(--hsk2-accent)', backgroundColor: 'color-mix(in srgb, var(--hsk2-accent) 12%, transparent)' }">
              2级
            </span>
            <UiBadge variant="secondary">Elementary</UiBadge>
          </div>

          <h3 class="mt-6 text-2xl font-black text-foreground">HSK Level 2 Portal</h3>
          <p class="mt-2 text-sm text-muted-foreground leading-relaxed">
            Build elementary Mandarin through daily routines, shopping, travel, comparisons, and past or ongoing events.
          </p>

          <ul class="mt-6 space-y-2 text-sm text-muted-foreground">
            <li class="flex items-center gap-2">✓ <strong>{{ levelStats[2].vocabulary }} Vocabulary Entries:</strong> With pinyin, English, and audio.</li>
            <li class="flex items-center gap-2">✓ <strong>{{ levelStats[2].lessons }} Lessons:</strong> Following HSK Standard Course 2.</li>
            <li class="flex items-center gap-2">✓ <strong>{{ levelStats[2].patterns }} Grammar Topics:</strong> Intermediate basics.</li>
            <li class="flex items-center gap-2">✓ <strong>{{ levelStats[2].dialogues }} Dialogue Scenarios:</strong> Situational audio practice.</li>
            <li class="flex items-center gap-2">✓ <strong>{{ levelStats[2].tests }} Practice Tests:</strong> Full mock exam papers.</li>
          </ul>

          <div class="mt-8 pt-6 border-t border-border flex flex-wrap gap-2">
            <RouterLink to="/hsk2" class="flex-1">
              <UiButton class="w-full">
                Enter HSK 2 Portal →
              </UiButton>
            </RouterLink>
            <RouterLink to="/hsk2/practice">
              <UiButton variant="outline">
                Writing Lab
              </UiButton>
            </RouterLink>
          </div>
        </div>

        <!-- HSK 3 Gate Card -->
        <div class="relative overflow-hidden rounded-3xl border-2 bg-surface p-8 shadow-md transition-all hover:shadow-xl" :style="{ borderColor: 'color-mix(in srgb, var(--hsk3-accent) 32%, transparent)' }">
          <div class="flex items-center justify-between">
            <span class="flex size-14 items-center justify-center rounded-2xl text-2xl font-bold" :style="{ color: 'var(--hsk3-accent)', backgroundColor: 'color-mix(in srgb, var(--hsk3-accent) 12%, transparent)' }">
              3级
            </span>
            <UiBadge variant="primary">Intermediate</UiBadge>
          </div>

          <h3 class="mt-6 text-2xl font-black text-foreground">HSK Level 3 Portal</h3>
          <p class="mt-2 text-sm text-muted-foreground leading-relaxed">
            Intermediate Mandarin with full chapter sequences from HSK Standard Course 3, unpinyined texts, and writing sections.
          </p>

          <ul class="mt-6 space-y-2 text-sm text-muted-foreground">
            <li class="flex items-center gap-2">✓ <strong>{{ levelStats[3].vocabulary }} Vocabulary Entries:</strong> 300 additional words with audio.</li>
            <li class="flex items-center gap-2">✓ <strong>{{ levelStats[3].lessons }} Lessons:</strong> 20 deep academic units.</li>
            <li class="flex items-center gap-2">✓ <strong>{{ levelStats[3].patterns }} Grammar Topics:</strong> Complex connectives.</li>
            <li class="flex items-center gap-2">✓ <strong>{{ levelStats[3].dialogues }} Dialogue Scenarios:</strong> Campus & workplace.</li>
            <li class="flex items-center gap-2">✓ <strong>{{ levelStats[3].tests }} Practice Tests:</strong> Listening, reading, and writing.</li>
          </ul>

          <div class="mt-8 pt-6 border-t border-border flex flex-wrap gap-2">
            <RouterLink to="/hsk3" class="flex-1">
              <UiButton class="w-full">Enter HSK 3 Portal →</UiButton>
            </RouterLink>
            <RouterLink to="/hsk3/practice">
              <UiButton variant="outline">Writing Lab</UiButton>
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Platform Comparison Table Section -->
    <section id="comparison" class="border-t border-border bg-surface py-16 px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-6xl">
        <CompComparisonTable />
      </div>
    </section>

    <!-- Frequently Asked Questions -->
    <section id="faqs" class="border-t border-border bg-background py-16 px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-4xl">
        <div class="text-center">
          <UiBadge variant="secondary">Helpful answers</UiBadge>
          <h2 class="mt-3 text-3xl font-extrabold text-foreground sm:text-4xl">Frequently Asked Questions</h2>
        </div>
        <div class="mt-8 space-y-3">
          <details
            v-for="faq in faqs"
            :key="faq.question"
            class="group rounded-xl border border-border bg-background p-5 cursor-pointer"
          >
            <summary class="list-none pr-6 font-semibold text-foreground marker:hidden flex items-center justify-between">
              <span>{{ faq.question }}</span>
              <span class="text-muted-foreground group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p class="mt-3 text-sm leading-6 text-muted-foreground">{{ faq.answer }}</p>
          </details>
        </div>
      </div>
    </section>

    <!-- Featured Masterclass Blogs Section (24 Articles) -->
    <section class="border-t border-border bg-surface py-16 px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-7xl">
        <div class="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <UiBadge variant="secondary">Educational Masterclasses</UiBadge>
            <h2 class="mt-2 text-3xl font-extrabold sm:text-4xl text-foreground">
              Academic Guides & Examination Blueprints ({{ totalBlogs }} Articles)
            </h2>
            <p class="mt-1 text-sm text-muted-foreground">
              Deep pedagogical analyses covering character origins, stroke order laws, tones, false friends, and exam tactics.
            </p>
          </div>
          <RouterLink to="/blogs">
            <UiButton variant="outline" size="sm">
              View All {{ totalBlogs }} Articles →
            </UiButton>
          </RouterLink>
        </div>

        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <article
            v-for="b in featuredBlogs"
            :key="b.slug"
            class="group rounded-2xl border border-border bg-surface-raised p-5 shadow-xs transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-md flex flex-col justify-between"
          >
            <div>
              <RouterLink :to="`/blogs/${b.slug}`" class="mb-4 block overflow-hidden rounded-xl">
                <img
                  :src="b.imageUrl"
                  :alt="b.imageAlt"
                  width="600"
                  height="338"
                  class="aspect-[16/9] w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  loading="lazy"
                  decoding="async"
                />
              </RouterLink>
              <div class="flex items-center justify-between">
                <UiBadge variant="secondary">{{ b.category }}</UiBadge>
                <span class="text-[11px] text-muted-foreground">{{ b.readTime }}</span>
              </div>

              <h3 class="mt-3 text-base font-bold text-foreground group-hover:text-primary transition-colors">
                <RouterLink :to="`/blogs/${b.slug}`">
                  {{ b.title }}
                </RouterLink>
              </h3>

              <p class="mt-2 text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                {{ b.excerpt }}
              </p>
            </div>

            <div class="mt-4 pt-3 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
              <span>By {{ b.author }}</span>
              <RouterLink :to="`/blogs/${b.slug}`" class="font-bold text-primary hover:underline">
                Read Guide →
              </RouterLink>
            </div>
          </article>
        </div>
      </div>
    </section>

  </div>
</template>
