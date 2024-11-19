type TextInputProps = {
  id: Exists<JSX.HtmlInputTag["id"]>;
  name: Exists<JSX.HtmlInputTag["name"]>;
  type: JSX.HtmlInputTag["type"];
  required: JSX.HtmlInputTag["required"];
  placeholder: JSX.HtmlInputTag["placeholder"];
};

type TextInputType = (props: TextInputProps) => JSX.Element;

export type { TextInputType };
