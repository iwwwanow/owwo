import type { NodeDataType } from "./node-data.interface";
import type { NodeIdType } from "./node-id.interface";

export type NodeMetaType = {
  id: NodeIdType;
  author?: NodeDataType;
  authors?: Array<NodeDataType>;
  parents?: Array<NodeDataType>;
  childs?: Array<NodeDataType>;
  siblings?: Array<NodeDataType>;
};
