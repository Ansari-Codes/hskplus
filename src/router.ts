import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import HomePage from './Pages/Home/Index.vue'
import { setRouteJsonLd, getHskHubJsonLd, getModuleJsonLd } from './Utils/jsonLd'

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

  // Official Standard Course Material Downloads
  {
    path: '/downloads',
    name: 'downloads',
    component: () => import('./Pages/Downloads/Index.vue'),
  },

  // Confusing Words & Grammar Comparisons
  {
    path: '/compare',
    name: 'compare-list',
    component: () => import('./Pages/Compare/Index.vue'),
  },
  {
    path: '/compare/:slug',
    name: 'compare-detail',
    component: () => import('./Pages/Compare/Detail.vue'),
  },

  // Chinese Radicals (部首) Directory
  {
    path: '/radicals',
    name: 'radicals',
    component: () => import('./Pages/Radicals/Index.vue'),
  },

  // Pinyin Soundboard & Tone Trainer
  {
    path: '/pinyin',
    alias: ['/pinyin-trainer', '/pronunciation'],
    name: 'pinyin',
    component: () => import('./Pages/Pinyin/Index.vue'),
  },

  // Beginner Quick-Start Intro Lesson
  {
    path: '/hsk-intro',
    name: 'hsk-intro',
    component: () => import('./Pages/Intro/Index.vue'),
  },

  // HSK for English Speakers Structural Blueprint
  {
    path: '/english-speakers-guide',
    name: 'english-speakers-guide',
    component: () => import('./Pages/Guides/EnglishSpeakersGuide.vue'),
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
    path: '/hsk:level(1|2|3)/vocabulary/:char',
    name: 'vocabulary-word',
    component: () => import('./Pages/Vocabulary/Index.vue'),
  },
  {
    path: '/hsk:level(1|2|3)/word/:char',
    name: 'hsk-word-detail',
    component: () => import('./Pages/Vocabulary/Index.vue'),
  },
  {
    path: '/word/:char',
    name: 'word-detail',
    component: () => import('./Pages/Vocabulary/Index.vue'),
  },
  {
    path: '/hsk:level(1|2|3)/practice',
    name: 'vocabulary-practice',
    component: () => import('./Pages/Vocabulary/Practice.vue'),
  },
  {
    path: '/hsk:level(1|2|3)/practice/:char',
    name: 'vocabulary-practice-word',
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

router.afterEach((to) => {
  const selfManagedRoutes = [
    'vocabulary',
    'vocabulary-word',
    'vocabulary-practice',
    'vocabulary-practice-word',
    'hsk-word-detail',
    'word-detail',
    'compare-detail',
    'blog-detail'
  ]

  if (selfManagedRoutes.includes(String(to.name))) {
    return
  }

  if (to.name === 'home') {
    setRouteJsonLd(null)
  } else if (to.name === 'hsk-hub' && to.params.level) {
    const lvl = Number(to.params.level)
    const count = lvl === 1 ? 150 : lvl === 2 ? 300 : 600
    setRouteJsonLd(getHskHubJsonLd(lvl, count))
  } else if (to.name === 'compare-list') {
    setRouteJsonLd(getModuleJsonLd('Confusing Words Lab', '/compare', 'Master tricky Chinese word pairs and triplets with side-by-side rules, pitfall analysis, and quizzes.'))
  } else if (to.name === 'blogs') {
    setRouteJsonLd(getModuleJsonLd('Chinese Learning Blogs', '/blogs', '24 longform educational guides covering Mandarin grammar rules, stroke order, and exam strategies.'))
  } else if (to.name === 'radicals') {
    setRouteJsonLd(getModuleJsonLd('Chinese Radicals Directory', '/radicals', '45+ essential Chinese character radicals categorized by semantic domain.'))
  } else if (to.name === 'pinyin') {
    setRouteJsonLd(getModuleJsonLd('Interactive Pinyin Soundboard', '/pinyin', 'Interactive soundboard with 21 initials, 24 finals, tone pitch contours, and ear trainer.'))
  } else if (to.name === 'score-calculator') {
    setRouteJsonLd(getModuleJsonLd('HSK Score Calculator', '/score-calculator', 'Calculate official HSK 1, 2, and 3 exam scores instantly.'))
  } else if (to.name === 'downloads') {
    setRouteJsonLd(getModuleJsonLd('HSK Course Material Downloads', '/downloads', 'Download official BLCUP Standard Course textbooks, workbooks, and audio.'))
  } else if (to.name === 'all-mock-tests') {
    setRouteJsonLd(getModuleJsonLd('33 Official Timed HSK Mock Tests', '/mock-tests', '33 realistic HSK mock examinations with countdown timers and instant grading.'))
  } else if (to.name === 'about') {
    setRouteJsonLd(getModuleJsonLd('About HSK Plus', '/about', 'Mission, pedagogical methodology, and open curriculum behind HSK Plus.'))
  } else if (to.name === 'contact') {
    setRouteJsonLd(getModuleJsonLd('Contact HSK Plus', '/contact', 'Get in touch with the HSK Plus editorial and technical team.'))
  } else if (to.name === 'privacy-policy') {
    setRouteJsonLd(getModuleJsonLd('Privacy Policy', '/privacy-policy', 'Privacy policy and data protection disclosures for HSK Plus.'))
  } else if (to.name === 'terms-of-service') {
    setRouteJsonLd(getModuleJsonLd('Terms of Service', '/terms-of-service', 'Terms and conditions for utilizing HSK Plus study materials.'))
  }
})
