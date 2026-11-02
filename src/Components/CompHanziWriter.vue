<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch, computed } from 'vue'
import HanziWriter from 'hanzi-writer'
import { UiButton, UiBadge } from '../Ui'
import { speakChinese } from '../Utils/speech'

const props = defineProps<{
  character: string
  pinyin?: string
  meaning?: string
  expectedStrokes?: number
}>()

const activeTab = ref<'animate' | 'quiz' | 'freehand'>('animate')
const animContainer = ref<HTMLDivElement | null>(null)
const quizContainer = ref<HTMLDivElement | null>(null)
const freehandCanvas = ref<HTMLCanvasElement | null>(null)

let animWriter: any = null
let quizWriter: any = null

const isAnimating = ref(false)
const animSpeed = ref(1)
const quizMistakes = ref(0)
const quizCompleted = ref(false)
const quizMessage = ref('')

// Freehand Canvas State
const isDrawing = ref(false)
const strokesDrawn = ref<Array<{ points: Array<{ x: number; y: number }> }>>([])
const currentStroke = ref<Array<{ x: number; y: number }>>([])
const brushSize = ref(10)
const showGhost = ref(true)

// Scoring State
const hasScored = ref(false)
const scoreResult = ref<{
  totalScore: number
  grade: string
  strokeCountScore?: number
  coverageScore: number
  centeringScore: number
  feedback: string
}>({
  totalScore: 0,
  grade: '',
  strokeCountScore: 0,
  coverageScore: 0,
  centeringScore: 0,
  feedback: ''
})

const charToRender = computed(() => {
  return props.character ? props.character[0] : '中'
})

function initAnimWriter() {
  if (!animContainer.value) return
  animContainer.value.innerHTML = ''
  try {
    animWriter = HanziWriter.create(animContainer.value, charToRender.value, {
      width: 280,
      height: 280,
      padding: 15,
      showOutline: true,
      strokeColor: '#3b82f6',
      radicalColor: '#ef4444',
      outlineColor: '#cbd5e1',
      strokeAnimationSpeed: animSpeed.value,
      delayBetweenStrokes: 200,
    })
    animWriter.animateCharacter()
    isAnimating.value = true
  } catch (err) {
    console.error('HanziWriter init error', err)
  }
}

function initQuizWriter() {
  if (!quizContainer.value) return
  quizContainer.value.innerHTML = ''
  quizMistakes.value = 0
  quizCompleted.value = false
  quizMessage.value = 'Draw each stroke in the correct order.'

  try {
    quizWriter = HanziWriter.create(quizContainer.value, charToRender.value, {
      width: 280,
      height: 280,
      padding: 15,
      showOutline: true,
      strokeColor: '#10b981',
      radicalColor: '#f59e0b',
      outlineColor: '#e2e8f0',
      showCharacter: false,
      showHintAfterMisses: 2,
    })

    quizWriter.quiz({
      onMistake: (strokeData: any) => {
        quizMistakes.value += 1
        quizMessage.value = `Mistake on stroke ${strokeData.strokeNum + 1}. Try again or observe the hint.`
      },
      onCorrectStroke: (strokeData: any) => {
        quizMessage.value = `Great job! Stroke ${strokeData.strokeNum + 1} correct.`
      },
      onComplete: () => {
        quizCompleted.value = true
        quizMessage.value = `Character completed with ${quizMistakes.value} mistakes!`
      }
    })
  } catch (err) {
    console.error('QuizWriter init error', err)
  }
}

function playAnimation() {
  if (animWriter) {
    isAnimating.value = true
    animWriter.animateCharacter({
      onComplete: () => {
        isAnimating.value = false
      }
    })
  }
}

function loopAnimation() {
  if (animWriter) {
    isAnimating.value = true
    animWriter.loopCharacterAnimation()
  }
}

function resetQuiz() {
  initQuizWriter()
}

function playAudio() {
  speakChinese(charToRender.value)
}

// Freehand Canvas Handlers
function drawTianZiGe(ctx: CanvasRenderingContext2D, size: number) {
  ctx.save()
  ctx.strokeStyle = '#fca5a5'
  ctx.lineWidth = 1.5

  // Outer border
  ctx.strokeRect(5, 5, size - 10, size - 10)

  // Dashed inner lines
  ctx.setLineDash([6, 6])
  ctx.beginPath()
  // Horizontal center line
  ctx.moveTo(5, size / 2)
  ctx.lineTo(size - 5, size / 2)
  // Vertical center line
  ctx.moveTo(size / 2, 5)
  ctx.lineTo(size / 2, size - 5)
  // Diagonal lines (Mi Zi Ge)
  ctx.moveTo(5, 5)
  ctx.lineTo(size - 5, size - 5)
  ctx.moveTo(size - 5, 5)
  ctx.lineTo(5, size - 5)
  ctx.stroke()
  ctx.restore()
}

function redrawFreehand() {
  const canvas = freehandCanvas.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  const size = 300
  canvas.width = size
  canvas.height = size
  ctx.clearRect(0, 0, size, size)

  // Draw Tian Zi Ge grid
  drawTianZiGe(ctx, size)

  // Ghost character if enabled
  if (showGhost.value) {
    ctx.save()
    ctx.fillStyle = 'rgba(156, 163, 175, 0.22)'
    ctx.font = '200px "Noto Sans SC", "SimSun", "Microsoft YaHei", sans-serif'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText(charToRender.value, size / 2, size / 2 + 10)
    ctx.restore()
  }

  // Draw user strokes
  ctx.save()
  ctx.strokeStyle = '#1e293b'
  ctx.fillStyle = '#1e293b'
  ctx.lineWidth = brushSize.value
  ctx.lineCap = 'round'
  ctx.lineJoin = 'round'

  const allStrokes = [...strokesDrawn.value]
  if (currentStroke.value.length > 0) {
    allStrokes.push({ points: currentStroke.value })
  }

  for (const stroke of allStrokes) {
    if (stroke.points.length === 0) continue
    if (stroke.points.length === 1) {
      ctx.beginPath()
      ctx.arc(stroke.points[0].x, stroke.points[0].y, brushSize.value / 2, 0, Math.PI * 2)
      ctx.fill()
    } else {
      ctx.beginPath()
      ctx.moveTo(stroke.points[0].x, stroke.points[0].y)
      for (let i = 1; i < stroke.points.length; i++) {
        ctx.lineTo(stroke.points[i].x, stroke.points[i].y)
      }
      ctx.stroke()
    }
  }
  ctx.restore()
}

function startFreehand(e: PointerEvent) {
  const canvas = freehandCanvas.value
  if (!canvas) return
  canvas.setPointerCapture(e.pointerId)
  isDrawing.value = true

  const rect = canvas.getBoundingClientRect()
  const x = (e.clientX - rect.left) * (canvas.width / rect.width)
  const y = (e.clientY - rect.top) * (canvas.height / rect.height)
  currentStroke.value = [{ x, y }]
  redrawFreehand()
}

function moveFreehand(e: PointerEvent) {
  if (!isDrawing.value) return
  const canvas = freehandCanvas.value
  if (!canvas) return

  const rect = canvas.getBoundingClientRect()
  const x = (e.clientX - rect.left) * (canvas.width / rect.width)
  const y = (e.clientY - rect.top) * (canvas.height / rect.height)
  currentStroke.value.push({ x, y })
  redrawFreehand()
}

function endFreehand() {
  if (isDrawing.value && currentStroke.value.length > 0) {
    strokesDrawn.value.push({ points: [...currentStroke.value] })
    currentStroke.value = []
  }
  isDrawing.value = false
  redrawFreehand()
}

function undoFreehand() {
  strokesDrawn.value.pop()
  hasScored.value = false
  redrawFreehand()
}

function clearFreehand() {
  strokesDrawn.value = []
  currentStroke.value = []
  hasScored.value = false
  redrawFreehand()
}

// Canvas Scoring Algorithm
function scoreFreehand() {
  const canvas = freehandCanvas.value
  if (!canvas) return
  const size = 300

  // Create offscreen reference canvas
  const refCanvas = document.createElement('canvas')
  refCanvas.width = size
  refCanvas.height = size
  const refCtx = refCanvas.getContext('2d')!

  refCtx.fillStyle = '#000000'
  refCtx.font = '200px "Noto Sans SC", "SimSun", "Microsoft YaHei", sans-serif'
  refCtx.textAlign = 'center'
  refCtx.textBaseline = 'middle'
  refCtx.fillText(charToRender.value, size / 2, size / 2 + 10)

  const refData = refCtx.getImageData(0, 0, size, size).data

  // Create offscreen user drawing only canvas (without grid/ghost)
  const userCanvas = document.createElement('canvas')
  userCanvas.width = size
  userCanvas.height = size
  const userCtx = userCanvas.getContext('2d')!

  userCtx.strokeStyle = '#000000'
  userCtx.lineWidth = brushSize.value
  userCtx.lineCap = 'round'
  userCtx.lineJoin = 'round'

  for (const stroke of strokesDrawn.value) {
    if (stroke.points.length === 0) continue
    userCtx.beginPath()
    userCtx.moveTo(stroke.points[0].x, stroke.points[0].y)
    for (let i = 1; i < stroke.points.length; i++) {
      userCtx.lineTo(stroke.points[i].x, stroke.points[i].y)
    }
    userCtx.stroke()
  }

  const userData = userCtx.getImageData(0, 0, size, size).data

  // Calculate pixel overlap (Intersection over Union)
  let intersection = 0
  let union = 0
  let userPixelCount = 0
  let refPixelCount = 0

  let userXSum = 0
  let userYSum = 0

  for (let i = 3; i < refData.length; i += 4) {
    const isRef = refData[i] > 60
    const isUser = userData[i] > 60

    if (isRef) refPixelCount++
    if (isUser) {
      userPixelCount++
      const pixelIndex = Math.floor(i / 4)
      userXSum += pixelIndex % size
      userYSum += Math.floor(pixelIndex / size)
    }

    if (isRef && isUser) intersection++
    if (isRef || isUser) union++
  }

  if (userPixelCount === 0) {
    scoreResult.value = {
      totalScore: 0,
      grade: 'N/A',
      strokeCountScore: 0,
      coverageScore: 0,
      centeringScore: 0,
      feedback: 'Please write the character on the canvas first before scoring!'
    }
    hasScored.value = true
    return
  }

  // 1. Coverage Score (IoU)
  const iou = union > 0 ? intersection / union : 0
  const coverageScore = Math.min(100, Math.round(iou * 180))

  // 2. Stroke Count Score, only when the source provides a verified count.
  const drawnCount = strokesDrawn.value.length
  const strokeCountScore = props.expectedStrokes === undefined
    ? undefined
    : Math.max(30, Math.round(100 - Math.abs(drawnCount - props.expectedStrokes) * 15))

  // 3. Centering Score
  const userCenterX = userXSum / userPixelCount
  const userCenterY = userYSum / userPixelCount
  const centerDiff = Math.sqrt(Math.pow(userCenterX - size / 2, 2) + Math.pow(userCenterY - (size / 2 + 10), 2))
  const centeringScore = Math.max(40, Math.round(100 - centerDiff * 0.8))

  // Composite Total Score
  const weightedScore = strokeCountScore === undefined
    ? (coverageScore * 0.5 + centeringScore * 0.2) / 0.7
    : coverageScore * 0.5 + strokeCountScore * 0.3 + centeringScore * 0.2
  const total = Math.round(weightedScore)

  let grade = 'B'
  let feedback = strokeCountScore === undefined
    ? 'Visual estimate based on shape coverage and centering only; no verified stroke count is available.'
    : 'Good attempt! Keep practicing your stroke order and centering.'

  if (total >= 90) {
    grade = 'A+'
    feedback = strokeCountScore === undefined
      ? 'Excellent shape coverage and centering. This visual estimate does not include stroke-count accuracy.'
      : 'Exceptional calligraphy! Beautifully balanced, accurate strokes, and centered in the Tian Zi Ge.'
  } else if (total >= 80) {
    grade = 'A'
    feedback = strokeCountScore === undefined
      ? 'Great shape coverage and centering. This visual estimate does not include stroke-count accuracy.'
      : 'Great job! Strong character resemblance and solid stroke execution.'
  } else if (total >= 70) {
    grade = 'B'
    feedback = strokeCountScore === undefined
      ? 'Solid effort. Focus on keeping the character balanced inside the grid lines.'
      : 'Solid effort! Focus on keeping strokes balanced inside the grid lines.'
  } else if (total >= 60) {
    grade = 'C'
    feedback = strokeCountScore === undefined
      ? 'Decent start. Focus on shape coverage and centering.'
      : 'Decent start. Watch the total number of strokes and follow the red guide lines.'
  } else {
    grade = 'Needs Practice'
    feedback = 'Keep practicing! Use the Stroke Animation tab first to study the exact stroke path.'
  }

  scoreResult.value = {
    totalScore: Math.min(100, Math.max(10, total)),
    grade,
    strokeCountScore,
    coverageScore,
    centeringScore,
    feedback
  }
  hasScored.value = true
}

watch(activeTab, (tab) => {
  if (tab === 'animate') {
    setTimeout(initAnimWriter, 50)
  } else if (tab === 'quiz') {
    setTimeout(initQuizWriter, 50)
  } else if (tab === 'freehand') {
    setTimeout(redrawFreehand, 50)
  }
})

watch(() => props.character, () => {
  if (activeTab.value === 'animate') initAnimWriter()
  else if (activeTab.value === 'quiz') initQuizWriter()
  else if (activeTab.value === 'freehand') {
    clearFreehand()
  }
})

onMounted(() => {
  initAnimWriter()
})

onBeforeUnmount(() => {
  // Clean up
})
</script>

<template>
  <div class="rounded-2xl border border-border bg-surface p-6 shadow-sm">
    <!-- Header with pronunciation & meta -->
    <div class="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-4">
      <div>
        <div class="flex items-center gap-3">
          <span class="text-4xl font-bold text-foreground" lang="zh">{{ character }}</span>
          <div>
            <div class="flex items-center gap-2">
              <span class="text-xl font-semibold text-primary">{{ pinyin }}</span>
              <button
                type="button"
                class="rounded-full bg-secondary p-1.5 text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                title="Listen to Chinese pronunciation"
                @click="playAudio"
              >
                🔊
              </button>
            </div>
            <p class="text-sm text-muted-foreground">{{ meaning }}</p>
          </div>
        </div>
      </div>

      <div class="flex items-center gap-2">
        <UiBadge v-if="expectedStrokes !== undefined" variant="secondary">{{ expectedStrokes }} Strokes</UiBadge>
        <UiBadge variant="outline">田字格 Tian Zi Ge</UiBadge>
      </div>
    </div>

    <!-- Mode Tabs -->
    <div class="mt-4 flex gap-2 border-b border-border pb-3">
      <button
        type="button"
        :class="[
          'rounded-lg px-4 py-2 text-sm font-medium transition-colors',
          activeTab === 'animate'
            ? 'bg-primary text-primary-foreground shadow-sm'
            : 'bg-muted text-muted-foreground hover:text-foreground'
        ]"
        @click="activeTab = 'animate'"
      >
        ✨ Stroke Animation
      </button>
      <button
        type="button"
        :class="[
          'rounded-lg px-4 py-2 text-sm font-medium transition-colors',
          activeTab === 'quiz'
            ? 'bg-primary text-primary-foreground shadow-sm'
            : 'bg-muted text-muted-foreground hover:text-foreground'
        ]"
        @click="activeTab = 'quiz'"
      >
        🎯 Guided Stroke Quiz
      </button>
      <button
        type="button"
        :class="[
          'rounded-lg px-4 py-2 text-sm font-medium transition-colors',
          activeTab === 'freehand'
            ? 'bg-primary text-primary-foreground shadow-sm'
            : 'bg-muted text-muted-foreground hover:text-foreground'
        ]"
        @click="activeTab = 'freehand'"
      >
        ✍️ Freehand & AI Scoring
      </button>
    </div>

    <!-- Tab 1: Animated Stroke Order -->
    <div v-show="activeTab === 'animate'" class="mt-6 flex flex-col items-center">
      <div
        ref="animContainer"
        class="rounded-2xl border-2 border-dashed border-red-200 bg-red-50/20 p-2 shadow-inner dark:border-red-950/40 dark:bg-red-950/10"
      />
      <div class="mt-5 flex flex-wrap items-center justify-center gap-3">
        <UiButton size="sm" @click="playAnimation">
          ▶️ Replay Stroke Order
        </UiButton>
        <UiButton size="sm" variant="outline" @click="loopAnimation">
          🔁 Loop Animation
        </UiButton>
        <UiButton size="sm" variant="ghost" @click="playAudio">
          🔊 Hear Pronunciation
        </UiButton>
      </div>
      <p class="mt-3 text-xs text-muted-foreground">
        Strokes are displayed in standard Chinese stroke order (笔顺). Red segments indicate radicals.
      </p>
    </div>

    <!-- Tab 2: Interactive Stroke Quiz -->
    <div v-show="activeTab === 'quiz'" class="mt-6 flex flex-col items-center">
      <div
        ref="quizContainer"
        class="rounded-2xl border-2 border-dashed border-emerald-200 bg-emerald-50/20 p-2 shadow-inner dark:border-emerald-950/40 dark:bg-emerald-950/10"
      />
      <div class="mt-4 flex items-center gap-4">
        <span class="text-sm font-medium" :class="quizCompleted ? 'text-emerald-600 font-bold' : 'text-foreground'">
          {{ quizMessage }}
        </span>
        <UiBadge v-if="quizMistakes > 0" variant="destructive">
          {{ quizMistakes }} Mistakes
        </UiBadge>
      </div>
      <div class="mt-4 flex gap-3">
        <UiButton size="sm" variant="outline" @click="resetQuiz">
          🔄 Restart Quiz
        </UiButton>
      </div>
    </div>

    <!-- Tab 3: Freehand Canvas & AI Scoring Engine -->
    <div v-show="activeTab === 'freehand'" class="mt-6">
      <div class="grid items-start gap-6 md:grid-cols-[auto_1fr]">
        <!-- Writing Area -->
        <div class="flex flex-col items-center">
          <div class="relative overflow-hidden rounded-2xl border border-border shadow-md bg-white dark:bg-surface">
            <canvas
              ref="freehandCanvas"
              class="block aspect-square w-[300px] h-[300px] touch-none cursor-crosshair"
              @pointerdown="startFreehand"
              @pointermove="moveFreehand"
              @pointerup="endFreehand"
              @pointercancel="endFreehand"
            />
          </div>

          <!-- Controls Bar -->
          <div class="mt-4 flex flex-wrap items-center justify-between gap-2 w-full max-w-[300px]">
            <div class="flex gap-1.5">
              <UiButton size="sm" variant="outline" :disabled="strokesDrawn.length === 0" @click="undoFreehand">
                ↩️ Undo
              </UiButton>
              <UiButton size="sm" variant="ghost" :disabled="strokesDrawn.length === 0" @click="clearFreehand">
                🗑️ Clear
              </UiButton>
            </div>
            <label class="flex items-center gap-1.5 text-xs text-muted-foreground cursor-pointer">
              <input v-model="showGhost" type="checkbox" class="rounded border-border text-primary" @change="redrawFreehand" />
              Ghost Guide
            </label>
          </div>

          <div class="mt-4 w-full max-w-[300px]">
            <UiButton class="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold" @click="scoreFreehand">
              ⭐ Score My Character
            </UiButton>
          </div>
        </div>

        <!-- Scoring Diagnostics Card -->
        <div class="rounded-2xl border border-border bg-surface-raised p-6">
          <h3 class="text-lg font-semibold text-foreground">Canvas Scoring Engine</h3>
          <p class="text-sm text-muted-foreground">
            Our algorithmic evaluator estimates shape coverage and centering. Stroke-count accuracy is included only when a verified count is available.
          </p>

          <template v-if="hasScored">
            <div class="mt-5 flex items-center gap-5 rounded-xl bg-surface p-4 border border-border">
              <div class="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-3xl font-extrabold text-primary">
                {{ scoreResult.grade }}
              </div>
              <div>
                <p class="text-2xl font-bold text-foreground">{{ scoreResult.totalScore }} / 100</p>
                <p class="text-sm text-muted-foreground">{{ scoreResult.feedback }}</p>
              </div>
            </div>

            <div class="mt-5 space-y-3">
              <div>
                <div class="flex justify-between text-xs font-medium">
                  <span>Coverage & Overlap (IoU)</span>
                  <span>{{ scoreResult.coverageScore }}%</span>
                </div>
                <div class="mt-1 h-2 rounded-full bg-muted overflow-hidden">
                  <div class="h-full bg-blue-500 rounded-full transition-all duration-500" :style="{ width: `${scoreResult.coverageScore}%` }" />
                </div>
              </div>

              <div v-if="expectedStrokes !== undefined && scoreResult.strokeCountScore !== undefined">
                <div class="flex justify-between text-xs font-medium">
                  <span>Stroke Count Fidelity ({{ strokesDrawn.length }} / {{ expectedStrokes }})</span>
                  <span>{{ scoreResult.strokeCountScore }}%</span>
                </div>
                <div class="mt-1 h-2 rounded-full bg-muted overflow-hidden">
                  <div class="h-full bg-emerald-500 rounded-full transition-all duration-500" :style="{ width: `${scoreResult.strokeCountScore}%` }" />
                </div>
              </div>
              <p v-else class="text-xs text-muted-foreground">
                Stroke-count score unavailable because no verified count was supplied for this character.
              </p>

              <div>
                <div class="flex justify-between text-xs font-medium">
                  <span>Centering & Balance</span>
                  <span>{{ scoreResult.centeringScore }}%</span>
                </div>
                <div class="mt-1 h-2 rounded-full bg-muted overflow-hidden">
                  <div class="h-full bg-amber-500 rounded-full transition-all duration-500" :style="{ width: `${scoreResult.centeringScore}%` }" />
                </div>
              </div>
            </div>
          </template>

          <template v-else>
            <div class="mt-6 flex flex-col items-center justify-center rounded-xl border border-dashed border-border py-10 px-4 text-center">
              <span class="text-3xl">🖋️</span>
              <p class="mt-2 text-sm font-medium text-foreground">Awaiting Your Strokes</p>
              <p class="mt-1 text-xs text-muted-foreground max-w-xs">
                Draw the character "{{ character }}" stroke by stroke on the Tian Zi Ge canvas, then click "Score My Character" for full diagnostics.
              </p>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
