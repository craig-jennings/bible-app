<script>
	import '../app.css';
	import { afterNavigate } from '$app/navigation';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';

	/* -- Props & Vars -- */
	/* -- Lifecycle -- */
	afterNavigate(() => {
		localStorage.setItem('current:path', location.pathname);
	});

	/* -- Event Handlers -- */
	/* -- Rendering -- */
</script>

<div class="container">
	<Header />

	<div class="p-4">
		<slot />
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
