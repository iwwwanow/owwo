import { BaseHeadFragment } from "@site-ui/base-head-fragment";
import { FooterFragment } from "@site-ui/footer-fragment";
import { HeaderFragment } from "@site-ui/header-fragment";

import type { BaseLayoutType } from "./base-layout.interface";

const BaseLayout: BaseLayoutType = (props) => {
  const { children } = props;

  return (
    <>
      <head>
        <BaseHeadFragment />
      </head>

      <body class="wrapper">
        <HeaderFragment />
        {children}
        <FooterFragment />
      </body>
    </>
  );
};

export { BaseLayout };
