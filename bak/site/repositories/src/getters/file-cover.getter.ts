import { CoverDto } from "@site/domain";

import { getCoverDto } from "./cover-dto.getter.js";
import { getMimeType } from "./mime-type.getter.js";
import { getUploadsReqPath } from "./uploads-req-path.getter.js";

export const getFileCover = async ({
  fullPath,
  uploadsPath,
}): Promise<CoverDto> => {
  // TODO кажется этот файл не используется, проверить
  const mimeType = getMimeType(fullPath);
  const mimeTypeSegments = mimeType.split("/");

  if (mimeTypeSegments[0] === "image") {
    const coverRelativePath = getUploadsReqPath({
      fullPath,
      uploadsPath,
    });

    return getCoverDto(coverRelativePath);
  }

  return null;
};
