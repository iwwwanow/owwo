export interface TextInputProps {
  id: Exists<JSX.HtmlInputTag["id"]>;
  name: Exists<JSX.HtmlInputTag["name"]>;
  type?: JSX.HtmlInputTag["type"];
  required: JSX.HtmlInputTag["required"];
  placeholder: JSX.HtmlInputTag["placeholder"];
}
