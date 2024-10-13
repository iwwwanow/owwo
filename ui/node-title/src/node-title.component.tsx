import type { NodeTitleType } from "./node-title.interface";

const NodeTitle: NodeTitleType = (props) => {
  const { title } = props;

  return <h2 class="node-title">{title}</h2>;
};

export { NodeTitle };
