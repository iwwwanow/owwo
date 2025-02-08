import { ImageVariantName } from "@globals/constants";

import type { NodeLinkImageSmallType } from "./node-link-image_small.interfaces";

export const NodeLinkImageSmall: NodeLinkImageSmallType = ({ image }) => {
  const imageHeight16pxSource = image[ImageVariantName.HEIGHT_16PX];
  const imageHeight16px2xSource = image[ImageVariantName.HEIGHT_16PX_2X];

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
