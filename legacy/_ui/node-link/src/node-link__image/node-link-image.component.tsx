import type { NodeLinkImageType } from "./node-link-image.interface";
import { NodeLinkImageBig } from "./node-link-image_big";
import { NodeLinkImageSmall } from "./node-link-image_small";

const NodeLinkImage: NodeLinkImageType = (props) => {
  const { variant = "small", image } = props;
  if (variant === "big") return <NodeLinkImageBig image={image} />;
  return <NodeLinkImageSmall image={image} />;
};

export { NodeLinkImage };
