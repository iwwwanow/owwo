type TextInputProps = {
  id: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
};

type TextInputType = (props: TextInputProps) => JSX.Element;

export type { TextInputType };
