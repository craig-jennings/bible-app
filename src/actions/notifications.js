import { createAction } from '@reduxjs/toolkit';

let keyCounter = 0;

const NotificationActionType = {
  ADD: 'notification/add',
  CLEAR: 'notification/clear',
  REMOVE: 'notification/remove',
};

const NotificationType = {
  ERROR: 'error',
  INFO: 'info',
  SERVICE_WORKER: 'serviceWorker',
  SUCCESS: 'success',
};

const addNotification = createAction(NotificationActionType.ADD, (notificationType, contents) => {
  return {
    payload: {
      contents,
      key: ++keyCounter,
      notificationType,
    },
  };
});

const clearNotifications = createAction(NotificationActionType.CLEAR);
const removeNotifications = createAction(NotificationActionType.REMOVE);

export {
  addNotification,
  clearNotifications,
  NotificationActionType,
  NotificationType,
  removeNotifications,
};
