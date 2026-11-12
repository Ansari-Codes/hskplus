<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useRoute, useRouter, RouterLink } from 'vue-router'
import { useVocabulary } from '../../Composables/useVocabulary'
import { UiButton } from '../../Ui'
import CompAdSense from '../../Components/CompAdSense.vue'
import { HSK3_VOCABULARY_SOURCE_NOTE } from '../../Data/hsk3VocabularyData'
import CompCharacterDetail from './Comps/CompCharacterDetail.vue'
import CompVocabularyList from './Comps/CompVocabularyList.vue'
import type { HskLevel } from './types'

const route = useRoute()
const router = useRouter()
const { getByCharacter, getByLevel } = useVocabulary()

const level = computed<HskLevel>(() => {
  if (route.params.level === '3') return 3
  if (route.params.level === '2') return 2
  if (route.params.level === '1') return 1
  const raw = route.params.char || route.query.char
  if (typeof raw === 'string' && raw) {
    try {
      const char = decodeURIComponent(raw).trim()
      const found = getByCharacter(char)
      if (found) return found.level
    } catch {
      // ignore
    }
  }
  return 1
})

const entries = computed(() => getByLevel(level.value))

// Mobile View Mode: 'detail' | 'list'
const mobileTab = ref<'detail' | 'list'>('detail')

const selectedCharacter = computed(() => {
  const paramChar = route.params.char
  if (typeof paramChar === 'string' && paramChar !== '') {
    try {
      return decodeURIComponent(paramChar).trim()
    } catch {
      return paramChar.trim()
    }
  }
  const queryCharacter = route.query.char
  if (typeof queryCharacter === 'string' && queryCharacter !== 'none' && queryCharacter !== '') {
    try {
      return decodeURIComponent(queryCharacter).trim()
    } catch {
      return queryCharacter.trim()
    }
  }
  return entries.value[0]?.character || ''
})

const selectedEntry = computed(() => {
  const q = selectedCharacter.value
  if (!q) return entries.value[0]
  // 1. Exact match in current level
  const exact = getByCharacter(q, level.value)
  if (exact) return exact
  // 2. Exact match across any level
  const exactAny = getByCharacter(q)
  if (exactAny) return exactAny
  // 3. Substring match in current level (e.g. '学' matches '学校')
  const partial = entries.value.find(e => e.character.includes(q))
  if (partial) return partial
  // 4. Fallback to first entry
  return entries.value[0]
})

const currentWordIndex = computed(() => {
  return entries.value.findIndex(e => e.character === selectedEntry.value?.character)
})

function selectCharacter(character: string) {
  mobileTab.value = 'detail'
  router.push({
    name: 'vocabulary-word',
    params: { level: String(level.value), char: character }
  })
}

function prevWord() {
  if (currentWordIndex.value > 0) {
    const prev = entries.value[currentWordIndex.value - 1]
    selectCharacter(prev.character)
  }
}

function nextWord() {
  if (currentWordIndex.value < entries.value.length - 1) {
    const next = entries.value[currentWordIndex.value + 1]
    selectCharacter(next.character)
  }
}

function openPractice(character: string) {
  return router.push({
    name: 'vocabulary-practice-word',
    params: { level: String(level.value), char: character }
  })
}

// Update page title, meta description & canonical URL dynamically for each word
watch(
  [selectedEntry, level],
  ([entry, lvl]) => {
    if (!entry) return
    document.title = `${entry.character} (${entry.pinyin}) - HSK ${lvl} Vocabulary | Meaning, Origin & Stroke Practice - HSK Plus`

    const desc = `Master the HSK ${lvl} word "${entry.character}" (${entry.pinyin}): "${entry.meaning}". Includes native speech audio, character origin & radicals, stroke order animations, and example sentences.`
    let metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) {
      metaDesc.setAttribute('content', desc)
    }

    let canonical = document.querySelector('link[rel="canonical"]')
    if (canonical) {
      canonical.setAttribute('href', `https://desihop.net/hsk${lvl}/vocabulary/${encodeURIComponent(entry.character)}`)
    }
  },
  { immediate: true }
)
</script>

<template>
  <main class="min-h-screen bg-background px-3 py-6 text-foreground sm:px-6 lg:px-8">
    <div class="mx-auto max-w-6xl space-y-6">
      
      <!-- Breadcrumb & Header -->
      <header class="flex flex-col gap-4">
        <div class="flex flex-wrap items-center justify-between gap-2">
          <div class="flex items-center gap-2 text-xs sm:text-sm">
            <RouterLink to="/" class="font-medium text-primary hover:underline">← Home</RouterLink>
            <span class="text-muted-foreground">/</span>
            <RouterLink :to="`/hsk${level}`" class="font-medium text-primary hover:underline">HSK {{ level }} Portal</RouterLink>
            <span class="text-muted-foreground">/</span>
            <span class="font-semibold text-foreground">Vocabulary</span>
          </div>

          <!-- Quick Navigation between levels -->
          <div class="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
            <RouterLink :to="{ name: 'vocabulary', params: { level: 1 } }">
              <UiButton :variant="level === 1 ? 'primary' : 'outline'" size="sm" class="px-2.5 py-1 text-xs">HSK 1 (150)</UiButton>
            </RouterLink>
            <RouterLink :to="{ name: 'vocabulary', params: { level: 2 } }">
              <UiButton :variant="level === 2 ? 'primary' : 'outline'" size="sm" class="px-2.5 py-1 text-xs">HSK 2 (150)</UiButton>
            </RouterLink>
            <RouterLink :to="{ name: 'vocabulary', params: { level: 3 } }">
              <UiButton :variant="level === 3 ? 'primary' : 'outline'" size="sm" class="px-2.5 py-1 text-xs">HSK 3 (300)</UiButton>
            </RouterLink>
            <RouterLink :to="{ name: 'vocabulary-practice', params: { level: level }, query: { char: selectedCharacter } }">
              <UiButton variant="secondary" size="sm" class="px-2.5 py-1 text-xs">✍️ Practice</UiButton>
            </RouterLink>
          </div>
        </div>

        <div>
          <h1 class="text-2xl sm:text-3xl font-extrabold tracking-tight">
            HSK {{ level }} Official Vocabulary ({{ entries.length }} Words)
          </h1>
          <p class="mt-1 text-xs sm:text-sm text-muted-foreground">
            Complete official lexicon with stroke animations, audio pronunciation, constituent breakdowns, origins, and contextual sentences.
          </p>
          <p v-if="level === 3" class="mt-1 text-[11px] text-muted-foreground">
            {{ HSK3_VOCABULARY_SOURCE_NOTE }}
          </p>
        </div>
      </header>

      <!-- Mobile Tab Bar (Visible on mobile & tablet, hidden on desktop lg:) -->
      <div class="block lg:hidden rounded-2xl border border-border bg-surface p-2 shadow-xs space-y-2">
        <div class="grid grid-cols-2 gap-1.5">
          <button
            type="button"
            class="rounded-xl py-2 text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5"
            :class="mobileTab === 'detail' ? 'bg-primary text-white shadow-xs' : 'bg-muted/60 text-muted-foreground hover:text-foreground'"
            @click="mobileTab = 'detail'"
          >
            <span>📖 Word Detail</span>
            <span v-if="selectedEntry" class="opacity-90 font-serif">({{ selectedEntry.character }})</span>
          </button>

          <button
            type="button"
            class="rounded-xl py-2 text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5"
            :class="mobileTab === 'list' ? 'bg-primary text-white shadow-xs' : 'bg-muted/60 text-muted-foreground hover:text-foreground'"
            @click="mobileTab = 'list'"
          >
            <span>📋 Word List</span>
            <span class="opacity-90">({{ entries.length }})</span>
          </button>
        </div>

        <!-- Mobile Word Quick Flipper Strip -->
        <div class="flex items-center justify-between border-t border-border/70 pt-2 px-1 text-xs">
          <button
            type="button"
            :disabled="currentWordIndex <= 0"
            class="rounded-lg px-2 py-1 font-semibold text-muted-foreground hover:text-foreground disabled:opacity-30 cursor-pointer"
            @click="prevWord"
          >
            ◀ Prev Word
          </button>

          <span class="font-bold text-foreground text-xs">
            #{{ (currentWordIndex >= 0 ? currentWordIndex : 0) + 1 }} / {{ entries.length }}
          </span>

          <button
            type="button"
            :disabled="currentWordIndex >= entries.length - 1"
            class="rounded-lg px-2 py-1 font-semibold text-muted-foreground hover:text-foreground disabled:opacity-30 cursor-pointer"
            @click="nextWord"
          >
            Next Word ▶
          </button>
        </div>
      </div>

      <!-- Main Layout: Adaptive Grid -->
      <div class="grid items-start gap-6 lg:grid-cols-[20rem_minmax(0,1fr)]">
        
        <!-- Left: Word List Column (Always visible on desktop; conditionally on mobile based on tab) -->
        <aside :class="[mobileTab === 'list' ? 'block' : 'hidden lg:block']">
          <div class="mb-3 flex items-center justify-between">
            <h2 class="text-sm font-semibold text-muted-foreground">Word List · {{ entries.length }}</h2>
            <span class="text-xs text-primary font-medium">HSK {{ level }}</span>
          </div>
          <CompVocabularyList :entries="entries" :selected-character="selectedCharacter" @select="selectCharacter" />
        </aside>

        <!-- Right: Character Detail Column (Always visible on desktop; conditionally on mobile based on tab) -->
        <section :class="[mobileTab === 'detail' ? 'block' : 'hidden lg:block']" class="min-w-0">
          <CompCharacterDetail
            v-if="selectedEntry"
            :entry="selectedEntry"
            :level="level"
            @practice="openPractice"
          />
          <div v-else class="rounded-2xl border border-border bg-surface p-8 text-center">
            <p class="text-lg font-semibold">Character not found</p>
            <p class="mt-2 text-sm text-muted-foreground">
              Please choose a character from the list.
            </p>
          </div>
        </section>

      </div>

      <CompAdSense format="banner" slot-id="hsk-vocabulary-top" />
    </div>
  </main>
</template>
