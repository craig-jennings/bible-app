import '../components/notifications/ba-sw-update.js';
import { addNotification } from '../actions/notifications.js';
import { dispatch } from '../store.js';
import { html } from 'lit-html';
import { Workbox } from 'workbox-window';

const updateAvailable = new Promise((resolve) => {
  if ('serviceWorker' in navigator) {
    const wb = new Workbox('./service-worker.js');

    wb.addEventListener('message', (event) => {
      if (event.data.type === 'CACHE_UPDATED') {
        resolve();
      }
    });

    wb.register();
  }
});

updateAvailable.then(() => {
  dispatch(addNotification(html`<ba-sw-update></ba-sw-update>`));
});
