<script>
  export let data;
  const dataType = data.pageId ? "page" : "element";
  data.id = data.pageId || data.elementId;
</script>

<a class="avatar__link-container" href="{dataType}/{data.id}">
  <picture>
    <source srcset="{data.cover.w190}, {data.cover.w190} 2x" />
    <source srcset="https://images.placeholders.dev/?width=64&height=64" />
    <!-- TODO либо сделать разные модификаторы блока, либо разнести по разным файлам -->
    <!-- TODO нужно добавлять дополнительные разрешения для аватаров на хайрезах -->
    <img
      src="https://images.placeholders.dev/?width=64&height=64"
      alt="avatar"
    />
  </picture>
</a>

<style>
  .avatar__link-container {
    text-decoration: none !important;
    display: block;
  }
</style>
