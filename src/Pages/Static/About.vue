<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { UiButton } from '../../Ui'
import CompComparisonTable from '../../Components/CompComparisonTable.vue'
</script>

<template>
  <div class="min-h-screen bg-background text-foreground">
    <header class="border-b border-border bg-surface py-12 px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-4xl">
        <div class="flex items-center gap-2 text-sm">
          <RouterLink to="/" class="font-medium text-primary hover:underline">← Home</RouterLink>
          <span class="text-muted-foreground">/</span>
          <span class="text-muted-foreground">About HSK Plus</span>
        </div>
        <h1 class="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
          About HSK Plus
        </h1>
        <p class="mt-3 text-lg text-muted-foreground">
          Empowering global Chinese language learners with a 100% free, interactive, and comprehensive HSK encyclopedia.
        </p>
      </div>
    </header>

    <main class="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 space-y-12">
      <!-- Mission -->
      <section>
        <h2 class="text-2xl font-bold text-foreground">Our Pedagogical Mission</h2>
        <p class="mt-3 text-base leading-relaxed text-muted-foreground">
          Learning Mandarin Chinese should not be gated behind prohibitive paywalls, fragmented software apps, or outdated textbooks. At <strong>HSK Plus</strong>, our mission is to build the world's most accessible, reliable, and pedagogically rigorous learning platform for the Hanyu Shuiping Kaoshi (HSK).
        </p>
        <p class="mt-3 text-base leading-relaxed text-muted-foreground">
          We combine official Hanban curriculum syllabi with cutting-edge web technologies: real-time animated stroke-order visualization, algorithmic AI canvas scoring, native SpeechSynthesis pronunciation, and realistic timed mock examination simulations.
        </p>
      </section>

      <!-- Key Pillars -->
      <section>
        <h2 class="text-2xl font-bold text-foreground">What Sets HSK Plus Apart</h2>
        <div class="mt-6 grid gap-6 sm:grid-cols-2">
          <div class="rounded-2xl border border-border bg-surface p-6 shadow-sm">
            <span class="text-3xl">🆓</span>
            <h3 class="mt-3 text-lg font-bold">100% Free & Open Access</h3>
            <p class="mt-1 text-sm text-muted-foreground">
              No hidden subscriptions, paywalled vocabulary decks, or locked practice tests. Everything is available to all learners worldwide.
            </p>
          </div>
          <div class="rounded-2xl border border-border bg-surface p-6 shadow-sm">
            <span class="text-3xl">✍️</span>
            <h3 class="mt-3 text-lg font-bold">Interactive Hanzi Writing Studio</h3>
            <p class="mt-1 text-sm text-muted-foreground">
              Don't just stare at characters. Write them on traditional Tian Zi Ge grids with real-time feedback on stroke balance, IoU coverage, and stroke counts.
            </p>
          </div>
          <div class="rounded-2xl border border-border bg-surface p-6 shadow-sm">
            <span class="text-3xl">⏱️</span>
            <h3 class="mt-3 text-lg font-bold">Official Timed Mock Exams</h3>
            <p class="mt-1 text-sm text-muted-foreground">
              Over 10 full-length practice tests for each level featuring authentic audio pacing, section countdowns, and detailed solution explanations.
            </p>
          </div>
          <div class="rounded-2xl border border-border bg-surface p-6 shadow-sm">
            <span class="text-3xl">🎓</span>
            <h3 class="mt-3 text-lg font-bold">Scholarship & University Tools</h3>
            <p class="mt-1 text-sm text-muted-foreground">
              Our dynamic score calculator translates raw points into CEFR standards and evaluates your Chinese Government Scholarship (CSC) prospects.
            </p>
          </div>
        </div>
      </section>

      <!-- Academic Standards -->
      <section class="rounded-2xl border border-border bg-surface p-8 shadow-sm">
        <h2 class="text-xl font-bold text-foreground">Aligned with Ministry of Education Standards</h2>
        <p class="mt-3 text-sm leading-relaxed text-muted-foreground">
          All vocabulary definitions, grammatical explanations, and exercise questions are developed in strict alignment with the Chinese Ministry of Education's Center for Language Education and Cooperation (CLEC) standards. We support standard simplified Chinese characters, standardized Hanyu Pinyin with tone markings, and international English glosses.
        </p>
      </section>

      <!-- Platform Comparison Benchmark -->
      <section class="pt-4">
        <CompComparisonTable />
      </section>

      <!-- CTA -->
      <section class="text-center pt-6">
        <h3 class="text-xl font-bold text-foreground">Ready to start mastering Mandarin?</h3>
        <p class="mt-2 text-sm text-muted-foreground">Pick your level below and begin your journey today.</p>
        <div class="mt-6 flex justify-center gap-3">
          <RouterLink to="/hsk1">
            <UiButton size="lg" variant="primary">Explore HSK 1</UiButton>
          </RouterLink>
          <RouterLink to="/hsk2">
            <UiButton size="lg" variant="outline">Explore HSK 2</UiButton>
          </RouterLink>
        </div>
      </section>
    </main>
  </div>
</template>
