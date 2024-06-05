<script>
  export let cover;
  export let type;
</script>

{#if type === "cover"}
  <picture>
    <source srcset="{cover.w22}, {cover.w22_2x} 2x" />
    <source srcset="https://images.placeholders.dev/?width=64&height=64" />
    <img
      src="https://images.placeholders.dev/?width=64&height=64"
      alt="page-cover"
    />
  </picture>
{:else}
  <picture>
    <source srcset="{cover.w10}, {cover.w10_2x} 2x" />
    <source srcset="https://images.placeholders.dev/?width=64&height=64" />
    <img
      src="https://images.placeholders.dev/?width=64&height=64"
      alt="page-cover"
    />
  </picture>
{/if}
