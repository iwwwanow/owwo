import { ImageVariantName } from "../../../../globals";
import { IMAGE_ALT } from "./node-link-image_big.constants";
import type { NodeLinkImageBigType } from "./node-link-image_big.interfaces";

export const NodeLinkImageBig: NodeLinkImageBigType = ({ image }) => {
  // TODO refactor
  const imageHeight32pxSource = image[ImageVariantName.Height_32px];
  const imageHeight32px2xSource = image[ImageVariantName.Height_32px_2x];

  const imageSrcset = `${imageHeight32pxSource}, ${imageHeight32px2xSource} 2x`;
  // TODO check it
  // const image2xSrcset = `https://images.placeholders.dev/?width=64&height=64`;
  const image2xSrcset = imageHeight32px2xSource;

  return (
    <picture>
      <source srcset={imageSrcset} />
      <source srcset={image2xSrcset} />
      <img src={image2xSrcset} alt={IMAGE_ALT} />
    </picture>
  );
};
