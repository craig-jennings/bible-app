import { useEffect } from 'react';
import Hammer from 'hammerjs';

function useHammerEffect(ref, actions = []) {
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

    actions.forEach(({ action, callback }) => {
      hammerInstance.on(action, (e) => {
        if (e.pointerType === 'mouse') return;

        callback();
      });
    });

    return () => hammerInstance.destroy();
  });
}

export default useHammerEffect;
