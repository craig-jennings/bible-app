import { css } from 'lit-element';

const baseStyles = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :host         { display: block; }
  :host[hidden] { display: none; }
`;

const flexStyles = css`
  .center-content {
    align-items: center;
    display: flex;
    justify-content: center;
  }

  .d-flex { display: flex; }
`;

const unstyledStyles = css`
  a.unstyled {
    color: inherit;
    text-decoration: none;
  }

  a.unstyled:hover,
  a.unstyled:visited {
    text-decoration: none;
  }
`;

export {
  baseStyles,
  flexStyles,
  unstyledStyles,
};
