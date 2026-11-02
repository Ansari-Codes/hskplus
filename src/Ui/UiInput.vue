<script setup lang="ts">
defineOptions({ inheritAttrs: false })

withDefaults(defineProps<{
  modelValue?: string | number
  type?: string
  invalid?: boolean
}>(), {
  type: 'text',
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>

<template>
  <input
    v-bind="$attrs"
    :type="type"
    :value="modelValue"
    :aria-invalid="invalid || undefined"
    :class="[
      'flex h-10 w-full rounded-md border bg-surface px-3 py-2 text-sm text-foreground shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
      invalid ? 'border-destructive focus-visible:ring-destructive' : 'border-input',
    ]"
    @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  />
</template>
