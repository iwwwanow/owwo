import { Hr } from "../../../index.js";
import { ResourceLink } from "../../../index.js";
import { ResourceLinkContainer } from "../../../index.js";
import type { ResourceInfoParentsProps } from "./resource-info-parents-part.interface.js";

export const ResourceInfoParentsPart: Component<ResourceInfoParentsProps> = ({
  parents,
}) => (
  <>
    <Hr text="pages" />
    <ResourceLinkContainer>
      {parents.map((parent) => (
        <ResourceLink resourceData={parent} />
      ))}
    </ResourceLinkContainer>
  </>
);
