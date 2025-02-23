import type { ClientDataType } from "@site/models";

export interface BaseLayoutProps {
  clientData?: ClientDataType;
  children: JSX.Element | Array<JSX.Element>;
}
