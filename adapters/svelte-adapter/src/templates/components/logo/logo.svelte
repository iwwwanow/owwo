<script lang="ts">
  import LogoSvg from "../svgs/logo.svg.svelte";
  import type { LogoProps } from "./logo.svelte";
  import { getComponentClassname } from "./getters";

  export let props: LogoProps;
  // TODO rename
  const { className: classname, href = "/" } = props;

  const componentClassname = getComponentClassname(classname);
</script>

<a {href} class={componentClassname}>
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
