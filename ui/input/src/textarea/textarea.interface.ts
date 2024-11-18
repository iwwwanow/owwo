// TODO move it interface to global
// global types
type NonNullable<T> = Exclude<T, null | undefined>;

type TextareaProps = {
	// TODO rename on all html -attr props like this: (use css properties)
  id: NonNullable<JSX.HtmlTextAreaTag["id"]>;
  name: NonNullable<JSX.HtmlTextAreaTag["name"]>;
  rows: JSX.HtmlTextAreaTag["rows"];
  text?: string;
  required: ;
  placeholder: JSX.HtmlTextAreaTag["placeholder"];
};

type TextareaType = (props: TextareaProps) => JSX.Element;

export type { TextareaType };
