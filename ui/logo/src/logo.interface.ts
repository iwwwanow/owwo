type LogoComponentProps = {
  href: string;
  className: string;
};

type LogoComponentType = (props: LogoComponentProps) => JSX.Element;

export type { LogoComponentType };
