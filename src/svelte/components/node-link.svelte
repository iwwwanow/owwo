<div class="node-info__container">
  <slot />
</div>

<style>
  .node-info__container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: calc(var(--gap-grid) / 4);
  }
</style>
