import { createApp } from 'vue'
import './style.css'
import { router } from './router'
import App from './App.vue'

createApp(App).use(router).mount('#app')

// Register PWA service worker in production
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(err => {
      console.warn('PWA service worker registration failed:', err)
    })
  })
}
