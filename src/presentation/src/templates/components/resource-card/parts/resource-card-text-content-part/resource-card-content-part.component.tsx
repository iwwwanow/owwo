import type { NodeCardTextContentType } from "./resource-card-content-part.interfaces.js";

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
