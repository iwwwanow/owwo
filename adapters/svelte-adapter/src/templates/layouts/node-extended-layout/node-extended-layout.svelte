<script lang="ts">
  import { BaseHeadFragment } from "../../fragments";
</script>

<svelte:head>
  <BaseHeadFragment />
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
