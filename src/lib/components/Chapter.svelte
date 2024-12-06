<script lang="ts">
	import SelectorList from '$lib/components/SelectorList.svelte';
	import SelectorItem from '$lib/components/SelectorListItem.svelte';
	import type { BibleBook } from '$lib/types/BibleBook';
	import { findBook } from '$lib/utils/findBook';

	interface Props {
		book: BibleBook['key'];
	}

	/* -- Runes -- */
	let { book: bookKey }: Props = $props();

	let book = $derived(findBook(bookKey));
</script>

{#if book.chapterCount === 0}
	<div class="text-center">Unknown book</div>
{:else}
	<div class="p-4">
		<SelectorList>
			<!-- eslint-disable-next-line @typescript-eslint/no-unused-vars -->
			{#each Array(book.chapterCount) as _, index}
				<SelectorItem href="/{bookKey}/{index + 1}">
					{index + 1}
				</SelectorItem>
			{/each}
		</SelectorList>
	</div>
{/if}
