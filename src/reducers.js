import { combineReducers } from 'redux';
import header from './reducers/header.js';
import page from './reducers/page.js';
import passage from './reducers/passage.js';
import reference from './reducers/reference.js';

export default combineReducers({
  header,
  page,
  passage,
  reference,
});
