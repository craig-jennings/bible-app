import TestComponent, { byTestId } from '../utils/TestComponent';

class Header extends TestComponent {
  static get testId() {
    return 'header';
  }

  get book() {
    return this.container.find(byTestId('book'));
  }

  get chapter() {
    return this.container.find(byTestId('chapter'));
  }
}

export default Header;
