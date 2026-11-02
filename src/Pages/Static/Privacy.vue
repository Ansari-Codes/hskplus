<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="min-h-screen bg-background text-foreground">
    <header class="border-b border-border bg-surface py-12 px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-4xl">
        <div class="flex items-center gap-2 text-sm">
          <RouterLink to="/" class="font-medium text-primary hover:underline">← Home</RouterLink>
          <span class="text-muted-foreground">/</span>
          <span class="text-muted-foreground">Legal</span>
        </div>
        <h1 class="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
          Privacy Policy
        </h1>
        <p class="mt-2 text-sm text-muted-foreground">
          Last updated: October 2026 · Compliant with GDPR, CCPA, and Global Privacy Standards
        </p>
      </div>
    </header>

    <main class="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8 space-y-8 text-sm sm:text-base leading-relaxed text-muted-foreground">
      <section>
        <h2 class="text-xl font-bold text-foreground">1. Introduction & Overview</h2>
        <p class="mt-2">
          At <strong>HSK Plus</strong> ("we", "our", or "us"), accessible via our web application, the privacy of our visitors and learners is of utmost importance. This Privacy Policy document outlines the types of personal information that is collected and recorded by HSK Plus and how we use it.
        </p>
      </section>

      <section>
        <h2 class="text-xl font-bold text-foreground">2. Information We Collect</h2>
        <p class="mt-2">
          HSK Plus is designed to be accessible without mandatory account registration. We prioritize a frictionless, private educational experience:
        </p>
        <ul class="mt-2 list-disc pl-5 space-y-1">
          <li><strong>Local Browser Storage:</strong> Your character writing scores, quiz progress, and theme preferences (light/dark mode) are stored strictly within your browser's local storage (localStorage). They are never transmitted or sold to our servers.</li>
          <li><strong>Usage Analytics:</strong> We may collect anonymous aggregate telemetry (such as page views, device types, and browser versions) solely to optimize platform responsiveness and educational content.</li>
          <li><strong>Contact Communications:</strong> If you contact us via our contact form or support email, we collect your name, email address, and message contents solely to address your inquiry.</li>
        </ul>
      </section>

      <section>
        <h2 class="text-xl font-bold text-foreground">3. Canvas Writing Practice & Biometrics</h2>
        <p class="mt-2">
          When you practice character strokes on our Tian Zi Ge Writing Canvas, all stroke calculations, stroke order animations, and canvas scoring evaluations occur <strong>entirely on the client-side inside your own web browser</strong> using HTML5 Canvas APIs and WebAssembly. No handwriting or biometric sketches are uploaded, stored, or processed on remote cloud servers.
        </p>
      </section>

      <section>
        <h2 class="text-xl font-bold text-foreground">4. Cookies and Web Beacons</h2>
        <p class="mt-2">
          Like many informational websites, HSK Plus uses standard cookies to store information about visitor preferences and record session preferences. Third-party advertising partners (such as Google AdSense) may use cookies and web beacons to serve relevant educational advertisements to sustain our free platform. You can disable cookies at any time through your individual browser options.
        </p>
      </section>

      <section>
        <h2 class="text-xl font-bold text-foreground">5. GDPR & CCPA Rights</h2>
        <p class="mt-2">
          Depending on your location, you enjoy statutory rights regarding your personal data, including the right to access, rectify, or request deletion of any stored data. Because we do not mandate user registration, you can clear all locally cached practice history at any time by clearing your browser cache.
        </p>
      </section>

      <section>
        <h2 class="text-xl font-bold text-foreground">6. Contact Information</h2>
        <p class="mt-2">
          If you have questions or require further clarification regarding our privacy practices, please contact our data privacy officer at <a href="mailto:privacy@desihop.net" class="text-primary hover:underline font-semibold">privacy@desihop.net</a> or through our <RouterLink to="/contact" class="text-primary hover:underline">Contact Form</RouterLink>.
        </p>
      </section>
    </main>
  </div>
</template>
