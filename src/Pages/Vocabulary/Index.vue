<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useVocabulary } from '../../Composables/useVocabulary'
import { UiButton } from '../../Ui'
import CompAdSense from '../../Components/CompAdSense.vue'
import { HSK3_VOCABULARY_SOURCE_NOTE } from '../../Data/hsk3VocabularyData'
import CompCharacterDetail from './Comps/CompCharacterDetail.vue'
import CompVocabularyList from './Comps/CompVocabularyList.vue'
import type { HskLevel } from './types'

const route = useRoute()
const router = useRouter()
const { getByCharacter, getByLevel } = useVocabulary()

const level = computed<HskLevel>(() => route.params.level === '3' ? 3 : route.params.level === '2' ? 2 : 1)
const entries = computed(() => getByLevel(level.value))

const selectedCharacter = computed(() => {
  const queryCharacter = route.query.char
  if (typeof queryCharacter === 'string' && queryCharacter !== 'none' && queryCharacter !== '') {
    return queryCharacter
  }
  return entries.value[0]?.character || ''
})

const selectedEntry = computed(() => {
  const entry = selectedCharacter.value ? getByCharacter(selectedCharacter.value, level.value) : undefined
  return entry || entries.value[0]
})

function selectCharacter(character: string) {
  return router.push({ name: 'vocabulary', params: { level: level.value }, query: { char: character } })
}

function openPractice(character: string) {
  return router.push({ name: 'vocabulary-practice', params: { level: level.value }, query: { char: character } })
}
</script>

<template>
  <main class="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8">
    <div class="mx-auto max-w-6xl">
      <header class="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div class="flex items-center gap-2">
            <RouterLink to="/" class="text-sm font-medium text-primary hover:underline">← Home</RouterLink>
            <span class="text-muted-foreground">/</span>
            <RouterLink :to="`/hsk${level}`" class="text-sm font-medium text-primary hover:underline">HSK {{ level }} Portal</RouterLink>
          </div>
          <h1 class="mt-2 text-3xl font-extrabold tracking-tight">HSK {{ level }} Vocabulary ({{ entries.length }} Words)</h1>
          <p class="mt-2 text-muted-foreground">
            Review the HSK {{ level }} word list with pinyin and English glosses. Supplemental details are omitted when they are not supported by the source.
          </p>
          <p v-if="level === 3" class="mt-2 text-xs text-muted-foreground">
            {{ HSK3_VOCABULARY_SOURCE_NOTE }}
          </p>
        </div>
        <div class="flex items-center gap-2">
          <RouterLink :to="{ name: 'vocabulary', params: { level: 1 } }">
            <UiButton :variant="level === 1 ? 'primary' : 'outline'" size="sm">HSK 1 (150)</UiButton>
          </RouterLink>
          <RouterLink :to="{ name: 'vocabulary', params: { level: 2 } }">
            <UiButton :variant="level === 2 ? 'primary' : 'outline'" size="sm">HSK 2 (150)</UiButton>
          </RouterLink>
          <RouterLink :to="{ name: 'vocabulary', params: { level: 3 } }">
            <UiButton :variant="level === 3 ? 'primary' : 'outline'" size="sm">HSK 3 (300)</UiButton>
          </RouterLink>
          <RouterLink :to="{ name: 'vocabulary-practice', params: { level: level } }">
            <UiButton variant="secondary" size="sm">✍️ Hanzi Practice Lab</UiButton>
          </RouterLink>
        </div>
      </header>

      <CompAdSense format="banner" slot-id="hsk-vocabulary-top" />

      <div class="grid items-start gap-6 lg:grid-cols-[20rem_minmax(0,1fr)]">
        <aside>
          <div class="mb-3 flex items-center justify-between">
            <h2 class="text-sm font-semibold text-muted-foreground">Word List · {{ entries.length }}</h2>
            <span class="text-xs text-primary font-medium">HSK {{ level }}</span>
          </div>
          <CompVocabularyList :entries="entries" :selected-character="selectedCharacter" @select="selectCharacter" />
        </aside>

        <section>
          <CompCharacterDetail
            v-if="selectedEntry"
            :entry="selectedEntry"
            :level="level"
            @practice="openPractice"
          />
          <div v-else class="rounded-2xl border border-border bg-surface p-8 text-center">
            <p class="text-lg font-semibold">Character not found</p>
            <p class="mt-2 text-sm text-muted-foreground">
              Please choose a character from the list on the left.
            </p>
          </div>
        </section>
      </div>
    </div>
  </main>
</template>
