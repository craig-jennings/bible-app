import ShadowComponent from '../utils/ShadowComponent.js';

class PaginationComponent extends ShadowComponent {
  get nextBtn() { return this.container.find('button').nth(1); }

  get prevBtn() { return this.container.find('button').nth(0); }

  get range() { return this.container.find('.range'); }
}

export default PaginationComponent;
