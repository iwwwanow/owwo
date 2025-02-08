import type { NodeDataType } from "@contexts/site-core";
import type { ClientDataType } from "@contexts/site-core";
import type { SvelteComponentTyped } from "svelte";

export interface NodePageProps {
  node: NodeDataType;
  client: ClientDataType;
}

class CType extends SvelteComponentTyped<NodePageProps> {}

export default CType;
