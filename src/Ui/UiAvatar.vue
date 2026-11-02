<script setup lang="ts">
import { ref, watch } from 'vue'

const props = withDefaults(defineProps<{
  src?: string
  alt?: string
  fallback?: string
  size?: 'sm' | 'md' | 'lg'
}>(), {
  alt: '',
  fallback: '?',
  size: 'md',
})

const failed = ref(false)

watch(() => props.src, () => {
  failed.value = false
})

const sizes = {
  sm: 'size-8 text-xs',
  md: 'size-10 text-sm',
  lg: 'size-14 text-base',
}
</script>

<template>
  <span :class="['inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-muted font-medium text-muted-foreground', sizes[size]]">
    <img
      v-if="src && !failed"
      :src="src"
      :alt="alt"
      class="size-full object-cover"
      @error="failed = true"
    >
    <span v-else aria-hidden="true">{{ fallback }}</span>
  </span>
</template>
