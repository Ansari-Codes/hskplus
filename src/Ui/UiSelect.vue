<script setup lang="ts">
defineOptions({ inheritAttrs: false })

type SelectOption = {
  label: string
  value: string | number
  disabled?: boolean
}

withDefaults(defineProps<{
  modelValue?: string | number
  options?: SelectOption[]
  placeholder?: string
  invalid?: boolean
}>(), {
  options: () => [],
  placeholder: 'Choose an option',
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>

<template>
  <select
    v-bind="$attrs"
    :value="modelValue"
    :aria-invalid="invalid || undefined"
    :class="[
      'flex h-10 w-full appearance-none rounded-md border bg-surface px-3 py-2 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
      invalid ? 'border-destructive focus-visible:ring-destructive' : 'border-input',
    ]"
    @change="emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
  >
    <option value="" disabled>{{ placeholder }}</option>
    <option v-for="option in options" :key="option.value" :value="option.value" :disabled="option.disabled">
      {{ option.label }}
    </option>
    <slot />
  </select>
</template>
