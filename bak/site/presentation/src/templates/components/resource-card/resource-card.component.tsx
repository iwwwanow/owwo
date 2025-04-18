import { CssModule } from "../index.js";
import { NodeCardTextContent } from "./parts/index.js";
import { ResourceCardImage } from "./parts/index.js";
import type { NodeCardProps } from "./resource-card.interface.js";
import Style from "./resource-card.module.css";

export const ResourceCard: Component<NodeCardProps> = (props) => {
  const { resourceData } = props;

  const id = resourceData.meta.path;
  const { cover } = resourceData;
  const title = resourceData.meta.title;
  const { content } = resourceData;

  return (
    <>
      <a class="card__wrapper border_light" href={id}>
        {cover && <ResourceCardImage image={cover} />}

        {(title || content) && (
          <NodeCardTextContent title={title} description={content?.preview} />
        )}
      </a>
      <CssModule filepath={Style} />
    </>
  );
};
