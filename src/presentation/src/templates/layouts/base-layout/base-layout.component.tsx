import { BaseHeadFragment } from "../../fragments/index.js";
import { FooterFragment } from "../../fragments/index.js";
import { HeaderFragment } from "../../fragments/index.js";
import type { BaseLayoutProps } from "./base-layout.interface.js";
import { SuccessMessage } from "./success-message/index.js";

export const BaseLayout: Component<BaseLayoutProps> = (props) => {
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
