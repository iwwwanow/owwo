import { CssModule } from "../index.js";
import { DescriptionFormatter } from "./formatters/index.js";
import { NodeCardTextContent } from "./parts/index.js";
import { ResourceCardImage } from "./parts/index.js";
import type { NodeCardProps } from "./resource-card.interface.js";
import Style from "./resource-card.module.css";

export const ResourceCard: Component<NodeCardProps> = (props) => {
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
        {image && <ResourceCardImage image={image} />}

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
