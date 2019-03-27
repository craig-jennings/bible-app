import { css } from 'lit-element';

const formStyles = css`
  .form__input {
    background-color: var(--bg-color);
    border-radius: .5rem;
    border: 2px solid var(--form__input__border-color);
    color: var(--font-color);
    font-size: 1.25rem;
    line-height: 2rem;
    padding-left: 1rem;
    width: 100%;
    transition: border-color .15s;
  }

  .form__input:focus {
    border-color: var(--form__input--focus__border-color);
    outline: none;
  }

  .form__button {
    background-color: var(--form__button__bg-color, #e0e0e0);
    border-radius: .5rem;
    border-style: solid;
    border-width: 0;
    font-family: inherit;
    font-size: inherit;
    padding: .5rem 1rem;
    transition: background-color .15s;
  }

  .form__button:focus {
    outline: none;
  }

  .form__button:focus,
  .form__button:hover {
    background-color: var(--form__button--hover__bg-color, #bdbdbd);
    cursor: pointer;
  }

  .form__button:active {
    background-color: var(--form__button--active__bg-color, #9e9e9e);
  }
`;

export {
  formStyles,
};
