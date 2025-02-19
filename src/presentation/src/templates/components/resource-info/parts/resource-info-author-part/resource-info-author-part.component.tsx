import { Hr } from "../../";
import { NodeLink } from "../../";
import { NodeLinkContainer } from "../../";
import type { NodeInfoAuthorType } from "./node-info__author.interface";

export const NodeInfoAuthor: NodeInfoAuthorType = ({ author }) => (
  <>
    <Hr text="author" />
    <NodeLinkContainer>
      <NodeLink node={author} />
    </NodeLinkContainer>
  </>
);
