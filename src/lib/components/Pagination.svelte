<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Button from './common/Button.svelte';
	import cx from '$lib/utils/cx';
	import type { Pagination } from '$lib/api/search';

	export let pagination: Pagination;

	const dispatch = createEventDispatcher();

	$: classes = cx('flex', 'items-center', 'justify-between', $$restProps.class);
</script>

<div class={classes}>
	<Button disabled={!pagination.hasPrevPage} on:click={() => dispatch('prevclick')}>Previous</Button>

	<div>
		{#if pagination.totalResults > 0}
			{pagination.startRange} - {pagination.endRange} of {pagination.totalResults}
		{/if}
	</div>

	<Button disabled={!pagination.hasNextPage} on:click={() => dispatch('nextclick')}>Next</Button>
</div>
