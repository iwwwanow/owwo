import { CssModule } from "@ui/css-module";

import { DescriptionFormatter } from "./formatters";
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

  const formattedDescription =
    DescriptionFormatter.shortestPreview(description);

  return (
    <>
      <a class="card__wrapper border_light" href={id}>
        {image && <NodeCardImage image={image} />}

        {(title || description) && (
          <NodeCardTextContent
            title={title}
            description={formattedDescription}
          />
        )}
      </a>
      <CssModule filepath={Style} />
    </>
  );
};

export { NodeCard };
