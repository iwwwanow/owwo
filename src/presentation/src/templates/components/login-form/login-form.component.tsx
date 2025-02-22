import { CssModule } from "../";
import type { LoginFormProps } from "./login-form.interface";
import Style from "./login-form.module.css";

export const LoginForm: Component<LoginFormProps> = (props) => {
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
