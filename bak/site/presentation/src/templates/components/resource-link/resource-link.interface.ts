import type { ResourceDto } from "@site/domain";
import type { CoverDto } from "@site/domain";

export interface ResourceLinkProps {
  resourceData: ResourceDto;

  isTitleNeeded?: boolean;

  leftSymbol?: string;
  rightSymbol?: string;
  id?: string;
  title?: string;
  image?: CoverDto;
}
