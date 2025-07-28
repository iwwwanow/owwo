import type { CoverDto } from "@site/domain";

export const hasDataHelper = ({
  image,
  hasTextData,
}: {
  image?: CoverDto;
  hasTextData: boolean;
}): boolean => {
  return !!image || hasTextData;
};
