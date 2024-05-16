<script>
  import BaseLayout from "../layouts/base.layout.svelte";

  import Date from "../components/date.component.svelte";
  import Card from "../components/card.component.svelte";
  import Text from "../components/text.component.svelte";

  export let page;
  export let elements;
</script>

<BaseLayout>
  <div class="grid page-info">
    <span>
      <h5>page cover</h5>

      <span>
        <h5>author username</h5>
        <Date date={page.date} />
      </span>
    </span>
    <Text text={page.text} />
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
    {#each elements as element}
      <Card {element} />
    {/each}
  </div>
</BaseLayout>
