import { ReferenceActionType } from '../actions/reference';
import createReducer from '../utils/createReducer';

const INITIAL_STATE = {};

const reducers = {
  [ReferenceActionType.SET_REFERENCE]: (state, { book, chapter }) => ({ book, chapter }),
};

const referenceReducer = createReducer(reducers, INITIAL_STATE);

export default referenceReducer;
