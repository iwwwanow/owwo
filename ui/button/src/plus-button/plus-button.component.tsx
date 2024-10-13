import { PlusButtonSvg } from "@assets/svg";

import type { PlusButtonType } from "./plus-button.interface";

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
    <button class="button plus-button border">
      <PlusButtonSvg />
    </button>
  );
};

export { PlusButton };
