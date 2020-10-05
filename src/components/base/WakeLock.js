import { useEffect } from 'react';

function WakeLock() {
  /* -- Hooks -- */
  useEffect(() => {
    let wakeLock;

    async function requestWakeLock() {
      try {
        wakeLock = await navigator.wakeLock.request('screen');
      } catch (err) {
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
