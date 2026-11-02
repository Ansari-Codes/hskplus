<script setup lang="ts">
import { RouterLink } from 'vue-router'
import CompDownloadMaterials from '../../Components/CompDownloadMaterials.vue'
import CompAdSense from '../../Components/CompAdSense.vue'
import { UiButton } from '../../Ui'
import { GITHUB_REPO_RELEASES_URL } from '../../Data/downloadMaterialsData'
</script>

<template>
  <div class="min-h-screen bg-background text-foreground pb-20">
    <!-- Hero Header -->
    <header class="border-b border-border bg-surface py-12 px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-6xl">
        <div class="flex items-center gap-2 text-xs font-semibold text-muted-foreground mb-3">
          <RouterLink to="/" class="hover:text-primary transition-colors">Home</RouterLink>
          <span>/</span>
          <span class="text-foreground">Official Downloads</span>
        </div>

        <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <h1 class="text-3xl sm:text-5xl font-black tracking-tight text-foreground">
              Standard Learning Materials & Downloads
            </h1>
            <p class="mt-3 max-w-2xl text-sm sm:text-base text-muted-foreground leading-relaxed">
              Download the authentic BLCUP textbooks, Hanban official vocabulary checklists, and complete mock exam audio packages used to construct the HSK Plus online encyclopedia. Free for personal study and offline practice.
            </p>
          </div>

          <div class="flex items-center gap-3 shrink-0">
            <a
              :href="GITHUB_REPO_RELEASES_URL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <UiButton variant="primary" class="font-bold shadow-xs flex items-center gap-2">
                <svg class="size-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                <span>Browse GitHub Releases</span>
              </UiButton>
            </a>
          </div>
        </div>
      </div>
    </header>

    <!-- Top Ad Placement -->
    <div class="mx-auto max-w-6xl px-4 pt-6">
      <CompAdSense format="banner" slot-id="downloads-top" />
    </div>

    <!-- Main Content Container -->
    <main class="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <CompDownloadMaterials level="all" :show-heading="false" />

      <!-- Mid-Page Ad Placement -->
      <div class="my-8">
        <CompAdSense format="in-article" slot-id="downloads-mid" />
      </div>

      <!-- Offline Study FAQ & Guide -->
      <section class="mt-12 rounded-3xl border border-border bg-surface p-8 shadow-xs">
        <h2 class="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
          📖 How to Pair These Downloads with HSK Plus Interactive Tools
        </h2>
        
        <div class="mt-6 grid gap-6 md:grid-cols-3">
          <div class="rounded-2xl border border-border/80 bg-background/50 p-5">
            <div class="text-2xl mb-2">1️⃣</div>
            <h3 class="font-bold text-foreground">Read Lesson Texts in PDF</h3>
            <p class="mt-1 text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Review the original textbook readings, dialogues, and notes in the authentic BLCUP Standard Course PDFs to build context and vocabulary familiarity.
            </p>
          </div>

          <div class="rounded-2xl border border-border/80 bg-background/50 p-5">
            <div class="text-2xl mb-2">2️⃣</div>
            <h3 class="font-bold text-foreground">Drill Interactive Modules</h3>
            <p class="mt-1 text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Use our online Hanzi Writing Studio, audio speech engine, and dialogue scenarios to master character stroke stroke orders and pronunciation.
            </p>
          </div>

          <div class="rounded-2xl border border-border/80 bg-background/50 p-5">
            <div class="text-2xl mb-2">3️⃣</div>
            <h3 class="font-bold text-foreground">Simulate Under Clock</h3>
            <p class="mt-1 text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Take our timed online mock exams or print the downloaded test bundles to practice with realistic Hanban pacing before your official test date.
            </p>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
