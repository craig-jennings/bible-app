const NotificationActionType = {
  ADD_NOTIFICATION: 'notification:add',
  CLEAR_NOTIFICATIONS: 'notification:clear',
  REMOVE_NOTIFICATION: 'notification:remove',
};

/* --------------------- */
/* -- Reducer Actions -- */
/* --------------------- */
const addNotification = (Component, props, isError = false) => ({
  Component,
  isError,
  props,
  type: NotificationActionType.ADD_NOTIFICATION,
});

const addSimpleNotification = (text, isError) => addNotification(null, { text }, isError);

const clearNotifications = () => ({ type: NotificationActionType.CLEAR_NOTIFICATIONS });
const removeNotification = (key) => ({ key, type: NotificationActionType.REMOVE_NOTIFICATION });

export {
  addNotification,
  addSimpleNotification,
  clearNotifications,
  NotificationActionType,
  removeNotification,
};
