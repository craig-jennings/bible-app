<script lang="ts">
	import Input from '$lib/components/common/Input.svelte';
	import SelectorList from '$lib/components/SelectorList.svelte';
	import SelectorListItem from '$lib/components/SelectorListItem.svelte';
	import { NewTestament } from '$lib/constants/NewTestament';
	import { OldTestament } from '$lib/constants/OldTestament';
	import searchBooks from '$lib/utils/searchBooks';

	/* -- Runes -- */
	let term = $state('');

	let newTestamentBooks = $derived(searchBooks(NewTestament, term.toLowerCase()));
	let oldTestamentBooks = $derived(searchBooks(OldTestament, term.toLowerCase()));

	/* -- Event Handlers -- */
</script>

<Input
	aria-label="Book Search Field"
	class="mb-8 w-full"
	oninput={(e) => (term = e.currentTarget.value)}
	placeholder="Find Book..."
	value={term}
/>

{#if oldTestamentBooks.length > 0}
	<h1 class="mb-6 text-center text-3xl font-bold">Old Testament</h1>
{/if}

<SelectorList>
	{#each oldTestamentBooks as otBook (otBook.key)}
		<SelectorListItem href="/{otBook.key}">{otBook.label}</SelectorListItem>
	{/each}
</SelectorList>

{#if newTestamentBooks.length > 0}
	<h1 class="mt-8 mb-6 text-center text-3xl font-bold">New Testament</h1>
{/if}

<SelectorList>
	{#each newTestamentBooks as ntBook (ntBook.key)}
		<SelectorListItem href="/{ntBook.key}">{ntBook.label}</SelectorListItem>
	{/each}
</SelectorList>
