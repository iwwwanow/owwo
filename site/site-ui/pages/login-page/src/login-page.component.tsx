import { BaseLayout } from "@site-ui/base-layout";
import { LOGIN_ROUTE_PATH } from "@site/constants";
import { SIGNUP_ROUTE_PATH } from "@site/constants";
import { USERNAME_INPUT_NAME } from "@site/constants";
import { PASSWORD_INPUT_NAME } from "@site/constants";

import { Button } from "@ui/button";
import { CssModule } from "@ui/css-module";
import { TextInput } from "@ui/input";
import { LoginForm } from "@ui/login-form";

import { USERNAME_PLACEHOLDER } from "./login-page.constants";
import { PASSWORD_PLACEHOLDER } from "./login-page.constants";
import type { LoginPageType } from "./login-page.interface";
import Style from "./login-page.module.css";

const LoginPage: LoginPageType = () => {
  return (
    <>
      <BaseLayout>
        <div class="grid">
          <LoginForm action={LOGIN_ROUTE_PATH}>
            <TextInput
              id="login__input-username"
              name={USERNAME_INPUT_NAME}
              required={true}
              placeholder={USERNAME_PLACEHOLDER}
            />
            <TextInput
              id="login__input-password"
              name={PASSWORD_INPUT_NAME}
              type="password"
              required={true}
              placeholder={PASSWORD_PLACEHOLDER}
            />
            <Button text="Войти" />
          </LoginForm>

          <span class="registration-button-container">
            <Button text="Регистрация" url={SIGNUP_ROUTE_PATH} />
          </span>
        </div>
      </BaseLayout>
      <CssModule filepath={Style} />
    </>
  );
};

export { LoginPage };
