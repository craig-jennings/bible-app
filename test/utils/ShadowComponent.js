import ShadowSelector from './ShadowSelector.js';

class ShadowComponent {
  constructor(selector) {
    this._selector = selector;

    this.container = ShadowSelector(selector);
  }

  shadowFind(selector) {
    return ShadowSelector(`${this._selector} |> ${selector}`);
  }
}

export default ShadowComponent;
