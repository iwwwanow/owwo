<script>
  export let text;
  export let className = "";
</script>

<div class={className}>
  {@html text.html}
</div>
