import { BaseHeadFragment } from "@site-ui/base-head-fragment";
import { FooterFragment } from "@site-ui/footer-fragment";
import { HeaderFragment } from "@site-ui/header-fragment";

import { Hr } from "@ui/hr";

import type { BaseLayoutType } from "./base-layout.interface";

const BaseLayout: BaseLayoutType = (props) => {
  const { clientData } = props;
  const { children } = props;

  const { successMessage } = clientData;

  return (
    <>
      <head>
        <BaseHeadFragment />
      </head>

      <body class="wrapper">
        <HeaderFragment />

        <div class="grid">
          <Hr text="success-message" color="var(--GREEN)" />
          <p>{successMessage}</p>
          <Hr color="var(--GREEN)" />
        </div>

        {children}

        <FooterFragment />
      </body>
    </>
  );
};

export { BaseLayout };
