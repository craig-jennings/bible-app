importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.0.2/workbox-sw.js');

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

workbox.recipes.googleFontsCache();
workbox.recipes.imageCache();
workbox.recipes.offlineFallback({ pageFallback: 'index.html' });
workbox.recipes.pageCache();
workbox.recipes.staticResourceCache();

const CacheTime = {
  THIRTY_DAYS: 30 * 24 * 60 * 60,
};

/* -- ESV API Cache -- */
workbox.routing.registerRoute(
  ({ url }) => url.origin === 'https://api.esv.org',

  new workbox.strategies.CacheFirst({
    cacheName: 'esv-api',

    plugins: [
      new workbox.cacheableResponse.CacheableResponsePlugin({ statuses: [0, 200] }),

      new workbox.expiration.ExpirationPlugin({
        maxAgeSeconds: CacheTime.THIRTY_DAYS,
        maxEntries: 50,
      }),
    ],
  }),
);

/* Handle update events */
addEventListener('message', (event) => {
  if (event.data?.type === 'SKIP_WAITING') {
    skipWaiting();
  }
});
