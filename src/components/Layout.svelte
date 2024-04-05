<script>
  import Header from "./Header.svelte";
  import Footer from "./Footer.svelte";
</script>

<svelte:head>
  <title>Hello world!</title>

  <meta
    name="description"
    content="This is where the description goes for SEO"
  />
</svelte:head>

<Header />
<slot />
<Footer />
