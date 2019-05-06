import { NotificationActionType } from '../actions/notification.js';
import createReducer from '../utils/createReducer.js';

const INITIAL_STATE = {
  template: '',
};

const reducers = {
  [NotificationActionType.CLEAR_NOTIFICATION]: () => ({ ...INITIAL_STATE }),
  [NotificationActionType.SET_NOTIFICATION]: (state, { template }) => ({ template }),
};

const passageReducer = createReducer(reducers, INITIAL_STATE);

export default passageReducer;
