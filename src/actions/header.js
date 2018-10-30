/* --------------------- */
/* -- Reducer Actions -- */
/* --------------------- */
const RESET_HEADER = 'RESET_HEADER';
const SET_HEADER = 'SET_HEADER';

const resetHeader = () => ({ type: RESET_HEADER });
const setHeader = (book, chapter) => ({ book, chapter, type: SET_HEADER });

export {
  RESET_HEADER,
  SET_HEADER,
};

export {
  resetHeader,
  setHeader,
};
