import type { SvelteComponentTyped } from "svelte";

type ButtonPlusVariant = "common" | "small";

export interface ButtonPlusProps {
  variant: ButtonPlusVariant;
}

class NodeLinkType extends SvelteComponentTyped<ButtonPlusProps> {}

export default NodeLinkType;
