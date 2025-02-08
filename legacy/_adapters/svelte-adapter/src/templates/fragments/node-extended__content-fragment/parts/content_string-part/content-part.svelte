<script lang="ts">
  import type { ContentPartProps } from "./content-part.svelte";
  export let props: ContentPartProps;
  const { html } = props;
</script>

<div class="element__content-container">
  {@html html}
</div>

<style>
  .element__content-container {
    max-width: 808px;
    align-self: center;
    /* padding: 160px 0 240px; */
    padding: 160px 0 0;
    width: 100%;
    min-height: calc(100vh - 32px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
  }
</style>
