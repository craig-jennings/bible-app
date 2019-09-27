import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-display: fallback;
    font-family: 'Quattrocento Sans';
    font-style: normal;
    font-weight: 400;

    src: local('Quattrocento Sans'),
        local('QuattrocentoSans'),
        url(https://fonts.gstatic.com/s/quattrocentosans/v11/va9c4lja2NVIDdIAAoMR5MfuElaRB0zJt0_8H3HI.woff2)
        format('woff2');

    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

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
`;

export default GlobalStyles;
