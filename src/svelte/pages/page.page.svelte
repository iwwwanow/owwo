<script>
  import BaseLayout from "../layouts/base.layout.svelte";

  import Date from "../components/date.component.svelte";
  import UserInfo from "../components/user-info.component.svelte";
  import Cover from "../components/cover.component.svelte";
  import Card from "../components/card.component.svelte";
  import Text from "../components/text.component.svelte";
  import Hr from "../components/hr.component.svelte";

  export let page;
  export let elements;
</script>

<BaseLayout>
  <div class="grid page-info">
    <div class="page-info__data-wrapper">
      <Cover data={page} />
      <div class="page-info__data-container">
        {#if page.title}
          <h2 class="page-info__title">{page.title}</h2>
        {/if}
        <Date date={page.date} />
        <Hr />
        <span class="page-info__users-container">
          {#if page.users.length === 1}
            {@const user = page.users[0]}
            <UserInfo {user} />
          {:else}
            {#each page.users as user}
              <UserInfo {user} />
            {/each}
          {/if}
        </span>
      </div>
    </div>

    {#if page.text}
      <!-- TODO пересмотри этот момент. страница выглядит сильно пустой без описания -->
      <Text text={page.text} className="grid_break-start" />
    {/if}
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
    {#each page.elements as element}
      <Card {element} />
    {/each}
  </div>
</BaseLayout>

<style>
  .page-info__title {
    /* TODO make it property cor color of cover */
    /* margin: 0; */
    color: var(--black);
    word-break: break-all;
  }

  .page-info__data-wrapper {
    display: flex;
    flex-direction: column;
    gap: var(--gap-v);
  }

  .page-info__users-container {
    max-height: 288px;
    overflow-y: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: calc(var(--gap-grid) / 4);
  }

  @media screen and (max-width: 650px) {
    .page-info__data-wrapper {
      grid-column: 1/-1;
      flex-direction: row;
      justify-content: space-between;
      gap: var(--grid-gap);
    }
    :global(.page-info__data-wrapper > *) {
      width: calc(50% - calc(var(--gap-grid) / 2));
    }
  }
  @media screen and (max-width: 360px) {
    .page-info__data-wrapper {
      grid-column: 1 / end;
      flex-direction: column;
      gap: var(--gap-grid);
    }
    /* TODO переделать */
    :global(.page-info__data-wrapper > *) {
      width: 100%;
    }
  }
</style>
