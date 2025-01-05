<script>
  export let limit;
  let style;
  if (limit) {
    style = `max-height: ${limit}px; overflow: hidden`;
  }
</script>

<div class="grid full-grid-wrap-container__wrapper" {style}>
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
