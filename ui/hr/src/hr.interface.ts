type HrProps = {
  text?: string;
  color: string;
};

type HrType = (props: HrProps) => JSX.Element;

export type { HrType };
