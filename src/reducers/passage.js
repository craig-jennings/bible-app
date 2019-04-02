import { PassageActionType } from '../actions/passage.js';
import createReducer from '../utils/createReducer.js';

const INITIAL_STATE = {
  isLoaded: false,
  text: '',
};

const reducers = {
  [PassageActionType.CLEAR_PASSAGE]: () => ({
    isLoaded: false,
    text: '',
  }),

  [PassageActionType.SET_PASSAGE]: (state, { text }) => ({
    isLoaded: true,
    text,
  }),
};

const passageReducer = createReducer(reducers, INITIAL_STATE);

export default passageReducer;
