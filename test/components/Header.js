import { byTestId, selectorByTestId } from '../utils/selectByTestId';

class Header {
  constructor() {
    this.container = selectorByTestId('header');
  }

  get book() {
    return this.container.find(byTestId('book'));
  }

  get chapter() {
    return this.container.find(byTestId('chapter'));
  }
}

export default Header;
