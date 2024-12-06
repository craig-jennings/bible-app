<script lang="ts">
	import Button from './common/Button.svelte';
	import { page } from '$app/stores';
	import type { Pagination } from '$lib/api/search';

	interface Props {
		pagination: Pagination;
	}

	/* -- Runes -- */
	let { pagination }: Props = $props();

	const nextHref = `${$page.url.pathname}?q=${$page.url.searchParams.get('q')}&page=${pagination.page + 1}`;
	const prevHref = `${$page.url.pathname}?q=${$page.url.searchParams.get('q')}&page=${pagination.page - 1}`;

	/* -- Event Handlers -- */
</script>

<div class="flex items-center justify-between">
	<a href={prevHref}>
		<Button disabled={!pagination.hasPrevPage}>Previous</Button>
	</a>

	<div>
		{#if pagination.totalResults > 0}
			{pagination.startRange} - {pagination.endRange} of {pagination.totalResults}
		{/if}
	</div>

	<a href={nextHref}>
		<Button disabled={!pagination.hasNextPage}>Next</Button>
	</a>
</div>
