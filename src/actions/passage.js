import { setReference } from './reference.js';
import api from '../services/api.js';

/* --------------------- */
/* -- Reducer Actions -- */
/* --------------------- */
const SET_PASSAGE = 'SET_PASSAGE';

const clearPassage = () => ({ passage: '', type: SET_PASSAGE });
const setPassage = passage => ({ passage, type: SET_PASSAGE });

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
  SET_PASSAGE,
};

export {
  clearPassage,
  fetchPassage,
  setPassage,
};
