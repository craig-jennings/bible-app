import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import svg from '@poppanator/sveltekit-svg';

export default defineConfig({
	envPrefix: 'PUBLIC_',
	plugins: [tailwindcss(), sveltekit(), svg()],
});
