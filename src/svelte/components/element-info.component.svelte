<script>
  import ElementInfoCover from "./element-info__cover.component.svelte";
  export let element;
</script>

<a href="/element/{element.elementId}" class="element-info__container">
  <ElementInfoCover cover={element.cover} />
  <h5 style="word-break: break-all" class="element-info__title">
    {element.title}
  </h5>
</a>

<style>
  .element-info__container {
    --color: var(--dark);
    display: flex;
    gap: calc(var(--gap-grid) / 8);
    text-decoration-color: var(--color);
    color: var(--color);
  }
  .element-info__container:hover {
    opacity: 0.8;
  }
</style>
