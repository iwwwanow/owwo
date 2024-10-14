type FileInputProps = {
  id?: string;
  name?: string;
  accept?: string;
  required: false;
  imageSrc?: string;
};

type FileInputType = (props: FileInputProps) => JSX.Element;

export type { FileInputType };
