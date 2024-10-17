import { BaseLayout } from "@site-ui/base-layout";

import type { ErrorPageType } from "./error-page.interface";

const ErrorPage: ErrorPageType = () => {
  return (
    <BaseLayout>
      <div class="grid">Error</div>
    </BaseLayout>
  );
};

export { ErrorPage };
