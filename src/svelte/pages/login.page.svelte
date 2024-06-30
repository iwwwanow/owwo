<script>
  import BaseLayout from "../layouts/base.layout.svelte";
  import TextInput from "../components/inputs/text.input.svelte";
  import Button from "../components/buttons/default.button.svelte";

  const LOGIN_PLACEHOLDER = "username".toUpperCase();
  const PASSWORD_PLACEHOLDER = "password".toUpperCase();
</script>

<BaseLayout>
  <div class="grid">
    <form method="POST" action="/login" class="login-form">
      <TextInput
        name="username"
        required={true}
        placeholder={LOGIN_PLACEHOLDER}
      />
      <TextInput
        name="password"
        required={true}
        placeholder={PASSWORD_PLACEHOLDER}
      />
      <Button text="Войти" />
    </form>
    <span class="registration-button-container">
      <Button text="Регистрация" url="/registration" />
    </span>
  </div>
</BaseLayout>

<style>
  .login-form,
  .registration-button-container {
    grid-column: 1 / span 2;
  }
</style>
