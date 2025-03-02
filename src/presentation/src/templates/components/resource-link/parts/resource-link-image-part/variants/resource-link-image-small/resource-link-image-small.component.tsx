import { ImageVariantName } from "@site/models";

import type { ResourceLinkImageSmallProps } from "./resource-link-image-small.interfaces.js";

export const ResourceLinkImageSmall: Component<ResourceLinkImageSmallProps> = ({
  image,
}) => {
  const imageHeight16pxSource = image[ImageVariantName.Height_16px];
  const imageHeight16px2xSource = image[ImageVariantName.Height_16px_2x];

  const imageSrcset = `${imageHeight16pxSource}, ${imageHeight16px2xSource} 2x`;
  // TODO check it
  // const image2xSrcset = `https://images.placeholders.dev/?width=64&height=64`;
  const image2xSrcset = imageHeight16px2xSource;

  return (
    <picture>
      <source srcset={imageSrcset} />
      <source srcset={image2xSrcset} />
      <img src={image2xSrcset} alt="node-info__image" />
    </picture>
  );
};
