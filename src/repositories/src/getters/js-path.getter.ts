import { ReserverdFilenamesEnum } from "@site/domain";
import { ResourceMetaDto } from "@site/domain";
import { existsSync } from "node:fs";
import { join } from "node:path";

import { getUploadsReqPath } from "./uploads-req-path.getter.js";

export const getJsPath = ({
  fullPath,
  uploadsPath,
}): ResourceMetaDto["jsPath"] => {
  const jsFilename = ReserverdFilenamesEnum.IndexJs;
  const jsPath = join(fullPath, jsFilename);
  if (existsSync(jsPath)) {
    const reqPath = getUploadsReqPath({ fullPath, uploadsPath });
    return join(reqPath, jsFilename);
  }
  return null;
};
