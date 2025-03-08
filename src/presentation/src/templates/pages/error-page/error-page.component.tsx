import { CssModule } from "../../components/index.js";
import { BaseLayout } from "../../layouts/index.js";
import type { ErrorPageProps } from "./error-page.interfaces.js";
import Style from "./error-page.module.css";

const ErrorContent = ({ error }) => {
  return (
    <>
      <h1 style={{ color: "var(--RED)" }}>{error.code}</h1>
      <h2 style={{ color: "var(--BLUE)" }}>{error.message}</h2>
    </>
  );
};

export const ErrorPage: Component<ErrorPageProps> = (props) => {
  const { error } = props;

  return (
    <>
      <BaseLayout>
        <div class="grid node-wrapper">
          <ErrorContent error={error} />
        </div>
      </BaseLayout>
      <CssModule filepath={Style} />
    </>
  );
};
