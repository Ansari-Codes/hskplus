<script setup lang="ts">
withDefaults(defineProps<{
  as?: string
  pattern?: 'plain' | 'dots' | 'grid'
  label?: string
}>(), {
  as: 'div',
  pattern: 'dots',
  label: 'Canvas',
})

const patterns = {
  plain: 'bg-surface',
  dots: 'bg-surface-raised bg-[radial-gradient(var(--border)_1px,transparent_1px)] bg-[length:20px_20px]',
  grid: 'bg-surface-raised bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[length:24px_24px]',
}
</script>

<template>
  <component
    :is="as"
    role="region"
    :aria-label="label"
    :class="[
      'min-h-40 overflow-auto rounded-xl border border-border p-5 text-foreground',
      patterns[pattern],
    ]"
  >
    <slot />
  </component>
</template>
