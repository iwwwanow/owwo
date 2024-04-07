<script>
  import Layout from "./Layout.svelte";
</script>

<Layout>
  <div class="grid page-info">
    <span>
      <h5>page cover</h5>
      <h5>username + dates</h5>
    </span>
    <h5>page-text html (markdown in db)</h5>
  </div>

  <div class="grid todo">
    <ul>
      <li>elementы отображаются только в формате LIST</li>
      <li>
        возможность добавить скрипт из стандартной библиотеки, который меняет
        верстку на GRID
      </li>
    </ul>
  </div>

  <div class="grid page__elements-container">
    <span>
      <h5>vertical-element-image</h5>
      <h5>element-text html (markdown in db)</h5>
    </span>
  </div>
</Layout>
