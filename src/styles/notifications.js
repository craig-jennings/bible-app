import { css } from 'lit-element';

const notificationStyles = css`
  :host {
    height: 100%;
  }

  .notification {
    align-items: center;
    background-color: var(--notification__bg-color);
    border-radius: .5rem;
    display: flex;
    height: 100%;
    justify-content: center;
    opacity: 0;
    transition: opacity .2s ease-in;
    width: 100%;
  }

  .notification--enter {
    opacity: 1;
  }

  @media screen and (min-width: 768px) {
    .notification {
      justify-content: space-between;
      padding: 0 8px 0 16px;
    }
  }
`;

export {
  notificationStyles,
};
