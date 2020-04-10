import { addNotification, NotificationType } from '../actions/notifications';
import { useEffect } from 'react';
import { Workbox } from 'workbox-window';

function SWInstaller() {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      const wb = new Workbox('./service-worker.js');

      let updatePending = false;

      wb.addEventListener('message', (event) => {
        if (event.data.type === 'CACHE_UPDATED') {
          if (updatePending) return;

          updatePending = true;

          addNotification(NotificationType.SERVICE_WORKER);
        }
      });

      wb.register();
    }
  }, []);

  return null;
}

export default SWInstaller;
