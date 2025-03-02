import { ImageSourceGetter } from "../../getters/index.js";
import type { NodeCardImageProps } from "./resource-card-image-part.interfaces.js";

export const ResourceCardImage: Component<NodeCardImageProps> = ({ image }) => {
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
