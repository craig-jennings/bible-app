import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	envPrefix: 'PUBLIC_',
	plugins: [sveltekit(), tailwindcss()],
});
