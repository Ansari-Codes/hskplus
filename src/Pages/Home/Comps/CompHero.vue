<script setup lang="ts">
import { UiBadge, UiIcon } from '../../../Ui'
</script>

<template>
  <section class="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 pb-20 pt-12 sm:px-8 md:grid-cols-2 md:pb-28 md:pt-20">
    <div class="max-w-xl">
      <UiBadge variant="secondary" class="mb-6">
        Your Chinese learning companion
      </UiBadge>
      <h1 class="text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
        Make your next
        <span class="text-primary">Chinese milestone</span>
        happen.
      </h1>
      <p class="mt-6 max-w-lg text-lg leading-8 text-muted-foreground">
        A simpler way to learn HSK vocabulary, practice consistently, and feel good about your progress.
      </p>
      <div id="get-started" class="mt-8 flex flex-wrap items-center gap-4">
        <RouterLink
          :to="{ name: 'vocabulary', params: { level: 1 } }"
          class="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-base font-medium text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          Browse HSK 1
          <UiIcon name="arrow-right" :size="18" />
        </RouterLink>
        <RouterLink
          :to="{ name: 'vocabulary', params: { level: 2 } }"
          class="text-sm font-semibold text-foreground transition-colors hover:text-primary"
        >
          Explore HSK 2
        </RouterLink>
        <a href="#how-it-works" class="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground">
          See how it works
        </a>
      </div>
      <div class="mt-10 flex items-center gap-3 text-sm text-muted-foreground">
        <span class="flex -space-x-2" aria-hidden="true">
          <span class="flex size-8 items-center justify-center rounded-full border-2 border-background bg-secondary text-xs font-semibold text-secondary-foreground">你</span>
          <span class="flex size-8 items-center justify-center rounded-full border-2 border-background bg-primary text-xs font-semibold text-primary-foreground">好</span>
          <span class="flex size-8 items-center justify-center rounded-full border-2 border-background bg-accent text-xs font-semibold text-accent-foreground">学</span>
        </span>
        <span>A little practice goes a long way.</span>
      </div>
    </div>

    <div class="relative mx-auto w-full max-w-md">
      <div class="absolute -inset-8 rounded-full bg-primary/5 blur-3xl" />
      <div class="relative rounded-3xl border border-border bg-surface p-5 shadow-xl sm:p-7">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-muted-foreground">Today's practice</p>
            <p class="mt-1 text-lg font-semibold">Everyday words</p>
          </div>
          <span class="flex size-10 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
            <UiIcon name="sparkles" />
          </span>
        </div>

        <div class="mt-6 rounded-2xl bg-surface-raised px-5 py-8 text-center">
          <p class="text-6xl font-semibold tracking-wide text-foreground" lang="zh">你好</p>
          <p class="mt-3 text-sm text-muted-foreground">nǐ hǎo</p>
          <p class="mt-1 text-base font-medium">Hello</p>
        </div>

        <div class="mt-5 flex items-center justify-between rounded-xl border border-border px-4 py-3">
          <div>
            <p class="text-sm font-semibold">HSK 1 · Greetings</p>
            <p class="mt-1 text-xs text-muted-foreground">Word 3 of 12</p>
          </div>
          <span class="flex size-9 items-center justify-center rounded-full bg-success/10 text-success">
            <UiIcon name="check" :size="18" />
          </span>
        </div>

        <div class="mt-5 flex items-center gap-3">
          <div class="h-2 flex-1 overflow-hidden rounded-full bg-muted">
            <div class="h-full w-1/4 rounded-full bg-primary" />
          </div>
          <span class="text-xs font-medium text-muted-foreground">25%</span>
        </div>
      </div>
      <div class="absolute -bottom-5 -left-3 hidden items-center gap-2 rounded-xl border border-border bg-surface px-4 py-3 text-sm font-medium shadow-md sm:flex">
        <span class="text-warning">✦</span>
        <span>Small steps, real progress</span>
      </div>
    </div>
  </section>
</template>
