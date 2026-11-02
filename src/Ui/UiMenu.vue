<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

export type MenuItem = {
  label: string
  value: string
  disabled?: boolean
  separator?: boolean
}

const props = withDefaults(defineProps<{
  items: MenuItem[]
  label?: string
}>(), {
  label: 'Open menu',
})

const emit = defineEmits<{
  select: [item: MenuItem]
}>()

const root = ref<HTMLElement | null>(null)
const open = ref(false)

function closeOnOutsideClick(event: PointerEvent) {
  if (event.target instanceof Node && !root.value?.contains(event.target)) {
    open.value = false
  }
}

function closeOnEscape(event: KeyboardEvent) {
  if (event.key === 'Escape') open.value = false
}

onMounted(() => {
  document.addEventListener('pointerdown', closeOnOutsideClick)
  document.addEventListener('keydown', closeOnEscape)
})

onBeforeUnmount(() => {
  document.removeEventListener('pointerdown', closeOnOutsideClick)
  document.removeEventListener('keydown', closeOnEscape)
})

function select(item: MenuItem) {
  if (item.disabled || item.separator) return
  emit('select', item)
  open.value = false
}
</script>

<template>
  <div ref="root" class="relative inline-block text-left">
    <button
      type="button"
      :aria-label="label"
      aria-haspopup="menu"
      :aria-expanded="open"
      class="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-input bg-surface px-4 text-sm font-medium shadow-sm transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      @click="open = !open"
    >
      <slot name="trigger">{{ label }}</slot>
      <span aria-hidden="true" class="text-muted-foreground">⌄</span>
    </button>
    <div
      v-if="open"
      role="menu"
      class="absolute right-0 z-20 mt-2 min-w-44 rounded-lg border border-border bg-surface p-1.5 text-foreground shadow-lg"
    >
      <template v-for="item in items" :key="item.value">
        <div v-if="item.separator" role="separator" class="my-1 h-px bg-border" />
        <button
          v-else
          type="button"
          role="menuitem"
          :disabled="item.disabled"
          class="flex w-full items-center rounded-md px-3 py-2 text-left text-sm hover:bg-accent focus-visible:bg-accent focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
          @click="select(item)"
        >
          {{ item.label }}
        </button>
      </template>
    </div>
  </div>
</template>
