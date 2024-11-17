import { LogoSvg } from "@assets/svg";

import { CssModule } from "@ui/css-module";

import type { LogoComponentType } from "./logo.interface";
import Style from "./logo.module.css";

const HOME_ROUTE_PATH = "/";

const LogoComponent: LogoComponentType = (props) => {
  const { href = HOME_ROUTE_PATH, className = "" } = props;

  const classNameString = `logo__container${className}`;

  // TODO why i cant use {href} and вынужден use href={href}
  return (
    <>
      <a href={href} class={classNameString}>
        <LogoSvg />
      </a>
      <CssModule filepath={Style} />
    </>
  );
};

export { LogoComponent };
