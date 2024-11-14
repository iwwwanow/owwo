import type { NodeDataType } from "@site/interfaces";
import type { ClientDataType } from "@site/interfaces";

type HomePageProps = {
  clientData: ClientDataType;
  users: Array<NodeDataType>;
};

type HomePageType = (props: HomePageProps) => JSX.Element;

export type { HomePageType };
