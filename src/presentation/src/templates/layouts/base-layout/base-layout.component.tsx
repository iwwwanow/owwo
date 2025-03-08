import { BaseHeadFragment } from "../../fragments/index.js";
import { FooterFragment } from "../../fragments/index.js";
import { HeaderFragment } from "../../fragments/index.js";
import type { BaseLayoutProps } from "./base-layout.interface.js";

export const BaseLayout: Component<BaseLayoutProps> = (props) => {
  const { children } = props;
  const { resourceData } = props;
  const { jsPath, cssPath } = resourceData.meta;

  return (
    <>
      <head>
        <BaseHeadFragment />
        {cssPath && <link rel="stylesheet" href={cssPath} />}
      </head>

      <body class="wrapper">
        <HeaderFragment />

        {children}

        <FooterFragment />
        {jsPath && <script src={jsPath}></script>}
      </body>
    </>
  );
};
