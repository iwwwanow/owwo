import { Button } from "../../components";
import { TextInput } from "../../components";
import { LoginForm } from "../../components";
import { BaseLayout } from "../../layouts";
import { USERNAME_INPUT_NAME } from "./signup-page.constants";
import { PASSWORD_INPUT_NAME } from "./signup-page.constants";
import { CONFIRM_PASSWORD_INPUT_NAME } from "./signup-page.constants";
import { USERNAME_PLACEHOLDER } from "./signup-page.constants";
import { PASSWORD_PLACEHOLDER } from "./signup-page.constants";
import { CONFIRM_PLACEHOLDER } from "./signup-page.constants";
import type { SignupPageType } from "./signup-page.interface";

export const SignupPage: SignupPageType = () => {
  return (
    <BaseLayout>
      <div class="grid">
        <LoginForm action="signup">
          <TextInput
            id="signup__input-username"
            name={USERNAME_INPUT_NAME}
            required={true}
            placeholder={USERNAME_PLACEHOLDER}
          />
          <TextInput
            id="signup__input-password"
            name={PASSWORD_INPUT_NAME}
            type="password"
            required={true}
            placeholder={PASSWORD_PLACEHOLDER}
          />
          <TextInput
            id="signup__input-confirm-password"
            name={CONFIRM_PASSWORD_INPUT_NAME}
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
