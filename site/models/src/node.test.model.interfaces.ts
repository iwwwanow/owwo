// TODO how to do comment annotations on type params

type NodeIdType = string;

type NodeDataType = {
  meta: NodeMetaType;
  // 80 symbols max
  title: string;
  // 240 symbols max
  description: string;
  imageBlog: string;
  image: NodeImageType;
  content: NodeContentType;
  data: NodeDateType;
};

type NodeMetaType = {
  id: NodeIdType;
  parents: Array<NodeIdType>;
  childs: Array<NodeIdType>;
  siblings: Array<NodeIdType>;
};

type NodeImageType = {
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
