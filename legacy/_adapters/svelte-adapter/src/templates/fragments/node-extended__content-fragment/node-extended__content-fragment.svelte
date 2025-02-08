<script lang="ts">
  import type { NodeExtendedContentFragmentProps } from "./node-extended__content-fragment.svelte";
  import { ContentPart } from "./parts";

  export let props: NodeExtendedContentFragmentProps;
  const { content } = props;

  const html = content.html;
  const contentType = typeof html;
</script>

<div class="element__content-wrapper">
  {#if contentType === "string"}
    <ContentPart {html} />
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
