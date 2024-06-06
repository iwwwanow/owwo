<script>
  export let image;
  export let variant = "small";
</script>

{#if variant === "small"}
  <picture>
    <source srcset="{image.h16}, {image.h16_2x} 2x" />
    <source srcset="https://images.placeholders.dev/?width=64&height=64" />
    <img
      src="https://images.placeholders.dev/?width=64&height=64"
      alt="node-info__image"
    />
  </picture>
{:else if variant == "big"}
  <picture>
    <source srcset="{image.h32}, {image.h32_2x} 2x" />
    <source srcset="https://images.placeholders.dev/?width=64&height=64" />
    <img
      src="https://images.placeholders.dev/?width=64&height=64"
      alt="node-info__image"
    />
  </picture>
{/if}
