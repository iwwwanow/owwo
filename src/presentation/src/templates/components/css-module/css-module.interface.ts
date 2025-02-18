type CssModuleProps = {
  filepath: string;
};

type CssModuleType = (props: CssModuleProps) => JSX.Element;

export type { CssModuleType };
