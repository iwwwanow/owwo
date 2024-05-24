<script>
  export let user;
  export let size;
  if (!size) size = "blob";
</script>

<picture>
  <source srcset="{user.avatar[size]}, {user.avatar[`${size}_2x`]} 2x" />
  <source srcset="https://images.placeholders.dev/?width=64&height=64" />
  <!-- TODO либо сделать разные модификаторы блока, либо разнести по разным файлам -->
  <!-- TODO нужно добавлять дополнительные разрешения для аватаров на хайрезах -->
  <img
    class="avatar__image"
    src="https://images.placeholders.dev/?width=64&height=64"
    alt="avatar"
  />
</picture>

<style>
  .avatar__image {
    max-width: max-content;
  }
</style>
