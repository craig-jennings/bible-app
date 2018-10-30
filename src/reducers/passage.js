import { SET_PASSAGE } from '../actions/passage.js';
import createReducer from '../utils/createReducer.js';

const INITIAL_STATE = '';

const reducers = {
  [SET_PASSAGE]: (state, { passage }) => passage,
};

const passageReducer = createReducer(reducers, INITIAL_STATE);

export default passageReducer;
