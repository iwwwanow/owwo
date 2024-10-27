import type { NodeContentType } from "@site/interfaces";

type AboutPageProps = {
  aboutPageContent: NodeContentType;
};

type AboutPageType = (props: AboutPageProps) => JSX.Element;

export type { AboutPageType };
