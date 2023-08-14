<script lang="ts">
	export let href: string;
</script>

<a class="selector-list-item" {href}>
	<slot />
</a>

<style>
	.selector-list-item {
		align-items: center;
		border-radius: 50%;
		border: 1px solid var(--neutral500);
		color: inherit;
		display: flex;
		justify-content: center;
		overflow: hidden;
		text-align: center;
		text-decoration: none;
		transition: background-color 0.1s ease-in-out;

		&:hover,
		&:focus {
			background-color: var(--neutral500);
			outline: none;
			text-decoration: none;
		}
	}
</style>
