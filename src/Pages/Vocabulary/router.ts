import type { RouteRecordRaw } from 'vue-router'

export const vocabularyRoutes: RouteRecordRaw[] = [
  {
    path: '/hsk:level(1|2|3)/vocabulary',
    name: 'vocabulary',
    component: () => import('./Index.vue'),
  },
  {
    path: '/hsk:level(1|2|3)/practice',
    name: 'vocabulary-practice',
    component: () => import('./Practice.vue'),
  },
]
