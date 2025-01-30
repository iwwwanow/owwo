import type { SvelteComponentTyped } from "svelte";

export interface CardContainerProps {
  className: string;
}

class CardContainerType extends SvelteComponentTyped<CardContainerProps> {}

export default CardContainerType;
