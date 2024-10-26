import type { NodeDataType } from "./node-data.interface";
import type { NodeIdType } from "./node-id.interface";

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

export type { NodeMetaType };
