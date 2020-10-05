import { useEffect } from 'react';
import { useNotificationActionsContext } from '../contexts/NotificationContext';
import { Workbox } from 'workbox-window';
import SWUpdate from './notifications/SWUpdate';

function SWInstaller() {
  const { addNotification } = useNotificationActionsContext();

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      const wb = new Workbox('./service-worker.js');

      let updatePending = false;

      wb.addEventListener('message', (event) => {
        if (event.data.type === 'CACHE_UPDATED') {
          if (updatePending) return;

          updatePending = true;

          addNotification(<SWUpdate />);
        }
      });

      wb.register();
    }
  }, []);

  return null;
}

export default SWInstaller;
