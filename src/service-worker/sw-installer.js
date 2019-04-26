import { Workbox } from 'workbox-window';

if ('serviceWorker' in navigator) {
  const wb = new Workbox('./service-worker.js');

  wb.addEventListener('message', (event) => {
    if (event.data.type === 'CACHE_UPDATED') {
      window.resolveUpdatePromise();
    }
  });

  wb.register();
}
