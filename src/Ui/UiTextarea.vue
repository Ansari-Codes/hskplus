<script setup lang="ts">
defineOptions({ inheritAttrs: false })

withDefaults(defineProps<{
  modelValue?: string
  rows?: number
  invalid?: boolean
}>(), {
  rows: 4,
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>

<template>
  <textarea
    v-bind="$attrs"
    :value="modelValue"
    :rows="rows"
    :aria-invalid="invalid || undefined"
    :class="[
      'flex min-h-24 w-full resize-y rounded-md border bg-surface px-3 py-2 text-sm text-foreground shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
      invalid ? 'border-destructive focus-visible:ring-destructive' : 'border-input',
    ]"
    @input="emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
  />
</template>
