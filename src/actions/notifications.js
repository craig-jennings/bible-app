import { store } from 'react-recollect';

store.notifications = [];

let keyCounter = 0;

function addNotification(notificationType, contents) {
  const { notifications } = store;

  if (notifications.length === 3) {
    notifications.pop();
  }

  notifications.unshift({
    contents,
    key: ++keyCounter,
    notificationType,
  });
}

function clearNotifications() {
  store.notifications = [];
}

function removeNotification(key) {
  store.notifications = store.notifications.filter((n) => n.key !== key);
}

const NotificationType = {
  ERROR: 'error',
  SERVICE_WORKER: 'serviceWorker',
  SUCCESS: 'success',
};

export { addNotification, clearNotifications, NotificationType, removeNotification };
