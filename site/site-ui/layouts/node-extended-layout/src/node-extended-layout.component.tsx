import { BaseHeadFragment } from "@site-ui/base-head-fragment";

import { CssModule } from "@ui/css-module";

import type { NodeExtendedLayoutType } from "./node-extended-layout.interface";
import Style from "./node-extended-layout.module.css";

const NodeExtendedLayout: NodeExtendedLayoutType = (props) => {
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

export { NodeExtendedLayout };
