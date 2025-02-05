import type { CssModuleType } from "./css-module.interface";

export const CssModule: CssModuleType = async (props) => {
  if (process.env.NODE_ENV === "developement") {
    const { filepath } = props;

    const styleFile = Bun.file(filepath);
    const stileText = await styleFile.text();

    return <style>{stileText}</style>;
  }

  return <></>;
};
