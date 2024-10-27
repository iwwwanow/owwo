// TODO interfaces
type FullGridWrapContainerProps = {
  children: JSX.Element | Array<JSX.Element>;
  limit?: number;
};

type FullGridWrapContainerType = (
  props: FullGridWrapContainerProps,
) => JSX.Element;

export type { FullGridWrapContainerType };
