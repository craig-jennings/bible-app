const ReferenceActionType = {
  SET_REFERENCE: 'reference:set',
};

/* --------------------- */
/* -- Reducer Actions -- */
/* --------------------- */
const setReference = (book, chapter) => ({
  book,
  chapter,
  type: ReferenceActionType.SET_REFERENCE,
});

export {
  ReferenceActionType,
  setReference,
};
