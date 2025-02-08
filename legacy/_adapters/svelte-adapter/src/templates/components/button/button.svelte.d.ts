import type { SvelteComponentTyped } from "svelte";

export interface ButtonProps {
  text?: string;
  url?: string;
}

class ButtonCommonType extends SvelteComponentTyped<ButtonProps> {}

export default ButtonCommonType;
