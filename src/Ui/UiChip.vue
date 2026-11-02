<script setup lang="ts">
withDefaults(defineProps<{
  variant?: 'default' | 'secondary' | 'success' | 'warning' | 'destructive' | 'outline'
  size?: 'sm' | 'md'
  removable?: boolean
  disabled?: boolean
}>(), {
  variant: 'default',
  size: 'md',
  removable: false,
  disabled: false,
})

const emit = defineEmits<{
  remove: []
}>()

const variants = {
  default: 'border-transparent bg-primary/10 text-primary',
  secondary: 'border-transparent bg-secondary text-secondary-foreground',
  success: 'border-transparent bg-success/10 text-success',
  warning: 'border-transparent bg-warning/10 text-warning',
  destructive: 'border-transparent bg-destructive/10 text-destructive',
  outline: 'border-border bg-transparent text-foreground',
}

const sizes = {
  sm: 'min-h-6 gap-1 px-2 text-xs',
  md: 'min-h-7 gap-1.5 px-2.5 text-sm',
}
</script>

<template>
  <span
    :class="[
      'inline-flex max-w-full items-center rounded-full border font-medium leading-5',
      variants[variant],
      sizes[size],
      disabled ? 'opacity-50' : '',
    ]"
  >
    <slot />
    <button
      v-if="removable"
      type="button"
      :disabled="disabled"
      aria-label="Remove"
      class="-mr-1 inline-flex size-5 shrink-0 items-center justify-center rounded-full text-current/70 transition-colors hover:bg-black/5 hover:text-current focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none dark:hover:bg-white/10"
      @click="emit('remove')"
    >
      <span aria-hidden="true">×</span>
    </button>
  </span>
</template>
