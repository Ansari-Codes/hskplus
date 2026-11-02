<script setup lang="ts">
withDefaults(defineProps<{
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'destructive' | 'outline'
}>(), {
  variant: 'default',
})

const variants = {
  default: 'border-transparent bg-primary text-primary-foreground',
  primary: 'border-transparent bg-primary text-primary-foreground',
  secondary: 'border-transparent bg-secondary text-secondary-foreground',
  success: 'border-transparent bg-success/10 text-success',
  warning: 'border-transparent bg-warning/10 text-warning',
  destructive: 'border-transparent bg-destructive/10 text-destructive',
  outline: 'border-border bg-transparent text-foreground',
}
</script>

<template>
  <span :class="['inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold leading-5', variants[variant]]">
    <slot />
  </span>
</template>
