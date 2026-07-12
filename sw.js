const CACHE = 'plastophage-v36';
const ASSETS = ['./','index.html','manifest.webmanifest','icon-192.png','icon-512.png','icon-512-maskable.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS))); });
self.addEventListener('message', e => { if (e.data && e.data.type === 'SKIP_WAITING') self.skipWaiting(); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.open(CACHE).then(c => c.match(e.request)).then(r => r || fetch(e.request).then(resp => {
      const copy = resp.clone();
      caches.open(CACHE).then(c => { try { c.put(e.request, copy); } catch (_) {} });
      return resp;
    }).catch(() => caches.open(CACHE).then(c => c.match('index.html'))))
  );
});
