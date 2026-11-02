<script setup lang="ts">
withDefaults(defineProps<{
  variant?: 'default' | 'success' | 'warning' | 'destructive'
  title?: string
}>(), {
  variant: 'default',
})

const variants = {
  default: 'border-border bg-surface text-foreground',
  success: 'border-success/30 bg-success/5 text-foreground',
  warning: 'border-warning/30 bg-warning/5 text-foreground',
  destructive: 'border-destructive/30 bg-destructive/5 text-foreground',
}
</script>

<template>
  <div
    :role="variant === 'destructive' ? 'alert' : 'status'"
    :class="['rounded-lg border p-4 text-sm [&>p]:mt-1 [&>p]:text-muted-foreground', variants[variant]]"
  >
    <h3 v-if="title" class="font-semibold">{{ title }}</h3>
    <slot />
  </div>
</template>
