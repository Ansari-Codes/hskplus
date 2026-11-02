<script setup lang="ts">
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { getAllBlogs } from '../../Data/blogsData'
import { UiBadge } from '../../Ui'
import CompAdSense from '../../Components/CompAdSense.vue'

const allBlogs = getAllBlogs()
const searchQuery = ref('')
const selectedCategory = ref('All')

const categories = computed(() => {
  const cats = new Set<string>()
  allBlogs.forEach(b => cats.add(b.category))
  return ['All', ...Array.from(cats)]
})

const filteredBlogs = computed(() => {
  let list = allBlogs
  if (selectedCategory.value !== 'All') {
    list = list.filter(b => b.category.toLowerCase() === selectedCategory.value.toLowerCase())
  }
  const q = searchQuery.value.trim().toLowerCase()
  if (!q) return list

  return list.filter(b =>
    b.title.toLowerCase().includes(q) ||
    b.excerpt.toLowerCase().includes(q) ||
    b.tags.some(t => t.toLowerCase().includes(q))
  )
})
</script>

<template>
  <div class="min-h-screen bg-background text-foreground">
    <!-- Header -->
    <header class="border-b border-border bg-surface py-12 px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-5xl">
        <div class="flex items-center gap-2">
          <RouterLink to="/" class="text-sm font-medium text-primary hover:underline">← Home</RouterLink>
          <span class="text-muted-foreground">/</span>
          <span class="text-sm font-semibold text-muted-foreground">Blog & Resources</span>
        </div>
        <h1 class="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
          HSK Plus Learning Blog
        </h1>
        <p class="mt-3 text-base text-muted-foreground max-w-2xl">
          20 in-depth, authoritative guides covering HSK test strategies, grammar breakdowns, character memorization, radicals, pronunciation, and scholarship opportunities.
        </p>

        <!-- Search Bar -->
        <div class="mt-8 max-w-xl">
          <input
            v-model="searchQuery"
            type="search"
            placeholder="Search articles by title, grammar topic, keyword..."
            class="w-full rounded-2xl border border-border bg-surface-raised px-4 py-3 text-sm text-foreground shadow-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <!-- Category Pills -->
        <div class="mt-6 flex flex-wrap gap-2">
          <button
            v-for="cat in categories"
            :key="cat"
            type="button"
            :class="[
              'rounded-xl px-3.5 py-1.5 text-xs font-semibold transition-colors',
              selectedCategory === cat
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'bg-surface-raised border border-border text-muted-foreground hover:text-foreground'
            ]"
            @click="selectedCategory = cat"
          >
            {{ cat }}
          </button>
        </div>
      </div>
    </header>

    <main class="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <CompAdSense format="banner" slot-id="blogs-list-top" />
      <div class="mb-6 flex items-center justify-between">
        <p class="text-sm text-muted-foreground">
          Showing <strong>{{ filteredBlogs.length }}</strong> articles (1,000+ words each)
        </p>
      </div>

      <div class="grid gap-6 md:grid-cols-2">
        <article
          v-for="post in filteredBlogs"
          :key="post.slug"
          class="group flex flex-col justify-between rounded-2xl border border-border bg-surface p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
        >
          <div>
            <RouterLink :to="`/blogs/${post.slug}`" class="mb-5 block overflow-hidden rounded-xl">
              <img
                :src="post.imageUrl"
                :alt="post.imageAlt"
                class="aspect-[16/9] w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                loading="lazy"
                decoding="async"
              />
            </RouterLink>
            <div class="flex items-center justify-between">
              <UiBadge variant="secondary">{{ post.category }}</UiBadge>
              <span class="text-xs text-muted-foreground font-medium">{{ post.readTime }} · {{ post.wordCount }} words</span>
            </div>

            <h2 class="mt-4 text-xl font-bold text-foreground group-hover:text-primary transition-colors">
              <RouterLink :to="`/blogs/${post.slug}`">
                {{ post.title }}
              </RouterLink>
            </h2>

            <p class="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-3">
              {{ post.excerpt }}
            </p>

            <!-- Tags -->
            <div class="mt-4 flex flex-wrap gap-1.5">
              <span
                v-for="tag in post.tags"
                :key="tag"
                class="rounded-md bg-muted px-2 py-0.5 text-[11px] font-medium text-muted-foreground"
              >
                #{{ tag }}
              </span>
            </div>
          </div>

          <div class="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
            <span>By {{ post.author }}</span>
            <RouterLink :to="`/blogs/${post.slug}`" class="font-bold text-primary hover:underline">
              Read Guide →
            </RouterLink>
          </div>
        </article>
      </div>

      <CompAdSense format="in-feed" slot-id="blogs-list-bottom" class="mt-12" />
    </main>
  </div>
</template>
