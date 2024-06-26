<script>
  export let image;
  export let id;
  export let variant;
</script>

<picture>
  <!-- TODO 2x: -->
  <source srcset={image[`${variant}_2x`]} media="(max-width: 360px)" />
  <source srcset="{image[variant]}, {image[`${variant}_2x`]} 2x" />
  <img id="image-{id}" src={image.original} alt="page-cover" />
</picture>
