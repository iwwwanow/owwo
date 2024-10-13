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
</style>
