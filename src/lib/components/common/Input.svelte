<script lang="ts">
	import clsx from 'clsx';
	import type { HTMLInputAttributes } from 'svelte/elements';

	let { class: klass, ...rest }: HTMLInputAttributes = $props();
</script>

<input class={clsx('input', klass)} type="text" {...rest} />

<style>
	.input {
		background-color: var(--neutral-800);
		border: 2px solid var(--neutral-500);
		border-radius: 0.75rem;
		color: var(--neutral-100);
		font-size: 1.25rem;
		height: 48px;
		line-height: 2rem;
		padding-left: 1rem;
		transition: border-color 0.15s;
		width: 100%;

		&:focus {
			border-color: var(--primary-100);
			outline: none;
		}
	}
</style>
