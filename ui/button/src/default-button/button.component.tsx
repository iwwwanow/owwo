import { CssModule } from "@ui/css-module";

import type { ButtonType } from "./button.interface";
import Style from "./button.style.css";

const Button: ButtonType = (props) => {
  const { url, text } = props;

  if (url) {
    return (
      <a href={url} class="button__url-container">
        <button class="button button_url border">
          <p>{text}</p>
        </button>
      </a>
    );
  }

  return (
    <>
      <button class="button border">
        <p>{text}</p>
      </button>
      <CssModule filepath={Style} />
    </>
  );
};

export { Button };
