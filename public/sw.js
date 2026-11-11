const CACHE_NAME = 'hskplus-pwa-v1'
const PRECACHE_URLS = [
  '/',
  '/index.html',
  '/favicon.svg',
  '/hskplus-logo.png',
  '/hskplus-logo.svg',
  '/manifest.webmanifest'
]

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(PRECACHE_URLS))
  )
  self.skipWaiting()
})

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key)
          }
        })
      )
    )
  )
  self.clients.claim()
})

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url)

  // Only cache GET requests
  if (event.request.method !== 'GET') return

  // HTML navigation: Network first, fall back to cached index.html for SPA offline routing
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).catch(() => caches.match('/index.html') || caches.match('/'))
    )
    return
  }

  // Static assets (JS, CSS, fonts, SVG/PNG): Stale-while-revalidate
  if (
    url.origin === self.location.origin &&
    (url.pathname.startsWith('/assets/') ||
      url.pathname.endsWith('.js') ||
      url.pathname.endsWith('.css') ||
      url.pathname.endsWith('.svg') ||
      url.pathname.endsWith('.png') ||
      url.pathname.endsWith('.woff2'))
  ) {
    event.respondWith(
      caches.match(event.request).then(cachedResponse => {
        const fetchPromise = fetch(event.request)
          .then(networkResponse => {
            if (networkResponse && networkResponse.status === 200) {
              const responseToCache = networkResponse.clone()
              caches.open(CACHE_NAME).then(cache => cache.put(event.request, responseToCache))
            }
            return networkResponse
          })
          .catch(() => cachedResponse)

        return cachedResponse || fetchPromise
      })
    )
    return
  }

  // Default: Network with fallback to cache
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  )
})
