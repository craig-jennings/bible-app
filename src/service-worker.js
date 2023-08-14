import { build, files, prerendered, version } from '$service-worker';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';
import { CacheFirst, NetworkOnly } from 'workbox-strategies';
import { ExpirationPlugin } from 'workbox-expiration';
import { googleFontsCache, imageCache, offlineFallback, pageCache, staticResourceCache } from 'workbox-recipes';
import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute, setDefaultHandler } from 'workbox-routing';

const precacheList = [...build, ...files, ...prerendered].map((s) => ({
	url: s,
	revision: version,
}));

setDefaultHandler(new NetworkOnly());

googleFontsCache();
imageCache();
offlineFallback();
pageCache();
precacheAndRoute(precacheList);
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
