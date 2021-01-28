import { Selector } from 'testcafe';

const byTestId = (testId: string) => `[data-testid=${testId}]`;

const getSelectorByTestId = (testId: string) => Selector(byTestId(testId));

class TestComponent {
  public readonly container: Selector;
  public readonly testId: string;

  constructor(testId: string) {
    this.container = getSelectorByTestId(testId);
    this.testId = testId;
  }
}

export default TestComponent;
export { byTestId, getSelectorByTestId };
