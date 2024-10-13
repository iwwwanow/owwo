<script>
  import StringContent from "./node-extended__content_string.fragment.svelte";

  export let content;

  const html = content.html;
  const contentType = typeof html;
</script>

<div class="element__content-wrapper">
  {#if contentType === "string"}
    <StringContent {html} />
  {/if}
</div>

<style>
  .element__content-wrapper {
    width: 100%;
    min-height: calc(100vh - 32px);
    display: flex;
    flex-direction: column;
  }
</style>
