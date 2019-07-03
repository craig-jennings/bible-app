import { NotificationActionType } from '../actions/notifications.js';
import createReducer from '../utils/createReducer.js';

const INITIAL_STATE = [];
const MAX_NOTIFICATIONS = 3;
let keyCounter = 0;

const reducers = {
  [NotificationActionType.ADD_NOTIFICATION]: (state, { template }) => {
    let notifications = [...state];

    if (notifications.length === MAX_NOTIFICATIONS) {
      notifications = notifications.slice(0, MAX_NOTIFICATIONS - 1);
    }

    return [
      {
        key: ++keyCounter,
        template,
      },

      ...notifications,
    ];
  },

  [NotificationActionType.CLEAR_NOTIFICATIONS]: () => [],
  [NotificationActionType.REMOVE_NOTIFICATION]: (state, { key }) => state.filter(n => n.key !== key),
};

const notificationsReducer = createReducer(reducers, INITIAL_STATE);

export default notificationsReducer;
