<script setup lang="ts">
withDefaults(defineProps<{
  for?: string
  required?: boolean
}>(), {
  required: false,
})
</script>

<template>
  <label :for="for" class="inline-flex items-center gap-1.5 text-sm font-medium leading-none text-foreground">
    <slot />
    <span v-if="required" aria-hidden="true" class="text-destructive">*</span>
  </label>
</template>
