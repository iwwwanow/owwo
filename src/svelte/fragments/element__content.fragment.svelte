<script>
  import Navigation from "../components/navigation.component.svelte";

  export let element;
</script>

<div class="element__content-wrapper">
  <div class="element__content-container">
    <h1>element-content</h1>
  </div>
  {#if element.navigationElements}
    <Navigation
      prevNode={element.navigationElements.prevElement}
      nextNode={element.navigationElements.nextElement}
    />
  {/if}
</div>

<style>
  .element__content-wrapper {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .element__content-container {
    width: 100%;
    min-height: calc(100vh - 32px);
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
