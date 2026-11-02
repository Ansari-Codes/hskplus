<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { UiButton, UiBadge } from '../../Ui'
import { FEATURED_BLOGS } from '../../Data/featuredBlogs'
import CompAdSense from '../../Components/CompAdSense.vue'
import CompComparisonTable from '../../Components/CompComparisonTable.vue'
import CompHeroInteractiveCard from '../../Components/CompHeroInteractiveCard.vue'

const featuredBlogs = FEATURED_BLOGS
const totalBlogs = 20

const levelStats = {
  1: {
    vocabulary: 150,
    lessons: 15,
    patterns: 15,
    dialogues: 10,
    tests: 11,
  },
  2: {
    vocabulary: 150,
    lessons: 15,
    patterns: 15,
    dialogues: 10,
    tests: 11,
  },
  3: {
    vocabulary: 300,
    lessons: 20,
    patterns: 20,
    dialogues: 10,
    tests: 11,
  },
}
const totals = {
  vocabulary: 600,
  lessons: 50,
  patterns: 50,
  dialogues: 30,
  tests: 33,
}

const faqs = [
  {
    question: 'What does HSK mean?',
    answer: 'HSK stands for Hanyu Shuiping Kaoshi (汉语水平考试), commonly translated as the Chinese Proficiency Test. It is a standardized exam for learners of Chinese. Check the official test provider for current exam formats and registration information.',
  },
  {
    question: 'Which HSK levels can I study on HSK Plus?',
    answer: 'HSK Plus includes complete, free study hubs for HSK 1, HSK 2, and HSK 3. Each level includes comprehensive vocabulary lists, standard textbook-mapped lessons, sentence patterns, authentic situational dialogues with native audio pronunciation, character stroke practice, and timed mock tests (listening, reading, and writing).',
  },
  {
    question: 'Is HSK Plus affiliated with the official HSK exam?',
    answer: 'No. HSK Plus is an independent learning resource and is not affiliated with or endorsed by the official exam provider. Our practice tools are for study and self-assessment, not official certification.',
  },
  {
    question: 'Is HSK Plus free, and do I need an account?',
    answer: 'The learning resources are available without a paid subscription or required account. Some learning preferences and practice information may be saved locally in your browser.',
  },
  {
    question: 'How is HSK 1 content organized?',
    answer: 'HSK 1 lessons and grammar topics follow the sequence and topic coverage of HSK Standard Course 1. Explanations, examples, and exercises on HSK Plus are supplementary study materials.',
  },
]
</script>

<template>
  <div class="min-h-screen bg-background text-foreground">
    <!-- Hero Section -->
    <section class="relative overflow-hidden border-b border-border bg-gradient-to-b from-surface via-background to-background py-12 px-4 sm:px-6 lg:px-8 lg:py-20">
      <div class="mx-auto max-w-7xl">
        <!-- Split Hero Grid: Content (Left) + Interactive Studio (Right) -->
        <div class="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <!-- Left Column (7 cols): Hero Headlines & CTAs -->
          <div class="lg:col-span-7 space-y-6 text-left">
            <!-- Top Tag Pill -->
            <div class="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold text-primary shadow-xs">
              <span class="flex size-2 relative">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span class="relative inline-flex rounded-full size-2 bg-primary" />
              </span>
              <span>100% Free · Official HSK 1–3 Encyclopedia</span>
            </div>

            <!-- Main Heading -->
            <h1 class="text-4xl font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-[1.12]">
              Master Mandarin Chinese with
              <span class="bg-gradient-to-r from-primary via-rose-600 to-amber-600 bg-clip-text text-transparent">
                HSK Plus
              </span>
            </h1>

            <div class="flex items-center gap-2 text-sm font-bold text-foreground">
              <span class="rounded-md bg-primary/10 px-2 py-0.5 text-xs text-primary font-black uppercase tracking-wider">
                汉语水平考试
              </span>
              <span class="text-muted-foreground">·</span>
              <span class="text-muted-foreground">Standard Curriculum Learning Platform</span>
            </div>

            <p class="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              The free, comprehensive Chinese learning encyclopedia. Master 600 official vocabulary words with native pronunciation, 50 BLCUP Standard Course textbook lessons, animated character strokes, and 33 authentic timed mock exams with official Hanban formatting.
            </p>

            <!-- Feature Bullet Pills -->
            <div class="flex flex-wrap items-center gap-2 pt-1 text-xs font-semibold text-foreground">
              <span class="rounded-xl border border-border bg-surface px-3 py-1.5 shadow-xs">
                🎙️ 600 Words with Audio
              </span>
              <span class="rounded-xl border border-border bg-surface px-3 py-1.5 shadow-xs">
                📖 50 BLCUP Lessons
              </span>
              <span class="rounded-xl border border-border bg-surface px-3 py-1.5 shadow-xs">
                ⏱️ 33 Timed Mock Exams
              </span>
              <span class="rounded-xl border border-border bg-surface px-3 py-1.5 shadow-xs">
                🔤 Pinyin Toggle: ON / OFF
              </span>
              <span class="rounded-xl border border-border bg-surface px-3 py-1.5 shadow-xs">
                ✍️ Tian Zi Ge Stroke Studio
              </span>
            </div>

            <!-- CTA Buttons -->
            <div class="flex flex-wrap items-center gap-3.5 pt-2">
              <a href="#levels">
                <UiButton size="lg" variant="primary" class="shadow-lg shadow-primary/25 font-bold">
                  🚀 Choose an HSK Level →
                </UiButton>
              </a>
              <RouterLink to="/mock-tests">
                <UiButton size="lg" variant="outline" class="font-bold">
                  ⏱️ Take a Practice Test
                </UiButton>
              </RouterLink>
              <RouterLink to="/score-calculator">
                <UiButton size="lg" variant="secondary" class="font-bold">
                  🧮 Score Calculator
                </UiButton>
              </RouterLink>
            </div>

            <!-- Trust Indicator -->
            <p class="text-xs text-muted-foreground pt-1">
              ✨ 100% Free Forever · No Account Required · Native Web Audio · Zero Paywalls
            </p>
          </div>

          <!-- Right Column (5 cols): Interactive Studio Card -->
          <div class="lg:col-span-5 w-full">
            <CompHeroInteractiveCard />
          </div>
        </div>

        <!-- Quick Stats Banner (6 Stat Blocks) -->
        <div class="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 max-w-6xl mx-auto">
          <div class="rounded-2xl border border-border bg-surface p-4 text-center shadow-sm transition-all hover:border-primary/40 hover:-translate-y-0.5">
            <p class="text-3xl font-black text-primary">{{ totals.vocabulary }}</p>
            <p class="text-xs font-semibold text-muted-foreground mt-1">Vocabulary Entries</p>
          </div>
          <div class="rounded-2xl border border-border bg-surface p-4 text-center shadow-sm transition-all hover:border-indigo-400 hover:-translate-y-0.5">
            <p class="text-3xl font-black text-indigo-700 dark:text-indigo-400">{{ totals.lessons }}</p>
            <p class="text-xs font-semibold text-muted-foreground mt-1">Standard Lessons</p>
          </div>
          <div class="rounded-2xl border border-border bg-surface p-4 text-center shadow-sm transition-all hover:border-emerald-400 hover:-translate-y-0.5">
            <p class="text-3xl font-black text-emerald-700 dark:text-emerald-400">{{ totals.patterns }}</p>
            <p class="text-xs font-semibold text-muted-foreground mt-1">Sentence Patterns</p>
          </div>
          <div class="rounded-2xl border border-border bg-surface p-4 text-center shadow-sm transition-all hover:border-purple-400 hover:-translate-y-0.5">
            <p class="text-3xl font-black text-purple-700 dark:text-purple-400">{{ totals.dialogues }}</p>
            <p class="text-xs font-semibold text-muted-foreground mt-1">Dialog Scenarios</p>
          </div>
          <div class="rounded-2xl border border-border bg-surface p-4 text-center shadow-sm transition-all hover:border-amber-400 hover:-translate-y-0.5">
            <p class="text-3xl font-black text-amber-700 dark:text-amber-400">{{ totals.tests }}</p>
            <p class="text-xs font-semibold text-muted-foreground mt-1">Timed Mock Tests</p>
          </div>
          <div class="rounded-2xl border border-border bg-surface p-4 text-center shadow-sm transition-all hover:border-rose-400 hover:-translate-y-0.5">
            <p class="text-3xl font-black text-rose-700 dark:text-rose-400">{{ totalBlogs }}</p>
            <p class="text-xs font-semibold text-muted-foreground mt-1">Learning Guides</p>
          </div>
        </div>
      </div>
    </section>

    <!-- AdSense Top Banner -->
    <div class="mx-auto max-w-6xl px-4 py-2">
      <CompAdSense format="banner" slot-id="home-top-banner" />
    </div>

    <section id="what-is-hsk" class="border-y border-border bg-surface py-16 px-4 sm:px-6 lg:px-8">
      <div class="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-center">
        <div>
          <UiBadge variant="secondary">About the exam</UiBadge>
          <h2 class="mt-3 text-3xl font-extrabold text-foreground sm:text-4xl">What is HSK?</h2>
        </div>
        <div class="space-y-4 text-sm leading-7 text-muted-foreground sm:text-base">
          <p>
            HSK is short for <strong class="text-foreground">Hanyu Shuiping Kaoshi (汉语水平考试)</strong>, a standardized Chinese proficiency test for people whose first language is not Chinese. Learners use HSK levels to set study goals and demonstrate Chinese-language ability.
          </p>
          <p>
            Exam formats and requirements can change. HSK Plus provides independent study and practice materials; consult the official exam provider for current standards, registration, and certification details.
          </p>
        </div>
      </div>
    </section>

    <section id="what-is-hsk-plus" class="py-16 px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-6xl">
        <div class="mx-auto max-w-2xl text-center">
          <UiBadge variant="outline">The learning platform</UiBadge>
          <h2 class="mt-3 text-3xl font-extrabold text-foreground sm:text-4xl">What is HSK Plus?</h2>
          <p class="mt-3 leading-7 text-muted-foreground">
            HSK Plus brings practical Mandarin study resources together in one independent, browser-based platform.
          </p>
        </div>
        <div class="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <article class="rounded-2xl border border-border bg-surface p-5">
            <h3 class="font-bold text-foreground">Structured study</h3>
            <p class="mt-2 text-sm leading-6 text-muted-foreground">Explore level-based vocabulary, lessons, grammar patterns, and dialogue practice.</p>
          </article>
          <article class="rounded-2xl border border-border bg-surface p-5">
            <h3 class="font-bold text-foreground">Active practice</h3>
            <p class="mt-2 text-sm leading-6 text-muted-foreground">Listen to example pronunciation, review concepts, and test your understanding.</p>
          </article>
          <article class="rounded-2xl border border-border bg-surface p-5">
            <h3 class="font-bold text-foreground">Character writing</h3>
            <p class="mt-2 text-sm leading-6 text-muted-foreground">Use stroke animations and a writing canvas to practice Chinese characters.</p>
          </article>
          <article class="rounded-2xl border border-border bg-surface p-5">
            <h3 class="font-bold text-foreground">Self-assessment</h3>
            <p class="mt-2 text-sm leading-6 text-muted-foreground">Try practice tests and use the score calculator as a study aid, not official exam results.</p>
          </article>
        </div>
        <p class="mt-6 text-center text-xs text-muted-foreground">
          HSK Plus is independent and is not affiliated with or endorsed by the official HSK exam provider.
        </p>
      </div>
    </section>

    <!-- HSK Level Gateways -->
    <section id="levels" class="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div class="text-center mb-12">
        <UiBadge variant="secondary">Curriculum Gateways</UiBadge>
        <h2 class="mt-3 text-3xl font-extrabold sm:text-4xl text-foreground">Choose Your HSK Level</h2>
        <p class="mt-2 text-muted-foreground max-w-xl mx-auto">
          Explore each level’s available resources. Counts and coursebook alignment are shown clearly so you know what is ready to study.
        </p>
      </div>

      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <!-- HSK 1 Gate Card -->
        <div class="relative overflow-hidden rounded-3xl border-2 bg-surface p-8 shadow-md transition-all hover:shadow-xl" :style="{ borderColor: 'color-mix(in srgb, var(--hsk1-accent) 32%, transparent)' }">
          <div class="flex items-center justify-between">
            <span class="flex size-14 items-center justify-center rounded-2xl text-2xl font-bold" :style="{ color: 'var(--hsk1-accent)', backgroundColor: 'color-mix(in srgb, var(--hsk1-accent) 12%, transparent)' }">
              1级
            </span>
            <UiBadge variant="primary">Beginner</UiBadge>
          </div>

          <h3 class="mt-6 text-2xl font-black text-foreground">HSK Level 1 Portal</h3>
          <p class="mt-2 text-sm text-muted-foreground leading-relaxed">
            Designed for learners with no prior Chinese knowledge. Master basic greetings, numbers, family members, food, shopping, and everyday questions.
          </p>

          <ul class="mt-6 space-y-2 text-sm text-muted-foreground">
            <li class="flex items-center gap-2">✓ <strong>{{ levelStats[1].vocabulary }} Vocabulary Entries:</strong> With pinyin, English, and audio.</li>
            <li class="flex items-center gap-2">✓ <strong>{{ levelStats[1].lessons }} Lessons:</strong> Following the HSK Standard Course 1 sequence.</li>
            <li class="flex items-center gap-2">✓ <strong>{{ levelStats[1].patterns }} Grammar Topics:</strong> Original explanations and examples.</li>
            <li class="flex items-center gap-2">✓ <strong>{{ levelStats[1].dialogues }} Dialogue Scenarios:</strong> With line-by-line audio practice.</li>
            <li class="flex items-center gap-2">✓ <strong>{{ levelStats[1].tests }} Practice Tests:</strong> For independent self-assessment.</li>
          </ul>

          <div class="mt-8 pt-6 border-t border-border flex flex-wrap gap-2">
            <RouterLink to="/hsk1" class="flex-1">
              <UiButton class="w-full">
                Enter HSK 1 Portal →
              </UiButton>
            </RouterLink>
            <RouterLink to="/hsk1/practice">
              <UiButton variant="outline">
                Writing Lab
              </UiButton>
            </RouterLink>
          </div>
        </div>

        <!-- HSK 2 Gate Card -->
        <div class="relative overflow-hidden rounded-3xl border-2 bg-surface p-8 shadow-md transition-all hover:shadow-xl" :style="{ borderColor: 'color-mix(in srgb, var(--hsk2-accent) 32%, transparent)' }">
          <div class="flex items-center justify-between">
            <span class="flex size-14 items-center justify-center rounded-2xl text-2xl font-bold" :style="{ color: 'var(--hsk2-accent)', backgroundColor: 'color-mix(in srgb, var(--hsk2-accent) 12%, transparent)' }">
              2级
            </span>
            <UiBadge variant="secondary">Elementary</UiBadge>
          </div>

          <h3 class="mt-6 text-2xl font-black text-foreground">HSK Level 2 Portal</h3>
          <p class="mt-2 text-sm text-muted-foreground leading-relaxed">
            Build elementary Mandarin skills through routines, shopping, travel, comparisons, everyday questions, and describing ongoing or past actions.
          </p>

          <ul class="mt-6 space-y-2 text-sm text-muted-foreground">
            <li class="flex items-center gap-2">✓ <strong>{{ levelStats[2].vocabulary }} Vocabulary Entries:</strong> With pinyin, English, and audio.</li>
            <li class="flex items-center gap-2">✓ <strong>{{ levelStats[2].lessons }} Lessons:</strong> Following the HSK Standard Course 2 sequence.</li>
            <li class="flex items-center gap-2">✓ <strong>{{ levelStats[2].patterns }} Grammar Topics:</strong> Original explanations and examples.</li>
            <li class="flex items-center gap-2">✓ <strong>{{ levelStats[2].dialogues }} Dialogue Scenarios:</strong> With line-by-line audio practice.</li>
            <li class="flex items-center gap-2">✓ <strong>{{ levelStats[2].tests }} Practice Tests:</strong> For independent self-assessment.</li>
          </ul>

          <div class="mt-8 pt-6 border-t border-border flex flex-wrap gap-2">
            <RouterLink to="/hsk2" class="flex-1">
              <UiButton class="w-full">
                Enter HSK 2 Portal →
              </UiButton>
            </RouterLink>
          </div>
        </div>

        <div class="relative overflow-hidden rounded-3xl border-2 bg-surface p-8 shadow-md transition-all hover:shadow-xl" :style="{ borderColor: 'color-mix(in srgb, var(--hsk3-accent) 32%, transparent)' }">
          <div class="flex items-center justify-between">
            <span class="flex size-14 items-center justify-center rounded-2xl text-2xl font-bold" :style="{ color: 'var(--hsk3-accent)', backgroundColor: 'color-mix(in srgb, var(--hsk3-accent) 12%, transparent)' }">
              3级
            </span>
            <UiBadge variant="primary">Intermediate</UiBadge>
          </div>

          <h3 class="mt-6 text-2xl font-black text-foreground">HSK Level 3 Portal</h3>
          <p class="mt-2 text-sm text-muted-foreground leading-relaxed">
            Continue into intermediate Mandarin with the complete chapter sequence and grammar coverage from HSK Standard Course 3, full audio dialogues, and timed exams.
          </p>

          <ul class="mt-6 space-y-2 text-sm text-muted-foreground">
            <li class="flex items-center gap-2">✓ <strong>{{ levelStats[3].vocabulary }} Vocabulary Entries:</strong> With pinyin, stroke count, English, and audio.</li>
            <li class="flex items-center gap-2">✓ <strong>{{ levelStats[3].lessons }} Lessons:</strong> Following the HSK Standard Course 3 sequence.</li>
            <li class="flex items-center gap-2">✓ <strong>{{ levelStats[3].patterns }} Grammar Topics:</strong> Comprehensive intermediate explanations.</li>
            <li class="flex items-center gap-2">✓ <strong>{{ levelStats[3].dialogues }} Dialogue Scenarios:</strong> Situational dialogues with speech audio.</li>
            <li class="flex items-center gap-2">✓ <strong>{{ levelStats[3].tests }} Practice Tests:</strong> Listening, reading, and writing mock exams.</li>
          </ul>

          <div class="mt-8 pt-6 border-t border-border flex flex-wrap gap-2">
            <RouterLink to="/hsk3" class="flex-1">
              <UiButton class="w-full">Enter HSK 3 Portal →</UiButton>
            </RouterLink>
            <RouterLink to="/hsk3/practice">
              <UiButton variant="outline">Writing Lab</UiButton>
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- AdSense Mid Banner -->
    <div class="mx-auto max-w-6xl px-4 py-2">
      <CompAdSense format="in-article" slot-id="home-mid-banner" />
    </div>

    <!-- Interactive Tools Highlight Section -->
    <section class="border-t border-border bg-surface-raised py-16 px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-6xl">
        <div class="text-center mb-12">
          <UiBadge variant="outline">HSK Plus Features</UiBadge>
          <h2 class="mt-3 text-3xl font-extrabold sm:text-4xl text-foreground">
            Built for Real Language Mastery
          </h2>
          <p class="mt-2 text-muted-foreground max-w-xl mx-auto">
            Experience modern web-based language tools designed to build permanent muscle memory and test confidence.
          </p>
        </div>

        <div class="grid gap-6 md:grid-cols-3">
          <!-- Tool 1: Hanzi Studio -->
          <div class="rounded-2xl border border-border bg-surface p-6 shadow-sm">
            <div class="flex size-12 items-center justify-center rounded-xl bg-rose-500/10 text-2xl">
              ✍️
            </div>
            <h3 class="mt-4 text-xl font-bold">Hanzi Stroke Lab & AI Scoring</h3>
            <p class="mt-2 text-sm text-muted-foreground leading-relaxed">
              Watch animated stroke order sequences, take interactive stroke quizzes, and write freehand on traditional Tian Zi Ge calligraphy paper with algorithmic scoring.
            </p>
            <RouterLink to="/hsk1/practice" class="mt-4 inline-block text-xs font-bold text-primary hover:underline">
              Launch Hanzi Lab →
            </RouterLink>
          </div>

          <!-- Tool 2: Timed Mock Tests -->
          <div class="rounded-2xl border border-border bg-surface p-6 shadow-sm">
            <div class="flex size-12 items-center justify-center rounded-xl bg-blue-500/10 text-2xl">
              ⏱️
            </div>
            <h3 class="mt-4 text-xl font-bold">{{ totals.tests }} Practice Tests</h3>
            <p class="mt-2 text-sm text-muted-foreground leading-relaxed">
              Practice with listening, reading, and writing-style questions, then review explanations. These are study aids and are not official exam papers.
            </p>
            <RouterLink to="/mock-tests" class="mt-4 inline-block text-xs font-bold text-primary hover:underline">
              Browse All Practice Tests →
            </RouterLink>
          </div>

          <!-- Tool 3: Score Calculator -->
          <div class="rounded-2xl border border-border bg-surface p-6 shadow-sm">
            <div class="flex size-12 items-center justify-center rounded-xl bg-emerald-500/10 text-2xl">
              🧮
            </div>
            <h3 class="mt-4 text-xl font-bold">HSK Score Calculator</h3>
            <p class="mt-2 text-sm text-muted-foreground leading-relaxed">
              Estimate practice scores and use the result to guide your study. It does not predict official results, admissions, or scholarship eligibility.
            </p>
            <RouterLink to="/score-calculator" class="mt-4 inline-block text-xs font-bold text-primary hover:underline">
              Open Score Calculator →
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Platform Comparison Table Section -->
    <section id="comparison" class="border-t border-border bg-surface py-16 px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-6xl">
        <CompComparisonTable />
      </div>
    </section>

    <section id="faqs" class="border-t border-border bg-background py-16 px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-4xl">
        <div class="text-center">
          <UiBadge variant="secondary">Helpful answers</UiBadge>
          <h2 class="mt-3 text-3xl font-extrabold text-foreground sm:text-4xl">Frequently Asked Questions</h2>
        </div>
        <div class="mt-8 space-y-3">
          <details
            v-for="faq in faqs"
            :key="faq.question"
            class="group rounded-xl border border-border bg-background p-5"
          >
            <summary class="cursor-pointer list-none pr-6 font-semibold text-foreground marker:hidden">
              {{ faq.question }}
            </summary>
            <p class="mt-3 text-sm leading-6 text-muted-foreground">{{ faq.answer }}</p>
          </details>
        </div>
      </div>
    </section>

    <!-- AdSense Pre-Blog Banner -->
    <div class="mx-auto max-w-6xl px-4 py-2">
      <CompAdSense format="banner" slot-id="home-pre-blogs" />
    </div>

    <!-- Featured In-Depth Blogs Section -->
    <section class="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div class="flex flex-wrap items-end justify-between gap-4 mb-10">
        <div>
          <UiBadge variant="secondary">Educational Blog</UiBadge>
          <h2 class="mt-2 text-3xl font-extrabold sm:text-4xl text-foreground">
            Featured In-Depth Guides (1,000+ Words)
          </h2>
          <p class="mt-1 text-sm text-muted-foreground">
            Expert pedagogical articles covering grammar, tones, exam tactics, and character memorization.
          </p>
        </div>
        <RouterLink to="/blogs">
          <UiButton variant="outline" size="sm">
            View All 20 Articles →
          </UiButton>
        </RouterLink>
      </div>

      <div class="grid gap-6 md:grid-cols-2">
        <article
          v-for="b in featuredBlogs"
          :key="b.slug"
          class="group rounded-2xl border border-border bg-surface p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
        >
          <RouterLink :to="`/blogs/${b.slug}`" class="mb-4 block overflow-hidden rounded-xl">
            <img
              :src="b.imageUrl"
              :alt="b.imageAlt"
              width="600"
              height="338"
              class="aspect-[16/9] w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              loading="lazy"
              decoding="async"
            />
          </RouterLink>
          <div class="flex items-center justify-between">
            <UiBadge variant="secondary">{{ b.category }}</UiBadge>
            <span class="text-xs text-muted-foreground">{{ b.readTime }} · {{ b.wordCount }} words</span>
          </div>

          <h3 class="mt-3 text-lg font-bold text-foreground group-hover:text-primary transition-colors">
            <RouterLink :to="`/blogs/${b.slug}`">
              {{ b.title }}
            </RouterLink>
          </h3>

          <p class="mt-2 text-xs text-muted-foreground line-clamp-2 leading-relaxed">
            {{ b.excerpt }}
          </p>

          <div class="mt-4 pt-3 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
            <span>By {{ b.author }}</span>
            <RouterLink :to="`/blogs/${b.slug}`" class="font-bold text-primary hover:underline">
              Read Guide →
            </RouterLink>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>
