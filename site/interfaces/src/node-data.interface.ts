import type { NodeContentType } from "./node-content.interface";
import type { NodeDateType } from "./node-date.interface";
import type { NodeImageType } from "./node-image.interface";
import type { NodeMetaType } from "./node-meta.interface";

type NodeMainDataType = {
  // 80 symbols max
  title: string;
  // 240 symbols max
  description: NodeContentType;
  blob: string;
};

type NodeDataType = NodeMainDataType & {
  meta: NodeMetaType;
  image?: NodeImageType;
  content?: NodeContentType;
  date?: NodeDateType;
};

export type { NodeDataType };
