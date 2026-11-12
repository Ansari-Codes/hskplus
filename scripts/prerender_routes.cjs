/**
 * scripts/prerender_routes.cjs
 * Post-build static HTML generator for GitHub Pages.
 * Pre-generates physical index.html files for all 673+ routes with pre-baked SEO tags,
 * canonical links, OpenGraph/Twitter cards, and semantic HTML fallback in <div id="app">.
 */

const fs = require('fs');
const path = require('path');

const DIST_DIR = path.resolve(__dirname, '..', 'dist');
const TEMPLATE_PATH = path.join(DIST_DIR, 'index.html');

if (!fs.existsSync(TEMPLATE_PATH)) {
  console.error(`[prerender] Error: Compiled template not found at ${TEMPLATE_PATH}. Run vite build first.`);
  process.exit(1);
}

const templateHtml = fs.readFileSync(TEMPLATE_PATH, 'utf8');

// Load Data Sources
// 1. Vocabulary Data
const vocabFile = fs.readFileSync(path.resolve(__dirname, '..', 'src/Data/vocabularyData.ts'), 'utf8');
const arrayStart = vocabFile.indexOf('export const VOCABULARY_DATA: VocabularyEntry[] = [');
const arrayEnd = vocabFile.indexOf('export function getVocabularyByLevel');
const arrayJsonStr = vocabFile.slice(arrayStart + 'export const VOCABULARY_DATA: VocabularyEntry[] = '.length, arrayEnd).trim().replace(/;$/, '');
const vocabData = eval(arrayJsonStr);

// 2. Comparisons Data
const compContent = fs.readFileSync(path.resolve(__dirname, '..', 'src/Data/comparisonsData.ts'), 'utf8');
const compArrayStart = compContent.indexOf('export const comparisonsData: ComparisonItem[] = [');
const compArrayEnd = compContent.indexOf('export function getComparisonBySlug');
const compJsonStr = compContent.slice(compArrayStart + 'export const comparisonsData: ComparisonItem[] = '.length, compArrayEnd).trim().replace(/;$/, '');
const compData = eval(compJsonStr);

// 3. Blogs Data
const blogsContent = fs.readFileSync(path.resolve(__dirname, '..', 'src/Data/blogsData.ts'), 'utf8');
const blogsArrayStart = blogsContent.indexOf('export const BLOGS_DATA: BlogPostContent[] = [');
const blogsArrayEnd = blogsContent.indexOf('const BLOG_ARTWORK:');
const blogsJsonStr = blogsContent.slice(blogsArrayStart + 'export const BLOGS_DATA: BlogPostContent[] = '.length, blogsArrayEnd).trim().replace(/;$/, '');
const blogsData = eval(blogsJsonStr);

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function escapeAttr(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function getShortMeaning(meaning, maxLen = 22) {
  if (!meaning) return '';
  const primary = meaning.split(/[,;/]/)[0].trim();
  if (primary.length <= maxLen) return primary;
  return primary.slice(0, maxLen - 1).trim() + '…';
}

function getVocabularyJsonLd(word, level, canonicalUrl) {
  let examplesText = `Practice speaking and writing ${word.character} (${word.pinyin}) in daily Chinese conversation.`;
  if (word.examples && word.examples.length > 0) {
    examplesText = word.examples.slice(0, 2).map((ex, idx) =>
      `Example ${idx + 1}: "${ex.chinese}" (${ex.pinyin}) translates to "${ex.translation}".`
    ).join(' ');
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
  };
}

function getComparisonJsonLd(comp, canonicalUrl) {
  const pairTitle = comp.title.split(':')[0].trim();

  const faqItems = [
    {
      "@type": "Question",
      "name": `What is the difference between ${comp.words.map(w => `${w.hanzi} (${w.pinyin})`).join(' and ')} in Chinese?`,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": comp.summary
      }
    }
  ];

  if (comp.words.length >= 2) {
    faqItems.push({
      "@type": "Question",
      "name": `When should I use ${comp.words[0].hanzi} vs ${comp.words[1].hanzi}?`,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `Use ${comp.words[0].hanzi} (${comp.words[0].pinyin}) when: ${comp.words[0].coreFunction || comp.words[0].meaning}. Use ${comp.words[1].hanzi} (${comp.words[1].pinyin}) when: ${comp.words[1].coreFunction || comp.words[1].meaning}.`
      }
    });
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
      });
    });
  } else if (comp.mistakes && comp.mistakes.length > 0) {
    const m = comp.mistakes[0];
    faqItems.push({
      "@type": "Question",
      "name": `What is a common mistake when using ${pairTitle}?`,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `A common error is saying "${m.incorrectZh}" instead of "${m.correctZh}". ${m.explanation}`
      }
    });
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
  };
}

function getBlogJsonLd(blog, canonicalUrl) {
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
  };
}

function getVocabularyOverviewJsonLd(level, vocabCount, canonicalUrl) {
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
  };
}

function getHskHubJsonLd(level, cumulativeWords, canonicalUrl) {
  const educationalLevel =
    level === 1 ? 'Beginner (CEFR A1)' : level === 2 ? 'Elementary (CEFR A2)' : 'Intermediate (CEFR B1)';

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
  };
}

function getModuleJsonLd(moduleName, canonicalUrl, description, level) {
  const breadcrumbs = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://desihop.net/"
    }
  ];

  if (level) {
    breadcrumbs.push({
      "@type": "ListItem",
      "position": 2,
      "name": `HSK ${level}`,
      "item": `https://desihop.net/hsk${level}`
    });
    breadcrumbs.push({
      "@type": "ListItem",
      "position": 3,
      "name": moduleName,
      "item": canonicalUrl
    });
  } else {
    breadcrumbs.push({
      "@type": "ListItem",
      "position": 2,
      "name": moduleName,
      "item": canonicalUrl
    });
  }

  const entities = [
    {
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs
    }
  ];

  if (level) {
    entities.push({
      "@type": "LearningResource",
      "name": moduleName,
      "description": description,
      "educationalLevel": `HSK ${level}`,
      "isAccessibleForFree": true,
      "url": canonicalUrl
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": entities
  };
}

function generateHtml(meta) {
  let html = templateHtml;

  // Title
  html = html.replace(/<title>[^<]*<\/title>/i, `<title>${escapeHtml(meta.title)}</title>`);

  // Meta Title
  html = html.replace(/<meta\s+[^>]*?name=["']title["'][^>]*>/i, `<meta name="title" content="${escapeAttr(meta.title)}" />`);

  // Meta Description
  html = html.replace(/<meta\s+[^>]*?name=["']description["'][^>]*>/i, `<meta name="description" content="${escapeAttr(meta.description)}" />`);

  // Meta Keywords
  if (meta.keywords) {
    html = html.replace(/<meta\s+[^>]*?name=["']keywords["'][^>]*>/i, `<meta name="keywords" content="${escapeAttr(meta.keywords)}" />`);
  }

  // OpenGraph Tags
  html = html.replace(/<meta\s+[^>]*?property=["']og:title["'][^>]*>/i, `<meta property="og:title" content="${escapeAttr(meta.title)}" />`);
  html = html.replace(/<meta\s+[^>]*?property=["']og:description["'][^>]*>/i, `<meta property="og:description" content="${escapeAttr(meta.description)}" />`);
  html = html.replace(/<meta\s+[^>]*?property=["']og:url["'][^>]*>/i, `<meta property="og:url" content="${escapeAttr(meta.canonical)}" />`);

  // Twitter Tags
  html = html.replace(/<meta\s+[^>]*?name=["']twitter:title["'][^>]*>/i, `<meta name="twitter:title" content="${escapeAttr(meta.title)}" />`);
  html = html.replace(/<meta\s+[^>]*?name=["']twitter:description["'][^>]*>/i, `<meta name="twitter:description" content="${escapeAttr(meta.description)}" />`);
  html = html.replace(/<meta\s+[^>]*?name=["']twitter:url["'][^>]*>/i, `<meta name="twitter:url" content="${escapeAttr(meta.canonical)}" />`);

  // Canonical Link
  html = html.replace(/<link\s+[^>]*?rel=["']canonical["'][^>]*>/i, `<link rel="canonical" href="${escapeAttr(meta.canonical)}" />`);

  // Route-Specific JSON-LD
  if (meta.jsonLd) {
    const jsonLdString = JSON.stringify(meta.jsonLd).replace(/<\/script>/gi, '<\\/script>');
    const scriptTag = `    <script id="route-json-ld" type="application/ld+json">${jsonLdString}</script>`;
    if (html.includes('id="route-json-ld"')) {
      html = html.replace(/<script id="route-json-ld"[\s\S]*?<\/script>/i, scriptTag);
    } else {
      html = html.replace('</head>', `  ${scriptTag}\n  </head>`);
    }
  } else if (html.includes('id="route-json-ld"')) {
    html = html.replace(/<script id="route-json-ld"[\s\S]*?<\/script>\s*/i, '');
  }

  // Semantic SEO Summary block inside <div id="app">
  if (meta.summaryHtml) {
    const semanticContent = `
      <div id="seo-prerender-content" style="padding: 2rem; max-width: 900px; margin: 0 auto; font-family: system-ui, -apple-system, sans-serif; line-height: 1.6;">
        <nav style="margin-bottom: 1.5rem; font-size: 0.875rem; color: #6b7280;">
          <a href="https://desihop.net/" style="color: #c23314; text-decoration: none;">HSK Plus Home</a> &gt;
          <span style="color: #374151;">${escapeHtml(meta.crumb || 'Curriculum')}</span>
        </nav>
        <article>
          ${meta.summaryHtml}
        </article>
      </div>
    `.trim();
    html = html.replace('<div id="app"></div>', `<div id="app">${semanticContent}</div>`);
  }

  return html;
}

function writeRouteFile(routePath, content) {
  // Normalize path removing leading/trailing slashes
  const cleanPath = routePath.replace(/^\/+/, '').replace(/\/+$/, '');
  const targetDir = cleanPath === '' ? DIST_DIR : path.join(DIST_DIR, cleanPath);
  
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const filePath = path.join(targetDir, 'index.html');
  fs.writeFileSync(filePath, content, 'utf8');
}

const routesToPrerender = [];

// 1. Core Static Pages
const corePages = [
  {
    path: '/',
    title: 'HSK Plus — Free HSK 1, 2 & 3 Learning Platform & Encyclopedia',
    description: '100% free comprehensive Chinese Mandarin learning encyclopedia for HSK 1, 2, and 3. Includes 600 official vocabulary words with native audio, 50 BLCUP Standard Course lessons, 50 sentence patterns, 30 dialogues, 33 timed mock exams, stroke order animation, AI calligraphy canvas scoring, and score calculator.',
    canonical: 'https://desihop.net/',
    keywords: 'HSK, HSK 1, HSK 2, HSK 3, Chinese vocabulary, learn Mandarin Chinese, HSK mock test, HSK lessons, HSK grammar patterns, Hanzi writer, Chinese stroke order, Tian Zi Ge, HSK score calculator, CSC scholarship, Chinese proficiency test',
    crumb: 'Home',
    summaryHtml: `
      <h1>HSK Plus — The Complete Online School for HSK Mastery</h1>
      <p>100% Free comprehensive Chinese Mandarin learning academy for HSK 1, 2, and 3. Master 600 official vocabulary words with native speech audio, 50 standard textbook lessons, interactive Tian Zi Ge stroke animations, 15 confusing words comparative guides, and 33 timed mock exams.</p>
    `
  },
  {
    path: '/about',
    title: 'About HSK Plus — Free Chinese Learning Platform Mission & Team',
    description: 'Learn about the mission, pedagogical methodology, and open curriculum behind HSK Plus. Dedicated to democratizing Chinese language education worldwide.',
    canonical: 'https://desihop.net/about',
    keywords: 'about HSK Plus, learn Chinese free, HSK curriculum, Chinese language academy',
    crumb: 'About',
    summaryHtml: `
      <h1>About HSK Plus</h1>
      <p>Our mission is to make standard Mandarin Chinese fluency accessible to everyone worldwide, 100% free with zero paywalls. Built by educators and linguists following official CLEC / Hanban standards.</p>
    `
  },
  {
    path: '/contact',
    title: 'Contact HSK Plus — Support, Feedback & Academic Inquiries',
    description: 'Get in touch with the HSK Plus editorial and technical team for curriculum questions, feature requests, or partnership inquiries.',
    canonical: 'https://desihop.net/contact',
    keywords: 'contact HSK Plus, feedback, Chinese learning support',
    crumb: 'Contact',
    summaryHtml: `
      <h1>Contact HSK Plus</h1>
      <p>Have questions, corrections, or suggestions? Reach out to our pedagogical team. We review all community feedback to improve course materials.</p>
    `
  },
  {
    path: '/privacy-policy',
    aliases: ['/privacy'],
    title: 'Privacy Policy — HSK Plus',
    description: 'Privacy policy and data protection disclosures for HSK Plus. Zero personal tracking and 100% local study progress storage.',
    canonical: 'https://desihop.net/privacy-policy',
    keywords: 'privacy policy, HSK Plus privacy, local storage',
    crumb: 'Privacy Policy',
    summaryHtml: `
      <h1>Privacy Policy</h1>
      <p>HSK Plus respects learner privacy. All progress tracking, streaks, and test scores are stored locally in your browser. No mandatory account registration or trackers.</p>
    `
  },
  {
    path: '/terms-of-service',
    aliases: ['/terms'],
    title: 'Terms of Service — HSK Plus',
    description: 'Terms and conditions for utilizing HSK Plus study materials, mock tests, and curriculum tools.',
    canonical: 'https://desihop.net/terms-of-service',
    keywords: 'terms of service, HSK Plus terms',
    crumb: 'Terms of Service',
    summaryHtml: `
      <h1>Terms of Service</h1>
      <p>All curriculum content, exercises, and study tools on HSK Plus are provided free of charge for personal educational purposes.</p>
    `
  },
  {
    path: '/score-calculator',
    title: 'Official HSK Score Calculator & Pass Predictor (HSK 1, 2, 3) — HSK Plus',
    description: 'Calculate your official HSK 1, 2, and 3 exam scores instantly. Check passing thresholds, section weights, and percentile readiness.',
    canonical: 'https://desihop.net/score-calculator',
    keywords: 'HSK score calculator, HSK passing score, HSK 1 score, HSK 2 score, HSK 3 score, calculate HSK marks',
    crumb: 'Score Calculator',
    summaryHtml: `
      <h1>Official HSK Exam Score Calculator</h1>
      <p>Interactive score calculator for HSK 1, HSK 2, and HSK 3 exams. Input your listening, reading, and writing marks to determine your pass/fail status and certification readiness.</p>
    `
  },
  {
    path: '/downloads',
    title: 'Download Official HSK Course Materials (PDFs & Audio) — HSK Plus',
    description: 'Direct download links for official BLCUP Standard Course textbooks, workbooks, teacher guides, vocabulary sheets, and listening MP3 audio.',
    canonical: 'https://desihop.net/downloads',
    keywords: 'download HSK textbook, HSK 1 pdf, HSK 2 pdf, HSK 3 pdf, HSK standard course audio mp3, HSK vocabulary sheet',
    crumb: 'Downloads',
    summaryHtml: `
      <h1>Official Standard Course Material Downloads</h1>
      <p>Download official BLCUP textbook PDFs, workbooks, teacher guides, vocabulary sheets, and listening audio packs hosted on high-speed releases for HSK 1, 2, and 3.</p>
    `
  },
  {
    path: '/mock-tests',
    title: '33 Official Timed HSK Mock Tests (HSK 1, 2, 3) — HSK Plus',
    description: 'Practice with 33 realistic HSK mock examinations with countdown timers, authentic listening audio tracks, reading sections, and instant auto-grading.',
    canonical: 'https://desihop.net/mock-tests',
    keywords: 'HSK mock tests, timed HSK practice, free HSK online test, HSK 1 exam test, HSK 2 test, HSK 3 test',
    crumb: 'Mock Tests',
    summaryHtml: `
      <h1>33 Official Timed HSK Mock Examinations</h1>
      <p>Simulate official exam conditions with 33 full-length mock tests covering HSK 1, HSK 2, and HSK 3. Includes authentic listening audio, reading comprehension, and instant grading.</p>
    `
  },
  {
    path: '/blogs',
    title: 'Chinese Learning Blogs & Masterclasses (24 In-Depth Guides) — HSK Plus',
    description: '24 longform educational guides covering Mandarin grammar rules, stroke order, radical memorization, exam strategies, and scholarship guides.',
    canonical: 'https://desihop.net/blogs',
    keywords: 'chinese learning blog, HSK study guides, mandarin grammar masterclasses, how to pass HSK',
    crumb: 'Blogs',
    summaryHtml: `
      <h1>Chinese Language Blogs & Masterclasses</h1>
      <p>Explore 24 comprehensive guides on Mandarin tones, Hanzi stroke order, radical memorization techniques, sentence formulas, and CSC scholarship strategies.</p>
    `
  },
  {
    path: '/compare',
    title: 'Confusing Words Lab: 15 Essential Chinese Comparisons — HSK Plus',
    description: 'Master the nuances of confusing Chinese word pairs and triplets: 不 vs 没, 二 vs 两, 的 vs 得 vs 地, 会 vs 能 vs 可以, and more.',
    canonical: 'https://desihop.net/compare',
    keywords: 'confusing chinese words, bu vs mei, er vs liang, de de de, hui vs neng vs keyi, chinese grammar comparisons',
    crumb: 'Confusing Words',
    summaryHtml: `
      <h1>Confusing Words & Grammar Comparison Lab</h1>
      <p>Clear, definitive comparative guides for the 15 most tricky word sets in Mandarin: 不 vs 没, 二 vs 两, 的 vs 得 vs 地, 会 vs 能 vs 可以, and more.</p>
    `
  },
  {
    path: '/radicals',
    title: 'Chinese Radicals Directory (部首): 45+ Essential Semantic Roots — HSK Plus',
    description: 'Comprehensive reference of 45+ essential Chinese character radicals categorized by semantic domain with stroke counts, origins, and vocabulary.',
    canonical: 'https://desihop.net/radicals',
    keywords: 'chinese radicals, 部首, kangxi radicals, radical list with meanings, learn chinese characters',
    crumb: 'Radicals',
    summaryHtml: `
      <h1>Chinese Radicals (部首) Encyclopedia</h1>
      <p>Master 45+ core semantic roots and components across 6 categories. Understand the pictographic origin and structural meaning behind Chinese characters.</p>
    `
  },
  {
    path: '/pinyin',
    aliases: ['/pinyin-trainer', '/pronunciation'],
    title: 'Interactive Pinyin & 4 Tones Soundboard with Audio — HSK Plus',
    description: 'Master Mandarin pronunciation with our interactive soundboard: 21 initials, 24 finals, tone pitch contours, tone sandhi laws, and ear trainer.',
    canonical: 'https://desihop.net/pinyin',
    keywords: 'pinyin soundboard, mandarin tones, chinese pronunciation with audio, 4 tones chart, learn pinyin',
    crumb: 'Pinyin Soundboard',
    summaryHtml: `
      <h1>Interactive Pinyin & Four Tones Soundboard</h1>
      <p>Complete pronunciation studio featuring all 21 initials and 24 finals, high-fidelity audio samples, pitch contour graphs, and tone sandhi rules.</p>
    `
  },
  {
    path: '/hsk-intro',
    title: '15-Minute HSK Starter Lesson for Complete Beginners — HSK Plus',
    description: 'Your first 15 minutes of Mandarin Chinese: learn the 4 tones, 5 survival phrases, and test yourself with an interactive onboarding quiz.',
    canonical: 'https://desihop.net/hsk-intro',
    keywords: 'beginner chinese, HSK starter lesson, first chinese lesson, learn mandarin free',
    crumb: 'Starter Lesson',
    summaryHtml: `
      <h1>15-Minute HSK Quick Starter Lesson</h1>
      <p>Ideal introductory lesson for complete beginners. Learn the 4 tones, core greeting phrases (你好, 谢谢, 再见), and take an instant self-check quiz.</p>
    `
  },
  {
    path: '/english-speakers-guide',
    title: 'HSK for English Speakers: 7 Core Mindset Shifts — HSK Plus',
    description: 'The architectural blueprint for native English speakers learning Chinese: zero verb conjugations, time-before-verb word order, and aspect particles.',
    canonical: 'https://desihop.net/english-speakers-guide',
    keywords: 'chinese for english speakers, learn chinese grammar, mandarin for foreigners, HSK english guide',
    crumb: 'English Speakers Guide',
    summaryHtml: `
      <h1>HSK Guide for Native English Speakers</h1>
      <p>Discover the 7 foundational structural shifts that simplify Mandarin: zero verb conjugations, invariable word forms, time-before-action word order, and aspectual logic.</p>
    `
  }
];

corePages.forEach(p => {
  const jsonLd = p.path === '/' ? null : getModuleJsonLd(p.crumb, p.canonical, p.description);
  routesToPrerender.push({
    ...p,
    jsonLd
  });
  if (p.aliases) {
    p.aliases.forEach(alias => {
      const aliasCanonical = `https://desihop.net${alias}`;
      routesToPrerender.push({
        ...p,
        path: alias,
        canonical: aliasCanonical,
        jsonLd: getModuleJsonLd(p.crumb, aliasCanonical, p.description)
      });
    });
  }
});

// 2. HSK Level Hubs & Modules
[1, 2, 3].forEach(lvl => {
  const vocabCount = lvl === 3 ? 300 : 150;
  const lessonsCount = lvl === 3 ? 20 : 15;
  const patternsCount = lvl === 3 ? 20 : 15;
  const cumulativeWords = lvl === 1 ? 150 : lvl === 2 ? 300 : 600;

  const levelModules = [
    {
      path: `/hsk${lvl}`,
      title: `HSK ${lvl} Learning Hub: Complete Free Preparation Academy (${cumulativeWords} Words, Lessons & Tests) | HSK Plus`,
      description: `Master HSK ${lvl} with ${cumulativeWords} official vocabulary words with speech audio, ${lessonsCount} Standard Course lessons, ${patternsCount} grammar patterns, 10 dialogues, and 11 timed mock exams.`,
      canonical: `https://desihop.net/hsk${lvl}`,
      keywords: `HSK ${lvl}, HSK ${lvl} hub, learn chinese HSK ${lvl}, HSK ${lvl} syllabus, HSK ${lvl} preparation`,
      crumb: `HSK ${lvl} Hub`,
      summaryHtml: `
        <h1>HSK ${lvl} Complete Learning Hub</h1>
        <p>Comprehensive preparation portal for HSK ${lvl}. Master all ${cumulativeWords} official vocabulary words, standard textbook lessons, core grammar patterns, dialogues, and timed exams.</p>
      `
    },
    {
      path: `/hsk${lvl}/vocabulary`,
      title: `HSK ${lvl} Vocabulary List (All ${vocabCount} Words) + Audio, PDF & Flashcards | HSK Plus`,
      description: `Complete official HSK ${lvl} vocabulary list with all ${vocabCount} words. Includes native audio pronunciation, pinyin, English definitions, stroke counts, and example sentences.`,
      canonical: `https://desihop.net/hsk${lvl}/vocabulary`,
      keywords: `HSK ${lvl} vocabulary list, HSK ${lvl} words, learn chinese HSK ${lvl}, HSK ${lvl} audio, HSK ${lvl} pdf, HSK flashcards`,
      crumb: `HSK ${lvl} Vocabulary`,
      summaryHtml: `
        <h1>HSK ${lvl} Official Vocabulary Encyclopedia</h1>
        <p>Complete directory of all ${vocabCount} vocabulary words required for HSK ${lvl}. Includes native audio pronunciation, character breakdowns, radicals, and example sentences.</p>
        <div style="margin-top: 2rem;">
          <h2>All ${vocabData.filter(w => w.level === lvl).length} HSK ${lvl} Vocabulary Words</h2>
          <ul style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 0.75rem; list-style: none; padding: 0; margin-top: 1rem;">
            ${vocabData.filter(w => w.level === lvl).map(w => `
              <li style="background: #ffffff; padding: 0.75rem; border-radius: 0.5rem; border: 1px solid #e5e7eb;">
                <a href="https://desihop.net/hsk${lvl}/vocabulary/${encodeURIComponent(w.character)}" style="text-decoration: none; color: inherit; display: block;">
                  <div style="font-size: 1.5rem; font-weight: bold; color: #c23314; font-family: serif;">${escapeHtml(w.character)}</div>
                  <div style="font-size: 0.875rem; font-weight: 600; color: #4b5563;">${escapeHtml(w.pinyin)}</div>
                  <div style="font-size: 0.75rem; color: #6b7280; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${escapeHtml(w.meaning)}</div>
                </a>
              </li>
            `).join('')}
          </ul>
        </div>
      `
    },
    {
      path: `/hsk${lvl}/practice`,
      title: `HSK ${lvl} Chinese Character Stroke Order Studio | Tian Zi Ge Writing Lab — HSK Plus`,
      description: `Master HSK ${lvl} Chinese character stroke order with step-by-step stroke animations, stroke order quiz mode, and freehand Tian Zi Ge calligraphy canvas scoring.`,
      canonical: `https://desihop.net/hsk${lvl}/practice`,
      keywords: `HSK ${lvl} stroke order, chinese handwriting, Tian Zi Ge, write chinese characters HSK ${lvl}`,
      crumb: `HSK ${lvl} Writing Studio`,
      summaryHtml: `
        <h1>HSK ${lvl} Tian Zi Ge Hanzi Writing Studio</h1>
        <p>Practice writing Chinese characters with animated stroke order guides, stroke quiz mode, and freehand canvas scoring for HSK ${lvl} vocabulary.</p>
      `
    },
    {
      path: `/hsk${lvl}/lessons`,
      aliases: [`/hsk${lvl}/lesson`],
      title: `HSK ${lvl} Standard Course Lessons (${lessonsCount} Lessons with Audio & Grammar) — HSK Plus`,
      description: `Structured standard textbook curriculum for HSK ${lvl} covering core vocabulary, grammar explanations, dialogue texts, and comprehension exercises.`,
      canonical: `https://desihop.net/hsk${lvl}/lessons`,
      keywords: `HSK ${lvl} lessons, standard course HSK ${lvl}, BLCUP HSK ${lvl}, learn chinese lessons`,
      crumb: `HSK ${lvl} Lessons`,
      summaryHtml: `
        <h1>HSK ${lvl} Standard Course Textbook Lessons</h1>
        <p>Step-by-step curriculum aligned with official standard course textbooks. Covers lesson objectives, core vocabulary, grammar notes, dialogue reading, and quizzes.</p>
      `
    },
    {
      path: `/hsk${lvl}/sentences`,
      aliases: [`/hsk${lvl}/sentence`],
      title: `HSK ${lvl} Grammar Sentence Patterns (${patternsCount} Formulas & Audio Examples) — HSK Plus`,
      description: `The complete grammatical blueprint for HSK ${lvl}. ${patternsCount} core sentence pattern formulas, structural rules, detailed usage guidelines, and audio examples.`,
      canonical: `https://desihop.net/hsk${lvl}/sentences`,
      keywords: `HSK ${lvl} grammar, chinese sentence structure, HSK ${lvl} patterns, mandarin grammar rules`,
      crumb: `HSK ${lvl} Sentence Patterns`,
      summaryHtml: `
        <h1>HSK ${lvl} Sentence Patterns & Grammar Blueprint</h1>
        <p>Master ${patternsCount} essential grammar formulas for HSK ${lvl}. Includes sentence structural formulas, contextual explanations, and audio example sentences.</p>
      `
    },
    {
      path: `/hsk${lvl}/dialogs`,
      aliases: [`/hsk${lvl}/dialog`],
      title: `HSK ${lvl} Dialogue Scenarios: Everyday Chinese Audio Conversations — HSK Plus`,
      description: `Authentic conversational exchanges for HSK ${lvl}: introductions, shopping, dining, travel, and campus life with line-by-line native speech audio.`,
      canonical: `https://desihop.net/hsk${lvl}/dialogs`,
      keywords: `HSK ${lvl} dialogues, conversational chinese, everyday mandarin conversations, HSK dialogue audio`,
      crumb: `HSK ${lvl} Dialogues`,
      summaryHtml: `
        <h1>HSK ${lvl} Situational Dialogues & Conversations</h1>
        <p>Real-world conversational exchanges for HSK ${lvl}. Practice everyday speaking scenarios with line-by-line native speech audio and pinyin toggles.</p>
      `
    },
    {
      path: `/hsk${lvl}/tests`,
      aliases: [`/hsk${lvl}/test`],
      title: `Free HSK ${lvl} Mock Test Online | Real Exam Timer & Instant Score — HSK Plus`,
      description: `Simulate the real HSK ${lvl} exam under timed constraints. Official listening audio, reading comprehension, and instant grading.`,
      canonical: `https://desihop.net/hsk${lvl}/tests`,
      keywords: `HSK ${lvl} mock test, free HSK ${lvl} practice exam, timed HSK test, HSK ${lvl} online test with audio`,
      crumb: `HSK ${lvl} Mock Tests`,
      summaryHtml: `
        <h1>HSK ${lvl} Official Timed Mock Tests</h1>
        <p>Take full-length timed mock tests simulating the actual HSK ${lvl} exam. Includes audio listening tracks, reading sections, and automated instant scoring.</p>
      `
    }
  ];

  levelModules.forEach(mod => {
    let jsonLd;
    if (mod.path === `/hsk${lvl}`) {
      jsonLd = getHskHubJsonLd(lvl, cumulativeWords, mod.canonical);
    } else if (mod.path === `/hsk${lvl}/vocabulary`) {
      jsonLd = getVocabularyOverviewJsonLd(lvl, vocabCount, mod.canonical);
    } else {
      jsonLd = getModuleJsonLd(mod.crumb, mod.canonical, mod.description, lvl);
    }

    routesToPrerender.push({
      ...mod,
      jsonLd
    });
    if (mod.aliases) {
      mod.aliases.forEach(alias => {
        const aliasCanonical = `https://desihop.net${alias}`;
        routesToPrerender.push({
          ...mod,
          path: alias,
          canonical: aliasCanonical,
          jsonLd
        });
      });
    }
  });
});

// 3. Educational Blog Guides (24 blogs)
blogsData.forEach(blog => {
  const canonical = `https://desihop.net/blogs/${blog.slug}`;
  const jsonLd = getBlogJsonLd(blog, canonical);

  routesToPrerender.push({
    path: `/blogs/${blog.slug}`,
    title: `${blog.title} — HSK Plus`,
    description: blog.excerpt,
    canonical,
    keywords: `${blog.title}, learn chinese, HSK study guide, ${blog.category}`,
    crumb: `Blog: ${blog.title}`,
    jsonLd,
    summaryHtml: `
      <h1>${escapeHtml(blog.title)}</h1>
      <p style="font-size: 1.125rem; color: #4b5563;">${escapeHtml(blog.excerpt)}</p>
      <div style="font-size: 0.875rem; color: #6b7280; margin: 1rem 0;">
        <span>Author: ${escapeHtml(blog.author)}</span> &bull;
        <span>Published: ${escapeHtml(blog.date)}</span> &bull;
        <span>Reading Time: ${escapeHtml(blog.readTime)}</span>
      </div>
    `
  });
});

// 4. Confusing Word Guides (15 guides)
compData.forEach(comp => {
  const pairTitle = comp.title.split(':')[0].trim();
  const title = `${pairTitle}: Key Differences, Grammar Rules & Quiz | HSK Plus`;
  const description = `Confused by ${pairTitle} in Chinese? Learn the exact grammar rules, side-by-side example sentences, common mistakes, and take a quick interactive quiz.`;
  const canonical = `https://desihop.net/compare/${comp.slug}`;
  const keywords = `${comp.words.map(w => w.hanzi).join(', ')}, ${comp.words.map(w => w.pinyin).join(', ')}, ${pairTitle}, chinese grammar difference, ${comp.level} grammar, confusing words chinese`;
  const jsonLd = getComparisonJsonLd(comp, canonical);

  const comparedWordsLinksHtml = `
    <div style="margin-top: 1.5rem; padding: 1.25rem; background: #f9fafb; border-radius: 0.75rem; border: 1px solid #e5e7eb;">
      <h3 style="margin-top: 0; font-size: 1.15rem; color: #111827;">Vocabulary Profiles &amp; Stroke Order Practice</h3>
      <p style="font-size: 0.85rem; color: #6b7280; margin: 0 0 1rem 0;">Explore individual character entries, native speech pronunciation, and Tian Zi Ge writing labs.</p>
      <ul style="list-style: none; padding: 0; margin: 0; display: grid; gap: 0.75rem;">
        ${comp.words.map(w => {
          const wEntry = vocabData.find(v => v.character === w.hanzi);
          const wLevel = wEntry ? wEntry.level : 1;
          const enc = encodeURIComponent(w.hanzi);
          return `
            <li style="padding: 0.75rem; background: #ffffff; border-radius: 0.5rem; border: 1px solid #e5e7eb;">
              <div>
                <strong style="font-size: 1.35rem; color: #c23314; font-family: serif;">${escapeHtml(w.hanzi)}</strong>
                <span style="font-weight: bold; color: #4b5563;">(${escapeHtml(w.pinyin)})</span> &mdash;
                <span style="color: #374151;">${escapeHtml(w.meaning)} (${escapeHtml(w.partOfSpeech)})</span>
              </div>
              <p style="margin: 0.25rem 0 0.5rem 0; font-size: 0.8rem; color: #6b7280;">${escapeHtml(w.coreFunction)}</p>
              <div style="font-size: 0.85rem;">
                <a href="https://desihop.net/hsk${wLevel}/vocabulary/${enc}" style="color: #c23314; font-weight: bold; text-decoration: underline; margin-right: 1.25rem;">View HSK ${wLevel} Vocabulary Profile &rarr;</a>
                <a href="https://desihop.net/hsk${wLevel}/practice/${enc}" style="color: #4b5563; font-weight: 600; text-decoration: underline;">Practice Writing on Canvas &rarr;</a>
              </div>
            </li>
          `;
        }).join('')}
      </ul>
    </div>
  `;

  const faqEntity = jsonLd['@graph'].find(e => e['@type'] === 'FAQPage');
  const compFaqsHtml = faqEntity && faqEntity.mainEntity ? `
    <div style="margin-top: 2rem; border-top: 1px solid #e5e7eb; padding-top: 1.25rem;">
      <h3 style="font-size: 1.25rem; color: #111827; margin-bottom: 1rem;">Frequently Asked Questions &amp; Practical Rules</h3>
      ${faqEntity.mainEntity.map(f => `
        <div style="margin-bottom: 1rem;">
          <h4 style="font-size: 1rem; font-weight: bold; color: #1f2937; margin: 0 0 0.25rem 0;">${escapeHtml(f.name)}</h4>
          <p style="margin: 0; color: #4b5563; line-height: 1.5;">${escapeHtml(f.acceptedAnswer.text)}</p>
        </div>
      `).join('')}
    </div>
  ` : '';

  routesToPrerender.push({
    path: `/compare/${comp.slug}`,
    title,
    description,
    canonical,
    keywords,
    crumb: `Comparison: ${comp.shortTitle}`,
    jsonLd,
    summaryHtml: `
      <h1>${escapeHtml(comp.title)}</h1>
      <p style="font-size: 1.125rem; font-weight: 500; color: #1f2937;">${escapeHtml(comp.summary)}</p>
      <div style="margin-top: 1rem;">
        <span style="display: inline-block; background: #fee2e2; color: #991b1b; padding: 0.25rem 0.5rem; border-radius: 0.25rem; font-size: 0.75rem; font-weight: bold;">
          ${escapeHtml(comp.level)} &bull; ${escapeHtml(comp.cefr)}
        </span>
      </div>
      ${comparedWordsLinksHtml}
      ${compFaqsHtml}
    `
  });
});

// 5. Individual Vocabulary Words across HSK 1, 2, 3 (599 unique words)
const seenWordKeys = new Set();

vocabData.forEach(word => {
  const key = `${word.level}-${word.character}`;
  if (seenWordKeys.has(key)) return;
  seenWordKeys.add(key);

  const encodedChar = encodeURIComponent(word.character);
  const shortMeaning = getShortMeaning(word.meaning);

  // High-CTR Title & Description Formulas
  const title = `${word.character} (${word.pinyin}) Meaning "${shortMeaning}" | HSK ${word.level} Stroke Order & Audio`;
  const description = `What does ${word.character} (${word.pinyin}) mean in Chinese? Definition: "${word.meaning}". Practice interactive stroke order (${word.strokes || ''} strokes), listen to native audio, and read HSK ${word.level} example sentences.`;
  const canonical = `https://desihop.net/hsk${word.level}/vocabulary/${encodedChar}`;
  const keywords = `${word.character}, ${word.pinyin}, ${word.meaning}, ${word.character} meaning, ${word.character} stroke order, ${word.character} chinese, HSK ${word.level} vocabulary, learn chinese`;

  const examplesHtml = word.examples && word.examples.length
    ? `
      <div style="margin-top: 1.5rem;">
        <h3>Example Sentences</h3>
        <ul>
          ${word.examples.map(ex => `
            <li style="margin-bottom: 0.75rem;">
              <div style="font-size: 1.125rem; font-weight: bold; color: #111827;">${escapeHtml(ex.chinese)}</div>
              <div style="color: #c23314; font-size: 0.875rem;">${escapeHtml(ex.pinyin)}</div>
              <div style="color: #4b5563; font-size: 0.875rem;">${escapeHtml(ex.translation)}</div>
            </li>
          `).join('')}
        </ul>
      </div>
    `
    : '';

  // Interlinking & Content Enrichment
  const levelWords = vocabData.filter(w => w.level === word.level);
  const wordIndex = levelWords.findIndex(w => w.character === word.character);
  const prevWord = wordIndex > 0 ? levelWords[wordIndex - 1] : null;
  const nextWord = wordIndex < levelWords.length - 1 ? levelWords[wordIndex + 1] : null;

  // 1. Confusing Word Comparison Match
  const matchingComp = compData.find(c => c.words.some(w => w.hanzi === word.character));
  const compCardHtml = matchingComp ? `
    <div style="margin: 1.5rem 0; padding: 1.25rem; border-radius: 0.75rem; background: #fff1f2; border: 1px solid #fecdd3;">
      <div style="font-size: 0.875rem; font-weight: bold; color: #be123c; margin-bottom: 0.25rem;">
        ⚖️ Grammar Alert &amp; Confusing Word Guide
      </div>
      <p style="margin: 0.25rem 0 0.75rem 0; font-size: 0.95rem; color: #1f2937; line-height: 1.5;">
        Confused between <strong>${matchingComp.words.map(w => `${escapeHtml(w.hanzi)} (${escapeHtml(w.pinyin)})`).join(' and ')}</strong>?
        Read our detailed side-by-side grammar comparison, key distinction rules, and take the interactive quiz.
      </p>
      <a href="https://desihop.net/compare/${matchingComp.slug}" style="display: inline-block; font-weight: bold; color: #c23314; text-decoration: underline;">
        Read the ${escapeHtml(matchingComp.shortTitle)} Grammar Guide &amp; Quiz &rarr;
      </a>
    </div>
  ` : '';

  // 2. Interactive Writing Studio Link
  const practiceLinkHtml = `
    <div style="margin: 1.5rem 0;">
      <a href="https://desihop.net/hsk${word.level}/practice/${encodedChar}" style="display: inline-block; padding: 0.75rem 1.25rem; background: #c23314; color: #ffffff; text-decoration: none; border-radius: 0.5rem; font-weight: bold; font-size: 0.95rem;">
        ✍️ Practice Writing ${escapeHtml(word.character)} on Interactive Tian Zi Ge Canvas &rarr;
      </a>
    </div>
  `;

  // 3. Visible FAQ Section (Matching JSON-LD FAQPage)
  let sentenceAnswer = `Practice speaking and writing ${word.character} (${word.pinyin}) in daily Chinese conversation.`;
  if (word.examples && word.examples.length > 0) {
    sentenceAnswer = word.examples.slice(0, 2).map((ex, idx) =>
      `Example ${idx + 1}: "${ex.chinese}" (${ex.pinyin}) translates to "${ex.translation}".`
    ).join(' ');
  }

  const faqSectionHtml = `
    <section style="margin-top: 2rem; border-top: 1px solid #e5e7eb; padding-top: 1.5rem;">
      <h2 style="font-size: 1.5rem; font-weight: bold; color: #111827; margin-bottom: 1rem;">
        Frequently Asked Questions about ${escapeHtml(word.character)} (${escapeHtml(word.pinyin)})
      </h2>
      <div style="margin-bottom: 1.25rem;">
        <h3 style="font-size: 1.05rem; font-weight: bold; color: #1f2937; margin: 0 0 0.25rem 0;">
          Q: What does ${escapeHtml(word.character)} (${escapeHtml(word.pinyin)}) mean in Chinese?
        </h3>
        <p style="margin: 0; color: #4b5563; line-height: 1.5;">
          In Mandarin Chinese, <strong>${escapeHtml(word.character)}</strong> (pronounced ${escapeHtml(word.pinyin)}) means "${escapeHtml(word.meaning)}". It is an official HSK ${word.level} vocabulary word (${escapeHtml(word.category || 'Word')}).
        </p>
      </div>
      <div style="margin-bottom: 1.25rem;">
        <h3 style="font-size: 1.05rem; font-weight: bold; color: #1f2937; margin: 0 0 0.25rem 0;">
          Q: How many strokes are in the Chinese character ${escapeHtml(word.character)}?
        </h3>
        <p style="margin: 0; color: #4b5563; line-height: 1.5;">
          The Chinese character <strong>${escapeHtml(word.character)}</strong> (${escapeHtml(word.pinyin)}) has <strong>${word.strokes || 0} strokes</strong>.
        </p>
      </div>
      <div style="margin-bottom: 1.25rem;">
        <h3 style="font-size: 1.05rem; font-weight: bold; color: #1f2937; margin: 0 0 0.25rem 0;">
          Q: How do you use ${escapeHtml(word.character)} (${escapeHtml(word.pinyin)}) in a Chinese sentence?
        </h3>
        <p style="margin: 0; color: #4b5563; line-height: 1.5;">
          ${escapeHtml(sentenceAnswer)}
        </p>
      </div>
    </section>
  `;

  // 4. Previous and Next Word Navigation
  const prevNextNavHtml = `
    <nav style="display: flex; justify-content: space-between; align-items: center; margin: 2rem 0; padding-top: 1rem; border-top: 1px solid #e5e7eb; font-size: 0.875rem;">
      ${prevWord ? `<a href="https://desihop.net/hsk${word.level}/vocabulary/${encodeURIComponent(prevWord.character)}" style="color: #c23314; font-weight: bold; text-decoration: none;">&larr; Prev: ${escapeHtml(prevWord.character)} (${escapeHtml(prevWord.pinyin)})</a>` : '<span style="color: #9ca3af;">Start of HSK ' + word.level + '</span>'}
      <a href="https://desihop.net/hsk${word.level}/vocabulary" style="color: #4b5563; font-weight: 600; text-decoration: none;">All HSK ${word.level} Words (${levelWords.length})</a>
      ${nextWord ? `<a href="https://desihop.net/hsk${word.level}/vocabulary/${encodeURIComponent(nextWord.character)}" style="color: #c23314; font-weight: bold; text-decoration: none;">Next: ${escapeHtml(nextWord.character)} (${escapeHtml(nextWord.pinyin)}) &rarr;</a>` : '<span style="color: #9ca3af;">End of HSK ' + word.level + '</span>'}
    </nav>
  `;

  // 5. Related Words Mesh (6-8 words from same category or level)
  const sameCatWords = levelWords.filter(w => w.character !== word.character && w.category === word.category);
  const otherLevelWords = levelWords.filter(w => w.character !== word.character && w.category !== word.category);
  const relatedWords = [...sameCatWords, ...otherLevelWords].slice(0, 8);

  const relatedWordsHtml = `
    <section style="margin-top: 2rem; padding: 1.25rem; border-radius: 0.75rem; background: #f9fafb; border: 1px solid #e5e7eb;">
      <h3 style="margin-top: 0; font-size: 1.15rem; font-weight: bold; color: #111827; margin-bottom: 0.75rem;">
        Related HSK ${word.level} Words (${escapeHtml(word.category || 'Vocabulary')})
      </h3>
      <ul style="display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 0.75rem; list-style: none; padding: 0; margin: 0;">
        ${relatedWords.map(rw => `
          <li style="background: #ffffff; padding: 0.75rem; border-radius: 0.5rem; border: 1px solid #e5e7eb;">
            <a href="https://desihop.net/hsk${rw.level}/vocabulary/${encodeURIComponent(rw.character)}" style="text-decoration: none; color: inherit; display: block;">
              <div style="font-size: 1.35rem; font-weight: bold; color: #c23314; font-family: serif;">${escapeHtml(rw.character)}</div>
              <div style="font-size: 0.8rem; color: #6b7280; font-weight: 600;">${escapeHtml(rw.pinyin)}</div>
              <div style="font-size: 0.75rem; color: #374151; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; margin-top: 0.25rem;">${escapeHtml(rw.meaning)}</div>
            </a>
          </li>
        `).join('')}
      </ul>
    </section>
  `;

  // Semantic <h1> block directly front-loading Character, Pinyin, Meaning, and HSK Level
  const summaryHtml = `
    <h1 style="font-size: 2.25rem; font-weight: 900; color: #111827; margin-bottom: 0.75rem;">
      ${escapeHtml(word.character)} (${escapeHtml(word.pinyin)}) &mdash; Meaning: ${escapeHtml(word.meaning)} (HSK ${word.level} Vocabulary)
    </h1>
    <div style="font-size: 3.5rem; font-weight: 900; color: #c23314; font-family: serif; margin-bottom: 0.5rem;">
      ${escapeHtml(word.character)}
    </div>
    <div style="font-size: 1.5rem; color: #c23314; font-weight: bold; margin-bottom: 0.25rem;">${escapeHtml(word.pinyin)}</div>
    <div style="font-size: 1.125rem; color: #4b5563; margin-bottom: 1rem;"><strong>Definition:</strong> ${escapeHtml(word.meaning)}</div>
    <div style="margin-bottom: 1rem; font-size: 0.875rem; color: #6b7280;">
      <span><strong>Level:</strong> HSK ${word.level}</span> &bull;
      <span><strong>Category:</strong> ${escapeHtml(word.category)}</span> &bull;
      <span><strong>Stroke Count:</strong> ${word.strokes}</span>
    </div>
    ${compCardHtml}
    ${practiceLinkHtml}
    <p>Practice writing <strong>${escapeHtml(word.character)}</strong> with stroke animations, character anatomy & mnemonics, and native audio pronunciation on HSK Plus.</p>
    ${examplesHtml}
    ${faqSectionHtml}
    ${prevNextNavHtml}
    ${relatedWordsHtml}
  `;

  const wordJsonLd = getVocabularyJsonLd(word, word.level, canonical);

  // 1. Primary canonical route: /hskX/vocabulary/<encodedChar>
  routesToPrerender.push({
    path: `/hsk${word.level}/vocabulary/${encodedChar}`,
    rawChar: word.character,
    title,
    description,
    canonical,
    keywords,
    crumb: `HSK ${word.level} Vocabulary &gt; ${word.character}`,
    summaryHtml,
    jsonLd: wordJsonLd
  });

  // 2. Physical UTF-8 directory: /hskX/vocabulary/<rawChar> (strictly pointing canonical to primary encoded URL)
  if (encodedChar !== word.character) {
    routesToPrerender.push({
      path: `/hsk${word.level}/vocabulary/${word.character}`,
      title,
      description,
      canonical,
      keywords,
      crumb: `HSK ${word.level} Vocabulary &gt; ${word.character}`,
      summaryHtml,
      jsonLd: wordJsonLd
    });
  }

  // 3. Convenience alias: /word/<encodedChar> (canonical points to primary /hskX/vocabulary/<encodedChar>)
  routesToPrerender.push({
    path: `/word/${encodedChar}`,
    title,
    description,
    canonical,
    keywords,
    crumb: `Word &gt; ${word.character}`,
    summaryHtml,
    jsonLd: wordJsonLd
  });

  // 4. Convenience alias: /word/<rawChar> (canonical points to primary /hskX/vocabulary/<encodedChar>)
  if (encodedChar !== word.character) {
    routesToPrerender.push({
      path: `/word/${word.character}`,
      title,
      description,
      canonical,
      keywords,
      crumb: `Word &gt; ${word.character}`,
      summaryHtml,
      jsonLd: wordJsonLd
    });
  }

  // 5. Convenience alias: /hskX/word/<encodedChar>
  routesToPrerender.push({
    path: `/hsk${word.level}/word/${encodedChar}`,
    title,
    description,
    canonical,
    keywords,
    crumb: `HSK ${word.level} Word &gt; ${word.character}`,
    summaryHtml,
    jsonLd: wordJsonLd
  });
  if (encodedChar !== word.character) {
    routesToPrerender.push({
      path: `/hsk${word.level}/word/${word.character}`,
      title,
      description,
      canonical,
      keywords,
      crumb: `HSK ${word.level} Word &gt; ${word.character}`,
      summaryHtml,
      jsonLd: wordJsonLd
    });
  }
});

console.log(`[prerender] Starting pre-generation for ${routesToPrerender.length} static HTML route files...`);

let generatedCount = 0;
for (const route of routesToPrerender) {
  const html = generateHtml(route);
  writeRouteFile(route.path, html);
  generatedCount++;
}

console.log(`[prerender] Successfully generated ${generatedCount} static HTML files in dist/!`);
