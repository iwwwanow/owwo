// TODO;
// move image-varian-names to global constants
// and use it all applicatoin wide
import type { NodeCardImageType } from "./node-card__image.interfaces";

export const NodeCardImage: NodeCardImageType = ({ image }) => {
  const image2xSrcset = `${image.w190}, ${image.w190_2x} 2x`;

  return (
    <picture class="card__cover-container">
      <source srcset={image.w190_2x} media="(max-width: 360px)" />
      <source srcset={image2xSrcset} />
      <img src={image.original} class="card__img" alt="page card cover" />
    </picture>
  );
};
