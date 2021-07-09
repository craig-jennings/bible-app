import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --bg-color: #1e1e1e;
    --font-color: #fafafa;

    --header__bg-color: #3e3e42;

    --footer__bg-color: #3e3e42;

    --form__input__border-color: #3e3e42;
    --form__input--focus__border-color: #007acc;

    --danger: hsl(0, 91%, 66%);
    --danger-text: hsl(0, 0%, 13%);

    --neutral: hsl(211, 19%, 84%);
    --neutral--active: hsl(211, 9%, 74%);
    --neutral--hover: hsl(211, 14%, 79%);
    --neutral-text: hsl(0, 0%, 13%);

    --primary: #007acc;
    --primary-text: #ffffff;

    --notification__button__bg-color--hover: #78909c;

    --selector__border-color: #3e3e42;
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
