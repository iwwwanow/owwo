import { CssModule } from "../../components/index.js";
import { Hr } from "../../components/index.js";
import { LogoComponent } from "../../components/index.js";
import type { HeaderFragmentProps } from "./header-fragment.interface.js";
import Style from "./header-fragment.module.css";
import StyleBottom from "./header-fragment_position_bottom.module.css";

const LOGIN_ROUTE_PATH = "/login";
const HOME_ROUTE_PATH = "/";

export const HeaderFragment: Component<HeaderFragmentProps> = (props) => {
  const { position } = props;

  const isBottomPosition = position === "bottom";

  const headerStyle = isBottomPosition ? "margin: auto 0 0;" : "";
  const headerAdditionalClass = isBottomPosition
    ? "header_position_bottom"
    : "";
  const headerClass = `grid header ${headerAdditionalClass}`;

  return (
    <>
      <header class={headerClass} style={headerStyle}>
        {isBottomPosition && <Hr text="header" />}
        <LogoComponent href={HOME_ROUTE_PATH} />
        <h5 class="header__editor-link">editor</h5>
        <h5 class="header__login-container">
          <a href={LOGIN_ROUTE_PATH}>login</a>
        </h5>
      </header>
      <CssModule filepath={Style} />
      <CssModule filepath={StyleBottom} />
    </>
  );
};
