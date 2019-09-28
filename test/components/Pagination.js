import { byTestId, selectorByTestId } from '../utils/selectByTestId';

class Pagination {
  constructor() {
    this.container = selectorByTestId('pagination');
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
