import { BaseLayout } from "@site-ui/base-layout";

import { Button } from "@ui/button";
import { TextInput } from "@ui/input";
import { LoginForm } from "@ui/login-form";

import type { LoginPageType } from "./login-page.interface";

const LoginPage: LoginPageType = () => {
  // TODO to constants
  const LOGIN_PLACEHOLDER = "username".toUpperCase();
  const PASSWORD_PLACEHOLDER = "password".toUpperCase();

  return (
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
  );
};

export { LoginPage };
