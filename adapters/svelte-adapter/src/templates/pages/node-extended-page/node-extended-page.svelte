<script lang="ts">
  import type { NodeExtendedPageProps } from "./node-extended-page.svelte";
  import { NodeExtendedLayout } from "../../layouts";
  import { Hr } from "../../components";
  import { NodeCard } from "../../components";

  import { FullGridWrapContainer } from "../../components";
  import { Logo } from "../../components";
  import { HeaderFragment } from "../../fragments";

  import { NodeExtendedContentFragment } from "../../fragments";
  // TODO to fragments?
  import { NodeNavigation } from "../../components";

  import { Text } from "../../components";
  import { NodeTitle } from "../../components";
  import { NodeInfo } from "../../components";

  export let props: NodeExtendedPageProps;
  const { node } = props;

  const { title } = node;
  const { content } = node;

  // TODO refactor
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

  <NodeExtendedContentFragment {content} />

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
      <div class="grid__right-content">
        <NodeTitle title={node.title} />
        <Text text={node.description} className="grid__right-content" />
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

    <HeaderFragment position="bottom" />
  </div>
</NodeExtendedLayout>

<style>
  :global(.random-elements__title) {
    mix-blend-mode: difference;
    pointer-events: none;
    position: absolute !important;
    top: var(--GRID-GAP-2);
    left: var(--GRID-GAP-4);
  }

  :global(.random-elements__logo path) {
    fill: var(--DARK) !important;
  }

  :global(.random-elements__title) {
    color: var(--DARK) !important;
  }
</style>
