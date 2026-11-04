// Service worker mínimo: solo para que Chrome deje instalar la app.
// No guarda nada en caché, así cada versión nueva se ve enseguida.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
