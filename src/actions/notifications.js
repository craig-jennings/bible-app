import { createAction } from '@reduxjs/toolkit';

let keyCounter = 0;

const NotificationActionType = {
  ADD: 'notifications/add',
  CLEAR: 'notifications/clear',
  REMOVE: 'notifications/remove',
};

const NotificationType = {
  ERROR: 'error',
  SERVICE_WORKER: 'serviceWorker',
  SUCCESS: 'success',
};

/* -------------------- */
/* -- Simple Actions -- */
/* -------------------- */
const addNotification = createAction(NotificationActionType.ADD, (notificationType, contents) => ({
  payload: {
    contents,
    key: keyCounter++,
    notificationType,
  },
}));

const clearNotifications = createAction(NotificationActionType.CLEAR);

const removeNotification = createAction(NotificationActionType.REMOVE, (key) => ({
  payload: { key },
}));

export {
  addNotification,
  clearNotifications,
  NotificationActionType,
  NotificationType,
  removeNotification,
};
