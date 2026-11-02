<script setup lang="ts">
withDefaults(defineProps<{
  placement?: string
  format?: 'banner' | 'rectangle' | 'inline'
}>(), {
  placement: 'content',
  format: 'inline',
})

const formats = {
  banner: 'min-h-24',
  rectangle: 'min-h-64 max-w-xl',
  inline: 'min-h-28',
}
</script>

<template>
  <aside
    aria-label="Advertisement"
    :data-ad-placeholder="placement"
    class="mx-auto my-8 flex w-full items-center justify-center rounded-xl border border-dashed border-border bg-surface/60 px-5 py-6 text-center"
    :class="formats[format]"
  >
    <div>
      <p class="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">Advertisement</p>
      <p class="mt-2 text-sm text-muted-foreground">AdSense placement · configure an ad unit to display ads here</p>
    </div>
  </aside>
</template>
