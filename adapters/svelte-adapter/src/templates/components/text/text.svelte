<script lang="ts">
  import type { TextProps } from "./text.svelte";
  export let props: TextProps;
  const { text, className } = props;
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
