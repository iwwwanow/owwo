<script>
  import BaseLayout from "../layouts/base.layout.svelte";
  import Date from "../components/date.component.svelte";
  import Text from "../components/text.component.svelte";
</script>

<BaseLayout>
  <div class="grid page-info">
    <span>
      <h5>page cover</h5>

      <span>
        <h5>author username</h5>
        <Date />
      </span>
    </span>
    <Text />
  </div>

  <div class="grid todo" style="color: red;">
    <ul>
      <li>elementы отображаются только в формате LIST</li>
      <li>100vh max</li>
      <li>adaptive flex with wrap</li>
      <li>
        возможность добавить скрипт из стандартной библиотеки, который меняет
        верстку на GRID
      </li>
    </ul>
  </div>

  <div class="grid page__elements-container">
    <span class="page__element-container">
      <h5>vertical-element-image</h5>
      <Text />
    </span>
  </div>
</BaseLayout>
