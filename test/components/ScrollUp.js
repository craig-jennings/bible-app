import { selectorByTestId } from '../utils/selectByTestId';

class ScrollUp {
  constructor() {
    this.container = selectorByTestId('scroll-up');
  }

  get button() {
    return this.container;
  }
}

export default ScrollUp;
