import { BaseLayout } from "@site-ui/base-layout";

import { FullGridWrapContainer } from "@ui/full-grid-wrap-container";
import { NodeLink } from "@ui/node-link";

import type { HomePageType } from "./home-page.interface";

const HomePage: HomePageType = (props) => {
  const { clientData } = props;
  const { users } = props;

  return (
    <BaseLayout clientData={clientData}>
      <FullGridWrapContainer>
        {users.map((user) => (
          <NodeLink node={user} isTitleNeeded={false} />
        ))}
      </FullGridWrapContainer>

      <div class="grid">
        <h1>owwo big-logo-effectivnayarabota1-test-page</h1>
      </div>
    </BaseLayout>
  );
};

export { HomePage };
