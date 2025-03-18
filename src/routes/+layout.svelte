<script lang="ts">
	import '../app.css';
	import { onNavigate } from '$app/navigation';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import History from '$lib/components/History.svelte';

	/* -- Runes -- */
	let { children } = $props();

	onNavigate((navigation) => {
		if (navigation.to?.url.pathname) {
			localStorage.setItem('prev-location', navigation.to.url.pathname);
		}

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();

				await navigation.complete;
			});
		});
	});
</script>

<div class="container">
	<Header />

	<div class="mx-auto w-full max-w-[800px] p-4">
		{@render children()}
	</div>

	<History />
	<Footer />
</div>

<style>
	.container {
		display: grid;
		grid-template-rows: 3rem 1fr 1.5rem;
		min-height: 100%;
	}
</style>
