<script>
  import Layout from "./Layout.svelte";
</script>

<Layout>
  <div class="grid user-info">
    <h5>avatar</h5>
    <h5>username + dates</h5>
    <h5>user-text html (markdown in db)</h5>
  </div>

  <div class="grid todo">
    <ul>
      <li>pages отображаются только в формате GRID</li>
      <li>
        возможность добавить скрипт из стандартной библиотеки, который меняет
        верстку на LIST
      </li>
    </ul>
  </div>

  <div class="grid user__pages-container">
    <span>
      <h5>vertica page cover</h5>
      <h5>page description on hover.</h5>
      TODO как отображать хавер, чтобы он читался? Не всплывающее окно, а, кажется
      это называется POP-UP, размером в 2 колонки
    </span>
    <span>
      <h5>square page</h5>
      <h5>page description on hover.</h5>
    </span>
    <span>
      <h5>horizontal page</h5>
      <h5>page description on hover.</h5>
    </span>
    <h5>plus button</h5>
  </div>
</Layout>
