let routes;

export default class Router {
  static get(route, cb) {
    routes.get.push({ route, cb });
  }
}
