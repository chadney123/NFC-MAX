self.addEventListener('install', (e) => {
  console.log('Service Worker: Installed');
});

self.addEventListener('fetch', (e) => {
  // This allows the app to work while the service worker is active
  e.respondWith(fetch(e.request));
});
