import type { NodeDateType } from "@site/interfaces";

type DateComponentProps = {
  date: NodeDateType;
};

type DateComponentType = (props: DateComponentProps) => JSX.Element;

export type { DateComponentType };
