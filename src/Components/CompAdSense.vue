<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    slotId?: string
    client?: string
    format?: 'banner' | 'rectangle' | 'in-article' | 'in-feed'
    label?: string
  }>(),
  {
    slotId: '1234567890',
    client: 'ca-pub-XXXXXXXXXXXXXXXX',
    format: 'banner',
    label: 'Advertisement · 赞助商链接',
  }
)

const formatClasses = computed(() => {
  switch (props.format) {
    case 'rectangle':
      return 'w-full max-w-[300px] min-h-[250px]'
    case 'in-article':
      return 'w-full min-h-[140px] my-6'
    case 'in-feed':
      return 'w-full min-h-[120px]'
    case 'banner':
    default:
      return 'w-full max-w-4xl min-h-[90px] sm:min-h-[100px]'
  }
})
</script>

<template>
  <aside
    class="relative mx-auto my-6 overflow-hidden rounded-2xl border border-border/70 bg-surface/60 p-3 text-center transition-all"
    :class="formatClasses"
    role="complementary"
    aria-label="Sponsored Advertisement"
  >
    <!-- Policy label -->
    <div class="mb-2 flex items-center justify-center gap-1.5 text-xs font-bold uppercase tracking-wider text-muted-foreground">
      <span>{{ label }}</span>
    </div>

    <!-- Ad container (reserved space to prevent layout shifts) -->
    <div class="flex h-full min-h-[70px] flex-col items-center justify-center rounded-xl border border-dashed border-border/80 bg-muted/40 p-3">
      <div class="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
        <span class="inline-flex size-5 items-center justify-center rounded-full bg-primary text-white text-[10px] font-bold">
          Ad
        </span>
        <span>Google AdSense Placement Slot ({{ format }})</span>
      </div>
      <p class="mt-1 text-xs text-muted-foreground">
        Targeted educational Mandarin & HSK study materials · ID: {{ slotId }}
      </p>
    </div>
  </aside>
</template>
