import type { NodeLinkType } from "../node-link.interface";

const NodeLinkImage: NodeLinkType = (props) => {
  const { variant = "small", image } = props;

  if (variant === "big") {
    return (
      <picture>
        <source srcset={`${image.h32}, ${image.h32_2x} 2x`} />
        <source srcset="https://images.placeholders.dev/?width=64&height=64" />
        <img
          src="https://images.placeholders.dev/?width=64&height=64"
          alt="node-info__image"
        />
      </picture>
    );
  }

  return (
    <picture>
      <source srcset={`${image.h16}, ${image.h16_2x} 2x`} />
      <source srcset="https://images.placeholders.dev/?width=64&height=64" />
      <img
        src="https://images.placeholders.dev/?width=64&height=64"
        alt="node-info__image"
      />
    </picture>
  );
};

export { NodeLinkImage };
