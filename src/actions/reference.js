/* --------------------- */
/* -- Reducer Actions -- */
/* --------------------- */
const SET_REFERENCE = 'SET_REFERENCE';

const setReference = (book, chapter) => ({ book, chapter, type: SET_REFERENCE });

export {
  SET_REFERENCE,
};

export {
  setReference,
};
