import { Hr } from "../../../index.js";
import { ResourceLink } from "../../../index.js";
import { ResourceLinkContainer } from "../../../index.js";
import type { ResourceInfoAuthorsProps } from "./resource-info-authors-part.interface.js";

export const ResourceInfoAuthorsPart: Component<ResourceInfoAuthorsProps> = ({
  authors,
}) => (
  <>
    <Hr text="authors" />
    <ResourceLinkContainer>
      {authors.map((author) => (
        <ResourceLink resourceData={author} />
      ))}
    </ResourceLinkContainer>
  </>
);
