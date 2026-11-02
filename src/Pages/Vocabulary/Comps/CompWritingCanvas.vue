<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import type { PracticePoint, PracticeStroke } from '../types'
import { UiButton } from '../../../Ui'

const props = defineProps<{
  character: string
  expectedStrokes: number
}>()

const strokes = ref<PracticeStroke[]>([])
const canvas = ref<HTMLCanvasElement | null>(null)
const completedStrokes = computed(() => strokes.value.length)
const progress = computed(() => Math.min(completedStrokes.value, props.expectedStrokes))
let activeStroke: PracticeStroke | undefined
let resizeObserver: ResizeObserver | undefined

function redraw() {
  const element = canvas.value
  const context = element?.getContext('2d')
  if (!element || !context) return

  const bounds = element.getBoundingClientRect()
  const pixelRatio = window.devicePixelRatio || 1
  element.width = Math.round(bounds.width * pixelRatio)
  element.height = Math.round(bounds.height * pixelRatio)
  context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
  context.clearRect(0, 0, bounds.width, bounds.height)

  context.save()
  context.globalAlpha = 0.1
  context.fillStyle = getComputedStyle(element).color
  context.font = `${Math.min(bounds.width, bounds.height) * 0.67}px "Noto Sans CJK SC", "Microsoft YaHei", sans-serif`
  context.textAlign = 'center'
  context.textBaseline = 'middle'
  context.fillText(props.character, bounds.width / 2, bounds.height / 2)
  context.restore()

  context.lineCap = 'round'
  context.lineJoin = 'round'
  context.lineWidth = Math.max(3, Math.min(bounds.width, bounds.height) * 0.025)
  context.strokeStyle = getComputedStyle(element).color

  for (const stroke of strokes.value) {
    drawStroke(context, stroke, bounds.width, bounds.height)
  }
}

function drawStroke(
  context: CanvasRenderingContext2D,
  stroke: PracticeStroke,
  width: number,
  height: number,
) {
  if (stroke.points.length === 0) return
  context.beginPath()
  context.moveTo(stroke.points[0].x * width, stroke.points[0].y * height)
  for (const point of stroke.points.slice(1)) {
    context.lineTo(point.x * width, point.y * height)
  }
  context.stroke()
}

function pointFromEvent(event: PointerEvent): PracticePoint | undefined {
  const bounds = canvas.value?.getBoundingClientRect()
  if (!bounds || bounds.width === 0 || bounds.height === 0) return undefined

  return {
    x: Math.max(0, Math.min(1, (event.clientX - bounds.left) / bounds.width)),
    y: Math.max(0, Math.min(1, (event.clientY - bounds.top) / bounds.height)),
  }
}

function startStroke(event: PointerEvent) {
  const point = pointFromEvent(event)
  if (!point) return

  canvas.value?.setPointerCapture(event.pointerId)
  activeStroke = { points: [point] }
  strokes.value = [...strokes.value, activeStroke]
  redraw()
}

function continueStroke(event: PointerEvent) {
  if (!activeStroke) return
  const point = pointFromEvent(event)
  if (!point) return

  activeStroke.points.push(point)
  redraw()
}

function endStroke() {
  activeStroke = undefined
}

function undoStroke() {
  if (activeStroke) {
    activeStroke = undefined
  }
  strokes.value = strokes.value.slice(0, -1)
  redraw()
}

function clearCanvas() {
  activeStroke = undefined
  strokes.value = []
  redraw()
}

onMounted(() => {
  if (!canvas.value) return
  resizeObserver = new ResizeObserver(redraw)
  resizeObserver.observe(canvas.value)
  redraw()
})

onBeforeUnmount(() => {
  resizeObserver?.disconnect()
})
</script>

<template>
  <div>
    <div class="relative overflow-hidden rounded-xl border border-border bg-surface-raised">
      <canvas
        ref="canvas"
        class="block aspect-square w-full touch-none cursor-crosshair text-foreground"
        :aria-label="`Writing practice for ${character}. Draw one stroke at a time.`"
        @pointerdown="startStroke"
        @pointermove="continueStroke"
        @pointerup="endStroke"
        @pointercancel="endStroke"
      />
      <span class="pointer-events-none absolute left-3 top-3 rounded-full bg-surface/90 px-2.5 py-1 text-xs font-medium text-muted-foreground">
        {{ progress >= expectedStrokes ? 'All strokes practiced' : `Draw stroke ${progress + 1} of ${expectedStrokes}` }}
      </span>
    </div>
    <div class="mt-3 flex flex-wrap items-center justify-between gap-3">
      <p class="text-sm text-muted-foreground" aria-live="polite">
        {{ progress }} of {{ expectedStrokes }} strokes practiced
      </p>
      <div class="flex gap-2">
        <UiButton size="sm" variant="outline" :disabled="strokes.length === 0" @click="undoStroke">Undo stroke</UiButton>
        <UiButton size="sm" variant="ghost" :disabled="strokes.length === 0" @click="clearCanvas">Start over</UiButton>
      </div>
    </div>
  </div>
</template>
