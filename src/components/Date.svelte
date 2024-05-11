<script>
  export let date;

  const localDate = date.last.toLocaleDateString("ru-RU");
  const localCreationDate = date.creation.toLocaleDateString("ru-RU");
</script>

<div class="date-container">
  <h6 class="date_creation">{localCreationDate}</h6>
  <h6 class="date_last">{localDate}</h6>
</div>

<style>
  .date-container {
    display: flex;
    gap: 8px;
  }
  .date_creation {
    color: var(--dark);
  }
  .date_last {
    color: var(--light);
  }
</style>
