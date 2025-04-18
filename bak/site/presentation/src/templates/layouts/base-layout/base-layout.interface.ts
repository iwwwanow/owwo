import { ResourceDto } from "@site/domain";

export interface BaseLayoutProps {
  children: JSX.Element | Array<JSX.Element>;
  resourceData?: ResourceDto;
}
