import { findBookByValue } from '../data/findBook.js';
import { HeaderActionType } from '../actions/header.js';
import createReducer from '../utils/createReducer.js';

const INITIAL_STATE = {};

const reducers = {
  [HeaderActionType.RESET_HEADER]: () => INITIAL_STATE,

  [HeaderActionType.SET_HEADER]: (state, { book, chapter }) => {
    const _book = findBookByValue(book);

    return Object.assign({}, _book, { chapter });
  },
};

const referenceReducer = createReducer(reducers, INITIAL_STATE);

export default referenceReducer;
