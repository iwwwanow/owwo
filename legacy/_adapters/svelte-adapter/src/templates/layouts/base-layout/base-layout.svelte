<script lang="ts">
  import { BaseHeadFragment } from "../../fragments";
  import { HeaderFragment } from "../../fragments";
  import { FooterFragment } from "../../fragments";
</script>

<svelte:head>
  <BaseHeadFragment />
</svelte:head>

<body class="wrapper">
  <HeaderFragment />
  <slot />
  <FooterFragment />
</body>
