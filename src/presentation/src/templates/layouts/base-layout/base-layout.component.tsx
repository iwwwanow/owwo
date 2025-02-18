import { BaseHeadFragment } from "../../fragments";
import { FooterFragment } from "../../fragments";
import { HeaderFragment } from "../../fragments";
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
