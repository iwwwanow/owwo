import type { NodeDataType } from "@contexts/site-core";
import type { ClientDataType } from "@contexts/site-core";
import type { SvelteComponentTyped } from "svelte";

export interface EditorFormFragmentsProps {
  node: NodeDataType;
  client: ClientDataType;
}

class EditorFormFragmentsType extends SvelteComponentTyped<EditorFormFragmentsProps> {}

export default EditorFormFragmentsType;
