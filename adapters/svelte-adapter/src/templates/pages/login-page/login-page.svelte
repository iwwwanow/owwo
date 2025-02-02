<script lang="ts">
  import { BaseLayout } from "../../layouts";
  // TODO to fragments?
  import { LoginForm } from "../../components";
  import { TextInput } from "../../components";
  import { Button } from "../../components";

  // TODO to constants?
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
