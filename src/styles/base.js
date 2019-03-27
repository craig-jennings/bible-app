import { css } from 'lit-element';

const baseStyles = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

const blockStyles = css`
  :host         { display: block; }
  :host[hidden] { display: none; }
`;

const flexStyles = css`
  .d-flex { display: flex; }
`;

export {
  baseStyles,
  blockStyles,
  flexStyles,
};
