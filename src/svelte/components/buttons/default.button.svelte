<script>
  export let text = "default-text";
  export let url = "";
</script>

{#if !url}
  <button class="button border">
    <p>{text}</p>
  </button>
{:else}
  <a href={url} class="button__url-container">
    <button class="button button_url border">
      <p>{text}</p>
    </button>
  </a>
{/if}

<style>
  .button {
    --color: var(--DARK);

    padding: 8px;
    width: 100%;
    /* height: fit-content; */

    display: flex;
    justify-content: center;
    align-items: center;

    text-transform: uppercase;
    background-color: white;

    border-color: var(--color);
  }
  .button > p {
    color: var(--color);
  }
  .button * {
    margin: 0;
  }
  .button:hover {
    border-color: var(--color);
    background-color: var(--color);
  }
  .button:hover > p {
    color: var(--WHITE);
    font-weight: 600;
  }

  .button_url {
    --color: var(--BLUE);
  }
  .button__url-container:hover {
    text-decoration: none;
  }
</style>
