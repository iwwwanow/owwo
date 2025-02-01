import type { NodeDataType } from "@contexts/site-core";
import type { NodeIdType } from "@contexts/site-core";
import type { NodeImageType } from "@contexts/site-core";
import type { NodeDateType } from "@contexts/site-core";
import type { SvelteComponentTyped } from "svelte";

export interface NodeInfoProps {
  node: NodeDataType;
}

class NodeInfoType extends SvelteComponentTyped<NodeInfoProps> {}

export default NodeInfoType;
