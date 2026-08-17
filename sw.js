const CACHE = 'plastophage-v53';
const ASSETS = ['./','index.html','intro.html','manifest.webmanifest','icon-192.png','icon-512.png','icon-512-maskable.png','site-link.js'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});

self.addEventListener('message', e => {
  if (e.data && e.data.type === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;

  const url = new URL(e.request.url);
  const isAppNavigation = e.request.mode === 'navigate' && url.origin === self.location.origin;

  if (isAppNavigation) {
    e.respondWith(
      fetch(e.request)
        .then(resp => resp.text())
        .catch(() => caches.open(CACHE).then(c => c.match('index.html')).then(r => r.text()))
        .then(html => {
          if (!html.includes('site-link.js')) {
            html = html.replace('</body>', '<script src="site-link.js?v=53"></script></body>');
          }
          return new Response(html, {headers:{'Content-Type':'text/html; charset=utf-8','Cache-Control':'no-cache'}});
        })
    );
    return;
  }

  e.respondWith(
    caches.open(CACHE).then(c => c.match(e.request)).then(r => r || fetch(e.request).then(resp => {
      const copy = resp.clone();
      caches.open(CACHE).then(c => { try { c.put(e.request, copy); } catch (_) {} });
      return resp;
    }).catch(() => caches.open(CACHE).then(c => c.match('index.html'))))
  );
});
