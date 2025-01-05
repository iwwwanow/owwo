<script>
  export let text;
  export let color;

  const colorStyle = color ? `color: ${color}; border-color: ${color};` : "";
</script>

{#if text}
  <fieldset style={colorStyle}>
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
