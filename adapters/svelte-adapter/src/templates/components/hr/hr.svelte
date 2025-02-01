<script lang="ts">
  import type { HrProps } from "./hr.svelte";
  import { getComponentColorStyle } from "./getters";

  export let props: HrProps;

  const { text, color } = props;

  const componentColorStyle = getComponentColorStyle(color);
</script>

{#if text}
  <fieldset style={componentColorStyle}>
    <legend><h6>{text}</h6></legend>
  </fieldset>
{:else}
  <hr />
{/if}

<style>
  hr,
  fieldset {
    grid-column: 1/ -1;
    padding-left: var(--GRID-GAP-2);
    margin: 12px 0 4px;
    border-top: 1px solid var(--LIGHT);
    color: var(--MEDIUM);
  }
  legend {
    padding: 0 4px;
  }
</style>
