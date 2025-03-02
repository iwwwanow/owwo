import type { ResourceDto } from "@site/domain";
import type { ContentDto } from "@site/domain";
import type { ResourceMetaDto } from "@site/domain";

export const hasTextDataHelper = ({
  title,
  authors,
  description,
  meta,
}: {
  title: string;
  authors?: Array<ResourceDto>;
  description: ContentDto;
  meta?: ResourceMetaDto;
}): boolean => {
  return !!title || !!authors || !!description || !!meta;
};
