<script lang="ts">
	import { page } from '$app/stores';
	import Button from '$lib/components/common/Button.svelte';
	import Input from '$lib/components/common/Input.svelte';
	import Pagination from '$lib/components/Pagination.svelte';
	import SearchResultListItem from '$lib/components/SearchResultListItem.svelte';

	/* -- Runes -- */
	let { data } = $props();

	/* -- Event Handlers -- */
</script>

<form class="mb-4 flex gap-2">
	<Input autofocus name="q" placeholder="Search..." value={$page.url.searchParams.get('q')} />
	<Button>Search</Button>
	<input name="page" type="hidden" value={$page.url.searchParams.get('page') || '1'} />
</form>

{#await data.searchPromise then { pagination, results }}
	{#if results && results.length > 0}
		<div class="mb-4">
			<Pagination {pagination} />
		</div>

		<div class="flex flex-col gap-4">
			{#each results as result}
				<SearchResultListItem {result} />
			{/each}
		</div>
	{:else if results && results.length === 0}
		<div>No Results</div>
	{/if}
{/await}
