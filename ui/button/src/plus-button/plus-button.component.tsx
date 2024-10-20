import { PlusButtonSvg } from "@assets/svg";

import { CssModule } from "@ui/css-module";

import type { PlusButtonType } from "./plus-button.interface";
import Style from "./plus-button.style.css";

const PlusButton: PlusButtonType = (props) => {
  const { variant } = props;

  if (variant === "small") {
    return (
      <button class="border button plus-button plus-button_variant_small">
        <h3 class="plus-button__text_variant_small">+</h3>
      </button>
    );
  }

  return (
    <>
      <button class="button plus-button border">
        <PlusButtonSvg />
      </button>
      <CssModule filepath={Style} />
    </>
  );
};

export { PlusButton };
