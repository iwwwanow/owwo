import { DateComponent } from "../../../index.js";
import { Hr } from "../../../index.js";
import type { ResourceInfoDateProps } from "./resource-info-date-part.interface.js";

export const ResourceInfoDatePart: Component<ResourceInfoDateProps> = ({
  meta,
}) => (
  <>
    <Hr text="last-modification/creation date" />
    <DateComponent meta={meta} />
  </>
);
