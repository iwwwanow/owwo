<script lang="ts">
  import type { CardContainerProps } from "./card-container.svelte";

  export let props: CardContainerProps;

  let { className } = props;

  className = `card-container${className ? " " + className : ""}`;
</script>

<span class={className}>
  <slot />
</span>

<style>
  .card-container {
    height: var(--CARD-HEIGHT);
    display: flex;
    flex-direction: column;
    gap: var(--GRID-GAP-2);
  }
</style>
