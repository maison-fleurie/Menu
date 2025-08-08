// Simple service worker for Maison Fleurie Menu (offline-friendly)
const CACHE = 'mf-menu-v1';
const CORE = [
  './',
  './index.html',
  'https://cdn.jsdelivr.net/npm/papaparse@5.4.1/papaparse.min.js'
];
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  const url = e.request.url;
  if (url.includes('export?format=csv')) {
    // Network-first for the live CSV
    e.respondWith(fetch(e.request).then(res => {
      const clone = res.clone();
      caches.open(CACHE).then(c => c.put(e.request, clone));
      return res;
    }).catch(() => caches.match(e.request)));
    return;
  }
  // Cache-first for every other GET
  e.respondWith(caches.match(e.request).then(cached => cached || fetch(e.request).then(res => {
    const clone = res.clone();
    caches.open(CACHE).then(c => c.put(e.request, clone));
    return res;
  })) );
});
