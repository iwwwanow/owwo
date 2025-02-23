import { CssModule } from "../../components";
import { BaseHeadFragment } from "../../fragments";
import type { NodeExtendedLayoutProps } from "./resouce-extended-layout.interface";
import Style from "./resource-extended-layout.module.css";

export const ResourceExtendedLayout: Component<NodeExtendedLayoutProps> = (
  props,
) => {
  const { children } = props;

  return (
    <>
      <head>
        <BaseHeadFragment />
      </head>
      <body class="node-extended-layout">{children}</body>
      <CssModule filepath={Style} />
    </>
  );
};
