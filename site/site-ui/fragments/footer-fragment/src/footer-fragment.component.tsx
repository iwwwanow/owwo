import { CssModule } from "@ui/css-module";
import { Hr } from "@ui/hr";

import Style from "./footer-fragment.style.css";

const FooterFragment = () => {
  return (
    <>
      <footer class="grid footer">
        <Hr text="footer" />

        <h5>
          <a href="/about">о проекте</a>
        </h5>
      </footer>

      <CssModule filepath={Style} />
    </>
  );
};

export { FooterFragment };
