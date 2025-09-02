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

// Instalar SW y cachear archivos
self.addEventListener("install", (event) => {
  console.log("Service Worker instalado y cacheando archivos");
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

// Activar SW
self.addEventListener("activate", (event) => {
  console.log("Service Worker activado");
});

// Interceptar peticiones y responder desde cache
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});
