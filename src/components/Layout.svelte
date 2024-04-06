<script>
  import Head from "./Head.svelte";
  import Header from "./Header.svelte";
  import Footer from "./Footer.svelte";
</script>

<svelte:head>
  <Head />
</svelte:head>

<body class="wrapper">
  <Header />
  <slot />
  <Footer />
</body>
