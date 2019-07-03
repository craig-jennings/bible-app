import { css } from 'lit-element';

export default css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :host         { display: block; }
  :host[hidden] { display: none; }

  /* ----------------- */
  /* -- Flex Styles -- */
  /* ----------------- */
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

  /* -------------------- */
  /* -- Spacing Styles -- */
  /* -------------------- */
  .m-0 { margin: 0 !important; }
  .m-1 { margin: .5rem !important; }
  .m-2 { margin: .75rem !important; }
  .m-3 { margin: 1rem !important; }
  .m-4 { margin: 1.5rem !important; }

  .mb-0 { margin-bottom: 0 !important; }
  .mb-1 { margin-bottom: .5rem !important; }
  .mb-2 { margin-bottom: .75rem !important; }
  .mb-3 { margin-bottom: 1rem !important; }
  .mb-4 { margin-bottom: 1.5rem !important; }

  .ml-0 { margin-left: 0 !important; }
  .ml-1 { margin-left: .5rem !important; }
  .ml-2 { margin-left: .75rem !important; }
  .ml-3 { margin-left: 1rem !important; }
  .ml-4 { margin-left: 1.5rem !important; }

  .mr-0 { margin-right: 0 !important; }
  .mr-1 { margin-right: .5rem !important; }
  .mr-2 { margin-right: .75rem !important; }
  .mr-3 { margin-right: 1rem !important; }
  .mr-4 { margin-right: 1.5rem !important; }

  .mt-0 { margin-top: 0 !important; }
  .mt-1 { margin-top: .5rem !important; }
  .mt-2 { margin-top: .75rem !important; }
  .mt-3 { margin-top: 1rem !important; }
  .mt-4 { margin-top: 1.5rem !important; }

  .mx-0 {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }

  .mx-1 {
    margin-left: .5rem !important;
    margin-right: .5rem !important;
  }

  .mx-2 {
    margin-left: .75rem !important;
    margin-right: .75rem !important;
  }

  .mx-3 {
    margin-left: 1rem !important;
    margin-right: 1rem !important;
  }

  .mx-4 {
    margin-left: 1.5rem !important;
    margin-right: 1.5rem !important;
  }

  .my-0 {
    margin-bottom: 0 !important;
    margin-top: 0 !important;
  }

  .my-1 {
    margin-bottom: .5rem !important;
    margin-top: .5rem !important;
  }

  .my-2 {
    margin-bottom: .75rem !important;
    margin-top: .75rem !important;
  }

  .my-3 {
    margin-bottom: 1rem !important;
    margin-top: 1rem !important;
  }

  .my-4 {
    margin-bottom: 1.5rem !important;
    margin-top: 1.5rem !important;
  }

  .p-0 { padding: 0 !important; }
  .p-1 { padding: .5rem !important; }
  .p-2 { padding: .75rem !important; }
  .p-3 { padding: 1rem !important; }
  .p-4 { padding: 1.5rem !important; }

  .pb-0 { padding-bottom: 0 !important; }
  .pb-1 { padding-bottom: .5rem !important; }
  .pb-2 { padding-bottom: .75rem !important; }
  .pb-3 { padding-bottom: 1rem !important; }
  .pb-4 { padding-bottom: 1.5rem !important; }

  .pl-0 { padding-left: 0 !important; }
  .pl-1 { padding-left: .5rem !important; }
  .pl-2 { padding-left: .75rem !important; }
  .pl-3 { padding-left: 1rem !important; }
  .pl-4 { padding-left: 1.5rem !important; }

  .pr-0 { padding-right: 0 !important; }
  .pr-1 { padding-right: .5rem !important; }
  .pr-2 { padding-right: .75rem !important; }
  .pr-3 { padding-right: 1rem !important; }
  .pr-4 { padding-right: 1.5rem !important; }

  .pt-0 { padding-top: 0 !important; }
  .pt-1 { padding-top: .5rem !important; }
  .pt-2 { padding-top: .75rem !important; }
  .pt-3 { padding-top: 1rem !important; }
  .pt-4 { padding-top: 1.5rem !important; }

  .px-0 {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }

  .px-1 {
    padding-left: .5rem !important;
    padding-right: .5rem !important;
  }

  .px-2 {
    padding-left: .75rem !important;
    padding-right: .75rem !important;
  }

  .px-3 {
    padding-left: 1rem !important;
    padding-right: 1rem !important;
  }

  .px-4 {
    padding-left: 1.5rem !important;
    padding-right: 1.5rem !important;
  }

  .py-0 {
    padding-bottom: 0 !important;
    padding-top: 0 !important;
  }

  .py-1 {
    padding-bottom: .5rem !important;
    padding-top: .5rem !important;
  }

  .py-2 {
    padding-bottom: .75rem !important;
    padding-top: .75rem !important;
  }

  .py-3 {
    padding-bottom: 1rem !important;
    padding-top: 1rem !important;
  }

  .py-4 {
    padding-bottom: 1.5rem !important;
    padding-top: 1.5rem !important;
  }

  /* ---------------------- */
  /* -- Unstyling Styles -- */
  /* ---------------------- */
  a.unstyled {
    color: inherit;
    text-decoration: none;
  }

  a.unstyled:hover,
  a.unstyled:visited {
    text-decoration: none;
  }
`;
