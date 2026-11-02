<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { UiButton } from '../../Ui'

const name = ref('')
const email = ref('')
const subject = ref('General Inquiry')
const message = ref('')
const isSubmitted = ref(false)

function handleSubmit() {
  if (!name.value || !email.value || !message.value) return
  isSubmitted.value = true
}

const faqs = [
  {
    q: 'Is HSK Plus completely free to use?',
    a: 'Yes, 100%! All vocabulary lists, 30 standard lessons, 30 sentence patterns, 20 dialogues, stroke order animation lab, AI canvas scoring, and 22 mock tests are completely free.'
  },
  {
    q: 'Does HSK Plus cover HSK 3.0 or HSK 2.0?',
    a: 'We currently cover the official standard HSK 1 and HSK 2 curriculum (150 words per level, 300 words total). We are actively expanding to HSK 3 and will offer seamless toggle support between HSK 2.0 and HSK 3.0 standards.'
  },
  {
    q: 'How does the Canvas Scoring algorithm evaluate my character handwriting?',
    a: 'Our algorithmic engine checks your drawn stroke count against official standards, measures Intersection over Union (IoU) with standard font skeletons, and evaluates center alignment inside the Tian Zi Ge grid.'
  },
  {
    q: 'Can I use HSK Plus for classroom teaching or institutional instruction?',
    a: 'Absolutely! Teachers and educational institutions worldwide are encouraged to project our stroke animations and assign our mock exams as free homework and classroom aids.'
  }
]
</script>

<template>
  <div class="min-h-screen bg-background text-foreground">
    <header class="border-b border-border bg-surface py-12 px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-4xl">
        <div class="flex items-center gap-2 text-sm">
          <RouterLink to="/" class="font-medium text-primary hover:underline">← Home</RouterLink>
          <span class="text-muted-foreground">/</span>
          <span class="text-muted-foreground">Contact</span>
        </div>
        <h1 class="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
          Get in Touch with HSK Plus
        </h1>
        <p class="mt-3 text-base text-muted-foreground">
          Have questions, suggestions for new features, bug reports, or partnership ideas? We would love to hear from you.
        </p>
      </div>
    </header>

    <main class="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div class="grid items-start gap-12 md:grid-cols-[1.2fr_1fr]">
        <!-- Form -->
        <section class="rounded-2xl border border-border bg-surface p-6 shadow-sm sm:p-8">
          <h2 class="text-xl font-bold text-foreground">Send Us a Message</h2>
          <p class="mt-1 text-xs text-muted-foreground">Our pedagogical and technical support team typically responds within 24 hours.</p>

          <div v-if="isSubmitted" class="mt-6 rounded-xl border border-emerald-300 bg-emerald-50/50 p-6 text-center dark:border-emerald-900/50 dark:bg-emerald-950/20">
            <span class="text-4xl">📬</span>
            <h3 class="mt-2 text-lg font-bold text-emerald-800 dark:text-emerald-300">Message Delivered!</h3>
            <p class="mt-1 text-sm text-emerald-700 dark:text-emerald-200">
              Thank you, {{ name }}! Your message has been received. Our team will follow up via {{ email }} shortly.
            </p>
            <UiButton class="mt-4" size="sm" variant="outline" @click="isSubmitted = false; message = ''">
              Send Another Message
            </UiButton>
          </div>

          <form v-else class="mt-6 space-y-4" @submit.prevent="handleSubmit">
            <div>
              <label class="block text-xs font-semibold text-foreground">Your Full Name</label>
              <input
                v-model="name"
                type="text"
                required
                placeholder="e.g. Alex Chen"
                class="mt-1 w-full rounded-xl border border-border bg-surface-raised px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label class="block text-xs font-semibold text-foreground">Your Email Address</label>
              <input
                v-model="email"
                type="email"
                required
                placeholder="name@example.com"
                class="mt-1 w-full rounded-xl border border-border bg-surface-raised px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label class="block text-xs font-semibold text-foreground">Inquiry Category</label>
              <select
                v-model="subject"
                class="mt-1 w-full rounded-xl border border-border bg-surface-raised px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="General Inquiry">General Inquiry</option>
                <option value="Curriculum / Correction">Curriculum / Vocabulary Feedback</option>
                <option value="Bug Report">Technical Bug Report</option>
                <option value="Academic Collaboration">Academic & Institutional Collaboration</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label class="block text-xs font-semibold text-foreground">Your Message</label>
              <textarea
                v-model="message"
                required
                rows="5"
                placeholder="How can we help your Chinese learning journey?"
                class="mt-1 w-full rounded-xl border border-border bg-surface-raised px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <UiButton type="submit" class="w-full">
              Send Message →
            </UiButton>
          </form>
        </section>

        <!-- Direct Contact Details & FAQ -->
        <aside class="space-y-6">
          <div class="rounded-2xl border border-border bg-surface p-6 shadow-sm">
            <h3 class="text-base font-bold text-foreground">Direct Contact Channels</h3>
            <ul class="mt-4 space-y-3 text-sm text-muted-foreground">
              <li class="flex items-center gap-3">
                <span class="text-lg">📧</span>
                <span><strong>Support:</strong> <a href="mailto:support@desihop.net" class="text-primary hover:underline">support@desihop.net</a></span>
              </li>
              <li class="flex items-center gap-3">
                <span class="text-lg">🎓</span>
                <span><strong>Academic:</strong> <a href="mailto:curriculum@desihop.net" class="text-primary hover:underline">curriculum@desihop.net</a></span>
              </li>
              <li class="flex items-center gap-3">
                <span class="text-lg">🌍</span>
                <span><strong>Location:</strong> Beijing & Global Remote Pedagogy</span>
              </li>
            </ul>
          </div>

          <div class="rounded-2xl border border-border bg-surface p-6 shadow-sm">
            <h3 class="text-base font-bold text-foreground">Frequently Asked Questions</h3>
            <div class="mt-4 space-y-4">
              <div v-for="faq in faqs" :key="faq.q">
                <h4 class="text-xs font-bold text-foreground">{{ faq.q }}</h4>
                <p class="mt-1 text-xs text-muted-foreground leading-relaxed">{{ faq.a }}</p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  </div>
</template>
