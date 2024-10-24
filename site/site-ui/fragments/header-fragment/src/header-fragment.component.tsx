import { CssModule } from "@ui/css-module";
import { Hr } from "@ui/hr";
import { LogoComponent } from "@ui/logo";

import type { HeaderFragmentType } from "./header-fragment.interface";
import Style from "./header-fragment.style.css";

const HeaderFragment: HeaderFragmentType = (props) => {
  const { position } = props;

  const isBottomPosition = position === "bottom";
  const headerStyle = isBottomPosition ? "margin: auto 0 0;" : "";

  return (
    <>
      <header class="grid" style={headerStyle}>
        {isBottomPosition && <Hr text="header" />}

        <LogoComponent />
        <h5 class="header__editor-link">editor</h5>
        <h5 class="header__login-container">
          <a href="/login">login</a>
        </h5>
      </header>
      <CssModule filepath={Style} />
    </>
  );
};

export { HeaderFragment };
