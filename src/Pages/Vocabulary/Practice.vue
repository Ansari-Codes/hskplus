<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import { useVocabulary } from '../../Composables/useVocabulary'
import { UiButton, UiIcon } from '../../Ui'
import CompHanziWriter from '../../Components/CompHanziWriter.vue'
import CompAdSense from '../../Components/CompAdSense.vue'
import type { HskLevel } from './types'

const route = useRoute()
const router = useRouter()
const { getByCharacter, getByLevel } = useVocabulary()

const level = computed<HskLevel>(() => route.params.level === '3' ? 3 : route.params.level === '2' ? 2 : 1)
const entries = computed(() => getByLevel(level.value))

const rawCharQuery = computed(() => {
  const q = route.query.char
  if (typeof q !== 'string' || !q) return ''
  try {
    return decodeURIComponent(q).trim()
  } catch {
    return q.trim()
  }
})

const entry = computed(() => {
  const query = rawCharQuery.value
  if (!query) return entries.value[0]

  // 1. Exact match in current level
  const exactInLevel = entries.value.find(e => e.character === query)
  if (exactInLevel) return exactInLevel

  // 2. Exact match in any level
  const exactAny = getByCharacter(query)
  if (exactAny) return exactAny

  // 3. Substring match in current level (e.g. '学' matches '学校', '学习', etc.)
  const partialInLevel = entries.value.find(e => e.character.includes(query))
  if (partialInLevel) return partialInLevel

  // 4. Substring match across any level
  const allEntries = useVocabulary().allEntries
  const partialAny = allEntries.find(e => e.character.includes(query))
  if (partialAny) return partialAny

  // 5. Standalone single Hanzi character fallback
  if (/\p{Script=Han}/u.test(query)) {
    return {
      id: 9999,
      character: query,
      pinyin: '',
      meaning: `Character: ${query}`,
      category: 'Single Character',
      level: level.value,
      strokes: 0,
      examples: []
    }
  }

  return entries.value[0]
})

const characterIndex = ref(0)
const entryCharacters = computed(() => Array.from(entry.value?.character ?? ''))

watch(
  () => [entry.value?.character, rawCharQuery.value],
  () => {
    const q = rawCharQuery.value
    if (q && entry.value?.character) {
      const chars = Array.from(entry.value.character)
      const idx = chars.indexOf(q)
      if (idx !== -1) {
        characterIndex.value = idx
        return
      }
    }
    characterIndex.value = 0
  },
  { immediate: true }
)

const currentCharacter = computed(() => {
  if (entryCharacters.value.length === 0) return rawCharQuery.value || '中'
  return entryCharacters.value[characterIndex.value] ?? entryCharacters.value[0]
})

const currentIndex = computed(() => {
  return entries.value.findIndex(e => e.character === entry.value?.character)
})

function navigateToChar(char: string) {
  router.push({
    name: 'vocabulary-practice',
    params: { level: level.value },
    query: { char }
  })
}

function prevChar() {
  if (currentIndex.value > 0) {
    const prev = entries.value[currentIndex.value - 1]
    navigateToChar(prev.character)
  }
}

function nextChar() {
  if (currentIndex.value < entries.value.length - 1) {
    const next = entries.value[currentIndex.value + 1]
    navigateToChar(next.character)
  }
}
</script>

<template>
  <main class="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8">
    <div class="mx-auto max-w-5xl">
      <!-- Top navigation bar -->
      <div class="flex flex-wrap items-center justify-between gap-4">
        <RouterLink :to="{ name: 'vocabulary', params: { level }, query: entry ? { char: entry.character } : {} }">
          <UiButton variant="ghost" size="sm">
            <UiIcon name="arrow-right" class="rotate-180" :size="16" />
            Back to HSK {{ level }} Vocabulary
          </UiButton>
        </RouterLink>

        <div class="flex items-center gap-2">
          <RouterLink :to="{ name: 'vocabulary-practice', params: { level: 1 } }">
            <UiButton :variant="level === 1 ? 'primary' : 'outline'" size="sm">HSK 1 (150)</UiButton>
          </RouterLink>
          <RouterLink :to="{ name: 'vocabulary-practice', params: { level: 2 } }">
            <UiButton :variant="level === 2 ? 'primary' : 'outline'" size="sm">HSK 2 (150)</UiButton>
          </RouterLink>
          <RouterLink :to="{ name: 'vocabulary-practice', params: { level: 3 } }">
            <UiButton :variant="level === 3 ? 'primary' : 'outline'" size="sm">HSK 3 (300)</UiButton>
          </RouterLink>
        </div>
      </div>

      <header class="mb-6 mt-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p class="text-sm font-semibold uppercase tracking-wider text-primary">HSK {{ level }} Interactive Calligraphy & Stroke Lab</p>
          <h1 class="mt-1 text-3xl font-extrabold tracking-tight">Hanzi Practice: “{{ currentCharacter }}”</h1>
          <p v-if="entryCharacters.length > 1" class="mt-1 text-sm text-muted-foreground">
            Character {{ characterIndex + 1 }} of {{ entryCharacters.length }} in “{{ entry?.character }}”.
          </p>
          <p class="mt-1 text-sm text-muted-foreground">
            Watch animated stroke order, practice each character in a word, or use the canvas for visual shape and centering feedback.
          </p>
        </div>

        <!-- Prev / Next buttons -->
        <div class="flex items-center gap-2">
          <UiButton size="sm" variant="outline" :disabled="currentIndex <= 0" @click="prevChar">
            ◀ Prev
          </UiButton>
          <span class="text-xs text-muted-foreground font-medium">
            {{ currentIndex + 1 }} / {{ entries.length }}
          </span>
          <UiButton size="sm" variant="outline" :disabled="currentIndex >= entries.length - 1" @click="nextChar">
            Next ▶
          </UiButton>
        </div>
      </header>

      <!-- Main Writing & Scoring Studio -->
      <template v-if="entry">
        <CompHanziWriter
          :character="currentCharacter"
          :pinyin="entry.pinyin"
          :meaning="entry.meaning"
          :expected-strokes="entryCharacters.length === 1 ? entry.strokes : undefined"
        />

        <div v-if="entryCharacters.length > 1" class="mt-4 flex items-center justify-center gap-3">
          <UiButton
            size="sm"
            variant="outline"
            :disabled="characterIndex === 0"
            @click="characterIndex--"
          >
            Previous character
          </UiButton>
          <span class="text-sm text-muted-foreground">{{ characterIndex + 1 }} / {{ entryCharacters.length }}</span>
          <UiButton
            size="sm"
            variant="outline"
            :disabled="characterIndex >= entryCharacters.length - 1"
            @click="characterIndex++"
          >
            Next character
          </UiButton>
        </div>

        <!-- Example sentences section -->
        <section class="mt-8 rounded-2xl border border-border bg-surface p-6 shadow-sm">
          <h3 class="text-base font-semibold text-foreground">Example Sentences with “{{ entry.character }}”</h3>
          <div v-if="entry.examples.length" class="mt-4 grid gap-4 sm:grid-cols-2">
            <div
              v-for="ex in entry.examples"
              :key="ex.chinese"
              class="rounded-xl border border-border bg-surface-raised p-4"
            >
              <p class="text-lg font-medium text-foreground" lang="zh">{{ ex.chinese }}</p>
              <p class="mt-1 text-sm font-semibold text-primary">{{ ex.pinyin }}</p>
              <p class="mt-1 text-xs text-muted-foreground">{{ ex.translation }}</p>
            </div>
            <p v-if="!entry.examples.length" class="mt-3 text-sm text-muted-foreground">
              No example sentences are included with this entry.
            </p>
          </div>
        </section>

        <!-- Quick character selector strip -->
        <section class="mt-8 rounded-2xl border border-border bg-surface p-6 shadow-sm">
          <div class="flex items-center justify-between mb-3">
            <h3 class="text-sm font-semibold text-foreground">Quick Character Jump · HSK {{ level }}</h3>
            <span class="text-xs text-muted-foreground">Click any character to switch</span>
          </div>
          <div class="flex flex-wrap gap-2 max-h-48 overflow-y-auto p-1">
            <button
              v-for="w in entries"
              :key="w.character"
              type="button"
              :class="[
                'flex size-10 items-center justify-center rounded-lg border text-base font-medium transition-colors',
                w.character === entry.character
                  ? 'border-primary bg-primary text-primary-foreground font-bold'
                  : 'border-border bg-surface hover:bg-muted text-foreground'
              ]"
              @click="navigateToChar(w.character)"
            >
              {{ w.character }}
            </button>
          </div>
        </section>

        <!-- Bottom AdSense Banner -->
        <CompAdSense format="in-article" slot-id="vocab-practice-bottom" class="mt-8" />
      </template>
    </div>
  </main>
</template>
