// TODO need parts refactoring
import { CssModule } from "@ui/css-module";

import type { NodeLinkType } from "./node-link.interface";
import Style from "./node-link.module.css";
import { NodeLinkImage } from "./node-link__image";

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
        {leftSymbol && <h5 class="node-info__symbol">{leftSymbol}</h5>}

        {image && <NodeLinkImage image={image} variant={imageVariant} />}

        {isTitleNeeded && title && (
          <h5 style="word-break: break-all" class="element-info__title">
            {title}
          </h5>
        )}

        {rightSymbol && <h5 class="node-info__symbol">{rightSymbol}</h5>}
      </a>
      <CssModule filepath={Style} />
    </>
  );
};

export { NodeLink };
