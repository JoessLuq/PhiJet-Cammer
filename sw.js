const C='ev-cam-v1',F=['./','index.html','manifest.webmanifest','icon.svg'];
self.addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>c.addAll(F))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(n=>n!==C).map(n=>caches.delete(n))))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
