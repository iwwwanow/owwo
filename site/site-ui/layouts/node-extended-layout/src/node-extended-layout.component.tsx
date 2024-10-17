import { BaseHeadFragment } from "@site-ui/base-head-fragment";

import type { NodeExtendedLayoutType } from "./node-extended-layout.interface";

const NodeExtendedLayout: NodeExtendedLayoutType = (props) => {
  const { children } = props;

  return (
    <>
      <head>
        <BaseHeadFragment />
      </head>
      <body class="node-extended-layout">{children}</body>
    </>
  );
};

export { NodeExtendedLayout };
