<script>
  export let text;
</script>

{#if text}
  <fieldset><legend><h6>{text}</h6></legend></fieldset>
{:else}
  <hr />
{/if}

<style>
  hr,
  fieldset {
    grid-column: 1/ -1;
    padding-left: 8px;
    border-top: 1px solid var(--light);
    color: var(--medium);
    margin: 12px 0 4px;
  }
  legend {
    padding: 0 4px;
  }
</style>
