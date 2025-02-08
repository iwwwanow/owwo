<script lang="ts">
  import { BaseLayout } from "../../layouts";
  import { LoginForm } from "../../components";
  import { TextInput } from "../../components";
  import { Button } from "../../components";

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
