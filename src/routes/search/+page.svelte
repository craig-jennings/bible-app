<script lang="ts">
	import { goto } from '$app/navigation';
	import { navigating, page } from '$app/stores';
	import Button from '$lib/components/common/Button.svelte';
	import Input from '$lib/components/common/Input.svelte';
	import Pagination from '$lib/components/Pagination.svelte';
	import SearchResultListItem from '$lib/components/results/SearchResultListItem.svelte';
	import Spinner from '$lib/components/Spinner.svelte';
	import headerStore from '$lib/stores/headerStore.js';
	import { onMount } from 'svelte';

	/* -- Props & Vars -- */
	export let data;

	/* -- Lifecycle -- */
	onMount(() => headerStore.set({}));

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

{#if $navigating && !$navigating?.to?.url.pathname.includes('search')}
	<Spinner fullScreen />
{:else}
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
				<div class="flex justify-center">
					<Spinner />
				</div>
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
	{:else if $navigating}
		<div class="flex justify-center">
			<Spinner />
		</div>
	{/if}
{/if}
