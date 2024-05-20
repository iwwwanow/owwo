<script>
	export let user;
	export let type;
	if (!type) type = "blob";
</script>

<a class="avatar__link-container" href="/{user.username}">
	<picture>
		<source srcset="{user.avatar[type]}, {user.avatar[`${type}_2x`]} 2x" />
		<source srcset="https://images.placeholders.dev/?width=64&height=64" />
		<!-- TODO либо сделать разные модификаторы блока, либо разнести по разным файлам -->
		<!-- TODO нужно добавлять дополнительные разрешения для аватаров на хайрезах -->
		<img
			class="avatar__image"
			src="https://images.placeholders.dev/?width=64&height=64"
			alt="avatar"
		/>
	</picture>
</a>

<style>
	.avatar__link-container {
		width: auto;
		text-decoration: none !important;
		display: block;
	}
	.avatar__link-container:hover {
		opacity: 0.8;
	}
	.avatar__image {
		max-width: max-content;
	}
</style>
