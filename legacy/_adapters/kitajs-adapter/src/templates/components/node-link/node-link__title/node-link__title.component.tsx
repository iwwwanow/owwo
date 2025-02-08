import type { NodeLinkTitleType } from "./node-link__title.interfaces";

export const NodeLinkTitle: NodeLinkTitleType = (props) => {
  const { title } = props;

  return (
    <h5 style="word-break: break-all" class="element-info__title">
      {title}
    </h5>
  );
};
