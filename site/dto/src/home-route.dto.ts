import { t } from "elysia";

const homeRouteQueryDto = t.Optional(
  t.Object({
    "success-message": t.String(),
  }),
);

export const homeRouteDto = {
  query: homeRouteQueryDto,
};
