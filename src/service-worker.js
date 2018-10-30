/* eslint-disable no-restricted-globals */
/* global workbox */
const CacheTimes = {
  ONE_YEAR: 60 * 60 * 24 * 365,
  THIRTY_DAYS: 60 * 60 * 24 * 30,
};

workbox.core.setCacheNameDetails({
  prefix: 'wishlist',
  suffix: 'v1',
});

workbox.precaching.precacheAndRoute(self.__precacheManifest || []);

/* -- Vendor Cache -- */
workbox.routing.registerRoute(
  /^https:\/\/stackpath\.bootstrapcdn\.com/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'vendor-cache',
  }),
);

/* -- Images -- */
workbox.routing.registerRoute(
  /\.(?:png|gif|jpg|jpeg|svg)$/,
  workbox.strategies.cacheFirst({
    cacheName: 'images',
    plugins: [
      new workbox.expiration.Plugin({
        maxAgeSeconds: CacheTimes.THIRTY_DAYS,
      }),
    ],
  }),
);

// TODO
/* -- Google Font Cache -- */
// workbox.routing.registerRoute(
//   /^https:\/\/fonts\.googleapis\.com/,
//   workbox.strategies.staleWhileRevalidate({
//     cacheName: 'google-fonts-stylesheets',
//   }),
// );

// workbox.routing.registerRoute(
//   /^https:\/\/fonts\.gstatic\.com/,
//   workbox.strategies.cacheFirst({
//     cacheName: 'google-fonts-webfonts',
//     plugins: [
//       new workbox.cacheableResponse.Plugin({
//         statuses: [0, 200],
//       }),

//       new workbox.expiration.Plugin({
//         maxAgeSeconds: CacheTimes.ONE_YEAR,
//         maxEntries: 30,
//       }),
//     ],
//   }),
// );

/* -- SPA Routing -- */
workbox.routing.registerNavigationRoute('/index.html');

/* -- Message Handling -- */
self.addEventListener('message', ({ data }) => {
  switch (data.action) {
    case 'skipWaiting':
      self.skipWaiting();

      break;

    default:
  }
});
