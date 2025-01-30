import type { SvelteComponentTyped } from "svelte";

class ButtonCommonType extends SvelteComponentTyped<{
  text?: string;
  url?: string;
}> {}

export default ButtonCommonType;
