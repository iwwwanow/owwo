import type { SvelteComponentTyped } from "svelte";

export interface CProps {
  prop: string;
}

class CType extends SvelteComponentTyped<CProps> {}

export default CType;
