<script lang="ts">
	import { afterUpdate } from 'svelte';
	import { goto } from '$app/navigation';
	import findBook from '$lib/utils/findBook';
	import HammerElement from '$lib/components/common/HammerElement.svelte';
	import headerStore from '$lib/stores/headerStore';
	import requestWakeLock from '$lib/utils/requestWakeLock';
	import ScrollUp from '$lib/components/ScrollUp.svelte';
	import type { HammerAction } from '$lib/types/HammerAction.js';

	/* -- Props & Vars -- */
	export let data;

	const book = findBook(data.book);

	/* -- Lifecycle -- */
	afterUpdate(() => {
		headerStore.set({
			book,
			chapter: data.chapter,
		});
	});

	requestWakeLock();

	/* -- Event Handlers -- */
	/* -- Rendering -- */
	const actions: Array<HammerAction> = [
		{
			callback: (e) => {
				if (e.pointerType === 'mouse') return;

				const chapterNumber = parseInt(data.chapter, 10);

				if (book.chapterCount === chapterNumber) return;

				goto(`/${book.key}/${chapterNumber + 1}`);
			},

			event: 'swipeleft',
		},
		{
			callback: (e) => {
				if (e.pointerType === 'mouse') return;

				const chapterNumber = parseInt(data.chapter, 10);

				if (chapterNumber === 1) return;

				goto(`/${book.key}/${chapterNumber - 1}`);
			},
			event: 'swiperight',
		},
	];
</script>

<div class="passage">
	<HammerElement {actions}>{@html data.passage}</HammerElement>
</div>

<ScrollUp />

<style>
	.passage {
		font-size: 1.25rem;
		max-width: 540px;
		width: 100%;
		margin: 0 auto;

		& p {
			margin-bottom: 1rem;

			&:last-child {
				margin-bottom: 0;
			}
		}
	}

	:global(.verse-num) {
		font-size: smaller;
		font-style: italic;
		vertical-align: super;
	}
</style>
