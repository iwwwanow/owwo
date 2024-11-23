import { IMAGE_VARIANT_NAME } from "@globals/constants";

import type { NodeCardImageType } from "./node-card__image.interfaces";

export const NodeCardImage: NodeCardImageType = ({ image }) => {
  const imageWidth190pxSource = image[IMAGE_VARIANT_NAME.width190px];
  const imageWidth190px2xSource = image[IMAGE_VARIANT_NAME.width190px2x];
  const imageOriginalSource = image[IMAGE_VARIANT_NAME.original];

  const image2xSrcset = `${imageWidth190pxSource}, ${imageWidth190px2xSource} 2x`;

  return (
    <picture class="card__cover-container">
      <source srcset={imageWidth190px2xSource} media="(max-width: 360px)" />
      <source srcset={image2xSrcset} />
      <img src={imageOriginalSource} class="card__img" alt="page card cover" />
    </picture>
  );
};
