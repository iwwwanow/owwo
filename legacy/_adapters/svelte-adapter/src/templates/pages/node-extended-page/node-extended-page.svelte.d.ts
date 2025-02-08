import type { NodeDataType } from "@contexts/site-core";
import type { SvelteComponentTyped } from "svelte";

export interface NodeExtendedPageProps {
  node: NodeDataType;
}

class CType extends SvelteComponentTyped<NodeExtendedPageProps> {}

export default CType;
