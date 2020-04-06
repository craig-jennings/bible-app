import { Selector } from 'testcafe';

const byTestId = (testId) => `[data-testid=${testId}]`;

const getSelectorByTestId = (testId) => Selector(byTestId(testId));

class TestComponent {
  constructor() {
    this.container = getSelectorByTestId(Object.getPrototypeOf(this).constructor.testId);
  }

  static get testId() {
    throw new Error("static property 'testId' must be defined");
  }
}

export default TestComponent;

export { byTestId, getSelectorByTestId };
