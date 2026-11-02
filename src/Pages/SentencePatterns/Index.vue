<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter, RouterLink } from 'vue-router'
import { getPatternsByLevel, getPatternByIndex } from '../../Data/sentencePatternsData'
import { UiButton, UiBadge } from '../../Ui'
import { speakChinese } from '../../Utils/speech'
import CompAdSense from '../../Components/CompAdSense.vue'

const route = useRoute()
const router = useRouter()

const level = computed<1 | 2 | 3>(() => {
  const p = route.params.level
  if (p === '3') return 3
  if (p === '2') return 2
  return 1
})

const patterns = computed(() => getPatternsByLevel(level.value))

const selectedIndex = computed(() => {
  const q = route.query.index
  if (typeof q === 'string') {
    const idx = parseInt(q, 10)
    if (!isNaN(idx) && idx >= 1 && idx <= patterns.value.length) {
      return idx
    }
  }
  return null
})

const activePattern = computed(() => {
  if (selectedIndex.value !== null) {
    return getPatternByIndex(level.value, selectedIndex.value)
  }
  return null
})

function selectPattern(index: number) {
  router.push({
    path: `/hsk${level.value}/sentences`,
    query: { index: index.toString() }
  })
}

function backToList() {
  router.push({
    path: `/hsk${level.value}/sentences`
  })
}

function playAudio(text: string) {
  speakChinese(text)
}
</script>

<template>
  <div class="min-h-screen bg-background text-foreground">
    <!-- Header -->
    <header class="border-b border-border bg-surface py-8 px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-6xl">
        <div class="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div class="flex items-center gap-2">
              <RouterLink to="/" class="text-sm font-medium text-primary hover:underline">Home</RouterLink>
              <span class="text-muted-foreground">/</span>
              <RouterLink :to="`/hsk${level}`" class="text-sm font-medium text-primary hover:underline">HSK {{ level }} Hub</RouterLink>
              <span class="text-muted-foreground">/</span>
              <span class="text-sm font-semibold text-muted-foreground">Sentence Patterns</span>
            </div>
            <h1 class="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
              HSK {{ level }} Core Sentence Patterns ({{ patterns.length }} Patterns)
            </h1>
            <p class="mt-1 text-sm text-muted-foreground">
              Master the architectural blueprints of Chinese grammar: formulas, rules, and example sentences.
            </p>
          </div>

          <div class="flex items-center gap-2">
            <RouterLink to="/hsk1/sentences">
              <UiButton :variant="level === 1 ? 'primary' : 'outline'" size="sm">HSK 1 (15)</UiButton>
            </RouterLink>
            <RouterLink to="/hsk2/sentences">
              <UiButton :variant="level === 2 ? 'primary' : 'outline'" size="sm">HSK 2 (15)</UiButton>
            </RouterLink>
            <RouterLink to="/hsk3/sentences">
              <UiButton :variant="level === 3 ? 'primary' : 'outline'" size="sm">HSK 3 (20)</UiButton>
            </RouterLink>
          </div>
        </div>
      </div>
    </header>

    <!-- Top Leaderboard Ad -->
    <div class="mx-auto max-w-6xl px-4 pt-4">
      <CompAdSense format="banner" slot-id="patterns-top" />
    </div>

    <main class="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <!-- VIEW 1: SINGLE PATTERN DETAIL -->
      <div v-if="activePattern">
        <div class="mb-6 flex items-center justify-between">
          <UiButton variant="ghost" size="sm" @click="backToList">
            ← All {{ patterns.length }} Sentence Patterns
          </UiButton>
          <div class="flex gap-2">
            <UiButton
              size="sm"
              variant="outline"
              :disabled="activePattern.patternNumber <= 1"
              @click="selectPattern(activePattern.patternNumber - 1)"
            >
              ◀ Prev
            </UiButton>
            <UiButton
              size="sm"
              variant="outline"
              :disabled="activePattern.patternNumber >= patterns.length"
              @click="selectPattern(activePattern.patternNumber + 1)"
            >
              Next ▶
            </UiButton>
          </div>
        </div>

        <article class="rounded-2xl border border-border bg-surface p-6 shadow-sm sm:p-8">
          <div class="flex items-center gap-2">
            <UiBadge variant="secondary">Pattern {{ activePattern.patternNumber }} of {{ patterns.length }}</UiBadge>
            <UiBadge variant="outline">HSK {{ level }} Grammar</UiBadge>
          </div>

          <h2 class="mt-4 text-3xl font-bold text-foreground">
            {{ activePattern.title }}
          </h2>

          <!-- Formula Box -->
          <div class="mt-4 rounded-xl border border-primary/30 bg-primary/5 p-4">
            <p class="text-xs font-semibold uppercase tracking-wider text-primary">Sentence Formula</p>
            <p class="mt-1 font-mono text-xl font-bold text-foreground">
              {{ activePattern.formula }}
            </p>
          </div>

          <!-- Explanation -->
          <div class="mt-6">
            <h3 class="text-base font-semibold text-foreground">Grammar Explanation & Usage</h3>
            <p class="mt-2 text-sm leading-relaxed text-muted-foreground">
              {{ activePattern.explanation }}
            </p>
          </div>

          <!-- Mid-Article Ad -->
          <CompAdSense format="in-article" slot-id="pattern-mid" />

          <!-- Examples -->
          <div class="mt-8">
            <div class="flex items-center justify-between">
              <h3 class="text-base font-semibold text-foreground">Sentence Examples in Action</h3>
              <span class="text-xs text-muted-foreground">{{ activePattern.examples.length }} Examples</span>
            </div>

            <div class="mt-4 space-y-3">
              <div
                v-for="ex in activePattern.examples"
                :key="ex.chinese"
                class="flex items-start justify-between rounded-xl border border-border bg-surface-raised p-4 transition-colors hover:border-primary/40"
              >
                <div>
                  <p class="text-xl font-medium text-foreground" lang="zh">{{ ex.chinese }}</p>
                  <p class="mt-1 text-sm font-semibold text-primary">{{ ex.pinyin }}</p>
                  <p class="mt-0.5 text-sm text-muted-foreground">{{ ex.english }}</p>
                </div>
                <button
                  type="button"
                  class="rounded-full bg-secondary p-2 text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  title="Play Chinese Audio"
                  @click="playAudio(ex.chinese)"
                >
                  🔊
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>

      <!-- VIEW 2: ALL PATTERNS GRID -->
      <div v-else>
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="p in patterns"
            :key="p.id"
            class="group cursor-pointer rounded-2xl border border-border bg-surface p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
            @click="selectPattern(p.patternNumber)"
          >
            <div class="flex items-center justify-between">
              <UiBadge variant="secondary">Pattern #{{ p.patternNumber }}</UiBadge>
              <span class="text-xs text-muted-foreground">{{ p.examples.length }} examples</span>
            </div>
            <h3 class="mt-3 text-lg font-bold text-foreground group-hover:text-primary transition-colors">
              {{ p.title }}
            </h3>
            <div class="mt-2 rounded-lg bg-surface-raised p-2.5 font-mono text-xs font-semibold text-primary border border-border">
              {{ p.formula }}
            </div>
            <p class="mt-3 text-xs leading-relaxed text-muted-foreground line-clamp-2">
              {{ p.explanation }}
            </p>
            <div class="mt-4 pt-3 border-t border-border flex items-center justify-between">
              <span class="text-xs font-semibold text-primary">Explore Pattern →</span>
              <span class="text-xs text-muted-foreground">Audio Available</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
