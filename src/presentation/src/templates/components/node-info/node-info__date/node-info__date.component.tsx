import { DateComponent } from "../../";
import { Hr } from "../../";
import type { NodeInfoDateType } from "./node-info__date.interface";

export const NodeInfoDate: NodeInfoDateType = ({ date }) => (
  <>
    <Hr text="last-modification/creation date" />
    <DateComponent date={date} />
  </>
);
