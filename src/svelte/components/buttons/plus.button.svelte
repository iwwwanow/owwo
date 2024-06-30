<script>
  import ButtonPlusSvg from "../../svgs/button_plus.svg.svelte";
</script>

<button class="button plus-button border">
  <ButtonPlusSvg />
</button>

<style>
  .plus-button {
    width: 100%;
    height: 100%;
    min-height: 80px;
  }
  .plus-button:hover {
    background-color: var(--DARK);
  }

  .plus-button :global(path) {
    fill: var(--MEDIUM);
  }
  .plus-button:hover :global(path) {
    fill: var(--WHITE);
  }
</style>
