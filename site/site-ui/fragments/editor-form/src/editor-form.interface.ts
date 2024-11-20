import type { NodeDataType } from "@site/interfaces";
import type { ClientDataType } from "@site/interfaces";

type EditorFormProps = {
  node: NodeDataType;
  client: ClientDataType;
};

type EditorFormType = (props: EditorFormProps) => JSX.Element;

export type { EditorFormType };
