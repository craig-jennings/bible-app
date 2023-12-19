<script lang="ts">
	import findBook from 'utils/findBook';
	import SelectorItem from 'components/SelectorListItem.svelte';
	import SelectorList from 'components/SelectorList.svelte';
	import type { BibleBook } from 'types/BibleBook';

	interface Props {
		book: BibleBook['key'];
	}

	/* -- Runes -- */
	const { book: bookKey } = $props<Props>();

	let book = $derived(findBook(bookKey));
</script>

{#if book.chapterCount === 0}
	<div class="text-center">Unknown book</div>
{:else}
	<div class="p-4">
		<SelectorList>
			{#each Array(book.chapterCount) as _, index}
				<SelectorItem href="/{bookKey}/{index + 1}">
					{index + 1}
				</SelectorItem>
			{/each}
		</SelectorList>
	</div>
{/if}
