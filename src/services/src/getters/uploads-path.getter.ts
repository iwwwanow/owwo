import { join } from "path";

export const getUploadsPath = (): string => {
  const { UPLOADS_PATH, NODE_ENV } = process.env;

  // TODO to errors
  if (!UPLOADS_PATH) throw new Error("UPLOADS_PATH not provided");

  if (NODE_ENV === "developement") {
    return join(process.cwd(), UPLOADS_PATH);
  }

  return UPLOADS_PATH;
};
