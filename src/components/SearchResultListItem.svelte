<script lang="ts">
	import findBook from 'utils/findBook';
	import type { SearchResult } from 'api/search';

	interface Props {
		result: SearchResult;
	}

	let { result } = $props<Props>();

	const book = result.reference.slice(0, result.reference.lastIndexOf(' '));

	const bookKey = findBook(book).key;
	const chapter = result.reference.slice(result.reference.lastIndexOf(' ') + 1, result.reference.indexOf(':'));
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
