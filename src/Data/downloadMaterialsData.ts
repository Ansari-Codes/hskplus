export interface DownloadMaterial {
  id: string
  level: 1 | 2 | 3 | 'all'
  title: string
  subtitle: string
  category: 'Textbook' | 'Vocabulary' | 'Mock Exams' | 'Worksheets' | 'Grammar'
  format: 'PDF' | 'ZIP' | 'MP3'
  fileSize: string
  pagesOrDuration?: string
  description: string
  features: string[]
  filename: string
  downloadUrl: string
  githubReleaseTag: string
  badgeText: string
  highlight?: boolean
}

// GitHub repository base URL for releases
export const GITHUB_REPO_RELEASES_URL = 'https://github.com/Ansari-Codes/hskplus/releases'
export const DEFAULT_RELEASE_TAG = 'v1.0.0'

export const DOWNLOAD_MATERIALS: DownloadMaterial[] = [
  // HSK 1 Materials
  {
    id: 'hsk1-textbook-pdf',
    level: 1,
    title: 'HSK 1 Standard Course Textbook (Full Edition)',
    subtitle: 'Official Beijing Language and Culture University Press (BLCUP)',
    category: 'Textbook',
    format: 'PDF',
    fileSize: '137 MB',
    pagesOrDuration: '140 Pages',
    description: 'The complete authentic HSK 1 Standard Course textbook used to build our lessons. Includes all 15 lessons, dialogue scripts, stroke order diagrams, and pronunciation guides.',
    features: [
      '15 step-by-step Standard Course lessons',
      'Pinyin & phonetic initial/final articulation charts',
      'Authentic situational dialogue illustrations',
      'Standard stroke order breakdown for 150 words'
    ],
    filename: 'hsk1-textbook.pdf',
    githubReleaseTag: 'v1.0.0',
    downloadUrl: `${GITHUB_REPO_RELEASES_URL}/download/${DEFAULT_RELEASE_TAG}/hsk1-textbook.pdf`,
    badgeText: 'Official Textbook',
    highlight: true
  },
  {
    id: 'hsk1-vocab-pdf',
    level: 1,
    title: 'HSK 1 Official 150 Vocabulary Checklist',
    subtitle: 'Hanban / CTI Certified Lexicon',
    category: 'Vocabulary',
    format: 'PDF',
    fileSize: '300 KB',
    pagesOrDuration: '12 Pages',
    description: 'Compact, high-contrast printable vocabulary sheet covering all 150 official HSK 1 words with Hanzi characters, numbered tone pinyin, English definitions, and stroke counts.',
    features: [
      'Complete 150 words alphabetized by pinyin',
      'Part of speech categorization (nouns, verbs, adjectives)',
      'Character radical index and stroke count reference',
      'Printable checkbox format for spaced repetition review'
    ],
    filename: 'HSK-1-Vocabulary.pdf',
    githubReleaseTag: 'v1.0.0',
    downloadUrl: `${GITHUB_REPO_RELEASES_URL}/download/${DEFAULT_RELEASE_TAG}/HSK-1-Vocabulary.pdf`,
    badgeText: 'Printable Vocab Sheet'
  },
  {
    id: 'hsk1-mock-bundle-zip',
    level: 1,
    title: 'HSK 1 Mock Test Papers & MP3 Audio Bundle',
    subtitle: '11 Full Mock Examinations with Listening Tracks',
    category: 'Mock Exams',
    format: 'ZIP',
    fileSize: '24 MB',
    pagesOrDuration: '11 Exam Sets',
    description: 'Full examination package simulating the official paper-based and computer-based HSK 1 tests. Includes 11 exam papers, native speaker MP3 audio tracks, and detailed answer keys.',
    features: [
      '11 complete listening + reading test papers',
      'Studio-recorded native Chinese listening MP3s',
      'Official answer keys with scoring rubrics',
      'Listening question audio transcripts included'
    ],
    filename: 'hsk1-mock-tests-bundle.zip',
    githubReleaseTag: 'v1.0.0',
    downloadUrl: `${GITHUB_REPO_RELEASES_URL}/download/${DEFAULT_RELEASE_TAG}/hsk1-mock-tests-bundle.zip`,
    badgeText: 'Exams & Audio'
  },

  // HSK 2 Materials
  {
    id: 'hsk2-textbook-pdf',
    level: 2,
    title: 'HSK 2 Standard Course Textbook (Full Edition)',
    subtitle: 'Official Beijing Language and Culture University Press (BLCUP)',
    category: 'Textbook',
    format: 'PDF',
    fileSize: '28 MB',
    pagesOrDuration: '148 Pages',
    description: 'The authentic HSK 2 Standard Course textbook covering daily conversational topics: transport, shopping, weather, hobbies, and simple social interactions.',
    features: [
      '15 comprehensive elementary course lessons',
      'Grammar patterns: 比 comparison, 是...的 emphasis, 了 aspect',
      'Rich conversational dialogues with full pinyin annotations',
      'End-of-lesson review tests aligned with Hanban standards'
    ],
    filename: 'HSK-2-standard-course.pdf',
    githubReleaseTag: 'v1.0.0',
    downloadUrl: `${GITHUB_REPO_RELEASES_URL}/download/${DEFAULT_RELEASE_TAG}/HSK-2-standard-course.pdf`,
    badgeText: 'Official Textbook',
    highlight: true
  },
  {
    id: 'hsk2-vocab-pdf',
    level: 2,
    title: 'HSK 2 Official 150 Vocabulary Checklist',
    subtitle: 'Cumulative 300 Words Reference Guide',
    category: 'Vocabulary',
    format: 'PDF',
    fileSize: '374 KB',
    pagesOrDuration: '16 Pages',
    description: 'Printable lexicon handbook of the 150 new HSK 2 vocabulary words. Features common collocations, example sentences, and cross-references to HSK 1 foundation words.',
    features: [
      '150 new HSK 2 words + cumulative 300 words index',
      'Common collocations and measure word pairings',
      'High-frequency everyday phrases and idioms',
      'Clean typography suitable for standard A4 printing'
    ],
    filename: 'HSK-2-Vocabulary.pdf',
    githubReleaseTag: 'v1.0.0',
    downloadUrl: `${GITHUB_REPO_RELEASES_URL}/download/${DEFAULT_RELEASE_TAG}/HSK-2-Vocabulary.pdf`,
    badgeText: 'Printable Vocab Sheet'
  },
  {
    id: 'hsk2-mock-bundle-zip',
    level: 2,
    title: 'HSK 2 Mock Test Papers & MP3 Audio Bundle',
    subtitle: '11 Full Mock Examinations with Listening Tracks',
    category: 'Mock Exams',
    format: 'ZIP',
    fileSize: '32 MB',
    pagesOrDuration: '11 Exam Sets',
    description: 'Complete mock examination archive for HSK 2. Contains 11 full test papers (listening and reading sections), official audio recordings, and answer sheets.',
    features: [
      '11 complete authentic examination papers',
      'Official speed listening comprehension MP3 files',
      'Answer sheets & score conversion guide',
      'Full dialogue transcripts with English translations'
    ],
    filename: 'hsk2-mock-tests-bundle.zip',
    githubReleaseTag: 'v1.0.0',
    downloadUrl: `${GITHUB_REPO_RELEASES_URL}/download/${DEFAULT_RELEASE_TAG}/hsk2-mock-tests-bundle.zip`,
    badgeText: 'Exams & Audio'
  },

  // HSK 3 Materials
  {
    id: 'hsk3-textbook-pdf',
    level: 3,
    title: 'HSK 3 Standard Course Textbook (Full Edition)',
    subtitle: 'Official Beijing Language and Culture University Press (BLCUP)',
    category: 'Textbook',
    format: 'PDF',
    fileSize: '38 MB',
    pagesOrDuration: '210 Pages',
    description: 'The authentic HSK 3 Standard Course textbook marking the transition to Chinese characters without pinyin assistance. Covers 20 intermediate lessons and complex sentence grammar.',
    features: [
      '20 intermediate lessons spanning real-world contexts',
      'Character writing section for the HSK 3 Writing exam',
      'Detailed grammar blueprints: 把 constructions, 被 passive, 越来越',
      'Cultural background notes and comprehensive chapter exercises'
    ],
    filename: 'HSK-3-standard-course.pdf',
    githubReleaseTag: 'v1.0.0',
    downloadUrl: `${GITHUB_REPO_RELEASES_URL}/download/${DEFAULT_RELEASE_TAG}/HSK-3-standard-course.pdf`,
    badgeText: 'Official Textbook',
    highlight: true
  },
  {
    id: 'hsk3-vocab-pdf',
    level: 3,
    title: 'HSK 3 Official 300 Vocabulary Checklist',
    subtitle: 'Cumulative 600 Words Master Lexicon',
    category: 'Vocabulary',
    format: 'PDF',
    fileSize: '596 KB',
    pagesOrDuration: '24 Pages',
    description: 'Master checklist of the 300 HSK 3 vocabulary items. Includes character-by-character breakdowns, pinyin, English meanings, and sample sentence patterns.',
    features: [
      '300 new HSK 3 words with cumulative 600 total index',
      'Includes mandatory writing character checklist',
      'Grammatical classifications and verb-object collocations',
      'Designed for offline study, binder inserts, and flashcard creation'
    ],
    filename: 'HSK-3-Vocabulary.pdf',
    githubReleaseTag: 'v1.0.0',
    downloadUrl: `${GITHUB_REPO_RELEASES_URL}/download/${DEFAULT_RELEASE_TAG}/HSK-3-Vocabulary.pdf`,
    badgeText: 'Printable Vocab Sheet'
  },
  {
    id: 'hsk3-mock-bundle-zip',
    level: 3,
    title: 'HSK 3 Mock Test Papers & MP3 Audio Bundle',
    subtitle: '11 Full Mock Examinations: Listening, Reading & Writing',
    category: 'Mock Exams',
    format: 'ZIP',
    fileSize: '44 MB',
    pagesOrDuration: '11 Exam Sets',
    description: 'The ultimate HSK 3 testing suite. 11 full examination sets covering Listening (Part 1–4), Reading (Part 1–3), and Writing (character writing and sentence ordering) with audio.',
    features: [
      '11 complete test sets with official 3-section layout',
      'High-fidelity native speaker listening MP3 files',
      'Hanzi writing section templates and grading keys',
      'Scaled score conversion charts aligned with CTI standard'
    ],
    filename: 'hsk3-mock-tests-bundle.zip',
    githubReleaseTag: 'v1.0.0',
    downloadUrl: `${GITHUB_REPO_RELEASES_URL}/download/${DEFAULT_RELEASE_TAG}/hsk3-mock-tests-bundle.zip`,
    badgeText: 'Exams & Audio'
  },

  // General & Supplemental
  {
    id: 'tian-zi-ge-worksheets',
    level: 'all',
    title: 'Tian Zi Ge (田字格) Chinese Calligraphy Sheets',
    subtitle: 'Printable Character Writing Grid Worksheets',
    category: 'Worksheets',
    format: 'PDF',
    fileSize: '820 KB',
    pagesOrDuration: '8 Template Styles',
    description: 'Standard Chinese calligraphy paper with quadrant guide lines (田字格 and 米字格) for practicing stroke balance, character proportions, and writing endurance.',
    features: [
      'Includes both Tian Zi Ge (田) and Mi Zi Ge (米) grid styles',
      'Pinyin heading lines for combined pronunciation & character drills',
      'High-resolution vector lines optimized for standard printer ink',
      'Recommended companion for the online Hanzi Writing Studio'
    ],
    filename: 'tian-zi-ge-calligraphy-worksheets.pdf',
    githubReleaseTag: 'v1.0.0',
    downloadUrl: `${GITHUB_REPO_RELEASES_URL}/download/${DEFAULT_RELEASE_TAG}/tian-zi-ge-calligraphy-worksheets.pdf`,
    badgeText: 'Calligraphy Practice'
  },
  {
    id: 'hsk1-3-grammar-cheatsheet',
    level: 'all',
    title: 'HSK 1–3 Complete Sentence Pattern Blueprint',
    subtitle: 'Essential Grammar Formulas & Structural Reference',
    category: 'Grammar',
    format: 'PDF',
    fileSize: '1.2 MB',
    pagesOrDuration: '32 Pages',
    description: 'Quick-reference grammar compendium combining all 50 sentence formulas across HSK 1, 2, and 3 into one structured, indexed study guide.',
    features: [
      '50 core sentence pattern formulas with color-coded syntax',
      'Comparison charts: 不 vs 没, 怎么 vs 怎么样, 是...的 vs 了',
      'Time words, aspect particles, and question structure blueprints',
      'Cross-level grammatical progression map (A1 to B1)'
    ],
    filename: 'hsk-grammar-patterns-guide.pdf',
    githubReleaseTag: 'v1.0.0',
    downloadUrl: `${GITHUB_REPO_RELEASES_URL}/download/${DEFAULT_RELEASE_TAG}/hsk-grammar-patterns-guide.pdf`,
    badgeText: 'Master Grammar Guide'
  }
]

export function getMaterialsByLevel(level: 1 | 2 | 3 | 'all'): DownloadMaterial[] {
  if (level === 'all') return DOWNLOAD_MATERIALS
  return DOWNLOAD_MATERIALS.filter(m => m.level === level || m.level === 'all')
}
