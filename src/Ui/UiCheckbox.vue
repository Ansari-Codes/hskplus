<script setup lang="ts">
withDefaults(defineProps<{
  modelValue?: boolean
  disabled?: boolean
  id?: string
}>(), {
  modelValue: false,
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()
</script>

<template>
  <input
    :id="id"
    type="checkbox"
    :checked="modelValue"
    :disabled="disabled"
    class="size-4 shrink-0 rounded border-input accent-primary disabled:cursor-not-allowed disabled:opacity-50"
    @change="emit('update:modelValue', ($event.target as HTMLInputElement).checked)"
  >
</template>
