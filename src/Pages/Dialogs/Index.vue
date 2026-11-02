<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute, useRouter, RouterLink } from 'vue-router'
import { getDialogsByLevel, getDialogById } from '../../Data/dialogsData'
import { UiButton, UiBadge } from '../../Ui'
import { speakChinese } from '../../Utils/speech'
import SceneIllustration from '../../Components/SceneIllustration.vue'
import CompAdSense from '../../Components/CompAdSense.vue'

const route = useRoute()
const router = useRouter()

const level = computed<1 | 2 | 3>(() => route.params.level === '3' ? 3 : route.params.level === '2' ? 2 : 1)
const dialogs = computed(() => getDialogsByLevel(level.value))

const selectedId = computed(() => {
  const q = route.query.id
  if (typeof q === 'string' && q) {
    return q
  }
  return null
})

const activeDialog = computed(() => {
  if (selectedId.value) {
    return getDialogById(selectedId.value)
  }
  return null
})

// Display toggles
const showPinyin = ref(true)
const showEnglish = ref(true)
const isPlayingAll = ref(false)

function selectDialog(id: string) {
  router.push({
    path: `/hsk${level.value}/dialogs`,
    query: { id }
  })
}

function backToList() {
  router.push({
    path: `/hsk${level.value}/dialogs`
  })
}

function playAudio(text: string, rate: number = 0.85) {
  speakChinese(text, rate)
}

async function playAllLines() {
  if (!activeDialog.value) return
  isPlayingAll.value = true

  for (const line of activeDialog.value.lines) {
    if (!isPlayingAll.value) break
    await speakChinese(line.chinese, 0.85)
    await new Promise((resolve) => setTimeout(resolve, 600))
  }
  isPlayingAll.value = false
}

function stopPlaying() {
  isPlayingAll.value = false
}
</script>

<template>
  <div class="min-h-screen bg-background text-foreground">
    <!-- Header -->
    <header class="border-b border-border bg-surface py-8 px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-6xl">
        <div class="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div class="flex items-center gap-2">
              <RouterLink to="/" class="text-sm font-medium text-primary hover:underline">Home</RouterLink>
              <span class="text-muted-foreground">/</span>
              <RouterLink :to="`/hsk${level}`" class="text-sm font-medium text-primary hover:underline">HSK {{ level }} Hub</RouterLink>
              <span class="text-muted-foreground">/</span>
              <span class="text-sm font-semibold text-muted-foreground">Dialogues</span>
            </div>
            <h1 class="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
              HSK {{ level }} Dialogue Scenarios ({{ dialogs.length }} Situations)
            </h1>
            <p class="mt-1 text-sm text-muted-foreground">
              Review available conversational Chinese with line-by-line speech audio, pinyin, and translations.
            </p>
          </div>

          <div class="flex items-center gap-2">
            <RouterLink :to="`/hsk1/dialogs`">
              <UiButton :variant="level === 1 ? 'primary' : 'outline'" size="sm">HSK 1</UiButton>
            </RouterLink>
            <RouterLink :to="`/hsk2/dialogs`">
              <UiButton :variant="level === 2 ? 'primary' : 'outline'" size="sm">HSK 2</UiButton>
            </RouterLink>
            <RouterLink :to="`/hsk3/dialogs`">
              <UiButton :variant="level === 3 ? 'primary' : 'outline'" size="sm">HSK 3</UiButton>
            </RouterLink>
          </div>
        </div>
      </div>
    </header>

    <main class="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <!-- Top AdSense Banner -->
      <CompAdSense format="banner" slot-id="dialogs-top" />

      <div v-if="!dialogs.length" class="rounded-2xl border border-border bg-surface p-8 text-center">
        <h2 class="text-xl font-bold text-foreground">HSK {{ level }} dialogue materials are not available yet</h2>
        <p class="mt-2 text-sm text-muted-foreground">
          This portal does not show unreviewed or generated conversations as coursebook content.
        </p>
        <RouterLink :to="`/hsk${level}/lessons`" class="mt-5 inline-block">
          <UiButton variant="outline">Browse HSK {{ level }} lessons</UiButton>
        </RouterLink>
      </div>
      <!-- VIEW 1: SINGLE DIALOGUE DETAIL -->
      <div v-else-if="activeDialog">
        <div class="mb-6 flex flex-wrap items-center justify-between gap-4">
          <UiButton variant="ghost" size="sm" @click="backToList">
            ← All {{ dialogs.length }} Dialogue Scenarios
          </UiButton>

          <!-- Toggles & Autoplay -->
          <div class="flex flex-wrap items-center gap-2">
            <label class="flex items-center gap-1.5 text-xs font-medium cursor-pointer rounded-lg bg-surface border border-border px-3 py-1.5">
              <input v-model="showPinyin" type="checkbox" class="rounded border-border text-primary" />
              Pinyin
            </label>
            <label class="flex items-center gap-1.5 text-xs font-medium cursor-pointer rounded-lg bg-surface border border-border px-3 py-1.5">
              <input v-model="showEnglish" type="checkbox" class="rounded border-border text-primary" />
              English
            </label>
            <UiButton v-if="!isPlayingAll" size="sm" @click="playAllLines">
              ▶️ Play All
            </UiButton>
            <UiButton v-else size="sm" variant="destructive" @click="stopPlaying">
              ⏹️ Stop
            </UiButton>
          </div>
        </div>

        <article class="rounded-2xl border border-border bg-surface p-6 shadow-sm sm:p-8">
          <div class="flex flex-wrap items-center justify-between gap-3">
            <UiBadge variant="secondary">Scenario {{ activeDialog.dialogNumber }} · HSK {{ level }}</UiBadge>
            <span class="text-xs text-muted-foreground">📍 Location: {{ activeDialog.scenario }}</span>
          </div>

          <SceneIllustration
            class="mt-5"
            kind="dialogue"
            :level="level"
            :number="activeDialog.dialogNumber"
            :title="activeDialog.title"
            :subtitle="activeDialog.scenario"
            :description="activeDialog.lines[0]?.english"
          />

          <h2 class="mt-4 text-3xl font-extrabold text-foreground">
            {{ activeDialog.title }}
          </h2>

          <!-- Dialogue Lines Flow -->
          <div class="mt-8 space-y-4">
            <div
              v-for="line in activeDialog.lines"
              :key="line.chinese"
              class="flex items-start gap-4 rounded-xl border border-border bg-surface-raised p-4 transition-colors hover:border-primary/40"
            >
              <div class="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-secondary text-2xl">
                {{ line.avatar }}
              </div>
              <div class="flex-1">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-bold text-primary">{{ line.speaker }}</span>
                  <button
                    type="button"
                    class="rounded-full bg-secondary p-1 text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors text-xs px-2 py-0.5"
                    @click="playAudio(line.chinese)"
                  >
                    🔊 Listen
                  </button>
                </div>
                <p class="mt-1 text-xl font-medium text-foreground" lang="zh">
                  {{ line.chinese }}
                </p>
                <p v-if="showPinyin" class="mt-1 text-sm font-semibold text-primary">
                  {{ line.pinyin }}
                </p>
                <p v-if="showEnglish" class="mt-1 text-xs text-muted-foreground">
                  {{ line.english }}
                </p>
              </div>
            </div>
          </div>

          <!-- Cultural Tip Box -->
          <div class="mt-10 rounded-xl border border-blue-200 bg-blue-50/30 p-5 dark:border-blue-900/40 dark:bg-blue-950/10">
            <h3 class="flex items-center gap-2 text-base font-bold text-blue-900 dark:text-blue-300">
              <span>💡</span> Situational Etiquette Tip
            </h3>
            <p class="mt-2 text-sm leading-relaxed text-blue-950 dark:text-blue-200">
              {{ activeDialog.tip }}
            </p>
          </div>

          <!-- Mid-dialogue ad slot -->
          <CompAdSense format="in-article" slot-id="dialog-detail-ad" class="mt-8" />
        </article>
      </div>

      <!-- VIEW 2: ALL DIALOGUES GRID -->
      <div v-else>
        <div class="grid gap-6 md:grid-cols-2">
          <div
            v-for="d in dialogs"
            :key="d.id"
            class="group cursor-pointer rounded-2xl border border-border bg-surface p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
            @click="selectDialog(d.id)"
          >
            <SceneIllustration
              class="mb-4"
              kind="dialogue"
              :level="level"
              :number="d.dialogNumber"
              :title="d.title"
              :subtitle="d.scenario"
              :description="d.lines[0]?.english"
            />
            <div class="flex items-center justify-between">
              <UiBadge variant="secondary">Scenario #{{ d.dialogNumber }}</UiBadge>
              <span class="text-xs text-muted-foreground">📍 {{ d.scenario }}</span>
            </div>
            <h3 class="mt-3 text-xl font-bold text-foreground group-hover:text-primary transition-colors">
              {{ d.title }}
            </h3>
            <p class="mt-2 text-xs leading-relaxed text-muted-foreground">
              {{ d.tip }}
            </p>
            <div class="mt-4 pt-3 border-t border-border flex items-center justify-between">
              <span class="text-xs font-semibold text-primary">Open Dialogue →</span>
              <span class="text-xs text-muted-foreground">{{ d.lines.length }} lines · Audio Ready</span>
            </div>
          </div>
        </div>

        <!-- In-feed bottom ad slot -->
        <CompAdSense format="in-feed" slot-id="dialogs-grid-bottom" class="mt-8" />
      </div>
    </main>
  </div>
</template>
