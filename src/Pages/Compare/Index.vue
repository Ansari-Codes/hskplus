<script setup lang="ts">
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { comparisonsData, type ComparisonItem } from '../../Data/comparisonsData'
import { UiInput } from '../../Ui'
import CompAdSense from '../../Components/CompAdSense.vue'

const searchQuery = ref('')
const selectedLevel = ref<'all' | 'HSK 1' | 'HSK 2' | 'HSK 3'>('all')

const filteredComparisons = computed<ComparisonItem[]>(() => {
  return comparisonsData.filter(item => {
    const matchesLevel = selectedLevel.value === 'all' || item.level === selectedLevel.value
    const matchesSearch =
      searchQuery.value.trim() === '' ||
      item.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      item.shortTitle.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      item.words.some(w => w.hanzi.includes(searchQuery.value) || w.pinyin.toLowerCase().includes(searchQuery.value.toLowerCase()))

    return matchesLevel && matchesSearch
  })
})
</script>

<template>
  <div class="min-h-screen bg-background text-foreground pb-20">
    <!-- Header -->
    <header class="border-b border-border bg-surface py-12 px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-6xl">
        <div class="flex items-center gap-2 text-xs font-semibold text-muted-foreground mb-3">
          <RouterLink to="/" class="hover:text-primary transition-colors">Home</RouterLink>
          <span>/</span>
          <span class="text-foreground">Confusing Words & Minimal Pairs</span>
        </div>

        <div class="max-w-3xl">
          <div class="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary mb-3">
            <span>⚖️</span>
            <span>Side-by-Side Diagnostic Guides</span>
          </div>
          <h1 class="text-3xl sm:text-5xl font-black tracking-tight text-foreground">
            Confusing Chinese Words Explained
          </h1>
          <p class="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
            Stop hesitating between similar Mandarin terms. 15 comprehensive guides with side-by-side distinction tables, grammatical formulas, common pitfall analysis (❌ vs ✅), and interactive quiz drills.
          </p>
        </div>

        <!-- Filter and Search Bar -->
        <div class="mt-8 flex flex-col sm:flex-row sm:items-center gap-3">
          <div class="relative flex-1">
            <UiInput
              v-model="searchQuery"
              placeholder="Search confusing pairs (e.g. bu vs mei, er vs liang, 想, 知道)..."
              class="w-full pl-9 pr-4 py-2.5 rounded-xl text-sm"
            />
            <span class="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">
              🔍
            </span>
          </div>

          <div class="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
            <button
              v-for="lvl in ['all', 'HSK 1', 'HSK 2', 'HSK 3'] as const"
              :key="lvl"
              type="button"
              class="rounded-xl px-3.5 py-2 text-xs font-bold transition-colors cursor-pointer whitespace-nowrap"
              :class="
                selectedLevel === lvl
                  ? 'bg-primary text-white shadow-xs'
                  : 'bg-surface border border-border text-muted-foreground hover:bg-muted hover:text-foreground'
              "
              @click="selectedLevel = lvl"
            >
              {{ lvl === 'all' ? 'All Levels' : lvl }}
            </button>
          </div>
        </div>
      </div>
    </header>

    <!-- AdSense Top Banner -->
    <div class="mx-auto max-w-6xl px-4 pt-6">
      <CompAdSense format="banner" slot-id="compare-list-top" />
    </div>

    <!-- Main Grid -->
    <main class="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <div v-if="filteredComparisons.length === 0" class="text-center py-16">
        <p class="text-lg font-bold text-foreground">No matching word pairs found.</p>
        <p class="text-sm text-muted-foreground mt-1">Try another search keyword or clear the level filter.</p>
      </div>

      <div v-else class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <RouterLink
          v-for="item in filteredComparisons"
          :key="item.slug"
          :to="`/compare/${item.slug}`"
          class="group flex flex-col justify-between rounded-3xl border border-border bg-surface p-6 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-primary/50"
        >
          <div>
            <!-- Header Badges -->
            <div class="flex items-center justify-between gap-2 mb-3">
              <span class="rounded-lg bg-primary/10 px-2 py-0.5 text-xs font-black text-primary">
                {{ item.level }}
              </span>
              <span class="text-[11px] font-semibold text-muted-foreground">
                CEFR {{ item.cefr }}
              </span>
            </div>

            <!-- Big Hanzi Pair Header -->
            <div class="flex items-center gap-3 my-2">
              <div
                v-for="(w, idx) in item.words"
                :key="idx"
                class="flex items-baseline gap-1"
              >
                <span class="text-2xl font-black text-foreground group-hover:text-primary transition-colors">
                  {{ w.hanzi }}
                </span>
                <span class="text-xs text-muted-foreground">({{ w.pinyin }})</span>
                <span v-if="idx < item.words.length - 1" class="text-muted-foreground/60 font-bold ml-1">vs</span>
              </div>
            </div>

            <!-- Title -->
            <h2 class="text-sm sm:text-base font-bold text-foreground mt-1 line-clamp-2">
              {{ item.title }}
            </h2>

            <!-- Summary -->
            <p class="mt-2 text-xs text-muted-foreground line-clamp-3 leading-relaxed">
              {{ item.summary }}
            </p>
          </div>

          <!-- Bottom Action -->
          <div class="mt-5 pt-4 border-t border-border flex items-center justify-between text-xs font-bold text-primary">
            <span>Read Complete Breakdown</span>
            <span class="group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </RouterLink>
      </div>

      <!-- In-Page Ad -->
      <div class="my-10">
        <CompAdSense format="in-article" slot-id="compare-list-mid" />
      </div>
    </main>
  </div>
</template>
