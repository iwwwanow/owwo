import type { NodeImageType } from "@site/interfaces";

export const hasDataHelper = ({
  image,
  hasTextData,
}: {
  image?: NodeImageType;
  hasTextData: boolean;
}): boolean => {
  return !!image || hasTextData;
};
