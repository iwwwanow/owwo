<script>
  export let action;
</script>

<form method="POST" {action} class="login-form">
  <slot />
</form>

<style>
  .login-form {
    grid-column: 1 / span 2;
  }
</style>
