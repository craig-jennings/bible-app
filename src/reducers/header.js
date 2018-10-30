import { RESET_HEADER, SET_HEADER } from '../actions/header.js';
import createReducer from '../utils/createReducer.js';
import NewTestament from '../data/NewTestament.js';
import OldTestament from '../data/OldTestament.js';

const INITIAL_STATE = 'Bible';

const reducers = {
  [RESET_HEADER]: () => INITIAL_STATE,

  [SET_HEADER]: (state, { book }) => {
    const { label } = NewTestament.find(b => b.value === book)
              || OldTestament.find(b => b.value === book)
              || {};

    return label;
  },
};

const referenceReducer = createReducer(reducers, INITIAL_STATE);

export default referenceReducer;
