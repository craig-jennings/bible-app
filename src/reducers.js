import { combineReducers } from 'redux';
import header from './reducers/header.js';
import notification from './reducers/notification.js';
import page from './reducers/page.js';
import passage from './reducers/passage.js';
import reference from './reducers/reference.js';
import search from './reducers/search.js';

export default combineReducers({
  header,
  notification,
  page,
  passage,
  reference,
  search,
});
