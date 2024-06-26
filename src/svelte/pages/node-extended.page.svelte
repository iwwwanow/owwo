<script>
  import NodeExtendedLayout from "../layouts/node-extended.layout.svelte";
  import Hr from "../components/hr.component.svelte";
  import NodeCard from "../components/node-card.component.svelte";

  import FullGridWrapContainer from "../components/full-grid-wrap-container.component.svelte";
  import Logo from "../components/logo.component.svelte";
  import Header from "../fragments/header.fragment.svelte";

  import NodeExtendedContent from "../fragments/node-extended__content.fragment.svelte";
  import NodeNavigation from "../components/node-navigation.component.svelte";

  import Text from "../components/text.component.svelte";
  import NodeTitle from "../components/node-title.component.svelte";
  import NodeInfo from "../components/node-info.component.svelte";

  export let node;

  const { title } = node;
  const { content } = node;

  const siblingsArray = node.meta.siblings;
  const siblingsLength = siblingsArray.length;
  const currentSiblingId = node.meta.id;
  const currentSiblingIndex = siblingsArray.findIndex((sibling, index) => {
    if (sibling.meta.id === currentSiblingId) return index;
    else return 0;
  });

  // TODO make it optional. only on js, client side
  const prevSibling = siblingsArray[currentSiblingIndex - 1];
  const nextSibling = siblingsArray[currentSiblingIndex + 1];
</script>

<NodeExtendedLayout>
  <div class="grid todo" style="color: red;">
    <ul>
      <li>elements отображаются оригинальном формате</li>
      <li>
        возможность добавить скрипт из стандартной библиотеки, который меняет
        верстку на extended
      </li>
    </ul>
  </div>

  <NodeExtendedContent {content} />

  {#if prevSibling || nextSibling}
    <NodeNavigation
      current={currentSiblingIndex}
      length={siblingsLength}
      prevNode={prevSibling}
      nextNode={nextSibling}
    />
  {/if}

  <div class="wrapper node-extended__layout">
    <span class="grid element-info__data-wrapper">
      <NodeInfo {node} title={false} description={false} />
      <div class="grid_break-start">
        <NodeTitle title={node.title} />
        <Text text={node.description} className="grid_break-start" />
      </div>
    </span>

    <!-- <FullGridWrapContainer limit={32}> -->
    <!--   <h2 class="random-elements__title"> -->
    <!--     {node.meta.author} -->
    <!--   </h2> -->
    <!--   {#each node.randomUserElements as randomElement} -->
    <!--     <NodeInfo node={randomElement} type="cover" /> -->
    <!--   {/each} -->
    <!-- </FullGridWrapContainer> -->

    <!-- <FullGridWrapContainer> -->
    <!--   <Logo className="random-elements__title random-elements__logo" /> -->
    <!--   {#each node.randomOwwoElements as randomElement} -->
    <!--     <NodeInfo node={randomElement} type="cover" /> -->
    <!--   {/each} -->
    <!-- </FullGridWrapContainer> -->

    <Header bottom />
  </div>
</NodeExtendedLayout>

<style>
  :global(.random-elements__title) {
    mix-blend-mode: difference;
    pointer-events: none;
    position: absolute !important;
    top: var(--gap-v);
    left: var(--gap-h);
  }

  :global(.random-elements__logo path) {
    fill: var(--DARK) !important;
  }

  :global(.random-elements__title) {
    color: var(--DARK) !important;
  }
</style>
