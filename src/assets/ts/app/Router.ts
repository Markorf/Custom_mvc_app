interface IRoute {
  path: string;
  action: () => {};
}

export class Router {
  private static _routes: IRoute[] = [];

  public static register(path: string, action: () => any) {
    const foundRoute = this._routes.find(route => route.path === path);
    if (foundRoute) {
      throw new Error("Path " + path + " already exists!");
    }
    this._routes.push({ path, action });
  }

  private static _runAction() {
    const hash = location.hash.substr(1, location.hash.length);
    const selectedRoute = this._routes.find(route => route.path === hash);
    if (!selectedRoute) {
      throw new Error("Route not found");
    }
    selectedRoute.action();
  }

  public static init() {
    setTimeout(() => {
      this._runAction();
    }, 0);
    window.onhashchange = () => {
      this._runAction();
    };
  }
}

Router.init();
