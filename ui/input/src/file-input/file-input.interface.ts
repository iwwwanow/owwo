// TODO нужно пересмотреть необходимые пропсы для всех инпутов.
// как они обычно связываются с формой? должны быть необходимые атрибуты

type FileInputProps = {
  id?: string;
  name?: string;
  accept?: string;
  required?: boolean;
  imageSrc?: string;
};

type FileInputType = (props: FileInputProps) => JSX.Element;

export type { FileInputType };
