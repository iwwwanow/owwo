<script lang="ts">
  import type { CardContainerProps } from "./card-container.svelte";
  import { getComponentClassname } from "./getters";

  export let props: CardContainerProps;

  // TODO namings
  let { className: classname } = props;

  const componentClassname = getComponentClassname(classname);
</script>

<span class={componentClassname}>
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
