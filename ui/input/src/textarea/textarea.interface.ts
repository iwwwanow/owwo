type TextareaProps = {
  id: string;
  name: string;
  rows?: number;
  text?: string;
  required?: boolean;
  placeholder?: string;
};

type TextareaType = (props: TextareaProps) => JSX.Element;

export type { TextareaType };
