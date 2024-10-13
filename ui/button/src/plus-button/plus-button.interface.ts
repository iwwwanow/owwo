type PlusButtonVariants = "small";

type PlusButtonProps = {
  variant?: PlusButtonVariants;
};

type PlusButtonType = (props: PlusButtonProps) => JSX.Element;

export type { PlusButtonType };
