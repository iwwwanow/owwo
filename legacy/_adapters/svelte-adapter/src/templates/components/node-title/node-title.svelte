<script lang="ts">
  import type { NodeTitleProps } from "./node-title.svelte";
  export let props: NodeTitleProps;
  const { title } = props;
</script>

<h2 class="node-title">{title}</h2>

<style>
  .node-title {
    color: var(--DARK);
  }
</style>
