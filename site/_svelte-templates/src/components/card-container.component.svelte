<script>
  export let className;
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
