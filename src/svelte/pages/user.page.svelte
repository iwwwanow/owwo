<script>
  import BaseLayout from "../layouts/base.layout.svelte";

  import Avatar from "../components/avatar.component.svelte";
  import Text from "../components/text.component.svelte";
  import Date from "../components/date.component.svelte";
  import Card from "../components/card.component.svelte";
  import Button from "../components/button.component.svelte";

  export let user;
  export let pages;
</script>

<BaseLayout>
  <div class="grid user-info">
    <Avatar {user} size="w190" />
    <span class="user-info__username-container">
      <h2>{user.username}</h2>
      <Date date={user.date} />
    </span>
    <Text text={user.text} className="grid_break-start" />
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

  <div class="grid user__pages-container">
    {#each pages as page}
      <Card {page} />
    {/each}
    <Button style="plus" />
  </div>
</BaseLayout>

<style>
  .user-info__username-container > * {
    margin: 0;
  }
  .user-info__username-container {
    height: min-content;
    grid-column: 2/3;
  }

  .user-info__username-container * {
    margin: 0;
  }

  .user-info__username-container > h2 {
    word-break: break-all;
  }

  @media screen and (max-width: 1268px) {
    .user-info__username-container {
      grid-column: auto;
    }
  }

  @media screen and (max-width: 858px) {
    .user-info__username-container {
      grid-column: 2/4;
    }
  }

  @media screen and (max-width: 650px) {
    .user-info__username-container {
      grid-column: 2/3;
    }
  }

  @media screen and (max-width: 444px) {
    .user-info__username-container {
      gap: 12px;
    }
  }
  @media screen and (max-width: 360px) {
    .user-info__username-container {
      grid-column: 1/-1;
    }
  }
</style>
