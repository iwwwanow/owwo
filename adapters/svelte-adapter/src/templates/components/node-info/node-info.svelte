<script lang="ts">
  import type { NodeInfoProps } from "./node-info.svelte";

  import Hr from "./hr.component.svelte";
  import Date from "./date.component.svelte";
  import Image from "./image.component.svelte";

  import NodeTitle from "./node-title.component.svelte";
  import NodeLink from "./node-link.component.svelte";
  import NodeLinkContainer from "./node-link__container.component.svelte";

  export let props: NodeInfoProps;

  let { node } = props;

  const id = node.meta.id;
  const image = node.image;
  const title = node.title;
  const description = node.description;
  const author = node.meta.author;
  // TODO почему бы не объединить author и authors?
  const authors = node.meta.authors;
  const parents = node.meta.parents;
  const date = node.date;

  const isTextDataExist = !!title || !!authors || !!description || !!date;
  const isDataExist = !!image || isTextDataExist;
</script>

{#if isDataExist}
  <span class="node-info node-info__data-wrapper">
    {#if image}
      <Image {image} {id} variant="w190" />
    {/if}

    {#if isTextDataExist}
      <div class="node-info__data-container">
        {#if title}
          <NodeTitle {title} />
        {/if}

        {#if author}
          <Hr text="author:" />
          <NodeLinkContainer>
            <NodeLink node={author} />
          </NodeLinkContainer>
        {/if}

        {#if authors}
          <Hr text="authors" />
          <NodeLinkContainer>
            {#each authors as author}
              <NodeLink node={author} />
            {/each}
          </NodeLinkContainer>
        {/if}

        {#if parents}
          <Hr text="pages" />
          <NodeLinkContainer>
            {#each parents as parent}
              <NodeLink node={parent} />
            {/each}
          </NodeLinkContainer>
        {/if}

        {#if description?.html}
          <Hr text="description" />
          {@html description.html}
        {/if}

        {#if date}
          <Hr text="last-modification/creation date" />
          <Date {date} />
        {/if}
      </div>
    {/if}
  </span>
{/if}

<style>
  .node-info__data-wrapper {
    display: flex;
    flex-direction: column;
    gap: var(--GRID-GAP-2);
  }

  :global(.node-info .node-title) {
    margin: 0;
  }

  @media screen and (max-width: 650px) {
    .node-info__data-wrapper {
      grid-column: 1/-1;
      flex-direction: row;
      justify-content: space-between;
      gap: var(--GRID-GAP);
    }
    :global(.node-info__data-wrapper > *) {
      width: calc(50% - var(--GRID-GAP-2));
    }
  }

  @media screen and (max-width: 360px) {
    .node-info__data-wrapper {
      grid-column: 1 / end;
      flex-direction: column;
      gap: var(--GRID-GAP);
    }
    /* TODO переделать */
    :global(.node-info__data-wrapper > *) {
      width: 100%;
    }
  }
</style>
