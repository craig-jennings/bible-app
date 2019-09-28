import { Selector } from 'testcafe';

const byTestId = (testId) => `[data-testid=${testId}]`;

const selectorByTestId = (testId) => Selector(byTestId(testId));

export { byTestId, selectorByTestId };
