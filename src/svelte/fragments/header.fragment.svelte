<script>
  import Logo from "../components/logo.component.svelte";
  import Hr from "../components/hr.component.svelte";

  export let bottom = false;
</script>

<header class="grid" style={bottom ? "margin: auto 0 0;" : ""}>
  {#if bottom}
    <Hr text="header" />
  {/if}

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
    /* grid-row-start: 1; */
    display: flex;
    justify-content: flex-end;
  }

  @media screen and (max-width: 650px) {
    .header__editor-link {
      grid-row: 2 / 3;
    }
  }

  @media screen and (max-width: 444px) {
    .header__editor-link {
      grid-column: 1 / -1;
    }
  }

  @media screen and (max-width: 360px) {
    .header__login-container {
      justify-content: flex-start;
    }
  }
</style>
