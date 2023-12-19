<script lang="ts">
	import cx from 'utils/cx';

	interface Props {
		fullScreen?: boolean;
	}

	let { fullScreen = false } = $props<Props>();
</script>

<div class={cx('spinner', { fullScreen })}>
	<orbit-spinner />
</div>

<style>
	.spinner {
		--orbit-spinner__color: #ffffff;
	}

	.fullScreen {
		align-items: center;
		display: flex;
		height: 100%;
		justify-content: center;
		width: 100%;
	}
</style>
