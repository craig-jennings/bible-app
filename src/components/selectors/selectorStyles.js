import { css } from 'lit-element';

export default css`
  .selector__list {
    display: grid;
    gap: 1rem;
    grid-auto-rows: 100px;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    width: 100%;
  }

  .selector__item {
    align-items: center;
    border: 1px solid var(--selector__border-color);
    border-radius: .5rem;
    color: inherit;
    display: flex;
    justify-content: center;
    text-align: center;
    text-decoration: none;
    transition: background-color .1s ease-in-out;
  }

  .selector__item:hover,
  .selector__item:focus {
      background-color: var(--selector__border-color);
      outline: none;
      text-decoration: none;
  }
`;
