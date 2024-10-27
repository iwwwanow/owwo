import { BaseLayout } from "@site-ui/base-layout";

import { FullGridWrapContainer } from "@ui/full-grid-wrap-container";
import { NodeLink } from "@ui/node-link";

import type { HomePageType } from "./home-page.interface";

const HomePage: HomePageType = (props) => {
  const { users } = props;

  return (
    <BaseLayout>
      <FullGridWrapContainer>
        {users.map((user) => (
          <NodeLink node={user} isTitleNeeded={false} />
        ))}
      </FullGridWrapContainer>

      <div class="grid todo" style="color: red;">
        <ul>
          <li>реклама в пикселях</li>
          <li>чем ближе пиксель к левому краю, тем выше цена</li>
          <li>потомучто его увидят большее количество людей</li>
        </ul>
      </div>

      <div class="grid todo" style="color: red;">
        <ul>
          <li>реклама в блоках</li>
          <li>дать пользователю сделать адаптив под несколько разрешений</li>
          <li>сообщить о том, как будет выглядеть на nojs версии</li>
        </ul>
      </div>

      <div class="grid">
        TODO redirect to effectivnayarabota1 page OWWO
        <h1>owwo big-logo</h1>
      </div>
    </BaseLayout>
  );
};

export { HomePage };
