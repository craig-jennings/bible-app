import { onMount } from 'svelte';
import type { Action } from 'svelte/action';

interface Parameters {
	onSwipeLeft?: () => void;
	onSwipeRight?: () => void;
}

export const swipable: Action<HTMLElement, Parameters> = (node, { onSwipeLeft, onSwipeRight }) => {
	function isSwipable(target: EventTarget | null) {
		let currentNode = target;

		while (currentNode !== null) {
			if (currentNode instanceof HTMLElement && currentNode.dataset.swipable === 'false') {
				return false;
			}

			currentNode = (currentNode as HTMLElement).parentNode as Element | null;
		}

		return true;
	}

	onMount(() => {
		let currentTranslate = 0;
		let currentX = 0;
		let dimensions: DOMRect = new DOMRect();
		let isInsideDialog = false;
		let prevX = 0;

		node.style.touchAction = 'none';

		const handlePointerDown = (e: PointerEvent) => {
			if (!isSwipable(e.target)) return;

			dimensions = node.getBoundingClientRect();

			if (
				e.clientX < dimensions.left ||
				e.clientX > dimensions.right ||
				e.clientY < dimensions.top ||
				e.clientY > dimensions.bottom
			) {
				isInsideDialog = false;

				return;
			}

			currentTranslate = 0;
			currentX = e.clientX;
			node.setPointerCapture(e.pointerId);
			isInsideDialog = true;
			prevX = e.clientX;

			node.style.setProperty('--translate-duration', '0');
		};

		const handlePointerMove = (e: PointerEvent) => {
			if (!isInsideDialog) return;
			if (!isSwipable(e.target)) return;

			prevX = currentX;

			currentX = e.clientX;

			if (currentX > prevX) {
				currentTranslate = Math.min(0, (currentTranslate || 0) + (currentX - prevX));
			} else {
				currentTranslate = Math.max(dimensions.width * -1, (currentTranslate || 0) - (prevX - currentX));
			}

			requestAnimationFrame(() => {
				node.style.setProperty('--translate-x', `${currentTranslate}px`);
			});
		};

		const handlePointerUp = (e: PointerEvent) => {
			if (!isInsideDialog) return;
			if (!isSwipable(e.target)) return;

			node.releasePointerCapture(e.pointerId);

			requestAnimationFrame(() => {
				node.style.removeProperty('--translate-duration');
				node.style.removeProperty('--translate-x');

				if (currentX < prevX) {
					onSwipeLeft?.();
				} else {
					onSwipeRight?.();
				}
			});
		};

		node.addEventListener('pointercancel', handlePointerUp, true);
		node.addEventListener('pointerdown', handlePointerDown, true);
		node.addEventListener('pointermove', handlePointerMove, true);
		node.addEventListener('pointerup', handlePointerUp, true);

		return () => {
			node.removeEventListener('pointercancel', handlePointerUp, true);
			node.removeEventListener('pointerdown', handlePointerDown, true);
			node.removeEventListener('pointermove', handlePointerMove, true);
			node.removeEventListener('pointerup', handlePointerUp, true);
		};
	});
};
