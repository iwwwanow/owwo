// TODO использовать для всех аттрибутов HTML-типы.

type TextInputProps = {
  id: string;
  name: string;
  type?: string;
  rows?: string;
  required?: boolean;
  placeholder?: string;
};

type TextInputType = (props: TextInputProps) => JSX.Element;

export type { TextInputType };
