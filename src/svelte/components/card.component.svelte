<script>
  export let page;
</script>

<a class="card__wrapper" href="/page/{page.pageId}">
  <picture class="card__img-container">
    <source srcset="{page.cover.w190}, {page.cover.w190_2x} 2x" />
    <source srcset="https://images.placeholders.dev/?width=64&height=64" />
    <!-- TODO либо сделать разные модификаторы блока, либо разнести по разным файлам -->
    <!-- TODO нужно добавлять дополнительные разрешения для аватаров на хайрезах -->
    <img
      src="https://images.placeholders.dev/?width=64&height=64"
      alt="page card cover"
    />
  </picture>

  <div class="card__text-container">
    <h4 class="card__text-header">{page.title}</h4>
    <h5>{page.text.preview}</h5>
  </div>

  <!-- TODO как отображать хавер, чтобы он читался? Не всплывающее окно, а, кажется -->
  <!-- это называется POP-UP, размером в 2 колонки -->
</a>

<style>
  .card__wrapper {
    position: relative;
    overflow: hidden;
    display: flex;
  }

  .card__wrapper * {
    word-wrap: break-word;
    text-decoration: none;
  }

  .card__text-container {
    width: 100%;
    height: 100%;
    position: absolute;
    padding: 6px 8px;

    display: none;
    pointer-events: none;
    user-select: none;

    color: var(--dark);
    background-color: var(--white);
    border: 1px solid var(--light);
    mix-blend-mode: luminosity;
    opacity: 0.96;
  }

  .card__wrapper:hover > .card__text-container {
    display: block;
  }

  .card__text-header {
    margin-bottom: 4px;
  }
</style>
