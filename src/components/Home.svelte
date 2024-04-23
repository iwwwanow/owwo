<script>
	import Layout from "./Layout.svelte";
	import Avatar from "./Avatar.svelte";

	export let users;
</script>

<Layout>
	<div class="grid">
		<span class="users-container">
			{#each users as user}
				<Avatar {user} type="blob" />
			{/each}
		</span>
	</div>
	<div class="grid">
		TODO redirect to effectivnayarabota1 page OWWO
		<h1>owwo big-logo</h1>
	</div>
</Layout>

<style>
	.users-container {
		grid-column: 1/-1;

		display: flex;
		flex-wrap: wrap;
	}
</style>
