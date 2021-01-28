import TestComponent, { byTestId } from '../utils/TestComponent';

class Header extends TestComponent {
  get book() {
    return this.container.find(byTestId('book'));
  }

  get chapter() {
    return this.container.find(byTestId('chapter'));
  }
}

export default new Header('header');
export { Header };
