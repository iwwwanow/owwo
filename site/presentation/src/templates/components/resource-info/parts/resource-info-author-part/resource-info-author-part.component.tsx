import { ResourceLink } from "../../../index.js";
import { ResourceLinkContainer } from "../../../index.js";
import { Hr } from "../../../index.js";
import type { ResourceInfoAuthorProps } from "./resource-info-author-part.interface.js";

export const ResourceInfoAuthorPart: Component<ResourceInfoAuthorProps> = ({
  author,
}) => (
  <>
    <Hr text="author" />
    <ResourceLinkContainer>
      <ResourceLink resourceData={author} />
    </ResourceLinkContainer>
  </>
);
