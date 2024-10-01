// TODO how to do comment annotations on type params

type NodeTypes = "userNode" | "pageNode" | "elementNode";

type NodeIdType = string;

type NodeDataType = NodeMainDataType & {
  meta: NodeMetaType;
  image?: NodeImageType;
  content?: NodeContentType;
  date?: NodeDateType;
};

type NodeMetaType = {
  id: NodeIdType;
  author: NodeIdType;
  authors?: Array<NodeIdType>;
  parents?: Array<NodeIdType>;
  childs?: Array<NodeIdType>;
  siblings?: Array<NodeIdType>;
};

type NodeMainDataType = {
  // 80 symbols max
  title: string;
  // 240 symbols max
  description: NodeContentType;
  blob: string;
};

type NodeImageType = {
  blob: string;
  original: string;
  h16: string;
  h16_2x: string;
  h32: string;
  h32_2x: string;
  w1080: string;
  w190: string;
  w190_2x: string;
};

type NodeContentType = {
  markdown: string;
  html: string;
  preview: string;
};

type NodeDateType = {
  creation: Date;
  last: Date;
};

export type { NodeDataType };
export type { NodeTypes };
