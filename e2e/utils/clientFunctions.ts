import { ClientFunction } from 'testcafe';

const getWindowLocation = ClientFunction(() => window.location);

const getWindowScroll = ClientFunction(() => ({
  scrollX: window.scrollX,
  scrollY: window.scrollY,
}));

interface WindowScrollOptions {
  behavior?: ScrollBehavior;
  left?: number;
  top: number;
}

const setWindowScroll = ({ behavior = 'auto', left = 0, top }: WindowScrollOptions) =>
  ClientFunction(
    () => {
      window.scrollTo({ behavior, left, top });
    },
    {
      dependencies: {
        behavior,
        left,
        top,
      },
    },
  )();

export { getWindowLocation, getWindowScroll, setWindowScroll };
