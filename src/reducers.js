import { combineReducers } from 'redux';
import header from './reducers/header.js';
import notifications from './reducers/notifications.js';
import passage from './reducers/passage.js';
import reference from './reducers/reference.js';
import search from './reducers/search.js';

export default combineReducers({
  header,
  notifications,
  passage,
  reference,
  search,
});
