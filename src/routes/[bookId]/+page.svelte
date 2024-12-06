<script lang="ts">
	import { page } from '$app/stores';
	import SelectorList from '$lib/components/SelectorList.svelte';
	import SelectorItem from '$lib/components/SelectorListItem.svelte';
	import { findBook } from '$lib/utils/findBook';

	/* -- Runes -- */
	let book = $derived(findBook($page.params.bookId));

	/* -- Event Handlers -- */
</script>

{#if book.chapterCount === 0}
	<div class="text-center">Unknown book</div>
{:else}
	<div class="p-4">
		<SelectorList>
			<!-- eslint-disable-next-line @typescript-eslint/no-unused-vars -->
			{#each Array(book.chapterCount) as _, index}
				<SelectorItem href="/{$page.params.bookId}/{index + 1}">
					{index + 1}
				</SelectorItem>
			{/each}
		</SelectorList>
	</div>
{/if}
