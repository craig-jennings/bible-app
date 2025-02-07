<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';

	let props: HTMLInputAttributes = $props();
</script>

<input type="text" {...props} class={['input', props.class]} />

<style>
	.input {
		background-color: var(--color-zinc-900);
		border: 2px solid var(--color-zinc-700);
		border-radius: 0.75rem;
		color: var(--color-zinc-50);
		font-size: 1.25rem;
		height: 48px;
		line-height: 2rem;
		padding-left: 1rem;
		transition: border-color 150ms var(--ease-out-cubic);
		width: 100%;

		&:focus {
			border-color: var(--color-sky-500);
			outline: none;
		}
	}
</style>
