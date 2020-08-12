import { addNotification, NotificationType } from '../actions/notifications';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Workbox } from 'workbox-window';

function SWInstaller() {
  const dispatch = useDispatch();

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      const wb = new Workbox('./service-worker.js');

      let updatePending = false;

      wb.addEventListener('message', (event) => {
        if (event.data.type === 'CACHE_UPDATED') {
          if (updatePending) return;

          updatePending = true;

          dispatch(addNotification(NotificationType.SERVICE_WORKER));
        }
      });

      wb.register();
    }
  }, [dispatch]);

  return null;
}

export default SWInstaller;
