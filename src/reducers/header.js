import { RESET_HEADER, SET_HEADER } from '../actions/header.js';
import createReducer from '../utils/createReducer.js';
import findBook from '../data/findBook.js';

const INITIAL_STATE = {};

const reducers = {
  [RESET_HEADER]: () => INITIAL_STATE,

  [SET_HEADER]: (state, { book, chapter }) => {
    const _book = findBook(book);

    return Object.assign({}, _book, { chapter });
  },
};

const referenceReducer = createReducer(reducers, INITIAL_STATE);

export default referenceReducer;
