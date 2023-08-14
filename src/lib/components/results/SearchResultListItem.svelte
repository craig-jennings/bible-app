<script lang="ts">
	import findBook from '$lib/utils/findBook';
	import type { SearchResult } from '$lib/api/search';

	export let result: SearchResult;

	let chapter: string;
	let bookKey: string;

	$: {
		const book = result.reference.slice(0, result.reference.lastIndexOf(' '));

		bookKey = findBook(book).key;
		chapter = result.reference.slice(result.reference.lastIndexOf(' ') + 1, result.reference.indexOf(':'));
	}
</script>

<div class="container">
	<a class="link" href="/{bookKey}/{chapter}">
		<div>{result.content}</div>
		<div class="underline">{result.reference}</div>
	</a>
</div>

<style>
	.container {
		border-radius: 0.5rem;
		border: 1px solid var(--neutral500);
		padding: 0.25rem 0.5rem;
	}

	.link {
		color: inherit;
		display: block;
		font-style: italic;
		text-decoration: none;
	}
</style>
