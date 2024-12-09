<script lang="ts">
	import type { SVGAttributes } from 'svelte/elements';

	/* -- Runes -- */
	let { ...rest }: SVGAttributes<SVGElement> = $props();

	/* -- Event Handlers -- */
</script>

<svg
	fill="currentColor"
	height="24px"
	viewBox="0 -960 960 960"
	width="24px"
	xmlns="http://www.w3.org/2000/svg"
	{...rest}
>
	<path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
</svg>
