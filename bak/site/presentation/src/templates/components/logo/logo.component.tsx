import { LogoSvg } from "../../svg/index.js";
import { CssModule } from "../index.js";
import { getClassName } from "./getters/index.js";
import { HOME_ROUTE_PATH } from "./logo.constants.js";
import type { LogoComponentProps } from "./logo.interface.js";
import Style from "./logo.module.css";

export const LogoComponent: Component<LogoComponentProps> = (props) => {
  const { href = HOME_ROUTE_PATH, className = "" } = props;

  const classNameString = getClassName(className);

  return (
    <>
      <a href={href} class={classNameString}>
        <LogoSvg />
      </a>
      <CssModule filepath={Style} />
    </>
  );
};
