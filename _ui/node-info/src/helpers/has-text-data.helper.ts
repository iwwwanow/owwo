import type { NodeDataType } from "@site/interfaces";
import type { NodeContentType } from "@site/interfaces";
import type { NodeDateType } from "@site/interfaces";

export const hasTextDataHelper = ({
  title,
  authors,
  description,
  date,
}: {
  title: string;
  authors?: Array<NodeDataType>;
  description: NodeContentType;
  date?: NodeDateType;
}): boolean => {
  return !!title || !!authors || !!description || !!date;
};
