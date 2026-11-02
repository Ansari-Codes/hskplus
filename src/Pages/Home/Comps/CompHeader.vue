<script setup lang="ts">
import type { LandingNavLink } from '../types'
import { UiIcon } from '../../../Ui'

defineProps<{
  links: LandingNavLink[]
}>()
</script>

<template>
  <header class="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
    <a href="/" class="inline-flex items-center gap-2.5 font-semibold tracking-tight text-foreground" aria-label="HSK Plus home">
      <img src="/hskplus-logo.svg" alt="" class="size-9 rounded-xl" width="36" height="36" />
      <span class="text-lg">HSK<span class="text-primary">Plus</span></span>
    </a>

    <nav class="hidden items-center gap-8 md:flex" aria-label="Main navigation">
      <a
        v-for="link in links"
        :key="link.href"
        :href="link.href"
        class="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        {{ link.label }}
      </a>
    </nav>

    <RouterLink
      :to="{ name: 'vocabulary', params: { level: 1 } }"
      class="inline-flex h-9 items-center justify-center gap-2 rounded-md bg-primary px-3 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
    >
      Browse vocabulary
      <UiIcon name="arrow-right" :size="16" />
    </RouterLink>
  </header>
</template>
