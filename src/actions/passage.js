import { setReference } from './reference.js';
import api from '../services/api.js';

const PassageActionType = {
  CLEAR_PASSAGE: 'passage:clear',
  SET_PASSAGE: 'passage:set',
};

/* --------------------- */
/* -- Reducer Actions -- */
/* --------------------- */
const clearPassage = () => ({ type: PassageActionType.CLEAR_PASSAGE });
const setPassage = text => ({ text, type: PassageActionType.SET_PASSAGE });

/* ----------------- */
/* -- API Actions -- */
/* ----------------- */
const fetchPassage = (book, chapter) => async (dispatch, getState) => {
  const { reference } = getState();

  if (reference.book === book && reference.chapter === chapter) return;

  try {
    dispatch(clearPassage());

    const passage = await api.fetchPassage(book, chapter);

    dispatch(setReference(book, chapter));
    dispatch(setPassage(passage));
  } catch (e) {
    console.error(e);
  }
};

export {
  clearPassage,
  fetchPassage,
  PassageActionType,
  setPassage,
};
