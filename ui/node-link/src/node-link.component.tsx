// TODO need parts refactoring
import { CssModule } from "@ui/css-module";

import Style from "./node-link.module.css";
import { NodeLinkImage } from "./node-link__image";

const NodeLink = (props) => {
  let { node, leftSymbol, rightSymbol, id, title, image } = props;

  if (node) {
    id = node.meta.id;
    title = node.title;
    image = node.image;
  }

  const imageVariant = title ? "small" : "big";
  const nodeLinkHref = `/${id}`;

  return (
    <>
      <a href={nodeLinkHref} class="node-info__container">
        {leftSymbol && <h5 class="node-info__symbol">{leftSymbol}</h5>}

        {image && <NodeLinkImage image={image} variant={imageVariant} />}

        {title && (
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
