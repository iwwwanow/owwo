<script>
  import BaseLayout from "../layouts/base.layout.svelte";

  import Image from "../components/image.component.svelte";
  import Text from "../components/text.component.svelte";
  import Date from "../components/date.component.svelte";
  import Button from "../components/button.component.svelte";
  import Hr from "../components/hr.component.svelte";

  import NodeCard from "../components/node-card.component.svelte";
  import NodeInfo from "../components/node-info.component.svelte";
  import NodeInfoContainer from "../components/node-info__container.svelte";

  export let node;

  const { id } = node;
  const { image } = node;
  const { date } = node;
  const { description } = node;

  const { meta } = node;
  const childs = meta.childs;
  const authors = meta.authors;

  console.log(authors);
  console.log(childs);
</script>

<BaseLayout>
  <div class="grid node-wrapper">
    <span class="node-info__data-wrapper">
      <Image {image} {id} variant="w190" />

      <div class="node-info__data-container">
        <h2 class="node-info__title">{node.title}</h2>

        {#if authors}
          <Hr />
          <NodeInfoContainer>
            {#each authors as author}
              <NodeInfo node={author} />
            {/each}
          </NodeInfoContainer>
        {/if}

        {#if description?.html}
          <Hr />
          {@html description.html}
        {/if}

        <Hr />
        <Date {date} />
      </div>
    </span>

    {#if node.content}
      <!-- TODO это не описание, это контент. и храниться он должен в MD или HTML файле на локалке -->
      <!-- TODO пересмотри этот момент. страница выглядит сильно пустой без описания -->
      <Text text={node.content} className="grid_break-start" />
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

<style>
  .node-info__authors-container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }

  .node-info__data-wrapper {
    display: flex;
    flex-direction: column;
    gap: var(--gap-v);
  }

  .node-info__title {
    margin: 0;
    color: var(--dark);
  }

  @media screen and (max-width: 650px) {
    .node-info__data-wrapper {
      grid-column: 1/-1;
      flex-direction: row;
      justify-content: space-between;
      gap: var(--grid-gap);
    }
    :global(.node-info__data-wrapper > *) {
      width: calc(50% - calc(var(--gap-grid) / 2));
    }
  }

  @media screen and (max-width: 360px) {
    .node-info__data-wrapper {
      grid-column: 1 / end;
      flex-direction: column;
      gap: var(--gap-grid);
    }
    /* TODO переделать */
    :global(.node-info__data-wrapper > *) {
      width: 100%;
    }
    :global(.node-info__container) {
      max-width: calc(50% - calc(var(--gap-grid) / 2));
    }
  }
</style>
