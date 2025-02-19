import { Hr } from "../../";
import { NodeLink } from "../../";
import { NodeLinkContainer } from "../../";
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
