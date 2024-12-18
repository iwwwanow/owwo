import { Hr } from "@ui/hr";
import { NodeLink } from "@ui/node-link";
import { NodeLinkContainer } from "@ui/node-link-container";

import type { NodeInfoAuthorsType } from "./node-info__authors.interface";

export const NodeInfoAuthors: NodeInfoAuthorsType = ({ authors }) => (
  <>
    <Hr text="authors" />
    <NodeLinkContainer>
      {authors.map((author) => (
        <NodeLink node={author} />
      ))}
    </NodeLinkContainer>
  </>
);
