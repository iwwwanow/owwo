import { BaseHeadFragment } from "@site-ui/base-head-fragment";
import { FooterFragment } from "@site-ui/footer-fragment";
import { HeaderFragment } from "@site-ui/header-fragment";

import type { BaseLayoutType } from "./base-layout.interface";
import { SuccessMessage } from "./success-message/index.js";

const BaseLayout: BaseLayoutType = (props) => {
  const { children } = props;
  const successMessage = props.clientData?.successMessage;

  return (
    <>
      <head>
        <BaseHeadFragment />
      </head>

      <body class="wrapper">
        <HeaderFragment />

        {successMessage && <SuccessMessage successMessage={successMessage} />}

        {children}

        <FooterFragment />
      </body>
    </>
  );
};

export { BaseLayout };
