<script lang="ts">
	import Passage from '$lib/components/Passage.svelte';
	import Spinner from '$lib/components/Spinner.svelte';

	/* -- Runes -- */
	let { params } = $props();

	/* -- Event Handlers -- */
</script>

<svelte:boundary>
	<Passage bookId={params.bookId} chapter={params.chapterId} />

	{#snippet pending()}
		<Spinner fullScreen />
	{/snippet}
</svelte:boundary>
