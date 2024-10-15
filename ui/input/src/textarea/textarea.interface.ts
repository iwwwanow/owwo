type TextareaProps = {
  id: string;
  name: string;
  // TODO use html-prop types on all input components
  rows?: string | number;
  text?: string;
  required?: boolean;
  placeholder?: string;
};

type TextareaType = (props: TextareaProps) => JSX.Element;

export type { TextareaType };
