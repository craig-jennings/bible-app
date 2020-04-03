import { createAction } from '@reduxjs/toolkit';

const ReferenceActionType = {
  SET_REFERENCE: 'reference/set',
};

/* -------------------- */
/* -- Simple Actions -- */
/* -------------------- */
const setReference = createAction(ReferenceActionType.SET_REFERENCE);

export { ReferenceActionType, setReference };
