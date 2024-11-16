// TODO need parts refactoring
import { CssModule } from "@ui/css-module";

import type { NodeLinkType } from "./node-link.interface";
import Style from "./node-link.module.css";
import { NodeLinkImage } from "./node-link__image";
import { NodeLinkSymbol } from "./node-link__symbol";
import { NodeLinkTitle } from "./node-link__title";

const NodeLink: NodeLinkType = (props) => {
  // TODO вот это не нравится
  let { node, leftSymbol, rightSymbol, id, title, image } = props;
  const { isTitleNeeded = true } = props;

  if (node) {
    // TODO вот это не нравится
    id = node.meta.id;
    title = node.title;
    image = node.image;
  }

  const imageVariant = isTitleNeeded ? "small" : "big";
  const nodeLinkHref = `/${id}`;

  return (
    <>
      <a href={nodeLinkHref} class="node-info__container">
        {leftSymbol && <NodeLinkSymbol symbol={leftSymbol} />}
        {image && <NodeLinkImage image={image} variant={imageVariant} />}
        {isTitleNeeded && title && <NodeLinkTitle title={title} />}
        {rightSymbol && <NodeLinkSymbol symbol={rightSymbol} />}
      </a>
      <CssModule filepath={Style} />
    </>
  );
};

export { NodeLink };
