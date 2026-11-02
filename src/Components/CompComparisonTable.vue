<script setup lang="ts">
import { ref } from 'vue'
import { UiBadge, UiButton } from '../Ui'
import { RouterLink } from 'vue-router'

interface FeatureRow {
  category: string
  name: string
  description: string
  hskPlus: { text: string; status: 'yes' | 'highlight' | 'no' | 'partial' }
  duolingo: { text: string; status: 'yes' | 'no' | 'partial' }
  mandarinBean: { text: string; status: 'yes' | 'no' | 'partial' }
  superChinese: { text: string; status: 'yes' | 'no' | 'partial' }
  officialHanban: { text: string; status: 'yes' | 'no' | 'partial' }
}

const activeCategoryFilter = ref<string>('all')

const categories = [
  { id: 'all', label: 'All Features' },
  { id: 'pricing', label: 'Pricing & Access' },
  { id: 'curriculum', label: 'Curriculum & Study' },
  { id: 'exams', label: 'Mock Exams & Format' },
  { id: 'tools', label: 'Writing & Interactive Tools' },
]

const features: FeatureRow[] = [
  // Pricing & Access
  {
    category: 'pricing',
    name: 'Cost & Paywalls',
    description: 'Access to full vocabulary, lessons, and mock test papers',
    hskPlus: { text: '100% Free Forever (No Paywalls)', status: 'highlight' },
    duolingo: { text: 'Free tier with ads / $12.99/mo Super', status: 'partial' },
    mandarinBean: { text: 'Free articles / Paid membership', status: 'partial' },
    superChinese: { text: '$15 – $29/month subscription', status: 'no' },
    officialHanban: { text: '$30 – $80 per official test', status: 'no' },
  },
  {
    category: 'pricing',
    name: 'Account & Sign-In Required',
    description: 'Ability to practice immediately without creating an account',
    hskPlus: { text: 'Zero Friction (No Account Needed)', status: 'highlight' },
    duolingo: { text: 'Mandatory Sign-In & Hearts system', status: 'no' },
    mandarinBean: { text: 'Account required for saved quizzes', status: 'partial' },
    superChinese: { text: 'Mandatory Account & Profile', status: 'no' },
    officialHanban: { text: 'Strict registration & ID verification', status: 'no' },
  },

  // Curriculum & Study
  {
    category: 'curriculum',
    name: 'BLCUP Standard Course Alignment',
    description: 'Direct mapping to official Beijing Language and Culture University Press textbooks',
    hskPlus: { text: 'Full 50 Lessons (HSK 1, 2, 3)', status: 'highlight' },
    duolingo: { text: 'None (Casual gamified trees)', status: 'no' },
    mandarinBean: { text: 'Partial (Graded reading articles)', status: 'partial' },
    superChinese: { text: 'Proprietary custom syllabus', status: 'partial' },
    officialHanban: { text: 'None (Testing portal only, no lessons)', status: 'no' },
  },
  {
    category: 'curriculum',
    name: 'Interactive Pinyin Toggle (🔤 ON / OFF)',
    description: 'Switch pinyin on/off in real-time to train authentic Chinese character recognition',
    hskPlus: { text: 'Instant 1-Click Toggle across all tools', status: 'highlight' },
    duolingo: { text: 'Global setting only (all or nothing)', status: 'partial' },
    mandarinBean: { text: 'Hover tooltip popup only', status: 'partial' },
    superChinese: { text: 'Rigid per-exercise display', status: 'partial' },
    officialHanban: { text: 'No pinyin support in tests', status: 'no' },
  },
  {
    category: 'curriculum',
    name: 'Situational Dialogues & Grammar Formulas',
    description: 'Structured grammar formulas and everyday conversational dialogues with native audio',
    hskPlus: { text: '50 Grammar Formulas + 30 Dialogues', status: 'highlight' },
    duolingo: { text: 'Brief tip notes only', status: 'partial' },
    mandarinBean: { text: 'Graded stories with vocabulary lists', status: 'yes' },
    superChinese: { text: 'App dialogues & grammar lessons', status: 'yes' },
    officialHanban: { text: 'None (No instruction)', status: 'no' },
  },
  {
    category: 'curriculum',
    name: 'Curated 1,000+ Word Pedagogical Guides',
    description: 'Deep-dive articles on tones, radicals, grammar, and exam strategies',
    hskPlus: { text: '20 In-Depth Articles (1,000+ words each)', status: 'highlight' },
    duolingo: { text: 'None', status: 'no' },
    mandarinBean: { text: 'Blog posts and news summaries', status: 'yes' },
    superChinese: { text: 'Short blog tips', status: 'partial' },
    officialHanban: { text: 'Official exam guidelines only', status: 'partial' },
  },

  // Mock Exams & Format
  {
    category: 'exams',
    name: 'Authentic Hanban / Mandarin Bean Layout',
    description: 'Standard exam styling with True/False cards, Word Bank trays, and Sentence Unscramblers',
    hskPlus: { text: 'Official Hanban Style & Mandarin Bean Trays', status: 'highlight' },
    duolingo: { text: 'Casual matching & bubble tapping', status: 'no' },
    mandarinBean: { text: 'Standard exam format', status: 'yes' },
    superChinese: { text: 'Mobile multiple-choice format', status: 'partial' },
    officialHanban: { text: 'Official computerized test format', status: 'yes' },
  },
  {
    category: 'exams',
    name: 'Timed Mock Examinations',
    description: 'Listening, Reading, and Writing sections with countdowns and answer sheets',
    hskPlus: { text: '33 Timed Mock Exams (HSK 1, 2, 3)', status: 'highlight' },
    duolingo: { text: 'None (No timed mock exams)', status: 'no' },
    mandarinBean: { text: 'Limited practice questions', status: 'partial' },
    superChinese: { text: 'Mock tests behind paywall', status: 'partial' },
    officialHanban: { text: 'Past paper PDFs or limited simulations', status: 'partial' },
  },
  {
    category: 'exams',
    name: 'Exam Audio Speed Control (0.82× vs 1.0×)',
    description: 'Dedicated exam-speed audio player for listening section practice',
    hskPlus: { text: '0.82× Exam Mode + 1.0× Native Mode', status: 'highlight' },
    duolingo: { text: 'Normal & Turtle speed (Robot TTS)', status: 'partial' },
    mandarinBean: { text: 'Standard player with speed adjustment', status: 'yes' },
    superChinese: { text: 'Fixed native speed only', status: 'partial' },
    officialHanban: { text: 'Fixed exam audio, plays strictly once', status: 'partial' },
  },
  {
    category: 'exams',
    name: 'Official Scaled Score Calculator',
    description: 'Instant conversion of practice section points into official HSK scaled scores & pass benchmarks',
    hskPlus: { text: 'Built-in Interactive Score Calculator', status: 'highlight' },
    duolingo: { text: 'None', status: 'no' },
    mandarinBean: { text: 'None', status: 'no' },
    superChinese: { text: 'Internal proficiency estimate only', status: 'partial' },
    officialHanban: { text: 'Raw score table lookup only', status: 'partial' },
  },

  // Writing & Interactive Tools
  {
    category: 'tools',
    name: 'Hanzi Stroke Order Vector Animations',
    description: 'Step-by-step visual animation of stroke sequences for every required character',
    hskPlus: { text: 'Animated Hanzi Player with Step Controls', status: 'highlight' },
    duolingo: { text: 'Basic character tracing in beginner tree', status: 'partial' },
    mandarinBean: { text: 'None (Static text)', status: 'no' },
    superChinese: { text: 'Interactive mobile stroke tracing', status: 'yes' },
    officialHanban: { text: 'None', status: 'no' },
  },
  {
    category: 'tools',
    name: 'Tian Zi Ge Canvas with AI Scoring',
    description: 'Digital calligraphy paper with real-time algorithmic evaluation of stroke balance',
    hskPlus: { text: 'Algorithmic Canvas Scoring & Feedback', status: 'highlight' },
    duolingo: { text: 'None', status: 'no' },
    mandarinBean: { text: 'None', status: 'no' },
    superChinese: { text: 'Mobile tracing scoring', status: 'partial' },
    officialHanban: { text: 'None (Pinyin keyboard or paper only)', status: 'no' },
  },
  {
    category: 'tools',
    name: 'Device Compatibility & Web Speed',
    description: 'Instant loading on desktop, tablet, and mobile browsers with zero app installation',
    hskPlus: { text: 'Lightweight Web App (Zero Install, <2s Load)', status: 'highlight' },
    duolingo: { text: 'Heavy app download (200MB+)', status: 'partial' },
    mandarinBean: { text: 'Standard website', status: 'yes' },
    superChinese: { text: 'Requires mobile app install', status: 'partial' },
    officialHanban: { text: 'Requires legacy IE/Windows test client', status: 'no' },
  },
]

const filteredFeatures = () => {
  if (activeCategoryFilter.value === 'all') return features
  return features.filter((f) => f.category === activeCategoryFilter.value)
}
</script>

<template>
  <div class="w-full">
    <!-- Header -->
    <div class="text-center mb-8">
      <UiBadge variant="primary" class="mb-3">Comprehensive Benchmark</UiBadge>
      <h2 class="text-3xl font-extrabold sm:text-4xl text-foreground tracking-tight">
        How HSK Plus Compares
      </h2>
      <p class="mt-3 text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
        See why thousands of Mandarin students choose HSK Plus over commercial subscriptions, gamified apps, and static word lists for serious HSK preparation.
      </p>

      <!-- Category Filter Tabs -->
      <div class="mt-6 flex flex-wrap items-center justify-center gap-2">
        <button
          v-for="cat in categories"
          :key="cat.id"
          type="button"
          @click="activeCategoryFilter = cat.id"
          :class="[
            'rounded-full px-4 py-1.5 text-xs font-semibold transition-all cursor-pointer',
            activeCategoryFilter === cat.id
              ? 'bg-primary text-white shadow-sm shadow-primary/30'
              : 'border border-border bg-surface text-muted-foreground hover:bg-surface-raised hover:text-foreground',
          ]"
        >
          {{ cat.label }}
        </button>
      </div>
    </div>

    <!-- Comparison Table Card -->
    <div class="overflow-hidden rounded-3xl border border-border bg-surface shadow-lg">
      <div class="overflow-x-auto scrollbar-thin">
        <table class="w-full min-w-[760px] border-collapse text-left text-sm">
          <!-- Table Header -->
          <thead>
            <tr class="border-b border-border bg-surface-raised/80">
              <th scope="col" class="sticky left-0 z-20 bg-surface-raised px-6 py-5 font-bold text-foreground w-[260px] min-w-[220px]">
                Features & Criteria
              </th>
              <!-- HSK Plus (Highlighted Column) -->
              <th scope="col" class="relative bg-primary/10 px-5 py-5 text-center font-black text-primary border-x-2 border-primary/40 min-w-[190px]">
                <div class="absolute -top-1 left-1/2 -translate-x-1/2">
                  <span class="rounded-b-md bg-primary px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-white shadow-sm">
                    ★ Our Platform
                  </span>
                </div>
                <div class="pt-2">
                  <span class="text-base font-extrabold text-foreground">HSK Plus</span>
                  <span class="block text-[11px] font-medium text-primary mt-0.5">100% Free Complete Hub</span>
                </div>
              </th>
              <!-- Duolingo -->
              <th scope="col" class="px-5 py-5 text-center font-bold text-foreground min-w-[150px]">
                <div>Duolingo</div>
                <span class="block text-[11px] font-normal text-muted-foreground mt-0.5">Gamified App</span>
              </th>
              <!-- Mandarin Bean -->
              <th scope="col" class="px-5 py-5 text-center font-bold text-foreground min-w-[150px]">
                <div>Mandarin Bean</div>
                <span class="block text-[11px] font-normal text-muted-foreground mt-0.5">Reading Portal</span>
              </th>
              <!-- SuperChinese / Class101 -->
              <th scope="col" class="px-5 py-5 text-center font-bold text-foreground min-w-[160px]">
                <div>SuperChinese / Paid Apps</div>
                <span class="block text-[11px] font-normal text-muted-foreground mt-0.5">Monthly Subscriptions</span>
              </th>
              <!-- Official Hanban -->
              <th scope="col" class="px-5 py-5 text-center font-bold text-foreground min-w-[150px]">
                <div>Official Hanban Portals</div>
                <span class="block text-[11px] font-normal text-muted-foreground mt-0.5">Exam Centers</span>
              </th>
            </tr>
          </thead>

          <!-- Table Body -->
          <tbody class="divide-y divide-border/60">
            <tr
              v-for="(row, idx) in filteredFeatures()"
              :key="row.name"
              :class="idx % 2 === 0 ? 'bg-surface' : 'bg-surface/50'"
              class="transition-colors hover:bg-surface-raised/40"
            >
              <!-- Feature Name & Description (Sticky Left on mobile) -->
              <td class="sticky left-0 z-10 bg-inherit px-6 py-4 font-medium text-foreground backdrop-blur-sm">
                <div class="font-bold text-foreground text-sm">{{ row.name }}</div>
                <div class="text-xs text-muted-foreground mt-0.5 line-clamp-2 leading-relaxed">
                  {{ row.description }}
                </div>
              </td>

              <!-- HSK Plus (Highlighted) -->
              <td class="bg-primary/5 px-4 py-4 text-center border-x-2 border-primary/40 font-semibold text-foreground">
                <div class="flex items-center justify-center gap-1.5 text-xs text-primary font-bold">
                  <span class="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-white text-[11px] font-bold">✓</span>
                  <span>{{ row.hskPlus.text }}</span>
                </div>
              </td>

              <!-- Duolingo -->
              <td class="px-4 py-4 text-center text-xs">
                <div class="flex items-center justify-center gap-1.5" :class="{
                  'text-muted-foreground': row.duolingo.status === 'no',
                  'text-amber-700 dark:text-amber-400': row.duolingo.status === 'partial',
                  'text-foreground font-medium': row.duolingo.status === 'yes',
                }">
                  <span v-if="row.duolingo.status === 'no'" class="text-rose-700 dark:text-rose-400 font-bold">✕</span>
                  <span v-else-if="row.duolingo.status === 'partial'" class="text-amber-700 dark:text-amber-400 font-bold">⚠️</span>
                  <span v-else class="text-emerald-700 dark:text-emerald-400 font-bold">✓</span>
                  <span>{{ row.duolingo.text }}</span>
                </div>
              </td>

              <!-- Mandarin Bean -->
              <td class="px-4 py-4 text-center text-xs">
                <div class="flex items-center justify-center gap-1.5" :class="{
                  'text-muted-foreground': row.mandarinBean.status === 'no',
                  'text-amber-700 dark:text-amber-400': row.mandarinBean.status === 'partial',
                  'text-foreground font-medium': row.mandarinBean.status === 'yes',
                }">
                  <span v-if="row.mandarinBean.status === 'no'" class="text-rose-700 dark:text-rose-400 font-bold">✕</span>
                  <span v-else-if="row.mandarinBean.status === 'partial'" class="text-amber-700 dark:text-amber-400 font-bold">⚠️</span>
                  <span v-else class="text-emerald-700 dark:text-emerald-400 font-bold">✓</span>
                  <span>{{ row.mandarinBean.text }}</span>
                </div>
              </td>

              <!-- SuperChinese / Commercial Apps -->
              <td class="px-4 py-4 text-center text-xs">
                <div class="flex items-center justify-center gap-1.5" :class="{
                  'text-muted-foreground': row.superChinese.status === 'no',
                  'text-amber-700 dark:text-amber-400': row.superChinese.status === 'partial',
                  'text-foreground font-medium': row.superChinese.status === 'yes',
                }">
                  <span v-if="row.superChinese.status === 'no'" class="text-rose-700 dark:text-rose-400 font-bold">✕</span>
                  <span v-else-if="row.superChinese.status === 'partial'" class="text-amber-700 dark:text-amber-400 font-bold">⚠️</span>
                  <span v-else class="text-emerald-700 dark:text-emerald-400 font-bold">✓</span>
                  <span>{{ row.superChinese.text }}</span>
                </div>
              </td>

              <!-- Official Hanban -->
              <td class="px-4 py-4 text-center text-xs">
                <div class="flex items-center justify-center gap-1.5" :class="{
                  'text-muted-foreground': row.officialHanban.status === 'no',
                  'text-amber-700 dark:text-amber-400': row.officialHanban.status === 'partial',
                  'text-foreground font-medium': row.officialHanban.status === 'yes',
                }">
                  <span v-if="row.officialHanban.status === 'no'" class="text-rose-700 dark:text-rose-400 font-bold">✕</span>
                  <span v-else-if="row.officialHanban.status === 'partial'" class="text-amber-700 dark:text-amber-400 font-bold">⚠️</span>
                  <span v-else class="text-emerald-700 dark:text-emerald-400 font-bold">✓</span>
                  <span>{{ row.officialHanban.text }}</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Bottom Card Legend & CTA -->
      <div class="flex flex-wrap items-center justify-between gap-4 border-t border-border bg-surface-raised/50 p-6">
        <div class="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
          <div class="flex items-center gap-1.5">
            <span class="text-primary font-bold">✓</span> Fully included & free
          </div>
          <div class="flex items-center gap-1.5">
            <span class="text-amber-700 dark:text-amber-400 font-bold">⚠️</span> Partial or behind paywall
          </div>
          <div class="flex items-center gap-1.5">
            <span class="text-rose-700 dark:text-rose-400 font-bold">✕</span> Not offered / Absent
          </div>
        </div>

        <div class="flex items-center gap-3">
          <RouterLink to="/hsk1">
            <UiButton size="sm" variant="primary">
              Start HSK 1 Free →
            </UiButton>
          </RouterLink>
          <RouterLink to="/mock-tests">
            <UiButton size="sm" variant="outline">
              Take a Practice Test
            </UiButton>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>
