<script>
  export let action;
</script>

<form method="POST" {action} class="login-form">
  <slot />
</form>

<style>
  .login-form {
    grid-column: 1 / span 2;
    display: flex;
    flex-direction: column;
    gap: var(--GRID-GAP-2);
  }
</style>
