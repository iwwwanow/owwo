import { CssModule } from "@ui/css-module";

import type { LoginFormType } from "./login-form.interface";
import Style from "./login-form.module.css";

export const LoginForm: LoginFormType = (props) => {
  const { action, children } = props;

  return (
    <>
      <form method="POST" action={action} class="login-form">
        {children}
      </form>
      <CssModule filepath={Style} />
    </>
  );
};
