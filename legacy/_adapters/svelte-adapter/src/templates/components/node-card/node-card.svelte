<script lang="ts">
  import type { NodeCardProps } from "./node-card.svelte";
  import Image from "./image.component.svelte";

  export let props: NodeCardProps;

  const { node } = props;

  const { id } = node.meta;
  const { image } = node;
  const { title } = node;
  let { description } = node;

  // TODO это зачем?
  const IMAGE_VARIANT = "w190";

  // TODO почему я тут не использую Image component???

  if (description?.markdown.length > 80) {
    description.markdown = description.markdown.slice(0, 80) + " ...";
  }
</script>

<a class="card__wrapper border_light" href={id}>
  <picture class="card__cover-container">
    <source srcset={image.w190_2x} media="(max-width: 360px)" />
    <source srcset="{image.w190}, {image.w190_2x} 2x" />
    <img src={image.original} class="card__img" alt="page card cover" />
  </picture>

  {#if title || description}
    <div class="card__text-container">
      {#if title}
        <h4 class="card__text-header">{title}</h4>
      {/if}
      {#if description?.markdown}
        <h5>{description.markdown}</h5>
      {/if}
    </div>
  {/if}

  <!-- TODO как отображать хавер, чтобы он читался? Не всплывающее окно, а, кажется -->
  <!-- это называется POP-UP, размером в 2 колонки -->
</a>

<style>
  .card__wrapper {
    position: relative;
    cursor: pointer;
    overflow: hidden;
    display: flex;
  }

  .card__wrapper * {
    word-wrap: break-word;
    text-decoration: none;
  }

  .card__text-container {
    width: 100%;
    height: 100%;
    position: absolute;
    padding: 6px 8px;

    display: none;
    pointer-events: none;
    user-select: none;

    color: var(--DARK);
    background-color: var(--WHITE);
    mix-blend-mode: luminosity;
    opacity: 0.96;
  }

  .card__wrapper:hover > .card__text-container {
    display: block;
  }

  .card__text-header {
    margin-bottom: 4px;
  }

  .card__cover-container {
    width: 100%;
  }

  .card__img {
    width: 100%;
  }

  @media screen and (max-width: 360px) {
    .card__wrapper {
      height: 192px;
    }
    .card__img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
</style>
