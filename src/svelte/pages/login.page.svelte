<script>
  import BaseLayout from "../layouts/base.layout.svelte";
  import LoginForm from "../components/login-form.component.svelte";
  import TextInput from "../components/inputs/text.input.svelte";
  import Button from "../components/buttons/default.button.svelte";

  const LOGIN_PLACEHOLDER = "username".toUpperCase();
  const PASSWORD_PLACEHOLDER = "password".toUpperCase();
</script>

<BaseLayout>
  <div class="grid">
    <LoginForm action="/login">
      <TextInput
        id="login__input-username"
        name="username"
        required={true}
        placeholder={LOGIN_PLACEHOLDER}
      />
      <TextInput
        id="login__input-password"
        name="password"
        type="password"
        required={true}
        placeholder={PASSWORD_PLACEHOLDER}
      />
      <Button text="Войти" />
    </LoginForm>

    <span class="registration-button-container">
      <Button text="Регистрация" url="/signup" />
    </span>
  </div>
</BaseLayout>

<style>
  .registration-button-container {
    grid-column: 1 / span 2;
  }
</style>
