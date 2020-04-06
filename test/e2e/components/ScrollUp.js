import TestComponent from '../utils/TestComponent';

class ScrollUp extends TestComponent {
  static get testId() {
    return 'scroll-up';
  }

  get button() {
    return this.container;
  }
}

export default ScrollUp;
