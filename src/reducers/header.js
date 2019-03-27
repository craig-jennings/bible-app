import { findBookByValue } from '../data/findBook.js';
import { RESET_HEADER, SET_HEADER } from '../actions/header.js';
import createReducer from '../utils/createReducer.js';

const INITIAL_STATE = {};

const reducers = {
  [RESET_HEADER]: () => INITIAL_STATE,

  [SET_HEADER]: (state, { book, chapter }) => {
    const _book = findBookByValue(book);

    return Object.assign({}, _book, { chapter });
  },
};

const referenceReducer = createReducer(reducers, INITIAL_STATE);

export default referenceReducer;
