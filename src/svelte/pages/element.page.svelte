<script>
  import ElementLayout from "../layouts/element.layout.svelte";
  import UserInfo from "../components/user-info.component.svelte";
  import Date from "../components/date.component.svelte";
  import Text from "../components/text.component.svelte";
  import Hr from "../components/hr.component.svelte";
  import PageInfo from "../components/page-info.component.svelte";
  import Card from "../components/card.component.svelte";
  import ElementInfo from "../components/element-info.component.svelte";

  export let element;
</script>

<ElementLayout>
  <div class="element__content-wrapper">
    <h1>element-content</h1>
  </div>

  {#if element.navigationElements}
    <div class="grid navigation-elements__container">
      <span> TODO вынеси в отдельный компонент </span>
      <span>
        TODO поднеми на уровень экрана, чтобы эта полоска всегда была в поле
        зрения
      </span>
      <span class="navigation-elements__element">
        <h3 class="navigation-elements__symbol">◂</h3>
        <ElementInfo element={element.navigationElements.prevElement} />
      </span>
      <span class="navigation-elements__element">
        <ElementInfo element={element.navigationElements.nextElement} />
        <h3 class="navigation-elements__symbol">▸</h3>
      </span>
    </div>
  {/if}

  <div class="grid element-info__data-wrapper">
    <div class="element-info__data-container">
      {#if element.title}
        <h2 class="element-info__title">{element.title}</h2>
      {/if}
      <UserInfo user={element.user} />
      <Date date={element.date} />
      <Hr />
      {#if element.pages}
        <div class="element-info__pages-container">
          {#each element.pages as page}
            <PageInfo {page} />
          {/each}
        </div>
      {/if}
    </div>
    <Text text={element.text} className="grid_break-start" />
  </div>

  <div class="grid">
    <h5>TODO Зависит от количества колонок в сетке (от разрешения)</h5>
    <h5>TODO одна строчка</h5>
    <h5>make element info image bigger (see on avatars on home page)</h5>
    <h5>RANDOM USER ELEMENTS</h5>
  </div>

  <div class="grid">
    <span class="element__random-elements-container">
      <h3 class="element__random-elements-container-title">
        username-luminosity
      </h3>
      {#each element.randomUserElements as randomElement}
        <ElementInfo element={randomElement} type="cover" />
      {/each}
    </span>
  </div>

  <div class="grid">
    <span class="element__random-elements-container">
      <h3 class="element__random-elements-container-title">
        owwo-logo-luminosity
      </h3>
      {#each element.randomOwwoElements as randomElement}
        <ElementInfo element={randomElement} type="cover" />
      {/each}
    </span>
  </div>
</ElementLayout>

<style>
  .element__random-elements-container {
    grid-column: 1/-1;
    position: relative;

    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .element__random-elements-container-title {
    position: absolute;
  }

  .element__content-wrapper {
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .element-info__pages-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: calc(var(--gap-grid) / 4);
  }

  .navigation-elements__container * {
    margin: 0;
  }

  .navigation-elements__element {
    width: fit-content;
    display: flex;
    flex-direction: row;
    gap: var(--gap-v);
  }

  .navigation-elements__symbol {
    color: var(--medium);
  }

  .navigation-elements__element:hover .navigation-elements__symbol {
    color: black;
  }
</style>
