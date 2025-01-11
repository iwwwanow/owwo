import { resolve } from "path";

export const getPublicPath = (pathname: string) => {
  const publicPath = resolve(import.meta.dir, `..${pathname}`);
  return publicPath;
};
