<script lang="ts">
	import Button from './common/Button.svelte';
	import type { Pagination } from 'api/search';

	interface Props {
		location: Location;
		pagination: Pagination;
	}

	/* -- Runes -- */
	let { location, pagination } = $props<Props>();

	const searchParams = new URLSearchParams(location.search);

	const nextHref = `${location.pathname}?q=${searchParams.get('q')}&page=${pagination.page + 1}`;
	const prevHref = `${location.pathname}?q=${searchParams.get('q')}&page=${pagination.page - 1}`;

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
