<script>
  import BaseLayout from "../layouts/base.layout.svelte";

  import Avatar from "../components/avatar.component.svelte";
  import Text from "../components/text.component.svelte";
  import Date from "../components/date.component.svelte";
  import Card from "../components/card.component.svelte";
  import Button from "../components/button.component.svelte";
  import Hr from "../components/hr.component.svelte";

  export let user;
</script>

<BaseLayout>
  <div class="grid user-info">
    <span class="user-info__data-wrapper">
      <Avatar {user} size="w190" />

      <div class="user-info__data-container">
        <h2 class="user-info__username">{user.username}</h2>
        <Date date={user.date} />

        {#if user.links}
          <Hr />
          <!-- TODO укороченное описание (для ссылок например) -->
        {/if}
      </div>
    </span>

    {#if user.text}
      <!-- TODO пересмотри этот момент. страница выглядит сильно пустой без описания -->
      <Text text={user.text} className="grid_break-start" />
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
    {#each user.pages as page}
      <Card {page} />
    {/each}
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
