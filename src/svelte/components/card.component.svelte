<script>
  export let page;
  export let element;

  if (page && element) throw new Error("only one data type needed");

  const dataType = page ? "page" : "element";
  const data = page ? page : element;
  data.id = page ? page.pageId : element.elementId;
</script>

<a class="card__wrapper border_light" href="/{dataType}/{data.id}">
  <picture class="card__cover-container">
    <source srcset={data.cover.w190_2x} media="(max-width: 360px)" />
    <source srcset="{data.cover.w190}, {data.cover.w190_2x} 2x" />
    <img src={data.cover.w190} class="card__cover-img" alt="page card cover" />
  </picture>

  <div class="card__text-container">
    <h4 class="card__text-header">{data.title}</h4>
    <h5>{data.text.preview}</h5>
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
    mix-blend-mode: luminosity;
    opacity: 0.96;
  }

  .card__wrapper:hover > .card__text-container {
    display: block;
  }

  .card__text-header {
    margin-bottom: 4px;
  }

  .card__cover-container {
    width: 100%;
  }

  .card__cover-img {
    width: 100%;
  }
</style>
