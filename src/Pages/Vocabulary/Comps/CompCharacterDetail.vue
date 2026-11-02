<script setup lang="ts">
import { ref } from 'vue'
import type { VocabularyEntry } from '../types'
import { UiButton, UiIcon } from '../../../Ui'
import { speakChinese } from '../../../Utils/speech'
import CompStrokeAnimation from '../../../Components/CompStrokeAnimation.vue'

const props = defineProps<{
  entry: VocabularyEntry
  level: number
}>()

const strokeAnimation = ref<{ animate: () => void } | null>(null)

const emit = defineEmits<{
  practice: [character: string]
}>()

function animateCharacter() {
  strokeAnimation.value?.animate()
}

function playAudio(text?: string) {
  speakChinese(text || props.entry.character)
}
</script>

<template>
  <article class="rounded-2xl border border-border bg-surface p-5 shadow-sm sm:p-8">
    <div class="flex flex-wrap items-start justify-between gap-5">
      <div>
        <div class="flex items-center gap-2">
          <span class="rounded-md bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
            HSK {{ level }} · #{{ entry.id || 1 }}
          </span>
          <span v-if="entry.category" class="rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground">
            {{ entry.category }}
          </span>
        </div>
        <h1 class="mt-2 text-2xl font-bold tracking-tight text-foreground">{{ entry.meaning }}</h1>
      </div>

      <div class="flex flex-wrap gap-2">
        <UiButton variant="outline" size="sm" @click="playAudio()">
          <span class="mr-1">🔊</span> Listen
        </UiButton>
        <UiButton variant="outline" size="sm" @click="animateCharacter">
          <UiIcon name="sparkles" :size="16" />
          Animate
        </UiButton>
        <UiButton size="sm" @click="emit('practice', entry.character)">
          <UiIcon name="book" :size="16" />
          Practice writing
        </UiButton>
      </div>
    </div>

    <div class="mt-7 grid gap-6 sm:grid-cols-[minmax(12rem,0.8fr)_1fr]">
      <!-- Character Display Card -->
      <div class="flex min-h-60 flex-col items-center justify-center rounded-2xl bg-surface-raised p-6 text-center border border-border">
        <CompStrokeAnimation ref="strokeAnimation" :character="entry.character" />
        <div class="mt-4 flex items-center gap-2">
          <p class="text-2xl font-semibold text-primary">{{ entry.pinyin }}</p>
          <button type="button" class="text-muted-foreground hover:text-primary transition-colors text-base" @click="playAudio()">
            🔊
          </button>
        </div>
        <p class="mt-1 text-xs text-muted-foreground">
          {{ entry.strokes ? `${entry.strokes} strokes` : 'Stroke count not included in this source list' }}
        </p>
      </div>

      <!-- Example Sentences -->
      <section aria-labelledby="examples-heading" class="flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between">
            <h2 id="examples-heading" class="text-base font-semibold text-foreground">Example sentences</h2>
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
            Example sentences are not included here; no unverified usage examples have been added.
          </p>
        </div>

        <div class="mt-5 rounded-xl bg-muted/60 p-3 text-xs text-muted-foreground">
          💡 Click <strong>Practice writing</strong> to study stroke order and get visual shape and centering feedback.
        </div>
      </section>
    </div>
  </article>
</template>
