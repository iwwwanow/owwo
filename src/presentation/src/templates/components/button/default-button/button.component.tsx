import { CssModule } from "../../index.js";
import type { ButtonProps } from "./button.interface.js";
import Style from "./button.module.css";

export const Button: Component<ButtonProps> = (props) => {
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
