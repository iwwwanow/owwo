<script>
  import NodeExtendedLayout from "../layouts/node-extended.layout.svelte";
  import NodeInfo from "../components/node-info.component.svelte";
  import Date from "../components/date.component.svelte";
  import Text from "../components/text.component.svelte";
  import Hr from "../components/hr.component.svelte";
  import NodeCard from "../components/node-card.component.svelte";
  import FullGridWrapContainer from "../components/full-grid-wrap-container.component.svelte";
  import Logo from "../components/logo.component.svelte";
  import Header from "../fragments/header.fragment.svelte";
  import NodeExtendedContent from "../fragments/node-extended__content.fragment.svelte";
  import NodeNavigation from "../components/node-navigation.component.svelte";
  import NodeInfoContainer from "../components/node-info__container.svelte";

  export let node;

  const { title } = node;
  const { content } = node;
</script>

<NodeExtendedLayout>
  <NodeExtendedContent {content} />

  {#if node.navigationElements}
    <NodeNavigation
      prevNode={node.navigationElements.prevElement}
      nextNode={node.navigationElements.nextElement}
    />
  {/if}

  <div class="wrapper node-extended__layout">
    <div class="grid element-info__data-wrapper">
      <div class="node-info__data-container">
        {#if title}
          <h2 class="node-info__title">{title}</h2>
        {/if}

        <Hr />

        <NodeInfo node={node.meta.author} />
        {#if node.meta.parents}
          <Hr />
          <NodeInfoContainer>
            {#each node.meta.parents as parent}
              <NodeInfo node={parent} />
            {/each}
          </NodeInfoContainer>
        {/if}
        <Hr />
        <Date date={node.date} />
      </div>
      <Text text={node.description} className="grid_break-start" />
    </div>

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
    fill: var(--dark) !important;
  }

  :global(.random-elements__title) {
    color: var(--dark) !important;
  }

  .node-info__title {
    margin: 0;
  }
</style>
