const NotificationActionType = {
  ADD_NOTIFICATION: 'notification:add',
  CLEAR_NOTIFICATIONS: 'notification:clear',
  REMOVE_NOTIFICATION: 'notification:remove',
};

/* --------------------- */
/* -- Reducer Actions -- */
/* --------------------- */
const addNotification = (template) => ({ template, type: NotificationActionType.ADD_NOTIFICATION });
const clearNotifications = () => ({ type: NotificationActionType.CLEAR_NOTIFICATIONS });
const removeNotification = (key) => ({ key, type: NotificationActionType.REMOVE_NOTIFICATION });

export {
  addNotification,
  clearNotifications,
  NotificationActionType,
  removeNotification,
};
