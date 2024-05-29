<div class="grid full-grid-wrap-container__wrapper">
  <span class="full-grid-wrap-container__container">
    <slot />
  </span>
</div>

<style>
  .full-grid-wrap-container__container {
    grid-column: 1/-1;
    position: relative;

    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
</style>
