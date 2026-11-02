<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  kind: 'lesson' | 'dialogue'
  level: 1 | 2 | 3
  number: number
  title: string
  subtitle: string
  description?: string
}>()

const topic = computed(() => `${props.subtitle} ${props.description ?? ''} ${props.title}`.toLowerCase())

const sceneIcon = computed(() => {
  const scenes: [RegExp, string][] = [
    [/restaurant|饭馆|点菜|餐|hotpot|火锅/, '🍜'],
    [/fruit|market|水果|买苹果|商场|store|clothing|试衣服/, '🛍️'],
    [/airport|机场|taxi|打车|train|火车|station|ticket|车票|问路/, '🚉'],
    [/date|calendar|日期|几月|办公室|office/, '📅'],
    [/telephone|phone|电话|calling/, '📞'],
    [/family|宠物|家人|living room|apartment|租房|hotel|酒店|房间/, '🏠'],
    [/teahouse|茶馆|tea|café|coffee|咖啡/, '🍵'],
    [/weather|天气|bus stop/, '🌤️'],
    [/weekend|周末|plan|计划/, '🗓️'],
    [/hospital|clinic|doctor|医生|生病/, '🩺'],
    [/sports|健身|gym|运动/, '⚽'],
    [/travel|旅行|旅游|airport|airport/, '🧳'],
    [/library|exam|考试|study|university|classroom|campus|学校|学习/, '📚'],
    [/greet|hello|见面|你好/, '👋'],
    [/time|起床|morning|每天|每天六点/, '⏰'],
    [/work|工作|job|职业/, '💼'],
  ]

  return scenes.find(([pattern]) => pattern.test(topic.value))?.[1] ?? (props.kind === 'lesson' ? '✏️' : '💬')
})

const imageLabel = computed(() =>
  `${props.kind === 'lesson' ? 'Illustration' : 'Dialogue scene'} for HSK ${props.level} ${props.kind} ${props.number}: ${props.title}. ${props.subtitle}.`,
)

const titleMark = computed(() => props.title.match(/^[\u3400-\u9fff]{1,4}/)?.[0] ?? (props.kind === 'lesson' ? '学' : '说'))
</script>

<template>
  <div class="overflow-hidden rounded-xl border border-border bg-muted/40">
    <svg
      class="block h-auto w-full text-primary"
      viewBox="0 0 640 220"
      role="img"
      :aria-label="imageLabel"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="548" cy="33" r="104" class="fill-current opacity-[0.06]" />
      <circle cx="86" cy="198" r="106" class="fill-current opacity-[0.05]" />
      <path d="M0 174c87-28 151 15 240-5s157-31 228-3 116 6 172-10v64H0z" class="fill-current opacity-[0.08]" />

      <text x="28" y="38" class="fill-current text-[13px] font-bold tracking-[2px] opacity-70">
        HSK {{ level }} · {{ kind === 'lesson' ? 'LESSON' : 'DIALOGUE' }} {{ number }}
      </text>
      <text x="34" y="132" class="fill-current text-[72px] font-bold opacity-80" lang="zh">
        {{ titleMark }}
      </text>
      <text x="36" y="166" class="fill-current text-[19px] font-semibold">
        {{ subtitle.length > 27 ? `${subtitle.slice(0, 26)}…` : subtitle }}
      </text>
      <text x="36" y="189" class="fill-current text-[13px] opacity-60">
        {{ kind === 'lesson' ? 'Explore this lesson' : 'A conversation in context' }}
      </text>

      <rect x="477" y="45" width="118" height="118" rx="34" class="fill-current opacity-[0.10]" />
      <text x="536" y="128" text-anchor="middle" class="text-[64px]">
        {{ sceneIcon }}
      </text>
      <path d="M461 153h-21l-14 14v-14h-5a12 12 0 0 1-12-12v-29a12 12 0 0 1 12-12h32a12 12 0 0 1 12 12v29a12 12 0 0 1-12 12z" class="fill-current opacity-[0.13]" />
      <circle cx="424" cy="126" r="3" class="fill-current opacity-60" />
      <circle cx="437" cy="126" r="3" class="fill-current opacity-60" />
      <circle cx="450" cy="126" r="3" class="fill-current opacity-60" />
    </svg>
  </div>
</template>
