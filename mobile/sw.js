// Cache-first so the on-device mode keeps working offline after the first visit.
const CACHE = 'tugma-v1';
const FILES = ['./', 'face-api.js', 'manifest.json', 'icon.svg',
  'model/ssd_mobilenetv1_model-weights_manifest.json', 'model/ssd_mobilenetv1_model.bin',
  'model/face_landmark_68_model-weights_manifest.json', 'model/face_landmark_68_model.bin',
  'model/face_recognition_model-weights_manifest.json', 'model/face_recognition_model.bin'];
self.addEventListener('install', e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES))));
self.addEventListener('activate', e => e.waitUntil(
  caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))));
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET' || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(caches.match(e.request).then(hit => hit || fetch(e.request)));
});
