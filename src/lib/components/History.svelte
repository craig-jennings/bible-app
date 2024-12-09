<script lang="ts">
	import Close from './icons/Close.svelte';
	import History from './icons/History.svelte';
	import { onNavigate } from '$app/navigation';
	import { historyStore } from '$lib/stores/historyStore.svelte';

	/* -- Runes -- */
	let open = $state(false);

	let entries = $derived.by(() => {
		return historyStore.entries.slice(1);
	});

	onNavigate(() => {
		open = false;
	});

	/* -- Event Handlers -- */
</script>

{#if entries.length > 0}
	<button class="indicator" onclick={() => (open = !open)}>
		<History />
	</button>
{/if}

<div class="container" class:open>
	<div class="flex justify-between border-b border-neutral-500 px-4 py-2">
		<h2>History</h2>
		<button aria-label="Close History" onclick={() => (open = false)} type="button"><Close /></button>
	</div>

	{#each entries as entry}
		<a href="/{entry.book.key}/{entry.chapter}">{entry.book.label} {entry.chapter}</a>
	{/each}
</div>

<style>
	:global(html:has(.open)) {
		overflow: hidden;
	}

	::view-transition-group(history) {
		animation: none;
	}

	.container {
		backdrop-filter: blur(12px);
		background-color: oklch(from var(--neutral-800) l c h / 0.8);
		display: none;
		flex-direction: column;
		inline-size: 100%;
		inset: 48px auto 0 0;
		position: fixed;
		transform: translateX(-100%);
		transition: all 0.15s var(--easing-1) allow-discrete;
		view-transition-name: history;

		&.open {
			display: flex;
			transform: translateX(0%);

			@starting-style {
				transform: translateX(-100%);
			}
		}

		& h2 {
			align-content: center;
			block-size: 48px;
			font-size: 32px;
		}

		& a {
			align-content: center;
			block-size: 48px;
			border-block-end: 1px solid var(--neutral-500);
			font-size: 24px;
			inline-size: 100%;
			padding-inline: 32px;
		}
	}

	.indicator {
		align-items: center;
		background-color: var(--neutral-500);
		block-size: 48px;
		border-radius: 0 32px 32px 0;
		display: flex;
		inline-size: 36px;
		inset: auto auto 28px 0;
		justify-content: center;
		opacity: 0.9;
		position: fixed;
	}
</style>
