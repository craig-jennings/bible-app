import { SearchActionType } from '../actions/search.js';
import createReducer from '../utils/createReducer.js';

const INITIAL_STATE = {
  results: [],
};

const reducers = {
  [SearchActionType.ClearResults]: () => ({ results: [] }),
  [SearchActionType.SetResults]: (state, { results }) => ({ results }),
};

const searchReducer = createReducer(reducers, INITIAL_STATE);

export default searchReducer;
