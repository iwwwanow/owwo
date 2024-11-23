import { IMAGE_VARIANT_NAME } from "@globals/constants";

import type { NodeLinkImageBigType } from "./node-link-image_big.interfaces";

export const NodeLinkImageBig: NodeLinkImageBigType = ({ image }) => {
  const imageHeight32pxSource = image[IMAGE_VARIANT_NAME.height32px];
  const imageHeight32px2xSource = image[IMAGE_VARIANT_NAME.height32px2x];

  const imageSrcset = `${imageHeight32pxSource}, ${imageHeight32px2xSource} 2x`;
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
