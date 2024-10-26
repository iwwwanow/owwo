import type { NodeDataType } from "@site/interfaces";
import type { ClientType } from "@site/interfaces";

type EditorFormProps = {
  node: NodeDataType;
  client: ClientType;
};

type EditorFormType = (props: EditorFormProps) => JSX.Element;

export type { EditorFormType };
