<script lang="ts">
	import { onMount } from 'svelte';
	import headerStore from '$lib/stores/headerStore';
	import Input from '$lib/components/common/Input.svelte';
	import NewTestament from '$lib/constants/NewTestament';
	import OldTestament from '$lib/constants/OldTestament';
	import searchBooks from '$lib/utils/searchBooks';
	import SelectorList from '$lib/components/SelectorList.svelte';
	import SelectorListItem from '$lib/components/SelectorListItem.svelte';

	/* -- Props & Vars -- */
	/* -- Lifecycle -- */
	onMount(() => headerStore.set({}));

	/* -- Event Handlers -- */
	/* -- Rendering -- */
	let term = '';

	$: oldTestamentBooks = searchBooks(OldTestament, term.toLowerCase());
	$: newTestamentBooks = searchBooks(NewTestament, term.toLowerCase());
</script>

<!-- svelte-ignore a11y-autofocus -->
<Input class="w-full mb-8" aria-label="Book Search Field" autofocus placeholder="Find Book..." bind:value={term} />

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
