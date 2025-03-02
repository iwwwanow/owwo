import type { ResourceLinkImageProps } from "./resource-link-image-part.interface.js";
import { ResourceLinkImageBig } from "./variants/index.js";
import { ResourceLinkImageSmall } from "./variants/index.js";

export const ResourceLinkImagePart: Component<ResourceLinkImageProps> = (
  props,
) => {
  const { variant = "small", image } = props;
  if (variant === "big") return <ResourceLinkImageBig image={image} />;
  return <ResourceLinkImageSmall image={image} />;
};
