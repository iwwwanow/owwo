interface Route {
  route: string;
  cb: any;
}

interface Routes {
  get: Array<Route>;
  post: Array<Route>;
  put: Array<Route>;
  delete: Array<Route>;
}

let routes: Routes;

export default class Router {
  static get(route: string, cb: any) {
    routes.get.push({ route, cb });
  }
}
