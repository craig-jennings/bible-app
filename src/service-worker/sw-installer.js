import { addNotification } from '../actions/notifications';
import { dispatch } from '../store';
import { Workbox } from 'workbox-window';
import SWUpdate from '../components/notifications/SWUpdate';

if ('serviceWorker' in navigator) {
  const wb = new Workbox('./service-worker.js');

  let updatePending = false;

  wb.addEventListener('message', (event) => {
    if (event.data.type === 'CACHE_UPDATED') {
      if (updatePending) return;

      updatePending = true;

      dispatch(addNotification(SWUpdate));
    }
  });

  wb.register();
}
