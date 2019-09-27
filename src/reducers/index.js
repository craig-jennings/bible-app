import { combineReducers } from 'redux';
import header from './header';
import notifications from './notifications';
import passage from './passage';
import reference from './reference';
import search from './search';

export default combineReducers({
  header,
  notifications,
  passage,
  reference,
  search,
});
