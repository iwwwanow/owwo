type DateComponentProps = {
  date: {
    last: Date;
    creation: Date;
  };
};

type DateComponentType = (props: DateComponentProps) => JSX.Element;

export type { DateComponentType };
