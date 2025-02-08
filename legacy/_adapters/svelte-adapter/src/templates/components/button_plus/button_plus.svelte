<script lang="ts">
  import type { ButtonPlusProps } from "./button_plus.svelte";
  import { ButtonPlusSvg } from "../../svgs";

  export let props: ButtonPlusProps;

  const { variant = "common" } = props;
</script>

{#if variant === "small"}
  <button class="border button plus-button plus-button_variant_small">
    <h3 class="plus-button__text_variant_small">+</h3>
  </button>
{:else}
  <button class="button plus-button border">
    <ButtonPlusSvg />
  </button>
{/if}

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

  .plus-button_variant_small {
    width: auto;
    height: auto;
    min-height: auto;
    padding: 0 var(--GRID-GAP-2);
    color: var(--MEDIUM);
  }
  .plus-button_variant_small:hover {
    color: var(--WHITE);
  }
  .plus-button_variant_small * {
    width: min-content;
    margin: 0;
  }
</style>
