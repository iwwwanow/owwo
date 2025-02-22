import { Hr } from "../../../";
import { ResourceLink } from "../../../";
import { ResourceLinkContainer } from "../../../";
import type { ResourceInfoParentsProps } from "./resource-info-parents-part.interface";

export const ResourceInfoParentsPart: Component<ResourceInfoParentsProps> = ({
  parents,
}) => (
  <>
    <Hr text="pages" />
    <ResourceLinkContainer>
      {parents.map((parent) => (
        <ResourceLink node={parent} />
      ))}
    </ResourceLinkContainer>
  </>
);
