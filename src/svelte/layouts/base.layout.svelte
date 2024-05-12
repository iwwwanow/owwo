<script>
  import Head from "../components/head.component.svelte";
  import Header from "../components/header.component.svelte";
  import Footer from "../components/footer.component.svelte";
</script>

<svelte:head>
  <Head />
</svelte:head>

<body class="wrapper">
  <Header />
  <slot />
  <Footer />
</body>
