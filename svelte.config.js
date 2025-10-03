import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
	compilerOptions: {
		experimental: {
			async: true,
		},
	},

	kit: {
		adapter: adapter({
			fallback: 'index.html',
		}),

		alias: {
			$common: './src/lib/components/common/',
		},

		serviceWorker: {
			register: false,
		},
	},

	preprocess: vitePreprocess(),
};
