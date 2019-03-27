import { baseStyles, blockStyles } from '../../styles/base.js';
import { css, html, LitElement } from 'lit-element';
import { findBookByLabel } from '../../data/findBook.js';

class BibleAppSearchItem extends LitElement {
  static get is() { return 'ba-search-item'; }

  static get properties() {
    return {
      item: { type: Object },
    };
  }

  static get styles() {
    return [
      baseStyles,
      blockStyles,

      css`
        .result {
          border-radius: .5rem;
          border: 1px solid var(--selector__border-color);
          margin-top: 1rem;
          padding: .25rem .5rem;
        }

        .reference a {
          color: inherit;
          font-style: italic;
        }
      `,
    ];
  }

  render() {
    const { content, reference } = this.item;

    const book = reference.slice(0, reference.lastIndexOf(' '));
    const chapter = reference.slice(reference.lastIndexOf(' ') + 1, reference.indexOf(':'));

    const { value: bookValue } = findBookByLabel(book);

    const referenceLink = `/${bookValue}/${chapter}`;

    return html`
      <div class="result">
        <div>${content}</div>

        <div class="reference">
          <a href="${referenceLink}">${reference}</a>
        </div>
      </div>
    `;
  }
}

customElements.define(BibleAppSearchItem.is, BibleAppSearchItem);

export default BibleAppSearchItem;
