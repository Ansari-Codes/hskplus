<script setup lang="ts">
import { computed } from 'vue'

type IconShape = {
  tag: 'path' | 'circle' | 'line' | 'polyline' | 'rect'
  attrs: Record<string, string | number>
}

const icons = {
  check: [{ tag: 'path', attrs: { d: 'm5 12 4 4L19 6' } }],
  close: [{ tag: 'path', attrs: { d: 'm18 6-12 12M6 6l12 12' } }],
  menu: [
    { tag: 'line', attrs: { x1: 4, y1: 6, x2: 20, y2: 6 } },
    { tag: 'line', attrs: { x1: 4, y1: 12, x2: 20, y2: 12 } },
    { tag: 'line', attrs: { x1: 4, y1: 18, x2: 20, y2: 18 } },
  ],
  plus: [
    { tag: 'line', attrs: { x1: 12, y1: 5, x2: 12, y2: 19 } },
    { tag: 'line', attrs: { x1: 5, y1: 12, x2: 19, y2: 12 } },
  ],
  search: [
    { tag: 'circle', attrs: { cx: 11, cy: 11, r: 7 } },
    { tag: 'line', attrs: { x1: 16, y1: 16, x2: 21, y2: 21 } },
  ],
  'arrow-right': [{ tag: 'path', attrs: { d: 'M5 12h14m-7-7 7 7-7 7' } }],
  sun: [
    { tag: 'circle', attrs: { cx: 12, cy: 12, r: 4 } },
    { tag: 'path', attrs: { d: 'M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42' } },
  ],
  moon: [{ tag: 'path', attrs: { d: 'M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z' } }],
  book: [
    { tag: 'path', attrs: { d: 'M4 19.5A2.5 2.5 0 0 1 6.5 17H20' } },
    { tag: 'path', attrs: { d: 'M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z' } },
  ],
  sparkles: [
    { tag: 'path', attrs: { d: 'm12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3Z' } },
    { tag: 'path', attrs: { d: 'm19 14 1.2 2.8L23 18l-2.8 1.2L19 22l-1.2-2.8L15 18l2.8-1.2L19 14Z' } },
  ],
} satisfies Record<string, IconShape[]>

type IconName = keyof typeof icons

const props = withDefaults(defineProps<{
  name: IconName
  size?: number
  strokeWidth?: number
  label?: string
}>(), {
  size: 20,
  strokeWidth: 1.8,
})

const shapes = computed(() => icons[props.name])
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    :stroke-width="strokeWidth"
    stroke-linecap="round"
    stroke-linejoin="round"
    :role="label ? 'img' : undefined"
    :aria-label="label"
    :aria-hidden="label ? undefined : 'true'"
    focusable="false"
  >
    <title v-if="label">{{ label }}</title>
    <component :is="shape.tag" v-for="(shape, index) in shapes" :key="index" v-bind="shape.attrs" />
  </svg>
</template>
