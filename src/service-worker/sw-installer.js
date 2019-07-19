import '../components/notifications/ba-sw-update.js';
import { addNotification } from '../actions/notifications.js';
import { dispatch } from '../store.js';
import { html } from 'lit-html';
import { Workbox } from 'workbox-window';

if ('serviceWorker' in navigator) {
  const wb = new Workbox('./service-worker.js');

  wb.addEventListener('message', (event) => {
    if (event.data.type === 'CACHE_UPDATED') {
      dispatch(addNotification(html`<ba-sw-update></ba-sw-update>`));
    }
  });

  wb.register();
}
