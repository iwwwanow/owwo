import { Hr } from "../../";
import { NodeLink } from "../../";
import { NodeLinkContainer } from "../../";
import type { NodeInfoParentsType } from "./node-info__parents.interface";

export const NodeInfoParents: NodeInfoParentsType = ({ parents }) => (
  <>
    <Hr text="pages" />
    <NodeLinkContainer>
      {parents.map((parent) => (
        <NodeLink node={parent} />
      ))}
    </NodeLinkContainer>
  </>
);
