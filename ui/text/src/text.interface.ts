type TextProps = {
  text: {
    html: string;
  };
  className: string;
};

type TextType = (props: TextProps) => JSX.Element;

export type { TextType };
