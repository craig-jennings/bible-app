<script lang="ts">
	import '../app.css';
	import { onNavigate } from '$app/navigation';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';

	let { children } = $props();

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition?.(async () => {
				resolve();

				await navigation.complete;
			});
		});
	});
</script>

<div class="container">
	<Header />

	<div class="p-4">
		{@render children()}
	</div>

	<Footer />
</div>

<style>
	.container {
		display: grid;
		grid-template-rows: 3rem 1fr 1.5rem;
		min-height: 100%;
	}
</style>
