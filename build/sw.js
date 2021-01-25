importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.0.2/workbox-sw.js');

workbox.precaching.precacheAndRoute([{"revision":"0474e490e1ad1bf2d9f28a24072a0610","url":"dist/index.js"},{"revision":"d583265e4c9175970829363899bb007f","url":"images/favicon.ico"},{"revision":"ec4293dfe1e55fc8d052fb6c2b220622","url":"images/icon-192.png"},{"revision":"78b5ed42e55f3decee4197a92ad12649","url":"images/icon-512.png"},{"revision":"e592f7193e04e7349352b9b8697eacf5","url":"index.html"},{"revision":"9812f09f58ced21e79c9643728b8e40c","url":"manifest.json"},{"revision":"b6216d61c03e6ce0c9aea6ca7808f7ca","url":"robots.txt"}]);

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
