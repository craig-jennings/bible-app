import { css } from 'lit-element';

export default css`
  .align-center { align-items: center; }
  .align-end    { align-items: flex-end; }
  .align-start  { align-items: flex-start; }

  .center-content {
    align-items: center;
    display: flex;
    justify-content: center;
  }

  .d-block { display: block; }
  .d-flex  { display: flex; }

  .flex-column         { flex-direction: column; }
  .flex-column-reverse { flex-direction: column-reverse; }
  .flex-row            { flex-direction: row; }
  .flex-row-reverse    { flex-direction: row-reverse; }

  .justify-between { justify-content: space-between; }
  .justify-end     { justify-content: flex-end; }
  .justify-start   { justify-content: flex-start; }
`;
