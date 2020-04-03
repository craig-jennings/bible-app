import { createReducer } from '@reduxjs/toolkit';
import { NotificationActionType } from '../actions/notifications';

const INITIAL_STATE = [];
const MAX_NOTIFICATIONS = 3;

export default createReducer(INITIAL_STATE, {
  [NotificationActionType.ADD]: (draft, { payload: { contents, key, notificationType } }) => {
    if (draft.length === MAX_NOTIFICATIONS) {
      draft.pop();
    }

    draft.unshift({
      contents,
      key,
      notificationType,
    });
  },

  [NotificationActionType.CLEAR]: () => [],

  [NotificationActionType.REMOVE]: (draft, { payload: { key } }) =>
    draft.filter((n) => n.key !== key),
});
