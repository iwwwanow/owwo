<script>
  import Head from "../fragments/head.fragment.svelte";
</script>

<svelte:head>
  <Head />
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
