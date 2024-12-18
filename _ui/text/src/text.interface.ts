import type { NodeContentType } from "@site/interfaces";

type TextProps = {
  text: NodeContentType;
  className?: string;
};

type TextType = (props: TextProps) => JSX.Element;

export type { TextType };
