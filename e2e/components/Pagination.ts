import TestComponent, { byTestId } from '../utils/TestComponent';

class Pagination extends TestComponent {
  get nextBtn() {
    return this.container.find(byTestId('next-btn'));
  }

  get prevBtn() {
    return this.container.find(byTestId('prev-btn'));
  }

  get range() {
    return this.container.find(byTestId('range'));
  }
}

export default new Pagination('pagination');
export { Pagination };
