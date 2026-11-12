/**
 * src/Utils/jsonLd.ts
 * Client-side and shared helper functions for JSON-LD Structured Data.
 * Injects and updates <script id="route-json-ld" type="application/ld+json">
 * for rich snippets, BreadcrumbList, DefinedTerm, FAQPage, and LearningResource schemas.
 */

export interface SchemaBreadcrumbItem {
  name: string
  url: string
}

/**
 * Updates or removes the route-specific JSON-LD script element in document.head.
 * Strictly escapes any `</script>` sequences to prevent parser breaks.
 */
export function setRouteJsonLd(schema: Record<string, any> | null): void {
  if (typeof document === 'undefined') return

  let scriptEl = document.getElementById('route-json-ld') as HTMLScriptElement | null

  if (!schema) {
    if (scriptEl) {
      scriptEl.remove()
    }
    return
  }

  if (!scriptEl) {
    scriptEl = document.createElement('script')
    scriptEl.id = 'route-json-ld'
    scriptEl.type = 'application/ld+json'
    document.head.appendChild(scriptEl)
  }

  const serialized = JSON.stringify(schema).replace(/<\/script>/gi, '<\\/script>')
  scriptEl.textContent = serialized
}

/**
 * Builds @graph JSON-LD for Vocabulary Word pages:
 * BreadcrumbList + DefinedTerm + FAQPage
 */
export function getVocabularyJsonLd(
  word: {
    character: string
    pinyin: string
    meaning: string
    category?: string
    level: number
    strokes?: number
    examples?: Array<{ chinese: string; pinyin: string; translation: string }>
  },
  level: number
) {
  const encodedChar = encodeURIComponent(word.character)
  const canonicalUrl = `https://desihop.net/hsk${level}/vocabulary/${encodedChar}`

  let examplesText = `Practice speaking and writing ${word.character} (${word.pinyin}) in daily Chinese conversation.`
  if (word.examples && word.examples.length > 0) {
    examplesText = word.examples.slice(0, 2).map((ex, idx) =>
      `Example ${idx + 1}: "${ex.chinese}" (${ex.pinyin}) translates to "${ex.translation}".`
    ).join(' ')
  }

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://desihop.net/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": `HSK ${level}`,
            "item": `https://desihop.net/hsk${level}`
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": `HSK ${level} Vocabulary`,
            "item": `https://desihop.net/hsk${level}/vocabulary`
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": `${word.character} (${word.pinyin})`,
            "item": canonicalUrl
          }
        ]
      },
      {
        "@type": "DefinedTerm",
        "name": `${word.character} (${word.pinyin})`,
        "description": `Chinese word "${word.character}" (${word.pinyin}) means "${word.meaning}". Official HSK ${level} vocabulary (${word.category || 'Word'}, ${word.strokes || 0} strokes).`,
        "termCode": word.character,
        "inDefinedTermSet": `https://desihop.net/hsk${level}/vocabulary`
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": `What does ${word.character} (${word.pinyin}) mean in Chinese?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `In Mandarin Chinese, ${word.character} (pronounced ${word.pinyin}) means "${word.meaning}". It is an official HSK ${level} vocabulary word.`
            }
          },
          {
            "@type": "Question",
            "name": `How many strokes are in the Chinese character ${word.character}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `The Chinese character ${word.character} (${word.pinyin}) has ${word.strokes || 0} strokes.`
            }
          },
          {
            "@type": "Question",
            "name": `How do you use ${word.character} (${word.pinyin}) in a Chinese sentence?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": examplesText
            }
          }
        ]
      }
    ]
  }
}

/**
 * Builds @graph JSON-LD for Confusing Word Comparison pages:
 * BreadcrumbList + [Article, LearningResource] + FAQPage
 */
export function getComparisonJsonLd(comp: {
  slug: string
  title: string
  shortTitle: string
  level: string
  summary: string
  words: Array<{ hanzi: string; pinyin: string; meaning: string; partOfSpeech?: string; coreFunction?: string }>
  faq?: Array<{ q: string; a: string }>
  mistakes?: Array<{ incorrectZh: string; incorrectPy?: string; correctZh: string; correctPy?: string; explanation: string }>
}) {
  const pairTitle = comp.title.split(':')[0].trim()
  const canonicalUrl = `https://desihop.net/compare/${comp.slug}`

  const faqItems: Array<{ "@type": string; name: string; acceptedAnswer: { "@type": string; text: string } }> = [
    {
      "@type": "Question",
      "name": `What is the difference between ${comp.words.map(w => `${w.hanzi} (${w.pinyin})`).join(' and ')} in Chinese?`,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": comp.summary
      }
    }
  ]

  if (comp.words.length >= 2) {
    faqItems.push({
      "@type": "Question",
      "name": `When should I use ${comp.words[0].hanzi} vs ${comp.words[1].hanzi}?`,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `Use ${comp.words[0].hanzi} (${comp.words[0].pinyin}) when: ${comp.words[0].coreFunction || comp.words[0].meaning}. Use ${comp.words[1].hanzi} (${comp.words[1].pinyin}) when: ${comp.words[1].coreFunction || comp.words[1].meaning}.`
      }
    })
  }

  if (comp.faq && comp.faq.length > 0) {
    comp.faq.slice(0, 2).forEach(f => {
      faqItems.push({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": f.a
        }
      })
    })
  } else if (comp.mistakes && comp.mistakes.length > 0) {
    const m = comp.mistakes[0]
    faqItems.push({
      "@type": "Question",
      "name": `What is a common mistake when using ${pairTitle}?`,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `A common error is saying "${m.incorrectZh}" instead of "${m.correctZh}". ${m.explanation}`
      }
    })
  }

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://desihop.net/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Confusing Words",
            "item": "https://desihop.net/compare"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": pairTitle,
            "item": canonicalUrl
          }
        ]
      },
      {
        "@type": ["Article", "LearningResource"],
        "headline": `${pairTitle}: Key Differences, Grammar Rules & Quiz`,
        "description": comp.summary,
        "educationalLevel": comp.level,
        "learningResourceType": "Grammar Guide",
        "inLanguage": "en",
        "url": canonicalUrl,
        "author": {
          "@type": "Organization",
          "name": "HSK Plus Pedagogical Team",
          "url": "https://desihop.net/about"
        },
        "publisher": {
          "@type": "Organization",
          "name": "HSK Plus",
          "url": "https://desihop.net/",
          "logo": "https://desihop.net/hskplus-logo.png"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqItems
      }
    ]
  }
}

/**
 * Builds @graph JSON-LD for Blog Post pages:
 * BreadcrumbList + BlogPosting
 */
export function getBlogJsonLd(blog: {
  slug: string
  title: string
  excerpt: string
  author: string
  date: string
  category?: string
}) {
  const canonicalUrl = `https://desihop.net/blogs/${blog.slug}`

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://desihop.net/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Blog",
            "item": "https://desihop.net/blogs"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": blog.title,
            "item": canonicalUrl
          }
        ]
      },
      {
        "@type": "BlogPosting",
        "headline": blog.title,
        "description": blog.excerpt,
        "url": canonicalUrl,
        "datePublished": blog.date,
        "author": {
          "@type": "Person",
          "name": blog.author
        },
        "publisher": {
          "@type": "Organization",
          "name": "HSK Plus",
          "url": "https://desihop.net/",
          "logo": "https://desihop.net/hskplus-logo.png"
        },
        "inLanguage": "en"
      }
    ]
  }
}

/**
 * Builds @graph JSON-LD for HSK Vocabulary Overview pages:
 * BreadcrumbList + ItemList
 */
export function getVocabularyOverviewJsonLd(level: number, vocabCount: number) {
  const canonicalUrl = `https://desihop.net/hsk${level}/vocabulary`

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://desihop.net/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": `HSK ${level}`,
            "item": `https://desihop.net/hsk${level}`
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": `HSK ${level} Vocabulary`,
            "item": canonicalUrl
          }
        ]
      },
      {
        "@type": "ItemList",
        "name": `HSK ${level} Vocabulary List (${vocabCount} Words)`,
        "description": `Complete directory of all ${vocabCount} official vocabulary words required for HSK ${level}.`,
        "numberOfItems": vocabCount,
        "itemListOrder": "https://schema.org/ItemListOrderAscending"
      }
    ]
  }
}

/**
 * Builds @graph JSON-LD for HSK Level Hub pages:
 * BreadcrumbList + Course
 */
export function getHskHubJsonLd(level: number, cumulativeWords: number) {
  const canonicalUrl = `https://desihop.net/hsk${level}`
  const educationalLevel =
    level === 1 ? 'Beginner (CEFR A1)' : level === 2 ? 'Elementary (CEFR A2)' : 'Intermediate (CEFR B1)'

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://desihop.net/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": `HSK ${level} Portal`,
            "item": canonicalUrl
          }
        ]
      },
      {
        "@type": "Course",
        "name": `HSK ${level} Complete Learning Curriculum`,
        "description": `Comprehensive preparation portal for HSK ${level}. Master all ${cumulativeWords} official vocabulary words, standard textbook lessons, core grammar patterns, dialogues, and timed exams.`,
        "provider": {
          "@type": "EducationalOrganization",
          "name": "HSK Plus",
          "url": "https://desihop.net/"
        },
        "educationalLevel": educationalLevel,
        "isAccessibleForFree": true,
        "url": canonicalUrl
      }
    ]
  }
}

/**
 * Builds @graph JSON-LD for Modules and Static Pages:
 * BreadcrumbList + LearningResource / WebPage
 */
export function getModuleJsonLd(
  moduleName: string,
  path: string,
  description: string,
  level?: number
) {
  const canonicalUrl = `https://desihop.net${path}`
  const breadcrumbs: Array<{ "@type": string; position: number; name: string; item: string }> = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://desihop.net/"
    }
  ]

  if (level) {
    breadcrumbs.push({
      "@type": "ListItem",
      "position": 2,
      "name": `HSK ${level}`,
      "item": `https://desihop.net/hsk${level}`
    })
    breadcrumbs.push({
      "@type": "ListItem",
      "position": 3,
      "name": moduleName,
      "item": canonicalUrl
    })
  } else {
    breadcrumbs.push({
      "@type": "ListItem",
      "position": 2,
      "name": moduleName,
      "item": canonicalUrl
    })
  }

  const entities: any[] = [
    {
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs
    }
  ]

  if (level) {
    entities.push({
      "@type": "LearningResource",
      "name": moduleName,
      "description": description,
      "educationalLevel": `HSK ${level}`,
      "isAccessibleForFree": true,
      "url": canonicalUrl
    })
  }

  return {
    "@context": "https://schema.org",
    "@graph": entities
  }
}
