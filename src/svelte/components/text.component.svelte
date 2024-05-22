<script>
  export let text;
  export let className = "";
</script>

<div class="text {className}">
  {@html text.html}
</div>

<style>
  .text {
    display: flex;
    flex-direction: column;
  }
  :global(.text > pre) {
    width: 100%;
    max-width: 100%;
  }
</style>
