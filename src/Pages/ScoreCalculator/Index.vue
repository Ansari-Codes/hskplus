<script setup lang="ts">
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { UiBadge } from '../../Ui'
import CompAdSense from '../../Components/CompAdSense.vue'

const selectedLevel = ref<1 | 2 | 3 | 4 | 5 | 6>(1)

const listeningScore = ref(85)
const readingScore = ref(80)
const writingScore = ref(75)

const isElementary = computed(() => selectedLevel.value === 1 || selectedLevel.value === 2)

const maxScore = computed(() => (isElementary.value ? 200 : 300))
const passingThreshold = computed(() => (isElementary.value ? 120 : 180))

const totalScore = computed(() => {
  if (isElementary.value) {
    return Number(listeningScore.value) + Number(readingScore.value)
  }
  return Number(listeningScore.value) + Number(readingScore.value) + Number(writingScore.value)
})

const percentage = computed(() => {
  return Math.round((totalScore.value / maxScore.value) * 100)
})

const isPassed = computed(() => {
  return totalScore.value >= passingThreshold.value
})

const cefrLevel = computed(() => {
  const map: Record<number, string> = {
    1: 'CEFR A1 (Basic Beginner)',
    2: 'CEFR A2 (Elementary Waystage)',
    3: 'CEFR B1 (Intermediate Threshold)',
    4: 'CEFR B2 (Upper Intermediate Vantage)',
    5: 'CEFR C1 (Advanced Effective Operational Proficiency)',
    6: 'CEFR C2 (Mastery / Native-like Fluency)',
  }
  return map[selectedLevel.value]
})

// Scholarships & Opportunities
const scholarshipEligibility = computed(() => {
  const lvl = selectedLevel.value
  const score = totalScore.value

  const results = []

  if (lvl >= 3 && isPassed.value) {
    results.push({
      title: 'Confucius Institute 1-Semester Scholarship',
      status: score >= 210 ? 'Strongly Eligible' : 'Eligible',
      variant: 'emerald',
      desc: 'Tuition waiver + free accommodation + living stipend in China for one semester.'
    })
  }

  if (lvl >= 4 && isPassed.value) {
    results.push({
      title: 'Chinese University Undergraduate Degree (CSC Type B)',
      status: score >= 210 ? 'Highly Competitive' : 'Meets Minimum',
      variant: 'emerald',
      desc: 'Eligible for Chinese-taught Bachelor degree programs across top Chinese universities.'
    })
  }

  if (lvl >= 5 && isPassed.value) {
    results.push({
      title: 'CSC Postgraduate Master / PhD Full Scholarship (Type A & B)',
      status: score >= 210 ? 'High Scholarship Probability' : 'Meets Requirement',
      variant: 'emerald',
      desc: 'Full tuition, free housing, comprehensive medical insurance, and 3,000 - 3,500 RMB/month stipend.'
    })
  }

  if (lvl < 3 || !isPassed.value) {
    results.push({
      title: 'Foundation Language Milestone',
      status: isPassed.value ? 'Achieved!' : 'Needs Preparation',
      variant: isPassed.value ? 'emerald' : 'amber',
      desc: 'Build fundamental conversation and reading abilities to prepare for HSK 3 and scholarship tiers.'
    })
  }

  return results
})
</script>

<template>
  <div class="min-h-screen bg-background text-foreground">
    <!-- Header Banner -->
    <header class="border-b border-border bg-surface py-12 px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-5xl">
        <div class="flex items-center gap-2">
          <RouterLink to="/" class="text-sm font-medium text-primary hover:underline">← Home</RouterLink>
          <span class="text-muted-foreground">/</span>
          <span class="text-sm font-semibold text-muted-foreground">Tools</span>
        </div>
        <h1 class="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
          HSK Official Score & Scholarship Calculator
        </h1>
        <p class="mt-3 text-base text-muted-foreground max-w-2xl">
          Calculate your official scaled score, evaluate Pass/Fail qualification, determine your CEFR equivalent level, and check eligibility for Chinese Government Scholarships (CSC).
        </p>

        <!-- Level Selector Chips -->
        <div class="mt-8 flex flex-wrap gap-2">
          <button
            v-for="l in ([1, 2, 3, 4, 5, 6] as const)"
            :key="l"
            type="button"
            :class="[
              'rounded-xl px-4 py-2.5 text-sm font-bold transition-all shadow-sm',
              selectedLevel === l
                ? 'bg-primary text-primary-foreground scale-105'
                : 'bg-surface-raised border border-border text-muted-foreground hover:text-foreground'
            ]"
            @click="selectedLevel = l"
          >
            HSK {{ l }}
          </button>
        </div>
      </div>
    </header>

    <main class="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <!-- Calculator Top Banner -->
      <CompAdSense format="banner" slot-id="calculator-top" class="mb-8" />

      <div class="grid items-start gap-8 lg:grid-cols-[1.1fr_1fr]">
        <!-- Inputs Card -->
        <div class="rounded-2xl border border-border bg-surface p-6 shadow-sm sm:p-8">
          <div class="flex items-center justify-between border-b border-border pb-4">
            <h2 class="text-xl font-bold text-foreground">Enter Section Scores</h2>
            <UiBadge variant="secondary">HSK {{ selectedLevel }} (Max {{ maxScore }})</UiBadge>
          </div>

          <!-- Section 1: Listening -->
          <div class="mt-6 space-y-2">
            <div class="flex items-center justify-between">
              <label class="text-sm font-semibold text-foreground">
                🎧 Listening Section (听力)
              </label>
              <span class="font-mono text-base font-bold text-primary">{{ listeningScore }} / 100</span>
            </div>
            <input
              v-model.number="listeningScore"
              type="range"
              min="0"
              max="100"
              class="w-full accent-primary h-2 bg-muted rounded-lg cursor-pointer"
            />
          </div>

          <!-- Section 2: Reading -->
          <div class="mt-6 space-y-2">
            <div class="flex items-center justify-between">
              <label class="text-sm font-semibold text-foreground">
                📖 Reading Section (阅读)
              </label>
              <span class="font-mono text-base font-bold text-primary">{{ readingScore }} / 100</span>
            </div>
            <input
              v-model.number="readingScore"
              type="range"
              min="0"
              max="100"
              class="w-full accent-primary h-2 bg-muted rounded-lg cursor-pointer"
            />
          </div>

          <!-- Section 3: Writing (Only HSK 3-6) -->
          <div v-if="!isElementary" class="mt-6 space-y-2">
            <div class="flex items-center justify-between">
              <label class="text-sm font-semibold text-foreground">
                ✍️ Writing Section (书写)
              </label>
              <span class="font-mono text-base font-bold text-primary">{{ writingScore }} / 100</span>
            </div>
            <input
              v-model.number="writingScore"
              type="range"
              min="0"
              max="100"
              class="w-full accent-primary h-2 bg-muted rounded-lg cursor-pointer"
            />
          </div>

          <div v-else class="mt-6 rounded-xl bg-muted/60 p-3 text-xs text-muted-foreground">
            ℹ️ Note: Official HSK 1 and HSK 2 examinations do not contain a standalone handwritten essay writing section.
          </div>

          <!-- Reset / Quick presets -->
          <div class="mt-8 pt-4 border-t border-border flex flex-wrap gap-2 justify-between">
            <span class="text-xs text-muted-foreground self-center">Quick Preset:</span>
            <div class="flex gap-2">
              <button
                type="button"
                class="rounded-lg border border-border px-2.5 py-1 text-xs text-muted-foreground hover:bg-muted"
                @click="listeningScore = 60; readingScore = 60; writingScore = 60"
              >
                Minimum Pass (60%)
              </button>
              <button
                type="button"
                class="rounded-lg border border-border px-2.5 py-1 text-xs text-muted-foreground hover:bg-muted"
                @click="listeningScore = 85; readingScore = 85; writingScore = 85"
              >
                Competitive (85%)
              </button>
              <button
                type="button"
                class="rounded-lg border border-border px-2.5 py-1 text-xs text-muted-foreground hover:bg-muted"
                @click="listeningScore = 100; readingScore = 100; writingScore = 100"
              >
                Perfect (100%)
              </button>
            </div>
          </div>
        </div>

        <!-- Calculated Summary Card -->
        <div class="rounded-2xl border border-border bg-surface p-6 shadow-sm sm:p-8">
          <h2 class="text-xl font-bold text-foreground">Official Result Projection</h2>

          <div class="mt-6 flex items-center justify-between rounded-2xl bg-surface-raised p-6 border border-border">
            <div>
              <p class="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Total Scaled Score</p>
              <p class="mt-1 text-4xl font-extrabold text-foreground">{{ totalScore }} <span class="text-lg font-normal text-muted-foreground">/ {{ maxScore }}</span></p>
              <p class="mt-1 text-xs text-muted-foreground">Passing mark: {{ passingThreshold }} points</p>
            </div>

            <div
              class="flex flex-col items-center justify-center rounded-2xl px-5 py-3 font-extrabold shadow-sm"
              :class="isPassed ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200' : 'bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-200'"
            >
              <span class="text-2xl">{{ isPassed ? '✓' : '✗' }}</span>
              <span class="text-sm font-bold tracking-wider">{{ isPassed ? 'PASS' : 'FAIL' }}</span>
            </div>
          </div>

          <!-- Score percentage bar -->
          <div class="mt-6">
            <div class="flex justify-between text-xs font-medium">
              <span>Overall Achievement</span>
              <span class="font-bold text-primary">{{ percentage }}%</span>
            </div>
            <div class="mt-1.5 h-3 rounded-full bg-muted overflow-hidden">
              <div
                class="h-full rounded-full transition-all duration-500"
                :class="isPassed ? 'bg-emerald-500' : 'bg-red-500'"
                :style="{ width: `${percentage}%` }"
              />
            </div>
          </div>

          <!-- CEFR Alignment -->
          <div class="mt-6 rounded-xl border border-border bg-surface-raised p-4">
            <p class="text-xs font-semibold uppercase tracking-wider text-muted-foreground">CEFR Equivalent Scale</p>
            <p class="mt-1 text-base font-bold text-primary">{{ cefrLevel }}</p>
            <p class="mt-1 text-xs text-muted-foreground">
              Internationally recognized according to the Common European Framework of Reference for Languages.
            </p>
          </div>

          <!-- Scholarship & University Outlook -->
          <div class="mt-6 border-t border-border pt-4">
            <h3 class="text-sm font-bold text-foreground">Scholarship & University Outlook</h3>
            <div class="mt-3 space-y-3">
              <div
                v-for="item in scholarshipEligibility"
                :key="item.title"
                class="rounded-xl border border-border bg-surface-raised p-3.5"
              >
                <div class="flex items-center justify-between">
                  <h4 class="text-xs font-bold text-foreground">{{ item.title }}</h4>
                  <span
                    class="rounded-md px-2 py-0.5 text-xs font-bold"
                    :class="item.variant === 'emerald' ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300' : 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'"
                  >
                    {{ item.status }}
                  </span>
                </div>
                <p class="mt-1 text-xs text-muted-foreground leading-relaxed">{{ item.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Calculator Bottom Banner -->
      <CompAdSense format="in-article" slot-id="calculator-bottom" class="mt-8" />
    </main>
  </div>
</template>
