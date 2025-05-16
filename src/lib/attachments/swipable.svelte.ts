import type { Attachment } from 'svelte/attachments';

interface Options {
	onSwipeLeft?: () => void;
	onSwipeRight?: () => void;
}

export function swipable(options: Options = {}) {
	const attachment: Attachment<HTMLElement> = (node) => {
		let currentTranslate = 0;
		let currentX = 0;
		let dimensions: DOMRect = new DOMRect();
		let prevX = 0;

		node.style.touchAction = 'none';

		const handlePointerDown = (e: PointerEvent) => {
			if (e.pointerType !== 'touch') return;
			if (!isSwipable(e.target)) return;

			dimensions = node.getBoundingClientRect();

			if (
				e.clientX < dimensions.left ||
				e.clientX > dimensions.right ||
				e.clientY < dimensions.top ||
				e.clientY > dimensions.bottom
			) {
				return;
			}

			currentTranslate = 0;
			currentX = e.clientX;
			node.setPointerCapture(e.pointerId);
			prevX = e.clientX;

			node.style.setProperty('--translate-duration', '0');

			node.addEventListener('pointercancel', handlePointerUp, true);
			node.addEventListener('pointermove', handlePointerMove, true);
			node.addEventListener('pointerup', handlePointerUp, true);
		};

		const handlePointerMove = (e: PointerEvent) => {
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
			node.releasePointerCapture(e.pointerId);

			requestAnimationFrame(() => {
				node.style.removeProperty('--translate-duration');
				node.style.removeProperty('--translate-x');

				if (currentX < prevX) {
					options.onSwipeLeft?.();
				} else {
					options.onSwipeRight?.();
				}
			});

			node.removeEventListener('pointercancel', handlePointerUp, true);
			node.removeEventListener('pointermove', handlePointerMove, true);
			node.removeEventListener('pointerup', handlePointerUp, true);
		};

		node.addEventListener('pointerdown', handlePointerDown, true);

		return () => {
			node.removeEventListener('pointercancel', handlePointerUp, true);
			node.removeEventListener('pointerdown', handlePointerDown, true);
			node.removeEventListener('pointermove', handlePointerMove, true);
			node.removeEventListener('pointerup', handlePointerUp, true);
		};
	};

	return attachment;
}

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
