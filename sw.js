self.addEventListener('install', (event) => {
    self.skipWaiting(); // Forces the waiting service worker to become the active one
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim()); // Immediately take control of the page
});

self.addEventListener('fetch', (event) => {
    // Allows the app to function and be installable
});
