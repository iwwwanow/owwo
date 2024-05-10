<script>
	export let page;
</script>

<span class="card__container">
	<a class="avatar__link-container" href="/page/{page.pageId}">
		<picture>
			<source srcset="{page.cover.w190}, {page.cover.w190_2x} 2x" />
			<source srcset="https://images.placeholders.dev/?width=64&height=64" />
			<!-- TODO либо сделать разные модификаторы блока, либо разнести по разным файлам -->
			<!-- TODO нужно добавлять дополнительные разрешения для аватаров на хайрезах -->
			<img
				src="https://images.placeholders.dev/?width=64&height=64"
				alt="page card cover"
			/>
		</picture>
	</a>
	<div class="card__text-container">
		<h4>{page.title}</h4>
		<h5>{page.text}</h5>
	</div>
	TODO как отображать хавер, чтобы он читался? Не всплывающее окно, а, кажется это
	называется POP-UP, размером в 2 колонки
</span>

<style>
	.card__container * {
		word-wrap: break-word;
	}
</style>
