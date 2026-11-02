<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  DOWNLOAD_MATERIALS,
  GITHUB_REPO_RELEASES_URL,
  type DownloadMaterial,
} from '../Data/downloadMaterialsData'
import { UiBadge, UiButton } from '../Ui'

const props = withDefaults(
  defineProps<{
    level?: 1 | 2 | 3 | 'all'
    showHeading?: boolean
    title?: string
    subtitle?: string
    compact?: boolean
  }>(),
  {
    level: 'all',
    showHeading: true,
    title: '',
    subtitle: '',
    compact: false,
  },
)

const activeFilter = ref<'all' | '1' | '2' | '3' | 'general'>(
  props.level === 'all' ? 'all' : (props.level.toString() as '1' | '2' | '3'),
)

const filteredMaterials = computed<DownloadMaterial[]>(() => {
  if (props.level !== 'all') {
    return DOWNLOAD_MATERIALS.filter(m => m.level === props.level)
  }
  if (activeFilter.value === 'all') {
    return DOWNLOAD_MATERIALS
  }
  if (activeFilter.value === 'general') {
    return DOWNLOAD_MATERIALS.filter(m => m.level === 'all')
  }
  const targetLevel = parseInt(activeFilter.value, 10) as 1 | 2 | 3
  return DOWNLOAD_MATERIALS.filter(m => m.level === targetLevel)
})

const defaultTitle = computed(() => {
  if (props.title) return props.title
  if (props.level === 'all') return 'Official Standard Course Learning Materials'
  return `Download Official HSK ${props.level} Course Materials`
})

const defaultSubtitle = computed(() => {
  if (props.subtitle) return props.subtitle
  if (props.level === 'all') {
    return 'Authentic BLCUP textbooks, Hanban vocabulary checklists, printable calligraphy grids, and complete mock exam bundles distributed via GitHub Releases.'
  }
  return `Authentic BLCUP textbook PDF, Hanban certified vocabulary sheet, and full mock exam papers with native listening MP3 audio for HSK ${props.level}.`
})

function getLevelBadgeClass(lvl: 1 | 2 | 3 | 'all') {
  if (lvl === 1) return 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20'
  if (lvl === 2) return 'bg-sky-500/10 text-sky-700 dark:text-sky-400 border-sky-500/20'
  if (lvl === 3) return 'bg-rose-500/10 text-rose-700 dark:text-rose-400 border-rose-500/20'
  return 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20'
}

function getFormatBadgeClass(fmt: 'PDF' | 'ZIP' | 'MP3') {
  if (fmt === 'PDF') return 'bg-red-500/10 text-red-700 dark:text-red-400 border-red-500/20'
  if (fmt === 'ZIP') return 'bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 border-indigo-500/20'
  return 'bg-violet-500/10 text-violet-700 dark:text-violet-400 border-violet-500/20'
}
</script>

<template>
  <section class="w-full">
    <!-- Header Section -->
    <div v-if="showHeading" class="mb-8">
      <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <div class="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary mb-2">
            <span>📥</span>
            <span>Free Standard Downloads</span>
          </div>
          <h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
            {{ defaultTitle }}
          </h2>
          <p class="mt-2 max-w-2xl text-sm sm:text-base text-muted-foreground leading-relaxed">
            {{ defaultSubtitle }}
          </p>
        </div>

        <!-- Link to GitHub Releases Hub -->
        <a
          :href="GITHUB_REPO_RELEASES_URL"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 self-start sm:self-auto rounded-xl border border-border bg-surface px-4 py-2 text-xs font-semibold text-foreground hover:bg-muted transition-colors shadow-xs"
        >
          <svg class="size-4" fill="currentColor" viewBox="0 0 24 24">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            />
          </svg>
          <span>GitHub Releases Hub</span>
          <span class="text-muted-foreground">↗</span>
        </a>
      </div>

      <!-- Filter Tabs (when viewing all) -->
      <div v-if="level === 'all'" class="mt-6 flex flex-wrap items-center gap-2 border-b border-border pb-3">
        <button
          type="button"
          class="rounded-lg px-3.5 py-1.5 text-xs font-bold transition-all cursor-pointer"
          :class="
            activeFilter === 'all'
              ? 'bg-primary text-white shadow-xs'
              : 'bg-muted/70 text-muted-foreground hover:bg-muted hover:text-foreground'
          "
          @click="activeFilter = 'all'"
        >
          All Materials ({{ DOWNLOAD_MATERIALS.length }})
        </button>

        <button
          type="button"
          class="rounded-lg px-3.5 py-1.5 text-xs font-bold transition-all cursor-pointer"
          :class="
            activeFilter === '1'
              ? 'bg-amber-600 text-white shadow-xs'
              : 'bg-muted/70 text-muted-foreground hover:bg-muted hover:text-foreground'
          "
          @click="activeFilter = '1'"
        >
          HSK 1 (3)
        </button>

        <button
          type="button"
          class="rounded-lg px-3.5 py-1.5 text-xs font-bold transition-all cursor-pointer"
          :class="
            activeFilter === '2'
              ? 'bg-sky-600 text-white shadow-xs'
              : 'bg-muted/70 text-muted-foreground hover:bg-muted hover:text-foreground'
          "
          @click="activeFilter = '2'"
        >
          HSK 2 (3)
        </button>

        <button
          type="button"
          class="rounded-lg px-3.5 py-1.5 text-xs font-bold transition-all cursor-pointer"
          :class="
            activeFilter === '3'
              ? 'bg-rose-600 text-white shadow-xs'
              : 'bg-muted/70 text-muted-foreground hover:bg-muted hover:text-foreground'
          "
          @click="activeFilter = '3'"
        >
          HSK 3 (3)
        </button>

        <button
          type="button"
          class="rounded-lg px-3.5 py-1.5 text-xs font-bold transition-all cursor-pointer"
          :class="
            activeFilter === 'general'
              ? 'bg-emerald-600 text-white shadow-xs'
              : 'bg-muted/70 text-muted-foreground hover:bg-muted hover:text-foreground'
          "
          @click="activeFilter = 'general'"
        >
          General & Worksheets (2)
        </button>
      </div>
    </div>

    <!-- Materials Grid -->
    <div
      class="grid gap-5"
      :class="{
        'sm:grid-cols-2 lg:grid-cols-3': !compact,
        'sm:grid-cols-2': compact,
      }"
    >
      <div
        v-for="item in filteredMaterials"
        :key="item.id"
        class="group relative flex flex-col justify-between rounded-2xl border border-border bg-surface p-6 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-primary/40"
        :class="{
          'ring-2 ring-primary/20': item.highlight,
        }"
      >
        <!-- Top Metadata & Tags -->
        <div>
          <div class="flex items-center justify-between gap-2 mb-3">
            <div class="flex items-center gap-1.5 flex-wrap">
              <!-- Level Tag -->
              <span
                class="inline-flex items-center rounded-md border px-2 py-0.5 text-[11px] font-bold"
                :class="getLevelBadgeClass(item.level)"
              >
                {{ item.level === 'all' ? 'All Levels' : `HSK ${item.level}` }}
              </span>

              <!-- Format Badge -->
              <span
                class="inline-flex items-center rounded-md border px-2 py-0.5 text-[11px] font-black uppercase tracking-wider"
                :class="getFormatBadgeClass(item.format)"
              >
                {{ item.format }}
              </span>

              <!-- File Size -->
              <span class="text-[11px] font-semibold text-muted-foreground">
                {{ item.fileSize }}
              </span>
            </div>

            <UiBadge variant="secondary" class="text-[10px] font-bold">
              {{ item.badgeText }}
            </UiBadge>
          </div>

          <!-- Title and Subtitle -->
          <h3 class="text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors">
            {{ item.title }}
          </h3>
          <p class="mt-1 text-xs font-medium text-muted-foreground">
            {{ item.subtitle }}
          </p>

          <!-- Description -->
          <p class="mt-3 text-xs sm:text-sm text-muted-foreground/90 leading-relaxed">
            {{ item.description }}
          </p>

          <!-- Feature Bullets -->
          <ul class="mt-4 space-y-1.5 border-t border-border/60 pt-3 text-xs text-muted-foreground">
            <li
              v-for="(feature, idx) in item.features"
              :key="idx"
              class="flex items-start gap-2"
            >
              <svg class="size-3.5 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <span>{{ feature }}</span>
            </li>
          </ul>
        </div>

        <!-- Bottom Action Strip -->
        <div class="mt-6 pt-4 border-t border-border">
          <div class="flex items-center justify-between text-[11px] text-muted-foreground mb-2">
            <span class="truncate font-mono text-[10px]">{{ item.filename }}</span>
            <span v-if="item.pagesOrDuration" class="shrink-0 font-medium">{{ item.pagesOrDuration }}</span>
          </div>

          <a
            :href="item.downloadUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="block w-full"
          >
            <UiButton
              class="w-full font-bold shadow-xs flex items-center justify-center gap-2"
              :variant="item.highlight ? 'primary' : 'outline'"
            >
              <svg class="size-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              <span>Download via GitHub Release</span>
            </UiButton>
          </a>
        </div>
      </div>
    </div>

    <!-- Educational Release Notice -->
    <div class="mt-8 rounded-2xl border border-border bg-surface p-4 sm:p-5 flex items-start gap-3 text-xs text-muted-foreground">
      <div class="flex size-7 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary font-bold">
        ℹ️
      </div>
      <div class="leading-relaxed">
        <strong class="text-foreground font-semibold">GitHub Release Delivery:</strong>
        All textbook PDFs, full-length audio tracks, and test bundles are hosted through GitHub Releases to ensure lightning-fast CDN speeds and 100% free offline availability. If a direct download link is updated, you can always browse the complete asset archive on the
        <a :href="GITHUB_REPO_RELEASES_URL" target="_blank" rel="noopener noreferrer" class="font-bold text-primary hover:underline">
          official repository releases page →
        </a>
      </div>
    </div>
  </section>
</template>
