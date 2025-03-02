import { Hr } from "../../../index.js";
import { HR_TITLE } from "./resource-info-description-part.constants.js";
import type { ResourceInfoDescriptionProps } from "./resource-info-description-part.interface.js";

export const ResourceInfoDescriptionPart: Component<
  ResourceInfoDescriptionProps
> = ({ description }) => (
  <>
    <Hr text={HR_TITLE} />
    <h5>{description}</h5>
  </>
);
