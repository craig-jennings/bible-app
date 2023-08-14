<script lang="ts">
	import { goto } from '$app/navigation';
	import { navigating, page } from '$app/stores';
	import Button from '$lib/components/common/Button.svelte';
	import Input from '$lib/components/common/Input.svelte';
	import Pagination from '$lib/components/Pagination.svelte';
	import SearchResultListItem from '$lib/components/results/SearchResultListItem.svelte';

	/* -- Props & Vars -- */
	export let data;

	/* -- Lifecycle -- */
	/* -- Event Handlers -- */
	function handleSubmit(e: SubmitEvent) {
		if (!e.target) return;

		const formData = new FormData(e.target as HTMLFormElement);

		goto(`${window.location.pathname}?q=${formData.get('term')}&page=1`);
	}

	function handleNextClick() {
		if (!data.pagination) return;

		goto(`${window.location.pathname}?q=${$page.url.searchParams.get('q')}&page=${data.pagination.page + 1}`);
	}

	function handlePrevClick() {
		if (!data.pagination) return;

		goto(`${window.location.pathname}?q=${$page.url.searchParams.get('q')}&page=${data.pagination.page - 1}`);
	}

	/* -- Rendering -- */
	const term = $page.url.searchParams.get('q') || '';
</script>

<form class="flex gap-2 mb-4" on:submit|preventDefault={handleSubmit}>
	<Input name="term" autofocus placeholder="Search..." value={term} />
	<Button type="submit">Search</Button>
</form>

{#if data.results}
	{#if data.results.length > 0}
		<Pagination
			class="mb-4"
			pagination={data.pagination}
			on:nextclick={handleNextClick}
			on:prevclick={handlePrevClick}
		/>

		{#if $navigating}
			<div class="text-center">Loading...</div>
		{:else}
			<div class="flex flex-col gap-4">
				{#each data.results as result}
					<SearchResultListItem {result} />
				{/each}
			</div>
		{/if}
	{:else}
		<div>No Results</div>
	{/if}
{/if}
