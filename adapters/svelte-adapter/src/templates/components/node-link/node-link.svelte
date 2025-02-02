<script lang="ts">
  import type { NodeLinkProps } from "./node-link.svelte";
  import type { ImageVariantType } from "./node-link.svelte";

  import NodeLinkImage from "./node-link__image.component.svelte";

  export let props: NodeLinkProps;

  const { node, leftSymbol, rightSymbol } = props;

  const { id } = node.meta;
  const { title, image } = node;

  const imageVariant: ImageVariantType = title ? "small" : "big";
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
