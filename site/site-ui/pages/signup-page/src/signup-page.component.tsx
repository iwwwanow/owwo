import { BaseLayout } from "@site-ui/base-layout";

import { Button } from "@ui/button";
import { TextInput } from "@ui/input";
import { LoginForm } from "@ui/login-form";

import { LOGIN_PLACEHOLDER } from "./signup-page.constants";
import { PASSWORD_PLACEHOLDER } from "./signup-page.constants";
import { CONFIRM_PLACEHOLDER } from "./signup-page.constants";
import type { SignupPageType } from "./signup-page.interface";

const SignupPage: SignupPageType = () => {
  return (
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
  );
};

export { SignupPage };
