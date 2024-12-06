<script lang="ts">
	import 'wc-spinners/dist/orbit-spinner';

	interface Props {
		fullScreen?: boolean;
	}

	let { fullScreen = false }: Props = $props();
</script>

<div class="spinner" class:fullScreen>
	<orbit-spinner></orbit-spinner>
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
