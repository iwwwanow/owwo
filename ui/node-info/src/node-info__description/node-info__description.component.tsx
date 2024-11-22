import { Hr } from "@ui/hr";

import type { NodeInfoDescriptionType } from "./node-info__description.interface";

export const NodeInfoDescription: NodeInfoDescriptionType = ({
  description,
}) => (
  <>
    <Hr text="description" />
    {description.html}
  </>
);
