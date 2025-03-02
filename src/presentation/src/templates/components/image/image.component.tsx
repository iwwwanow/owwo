import { ImageVariantEnum } from "@site/domain";

import type { ImageProps } from "./image.interface.js";

export const Image: Component<ImageProps> = (props) => {
  const { image, id, variant } = props;

  const imageId = `image-${id}`;
  const imageSrcset = `${image[`${variant}_2x`]}`;
  const image2xSrcset = `${image[variant]}, ${image[`${variant}_2x`]} 2x`;

  const imageOriginalSource = image[ImageVariantEnum.Original];

  return (
    <picture>
      <source srcset={imageSrcset} media="(max-width: 360px)" />
      <source srcset={image2xSrcset} />
      <img id={imageId} src={imageOriginalSource} alt="page-cover" />
    </picture>
  );
};
