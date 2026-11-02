import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import HomePage from './Pages/Home/Index.vue'

const routes: RouteRecordRaw[] = [
  // Home Page
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },

  // SEO & Static Pages
  {
    path: '/about',
    name: 'about',
    component: () => import('./Pages/Static/About.vue'),
  },
  {
    path: '/privacy-policy',
    alias: '/privacy',
    name: 'privacy-policy',
    component: () => import('./Pages/Static/Privacy.vue'),
  },
  {
    path: '/terms-of-service',
    alias: '/terms',
    name: 'terms-of-service',
    component: () => import('./Pages/Static/Terms.vue'),
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('./Pages/Static/Contact.vue'),
  },

  // HSK Test Score Calculator
  {
    path: '/score-calculator',
    name: 'score-calculator',
    component: () => import('./Pages/ScoreCalculator/Index.vue'),
  },

  // Blogs Pages
  {
    path: '/blogs',
    name: 'blogs',
    component: () => import('./Pages/Blogs/Index.vue'),
  },
  {
    path: '/blogs/:slug',
    name: 'blog-detail',
    component: () => import('./Pages/Blogs/Detail.vue'),
  },

  // Per HSK Level Routes
  {
    path: '/hsk:level(1|2|3)',
    name: 'hsk-hub',
    component: () => import('./Pages/HskLevel/Index.vue'),
  },
  {
    path: '/hsk:level(1|2|3)/vocabulary',
    name: 'vocabulary',
    component: () => import('./Pages/Vocabulary/Index.vue'),
  },
  {
    path: '/hsk:level(1|2|3)/practice',
    name: 'vocabulary-practice',
    component: () => import('./Pages/Vocabulary/Practice.vue'),
  },

  // Lessons Routes (supports both /hskX/lessons and /hskX/lesson?index=1)
  {
    path: '/hsk:level(1|2|3)/lessons',
    alias: '/hsk:level(1|2|3)/lesson',
    name: 'lessons',
    component: () => import('./Pages/Lessons/Index.vue'),
  },

  // Sentence Patterns Routes (supports both /hskX/sentences and /hskX/sentence?index=1)
  {
    path: '/hsk:level(1|2|3)/sentences',
    alias: '/hsk:level(1|2|3)/sentence',
    name: 'sentence-patterns',
    component: () => import('./Pages/SentencePatterns/Index.vue'),
  },

  // Dialogue Scenarios Routes (supports both /hskX/dialogs and /hskX/dialog?id=1)
  {
    path: '/hsk:level(1|2|3)/dialogs',
    alias: '/hsk:level(1|2|3)/dialog',
    name: 'dialogs',
    component: () => import('./Pages/Dialogs/Index.vue'),
  },

  // Mock Tests Routes (supports both /hskX/tests and /hskX/test?id=...)
  {
    path: '/mock-tests',
    name: 'all-mock-tests',
    component: () => import('./Pages/MockTests/Index.vue'),
  },
  {
    path: '/hsk:level(1|2|3)/tests',
    alias: '/hsk:level(1|2|3)/test',
    name: 'mock-tests',
    component: () => import('./Pages/MockTests/Index.vue'),
  },

  // Catch-all
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})
