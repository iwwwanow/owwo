type HeaderPositionType = "bottom";

type HeaderFragmentProps = {
  position?: HeaderPositionType;
};

type HeaderFragmentType = (props: HeaderFragmentProps) => JSX.Element;

export type { HeaderFragmentType };
