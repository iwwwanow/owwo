export interface FileInputProps {
  id: Exists<JSX.HtmlInputTag["id"]>;
  name: Exists<JSX.HtmlInputTag["name"]>;
  accept: Exists<JSX.HtmlInputTag["accept"]>;
  required?: JSX.HtmlInputTag["required"];
  imageSrc?: string;
}
