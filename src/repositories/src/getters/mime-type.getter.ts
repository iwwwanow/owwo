import { mimeTypes } from "@site/domain";
import { MimeTypesEnum } from "@site/domain";

export const getMimeType = (path: string): MimeTypesEnum => {
  const extention = path.split(".").at(-1);
  return mimeTypes[extention];
};
