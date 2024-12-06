<script lang="ts">
	import { page } from '$app/stores';
	import Passage from '$lib/components/Passage.svelte';
	import Spinner from '$lib/components/Spinner.svelte';

	/* -- Runes -- */
	let { data } = $props();

	/* -- Event Handlers -- */
</script>

{#await data.passagePromise}
	<Spinner fullScreen />
{:then passage}
	<Passage book={$page.params.bookId} chapter={$page.params.chapterId} {passage} />
{:catch}
	<div>Unknown Chapter</div>
{/await}
