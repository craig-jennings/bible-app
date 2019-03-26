import ShadowSelector from './ShadowSelector.js';

class ShadowComponent {
  constructor(selector) {
    this.container = ShadowSelector(selector);
  }
}

export default ShadowComponent;
