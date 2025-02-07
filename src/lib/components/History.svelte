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

<div class={['background', open && 'open']}></div>

<div class={['container', open && 'open']}>
	<div class="border-color-neutral-700 flex justify-between border-b px-4 py-2">
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

	.background {
		background-color: var(--color-zinc-900);
		display: none;
		inset: 0;
		opacity: 0;
		position: fixed;
		transition:
			display 200ms allow-discrete,
			opacity 200ms var(--ease-out-quint);
		z-index: 0;

		&.open {
			display: block;
			opacity: 1;

			@starting-style {
				opacity: 0;
			}
		}
	}

	.container {
		backdrop-filter: blur(16px);
		background-color: oklch(from var(--color-zinc-900) l c h / 0.8);
		display: none;
		flex-direction: column;
		inline-size: 100%;
		inset: 48px auto 0 0;
		position: fixed;
		transition:
			display 200ms allow-discrete,
			translate 200ms var(--ease-out-quint);
		translate: -100% 0;
		view-transition-name: history;

		&.open {
			display: flex;
			translate: 0;

			@starting-style {
				translate: -100% 0;
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
			border-block-end: 1px solid var(--color-zinc-700);
			font-size: 24px;
			inline-size: 100%;
			padding-inline: 32px;
		}
	}

	.indicator {
		align-items: center;
		background-color: var(--color-zinc-700);
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
