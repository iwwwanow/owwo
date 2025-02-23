import { CssModule } from "../";
import { DescriptionFormatter } from "./formatters";
import { ResourceCardImage } from "./parts";
import { NodeCardTextContent } from "./parts";
import type { NodeCardProps } from "./resource-card.interface";
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
