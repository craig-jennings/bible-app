<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	interface Props extends HTMLButtonAttributes {
		children: Snippet;
	}

	const { children, ...rest }: Props = $props();
</script>

<button {...rest} class={['button', rest.class]}>
	{@render children()}
</button>

<style>
	.button {
		background-color: var(--color-zinc-900);
		border: 2px solid var(--color-zinc-600);
		border-radius: 0.75rem;
		color: var(--color-zinc-50);
		height: 48px;
		padding: 0.5rem 1rem;
		transition: background-color 100ms var(--ease-out-cubic);

		&:focus,
		&:hover {
			background-color: var(--color-zinc-600);
			cursor: pointer;
			outline: none;
		}
	}

	.button[disabled] {
		background-color: inherit;
		border-color: var(--color-color-neutral-900);
		color: var(--color-zinc-700);

		&:focus,
		&:hover {
			background-color: inherit;
			cursor: not-allowed;
		}
	}
</style>
