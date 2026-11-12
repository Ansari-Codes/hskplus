<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { comparisonsData, type ComparisonItem } from '../../Data/comparisonsData'
import { VOCABULARY_DATA } from '../../Data/vocabularyData'
import CompAdSense from '../../Components/CompAdSense.vue'
import { speakChinese } from '../../Utils/speech'
import { setRouteJsonLd, getComparisonJsonLd } from '../../Utils/jsonLd'

const route = useRoute()

const slug = computed(() => route.params.slug as string)
const item = computed<ComparisonItem | undefined>(() => {
  return comparisonsData.find(c => c.slug === slug.value)
})

function getWordLevel(character: string): number {
  const match = VOCABULARY_DATA.find(v => v.character === character)
  return match?.level || 1
}

const fullFaqList = computed(() => {
  if (!item.value) return []
  const val = item.value
  const list: Array<{ q: string; a: string }> = [
    {
      q: `What is the difference between ${val.words.map(w => `${w.hanzi} (${w.pinyin})`).join(' and ')} in Chinese?`,
      a: val.summary
    }
  ]
  if (val.words.length >= 2) {
    list.push({
      q: `When should I use ${val.words[0].hanzi} vs ${val.words[1].hanzi}?`,
      a: `Use ${val.words[0].hanzi} (${val.words[0].pinyin}) when: ${val.words[0].coreFunction || val.words[0].meaning}. Use ${val.words[1].hanzi} (${val.words[1].pinyin}) when: ${val.words[1].coreFunction || val.words[1].meaning}.`
    })
  }
  if (val.faq && val.faq.length > 0) {
    val.faq.forEach(f => list.push(f))
  } else if (val.mistakes && val.mistakes.length > 0) {
    const m = val.mistakes[0]
    list.push({
      q: `What is a common mistake when using ${val.title.split(':')[0].trim()}?`,
      a: `A common error is saying "${m.incorrectZh}" instead of "${m.correctZh}". ${m.explanation}`
    })
  }
  return list
})

// Dynamic SEO updates
watch(
  item,
  (val) => {
    if (!val) return
    const pairTitle = val.title.split(':')[0].trim()
    document.title = `${pairTitle}: Key Differences, Grammar Rules & Quiz | HSK Plus`

    const desc = `Confused by ${pairTitle} in Chinese? Learn the exact grammar rules, side-by-side example sentences, common mistakes, and take a quick interactive quiz.`
    let metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) {
      metaDesc.setAttribute('content', desc)
    }

    let canonical = document.querySelector('link[rel="canonical"]')
    if (canonical) {
      canonical.setAttribute('href', `https://desihop.net/compare/${val.slug}`)
    }

    let metaKw = document.querySelector('meta[name="keywords"]')
    if (metaKw) {
      metaKw.setAttribute('content', `${val.words.map(w => w.hanzi).join(', ')}, ${val.words.map(w => w.pinyin).join(', ')}, ${pairTitle}, chinese grammar difference, ${val.level} grammar, confusing words chinese`)
    }

    setRouteJsonLd(getComparisonJsonLd(val))
  },
  { immediate: true }
)

// Quiz interactive state
const selectedAnswers = ref<Record<number, number>>({})
const showExplanations = ref<Record<number, boolean>>({})

function selectOption(qIdx: number, optIdx: number) {
  selectedAnswers.value[qIdx] = optIdx
  showExplanations.value[qIdx] = true
}

function resetQuiz() {
  selectedAnswers.value = {}
  showExplanations.value = {}
}

const quizScore = computed(() => {
  if (!item.value) return 0
  let count = 0
  item.value.quiz.forEach((q, idx) => {
    if (selectedAnswers.value[idx] === q.answer) count++
  })
  return count
})
</script>

<template>
  <div v-if="item" class="min-h-screen bg-background text-foreground pb-20">
    <!-- Header -->
    <header class="border-b border-border bg-surface py-10 sm:py-14 px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-5xl">
        <div class="flex items-center gap-2 text-xs font-semibold text-muted-foreground mb-4">
          <RouterLink to="/" class="hover:text-primary transition-colors">Home</RouterLink>
          <span>/</span>
          <RouterLink to="/compare" class="hover:text-primary transition-colors">Confusing Words</RouterLink>
          <span>/</span>
          <span class="text-foreground truncate">{{ item.shortTitle }}</span>
        </div>

        <div class="flex flex-wrap items-center gap-2 mb-3">
          <span class="rounded-lg bg-primary/10 px-2.5 py-0.5 text-xs font-bold text-primary">
            {{ item.level }}
          </span>
          <span class="rounded-lg bg-muted px-2.5 py-0.5 text-xs font-semibold text-muted-foreground">
            CEFR {{ item.cefr }}
          </span>
        </div>

        <h1 class="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-foreground">
          {{ item.title }}
        </h1>

        <!-- Direct Answer / Featured Snippet Box -->
        <div class="mt-6 rounded-2xl border border-primary/30 bg-primary/5 p-5 text-sm sm:text-base text-foreground leading-relaxed shadow-xs">
          <div class="font-bold text-xs uppercase tracking-wider text-primary mb-1">
            ⚡ Quick Summary & Rule of Thumb
          </div>
          {{ item.summary }}
        </div>
      </div>
    </header>

    <div class="mx-auto max-w-5xl px-4 pt-6">
      <CompAdSense format="banner" slot-id="compare-detail-top" />
    </div>

    <main class="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8 space-y-12">
      <!-- 0. Compared Words Directory & Stroke Practice (Interlinking) -->
      <section class="rounded-3xl border border-border bg-surface p-6 sm:p-8 shadow-xs space-y-4">
        <div class="flex items-center gap-2">
          <span class="text-xl">📚</span>
          <h2 class="text-lg sm:text-xl font-bold text-foreground">
            Vocabulary Profiles &amp; Stroke Order Practice
          </h2>
        </div>
        <p class="text-xs sm:text-sm text-muted-foreground">
          Study individual character profiles, native audio pronunciation, stroke animations, and Tian Zi Ge handwriting labs.
        </p>

        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="w in item.words"
            :key="w.hanzi"
            class="rounded-2xl border border-border bg-surface-raised p-4 flex flex-col justify-between space-y-3 hover:border-primary/50 transition-colors"
          >
            <div>
              <div class="flex items-center justify-between">
                <span class="text-3xl font-black font-serif text-primary">{{ w.hanzi }}</span>
                <span class="rounded-md bg-primary/10 px-2 py-0.5 text-xs font-bold text-primary">
                  HSK {{ getWordLevel(w.hanzi) }}
                </span>
              </div>
              <div class="text-xs font-bold text-muted-foreground mt-0.5">{{ w.pinyin }} &bull; {{ w.partOfSpeech }}</div>
              <p class="text-xs text-foreground/90 font-medium mt-1.5">{{ w.meaning }}</p>
              <p class="text-[11px] text-muted-foreground mt-1 line-clamp-2">{{ w.coreFunction }}</p>
            </div>

            <div class="flex flex-col gap-1.5 pt-2 border-t border-border/70 text-xs">
              <RouterLink
                :to="`/hsk${getWordLevel(w.hanzi)}/vocabulary/${encodeURIComponent(w.hanzi)}`"
                class="inline-flex items-center justify-between font-bold text-primary hover:underline"
              >
                <span>📖 {{ w.hanzi }} Vocabulary Profile</span>
                <span>→</span>
              </RouterLink>
              <RouterLink
                :to="`/hsk${getWordLevel(w.hanzi)}/practice/${encodeURIComponent(w.hanzi)}`"
                class="inline-flex items-center justify-between text-muted-foreground hover:text-foreground font-semibold"
              >
                <span>✍️ Practice Writing {{ w.hanzi }}</span>
                <span>Canvas →</span>
              </RouterLink>
            </div>
          </div>
        </div>
      </section>

      <!-- 1. The Comparison Matrix Table -->
      <section class="rounded-3xl border border-border bg-surface p-6 sm:p-8 shadow-xs space-y-4">
        <h2 class="text-xl sm:text-2xl font-black text-foreground">
          📊 Side-by-Side Comparison Matrix
        </h2>
        <p class="text-xs sm:text-sm text-muted-foreground">
          Key structural and grammatical differences at a glance.
        </p>

        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr class="border-b border-border bg-muted/40">
                <th class="py-3 px-4 font-bold text-foreground">Distinction Criteria</th>
                <th class="py-3 px-4 font-bold text-primary">
                  {{ item.words[0].hanzi }} ({{ item.words[0].pinyin }})
                </th>
                <th class="py-3 px-4 font-bold text-sky-600 dark:text-sky-400">
                  {{ item.words[1].hanzi }} ({{ item.words[1].pinyin }})
                </th>
                <th v-if="item.words[2]" class="py-3 px-4 font-bold text-emerald-600 dark:text-emerald-400">
                  {{ item.words[2].hanzi }} ({{ item.words[2].pinyin }})
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-border/60">
              <tr
                v-for="(row, rIdx) in item.table"
                :key="rIdx"
                class="hover:bg-muted/20 transition-colors"
              >
                <td class="py-3 px-4 font-semibold text-foreground bg-muted/10">{{ row.criteria }}</td>
                <td class="py-3 px-4 text-muted-foreground">{{ row.word1 }}</td>
                <td class="py-3 px-4 text-muted-foreground">{{ row.word2 }}</td>
                <td v-if="row.word3" class="py-3 px-4 text-muted-foreground">{{ row.word3 }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- 2. Detailed Rules & Formulas -->
      <section class="space-y-6">
        <h2 class="text-xl sm:text-2xl font-black text-foreground">
          📖 Deep-Dive Grammar Formulas & Practical Usage
        </h2>

        <div class="grid gap-6 md:grid-cols-2">
          <div
            v-for="(rule, rIdx) in item.rules"
            :key="rIdx"
            class="rounded-3xl border border-border bg-surface p-6 shadow-xs flex flex-col justify-between"
          >
            <div>
              <h3 class="text-lg font-bold text-foreground mb-2">
                {{ rule.heading }}
              </h3>
              
              <div v-if="rule.formula" class="mb-3 rounded-xl bg-muted/60 p-2.5 font-mono text-xs font-bold text-primary border border-border/80">
                Formula: {{ rule.formula }}
              </div>

              <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {{ rule.explanation }}
              </p>

              <!-- Examples List with Audio -->
              <div class="mt-4 space-y-2.5 pt-4 border-t border-border/70">
                <div
                  v-for="(ex, eIdx) in rule.examples"
                  :key="eIdx"
                  class="rounded-xl border border-border/70 bg-background/60 p-3"
                >
                  <div class="flex items-center justify-between gap-2">
                    <span class="text-sm font-bold text-foreground">{{ ex.zh }}</span>
                    <button
                      type="button"
                      class="text-xs text-primary hover:opacity-80 cursor-pointer"
                      title="Listen"
                      @click="speakChinese(ex.zh)"
                    >
                      🔊
                    </button>
                  </div>
                  <div class="text-[11px] text-muted-foreground">{{ ex.py }}</div>
                  <div class="text-xs text-muted-foreground/90 mt-0.5">{{ ex.en }}</div>
                  <div v-if="ex.note" class="text-[10px] font-semibold text-amber-600 dark:text-amber-400 mt-1">
                    💡 {{ ex.note }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Mid Ad Placement -->
      <CompAdSense format="in-article" slot-id="compare-detail-mid" />

      <!-- 3. Common Pitfalls & Mistakes (❌ vs ✅) -->
      <section class="rounded-3xl border border-border bg-surface p-6 sm:p-8 shadow-xs space-y-4">
        <h2 class="text-xl sm:text-2xl font-black text-foreground">
          ⚠️ Common Pitfalls & High-Frequency Errors
        </h2>
        <p class="text-xs sm:text-sm text-muted-foreground">
          How native examiners spot non-native speakers, and how to write it correctly every time.
        </p>

        <div class="grid gap-4 sm:grid-cols-2">
          <div
            v-for="(m, mIdx) in item.mistakes"
            :key="mIdx"
            class="rounded-2xl border border-border p-4 bg-background/50 space-y-2.5"
          >
            <!-- Wrong -->
            <div class="flex items-start gap-2 text-rose-600 dark:text-rose-400">
              <span class="font-bold shrink-0">❌</span>
              <div>
                <div class="text-sm font-bold line-through">{{ m.incorrectZh }}</div>
                <div class="text-[11px] text-muted-foreground">{{ m.incorrectPy }}</div>
              </div>
            </div>

            <!-- Right -->
            <div class="flex items-start gap-2 text-emerald-600 dark:text-emerald-400 border-t border-border/60 pt-2">
              <span class="font-bold shrink-0">✅</span>
              <div>
                <div class="text-sm font-bold">{{ m.correctZh }}</div>
                <div class="text-[11px] text-muted-foreground">{{ m.correctPy }}</div>
              </div>
            </div>

            <!-- English Meaning & Rule Explanation -->
            <div class="text-xs text-muted-foreground pt-1">
              <strong>English:</strong> {{ m.en }}
            </div>
            <div class="text-xs text-muted-foreground bg-muted/40 p-2 rounded-lg leading-relaxed">
              <strong>Why:</strong> {{ m.explanation }}
            </div>
          </div>
        </div>
      </section>

      <!-- 4. Interactive Quiz Drill -->
      <section class="rounded-3xl border border-primary/20 bg-surface p-6 sm:p-8 shadow-md space-y-6">
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-border pb-4">
          <div>
            <h2 class="text-xl sm:text-2xl font-black text-foreground">
              🎯 Test Your Understanding: Quiz Drill
            </h2>
            <p class="text-xs sm:text-sm text-muted-foreground">
              Select the correct word to complete each sentence. Instant scoring & explanation.
            </p>
          </div>

          <div class="flex items-center gap-3">
            <span v-if="Object.keys(selectedAnswers).length > 0" class="text-xs font-bold text-primary">
              Score: {{ quizScore }} / {{ item.quiz.length }}
            </span>
            <button
              v-if="Object.keys(selectedAnswers).length > 0"
              type="button"
              class="text-xs font-semibold text-muted-foreground hover:text-foreground cursor-pointer underline"
              @click="resetQuiz"
            >
              Reset Quiz
            </button>
          </div>
        </div>

        <div class="space-y-6">
          <div
            v-for="(q, qIdx) in item.quiz"
            :key="qIdx"
            class="rounded-2xl border border-border bg-background p-5 space-y-3"
          >
            <div class="flex items-start gap-2">
              <span class="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-black text-primary">
                {{ qIdx + 1 }}
              </span>
              <p class="text-sm sm:text-base font-bold text-foreground">
                {{ q.question }}
              </p>
            </div>

            <!-- Options -->
            <div class="grid gap-2 sm:grid-cols-2 pt-1">
              <button
                v-for="(opt, optIdx) in q.options"
                :key="optIdx"
                type="button"
                class="rounded-xl border p-3 text-left text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center justify-between"
                :class="{
                  'border-border hover:bg-muted hover:border-primary/50': selectedAnswers[qIdx] === undefined,
                  'border-emerald-500 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 font-bold':
                    showExplanations[qIdx] && optIdx === q.answer,
                  'border-rose-500 bg-rose-500/10 text-rose-700 dark:text-rose-300 line-through':
                    showExplanations[qIdx] && selectedAnswers[qIdx] === optIdx && optIdx !== q.answer,
                  'opacity-60':
                    showExplanations[qIdx] && selectedAnswers[qIdx] !== optIdx && optIdx !== q.answer,
                }"
                :disabled="showExplanations[qIdx]"
                @click="selectOption(qIdx, optIdx)"
              >
                <span>{{ opt }}</span>
                <span v-if="showExplanations[qIdx] && optIdx === q.answer">✓</span>
                <span v-else-if="showExplanations[qIdx] && selectedAnswers[qIdx] === optIdx">✗</span>
              </button>
            </div>

            <!-- Explanation Callout -->
            <div
              v-if="showExplanations[qIdx]"
              class="rounded-xl bg-muted/60 p-3 text-xs text-muted-foreground border border-border/80 leading-relaxed animate-in fade-in duration-200"
            >
              <span class="font-bold text-foreground">Rationale:</span>
              {{ q.explanation }}
            </div>
          </div>
        </div>
      </section>

      <!-- 5. Frequently Asked Questions (Matching JSON-LD FAQPage) -->
      <section v-if="fullFaqList && fullFaqList.length > 0" class="rounded-3xl border border-border bg-surface p-6 sm:p-8 shadow-xs space-y-4">
        <h2 class="text-xl sm:text-2xl font-black text-foreground">
          ❓ Frequently Asked Questions &amp; Practical Rules
        </h2>

        <div class="divide-y divide-border/70">
          <div
            v-for="(f, fIdx) in fullFaqList"
            :key="fIdx"
            class="py-4 space-y-1.5"
          >
            <h3 class="text-sm sm:text-base font-bold text-foreground">
              {{ f.q }}
            </h3>
            <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {{ f.a }}
            </p>
          </div>
        </div>
      </section>

      <!-- Navigation to other comparisons -->
      <div class="pt-6 border-t border-border flex items-center justify-between">
        <RouterLink to="/compare" class="text-xs sm:text-sm font-bold text-primary hover:underline">
          ← View All 15 Confusing Word Guides
        </RouterLink>
        <RouterLink to="/score-calculator" class="text-xs sm:text-sm font-bold text-muted-foreground hover:text-foreground">
          HSK Score Calculator →
        </RouterLink>
      </div>
    </main>
  </div>

  <div v-else class="min-h-screen flex items-center justify-center p-8 text-center">
    <div>
      <h2 class="text-2xl font-bold">Comparison Guide Not Found</h2>
      <RouterLink to="/compare" class="mt-4 inline-block text-primary font-bold">
        Back to Confusing Words List →
      </RouterLink>
    </div>
  </div>
</template>
