import type { NodeCardTextContentType } from "./node-card__text-content.interfaces";

export const NodeCardTextContent: NodeCardTextContentType = ({
  title,
  description,
}) => {
  return (
    <div class="card__text-container">
      {title && <h4 class="card__text-header">{title}</h4>}
      {description?.markdown && <h5>{description.markdown}</h5>}
    </div>
  );
};
