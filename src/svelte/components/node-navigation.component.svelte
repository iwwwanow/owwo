<script>
  import NodeInfo from "./node-info.component.svelte";

  export let prevNode;
  export let nextNode;
</script>

<div class="grid navigation-elements__wrapper">
  <div class="navigation-elements__container">
    <span class="navigation-elements__element">
      <NodeInfo element={prevNode} leftSymbol="◂" />
    </span>
    <span class="navigation-elements__element">
      <NodeInfo element={nextNode} rightSymbol="▸" />
    </span>
  </div>
</div>

<style>
  .navigation-elements__wrapper {
    width: 100%;
    padding: 8px;
  }

  .navigation-elements__container {
    grid-column: 1/-1;
    display: flex;
    flex-direction: row;
    row-gap: var(--gap-v);
    flex-wrap: wrap-reverse;
    justify-content: space-between;
  }

  .navigation-elements__container * {
    margin: 0;
  }

  .navigation-elements__element {
    width: fit-content;
    display: flex;
    flex-direction: row;
    gap: var(--gap-v);
  }
</style>
