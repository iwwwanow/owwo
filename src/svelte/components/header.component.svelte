<script>
  import Logo from "./logo.component.svelte";
</script>

<header class="grid">
  <Logo />

  <h5 class="header__editor-link">editor</h5>

  <h5 class="header__login-container">
    <a href="/login">login</a>
  </h5>
</header>

<style>
  header * {
    text-transform: uppercase;
  }

  :global(.element-layout header) {
    margin: auto 0 0;
  }

  .header__login-container {
    grid-column-end: -1;
    grid-row-start: 1;
    display: flex;
    justify-content: flex-end;
  }

  @media screen and (max-width: 444px) {
    .header__editor-link {
      grid-column: 1 / -1;
    }
  }

  @media screen and (max-width: 360px) {
    .header__login-container {
      grid-row-start: 2;
      justify-content: flex-start;
    }
  }
</style>
