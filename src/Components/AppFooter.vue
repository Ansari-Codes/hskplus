<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <footer class="border-t border-border bg-surface text-foreground transition-colors">
    <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      
      <!-- Top 5-Column Grid -->
      <div class="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
        
        <!-- Col 1: Brand & Bio (Spans 2 cols on mobile) -->
        <div class="col-span-2 md:col-span-3 lg:col-span-1 space-y-4">
          <RouterLink to="/" aria-label="HSK+ Free Learning Academy" class="inline-flex items-center gap-2.5 font-black tracking-tight text-xl group">
            <img src="/hskplus-logo.png" alt="HSK Plus logo" class="size-9 rounded-2xl shadow-sm transition-transform group-hover:scale-105" width="36" height="36" />
            <div class="leading-tight">
              <div class="flex items-center gap-1.5">
                <span class="text-xl font-black tracking-tight">HSK<span class="text-primary font-black">+</span></span>
                <span class="rounded bg-primary/10 px-1.5 py-0.5 text-[10px] font-bold text-primary">汉语</span>
              </div>
              <span class="block text-[10px] font-medium text-muted-foreground uppercase tracking-wider">Free Learning Academy</span>
            </div>
          </RouterLink>
          <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            The free, comprehensive Chinese learning encyclopedia. Master 600 official vocabulary words with native pronunciation, standard textbook lessons, animated character strokes, and 33 authentic timed mock exams.
          </p>
          <div class="flex flex-col gap-2 pt-1 text-xs text-muted-foreground">
            <div class="flex items-center gap-2">
              <span class="inline-block size-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>PWA Offline Ready & 100% Free Forever</span>
            </div>
            <div class="flex items-center gap-2 text-[11px]">
              <span>📱 Local Progress Tracking & Zero Paywalls</span>
            </div>
          </div>
        </div>

        <!-- Col 2: Curriculum Levels -->
        <div>
          <h2 class="text-xs font-bold uppercase tracking-wider text-muted-foreground">Curriculum Hubs</h2>
          <ul class="mt-4 space-y-2.5 text-xs sm:text-sm">
            <li>
              <RouterLink to="/hsk1" class="text-muted-foreground hover:text-primary transition-colors">HSK 1 Portal (150 Words)</RouterLink>
            </li>
            <li>
              <RouterLink to="/hsk1/vocabulary" class="text-muted-foreground hover:text-primary transition-colors">HSK 1 Vocabulary</RouterLink>
            </li>
            <li>
              <RouterLink to="/hsk1/lessons" class="text-muted-foreground hover:text-primary transition-colors">HSK 1 Standard Lessons</RouterLink>
            </li>
            <li>
              <RouterLink to="/hsk1/sentences" class="text-muted-foreground hover:text-primary transition-colors">HSK 1 Sentence Patterns</RouterLink>
            </li>
            <li>
              <RouterLink to="/hsk2" class="text-muted-foreground hover:text-primary transition-colors">HSK 2 Portal (300 Words)</RouterLink>
            </li>
            <li>
              <RouterLink to="/hsk2/vocabulary" class="text-muted-foreground hover:text-primary transition-colors">HSK 2 Vocabulary</RouterLink>
            </li>
            <li>
              <RouterLink to="/hsk2/lessons" class="text-muted-foreground hover:text-primary transition-colors">HSK 2 Standard Lessons</RouterLink>
            </li>
            <li>
              <RouterLink to="/hsk3" class="text-muted-foreground hover:text-primary transition-colors">HSK 3 Portal (600 Words)</RouterLink>
            </li>
            <li>
              <RouterLink to="/hsk3/vocabulary" class="text-muted-foreground hover:text-primary transition-colors">HSK 3 Vocabulary</RouterLink>
            </li>
            <li>
              <RouterLink to="/hsk3/lessons" class="text-muted-foreground hover:text-primary transition-colors">HSK 3 Standard Lessons</RouterLink>
            </li>
          </ul>
        </div>

        <!-- Col 3: Practice & Tools -->
        <div>
          <h2 class="text-xs font-bold uppercase tracking-wider text-muted-foreground">Practice & Tools</h2>
          <ul class="mt-4 space-y-2.5 text-xs sm:text-sm">
            <li>
              <RouterLink to="/mock-tests" class="text-muted-foreground hover:text-primary transition-colors">33 Timed Mock Exams</RouterLink>
            </li>
            <li>
              <RouterLink to="/hsk1/practice" class="text-muted-foreground hover:text-primary transition-colors">Hanzi Stroke Writing Studio</RouterLink>
            </li>
            <li>
              <RouterLink to="/pinyin" class="text-muted-foreground hover:text-primary transition-colors">Pinyin Soundboard & Tones</RouterLink>
            </li>
            <li>
              <RouterLink to="/radicals" class="text-muted-foreground hover:text-primary transition-colors">Chinese Radicals (部首) Lab</RouterLink>
            </li>
            <li>
              <RouterLink to="/score-calculator" class="text-muted-foreground hover:text-primary transition-colors">HSK Score Calculator</RouterLink>
            </li>
            <li>
              <RouterLink to="/downloads" class="text-muted-foreground hover:text-primary transition-colors">Official Course Downloads</RouterLink>
            </li>
            <li>
              <RouterLink to="/hsk-intro" class="text-muted-foreground hover:text-primary transition-colors">15-Minute Starter Lesson</RouterLink>
            </li>
            <li>
              <RouterLink to="/english-speakers-guide" class="text-muted-foreground hover:text-primary transition-colors">HSK for English Speakers</RouterLink>
            </li>
          </ul>
        </div>

        <!-- Col 4: Confusing Words & Grammar -->
        <div>
          <h2 class="text-xs font-bold uppercase tracking-wider text-muted-foreground">Confusing Words</h2>
          <ul class="mt-4 space-y-2.5 text-xs sm:text-sm">
            <li>
              <RouterLink to="/compare" class="text-muted-foreground hover:text-primary transition-colors font-medium">All 15 Comparison Guides →</RouterLink>
            </li>
            <li>
              <RouterLink to="/compare/bu-vs-mei" class="text-muted-foreground hover:text-primary transition-colors">不 (bù) vs 没 (méi)</RouterLink>
            </li>
            <li>
              <RouterLink to="/compare/er-vs-liang" class="text-muted-foreground hover:text-primary transition-colors">二 (èr) vs 两 (liǎng)</RouterLink>
            </li>
            <li>
              <RouterLink to="/compare/de-de-de" class="text-muted-foreground hover:text-primary transition-colors">的 vs 得 vs 地 Rules</RouterLink>
            </li>
            <li>
              <RouterLink to="/compare/hui-vs-neng-vs-keyi" class="text-muted-foreground hover:text-primary transition-colors">会 vs 能 vs 可以</RouterLink>
            </li>
            <li>
              <RouterLink to="/compare/kan-vs-jian-vs-kanjian" class="text-muted-foreground hover:text-primary transition-colors">看 vs 见 vs 看见</RouterLink>
            </li>
            <li>
              <RouterLink to="/compare/zhidao-vs-renshi" class="text-muted-foreground hover:text-primary transition-colors">知道 vs 认识</RouterLink>
            </li>
            <li>
              <RouterLink to="/compare/xiang-vs-yao" class="text-muted-foreground hover:text-primary transition-colors">想 vs 要 (Want/Would like)</RouterLink>
            </li>
          </ul>
        </div>

        <!-- Col 5: Guides & Policies -->
        <div>
          <h2 class="text-xs font-bold uppercase tracking-wider text-muted-foreground">Masterclasses & Info</h2>
          <ul class="mt-4 space-y-2.5 text-xs sm:text-sm">
            <li>
              <RouterLink to="/blogs" class="text-muted-foreground hover:text-primary transition-colors font-medium">All 24 Masterclasses →</RouterLink>
            </li>
            <li>
              <RouterLink to="/blogs/mandarin-writing-system" class="text-muted-foreground hover:text-primary transition-colors">History of Chinese Script</RouterLink>
            </li>
            <li>
              <RouterLink to="/blogs/rules-of-chinese-stroke-order" class="text-muted-foreground hover:text-primary transition-colors">7 Rules of Stroke Order</RouterLink>
            </li>
            <li>
              <RouterLink to="/blogs/evolution-of-hsk-3-standard" class="text-muted-foreground hover:text-primary transition-colors">HSK 2.0 vs 3.0 Standard</RouterLink>
            </li>
            <li>
              <RouterLink to="/about" class="text-muted-foreground hover:text-primary transition-colors">About HSK Plus</RouterLink>
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

      <!-- Bottom Bar -->
      <div class="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <p>© 2026 HSK Plus (desihop.net). Free open education for Chinese language learners worldwide.</p>
        <p>Aligned with BLCUP Standard Course & official Hanban guidelines.</p>
      </div>
    </div>
  </footer>
</template>
