import { DateComponent } from "../../../";
import { Hr } from "../../../";
import type { ResourceInfoDateProps } from "./resource-info-date-part.interface";

export const ResourceInfoDatePart: Component<ResourceInfoDateProps> = ({
  date,
}) => (
  <>
    <Hr text="last-modification/creation date" />
    <DateComponent date={date} />
  </>
);
