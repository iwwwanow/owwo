<script>
  import BaseHead from "../fragments/base-head.fragment.svelte";
</script>

<svelte:head>
  <BaseHead />
</svelte:head>

<body class="node-extended-layout">
  <slot />
</body>

<style>
  .node-extended-layout {
    display: flex;
    flex-direction: column;
    gap: 80px;
  }
</style>
