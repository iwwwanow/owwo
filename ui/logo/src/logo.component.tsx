import { LogoSvg } from "@assets/svg";

import { CssModule } from "@ui/css-module";

import { getClassname } from "./getters";
import { HOME_ROUTE_PATH } from "./logo.constants";
import type { LogoComponentType } from "./logo.interface";
import Style from "./logo.module.css";

export const LogoComponent: LogoComponentType = (props) => {
  const { href = HOME_ROUTE_PATH, className = "" } = props;

  const classNameString = getClassname(className);

  return (
    <>
      <a href={href} class={classNameString}>
        <LogoSvg />
      </a>
      <CssModule filepath={Style} />
    </>
  );
};
