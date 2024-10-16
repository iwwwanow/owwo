type BaseLayoutProps = {
  children: JSX.Element | Array<JSX.Element>;
};

type BaseLayoutType = (props: BaseLayoutProps) => JSX.Element;

export type { BaseLayoutType };
