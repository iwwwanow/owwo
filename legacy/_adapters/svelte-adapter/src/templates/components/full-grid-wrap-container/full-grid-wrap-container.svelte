<script lang="ts">
  import { getComponentStyle } from "./getters";
  import type { FullGridWrapContainerProps } from "./full-grid-wrap-container.svelte";

  export let props: FullGridWrapContainerProps;

  const { limit, style } = props;

  const componentStyle = getComponentStyle({ limit, style });
</script>

<div class="grid full-grid-wrap-container__wrapper" style={componentStyle}>
  <span class="full-grid-wrap-container__container">
    <slot />
  </span>
</div>

<style>
  .full-grid-wrap-container__container {
    grid-column: 1/-1;
    position: relative;

    display: flex;
    flex-wrap: wrap;
  }
</style>
