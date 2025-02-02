import type { SvelteComponentTyped } from "svelte";

export interface NodeTitleProps {
  title: string;
}

class NodeTitleType extends SvelteComponentTyped<NodeTitleProps> {}

export default NodeTitleType;
