<script>
  export let date;

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
    gap: var(--VERTICAL-GAP);
  }
  .date_creation {
    color: var(--MEDIUM);
  }
  .date_last {
    color: var(--LIGHT);
  }
</style>
