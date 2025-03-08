// TODO FIX INFO FEAT (FEATURE) - nvim highlightings;
// TODO FIX naming
import { ContentDto } from "@site/domain";

import { getCoverRelativePath } from "./cover-relative-path.getter.js";
import { getImageContentDto } from "./image-cotnent-dto.getter.js";
import { getMimeType } from "./mime-type.getter.js";
import { getTextContentDto } from "./text-content.dto.getter.js";

export const getFileResourceContent = async ({
  fullPath,
  uploadsPath,
}): Promise<ContentDto> => {
  const mimeType = getMimeType(fullPath);
  const mimeTypeSegments = mimeType.split("/");

  let content: ContentDto;

  if (mimeTypeSegments[0] === "image") {
    const coverRelativePath = getCoverRelativePath({
      coverFullPath: fullPath,
      uploadsPath,
    });
    content = getImageContentDto(coverRelativePath);
  } else if (
    mimeTypeSegments[0] === "text" ||
    mimeTypeSegments[0] === "application"
  ) {
    content = await getTextContentDto(fullPath);
  }

  return content;

  // TODO
  // if image get image file html content (full width page) img src = img-relative-path
  // if text - get text file content, render js, css and other os code
  // render html in iFrame
  // на остальные типы файлов - пока не поддерживается
};
