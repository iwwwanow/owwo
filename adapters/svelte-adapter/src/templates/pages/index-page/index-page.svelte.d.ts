import type { NodeDataType } from "@contexts/site-core";
import type { SvelteComponentTyped } from "svelte";

export interface IndexPageProps {
  users: Array<NodeDataType>;
}

class CType extends SvelteComponentTyped<IndexPageProps> {}

export default CType;
