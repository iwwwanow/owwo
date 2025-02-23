import { BaseHeadFragment } from "../../fragments";
import { FooterFragment } from "../../fragments";
import { HeaderFragment } from "../../fragments";
import type { BaseLayoutProps } from "./base-layout.interface";
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
