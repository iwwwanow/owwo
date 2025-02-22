import { Hr } from "../../../";
import { ResourceLink } from "../../../";
import { ResourceLinkContainer } from "../../../";
import type { ResourceInfoAuthorsProps } from "./resource-info-authors-part.interface";

export const ResourceInfoAuthorsPart: Component<ResourceInfoAuthorsProps> = ({
  authors,
}) => (
  <>
    <Hr text="authors" />
    <ResourceLinkContainer>
      {authors.map((author) => (
        <ResourceLink node={author} />
      ))}
    </ResourceLinkContainer>
  </>
);
