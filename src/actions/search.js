import api from '../services/api';

const SearchActionType = {
  CLEAR_RESULTS: 'search:clear_results',
  SET_RESULTS: 'search:set_results',
  SET_RESULTS_LOADING: 'search:loading_results',
};

/* --------------------- */
/* -- Reducer Actions -- */
/* --------------------- */
const clearResults = () => ({ type: SearchActionType.CLEAR_RESULTS });

const setResults = (results) => ({
  results,
  type: SearchActionType.SET_RESULTS,
});

const setResultsLoading = () => ({ type: SearchActionType.SET_RESULTS_LOADING });

/* ----------------- */
/* -- API Actions -- */
/* ----------------- */
const queryTerm = (term, page = 1) => async (dispatch) => {
  dispatch(clearResults());

  if (term.trim().length === 0) return;

  dispatch(setResultsLoading());

  try {
    const results = await api.search(term, page);

    dispatch(setResults(results));
  } catch (e) {
    console.error(e);
  }
};

export { clearResults, queryTerm, SearchActionType, setResults };
