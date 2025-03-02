import { CssModule } from "../index.js";
import type { ResourceTitleProps } from "./resource-title.interface.js";
import Style from "./resource-title.module.css";

export const ResourceTitle: Component<ResourceTitleProps> = (props) => {
  const { title } = props;

  return (
    <>
      <h2 class="node-title">{title}</h2>
      <CssModule filepath={Style} />
    </>
  );
};
