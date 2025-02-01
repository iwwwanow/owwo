import type { NodeDateType } from "@contexts/site-core";
import type { SvelteComponentTyped } from "svelte";

export interface DateProps {
  date: NodeDateType;
}

class DateType extends SvelteComponentTyped<DateProps> {}

export default DateType;
