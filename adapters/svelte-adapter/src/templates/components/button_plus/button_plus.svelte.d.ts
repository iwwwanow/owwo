import type { SvelteComponentTyped } from "svelte";

export type ButtonVariant = "common" | "small";

class NodeLinkType extends SvelteComponentTyped<{
  variant: ButtonVariant;
}> {}

export default NodeLinkType;
