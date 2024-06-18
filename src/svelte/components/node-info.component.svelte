<script>
  import Hr from "./hr.component.svelte";
  import Date from "./date.component.svelte";
  import Image from "./image.component.svelte";

  import NodeTitle from "./node-title.component.svelte";
  import NodeLink from "./node-link.component.svelte";
  import NodeLinkContainer from "./node-link__container.component.svelte";

  export let node;

  export let id;
  export let image;
  export let title;
  export let author;
  export let authors;
  export let description;
  export let date;

  if (node) {
    id = node.meta.id;
    image = node.image;
    if (title === undefined) title = node.title;
    if (description === undefined) description = node.description;
    author = node.meta.author;
    authors = node.meta.authors;
    date = node.date;
  }

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
    gap: var(--gap-v);
  }

  :global(.node-info .node-title) {
    margin: 0;
  }

  @media screen and (max-width: 650px) {
    .node-info__data-wrapper {
      grid-column: 1/-1;
      flex-direction: row;
      justify-content: space-between;
      gap: var(--grid-gap);
    }
    :global(.node-info__data-wrapper > *) {
      width: calc(50% - calc(var(--gap-grid) / 2));
    }
  }

  @media screen and (max-width: 360px) {
    .node-info__data-wrapper {
      grid-column: 1 / end;
      flex-direction: column;
      gap: var(--gap-grid);
    }
    /* TODO переделать */
    :global(.node-info__data-wrapper > *) {
      width: 100%;
    }
    :global(.node-info__container) {
      max-width: calc(50% - calc(var(--gap-grid) / 2));
    }
  }
</style>
