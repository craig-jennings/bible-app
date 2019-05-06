const NotificationActionType = {
  CLEAR_NOTIFICATION: 'notification:clear',
  SET_NOTIFICATION: 'notification:set',
};

/* --------------------- */
/* -- Reducer Actions -- */
/* --------------------- */
const clearNotification = () => ({ type: NotificationActionType.CLEAR_NOTIFICATION });
const setNotification = template => ({ template, type: NotificationActionType.SET_NOTIFICATION });

export {
  clearNotification,
  NotificationActionType,
  setNotification,
};
