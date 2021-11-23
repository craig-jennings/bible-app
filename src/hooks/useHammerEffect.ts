import { RefObject, useEffect } from 'react';
import Hammer from 'hammerjs';

interface HammerAction {
  action: string;
  callback: () => void;
}

function useHammerEffect(ref: RefObject<HTMLElement>, actions: HammerAction[] = []) {
  useEffect(() => {
    if (!ref.current) return undefined;

    const hammerInstance = new Hammer(ref.current, {
      cssProps: {
        userSelect: 'auto',
      },

      recognizers: [
        [
          Hammer.Swipe,
          {
            direction: Hammer.DIRECTION_LEFT | Hammer.DIRECTION_RIGHT, // eslint-disable-line no-bitwise
            threshold: 100,
            velocity: 0.5,
          },
        ],
      ],
    });

    actions.forEach(({ action, callback }: { action: any; callback: () => void }) => {
      hammerInstance.on(action, (e: { pointerType: string }) => {
        if (e.pointerType === 'mouse') return;

        callback();
      });
    });

    return () => hammerInstance.destroy();
  });
}

export default useHammerEffect;
