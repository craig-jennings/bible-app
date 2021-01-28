import { useEffect } from 'react';
import { useNotificationActionsContext } from '@contexts/NotificationContext';
import { Workbox } from 'workbox-window';
import SWUpdate from './notifications/SWUpdate';

function SWInstaller() {
  const { addNotification } = useNotificationActionsContext();

  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') return;

    if ('serviceWorker' in navigator) {
      const wb = new Workbox('/sw.js');

      let updatePending = false;

      wb.addEventListener('waiting', () => {
        if (updatePending) return;

        updatePending = true;

        const onUpdateClick = () => {
          wb.addEventListener('controlling', () => window.location.reload());

          wb.messageSkipWaiting();
        };

        addNotification(<SWUpdate onUpdateClick={onUpdateClick} />);
      });

      wb.register();
    }
  }, [addNotification]);

  return null;
}

export default SWInstaller;
