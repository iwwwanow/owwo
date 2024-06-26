<script>
  import BaseLayout from "../layouts/base.layout.svelte";

  import Image from "../components/image.component.svelte";
  import Text from "../components/text.component.svelte";
  import Date from "../components/date.component.svelte";
  import Button from "../components/button.component.svelte";
  import Hr from "../components/hr.component.svelte";

  import NodeInfo from "../components/node-info.component.svelte";
  import NodeCard from "../components/node-card.component.svelte";

  export let node;

  const { id } = node;
  const { image } = node;
  const { date } = node;
  const { description } = node;

  const { meta } = node;
  const childs = meta.childs;
  const authors = meta.authors;
</script>

<BaseLayout>
  <div class="grid node-wrapper">
    <NodeInfo {node} />

    {#if node.content}
      <!-- TODO это не описание, это контент. и храниться он должен в MD или HTML файле на локалке -->
      <!-- TODO пересмотри этот момент. страница выглядит сильно пустой без описания -->
      <Text text={node.content} className="grid__right-content" />
    {/if}
  </div>

  <div class="grid todo" style="color: red;">
    <ul>
      <li>pages отображаются только в формате GRID</li>
      <li>
        возможность добавить скрипт из стандартной библиотеки, который меняет
        верстку на LIST
      </li>
    </ul>
  </div>

  <!-- TODO страницы, в которые пушил User -->

  <div class="grid user__pages-container">
    {#if childs}
      {#each childs as childNode}
        <NodeCard node={childNode} />
      {/each}
    {/if}

    <Button style="plus" />
  </div>
</BaseLayout>
