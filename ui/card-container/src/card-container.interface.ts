type CardContainerProps = {
  className: string;
  children: Array<JSX.Element>;
};

type CardContainerType = (props: CardContainerProps) => JSX.Element;

export type { CardContainerType };
