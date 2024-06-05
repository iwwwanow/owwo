<script>
  import Head from "../fragments/head.fragment.svelte";
  import Header from "../fragments/header.fragment.svelte";
  import Footer from "../fragments/footer.fragment.svelte";
</script>

<svelte:head>
  <Head />
</svelte:head>

<body class="wrapper">
  <Header />
  <slot />
  <Footer />
</body>
