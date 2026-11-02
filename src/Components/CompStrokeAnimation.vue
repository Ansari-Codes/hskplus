<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import HanziWriter from 'hanzi-writer'

const props = defineProps<{ character: string }>()
const characters = computed(() => Array.from(props.character))
const hosts = ref<HTMLDivElement[]>([])
const loadErrors = ref<string[]>([])
let writers: ReturnType<typeof HanziWriter.create>[] = []

function setHost(element: Element | import('vue').ComponentPublicInstance | null, index: number) {
  if (element instanceof HTMLDivElement) hosts.value[index] = element
}

function createWriters() {
  writers.forEach(writer => writer.pauseAnimation())
  writers = []
  loadErrors.value = []

  characters.value.forEach((character, index) => {
    const host = hosts.value[index]
    if (!host || !/[\u3400-\u9fff]/u.test(character)) return

    host.replaceChildren()
    writers.push(HanziWriter.create(host, character, {
      width: 88,
      height: 88,
      padding: 5,
      showOutline: true,
      strokeColor: getComputedStyle(document.documentElement).getPropertyValue('--primary').trim(),
      outlineColor: getComputedStyle(document.documentElement).getPropertyValue('--border').trim(),
      onLoadCharDataError: error => {
        loadErrors.value[index] = error instanceof Error ? error.message : 'Stroke data could not be loaded.'
      },
    }))
  })
}

async function animate() {
  if (loadErrors.value.some(Boolean)) {
    await nextTick()
    createWriters()
  }
  for (const writer of writers) {
    if (writer) await writer.animateCharacter()
  }
}

watch(() => props.character, async () => {
  await nextTick()
  createWriters()
})
onMounted(createWriters)
onBeforeUnmount(() => {
  writers.forEach(writer => writer.pauseAnimation())
  hosts.value.forEach(host => host?.replaceChildren())
  writers = []
})

defineExpose({ animate })
</script>

<template>
  <div class="flex max-w-full items-center justify-center gap-1 overflow-x-auto" :aria-label="`Stroke-order drawings for ${character}`" role="img">
    <template v-for="(character, index) in characters" :key="`${character}-${index}`">
      <div
        v-if="/[\u3400-\u9fff]/u.test(character)"
        :ref="element => setHost(element, index)"
        class="size-20 shrink-0 overflow-hidden rounded-lg sm:size-[5.5rem]"
      />
      <span v-else class="text-xl text-muted-foreground">{{ character }}</span>
    </template>
  </div>
  <p v-if="loadErrors.some(Boolean)" role="status" class="mt-2 text-xs text-destructive">
    Stroke data unavailable for {{ loadErrors.filter(Boolean).length }} character(s).
  </p>
</template>
