<script setup lang="ts">
import { computed, watch } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import MarkdownIt from 'markdown-it'
import { katex } from '@mdit/plugin-katex'
import 'katex/dist/katex.min.css'
import { getBlogBySlug, getAllBlogs } from '../../Data/blogsData'
import { UiButton, UiBadge } from '../../Ui'
import CompAdSense from '../../Components/CompAdSense.vue'
import BlogConceptDiagram from '../../Components/BlogConceptDiagram.vue'
import { setRouteJsonLd, getBlogJsonLd } from '../../Utils/jsonLd'

const route = useRoute()
const slug = computed(() => route.params.slug as string)
const post = computed(() => getBlogBySlug(slug.value))

const allBlogs = getAllBlogs()
const relatedBlogs = computed(() => {
  if (!post.value) return []
  return allBlogs
    .filter(b => b.slug !== post.value?.slug && b.category === post.value?.category)
    .slice(0, 3)
})

const markdown = new MarkdownIt({
  html: false,
  linkify: false,
  typographer: false,
}).use(katex, {
  delimiters: 'all',
  throwOnError: false,
  trust: false,
})

const renderToken = markdown.renderer.renderToken.bind(markdown.renderer)
markdown.renderer.rules.table_open = (tokens, index, options) =>
  `<div class="blog-table-wrap">\n${renderToken(tokens, index, options)}`
markdown.renderer.rules.table_close = (tokens, index, options) =>
  `${renderToken(tokens, index, options)}</div>\n`

const renderedContent = computed(() => markdown.render(post.value?.content ?? ''))

watch(
  post,
  (p) => {
    if (!p) return
    document.title = `${p.title} — HSK Plus`
    let metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) metaDesc.setAttribute('content', p.excerpt)
    let canonical = document.querySelector('link[rel="canonical"]')
    if (canonical) canonical.setAttribute('href', `https://desihop.net/blogs/${p.slug}`)
    let metaKw = document.querySelector('meta[name="keywords"]')
    if (metaKw) metaKw.setAttribute('content', `${p.title}, learn chinese, HSK study guide, ${p.category}`)
    setRouteJsonLd(getBlogJsonLd(p))
  },
  { immediate: true }
)
</script>

<template>
  <div class="min-h-screen bg-background text-foreground">
    <div v-if="post" class="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <!-- Breadcrumb -->
      <div class="flex items-center gap-2 text-sm">
        <RouterLink to="/" class="font-medium text-primary hover:underline">Home</RouterLink>
        <span class="text-muted-foreground">/</span>
        <RouterLink to="/blogs" class="font-medium text-primary hover:underline">Blog</RouterLink>
        <span class="text-muted-foreground">/</span>
        <span class="text-xs text-muted-foreground truncate max-w-xs">{{ post.title }}</span>
      </div>

      <!-- Article Header -->
      <header class="mt-6 border-b border-border pb-8">
        <div class="flex flex-wrap items-center gap-3">
          <UiBadge variant="secondary">{{ post.category }}</UiBadge>
          <span class="text-xs text-muted-foreground font-medium">Published on {{ post.date }}</span>
          <span class="text-xs text-muted-foreground">·</span>
          <span class="text-xs text-muted-foreground font-medium">{{ post.readTime }}</span>
          <span class="text-xs text-muted-foreground">·</span>
          <span class="text-xs font-semibold text-primary">{{ post.wordCount }} words</span>
        </div>

        <h1 class="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl">
          {{ post.title }}
        </h1>

        <p class="mt-4 text-lg text-muted-foreground leading-relaxed">
          {{ post.excerpt }}
        </p>

        <figure class="mt-6 overflow-hidden rounded-2xl border border-border">
          <img
            :src="post.imageUrl"
            :alt="post.imageAlt"
            class="aspect-[16/9] w-full object-cover sm:aspect-[2/1]"
            fetchpriority="high"
            decoding="async"
          />
          <figcaption class="bg-surface-raised px-4 py-2 text-xs text-muted-foreground">
            {{ post.imageAlt }}
          </figcaption>
        </figure>

        <div class="mt-6 flex items-center justify-between pt-4 border-t border-border">
          <div class="flex items-center gap-3">
            <div class="flex size-10 items-center justify-center rounded-full bg-primary/10 font-bold text-primary">
              {{ post.author[0] }}
            </div>
            <div>
              <p class="text-sm font-bold text-foreground">{{ post.author }}</p>
              <p class="text-xs text-muted-foreground">HSK Plus Senior Pedagogical Team</p>
            </div>
          </div>

          <div class="flex gap-2">
            <RouterLink to="/score-calculator">
              <UiButton size="sm" variant="outline">Score Calculator</UiButton>
            </RouterLink>
            <RouterLink to="/hsk1/vocabulary">
              <UiButton size="sm" variant="primary">Study Vocab</UiButton>
            </RouterLink>
          </div>
        </div>
      </header>

      <!-- Main Markdown Body -->
      <article class="mt-8">
        <BlogConceptDiagram v-if="post.diagram" :kind="post.diagram" />
        <!-- Rendered HTML -->
        <div class="blog-body" v-html="renderedContent" />
      </article>

      <CompAdSense format="in-article" slot-id="blog-detail-in-article" class="my-8" />

      <!-- Tags & Share -->
      <footer class="mt-14 border-t border-border pt-8">
        <div class="flex flex-wrap items-center justify-between gap-4">
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tag in post.tags"
              :key="tag"
              class="rounded-lg bg-surface-raised border border-border px-3 py-1 text-xs font-medium text-foreground"
            >
              #{{ tag }}
            </span>
          </div>

          <RouterLink to="/blogs">
            <UiButton variant="outline" size="sm">
              ← Back to All Articles
            </UiButton>
          </RouterLink>
        </div>

        <!-- Related Articles -->
        <div v-if="relatedBlogs.length > 0" class="mt-12 border-t border-border pt-8">
          <h3 class="text-xl font-bold text-foreground">Related Guides in {{ post.category }}</h3>
          <div class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div
              v-for="rel in relatedBlogs"
              :key="rel.slug"
              class="rounded-xl border border-border bg-surface p-4 shadow-sm hover:border-primary/40 transition-colors"
            >
              <RouterLink :to="`/blogs/${rel.slug}`" class="mb-3 block overflow-hidden rounded-lg">
                <img
                  :src="rel.imageUrl"
                  :alt="rel.imageAlt"
                  class="aspect-[16/9] w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </RouterLink>
              <UiBadge variant="secondary" class="text-[10px]">{{ rel.category }}</UiBadge>
              <h4 class="mt-2 text-sm font-bold text-foreground hover:text-primary transition-colors">
                <RouterLink :to="`/blogs/${rel.slug}`">
                  {{ rel.title }}
                </RouterLink>
              </h4>
              <p class="mt-1 text-xs text-muted-foreground line-clamp-2">{{ rel.excerpt }}</p>
            </div>
          </div>
        </div>

        <!-- Detail Footer Banner -->
        <CompAdSense format="banner" slot-id="blog-detail-bottom" class="mt-10" />
      </footer>
    </div>

    <!-- 404 NOT FOUND -->
    <div v-else class="mx-auto max-w-lg px-4 py-24 text-center">
      <h1 class="text-2xl font-bold">Article Not Found</h1>
      <p class="mt-2 text-sm text-muted-foreground">The article you requested could not be located.</p>
      <RouterLink to="/blogs" class="mt-6 inline-block">
        <UiButton>Back to All Blogs</UiButton>
      </RouterLink>
    </div>
  </div>
</template>

<style>
.blog-body {
  color: var(--foreground);
  line-height: 1.75;
}

.blog-body > * + * {
  margin-top: 1rem;
}

.blog-body h1,
.blog-body h2,
.blog-body h3,
.blog-body h4 {
  color: var(--foreground);
  font-weight: 700;
  line-height: 1.3;
  margin-top: 2rem;
  margin-bottom: 0.75rem;
}

.blog-body h1 {
  font-size: 1.875rem;
}

.blog-body h2 {
  border-bottom: 1px solid var(--border);
  font-size: 1.5rem;
  padding-bottom: 0.5rem;
}

.blog-body h3 {
  font-size: 1.25rem;
}

.blog-body p,
.blog-body li {
  color: var(--muted-foreground);
}

.blog-body strong {
  color: var(--foreground);
  font-weight: 700;
}

.blog-body ul,
.blog-body ol {
  padding-left: 1.5rem;
}

.blog-body ul {
  list-style: disc;
}

.blog-body ol {
  list-style: decimal;
}

.blog-body li + li {
  margin-top: 0.35rem;
}

.blog-body blockquote {
  border-left: 4px solid var(--primary);
  border-radius: 0 0.75rem 0.75rem 0;
  background: color-mix(in srgb, var(--primary) 5%, transparent);
  color: var(--foreground);
  margin: 1rem 0;
  padding: 1rem;
}

.blog-body code {
  border-radius: 0.25rem;
  background: var(--muted);
  color: var(--primary);
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 0.875em;
  padding: 0.125rem 0.35rem;
}

.blog-body pre {
  overflow-x: auto;
  border: 1px solid var(--border);
  border-radius: 0.75rem;
  background: var(--surface-raised);
  padding: 1rem;
}

.blog-body pre code {
  background: transparent;
  color: var(--foreground);
  padding: 0;
}

.blog-body hr {
  border-color: var(--border);
  margin: 2rem 0;
}

.blog-table-wrap {
  width: 100%;
  overflow-x: auto;
  margin: 1.5rem 0;
  border: 1px solid var(--border);
  border-radius: 0.75rem;
}

.blog-body table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.875rem;
  text-align: left;
}

.blog-body th,
.blog-body td {
  border-bottom: 1px solid var(--border);
  padding: 0.75rem 1rem;
  vertical-align: top;
}

.blog-body th {
  background-color: var(--muted);
  color: var(--foreground);
  font-weight: 600;
  white-space: nowrap;
}

.blog-body tr:last-child td {
  border-bottom: 0;
}

.blog-body .katex-display {
  max-width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 0.5rem 0;
}

.blog-body .katex {
  color: var(--foreground);
}

@media (max-width: 640px) {
  .blog-body h1 {
    font-size: 1.5rem;
  }

  .blog-body h2 {
    font-size: 1.25rem;
  }
}
</style>
