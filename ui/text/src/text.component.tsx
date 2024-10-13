import type { TextType } from "./text.interface";

const Text: TextType = (props) => {
  const { text, className = "" } = props;

  return <div class={`text ${className}`}>{text.html}</div>;
};

export { Text };
