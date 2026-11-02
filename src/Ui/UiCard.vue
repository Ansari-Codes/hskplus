<script setup lang="ts">
withDefaults(defineProps<{
  as?: string
  padded?: boolean
}>(), {
  as: 'div',
  padded: false,
})
</script>

<template>
  <component
    :is="as"
    :class="[
      'rounded-xl border border-border bg-surface text-foreground shadow-sm',
      padded ? 'p-6' : '',
    ]"
  >
    <slot />
  </component>
</template>
