const CACHE_NAME = "nica-raices-cache-v1";
const urlsToCache = [
  "/index.html",
  "/comidas.html",
  "/calendario.html",
  "/danza.html",
  "/historia.html",
  "/municipios.html",
  "/juegos.html",
  "/style.css",
  "/icon-192.png",
  "/icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(resp => resp || fetch(event.request))
  );
});
