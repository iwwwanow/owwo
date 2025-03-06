import { ContentEntity } from "@site/domain";

export const getContentPreview = (content: string): string => {
  const limit = ContentEntity.PREVIEW_SYMBOLS_LIMIT;
  const ellipsis = "...";
  if (content.length <= limit) return content;
  return content.slice(0, limit - ellipsis.length) + ellipsis;
};
