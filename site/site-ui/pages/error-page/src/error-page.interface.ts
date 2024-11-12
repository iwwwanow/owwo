type ErrorPageProps = {
  errorMessage: string;
  errorCode?: number;
};

type ErrorPageType = (props: ErrorPageProps) => JSX.Element;

export type { ErrorPageType };
