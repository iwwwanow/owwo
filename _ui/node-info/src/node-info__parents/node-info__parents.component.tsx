import { Hr } from "@ui/hr";
import { NodeLink } from "@ui/node-link";
import { NodeLinkContainer } from "@ui/node-link-container";

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
