import { CssModule } from "../";
import Style from "./node-title.module.css";
import type { ResourceTitleProps } from "./resource-title.interface";

export const ResourceTitle: Component<ResourceTitleProps> = (props) => {
  const { title } = props;

  return (
    <>
      <h2 class="node-title">{title}</h2>
      <CssModule filepath={Style} />
    </>
  );
};
