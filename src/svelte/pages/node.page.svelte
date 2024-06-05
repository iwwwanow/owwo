<script>
  import BaseLayout from "../layouts/base.layout.svelte";

  import Image from "../components/image.component.svelte";
  import Text from "../components/text.component.svelte";
  import Date from "../components/date.component.svelte";
  import Button from "../components/button.component.svelte";
  import Hr from "../components/hr.component.svelte";

  import NodeCard from "../components/node-card.component.svelte";

  export let node;

  const { id } = node;
  const { image } = node;
  const { date } = node;
  const { descriptoin } = node;
  const { childs } = node;
</script>

<BaseLayout>
  <div class="grid user-info">
    <span class="user-info__data-wrapper">
      <Image {image} {id} variant="w190" />

      <div class="user-info__data-container">
        <h2 class="node-info__title">{node.title}</h2>
        <Date {date} />

        {#if descriptoin}
          <Hr />
          <h5>{descriptoin}</h5>
          <!-- TODO укороченное описание (для ссылок например) -->
        {/if}
      </div>
    </span>

    {#if node.content}
      <!-- TODO это не описание, это контент. и храниться он должен в MD или HTML файле на локалке -->
      <!-- TODO пересмотри этот момент. страница выглядит сильно пустой без описания -->
      <!-- <Text text={node.content} className="grid_break-start" /> -->
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
  .user-info__data-wrapper {
    display: flex;
    flex-direction: column;
    gap: var(--gap-v);
  }

  .user-info__username {
    margin: 0;
  }

  @media screen and (max-width: 650px) {
    .user-info__data-wrapper {
      grid-column: 1/-1;
      flex-direction: row;
      justify-content: space-between;
      gap: var(--grid-gap);
    }
    :global(.user-info__data-wrapper > *) {
      width: calc(50% - calc(var(--gap-grid) / 2));
    }
  }

  @media screen and (max-width: 360px) {
    .user-info__data-wrapper {
      grid-column: 1 / end;
      flex-direction: column;
      gap: var(--gap-grid);
    }
    /* TODO переделать */
    :global(.user-info__user-data-container > *) {
      width: 100%;
    }
    :global(.user-info__container) {
      max-width: calc(50% - calc(var(--gap-grid) / 2));
    }
  }
</style>
