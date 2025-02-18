import { LOGO_CLASSNAME } from "../logo.constants";

export const getClassName = (additionalClassname: string): string => {
  if (additionalClassname)
    return [LOGO_CLASSNAME, additionalClassname].join(" ");
  return LOGO_CLASSNAME;
};
