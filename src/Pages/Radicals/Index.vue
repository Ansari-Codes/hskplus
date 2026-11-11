<script setup lang="ts">
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { RADICALS_DATA, type ChineseRadical } from '../../Data/radicalsData'
import { UiButton, UiIcon } from '../../Ui'
import { speakChinese } from '../../Utils/speech'
import CompAdSense from '../../Components/CompAdSense.vue'

const searchQuery = ref('')
const selectedStrokes = ref<'all' | number>('all')
const selectedLevel = ref<'all' | 1 | 2 | 3>('all')
const activeRadical = ref<ChineseRadical | null>(RADICALS_DATA[0])

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
              Essential Chinese Radicals Directory (部首)
            </h1>
            <p class="mt-2 text-muted-foreground max-w-3xl">
              Radicals are the semantic building blocks of Chinese characters. Master these 25+ essential radicals to decode over 85% of HSK 1–3 vocabulary without rote memorization.
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

      <!-- Search & Filters -->
      <section class="rounded-2xl border border-border bg-surface p-5 shadow-xs space-y-4">
        <div class="flex flex-wrap gap-4">
          <div class="relative flex-1 min-w-[240px]">
            <input
              v-model="searchQuery"
              type="search"
              placeholder="Search by radical (e.g. 氵), pinyin, English meaning or word..."
              class="w-full rounded-xl border border-border bg-surface-raised px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-hidden"
            />
          </div>

          <!-- Stroke filter -->
          <div class="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
            <span class="text-muted-foreground font-semibold mr-1">Strokes:</span>
            <button
              v-for="st in ['all', 2, 3, 4, 5, 7] as const"
              :key="st"
              type="button"
              class="rounded-lg px-2.5 py-1.5 font-medium transition-colors"
              :class="selectedStrokes === st ? 'bg-primary text-white font-bold' : 'bg-muted text-muted-foreground hover:text-foreground'"
              @click="selectedStrokes = st"
            >
              {{ st === 'all' ? 'All' : `${st} strokes` }}
            </button>
          </div>

          <!-- Level filter -->
          <div class="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
            <span class="text-muted-foreground font-semibold mr-1">Level:</span>
            <button
              v-for="lvl in ['all', 1, 2, 3] as const"
              :key="lvl"
              type="button"
              class="rounded-lg px-2.5 py-1.5 font-medium transition-colors"
              :class="selectedLevel === lvl ? 'bg-primary text-white font-bold' : 'bg-muted text-muted-foreground hover:text-foreground'"
              @click="selectedLevel = lvl"
            >
              {{ lvl === 'all' ? 'All HSK' : `HSK ${lvl}` }}
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
            <span>Click any radical to inspect origins & HSK words</span>
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

            <!-- Meaning & Variants -->
            <div class="space-y-2">
              <div class="text-xs font-bold uppercase tracking-wider text-muted-foreground">Core Meaning</div>
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
