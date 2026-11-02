<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <footer class="border-t border-border bg-surface text-foreground">
    <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div class="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
        <!-- Col 1: Brand & Bio -->
        <div class="col-span-2">
          <RouterLink to="/" aria-label="HSK+ Free Learning Platform" class="inline-flex items-center gap-2.5 font-black tracking-tight text-xl group">
            <img src="/hskplus-logo.png" alt="HSK Plus logo" class="size-9 rounded-2xl shadow-sm transition-transform group-hover:scale-105" width="36" height="36" />
            <div class="leading-tight">
              <div class="flex items-center gap-1.5">
                <span class="text-xl font-black tracking-tight">HSK<span class="text-primary font-black">+</span></span>
                <span class="rounded bg-primary/10 px-1.5 py-0.2 text-[10px] font-bold text-primary">汉语</span>
              </div>
              <span class="block text-[10px] font-medium text-muted-foreground uppercase tracking-wider">Free Learning Platform</span>
            </div>
          </RouterLink>
          <p class="mt-4 max-w-sm text-sm text-muted-foreground leading-relaxed">
            Free Mandarin Chinese learning resources for HSK vocabulary, lessons, grammar, writing practice, and mock tests.
          </p>
          <div class="mt-6 flex items-center gap-3 text-xs text-muted-foreground">
            <span class="inline-block size-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>HSK 1, 2, and 3 resources follow their Standard Course sequences</span>
          </div>
        </div>

        <!-- Col 2: HSK Levels -->
        <div>
          <h2 class="text-xs font-bold uppercase tracking-wider text-muted-foreground">HSK Study Resources</h2>
          <ul class="mt-4 space-y-2.5 text-sm">
            <li>
              <RouterLink to="/hsk1" class="text-muted-foreground hover:text-primary transition-colors">HSK 1 Study Hub</RouterLink>
            </li>
            <li>
              <RouterLink to="/hsk1/sentences" class="text-muted-foreground hover:text-primary transition-colors">HSK 1 Sentence Patterns</RouterLink>
            </li>
            <li>
              <RouterLink to="/hsk1/dialogs" class="text-muted-foreground hover:text-primary transition-colors">HSK 1 Dialogue Practice</RouterLink>
            </li>
            <li>
              <RouterLink to="/hsk1/tests" class="text-muted-foreground hover:text-primary transition-colors">HSK 1 Mock Tests</RouterLink>
            </li>
            <li>
              <RouterLink to="/hsk2" class="text-muted-foreground hover:text-primary transition-colors">HSK 2 Study Hub</RouterLink>
            </li>
            <li>
              <RouterLink to="/hsk2/vocabulary" class="text-muted-foreground hover:text-primary transition-colors">HSK 2 Vocabulary</RouterLink>
            </li>
            <li>
              <RouterLink to="/hsk2/lessons" class="text-muted-foreground hover:text-primary transition-colors">HSK 2 Lessons</RouterLink>
            </li>
            <li>
              <RouterLink to="/hsk2/sentences" class="text-muted-foreground hover:text-primary transition-colors">HSK 2 Sentence Patterns</RouterLink>
            </li>
            <li>
              <RouterLink to="/hsk2/dialogs" class="text-muted-foreground hover:text-primary transition-colors">HSK 2 Dialogue Practice</RouterLink>
            </li>
            <li>
              <RouterLink to="/hsk2/tests" class="text-muted-foreground hover:text-primary transition-colors">HSK 2 Mock Tests</RouterLink>
            </li>
            <li>
              <RouterLink to="/hsk3" class="text-muted-foreground hover:text-primary transition-colors">HSK 3 Study Hub</RouterLink>
            </li>
            <li>
              <RouterLink to="/hsk3/vocabulary" class="text-muted-foreground hover:text-primary transition-colors">HSK 3 Vocabulary</RouterLink>
            </li>
            <li>
              <RouterLink to="/hsk3/lessons" class="text-muted-foreground hover:text-primary transition-colors">HSK 3 Lessons</RouterLink>
            </li>
            <li>
              <RouterLink to="/hsk3/sentences" class="text-muted-foreground hover:text-primary transition-colors">HSK 3 Sentence Patterns</RouterLink>
            </li>
            <li>
              <RouterLink to="/hsk3/dialogs" class="text-muted-foreground hover:text-primary transition-colors">HSK 3 Dialogue Practice</RouterLink>
            </li>
            <li>
              <RouterLink to="/hsk3/tests" class="text-muted-foreground hover:text-primary transition-colors">HSK 3 Mock Tests</RouterLink>
            </li>
          </ul>
        </div>

        <!-- Col 3: Modules & Labs -->
        <div>
          <h2 class="text-xs font-bold uppercase tracking-wider text-muted-foreground">Practice Tools and Guides</h2>
          <ul class="mt-4 space-y-2.5 text-sm">
            <li>
              <RouterLink to="/hsk1/practice" class="text-muted-foreground hover:text-primary transition-colors">Chinese Character Writing Practice</RouterLink>
            </li>
            <li>
              <RouterLink to="/mock-tests" class="text-muted-foreground hover:text-primary transition-colors">HSK 1, 2, and 3 Mock Tests</RouterLink>
            </li>
            <li>
              <RouterLink to="/score-calculator" class="text-muted-foreground hover:text-primary transition-colors">HSK Score Calculator</RouterLink>
            </li>
            <li>
              <RouterLink to="/blogs" class="text-muted-foreground hover:text-primary transition-colors">Chinese Learning Articles and Study Tips</RouterLink>
            </li>
            <li>
              <RouterLink to="/downloads" class="text-muted-foreground hover:text-primary transition-colors">Official Textbook & Audio Downloads</RouterLink>
            </li>
          </ul>
        </div>

        <!-- Col 4: Legal & SEO -->
        <div>
          <h2 class="text-xs font-bold uppercase tracking-wider text-muted-foreground">About and Policies</h2>
          <ul class="mt-4 space-y-2.5 text-sm">
            <li>
              <RouterLink to="/about" class="text-muted-foreground hover:text-primary transition-colors">About Us</RouterLink>
            </li>
            <li>
              <RouterLink to="/contact" class="text-muted-foreground hover:text-primary transition-colors">Contact Support</RouterLink>
            </li>
            <li>
              <RouterLink to="/privacy-policy" class="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</RouterLink>
            </li>
            <li>
              <RouterLink to="/terms-of-service" class="text-muted-foreground hover:text-primary transition-colors">Terms of Service</RouterLink>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <p>© 2026 HSK Plus. All rights reserved. Free educational platform.</p>
        <p>Independent platform for Mandarin language learners worldwide.</p>
      </div>
    </div>
  </footer>
</template>
