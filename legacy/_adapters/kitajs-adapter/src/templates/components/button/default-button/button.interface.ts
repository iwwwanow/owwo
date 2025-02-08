type ButtonProps = {
  url?: string;
  text: string;
};

type ButtonType = (props: ButtonProps) => JSX.Element;

export type { ButtonType };
