// This file allows the app to be "installed" without the Chrome badge
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  // Acts as a dummy proxy to satisfy PWA requirements
  event.respondWith(fetch(event.request));
});
