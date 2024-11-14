import type { ClientDataType } from "@site/interfaces";

type BaseLayoutProps = {
  clientData: ClientDataType;
  children: JSX.Element | Array<JSX.Element>;
};

type BaseLayoutType = (props: BaseLayoutProps) => JSX.Element;

export type { BaseLayoutType };
