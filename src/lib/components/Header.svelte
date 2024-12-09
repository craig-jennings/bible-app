<script lang="ts">
	import Search from './icons/Search.svelte';
	import { page } from '$app/stores';
	import { findBook } from '$lib/utils/findBook';

	/* -- Runes -- */
	let book = $derived($page.params.bookId ? findBook($page.params.bookId) : null);

	/* -- Event Handlers -- */
</script>

<div class="container" class:stuck={!!$page.params.chapterId}>
	<h1 class="text text-[32px]">
		<div class="flex items-center justify-center">
			<a href="/">Bible</a>

			{#if book}
				<span class="mx-2">&gt;</span>
				<a class="book-name" href={`/${book.key}`}>{book.label}</a>
			{/if}

			{#if $page.params.chapterId}
				<span class="mx-2">&gt;</span>
				<span>{$page.params.chapterId}</span>
			{/if}
		</div>
	</h1>

	<div class="flex items-center justify-center">
		<a aria-label="Search" href="/search">
			<Search />
		</a>
	</div>
</div>

<style>
	.container {
		background-color: var(--neutral-500);
		display: flex;
		font-weight: bold;
		justify-content: space-between;
		padding: 3px 1rem 0 1rem;
		width: 100%;

		&.stuck {
			position: sticky;
			top: 0;
			z-index: 1;
		}
	}

	.book-name {
		max-width: 170px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;

		@media (--md-screen) {
			overflow: auto;
		}
	}
</style>
