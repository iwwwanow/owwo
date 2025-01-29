<script lang="ts">
  import type { NodeImageType } from "@contexts/site-core";
  import type { NodeDataType } from "@contexts/site-core";

  import NodeLinkImage from "./node-link__image.component.svelte";

  export let node: NodeDataType | undefined;

  export let leftSymbol: string | undefined;
  export let rightSymbol: string | undefined;

  export let id: string | undefined;
  export let title: string | undefined;
  export let image: NodeImageType | undefined;

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
    --NODE-INFO-COLOR: var(--DARK);
    width: fit-content;
    display: flex;
    gap: var(--GRID-GAP-8);
    text-decoration-color: var(--NODE-INFO-COLOR);
    color: var(--NODE-INFO-COLOR);
  }
  .node-info__container:hover {
    opacity: 0.8;
  }
</style>
