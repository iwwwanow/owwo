type LoginFormProps = {
  action: string;
  children: JSX.Element | Array<JSX.Element>;
};

// TODO make generic for functional components???
type LoginFormType = (props: LoginFormProps) => JSX.Element;

export type { LoginFormType };
