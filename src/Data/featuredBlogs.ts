export interface FeaturedBlogCard {
  slug: string
  title: string
  excerpt: string
  category: string
  author: string
  readTime: string
  wordCount: number
  imageUrl: string
  imageAlt: string
}

export const FEATURED_BLOGS: FeaturedBlogCard[] = [
  {
    slug: 'ultimate-hsk-1-guide',
    title: "The Ultimate Beginner's Guide to HSK 1: Everything You Need to Know",
    excerpt: 'A comprehensive roadmap covering HSK 1 test structure, passing scores, essential 150 vocabulary words, core grammar rules, and how to pass on your first attempt.',
    category: 'Exam Prep',
    author: 'Prof. Elena Zhang',
    readTime: '10 min read',
    wordCount: 1586,
    imageUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=75',
    imageAlt: 'Student reading Chinese textbook in library'
  },
  {
    slug: 'hsk-2-in-60-days',
    title: 'How to Master HSK 2 in 60 Days: A Realistic Step-by-Step Study Plan',
    excerpt: 'Take your Mandarin from elementary beginner to confident speaker in two months with our battle-tested 8-week structured study schedule.',
    category: 'Study Tips',
    author: 'Dr. Michael Chen',
    readTime: '11 min read',
    wordCount: 1589,
    imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=75',
    imageAlt: 'Study desk with planner and study schedule'
  },
  {
    slug: 'hsk-2-vs-hsk-3',
    title: 'HSK 2.0 vs HSK 3.0: What Changed and What You Need to Study',
    excerpt: 'An in-depth breakdown of the new HSK 3.0 standards, band structures, updated vocabulary counts, and how to prepare without getting overwhelmed.',
    category: 'Exam Prep',
    author: 'Prof. Elena Zhang',
    readTime: '9 min read',
    wordCount: 1589,
    imageUrl: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=600&q=75',
    imageAlt: 'Books and study materials comparison'
  },
  {
    slug: '10-common-grammar-mistakes-hsk-1-2',
    title: 'The 10 Most Common Grammar Mistakes in HSK 1 & 2 (and How to Avoid Them)',
    excerpt: 'From misplacing time adverbs to confusing 不 and 没, discover the critical syntax errors foreign learners make and how to write naturally.',
    category: 'Grammar',
    author: 'HSK Academic Committee',
    readTime: '12 min read',
    wordCount: 1597,
    imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=75',
    imageAlt: 'Notebook with grammatical corrections and notes'
  }
]
