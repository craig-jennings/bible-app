<script lang="ts">
	import type { SearchResult } from '$lib/api/search';
	import { findBook } from '$lib/utils/findBook';

	interface Props {
		result: SearchResult;
	}

	let { result }: Props = $props();

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
		border: 1px solid var(--color-zinc-700);
		border-radius: 0.5rem;
		padding: 0.25rem 0.5rem;
		transition: background-color 100ms var(--ease-out-quart);

		&:hover {
			background-color: oklch(from white l c h / 0.1);
		}
	}

	.link {
		color: inherit;
		display: block;
		font-style: italic;
		text-decoration: none;
	}
</style>
