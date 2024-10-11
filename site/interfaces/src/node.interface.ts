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
  // TODO эти типы используются на странице только как превью. можно сделать укороченную версию даты.
  id: NodeIdType;
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
