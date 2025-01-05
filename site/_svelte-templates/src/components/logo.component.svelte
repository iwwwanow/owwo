<script>
  import LogoSvg from "../svgs/logo.svg.svelte";
  export let className;
  export let href = "/";
</script>

<a {href} class="logo__container{className ? ` ${className}` : ''}">
  <LogoSvg />
</a>

<style>
  .logo__container {
    width: fit-content;
    height: fit-content;
    min-height: 1em;
    position: relative;
  }

  @media screen and (max-width: 360px) {
    .logo__container {
      grid-row: 1/2;
    }
  }
</style>
