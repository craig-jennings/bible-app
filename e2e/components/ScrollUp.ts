import TestComponent from '../utils/TestComponent';

class ScrollUp extends TestComponent {
  get button() {
    return this.container;
  }
}

export default new ScrollUp('scroll-up');
export { ScrollUp };
