self.addEventListener('install', () => void self.skipWaiting());

self.addEventListener('activate', () => self.clients.claim());

self.addEventListener('fetch', () => void 0);
