// TODO FIX INFO FEAT (FEATURE) - nvim highlightings;
// TODO FIX naming
import { ContentDto } from "@site/domain";

import { getMimeType } from "./mime-type.getter.js";

export const getFileResourceContent = async ({
  fullPath,
  uploadsPath,
}): Promise<ContentDto> => {
  const mimeType = getMimeType(fullPath);
  const mimeTypeSegments = mimeType.split("/");

  if (mimeTypeSegments[0] === "image") {
    const coverRelativePath = getCoverRelativePath({
      coverFullPath: fullPath,
      uploadsPath,
    });
  }

  // TODO
  // if image get image file html content (full width page) img src = img-relative-path
  // if text - get text file content, render js, css and other os code
  // render html in iFrame
  // на остальные типы файлов - пока не поддерживается
};
