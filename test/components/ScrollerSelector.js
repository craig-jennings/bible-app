import ShadowComponent from '../utils/ShadowComponent.js';

class ScrollerSelector extends ShadowComponent {
  get button() { return this.container.find('.center-content'); }
}

export default ScrollerSelector;
