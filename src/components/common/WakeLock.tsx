import { useEffect } from 'react';

interface IWakeLock {
  release: () => void;
}

interface INavigatorWakeLock {
  request: (x: string) => Promise<IWakeLock>;
}

declare global {
  interface Navigator {
    wakeLock: INavigatorWakeLock;
  }
}

function WakeLock() {
  /* -- Hooks -- */
  useEffect(() => {
    let wakeLock: IWakeLock;

    async function requestWakeLock() {
      try {
        wakeLock = await navigator.wakeLock.request('screen');
      } catch (err: any) {
        console.error(`${err.name}, ${err.message}`);
      }
    }

    requestWakeLock();

    return () => {
      if (wakeLock) {
        wakeLock.release();
      }
    };
  }, []);

  /* -- Event Handlers -- */
  /* -- Rendering -- */
  return null;
}

export default WakeLock;
