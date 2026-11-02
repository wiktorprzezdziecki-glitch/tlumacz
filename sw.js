/* Service worker – aplikacja działa także bez internetu (notatki, historia).
   Tłumaczenie wymaga internetu. Przy każdej zmianie plików podbij wersję. */
const CACHE = 'tlumacz-v1.0.0';
const ASSETS = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './manifest.webmanifest',
  './icon-180.png',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Najpierw sieć (zawsze świeża wersja), a gdy jej brak – kopia z pamięci telefonu.
self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // zapytania do API – bez zmian
  event.respondWith(networkFirst(req));
});

async function networkFirst(req) {
  const cache = await caches.open(CACHE);
  const net = fetch(req).then((res) => {
    if (res && res.ok && res.type === 'basic') cache.put(req, res.clone()).catch(() => {});
    return res;
  });
  net.catch(() => {});
  try {
    return await Promise.race([
      net,
      new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), 4000))
    ]);
  } catch (e) {
    const hit = (await cache.match(req, { ignoreSearch: true })) ||
      (req.mode === 'navigate' ? (await cache.match('./index.html')) || (await cache.match('./')) : null);
    if (hit) return hit;
    return net;
  }
}
