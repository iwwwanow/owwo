import { CssModule } from "@ui/css-module";

import type { LoginFormType } from "./login-form.interface";
import Style from "./login-form.style.css";

const LoginForm: LoginFormType = (props) => {
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

export { LoginForm };
