<script lang="ts">
	import cx from '$lib/utils/cx';
	import headerStore from '$lib/stores/headerStore';
	import Search from './icons/Search.svelte';

	$: classes = cx('container', {
		'sticky top-0 z-10': $headerStore.sticky,
	});
</script>

<div class={classes}>
	<h1 class="text-[32px]">
		<div class="flex items-center justify-center">
			<a href="/">Bible</a>

			{#if $headerStore.book}
				<span class="mx-2">&gt;</span>
				<a class="book-name" href={`/${$headerStore.book.key}`}>{$headerStore.book.label}</a>
			{/if}

			{#if $headerStore.chapter}
				<span class="mx-2">&gt;</span>
				<span>{$headerStore.chapter}</span>
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
		padding: 0 1rem;
		width: 100%;
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
