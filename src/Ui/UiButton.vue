<script setup lang="ts">
withDefaults(defineProps<{
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive'
  size?: 'sm' | 'md' | 'lg' | 'icon'
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  loading?: boolean
}>(), {
  variant: 'primary',
  size: 'md',
  type: 'button',
})

const variants = {
  primary: 'bg-primary text-primary-foreground shadow-sm hover:opacity-90',
  secondary: 'bg-secondary text-secondary-foreground hover:opacity-80',
  outline: 'border border-input bg-surface hover:bg-accent hover:text-accent-foreground',
  ghost: 'hover:bg-accent hover:text-accent-foreground',
  destructive: 'bg-destructive text-destructive-foreground shadow-sm hover:opacity-90',
}

const sizes = {
  sm: 'h-8 rounded-md px-3 text-xs',
  md: 'h-10 rounded-md px-4 text-sm',
  lg: 'h-11 rounded-lg px-6 text-base',
  icon: 'size-10 rounded-md p-0',
}
</script>

<template>
  <button
    :type="type"
    :disabled="disabled || loading"
    :aria-busy="loading || undefined"
    :class="[
      'inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50',
      variants[variant],
      sizes[size],
    ]"
  >
    <span v-if="loading" aria-hidden="true" class="size-4 animate-spin rounded-full border-2 border-current border-r-transparent" />
    <slot />
  </button>
</template>
