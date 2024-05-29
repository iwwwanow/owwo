<script>
  import ElementLayout from "../layouts/element.layout.svelte";
  import UserInfo from "../components/user-info.component.svelte";
  import Date from "../components/date.component.svelte";
  import Text from "../components/text.component.svelte";
  import Hr from "../components/hr.component.svelte";
  import PageInfo from "../components/page-info.component.svelte";
  import Card from "../components/card.component.svelte";
  import ElementInfo from "../components/element-info.component.svelte";
  import FullGridWrapContainer from "../components/full-grid-wrap-container.component.svelte";
  import Logo from "../components/logo.component.svelte";
  import Header from "../components/header.component.svelte";

  export let element;
</script>

<ElementLayout>
  <div class="element__content-wrapper">
    <div class="element__content-container">
      <h1>element-content</h1>
    </div>
    {#if element.navigationElements}
      <div class="grid navigation-elements__wrapper">
        <div class="navigation-elements__container">
          <span class="navigation-elements__element">
            <ElementInfo
              element={element.navigationElements.prevElement}
              leftSymbol="◂"
            />
          </span>
          <span class="navigation-elements__element">
            <ElementInfo
              element={element.navigationElements.nextElement}
              rightSymbol="▸"
            />
          </span>
        </div>
      </div>
    {/if}
  </div>

  <div class="wrapper element-layout">
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

    <FullGridWrapContainer limit={32}>
      <h2 class="random-elements__title">
        {element.user.username}
      </h2>
      {#each element.randomUserElements as randomElement}
        <ElementInfo element={randomElement} type="cover" />
      {/each}
    </FullGridWrapContainer>

    <FullGridWrapContainer>
      <Logo className="random-elements__title random-elements__logo" />
      {#each element.randomOwwoElements as randomElement}
        <ElementInfo element={randomElement} type="cover" />
      {/each}
    </FullGridWrapContainer>

    <Header />
  </div>
</ElementLayout>

<style>
  :global(.random-elements__title) {
    mix-blend-mode: difference;
    pointer-events: none;
    position: absolute !important;
    top: var(--gap-v);
    left: var(--gap-h);
  }

  :global(.random-elements__logo path) {
    fill: var(--dark) !important;
  }

  :global(.random-elements__title) {
    color: var(--dark) !important;
  }

  .element__content-wrapper {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .element__content-container {
    width: 100%;
    min-height: calc(100vh - 32px);
    display: flex;
    justify-content: center;
    align-items: center;
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

  .navigation-elements__wrapper {
    width: 100%;
    padding: 8px;
  }

  .navigation-elements__container {
    grid-column: 1/-1;
    display: flex;
    flex-direction: row;
    row-gap: var(--gap-v);
    flex-wrap: wrap-reverse;
    justify-content: space-between;
  }
</style>
