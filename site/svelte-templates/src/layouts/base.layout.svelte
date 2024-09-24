<script>
  import BaseHead from "../fragments/base-head.fragment.svelte";
  import Header from "../fragments/header.fragment.svelte";
  import Footer from "../fragments/footer.fragment.svelte";
</script>

<svelte:head>
  <BaseHead />
</svelte:head>

<body class="wrapper">
  <Header />
  <slot />
  <Footer />
</body>
