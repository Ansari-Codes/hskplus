<script setup lang="ts">
import { ref, computed } from 'vue'
import type { VocabularyEntry } from '../types'

const props = defineProps<{
  entries: VocabularyEntry[]
  selectedCharacter?: string
}>()

const emit = defineEmits<{
  select: [character: string]
}>()

const searchQuery = ref('')
const selectedCategory = ref('All')

const categories = computed(() => {
  const cats = new Set<string>()
  for (const e of props.entries) {
    if (e.category) cats.add(e.category)
  }
  return ['All', ...Array.from(cats)]
})

const filteredEntries = computed(() => {
  let list = props.entries
  if (selectedCategory.value !== 'All') {
    list = list.filter(e => e.category === selectedCategory.value)
  }
  const q = searchQuery.value.trim().toLowerCase()
  if (!q) return list

  return list.filter(e =>
    e.character.includes(q) ||
    e.pinyin.toLowerCase().includes(q) ||
    e.meaning.toLowerCase().includes(q)
  )
})
</script>

<template>
  <div class="space-y-3">
    <!-- Search Box -->
    <div class="relative">
      <input
        v-model="searchQuery"
        type="search"
        placeholder="Search character, pinyin, meaning..."
        class="w-full rounded-xl border border-border bg-surface px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </div>

    <!-- Category Pills -->
    <div class="flex gap-1.5 overflow-x-auto pb-1 text-xs">
      <button
        v-for="cat in categories"
        :key="cat"
        type="button"
        :class="[
          'whitespace-nowrap rounded-lg px-2.5 py-1 font-medium transition-colors',
          selectedCategory === cat
            ? 'bg-primary text-primary-foreground'
            : 'bg-muted text-muted-foreground hover:text-foreground'
        ]"
        @click="selectedCategory = cat"
      >
        {{ cat }}
      </button>
    </div>

    <!-- Scrollable Character List -->
    <nav aria-label="Vocabulary characters" class="max-h-[620px] space-y-2 overflow-y-auto pr-1">
      <div v-if="filteredEntries.length === 0" class="py-8 text-center text-xs text-muted-foreground">
        No vocabulary matching "{{ searchQuery }}".
      </div>

      <button
        v-for="entry in filteredEntries"
        :key="entry.character"
        type="button"
        :aria-current="selectedCharacter === entry.character ? 'true' : undefined"
        :class="[
          'flex w-full items-center gap-3 rounded-xl border p-3 text-left transition-colors',
          selectedCharacter === entry.character
            ? 'border-primary/40 bg-secondary'
            : 'border-border bg-surface hover:bg-accent',
        ]"
        @click="emit('select', entry.character)"
      >
        <span class="flex size-11 shrink-0 items-center justify-center rounded-lg bg-background text-2xl font-bold">{{ entry.character }}</span>
        <span class="min-w-0 flex-1">
          <span class="block text-sm font-semibold text-foreground">{{ entry.pinyin }}</span>
          <span class="block truncate text-xs text-muted-foreground">{{ entry.meaning }}</span>
        </span>
        <span v-if="entry.strokes" class="shrink-0 text-xs text-muted-foreground">{{ entry.strokes }} strokes</span>
      </button>
    </nav>
  </div>
</template>
