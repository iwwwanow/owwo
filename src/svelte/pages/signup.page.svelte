<script>
  import BaseLayout from "../layouts/base.layout.svelte";
  import LoginForm from "../components/login-form.component.svelte";
  import TextInput from "../components/inputs/text.input.svelte";
  import Button from "../components/buttons/default.button.svelte";

  const LOGIN_PLACEHOLDER = "username".toUpperCase();
  const PASSWORD_PLACEHOLDER = "password".toUpperCase();
  const CONFIRM_PLACEHOLDER = "CONFIRM PASSWORD".toUpperCase();
</script>

<BaseLayout>
  <div class="grid">
    <LoginForm action="signup">
      <TextInput
        id="signup__input-username"
        name="username"
        required={true}
        placeholder={LOGIN_PLACEHOLDER}
      />
      <TextInput
        id="signup__input-password"
        name="password"
        type="password"
        required={true}
        placeholder={PASSWORD_PLACEHOLDER}
      />
      <TextInput
        id="signup__input-confirm-password"
        name="password"
        type="password"
        required={true}
        placeholder={CONFIRM_PLACEHOLDER}
      />
      <Button text="Зарегистрироваться" />
    </LoginForm>
  </div>
</BaseLayout>
