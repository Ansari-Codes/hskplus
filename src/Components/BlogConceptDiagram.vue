<script setup lang="ts">
import { computed } from 'vue'
import type { BlogDiagramKind } from '../Data/blogsData'

const props = defineProps<{
  kind: BlogDiagramKind
}>()

interface DiagramNode {
  label: string
  detail: string
}

interface DiagramContent {
  title: string
  description: string
  nodes: DiagramNode[]
}

const diagrams: Record<BlogDiagramKind, DiagramContent> = {
  'word-order': {
    title: 'Mandarin sentence order',
    description: 'Place time and location before the action to build a clear basic sentence.',
    nodes: [
      { label: 'Subject', detail: '我们 · we' },
      { label: 'Time', detail: '明天 · tomorrow' },
      { label: 'Location', detail: '在学校 · at school' },
      { label: 'Verb', detail: '学习 · study' },
      { label: 'Object', detail: '汉语 · Chinese' },
    ],
  },
  'study-plan': {
    title: 'A practical study cycle',
    description: 'A steady routine moves from learning to practice and review.',
    nodes: [
      { label: 'Set a goal', detail: 'choose a target' },
      { label: 'Learn', detail: 'small daily lessons' },
      { label: 'Practice', detail: 'recall and use it' },
      { label: 'Review', detail: 'return to weak spots' },
    ],
  },
  'exam-levels': {
    title: 'Build your HSK pathway',
    description: 'Treat each level as a new learning goal; check the current exam syllabus as it changes.',
    nodes: [
      { label: 'Build basics', detail: 'sounds and words' },
      { label: 'Study a level', detail: 'grammar and skills' },
      { label: 'Check readiness', detail: 'practice and review' },
    ],
  },
  'grammar-check': {
    title: 'A quick grammar check',
    description: 'Check the sentence frame before translating word for word.',
    nodes: [
      { label: 'Who?', detail: 'find the subject' },
      { label: 'When?', detail: 'place time early' },
      { label: 'Where?', detail: 'place location' },
      { label: 'Action', detail: 'verb + object' },
    ],
  },
  'tone-contours': {
    title: 'The four Mandarin tones',
    description: 'Practice each pitch shape clearly; the contour changes a syllable’s meaning.',
    nodes: [
      { label: '1st · mā', detail: 'high and level' },
      { label: '2nd · má', detail: 'rising' },
      { label: '3rd · mǎ', detail: 'low then rising' },
      { label: '4th · mà', detail: 'sharp falling' },
    ],
  },
  'character-parts': {
    title: 'Read character components',
    description: 'A component may hint at meaning or sound; use it as a clue, then confirm the whole character.',
    nodes: [
      { label: 'Whole character', detail: 'identify the form' },
      { label: 'Meaning clue', detail: 'look at the radical' },
      { label: 'Sound clue', detail: 'notice other parts' },
      { label: 'Confirm', detail: 'check meaning + sound' },
    ],
  },
  'spaced-repetition': {
    title: 'Space out character review',
    description: 'Return to a character after increasing intervals and shorten the gap when recall is difficult.',
    nodes: [
      { label: 'Learn', detail: 'write from memory' },
      { label: 'Review', detail: 'later the same day' },
      { label: 'Recall', detail: 'the next day' },
      { label: 'Revisit', detail: 'after a few days' },
    ],
  },
  'listening-strategy': {
    title: 'A focused listening routine',
    description: 'Use the prompt and choices to know what to listen for, then verify the key detail.',
    nodes: [
      { label: 'Preview', detail: 'read the choices' },
      { label: 'Listen', detail: 'focus on meaning' },
      { label: 'Match', detail: 'find key details' },
      { label: 'Verify', detail: 'check the full idea' },
    ],
  },
  'measure-words': {
    title: 'Build a measure-word phrase',
    description: 'In Mandarin, a number or demonstrative is commonly followed by a measure word before the noun.',
    nodes: [
      { label: 'Number', detail: '三 · three' },
      { label: 'Measure word', detail: '本 · for books' },
      { label: 'Noun', detail: '书 · books' },
      { label: 'Phrase', detail: '三本书 · three books' },
    ],
  },
  'exam-strategy': {
    title: 'Use a repeatable exam routine',
    description: 'Prepare, pace yourself, and use mistakes from practice to guide your next review.',
    nodes: [
      { label: 'Prepare', detail: 'review core skills' },
      { label: 'Practice', detail: 'use timed sections' },
      { label: 'Review', detail: 'analyze mistakes' },
      { label: 'Adjust', detail: 'target weak areas' },
    ],
  },
  'reading-strategy': {
    title: 'Read with a purpose',
    description: 'Scan for what the question asks, then read the relevant text carefully.',
    nodes: [
      { label: 'Read prompt', detail: 'know what to find' },
      { label: 'Scan', detail: 'spot key words' },
      { label: 'Read context', detail: 'check nearby clues' },
      { label: 'Answer', detail: 'verify before choosing' },
    ],
  },
  particles: {
    title: 'Particles work in sentence context',
    description: 'A particle follows or frames a phrase to signal a grammatical or conversational function.',
    nodes: [
      { label: 'Phrase', detail: 'the main idea' },
      { label: 'Particle', detail: '吗 · question' },
      { label: 'Sentence', detail: '你好吗？' },
    ],
  },
  'date-time': {
    title: 'Say a date and time',
    description: 'Build date expressions from larger units to smaller ones, then add the time of day.',
    nodes: [
      { label: 'Year', detail: '年 · year' },
      { label: 'Month', detail: '月 · month' },
      { label: 'Day', detail: '日 / 号 · day' },
      { label: 'Clock time', detail: '点 · o’clock' },
    ],
  },
  politeness: {
    title: 'Choose a polite expression',
    description: 'Consider the relationship and situation when choosing forms of address and requests.',
    nodes: [
      { label: 'Notice context', detail: 'who and where' },
      { label: 'Choose address', detail: '你 or 您' },
      { label: 'Make request', detail: '请 · please' },
      { label: 'Respond', detail: '谢谢 · thank you' },
    ],
  },
  'study-toolkit': {
    title: 'Combine useful study tools',
    description: 'Choose tools that help you practice different skills, and keep a routine you can sustain.',
    nodes: [
      { label: 'Listen', detail: 'audio and podcasts' },
      { label: 'Read', detail: 'graded text' },
      { label: 'Recall', detail: 'flashcards' },
      { label: 'Practice', detail: 'speaking and writing' },
    ],
  },
  'question-words': {
    title: 'Question words stay in place',
    description: 'Replace the unknown information with a question word instead of moving it to the front.',
    nodes: [
      { label: 'Statement', detail: '你住在北京。' },
      { label: 'Replace detail', detail: '北京 → 哪儿' },
      { label: 'Ask in place', detail: '你住在哪儿？' },
    ],
  },
  'test-day': {
    title: 'A calm test-day checklist',
    description: 'Handle logistics early so you can focus on the exam itself.',
    nodes: [
      { label: 'Before', detail: 'confirm time + place' },
      { label: 'Pack', detail: 'required materials' },
      { label: 'Arrive', detail: 'allow extra time' },
      { label: 'Begin', detail: 'follow instructions' },
    ],
  },
  'stroke-order': {
    title: 'Common stroke-order principles',
    description: 'These are useful starting rules; learn each character’s actual stroke order as you practice.',
    nodes: [
      { label: 'Top', detail: 'write top to bottom' },
      { label: 'Left', detail: 'write left to right' },
      { label: 'Main form', detail: 'horizontal before vertical' },
      { label: 'Finish', detail: 'close the frame last' },
    ],
  },
  'career-path': {
    title: 'Turn study into opportunities',
    description: 'Use language goals to support academic and career plans, and verify requirements with each institution.',
    nodes: [
      { label: 'Set a goal', detail: 'study or work' },
      { label: 'Build skills', detail: 'language + portfolio' },
      { label: 'Check criteria', detail: 'confirm requirements' },
      { label: 'Apply', detail: 'prepare your materials' },
    ],
  },
}

const diagram = computed(() => diagrams[props.kind])
const startX = computed(() => (800 - (diagram.value.nodes.length * 140 + (diagram.value.nodes.length - 1) * 24)) / 2)

function nodeX(index: number) {
  return startX.value + index * 164
}

const toneContours = [
  'M20 128 L120 128',
  'M20 134 L120 108',
  'M20 112 Q48 144 72 132 T120 108',
  'M20 108 L120 136',
]
</script>

<template>
  <section class="mt-8 rounded-2xl border border-border bg-surface p-5 sm:p-6" :aria-label="diagram.title">
    <h2 class="text-xl font-bold text-foreground">{{ diagram.title }}</h2>
    <p class="mt-2 text-sm leading-relaxed text-muted-foreground">{{ diagram.description }}</p>

    <div class="mt-4 overflow-x-auto">
      <svg
        class="h-auto min-w-[640px] w-full"
        viewBox="0 0 800 180"
        role="img"
        :aria-label="`${diagram.title}. ${diagram.nodes.map(node => `${node.label}: ${node.detail}`).join('; ')}`"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <marker :id="`arrow-${kind}`" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
            <path d="M0 0L8 4L0 8z" fill="var(--primary)" />
          </marker>
        </defs>

        <g v-for="(node, index) in diagram.nodes" :key="node.label">
          <line
            v-if="index < diagram.nodes.length - 1"
            :x1="nodeX(index) + 142"
            y1="91"
            :x2="nodeX(index + 1) - 7"
            y2="91"
            stroke="var(--primary)"
            stroke-width="2"
            :marker-end="`url(#arrow-${kind})`"
          />
          <rect
            :x="nodeX(index)"
            y="45"
            width="140"
            height="92"
            rx="14"
            fill="var(--surface-raised)"
            stroke="var(--border)"
            stroke-width="1.5"
          />
          <text
            :x="nodeX(index) + 70"
            y="73"
            text-anchor="middle"
            fill="var(--foreground)"
            font-size="14"
            font-weight="700"
          >
            {{ node.label }}
          </text>
          <text
            :x="nodeX(index) + 70"
            :y="kind === 'tone-contours' ? 99 : 103"
            text-anchor="middle"
            fill="var(--muted-foreground)"
            font-size="11"
          >
            {{ node.detail }}
          </text>
          <path
            v-if="kind === 'tone-contours'"
            :d="toneContours[index]"
            :transform="`translate(${nodeX(index)}, 0)`"
            fill="none"
            stroke="var(--primary)"
            stroke-width="3"
            stroke-linecap="round"
          />
        </g>
      </svg>
    </div>
    <p class="mt-2 text-xs text-muted-foreground">Concept illustration · swipe horizontally on small screens to view the full diagram.</p>
  </section>
</template>
