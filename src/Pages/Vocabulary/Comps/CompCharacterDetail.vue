<script setup lang="ts">
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import type { VocabularyEntry } from '../types'
import { UiButton, UiIcon } from '../../../Ui'
import { speakChinese } from '../../../Utils/speech'
import CompStrokeAnimation from '../../../Components/CompStrokeAnimation.vue'
import { toggleWordLearned, isWordLearned } from '../../../stores/progress'

const props = defineProps<{
  entry: VocabularyEntry
  level: number
}>()

const strokeAnimation = ref<{ animate: () => void } | null>(null)

const emit = defineEmits<{
  practice: [character: string]
}>()

const isLearned = computed(() => {
  return isWordLearned(props.entry.character)
})

function toggleLearned() {
  toggleWordLearned(props.entry.character)
}

function animateCharacter() {
  strokeAnimation.value?.animate()
}

function playAudio(text?: string) {
  speakChinese(text || props.entry.character)
}

// Tone Sandhi check
const hasToneSandhi = computed(() => {
  if (props.entry.character === '不' || props.entry.character === '一') return true
  if (props.entry.character.length >= 2) {
    // Check for two 3rd tones
    const hasMultipleThirdTones = /[ǎǐǔǒě]/.test(props.entry.pinyin) && (props.entry.pinyin.match(/[ǎǐǔǒě]/g) || []).length >= 2
    return hasMultipleThirdTones
  }
  return false
})

const toneSandhiNote = computed(() => {
  if (props.entry.character === '不') {
    return 'Tone Sandhi: When preceding a 4th-tone character (e.g. 不是), 不 shifts from 4th tone (bù) to 2nd tone (bú).'
  }
  if (props.entry.character === '一') {
    return 'Tone Sandhi: Before a 4th tone, 一 shifts from 1st (yī) to 2nd tone (yí ge); before 1st/2nd/3rd tones, it shifts to 4th tone (yì tiān).'
  }
  return 'Tone Sandhi: When two 3rd tones appear consecutively, the first changes into a rising 2nd tone during spoken speech.'
})

// Constituent character breakdown
const charsList = computed(() => {
  return Array.from(props.entry.character)
})
</script>

<template>
  <article class="rounded-2xl border border-border bg-surface p-5 shadow-sm sm:p-8 space-y-6">
    <!-- Header Row -->
    <div class="flex flex-wrap items-start justify-between gap-5">
      <div>
        <div class="flex items-center gap-2">
          <span class="rounded-md bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
            HSK {{ level }} · #{{ entry.id || 1 }}
          </span>
          <span v-if="entry.category" class="rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground">
            {{ entry.category }}
          </span>
          <!-- Mastered Badge -->
          <span
            v-if="isLearned"
            class="rounded-md bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 text-xs font-bold text-emerald-600 dark:text-emerald-400"
          >
            ✓ Mastered
          </span>
        </div>
        <h1 class="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-foreground">{{ entry.meaning }}</h1>
      </div>

      <div class="flex flex-wrap gap-2">
        <!-- Mark as Learned Button -->
        <UiButton
          :variant="isLearned ? 'secondary' : 'primary'"
          size="sm"
          @click="toggleLearned"
        >
          <span>{{ isLearned ? '✓ Mastered' : '+ Mark as Mastered' }}</span>
        </UiButton>

        <UiButton variant="outline" size="sm" @click="playAudio()">
          <span class="mr-1">🔊</span> Listen
        </UiButton>
        <UiButton variant="outline" size="sm" @click="animateCharacter">
          <UiIcon name="sparkles" :size="16" />
          Animate
        </UiButton>
        <UiButton variant="outline" size="sm" @click="emit('practice', entry.character)">
          <UiIcon name="book" :size="16" />
          Practice writing
        </UiButton>
      </div>
    </div>

    <!-- Main Character Display & Information -->
    <div class="grid gap-6 sm:grid-cols-[minmax(13rem,0.85fr)_1fr]">
      <!-- Character Display Card -->
      <div class="flex min-h-60 flex-col items-center justify-center rounded-2xl bg-surface-raised p-6 text-center border border-border">
        <CompStrokeAnimation ref="strokeAnimation" :character="entry.character" />
        
        <div class="mt-4 flex items-center gap-2">
          <p class="text-2xl font-bold text-primary">{{ entry.pinyin }}</p>
          <button
            type="button"
            class="text-muted-foreground hover:text-primary transition-colors text-base"
            title="Pronounce"
            @click="playAudio()"
          >
            🔊
          </button>
        </div>

        <p class="mt-1 text-xs text-muted-foreground">
          {{ entry.strokes ? `${entry.strokes} strokes` : 'Standard HSK Vocabulary Entry' }}
        </p>

        <!-- Multi-Character Breakdown if applicable -->
        <div v-if="charsList.length > 1" class="mt-4 w-full border-t border-border/70 pt-3">
          <div class="text-[11px] font-semibold text-muted-foreground mb-1.5">Constituent Characters:</div>
          <div class="flex flex-wrap justify-center gap-2">
            <span
              v-for="c in charsList"
              :key="c"
              class="inline-flex items-center gap-1 rounded-lg bg-surface px-2.5 py-1 text-xs font-serif font-bold text-foreground border border-border"
            >
              <span>{{ c }}</span>
              <button
                type="button"
                class="text-[10px] text-muted-foreground hover:text-primary"
                @click="playAudio(c)"
              >
                🔊
              </button>
            </span>
          </div>
        </div>

        <!-- Radicals link -->
        <RouterLink to="/radicals" class="mt-3 text-xs text-primary hover:underline flex items-center gap-1">
          <span>Explore Chinese Radicals</span> →
        </RouterLink>
      </div>

      <!-- Right: Example Sentences & Nuances -->
      <section aria-labelledby="examples-heading" class="flex flex-col justify-between space-y-4">
        <div>
          <!-- Tone Sandhi Alert if triggered -->
          <div v-if="hasToneSandhi" class="mb-4 rounded-xl border border-amber-500/30 bg-amber-500/10 p-3 text-xs text-amber-800 dark:text-amber-300">
            <strong>⚠️ Pronunciation Rule:</strong> {{ toneSandhiNote }}
          </div>

          <div class="flex items-center justify-between">
            <h2 id="examples-heading" class="text-base font-semibold text-foreground">Usage & Example Sentences</h2>
            <span class="text-xs text-muted-foreground">{{ entry.examples.length }} examples</span>
          </div>

          <ul v-if="entry.examples.length" class="mt-3 space-y-3">
            <li
              v-for="example in entry.examples"
              :key="example.chinese"
              class="group relative rounded-xl border border-border bg-surface-raised p-4 transition-colors hover:border-primary/40"
            >
              <div class="flex items-start justify-between gap-2">
                <p class="text-lg font-medium text-foreground" lang="zh">{{ example.chinese }}</p>
                <button
                  type="button"
                  class="rounded p-1 text-muted-foreground hover:text-primary transition-colors text-sm"
                  title="Play audio for this sentence"
                  @click="playAudio(example.chinese)"
                >
                  🔊
                </button>
              </div>
              <p class="mt-1 text-sm font-semibold text-primary">{{ example.pinyin }}</p>
              <p class="mt-1 text-xs text-muted-foreground">{{ example.translation }}</p>
            </li>
          </ul>
          <p v-else class="mt-3 rounded-xl border border-border bg-surface-raised p-4 text-sm text-muted-foreground">
            No example sentences included for this word yet. Practice writing and speaking above!
          </p>
        </div>

        <div class="mt-4 rounded-xl bg-muted/60 p-3 text-xs text-muted-foreground flex items-center justify-between">
          <span>💡 Use the <strong>Practice writing</strong> lab to test stroke accuracy on the Tian Zi Ge canvas.</span>
        </div>
      </section>
    </div>
  </article>
</template>
