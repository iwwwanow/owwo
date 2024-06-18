<script>
  import NodeLinkImage from "./node-link__image.component.svelte";

  export let node;
  export let leftSymbol;
  export let rightSymbol;

  export let id;
  export let title;
  export let image;

  if (node) {
    id = node.meta.id;
    title = node.title;
    image = node.image;
  }

  const imageVariant = title ? "small" : "big";
</script>

<a href="/{id}" class="node-info__container">
  {#if leftSymbol}
    <h5 class="node-info__symbol">{leftSymbol}</h5>
  {/if}
  {#if image}
    <NodeLinkImage {image} variant={imageVariant} />
  {/if}
  {#if title}
    <h5 style="word-break: break-all" class="element-info__title">
      {title}
    </h5>
  {/if}
  {#if rightSymbol}
    <h5 class="node-info__symbol">{rightSymbol}</h5>
  {/if}
</a>

<style>
  .node-info__container {
    --color: var(--dark);
    width: fit-content;
    display: flex;
    gap: calc(var(--gap-grid) / 8);
    text-decoration-color: var(--color);
    color: var(--color);
  }
  .node-info__container:hover {
    opacity: 0.8;
  }
</style>
