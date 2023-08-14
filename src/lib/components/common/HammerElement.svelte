<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import type { HammerAction } from '$lib/types/HammerAction';

	/* -- Props & Vars -- */
	export let actions: Array<HammerAction> = [];

	let hammerEl: HTMLDivElement;
	/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
	let hammerInstance: any;

	/* -- Lifecycle -- */
	onMount(async () => {
		const { default: Hammer } = await import('hammerjs');

		hammerInstance = new Hammer(hammerEl, {
			cssProps: {
				contentZooming: 'none',
				tapHighlightColor: 'rgba(0,0,0,0)',
				touchCallout: 'none',
				touchSelect: 'none',
				userDrag: 'none',
				userSelect: 'auto',
			},

			recognizers: [
				[
					Hammer.Swipe,
					{
						direction: Hammer.DIRECTION_LEFT | Hammer.DIRECTION_RIGHT,
						threshold: 100,
						velocity: 0.5,
					},
				],
			],
		});

		actions.forEach(({ callback, event }) => hammerInstance.on(event, callback));
	});

	onDestroy(() => hammerInstance?.destroy());

	/* -- Event Handlers -- */
	/* -- Rendering -- */
</script>

<div bind:this={hammerEl} class={$$props.class}>
	<slot />
</div>
