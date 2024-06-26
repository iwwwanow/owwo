<script>
  export let style;

  import ButtonPlus from "../svgs/button_plus.svg.svelte";
</script>

{#if style === "plus"}
  <button class="button button_plus border">
    <ButtonPlus />
  </button>
{:else}
  <h5>other style button</h5>
{/if}

<style>
  .button_plus {
    width: 100%;
    height: 100%;
    min-height: 80px;
  }
  .button_plus:hover {
    background-color: var(--DARK);
  }

  .button_plus :global(path) {
    fill: var(--MEDIUM);
  }
  .button_plus:hover :global(path) {
    fill: var(--WHITE);
  }
</style>
