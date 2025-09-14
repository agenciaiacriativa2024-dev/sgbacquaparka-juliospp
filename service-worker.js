// Basic service worker
self.addEventListener('install', event => {
    console.log('Service Worker: Installed');
});

self.addEventListener('activate', event => {
    console.log('Service Worker: Activated');
});

self.addEventListener('fetch', event => {
    // We'll add caching strategies later
    event.respondWith(fetch(event.request));
});
