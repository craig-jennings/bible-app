import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
	adapter: netlify(),
	integrations: [svelte(), tailwind({ applyBaseStyles: false })],
	output: 'hybrid',
});
