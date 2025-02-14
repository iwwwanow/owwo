import { join } from "path";

export const getResourcePath = (uploadsPath: string, reqPathname: string) => {
  const resourcePath = join(uploadsPath, reqPathname);
  return resourcePath;
};
