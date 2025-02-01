import type { SvelteComponentTyped } from "svelte";
import type { HTMLFormAttributes } from "svelte/elements";

export interface LoginFormProps {
  action: HTMLFormAttributes["action"];
}

class LoginFormType extends SvelteComponentTyped<LoginFormProps> {}

export default LoginFormType;
