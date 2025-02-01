<script lang="ts">
  import type { DateProps } from "./date.svelte";

  export let props: DateProps;

  const { date } = props;

  const localDate = date.last.toLocaleDateString("ru-RU");
  const localCreationDate = date.creation.toLocaleDateString("ru-RU");
</script>

<div class="date-container">
  <h5 class="date_creation">{localCreationDate}</h5>
  <h6 class="date_last">{localDate}</h6>
</div>

<style>
  .date-container {
    display: flex;
    gap: var(--GRID-GAP-2);
  }
  .date_creation {
    color: var(--MEDIUM);
  }
  .date_last {
    color: var(--LIGHT);
  }
</style>
