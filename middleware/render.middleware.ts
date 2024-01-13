import { eta } from "../views/eta.js";

interface Props {}

// TODO Назначь возвращаемое значение. Обязательно очищенный HTML
export default async function render(page: string, props: Props) {
  const html = eta.render(page, {});
  return html;
}
