import { css, html, LitElement } from 'lit-element';
import { removeNotification } from '../../actions/notifications.js';
import base from '../../styles/base.js';
import store from '../../store.js';

class BibleAppNotification extends LitElement {
  static get is() { return 'ba-notification'; }

  static get styles() {
    return [
      base,

      css`
        .notification {
          background-color: var(--notification__bg-color, #eaeaea);
          border-radius: .5rem;
          color: var(--notification__color, #222222);
          height: 100%;
          opacity: 0;
          padding: .25rem .5rem;
          transition: all .4s ease-in-out;
          width: 100%;
          transform: translateY(200px);
        }

        .notification--enter {
          transform: translateY(0);
          opacity: 1;
        }

        @media screen and (min-width: 768px) {
          .notification {
            padding: .5rem 1rem;
          }
        }
      `,
    ];
  }

  get $notification() { return this.renderRoot.querySelector('.notification'); }

  render() {
    return html`
      <div class="notification" @click=${this._handleNotificationClick}>
        ${this.notification.template}
      </div>
    `;
  }

  firstUpdated() {
    setTimeout(() => {
      this.$notification.classList.add('notification--enter');
    }, 0);
  }

  _handleNotificationClick() {
    this.$notification.classList.remove('notification--enter');

    setTimeout(() => store.dispatch(removeNotification(this.notification.key)), 400);
  }
}

customElements.define(BibleAppNotification.is, BibleAppNotification);

export default BibleAppNotification;
