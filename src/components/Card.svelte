<script>
	export let page;
</script>

<span>
	<a class="avatar__link-container" href="/page/{page.pageId}">
		<picture>
			<source srcset={page.cover.original} />
			<source srcset="https://images.placeholders.dev/?width=64&height=64" />
			<!-- TODO либо сделать разные модификаторы блока, либо разнести по разным файлам -->
			<!-- TODO нужно добавлять дополнительные разрешения для аватаров на хайрезах -->
			<img
				src="https://images.placeholders.dev/?width=64&height=64"
				alt="page card cover"
			/>
		</picture>
	</a>
	<h5>{page.title}</h5>
	<h5>{page.text}</h5>
	TODO как отображать хавер, чтобы он читался? Не всплывающее окно, а, кажется это
	называется POP-UP, размером в 2 колонки
</span>
