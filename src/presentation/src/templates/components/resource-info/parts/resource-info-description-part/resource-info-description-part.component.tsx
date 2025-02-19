import { Hr } from "../../";
import { HR_TITLE } from "./node-info__description.constants";
import type { NodeInfoDescriptionType } from "./node-info__description.interface";

export const NodeInfoDescription: NodeInfoDescriptionType = ({
  description,
}) => (
  <>
    <Hr text={HR_TITLE} />
    {description.html}
  </>
);
