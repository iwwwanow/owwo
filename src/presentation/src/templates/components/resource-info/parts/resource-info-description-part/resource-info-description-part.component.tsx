import { Hr } from "../../../";
import { HR_TITLE } from "./resource-info-description-part.constants";
import type { ResourceInfoDescriptionProps } from "./resource-info-description-part.interface";

export const ResourceInfoDescriptionPart: Component<
  ResourceInfoDescriptionProps
> = ({ description }) => (
  <>
    <Hr text={HR_TITLE} />
    {description.html}
  </>
);
