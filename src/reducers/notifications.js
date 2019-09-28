import { NotificationActionType } from '../actions/notifications';
import createReducer from '../utils/createReducer';

const INITIAL_STATE = [];
const MAX_NOTIFICATIONS = 3;
let keyCounter = 0;

const reducers = {
  [NotificationActionType.ADD_NOTIFICATION]: (state, { Component, isError, props }) => {
    let notifications = [...state];

    if (notifications.length === MAX_NOTIFICATIONS) {
      notifications = notifications.slice(0, MAX_NOTIFICATIONS - 1);
    }

    return [
      {
        Component,
        isError,
        key: ++keyCounter,
        props,
      },

      ...notifications,
    ];
  },

  [NotificationActionType.CLEAR_NOTIFICATIONS]: () => [],
  [NotificationActionType.REMOVE_NOTIFICATION]: (state, { key }) =>
    state.filter((n) => n.key !== key),
};

const notificationsReducer = createReducer(reducers, INITIAL_STATE);

export default notificationsReducer;
