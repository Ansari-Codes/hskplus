<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { UiButton, UiBadge } from '../../Ui'
import CompAdSense from '../../Components/CompAdSense.vue'
import CompDownloadMaterials from '../../Components/CompDownloadMaterials.vue'

const route = useRoute()
const level = computed<1 | 2 | 3>(() => {
  const param = route.params.level
  if (param === '3') return 3
  if (param === '2') return 2
  return 1
})

const vocabCount = computed(() => (level.value === 3 ? 300 : 150))
const lessonsCount = computed(() => (level.value === 3 ? 20 : 15))
const patternsCount = computed(() => (level.value === 3 ? 20 : 15))
const passingScore = computed(() => (level.value === 3 ? '180 / 300' : '120 / 200'))

const modules = computed(() => [
  {
    id: 'vocabulary',
    title: `HSK ${level.value} Vocabulary`,
    badge: `${vocabCount.value} Words`,
    badgeVariant: 'secondary' as const,
    icon: '📚',
    description: `All ${vocabCount.value} official vocabulary words from the syllabus. Includes Hanzi characters, pinyin, English meanings, stroke counts, and audio examples.`,
    link: `/hsk${level.value}/vocabulary`,
    action: 'Browse Vocabulary',
    gradient: 'from-blue-500/10 to-indigo-500/10 border-blue-200 dark:border-blue-900/40'
  },
  {
    id: 'lessons',
    title: `HSK ${level.value} Standard Lessons`,
    badge: `${lessonsCount.value} Lessons`,
    badgeVariant: 'primary' as const,
    icon: '🎓',
    description: `Structured step-by-step curriculum aligned with the official standard course textbooks. Covers objectives, core vocabulary, grammar, dialogues, and quizzes.`,
    link: `/hsk${level.value}/lessons`,
    action: 'Start Lessons',
    gradient: 'from-purple-500/10 to-pink-500/10 border-purple-200 dark:border-purple-900/40'
  },
  {
    id: 'sentences',
    title: `HSK ${level.value} Sentence Patterns`,
    badge: `${patternsCount.value} Core Patterns`,
    badgeVariant: 'secondary' as const,
    icon: '📐',
    description: `The grammatical blueprint of Mandarin: formulas, structural rules, detailed usage explanations, and authentic sentence builder examples with audio.`,
    link: `/hsk${level.value}/sentences`,
    action: 'Explore Patterns',
    gradient: 'from-emerald-500/10 to-teal-500/10 border-emerald-200 dark:border-emerald-900/40'
  },
  {
    id: 'dialogs',
    title: `HSK ${level.value} Dialogue Scenarios`,
    badge: '10 Scenarios',
    badgeVariant: 'secondary' as const,
    icon: '💬',
    description: `Authentic conversational exchanges: campus, travel, rental contracts, doctor visits, and business with line-by-line speech audio and pinyin toggle.`,
    link: `/hsk${level.value}/dialogs`,
    action: 'Practice Dialogues',
    gradient: 'from-amber-500/10 to-orange-500/10 border-amber-200 dark:border-amber-900/40'
  },
  {
    id: 'practice',
    title: `Hanzi Writing & AI Scoring`,
    badge: 'Tian Zi Ge Lab',
    badgeVariant: 'primary' as const,
    icon: '✍️',
    description: `Master character stroke order with animated visuals, take guided stroke quizzes, or write freehand on the Tian Zi Ge canvas for instant AI scoring diagnostics.`,
    link: `/hsk${level.value}/practice`,
    action: 'Launch Writing Lab',
    gradient: 'from-rose-500/10 to-red-500/10 border-rose-200 dark:border-rose-900/40'
  },
  {
    id: 'radicals',
    title: `HSK ${level.value} Radicals & Semantic Roots`,
    badge: `HSK ${level.value} Roots`,
    badgeVariant: 'secondary' as const,
    icon: '氵',
    description: `Master the essential Chinese character radicals and components that construct HSK ${level.value} vocabulary. Learn pictographic origins, stroke counts, and memory mnemonics.`,
    link: `/radicals?level=${level.value}`,
    action: 'Explore Radicals',
    gradient: 'from-amber-500/10 to-emerald-500/10 border-amber-200 dark:border-amber-900/40'
  },
  {
    id: 'tests',
    title: `HSK ${level.value} Timed Mock Tests`,
    badge: '5 Listening + 5 Reading + Writing',
    badgeVariant: 'secondary' as const,
    icon: '⏱️',
    description: `Simulate the real exam under strict timer constraints. Includes interactive listening audio, reading comprehension, writing questions, and instant grading.`,
    link: `/hsk${level.value}/tests`,
    action: 'Take Mock Test',
    gradient: 'from-cyan-500/10 to-blue-500/10 border-cyan-200 dark:border-cyan-900/40'
  }
])
</script>

<template>
  <div class="min-h-screen bg-background text-foreground">
    <!-- Hero Banner -->
    <header class="border-b border-border bg-surface py-12 px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-6xl">
        <div class="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div class="flex items-center gap-2">
              <RouterLink to="/" class="text-sm font-medium text-primary hover:underline">← Home</RouterLink>
              <span class="text-muted-foreground">/</span>
              <span class="text-sm font-semibold text-muted-foreground">Level Portal</span>
            </div>
            <h1 class="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
              HSK {{ level }} Learning Hub
            </h1>
            <p class="mt-3 max-w-2xl text-base text-muted-foreground">
              Your complete, 100% free encyclopedia for HSK {{ level }}. Master official vocabulary, standard course lessons, grammar sentence formulas, everyday dialogues, and official timed mock examinations.
            </p>
          </div>

          <!-- Level Switcher Buttons -->
          <div class="flex items-center gap-2">
            <RouterLink to="/hsk1">
              <UiButton :variant="level === 1 ? 'primary' : 'outline'" size="sm">HSK 1</UiButton>
            </RouterLink>
            <RouterLink to="/hsk2">
              <UiButton :variant="level === 2 ? 'primary' : 'outline'" size="sm">HSK 2</UiButton>
            </RouterLink>
            <RouterLink to="/hsk3">
              <UiButton :variant="level === 3 ? 'primary' : 'outline'" size="sm">HSK 3</UiButton>
            </RouterLink>
          </div>
        </div>

        <!-- Quick Stats Strip -->
        <div class="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          <div class="rounded-xl border border-border bg-surface-raised p-4 text-center">
            <p class="text-2xl font-bold text-primary">{{ vocabCount }}</p>
            <p class="mt-1 text-xs text-muted-foreground">Official Words</p>
          </div>
          <div class="rounded-xl border border-border bg-surface-raised p-4 text-center">
            <p class="text-2xl font-bold text-primary">{{ lessonsCount }}</p>
            <p class="mt-1 text-xs text-muted-foreground">Standard Lessons</p>
          </div>
          <div class="rounded-xl border border-border bg-surface-raised p-4 text-center">
            <p class="text-2xl font-bold text-primary">{{ patternsCount }}</p>
            <p class="mt-1 text-xs text-muted-foreground">Sentence Patterns</p>
          </div>
          <div class="rounded-xl border border-border bg-surface-raised p-4 text-center">
            <p class="text-2xl font-bold text-primary">10</p>
            <p class="mt-1 text-xs text-muted-foreground">Dialog Scenarios</p>
          </div>
          <div class="rounded-xl border border-border bg-surface-raised p-4 text-center">
            <p class="text-2xl font-bold text-primary">11</p>
            <p class="mt-1 text-xs text-muted-foreground">Mock Tests</p>
          </div>
          <div class="rounded-xl border border-border bg-surface-raised p-4 text-center">
            <p class="text-2xl font-bold text-emerald-600">{{ passingScore }}</p>
            <p class="mt-1 text-xs text-muted-foreground">Passing Mark</p>
          </div>
        </div>
      </div>
    </header>

    <!-- AdSense Top Leaderboard Banner -->
    <div class="mx-auto max-w-6xl px-4 pt-6">
      <CompAdSense format="banner" slot-id="hsk-hub-top" />
    </div>

    <!-- Main Module Gate Cards Grid -->
    <main class="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <div class="mb-8 flex items-center justify-between">
        <div>
          <h2 class="text-2xl font-bold tracking-tight">Curriculum Modules</h2>
          <p class="text-sm text-muted-foreground">Select a gateway below to begin your targeted study session.</p>
        </div>
        <RouterLink to="/score-calculator">
          <UiButton variant="outline" size="sm">
            🧮 Score Calculator
          </UiButton>
        </RouterLink>
      </div>

      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="mod in modules"
          :key="mod.id"
          class="group relative flex flex-col justify-between rounded-2xl border bg-surface p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
          :class="mod.gradient"
        >
          <div>
            <div class="flex items-center justify-between">
              <span class="text-3xl">{{ mod.icon }}</span>
              <UiBadge :variant="mod.badgeVariant">{{ mod.badge }}</UiBadge>
            </div>
            <h3 class="mt-4 text-xl font-bold text-foreground group-hover:text-primary transition-colors">
              {{ mod.title }}
            </h3>
            <p class="mt-2 text-sm leading-relaxed text-muted-foreground">
              {{ mod.description }}
            </p>
          </div>

          <div class="mt-6 pt-4 border-t border-border/60">
            <RouterLink :to="mod.link" class="block w-full">
              <UiButton class="w-full" variant="outline">
                {{ mod.action }} →
              </UiButton>
            </RouterLink>
          </div>
        </div>
      </div>

      <!-- Dedicated Standard Material Downloads Section -->
      <section class="mt-12 pt-8 border-t border-border">
        <CompDownloadMaterials
          :level="level"
          :title="`📥 Download HSK ${level} Standard Course Materials`"
          :subtitle="`Get the authentic BLCUP textbook PDF, Hanban certified vocabulary sheet, and full mock test papers with listening audio for HSK ${level}.`"
        />
      </section>

      <!-- In-Page Ad Placement -->
      <CompAdSense format="in-article" slot-id="hsk-hub-mid" />

      <!-- Quick Tips Box -->
      <section class="mt-8 rounded-2xl border border-border bg-surface p-8 shadow-sm">
        <h3 class="text-lg font-bold text-foreground">💡 How to Study for HSK {{ level }} Efficiently</h3>
        <div class="mt-4 grid gap-6 sm:grid-cols-3">
          <div>
            <h4 class="font-semibold text-primary">1. Learn 5–10 Words Daily</h4>
            <p class="mt-1 text-sm text-muted-foreground">
              Master official vocabulary with audio pronunciation and stroke order. Review with spaced repetition (SRS).
            </p>
          </div>
          <div>
            <h4 class="font-semibold text-primary">2. Practice Sentence Patterns</h4>
            <p class="mt-1 text-sm text-muted-foreground">
              Grammar in Mandarin is governed by word sequence. Speak pattern formulas and dialogues out loud daily.
            </p>
          </div>
          <div>
            <h4 class="font-semibold text-primary">3. Complete 2 Mock Tests Weekly</h4>
            <p class="mt-1 text-sm text-muted-foreground">
              Practice under timed conditions to get accustomed to official audio pacing and section time limits.
            </p>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
