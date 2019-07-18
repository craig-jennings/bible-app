import { css } from 'lit-element';
import flex from './base/flex.js';
import spacing from './base/spacing.js';
import unstyled from './base/unstyled.js';

export default css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :host         { display: block; }
  :host[hidden] { display: none; }

  ${flex}
  ${spacing}
  ${unstyled}
`;
