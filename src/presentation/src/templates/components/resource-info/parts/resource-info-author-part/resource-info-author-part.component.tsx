import { Hr } from "../../../";
import { ResourceLink } from "../../../";
import { ResourceLinkContainer } from "../../../";
import type { ResourceInfoAuthorProps } from "./resource-info-author-part.interface";

export const ResourceInfoAuthorPart: Component<ResourceInfoAuthorProps> = ({
  author,
}) => (
  <>
    <Hr text="author" />
    <ResourceLinkContainer>
      <ResourceLink node={author} />
    </ResourceLinkContainer>
  </>
);
