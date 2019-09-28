import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --bg-color: #263238;
    --font-color: #fafafa;

    --header__bg-color: #455a64;

    --footer__bg-color: #37474f;

    --form__input__border-color: #455a64;
    --form__input--focus__border-color: #78909c;

    --notification__bg-color: #455a64;
    --notification__color: #fafafa;

    --notification__button__bg-color: #455a64;
    --notification__button__bg-color--hover: #78909c;

    --selector__border-color: #455a64;
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: var(--bg-color, #fafafa);
    color: var(--font-color, #222222);
    font-family: 'Quattrocento Sans', sans-serif;
    line-height: 1.5;
  }

  svg {
    fill: currentColor;
  }
`;

export default GlobalStyles;
