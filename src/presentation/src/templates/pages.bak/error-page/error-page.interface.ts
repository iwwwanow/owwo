type ErrorPageProps = {
  errorMessage: string;
  errorCode?: string | number;
};

type ErrorPageType = (props: ErrorPageProps) => JSX.Element;

export type { ErrorPageType };
