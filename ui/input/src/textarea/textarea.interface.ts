type TextareaProps = {
  id: Exists<JSX.HtmlTextAreaTag["id"]>;
  name: Exists<JSX.HtmlTextAreaTag["name"]>;
  rows: JSX.HtmlTextAreaTag["rows"];
  text: JSX.HtmlTextAreaTag["children"];
  required: JSX.HtmlTextAreaTag["required"];
  placeholder: JSX.HtmlTextAreaTag["placeholder"];
};

type TextareaType = (props: TextareaProps) => JSX.Element;

export type { TextareaType };
