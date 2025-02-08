import { ABOUT_ROUTE_PATH } from "@site/constants";

import { CssModule } from "@ui/css-module";
import { Hr } from "@ui/hr";

import Style from "./footer-fragment.module.css";

const FooterFragment = () => {
  return (
    <>
      <footer class="grid footer">
        <Hr text="footer" />

        <h5>
          <a href={ABOUT_ROUTE_PATH}>о проекте</a>
        </h5>
      </footer>

      <CssModule filepath={Style} />
    </>
  );
};

export { FooterFragment };
