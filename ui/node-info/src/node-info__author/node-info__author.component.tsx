import { Hr } from "@ui/hr";
import { NodeLink } from "@ui/node-link";
import { NodeLinkContainer } from "@ui/node-link-container";

import type { NodeInfoAuthorType } from "./node-info__author.interface";

export const NodeInfoAuthor: NodeInfoAuthorType = ({ author }) => (
  <>
    <Hr text="author:" />
    <NodeLinkContainer>
      <NodeLink node={author} />
    </NodeLinkContainer>
  </>
);
