import { css } from 'lit-element';

export default css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .filter-input {
    background-color: var(--bg-color);
    border-radius: .5rem;
    border: 2px solid var(--selector-input-border-color);
    color: var(--font-color);
    font-size: 1.25rem;
    line-height: 2rem;
    padding-left: 1rem;
    width: 100%;
    transition: border-color .15s;
  }

  .filter-input:focus {
    border-color: var(--selector-input-border-color--focus);
    outline: none;
  }

  .selector-list {
    display: grid;
    gap: 1rem;
    grid-auto-rows: 100px;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    width: 100%;
  }

  .selector-item {
    align-items: center;
    border: 1px solid var(--selector-border-color);
    border-radius: .5rem;
    color: inherit;
    display: flex;
    justify-content: center;
    text-align: center;
    text-decoration: none;
    transition: background-color .1s ease-in-out;
  }

  .selector-item:hover,
  .selector-item:focus {
      background-color: var(--selector-border-color);
      outline: none;
      text-decoration: none;
  }
`;
