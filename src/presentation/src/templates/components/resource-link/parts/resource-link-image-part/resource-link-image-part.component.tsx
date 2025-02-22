import type { ResourceLinkImageProps } from "./resource-link-image-part.interface";
import { ResourceLinkImageBig } from "./variants";
import { ResourceLinkImageSmall } from "./variants";

export const ResourceLinkImagePart: Component<ResourceLinkImageProps> = (
  props,
) => {
  const { variant = "small", image } = props;
  if (variant === "big") return <ResourceLinkImageBig image={image} />;
  return <ResourceLinkImageSmall image={image} />;
};
