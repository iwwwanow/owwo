import { CoverDto } from "@site/domain";

import { getCoverDto } from "./cover-dto.getter.js";
import { getCoverRelativePath } from "./cover-relative-path.getter.js";
import { getMimeType } from "./mime-type.getter.js";

export const getFileCover = async ({ fullPath, uploadsPath }): CoverDto => {
  const mimeType = getMimeType(fullPath);
  console.log(mimeType);
  const mimeTypeSegments = mimeType.split("/");

  if (mimeTypeSegments[0] === "image") {
    const coverRelativePath = getCoverRelativePath({
      coverFullPath: fullPath,
      uploadsPath,
    });
    return getCoverDto(coverRelativePath);
  }

  return null;
};
