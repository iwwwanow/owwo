import type { CssModuleProps } from "./css-module.interface.js";

export const CssModule: Component<CssModuleProps> = async (props) => {
  if (process.env.NODE_ENV === "developement") {
    const { filepath } = props;

    const styleFile = Bun.file(filepath);
    const stileText = await styleFile.text();

    return <style>{stileText}</style>;
  }

  return <></>;
};
