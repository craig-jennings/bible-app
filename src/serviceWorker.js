importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.2/workbox-sw.js');

const { CacheableResponsePlugin } = workbox.cacheableResponse;
const { CacheFirst } = workbox.strategies;
const { ExpirationPlugin } = workbox.expiration;
const { googleFontsCache, imageCache, offlineFallback, pageCache, staticResourceCache } = workbox.recipes;
const { NetworkOnly } = workbox.strategies;
const { precacheAndRoute } = workbox.precaching;
const { registerRoute } = workbox.routing;
const { setDefaultHandler } = workbox.routing;

setDefaultHandler(new NetworkOnly());

googleFontsCache();
imageCache();
offlineFallback();
pageCache();
precacheAndRoute(self.__WB_MANIFEST);
staticResourceCache();

/* -- ESV API Cache -- */
const CacheTime = {
  ONE_YEAR: 60 * 60 * 24 * 365,
};

registerRoute(
  ({ url }) => url.origin === 'https://api.esv.org',

  new CacheFirst({
    cacheName: 'esv-api',

    plugins: [
      new CacheableResponsePlugin({ statuses: [0, 200] }),

      new ExpirationPlugin({
        maxAgeSeconds: CacheTime.ONE_YEAR,
        maxEntries: 50,
      }),
    ],
  }),
);
