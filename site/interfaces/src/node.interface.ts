// TODO how to do comment annotations on type params
import type { NodeContentType } from "./node-content.interface";
import type { NodeDateType } from "./node-date.interface";
import type { NodeImageType } from "./node-image.interface";

type NodeTypes = "userNode" | "pageNode" | "elementNode";

type NodeIdType = string;

type NodeDataType = NodeMainDataType & {
  meta: NodeMetaType;
  image?: NodeImageType;
  content?: NodeContentType;
  date?: NodeDateType;
};

type NodeMetaType = {
  // TODO эти типы используются на странице только как превью. можно сделать укороченную версию даты.
  id: NodeIdType;
  // TODO maybe rename author to creator??
  author?: NodeDataType;
  authors?: Array<NodeDataType>;
  parents?: Array<NodeDataType>;
  childs?: Array<NodeDataType>;
  siblings?: Array<NodeDataType>;
};

type NodeMainDataType = {
  // 80 symbols max
  title: string;
  // 240 symbols max
  description: NodeContentType;
  blob: string;
};

export type { NodeDataType };
export type { NodeTypes };
export type { NodeContentType };
