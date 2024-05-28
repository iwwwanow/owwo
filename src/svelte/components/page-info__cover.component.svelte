<script>
  export let cover;
</script>

<picture>
  <source srcset="{cover.w10}, {cover.w10_2x} 2x" />
  <source srcset="https://images.placeholders.dev/?width=64&height=64" />
  <img
    src="https://images.placeholders.dev/?width=64&height=64"
    alt="page-cover"
  />
</picture>
