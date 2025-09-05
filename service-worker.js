const CACHE_NAME = "math-quiz-cache-v4";
const urlsToCache = [
  "./",
  "./index.html",
  "./style.css",
  "./script.js",
  "./manifest.json",
  "./icons/icon-192x192.png",
  "./icons/icon-512x512.png"
];

// Εγκατάσταση service worker
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
  self.skipWaiting();
});

// Ενεργοποίηση και καθαρισμός παλιών cache
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(cacheNames =>
      Promise.all(
        cacheNames.filter(name => name !== CACHE_NAME).map(name => caches.delete(name))
      )
    )
  );
  self.clients.claim();
});

// Cache strategies
self.addEventListener("fetch", event => {
  const request = event.request;

  // Για εικόνες → πάντα cache-first
  if (request.destination === "image") {
    event.respondWith(
      caches.match(request).then(response => {
        return response || fetch(request).then(fetchRes => {
          return caches.open(CACHE_NAME).then(cache => {
            cache.put(request, fetchRes.clone());
            return fetchRes;
          });
        });
      })
    );
    return;
  }

  // Για HTML/CSS/JS → network-first (να παίρνει updates όταν υπάρχει internet)
  if (request.destination === "document" || request.destination === "script" || request.destination === "style") {
    event.respondWith(
      fetch(request)
        .then(fetchRes => {
          return caches.open(CACHE_NAME).then(cache => {
            cache.put(request, fetchRes.clone());
            return fetchRes;
          });
        })
        .catch(() => caches.match(request)) // offline fallback
    );
    return;
  }

  // Default → cache-first
  event.respondWith(
    caches.match(request).then(response => response || fetch(request))
  );
});



