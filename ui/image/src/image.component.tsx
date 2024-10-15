import type { ImageType } from "./image.interface";

const Image: ImageType = (props) => {
  const { image, id, variant } = props;

  // TODO devide srcssets to constants on init component layer

  // <!-- TODO 2x: -->
  return (
    <picture>
      <source srcset={image[`${variant}_2x`]} media="(max-width: 360px)" />
      <source srcset="{image[variant]}, {image[`${variant}_2x`]} 2x" />
      <img id={`image-${id}`} src={image.original} alt="page-cover" />
    </picture>
  );
};

export { Image };
