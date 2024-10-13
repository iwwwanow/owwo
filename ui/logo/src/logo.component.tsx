import { LogoSvg } from "@assets/svg";

import type { LogoComponentType } from "./logo.interface";

const LogoComponent: LogoComponentType = (props) => {
  const { href = "/", className = "" } = props;

  const classNameString = `logo__container${className}`;

  // TODO why i cant use {href} and вынужден use href={href}
  return (
    <a href={href} class={classNameString}>
      <LogoSvg />
    </a>
  );
};

export { LogoComponent };
