<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import findBook from '$lib/utils/findBook';
	import headerStore from '$lib/stores/headerStore';
	import SelectorItem from '$lib/components/SelectorListItem.svelte';
	import SelectorList from '$lib/components/SelectorList.svelte';

	/* -- Props & Vars -- */
	/* -- Lifecycle -- */
	onMount(() => headerStore.set({ book }));

	/* -- Event Handlers -- */
	/* -- Rendering -- */
	let book = findBook($page.params.book);
</script>

{#if book.chapterCount === 0}
	<div class="text-center">Unknown book</div>
{:else}
	<div class="p-4">
		<SelectorList>
			{#each Array(book.chapterCount) as _, index}
				<SelectorItem href="/{$page.params.book}/{index + 1}">
					{index + 1}
				</SelectorItem>
			{/each}
		</SelectorList>
	</div>
{/if}
