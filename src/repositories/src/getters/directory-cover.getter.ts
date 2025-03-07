import type { CoverDto } from "@site/domain";

import { getCoverDto } from "./cover-dto.getter.js";

export const getDirectoryCover = async ({
  getCoverFullPath,
  getCoverRelativePath,
  uploadsPath,
  fullPath,
}): Promise<CoverDto> => {
  const coverFullPath = await getCoverFullPath({ fullPath });

  if (!coverFullPath) return null;

  const coverRelativePath = getCoverRelativePath({
    coverFullPath,
    uploadsPath,
  });
  return getCoverDto(coverRelativePath);
};
