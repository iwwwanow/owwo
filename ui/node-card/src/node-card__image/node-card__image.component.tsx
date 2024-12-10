import { ImageSourceGetter } from "./getters";
import type { NodeCardImageType } from "./node-card__image.interfaces";

export const NodeCardImage: NodeCardImageType = ({ image }) => {
  const { imageWidth190px2xSource, image2xSrcset, imageOriginalSource } =
    ImageSourceGetter.componentVariants(image);

  return (
    <picture class="card__cover-container">
      <source srcset={imageWidth190px2xSource} media="(max-width: 360px)" />
      <source srcset={image2xSrcset} />
      <img src={imageOriginalSource} class="card__img" alt="page card cover" />
    </picture>
  );
};
