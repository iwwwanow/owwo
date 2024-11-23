import { IMAGE_VARIANT_NAME } from "@globals/constants";

import type { NodeLinkImageSmallType } from "./node-link-image_small.interfaces";

export const NodeLinkImageSmall: NodeLinkImageSmallType = ({ image }) => {
  const imageHeight16pxSource = image[IMAGE_VARIANT_NAME.height16px];
  const imageHeight16px2xSource = image[IMAGE_VARIANT_NAME.height16px2x];

  const imageSrcset = `${imageHeight16pxSource}, ${imageHeight16px2xSource} 2x`;
  const image2xSrcset = `https://images.placeholders.dev/?width=64&height=64`;

  return (
    <picture>
      <source srcset={imageSrcset} />
      <source srcset={image2xSrcset} />
      <img
        src="https://images.placeholders.dev/?width=64&height=64"
        alt="node-info__image"
      />
    </picture>
  );
};
