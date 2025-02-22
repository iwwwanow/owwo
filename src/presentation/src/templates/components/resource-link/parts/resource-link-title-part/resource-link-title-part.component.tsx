import type { ResourceLinkTitleProps } from "./resource-link-title-part.interfaces";

export const ResourceLinkTitlePart: Component<ResourceLinkTitleProps> = (
  props,
) => {
  const { title } = props;

  return (
    <h5 style="word-break: break-all" class="element-info__title">
      {title}
    </h5>
  );
};
