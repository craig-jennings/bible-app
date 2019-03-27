import { ClientFunction } from 'testcafe';

const getWindowLocation = ClientFunction(() => window.location);

export {
  getWindowLocation,
};
