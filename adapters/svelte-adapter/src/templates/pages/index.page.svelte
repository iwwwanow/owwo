<script lang="ts">
  import BaseLayout from "../layouts/base.layout.svelte";
  import NodeLink from "../components/node-link.component.svelte";
  import FullGridWrapContainer from "../components/full-grid-wrap-container.component.svelte";

  export let users;
</script>

<BaseLayout>
  <FullGridWrapContainer>
    {#each users as user}
      <NodeLink id={user.meta.id} image={user.image} />
    {/each}
  </FullGridWrapContainer>

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
