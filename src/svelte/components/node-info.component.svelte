<script>
  import NodeInfoCover from "./node-info__cover.component.svelte";

  export let element;
  export let type;
  export let leftSymbol;
  export let rightSymbol;
</script>

{#if type === "cover"}
  <a href="/element/{element.elementId}" class="element-info__container">
    <ElementInfoCover cover={element.cover} {type} />
  </a>
{:else}
  <a href="/element/{element.elementId}" class="element-info__container">
    {#if leftSymbol}
      <h5 class="element-info__symbol">{leftSymbol}</h5>
    {/if}
    <ElementInfoCover cover={element.cover} />
    <h5 style="word-break: break-all" class="element-info__title">
      {element.title}
    </h5>
    {#if rightSymbol}
      <h5 class="element-info__symbol">{rightSymbol}</h5>
    {/if}
  </a>
{/if}

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
