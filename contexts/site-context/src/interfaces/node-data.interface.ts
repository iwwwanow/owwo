import type { NodeContentType } from "./node-content.interface";
import type { NodeDateType } from "./node-date.interface";
import type { NodeImageType } from "./node-image.interface";
import type { NodeMetaType } from "./node-meta.interface";

export type NodeMainDataType = {
  title: string; // 80 symbols max
  description: NodeContentType; // 240 symbols max
  // TODO заменить блоб на avatar-id/cover-id
  blob: string;
};

export type NodeDataType = NodeMainDataType & {
  meta: NodeMetaType;
  image?: NodeImageType;
  content?: NodeContentType;
  date?: NodeDateType;
};
