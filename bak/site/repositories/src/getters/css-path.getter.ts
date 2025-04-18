import { ReserverdFilenamesEnum } from "@site/domain";
import { ResourceMetaDto } from "@site/domain";
import { existsSync } from "node:fs";
import { join } from "node:path";

import { getUploadsReqPath } from "./uploads-req-path.getter.js";

export const getCssPath = ({
  fullPath,
  uploadsPath,
}): ResourceMetaDto["cssPath"] => {
  const cssFilename = ReserverdFilenamesEnum.IndexCss;
  const cssPath = join(fullPath, cssFilename);
  if (existsSync(cssPath)) {
    const reqPath = getUploadsReqPath({ fullPath, uploadsPath });
    return join(reqPath, cssFilename);
  }
  return null;
};
