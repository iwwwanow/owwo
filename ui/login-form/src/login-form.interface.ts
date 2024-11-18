type LoginFormProps = {
  action: string;
  children: JSX.Element | Array<JSX.Element>;
};

type LoginFormType = (props: LoginFormProps) => JSX.Element;

export type { LoginFormType };
