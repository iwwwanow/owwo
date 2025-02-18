import { PlusButtonSvg } from "../../../svg";
import { CssModule } from "../../css-module";
import type { PlusButtonType } from "./plus-button.interface";
import Style from "./plus-button.module.css";

export const PlusButton: PlusButtonType = (props) => {
  const { variant } = props;

  if (variant === "small") {
    return (
      <>
        <button class="border button plus-button plus-button_variant_small">
          <h3 class="plus-button__text_variant_small">+</h3>
        </button>
        <CssModule filepath={Style} />
      </>
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
