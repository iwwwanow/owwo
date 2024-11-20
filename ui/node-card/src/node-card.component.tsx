import { CssModule } from "@ui/css-module";

import type { NodeCardType } from "./node-card.interface";
import Style from "./node-card.module.css";
import { NodeCardImage } from "./node-card__image";
import { NodeCardTextContent } from "./node-card__text-content";

const NodeCard: NodeCardType = (props) => {
  const { nodeData } = props;

  const { id } = nodeData.meta;
  const { image } = nodeData;
  const { title } = nodeData;
  const { description } = nodeData;

  if (description?.markdown.length > 80) {
    description.markdown = description.markdown.slice(0, 80) + " ...";
  }

  return (
    <>
      <a class="card__wrapper border_light" href={id}>
        {image && <NodeCardImage image={image} />}

        {(title || description) && (
          <NodeCardTextContent title={title} description={description} />
        )}
      </a>
      <CssModule filepath={Style} />
    </>
  );
};

export { NodeCard };
