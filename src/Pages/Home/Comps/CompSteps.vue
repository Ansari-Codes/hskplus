<script setup lang="ts">
import type { LandingStep } from '../types'

defineProps<{
  steps: LandingStep[]
}>()
</script>

<template>
  <section id="how-it-works" class="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
    <div class="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
      <div>
        <p class="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Simple by design</p>
        <h2 class="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">A clear path from first word to fluent habits.</h2>
        <p class="mt-4 leading-7 text-muted-foreground">
          Set a goal, make learning part of your day, and let every practice session add up.
        </p>
      </div>
      <ol class="space-y-7">
        <li v-for="step in steps" :key="step.number" class="flex gap-5">
          <span class="flex size-11 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-sm font-semibold text-primary">
            {{ step.number }}
          </span>
          <div class="pt-1">
            <h3 class="font-semibold">{{ step.title }}</h3>
            <p class="mt-1.5 text-sm leading-6 text-muted-foreground">{{ step.description }}</p>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>
