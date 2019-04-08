import ShadowComponent from '../utils/ShadowComponent.js';

class Header extends ShadowComponent {
  get book() { return this.container.find('.book'); }

  get chapter() { return this.container.find('.chapter'); }
}

export default Header;
