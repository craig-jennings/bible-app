import TestComponent, { byTestId } from '../utils/TestComponent';

class Pagination extends TestComponent {
  static get testId() {
    return 'pagination';
  }

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

export default Pagination;
