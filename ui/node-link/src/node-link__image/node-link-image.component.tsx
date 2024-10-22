import type { NodeLinkType } from "../node-link.interface";

const NodeLinkImage: NodeLinkType = (props) => {
  const { variant = "small", image } = props;

  if (variant === "big") {
    const imageSrcset = `${image.h32}, ${image.h32_2x} 2x`;
    // TODO change mock data
    // TODO provede 2x image logic to picture
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
  }

  const imageSrcset = `${image.h16}, ${image.h16_2x} 2x`;
  // TODO change mock data
  // TODO provede 2x image logic to picture
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

export { NodeLinkImage };
