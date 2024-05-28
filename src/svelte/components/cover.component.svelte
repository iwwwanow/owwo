<script>
  export let data;
  const dataType = data.pageId ? "page" : "element";
  data.id = data.pageId || data.elementId;
</script>

<a class="cover__link-container" href="{dataType}/{data.id}">
  <picture>
    <source srcset={data.cover.w190_2x} media="(max-width: 360px)" />
    <source srcset="{data.cover.w190}, {data.cover.w190_2x} 2x" />
    <source srcset="https://images.placeholders.dev/?width=64&height=64" />
    <img
      src="https://images.placeholders.dev/?width=64&height=64"
      alt="page-cover"
    />
  </picture>
</a>

<style>
  .cover__link-container {
    text-decoration: none !important;
    display: block;
  }
</style>
