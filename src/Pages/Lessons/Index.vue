<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute, useRouter, RouterLink } from 'vue-router'
import { getLessonsByLevel, getLessonByIndex } from '../../Data/lessonsData'
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

const lessons = computed(() => getLessonsByLevel(level.value))

const selectedIndex = computed(() => {
  const q = route.query.index
  if (typeof q === 'string') {
    const idx = parseInt(q, 10)
    if (!isNaN(idx) && idx >= 1 && idx <= lessons.value.length) {
      return idx
    }
  }
  return null
})

const activeLesson = computed(() => {
  if (selectedIndex.value !== null) {
    return getLessonByIndex(level.value, selectedIndex.value)
  }
  return null
})

// Interactive Quiz state
const userAnswers = ref<Record<number, number>>({})
const quizSubmitted = ref(false)

function selectLesson(index: number) {
  userAnswers.value = {}
  quizSubmitted.value = false
  router.push({
    path: `/hsk${level.value}/lessons`,
    query: { index: index.toString() }
  })
}

function backToList() {
  router.push({
    path: `/hsk${level.value}/lessons`
  })
}

function prevLesson() {
  if (selectedIndex.value && selectedIndex.value > 1) {
    selectLesson(selectedIndex.value - 1)
  }
}

function nextLesson() {
  if (selectedIndex.value && selectedIndex.value < lessons.value.length) {
    selectLesson(selectedIndex.value + 1)
  }
}

function playAudio(text: string) {
  speakChinese(text)
}

function checkQuiz() {
  quizSubmitted.value = true
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
              <span class="text-sm font-semibold text-muted-foreground">Lessons</span>
            </div>
            <h1 class="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
              HSK {{ level }} Standard Lessons ({{ lessons.length }} Lessons)
            </h1>
            <p class="mt-1 text-sm text-muted-foreground">
              Official textbook curriculum covering learning objectives, vocabulary, grammar breakdowns, and quizzes.
            </p>
          </div>

          <div class="flex items-center gap-2">
            <RouterLink to="/hsk1/lessons">
              <UiButton :variant="level === 1 ? 'primary' : 'outline'" size="sm">HSK 1 (15)</UiButton>
            </RouterLink>
            <RouterLink to="/hsk2/lessons">
              <UiButton :variant="level === 2 ? 'primary' : 'outline'" size="sm">HSK 2 (15)</UiButton>
            </RouterLink>
            <RouterLink to="/hsk3/lessons">
              <UiButton :variant="level === 3 ? 'primary' : 'outline'" size="sm">HSK 3 (20)</UiButton>
            </RouterLink>
          </div>
        </div>
      </div>
    </header>

    <!-- Top Leaderboard Ad -->
    <div class="mx-auto max-w-6xl px-4 pt-4">
      <CompAdSense format="banner" slot-id="lessons-top" />
    </div>

    <main class="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <!-- VIEW 1: SINGLE LESSON DETAIL VIEW -->
      <div v-if="activeLesson">
        <div class="mb-6 flex flex-wrap items-center justify-between gap-4">
          <UiButton variant="ghost" size="sm" @click="backToList">
            ← All {{ lessons.length }} Lessons
          </UiButton>
          <div class="flex items-center gap-2">
            <UiButton size="sm" variant="outline" :disabled="activeLesson.lessonNumber <= 1" @click="prevLesson">
              ◀ Prev Lesson
            </UiButton>
            <span class="text-xs font-semibold text-muted-foreground">
              Lesson {{ activeLesson.lessonNumber }} of {{ lessons.length }}
            </span>
            <UiButton size="sm" variant="outline" :disabled="activeLesson.lessonNumber >= lessons.length" @click="nextLesson">
              Next Lesson ▶
            </UiButton>
          </div>
        </div>

        <!-- Lesson Header Card -->
        <article class="rounded-2xl border border-border bg-surface p-6 shadow-sm sm:p-8">
          <div class="flex flex-wrap items-center justify-between gap-3">
            <UiBadge variant="secondary">Lesson {{ activeLesson.lessonNumber }} · HSK {{ level }}</UiBadge>
            <UiButton size="sm" variant="outline" @click="playAudio(activeLesson.title)">
              🔊 Pronounce Title
            </UiButton>
          </div>

          <h2 class="mt-4 text-3xl font-extrabold text-foreground sm:text-4xl" lang="zh">
            {{ activeLesson.title }}
          </h2>
          <p class="mt-1 text-xl font-medium text-primary">{{ activeLesson.pinyin }}</p>
          <p class="mt-1 text-lg text-muted-foreground">{{ activeLesson.english }}</p>

          <p class="mt-4 rounded-xl bg-muted/60 p-4 text-sm leading-relaxed text-foreground">
            <strong>Objectives:</strong> {{ activeLesson.summary }}
          </p>

          <!-- Section 1: Core Vocabulary -->
          <section class="mt-8">
            <h3 class="text-lg font-bold text-foreground">1. Core Vocabulary Introduced</h3>
            <div class="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <div
                v-for="v in activeLesson.vocabulary"
                :key="v.character"
                class="flex items-center justify-between rounded-xl border border-border bg-surface-raised p-3.5 hover:border-primary/40 transition-colors"
              >
                <div>
                  <div class="flex items-center gap-2">
                    <span class="text-xl font-bold" lang="zh">{{ v.character }}</span>
                    <span class="text-sm font-semibold text-primary">{{ v.pinyin }}</span>
                  </div>
                  <p class="mt-0.5 text-xs text-muted-foreground">{{ v.meaning }}</p>
                </div>
                <button
                  type="button"
                  class="rounded-full bg-secondary p-1.5 text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  title="Hear pronunciation"
                  @click="playAudio(v.character)"
                >
                  🔊
                </button>
              </div>
            </div>
          </section>

          <!-- Mid-Lesson In-Article Ad -->
          <CompAdSense format="in-article" slot-id="lesson-mid" />

          <!-- Section 2: Grammar & Sentence Patterns -->
          <section class="mt-10">
            <h3 class="text-lg font-bold text-foreground">2. Grammar & Sentence Patterns</h3>
            <div class="mt-4 space-y-6">
              <div
                v-for="g in activeLesson.grammar"
                :key="g.title"
                class="rounded-xl border border-border bg-surface-raised p-5"
              >
                <div class="flex items-center justify-between">
                  <h4 class="text-base font-semibold text-foreground">{{ g.title }}</h4>
                  <span class="rounded bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">Formula</span>
                </div>
                <div class="mt-2 rounded-lg bg-surface p-3 font-mono text-sm text-primary border border-border">
                  {{ g.pattern }}
                </div>
                <p class="mt-3 text-sm text-muted-foreground leading-relaxed">{{ g.explanation }}</p>

                <div class="mt-4 space-y-2">
                  <p class="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Example Sentences:</p>
                  <div
                    v-for="ex in g.examples"
                    :key="ex.chinese"
                    class="flex items-start justify-between rounded-lg bg-surface p-3 border border-border/80"
                  >
                    <div>
                      <p class="text-base font-medium" lang="zh">{{ ex.chinese }}</p>
                      <p class="text-xs text-primary font-medium">{{ ex.pinyin }}</p>
                      <p class="text-xs text-muted-foreground">{{ ex.english }}</p>
                    </div>
                    <button
                      type="button"
                      class="text-muted-foreground hover:text-primary transition-colors text-sm"
                      @click="playAudio(ex.chinese)"
                    >
                      🔊
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Section 3: Dialogue in Context -->
          <section class="mt-10">
            <div class="flex items-center justify-between">
              <h3 class="text-lg font-bold text-foreground">3. Standard Dialogue</h3>
              <UiButton size="sm" variant="outline" @click="playAudio(activeLesson.dialogue.map((d: any) => d.chinese).join('，'))">
                ▶️ Play Entire Dialogue
              </UiButton>
            </div>

            <div class="mt-4 space-y-3 rounded-xl border border-border bg-surface-raised p-5">
              <div
                v-for="line in activeLesson.dialogue"
                :key="line.chinese"
                class="flex items-start gap-3 rounded-lg bg-surface p-3 border border-border/70"
              >
                <span class="text-2xl">{{ line.avatar }}</span>
                <div class="flex-1">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-bold text-primary">{{ line.speaker }}</span>
                    <button
                      type="button"
                      class="text-muted-foreground hover:text-primary transition-colors text-xs"
                      @click="playAudio(line.chinese)"
                    >
                      🔊 Listen
                    </button>
                  </div>
                  <p class="mt-1 text-base font-medium" lang="zh">{{ line.chinese }}</p>
                  <p class="text-xs text-primary">{{ line.pinyin }}</p>
                  <p class="mt-0.5 text-xs text-muted-foreground">{{ line.english }}</p>
                </div>
              </div>
            </div>
          </section>

          <!-- Section 4: Cultural Note -->
          <section class="mt-10 rounded-xl border border-amber-200 bg-amber-50/30 p-5 dark:border-amber-900/40 dark:bg-amber-950/10">
            <h3 class="flex items-center gap-2 text-base font-bold text-amber-800 dark:text-amber-300">
              <span>🏮</span> Cultural Insight & Usage Tip
            </h3>
            <p class="mt-2 text-sm leading-relaxed text-amber-950 dark:text-amber-200">
              {{ activeLesson.culture }}
            </p>
          </section>

          <!-- Section 5: Lesson Quiz & Comprehension Check -->
          <section class="mt-10">
            <h3 class="text-lg font-bold text-foreground">4. Lesson Mastery Quiz</h3>
            <p class="text-sm text-muted-foreground">Test your understanding of the vocabulary and grammar rules introduced in this lesson.</p>

            <div class="mt-4 space-y-4">
              <div
                v-for="(q, qIdx) in activeLesson.exercises"
                :key="q.question"
                class="rounded-xl border border-border bg-surface-raised p-5"
              >
                <p class="font-semibold text-foreground">{{ qIdx + 1 }}. {{ q.question }}</p>
                <div class="mt-3 grid gap-2 sm:grid-cols-2">
                  <button
                    v-for="(opt, optIdx) in q.options"
                    :key="opt"
                    type="button"
                    :class="[
                      'rounded-lg border p-3 text-left text-sm transition-colors',
                      userAnswers[qIdx] === optIdx
                        ? 'border-primary bg-primary text-primary-foreground font-semibold'
                        : 'border-border bg-surface text-foreground hover:bg-muted',
                      quizSubmitted && optIdx === q.answer ? 'border-emerald-500 bg-emerald-50 text-emerald-900 font-bold dark:bg-emerald-950 dark:text-emerald-100' : ''
                    ]"
                    @click="userAnswers[qIdx] = optIdx"
                  >
                    {{ opt }}
                  </button>
                </div>

                <div v-if="quizSubmitted" class="mt-3 text-xs leading-relaxed" :class="userAnswers[qIdx] === q.answer ? 'text-emerald-600' : 'text-red-600'">
                  <strong>Explanation:</strong> {{ q.explanation }}
                </div>
              </div>
            </div>

            <div class="mt-6 flex justify-end">
              <UiButton @click="checkQuiz">
                Check Answers
              </UiButton>
            </div>
          </section>
        </article>
      </div>

      <!-- VIEW 2: ALL LESSONS LIST VIEW -->
      <div v-else>
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="l in lessons"
            :key="l.id"
            class="group cursor-pointer rounded-2xl border border-border bg-surface p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
            @click="selectLesson(l.lessonNumber)"
          >
            <div class="flex items-center justify-between">
              <UiBadge variant="secondary">Lesson {{ l.lessonNumber }}</UiBadge>
              <span class="text-xs text-muted-foreground">{{ l.vocabulary.length }} words</span>
            </div>
            <h3 class="mt-3 text-xl font-bold text-foreground group-hover:text-primary transition-colors" lang="zh">
              {{ l.title }}
            </h3>
            <p class="text-sm font-medium text-primary">{{ l.pinyin }}</p>
            <p class="mt-0.5 text-sm font-semibold text-muted-foreground">{{ l.english }}</p>
            <p class="mt-3 text-xs leading-relaxed text-muted-foreground line-clamp-2">
              {{ l.summary }}
            </p>
            <div class="mt-4 pt-3 border-t border-border flex items-center justify-between">
              <span class="text-xs font-semibold text-primary">Open Lesson →</span>
              <span class="text-xs text-muted-foreground">Quiz Included</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
