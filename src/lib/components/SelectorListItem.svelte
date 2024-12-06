<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
		href: string;
	}

	const { children, href }: Props = $props();
</script>

<a class="selector-list-item" {href}>
	{@render children()}
</a>

<style>
	.selector-list-item {
		align-items: center;
		border: 1px solid var(--neutral-500);
		border-radius: 50%;
		color: inherit;
		display: flex;
		justify-content: center;
		overflow: hidden;
		text-align: center;
		text-decoration: none;
		transition: background-color 0.1s ease-in-out;

		&:hover,
		&:focus {
			background-color: var(--neutral-500);
			outline: none;
			text-decoration: none;
		}
	}
</style>
