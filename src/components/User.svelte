<script>
	import Layout from "./Layout.svelte";

	import Avatar from "./avatar.svelte";
	import Text from "./Text.svelte";
	import Date from "./Date.svelte";

	import Card from "./Card.svelte";
	import Button from "./Button.svelte";
</script>

<Layout>
	<div class="grid user-info">
		<Avatar />
		<span class="user-info__username-container">
			<h2>username</h2>
			<Date />
		</span>
		<Text />
	</div>

	<div class="grid todo" style="color: red;">
		<ul>
			<li>pages отображаются только в формате GRID</li>
			<li>
				возможность добавить скрипт из стандартной библиотеки, который меняет
				верстку на LIST
			</li>
		</ul>
	</div>

	<div class="grid user__pages-container">
		<Card style="vertical" />
		<Card style="square" />
		<Card style="horizontal" />
		<Button style="plus" />
	</div>
</Layout>

<style>
	.user-info__username-container > * {
		margin: 0;
	}
</style>
