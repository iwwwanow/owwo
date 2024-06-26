<script>
  import PageInfoCover from "./page-info__cover.component.svelte";
  export let page;
</script>

<a href="/page/{page.pageId}" class="page-info__container">
  <PageInfoCover cover={page.cover} />
  <h5 style="word-break: break-all" class="page-info__title">
    {page.title}
  </h5>
</a>

<style>
  .page-info__container {
    --PAGE-INFO-COLOR: var(--DARK);
    display: flex;
    gap: calc(var(--gap-grid) / 8);
    text-decoration-color: var(--PAGE-INFO-COLOR);
    color: var(--PAGE-INFO-COLOR);
  }
  .page-info__container:hover {
    opacity: 0.8;
  }
</style>
