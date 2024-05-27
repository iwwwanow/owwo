<header class="grid">
  <h5 class="header__logo-container">
    <a href="/">
      <img class="logo" src="/public/assets/logo.svg" alt="logo" />
    </a>
  </h5>

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

  .header__logo-container {
    width: fit-content;
    height: fit-content;
    min-height: 1em;
    position: relative;
  }
  .header__logo-container a {
    height: 100%;
    display: block;
  }
  .header__logo-container img {
    height: 100%;
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
    .header__logo-container {
      grid-row: 1/2;
    }
    .header__login-container {
      grid-row-start: 2;
      justify-content: flex-start;
    }
  }
</style>
