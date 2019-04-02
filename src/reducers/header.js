import { HeaderActionType } from '../actions/header.js';
import createReducer from '../utils/createReducer.js';

const INITIAL_STATE = {};

const reducers = {
  [HeaderActionType.RESET_HEADER]: () => ({ ...INITIAL_STATE }),

  [HeaderActionType.SET_HEADER]: (state, { book, chapter }) => ({ ...book, chapter }),
};

const referenceReducer = createReducer(reducers, INITIAL_STATE);

export default referenceReducer;
