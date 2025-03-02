import type { ResourceDto } from "@site/domain";

export interface NodeNavigationProps {
  prevNode: ResourceDto;
  nextNode: ResourceDto;
  current: number;
  length: number;
}
