import { Button } from "../../components";
import { CssModule } from "../../components";
import { TextInput } from "../../components";
import { LoginForm } from "../../components";
import { BaseLayout } from "../../layouts";
import { USERNAME_PLACEHOLDER } from "./login-page.constants";
import { PASSWORD_PLACEHOLDER } from "./login-page.constants";
import { LOGIN_ROUTE_PATH } from "./login-page.constants";
import { SIGNUP_ROUTE_PATH } from "./login-page.constants";
import { USERNAME_INPUT_NAME } from "./login-page.constants";
import { PASSWORD_INPUT_NAME } from "./login-page.constants";
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
