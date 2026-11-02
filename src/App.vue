<script setup lang="ts">
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import AppHeader from './Components/AppHeader.vue'
import AppFooter from './Components/AppFooter.vue'

const route = useRoute()

watch(
  () => route.path.match(/^\/hsk([123])(?:\/|$)/)?.[1],
  level => {
    if (level) document.documentElement.dataset.hskLevel = level
    else delete document.documentElement.dataset.hskLevel
  },
  { immediate: true },
)
</script>

<template>
  <div class="flex min-h-screen flex-col bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary">
    <a
      href="#main-content"
      class="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-white focus:shadow-lg focus:outline-none"
    >
      Skip to main content
    </a>
    <AppHeader />
    <main id="main-content" class="flex-1">
      <RouterView />
    </main>
    <AppFooter />
  </div>
</template>
