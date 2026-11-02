<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="min-h-screen bg-background text-foreground">
    <header class="border-b border-border bg-surface py-12 px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-4xl">
        <div class="flex items-center gap-2 text-sm">
          <RouterLink to="/" class="font-medium text-primary hover:underline">← Home</RouterLink>
          <span class="text-muted-foreground">/</span>
          <span class="text-muted-foreground">Legal</span>
        </div>
        <h1 class="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
          Terms of Service
        </h1>
        <p class="mt-2 text-sm text-muted-foreground">
          Last revised: October 2026 · Standard Terms of Educational Use
        </p>
      </div>
    </header>

    <main class="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8 space-y-8 text-sm sm:text-base leading-relaxed text-muted-foreground">
      <section>
        <h2 class="text-xl font-bold text-foreground">1. Acceptance of Terms</h2>
        <p class="mt-2">
          By accessing and utilizing <strong>HSK Plus</strong> ("the Platform"), you acknowledge and agree to comply with these Terms of Service. If you do not agree with any of these provisions, you should refrain from using the platform.
        </p>
      </section>

      <section>
        <h2 class="text-xl font-bold text-foreground">2. Educational & Informational Purpose</h2>
        <p class="mt-2">
          HSK Plus is an independent, free educational resource platform created to assist students in self-study and preparation for the Chinese Hanyu Shuiping Kaoshi (HSK). HSK Plus is not formally affiliated with, endorsed by, or operated by the Ministry of Education of the PRC, Hanban, or Chinese Testing International (CTI). Official registration for examinations must be completed through official testing channels (chinesetest.cn).
        </p>
      </section>

      <section>
        <h2 class="text-xl font-bold text-foreground">3. Intellectual Property Rights</h2>
        <p class="mt-2">
          The code, interactive tools, scoring algorithms, blog articles, and visual design assets on HSK Plus are the intellectual property of HSK Plus and its contributors. Users are granted a revocable, non-exclusive license to use the content for personal, non-commercial educational purposes. Automated scraping, redistribution, or commercial reselling of materials without written permission is prohibited.
        </p>
      </section>

      <section>
        <h2 class="text-xl font-bold text-foreground">4. Score Calculator & Mock Test Disclaimers</h2>
        <p class="mt-2">
          Scores calculated through our Mock Tests and Score Calculator are simulations intended for diagnostic preparation and self-evaluation. Actual examination conditions, scoring curves, and official passing outcomes remain within the sole discretion of Chinese Testing International.
        </p>
      </section>

      <section>
        <h2 class="text-xl font-bold text-foreground">5. Modifications to the Service</h2>
        <p class="mt-2">
          We reserve the right to expand, modify, update, or discontinue features of the platform at any time without prior liability, as we continuously enhance our curriculum, tools, and learning materials.
        </p>
      </section>

      <section>
        <h2 class="text-xl font-bold text-foreground">6. Contact Inquiries</h2>
        <p class="mt-2">
          For any licensing, academic collaboration, or terms inquiries, please reach out to <a href="mailto:legal@desihop.net" class="text-primary hover:underline font-semibold">legal@desihop.net</a>.
        </p>
      </section>
    </main>
  </div>
</template>
