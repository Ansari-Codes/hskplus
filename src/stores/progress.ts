import { ref, computed } from 'vue'

export interface MockTestRecord {
  testId: string
  level: number
  score: number
  total: number
  percent: number
  passed: boolean
  date: string
}

export interface UserProgressData {
  learnedWords: string[] // List of word IDs / hanzi
  completedLessons: string[] // List of lesson IDs
  mockTestScores: MockTestRecord[]
  dailyGoal: number // words per day (default 10)
  wordsLearnedToday: string[]
  todayDate: string
  streakCount: number
  lastActiveDate: string
  favoriteRadicals: string[]
}

const STORAGE_KEY = 'hskplus_user_progress_v1'

function getTodayStr(): string {
  return new Date().toISOString().split('T')[0]
}

function loadProgress(): UserProgressData {
  if (typeof window === 'undefined') {
    return createDefaultProgress()
  }

  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) {
      const data = JSON.parse(raw) as Partial<UserProgressData>
      const today = getTodayStr()
      
      // Calculate streak
      let streak = data.streakCount || 0
      const lastActive = data.lastActiveDate || ''
      
      if (lastActive) {
        const lastDate = new Date(lastActive)
        const currDate = new Date(today)
        const diffDays = Math.round((currDate.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24))
        
        if (diffDays === 1) {
          // Consecutive day - streak maintained
        } else if (diffDays > 1) {
          // Missed days - streak reset
          streak = 0
        }
      }

      // Reset daily words if new calendar day
      const wordsToday = data.todayDate === today ? (data.wordsLearnedToday || []) : []

      return {
        learnedWords: Array.isArray(data.learnedWords) ? data.learnedWords : [],
        completedLessons: Array.isArray(data.completedLessons) ? data.completedLessons : [],
        mockTestScores: Array.isArray(data.mockTestScores) ? data.mockTestScores : [],
        dailyGoal: data.dailyGoal || 10,
        wordsLearnedToday: wordsToday,
        todayDate: today,
        streakCount: streak > 0 ? streak : (wordsToday.length > 0 ? 1 : 0),
        lastActiveDate: lastActive || today,
        favoriteRadicals: Array.isArray(data.favoriteRadicals) ? data.favoriteRadicals : [],
      }
    }
  } catch (err) {
    console.warn('Failed to parse progress from localStorage:', err)
  }

  return createDefaultProgress()
}

function createDefaultProgress(): UserProgressData {
  const today = getTodayStr()
  return {
    learnedWords: [],
    completedLessons: [],
    mockTestScores: [],
    dailyGoal: 10,
    wordsLearnedToday: [],
    todayDate: today,
    streakCount: 1,
    lastActiveDate: today,
    favoriteRadicals: [],
  }
}

// Global reactive progress state
export const progress = ref<UserProgressData>(loadProgress())

export function saveProgress() {
  if (typeof window === 'undefined') return
  try {
    const today = getTodayStr()
    if (progress.value.lastActiveDate !== today) {
      // New day activity updates streak
      const last = new Date(progress.value.lastActiveDate)
      const curr = new Date(today)
      const diff = Math.round((curr.getTime() - last.getTime()) / (1000 * 60 * 60 * 24))
      if (diff === 1) {
        progress.value.streakCount += 1
      } else if (diff > 1) {
        progress.value.streakCount = 1
      }
      progress.value.lastActiveDate = today
      progress.value.todayDate = today
      progress.value.wordsLearnedToday = []
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress.value))
  } catch (err) {
    console.error('Error saving progress to localStorage:', err)
  }
}

// Progress Actions
export function toggleWordLearned(wordId: string): boolean {
  const index = progress.value.learnedWords.indexOf(wordId)
  let isNowLearned = false
  if (index === -1) {
    progress.value.learnedWords.push(wordId)
    isNowLearned = true
    if (!progress.value.wordsLearnedToday.includes(wordId)) {
      progress.value.wordsLearnedToday.push(wordId)
    }
  } else {
    progress.value.learnedWords.splice(index, 1)
    const todayIdx = progress.value.wordsLearnedToday.indexOf(wordId)
    if (todayIdx !== -1) {
      progress.value.wordsLearnedToday.splice(todayIdx, 1)
    }
    isNowLearned = false
  }
  saveProgress()
  return isNowLearned
}

export function isWordLearned(wordId: string): boolean {
  return progress.value.learnedWords.includes(wordId)
}

export function toggleLessonCompleted(lessonId: string): boolean {
  const index = progress.value.completedLessons.indexOf(lessonId)
  let isNowCompleted = false
  if (index === -1) {
    progress.value.completedLessons.push(lessonId)
    isNowCompleted = true
  } else {
    progress.value.completedLessons.splice(index, 1)
    isNowCompleted = false
  }
  saveProgress()
  return isNowCompleted
}

export function isLessonCompleted(lessonId: string): boolean {
  return progress.value.completedLessons.includes(lessonId)
}

export function recordMockScore(record: Omit<MockTestRecord, 'date'>) {
  const fullRecord: MockTestRecord = {
    ...record,
    date: new Date().toISOString(),
  }
  progress.value.mockTestScores.unshift(fullRecord)
  // Keep only last 50 records
  if (progress.value.mockTestScores.length > 50) {
    progress.value.mockTestScores.pop()
  }
  saveProgress()
}

export function exportProgressBackup(): string {
  return JSON.stringify(progress.value, null, 2)
}

export function importProgressBackup(jsonStr: string): boolean {
  try {
    const data = JSON.parse(jsonStr) as Partial<UserProgressData>
    if (Array.isArray(data.learnedWords)) {
      progress.value = {
        learnedWords: data.learnedWords || [],
        completedLessons: Array.isArray(data.completedLessons) ? data.completedLessons : [],
        mockTestScores: Array.isArray(data.mockTestScores) ? data.mockTestScores : [],
        dailyGoal: data.dailyGoal || 10,
        wordsLearnedToday: Array.isArray(data.wordsLearnedToday) ? data.wordsLearnedToday : [],
        todayDate: getTodayStr(),
        streakCount: data.streakCount || 1,
        lastActiveDate: getTodayStr(),
        favoriteRadicals: Array.isArray(data.favoriteRadicals) ? data.favoriteRadicals : [],
      }
      saveProgress()
      return true
    }
  } catch (err) {
    console.error('Invalid backup JSON:', err)
  }
  return false
}

// Computed stats
export const totalLearnedCount = computed(() => progress.value.learnedWords.length)
export const totalCompletedLessonsCount = computed(() => progress.value.completedLessons.length)
export const dailyGoalProgressPercent = computed(() => {
  const goal = progress.value.dailyGoal || 10
  return Math.min(100, Math.round((progress.value.wordsLearnedToday.length / goal) * 100))
})
export const currentStreak = computed(() => progress.value.streakCount)
export const totalTestsTaken = computed(() => progress.value.mockTestScores.length)
export const averageMockPercent = computed(() => {
  if (progress.value.mockTestScores.length === 0) return 0
  const sum = progress.value.mockTestScores.reduce((acc, curr) => acc + curr.percent, 0)
  return Math.round(sum / progress.value.mockTestScores.length)
})
