import { html } from 'lit-html';

export default html`
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
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
  </style>
`;
