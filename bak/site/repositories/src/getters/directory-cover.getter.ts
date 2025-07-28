import type { CoverDto } from "@site/domain";

import { getCoverDto } from "./cover-dto.getter.js";
import { getUploadsReqPath } from "./uploads-req-path.getter.js";

export const getDirectoryCover = async ({
  getCoverFullPath,
  uploadsPath,
  fullPath,
}): Promise<CoverDto> => {
  const coverFullPath = await getCoverFullPath({ fullPath });

  if (!coverFullPath) return null;

  const coverReqPath = getUploadsReqPath({
    fullPath: coverFullPath,
    uploadsPath,
  });

  return getCoverDto(coverReqPath);
};
