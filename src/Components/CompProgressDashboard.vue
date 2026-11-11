<script setup lang="ts">
import { ref } from 'vue'
import {
  progress,
  totalLearnedCount,
  totalCompletedLessonsCount,
  dailyGoalProgressPercent,
  currentStreak,
  totalTestsTaken,
  averageMockPercent,
  exportProgressBackup,
  importProgressBackup,
} from '../stores/progress'
import { UiBadge, UiButton } from '../Ui'

const showBackupModal = ref(false)
const backupJson = ref('')
const importInput = ref('')
const importStatus = ref<'idle' | 'success' | 'error'>('idle')

function openBackup() {
  backupJson.value = exportProgressBackup()
  importInput.value = ''
  importStatus.value = 'idle'
  showBackupModal.value = true
}

function handleImport() {
  if (!importInput.value.trim()) return
  const ok = importProgressBackup(importInput.value.trim())
  if (ok) {
    importStatus.value = 'success'
    setTimeout(() => {
      showBackupModal.value = false
    }, 1500)
  } else {
    importStatus.value = 'error'
  }
}

function copyBackup() {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(backupJson.value)
    alert('Progress backup JSON copied to clipboard!')
  }
}
</script>

<template>
  <div class="rounded-3xl border border-border bg-surface p-5 sm:p-7 shadow-xs">
    <!-- Header Strip -->
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-border/70 pb-5">
      <div class="flex items-center gap-3">
        <div class="flex size-11 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xl font-black">
          🔥
        </div>
        <div>
          <div class="flex items-center gap-2">
            <h3 class="text-base sm:text-lg font-bold text-foreground">Personal Study Command Center</h3>
            <UiBadge variant="secondary" class="text-[10px] font-bold">100% Local & Private</UiBadge>
          </div>
          <p class="text-xs text-muted-foreground">
            Progress is automatically saved in your browser without tracking or accounts.
          </p>
        </div>
      </div>

      <div class="flex items-center gap-2 self-start sm:self-auto">
        <button
          type="button"
          class="rounded-xl border border-border bg-background px-3 py-1.5 text-xs font-semibold text-foreground hover:bg-muted transition-colors cursor-pointer"
          @click="openBackup"
        >
          💾 Backup / Sync
        </button>
      </div>
    </div>

    <!-- Core Metrics Strip -->
    <div class="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
      <!-- Streak -->
      <div class="rounded-2xl border border-border/80 bg-background/60 p-3.5 sm:p-4 text-center">
        <div class="text-2xl sm:text-3xl font-black text-amber-600 dark:text-amber-400">
          {{ currentStreak }}
        </div>
        <div class="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mt-0.5">
          Day Streak 🔥
        </div>
      </div>

      <!-- Words Mastered -->
      <div class="rounded-2xl border border-border/80 bg-background/60 p-3.5 sm:p-4 text-center">
        <div class="text-2xl sm:text-3xl font-black text-primary">
          {{ totalLearnedCount }}
          <span class="text-xs font-normal text-muted-foreground">/ 600</span>
        </div>
        <div class="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mt-0.5">
          Words Mastered
        </div>
      </div>

      <!-- Lessons Finished -->
      <div class="rounded-2xl border border-border/80 bg-background/60 p-3.5 sm:p-4 text-center">
        <div class="text-2xl sm:text-3xl font-black text-sky-600 dark:text-sky-400">
          {{ totalCompletedLessonsCount }}
          <span class="text-xs font-normal text-muted-foreground">/ 50</span>
        </div>
        <div class="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mt-0.5">
          Lessons Done
        </div>
      </div>

      <!-- Mock Test Average -->
      <div class="rounded-2xl border border-border/80 bg-background/60 p-3.5 sm:p-4 text-center">
        <div class="text-2xl sm:text-3xl font-black text-emerald-600 dark:text-emerald-400">
          {{ totalTestsTaken > 0 ? `${averageMockPercent}%` : '—' }}
        </div>
        <div class="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mt-0.5">
          Avg Exam Score ({{ totalTestsTaken }})
        </div>
      </div>
    </div>

    <!-- Daily Goal Progress Bar -->
    <div class="mt-5 rounded-2xl border border-border/80 bg-muted/30 p-4">
      <div class="flex items-center justify-between text-xs font-bold mb-2">
        <span class="flex items-center gap-1.5 text-foreground">
          <span>🎯 Today's Goal:</span>
          <span class="text-primary">{{ progress.wordsLearnedToday.length }} / {{ progress.dailyGoal }} words</span>
        </span>
        <span class="text-muted-foreground">{{ dailyGoalProgressPercent }}%</span>
      </div>

      <div class="h-2.5 w-full overflow-hidden rounded-full bg-border">
        <div
          class="h-full rounded-full bg-gradient-to-r from-primary to-amber-500 transition-all duration-500"
          :style="{ width: `${dailyGoalProgressPercent}%` }"
        />
      </div>

      <div class="mt-2.5 flex items-center justify-between text-[11px] text-muted-foreground">
        <span>Click the checkbox icon on any vocabulary card to mark it as mastered.</span>
        <RouterLink to="/hsk1/vocabulary" class="font-bold text-primary hover:underline shrink-0">
          Study Vocab →
        </RouterLink>
      </div>
    </div>

    <!-- Backup & Restore Modal -->
    <div
      v-if="showBackupModal"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4"
    >
      <div class="w-full max-w-lg rounded-3xl border border-border bg-surface p-6 shadow-2xl animate-in fade-in zoom-in-95 duration-150">
        <div class="flex items-center justify-between border-b border-border pb-3">
          <h4 class="text-base font-bold text-foreground">Sync & Backup Learning Progress</h4>
          <button
            type="button"
            class="text-muted-foreground hover:text-foreground text-sm font-bold"
            @click="showBackupModal = false"
          >
            ✕
          </button>
        </div>

        <div class="mt-4 space-y-4">
          <div>
            <label class="block text-xs font-bold text-foreground mb-1">
              Your Current Backup Code:
            </label>
            <textarea
              readonly
              class="w-full h-24 rounded-xl border border-border bg-background p-2.5 font-mono text-[11px] text-muted-foreground focus:outline-none"
              :value="backupJson"
            />
            <button
              type="button"
              class="mt-1 text-xs font-bold text-primary hover:underline cursor-pointer"
              @click="copyBackup"
            >
              📋 Copy JSON Code
            </button>
          </div>

          <div class="border-t border-border/70 pt-3">
            <label class="block text-xs font-bold text-foreground mb-1">
              Restore Progress on Another Device:
            </label>
            <textarea
              v-model="importInput"
              placeholder="Paste your JSON backup code here..."
              class="w-full h-20 rounded-xl border border-border bg-background p-2.5 font-mono text-[11px] text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <div class="mt-2 flex items-center justify-between">
              <span v-if="importStatus === 'success'" class="text-xs font-bold text-emerald-600">
                ✓ Progress successfully restored!
              </span>
              <span v-else-if="importStatus === 'error'" class="text-xs font-bold text-rose-600">
                ⚠ Invalid code format.
              </span>
              <span v-else class="text-[11px] text-muted-foreground">
                Paste JSON and click import.
              </span>

              <UiButton size="sm" variant="primary" @click="handleImport">
                Import & Restore
              </UiButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
