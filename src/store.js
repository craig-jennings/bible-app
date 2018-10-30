import {
  applyMiddleware,
  createStore,
  compose as reduxCompose,
} from 'redux';
import reducers from './reducers.js';
import thunk from 'redux-thunk';

// Sets up a Chrome extension for time travel debugging.
// See https://github.com/zalmoxisus/redux-devtools-extension for more information.
const compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || reduxCompose;

const store = createStore(
  reducers,
  compose(applyMiddleware(thunk)),
);

export default store;
