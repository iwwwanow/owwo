// TODO need parts refactoring
import NodeLinkImage from "./node-link__image.component.svelte";

const NodeLink = (props) => {
  let { node, leftSymbol, rightSymbol, id, title, image } = props;

  if (node) {
    id = node.meta.id;
    title = node.title;
    image = node.image;
  }

  const imageVariant = title ? "small" : "big";

  return (
    <a href="/{id}" class="node-info__container">
      {leftSymbol && <h5 class="node-info__symbol">{leftSymbol}</h5>}

      {image && <NodeLinkImage image={image} variant={imageVariant} />}

      {title && (
        <h5 style="word-break: break-all" class="element-info__title">
          {title}
        </h5>
      )}

      {rightSymbol && <h5 class="node-info__symbol">{rightSymbol}</h5>}
    </a>
  );
};

export { NodeLink };
