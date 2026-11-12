<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { RADICALS_DATA, type ChineseRadical, type RadicalCategory } from '../../Data/radicalsData'
import { UiButton, UiIcon } from '../../Ui'
import { speakChinese } from '../../Utils/speech'
import CompAdSense from '../../Components/CompAdSense.vue'

const route = useRoute()

const categoriesList: { label: string; value: 'all' | RadicalCategory; icon: string }[] = [
  { label: 'All Categories', value: 'all', icon: '🌟' },
  { label: 'Nature & Elements', value: 'Nature & Elements', icon: '🌊' },
  { label: 'People & Body', value: 'People & Body', icon: '👤' },
  { label: 'Actions & Movement', value: 'Actions & Movement', icon: '🏃' },
  { label: 'Structures & Space', value: 'Structures & Space', icon: '🏠' },
  { label: 'Food, Plants & Clothing', value: 'Food, Plants & Clothing', icon: '🌾' },
  { label: 'Mind, Speech & Culture', value: 'Mind, Speech & Culture', icon: '💬' },
]

const searchQuery = ref('')
const selectedCategory = ref<'all' | RadicalCategory>('all')
const selectedStrokes = ref<'all' | number>('all')
const selectedLevel = ref<'all' | 1 | 2 | 3>('all')
const activeRadical = ref<ChineseRadical | null>(RADICALS_DATA[0])

// Sync with route query ?level=1|2|3
watch(
  () => route.query.level,
  (lvl) => {
    if (lvl === '1' || lvl === '2' || lvl === '3') {
      selectedLevel.value = parseInt(lvl, 10) as 1 | 2 | 3
    }
  },
  { immediate: true }
)

const filteredRadicals = computed(() => {
  return RADICALS_DATA.filter((item) => {
    // Search match
    const q = searchQuery.value.trim().toLowerCase()
    if (q) {
      const matchRadical = item.radical.includes(q)
      const matchPinyin = item.pinyin.toLowerCase().includes(q)
      const matchNameZh = item.nameZh.toLowerCase().includes(q)
      const matchNameEn = item.nameEn.toLowerCase().includes(q)
      const matchMeaning = item.meaning.toLowerCase().includes(q)
      const matchExamples = item.examples.some(
        (ex) => ex.hanzi.includes(q) || ex.pinyin.toLowerCase().includes(q) || ex.meaning.toLowerCase().includes(q)
      )
      if (!matchRadical && !matchPinyin && !matchNameZh && !matchNameEn && !matchMeaning && !matchExamples) {
        return false
      }
    }

    // Category filter
    if (selectedCategory.value !== 'all' && item.category !== selectedCategory.value) {
      return false
    }

    // Stroke filter
    if (selectedStrokes.value !== 'all' && item.strokes !== selectedStrokes.value) {
      return false
    }

    // Level filter
    if (selectedLevel.value !== 'all' && item.hskLevel !== selectedLevel.value) {
      return false
    }

    return true
  })
})

function selectRadical(r: ChineseRadical) {
  activeRadical.value = r
  speakChinese(r.radical)
}

function playAudio(text: string) {
  speakChinese(text)
}
</script>

<template>
  <main class="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8">
    <div class="mx-auto max-w-6xl space-y-8">
      
      <!-- Breadcrumb & Header -->
      <header class="space-y-3">
        <div class="flex items-center gap-2 text-sm text-muted-foreground">
          <RouterLink to="/" class="text-primary hover:underline">← Home</RouterLink>
          <span>/</span>
          <span class="text-foreground font-semibold">Chinese Radicals (部首)</span>
        </div>
        <div class="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 class="text-3xl font-extrabold tracking-tight sm:text-4xl">
              HSK 1–3 Chinese Radicals Directory (部首)
            </h1>
            <p class="mt-2 text-muted-foreground max-w-3xl">
              Radicals are the semantic building blocks of Chinese characters. Filter by category, HSK level, or stroke count to decode over 85% of HSK 1–3 vocabulary without rote memorization.
            </p>
          </div>
          <RouterLink to="/blogs/rules-of-chinese-stroke-order">
            <UiButton variant="outline" size="sm">
              <UiIcon name="sparkles" :size="16" />
              Stroke Order Rules Guide →
            </UiButton>
          </RouterLink>
        </div>
      </header>

      <!-- Search & Filters Container -->
      <section class="rounded-3xl border border-border bg-surface p-5 sm:p-6 shadow-xs space-y-4">
        
        <!-- Search Bar + Level + Strokes -->
        <div class="flex flex-wrap items-center gap-4">
          <div class="relative flex-1 min-w-[240px]">
            <input
              v-model="searchQuery"
              type="search"
              placeholder="Search by radical (e.g. 氵), pinyin, English meaning or word..."
              class="w-full rounded-xl border border-border bg-surface-raised px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-hidden"
            />
          </div>

          <!-- Level filter -->
          <div class="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
            <span class="text-muted-foreground font-semibold mr-1">Level:</span>
            <button
              v-for="lvl in ['all', 1, 2, 3] as const"
              :key="lvl"
              type="button"
              class="rounded-lg px-3 py-1.5 font-medium transition-colors cursor-pointer"
              :class="selectedLevel === lvl ? 'bg-primary text-white font-bold' : 'bg-muted text-muted-foreground hover:text-foreground'"
              @click="selectedLevel = lvl"
            >
              {{ lvl === 'all' ? 'All HSK' : `HSK ${lvl}` }}
            </button>
          </div>

          <!-- Stroke filter -->
          <div class="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
            <span class="text-muted-foreground font-semibold mr-1">Strokes:</span>
            <button
              v-for="st in ['all', 2, 3, 4, 5, 7, 8] as const"
              :key="st"
              type="button"
              class="rounded-lg px-2.5 py-1.5 font-medium transition-colors cursor-pointer"
              :class="selectedStrokes === st ? 'bg-primary text-white font-bold' : 'bg-muted text-muted-foreground hover:text-foreground'"
              @click="selectedStrokes = st"
            >
              {{ st === 'all' ? 'All' : `${st}` }}
            </button>
          </div>
        </div>

        <!-- Category Filter Pills (Requested by user) -->
        <div class="border-t border-border/70 pt-3">
          <div class="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-2">
            Filter by Semantic Category
          </div>
          <div class="flex flex-wrap gap-2 text-xs">
            <button
              v-for="cat in categoriesList"
              :key="cat.value"
              type="button"
              class="rounded-xl px-3 py-1.5 font-semibold transition-all cursor-pointer flex items-center gap-1.5 border"
              :class="selectedCategory === cat.value ? 'border-primary bg-primary/10 text-primary font-bold shadow-xs' : 'border-border bg-surface text-muted-foreground hover:text-foreground hover:border-primary/40'"
              @click="selectedCategory = cat.value"
            >
              <span>{{ cat.icon }}</span>
              <span>{{ cat.label }}</span>
            </button>
          </div>
        </div>
      </section>

      <!-- Main Layout: Grid of Radicals + Active Radical Inspection Panel -->
      <div class="grid gap-8 lg:grid-cols-12 items-start">
        
        <!-- Left: Radicals Grid (7 cols) -->
        <div class="lg:col-span-7 space-y-4">
          <div class="flex items-center justify-between text-xs text-muted-foreground px-1">
            <span>Showing {{ filteredRadicals.length }} radicals</span>
            <span>Click any radical to inspect origins & vocabulary</span>
          </div>

          <div v-if="filteredRadicals.length === 0" class="rounded-2xl border border-border bg-surface p-8 text-center text-sm text-muted-foreground">
            No radicals matching your filters. Try selecting "All Categories" or clearing the search.
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <button
              v-for="rad in filteredRadicals"
              :key="rad.id"
              type="button"
              class="group relative flex flex-col items-center justify-between rounded-2xl border p-4 text-center transition-all cursor-pointer text-left hover:scale-[1.02]"
              :class="activeRadical?.id === rad.id ? 'border-primary bg-primary/5 shadow-md ring-2 ring-primary/20' : 'border-border bg-surface hover:border-primary/40'"
              @click="selectRadical(rad)"
            >
              <div class="w-full flex items-center justify-between text-[11px] text-muted-foreground">
                <span class="font-bold text-primary">HSK {{ rad.hskLevel }}</span>
                <span>{{ rad.strokes }} strokes</span>
              </div>

              <div class="my-3 flex items-baseline justify-center gap-2">
                <span class="text-4xl font-black font-serif text-foreground group-hover:text-primary transition-colors">
                  {{ rad.radical }}
                </span>
                <span v-if="rad.variants?.length" class="text-xs text-muted-foreground">
                  ({{ rad.variants.join(', ') }})
                </span>
              </div>

              <div class="w-full text-center">
                <div class="text-xs font-semibold text-foreground truncate">{{ rad.pinyin }} · {{ rad.nameEn.split(' ')[0] }}</div>
                <div class="text-[11px] text-muted-foreground truncate">{{ rad.meaning }}</div>
              </div>
            </button>
          </div>
        </div>

        <!-- Right: Active Radical Anatomy Card (5 cols) -->
        <div class="lg:col-span-5 sticky top-20">
          <div v-if="activeRadical" class="rounded-3xl border border-border bg-surface p-6 shadow-md space-y-6">
            
            <!-- Radical Header -->
            <div class="flex items-start justify-between border-b border-border/80 pb-5">
              <div class="flex items-center gap-4">
                <div class="flex size-16 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20 text-4xl font-serif font-black text-primary">
                  {{ activeRadical.radical }}
                </div>
                <div>
                  <div class="flex items-center gap-2">
                    <span class="text-xl font-bold text-foreground">{{ activeRadical.pinyin }}</span>
                    <button
                      type="button"
                      class="text-muted-foreground hover:text-primary transition-colors text-base"
                      title="Play pronunciation"
                      @click="playAudio(activeRadical.radical)"
                    >
                      🔊
                    </button>
                  </div>
                  <div class="text-xs font-semibold text-muted-foreground">{{ activeRadical.nameZh }}</div>
                  <div class="text-xs text-primary font-medium">{{ activeRadical.nameEn }}</div>
                </div>
              </div>

              <span class="rounded-full bg-surface-raised px-3 py-1 text-xs font-bold border border-border text-foreground">
                {{ activeRadical.strokes }} Strokes
              </span>
            </div>

            <!-- Meaning & Category -->
            <div class="space-y-2">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold uppercase tracking-wider text-muted-foreground">Core Meaning</span>
                <span class="rounded-md bg-muted px-2 py-0.5 text-[11px] font-semibold text-muted-foreground">{{ activeRadical.category }}</span>
              </div>
              <p class="text-sm font-semibold text-foreground leading-relaxed">
                {{ activeRadical.meaning }}
              </p>
              <div v-if="activeRadical.variants?.length" class="text-xs text-muted-foreground">
                <strong>Variants in Characters:</strong> {{ activeRadical.variants.join(', ') }}
              </div>
            </div>

            <!-- Pictographic Origin -->
            <div class="rounded-2xl bg-surface-raised p-4 border border-border space-y-1.5">
              <div class="flex items-center gap-1.5 text-xs font-bold text-amber-700 dark:text-amber-400">
                <UiIcon name="sparkles" :size="14" />
                <span>Historical Origin & Symbolism</span>
              </div>
              <p class="text-xs text-muted-foreground leading-relaxed">
                {{ activeRadical.origin }}
              </p>
            </div>

            <!-- Memory Mnemonic -->
            <div class="rounded-2xl bg-primary/5 p-4 border border-primary/15 space-y-1">
              <div class="text-xs font-bold text-primary flex items-center gap-1.5">
                💡 <span>Memory Accelerator (Mnemonic)</span>
              </div>
              <p class="text-xs text-foreground/90 leading-relaxed">
                {{ activeRadical.mnemonic }}
              </p>
            </div>

            <!-- HSK Words Composed With This Radical -->
            <div class="space-y-3">
              <div class="flex items-center justify-between text-xs">
                <span class="font-bold uppercase tracking-wider text-muted-foreground">HSK Words with {{ activeRadical.radical }}</span>
                <span class="text-muted-foreground">{{ activeRadical.examples.length }} words</span>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div
                  v-for="word in activeRadical.examples"
                  :key="word.hanzi"
                  class="flex items-center justify-between rounded-xl border border-border bg-surface-raised p-2.5 transition-colors hover:border-primary/40"
                >
                  <div class="flex items-center gap-2">
                    <span class="text-lg font-bold font-serif text-foreground">{{ word.hanzi }}</span>
                    <div>
                      <div class="text-xs font-semibold text-primary">{{ word.pinyin }}</div>
                      <div class="text-[10px] text-muted-foreground truncate max-w-[90px]">{{ word.meaning }}</div>
                    </div>
                  </div>
                  <button
                    type="button"
                    class="rounded p-1 text-xs text-muted-foreground hover:text-primary transition-colors"
                    title="Pronounce word"
                    @click="playAudio(word.hanzi)"
                  >
                    🔊
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      <!-- Educational Ad & Footer Note -->
      <CompAdSense class="mt-8" />
    </div>
  </main>
</template>
