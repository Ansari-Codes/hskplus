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
  <button
    :id="id"
    type="button"
    role="switch"
    :aria-checked="modelValue"
    :disabled="disabled"
    :class="[
      'relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50',
      modelValue ? 'bg-primary' : 'bg-muted',
    ]"
    @click="emit('update:modelValue', !modelValue)"
  >
    <span
      :class="[
        'pointer-events-none block size-5 rounded-full bg-surface shadow-sm ring-0 transition-transform',
        modelValue ? 'translate-x-5' : 'translate-x-0.5',
      ]"
    />
  </button>
</template>
