type ImageProps = {
  // TODO image interface from glogals
  image: any;
  id: string;
  // TODO image variang from globals
  variant: string;
};

type ImageType = (props: ImageProps) => JSX.Element;

export type { ImageType };
