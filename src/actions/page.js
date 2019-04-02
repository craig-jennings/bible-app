const PageActionType = {
  SET_PAGE: 'page:set',
};

/* --------------------- */
/* -- Reducer Actions -- */
/* --------------------- */
const setPage = page => ({ page, type: PageActionType.SET_PAGE });

export {
  PageActionType,
  setPage,
};
