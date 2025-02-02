import type { SvelteComponentTyped } from "svelte";

type PositionType = "common" | "bottom";

export interface HeaderFragmentProps {
  position?: PositionType;
}

class HeaderFragmentType extends SvelteComponentTyped<HeaderFragmentProps> {}

export default HeaderFragmentType;
