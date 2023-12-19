<script lang="ts">
	import cx from 'utils/cx';
	import findBook from 'utils/findBook';
	import Search from './icons/Search.svelte';

	interface Props {
		book?: string;
		chapter?: string;
		sticky?: boolean;
	}

	const { book: bookKey, chapter, sticky } = $props<Props>();

	let book = $derived(bookKey ? findBook(bookKey) : null);
	let classes = $derived(cx('container', { stuck: sticky }));
</script>

<div class={classes}>
	<h1 class="text-[32px] text">
		<div class="flex items-center justify-center">
			<a href="/">Bible</a>

			{#if book}
				<span class="mx-2">&gt;</span>
				<a class="book-name" href={`/${book.key}`}>{book.label}</a>
			{/if}

			{#if chapter}
				<span class="mx-2">&gt;</span>
				<span>{chapter}</span>
			{/if}
		</div>
	</h1>

	<div class="flex items-center justify-center">
		<a href="/search">
			<Search />
		</a>
	</div>
</div>

<style>
	.container {
		background-color: var(--neutral500);
		display: flex;
		font-weight: bold;
		justify-content: space-between;
		padding: 3px 1rem 0 1rem;
		width: 100%;

		&.stuck {
			position: sticky;
			top: 0;
			z-index: 10;
		}
	}

	@media screen and (max-width: 767px) {
		.book-name {
			max-width: 170px;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
	}
</style>
