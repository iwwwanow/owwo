import type { NodeDataType } from "@site/interfaces";

type HomePageProps = {
  users: Array<NodeDataType>;
};

type HomePageType = (props: HomePageProps) => JSX.Element;

export type { HomePageType };
