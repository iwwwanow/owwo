<script>
  console.log("that script should be runned on server console");

  import InnerComponent from "./inner-component.svelte";

  export let color;

  const array = ["one", "two", "three"];
</script>

<svelte:head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <meta name="theme-color" content="#e0e0e0" />
  <title>owwo</title>
</svelte:head>

<h1>that text should be renered on the browser {color}</h1>

<InnerComponent />

{#each array as item, index}
  <li>{item} - {index}</li>
  {#if index}
    <h1>that text should be renered on the browser</h1>
  {:else}
    <h1>false</h1>
  {/if}
{/each}

<style>
  h1 {
    color: red;
  }
</style>
