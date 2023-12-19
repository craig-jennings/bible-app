<script lang="ts">
	import Input from 'components/common/Input.svelte';
	import NewTestament from 'constants/NewTestament';
	import OldTestament from 'constants/OldTestament';
	import searchBooks from 'utils/searchBooks';
	import SelectorList from 'components/SelectorList.svelte';
	import SelectorListItem from 'components/SelectorListItem.svelte';

	/* -- Runes -- */
	let term = $state('');

	let newTestamentBooks = $derived(searchBooks(NewTestament, term.toLowerCase()));
	let oldTestamentBooks = $derived(searchBooks(OldTestament, term.toLowerCase()));

	/* -- Event Handlers -- */
</script>

<Input
	class="w-full mb-8"
	aria-label="Book Search Field"
	autofocus
	oninput={(e) => (term = e.currentTarget.value)}
	placeholder="Find Book..."
	value={term}
/>

{#if oldTestamentBooks.length > 0}
	<h1 class="text-center text-3xl font-bold mb-6">Old Testament</h1>
{/if}

<SelectorList>
	{#each oldTestamentBooks as otBook}
		<SelectorListItem href="/{otBook.key}">{otBook.label}</SelectorListItem>
	{/each}
</SelectorList>

{#if newTestamentBooks.length > 0}
	<h1 class="text-center text-3xl font-bold mt-8 mb-6">New Testament</h1>
{/if}

<SelectorList>
	{#each newTestamentBooks as ntBook}
		<SelectorListItem href="/{ntBook.key}">{ntBook.label}</SelectorListItem>
	{/each}
</SelectorList>
