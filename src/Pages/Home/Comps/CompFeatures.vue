<script setup lang="ts">
import type { LandingFeature } from '../types'
import { UiIcon } from '../../../Ui'

defineProps<{
  features: LandingFeature[]
}>()
</script>

<template>
  <section id="features" class="border-y border-border bg-surface py-20 sm:py-24">
    <div class="mx-auto max-w-6xl px-5 sm:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <p class="text-sm font-semibold uppercase tracking-[0.16em] text-primary">A better way to study</p>
        <h2 class="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Make learning Chinese feel manageable.</h2>
        <p class="mt-4 leading-7 text-muted-foreground">
          Everything you need to build a consistent study rhythm, without making it complicated.
        </p>
      </div>

      <div class="mt-12 grid gap-5 md:grid-cols-3">
        <article
          v-for="feature in features"
          :key="feature.title"
          class="rounded-2xl border border-border bg-background p-6 transition-transform hover:-translate-y-1"
        >
          <span class="flex size-11 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
            <UiIcon :name="feature.icon" />
          </span>
          <h3 class="mt-5 text-lg font-semibold">{{ feature.title }}</h3>
          <p class="mt-2 text-sm leading-6 text-muted-foreground">{{ feature.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
