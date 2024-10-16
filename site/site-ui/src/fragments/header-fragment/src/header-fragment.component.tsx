import { Hr } from "@ui/hr";
import { LogoComponent } from "@ui/logo";

import type { HeaderFragmentType } from "./header-fragment.interface";

const HeaderFragment: HeaderFragmentType = (props) => {
  const { isBottomPosition = false } = props;

  return (
    <>
      <header class="grid" style={isBottomPosition ? "margin: auto 0 0;" : ""}>
        {isBottomPosition && <Hr text="header" />}

        <LogoComponent />
        <h5 class="header__editor-link">editor</h5>
        <h5 class="header__login-container">
          <a href="/login">login</a>
        </h5>
      </header>
    </>
  );
};

export { HeaderFragment };
