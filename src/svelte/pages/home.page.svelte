<script>
  import BaseLayout from "../layouts/base.layout.svelte";
  import Avatar from "../components/avatar.component.svelte";
  import UserInfo from "../components/user-info.component.svelte";

  export let users;
</script>

<BaseLayout>
  <div class="grid">
    <span class="home__users-container">
      {#each users as user}
        <UserInfo {user} type="avatar" />
      {/each}
    </span>
  </div>

  <div class="grid todo" style="color: red;">
    <ul>
      <li>реклама в пикселях</li>
      <li>чем ближе пиксель к левому краю, тем выше цена</li>
      <li>потомучто его увидят большее количество людей</li>
    </ul>
  </div>

  <div class="grid todo" style="color: red;">
    <ul>
      <li>реклама в блоках</li>
      <li>дать пользователю сделать адаптив под несколько разрешений</li>
      <li>сообщить о том, как будет выглядеть на nojs версии</li>
    </ul>
  </div>

  <div class="grid">
    TODO redirect to effectivnayarabota1 page OWWO
    <h1>owwo big-logo</h1>
  </div>
</BaseLayout>

<style>
  .home__users-container {
    grid-column: 1/-1;

    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
</style>
