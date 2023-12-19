<script lang="ts">
	import type { HammerAction } from 'types/HammerAction';
	import type Hammer from 'hammerjs';
	import type { Snippet } from 'svelte';

	interface Props {
		actions: Array<HammerAction>;
		children: Snippet;
	}

	/* -- Runes -- */
	let { actions, children } = $props<Props>();

	let hammerEl: HTMLDivElement | undefined = $state();

	$effect(() => {
		let hammerInstance: InstanceType<typeof Hammer>;

		(async () => {
			if (!hammerEl) return;

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
		})();

		return () => hammerInstance.destroy();
	});

	/* -- Event Handlers -- */
</script>

<div bind:this={hammerEl}>
	{@render children()}
</div>
