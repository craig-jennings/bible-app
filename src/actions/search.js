import api from '../services/api';

const SearchActionType = {
  ClearResults: 'search:clear_results',
  SetResults: 'search:set_results',
  SetResultsLoading: 'search:loading_results',
};

/* --------------------- */
/* -- Reducer Actions -- */
/* --------------------- */
const clearResults = () => ({ type: SearchActionType.ClearResults });

const setResults = (results) => ({
  results,
  type: SearchActionType.SetResults,
});

const setResultsLoading = () => ({ type: SearchActionType.SetResultsLoading });

/* ----------------- */
/* -- API Actions -- */
/* ----------------- */
const queryTerm = (term, page = 1) => async (dispatch) => {
  dispatch(clearResults());

  if (term.length === 0) return;

  dispatch(setResultsLoading());

  try {
    const results = await api.search(term, page);

    dispatch(setResults(results));
  } catch (e) {
    console.error(e);
  }
};

export { clearResults, queryTerm, SearchActionType, setResults };
