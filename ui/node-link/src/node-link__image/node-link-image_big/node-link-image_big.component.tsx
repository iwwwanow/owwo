import { ImageVariantName } from "@globals/constants";

import type { NodeLinkImageBigType } from "./node-link-image_big.interfaces";

export const NodeLinkImageBig: NodeLinkImageBigType = ({ image }) => {
  const imageHeight32pxSource = image[ImageVariantName.HEIGHT_32PX];
  const imageHeight32px2xSource = image[ImageVariantName.HEIGHT_32PX_2X];

  const imageSrcset = `${imageHeight32pxSource}, ${imageHeight32px2xSource} 2x`;
  // TODO check it
  // const image2xSrcset = `https://images.placeholders.dev/?width=64&height=64`;
  const image2xSrcset = imageHeight32px2xSource;

  return (
    <picture>
      <source srcset={imageSrcset} />
      <source srcset={image2xSrcset} />
      <img src={image2xSrcset} alt="node-info__image" />
    </picture>
  );
};
