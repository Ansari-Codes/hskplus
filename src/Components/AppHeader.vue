<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()
const isMobileMenuOpen = ref(false)
const isDarkMode = ref(false)

// Dropdown states
const isLevelsMenuOpen = ref(false)
const isToolsMenuOpen = ref(false)

let closeTimeout: ReturnType<typeof setTimeout> | null = null

function openLevels() {
  if (closeTimeout) clearTimeout(closeTimeout)
  isLevelsMenuOpen.value = true
  isToolsMenuOpen.value = false
}

function openTools() {
  if (closeTimeout) clearTimeout(closeTimeout)
  isToolsMenuOpen.value = true
  isLevelsMenuOpen.value = false
}

function scheduleClose() {
  closeTimeout = setTimeout(() => {
    isLevelsMenuOpen.value = false
    isToolsMenuOpen.value = false
  }, 180)
}

function keepOpen() {
  if (closeTimeout) clearTimeout(closeTimeout)
}

function toggleTheme() {
  isDarkMode.value = !isDarkMode.value
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('hskplus-theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('hskplus-theme', 'light')
  }
}

function closeAllMenus() {
  if (closeTimeout) clearTimeout(closeTimeout)
  isMobileMenuOpen.value = false
  isLevelsMenuOpen.value = false
  isToolsMenuOpen.value = false
}

function handleKeyDown(e: KeyboardEvent) {
  if (e.key === 'Escape') {
    closeAllMenus()
  }
}

function handleDocumentClick(e: MouseEvent) {
  const target = e.target as HTMLElement | null
  if (!target?.closest('.dropdown-container')) {
    isLevelsMenuOpen.value = false
    isToolsMenuOpen.value = false
  }
}

onMounted(() => {
  const saved = localStorage.getItem('hskplus-theme')
  if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    isDarkMode.value = true
    document.documentElement.classList.add('dark')
  }
  document.addEventListener('click', handleDocumentClick)
  document.addEventListener('keydown', handleKeyDown)
})

onBeforeUnmount(() => {
  if (closeTimeout) clearTimeout(closeTimeout)
  document.removeEventListener('click', handleDocumentClick)
  document.removeEventListener('keydown', handleKeyDown)
})
</script>

<template>
  <header class="sticky top-0 z-50 w-full border-b border-border/70 bg-surface/85 backdrop-blur-md transition-colors">
    <div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
      
      <!-- Brand Logo & Name: Minimal, Crisp & Uncluttered -->
      <RouterLink
        to="/"
        aria-label="HSK+ Chinese Learning Platform"
        class="group flex items-center gap-2.5 text-foreground transition-opacity hover:opacity-90"
        @click="closeAllMenus"
      >
        <img
          src="/hskplus-logo.png"
          alt="HSK Plus logo"
          class="size-8.5 rounded-xl shadow-xs transition-transform duration-200 group-hover:scale-105"
          width="34"
          height="34"
        />
        <div class="flex items-center tracking-tight">
          <span class="text-xl font-black">HSK<span class="text-primary font-black">+</span></span>
        </div>
      </RouterLink>

      <!-- Center Desktop Navigation -->
      <nav aria-label="Main navigation" class="hidden md:flex items-center gap-1 lg:gap-1.5 text-sm font-medium text-muted-foreground">
        
        <!-- Dropdown 1: HSK Levels -->
        <div
          class="relative dropdown-container"
          @mouseenter="openLevels"
          @mouseleave="scheduleClose"
        >
          <button
            type="button"
            class="flex items-center gap-1 rounded-lg px-3 py-1.5 text-sm transition-colors cursor-pointer hover:bg-muted hover:text-foreground"
            :class="{
              'bg-muted/80 text-foreground font-semibold': isLevelsMenuOpen || route.path.startsWith('/hsk'),
            }"
            :aria-expanded="isLevelsMenuOpen"
            aria-haspopup="true"
            @click="isLevelsMenuOpen = !isLevelsMenuOpen; isToolsMenuOpen = false"
          >
            <span>Levels</span>
            <svg
              class="size-3.5 transition-transform duration-200 text-muted-foreground"
              :class="{ 'rotate-180 text-foreground': isLevelsMenuOpen }"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2.5"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </button>

          <!-- Levels Menu Popover -->
          <div
            v-if="isLevelsMenuOpen"
            class="absolute top-full left-0 mt-2 w-72 rounded-2xl border border-border/80 bg-surface/95 backdrop-blur-xl p-2 shadow-xl ring-1 ring-black/5 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
            @mouseenter="keepOpen"
            @mouseleave="scheduleClose"
          >
            <div class="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground/80">
              Curriculum Levels
            </div>

            <RouterLink
              to="/hsk1"
              class="flex items-center gap-3 rounded-xl p-2 hover:bg-muted transition-colors group"
              @click="closeAllMenus"
            >
              <span class="flex size-8 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-xs font-black text-amber-700 dark:text-amber-400 group-hover:scale-105 transition-transform">
                1
              </span>
              <div class="min-w-0">
                <div class="text-xs font-bold text-foreground">HSK 1 · Beginner</div>
                <div class="text-[11px] text-muted-foreground truncate">150 words · 15 lessons · 11 tests</div>
              </div>
            </RouterLink>

            <RouterLink
              to="/hsk2"
              class="flex items-center gap-3 rounded-xl p-2 hover:bg-muted transition-colors group"
              @click="closeAllMenus"
            >
              <span class="flex size-8 shrink-0 items-center justify-center rounded-lg bg-sky-500/10 text-xs font-black text-sky-700 dark:text-sky-400 group-hover:scale-105 transition-transform">
                2
              </span>
              <div class="min-w-0">
                <div class="text-xs font-bold text-foreground">HSK 2 · Elementary</div>
                <div class="text-[11px] text-muted-foreground truncate">150 words · 15 lessons · 11 tests</div>
              </div>
            </RouterLink>

            <RouterLink
              to="/hsk3"
              class="flex items-center gap-3 rounded-xl p-2 hover:bg-muted transition-colors group"
              @click="closeAllMenus"
            >
              <span class="flex size-8 shrink-0 items-center justify-center rounded-lg bg-rose-500/10 text-xs font-black text-rose-700 dark:text-rose-400 group-hover:scale-105 transition-transform">
                3
              </span>
              <div class="min-w-0">
                <div class="text-xs font-bold text-foreground">HSK 3 · Intermediate</div>
                <div class="text-[11px] text-muted-foreground truncate">300 words · 20 lessons · 11 tests</div>
              </div>
            </RouterLink>

            <div class="mt-1 pt-1 border-t border-border/70">
              <RouterLink
                to="/#comparison"
                class="flex items-center justify-between rounded-lg px-2.5 py-1.5 text-xs font-semibold text-primary hover:bg-primary/5 transition-colors"
                @click="closeAllMenus"
              >
                <span>Compare all levels</span>
                <span>→</span>
              </RouterLink>
            </div>
          </div>
        </div>

        <!-- Dropdown 2: Practice & Tools -->
        <div
          class="relative dropdown-container"
          @mouseenter="openTools"
          @mouseleave="scheduleClose"
        >
          <button
            type="button"
            class="flex items-center gap-1 rounded-lg px-3 py-1.5 text-sm transition-colors cursor-pointer hover:bg-muted hover:text-foreground"
            :class="{
              'bg-muted/80 text-foreground font-semibold': isToolsMenuOpen || route.path === '/mock-tests' || route.path.includes('/practice') || route.path === '/score-calculator',
            }"
            :aria-expanded="isToolsMenuOpen"
            aria-haspopup="true"
            @click="isToolsMenuOpen = !isToolsMenuOpen; isLevelsMenuOpen = false"
          >
            <span>Practice</span>
            <svg
              class="size-3.5 transition-transform duration-200 text-muted-foreground"
              :class="{ 'rotate-180 text-foreground': isToolsMenuOpen }"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2.5"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </button>

          <!-- Tools Menu Popover -->
          <div
            v-if="isToolsMenuOpen"
            class="absolute top-full left-0 mt-2 w-80 rounded-2xl border border-border/80 bg-surface/95 backdrop-blur-xl p-2 shadow-xl ring-1 ring-black/5 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
            @mouseenter="keepOpen"
            @mouseleave="scheduleClose"
          >
            <div class="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground/80">
              Interactive Tools
            </div>

            <!-- 1: Mock Tests -->
            <RouterLink
              to="/mock-tests"
              class="flex items-center gap-3 rounded-xl p-2 hover:bg-muted transition-colors group"
              @click="closeAllMenus"
            >
              <span class="flex size-8 shrink-0 items-center justify-center rounded-lg bg-sky-500/10 text-sky-700 dark:text-sky-400 group-hover:scale-105 transition-transform">
                <svg class="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="13" r="8" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v4l2.5 2.5M10 2h4M18 5l1.5 1.5" />
                </svg>
              </span>
              <div class="min-w-0">
                <div class="text-xs font-bold text-foreground">33 Timed Mock Exams</div>
                <div class="text-[11px] text-muted-foreground truncate">Real Hanban style with audio & timer</div>
              </div>
            </RouterLink>

            <!-- 2: Writing Studio -->
            <RouterLink
              to="/hsk1/practice"
              class="flex items-center gap-3 rounded-xl p-2 hover:bg-muted transition-colors group"
              @click="closeAllMenus"
            >
              <span class="flex size-8 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 group-hover:scale-105 transition-transform">
                <svg class="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </span>
              <div class="min-w-0">
                <div class="text-xs font-bold text-foreground">Hanzi Writing Studio</div>
                <div class="text-[11px] text-muted-foreground truncate">Stroke order animation & canvas scoring</div>
              </div>
            </RouterLink>

            <!-- 3: Score Calculator -->
            <RouterLink
              to="/score-calculator"
              class="flex items-center gap-3 rounded-xl p-2 hover:bg-muted transition-colors group"
              @click="closeAllMenus"
            >
              <span class="flex size-8 shrink-0 items-center justify-center rounded-lg bg-purple-500/10 text-purple-700 dark:text-purple-400 group-hover:scale-105 transition-transform">
                <svg class="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <rect x="4" y="2" width="16" height="20" rx="3" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8 6h8M8 10h8M8 14h2M14 14h2M8 18h2M14 18h2" />
                </svg>
              </span>
              <div class="min-w-0">
                <div class="text-xs font-bold text-foreground">Score Calculator</div>
                <div class="text-[11px] text-muted-foreground truncate">Scaled passing check & CSC eligibility</div>
              </div>
            </RouterLink>
          </div>
        </div>

        <!-- Direct Nav Links -->
        <RouterLink
          to="/blogs"
          class="rounded-lg px-3 py-1.5 text-sm transition-colors hover:bg-muted hover:text-foreground"
          :class="route.path.startsWith('/blogs') ? 'bg-muted/80 text-foreground font-semibold' : ''"
          @click="closeAllMenus"
        >
          Guides
        </RouterLink>

        <RouterLink
          to="/#comparison"
          class="rounded-lg px-3 py-1.5 text-sm transition-colors hover:bg-muted hover:text-foreground"
          @click="closeAllMenus"
        >
          Compare
        </RouterLink>

        <RouterLink
          to="/about"
          class="rounded-lg px-3 py-1.5 text-sm transition-colors hover:bg-muted hover:text-foreground"
          :class="route.path === '/about' ? 'bg-muted/80 text-foreground font-semibold' : ''"
          @click="closeAllMenus"
        >
          About
        </RouterLink>
      </nav>

      <!-- Right: Minimalist Theme & Clean CTA -->
      <div class="flex items-center gap-2">
        <!-- Ghost Theme Toggle -->
        <button
          type="button"
          class="flex size-9 items-center justify-center rounded-full text-muted-foreground hover:bg-muted hover:text-foreground transition-colors cursor-pointer"
          :title="isDarkMode ? 'Switch to light theme' : 'Switch to dark theme'"
          :aria-label="isDarkMode ? 'Switch to light theme' : 'Switch to dark theme'"
          @click="toggleTheme"
        >
          <!-- Sun Icon (Dark Mode Active) -->
          <svg
            v-if="isDarkMode"
            class="size-4.5 text-amber-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            />
          </svg>
          <!-- Moon Icon (Light Mode Active) -->
          <svg
            v-else
            class="size-4.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            />
          </svg>
        </button>

        <!-- Modern Pill CTA -->
        <RouterLink to="/hsk1" class="hidden sm:inline-flex" @click="closeAllMenus">
          <span class="inline-flex items-center gap-1.5 rounded-full bg-primary px-3.5 py-1.5 text-xs lg:text-sm font-semibold text-white shadow-xs hover:opacity-90 active:scale-98 transition-all">
            <span>Start Free</span>
            <svg class="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </span>
        </RouterLink>

        <!-- Mobile Menu Toggle Button (Clean Ghost) -->
        <button
          type="button"
          class="md:hidden flex size-9 items-center justify-center rounded-lg text-foreground hover:bg-muted cursor-pointer transition-colors"
          :aria-expanded="isMobileMenuOpen"
          aria-controls="mobile-navigation"
          :aria-label="isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
        >
          <svg
            v-if="isMobileMenuOpen"
            class="size-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
          <svg
            v-else
            class="size-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Drawer: Clean, Categorized & Elegant -->
    <div
      v-if="isMobileMenuOpen"
      id="mobile-navigation"
      class="md:hidden border-b border-border/80 bg-surface px-4 py-4 shadow-xl space-y-4 animate-in fade-in slide-in-from-top-2 duration-150"
    >
      <!-- HSK Portals Grid -->
      <div>
        <div class="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-2">
          Curriculum Levels
        </div>
        <div class="grid grid-cols-3 gap-2">
          <RouterLink
            to="/hsk1"
            class="flex flex-col items-center justify-center rounded-xl border border-amber-500/25 bg-amber-500/10 p-2.5 text-center transition-transform active:scale-95"
            @click="closeAllMenus"
          >
            <span class="text-sm font-black text-amber-700 dark:text-amber-400">HSK 1</span>
            <span class="text-[10px] text-muted-foreground mt-0.5">Beginner</span>
          </RouterLink>
          <RouterLink
            to="/hsk2"
            class="flex flex-col items-center justify-center rounded-xl border border-sky-500/25 bg-sky-500/10 p-2.5 text-center transition-transform active:scale-95"
            @click="closeAllMenus"
          >
            <span class="text-sm font-black text-sky-700 dark:text-sky-400">HSK 2</span>
            <span class="text-[10px] text-muted-foreground mt-0.5">Elementary</span>
          </RouterLink>
          <RouterLink
            to="/hsk3"
            class="flex flex-col items-center justify-center rounded-xl border border-rose-500/25 bg-rose-500/10 p-2.5 text-center transition-transform active:scale-95"
            @click="closeAllMenus"
          >
            <span class="text-sm font-black text-rose-700 dark:text-rose-400">HSK 3</span>
            <span class="text-[10px] text-muted-foreground mt-0.5">Intermediate</span>
          </RouterLink>
        </div>
      </div>

      <!-- Core Tools with clean SVG icons -->
      <div>
        <div class="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
          Tools & Practice
        </div>
        <nav aria-label="Mobile navigation" class="space-y-0.5 text-sm font-medium">
          <RouterLink
            to="/mock-tests"
            class="flex items-center gap-3 rounded-xl px-3 py-2 text-foreground hover:bg-muted"
            @click="closeAllMenus"
          >
            <span class="flex size-7 shrink-0 items-center justify-center rounded-lg bg-sky-500/10 text-sky-700 dark:text-sky-400">
              <svg class="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="13" r="8" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v4l2.5 2.5" />
              </svg>
            </span>
            <span>33 Timed Mock Exams</span>
          </RouterLink>

          <RouterLink
            to="/hsk1/practice"
            class="flex items-center gap-3 rounded-xl px-3 py-2 text-foreground hover:bg-muted"
            @click="closeAllMenus"
          >
            <span class="flex size-7 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-700 dark:text-emerald-400">
              <svg class="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </span>
            <span>Hanzi Writing Studio</span>
          </RouterLink>

          <RouterLink
            to="/score-calculator"
            class="flex items-center gap-3 rounded-xl px-3 py-2 text-foreground hover:bg-muted"
            @click="closeAllMenus"
          >
            <span class="flex size-7 shrink-0 items-center justify-center rounded-lg bg-purple-500/10 text-purple-700 dark:text-purple-400">
              <svg class="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <rect x="4" y="2" width="16" height="20" rx="3" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M8 6h8M8 10h8" />
              </svg>
            </span>
            <span>Score Calculator</span>
          </RouterLink>
        </nav>
      </div>

      <!-- Links -->
      <div class="border-t border-border/70 pt-2">
        <div class="grid grid-cols-3 gap-1 text-center text-xs font-semibold text-muted-foreground">
          <RouterLink
            to="/blogs"
            class="rounded-lg py-2 hover:bg-muted hover:text-foreground"
            @click="closeAllMenus"
          >
            Guides
          </RouterLink>
          <RouterLink
            to="/#comparison"
            class="rounded-lg py-2 hover:bg-muted hover:text-foreground"
            @click="closeAllMenus"
          >
            Compare
          </RouterLink>
          <RouterLink
            to="/about"
            class="rounded-lg py-2 hover:bg-muted hover:text-foreground"
            @click="closeAllMenus"
          >
            About
          </RouterLink>
        </div>
      </div>

      <!-- Fast CTA -->
      <div class="pt-1">
        <RouterLink to="/hsk1" class="block w-full" @click="closeAllMenus">
          <span class="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-2.5 text-xs font-bold text-white shadow-xs">
            Start HSK 1 Curriculum Free →
          </span>
        </RouterLink>
      </div>
    </div>
  </header>
</template>
