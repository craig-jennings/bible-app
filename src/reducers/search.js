import { SearchActionType } from '../actions/search.js';
import createReducer from '../utils/createReducer.js';

const INITIAL_STATE = {
  isLoaded: false,
  isLoading: false,
  results: [],
};

const reducers = {
  [SearchActionType.ClearResults]: () => ({
    isLoaded: false,
    isLoading: false,
    results: [],
  }),

  [SearchActionType.SetResults]: (state, { results }) => ({
    isLoading: false,
    isLoaded: true,
    results,
  }),

  [SearchActionType.SetResultsLoading]: state => ({
    ...state,
    isLoaded: false,
    isLoading: true,
  }),
};

const searchReducer = createReducer(reducers, INITIAL_STATE);

export default searchReducer;
