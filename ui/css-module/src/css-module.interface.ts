type CssModuleProps = {
  filepath: string;
};

type CssModuleType = (props: CssModuleProps) => JSX.Element | null;

export type { CssModuleType };
