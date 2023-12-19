<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
	}

	const { children } = $props<Props>();
</script>

<div class="selector-list">
	{@render children()}
</div>

<style>
	.selector-list {
		display: grid;
		gap: 1rem;
		grid-auto-rows: 96px;
		grid-template-columns: repeat(auto-fill, 96px);
		justify-content: center;
		margin: 0 auto;
		width: 100%;
	}
</style>
