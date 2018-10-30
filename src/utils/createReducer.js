function createReducer(reducers, initialState) {
  return (state = initialState, action) => (
    reducers[action.type] ? reducers[action.type](state, action) : state
  );
}

export default createReducer;
