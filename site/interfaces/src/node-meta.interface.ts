import type { NodeDataType } from "./node-data.interface";
import type { NodeIdType } from "./node-id.interface";

type NodeMetaType = {
  id: NodeIdType;
  author?: NodeDataType;
  authors?: Array<NodeDataType>;
  parents?: Array<NodeDataType>;
  childs?: Array<NodeDataType>;
  siblings?: Array<NodeDataType>;
};

export type { NodeMetaType };
